var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};class t{async fetchMovies(){const e=await fetch(`${this.BASE_URL}${this.MAIN_PAGE_URL}?api_key=${this.KEY}&page=${this.page}`);return await e.json()}async fetchGenres(){const e=await fetch(`${this.BASE_URL}${this.GENRE_URL}?api_key=${this.KEY}`);return(await e.json()).genres}async fetchOneMovie(e){const t=await fetch(`${this.BASE_URL}movie/${e}?api_key=${this.KEY}&language=en-US`);return await t.json()}getPage(){return this.page}setPage(e){this.page=e}constructor(){this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.MAIN_PAGE_URL="trending/movie/day",this.KEY="9d0cbfdf54c935b25322d86e1e3b7dd0",this.INFO_URL="movie/{movie_id}",this.SEARCH_URL="search/movie",this.GENRE_URL="/genre/movie/list"}}let n;function i(){n=JSON.parse(localStorage.getItem("genre"))}function a(e){i();return n.filter((t=>e.some((e=>e===t.id)))).map((e=>e.name)).join(", ")}const o={gallery:document.querySelector(".gallery")};function s(e){const{title:t,genre_ids:n,poster_path:i,release_date:o,id:s}=e,r=a(n);var l;return`\n<li class="film-card" id = ${s}>\n  <a href=''></a>\n  ${i?`<img class="poster" src="https://image.tmdb.org/t/p/w500${i}" alt="${t}"  />`:`<img class="poster" src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6UB-bP8Q1VOTxmMLs-1v1d6LN4b7H7U3Ng&usqp=CAU alt="${t}" />`}\n    <p class="info-title">${null!=t?t:""}</p>\n    <div class="info-title info-item">\n      <p class="">${null!=r?r:""}\n      </p>\n      <p class="">${null!==(l=o.slice(0,4))&&void 0!==l?l:""}\n      </p>\n    </div>\n  </a>\n</li>\n`}function r(e){const t=function(e){return e.reduce(((e,t)=>e+s(t)),"")}(e);o.gallery.innerHTML=t}var l,c,m={};l=void 0!==e?e:"undefined"!=typeof window?window:m,c=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",a="Circle",o="Arrows",s="Dots",r="Pulse",l="Custom",c="Notiflix",m={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},d=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},f=function(t){return t||(t="head"),null!==e.document[t]||(d('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},g=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=g(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},h=function(c,p,h,v,y){if(!f("body"))return!1;t||b.Loading.init({});var w=g(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof h&&!Array.isArray(h)){var k={};"object"==typeof p?k=p:"object"==typeof h&&(k=h),t=g(!0,t,k)}var x,N,S="";if("string"==typeof p&&p.length>0&&(S=p),v){var L="";(S=S.length>t.messageMaxLength?u(S).toString().substring(0,t.messageMaxLength)+"...":u(S).toString()).length>0&&(L='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+S+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var _="";if(c===n)x=t.svgSize,N=t.svgColor,x||(x="60px"),N||(N="#32c682"),_='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+N+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)_=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)_='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return d('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;_=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var C=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),T=e.innerWidth,E=C>=T?T-40+"px":C+"px",M='<div style="width:'+E+"; height:"+E+';" class="'+t.className+"-icon"+(S.length>0?" nx-with-message":"")+'">'+_+"</div>",z=e.document.createElement("div");z.id=m.ID,z.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),z.style.zIndex=t.zindex,z.style.background=t.backgroundColor,z.style.animationDuration=t.cssAnimationDuration+"ms",z.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',z.style.display="flex",z.style.flexWrap="wrap",z.style.flexDirection="column",z.style.alignItems="center",z.style.justifyContent="center",t.rtl&&(z.setAttribute("dir","rtl"),z.classList.add("nx-rtl-on")),z.innerHTML=M+L,e.document.getElementById(z.id)||(e.document.body.appendChild(z),t.clickToClose&&e.document.getElementById(z.id).addEventListener("click",(function(){z.classList.add("nx-remove");var e=setTimeout((function(){null!==z.parentNode&&(z.parentNode.removeChild(z),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(m.ID))var A=e.document.getElementById(m.ID),I=setTimeout((function(){A.classList.add("nx-remove");var e=setTimeout((function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(I)}),y);t=g(!0,t,w)},b={Loading:{init:function(n){t=g(!0,m,n),function(t,n){if(!f("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return d("You have to initialize the Loading module before call Merge function."),!1;t=g(!0,t,e)},standard:function(e,t){h(n,e,t,!0,0)},hourglass:function(e,t){h(i,e,t,!0,0)},circle:function(e,t){h(a,e,t,!0,0)},arrows:function(e,t){h(o,e,t,!0,0)},dots:function(e,t){h(s,e,t,!0,0)},pulse:function(e,t){h(r,e,t,!0,0)},custom:function(e,t){h(l,e,t,!0,0)},notiflix:function(e,t){h(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),h(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(m.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?u(n).substring(0,t.messageMaxLength)+"...":u(n);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else d("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?g(!0,e.Notiflix,{Loading:b.Loading}):{Loading:b.Loading}},"function"==typeof define&&define.amd?define([],(function(){return c(l)})):"object"==typeof m?m=c(l):l.Notiflix=c(l);var d=new class{startSpinner(){m.Loading.arrows({svgColor:"#ff6b01"})}removeSpinner(){m.Loading.remove()}erorrSpinner(){m.Loading.arrows("temporary problems",{svgColor:"#ff6b01"})}constructor(){}};const f=new t;let g,u;function p({page:e=1,total_pages:t}){g=e,u=t;!function(e,t,n){const i=e.map((e=>0===e?'<li ><div class = "empryBox">...</div></li>':`<li ><button type="button" class = "${e===t?"current":""}" data-btn="${e}">${e}</button></li>`));i.unshift('<li ><button type="button" class = "left-arrow" data-btn="<"></button></li>'),i.push('<li ><button type="button" class = "right-arrow" data-btn=">"></button></li>'),h.innerHTML=i.join(""),h.dataset.lastpage=n}(function(e,t){const n=[];for(let i=e-2;i<=e+2;i+=1)i>=1&&i<=t&&n.push(i);3===n[0]&&n.unshift(2);2===n[0]&&n.unshift(1);n[0]>3&&n.unshift(1,0);n[n.length-1]<t&&n.push(0,t);n[n.length-1]===t-2&&n.push(t-1);n[n.length-1]===t-3&&n.push(t-2);return n}(g,u),g,u)}const h=document.querySelector(".pagination");h.addEventListener("click",(function(e){if("DIV"===e.target.nodeName||"BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("current"))return;let t;"<"!==e.target.dataset.btn&&">"!==e.target.dataset.btn&&(t=+e.target.dataset.btn);if("<"===e.target.dataset.btn&&1===g)return;if(">"===e.target.dataset.btn&&g===u)return;"<"===e.target.dataset.btn&&g>1&&(t=g-=1);">"===e.target.dataset.btn&&g<u&&(t=g+=1);g=t,function(e){try{localStorage.setItem("currentPage",JSON.stringify({currentPage:e}))}catch(e){console.log(e)}}(g),f.setPage(t),async function(){d.startSpinner();try{const e=await f.fetchMovies();console.log(e),r(e.results),p(e),d.removeSpinner(),window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.log(e)}}()}));const b=document.querySelector(".gallery"),v={modal:document.querySelector(".modal-movie"),backdrop:document.querySelector(".backdrop-modal")};function y(e){"Escape"===e.code&&(v.backdrop.classList.remove("is-open"),document.removeEventListener("keydown",y))}b.addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("info-title")&&!e.target.classList.contains("poster"))return;v.backdrop.classList.add("is-open"),document.addEventListener("keydown",y),document.removeEventListener("click",y)}));const w={backdrop:document.querySelector(".backdrop-modal"),modal:document.querySelector(".modal-movie")};function k(e){const t=function(e){const{title:t,popularity:n,original_title:i,genre:a,overview:o,poster_path:s,vote_average:r,vote_count:l}=e;return`<button data-modal-close type="button" class="modal-movie-btn-close">\n                    <span>\n                        <svg class="modal-movie-img-close" width="11" height="11">\n                            <use href="./images/icons.svg#modal-close"></use>\n                        </svg>\n                    </span>\n                </button>\n    <div class="modal-movie-cont">\n\n      <div class="modal-movie-cont__img">\n        <img class="modal-movie-img" src="https://image.tmdb.org/t/p/w500${s}" alt="${t}">\n      </div>\n      \n      <div class="modal-movie-cont__data">\n\n        <div class="modal-movie-cont__about">\n          <h2 class="modal-movie__title">${t}</h2>\n          <table class="modal-movie-table">\n          <tbody>\n            <tr>\n              <td class="modmodal-movie-table__item-name">Vote / Votes</td>\n              <td class="modmodal-movie-table__item-value"><span class="vote">${r.toFixed(1)}</span class="votes">/${l}</td>\n            </tr>\n            <tr>\n              <td class="modmodal-movie-table__item-name">Popularity</td>\n              <td class="modmodal-movie-table__item-descr">${n.toFixed(1)}</td>\n            </tr>\n            <tr>\n              <td class="modmodal-movie-table__item-name">Original Title</td>\n              <td class="modmodal-movie-table__item-descr">${i}</td>\n            </tr>\n            <tr>\n              <td class="modmodal-movie-table__item-name">Genre</td>\n              <td class="modmodal-movie-table__item-descr">${a}</td>\n            </tr>\n          </tbody>\n          </table>\n\n          <h3 class="modmodal-movie-about">ABOUT</h3>\n          <p class="modmodal-movie-descr-movie">${o}</p>\n        </div>\n      \n        <ul class="modal-movie__btn-list">\n            <li>\n                <button class="btn-watched" type="button">ADD TO WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-queue" type="button">ADD TO QUEUE</button>\n            </li>\n        </ul>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>`}(e);w.modal.innerHTML=t}let x=JSON.parse(localStorage.getItem("filmsWatched"))||[];function N(e){let t=e;if(""===e)return[];x.push(t),localStorage.setItem("filmsWatched",JSON.stringify(x))}let S=JSON.parse(localStorage.getItem("filmsQueue"))||[];function L(e){let t=e;if(""===e)return[];S.push(t),localStorage.setItem("filmsQueue",JSON.stringify(S))}const _=new t;document.querySelector(".gallery").addEventListener("click",(async function(e){try{const t=e.target.parentNode.parentNode.id,n=await _.fetchOneMovie(t);k(n),console.log(n),document.addEventListener("click",(function e(t){const i=t.target;"btn-watched"===t.target.className?(N(n),i.textContent="remove watched film",console.log("Click!"),document.removeEventListener("click",e)):"btn-queue"===t.target.className&&(L(n),i.textContent="remove queued film",console.log("Click!2"),document.removeEventListener("click",e))}))}catch(e){console.log(e)}})),_.setPage(function(){try{const e=JSON.parse(localStorage.getItem("currentPage"));return e?e.currentPage:1}catch(e){console.log(e)}}()),async function(){d.startSpinner();try{const t=await _.fetchMovies(),n=await _.fetchGenres();console.log(t),console.log(n);void 0===i()&&(e=n,localStorage.setItem("genre",JSON.stringify(e))),r(t.results),d.removeSpinner(),p(t),r(t.results),t.total_pages>1&&p(t),d.removeSpinner()}catch(e){console.log(e)}var e}();
//# sourceMappingURL=mylibrary.2670ef31.js.map
