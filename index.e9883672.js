var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire4f2e;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequire4f2e=a);var r=a("1TPJ0"),o=a("41Xpz");const i={gallery:document.querySelector(".gallery")};function s(t){return t.reduce(((t,e)=>t+function(t){const{title:e,genre_ids:n,poster_path:a,release_date:r,id:i}=t,s=(0,o.filmGenre)(n),l=s.join(", "),c=function(t,e){return t.length<=3?e:t.slice(0,3).join(", ")}(s,l);var u;return`\n<li class="film-card" id = ${i}>\n  <a href=''>\n    <div class="poster__thumb">\n      ${a?`<img class="poster" src="https://image.tmdb.org/t/p/w500${a}" alt="${e}"  />`:`<img class="poster" src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6UB-bP8Q1VOTxmMLs-1v1d6LN4b7H7U3Ng&usqp=CAU alt="${e}" />`}\n    </div>\n    <p class="info-title">${null!=e?e:""}</p>\n    <div class="info-title info-item">\n      <p class="film__genre">${c||""}</p>\n      <button class="btn__etc ${s.length<=3?"hide":""}" type="button"\n        data-all_ganre="${l}">...</button>\n      </p>\n      <p class="">${null!==(u=r.slice(0,4))&&void 0!==u?u:""}\n      </p>\n    </div>\n  </a>\n</li>\n`}(e)),"")}function l(t){const e=s(t);i.gallery.innerHTML=e}var c=a("3oXzi");o=a("41Xpz");a("2n5YO"),a("ken9v"),i.gallery.addEventListener("click",(function(t){t.preventDefault();document.querySelectorAll(".btn__etc");if("BUTTON"!==t.target.nodeName)return;const e=t.target.dataset.all_ganre;t.target.previousSibling.previousSibling.textContent=`${e}`,t.target.classList.add("hide")})),a("fmbH8");c=a("3oXzi");let u,f;function g({page:t=1,total_pages:e}){u=t,f=e;!function(t,e,n){const a=t.map((t=>0===t?'<li class = "pagination__item"><div class = "empryBox">...</div></li>':1===t?`<li class = "pagination__item"><button type="button" class = "${t===e?"current":""} firstPage" data-btn="${t}">${t}</button></li>`:t===n?`<li class = "pagination__item"><button type="button" class = "${t===e?"current":""} lastPage" data-btn="${t}">${t}</button></li>`:`<li class = "pagination__item"><button type="button" class = "${t===e?"current":""}" data-btn="${t}">${t}</button></li>`));a.unshift('<li class = "pagination__item"><button type="button" class = "left-arrow" data-btn="<"></button></li>'),a.push('<li class = "pagination__item"><button type="button" class = "right-arrow" data-btn=">"></button></li>'),d.innerHTML=a.join(""),d.dataset.lastpage=n}(function(t,e){const n=[];for(let a=t-2;a<=t+2;a+=1)a>=1&&a<=e&&n.push(a);2===n[0]&&n.unshift(1);n[0]>3&&n.unshift(1,0);n[n.length-1]<e&&n.push(0,e);n[n.length-1]===e-2&&n.push(e-1);n[n.length-1]===e-3&&n.push(e-2);return n}(u,f),u,f)}const d=document.querySelector(".pagination");function p(){window.scrollTo({top:0,behavior:"smooth"})}function b(t){try{localStorage.setItem("queryType",JSON.stringify({queryType:t}))}catch(t){console.log(t)}}d.addEventListener("click",(function(t){if("DIV"===t.target.nodeName||"BUTTON"!==t.target.nodeName)return;if(t.target.classList.contains("current"))return;let e;"<"!==t.target.dataset.btn&&">"!==t.target.dataset.btn&&(e=+t.target.dataset.btn);if("<"===t.target.dataset.btn&&1===u)return;if(">"===t.target.dataset.btn&&u===f)return;"<"===t.target.dataset.btn&&u>1&&(e=u-=1);">"===t.target.dataset.btn&&u<f&&(e=u+=1);u=e;const n=function(){try{return JSON.parse(localStorage.getItem("queryType"))}catch(t){console.log(t)}}().queryType;"getMovies"===n&&(function(t){try{localStorage.setItem("currentPage",JSON.stringify({currentPage:t}))}catch(t){console.log(t)}}(u),E.setPage(e),async function(){c.default.startSpinner();try{const t=await E.fetchMovies();console.log(t),l(t.results),g(t),c.default.removeSpinner(),p()}catch(t){console.log(t)}}());"getOneMovie"===n&&(E.setPage(u),E.fetchMovieName().then((t=>{m(t),p()})).catch(console.error))}));c=a("3oXzi");const v={form:document.querySelector(".form"),falseresultMessage:document.querySelector(".falseresult__message")};function m(t){0!==t.total_results?(t.total_results>0&&l(t.results),t.total_pages>1&&b("getOneMovie"),g(t),c.default.removeSpinner()):v.falseresultMessage.classList.remove("hide")}a("5R1Ed");a("JKtT3");a("fmbH8");var y={},h=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,$=/^0o[0-7]+$/i,S=parseInt,N="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,w=N||O||Function("return this")(),M=Object.prototype.toString,L=Math.max,j=Math.min,q=function(){return w.Date.now()};function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function P(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==M.call(t)}(t))return NaN;if(x(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=x(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var n=T.test(t);return n||$.test(t)?S(t.slice(2),n?2:8):_.test(t)?NaN:+t}y=function(t,e,n){var a,r,o,i,s,l,c=0,u=!1,f=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=a,o=r;return a=r=void 0,c=e,i=t.apply(o,n)}function p(t){return c=t,s=setTimeout(v,e),u?d(t):i}function b(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-c>=o}function v(){var t=q();if(b(t))return m(t);s=setTimeout(v,function(t){var n=e-(t-l);return f?j(n,o-(t-c)):n}(t))}function m(t){return s=void 0,g&&a?d(t):(a=r=void 0,i)}function y(){var t=q(),n=b(t);if(a=arguments,r=this,l=t,n){if(void 0===s)return p(l);if(f)return s=setTimeout(v,e),d(l)}return void 0===s&&(s=setTimeout(v,e)),i}return e=P(e)||0,x(n)&&(u=!!n.leading,o=(f="maxWait"in n)?L(P(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=r=s=void 0},y.flush=function(){return void 0===s?i:m(q())},y};v.falseresultMessage.classList.add("hide");const E=new(0,r.default);E.setPage(function(){try{const t=JSON.parse(localStorage.getItem("currentPage"));return t?t.currentPage:1}catch(t){console.log(t)}}()),b("getMovies"),async function(){c.default.startSpinner();try{const t=await E.fetchMovies(),e=await E.fetchGenres();void 0===(0,o.getGenre)()&&(0,o.saveGenre)(e),l(t.results),t.total_pages>1&&g(t),c.default.removeSpinner()}catch(t){console.log(t)}}(),v.form.addEventListener("submit",(async function(t){t.preventDefault(),v.falseresultMessage.classList.add("hide");const e=t.currentTarget.elements.search.value;try{E.setPage(1),E.setQuery(e);m(await E.fetchMovieName())}catch(t){console.log(t)}})),v.form.addEventListener("input",y((function(t){""===t.target.value&&v.falseresultMessage.classList.add("hide")}),300));
//# sourceMappingURL=index.e9883672.js.map
