import {header} from "./Header";
import flowerImg from "./images/flowers.jpg";
import './style.scss';

const headerApp = document.querySelector("#header");
headerApp.innerHTML = header();

const images = document.querySelector("#img");

images.innerHTML = `<img src=${flowerImg} />`;
