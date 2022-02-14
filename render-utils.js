export function renderFilms(film) {
    const div = document.createElement('div');
    div.classList.add('film');

    const a = document.createElement('a');
    a.href = `./film/?id=${film.id}`;

    const h2 = document.createElement('h2');
    h2.textContent = film.title.toUpperCase();

    const img = document.createElement('img');
    img.src = `../assets/${film.image}`;

    const h3 = document.createElement('h3');
    h3.textContent = film.genre;

    a.append(h2, h3, img);
    div.append(a);
    return div;


}
export function renderDetails(detail) {
    const div = document.createElement('div');
    div.classList.add('details');

    const h2 = document.createElement('h2');
    h2.textContent = detail.title.toUpperCase();

    const h3 = document.createElement('p');
    h3.textContent = detail.genre;

    const p = document.createElement('p');
    p.textContent = `Ratings given out of ten! ${detail.ratingOutOfTen}`;

    const img = document.createElement('img');
    img.src = `../assets/${detail.image}`;
    return div;
}
// created a new function that calls the details I want without the link

// added class list called detail that you're going to call