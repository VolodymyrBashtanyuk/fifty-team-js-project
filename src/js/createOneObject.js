const refs = {
    gallery:document.querySelector('.gallery')
}


const imageURL = "https://image.tmdb.org/t/p/w500/";
function createOneObject(film){
 const {poster_path,title,genre_ids,vote_count} = film;
console.log(data)
`<a href=''>
<div class="photo-card">
<img src="${imageURL}+${poster_path}" alt="${title}"  />
<div class="info">
<p class="info-item">
  <b>name</b>${title}
</p>
<p class="info-item">
  <b></b>${genre_ids}
</p>
<p class="info-item">
  <b></b>${description}
</p>
<p class="info-item">
  <b></b>${vote_count}
</p>

</div>
</div>

`};

console.log(createOneObject)

function generateMarkup (array){

return array.reduce((acc,film)=>acc + createOneObject(film),"");
};

 export  default function insertCreatedObject (array) {
  const result = generateMarkup(array);
  refs.gallery.insertAdjacentHTML('beforeend', result);
 
console.log (result)
};
