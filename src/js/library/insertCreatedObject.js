const libraryGallery = document.querySelector('.gallery')

const imageURL = "https://image.tmdb.org/t/p/w500";


function createOneObject(film){
  const { title, genres, poster_path, release_date, id } = film;
  const genreInCard = genres.map(ganre => ganre.name).join(' ');

return `
<li class="film-card" id = ${id}>
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
`};

function generateMarkup (arrayImages){

return arrayImages.reduce((acc,film)=>acc + createOneObject(film),"");
};

export function insertCreatedObject (arrayImages) {
  const result = generateMarkup(arrayImages);
  libraryGallery.innerHTML = result;

};
