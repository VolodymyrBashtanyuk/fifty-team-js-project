var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};let t;function n(){t=JSON.parse(localStorage.getItem("genre"))}function i(e){n();return t.filter((t=>e.some((e=>e===t.id)))).map((e=>e.name))}const a={gallery:document.querySelector(".gallery")};function o(e){const{title:t,genre_ids:n,poster_path:a,release_date:o,id:s}=e,r=i(n),l=r.join(", "),c=function(e,t){if(e.length<=3)return t;return e.slice(0,3).join(", ")}(r,l);var d;return`\n<li class="film-card" id = ${s}>\n  <a href=''>\n    <div class="poster__thumb">\n      ${a?`<img class="poster" src="https://image.tmdb.org/t/p/w500${a}" alt="${t}"  />`:`<img class="poster" src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6UB-bP8Q1VOTxmMLs-1v1d6LN4b7H7U3Ng&usqp=CAU alt="${t}" />`}\n    </div>\n    <p class="info-title">${null!=t?t:""}</p>\n    <div class="info-title info-item">\n      <p class="film__genre">${c||""}</p>\n      <button class="btn__etc ${r.length<=3?"hide":""}" type="button"\n        data-all_ganre="${l}">...</button>\n      </p>\n      <p class="">${null!==(d=o.slice(0,4))&&void 0!==d?d:""}\n      </p>\n    </div>\n  </a>\n</li>\n`}function s(e){const t=function(e){return e.reduce(((e,t)=>e+o(t)),"")}(e);a.gallery.innerHTML=t}var r,l,c={};r=void 0!==e?e:"undefined"!=typeof window?window:c,l=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",a="Circle",o="Arrows",s="Dots",r="Pulse",l="Custom",c="Notiflix",d={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},m=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(m('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=f(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},b=function(c,p,b,v,y){if(!u("body"))return!1;t||h.Loading.init({});var w=f(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof b&&!Array.isArray(b)){var k={};"object"==typeof p?k=p:"object"==typeof b&&(k=b),t=f(!0,t,k)}var x,S,L="";if("string"==typeof p&&p.length>0&&(L=p),v){var N="";(L=L.length>t.messageMaxLength?g(L).toString().substring(0,t.messageMaxLength)+"...":g(L).toString()).length>0&&(N='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+L+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var _="";if(c===n)x=t.svgSize,S=t.svgColor,x||(x="60px"),S||(S="#32c682"),_='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+S+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)_=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)_=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)_='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return m('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;_=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var E=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),T=e.innerWidth,M=E>=T?T-40+"px":E+"px",I='<div style="width:'+M+"; height:"+M+';" class="'+t.className+"-icon"+(L.length>0?" nx-with-message":"")+'">'+_+"</div>",C=e.document.createElement("div");C.id=d.ID,C.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),C.style.zIndex=t.zindex,C.style.background=t.backgroundColor,C.style.animationDuration=t.cssAnimationDuration+"ms",C.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center",t.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.innerHTML=I+N,e.document.getElementById(C.id)||(e.document.body.appendChild(C),t.clickToClose&&e.document.getElementById(C.id).addEventListener("click",(function(){C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(d.ID))var $=e.document.getElementById(d.ID),O=setTimeout((function(){$.classList.add("nx-remove");var e=setTimeout((function(){null!==$.parentNode&&($.parentNode.removeChild($),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(O)}),y);t=f(!0,t,w)},h={Loading:{init:function(n){t=f(!0,d,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return m("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){b(n,e,t,!0,0)},hourglass:function(e,t){b(i,e,t,!0,0)},circle:function(e,t){b(a,e,t,!0,0)},arrows:function(e,t){b(o,e,t,!0,0)},dots:function(e,t){b(s,e,t,!0,0)},pulse:function(e,t){b(r,e,t,!0,0)},custom:function(e,t){b(l,e,t,!0,0)},notiflix:function(e,t){b(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),b(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(d.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else m("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:h.Loading}):{Loading:h.Loading}},"function"==typeof define&&define.amd?define([],(function(){return l(r)})):"object"==typeof c?c=l(r):r.Notiflix=l(r);var d=new class{startSpinner(){c.Loading.arrows({svgColor:"#ff6b01"})}removeSpinner(){c.Loading.remove()}erorrSpinner(){c.Loading.arrows("temporary problems",{svgColor:"#ff6b01"})}constructor(){}};let m,u;a.gallery.addEventListener("click",(function(e){e.preventDefault();document.querySelectorAll(".btn__etc");if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.all_ganre;e.target.previousSibling.previousSibling.textContent=`${t}`,e.target.classList.add("hide")}));function f({page:e=1,total_pages:t}){m=e,u=t;!function(e,t,n){const i=e.map((e=>0===e?'<li class = "pagination__item"><div class = "empryBox">...</div></li>':1===e?`<li class = "pagination__item"><button type="button" class = "${e===t?"current":""} firstPage" data-btn="${e}">${e}</button></li>`:e===n?`<li class = "pagination__item"><button type="button" class = "${e===t?"current":""} lastPage" data-btn="${e}">${e}</button></li>`:`<li class = "pagination__item"><button type="button" class = "${e===t?"current":""}" data-btn="${e}">${e}</button></li>`));i.unshift('<li class = "pagination__item"><button type="button" class = "left-arrow" data-btn="<"></button></li>'),i.push('<li class = "pagination__item"><button type="button" class = "right-arrow" data-btn=">"></button></li>'),g.innerHTML=i.join(""),g.dataset.lastpage=n}(function(e,t){const n=[];for(let i=e-2;i<=e+2;i+=1)i>=1&&i<=t&&n.push(i);2===n[0]&&n.unshift(1);n[0]>3&&n.unshift(1,0);n[n.length-1]<t&&n.push(0,t);n[n.length-1]===t-2&&n.push(t-1);n[n.length-1]===t-3&&n.push(t-2);return n}(m,u),m,u)}const g=document.querySelector(".pagination");function p(){window.scrollTo({top:0,behavior:"smooth"})}function b(e){try{localStorage.setItem("queryType",JSON.stringify({queryType:e}))}catch(e){console.log(e)}}g.addEventListener("click",(function(e){if("DIV"===e.target.nodeName||"BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("current"))return;let t;"<"!==e.target.dataset.btn&&">"!==e.target.dataset.btn&&(t=+e.target.dataset.btn);if("<"===e.target.dataset.btn&&1===m)return;if(">"===e.target.dataset.btn&&m===u)return;"<"===e.target.dataset.btn&&m>1&&(t=m-=1);">"===e.target.dataset.btn&&m<u&&(t=m+=1);m=t;const n=function(){try{return JSON.parse(localStorage.getItem("queryType"))}catch(e){console.log(e)}}().queryType;"getMovies"===n&&(function(e){try{localStorage.setItem("currentPage",JSON.stringify({currentPage:e}))}catch(e){console.log(e)}}(m),V.setPage(t),async function(){d.startSpinner();try{const e=await V.fetchMovies();console.log(e),s(e.results),f(e),d.removeSpinner(),p()}catch(e){console.log(e)}}());"getOneMovie"===n&&(V.setPage(m),V.fetchMovieName().then((e=>{v(e),p()})).catch(console.error))}));const h={form:document.querySelector(".form"),falseresultMessage:document.querySelector(".falseresult__message")};function v(e){0!==e.total_results?(e.total_results>0&&s(e.results),e.total_pages>1&&b("getOneMovie"),f(e),d.removeSpinner()):h.falseresultMessage.classList.remove("hide")}const y=document.querySelector(".footer__btn"),w=document.querySelector(".backdrop");y.addEventListener("click",(function(){w.classList.remove("is-hidden"),document.body.style.overflow="hidden"})),w.addEventListener("click",(function(e){const t=e.target.classList.contains("backdrop__button"),n=e.target.classList.contains("backdrop");if(!t&&!n)return;w.classList.add("is-hidden"),document.body.style.overflow="visible"})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&(w.classList.add("is-hidden"),document.body.style.overflow="visible")}));const k=document.querySelector(".gallery"),x={modal:document.querySelector(".modal-movie"),backdrop:document.querySelector(".backdrop-modal")};function S(e){"Escape"===e.code&&(x.backdrop.classList.remove("is-open"),document.removeEventListener("keydown",S))}k.addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("info-title")&&!e.target.classList.contains("poster"))return;x.backdrop.classList.remove("hide"),x.backdrop.classList.add("is-open"),document.addEventListener("keydown",S),document.removeEventListener("click",S)})),x.backdrop.addEventListener("click",(function e(t){if(!t.target.classList.contains("backdrop-modal"))return;x.backdrop.classList.remove("is-open"),document.body.style.overflow="visible",document.removeEventListener("keydown",S),document.removeEventListener("click",e)}));document.querySelector("[data-modal-close]").addEventListener("click",(()=>{x.backdrop.classList.add("hide")}));const L={backdrop:document.querySelector(".backdrop-modal"),modal:document.querySelector(".modal-movie-cont")};function N(e){const t=function(e){const{title:t,popularity:n,original_title:i,genres:a,overview:o,poster_path:s,vote_average:r,vote_count:l}=e;return`\n      \n      <div class="modal-movie-cont__img">\n        <img class="modal-movie-img" src="https://image.tmdb.org/t/p/w500${s}" alt="${t}">\n      </div>\n      \n      <div class="modal-movie-cont__data">\n\n        <div class="modal-movie-cont__about">\n          <h2 class="modal-movie__title">${t}</h2>\n          <table class="modal-movie-table">\n          <tbody>\n            <tr>\n              <td class="modal-movie-table__item-name">Vote / Votes</td>\n              <td class="modal-movie-table__item-value">\n                <span class="vote">${r.toFixed(1)}</span> / \n                <span class="votes">${l}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Popularity</td>\n              <td class="modal-movie-table__item-value">${n.toFixed(1)}</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Original Title</td>\n              <td class="modal-movie-table__item-value">${i}</td>\n            </tr>\n            <tr>\n              <td class="modal-movie-table__item-name">Genre</td>\n              <td class="modal-movie-table__item-value">${a}</td>\n            </tr>\n          </tbody>\n          </table>\n\n          <h3 class="modal-movie-about">ABOUT</h3>\n          <p class="modal-movie-descr-movie">${o}</p>\n        </div>\n      \n        <ul class="modal-movie__btn-list">\n            <li>\n                <button class="btn-watched" id='btn-w' type="button">ADD TO WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-watched hide" id='btn-rw' type="button">REMOVE FROM WATCHED</button>\n            </li>\n            <li>\n                <button class="btn-queue" id='btn-q'  type="button">ADD TO QUEUE</button>\n            </li>\n            <li>\n                <button class="btn-queue hide" id='btn-rq' type="button">REMOVE FROM QUEUE</button>\n            </li>\n        </ul>\n\n     \n\n    </div>`}(e);L.modal.innerHTML=t}let _=JSON.parse(localStorage.getItem("filmsWatched"))||[];function E(e){let t=e;if(""===e)return[];_.push(t),localStorage.setItem("filmsWatched",JSON.stringify(_))}let T=JSON.parse(localStorage.getItem("filmsQueue"))||[];function M(e){let t=e;if(""===e)return[];T.push(t),localStorage.setItem("filmsQueue",JSON.stringify(T))}let I=JSON.parse(localStorage.getItem("filmsWatched"))||[];function C(e){const t=document.getElementById("btn-w"),n=document.getElementById("btn-rw");I.splice(e,1),localStorage.setItem("filmsWatched",JSON.stringify(I)),t.classList.remove("hide"),n.classList.add("hide")}let $=JSON.parse(localStorage.getItem("filmsQueue"))||[];function O(e){const t=document.getElementById("btn-q"),n=document.getElementById("btn-rq");$.splice(e,1),localStorage.setItem("filmsQueue",JSON.stringify($)),t.classList.remove("hide"),n.classList.add("hide")}var B={},z=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,U=/^0o[0-7]+$/i,q=parseInt,D="object"==typeof e&&e&&e.Object===Object&&e,H="object"==typeof self&&self&&self.Object===Object&&self,R=D||H||Function("return this")(),W=Object.prototype.toString,P=Math.max,X=Math.min,F=function(){return R.Date.now()};function Q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function J(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==W.call(e)}(e))return NaN;if(Q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(z,"");var n=j.test(e);return n||U.test(e)?q(e.slice(2),n?2:8):A.test(e)?NaN:+e}B=function(e,t,n){var i,a,o,s,r,l,c=0,d=!1,m=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,o=a;return i=a=void 0,c=t,s=e.apply(o,n)}function g(e){return c=e,r=setTimeout(b,t),d?f(e):s}function p(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=o}function b(){var e=F();if(p(e))return h(e);r=setTimeout(b,function(e){var n=t-(e-l);return m?X(n,o-(e-c)):n}(e))}function h(e){return r=void 0,u&&i?f(e):(i=a=void 0,s)}function v(){var e=F(),n=p(e);if(i=arguments,a=this,l=e,n){if(void 0===r)return g(l);if(m)return r=setTimeout(b,t),f(l)}return void 0===r&&(r=setTimeout(b,t)),s}return t=J(t)||0,Q(n)&&(d=!!n.leading,o=(m="maxWait"in n)?P(J(n.maxWait)||0,t):o,u="trailing"in n?!!n.trailing:u),v.cancel=function(){void 0!==r&&clearTimeout(r),c=0,i=l=a=r=void 0},v.flush=function(){return void 0===r?s:h(F())},v};h.falseresultMessage.classList.add("hide");const V=new class{async fetchMovies(){const e=await fetch(`${this.BASE_URL}${this.MAIN_PAGE_URL}?api_key=${this.KEY}&page=${this.page}`);return await e.json()}async fetchGenres(){const e=await fetch(`${this.BASE_URL}${this.GENRE_URL}?api_key=${this.KEY}`);return(await e.json()).genres}async fetchOneMovie(e){const t=await fetch(`${this.BASE_URL}movie/${e}?api_key=${this.KEY}&language=en-US`),n=await t.json();return console.log(n),n}async fetchMovieName(e){const t=await fetch(`${this.BASE_URL}search/movie?api_key=${this.KEY}&language=en-US&include_adult=false&query=${this.FETCH_QUERY}&page=${this.page}`);return await t.json()}getPage(){return this.page}setQuery(e){this.FETCH_QUERY=e}setPage(e){this.page=e}constructor(){this.page=1,this.BASE_URL="https://api.themoviedb.org/3/",this.MAIN_PAGE_URL="trending/movie/day",this.KEY="9d0cbfdf54c935b25322d86e1e3b7dd0",this.INFO_URL="movie/",this.SEARCH_URL="search/movie",this.GENRE_URL="/genre/movie/list",this.FETCH_QUERY=""}};document.querySelector(".gallery").addEventListener("click",(async function(e){d.startSpinner();try{const t=e.target.parentNode.parentNode.parentNode.id;console.log(t);const n=await V.fetchOneMovie(t);N(n),console.log(n.id),d.removeSpinner(),document.addEventListener("click",(function(e){if("btn-watched"===e.target.className){E(n);const e=document.getElementById("btn-w"),t=document.getElementById("btn-rw");console.log("Click!"),e.classList.add("hide"),t.classList.remove("hide"),t.addEventListener("click",C)}else if("btn-queue"===e.target.className){M(n);const e=document.getElementById("btn-q"),t=document.getElementById("btn-rq");e.classList.add("hide"),t.classList.remove("hide"),t.addEventListener("click",O),console.log("Click!2")}})),function(){const e=document.getElementById("btn-w"),t=document.getElementById("btn-rw"),i=JSON.parse(localStorage.getItem("filmsWatched"))||"[]";let a=!1;for(let o=0;o<=i.length;o+=1)if(n.id===i[o].id)return a=!0,console.log("yeah"),e.classList.add("hide"),t.classList.remove("hide"),void t.addEventListener("click",C)}(),function(){const e=document.getElementById("btn-q"),t=document.getElementById("btn-rq"),i=JSON.parse(localStorage.getItem("filmsQueue"))||"[]";let a=!1;for(let o=0;o<=i.length;o+=1)if(n.id===i[o].id)return a=!0,console.log("yeahQ"),e.classList.add("hide"),t.classList.remove("hide"),void t.addEventListener("click",O)}()}catch(e){console.log(e)}})),V.setPage(function(){try{const e=JSON.parse(localStorage.getItem("currentPage"));return e?e.currentPage:1}catch(e){console.log(e)}}()),b("getMovies"),async function(){d.startSpinner();try{const t=await V.fetchMovies(),i=await V.fetchGenres();void 0===n()&&(e=i,localStorage.setItem("genre",JSON.stringify(e))),s(t.results),t.total_pages>1&&f(t),d.removeSpinner()}catch(e){console.log(e)}var e}(),h.form.addEventListener("submit",(async function(e){e.preventDefault(),h.falseresultMessage.classList.add("hide");const t=e.currentTarget.elements.search.value;try{V.setPage(1),V.setQuery(t);v(await V.fetchMovieName())}catch(e){console.log(e)}})),h.form.addEventListener("input",B((function(e){""===e.target.value&&h.falseresultMessage.classList.add("hide")}),300));
//# sourceMappingURL=index.2cc1283a.js.map
