export function renderFilms(film) {
    const div = document.createElement('div');
    div.classList.add('film');

    const a = document.createElement('a');
    a.href = `./film/?id=${film.id}`;

    const h2 = document.createElement('h2');
    h2.textContent = film.title.toUpperCase();

    const h3 = document.createElement('h3');
    h3.textContent = film.genre;

    const p = document.createElement('p');
    p.textContent = `Most recent reviews out of 10!  ${film.ratingOutOfTen}`;

    const img = document.createElement('img');
    img.src = `../assets/${film.image}`;
    
    a.append(h2, h3, p, img);
    div.append(a);
    return div;


}