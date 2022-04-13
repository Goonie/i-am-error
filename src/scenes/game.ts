import { observer } from '../system/observer';
import { timer } from '../system/timer';

import { Player } from '../entities/player';

class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public entities = [];

  constructor() {
    this.update = this.update.bind(this);

    this.canvas = document.getElementById('scene') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');

    this.entities.push(new Player());

    observer.subscribe(timer, 'tick', this.update);
  }

  update() {
    for (let entity of this.entities) {
      entity.update();
    }

    this.render();
  }

  render() {
    this.context.clearRect(0, 0, 160, 144);

    for (let entity of this.entities) {
      entity.renderToContext(this.context);
    }
  }
}

export { Game };
