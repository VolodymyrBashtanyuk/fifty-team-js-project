import getQueueData from './getQueueData';
import insertCreatedObject from './insertCreatedObject';

const btnQueueHeaderEl = document.querySelector('.header__btn--queue');
console.log(btnQueueHeaderEl);

btnWatchedHeaderEl.addEventListener('click', onQueueBtnClick);

export function onQueueBtnClick (e) {
    const arrayFilms = getQueueData();
    console.log(arrayFilms);
    insertCreatedObject(arrayFilms);
}