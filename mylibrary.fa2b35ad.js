var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire4f2e;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire4f2e=r),r("41Xpz"),r("9FQfP"),r("41Xpz");const i=document.querySelector(".gallery");function o(e){return e.reduce(((e,n)=>e+function(e){const{title:n,genres:t,poster_path:r,release_date:i,id:o,vote_average:a}=e,l=t.map((e=>e.name)).join(",");var s;return`\n<li class="film-card" id = ${o}>\n  <a href=''>\n  <div class="poster__thumb">\n      ${r?`<img class="poster" src="https://image.tmdb.org/t/p/w500${r}" alt="${n}"  />`:`<img class="poster" src=${noImg} alt="${n}" />`}\n    </div>\n    <p class="info-title">${null!=n?n:""}</p>\n    <div class="info-title info-item">\n      <p class="film__genre">${l||""}</p>\n     \n      </p>\n      <p class="date">${null!==(s=i.slice(0,4))&&void 0!==s?s:""}\n      </p>\n      <p class="rating">${a.toFixed(1)}</p> \n    </div>\n  </a>\n</li>\n`}(n))," ")}function a(e){const n=o(e);i.innerHTML=n}r("5R1Ed"),r("4WJXV"),r("3oXzi"),r("fmbH8"),r("JKtT3"),r("2n5YO"),r("ken9v");var l=r("9FQfP");function s(e){a((0,l.default)())}var c=r("jQ6a1");const d=document.querySelector(".header__it--watched");const u=document.querySelector(".header__it--watched"),f=document.querySelector(".header__it--queue");u.addEventListener("click",s),f.addEventListener("click",(function(e){d.classList.remove("header__it--watched"),a((0,c.default)())})),s();
//# sourceMappingURL=mylibrary.fa2b35ad.js.map
