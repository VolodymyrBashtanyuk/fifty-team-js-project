import { smartGenre } from '../createMainMarkup'


const libraryGallery = document.querySelector('.gallery')

const imageURL = "https://image.tmdb.org/t/p/w500";
const noImg ='https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg';


function createOneObject(film){
  const { title, genres, poster_path, release_date, id , vote_average} = film;
  const arrayGenreInCard = genres.map(ganre => ganre.name);
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
        <button class="btn__etc ${arrayGenreInCard.length <= 3 ? 'hide' : ''}" type="button" data-all_ganre="${genreInString}">...</button>
      
      <p class="date">${release_date.slice(0,4) ?? ''}
      </p>
      <div>
      <p class="rating">${vote_average.toFixed(1)}</p>
      </div>
    </div>
  </a>
</li>
`};


function generateMarkup (arrayImages){

return arrayImages.reduce((acc,film)=>acc + createOneObject(film)," ");
};

export function insertCreatedObject (arrayImages) {
  const result = generateMarkup(arrayImages);
  libraryGallery.innerHTML = result;

};

export { libraryGallery }
