!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire4f2e;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequire4f2e=o),o.register("c45NQ",(function(t,n){e(t.exports,"saveGenre",(function(){return o})),e(t.exports,"getGenre",(function(){return a})),e(t.exports,"filmGenre",(function(){return s}));var r,i="genre";function o(e){localStorage.setItem(i,JSON.stringify(e))}function a(){r=JSON.parse(localStorage.getItem(i))}function s(e){return a(),r.filter((function(t){return e.some((function(e){return e===t.id}))})).map((function(e){return e.name}))}})),o.register("gn1bu",(function(t,n){function r(){try{return JSON.parse(localStorage.getItem("filmsWatched"))}catch(e){console.log(e)}}e(t.exports,"default",(function(){return r}))})),o.register("7db55",(function(t,n){e(t.exports,"refs",(function(){return i})),e(t.exports,"smartGenre",(function(){return c})),e(t.exports,"insertCreatedObject",(function(){return s}));var r=o("c45NQ"),i={gallery:document.querySelector(".gallery")};function a(e){return e.reduce((function(e,t){return e+function(e){var t,n=e.title,i=e.genre_ids,o=e.poster_path,a=e.release_date,s=e.id,l=(0,r.filmGenre)(i),u=l.join(", "),f=c(l,u);return'\n<li class="film-card" id = '.concat(s,">\n  <a href=''>\n    <div class=\"poster__thumb\">\n      ").concat(o?'<img class="poster" src="'.concat("https://image.tmdb.org/t/p/w500").concat(o,'" alt="').concat(n,'"  />'):'<img class="poster" src='.concat("https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg",' alt="').concat(n,'" />'),'\n    </div>\n    <p class="info-title">').concat(null!=n?n:"",'</p>\n    <div class="info-title info-item">\n      <p class="film__genre">').concat(f||"",'</p>\n      <button class="btn__etc ').concat(l.length<=3?"hide":"",'" type="button"\n        data-all_ganre="').concat(u,'">...</button>\n      </p>\n      <p class="">').concat(null!==(t=a.slice(0,4))&&void 0!==t?t:"","\n      </p>\n    </div>\n  </a>\n</li>\n")}(t)}),"")}function s(e){var t=a(e);i.gallery.innerHTML=t}function c(e,t){return e.length<=3?t:e.slice(0,3).join(", ")}})),o.register("gXLk6",(function(e,t){var n=document.querySelector(".footer__btn"),r=document.querySelector(".backdrop");n.addEventListener("click",(function(){r.classList.remove("is-hidden"),document.body.style.overflow="hidden"})),r.addEventListener("click",(function(e){var t=e.target.classList.contains("backdrop__button"),n=e.target.classList.contains("backdrop");if(!t&&!n)return;r.classList.add("is-hidden"),document.body.style.overflow="visible"})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&(r.classList.add("is-hidden"),document.body.style.overflow="visible")}))})),o.register("4O3HB",(function(e,n){var r=o("bpxeT"),i=o("2TvXO"),a=o("kitKc"),s=o("1FQbY"),c=o("9CLvO"),l=o("lWevi"),u=o("3lRpi"),f=o("ePYfc"),d=o("g2eb2"),m=o("gn1bu"),g=o("eljdP"),p=new(0,a.default);(0,m.default)(),(0,g.default)();function h(){return(h=t(r)(t(i).mark((function e(n){var r,o,a,m,g;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){if("btn-watched"===e.target.className){(0,c.default)(o);var t=document.getElementById("btn-w"),n=document.getElementById("btn-rw");t.classList.add("hide"),n.classList.remove("hide"),n.addEventListener("click",u.default)}else if("btn-queue"===e.target.className){(0,l.default)(o);var r=document.getElementById("btn-q"),i=document.getElementById("btn-rq");r.classList.add("hide"),i.classList.remove("hide"),i.addEventListener("click",f.default)}document.removeEventListener("click",a)},m=function(){for(var e=document.getElementById("btn-w"),t=document.getElementById("btn-rw"),n=JSON.parse(localStorage.getItem("filmsWatched"))||"[]",r=0;r<n.length;r+=1)if(o.id===n[r].id)return!0,e.classList.add("hide"),t.classList.remove("hide"),void t.addEventListener("click",u.default)},g=function(){for(var e=document.getElementById("btn-q"),t=document.getElementById("btn-rq"),n=JSON.parse(localStorage.getItem("filmsQueue"))||"[]",r=0;r<n.length;r+=1)if(o.id===n[r].id)return!0,e.classList.add("hide"),t.classList.remove("hide"),void t.addEventListener("click",f.default)},d.default.startSpinner(),e.prev=4,r=n.target.parentNode.parentNode.parentNode.id||n.target.parentNode.parentNode.id,e.next=8,p.fetchOneMovie(r);case 8:o=e.sent,(0,s.default)(o),d.default.removeSpinner(),document.addEventListener("click",a),m(),g(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))).apply(this,arguments)}document.querySelector(".gallery").addEventListener("click",(function(e){return h.apply(this,arguments)}))})),o.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))}}})),o.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof h?t:h,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=function(e,t,n){var r=f;return function(i,o){if(r===m)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw o;return C()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?g:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",m="executing",g="completed",p={};function h(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(O([])));k&&k!==n&&r.call(k,o)&&(b=k);var x=y.prototype=h.prototype=Object.create(b);function L(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,o,a,s){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:t,done:!0}}return v.prototype=y,c(x,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},L(E.prototype),c(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(x),c(x,s,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;_(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("kitKc",(function(n,r){e(n.exports,"default",(function(){return l}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),c=o("2TvXO"),l=function(){"use strict";function e(){t(a)(this,e),this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.MAIN_PAGE_URL="trending/movie/day",this.KEY="9d0cbfdf54c935b25322d86e1e3b7dd0",this.INFO_URL="movie/",this.SEARCH_URL="search/movie",this.GENRE_URL="/genre/movie/list",this.FETCH_QUERY=""}return t(s)(e,[{key:"fetchMovies",value:function(){var e=this;return t(i)(t(c).mark((function n(){var r,i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.BASE_URL).concat(e.MAIN_PAGE_URL,"?api_key=").concat(e.KEY,"&page=").concat(e.page));case 2:return r=t.sent,t.next=5,r.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),n)})))()}},{key:"fetchGenres",value:function(){var e=this;return t(i)(t(c).mark((function n(){var r,i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.BASE_URL).concat(e.GENRE_URL,"?api_key=").concat(e.KEY));case 2:return r=t.sent,t.next=5,r.json();case 5:return i=t.sent,t.abrupt("return",i.genres);case 7:case"end":return t.stop()}}),n)})))()}},{key:"fetchOneMovie",value:function(e){var n=this;return t(i)(t(c).mark((function r(){var i,o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n.BASE_URL,"movie/").concat(e,"?api_key=").concat(n.KEY,"&language=en-US"));case 2:return i=t.sent,t.next=5,i.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),r)})))()}},{key:"fetchMovieName",value:function(e){var n=this;return t(i)(t(c).mark((function e(){var r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n.BASE_URL,"search/movie?api_key=").concat(n.KEY,"&language=en-US&include_adult=false&query=").concat(n.FETCH_QUERY,"&page=").concat(n.page));case 2:return r=e.sent,e.next=5,r.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))()}},{key:"getPage",value:function(){return this.page}},{key:"setQuery",value:function(e){this.FETCH_QUERY=e}},{key:"setPage",value:function(e){this.page=e}}]),e}()})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("1FQbY",(function(t,n){e(t.exports,"default",(function(){return i}));var r={backdrop:document.querySelector(".backdrop-modal"),modal:document.querySelector(".modal-movie-cont")};function i(e){var t=function(e){var t,n,r=e.title,i=e.popularity,o=e.original_title,a=e.genres,s=e.overview,c=e.poster_path,l=e.vote_average,u=e.vote_count,f=a.map((function(e){return e.name})).join(", ");return'\n      \n      <div class="modal-movie-cont__img">\n      '.concat(c?'<img class="poster" src="'.concat("https://image.tmdb.org/t/p/w500").concat(c,'" alt="').concat(r,'"  />'):'<img class="poster" src='.concat("https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg",' alt="').concat(r,'" />'),'\n      </div>\n      \n      <div class="modal-movie-cont__data">\n\n        <div class="modal-movie-cont__about">\n          <h2 class="modal-movie__title">').concat(null!=r?r:"",'</h2>\n          <table class="modal-movie-table">\n          <tbody>\n            <tr>\n              <td class="modal-movie-table__item-name">Vote / Votes</td>\n              <td class="modal-movie-table__item-value">\n                <span class="vote">').concat(null!==(t=l.toFixed(1))&&void 0!==t?t:"",'</span> / \n                <span class="votes">').concat(null!=u?u:"",'</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Popularity</td>\n              <td class="modal-movie-table__item-value">').concat(null!==(n=i.toFixed(1))&&void 0!==n?n:"",'</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Original Title</td>\n              <td class="modal-movie-table__item-value">').concat(null!=o?o:"",'</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Genre</td>\n              <td class="modal-movie-table__item-value">').concat(null!=f?f:"",'</td>\n            </tr>\n          </tbody>\n          </table>\n\n          <h3 class="modal-movie-about">ABOUT</h3>\n          <p class="modal-movie-descr-movie">').concat(null!=s?s:"",'</p>\n        </div>\n      \n        <ul class="modal-movie__btn-list">\n            <li>\n                <button class="btn-watched" id=\'btn-w\' type="button">ADD TO WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-watched hide" id=\'btn-rw\' type="button">REMOVE FROM WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-queue" id=\'btn-q\'  type="button">ADD TO QUEUE</button>\n            </li>\n            <li>\n                <button class="btn-queue hide" id=\'btn-rq\' type="button">REMOVE FROM QUEUE</button>\n            </li>\n        </ul>\n\n     \n\n    </div>')}(e);r.modal.innerHTML=t}})),o.register("9CLvO",(function(t,n){e(t.exports,"default",(function(){return i}));var r=JSON.parse(localStorage.getItem("filmsWatched"))||[];function i(e){var t=e;if(""===e)return[];r.push(t),localStorage.setItem("filmsWatched",JSON.stringify(r))}})),o.register("lWevi",(function(t,n){e(t.exports,"default",(function(){return i}));var r=JSON.parse(localStorage.getItem("filmsQueue"))||[];function i(e){var t=e;if(""===e)return[];r.push(t),localStorage.setItem("filmsQueue",JSON.stringify(r))}})),o.register("3lRpi",(function(t,n){e(t.exports,"default",(function(){return i}));var r=JSON.parse(localStorage.getItem("filmsWatched"))||[];function i(e){var t=document.getElementById("btn-w"),n=document.getElementById("btn-rw");r.splice(e,1),localStorage.setItem("filmsWatched",JSON.stringify(r)),t.classList.remove("hide"),n.classList.add("hide")}})),o.register("ePYfc",(function(t,n){e(t.exports,"default",(function(){return i}));var r=JSON.parse(localStorage.getItem("filmsQueue"))||[];function i(e){var t=document.getElementById("btn-q"),n=document.getElementById("btn-rq");r.splice(e,1),localStorage.setItem("filmsQueue",JSON.stringify(r)),t.classList.remove("hide"),n.classList.add("hide")}})),o.register("g2eb2",(function(n,r){e(n.exports,"default",(function(){return c}));var i=o("8MBJY"),a=o("a2hTj"),s=o("7rQOT"),c=new(function(){"use strict";function e(){t(i)(this,e)}return t(a)(e,[{key:"startSpinner",value:function(){s.Loading.arrows({svgColor:"#ff6b01"})}},{key:"removeSpinner",value:function(){s.Loading.remove()}},{key:"erorrSpinner",value:function(){s.Loading.arrows("temporary problems",{svgColor:"#ff6b01"})}}]),e}())})),o.register("7rQOT",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",r="Hourglass",i="Circle",o="Arrows",a="Dots",s="Pulse",c="Custom",l="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},m=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=m(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},h=function(l,p,h,y,b){if(!d("body"))return!1;t||v.Loading.init({});var w=m(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof h&&!Array.isArray(h)){var k={};"object"==typeof p?k=p:"object"==typeof h&&(k=h),t=m(!0,t,k)}var x,L,E="";if("string"==typeof p&&p.length>0&&(E=p),y){var S="";(E=E.length>t.messageMaxLength?g(E).toString().substring(0,t.messageMaxLength)+"...":g(E).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+E+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var N="";if(l===n)x=t.svgSize,L=t.svgColor,x||(x="60px"),L||(L="#32c682"),N='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+L+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(l===r)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(l===i)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(l===o)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(l===a)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(l===s)N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(l===c&&null!==t.customSvgCode&&null===t.customSvgUrl)N=t.customSvgCode||"";else if(l===c&&null!==t.customSvgUrl&&null===t.customSvgCode)N='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(l===c&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;N=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var _=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),T=e.innerWidth,O=_>=T?T-40+"px":_+"px",C='<div style="width:'+O+"; height:"+O+';" class="'+t.className+"-icon"+(E.length>0?" nx-with-message":"")+'">'+N+"</div>",I=e.document.createElement("div");I.id=u.ID,I.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),I.style.zIndex=t.zindex,I.style.background=t.backgroundColor,I.style.animationDuration=t.cssAnimationDuration+"ms",I.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",t.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=C+S,e.document.getElementById(I.id)||(e.document.body.appendChild(I),t.clickToClose&&e.document.getElementById(I.id).addEventListener("click",(function(){I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(u.ID))var M=e.document.getElementById(u.ID),j=setTimeout((function(){M.classList.add("nx-remove");var e=setTimeout((function(){null!==M.parentNode&&(M.parentNode.removeChild(M),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(j)}),b);t=m(!0,t,w)},v={Loading:{init:function(n){t=m(!0,u,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=m(!0,t,e)},standard:function(e,t){h(n,e,t,!0,0)},hourglass:function(e,t){h(r,e,t,!0,0)},circle:function(e,t){h(i,e,t,!0,0)},arrows:function(e,t){h(o,e,t,!0,0)},dots:function(e,t){h(a,e,t,!0,0)},pulse:function(e,t){h(s,e,t,!0,0)},custom:function(e,t){h(c,e,t,!0,0)},notiflix:function(e,t){h(l,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),h(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=e.document.getElementById(u.ID);if(r)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,r.appendChild(o)}}else f("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?m(!0,e.Notiflix,{Loading:v.Loading}):{Loading:v.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),o.register("eljdP",(function(t,n){function r(){try{return JSON.parse(localStorage.getItem("filmsQueue"))}catch(e){console.log(e)}}e(t.exports,"default",(function(){return r}))})),o.register("kKk3f",(function(e,t){var n=document.querySelector(".gallery"),r={modal:document.querySelector(".modal-movie"),backdrop:document.querySelector(".backdrop-modal")};function i(e){"Escape"===e.code&&(r.backdrop.classList.remove("is-open"),document.removeEventListener("keydown",i),document.body.style.overflow="visible")}n.addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("info-title")&&!e.target.classList.contains("poster"))return;r.backdrop.classList.remove("hide"),r.backdrop.classList.add("is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",i),document.removeEventListener("click",i)})),r.backdrop.addEventListener("click",(function e(t){if(!t.target.classList.contains("backdrop-modal"))return;r.backdrop.classList.remove("is-open"),document.body.style.overflow="visible",document.removeEventListener("keydown",i),document.removeEventListener("click",e)})),document.querySelector("[data-modal-close]").addEventListener("click",(function(){r.backdrop.classList.add("hide"),document.body.style.overflow="visible"}))}))}();
//# sourceMappingURL=mylibrary.29764775.js.map
