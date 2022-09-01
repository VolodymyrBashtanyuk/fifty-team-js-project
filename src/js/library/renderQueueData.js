import getQueueData from './getQueueData';
import { insertCreatedObject } from './insertMainMarkup';
import { refs } from './renderWatchedData';

export default function onQueueBtnClick (e) {
    refs.btnWatchedHeaderEl.classList.remove('is-active');
    refs.btnQueueHeaderEl.classList.add('is-active');
    const arrayFilms = getQueueData();
    insertCreatedObject(arrayFilms);
}