const refs = {
    gallery:document.querySelector('.gallery')
}


const imageURL = "https://image.tmdb.org/t/p/w500";
function createOneObject(film){
 const {title,genre_ids,poster_path,release_date} = film;

return `<a href=''>
<div class="photo-card">
<img src="${imageURL}${poster_path}" alt="${title}"  />
<div class="info">
<p class="info-item">
  <b>${title}</b>
</p>
<p class="info-item">
  <b>${genre_ids}</b>
</p>
<p class="info-item">
  <b>${release_date.slice(0,4)}</b>
</p>
</div>
</div>
</a>
`};



function generateMarkup (arrayImages){

return arrayImages.reduce((acc,film)=>acc + createOneObject(film),"");
};

 export  default function insertCreatedObject (arrayImages) {
  const result = generateMarkup(arrayImages);
  refs.gallery.insertAdjacentHTML('beforeend', result);
 

};
