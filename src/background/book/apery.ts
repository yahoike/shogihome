import fs from "node:fs";
import events from "node:events";
import { Readable, Writable } from "node:stream";
import { AperyBook, BookEntry, BookMove, IDX_COUNT, IDX_SCORE, IDX_USI } from "./types";
import { fromAperyMove, toAperyMove } from "./apery_move";
import { hash } from "./apery_zobrist";

// Apery 定跡フォーマット
//
// BookEntry:
//   1. 64bits: Hash Key
//   2. 16bits: Move
//   3. 16bits: Count
//   4. 32bits: Score

function encodeEntry(hash: string, move: BookMove): Buffer {
  const binary = Buffer.alloc(16);
  binary.write(hash, 0, 8, "hex");
  const aperyMove = toAperyMove(move[IDX_USI]);
  binary.writeUInt16LE(aperyMove, 8);
  binary.writeUInt16LE(move[IDX_COUNT] || 0, 10);
  binary.writeInt32LE(move[IDX_SCORE] || 0, 12);
  return binary;
}

function decodeEntry(binary: Buffer): { hash: string; bookMove: BookMove } {
  const hash = binary.subarray(0, 8).toString("hex");
  const move = binary.subarray(8, 10).readUInt16LE();
  const count = binary.subarray(10, 12).readUInt16LE();
  const score = binary.subarray(12, 16).readInt32LE();
  const usi = fromAperyMove(move);
  return {
    hash,
    bookMove: [usi, undefined, score, undefined, count, ""],
  };
}

export async function loadAperyBook(input: Readable): Promise<AperyBook> {
  const entries: { [hash: string]: BookEntry } = {};
  let entryCount = 0;
  let duplicateCount = 0;

  let leftover = Buffer.alloc(0) as Buffer<ArrayBufferLike>;
  input.on("data", (chunk: Buffer) => {
    chunk = Buffer.concat([leftover, chunk]);
    let offset = 0;
    while (offset + 16 <= chunk.length) {
      const { hash, bookMove } = decodeEntry(chunk.subarray(offset, offset + 16));
      const entry = entries[hash];
      if (entry) {
        if (entry.moves.some((m) => m[IDX_USI] === bookMove[IDX_USI])) {
          duplicateCount++;
        } else {
          entry.moves.push(bookMove);
        }
      } else {
        entries[hash] = {
          comment: "",
          moves: [bookMove],
          minPly: 0,
        };
        entryCount++;
      }

      offset += 16;
    }
    leftover = chunk.subarray(offset);
  });

  await events.once(input, "end");
  return { format: "apery", aperyEntries: entries, entryCount, duplicateCount };
}

function compareHash(a: string, b: string): number {
  for (let i = 14; i >= 0; i -= 2) {
    const aByte = a.slice(i, i + 2);
    const bByte = b.slice(i, i + 2);
    if (aByte < bByte) {
      return -1;
    } else if (aByte > bByte) {
      return 1;
    }
  }
  return 0;
}

async function binarySearch(
  key: string,
  file: fs.promises.FileHandle,
  size: number,
): Promise<number> {
  const buffer = Buffer.alloc(8);
  let begin = 0;
  let end = size;
  while (begin < end) {
    // 範囲の中央を読み込む
    const mid = Math.floor((begin + end) / 2);
    for (let offset = mid - (mid % 16); offset >= begin; offset -= 16) {
      await file.read(buffer, 0, 8, offset);
      const comp = compareHash(key, buffer.toString("hex"));
      if (comp < 0) {
        end = mid;
        break;
      } else if (comp > 0) {
        begin = offset + 16;
        break;
      } else if (offset === begin) {
        return offset;
      }
    }
  }
  return -1;
}

export async function searchAperyBookMovesOnTheFly(
  sfen: string,
  file: fs.promises.FileHandle,
  size: number,
): Promise<BookMove[]> {
  const key = hash(sfen);
  let offset = await binarySearch(key, file, size);
  if (offset < 0) {
    return [];
  }

  const bookMoves: BookMove[] = [];
  for (; offset < size; offset += 16) {
    const buffer = Buffer.alloc(16);
    await file.read(buffer, 0, 16, offset);
    if (buffer.subarray(0, 8).toString("hex") !== key) {
      break;
    }
    bookMoves.push(decodeEntry(buffer).bookMove);
  }
  return bookMoves;
}

export async function storeAperyBook(book: AperyBook, output: Writable): Promise<void> {
  for (const key of Object.keys(book.aperyEntries).sort((a, b) => compareHash(a, b))) {
    const entry = book.aperyEntries[key];
    for (const move of entry.moves) {
      output.write(encodeEntry(key, move));
    }
  }
  output.end();
  await events.once(output, "finish");
}
