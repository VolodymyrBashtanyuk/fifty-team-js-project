import oneMovies from '../oneMovie';
import  { refsModal, imageURL, noImg}
from '../openCardFilm'
import spinner from '../preLoader'



// const oneFilm = document.querySelector('.gallery');
// oneFilm.addEventListener('click', onOneMovie);

// const dataLocal = JSON.parse(localStorage.getItem('filmsWatched'));



// function onOneMovie(e){
//     // spinner.startSpinner();
//     // s
//     // if(dataLocal.ad === idClick){
//     //   createdCardFilm(data)
//     // }
//     // console.log(dataLocal.id);
// }

// const data = JSON.parse(localStorage.getItem('filmsWatched'));
// data.forEach(element => {
// console.log(element.id)
    
// });
// console.log(data)

  
  // function createModalFilm(data) {
  //     const {
  //       title,
  //       popularity,
  //       original_title,
  //       genres,
  //       overview,
  //       poster_path,
  //       vote_average,
  //       vote_count,
  //     } = data;
  //     const genreName = genres.map(ganre => ganre.name).join(', ');
  
  //   return `
        
  //       <div class="modal-movie-cont__img">
  //       ${poster_path ? 
  //       `<img class="poster" src="${imageURL}${poster_path}" alt="${title}"  />` : 
  //       `<img class="poster" src=${noImg} alt="${title}" />`
  //       }
  //       </div>
        
  //       <div class="modal-movie-cont__data">
  
  //         <div class="modal-movie-cont__about">
  //           <h2 class="modal-movie__title">${title ?? ''}</h2>
  //           <table class="modal-movie-table">
  //           <tbody>
  //             <tr>
  //               <td class="modal-movie-table__item-name">Vote / Votes</td>
  //               <td class="modal-movie-table__item-value">
  //                 <span class="vote">${vote_average.toFixed(1) ?? ''}</span> / 
  //                 <span class="votes">${vote_count ?? ''}</span>
  //               </td>
  //             </tr>
  //             <tr>
  //               <td class="modal-movie-table__item-name">Popularity</td>
  //               <td class="modal-movie-table__item-value">${popularity.toFixed(1) ?? ''}</td>
  //             </tr>
  //             <tr>
  //               <td class="modal-movie-table__item-name">Original Title</td>
  //               <td class="modal-movie-table__item-value">${original_title ?? ''}</td>
  //             </tr>
  //             <tr>
  //               <td class="modal-movie-table__item-name">Genre</td>
  //               <td class="modal-movie-table__item-value">${genreName ?? ''}</td>
  //             </tr>
  //           </tbody>
  //           </table>
  
  //           <h3 class="modal-movie-about">ABOUT</h3>
  //           <p class="modal-movie-descr-movie">${overview ?? ''}</p>
  //         </div>
        
  //         <ul class="modal-movie__btn-list">
  //             <li>
  //                 <button class="btn-watched" id='btn-w' type="button">ADD TO WATCHED</button>
  //             </li>
  //             <li>
  //                 <button class="btn-watched hide" id='btn-rw' type="button">REMOVE FROM WATCHED</button>
  //             </li>
  //             <li>
  //                 <button class="btn-queue" id='btn-q'  type="button">ADD TO QUEUE</button>
  //             </li>
  //             <li>
  //                 <button class="btn-queue hide" id='btn-rq' type="button">REMOVE FROM QUEUE</button>
  //             </li>
  //         </ul>
  
       
  
  //     </div>`;
  // };
  
  // function createdCardFilm(data) {
  //   const dataFilm = createModalFilm(data);
  //   refsModal.modal.innerHTML = dataFilm;
    // refsModal.modal.innerHTML = dataFilm;
      
  // }
//   createdCardFilm() 