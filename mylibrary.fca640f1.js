function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire4f2e;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire4f2e=a),a.register("41Xpz",(function(t,n){e(t.exports,"saveGenre",(function(){return o})),e(t.exports,"getGenre",(function(){return r})),e(t.exports,"filmGenre",(function(){return s}));const i="genre";let a;function o(e){localStorage.setItem(i,JSON.stringify(e))}function r(){a=JSON.parse(localStorage.getItem(i))}function s(e){r();return a.filter((t=>e.some((e=>e===t.id)))).map((e=>e.name))}})),a.register("9FQfP",(function(t,n){function i(){try{return JSON.parse(localStorage.getItem("filmsWatched"))}catch(e){console.log(e)}}e(t.exports,"default",(function(){return i}))})),a.register("fFqLW",(function(t,n){e(t.exports,"libraryGallery",(function(){return o})),e(t.exports,"insertCreatedObject",(function(){return s}));var i=a("04fAi");const o=document.querySelector(".gallery");function r(e){return e.reduce(((e,t)=>e+function(e){const{title:t,genres:n,poster_path:a,release_date:o,id:r,vote_average:s}=e,l=n.map((e=>e.name)),c=l.join(", "),d=(0,i.smartGenre)(l,c);var m;return`\n<li class="film-card" id = ${r}>\n  <a href=''>\n  <div class="poster__thumb">\n      ${a?`<img class="poster" src="https://image.tmdb.org/t/p/w500${a}" alt="${t}"  />`:`<img class="poster" src=https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg alt="${t}" />`}\n    </div>\n    <p class="info-title">${null!=t?t:""}</p>\n    <div class="info-title info-item">\n      <p class="film__genre">${d||""}</p>\n        <button class="btn__etc ${l.length<=3?"hide":""}" type="button" data-all_ganre="${c}">...</button>\n      \n      <p class="date">${null!==(m=o.slice(0,4))&&void 0!==m?m:""}\n      </p>\n      <div>\n      <p class="rating">${s.toFixed(1)}</p>\n      </div>\n    </div>\n  </a>\n</li>\n`}(t))," ")}function s(e){const t=r(e);o.innerHTML=t}})),a.register("04fAi",(function(t,n){e(t.exports,"refs",(function(){return o})),e(t.exports,"smartGenre",(function(){return l})),e(t.exports,"insertCreatedObject",(function(){return s}));var i=a("41Xpz");const o={gallery:document.querySelector(".gallery")};function r(e){return e.reduce(((e,t)=>e+function(e){const{title:t,genre_ids:n,poster_path:a,release_date:o,id:r}=e,s=(0,i.filmGenre)(n),c=s.join(", "),d=l(s,c);var m;return`\n<li class="film-card" id = ${r}>\n  <a href=''>\n    <div class="poster__thumb">\n      ${a?`<img class="poster" src="https://image.tmdb.org/t/p/w500${a}" alt="${t}"  />`:`<img class="poster" src=https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg alt="${t}" />`}\n    </div>\n    <p class="info-title">${null!=t?t:""}</p>\n    <div class="info-title info-item">\n      <p class="film__genre">${d||""}</p>\n      <button class="btn__etc ${s.length<=3?"hide":""}" type="button"\n        data-all_ganre="${c}">...</button>\n      <p class="date">${null!==(m=o.slice(0,4))&&void 0!==m?m:""}\n      </p>\n    </div>\n  </a>\n</li>\n`}(t)),"")}function s(e){const t=r(e);o.gallery.innerHTML=t}function l(e,t){if(e.length<=3)return t;return e.slice(0,3).join(", ")}})),a.register("5R1Ed",(function(e,t){const n=document.querySelector(".footer__btn"),i=document.querySelector(".backdrop");n.addEventListener("click",(function(){i.classList.remove("is-hidden"),document.body.style.overflow="hidden"})),i.addEventListener("click",(function(e){const t=e.target.classList.contains("backdrop__button"),n=e.target.classList.contains("backdrop");if(!t&&!n)return;i.classList.add("is-hidden"),document.body.style.overflow="visible"})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&(i.classList.add("is-hidden"),document.body.style.overflow="visible")}))})),a.register("JKtT3",(function(e,t){var n=a("1TPJ0"),i=a("4WJXV"),o=a("2n5YO"),r=a("ken9v"),s=a("7xajI"),l=a("2I8x2"),c=a("3oXzi"),d=a("9FQfP"),m=a("jQ6a1");const f=new(0,n.default);(0,d.default)(),(0,m.default)();document.querySelector(".gallery").addEventListener("click",(async function(e){c.default.startSpinner();try{const t=e.target.parentNode.parentNode.parentNode.id||e.target.parentNode.parentNode.id,n=await f.fetchOneMovie(t);(0,i.default)(n),c.default.removeSpinner(),document.addEventListener("click",(function e(t){if("btn-watched"===t.target.className){(0,o.default)(n);const e=document.getElementById("btn-w"),t=document.getElementById("btn-rw");e.classList.add("hide"),t.classList.remove("hide"),t.addEventListener("click",s.default)}else if("btn-queue"===t.target.className){(0,r.default)(n);const e=document.getElementById("btn-q"),t=document.getElementById("btn-rq");e.classList.add("hide"),t.classList.remove("hide"),t.addEventListener("click",l.default)}document.removeEventListener("click",e)})),function(){const e=document.getElementById("btn-w"),t=document.getElementById("btn-rw"),i=JSON.parse(localStorage.getItem("filmsWatched"))||"[]";let a=!1;for(let o=0;o<i.length;o+=1)if(n.id===i[o].id)return a=!0,e.classList.add("hide"),t.classList.remove("hide"),void t.addEventListener("click",s.default)}(),function(){const e=document.getElementById("btn-q"),t=document.getElementById("btn-rq"),i=JSON.parse(localStorage.getItem("filmsQueue"))||"[]";let a=!1;for(let o=0;o<i.length;o+=1)if(n.id===i[o].id)return a=!0,e.classList.add("hide"),t.classList.remove("hide"),void t.addEventListener("click",l.default)}()}catch(e){console.log(e)}}))})),a.register("1TPJ0",(function(t,n){e(t.exports,"default",(function(){return i}));class i{async fetchMovies(){const e=await fetch(`${this.BASE_URL}${this.MAIN_PAGE_URL}?api_key=${this.KEY}&page=${this.page}`);return await e.json()}async fetchGenres(){const e=await fetch(`${this.BASE_URL}${this.GENRE_URL}?api_key=${this.KEY}`);return(await e.json()).genres}async fetchOneMovie(e){const t=await fetch(`${this.BASE_URL}movie/${e}?api_key=${this.KEY}&language=en-US`);return await t.json()}async fetchMovieName(e){const t=await fetch(`${this.BASE_URL}search/movie?api_key=${this.KEY}&language=en-US&include_adult=false&query=${this.FETCH_QUERY}&page=${this.page}`);return await t.json()}getPage(){return this.page}setQuery(e){this.FETCH_QUERY=e}setPage(e){this.page=e}constructor(){this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.MAIN_PAGE_URL="trending/movie/day",this.KEY="9d0cbfdf54c935b25322d86e1e3b7dd0",this.INFO_URL="movie/",this.SEARCH_URL="search/movie",this.GENRE_URL="/genre/movie/list",this.FETCH_QUERY=""}}})),a.register("4WJXV",(function(t,n){e(t.exports,"default",(function(){return a}));const i={backdrop:document.querySelector(".backdrop-modal"),modal:document.querySelector(".modal-movie-cont")};function a(e){const t=function(e){const{title:t,popularity:n,original_title:i,genres:a,overview:o,poster_path:r,vote_average:s,vote_count:l}=e,c=a.map((e=>e.name)).join(", ");var d,m;return`\n      \n      <div class="modal-movie-cont__img">\n      ${r?`<img class="poster" src="https://image.tmdb.org/t/p/w500${r}" alt="${t}"  />`:`<img class="poster" src=https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg alt="${t}" />`}\n      </div>\n      \n      <div class="modal-movie-cont__data">\n\n        <div class="modal-movie-cont__about">\n          <h2 class="modal-movie__title">${null!=t?t:""}</h2>\n          <table class="modal-movie-table">\n          <tbody>\n            <tr>\n              <td class="modal-movie-table__item-name">Vote / Votes</td>\n              <td class="modal-movie-table__item-value">\n                <span class="vote">${null!==(d=s.toFixed(1))&&void 0!==d?d:""}</span> / \n                <span class="votes">${null!=l?l:""}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Popularity</td>\n              <td class="modal-movie-table__item-value">${null!==(m=n.toFixed(1))&&void 0!==m?m:""}</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Original Title</td>\n              <td class="modal-movie-table__item-value">${null!=i?i:""}</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Genre</td>\n              <td class="modal-movie-table__item-value">${null!=c?c:""}</td>\n            </tr>\n          </tbody>\n          </table>\n\n          <h3 class="modal-movie-about">ABOUT</h3>\n          <p class="modal-movie-descr-movie">${null!=o?o:""}</p>\n        </div>\n      \n        <ul class="modal-movie__btn-list">\n            <li>\n                <button class="btn-watched" id='btn-w' type="button">ADD TO WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-watched hide" id='btn-rw' type="button">REMOVE FROM WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-queue" id='btn-q'  type="button">ADD TO QUEUE</button>\n            </li>\n            <li>\n                <button class="btn-queue hide" id='btn-rq' type="button">REMOVE FROM QUEUE</button>\n            </li>\n        </ul>\n\n     \n\n    </div>`}(e);i.modal.innerHTML=t}})),a.register("2n5YO",(function(t,n){e(t.exports,"default",(function(){return a}));let i=JSON.parse(localStorage.getItem("filmsWatched"))||[];function a(e){let t=e;if(""===e)return[];i.push(t),localStorage.setItem("filmsWatched",JSON.stringify(i))}})),a.register("ken9v",(function(t,n){e(t.exports,"default",(function(){return a}));let i=JSON.parse(localStorage.getItem("filmsQueue"))||[];function a(e){let t=e;if(""===e)return[];i.push(t),localStorage.setItem("filmsQueue",JSON.stringify(i))}})),a.register("7xajI",(function(t,n){e(t.exports,"default",(function(){return a}));let i=JSON.parse(localStorage.getItem("filmsWatched"))||[];function a(e){const t=document.getElementById("btn-w"),n=document.getElementById("btn-rw");i.splice(e,1),localStorage.setItem("filmsWatched",JSON.stringify(i)),t.classList.remove("hide"),n.classList.add("hide")}})),a.register("2I8x2",(function(t,n){e(t.exports,"default",(function(){return a}));let i=JSON.parse(localStorage.getItem("filmsQueue"))||[];function a(e){const t=document.getElementById("btn-q"),n=document.getElementById("btn-rq");i.splice(e,1),localStorage.setItem("filmsQueue",JSON.stringify(i)),t.classList.remove("hide"),n.classList.add("hide")}})),a.register("3oXzi",(function(t,n){e(t.exports,"default",(function(){return o}));var i=a("dSs1Y");var o=new class{startSpinner(){i.Loading.arrows({svgColor:"#ff6b01"})}removeSpinner(){i.Loading.remove()}erorrSpinner(){i.Loading.arrows("temporary problems",{svgColor:"#ff6b01"})}constructor(){}}})),a.register("dSs1Y",(function(e,n){var i,a;i=void 0!==t?t:"undefined"!=typeof window?window:e.exports,a=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",a="Circle",o="Arrows",r="Dots",s="Pulse",l="Custom",c="Notiflix",d={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},m=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},f=function(t){return t||(t="head"),null!==e.document[t]||(m('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},u=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=u(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},b=function(c,p,b,v,y){if(!f("body"))return!1;t||h.Loading.init({});var k=u(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof b&&!Array.isArray(b)){var w={};"object"==typeof p?w=p:"object"==typeof b&&(w=b),t=u(!0,t,w)}var x,L,S="";if("string"==typeof p&&p.length>0&&(S=p),v){var N="";(S=S.length>t.messageMaxLength?g(S).toString().substring(0,t.messageMaxLength)+"...":g(S).toString()).length>0&&(N='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+S+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var E="";if(c===n)x=t.svgSize,L=t.svgColor,x||(x="60px"),L||(L="#32c682"),E='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+L+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)E=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)E='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return m('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;E=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var _=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),I=e.innerWidth,C=_>=I?I-40+"px":_+"px",T='<div style="width:'+C+"; height:"+C+';" class="'+t.className+"-icon"+(S.length>0?" nx-with-message":"")+'">'+E+"</div>",$=e.document.createElement("div");$.id=d.ID,$.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),$.style.zIndex=t.zindex,$.style.background=t.backgroundColor,$.style.animationDuration=t.cssAnimationDuration+"ms",$.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',$.style.display="flex",$.style.flexWrap="wrap",$.style.flexDirection="column",$.style.alignItems="center",$.style.justifyContent="center",t.rtl&&($.setAttribute("dir","rtl"),$.classList.add("nx-rtl-on")),$.innerHTML=T+N,e.document.getElementById($.id)||(e.document.body.appendChild($),t.clickToClose&&e.document.getElementById($.id).addEventListener("click",(function(){$.classList.add("nx-remove");var e=setTimeout((function(){null!==$.parentNode&&($.parentNode.removeChild($),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(d.ID))var M=e.document.getElementById(d.ID),z=setTimeout((function(){M.classList.add("nx-remove");var e=setTimeout((function(){null!==M.parentNode&&(M.parentNode.removeChild(M),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(z)}),y);t=u(!0,t,k)},h={Loading:{init:function(n){t=u(!0,d,n),function(t,n){if(!f("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return m("You have to initialize the Loading module before call Merge function."),!1;t=u(!0,t,e)},standard:function(e,t){b(n,e,t,!0,0)},hourglass:function(e,t){b(i,e,t,!0,0)},circle:function(e,t){b(a,e,t,!0,0)},arrows:function(e,t){b(o,e,t,!0,0)},dots:function(e,t){b(r,e,t,!0,0)},pulse:function(e,t){b(s,e,t,!0,0)},custom:function(e,t){b(l,e,t,!0,0)},notiflix:function(e,t){b(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),b(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(d.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else m("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?u(!0,e.Notiflix,{Loading:h.Loading}):{Loading:h.Loading}},"function"==typeof define&&define.amd?define([],(function(){return a(i)})):"object"==typeof e.exports?e.exports=a(i):i.Notiflix=a(i)})),a.register("jQ6a1",(function(t,n){function i(){try{return JSON.parse(localStorage.getItem("filmsQueue"))}catch(e){console.log(e)}}e(t.exports,"default",(function(){return i}))})),a.register("fmbH8",(function(e,t){const n=document.querySelector(".gallery"),i={modal:document.querySelector(".modal-movie"),backdrop:document.querySelector(".backdrop-modal")};function a(e){"Escape"===e.code&&(i.backdrop.classList.remove("is-open"),document.removeEventListener("keydown",a),document.body.style.overflow="visible")}n.addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("info-title")&&!e.target.classList.contains("poster"))return;i.backdrop.classList.remove("hide"),i.backdrop.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",a),document.removeEventListener("click",a)})),i.backdrop.addEventListener("click",(function e(t){if(!t.target.classList.contains("backdrop-modal"))return;i.backdrop.classList.remove("is-open"),document.body.style.overflow="visible",document.removeEventListener("keydown",a),document.removeEventListener("click",e)}));document.querySelector("[data-modal-close]").addEventListener("click",(()=>{i.backdrop.classList.add("hide"),document.body.style.overflow="visible"}))})),a.register("cj99M",(function(e,t){var n=a("04fAi"),i=a("fFqLW");function o(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.all_ganre;e.target.previousSibling.previousSibling.textContent=`${t}`,e.target.classList.add("hide")}n.refs.gallery.addEventListener("click",o),i.libraryGallery.addEventListener("click",o)}));
//# sourceMappingURL=mylibrary.fca640f1.js.map
