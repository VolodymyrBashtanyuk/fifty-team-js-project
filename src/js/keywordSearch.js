import { createPagination, saveQueryTypeLs } from "./createPagination";
import { insertCreatedObject} from './createMainMarkup';
import spinner from './preLoader';


export const refs = {
  form: document.querySelector('.form'),
  falseresultMessage: document.querySelector('.falseresult__message'),
  gallery: document.querySelector('.gallery'),
  pagination: document.querySelector('.pagination'),
  }

export function filterResults(searchMovie) {
  spinner.startSpinner();
  if (searchMovie.total_results === 0) {
    refs.falseresultMessage.classList.remove('hide');
    spinner.removeSpinner();
    return;
} else if (searchMovie.total_results > 0){
    insertCreatedObject(searchMovie.results);
    spinner.removeSpinner();
  }
  if (searchMovie.total_pages > 1) 
    saveQueryTypeLs('getOneMovie')
    createPagination(searchMovie);
    spinner.removeSpinner();

}
export function onInputChange(e) {
  const inputQuery = e.target.value;
  if (inputQuery === "") {
      refs.falseresultMessage.classList.add('hide');
  }
}