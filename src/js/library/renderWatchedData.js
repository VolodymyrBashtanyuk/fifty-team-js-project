import getWatchedData from './getWatchedData';
import { insertCreatedObject } from './insertCreatedObject';

export default function onWatchedBtnClick (e) {
    const arrayFilms = getWatchedData();
    insertCreatedObject(arrayFilms);
}