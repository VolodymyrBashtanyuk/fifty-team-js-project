// import insertCreatedObject from "./js/createOneObject";
import { filmGenre } from './js/genre'
import { getWatchedData } from "./js/library/getWatchedData";
import { getQueueData } from './js/library/getQueueData';
import { insertCreatedObject } from "./js/library/insertCreatedObject";
// import { onWatchedBtnClick} from './js/library/renderWatchedData';
// import {onQueueBtnClick} from './js/library/renderQueueData';

const btnWatchedHeaderEl = document.querySelector('.header__btn--watched');
const btnQueueHeaderEl = document.querySelector('.header__btn--queue');

btnWatchedHeaderEl.addEventListener('click', onWatchedBtnClick);
btnQueueHeaderEl.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick (e) {
    const arrayFilms = getWatchedData();
    console.log(arrayFilms);
    insertCreatedObject(arrayFilms);
}
function onQueueBtnClick (e) {
    const arrayFilms = getQueueData();
    console.log(arrayFilms);
    insertCreatedObject(arrayFilms);
}
