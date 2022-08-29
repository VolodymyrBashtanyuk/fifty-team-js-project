const refs = {
  falseresultMessage: document.querySelector('.falseresult__message'),
  form: document.querySelector('.form__btn')
}

    

refs.form.addEventListener('submit', onFormSubmit);


refs.falseresultMessage.classList.add('hide');

let currentPage = 1;
let searchName = '';

    
function onFormSubmit(e) {    
e.preventDefault()
searchName = e.currentTarget.elements.search.value.trim();
if (searchName === 0 ) {
  return;
} else {
clearGalleryList();
currentPage = 1;
fetchRequest (searchName, currentPage); 
}
}


async function fetchRequest (search, currentPage) {
    try {
      const fetchResult = await fetchMovies(search, currentPage);  
      filterFetchResult(fetchResult);
  } catch (error) {console.log(error)}
  }




function filterFetchResult(fetchResult) {
  if (fetchResult > 0) {
    refs.falseresultMessage.classList.add('hide');
  } else if (fetchResult.total === 0) {
      refs.falseresultMessage.classList.remove('hide');
       
      return;
  } 
}



function clearGalleryList () {
  refs.galleryEl.innerHTML = "";
}
