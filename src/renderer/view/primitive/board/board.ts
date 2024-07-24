import { BoardImageType, BoardLabelType } from "@/common/settings/app";
import { Config } from "./config";
import { boardParams, commonParams } from "./params";
import { Color, ImmutableBoard, Move, Piece, PieceType, reverseColor, Square } from "tsshogi";
import { Board, BoardBackground, BoardLabel, BoardPiece, BoardSquare, Promotion } from "./layout";

const boardBackgroundColorMap = {
  [BoardImageType.LIGHT]: "rgba(0, 0, 0, 0)",
  [BoardImageType.WARM]: "rgba(0, 0, 0, 0)",
  [BoardImageType.RESIN]: "#d69b00",
  [BoardImageType.RESIN2]: "#efbf63",
  [BoardImageType.RESIN3]: "#ad7624",
  [BoardImageType.GREEN]: "#598459",
  [BoardImageType.CHERRY_BLOSSOM]: "#ecb6b6",
  [BoardImageType.AUTUMN]: "#d09f51",
  [BoardImageType.SNOW]: "#c3c0d3",
  [BoardImageType.DARK_GREEN]: "#465e5e",
  [BoardImageType.DARK]: "#333333",
  [BoardImageType.CUSTOM_IMAGE]: "rgba(0, 0, 0, 0)",
};

const rankCharMap: { [n: number]: string } = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
};

export class BoardLayoutBuilder {
  constructor(
    private config: Config,
    private ratio: number,
  ) {}

  private get background(): BoardBackground {
    const bgColor = boardBackgroundColorMap[this.config.boardImageType];
    const style = {
      "background-color": bgColor,
      left: "0px",
      top: "0px",
      height: boardParams.height * this.ratio + "px",
      width: boardParams.width * this.ratio + "px",
    };
    return {
      gridImagePath: this.config.boardGridImage,
      textureImagePath: this.config.boardTextureImage,
      style,
    };
  }

  private get labels(): BoardLabel[] {
    if (this.config.boardLabelType == BoardLabelType.NONE) {
      return [];
    }
    const labels: BoardLabel[] = [];
    const fontSize = boardParams.label.fontSize * this.ratio;
    const shadow = fontSize * 0.1;
    const commonStyle = {
      color: "black",
      "font-size": fontSize + "px",
      "font-weight": "bold",
      "text-shadow": `${shadow}px ${shadow}px  ${shadow}px white`,
    };
    for (let rank = 1; rank <= 9; rank++) {
      const x =
        boardParams.leftPiecePadding * 0.5 * this.ratio * (this.config.flip ? 1 : -1) -
        fontSize * 0.5 +
        (this.config.flip ? 0 : boardParams.width) * this.ratio;
      const y =
        (boardParams.topSquarePadding +
          ((this.config.flip ? 10 - rank : rank) - 0.5) * boardParams.squareHeight) *
          this.ratio -
        fontSize * 0.5;
      labels.push({
        id: "rank" + rank,
        character: rankCharMap[rank],
        style: {
          left: x + "px",
          top: y + "px",
          ...commonStyle,
        },
      });
    }
    for (let file = 1; file <= 9; file++) {
      const x =
        (boardParams.leftPiecePadding +
          (9.5 - (this.config.flip ? 10 - file : file)) * boardParams.squareWidth) *
          this.ratio -
        fontSize * 0.5;
      const y =
        (this.config.flip ? boardParams.height : 0) * this.ratio +
        boardParams.topSquarePadding * 0.7 * this.ratio * (this.config.flip ? -1 : 1) -
        fontSize * 0.6;
      labels.push({
        id: "file" + file,
        character: String(file),
        style: {
          left: x + "px",
          top: y + "px",
          ...commonStyle,
        },
      });
    }
    return labels;
  }

