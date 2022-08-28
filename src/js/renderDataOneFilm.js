const refsModal = {
    modal: document.querySelector('.modal'),
    backdrop: document.querySelector('.backdrop'),
    };
const imageURL = "https://image.tmdb.org/t/p/w500";

 function renderDataOneFilm(data) {
    const {original_title, genres, poster_path, vote_average, vote_count, popularity, overview, id} = data;

    return ` <div id= ${id}>
    <img src="${imageURL}${poster_path}" alt="${original_title}"  />
    <h1>${original_title}</h1>
    <ul>
    <li>${vote_average.toFixed(1)}/${vote_count}</li>
    <li>${popularity.toFixed(1)}</li>
    <li>${original_title}</li>
    <li>${genres}</li>
    <li>${overview}</li>
    </ul>
    </div> `

}

export default function createdCardFilm(dataFilm) {
    const data = renderDataOneFilm(dataFilm);
    refsModal.modal.innerHTML = data;
}

