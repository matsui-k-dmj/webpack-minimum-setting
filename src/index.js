import './style.css';
import { Counter } from './math';

console.log('Hello World!');

let counter = new Counter();

document.getElementById('countUpButton').addEventListener('click', () => {
  counter.up();
  document.getElementById('count').innerText = counter.count;
  document.getElementById('double').innerText = counter.getDouble();
});
