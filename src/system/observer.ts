class Observer {
  private observers = [];

  subscribe(subject: object, message: string, handler: () => void) {
    if (
      this.observers.find(
        (observer) =>
          observer.subject === subject &&
          observer.message === message &&
          observer.handler === handler
      )
    ) {
      return;
    }

    this.observers.push({ subject, message, handler });
  }

  publish(subject: object, message: string) {
    this.observers
      .filter(
        (observer) =>
          observer.subject === subject && observer.message === message
      )
      .forEach((observer) => observer.handler());
  }
}

const observer = new Observer();

export { observer };
