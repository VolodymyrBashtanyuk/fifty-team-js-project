import { refs } from './createOneObject'
const oneFilmGenre = document.querySelector('.film__genre');

export default function onListenerBtnEtc(e) {
  e.preventDefault();
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    const filmAllGenre = e.target.dataset.all_ganre;
    console.log(filmAllGenre);
    console.log(oneFilmGenre.textContent);
    oneFilmGenre.textContent = `${filmAllGenre}`;
}