!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};function a(t,e,n,a,r,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var r=e&&e.prototype instanceof h?e:h,o=Object.create(r.prototype),i=new T(a||[]);return o._invoke=function(t,e,n){var a=f;return function(r,o){if(a===d)throw new Error("Generator is already running");if(a===g){if("throw"===r)throw o;return M()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=d;var c=u(t,e,n);if("normal"===c.type){if(a=n.done?g:m,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=g,n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",m="suspendedYield",d="executing",g="completed",p={};function h(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(C([])));k&&k!==n&&a.call(k,o)&&(b=k);var x=y.prototype=h.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(r,o,i,s){var c=u(t[r],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var r;this._invoke=function(t,a){function o(){return new e((function(e,r){n(t,a,e,r)}))}return r=r?r.then(o,o):o()}}function S(t,n){var a=t.iterator[n.method];if(a===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=u(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return v.prototype=y,c(x,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),c(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new _(l(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),c(x,s,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return s.type="throw",s.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;E(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:C(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),p}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var s={};function c(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(t,e,n){e&&c(t.prototype,e);n&&c(t,n);return t};var l,u=function(){"use strict";function e(){t(i)(this,e),this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.MAIN_PAGE_URL="trending/movie/day",this.KEY="9d0cbfdf54c935b25322d86e1e3b7dd0",this.INFO_URL="movie/",this.SEARCH_URL="search/movie",this.GENRE_URL="/genre/movie/list"}return t(s)(e,[{key:"fetchMovies",value:function(){var e=this;return t(n)(t(r).mark((function n(){var a,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.BASE_URL).concat(e.MAIN_PAGE_URL,"?api_key=").concat(e.KEY,"&page=").concat(e.page));case 2:return a=t.sent,t.next=5,a.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),n)})))()}},{key:"fetchGenres",value:function(){var e=this;return t(n)(t(r).mark((function n(){var a,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.BASE_URL).concat(e.GENRE_URL,"?api_key=").concat(e.KEY));case 2:return a=t.sent,t.next=5,a.json();case 5:return o=t.sent,t.abrupt("return",o.genres);case 7:case"end":return t.stop()}}),n)})))()}},{key:"fetchOneMovie",value:function(e){var a=this;return t(n)(t(r).mark((function n(){var o,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.BASE_URL,"movie/").concat(e,"?api_key=").concat(a.KEY,"&language=en-US"));case 2:return o=t.sent,t.next=5,o.json();case 5:return i=t.sent,console.log(i),t.abrupt("return",i);case 8:case"end":return t.stop()}}),n)})))()}},{key:"fetchMovieName",value:function(e){var a=this;return t(n)(t(r).mark((function n(){var o,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a.BASE_URL,"search/movie?api_key=").concat(a.KEY,"&language=en-US&include_adult=false&query=").concat(e));case 2:return o=t.sent,t.next=5,o.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),n)})))()}},{key:"getPage",value:function(){return this.page}},{key:"setPage",value:function(t){this.page=t}}]),e}(),f="genre";function m(t){localStorage.setItem(f,JSON.stringify(t))}function d(){l=JSON.parse(localStorage.getItem(f))}function g(t){return d(),l.filter((function(e){return t.some((function(t){return t===e.id}))})).map((function(t){return t.name}))}var p={gallery:document.querySelector(".gallery")};function h(t){var e,n=t.title,a=t.genre_ids,r=t.poster_path,o=t.release_date,i=t.id,s=g(a),c=s.join(", "),l=function(t,e){return t.length<=3?e:t.slice(0,3).join(", ")}(s,c);return'\n<li class="film-card" id = '.concat(i,">\n  <a href=''>\n    <div class=\"poster__thumb\">\n      ").concat(r?'<img class="poster" src="'.concat("https://image.tmdb.org/t/p/w500").concat(r,'" alt="').concat(n,'"  />'):'<img class="poster" src='.concat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6UB-bP8Q1VOTxmMLs-1v1d6LN4b7H7U3Ng&usqp=CAU",' alt="').concat(n,'" />'),'\n    </div>\n    <p class="info-title">').concat(null!=n?n:"",'</p>\n    <div class="info-title info-item">\n      <p class="film__genre">').concat(l||"",'</p>\n      <button class="btn__etc ').concat(s.length<=3?"hide":"",'" type="button"\n        data-all_ganre="').concat(c,'">...</button>\n      </p>\n      <p class="">').concat(null!==(e=o.slice(0,4))&&void 0!==e?e:"","\n      </p>\n    </div>\n  </a>\n</li>\n")}function v(t){var e=function(t){return t.reduce((function(t,e){return t+h(e)}),"")}(t);p.gallery.innerHTML=e}var y,b,w={};y=void 0!==e?e:"undefined"!=typeof window?window:w,b=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,n="Standard",a="Hourglass",r="Circle",o="Arrows",i="Dots",s="Pulse",c="Custom",l="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},m=function(e){return e||(e="head"),null!==t.document[e]||(f('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},d=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var a=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e&&"[object Object]"===Object.prototype.toString.call(n[a])?t[a]=d(t[a],n[a]):t[a]=n[a])};n<arguments.length;n++)a(arguments[n]);return t},g=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},h=function(l,p,h,y,b){if(!m("body"))return!1;e||v.Loading.init({});var w=d(!0,e,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof h&&!Array.isArray(h)){var k={};"object"==typeof p?k=p:"object"==typeof h&&(k=h),e=d(!0,e,k)}var x,L,_="";if("string"==typeof p&&p.length>0&&(_=p),y){var S="";(_=_.length>e.messageMaxLength?g(_).toString().substring(0,e.messageMaxLength)+"...":g(_).toString()).length>0&&(S='<p id="'+e.messageID+'" class="nx-loading-message" style="color:'+e.messageColor+";font-size:"+e.messageFontSize+';">'+_+"</p>"),e.cssAnimation||(e.cssAnimationDuration=0);var N="";if(l===n)x=e.svgSize,L=e.svgColor,x||(x="60px"),L||(L="#32c682"),N='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+L+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(l===a)N=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(e.svgSize,e.svgColor);else if(l===r)N=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(e.svgSize,e.svgColor);else if(l===o)N=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(e.svgSize,e.svgColor);else if(l===i)N=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(e.svgSize,e.svgColor);else if(l===s)N=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(e.svgSize,e.svgColor);else if(l===c&&null!==e.customSvgCode&&null===e.customSvgUrl)N=e.customSvgCode||"";else if(l===c&&null!==e.customSvgUrl&&null===e.customSvgCode)N='<img class="nx-custom-loading-icon" width="'+e.svgSize+'" height="'+e.svgSize+'" src="'+e.customSvgUrl+'" alt="Notiflix">';else{if(l===c&&(null===e.customSvgUrl||null===e.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;N=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(e.svgSize,"#f8f8f8","#32c682")}var E=parseInt((e.svgSize||"").replace(/[^0-9]/g,"")),T=t.innerWidth,C=E>=T?T-40+"px":E+"px",M='<div style="width:'+C+"; height:"+C+';" class="'+e.className+"-icon"+(_.length>0?" nx-with-message":"")+'">'+N+"</div>",j=t.document.createElement("div");j.id=u.ID,j.className=e.className+(e.cssAnimation?" nx-with-animation":"")+(e.clickToClose?" nx-loading-click-to-close":""),j.style.zIndex=e.zindex,j.style.background=e.backgroundColor,j.style.animationDuration=e.cssAnimationDuration+"ms",j.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',j.style.display="flex",j.style.flexWrap="wrap",j.style.flexDirection="column",j.style.alignItems="center",j.style.justifyContent="center",e.rtl&&(j.setAttribute("dir","rtl"),j.classList.add("nx-rtl-on")),j.innerHTML=M+S,t.document.getElementById(j.id)||(t.document.body.appendChild(j),e.clickToClose&&t.document.getElementById(j.id).addEventListener("click",(function(){j.classList.add("nx-remove");var t=setTimeout((function(){null!==j.parentNode&&(j.parentNode.removeChild(j),clearTimeout(t))}),e.cssAnimationDuration)})))}else if(t.document.getElementById(u.ID))var O=t.document.getElementById(u.ID),z=setTimeout((function(){O.classList.add("nx-remove");var t=setTimeout((function(){null!==O.parentNode&&(O.parentNode.removeChild(O),clearTimeout(t))}),e.cssAnimationDuration);clearTimeout(z)}),b);e=d(!0,e,w)},v={Loading:{init:function(n){e=d(!0,u,n),function(e,n){if(!m("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var a=t.document.createElement("style");a.id=n,a.innerHTML=e(),t.document.head.appendChild(a)}}(p,"NotiflixLoadingInternalCSS")},merge:function(t){if(!e)return f("You have to initialize the Loading module before call Merge function."),!1;e=d(!0,e,t)},standard:function(t,e){h(n,t,e,!0,0)},hourglass:function(t,e){h(a,t,e,!0,0)},circle:function(t,e){h(r,t,e,!0,0)},arrows:function(t,e){h(o,t,e,!0,0)},dots:function(t,e){h(i,t,e,!0,0)},pulse:function(t,e){h(s,t,e,!0,0)},custom:function(t,e){h(c,t,e,!0,0)},notiflix:function(t,e){h(l,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),h(null,null,null,!1,t)},change:function(n){!function(n){"string"!=typeof n&&(n="");var a=t.document.getElementById(u.ID);if(a)if(n.length>0){n=n.length>e.messageMaxLength?g(n).substring(0,e.messageMaxLength)+"...":g(n);var r=a.getElementsByTagName("p")[0];if(r)r.innerHTML=n;else{var o=t.document.createElement("p");o.id=e.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=e.messageColor,o.style.fontSize=e.messageFontSize,o.innerHTML=n,a.appendChild(o)}}else f("Where is the new message?")}(n)}}};return"object"==typeof t.Notiflix?d(!0,t.Notiflix,{Loading:v.Loading}):{Loading:v.Loading}},"function"==typeof define&&define.amd?define([],(function(){return b(y)})):"object"==typeof w?w=b(y):y.Notiflix=b(y);var k=new(function(){"use strict";function e(){t(i)(this,e)}return t(s)(e,[{key:"startSpinner",value:function(){w.Loading.arrows({svgColor:"#ff6b01"})}},{key:"removeSpinner",value:function(){w.Loading.remove()}},{key:"erorrSpinner",value:function(){w.Loading.arrows("temporary problems",{svgColor:"#ff6b01"})}}]),e}());p.gallery.addEventListener("click",(function(t){t.preventDefault();document.querySelectorAll(".btn__etc");if("BUTTON"!==t.target.nodeName)return;var e=t.target.dataset.all_ganre;t.target.previousSibling.previousSibling.textContent="".concat(e),t.target.classList.add("hide")}));var x,L,_=new u,S="currentPage";function N(t){var e=t.page,n=void 0===e?1:e,a=t.total_pages;!function(t,e,n){var a=t.map((function(t){return 0===t?'<li class = "pagination__item"><div class = "empryBox">...</div></li>':1===t?'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",' firstPage" data-btn="').concat(t,'">').concat(t,"</button></li>"):t===n?'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",' lastPage" data-btn="').concat(t,'">').concat(t,"</button></li>"):'<li class = "pagination__item"><button type="button" class = "'.concat(t===e?"current":"",'" data-btn="').concat(t,'">').concat(t,"</button></li>")}));a.unshift('<li class = "pagination__item"><button type="button" class = "left-arrow" data-btn="<"></button></li>'),a.push('<li class = "pagination__item"><button type="button" class = "right-arrow" data-btn=">"></button></li>'),E.innerHTML=a.join(""),E.dataset.lastpage=n}(function(t,e){for(var n=[],a=t-2;a<=t+2;a+=1)a>=1&&a<=e&&n.push(a);2===n[0]&&n.unshift(1);n[0]>3&&n.unshift(1,0);n[n.length-1]<e&&n.push(0,e);n[n.length-1]===e-2&&n.push(e-1);n[n.length-1]===e-3&&n.push(e-2);return n}(x=n,L=a),x,L)}var E=document.querySelector(".pagination");function T(){return(T=t(n)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k.startSpinner(),t.prev=1,t.next=4,_.fetchMovies();case 4:n=t.sent,console.log(n),v(n.results),N(n),k.removeSpinner(),C(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function C(){window.scrollTo({top:0,behavior:"smooth"})}E.addEventListener("click",(function(t){if("DIV"===t.target.nodeName||"BUTTON"!==t.target.nodeName)return;if(t.target.classList.contains("current"))return;var e;"<"!==t.target.dataset.btn&&">"!==t.target.dataset.btn&&(e=+t.target.dataset.btn);if("<"===t.target.dataset.btn&&1===x)return;if(">"===t.target.dataset.btn&&x===L)return;"<"===t.target.dataset.btn&&x>1&&(e=x-=1);">"===t.target.dataset.btn&&x<L&&(e=x+=1);(function(t){try{localStorage.setItem(S,JSON.stringify({currentPage:t}))}catch(t){console.log(t)}})(x=e),_.setPage(e),function(){T.apply(this,arguments)}()}));var M={form:document.querySelector(".form"),falseresultMessage:document.querySelector(".falseresult__message")};function j(t){0!==t.total_results?t.total_results>0?v(t.results):t.total_pages>1&&(N(t),k.removeSpinner()):M.falseresultMessage.classList.remove("hide")}var O=document.querySelector(".gallery"),z={modal:document.querySelector(".modal-movie"),backdrop:document.querySelector(".backdrop-modal")};function A(t){"Escape"===t.code&&(z.backdrop.classList.remove("is-open"),document.removeEventListener("keydown",A))}O.addEventListener("click",(function(t){if(t.preventDefault(),!t.target.classList.contains("info-title")&&!t.target.classList.contains("poster"))return;z.backdrop.classList.add("is-open"),document.addEventListener("keydown",A),document.removeEventListener("click",A)}));var I={backdrop:document.querySelector(".backdrop-modal"),modal:document.querySelector(".modal-movie")};function U(t){var e=function(t){var e=t.title,n=t.popularity,a=t.original_title,r=t.genre,o=t.overview,i=t.poster_path,s=t.vote_average,c=t.vote_count;return'\n      <button data-modal-close type="button" class="modal-movie-btn-close">\n          <svg class="modal-movie-img-close">\n              <use href="./images/icon-close-modal.svg#modal-close"></use>\n          </svg>\n      </button>\n\n    <div class="modal-movie-cont">\n\n      <div class="modal-movie-cont__img">\n        <img class="modal-movie-img" src="'.concat("https://image.tmdb.org/t/p/w500").concat(i,'" alt="').concat(e,'">\n      </div>\n      \n      <div class="modal-movie-cont__data">\n\n        <div class="modal-movie-cont__about">\n          <h2 class="modal-movie__title">').concat(e,'</h2>\n          <table class="modal-movie-table">\n          <tbody>\n            <tr>\n              <td class="modal-movie-table__item-name">Vote / Votes</td>\n              <td class="modal-movie-table__item-value">\n                <span class="vote">').concat(s.toFixed(1),'</span> / \n                <span class="votes">').concat(c,'</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Popularity</td>\n              <td class="modal-movie-table__item-value">').concat(n.toFixed(1),'</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Original Title</td>\n              <td class="modal-movie-table__item-value">').concat(a,'</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Genre</td>\n              <td class="modal-movie-table__item-value">').concat(r,'</td>\n            </tr>\n          </tbody>\n          </table>\n\n          <h3 class="modal-movie-about">ABOUT</h3>\n          <p class="modal-movie-descr-movie">').concat(o,'</p>\n        </div>\n      \n        <ul class="modal-movie__btn-list">\n            <li>\n                <button class="btn-watched" type="button">ADD TO WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-queue" type="button">ADD TO QUEUE</button>\n            </li>\n        </ul>\n\n      </div>\n\n    </div>')}(t);I.modal.innerHTML=e}var B=JSON.parse(localStorage.getItem("filmsWatched"))||[];function P(t){var e=t;if(""===t)return[];B.push(e),localStorage.setItem("filmsWatched",JSON.stringify(B))}var D=JSON.parse(localStorage.getItem("filmsQueue"))||[];function H(t){var e=t;if(""===t)return[];D.push(e),localStorage.setItem("filmsQueue",JSON.stringify(D))}var R=new u;function X(){return(X=t(n)(t(r).mark((function e(){var n,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k.startSpinner(),t.prev=1,t.next=4,R.fetchMovies();case 4:return n=t.sent,t.next=7,R.fetchGenres();case 7:a=t.sent,void 0===d()&&m(a),v(n.results),n.total_pages>1&&N(n),k.removeSpinner(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}function q(){return(q=t(n)(t(r).mark((function e(n){var a,o,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(t){var e=t.target;"btn-watched"===t.target.className?(P(o),e.textContent="remove watched film",console.log("Click!"),document.removeEventListener("click",i)):"btn-queue"===t.target.className&&(H(o),e.textContent="remove queued film",console.log("Click!2"),document.removeEventListener("click",i))},t.prev=1,a=n.target.parentNode.parentNode.id,t.next=5,R.fetchOneMovie(a);case 5:o=t.sent,console.log(o),U(o),console.log(o),document.addEventListener("click",i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}function F(){return(F=t(n)(t(r).mark((function e(n){var a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),M.falseresultMessage.classList.add("hide"),a=n.currentTarget.elements.search.value,t.prev=3,t.next=6,R.fetchMovieName(a);case 6:j(t.sent),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:case"end":return t.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}document.querySelector(".gallery").addEventListener("click",(function(t){return q.apply(this,arguments)})),R.setPage(function(){try{var t=JSON.parse(localStorage.getItem(S));return t?t.currentPage:1}catch(t){console.log(t)}}()),function(){X.apply(this,arguments)}(),M.form.addEventListener("submit",(function(t){return F.apply(this,arguments)}))}();
//# sourceMappingURL=mylibrary.14816649.js.map
