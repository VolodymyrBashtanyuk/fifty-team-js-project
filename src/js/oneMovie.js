import theMovieDbApi from "./fetchMovies";
import createdCardFilm from "./markUpModal";

import addToWatchedFilm from "./localStorageToWatchedFilm";
import addToQueueFilm from "./localStorageToQueueFilm";
import removeStorageWatchedFilm from './removeStorageWatchedFilm';
import removeStorageQueueFilm from './removeStorageQueueFilm';
import spinner from './preLoader'

const movieDbApi = new theMovieDbApi();

import getWatchedData from './library/getWatchedData';
import getQueueData from './library/getQueueData';
const dataWatchedStorage = getWatchedData();
const dataQueueStorage = getQueueData();




const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', oneMovies);



export default async function oneMovies(e) {
    spinner.startSpinner();
    try {
        const id = e.target.parentNode.parentNode.parentNode.id;
       
        const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
        
        createdCardFilm(oneMovieResponse);
        spinner.removeSpinner();

document.addEventListener('click', localStorageFilmData);

function localStorageFilmData(evt) {
    if (evt.target.className === 'btn-watched') {
        addToWatchedFilm(oneMovieResponse);
        const btnWatched = document.getElementById('btn-w');
        const btnRemoveWatchedFilm = document.getElementById('btn-rw');
            btnWatched.classList.add('hide');
            btnRemoveWatchedFilm.classList.remove('hide');
            btnRemoveWatchedFilm.addEventListener('click', removeStorageWatchedFilm);

        }  else if(evt.target.className === 'btn-queue') {
            addToQueueFilm(oneMovieResponse);

            const btnQueue = document.getElementById('btn-q');
            const btnRemoveQueueFilm = document.getElementById('btn-rq');

            btnQueue.classList.add('hide');
            btnRemoveQueueFilm.classList.remove('hide');
            btnRemoveQueueFilm.addEventListener('click', removeStorageQueueFilm);
        }  
            document.removeEventListener('click', localStorageFilmData);

}

verifyIdWatchedFilm();
verifyIdQueueFilm();
   
 function verifyIdWatchedFilm() {
    const btnWatched = document.getElementById('btn-w');
    const btnRemoveWatchedFilm = document.getElementById('btn-rw');
    const arrayDataFilm = JSON.parse(localStorage.getItem('filmsWatched')) || '[]';
    let found = false;

    for(let i = 0; i <= arrayDataFilm.length; i += 1) {
        console.log(arrayDataFilm.id)
    if(oneMovieResponse.id === arrayDataFilm[i].id) {
       
    found = true;
    btnWatched.classList.add('hide');
    btnRemoveWatchedFilm.classList.remove('hide');
    btnRemoveWatchedFilm.addEventListener('click', removeStorageWatchedFilm);
    return;
        } 
    } 
}

function verifyIdQueueFilm() {
    const btnQueue = document.getElementById('btn-q');
    const btnRemoveQueueFilm = document.getElementById('btn-rq');
    const arrayDataFilm = JSON.parse(localStorage.getItem('filmsQueue')) || '[]';
    let found = false;

    for(let i = 0; i <= arrayDataFilm.length; i += 1) {
        if(oneMovieResponse.id === arrayDataFilm[i].id ) {
    found = true;
    btnQueue.classList.add('hide');
    btnRemoveQueueFilm.classList.remove('hide');
    btnRemoveQueueFilm.addEventListener('click', removeStorageQueueFilm);
    return;
        }
    } 
}
  
} catch(error) {

        console.log(error);
};
};
  
