

import { filmGenre } from './js/genre'
import { getWatchedData  } from "./js/library/getWatchedData";
import { insertCreatedObject } from "./js/library/insertCreatedObject";
import footer from './js/modalFooter';
import createdCard from "./js/library/markUpModalLibrary";
import spinner from './js/preLoader';
import openCardFilm from './js/openCardFilm';

// import oneMovies from "./js/oneMovie";

import addToWatchedFilm from "./js/localStorageToWatchedFilm";
import addToQueueFilm from "./js/localStorageToQueueFilm";

import { refs, onWatchedBtnClick } from './js/library/renderWatchedData';
import onQueueBtnClick from './js/library/renderQueueData';

refs.btnWatchedHeaderEl.classList.add('is-active');
refs.btnWatchedHeaderEl.addEventListener('click', onWatchedBtnClick);
refs.btnQueueHeaderEl.addEventListener('click', onQueueBtnClick);

onWatchedBtnClick();
