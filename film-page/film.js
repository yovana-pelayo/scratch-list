import { drinks } from '..data.js';
import { findById } from '../utils';

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const drink = drinks.find((item) => item.id === params.get('id'));

const name = document.getElementById('name');
name.id = drink.type;
const taste = document.getElementById('says');
name.textContent = drink.name;
taste.textContent = drink.says;