  private getPieces(board: ImmutableBoard): BoardPiece[] {
    const pieces: BoardPiece[] = [];
    board.listNonEmptySquares().forEach((square) => {
      const piece = board.at(square) as Piece;
      const id = piece.id + square.index;
      const displayColor = this.config.flip ? reverseColor(piece.color) : piece.color;
      const pieceType =
        piece.type == PieceType.KING && piece.color == Color.BLACK ? "king2" : piece.type;
      const imagePath = this.config.pieceImages[displayColor][pieceType];
      const x =
        (boardParams.leftPiecePadding +
          boardParams.squareWidth * (this.config.flip ? square.opposite : square).x) *
        this.ratio;
      const y =
        (boardParams.topPiecePadding +
          boardParams.squareHeight * (this.config.flip ? square.opposite : square).y) *
        this.ratio;
      const width = commonParams.piece.width * this.ratio;
      const height = commonParams.piece.height * this.ratio;
      pieces.push({
        id,
        imagePath,
        style: {
          left: x + "px",
          top: y + "px",
          width: width + "px",
          height: height + "px",
        },
      });
    });
    return pieces;
  }

  private getSquares(lastMove?: Move | null, pointer?: Square | Piece | null): BoardSquare[] {
    const squares: BoardSquare[] = [];
    Square.all.forEach((square) => {
      const id = square.index;
      const { file } = square;
      const { rank } = square;
      const x =
        (boardParams.leftSquarePadding +
          boardParams.squareWidth * (this.config.flip ? square.opposite : square).x) *
        this.ratio;
      const y =
        (boardParams.topSquarePadding +
          boardParams.squareHeight * (this.config.flip ? square.opposite : square).y) *
        this.ratio;
      const width = boardParams.squareWidth * this.ratio;
      const height = boardParams.squareHeight * this.ratio;
      const style = {
        left: x + "px",
        top: y + "px",
        width: width + "px",
        height: height + "px",
      };
      let backgroundStyle = style;
      if (lastMove && square.equals(lastMove.to)) {
        backgroundStyle = {
          ...backgroundStyle,
          ...boardParams.highlight.lastMoveTo,
        };
      }
      if (lastMove && lastMove.from instanceof Square && square.equals(lastMove.from)) {
        backgroundStyle = {
          ...backgroundStyle,
          ...boardParams.highlight.lastMoveFrom,
        };
      }
      if (pointer instanceof Square && pointer.equals(square)) {
        backgroundStyle = {
          ...backgroundStyle,
          ...boardParams.highlight.selected,
        };
      }
      squares.push({
        id,
        file,
        rank,
        style,
        backgroundStyle,
      });
    });
    return squares;
  }

  private getPromotion(move?: Move | null): Promotion | null {
    if (!move) {
      return null;
    }
    const color = this.config.flip ? reverseColor(move.color) : move.color;
    const square = this.config.flip ? move.to.opposite : move.to;
    const piece = new Piece(color, move.pieceType);
    const promoted = piece.promoted();
    const notPromoted = piece.unpromoted();
    const promoteImagePath = this.config.pieceImages[color][promoted.type];
    const notPromoteImagePath = this.config.pieceImages[color][notPromoted.type];
    const x =
      (boardParams.leftSquarePadding +
        boardParams.squareWidth * (square.x === 0 ? 0 : square.x === 8 ? 7 : square.x - 0.5)) *
      this.ratio;
    const y = (boardParams.topSquarePadding + boardParams.squareHeight * square.y) * this.ratio;
    const width = boardParams.squareWidth * 2 * this.ratio;
    const height = boardParams.squareHeight * this.ratio;
    const style = {
      left: x + "px",
      top: y + "px",
      width: width + "px",
      height: height + "px",
      "font-size": height / 4 + "px",
    };
    return {
      promoteImagePath,
      notPromoteImagePath,
      style,
    };
  }

  build(
    board: ImmutableBoard,
    lastMove?: Move | null,
    pointer?: Square | Piece | null,
    reservedMoveForPromotion?: Move | null,
  ): Board {
    return {
      background: this.background,
      labels: this.labels,
      pieces: this.getPieces(board),
      squares: this.getSquares(lastMove, pointer),
      promotion: this.getPromotion(reservedMoveForPromotion),
    };
  }
}
