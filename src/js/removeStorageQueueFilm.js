import getQueueData from './library/getQueueData';

export default function removeStorageQueueFilm(id) {
  let listQueueFilm = getQueueData();
  const btnQueue = document.getElementById('btn-q');
  const btnRemoveQueueFilm = document.getElementById('btn-rq');
    const index = listQueueFilm.findIndex(film => film.id === id);
    console.log(index);
    listQueueFilm.splice(index, 1);
    localStorage.setItem('filmsQueue', JSON.stringify(listQueueFilm));
    console.log(listQueueFilm);
btnQueue.classList.remove('hide');
btnRemoveQueueFilm.classList.add('hide');
}
