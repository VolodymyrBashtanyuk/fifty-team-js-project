export default function onListenerBtnEtc(e) {
    e.preventDefault();
    const btnEtc = document.querySelectorAll('.btn__etc');

    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    const filmAllGenre = e.target.dataset.all_ganre;
    e.target.previousSibling.previousSibling.textContent = `${filmAllGenre}`;
    e.target.classList.add('hide');
}