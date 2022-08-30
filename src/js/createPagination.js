import {movieDbApi} from "../index"
import {insertCreatedObject} from './createOneObject';
import spinner from './preLoader'
import {filterResults} from "./keywordSearch"


let currentPage;
let lastPage;
const LS_CURRENT_PAGE_KEY = 'currentPage'


function createPagination({ page: current = 1, total_pages: last }) {
    currentPage = current;
    lastPage = last
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

    if (res[0] === 2) res.unshift(1)
    if (res[0] > 3) res.unshift(1, 0)

    if (res[res.length - 1] < end) res.push(0,end)
    if (res[res.length - 1] === end - 2) res.push(end - 1)
    if (res[res.length - 1] === end - 3) res.push(end - 2)

    return res;
}


function renderPagination(elems, current, lastPage) {
    const markup = elems.map((index) => {
        if (index === 0) return `<li class = "pagination__item"><div class = "empryBox">...</div></li>`    
        if (index === 1) return `<li class = "pagination__item"><button type="button" class = "${index === current ? 'current' : ''} firstPage" data-btn="${index}">${index}</button></li>`
        if (index === lastPage) return `<li class = "pagination__item"><button type="button" class = "${index === current ? 'current' : ''} lastPage" data-btn="${index}">${index}</button></li>`

        return `<li class = "pagination__item"><button type="button" class = "${index === current ? 'current' : ''}" data-btn="${index}">${index}</button></li>`
    })

    markup.unshift(`<li class = "pagination__item"><button type="button" class = "left-arrow" data-btn="<"></button></li>`)
    markup.push(`<li class = "pagination__item"><button type="button" class = "right-arrow" data-btn=">"></button></li>`)
    paginationEl.innerHTML = markup.join('');
    paginationEl.dataset.lastpage = lastPage
}


function onPaginationClick(e) {
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
        const type = getQueryTypeLs().queryType
    if (type === 'getMovies') {
    saveCurrentPageLs(currentPage)
    movieDbApi.setPage(nextPage)
    movies();    
    }

    if (type === 'getOneMovie') {
        movieDbApi.setPage(currentPage)
        movieDbApi.fetchMovieName()
            .then(data => {
                filterResults(data)
                smoothScrool()
        }).catch(console.error)
    }

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

function saveCurrentPageLs(page) {
    try {
        localStorage.setItem(LS_CURRENT_PAGE_KEY, JSON.stringify({currentPage: page}))
    } catch (error) {
        console.log(error);
    }
}

function saveQueryTypeLs(type) {
    try {
    localStorage.setItem('queryType', JSON.stringify({queryType: type}));        
    } catch (error) {
        console.log(error);
    }
}

function getQueryTypeLs() {
    try {
        return JSON.parse(localStorage.getItem('queryType'))
    } catch (error) {
        console.log(error);        
    }
}

function getCurrentPageLs() {

    try {
    const data = JSON.parse(localStorage.getItem(LS_CURRENT_PAGE_KEY))
    if (!data) return 1
    return data.currentPage
    } catch (error) {
        console.log(error);
    }
}

export {createPagination, getCurrentPageLs, saveQueryTypeLs}
