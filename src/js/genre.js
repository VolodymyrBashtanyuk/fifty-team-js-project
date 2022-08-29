const LOCALSTORAGE_KEY = "genre";

let genres;

function saveGenre(genres) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(genres));
}

function getGenre() {
    genres = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
}


function filmGenre(genre_ids) {
    getGenre();
    const arrayFilmGenre = genres.filter(ganre => genre_ids.some(value => value === ganre.id)).map(obj => obj.name).join(", ");
    return arrayFilmGenre;
}


export { saveGenre, getGenre, filmGenre };