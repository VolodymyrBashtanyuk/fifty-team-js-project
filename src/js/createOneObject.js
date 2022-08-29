const refs = {
    gallery:document.querySelector('.gallery')
}

import { filmGenre } from './genre'

const noImg ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6UB-bP8Q1VOTxmMLs-1v1d6LN4b7H7U3Ng&usqp=CAU';
const imageURL = "https://image.tmdb.org/t/p/w500";
function createOneObject(film){
  const { title, genre_ids, poster_path, release_date, id } = film;
  const genreInCard = filmGenre(genre_ids);

return `
<li class="film-card" id = ${id}>
  <a href=''>
  ${poster_path ? 
    `<img class="poster" src="${imageURL}${poster_path}" alt="${title}"  />` : 
    `<img class="poster" src=${noImg} alt="${title}" />`
}
    <p class="info-title">${title ?? ''}</p>
    <div class="info-title info-item">
      <p class="">${genreInCard ?? ''}
      </p>
      <p class="">${release_date.slice(0,4) ?? ''}
      </p>
    </div>
  </a>
</li>
`};



function generateMarkup (arrayImages){

return arrayImages.reduce((acc,film)=>acc + createOneObject(film),"");
};

 export  default function insertCreatedObject (arrayImages) {
  const result = generateMarkup(arrayImages);
  refs.gallery.innerHTML = result;
 

};
