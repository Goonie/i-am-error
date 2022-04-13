import { controls } from '../system/controls';

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

  update() {
    if (controls.left) {
      this.positionX = this.positionX - 1;
    }

    if (controls.right) {
      this.positionX = this.positionX + 1;
    }
  }

  renderToContext(context: CanvasRenderingContext2D) {
    this.sprite.renderToContext(context, this.positionX, this.positionY);
  }
}

export { Player };
