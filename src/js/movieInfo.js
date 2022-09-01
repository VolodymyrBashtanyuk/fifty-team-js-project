import theMovieDbApi from "./fetchMovies";
import createdCardFilm from "./markUpModal";

import addToWatchedFilm from "./localStorageAddWatchedFilm";
import addToQueueFilm from "./localStorageAddQueueFilm";
import removeStorageWatchedFilm from './removeStorageWatchedFilm';
import removeStorageQueueFilm from './removeStorageQueueFilm';
import spinner from './preLoader'

const movieDbApi = new theMovieDbApi();

import getWatchedData from './library/getWatchedData';
import getQueueData from './library/getQueueData';


export function onCardFilmClick(e) {
    const id = e.target.parentNode.parentNode.parentNode.id || e.target.parentNode.parentNode.id;
    oneMovies(id);
}
export default async function oneMovies(id) {
    spinner.startSpinner();
    try {
        const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
        createdCardFilm(oneMovieResponse);
        spinner.removeSpinner();

        const refsEl = {
            btnWatched: document.getElementById('btn-w'),
            btnRemoveWatched: document.getElementById('btn-rw'),
            btnQueue: document.getElementById('btn-q'),
            btnRemoveQueue: document.getElementById('btn-rq'),
        }
        filterLocalStorageWatched(id);
        filterLocalStorageQueue(id);

        function filterLocalStorageWatched (idOpenFilm) {
            const arrayWatchedFilms = getWatchedData();
            const result = arrayWatchedFilms.some(film => film.id === idOpenFilm);
            if (result === true) {
                refsEl.btnWatched.classList.add('hide');
                refsEl.btnRemoveWatched.classList.remove('hide');
                refsEl.btnRemoveWatched.addEventListener('click', onRemoveWatchedBtnClick);
                return;   
            } 
                refsEl.btnWatched.classList.remove('hide');
                refsEl.btnRemoveWatched.classList.add('hide');
                refsEl.btnWatched.addEventListener('click', onWatchedBtnClick);
            }

            function onRemoveWatchedBtnClick() {
                removeStorageWatchedFilm(oneMovieResponse.id);
                refsEl.btnRemoveWatched.classList.add('hide');
                refsEl.btnWatched.classList.remove('hide');
                refsEl.btnRemoveWatched.removeEventListener('click', onRemoveWatchedBtnClick);
                refsEl.btnWatched.addEventListener('click', onWatchedBtnClick);

            }
            function onWatchedBtnClick() {
                addToWatchedFilm(oneMovieResponse);
                refsEl.btnWatched.classList.add('hide');
                refsEl.btnRemoveWatched.classList.remove('hide');
                refsEl.btnWatched.removeEventListener('click', onWatchedBtnClick);
                refsEl.btnRemoveWatched.addEventListener('click', onRemoveWatchedBtnClick);
            }


            function filterLocalStorageQueue (idOpenFilm) {
                const arrayWatchedFilms = getQueueData();
                const result = arrayWatchedFilms.some(film => film.id === idOpenFilm);
                if (result === true) {
                    refsEl.btnQueue.classList.add('hide');
                    refsEl.btnRemoveQueue.classList.remove('hide');
                    refsEl.btnRemoveQueue.addEventListener('click', onRemoveQueueBtnClick);
                    return;
                } 
                    refsEl.btnRemoveQueue.classList.add('hide');
                    refsEl.btnQueue.classList.remove('hide');
                    refsEl.btnQueue.addEventListener('click', onQueueBtnClick);
                           
            function onRemoveQueueBtnClick() {
                removeStorageQueueFilm(oneMovieResponse.id);
                refsEl.btnRemoveQueue.classList.add('hide');
                refsEl.btnQueue.classList.remove('hide');
                refsEl.btnRemoveQueue.removeEventListener('click', onRemoveQueueBtnClick);
                refsEl.btnQueue.addEventListener('click', onQueueBtnClick);
            }
            function onQueueBtnClick() {
                addToQueueFilm(oneMovieResponse);
                refsEl.btnQueue.classList.add('hide');
                refsEl.btnRemoveQueue.classList.remove('hide');
                refsEl.btnQueue.removeEventListener('click', onQueueBtnClick);
                refsEl.btnRemoveQueue.addEventListener('click', onRemoveQueueBtnClick);
            }
           
            document.addEventListener('click', localStorageFilmData);

            function localStorageFilmData(evt) {
            if (evt.target.className === 'btn-watched') {
            addToWatchedFilm(oneMovieResponse);
             const btnWatched = document.getElementById('btn-w');
            const btnRemoveWatchedFilm = document.getElementById('btn-rw');
            
            btnWatched.classList.add('hide');
            btnRemoveWatchedFilm.classList.remove('hide');
            btnRemoveWatchedFilm.addEventListener('click', removeStorageWatchedFilm);
            
            } else if(evt.target.className === 'btn-queue') {
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
            
            for(let i = 0; i < arrayDataFilm.length; i += 1) {
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
            
            for(let i = 0; i < arrayDataFilm.length; i += 1) {
             if(oneMovieResponse.id === arrayDataFilm[i].id ) {
            found = true;
            btnQueue.classList.add('hide');
            btnRemoveQueueFilm.classList.remove('hide');
            btnRemoveQueueFilm.addEventListener('click', removeStorageQueueFilm);
            
            return;
            }
            } 
            }
    
} } catch(error) {
    console.log(error);
    };
}
