import { films } from './data.js';
import { renderFilms } from './render-utils.js';
import { renderDetails } from './render-utils.js';

const filmList = document.getElementById('film-list');
for (let film of films) {
    const div = renderFilms(film);
    filmList.append(div);
}

const detailPage = document.getElementById('detail-list');
for (let detail of films){
    const div = renderDetails(detail);
    detailPage.append(div);
}