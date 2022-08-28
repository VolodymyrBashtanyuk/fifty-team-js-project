const refs = {
    gallery:document.querySelector('.gallery')
}
import { filmGenre } from './genre';

const imageURL = "https://image.tmdb.org/t/p/w500";

function createOneObject(film) {
  const {title,genre_ids,poster_path,release_date} = film;
  const genreInCard = filmGenre(genre_ids);
  console.log(genreInCard)

  return `
  <li class="film-card">
    <a href=''>
      <img class="poster" src="${imageURL}${poster_path}" alt="${title}"  />

      <p class="info-title">${title}</p>
      <div class="info-title info-item">
        <p class="">${genreInCard}
        </p>
        <p class="">${release_date.slice(0,4)}
        </p>
      </div>
    </a>
  </li>
  `
};



function generateMarkup (arrayImages){

return arrayImages.reduce((acc,film)=>acc + createOneObject(film),"");
};

 export  default function insertCreatedObject (arrayImages) {
  const result = generateMarkup(arrayImages);
  refs.gallery.innerHTML = result;
 

};

import { filmGenre } from './genre';
import { response } from '../index';

// function writeGenre() {
//   getGenre();
// return filmGenre();
// }

// const filmGenreInCard = writeGenre();