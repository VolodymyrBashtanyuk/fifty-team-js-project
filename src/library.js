

import { filmGenre } from './js/genre'
import { getWatchedData  } from "./js/library/getWatchedData";
import { insertCreatedObject } from "./js/library/insertCreatedObject";
import footer from './js/modalFooter';
import createdCardFilm from "./js/markUpModal";
import spinner from './js/preLoader';
import openCardFilm from './js/openCardFilm';

import oneMovies from "./js/oneMovie";

import addToWatchedFilm from "./js/localStorageToWatchedFilm";
import addToQueueFilm from "./js/localStorageToQueueFilm";

import onWatchedBtnClick from './js/library/renderWatchedData';
import onQueueBtnClick from './js/library/renderQueueData';

const btnWatchedHeaderEl = document.querySelector('.header__it--watched');
const btnQueueHeaderEl = document.querySelector('.header__it--queue');

btnWatchedHeaderEl.addEventListener('click', onWatchedBtnClick);
btnQueueHeaderEl.addEventListener('click', onQueueBtnClick);

onWatchedBtnClick();
