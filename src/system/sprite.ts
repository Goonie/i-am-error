import { SpriteData } from '../types/sprite-data';

class Sprite {
  private data: SpriteData;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(data: SpriteData) {
    this.data = data;

    this.canvas = document.createElement('canvas') as HTMLCanvasElement;
    this.canvas.width = this.data.width;
    this.canvas.height = this.data.height;

    this.context = this.canvas.getContext('2d');

    for (let y = 0; y < this.data.height; y++) {
      for (let x = 0; x < this.data.width; x++) {
        if (this.data.imageData[y][x]) {
          this.context.fillStyle = this.data.palette[this.data.imageData[y][x]];
          this.context.fillRect(x, y, 1, 1);
        }
      }
    }
  }

  renderToContext(
    context: CanvasRenderingContext2D,
    positionX: number,
    positionY: number
  ) {
    context.drawImage(this.canvas, positionX, positionY);
  }
}

export { Sprite };
