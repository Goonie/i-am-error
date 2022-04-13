import { observer } from './observer';

class Timer {
  private interval: NodeJS.Timer;
  private rateFactor: number = 45 / 1000;
  private previousTick: number;

  constructor() {
    this.update = this.update.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);

    window.addEventListener('blur', this.pause);
    window.addEventListener('focus', this.resume);

    this.start();
  }

  update() {
    const tick = Math.round(performance.now() * this.rateFactor);

    if (!this.previousTick) {
      this.previousTick = tick;
      return;
    }

    if (tick === this.previousTick) return;

    observer.publish(this, 'tick');

    this.previousTick = tick;
  }

  start() {
    if (this.interval) return;

    this.interval = setInterval(this.update, 1);
  }

  stop() {
    if (!this.interval) return;

    clearInterval(this.interval);
    delete this.interval;
  }

  pause() {
    if (!this.interval) return;

    clearInterval(this.interval);
    delete this.interval;
  }

  resume() {
    if (this.interval) return;

    this.interval = setInterval(this.update, 1);
  }
}

const timer = new Timer();

export { timer };
