(() => {
  'use strict';
  console.log('Hello World!');
  let e = 0;
  document.getElementById('countUpButton').addEventListener('click', () => {
    e++,
      (document.getElementById('count').innerText = e),
      (document.getElementById('double').innerText = 2 * e);
  });
})();
