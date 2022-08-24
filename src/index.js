import theMovieDbApi from "./js/fetchMovies";

const movieDbApi = new theMovieDbApi();


async function movies(){
    try{
       const response = await movieDbApi.fetchMovies();
       console.log(response)
    }catch(error){
        console.log(error)
    };
};

movies();