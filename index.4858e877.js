!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequire4f2e;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequire4f2e=a);var o=a("bpxeT"),i=a("2TvXO"),s=a("kitKc"),c=a("nHeB5"),u=a("g2eb2"),l=a("c45NQ"),f=a("fQKlA"),p=(f=a("fQKlA"),a("23Ajj"));a("5d98G"),a("kKk3f");o=a("bpxeT"),i=a("2TvXO"),c=a("nHeB5"),u=a("g2eb2");var d,g,v="currentPage";function b(t){var e=t.page,n=void 0===e?1:e,r=t.total_pages;!function(t,e,n){var r=t.map((function(t){return 0===t?'<li class = "pagination__item"><div class = "empryBox">...</div></li>':1===t?'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",' firstPage" data-btn="').concat(t,'">').concat(t,"</button></li>"):t===n?'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",' lastPage" data-btn="').concat(t,'">').concat(t,"</button></li>"):'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",'" data-btn="').concat(t,'">').concat(t,"</button></li>")}));r.unshift('<li class = "pagination__item"><button type="button" class = "left-arrow" data-btn="<"></button></li>'),r.push('<li class = "pagination__item"><button type="button" class = "right-arrow" data-btn=">"></button></li>'),m.innerHTML=r.join(""),m.dataset.lastpage=n}(function(t,e){for(var n=[],r=t-2;r<=t+2;r+=1)r>=1&&r<=e&&n.push(r);2===n[0]&&n.unshift(1);n[0]>3&&n.unshift(1,0);n[n.length-1]<e&&n.push(0,e);n[n.length-1]===e-2&&n.push(e-1);n[n.length-1]===e-3&&n.push(e-2);return n}(d=n,g=r),d,g)}var m=document.querySelector(".pagination");function y(){return(y=t(o)(t(i).mark((function e(){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.default.startSpinner(),t.prev=1,t.next=4,G.fetchMovies();case 4:n=t.sent,(0,c.insertCreatedObject)(n.results),b(n),u.default.removeSpinner(),h(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function h(){window.scrollTo({top:0,behavior:"smooth"})}function S(t){try{localStorage.setItem("queryType",JSON.stringify({queryType:t}))}catch(t){console.log(t)}}m.addEventListener("click",(function(t){if("DIV"===t.target.nodeName||"BUTTON"!==t.target.nodeName)return;if(t.target.classList.contains("current"))return;var e;"<"!==t.target.dataset.btn&&">"!==t.target.dataset.btn&&(e=+t.target.dataset.btn);if("<"===t.target.dataset.btn&&1===d)return;if(">"===t.target.dataset.btn&&d===g)return;"<"===t.target.dataset.btn&&d>1&&(e=d-=1);">"===t.target.dataset.btn&&d<g&&(e=d+=1);d=e;var n=function(){try{return JSON.parse(localStorage.getItem("queryType"))}catch(t){console.log(t)}}().queryType;"getMovies"===n&&(function(t){try{localStorage.setItem(v,JSON.stringify({currentPage:t}))}catch(t){console.log(t)}}(d),G.setPage(e),function(){y.apply(this,arguments)}());"getOneMovie"===n&&(G.setPage(d),G.fetchMovieName().then((function(t){_(t),h()})).catch(console.error))}));c=a("nHeB5"),u=a("g2eb2");var T={form:document.querySelector(".form"),falseresultMessage:document.querySelector(".falseresult__message"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination")};function _(t){if(u.default.startSpinner(),0===t.total_results)return T.falseresultMessage.classList.remove("hide"),T.gallery.innerHTML="",T.pagination.innerHTML="",void u.default.removeSpinner();t.total_results>0&&((0,c.insertCreatedObject)(t.results),u.default.removeSpinner()),t.total_pages>1&&S("getOneMovie"),b(t),u.default.removeSpinner()}a("gXLk6");var x={},O={};Object.defineProperty(O,"__esModule",{value:!0}),O.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var w=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,N=/^0o[0-7]+$/i,k=parseInt,L="object"==typeof e&&e&&e.Object===Object&&e,q="object"==typeof self&&self&&self.Object===Object&&self,P=L||q||Function("return this")(),E=Object.prototype.toString,B=Math.max,C=Math.min,H=function(){return P.Date.now()};function I(e){var n=void 0===e?"undefined":t(O)(e);return!!e&&("object"==n||"function"==n)}function D(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(O)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==E.call(e)}(e))return NaN;if(I(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=I(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var r=j.test(e);return r||N.test(e)?k(e.slice(2),r?2:8):M.test(e)?NaN:+e}x=function(t,e,n){var r,a,o,i,s,c,u=0,l=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,o=a;return r=a=void 0,u=e,i=t.apply(o,n)}function g(t){return u=t,s=setTimeout(b,e),l?d(t):i}function v(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-u>=o}function b(){var t=H();if(v(t))return m(t);s=setTimeout(b,function(t){var n=e-(t-c);return f?C(n,o-(t-u)):n}(t))}function m(t){return s=void 0,p&&r?d(t):(r=a=void 0,i)}function y(){var t=H(),n=v(t);if(r=arguments,a=this,c=t,n){if(void 0===s)return g(c);if(f)return s=setTimeout(b,e),d(c)}return void 0===s&&(s=setTimeout(b,e)),i}return e=D(e)||0,I(n)&&(l=!!n.leading,o=(f="maxWait"in n)?B(D(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=a=s=void 0},y.flush=function(){return void 0===s?i:m(H())},y};var G=new(0,s.default);function J(){return(J=t(o)(t(i).mark((function e(){var n,r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.default.startSpinner(),t.prev=1,t.next=4,G.fetchMovies();case 4:return n=t.sent,t.next=7,G.fetchGenres();case 7:r=t.sent,void 0===(0,l.getGenre)()&&(0,l.saveGenre)(r),(0,c.insertCreatedObject)(n.results),n.total_pages>1&&b(n),u.default.removeSpinner(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}function K(){return(K=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),T.falseresultMessage.classList.add("hide"),r=n.currentTarget.elements.search.value,t.prev=3,G.setPage(1),G.setQuery(r),t.next=8,G.fetchMovieName();case 8:_(t.sent),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}G.setPage(function(){try{var t=JSON.parse(localStorage.getItem(v));return t?t.currentPage:1}catch(t){console.log(t)}}()),S("getMovies"),function(){J.apply(this,arguments)}(),T.form.addEventListener("submit",(function(t){return K.apply(this,arguments)})),T.form.addEventListener("input",x((function(t){""===t.target.value&&T.falseresultMessage.classList.add("hide")}),300)),document.querySelector(".gallery").addEventListener("click",f.onCardFilmClick),p.scrollUp.addEventListener("click",p.smoothScrollToBottomPage)}();
//# sourceMappingURL=index.4858e877.js.map
