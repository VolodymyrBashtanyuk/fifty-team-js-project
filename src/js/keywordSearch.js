refs.form.addEventListener('submit', onFormSubmit);
refs.buttonLoad.addEventListener('click', onLoadMoreBtn);


let currentPage = 1;
let searchName = '';
refs.buttonLoad.classList.add('ishidden');
    
function onFormSubmit(e) {    
e.preventDefault()
refs.buttonLoad.classList.add('ishidden');

searchName = e.currentTarget.elements.searchQuery.value.trim();
if (searchName === 0 ) {
  return;
} else {
clearGalleryList();
currentPage = 1;
fetchRequest (searchName, currentPage); 
}
}

function onLoadMoreBtn(){
  refs.buttonLoad.classList.add('ishidden');
  currentPage += 1;
  searchName = refs.input.value.trim();
  fetchRequest(searchName, currentPage); 
}

async function fetchRequest (searchQuery, currentPage) {
    try {
      const fetchResult = await fetchMovies(searchQuery, currentPage);  
      
      filterFetchResult(fetchResult);
  } catch (error) {console.log(error)}
  }

function filterFetchResult(fetchResult) {
   if (fetchResult.total === 0) {
      refs.buttonLoad.classList.add('ishidden');
      Notiflix.Notify.failure("Search result not successful. Enter the correct movie name and ");   
      return;
  } else { 
      insertMarkup(fetchResult.hits);  
      refs.buttonLoad.classList.remove('ishidden');
      return;
  }
}
function clearGalleryList () {
    refs.galleryEl.innerHTML = "";
}
export default keywordSearch;