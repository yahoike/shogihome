import { Color, handPieceTypes, ImmutableHand, Piece, reverseColor, Square } from "tsshogi";
import { Config } from "./config";
import { PieceStandImageType } from "@/common/settings/app";
import { commonParams, compactHandParams, handParams, portraitHandParams } from "./params";
import { Hand, HandNumber, HandPiece, HandPointer } from "./layout";

const pieceStandBackgroundColorMap = {
  [PieceStandImageType.STANDARD]: "#8b4513",
  [PieceStandImageType.GREEN]: "#527a52",
  [PieceStandImageType.CHERRY_BLOSSOM]: "#e8a9a9",
  [PieceStandImageType.AUTUMN]: "#792509",
  [PieceStandImageType.SNOW]: "#9c98b7",
  [PieceStandImageType.DARK_GREEN]: "#465e5e",
  [PieceStandImageType.DARK]: "#333333",
  [PieceStandImageType.CUSTOM_IMAGE]: "rgba(0, 0, 0, 0)",
};

export class HandLayoutBuilder {
  constructor(
    private config: Config,
    private ratio: number,
  ) {}

  build(hand: ImmutableHand, color: Color, pointer?: Square | Piece | null): Hand {
    const displayColor = this.config.flip ? reverseColor(color) : color;
    const bgColor = pieceStandBackgroundColorMap[this.config.pieceStandImageType];
    const standWidth = handParams.width * this.ratio;
    const standHeight = handParams.height * this.ratio;
    const backgroundStyle = {
      left: "0px",
      top: "0px",
      width: standWidth + "px",
      height: standHeight + "px",
      "background-color": bgColor,
      opacity: this.config.pieceStandImageOpacity.toString(),
    };
    const pieces: HandPiece[] = [];
    const pointers: HandPointer[] = [];
    handPieceTypes.forEach((type) => {
      const count = hand.count(type);
      const rule = handParams[displayColor][type];
      const areaWidth = (handParams.width / 2) * rule.width * this.ratio;
      const areaHeight = (handParams.height / 4) * this.ratio;
      const areaX = areaWidth * rule.column;
      const areaY = areaHeight * rule.row;
      const pieceWidth = commonParams.piece.width * this.ratio;
      const pieceHeight = commonParams.piece.height * this.ratio;
      const padding = Math.max(areaWidth - pieceWidth * count, 0) / (count * 2);
      const dx = (areaWidth - pieceWidth - padding * 2) / Math.max(count - 1, 1);
      for (let i = count - 1; i >= 0; i -= 1) {
        const id = type + i;
        const imagePath = this.config.pieceImages[displayColor][type];
        const x = areaX + padding + dx * i;
        const y = areaY;
        pieces.push({
          id,
          imagePath,
          style: {
            left: x + "px",
            top: y + "px",
            width: pieceWidth + "px",
            height: pieceHeight + "px",
          },
        });
      }
      const id = type;
      const style = {
        left: areaX + "px",
        top: areaY + "px",
        width: areaWidth + "px",
        height: areaHeight + "px",
      };
      let backgroundStyle = style;
      if (pointer && pointer instanceof Piece && pointer.color === color && pointer.type === type) {
        backgroundStyle = {
          ...backgroundStyle,
          ...handParams.highlight.selected,
        };
      }
      pointers.push({
        id,
        type,
        style,
        backgroundStyle,
      });
    });
    return {
      textureImagePath: this.config.pieceStandImage,
      backgroundStyle,
      pieces,
      pointers,
    };
  }
}

export class CompactHandLayoutBuilder {
  constructor(
    private config: Config,
    private ratio: number,
  ) {}

