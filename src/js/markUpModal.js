const refsModal = {
  backdrop: document.querySelector('.backdrop-modal'),
  modal: document.querySelector('.modal-movie'),
}
const imageURL = "https://image.tmdb.org/t/p/w500";

function createModalFilm(data) {
    const {
      title,
      popularity,
      original_title,
      genre,
      overview,
      poster_path,
      vote_average,
      vote_count,
    } = data;
    
  return `<button data-modal-close type="button" class="modal-movie-btn-close">
                    <span>
                        <svg class="modal-movie-img-close" width="11" height="11">
                            <use href="./images/icons.svg#modal-close"></use>
                        </svg>
                    </span>
                </button>
    <div class="modal-movie-cont">

      <div class="modal-movie-cont__img">
        <img class="modal-movie-img" src="${imageURL}${poster_path}" alt="${title}">
      </div>
      
      <div class="modal-movie-cont__data">

        <div class="modal-movie-cont__about">
          <h2 class="modal-movie__title">${title}</h2>
          <table class="modal-movie-table">
          <tbody>
            <tr>
              <td class="modmodal-movie-table__item-name">Vote / Votes</td>
              <td class="modmodal-movie-table__item-value"><span class="vote">${vote_average.toFixed(1)}</span class="votes">/${vote_count}</td>
            </tr>
            <tr>
              <td class="modmodal-movie-table__item-name">Popularity</td>
              <td class="modmodal-movie-table__item-descr">${popularity.toFixed(1)}</td>
            </tr>
            <tr>
              <td class="modmodal-movie-table__item-name">Original Title</td>
              <td class="modmodal-movie-table__item-descr">${original_title}</td>
            </tr>
            <tr>
              <td class="modmodal-movie-table__item-name">Genre</td>
              <td class="modmodal-movie-table__item-descr">${genre}</td>
            </tr>
          </tbody>
          </table>

          <h3 class="modmodal-movie-about">ABOUT</h3>
          <p class="modmodal-movie-descr-movie">${overview}</p>
        </div>
      
        <ul class="modal-movie__btn-list">
            <li>
                <button class="btn-watched" type="button">ADD TO WATCHED</button>
            </li>
            <li>
                <button class="btn-queue" type="button">ADD TO QUEUE</button>
            </li>
        </ul>

      </div>

    </div>

  </div>
</div>`;
};

export default function createdCardFilm(data) {
    const dataFilm = createModalFilm(data);
      refsModal.modal.innerHTML = dataFilm;
    
}