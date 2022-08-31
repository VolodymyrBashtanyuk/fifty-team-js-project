import { filmGenre } from '../genre'


const libraryGallery = document.querySelector('.gallery')

const imageURL = "https://image.tmdb.org/t/p/w500";


function createOneObject(film){
  const { title, genres, poster_path, release_date, id , vote_average} = film;
  const genreCard = genres.map(ganre => ganre.name).join(', ');



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
      <p class="film__genre">${genreCard ? genreCard : ''}</p>
     
      </p>
      <p class="date">${release_date.slice(0,4) ?? ''}
      </p>
      <p class="rating">${vote_average.toFixed(1)}</p> 
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
