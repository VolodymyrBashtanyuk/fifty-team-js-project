import getQueueData from './getQueueData';
import insertCreatedObject from './insertCreatedObject';

export function onWatchedBtnClick (e) {
    const arrayFilms = getWatchedData();
    console.log(arrayFilms);
    insertCreatedObject(arrayFilms);
}