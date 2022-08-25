const e=new class{async fetchMovies(){const e=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9d0cbfdf54c935b25322d86e1e3b7dd0");return await e.json()}nextPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.page=1}};!async function(){try{const t=await e.fetchMovies();console.log(t)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.7e466c79.js.map
