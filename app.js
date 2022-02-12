import { films } from './data.js';
import { renderFilms } from './render-utils.js';

const filmList = document.getElementById('film-list');
for (let film of films) {
    const div = renderFilms(film);
    filmList.append(div);
}

