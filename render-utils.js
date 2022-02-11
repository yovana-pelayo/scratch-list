export function renderFilms(film) {
    const div = document.createElement('div');
    div.classList.add('film');

    const a = document.createElement('a');
    a.href = `/film/?id=${film.id}`;
    const h2 = document.createElement('h2');
    h2.textContent = film.title.toUpperCase();

    const h3 = document.createElement('h3');
    h3.textContent = film.genre;
    
    const img = document.createElement('img');
    img.src = film.image;
 
    a.append(h2, h3, img);
    div.append(a);
    return div;

}