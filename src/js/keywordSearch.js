import { createPagination } from "./createPagination";
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
} else if (searchMovie.total_pages > 1) {
    createPagination(searchMovie);
    spinner.removeSpinner();
}
}
export function onInputChange(e) {
  const inputQuery = e.target.value;
  console.log(inputQuery);
  if (inputQuery === "") {
      refs.falseresultMessage.classList.add('hide');
  }
}