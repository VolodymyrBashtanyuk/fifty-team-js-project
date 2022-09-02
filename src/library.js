import { filmGenre } from './js/genre'
import { getWatchedData  } from "./js/library/getWatchedData";
import { insertCreatedObject } from "./js/library/insertMainMarkup";
import footer from './js/modalFooter';
import createdCard from "./js/library/markUpModalLibrary";
import spinner from './js/preLoader';
import openCardFilm from './js/openCardFilm';
import { onCardFilmClick } from "./js/movieInfo";

import addToWatchedFilm from "./js/localStorageAddWatchedFilm";
import addToQueueFilm from "./js/localStorageAddQueueFilm";
import onListenerBtnEtc from './js/etcGenre'
import { scrollUp, smoothScrollToBottomPage} from './js/scroll-up';
import { refs, onWatchedBtnClick } from './js/library/renderWatchedData';
import onQueueBtnClick from './js/library/renderQueueData';
import oneMovies from './js/movieInfo'
refs.btnWatchedHeaderEl.classList.add('is-active');
refs.btnWatchedHeaderEl.addEventListener('click', onWatchedBtnClick);
refs.btnQueueHeaderEl.addEventListener('click', onQueueBtnClick);

onWatchedBtnClick();
const cardOneFilm = document.querySelector('.gallery');
cardOneFilm.addEventListener('click', onCardFilmClick);

scrollUp.addEventListener('click', smoothScrollToBottomPage);