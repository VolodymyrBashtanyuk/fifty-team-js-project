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

const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', oneMovies);

export default async function oneMovies(e) {
    spinner.startSpinner();
    try {
        const id = e.target.parentNode.parentNode.parentNode.id || e.target.parentNode.parentNode.id;
        const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
        console.log(id);
        createdCardFilm(oneMovieResponse);
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
    console.log(result);
    if (result === true) {
        refsEl.btnWatched.classList.add('hide');
        refsEl.btnRemoveWatched.classList.remove('hide');
        refsEl.btnRemoveWatched.addEventListener('click', onRemoveWatchedBtnClick);
        function onRemoveWatchedBtnClick() {
            removeStorageWatchedFilm(oneMovieResponse.id);
            refsEl.btnRemoveWatched.classList.add('hide');
            refsEl.btnWatched.classList.remove('hide');
        }
        return;
    } else {
        refsEl.btnWatched.classList.remove('hide');
        refsEl.btnRemoveWatched.classList.add('hide');
        refsEl.btnWatched.addEventListener('click', onWatchedBtnClick);
        function onWatchedBtnClick() {
            addToWatchedFilm(oneMovieResponse);
            refsEl.btnWatched.classList.add('hide');
            refsEl.btnRemoveWatched.classList.remove('hide');
        }
     }
    }

function filterLocalStorageQueue (idOpenFilm) {
    const arrayWatchedFilms = getQueueData();
    const result = arrayWatchedFilms.some(film => film.id === idOpenFilm);
    console.log(result);
    if (result === true) {
        refsEl.btnQueue.classList.add('hide');
        refsEl.btnRemoveQueue.classList.remove('hide');
        refsEl.btnRemoveQueue.addEventListener('click', onRemoveQueueBtnClick);
        function onRemoveQueueBtnClick() {
            removeStorageQueueFilm(id);
            refsEl.btnQueue.classList.remove('hide');
            refsEl.btnRemoveQueue.add('hide');
        }
        
    } else {
        refsEl.btnRemoveQueue.classList.add('hide');
        refsEl.btnQueue.classList.remove('hide');
        refsEl.btnQueue.addEventListener('click', onQueueBtnClick);
        function onQueueBtnClick() {
            addToQueueFilm(oneMovieResponse);
            refsEl.btnQueue.classList.add('hide');
            refsEl.btnRemoveQueue.classList.remove('hide');
        }
    }
    }
                
        spinner.removeSpinner();
        } catch(error) {
            console.log(error);
    };
    };


    