  build(hand: ImmutableHand, color: Color, pointer?: Square | Piece | null): Hand {
    const displayColor = this.config.flip ? reverseColor(color) : color;
    const bgColor = pieceStandBackgroundColorMap[this.config.pieceStandImageType];
    const standWidth = compactHandParams.width * this.ratio;
    const standHeight = compactHandParams.height * this.ratio;
    const backgroundStyle = {
      left: "0px",
      top: "0px",
      width: standWidth + "px",
      height: standHeight + "px",
      "background-color": bgColor,
      opacity: this.config.pieceStandImageOpacity.toString(),
    };
    const pieces: HandPiece[] = [];
    const numbers: HandNumber[] = [];
    const pointers: HandPointer[] = [];
    for (let i = handPieceTypes.length - 1; i >= 0; i -= 1) {
      const type = handPieceTypes[i];
      if (!hand.count(type)) {
        continue;
      }
      const index =
        color === Color.BLACK ? pieces.length : handPieceTypes.length - pieces.length - 1;
      const id = type;
      const imagePath = this.config.pieceImages[displayColor][type];
      const top = compactHandParams.squareHeight * index * this.ratio;
      pieces.push({
        id,
        imagePath,
        style: {
          left: compactHandParams.leftPiecePadding * this.ratio + "px",
          top: top + compactHandParams.topPiecePadding * this.ratio + "px",
          width: commonParams.piece.width * this.ratio + "px",
          height: commonParams.piece.height * this.ratio + "px",
        },
      });
      if (hand.count(type) > 1) {
        const shadow = 2 * this.ratio;
        const blur = 2 * this.ratio;
        numbers.push({
          id: type,
          character: hand.count(type).toString(),
          style: {
            left: compactHandParams.squareWidth * 0.6 * this.ratio + "px",
            top: top + compactHandParams.squareHeight * 0.5 * this.ratio + "px",
            "font-size": 40 * this.ratio + "px",
            "font-weight": "900",
            color: "#fff",
            "text-shadow": `${shadow}px ${shadow}px ${blur}px #000, ${-shadow}px ${shadow}px ${blur}px #000, ${shadow}px ${-shadow}px ${blur}px #000, ${-shadow}px ${-shadow}px ${blur}px #000`,
          },
        });
      }
      const squareStyle = {
        left: "0px",
        top: top + "px",
        width: compactHandParams.squareWidth * this.ratio + "px",
        height: compactHandParams.squareHeight * this.ratio + "px",
      };
      let backgroundStyle = squareStyle;
      if (pointer && pointer instanceof Piece && pointer.color === color && pointer.type === type) {
        backgroundStyle = {
          ...backgroundStyle,
          ...portraitHandParams.highlight.selected,
        };
      }
      pointers.push({
        id,
        type,
        style: squareStyle,
        backgroundStyle,
      });
    }
    return {
      textureImagePath: this.config.pieceStandImage,
      backgroundStyle,
      pieces,
      numbers,
      pointers,
    };
  }
}

export class PortraitHandLayoutBuilder {
  constructor(
    private config: Config,
    private ratio: number,
  ) {}

  build(hand: ImmutableHand, color: Color, pointer?: Square | Piece | null): Hand {
    const displayColor = this.config.flip ? reverseColor(color) : color;
    const bgColor = pieceStandBackgroundColorMap[this.config.pieceStandImageType];
    const standWidth = portraitHandParams.width * this.ratio;
    const standHeight = portraitHandParams.height * this.ratio;
    const backgroundStyle = {
      left: "0px",
      top: "0px",
      width: standWidth + "px",
      height: standHeight + "px",
      "background-color": bgColor,
      opacity: this.config.pieceStandImageOpacity.toString(),
    };
    const pieces: HandPiece[] = [];
    const numbers: HandNumber[] = [];
    const pointers: HandPointer[] = [];
    handPieceTypes.forEach((type) => {
      if (!hand.count(type)) {
        return;
      }
      const index =
        color === Color.BLACK ? pieces.length : handPieceTypes.length - pieces.length - 1;
      const id = type;
      const imagePath = this.config.pieceImages[displayColor][type];
      const left = portraitHandParams.squareWidth * index * this.ratio;
      pieces.push({
        id,
        imagePath,
        style: {
          left: left + portraitHandParams.leftPiecePadding * this.ratio + "px",
          top: portraitHandParams.topPiecePadding * this.ratio + "px",
          width: commonParams.piece.width * this.ratio + "px",
          height: commonParams.piece.height * this.ratio + "px",
        },
      });
      if (hand.count(type) > 1) {
        const shadow = 2 * this.ratio;
        const blur = 2 * this.ratio;
        numbers.push({
          id: type,
          character: hand.count(type).toString(),
          style: {
            left: left + portraitHandParams.squareWidth * 0.6 * this.ratio + "px",
            top: portraitHandParams.squareHeight * 0.5 * this.ratio + "px",
            "font-size": 40 * this.ratio + "px",
            "font-weight": "900",
            color: "#fff",
            "text-shadow": `${shadow}px ${shadow}px ${blur}px #000, ${-shadow}px ${shadow}px ${blur}px #000, ${shadow}px ${-shadow}px ${blur}px #000, ${-shadow}px ${-shadow}px ${blur}px #000`,
          },
        });
      }
      const squareStyle = {
        left: left + "px",
        top: "0px",
        width: portraitHandParams.squareWidth * this.ratio + "px",
        height: portraitHandParams.squareHeight * this.ratio + "px",
      };
      let backgroundStyle = squareStyle;
      if (pointer && pointer instanceof Piece && pointer.color === color && pointer.type === type) {
        backgroundStyle = {
          ...backgroundStyle,
          ...portraitHandParams.highlight.selected,
        };
      }
      pointers.push({
        id,
        type,
        style: squareStyle,
        backgroundStyle,
      });
    });
    return {
      textureImagePath: this.config.pieceStandImage,
      backgroundStyle,
      pieces,
      numbers,
      pointers,
    };
  }
}
