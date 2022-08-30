import theMovieDbApi from "./js/fetchMovies";
import insertCreatedObject from './js/createOneObject'
import spinner from './js/preLoader'
import { getGenre, saveGenre } from './js/genre';



import { createPagination } from "./js/createPagination"


import { createPagination, getCurrentPageLs } from "./js/createPagination"


const movieDbApi = new theMovieDbApi();

const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', oneMovies);
import openCardFilm from './js/openCardFilm'
import createdCardFilm from "./js/markUpModal";

import addToWatchedFilm from "./js/localStorageToWatchedFilm";
import addToQueueFilm from "./js/localStorageToQueueFilm";
import removeStorageWatchedFilm from './js/localStorageToWatchedFilm';
import removeStorageQueueFilm from './js/localStorageToQueueFilm';

async function movies() {

    spinner.startSpinner();
    try {
        const response = await movieDbApi.fetchMovies();
        const genreResponse = await movieDbApi.fetchGenres();
        console.log(response);
        console.log(genreResponse);
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
    
        createdCardFilm(oneMovieResponse);
        console.log(oneMovieResponse.id);
        spinner.removeSpinner();

    document.addEventListener('click', localStorageFilmData);

    const arrayDataFilm = JSON.parse(localStorage.getItem('filmsWatched')) || '[]';
    let found = false;

    for(let i = 0; i <= arrayDataFilm.length; i += 1) {
        if(oneMovieResponse.id === arrayDataFilm[i].id) {
    found = true;
    console.log('yeah');
           

    return;
        }
    } 

    function localStorageFilmData(evt) {
        const btn = evt.target;   
    if (btn.className === 'btn-watched') {
        
        addToWatchedFilm(oneMovieResponse);
        btn.textContent = 'remove watched film';
       
         console.log('Click!');

        }  else if(btn.className === 'btn-queue') {
         addToQueueFilm(oneMovieResponse);
         btn.textContent = 'remove queued film';
         console.log('Click!2');
         document.removeEventListener('click', localStorageFilmData)
        }  
       
    }
} catch(error) {
        console.log(error);
    };
}