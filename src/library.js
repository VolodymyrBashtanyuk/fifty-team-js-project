
import { filmGenre } from './js/genre'
import { getWatchedData  } from "./js/library/getWatchedData";
import { insertCreatedObject } from "./js/library/insertCreatedObject";
import footer from './js/modalFooter';
import createdCardFilm from "./js/markUpModal";
import spinner from './js/preLoader';
import openCardFilm from './js/openCardFilm';

import oneMovies from "./js/oneMovie";


const filmsArr = getWatchedData()

insertCreatedObject(filmsArr)
