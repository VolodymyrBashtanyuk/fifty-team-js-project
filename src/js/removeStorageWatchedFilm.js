let listWatchedFilm = JSON.parse(localStorage.getItem('filmsWatched'));

export default function removeStorageWatchedFilm(id) {
    listWatchedFilm.splice(id, 1);
  }