class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById('scene') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
  }
}

export { Game };
