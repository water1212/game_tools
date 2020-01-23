import * as PIXI from 'pixi.js';
import { Vector } from '../math/vector';

export class PixiPrimitives {
  static pixiHollowSquare(pixiRenderer: PIXI.Renderer, width: number, height: number, padding: number) : PIXI.RenderTexture {
      let hollowCell = new PIXI.Graphics();
      hollowCell.lineStyle(1, 0x000000, .6);
      hollowCell.drawRect(0, 0, width - padding, height - padding);
      return pixiRenderer.generateTexture(hollowCell, 1, 1);
  }

  static pixiSolidSquare(pixiRenderer: PIXI.Renderer, width: number, height: number, padding: number) : PIXI.RenderTexture {
    let solidCell = new PIXI.Graphics();
    solidCell.beginFill(0x000000, .4);
    solidCell.drawRect(0, 0, width - padding, height - padding);
    solidCell.endFill();
    return pixiRenderer.generateTexture(solidCell, 1, 1);
  }

  static pixiLine(start: Vector, end: Vector, width?: number, color?: number, alpha?: number) : PIXI.Graphics {

    let lineWidth = width ? width : 1;
    let lineAlpha = alpha ? alpha : 1;
    let lineColor = color ? color : 0x000000;

    let line = new PIXI.Graphics();
    line.lineStyle(lineWidth, lineColor, lineAlpha);
    line.moveTo(start.x, start.y);
    line.lineTo(end.x, end.y);
    return line;
  }
}