export default class theMovieDbApi {
    constructor(){
  this.page = 1;
  this.BASE_URL='https://api.themoviedb.org/3/';
  this.MAIN_PAGE_URL = 'trending/movie/day';
  this.KEY = '9d0cbfdf54c935b25322d86e1e3b7dd0';
  this.INFO_URL = 'movie/{movie_id}';
  this.SEARCH_URL = 'search/movie';
}

async fetchMovies(){
      
    const fetchRequest = await fetch(`${this.BASE_URL}${this.MAIN_PAGE_URL}?api_key=${this.KEY}&page=${this.page}`);
    const data = await fetchRequest.json();

    return data;
    
}

getPage(){
    return this.page =  1;
}

setPage(){
    this.page += 1;
}
};