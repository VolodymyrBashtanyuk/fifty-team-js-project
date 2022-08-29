
let listWatchedFilm = JSON.parse(localStorage.getItem('filmsWatched')) || [];

    export default function addToWatchedFilm(data) {

        let film = data;
        if(data === "") {
        return [];
        }
        listWatchedFilm.push(film)
        localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm)); 
};


  
// export default function removeStorageWatchedFilm(index) {
//     listWatchedFilm.splice(index, 1);
//     localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm));

    
//   }
