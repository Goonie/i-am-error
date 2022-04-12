import { Sprite } from '../system/sprite';

import { sprite } from '../sprites/standing-left';

class Player {
  private sprite: Sprite;

  private positionX: number;
  private positionY: number;

  constructor() {
    this.sprite = new Sprite(sprite);

    this.positionX = 76;
    this.positionY = 136;
  }

  renderToContext(context: CanvasRenderingContext2D) {
    this.sprite.renderToContext(context, this.positionX, this.positionY);
  }
}

export { Player };
