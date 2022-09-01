import getWatchedData from './library/getWatchedData';

export default function removeStorageWatchedFilm(id) {
  let listWatchedFilm = getWatchedData();
  const btnWatched = document.getElementById('btn-w');
  const btnRemoveWatchedFilm = document.getElementById('btn-rw');
    const index = listWatchedFilm.findIndex(film => film.id === id);
    listWatchedFilm.splice(index, 1);
    localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm));
    btnWatched.classList.remove('hide');
    btnRemoveWatchedFilm.classList.add('hide');
  }