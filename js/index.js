import config from '../config.js';

const name = config.name;

document.title = `${name} 군대 포털`;

const contentH1 = document.querySelector('.content > h1');
contentH1.textContent = `${name} 군대 포털`