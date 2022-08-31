// import getWatchedData from './library/getWatchedData';
// import getQueueData from './library/getQueueData';
// const dataWatchedStorage = getWatchedData();
// const dataQueueStorage = getQueueData();

let listQueue = JSON.parse(localStorage.getItem('filmsQueue')) || [];

export default function addToQueueFilm(data) {

    let film = data;
    console.log(data);
    // console.log(dataWatchedStorage);
    // console.log(dataQueueStorage);
    if(data === "") {
    return [];
    }  
    listQueue.push(film);
    localStorage.setItem('filmsQueue', JSON.stringify(listQueue));

};