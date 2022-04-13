import { observer } from './observer';

class Controls {
  public up: Boolean = false;
  public down: Boolean = false;
  public left: Boolean = false;
  public right: Boolean = false;
  public action: Boolean = false;

  constructor() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.code === 'ArrowUp' && !this.up) {
        observer.publish(this, 'press.up');
        this.up = true;
      }

      if (event.code === 'ArrowDown' && !this.down) {
        observer.publish(this, 'press.down');
        this.down = true;
      }

      if (event.code === 'ArrowLeft' && !this.left) {
        observer.publish(this, 'press.left');
        this.left = true;
      }

      if (event.code === 'ArrowRight' && !this.right) {
        observer.publish(this, 'press.right');
        this.right = true;
      }

      if (event.code === 'ArrowAction' && !this.action) {
        observer.publish(this, 'press.action');
        this.action = true;
      }
    });

    window.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.code === 'ArrowUp' && this.up) {
        this.up = false;
      }

      if (event.code === 'ArrowDown' && this.down) {
        this.down = false;
      }

      if (event.code === 'ArrowLeft' && this.left) {
        this.left = false;
      }

      if (event.code === 'ArrowRight' && this.right) {
        this.right = false;
      }

      if (event.code === 'ArrowAction' && this.action) {
        this.action = false;
      }
    });
  }
}

const controls = new Controls();

export { controls };
