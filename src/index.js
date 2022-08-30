import theMovieDbApi from "./js/fetchMovies";
import { insertCreatedObject} from './js/createOneObject'
import spinner from './js/preLoader'
import { getGenre, saveGenre } from './js/genre';



import etsGenre from './js/etcGenre';

import {refs, filterResults} from './js/keywordSearch';
import footer from './js/modalFooter';



import { createPagination } from "./js/createPagination"


import { createPagination, getCurrentPageLs } from "./js/createPagination"


const movieDbApi = new theMovieDbApi();

const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', oneMovies);


import openCardFilm from './js/openCardFilm'
import createdCardFilm from "./js/markUpModal";

import addToWatchedFilm from "./js/localStorageToWatchedFilm";
import addToQueueFilm from "./js/localStorageToQueueFilm";
import removeStorageWatchedFilm from './js/removeStorageWatchedFilm';
import removeStorageQueueFilm from './js/removeStorageQueueFilm';

async function movies() {

    spinner.startSpinner();
    try {
        const response = await movieDbApi.fetchMovies();
        const genreResponse = await movieDbApi.fetchGenres();
   
        const conditionKeyGenre = getGenre();
        if (conditionKeyGenre === undefined) {
            saveGenre(genreResponse);
        }

        insertCreatedObject(response.results)

        if (response.total_pages > 1) createPagination(response)
        spinner.removeSpinner();

    } catch (error) {
        console.log(error)
    };
};

movieDbApi.setPage(getCurrentPageLs())
movies();


async function oneMovies(e) {
    spinner.startSpinner();
    try {
        const id = e.target.parentNode.parentNode.id;
        const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
        console.log(oneMovieResponse);
        createdCardFilm(oneMovieResponse);
        console.log(oneMovieResponse.id);
        spinner.removeSpinner();

    document.addEventListener('click', localStorageFilmData);
   
    function verifyIdWatchedFilm() {
    const btnWatched = document.getElementById('btn-w');
    const btnRemoveWatchedFilm = document.getElementById('btn-rw');
    const arrayDataFilm = JSON.parse(localStorage.getItem('filmsWatched')) || '[]';
    let found = false;

    for(let i = 0; i <= arrayDataFilm.length; i += 1) {
        if(oneMovieResponse.id === arrayDataFilm[i].id) {
    found = true;
    console.log('yeah');
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
    console.log('yeahQ');
    btnQueue.classList.add('hide');
    btnRemoveQueueFilm.classList.remove('hide');
    btnRemoveQueueFilm.addEventListener('click', removeStorageQueueFilm);
    return;
        }
    } 
    }
    verifyIdWatchedFilm();
    verifyIdQueueFilm();
  
    

    function localStorageFilmData(evt) {

    if (evt.target.className === 'btn-watched') {
        
        addToWatchedFilm(oneMovieResponse);
        const btnWatched = document.getElementById('btn-w');
        const btnRemoveWatchedFilm = document.getElementById('btn-rw');
         console.log('Click!');
         btnWatched.classList.add('hide');
         btnRemoveWatchedFilm.classList.remove('hide');
         btnRemoveWatchedFilm.addEventListener('click', removeStorageWatchedFilm);


        }  else if(btn.className === 'btn-queue') {
         addToQueueFilm(oneMovieResponse);
         const btnQueue = document.getElementById('btn-q');
         const btnRemoveQueueFilm = document.getElementById('btn-rq');
         btnQueue.classList.add('hide');
         btnRemoveQueueFilm.classList.remove('hide');
         btnRemoveQueueFilm.addEventListener('click', removeStorageQueueFilm);
         console.log('Click!2');
        
        }  
    }
    
} catch(error) {
        console.log(error);
    };
    };


refs.form.addEventListener('submit', onFormSubmit);
async function onFormSubmit (e) {
    e.preventDefault();
    refs.falseresultMessage.classList.add('hide');
    const searchName = e.currentTarget.elements.search.value;
    try {
        const searchMovie = await movieDbApi.fetchMovieName(searchName);
        filterResults(searchMovie);
        }
    catch (error) {
            console.log(error);
            }
    } 