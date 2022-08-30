let listQueue = JSON.parse(localStorage.getItem('filmsQueue')) || [];

export default function addToQueueFilm(data) {

    let film = data;
    if(data === "") {
    return [];
    }  
    listQueue.push(film);
    localStorage.setItem('filmsQueue', JSON.stringify(listQueue));

};