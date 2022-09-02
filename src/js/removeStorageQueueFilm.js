import getQueueData from './library/getQueueData';
import { insertCreatedObject } from './library/insertMainMarkup';

export default function removeStorageQueueFilm(e) {
  const id = e.target.closest(".modal-movie__btn-list").id
  let listQueueFilm = getQueueData();
  const btnQueue = document.getElementById('btn-q');
  const btnRemoveQueueFilm = document.getElementById('btn-rq');
  const index = listQueueFilm.findIndex(film => film.id == id);
  btnQueue.classList.remove('hide');
  btnRemoveQueueFilm.classList.add('hide');
  if (index === -1 ) return
  listQueueFilm.splice(index, 1);
  insertCreatedObject(listQueueFilm)
    localStorage.setItem('filmsQueue', JSON.stringify(listQueueFilm));
}