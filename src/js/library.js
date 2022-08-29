// import addToWatchedFilm from "./js/localStorageToWatchedFilm";
// import addToQueueFilm from "./js/localStorageToQueueFilm";


const watchedListButton = document.querySelectorAll('header__btn--watched');
const queueListButton = document.querySelector('.header__btn--queue');
const libraryFilmList = document.querySelector('.gallery');

queueListButton.addEventListener('click', drawQueueFilmList);
watchedListButton.addEventListener('click', drawWatchedFilmList);


// function createLibraryCard(imgPath, filmTitle, movieId, voteAverage) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('main__filmListItem');
//   listItem.setAttribute('id', 'js-filmListItem');

//   const img = document.createElement('img');
//   img.classList.add('main__filmListItemImg');
//   img.setAttribute('src', `https://image.tmdb.org/t/p/w500/${imgPath}`)

//
//   const title = document.createElement('h2');
//   title.classList.add('main__filmListItemTitle');
//   title.textContent = filmTitle;

//рейтинг
//   const voteAverageH3 = document.createElement('h3');
//   voteAverageH3.classList.add('main__filmVote');
//   voteAverageH3.textContent = voteAverage;

//   listItem.append(img, title, voteAverageH3);
// //сюда добавить клик по карточке openCardFilm ???
//   listItem.addEventListener('click', () => activeDetailsPage(movieId, true));
//   return listItem;
// };

// function drawQueueFilmList() {
//   let fragment = document.createDocumentFragment();
//   let queueFilmListFromLS = localStorage.getItem('filmsQueue');
//   if (queueFilmListFromLS !== null && JSON.parse(queueFilmListFromLS).length !== 0) {
//     JSON.parse(queueFilmListFromLS).forEach(movie => {
//       fragment.append(createOneObject(movie.poster_path, movie.title, movie.id, movie.vote_average))
//     })
//     libraryFilmList.innerHTML = "";
//     libraryFilmList.append(fragment);
//   } else if (queueFilmListFromLS === null || JSON.parse(queueFilmListFromLS).length === 0) {
//     libraryFilmList.innerHTML = "";
//     const listItem = document.createElement('li');
//     listItem.classList.add('main__noFilmsInList');
//     listItem.textContent = "You do not have to queue movies to watch. Add them."
//     libraryFilmList.append(listItem);
//   }
 
// }

function drawWatchedFilmList() {
  let fragment = document.createDocumentFragment();
  let watchedFilmListFromLS = localStorage.getItem('filmsWatched');
  if (watchedFilmListFromLS !== null && JSON.parse(watchedFilmListFromLS).length !== 0) {
    JSON.parse(watchedFilmListFromLS).forEach(movie => {
      fragment.append(createOneObject(movie.poster_path, movie.title, movie.id))
    });
    libraryFilmList.innerHTML = "";
    libraryFilmList.append(fragment);
  }
  else if (watchedFilmListFromLS === null || JSON.parse(watchedFilmListFromLS).length === 0) {
    libraryFilmList.innerHTML = "";
    const listItem = document.createElement('li');
    listItem.classList.add('main__noFilmsInList');
    listItem.textContent = "You do not have watched movies. Add them."
    libraryFilmList.append(listItem);
  }
}



 