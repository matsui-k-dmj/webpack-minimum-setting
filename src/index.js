import { double } from './math';

console.log('Hello World!');

let count = 0;

document.getElementById('countUpButton').addEventListener('click', () => {
  count++;
  document.getElementById('count').innerText = count;
  document.getElementById('double').innerText = double(count);
});
