import theMovieDbApi from "./js/fetchMovies";
import insertCreatedObject from './js/createOneObject'
import preLoader from './js/preLoader'
const movieDbApi = new theMovieDbApi();


async function movies(){
    try{
       const response = await movieDbApi.fetchMovies();
       const genreResponse = await movieDbApi.fetchGenres();
       console.log(response);
       console.log(genreResponse);
       insertCreatedObject(response.results)
   
    }catch(error){
        console.log(error)
    };
};

movies();
