const LOCALSTORAGE_KEY = "genre";
// const answer = {
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 80,
//             "name": "Crime"
//         },
//         {
//             "id": 99,
//             "name": "Documentary"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         },
//         {
//             "id": 36,
//             "name": "History"
//         },
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 10402,
//             "name": "Music"
//         },
//         {
//             "id": 9648,
//             "name": "Mystery"
//         },
//         {
//             "id": 10749,
//             "name": "Romance"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 10770,
//             "name": "TV Movie"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         },
//         {
//             "id": 10752,
//             "name": "War"
//         },
//         {
//             "id": 37,
//             "name": "Western"
//         }
//     ]
// }

let genres;
// const genre_ids = [16, 878, 28];
import { response } from '../index';

// saveGenre(answer);
// console.log(response);
// getGenre();
// filmGenre(response);

function saveGenre(genres) {
    // console.log(typeof genres);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(genres));
}

function getGenre() {

    genres = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(genres);
    // return genres;
}


function filmGenre(genre_ids) {
    getGenre();
    // const arrayFilmGenre = genres.genres.filter(ganre => response.genre_ids.some(value => value === ganre.id)).map(obj => obj.name);
    const arrayFilmGenre = genres.filter(ganre => genre_ids.some(value => value === ganre.id)).map(obj => obj.name).join(", ");
    // console.log(arrayFilmGenre.map(obj => obj.name));
    // console.log(arrayFilmGenre);
        return arrayFilmGenre;

}


export { saveGenre, getGenre, filmGenre };
// import { response } from '../index';
