import { createPagination, saveQueryTypeLs } from "./createPagination";
import { insertCreatedObject} from './createOneObject';
import spinner from './preLoader';

export const refs = {
  form: document.querySelector('.form'),
  falseresultMessage: document.querySelector('.falseresult__message'),
  }

export function filterResults(searchMovie) {
  if (searchMovie.total_results === 0) {
    refs.falseresultMessage.classList.remove('hide');
    return;
} else if (searchMovie.total_results > 0){
    insertCreatedObject(searchMovie.results);
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