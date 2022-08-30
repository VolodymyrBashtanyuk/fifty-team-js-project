
let listQueue = JSON.parse(localStorage.getItem('filmsQueue')) || [];
export default function removeStorageQueueFilm(index) {

  const btnQueue = document.getElementById('btn-q');
  const btnRemoveQueueFilm = document.getElementById('btn-rq');
  
    listQueue.splice(index, 1);
    localStorage.setItem('filmsQueue', JSON.stringify(listQueue));
    btnQueue.classList.remove('hide');
    btnRemoveQueueFilm.classList.add('hide');

  }