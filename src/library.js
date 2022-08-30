// import insertCreatedObject from "./js/createOneObject";
import { filmGenre } from './js/genre'
import { getWatchedData  } from "./js/library/getWatchedData";
import { insertCreatedObject } from "./js/library/insertCreatedObject";

const filmsArr = getWatchedData()

insertCreatedObject(filmsArr)
