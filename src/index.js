import theMovieDbApi from "./js/fetchMovies";
import createOneObject from './js/createOneObject'
const movieDbApi = new theMovieDbApi();


async function movies(){
    try{
       const response = await movieDbApi.fetchMovies();
       console.log(response)
       createOneObject(response.poster_path)
    }catch(error){
        console.log(error)
    };
};

movies();
