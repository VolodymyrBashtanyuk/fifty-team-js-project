import getQueueData from './getQueueData';
import { insertCreatedObject } from './insertCreatedObject';

export default function onQueueBtnClick (e) {
    const arrayFilms = getQueueData();
    insertCreatedObject(arrayFilms);
}