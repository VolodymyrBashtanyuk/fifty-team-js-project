import getWatchedData from './library/getWatchedData';

export default function removeStorageWatchedFilm(id) {
  let listWatchedFilm = getWatchedData();
    const index = listWatchedFilm.findIndex(film => film.id === id);
    console.log(index);
    listWatchedFilm.splice(index, 1);
    localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm));
    console.log(listWatchedFilm);
  }