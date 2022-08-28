// import { galleryMovies } from ''

export function createModalFilm(data) {
    const {
      movieTitle,
      popularity,
      originalTitle,
      genre,
      about,
      movieImg,
      vote,
      votes,
    } = data;
    
  return `<div class="backdrop-modal">
  <div class="modal-movie">
    <button data-modal-close type="button" class="modal-movie-btn-close">
                    <span>
                        <svg class="modal-movie-img-close" width="11" height="11">
                            <use href="./images/icons.svg#modal-close"></use>
                        </svg>
                    </span>
                </button>
    <div class="modal-movie-cont">

      <div class="modal-movie-cont__img">
        <img class="modal-movie-img" src="${movieImg}" alt="">
      </div>
      
      <div class="modal-movie-cont__data">

        <div class="modal-movie-cont__about">
          <h2 class="modal-movie__title">${movieTitle}</h2>
          <table class="modal-movie-table">
          <tbody>
            <tr>
              <td class="modmodal-movie-table__item-name">Vote / Votes</td>
              <td class="modmodal-movie-table__item-value"><span class="vote">${vote}</span class="votes">/${votes}</td>
            </tr>
            <tr>
              <td class="modmodal-movie-table__item-name">Popularity</td>
              <td class="modmodal-movie-table__item-descr">${popularity}</td>
            </tr>
            <tr>
              <td class="modmodal-movie-table__item-name">Original Title</td>
              <td class="modmodal-movie-table__item-descr">${originalTitle}</td>
            </tr>
            <tr>
              <td class="modmodal-movie-table__item-name">Genre</td>
              <td class="modmodal-movie-table__item-descr">${genre}</td>
            </tr>
          </tbody>
          </table>

          <h3 class="modmodal-movie-about">ABOUT</h3>
          <p class="modmodal-movie-descr-movie">${about}</p>
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
    
  // galleryMovies.innerHTML = markUp;
}