import theMovieDbApi from "./fetchMovies";
const movieDbApi = new theMovieDbApi();
import insertCreatedObject from './createOneObject';
import spinner from './preLoader'


let currentPage;
let lastPage;


function createPagination({ page: current = 1, total_pages: last }) {
    currentPage = current;
    lastPage = last
    console.log('currentPage', currentPage);
    console.log('lastPage',lastPage);
    // const {page:currentPage = 1, tota_pages:lastPage} = response
    const dataSet = createArr(currentPage, lastPage)
 renderPagination(dataSet, currentPage, lastPage)
}

const paginationEl = document.querySelector('.pagination')
paginationEl.addEventListener('click', onPaginationClick)    

function createArr(start, end) {
    const res = [];

    for (let i = start - 2; i <= start + 2; i +=1){
        if (i >= 1 && i <= end) {
           res.push(i) 
        }
    }

    if (res[0] === 3) res.unshift(2)
    if (res[0] === 2) res.unshift(1)
    if (res[0] > 3) res.unshift(1, 0)

    if (res[res.length - 1] < end) res.push(0,end)
    if (res[res.length - 1] === end - 2) res.push(end - 1)
    if (res[res.length - 1] === end - 3) res.push(end - 2)

    res.unshift('<')
    res.push('>')
    return res;
}


function renderPagination(elems, current, lastPage) {
    const markup = elems.map((index) => {
        if (index === 0) {
    return `<li ><div class = "empryBox">...</div></li>`    
        }
    
    return `<li ><button type="button" class = "${index === current ? 'current' : ''} ${(index === '<') || (index === '>') ? 'arrow' : ''}" data-btn="${index}">${index}</button></li>`
    }).join('')

    // const paginationMarkup = `<ul class="pagination">${markup}</ul>`

    // gallery.insertAdjacentHTML('afterend',paginationMarkup)
    paginationEl.innerHTML = markup;
    paginationEl.dataset.lastpage = lastPage
}


function onPaginationClick(e) {
    // lastPage = e.currentTarget.dataset.lastpage
    // console.log(lastPage);
    // console.log(e.target.nodeName);
    if (e.target.nodeName === 'DIV' || e.target.nodeName !== 'BUTTON') return
    
    if (e.target.classList.contains('current')) return

    let nextPage;
    
    if (e.target.dataset.btn !== '<' && e.target.dataset.btn !== '>') nextPage = +e.target.dataset.btn;
    
    if (e.target.dataset.btn === '<' && currentPage === 1) return
    if (e.target.dataset.btn === '>' && currentPage === lastPage) return

    if (e.target.dataset.btn === '<' && currentPage > 1) {
        nextPage = currentPage -= 1
    }
    
    if (e.target.dataset.btn === '>' && currentPage < lastPage) {
        nextPage = currentPage += 1
    }
    
    currentPage = nextPage
    // console.log('currentPage', currentPage);
    // console.log('nextPage', nextPage);
    
    movieDbApi.setPage(nextPage)
    movies();
    // renderPagination(createArr(nextPage, lastPage), nextPage)

}

async function movies() {
    spinner.startSpinner();

    try{
        const response = await movieDbApi.fetchMovies();
        console.log(response)
        insertCreatedObject(response.results)
        createPagination(response)
        spinner.removeSpinner()
        smoothScrool()

    }catch(error){
        console.log(error)
    };
};

function smoothScrool() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
   })
 
}

export {createPagination}
