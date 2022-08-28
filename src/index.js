import theMovieDbApi from "./js/fetchMovies";
import insertCreatedObject from './js/createOneObject'
import spinner from './js/preLoader'


import {createPagination} from "./js/createPagination"


import {createPagination, getCurrentPageLs} from "./js/createPagination"


const movieDbApi = new theMovieDbApi();

const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', oneMovies);
import openCardFilm from './js/openCardFilm'
import createdCardFilm from "./js/markUpModal";

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

        insertCreatedObject(response.results)
        if(response.total_pages > 1) createPagination(response)
        spinner.removeSpinner();
        

    }catch(error){
        console.log(error)
    };
};

movieDbApi.setPage(getCurrentPageLs())        
movies();



async function oneMovies(e) {
    const id = e.target.parentNode.parentNode.id;
    const oneMovieResponse = await movieDbApi.fetchOneMovie(id);
    createdCardFilm(oneMovieResponse);
    console.log(oneMovieResponse)
    };

