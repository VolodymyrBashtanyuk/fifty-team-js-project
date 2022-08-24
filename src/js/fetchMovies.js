export default class theMovieDbApi {
    constructor(){
  this.page = 1;
    }
async fetchMovies(){
     
    const BASE_URL='https://api.themoviedb.org/3/list/';
    const KEY='9d0cbfdf54c935b25322d86e1e3b7dd0';
      
    const fetchRequest = await fetch(`${BASE_URL}${this.page}?api_key=${KEY}`);
      const data = await fetchRequest.json();
 
    return data;
}
      
    
  nextPage(){
    this.page += 1;
  }
  resetPage(){
    this.page =  1;
  }
  };