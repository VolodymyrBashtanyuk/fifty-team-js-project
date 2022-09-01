export default function addToQueueFilm(data) {
    let listQueue = JSON.parse(localStorage.getItem('filmsQueue')) || [];

    let film = data;

    if(data === "") {
    return [];
    }  
    listQueue.push(film);
    localStorage.setItem('filmsQueue', JSON.stringify(listQueue));
};