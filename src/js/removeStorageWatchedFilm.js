// import oneMovies from './movieInfo';

// // console.log(oneMovies.id)

let listWatchedFilm = JSON.parse(localStorage.getItem('filmsWatched')) || [];

console.log(listWatchedFilm)

export default function removeStorageWatchedFilm(index) {
  
    const btnWatched = document.getElementById('btn-w');
    const btnRemoveWatchedFilm = document.getElementById('btn-rw');
    
    listWatchedFilm.splice(index, 1);
    localStorage.setItem('filmsWatched', JSON.stringify(listWatchedFilm));
    btnWatched.classList.remove('hide');
    btnRemoveWatchedFilm.classList.add('hide');
  }