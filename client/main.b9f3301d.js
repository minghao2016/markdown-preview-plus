parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({7:[function(require,module,exports) {
"use strict";function e(e){e&&e.catch(function(e){console.error(e)})}exports.__esModule=!0,exports.handlePromise=e;var r=require("fs");function t(e){return!!r.existsSync(e)&&r.lstatSync(e).isFile()}function n(e,r){for(var t=e,n=0,o=r;n<o.length;n++){var s=o[n],i=t.querySelectorAll(":scope > "+s.tag).item(s.index);if(!i)break;t=i}if(t!==e)return t}exports.isFileSync=t,exports.resolveElement=n;
},{}],6:[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}s((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};exports.__esModule=!0;var n,r=require("path"),o=require("season"),i=require("fs"),a=require("./util"),u=global.require.resolve("mathjax")+"?delayStartupUntil=configured";function s(n){return e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,h()];case 1:return e.sent(),[4,J(n)];case 2:return e.sent(),[2]}})})}function c(n){return e(this,void 0,void 0,function(){var e,r;return t(this,function(t){return e=document.getElementById("MathJax_SVG_Hidden"),null!==(r=e&&e.parentElement)?[2,r.innerHTML+n.innerHTML]:[2,n.innerHTML]})})}function l(){return e(this,void 0,void 0,function(){return t(this,function(e){return MathJax?[2,new Promise(function(e){MathJax.Hub.Queue(["Rerender",MathJax.Hub]),MathJax.Hub.Queue([e])})]:[2]})})}function h(){return e(this,void 0,Promise,function(){return t(this,function(e){return n?[2,n]:[2,n=M()]})})}function d(){n=void 0;var e=document.head.querySelector("script[src='"+u+"']");e&&e.remove()}function f(){return e(this,void 0,void 0,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return[4,v()];case 1:return e=(e=t.sent())?x(e):{},[4,window.atomVars.mathJaxConfig];case 2:return[2,{extensions:(n=t.sent()).texExtensions,Macros:e,equationNumbers:n.numberEquations?{autoNumber:"AMS",useLabelIds:!1}:{}}]}})})}function m(){return e(this,void 0,Promise,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return[4,window.atomVars.home];case 1:return e=t.sent(),[2,null!=(n=o.resolve(r.join(e,"markdown-preview-plus")))?n:r.join(e,"markdown-preview-plus.cson")]}})})}function p(e){return o.isObjectPath(e)?o.readFileSync(e,function(t,n){return void 0===n&&(n={}),void 0!==t&&(console.warn("Error reading Latex Macros file '"+e+"': "+(void 0!==t.stack?t.stack:t)),console.error("Failed to load Latex Macros from '"+e+"'",{detail:t.message,dismissable:!0})),n}):{}}function v(){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,m()];case 1:return e=t.sent(),a.isFileSync(e)?[2,p(e)]:(console.debug("Creating markdown-preview-plus.cson, this is a one-time operation."),b(e),[2,p(e)])}})})}function b(e){var t=r.join(__dirname,"../assets/macros-template.cson"),n=i.readFileSync(t,"utf8");i.writeFileSync(e,n)}function x(e){var t=/^[^a-zA-Z\d\s]$|^[a-zA-Z]*$/;for(var n in e){var r=e[n];n.match(t)&&w(r)||(delete e[n],console.error("Failed to load LaTeX macro named '"+n+"'. Please see the [LaTeX guide](https://github.com/atom-community/markdown-preview-plus/blob/master/docs/math.md#macro-names)"))}return e}function w(e){if(Array.isArray(e)){var t=e[0],n=e[1];return"number"==typeof n&&(n%1==0&&"string"==typeof t)}return"string"==typeof e}function y(){return e(this,void 0,void 0,function(){var e,n,r,o;return t(this,function(t){switch(t.label){case 0:return[4,window.atomVars.mathJaxConfig];case 1:return e=t.sent(),r=(n=MathJax.Hub).Config,o={jax:["input/TeX","output/"+e.renderer],extensions:[]},[4,f()];case 2:return r.apply(n,[(o.TeX=t.sent(),o["HTML-CSS"]={availableFonts:[],webFont:"TeX",imageFont:null,undefinedFamily:e.undefinedFamily,mtextFontInherit:!0},o.messageStyle="none",o.showMathMenu=!1,o.skipStartupTypeset=!0,o)]),MathJax.Hub.Configured(),console.log("Loaded maths rendering engine MathJax"),[2]}})})}function M(){return e(this,void 0,Promise,function(){return t(this,function(e){switch(e.label){case 0:return console.log("Loading maths rendering engine MathJax"),[4,Promise.all([g(u)])];case 1:return e.sent(),[4,y()];case 2:return e.sent(),[2]}})})}function g(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){return(e=document.createElement("script")).src=n,e.type="text/javascript",document.head.appendChild(e),[2,new Promise(function(t){e.addEventListener("load",function(){return t()})})]})})}function J(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return Array.from(document.querySelectorAll('script[type^="math/tex"]')).some(function(e){return!e.id})?[4,window.atomVars.mathJaxConfig]:[2];case 1:return e=t.sent(),[2,new Promise(function(t){MathJax.InputJax.TeX&&(MathJax.Hub.Queue(["resetEquationNumbers",MathJax.InputJax.TeX]),e.numberEquations&&(MathJax.Hub.Queue(["PreProcess",MathJax.Hub]),MathJax.Hub.Queue(["Reprocess",MathJax.Hub]))),MathJax.Hub.Queue(["Typeset",MathJax.Hub,n]),MathJax.Hub.Queue([t])})]}})})}exports.mathProcessor=s,exports.processHTMLString=c,exports.rerenderMath=l,exports.unloadMathJax=d,exports.jaxTeXConfig=f;
},{"./util":7}],5:[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,a)}l((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};exports.__esModule=!0;var r=require("morphdom"),n=require("./mathjax-helper"),o=function(){function o(e){this.dom=e}return o.prototype.update=function(o,i){return e(this,void 0,Promise,function(){var e,u,a,l,c,s;return t(this,function(t){for(e=function(e){var t=e.firstElementChild;if(!t||"SCRIPT"!==t.nodeName)return"continue";e.isSameNode=function(e){if("SPAN"!==e.nodeName)return!1;var r=e;if(!r.classList.contains("math"))return!1;var n=r.querySelector("script");return!!n&&(t.innerHTML===n.innerHTML&&t.type===n.type)}},u=0,a=Array.from(o.querySelectorAll("span.math"));u<a.length;u++)s=a[u],e(s);for(l=0,c=Array.from(o.querySelectorAll("li"));l<c.length;l++)(s=c[l]).isSameNode=function(){return!1};return r(this.dom,o,{childrenOnly:!0}),i?[2,n.mathProcessor(this.dom)]:[2]})})},o}();exports.UpdatePreview=o;
},{"./mathjax-helper":6}],8:[function(require,module,exports) {
"use strict";function e(e){return e.querySelectorAll("img[src],audio[src],video[src]")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMedia=e;
},{}],4:[function(require,module,exports) {
"use strict";var e=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function u(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,u)}s((n=n.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},o=this;exports.__esModule=!0;var i,a=require("electron"),u=require("./update-preview"),s=require("./mathjax-helper"),c=n(require("./util")),d=require("../src/util-common");function l(){var e,t=new Promise(function(t){return e=t});return t.resolve=e,t}window.atomVars={home:l(),mathJaxConfig:l(),sourceLineMap:new Map,revSourceMap:new WeakMap},a.ipcRenderer.on("init",function(t,r){var n=r.atomHome,o=r.mathJaxConfig,i=r.mathJaxRenderer;window.atomVars.home.resolve(n),window.atomVars.mathJaxConfig.resolve(e({},o,{renderer:i}))}),a.ipcRenderer.on("set-source-map",function(e,t){var r=t.map,n=document.querySelector("div.update-preview");if(!n)throw new Error("No root element!");for(var o=new Map,i=new WeakMap,a=0,u=Object.keys(r);a<u.length;a++){var s=u[a],d=parseInt(s,10),l=r[d],p=c.resolveElement(n,l);if(p){o.set(d,p);var f=i.get(p);f?f.push(d):i.set(p,[d])}}window.atomVars.sourceLineMap=o,window.atomVars.revSourceMap=i}),a.ipcRenderer.on("scroll-sync",function(e,t){var r,n,o=t.firstLine,i=t.lastLine,a=Math.floor(.5*(o+i)),u=window.atomVars.sourceLineMap;for(r=a;r>=0&&!(n=u.get(r));r-=1);if(n){var s,c,d=Math.max.apply(Math,Array.from(u.keys()));for(s=a+1;s<d&&!(c=u.get(s));s+=1);if(c){var l=n.getBoundingClientRect().top,p=c.getBoundingClientRect().top,f=(a-o)/(i-o),v=document.documentElement.scrollTop-document.documentElement.clientHeight/2+l+f*(p-l);window.scroll({top:v})}}}),a.ipcRenderer.on("style",function(e,t){var r=t.styles,n=document.head.querySelector("style#atom-styles");n||((n=document.createElement("style")).id="atom-styles",document.head.appendChild(n)),n.innerHTML=r.join("\n")}),a.ipcRenderer.on("update-images",function(e,t){for(var r=t.oldsrc,n=t.v,o=d.getMedia(document),i=0,a=Array.from(o);i<a.length;i++){var u=a[i],s=void 0,c=void 0,l=u.getAttribute("src"),p=l.match(/^(.*)\?v=(\d+)$/);p&&(l=p[1],s=p[2]),l===r&&(void 0!==s&&(c=parseInt(s,10)),n!==c&&(u.src=n?l+"?v="+n:""+l))}}),a.ipcRenderer.on("sync",function(e,t){var r=t.line;if(document.querySelector("div.update-preview")){var n=window.atomVars.sourceLineMap.get(r);if(!n)for(var o=r-1;o>=0&&!(n=window.atomVars.sourceLineMap.get(r));o-=1);n&&(n.scrollIntoViewIfNeeded(!0),n.classList.add("flash"),setTimeout(function(){return n.classList.remove("flash")},1e3))}}),a.ipcRenderer.on("use-github-style",function(e,t){var r=t.value,n=document.querySelector("markdown-preview-plus-view");if(!n)throw new Error("Can't find MPP-view");r?n.setAttribute("data-use-github-style",""):n.removeAttribute("data-use-github-style")}),a.ipcRenderer.on("update-preview",function(e,n){var d=n.id,l=n.html,p=n.renderLaTeX,f=document.querySelector("div.update-preview");if(f){i||(i=new u.UpdatePreview(f));var v=(new DOMParser).parseFromString(l,"text/html");c.handlePromise(i.update(v.body,p).then(function(){return t(o,void 0,void 0,function(){var e,t,n,o;return r(this,function(r){switch(r.label){case 0:return t=(e=a.ipcRenderer).sendToHost,n=["request-reply"],o={id:d,request:"update-preview"},[4,s.processHTMLString(f)];case 1:return t.apply(e,n.concat([(o.result=r.sent(),o)])),[2]}})})}));var m=document;if(m&&v.head.hasChildNodes){var h=m.head.querySelector("original-elements");h||(h=m.createElement("original-elements"),m.head.appendChild(h)),h.innerHTML="";for(var w=0,y=Array.from(v.head.childNodes);w<y.length;w++){var g=y[w];h.appendChild(g)}}}});var p,f=document.createElement("base");document.head.appendChild(f),a.ipcRenderer.on("set-base-path",function(e,t){var r=t.path;f.href=r||""}),a.ipcRenderer.on("error",function(e,t){var r=t.msg,n=document.querySelector("div.update-preview");if(n){var o=document.createElement("div");o.innerHTML="<h2>Previewing Markdown Failed</h2><h3>"+r+"</h3>",n.appendChild(o)}}),document.addEventListener("mousewheel",function(e){e.ctrlKey&&(e.wheelDeltaY>0?a.ipcRenderer.sendToHost("zoom-in",void 0):e.wheelDeltaY<0&&a.ipcRenderer.sendToHost("zoom-out",void 0),e.preventDefault(),e.stopPropagation())}),document.addEventListener("scroll",function(e){var t=document.documentElement.clientHeight,r=Array.from(window.atomVars.sourceLineMap.entries()).filter(function(e){e[0];var r=e[1].getBoundingClientRect(),n=r.top,o=r.bottom;return n>0&&o<t}).map(function(e){var t=e[0];e[1];return t});a.ipcRenderer.sendToHost("did-scroll-preview",{max:Math.max.apply(Math,r),min:Math.min.apply(Math,r)})}),document.addEventListener("contextmenu",function(e){p=e.target}),a.ipcRenderer.on("sync-source",function(e,t){for(var r=t.id,n=p,o=window.atomVars.revSourceMap,i=o.get(n);!i&&n.parentElement;)n=n.parentElement,i=o.get(n);i&&a.ipcRenderer.sendToHost("request-reply",{id:r,request:"sync-source",result:Math.min.apply(Math,i)})}),a.ipcRenderer.on("reload",function(e,t){var r=t.id;window.onbeforeunload=null,a.ipcRenderer.sendToHost("request-reply",{id:r,request:"reload",result:void 0})}),window.onbeforeunload=function(){return!1},a.ipcRenderer.on("get-tex-config",function(e,n){var i=n.id;return t(o,void 0,void 0,function(){var e,t,n,o;return r(this,function(r){switch(r.label){case 0:return t=(e=a.ipcRenderer).sendToHost,n=["request-reply"],o={id:i,request:"get-tex-config"},[4,s.jaxTeXConfig()];case 1:return t.apply(e,n.concat([(o.result=r.sent(),o)])),[2]}})})}),a.ipcRenderer.on("set-width",function(e,n){var i=n.id,u=n.width;return t(o,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return void 0===u?document.documentElement.style.removeProperty("width"):document.documentElement.style.setProperty("width",u+"mm","important"),[4,s.rerenderMath()];case 1:return e.sent(),a.ipcRenderer.sendToHost("request-reply",{id:i,request:"set-width",result:void 0}),[2]}})})}),a.ipcRenderer.on("get-selection",function(e,n){var i=n.id;return t(o,void 0,void 0,function(){var e,t,n;return r(this,function(r){return e=window.getSelection(),t=e.toString(),n=e.baseNode,a.ipcRenderer.sendToHost("request-reply",{id:i,request:"get-selection",result:t&&n?t:void 0}),[2]})})});
},{"./update-preview":5,"./mathjax-helper":6,"./util":7,"../src/util-common":8}]},{},[4], null)
//# sourceMappingURL=main.b9f3301d.map