import { Player } from '../entities/player';

class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public entities = [];

  constructor() {
    this.canvas = document.getElementById('scene') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');

    this.entities.push(new Player());

    this.render();
  }

  render() {
    for (let entity of this.entities) {
      entity.renderToContext(this.context);
    }
  }
}

export { Game };
