export function double(x) {
  return 2 * x;
}

export class Counter {
  constructor() {
    this.count = 0;
  }

  up() {
    this.count++;
  }

  getDouble() {
    return double(this.count);
  }
}
