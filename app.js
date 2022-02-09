import { drinks } from './drinks.js';
import { renderDrinks } from './utils.js';

const drinkList = document.getElementById('drink-list');
for (let drink of drinks) {
    const li = renderDrinks(drink);
    drinkList.append(li);
}