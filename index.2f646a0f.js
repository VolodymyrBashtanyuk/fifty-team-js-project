const t=new class{async fetchMovies(){const t=await fetch(`https://api.themoviedb.org/3/list/${this.page}?api_key=9d0cbfdf54c935b25322d86e1e3b7dd0`);return await t.json()}nextPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.page=1}};!async function(){try{const e=await t.fetchMovies();console.log(e)}catch(t){console.log(t)}}();
//# sourceMappingURL=index.2f646a0f.js.map
