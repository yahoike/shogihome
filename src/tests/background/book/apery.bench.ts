import path from "node:path";
import events from "node:events";
import fs from "node:fs";
import { getTempPathForTesting } from "@/background/proc/env";
import { bench } from "vitest";
import { loadAperyBook } from "@/background/book/apery";

const tmpdir = path.join(getTempPathForTesting(), "book");

// 16Bytes * 5 * 125,000 = 10MBytes のデータを作成
const entryCounts = 125000;
const book10mPath = path.join(tmpdir, "apery-10m.bin");

describe("background/book/apery", async () => {
  fs.mkdirSync(tmpdir);
  const file = fs.createWriteStream(book10mPath);
  try {
    const moves = [0x1c39, 0x15a1, 0x0e14, 0x122e, 0x2143];
    for (let k = 0; k < entryCounts; k++) {
      const key = Buffer.alloc(8);
      key.writeUint32LE(k);
      key.writeUint32LE(0, 4);
      for (const move of moves) {
        const entry = Buffer.alloc(8);
        entry.writeUint16LE(move);
        entry.writeUint16LE(100, 2);
        entry.writeUint32LE(123, 4);
        file.write(key);
        file.write(entry);
      }
    }
  } finally {
    file.close();
  }
  await events.once(file, "finish");

  bench("loadAperyBook", async () => {
    const file = fs.createReadStream(book10mPath);
    try {
      const book = await loadAperyBook(file);
      expect(book.aperyEntries["0000000000000000"]).not.toBeUndefined();
    } finally {
      file.close();
    }
  });
});
