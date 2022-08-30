export default class theMovieDbApi {
    constructor(){
  this.page = 1;
  this.BASE_URL='https://api.themoviedb.org/3/';
  this.MAIN_PAGE_URL = 'trending/movie/day';
  this.KEY = '9d0cbfdf54c935b25322d86e1e3b7dd0';
  this.INFO_URL = 'movie/';
  this.SEARCH_URL = 'search/movie';
  this.GENRE_URL = '/genre/movie/list';
    this.FETCH_QUERY = '';
}

async fetchMovies(){
      
    const fetchRequest = await fetch(`${this.BASE_URL}${this.MAIN_PAGE_URL}?api_key=${this.KEY}&page=${this.page}`);
    const data = await fetchRequest.json();

    return data;
    
}

async fetchGenres(){
    const genresRequest = await fetch(`${this.BASE_URL}${this.GENRE_URL}?api_key=${this.KEY}`);
    const list = await genresRequest.json();
    return list.genres;
}

async fetchOneMovie(id) {
    const oneMovieRequest = await fetch(`${this.BASE_URL}movie/${id}?api_key=${this.KEY}&language=en-US`);
    const dataOneMovie = await oneMovieRequest.json();
    console.log(dataOneMovie);

    return dataOneMovie;
}

async fetchMovieName(searchName) {
    const fetchResult = await fetch(`${this.BASE_URL}search/movie?api_key=${this.KEY}&language=en-US&include_adult=false&query=${this.FETCH_QUERY}&page=${this.page}`);
    const oneSearchMovie = await fetchResult.json();
    return oneSearchMovie;
}
getPage(){
    return this.page;
    }
    
setQuery(query) {
    this.FETCH_QUERY = query
}

setPage(newPage){
    this.page = newPage;
}
};
