import theMovieDbApi from "./js/fetchMovies";
import insertCreatedObject from './js/createOneObject'
const movieDbApi = new theMovieDbApi();


async function movies(){
    try{
       const response = await movieDbApi.fetchMovies();
       console.log(response)
       insertCreatedObject(response.results)

    }catch(error){
        console.log(error)
    };
};

movies();
