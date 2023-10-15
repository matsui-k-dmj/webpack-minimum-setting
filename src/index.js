import './style.css';
import style from './style.module.css';
import likeIcon from './assets/thumbs-up-like.svg';
import pngImage from './assets/PNG_transparency_demonstration_1.png';
import { Counter } from './math';

console.log('Hello World!');

console.log(style);
document.getElementById('double').className = style['double'];

const img = document.createElement('img');
img.src = likeIcon;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src = pngImage;
document.body.appendChild(img2);

let counter = new Counter();

document.getElementById('countUpButton').addEventListener('click', () => {
  counter.up();
  document.getElementById('count').innerText = counter.count;
  document.getElementById('double').innerText = counter.getDouble();
});
