import theMovieDbApi from "./js/fetchMovies";
import insertCreatedObject from './js/createOneObject'
import spinner from './js/preLoader'

import openCardFilm from './js/openCardFilm'
import createdCardFilm from "./js/renderDataOneFilm";
import {createPagination} from "./js/createPagination"

const movieDbApi = new theMovieDbApi();

const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', oneMovies);

async function movies(){
    spinner.startSpinner();
    try{
       const response = await movieDbApi.fetchMovies();
       const genreResponse = await movieDbApi.fetchGenres();
       console.log(response);
       console.log(genreResponse);
       insertCreatedObject(response.results)
       spinner.removeSpinner();

     createPagination(response)

    }catch(error){
        console.log(error)
    };
};

movies();



async function oneMovies(e) {
const id = e.target.parentNode.parentNode.id;
const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
createdCardFilm(oneMovieResponse);
};