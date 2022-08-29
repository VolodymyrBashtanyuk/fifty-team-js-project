let listQueue = JSON.parse(localStorage.getItem('filmsQueue')) || [];

export default function addToQueueFilm(data) {

    let film = data;
    if(data === "") {
    return [];
    }
    listQueue.push(film);
    localStorage.setItem('filmsQueue', JSON.stringify(listQueue));

};

// export default function removeStorageQueueFilm(index) {
//     listQueue.splice(index, 1);
//     localStorage.setItem('filmsWatched', JSON.stringify(listQueue))
//   }

