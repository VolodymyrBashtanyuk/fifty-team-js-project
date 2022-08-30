import onWatchedBtnClick from './js/library/renderWatchedData';
import onQueueBtnClick from './js/library/renderQueueData';

const btnWatchedHeaderEl = document.querySelector('.header__it--watched');
const btnQueueHeaderEl = document.querySelector('.header__it--queue');

btnWatchedHeaderEl.addEventListener('click', onWatchedBtnClick);
btnQueueHeaderEl.addEventListener('click', onQueueBtnClick);

onWatchedBtnClick();
