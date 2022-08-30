import getQueueData from './getQueueData';
import { insertCreatedObject } from './insertCreatedObject';
const btnWatchedHeaderEl = document.querySelector('.header__it--watched');

export default function onQueueBtnClick (e) {
    btnWatchedHeaderEl.classList.remove('header__it--watched');
    const arrayFilms = getQueueData();
    insertCreatedObject(arrayFilms);
}