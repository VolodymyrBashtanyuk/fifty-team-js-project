import getWatchedData from './library/getWatchedData';
import { insertCreatedObject } from './library/insertMainMarkup';


export default function removeStorageWatchedFilm(e) {
  const id = e.target.closest(".modal-movie__btn-list").id
  let listWatchedFilm = getWatchedData();
  const btnWatched = document.getElementById('btn-w');
  const btnRemoveWatchedFilm = document.getElementById('btn-rw');
  const index = listWatchedFilm.findIndex(film => film.id == id);
  btnWatched.classList.remove('hide');
  btnRemoveWatchedFilm.classList.add('hide');
  if (index == -1) return
  listWatchedFilm.splice(index, 1);
  insertCreatedObject(listWatchedFilm)
  localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm));
  }