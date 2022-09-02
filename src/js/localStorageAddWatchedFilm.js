export default function addToWatchedFilm(data) {
    let listWatchedFilm = JSON.parse(localStorage.getItem('filmsWatched')) || [];

    let film = data;
    if(data === "") {
    return [];
    } 
    listWatchedFilm.push(film)
    localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm));
};
