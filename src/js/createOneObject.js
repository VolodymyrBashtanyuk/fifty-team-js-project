const refs = {
  gallery: document.querySelector('.gallery'),
  // btnEtc: document.querySelector(".btn__etc"),
  // oneFilmGenre: document.querySelector(".film__genre"),

}

import { filmGenre } from './genre'

const noImg ='https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg';
const imageURL = "https://image.tmdb.org/t/p/w500";

function createOneObject(film) {
  const { title, genre_ids, poster_path, release_date, id } = film;
  const arrayGenreInCard = filmGenre(genre_ids);
  const genreInString = arrayGenreInCard.join(", ");
  const genreInCard = smartGenre(arrayGenreInCard, genreInString);

return `
<li class="film-card" id = ${id}>
  <a href=''>
    <div class="poster__thumb">
      ${poster_path ? 
      `<img class="poster" src="${imageURL}${poster_path}" alt="${title}"  />` : 
      `<img class="poster" src=${noImg} alt="${title}" />`
      }
    </div>
    <p class="info-title">${title ?? ''}</p>
    <div class="info-title info-item">
      <p class="film__genre">${genreInCard ? genreInCard : ''}</p>
      <button class="btn__etc ${arrayGenreInCard.length <= 3 ? 'hide' : ''}" type="button"
        data-all_ganre="${genreInString}">...</button>
      <p class="date">${release_date.slice(0,4) ?? ''}
      </p>
    </div>
  </a>
</li>
`};


function generateMarkup (arrayImages){

return arrayImages.reduce((acc,film)=>acc + createOneObject(film),"");
};

function insertCreatedObject (arrayImages) {
  const result = generateMarkup(arrayImages);
  refs.gallery.innerHTML = result;
 

};

function smartGenre(arrayGenreInCard, genreInString) {
  if (arrayGenreInCard.length <= 3) {   
    return genreInString;
  }
    const cutGenre = arrayGenreInCard.slice(0, 3).join(", ");
    return cutGenre; 
}

export { refs, insertCreatedObject, smartGenre};

