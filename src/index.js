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
import removeStorageWatchedFilm from './js/localStorageToWatchedFilm';
import removeStorageQueueFilm from './js/localStorageToQueueFilm';

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

    try {
        const id = e.target.parentNode.parentNode.id;
        const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
        console.log(oneMovieResponse);
        createdCardFilm(oneMovieResponse);
        console.log(oneMovieResponse);

    document.addEventListener('click', localStorageFilmData)

    function localStorageFilmData(evt) {
     const btn = evt.target;  
     
      
    if (evt.target.className === 'btn-watched') {
        
        addToWatchedFilm(oneMovieResponse);
        btn.textContent = 'remove watched film';
       
         console.log('Click!');
         document.removeEventListener('click', localStorageFilmData);
        } 
        else if(evt.target.className === 'btn-queue') {
         addToQueueFilm(oneMovieResponse);
         btn.textContent = 'remove queued film';
         console.log('Click!2');
         document.removeEventListener('click', localStorageFilmData)
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
