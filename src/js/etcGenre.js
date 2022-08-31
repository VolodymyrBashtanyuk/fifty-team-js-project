import { refs } from './createOneObject';

refs.gallery.addEventListener('click', onListenerBtnEtc);

export default function onListenerBtnEtc(e) {
    e.preventDefault();

    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    const filmAllGenre = e.target.dataset.all_ganre;
    e.target.previousSibling.previousSibling.textContent = `${filmAllGenre}`;
    e.target.classList.add('hide');
}