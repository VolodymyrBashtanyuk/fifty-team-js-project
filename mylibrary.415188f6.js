var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire4f2e;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire4f2e=a),a("41Xpz"),a("9FQfP");var i=a("04fAi");const d=document.querySelector(".gallery");function r(e){return e.reduce(((e,t)=>e+function(e){const{title:t,genres:n,poster_path:a,release_date:d,id:r,vote_average:l}=e,c=n.map((e=>e.name)),s=c.join(", "),o=(0,i.smartGenre)(c,s);var f;return`\n<li class="film-card" id = ${r}>\n  <a href=''>\n  <div class="poster__thumb">\n      ${a?`<img class="poster" src="https://image.tmdb.org/t/p/w500${a}" alt="${t}"  />`:`<img class="poster" src=https://pixabay.com/get/g8ff089af213f7f36d1b7fabc1c8d5536a6a1cfdce9fd273bb5b53f7689c1046d065883ec139843d5671e752c90fc7d25af4a0a10c6f515e8c575547e6ee6da5d_1280.jpg alt="${t}" />`}\n    </div>\n    <p class="info-title">${null!=t?t:""}</p>\n    <div class="info-title info-item">\n      <p class="film__genre">${o||""}</p>\n        <button class="btn__etc ${c.length<=3?"hide":""}" type="button" data-all_ganre="${s}">...</button>\n      </p>\n      <p class="date">${null!==(f=d.slice(0,4))&&void 0!==f?f:""}\n      </p>\n      <p class="rating">${l.toFixed(1)}</p> \n    </div>\n  </a>\n</li>\n`}(t))," ")}function l(e){const t=r(e);d.innerHTML=t}a("5R1Ed"),a("4WJXV"),a("3oXzi"),a("fmbH8"),a("JKtT3"),a("2n5YO"),a("ken9v");var c=a("9FQfP");const s={btnWatchedHeaderEl:document.querySelector(".header__it--watched"),btnQueueHeaderEl:document.querySelector(".header__it--queue")};function o(e){s.btnWatchedHeaderEl.classList.add("is-active"),s.btnQueueHeaderEl.classList.remove("is-active");l((0,c.default)())}var f=a("jQ6a1");s.btnWatchedHeaderEl.classList.add("is-active"),s.btnWatchedHeaderEl.addEventListener("click",o),s.btnQueueHeaderEl.addEventListener("click",(function(e){s.btnWatchedHeaderEl.classList.remove("is-active"),s.btnQueueHeaderEl.classList.add("is-active"),l((0,f.default)())})),o();
//# sourceMappingURL=mylibrary.415188f6.js.map
