
export function renderDrinks(drink) {
    const li = document.createElement('li');
    li.classList.add('drink');
    li.textContent = drink;
    return li;
}