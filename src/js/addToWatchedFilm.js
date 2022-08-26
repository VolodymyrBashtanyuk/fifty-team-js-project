
    function addToWatchedFilm(data) {
    localStorage.setItem("watchedFilm", JSON.stringify(data));
    let listFilm = [];
    
    if(localStorage.getItem("watchedFilm")) {
        listFilm = JSON.parse(localStorage.getItem('watchedFilm'));
      
        console.log(listFilm);
    }
};