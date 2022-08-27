const cardFilm = document.querySelector('.gallery');

const refsModal = {
    modal: document.querySelector('.modal'),
    backdrop: document.querySelector('.backdrop'),
    };


cardFilm.addEventListener('click', openCardFilm);
refsModal.backdrop.addEventListener('click', closeModalClick);

function openCardFilm (e) {
    e.preventDefault();

    if (!e.target.classList.contains('info-title') &&  !e.target.classList.contains('poster')) {
        return;
    } 
refsModal.backdrop.classList.add('is-visible');
document.addEventListener('keydown', closeModalEsc);
document.removeEventListener('click', closeModalEsc);
}

function closeModalEsc(evt) {

    if (evt.code === "Escape") {

    refsModal.backdrop.classList.remove('is-visible');
    document.removeEventListener('keydown', closeModalEsc);
    }
  };

function closeModalClick() {
    refsModal.backdrop.classList.remove('is-visible');
    document.removeEventListener('keydown', closeModalEsc);
    document.removeEventListener('click', closeModalClick);
};
