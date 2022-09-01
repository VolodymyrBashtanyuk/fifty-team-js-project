import getWatchedData from './getWatchedData';
import { insertCreatedObject } from './insertMainMarkup';
export const refs = {
    btnWatchedHeaderEl: document.querySelector('.header__it--watched'),
    btnQueueHeaderEl: document.querySelector('.header__it--queue'),
};

export function onWatchedBtnClick (e) {
    refs.btnWatchedHeaderEl.classList.add('is-active');
    refs.btnQueueHeaderEl.classList.remove('is-active');
    const arrayFilms = getWatchedData();
    
    insertCreatedObject(arrayFilms);
}