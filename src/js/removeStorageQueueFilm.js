
let listQueue = JSON.parse(localStorage.getItem('filmsQueue'));
export default function removeStorageQueueFilm(index) {
    listQueue.splice(index, 1);

  }