!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequire4f2e;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequire4f2e=a);var o=a("bpxeT"),i=a("2TvXO"),c=a("kitKc"),s=a("c45NQ"),u={gallery:document.querySelector(".gallery")};function l(t){return t.reduce((function(t,e){return t+function(t){var e,n=t.title,r=t.genre_ids,a=t.poster_path,o=t.release_date,i=t.id,c=(0,s.filmGenre)(r),u=c.join(", "),l=function(t,e){return t.length<=3?e:t.slice(0,3).join(", ")}(c,u);return'\n<li class="film-card" id = '.concat(i,">\n  <a href=''>\n    <div class=\"poster__thumb\">\n      ").concat(a?'<img class="poster" src="'.concat("https://image.tmdb.org/t/p/w500").concat(a,'" alt="').concat(n,'"  />'):'<img class="poster" src='.concat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6UB-bP8Q1VOTxmMLs-1v1d6LN4b7H7U3Ng&usqp=CAU",' alt="').concat(n,'" />'),'\n    </div>\n    <p class="info-title">').concat(null!=n?n:"",'</p>\n    <div class="info-title info-item">\n      <p class="film__genre">').concat(l||"",'</p>\n      <button class="btn__etc ').concat(c.length<=3?"hide":"",'" type="button"\n        data-all_ganre="').concat(u,'">...</button>\n      </p>\n      <p class="">').concat(null!==(e=o.slice(0,4))&&void 0!==e?e:"","\n      </p>\n    </div>\n  </a>\n</li>\n")}(e)}),"")}function f(t){var e=l(t);u.gallery.innerHTML=e}var p=a("g2eb2");s=a("c45NQ");a("9CLvO"),a("lWevi"),u.gallery.addEventListener("click",(function(t){t.preventDefault();document.querySelectorAll(".btn__etc");if("BUTTON"!==t.target.nodeName)return;var e=t.target.dataset.all_ganre;t.target.previousSibling.previousSibling.textContent="".concat(e),t.target.classList.add("hide")})),a("kKk3f");o=a("bpxeT"),i=a("2TvXO"),p=a("g2eb2");var d,g,v="currentPage";function b(t){var e=t.page,n=void 0===e?1:e,r=t.total_pages;!function(t,e,n){var r=t.map((function(t){return 0===t?'<li class = "pagination__item"><div class = "empryBox">...</div></li>':1===t?'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",' firstPage" data-btn="').concat(t,'">').concat(t,"</button></li>"):t===n?'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",' lastPage" data-btn="').concat(t,'">').concat(t,"</button></li>"):'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",'" data-btn="').concat(t,'">').concat(t,"</button></li>")}));r.unshift('<li class = "pagination__item"><button type="button" class = "left-arrow" data-btn="<"></button></li>'),r.push('<li class = "pagination__item"><button type="button" class = "right-arrow" data-btn=">"></button></li>'),m.innerHTML=r.join(""),m.dataset.lastpage=n}(function(t,e){for(var n=[],r=t-2;r<=t+2;r+=1)r>=1&&r<=e&&n.push(r);2===n[0]&&n.unshift(1);n[0]>3&&n.unshift(1,0);n[n.length-1]<e&&n.push(0,e);n[n.length-1]===e-2&&n.push(e-1);n[n.length-1]===e-3&&n.push(e-2);return n}(d=n,g=r),d,g)}var m=document.querySelector(".pagination");function h(){return(h=t(o)(t(i).mark((function e(){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.default.startSpinner(),t.prev=1,t.next=4,Q.fetchMovies();case 4:n=t.sent,console.log(n),f(n.results),b(n),p.default.removeSpinner(),y(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function y(){window.scrollTo({top:0,behavior:"smooth"})}function _(t){try{localStorage.setItem("queryType",JSON.stringify({queryType:t}))}catch(t){console.log(t)}}m.addEventListener("click",(function(t){if("DIV"===t.target.nodeName||"BUTTON"!==t.target.nodeName)return;if(t.target.classList.contains("current"))return;var e;"<"!==t.target.dataset.btn&&">"!==t.target.dataset.btn&&(e=+t.target.dataset.btn);if("<"===t.target.dataset.btn&&1===d)return;if(">"===t.target.dataset.btn&&d===g)return;"<"===t.target.dataset.btn&&d>1&&(e=d-=1);">"===t.target.dataset.btn&&d<g&&(e=d+=1);d=e;var n=function(){try{return JSON.parse(localStorage.getItem("queryType"))}catch(t){console.log(t)}}().queryType;"getMovies"===n&&(function(t){try{localStorage.setItem(v,JSON.stringify({currentPage:t}))}catch(t){console.log(t)}}(d),Q.setPage(e),function(){h.apply(this,arguments)}());"getOneMovie"===n&&(Q.setPage(d),Q.fetchMovieName().then((function(t){x(t),y()})).catch(console.error))}));p=a("g2eb2");var T={form:document.querySelector(".form"),falseresultMessage:document.querySelector(".falseresult__message")};function x(t){0!==t.total_results?(t.total_results>0&&f(t.results),t.total_pages>1&&_("getOneMovie"),b(t),p.default.removeSpinner()):T.falseresultMessage.classList.remove("hide")}a("gXLk6");a("4O3HB");a("kKk3f");var O={},S={};Object.defineProperty(S,"__esModule",{value:!0}),S.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var N=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,L=/^0o[0-7]+$/i,j=parseInt,k="object"==typeof e&&e&&e.Object===Object&&e,q="object"==typeof self&&self&&self.Object===Object&&self,P=k||q||Function("return this")(),E=Object.prototype.toString,U=Math.max,D=Math.min,I=function(){return P.Date.now()};function B(e){var n=void 0===e?"undefined":t(S)(e);return!!e&&("object"==n||"function"==n)}function G(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(S)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==E.call(e)}(e))return NaN;if(B(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=B(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(N,"");var r=M.test(e);return r||L.test(e)?j(e.slice(2),r?2:8):w.test(e)?NaN:+e}O=function(t,e,n){var r,a,o,i,c,s,u=0,l=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,o=a;return r=a=void 0,u=e,i=t.apply(o,n)}function g(t){return u=t,c=setTimeout(b,e),l?d(t):i}function v(t){var n=t-s;return void 0===s||n>=e||n<0||f&&t-u>=o}function b(){var t=I();if(v(t))return m(t);c=setTimeout(b,function(t){var n=e-(t-s);return f?D(n,o-(t-u)):n}(t))}function m(t){return c=void 0,p&&r?d(t):(r=a=void 0,i)}function h(){var t=I(),n=v(t);if(r=arguments,a=this,s=t,n){if(void 0===c)return g(s);if(f)return c=setTimeout(b,e),d(s)}return void 0===c&&(c=setTimeout(b,e)),i}return e=G(e)||0,B(n)&&(l=!!n.leading,o=(f="maxWait"in n)?U(G(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=s=a=c=void 0},h.flush=function(){return void 0===c?i:m(I())},h};T.falseresultMessage.classList.add("hide");var Q=new(0,c.default);function C(){return(C=t(o)(t(i).mark((function e(){var n,r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p.default.startSpinner(),t.prev=1,t.next=4,Q.fetchMovies();case 4:return n=t.sent,t.next=7,Q.fetchGenres();case 7:r=t.sent,void 0===(0,s.getGenre)()&&(0,s.saveGenre)(r),f(n.results),n.total_pages>1&&b(n),p.default.removeSpinner(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}function H(){return(H=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),T.falseresultMessage.classList.add("hide"),r=n.currentTarget.elements.search.value,t.prev=3,Q.setPage(1),Q.setQuery(r),t.next=8,Q.fetchMovieName();case 8:x(t.sent),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}Q.setPage(function(){try{var t=JSON.parse(localStorage.getItem(v));return t?t.currentPage:1}catch(t){console.log(t)}}()),_("getMovies"),function(){C.apply(this,arguments)}(),T.form.addEventListener("submit",(function(t){return H.apply(this,arguments)})),T.form.addEventListener("input",O((function(t){""===t.target.value&&T.falseresultMessage.classList.add("hide")}),300))}();
//# sourceMappingURL=index.1f944582.js.map
