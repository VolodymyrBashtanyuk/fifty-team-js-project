import theMovieDbApi from "./js/fetchMovies";
import insertCreatedObject from './js/createOneObject'
import spinner from './js/preLoader'


import {createPagination, getCurrentPageLs} from "./js/createPagination"

const movieDbApi = new theMovieDbApi();


async function movies(){
    spinner.startSpinner();
    try{
        const response = await movieDbApi.fetchMovies();
        const genreResponse = await movieDbApi.fetchGenres();
        console.log(response);
        console.log(genreResponse);
        insertCreatedObject(response.results)
        if(response.total_pages > 1) createPagination(response)
        spinner.removeSpinner();
        
    }catch(error){
        console.log(error)
    };
};

movieDbApi.setPage(getCurrentPageLs())        
movies();


const footerButtom = document.querySelector('.footer__btn');
const backdropFooter = document.querySelector('.backdrop');
// const backdropContainer = document.querySelector('.backdrop__container')

footerButtom.addEventListener('click', onOpenFooterButtom);
backdropFooter.addEventListener('click', onCloseModal);

function onOpenFooterButtom(){
    backdropFooter.classList.remove('is-hidden');
    backdropFooter.setAttribute('tabindex', 1);
    document.body.style.overflow = 'hidden';
    footerButtom.setAttribute('tabindex', -1);
}

function onCloseModal(e){
    const closeByButton = e.target.classList.contains('backdrop__button');
    const closeByBackdrop =  e.target.classList.contains('backdrop');

    document.addEventListener('keydown', onCloseByEscape);  
    function onCloseByEscape (event) {
        if (event.code === 'Escape') {
            backdropFooter.classList.add('is-hidden');
            document.removeEventListener('keydown', onCloseByEscape);
         };
      };

    if(!closeByButton && !closeByBackdrop){
        return;
    }else{
        backdropFooter.classList.add('is-hidden');
        document.body.style.overflow = 'visible';
    };

}


