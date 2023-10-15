(() => {
  'use strict';
  console.log('Hello World!');
  let t = new (class {
    constructor() {
      this.count = 0;
    }
    up() {
      this.count++;
    }
    getDouble() {
      return 2 * this.count;
    }
  })();
  document.getElementById('countUpButton').addEventListener('click', () => {
    t.up(),
      (document.getElementById('count').innerText = t.count),
      (document.getElementById('double').innerText = t.getDouble());
  });
})();
