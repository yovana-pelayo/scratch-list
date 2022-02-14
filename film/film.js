import { films } from '../data.js';
import { renderDetails } from '../render-utils.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));
const id = params.get('id');
const main = document.querySelector('main');

const detail = findById(id, films);
const detailPage = renderDetails(detail);


main.append(detailPage);



/// fixed it without looking at demo or other project!!! YAY!