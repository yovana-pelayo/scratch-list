import { films } from '../data.js';
import { renderFilms } from '../render-utils.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));
const id = params.get('id');
const film = findById(id, films);

const main = document.querySelector('main');

const filmDetail = renderFilms(film);


main.append(filmDetail);