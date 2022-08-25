const refs = {
    gallery:document.querySelector('.gallery')
}

const imageURL = "https://image.tmdb.org/t/p/w500/";

const createOneObject=oneCart=>

`<div class="photo-card">
<img src="${oneCart.imageURL.poster_path}" alt="${oneCart.title}"  />
<div class="info">
<p class="info-item">
  <b>name</b>${oneCart.title}
</p>
<p class="info-item">
  <b></b>${oneCart.genre_ids}
</p>
<p class="info-item">
  <b></b>${oneCart.description}
</p>
<p class="info-item">
  <b></b>${oneCart.vote_count}
</p>

</div>
</div>

`;
console.log(createOneObject)

function generateMarkup (array){

return array.reduce((acc,oneCart)=>acc + createOneObject(oneCart),"");
};

 export  default function insertCreatedObject (array) {
  const result = generateMarkup(array);
  refs.gallery.insertAdjacentHTML('beforeend', result);
 
console.log (result)
};
