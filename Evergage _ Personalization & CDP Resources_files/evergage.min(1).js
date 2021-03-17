/*
 JavaScript Cookie v2.2.1
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
*/
'use strict';var Evergage=function(r){function x(e){x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return x(e)}function N(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function");}function kb(e,a){for(var b=0;b<a.length;b++){var c=a[b];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(e,
c.key,c)}}function Q(e,a,b){a&&kb(e.prototype,a);b&&kb(e,b);return e}function C(e,a,b){a in e?Object.defineProperty(e,a,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[a]=b;return e}function lb(e,a){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}));b.push.apply(b,c)}return b}function u(e){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};
a%2?lb(b,!0).forEach(function(a){C(e,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):lb(b).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(b,a))})}return e}function mc(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}});a&&va(e,a)}function X(e){X=Object.setPrototypeOf?
Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)};return X(e)}function va(e,a){va=Object.setPrototypeOf||function(a,c){a.__proto__=c;return a};return va(e,a)}function wa(e,a,b){wa="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(a,b,e){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=X(a),null!==a););if(a)return b=Object.getOwnPropertyDescriptor(a,b),b.get?b.get.call(e):b.value};return wa(e,a,b||e)}function Y(e,a){var b=Array.isArray(e)?e:void 0;if(!b){b=
[];var c=!0,d=!1,f=void 0;try{for(var g=e[Symbol.iterator](),l;!(c=(l=g.next()).done)&&(b.push(l.value),!a||b.length!==a);c=!0);}catch(q){d=!0,f=q}finally{try{if(!c&&null!=g["return"])g["return"]()}finally{if(d)throw f;}}}if(!(e=b))throw new TypeError("Invalid attempt to destructure non-iterable instance");return e}function ia(e){if(Array.isArray(e)){var a=0;for(var b=Array(e.length);a<e.length;a++)b[a]=e[a];a=b}else a=void 0;a||(a=Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)?
Array.from(e):void 0);if(!(e=a))throw new TypeError("Invalid attempt to spread non-iterable instance");return e}function xa(e){var a=document.createElement("a");a.href=e;return a}function ya(e){var a,b,c,d=[],f=[b=1732584193,c=4023233417,~b,~c,3285377520],g=[],l=unescape(encodeURI(e))+"\u0080",q=l.length;for(g[e=--q/4+2|15]=8*q;~q;)g[q>>2]|=l.charCodeAt(q)<<8*~q--;for(a=q=0;a<e;a+=16){for(b=f;80>q;b=[b[4]+(d[q]=16>q?~~g[a+q]:2*l|0>l)+1518500249+[c&h|~c&k,l=341275144+(c^h^k),882459459+(c&h|c&k|h&k),
l+1535694389][q++/5>>2]+((l=b[0])<<5|l>>>27),l,c<<30|c>>>2,h,k]){l=d[q-3]^d[q-8]^d[q-14]^d[q-16];c=b[1];var h=b[2];var k=b[3]}for(q=5;q;)f[--q]+=b[q]}for(l="";40>q;)l+=(f[q>>3]>>4*(7-q++)&15).toString(16);return l}function ja(e,a,b,c){return e.addEventListener?(e.addEventListener(a,b,c),!0):!1}function I(e,a,b,c){return e.removeEventListener?(e.removeEventListener(a,b,c),!0):!1}function mb(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(a){return null}}function za(e){var a=1<arguments.length&&
void 0!==arguments[1]?arguments[1]:y;return a&&9===a.nodeType||a&&1===a.nodeType?nc.test(e)?a.getElementsByClassName(e.slice(1)):oc.test(e)?a.getElementsByTagName(e):a.querySelectorAll(e):[]}function pc(e,a){return a.toUpperCase()}function Z(e){return e.replace(qc,pc)}function v(e,a){for(var b=0,c=e.length;b<c&&!1!==a.call(e[b],b,e[b]);b++);}function nb(e){for(var a=arguments.length,b=Array(1<a?a-1:0),c=1;c<a;c++)b[c-1]=arguments[c];a=arguments;b=a.length;for(c=2>b?0:1;c<b;c++)for(var d in a[c])e[d]=
a[c][d];return e}function Aa(e,a){var b=e&&(e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector);return!!b&&b.call(e,a)}function aa(e,a,b){for(var c=[],d=0,f=e.length;d<f;d++)for(var g=e[d][a];null!=g;){c.push(g);if(!b)break;g=g[a]}return c}function ka(e){return!!e&&e===e.window}function S(e){return"function"===typeof e}function B(e){return"string"===typeof e}function ob(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Ba(e){return B(e)?function(a,
b){return Aa(b,e)}:S(e)?e:e instanceof m?function(a,b){return e.is(b)}:function(a,b){return b===e}}function T(e,a){return a&&e.length?e.filter(a):e}function la(e){return B(e)?e.match(rc)||[]:[]}function E(e){return 1<e.length?Ca.call(e,function(a,b,c){return pb.call(c,a)===b}):e}function U(e,a,b){if(e&&1===e.nodeType&&a)return e=V.getComputedStyle(e,null),a?b?e.getPropertyValue(a)||void 0:e[a]:e}function W(e,a){return parseInt(U(e,a),10)||0}function qb(e){if(1<arguments.length&&void 0!==arguments[1]?
arguments[1]:Da.test(e))return e;if(!Ea[e]){var a=Z(e),b="".concat(a.charAt(0).toUpperCase()).concat(a.slice(1));a="".concat(a," ").concat(sc.join("".concat(b," "))).concat(b).split(" ");v(a,function(a,b){if(b in tc)return Ea[e]=b,!1})}return Ea[e]}function rb(e,a){return(2<arguments.length&&void 0!==arguments[2]?arguments[2]:Da.test(e))||uc[e]||!ob(a)?a:"".concat(a,"px")}function vc(e,a){e=e.dataset?e.dataset[a]||e.dataset[Z(a)]:e.getAttribute("data-".concat(a));try{return JSON.parse(e)}catch(b){}return e}
function sb(e,a){return W(e,"border".concat(a?"Left":"Top","Width"))+W(e,"padding".concat(a?"Left":"Top"))+W(e,"padding".concat(a?"Right":"Bottom"))+W(e,"border".concat(a?"Right":"Bottom","Width"))}function tb(e,a){return!a||!ub.call(a,function(a){return 0>e.indexOf(a)})}function wc(e,a,b,c,d){d.guid=d.guid||k.guid++;var f=e.__cashEvents=e.__cashEvents||{};f[a]=f[a]||[];f[a].push([b,c,d]);e.addEventListener(a,d)}function Fa(e){e=e.split(".");return[e[0],e.slice(1).sort()]}function ma(e,a,b,c,d){var f=
e.__cashEvents=e.__cashEvents||{};if(a)f[a]&&(f[a]=f[a].filter(function(f){var g=Y(f,3);f=g[0];var q=g[1];g=g[2];if(d&&g.guid!==d.guid||!tb(f,b)||c&&c!==q)return!0;e.removeEventListener(a,g)}));else{for(a in f)ma(e,a,b,c,d);delete e.__cashEvents}}function vb(e){return e.multiple?aa(Ca.call(e.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):e.value||""}function wb(e){if(!na){var a=y.createElement("table"),b=y.createElement("tr");na={"*":xb,tr:y.createElement("tbody"),
td:b,th:b,thead:a,tbody:a,tfoot:a}}if(!B(e))return[];if(xc.test(e))return[y.createElement(RegExp.$1)];a=yc.test(e)&&RegExp.$1;a=na[a]||na["*"];a.innerHTML=e;return k(a.childNodes).detach().get()}function Ga(e){e=k(e);e.filter("script").add(e.find("script")).each(function(a,b){!b.src&&zc.test(b.type)&&b.ownerDocument.documentElement.contains(b)&&eval(b.textContent.replace(Ac,""))})}function oa(e,a,b){v(e,function(c,d){v(a,function(a,e){a=c?e.cloneNode(!0):e;b?d.insertBefore(a,b&&d.firstChild):d.appendChild(a);
Ga(a)})})}function Bc(e){e.itemAction&&e.itemAction.includes("View")&&yb()}function zb(e){-1!==F&&(Ha(!1,e),clearTimeout(F),F=-1)}function yb(){if(!n.beaconConfig.doNotTrackPingRequestsForActions){zb(!0);Ia&&Ia();Ia=p.onEventSend.on(Bc);var e=Date.now();if(-1===z||e-z>=n.beaconConfig.minimumActivityTimeToRegister)z=e;F=setTimeout(function(){Ha(!0)},n.beaconConfig.timeOnPageTimerLengthMillis);t.info("Setting up time on page listeners.");I(window,"unload",Ja);ja(window,"unload",Ja);I(window,"blur",
Ka);ja(window,"blur",Ka);I(window,"focus",La);ja(window,"focus",La);I(document,"mousemove keydown scroll click",ba);ja(document,"mousemove keydown scroll click",ba)}}function Ha(e,a){var b=Date.now();-1!==z&&(b-=z,n.beaconConfig.timeOnPageTimerLengthMillis<b?pa():(t.trace("Evergage: timeOnPage before: sendActivityPingRequest: ".concat(w)),w+=b,t.trace("Evergage: timeOnPage after: sendActivityPingRequest: ".concat(w)),-1!==G&&clearTimeout(G),G=setTimeout(pa,n.beaconConfig.timeOnPageTimerLengthMillis-
b)));0<w&&(w=Math.min(w,n.beaconConfig.timeOnPageTimerLengthMillis),(!0!==a||2E3<=w)&&Cc(Dc(w)),w=0);0>w&&(w=0);e&&(-1!==F&&clearTimeout(F),F=setTimeout(function(){Ha(!0)},n.beaconConfig.timeOnPageTimerLengthMillis))}function Dc(e){var a={},b=Ab();b&&b.itemAction&&b.catalog&&(a.catalog={},Object.keys(b.catalog).forEach(function(c){var d=b.catalog[c],e=a.catalog;if(n.beaconConfig.trackContextualRelatedItems){if(d=Ma(d,["_id","type","dimensions","categories"]),Array.isArray(d.categories)){for(var g=
[],l=0;l<d.categories.length;l++)g.push(Ma(d.categories[l],["_id","type"]),l);d=u({},d,{categories:g})}}else d=Ma(d,["_id","type"]);e[c]=d;null!=b.action&&(a.action=b.action)}));a.timeOnPageMillis=e;return a}function Ja(e){zb()}function Ka(e){try{t.trace("Evergage: window blurred"),pa()}catch(a){ca(a,"windowBlurFunction")}}function La(e){try{t.trace("Evergage: window focused"),ba()}catch(a){ca(a,"windowFocusFunction")}}function pa(){try{-1!==G&&(clearTimeout(G),G=-1);var e=Date.now(),a=0;-1!==z&&
(a=e-z);t.trace("Evergage: timeOnPage before: setUserInactive: ".concat(w));w+=a;t.trace("Evergage: timeOnPage after: setUserInactive: ".concat(w));z=-1}catch(b){ca(b,"setUserInactive")}}function ba(){t.trace("activity registered");try{-1!==G&&(clearTimeout(G),G=-1);var e=Date.now();if(-1===z||e-z>=n.beaconConfig.minimumActivityTimeToRegister)-1!==z&&(t.trace("Evergage: timeOnPage before: activityRegistered: ".concat(w)),w+=e-Math.max(z,-1),t.trace("Evergage: timeOnPage after: activityRegistered: ".concat(w))),
z=e}catch(a){ca(a,"activityRegistered")}}function Ec(){Na&&Na();Oa&&Oa();Pa&&Pa();Qa&&Qa();Ra&&Ra();Na=p.onFireException.on(function(e,a){document.dispatchEvent(new CustomEvent(J.OnException,{detail:{error:e,context:a}}));Bb.send(Fc(e,a))});Oa=p.onEventResponse.on(function(e,a){var b=e.campaignResponses.map(function(a){return a.experienceId});h.campaignResponses=[].concat(ia(e.campaignResponses),ia(h.campaignResponses.filter(function(a){return!b.includes(a.experienceId)})));document.dispatchEvent(new CustomEvent(J.OnEventResponse,
{detail:{response:e,actionEvent:a}}))});Pa=p.onEventSend.on(function(e){document.dispatchEvent(new CustomEvent(J.OnEventSend,{detail:{actionEvent:e}}))});p.onStatSend.on(function(e,a){document.dispatchEvent(new CustomEvent(J.OnStatSend,{detail:{campaignStat:e,campaignResponse:a}}))});Qa=p.onPageMatchStatusUpdated.on(function(e){document.dispatchEvent(new CustomEvent(J.OnPageMatchStatusUpdated,{detail:{matchStatus:e}}))});Ra=p.onInitSitemap.on(function(e){document.dispatchEvent(new CustomEvent(J.OnInitSitemap,
{detail:{sitemapConfig:e}}))})}function O(e){t.info("Shutting down beacon: ".concat(e));qa("shutDown");return!1}var Sa=["error","warn","info","debug","trace"],t=new (function(){function e(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;N(this,e);this.console=window.console;this.level=b;this.prefix=a;this.buildLogFunctions()}Q(e,[{key:"shouldLog",value:function(a){return a<=this.level}},{key:"setLoggingLevel",value:function(a){this.level=
"string"===typeof a?Sa.indexOf(a.toLowerCase())+1:a||0;this.buildLogFunctions()}},{key:"getLoggingLevel",value:function(){return this.level}},{key:"setPrefix",value:function(a){this.prefix=a;this.buildLogFunctions()}},{key:"getPrefix",value:function(){return this.prefix}},{key:"buildLogFunctions",value:function(){var a=this;Sa.forEach(function(b,c){b=Sa[c];a[b]=a.shouldLog(c+1)?a.getLogFn(b):function(){}})}},{key:"getLogFn",value:function(a){return Function.prototype.bind.call(this.console.log,this.console,
"[".concat(a.toUpperCase(),"]").concat(this.prefix?"("+this.prefix+")":"",":"))}}]);return e}()),Gc="cdn.".concat("evergage.com"),Ta;(function(e){e.Impression="i";e.Clickthrough="c";e.Dismissal="d";e.Unsubscribe="u";e.Send="s"})(Ta||(Ta={}));(function(e){e.Product="Product";e.Category="Category"})(r.ItemType||(r.ItemType={}));var K=function(){function e(){N(this,e);this.listeners=[]}Q(e,[{key:"on",value:function(a){var b=this;(this.listeners=this.listeners||[]).push(a);return function(){b.listeners=
b.listeners.filter(function(b){return b!==a})}}},{key:"once",value:function(a){var b=this;return this.on(function(){b.unbindAll();try{for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];a.apply(b,d)}catch(g){t.error("Signal listener callback error: "+g)}})}},{key:"emit",value:function(){for(var a=this,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];0!==this.listeners.length&&this.listeners.forEach(function(b){try{b.apply(a,c)}catch(g){t.error("Signal listener callback error: "+
g)}})}},{key:"unbindAll",value:function(){this.listeners=[]}}]);return e}(),Hc=function(e){t.debug("Unbinding all signals for type: ",e);Object.keys(e).forEach(function(a){e[a].unbindAll&&e[a].unbindAll()})},n={endpointConfig:{},beaconConfig:{sendEvents:!0,minimumActivityTimeToRegister:300,timeOnPageTimerLengthMillis:6E4,trackAnonymousVisitors:!0,corsAllowedOrigins:["*"],rememberMeUserIdsMillis:63072E6,actionRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perActionLimit:5,perActionTimeRange:2E3}},
visitor:{},beaconState:null},Ic=new K,qa=function(e){n.beaconState=e;Ic.emit(e)},L=function(){return n.visitor||{}},Jc=[/bot/i,/spider/i,/facebookexternalhit/i,/simplepie/i,/yahooseeker/i,/embedly/i,/quora link preview/i,/outbrain/i,/vkshare/i,/monit/i,/Pingability/i,/Monitoring/i,/WinHttpRequest/i,/Apache-HttpClient/i,/getprismatic.com/i,/python-requests/i,/Twurly/i,/yandex/i,/browserproxy/i,/crawler/i,/Qwantify/i,/Yahoo! Slurp/i,/pinterest/i,/Tumblr\/14.0.835.186/i,/Tumblr Agent 14.0/i],Kc=function(e){return Jc.some(function(a){return a.test(e)})},
Lc=navigator.vendor&&-1<navigator.vendor.indexOf("Apple")&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS"),ra=function(e,a){return a={exports:{}},e(a,a.exports),a.exports}(function(e,a){e.exports=function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a],e;for(e in c)b[e]=c[e]}return b}function c(b){function d(){}function e(c,e,f){if("undefined"!==typeof document){f=a({path:"/"},d.defaults,f);"number"===typeof f.expires&&
(f.expires=new Date(1*new Date+864E5*f.expires));f.expires=f.expires?f.expires.toUTCString():"";try{var g=JSON.stringify(e);/^[\{\[]/.test(g)&&(e=g)}catch(Od){}e=b.write?b.write(e,c):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);c=encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);g="";for(var l in f)f[l]&&(g+="; "+l,!0!==f[l]&&(g+="="+f[l].split(";")[0]));return document.cookie=
c+"="+e+g}}function l(a,c){if("undefined"!==typeof document){for(var d={},e=document.cookie?document.cookie.split("; "):[],f=0;f<e.length;f++){var g=e[f].split("="),l=g.slice(1).join("=");c||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var q=g[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);l=(b.read||b)(l,q)||l.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(c)try{l=JSON.parse(l)}catch(Nc){}d[q]=l;if(a===q)break}catch(Nc){}}return a?d[a]:d}}d.set=e;d.get=function(a){return l(a,!1)};d.getJSON=function(a){return l(a,
!0)};d.remove=function(b,c){e(b,"",a(c,{expires:-1}))};d.defaults={};d.withConverter=c;return d}return c(function(){})}()}),Cb,Ua=function(e){return"".concat("_evg").concat(e,"_").concat(Cb)},H={setCookieHash:function(e,a,b){Cb=ya("".concat(e,".").concat(a,".").concat(ya(b+"/").slice(0,4))).slice(0,4)},read:function(e){return ra.getJSON(Ua(e))},write:function(e,a,b,c){ra.set(Ua(e),a,{expires:b,domain:c})},remove:function(e,a){ra.remove(Ua(e),a)}},Va,Wa={read:function(e){if(e=sessionStorage.getItem(Va+
e))return e},write:function(e,a){sessionStorage.setItem(Va+e,a)},setStorageKeyPrefix:function(e,a){Va="_evg|"+e+"|"+a+"|"}},Db=function(e){H.write("a",{uuid:e.uuid,puid:e.persistedUserId,paid:e.persistedAccountId,affinityId:e.affinityId},730,n.beaconConfig.cookieDomain);var a=H.read("a");a&&t.debug("Stored visitor cookie. ".concat(JSON.stringify(a)));return e},Eb=function(e){return 0===e.indexOf("www")?e.substring(4,e.length):e},p=function a(){N(this,a)};p.onEventSend=new K;p.onStatSend=new K;p.onEventResponse=
new K;p.onFireException=new K;p.onPageMatchStatusUpdated=new K;p.onInitSitemap=new K;p.onDeprecatedEventResponse=new K;p.unbindAll=function(){Hc(p)};var ca=function(a,b,c){p.onFireException.emit(a,b);t.warn("sendException",{event,errorSection:b})},J={OnEventResponse:"evergage:onEventResponse",OnEventSend:"evergage:onEventSend",OnStatSend:"evergage:onStatSend",OnException:"evergage:onException",OnTemplateDisplayEnd:"evergage:onTemplateDisplayEnd",OnPageMatchStatusUpdated:"evergage:onPageMatchStatusUpdated",
OnInit:"evergage:onInit",OnInitSitemap:"evergage:onInitSitemap"},D;(function(a){a.Pending="pending";a.Running="running";a.Selected="selected";a.Matched="matched";a.Rejected="rejected"})(D||(D={}));var h={result:{backgroundPage:null,currentPage:null,matchedConfig:null,matchStatus:null},config:{pageTypes:[],currentKey:null,settings:{canonicalizeIds:!1,runOnTranslatedPage:!1,setDefaultListPrice:!1,truncateTranslated:!0}},campaignResponses:[]};"use strict";var Oc=Object.prototype.hasOwnProperty,Fb=!1,
P=[],Gb=function(){Fb=!0;return!1},Pc=function(a){if(Fb)return t.info("Event Rate Limiter previously triggered. Event sending disabled."),!1;var b=Date.now(),c=0,d=0,f=Math.max(n.beaconConfig.actionRateLimiterConfig.globalTimeRange,n.beaconConfig.actionRateLimiterConfig.perActionTimeRange);P.push({name:a,time:b});for(var g=P.length-1;0<=g;g--){if(!(b-P[g].time<f)){P.splice(0,g+1);break}if(b-P[g].time<n.beaconConfig.actionRateLimiterConfig.globalTimeRange&&(c++,c>n.beaconConfig.actionRateLimiterConfig.globalLimit)||
b-P[g].time<n.beaconConfig.actionRateLimiterConfig.perActionTimeRange&&P[g].name===a&&(d++,d>n.beaconConfig.actionRateLimiterConfig.perActionLimit))return Gb()}return!0},y=document,V=window,xb=y.createElement("div"),M=Array.prototype,Ca=M.filter,pb=M.indexOf,Qc=M.map,sa=M.push,Xa=M.reverse,Hb=M.slice,ub=M.some,Rc=M.splice,Sc=/^#[\w-]*$/,nc=/^\.[\w-]*$/,Tc=/<.+>/,oc=/^\w+$/,m=function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:y;N(this,a);if(b){if(b instanceof m)return b;
var d=b;if(B(b)){if(d=c instanceof m?c[0]:c,d=Sc.test(b)?d.getElementById(b.slice(1)):Tc.test(b)?wb(b):za(b,d),!d)return}else if(S(b))return this.ready(b);if(d.nodeType||d===V)d=[d];this.length=d.length;c=0;for(var f=this.length;c<f;c++)this[c]=d[c]}}Q(a,[{key:"init",value:function(b,c){return new a(b,c)}}]);return a}(),k=m.prototype.init;k.fn=k.prototype=m.prototype;m.prototype.length=0;m.prototype.splice=Rc;"function"===typeof Symbol&&(m.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator]);
m.prototype.get=function(a){return void 0===a?Hb.call(this):this[0>a?a+this.length:a]};m.prototype.eq=function(a){return k(this.get(a))};m.prototype.first=function(){return this.eq(0)};m.prototype.last=function(){return this.eq(-1)};m.prototype.map=function(a){return k(Qc.call(this,function(b,c){return a.call(b,c,b)}))};m.prototype.slice=function(){return k(Hb.apply(this,arguments))};var qc=/-([a-z])/g;k.camelCase=Z;k.each=v;m.prototype.each=function(a){v(this,a);return this};m.prototype.removeProp=
function(a){return this.each(function(b,c){delete c[a]})};m.prototype.extend=function(a){return nb(k.fn,a)};k.extend=nb;k.guid=1;k.matches=Aa;var Ya=Array.isArray;k.isWindow=ka;k.isFunction=S;k.isString=B;k.isNumeric=ob;k.isArray=Ya;m.prototype.prop=function(a,b){if(a){if(B(a))return 2>arguments.length?this[0]&&this[0][a]:this.each(function(c,f){f[a]=b});for(var c in a)this.prop(c,a[c]);return this}};m.prototype.filter=function(a){if(!a)return k();var b=Ba(a);return k(Ca.call(this,function(a,d){return b.call(a,
d,a)}))};var rc=/\S+/g;m.prototype.hasClass=function(a){return a&&ub.call(this,function(b){return b.classList.contains(a)})};m.prototype.removeAttr=function(a){var b=la(a);return b.length?this.each(function(a,d){v(b,function(a,b){d.removeAttribute(b)})}):this};m.prototype.attr=function(a,b){if(a){if(B(a)){if(2>arguments.length){if(!this[0])return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,f){f.setAttribute(a,b)})}for(c in a)this.attr(c,
a[c]);return this}};m.prototype.toggleClass=function(a,b){var c=la(a),d=void 0!==b;return c.length?this.each(function(a,g){v(c,function(a,c){d?b?g.classList.add(c):g.classList.remove(c):g.classList.toggle(c)})}):this};m.prototype.addClass=function(a){return this.toggleClass(a,!0)};m.prototype.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};k.unique=E;m.prototype.add=function(a,b){return k(E(this.get().concat(k(a,b).get())))};var Da=/^--/,Ea={},tc=xb.style,
sc=["webkit","moz","ms","o"];k.prefixedProp=qb;var uc={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};m.prototype.css=function(a,b){if(B(a)){var c=Da.test(a);a=qb(a,c);if(2>arguments.length)return this[0]&&U(this[0],a,c);if(!a)return this;b=rb(a,b,c);return this.each(function(d,g){g&&1===g.nodeType&&(c?g.style.setProperty(a,b):g.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Uc=/^data-(.+)/;
m.prototype.data=function(a,b){var c=this;if(!a){if(!this[0])return;var d={};v(this[0].attributes,function(a,b){(a=b.name.match(Uc))&&(d[a[1]]=c.data(a[1]))});return d}if(B(a))return void 0===b?this[0]&&vc(this[0],a):this.each(function(c,d){c=b;try{c=JSON.stringify(c)}catch(q){}d.dataset?d.dataset[Z(a)]=c:d.setAttribute("data-".concat(a),c)});for(var f in a)this.data(f,a[f]);return this};v(["Width","Height"],function(a,b){m.prototype["inner".concat(b)]=function(){if(this[0])return ka(this[0])?V["inner".concat(b)]:
this[0]["client".concat(b)]}});v(["width","height"],function(a,b){m.prototype[b]=function(c){if(!this[0])return void 0===c?void 0:this;if(!arguments.length)return ka(this[0])?this[0][Z("outer-".concat(b))]:this[0].getBoundingClientRect()[b]-sb(this[0],!a);var d=parseInt(c,10);return this.each(function(c,g){g&&1===g.nodeType&&(c=U(g,"boxSizing"),g.style[b]=rb(b,d+("border-box"===c?sb(g,!a):0)))})}});v(["Width","Height"],function(a,b){m.prototype["outer".concat(b)]=function(c){if(this[0])return ka(this[0])?
V["outer".concat(b)]:this[0]["offset".concat(b)]+(c?W(this[0],"margin".concat(a?"Top":"Left"))+W(this[0],"margin".concat(a?"Bottom":"Right")):0)}});var Za={};m.prototype.toggle=function(a){return this.each(function(b,c){if(void 0!==a?a:"none"===U(c,"display")){if(c.style.display="","none"===U(c,"display")){b=c.style;c=c.tagName;if(Za[c])c=Za[c];else{var d=y.createElement(c);y.body.appendChild(d);var f=U(d,"display");y.body.removeChild(d);c=Za[c]="none"!==f?f:"block"}b.display=c}}else c.style.display=
"none"})};m.prototype.hide=function(){return this.toggle(!1)};m.prototype.show=function(){return this.toggle(!0)};var $a={focus:"focusin",blur:"focusout"},Ib={mouseenter:"mouseover",mouseleave:"mouseout"},Vc=/^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;m.prototype.off=function(a,b,c){var d=this;void 0===a?this.each(function(a,b){return ma(b)}):(S(b)&&(c=b,b=""),v(la(a),function(a,g){a=Fa(Ib[g]||$a[g]||g);a=Y(a,2);var f=a[0],h=a[1];d.each(function(a,d){return ma(d,f,h,b,c)})}));return this};
m.prototype.on=function(a,b,c,d){var f=this;if(!B(a)){for(var g in a)this.on(g,b,a[g]);return this}S(b)&&(c=b,b="");v(la(a),function(a,g){a=Fa(Ib[g]||$a[g]||g);a=Y(a,2);var l=a[0],h=a[1];f.each(function(a,f){a=function Mc(a){if(!a.namespace||tb(h,a.namespace.split("."))){var g=f;if(b){for(var q=a.target;!Aa(q,b);){if(q===f)return;q=q.parentNode;if(!q)return}g=q;a.__delegate=!0}a.__delegate&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});q=c.call(g,a,a.data);d&&
ma(f,l,h,b,Mc);!1===q&&(a.preventDefault(),a.stopPropagation())}};a.guid=c.guid=c.guid||k.guid++;wc(f,l,h,b,a)})});return this};m.prototype.one=function(a,b,c){return this.on(a,b,c,!0)};m.prototype.ready=function(a){var b=function(){return a(k)};"loading"!==y.readyState?setTimeout(b):y.addEventListener("DOMContentLoaded",b);return this};m.prototype.trigger=function(a,b){if(B(a)){a=Fa(a);var c=Y(a,2);a=c[0];c=c[1];var d=Vc.test(a)?"MouseEvents":"HTMLEvents";var f=y.createEvent(d);f.initEvent(a,!0,
!0);f.namespace=c.join(".")}else f=a;f.data=b;var g=f.type in $a;return this.each(function(a,b){if(g&&S(b[f.type]))b[f.type]();else b.dispatchEvent(f)})};var Wc=/%20/g,Xc=/file|reset|submit|button|image/i,Yc=/radio|checkbox/i;m.prototype.serialize=function(){var a="";this.each(function(b,c){v(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Xc.test(c.type)||Yc.test(c.type)&&!c.checked||(b=vb(c),void 0!==b&&(b=Ya(b)?b:[b],v(b,function(b,d){b=a;d="&".concat(encodeURIComponent(c.name),
"=").concat(encodeURIComponent(d).replace(Wc,"+"));a=b+d})))})});return a.substr(1)};m.prototype.val=function(a){return void 0===a?this[0]&&vb(this[0]):this.each(function(b,c){if("SELECT"===c.tagName){var d=Ya(a)?a:null===a?[]:[a];v(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)})}else c.value=null===a?"":a})};m.prototype.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};m.prototype.detach=function(){return this.each(function(a,b){b.parentNode&&b.parentNode.removeChild(b)})};
var yc=/^\s*<(\w+)[^>]*>/,xc=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,na;k.parseHTML=wb;m.prototype.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};m.prototype.html=function(a){return void 0===a?this[0]&&this[0].innerHTML:this.each(function(b,c){c.innerHTML=a})};m.prototype.remove=function(){return this.detach().off()};m.prototype.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){c.textContent=a})};m.prototype.unwrap=
function(){this.parent().each(function(a,b){a=k(b);a.replaceWith(a.children())});return this};var Jb=y.documentElement;m.prototype.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+V.pageYOffset-Jb.clientTop,left:a.left+V.pageXOffset-Jb.clientLeft}};m.prototype.offsetParent=function(){return k(this[0]&&this[0].offsetParent)};m.prototype.position=function(){var a=this[0];if(a)return{left:a.offsetLeft,top:a.offsetTop}};m.prototype.children=function(a){var b=[];this.each(function(a,
d){sa.apply(b,d.children)});return T(k(E(b)),a)};m.prototype.contents=function(){var a=[];this.each(function(b,c){sa.apply(a,"IFRAME"===c.tagName?[c.contentDocument]:c.childNodes)});return k(E(a))};m.prototype.find=function(a){for(var b=[],c=0,d=this.length;c<d;c++){var f=za(a,this[c]);f.length&&sa.apply(b,f)}return k(E(b))};var zc=/^$|^module$|\/(?:java|ecma)script/i,Ac=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;m.prototype.append=function(){var a=this;v(arguments,function(b,c){oa(a,k(c))});return this};
m.prototype.appendTo=function(a){oa(k(a),this);return this};m.prototype.insertAfter=function(a){var b=this;k(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d.nextSibling);Ga(b)})});return this};m.prototype.after=function(){var a=this;v(Xa.apply(arguments),function(b,c){Xa.apply(k(c).slice()).insertAfter(a)});return this};m.prototype.insertBefore=function(a){var b=this;k(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):
f;c.insertBefore(b,d);Ga(b)})});return this};m.prototype.before=function(){var a=this;v(arguments,function(b,c){k(c).insertBefore(a)});return this};m.prototype.prepend=function(){var a=this;v(arguments,function(b,c){oa(a,k(c),!0)});return this};m.prototype.prependTo=function(a){oa(k(a),Xa.apply(this.slice()),!0);return this};m.prototype.replaceWith=function(a){return this.before(a).remove()};m.prototype.replaceAll=function(a){k(a).replaceWith(this);return this};m.prototype.wrapAll=function(a){if(this[0]){a=
k(a);this.first().before(a);for(a=a[0];a.children.length;)a=a.firstElementChild;this.appendTo(a)}return this};m.prototype.wrap=function(a){return this.each(function(b,c){var d=k(a)[0];k(c).wrapAll(b?d.cloneNode(!0):d)})};m.prototype.wrapInner=function(a){return this.each(function(b,c){b=k(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};m.prototype.has=function(a){var b=B(a)?function(b,d){return!!za(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};m.prototype.is=function(a){if(!a||
!this[0])return!1;var b=Ba(a),c=!1;this.each(function(a,f){c=b.call(f,a,f);return!c});return c};m.prototype.next=function(a,b){return T(k(E(aa(this,"nextElementSibling",b))),a)};m.prototype.nextAll=function(a){return this.next(a,!0)};m.prototype.not=function(a){if(!a||!this[0])return this;var b=Ba(a);return this.filter(function(a,d){return!b.call(d,a,d)})};m.prototype.parent=function(a){return T(k(E(aa(this,"parentNode"))),a)};m.prototype.index=function(a){var b=a?k(a)[0]:this[0];a=a?this:k(b).parent().children();
return pb.call(a,b)};m.prototype.closest=function(a){if(!a||!this[0])return k();var b=this.filter(a);return b.length?b:this.parent().closest(a)};m.prototype.parents=function(a){return T(k(E(aa(this,"parentElement",!0))),a)};m.prototype.prev=function(a,b){return T(k(E(aa(this,"previousElementSibling",b))),a)};m.prototype.prevAll=function(a){return this.prev(a,!0)};m.prototype.siblings=function(a){var b=[];this.each(function(a,d){sa.apply(b,k(d).parent().children(function(a,b){return b!==d}))});return T(k(E(b)),
a)};var Kb=function(a){a=a?(a=xa(a))?a.pathname:"":"";return a},Lb=function(a,b){b="undefined"===typeof b?location.search:b;for(var c=/([^=?&]+)=?([^&]*)/g,d={},f;f=c.exec(b);){var g=mb(f[1]);f=mb(f[2]);null===g||null===f||g in d||(d[g]=f)}return d[a]||""},Mb=function(a,b){return(a=a.exec(b))&&2===a.length?a[1]:null},Nb=function(a){return Mb(/[/]?([^/]*)[/]?$/,Kb(a))},ab=function(a){return"string"!==typeof a||""===a.trim()?null:xa(a).href},bb=function(a){return a&&"string"===typeof a?(a=parseFloat(a.replace(/[^0-9.]+/g,
"")),isNaN(a)?null:a):null},Ob=function(a){return a&&"string"===typeof a?(a=parseInt(a.trim().replace(/[^0-9.]+/g,""),10),isNaN(a)?null:a):null},cb=function(a,b){b=b||window;a=a.split(".");var c=!0,d=!1,f=void 0;try{for(var g=a[Symbol.iterator](),l;!(c=(l=g.next()).done);c=!0){var h=l.value;var k=/(\w+)\[([0-9]+)\]/.exec(h);if(b[h])b=b[h];else if(k){if(b[k[1]]&&(b=b[k[1]][parseInt(k[2],10)],!b))return null}else return null}}catch(R){d=!0,f=R}finally{try{c||null==g.return||g.return()}finally{if(d)throw f;
}}return b},Pb={extractFirstGroup:Mb,getLastPathComponent:Nb,getLastPathComponentWithoutExtension:function(a){a=Nb(ab(a));var b=a.lastIndexOf(".");return 0<=b?a.substring(0,b):a},getParameterByName:Lb,getPathname:Kb,qualifyUrl:ab,removeQueryString:function(a){if(!a)return"";a=xa(a);return[a.protocol,"//","http:"===a.protocol&&"80"===a.port||"https:"===a.protocol&&"443"===a.port?a.hostname:a.host,a?a.pathname:""].join("")},getFloatValue:bb,getIntegerValue:Ob,getUtagFirstForField:function(a){var b=
window.utag_data;if(b&&b[a]&&0<=b[a].length)return Array.isArray(b[a])?b[a][0]:b[a]},getValueFromNestedObject:cb,buildLineItemFromPageState:function(a){if(h.result.currentPage&&h.result.currentPage.catalog){var b=h.result.currentPage.catalog[r.ItemType.Product];return b?{_id:b._id,price:b.price,quantity:bb(k(a).val())}:null}},cookie:ra},db=function(){function a(b){N(this,a);this.baseURL=b}Q(a,[{key:"send",value:function(a){Zc(a);var b=this.baseURL+"?";var d="";var f=[],g;"string"!==typeof d&&(d="?");
for(l in a)if(Oc.call(a,l)){(g=a[l])||null!==g&&void 0!==g&&!isNaN(g)||(g="");var l=encodeURIComponent(l);g=encodeURIComponent(g);null!==l&&null!==g&&f.push(l+"="+g)}a=f.length?d+f.join("&"):"";b+=a;if(navigator&&navigator.sendBeacon)return a=new Blob([],{type:"application/x-www-form-urlencoded"}),navigator.sendBeacon(b,a);a=new XMLHttpRequest;a.open("GET",b,!0);a.send()}}]);return a}(),$c=function(a){function b(a){N(this,b);a=X(b).call(this,a);if(!a||"object"!==typeof a&&"function"!==typeof a){if(void 0===
this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");a=this}a.numberOfEventsSent=0;return a}mc(b,a);Q(b,[{key:"send",value:function(a){if(3>this.numberOfEventsSent)return this.numberOfEventsSent++,wa(X(b.prototype),"send",this).call(this,a)}}]);return b}(db),ad=function(){function a(b){N(this,a);this.baseURL=b}Q(a,[{key:"send",value:function(a){var b=this;return new Promise(function(c,f){if(Pc(a.action)){try{var d=JSON.stringify(a)}catch(R){f({message:"Unable to stringify event JSON: "+
R})}var l=new XMLHttpRequest;l.onload=function(){if(200<=this.status&&300>this.status)try{var a=JSON.parse(l.response);c(a)}catch(Nd){f({status:this.status,message:"Unable to parse response:"+l.response})}else f({status:this.status,statusText:l.statusText,message:l.responseText})};l.onerror=function(){f({status:this.status,statusText:l.statusText,message:l.responseText})};a.debug&&a.debug.explanations&&(l.withCredentials=!0);if("true"==Lb("isReadableEvent"))b.sendPost(l,b.baseURL,d);else try{if(!/^[\x20-\x7E]+$/.test(d))throw Error("GET request payload contains non-ASCII characters, try sending POST request");
var h=encodeURIComponent(window.btoa(d)),k=b.baseURL+"?event="+h;if(8192<k.length)throw Error("GET request URL exceeds 8192 characters, try sending POST request");b.sendGet(l,k)}catch(R){b.sendPost(l,b.baseURL,d)}}else f({message:"Event Rate Limiter triggered"})})}},{key:"sendGet",value:function(a,c){a.open("GET",c,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");a.send()}},{key:"sendPost",value:function(a,c,d){a.open("POST",c,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");
a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.send("event="+encodeURIComponent(d))}}]);return a}(),Zc=function(a){Object.keys(a).forEach(function(b){var c=a[b];if("number"!=typeof c&&"boolean"!==typeof c&&null!=c)if("string"==typeof c){a:switch(b){case "url":case "urlref":c=c.substring(0,3072);break a;case "title":c=c.substring(0,1024);break a;default:c=c.substring(0,1024)}a[b]=c}else"function"==typeof c?delete a[b]:a[b]=JSON.stringify(c)})},Qb,Rb,Sb,Bb,da,ea,eb=function(a){a[".bv"]=
16;a._ak=n.endpointConfig.account;a._ds=n.endpointConfig.dataset;a[".scv"]=n.endpointConfig.siteConfigVersion;a.channel="Web";a._r=String(Math.random()).slice(2,8)},fb=function(a){var b=L();a.userId?a._reqPersistedEntityIds="":b.persistedUserId&&(a._persistedUserId=b.persistedUserId);n.beaconConfig.trackAnonymousVisitors&&(a[".anonId"]=b.uuid,null!=b.affinityId&&(a[".aaId"]=b.affinityId),a.userId||a._persistedUserId||a._persistedAccountId||(a._anon="true"));return a},fa=function(a){a="".concat(a);
if(null==a||974>=a.length)return a;var b=731,c=244;974!=b+c&&(b+=974-(b+c));10<c?c-=5:10<b&&(b-=5);return a.substring(0,b)+" ... "+a.substring(a.length-c)},Tb=function(a,b){var c=b.header,d=b.fileName,f=b.line;b=b.column;c&&(a[".ef"]=fa(c));a[".eu"]=fa(d);a[".el"]=fa(f);a[".ec"]=fa(b);return a},bd=(da={},C(da,".eu","sourceURL"),C(da,".el","line"),C(da,".ec","column"),da),cd=(ea={},C(ea,".eu","fileName"),C(ea,".el","lineNumber"),C(ea,".ec","columnNumber"),ea),Ub=function(a,b,c){return b?Tb(a,{header:!!b.stack&&
"string"===typeof b.stack&&b.stack.substring(0,b.stack.indexOf("@")),fileName:b[c[".eu"]],line:b[c[".el"]],column:b[c[".ec"]]}):a},dd=function(a){var b=Object.keys(a)[0];if(!b)return{};a=a[b];b={type:b,_id:a._id,name:a.name,url:a.url,imageUrl:a.imageUrl,description:a.description};a.price&&(b.priceDescription=a.priceDescription,b.price=a.price,b.listPrice=a.listPrice,b.currency=a.currency,b.inventoryCount=a.inventoryCount,b.alternateId=a.alternateId);Array.isArray(a.categories)&&(b.categories=a.categories.map(function(a){return"string"===
typeof a?{_id:a,type:r.ItemType.Category}:a}));if("object"===x(a.dimensions)){b.dimensions={};for(var c in a.dimensions)if(a.dimensions.hasOwnProperty(c)){var d=a.dimensions[c];Array.isArray(d)?b.dimensions[c]=d:b.dimensions[c]=[d]}}return b},fd=function(a){var b=[];Object.keys(a).forEach(function(c){b=b.concat(ed(c,a[c]))});return b},ed=function(a,b){return b.map(function(b){var c=gd(a);return{_id:b,type:c,tagType:"t"===c?a:void 0}})},gd=function(a){switch(a){case "Product":return"p";case "Article":return"a";
case "Blog":return"b";case "Category":return"c";case "Promotion":return"P";default:return"t"}},hd=function(a){var b={type:"e",id:a.experienceId,stat:Ta[a.stat],ug:a.control?"Control":void 0};a.catalog&&(b.piks=fd(a.catalog));return b},id=function(a){var b={};b[".cStat"]=JSON.stringify(a.campaignStats.map(hd));eb(b);fb(b);Rb.send(b)},Fc=function(a,b){var c={};eb(c);fb(c);c[".em"]=fa(a.message||a);c[".es"]=b;var d=window.navigator.userAgent.toLowerCase();b="unknown";var f="";switch(!0){case -1<d.indexOf("edge"):b=
"ie";f="edge";break;case -1<d.indexOf("trident"):b="ie";f="trident";break;case -1<d.indexOf("chrome")&&!!window.chrome:f=b="chrome";break;case -1<d.indexOf("firefox"):f=b="mozilla";break;case -1<d.indexOf("safari"):f=b="safari"}"unknown"!==b?(d=(new RegExp("".concat(f,"/(.*?)s"),"gm")).exec(d),d=parseInt(!!d&&d[1]),d=isNaN(d)?null:d):d=null;c[".vt"]=b;d&&(c[".vn"]=d);switch(b){case "safari":Ub(c,a,bd);break;case "mozilla":Ub(c,a,cd);break;default:a&&a.stack&&"string"===typeof a.stack&&(a=a.stack.split("\n")[1],
a=a.substring(a.indexOf("at ")+3).match(/(.*) \((.*):(\d+):(\d+)\)/),Array.isArray(a)&&Tb(c,{header:a[1],fileName:a[2],line:a[3],column:a[4]}))}return c};(function(a){a.ViewItem="View Item";a.ViewItemOutOfStock="View Item Out Of Stock";a.ViewItemDetail="View Item Detail";a.QuickViewItem="Quick View Item";a.StopQuickViewItem="Stop Quick View Item";a.ViewCategory="View Category";a.ViewTag="View Tag";a.AddToCart="Add To Cart";a.ViewCart="View Cart";a.Purchase="Purchase";a.Share="Share";a.Review="Review";
a.Comment="Comment";a.Favorite="Favorite";a.Search="Search";a.SearchViewResults="Search View Results";a.SearchClick="Search Click";a.ClickThrough="Click Through";a.UpdateLineItem="Update Line Item";a.RemoveFromCart="Remove From Cart";a.ViewBanditItems="View Bandit Items"})(r.ItemAction||(r.ItemAction={}));var ld=function(a){jd(a);kd(a);p.onEventSend.emit(a);switch(a.itemAction){case r.ItemAction.QuickViewItem:h.result=u({},h.result,{backgroundPage:h.result.backgroundPage||h.result.currentPage,currentPage:u({},
a,{action:a.action||r.ItemAction.QuickViewItem,itemAction:r.ItemAction.QuickViewItem})});break;case r.ItemAction.StopQuickViewItem:h.result=u({},h.result,{backgroundPage:null,currentPage:h.result.backgroundPage||h.result.currentPage})}return new Promise(function(b,c){Qb.send(a).then(function(c){var d=L(),g=c.persistedUserId,l=c.anonAffinityId;if(g){var h=g.entityId;g=g.accountId;h&&(d.persistedUserId=h);g&&(d.persistedAccountId=g)}l&&l!==d.affinityId&&(d.affinityId=l);Db(d);t.debug("Received event response: ",
c);p.onEventResponse.emit(c,a);p.onDeprecatedEventResponse.emit(c);b(c)})})},jd=function(a){md(a);var b=L();a.user=u({},a.user||{},{anonId:b.uuid});b.persistedUserId&&(a.user.encryptedId=b.persistedUserId);b=L();a.account=a.account||{};b.persistedAccountId&&(a.account.encryptedId=b.persistedAccountId);if(b=Pb.getParameterByName("evergageTestMessages"))a.debug?a.debug.testMessages=b:a.debug={testMessages:b}},md=function(a){a.source=a.source||{};var b=a.source||{},c;(c=a.source.pageType)||(c=h.result.currentPage&&
h.result.currentPage.source?h.result.currentPage.source.pageType:void 0);a.source=u({},b,{pageType:c,url:a.source.url||window.location.href,urlReferrer:a.source.urlReferrer||document.referrer,channel:a.source.channel||"Web",contentZones:(a.source.contentZones||[]).map(function(a){return(a||{}).name}),time:a.source.time,configVersion:n.endpointConfig.siteConfigVersion,beaconVersion:16})},kd=function(a){a.catalog&&0<Object.keys(a.catalog).length&&Object.keys(a.catalog).forEach(function(b){if(a.catalog[b]&&
a.catalog[b].dimensions){var c=a.catalog[b].dimensions;Object.keys(c).forEach(function(a){if(!Array.isArray(c[a]))return p.onFireException.emit(Error("".concat(a," is not an array. Dimensions must have type of string[]")),"Sitemap"),!1})}});return!0},gb=function(a){a:{var b=a,c=h.result.matchedConfig;try{b=c&&c.onActionEvent?c.onActionEvent(b):b;if("object"===x(b)){a=b;break a}p.onFireException.emit(Error("onActionEvent failed for the ".concat(h.result.matchedConfig.name," page config. Must return an object or null.")),
"Site-wide Javascript")}catch(d){p.onFireException.emit(Error("onActionEvent failed for the ".concat(h.result.matchedConfig.name," page config. ").concat(d.message,".")),"Site-wide Javascript")}a=void 0}a:{b=a;c=h.config;try{b=c.global&&c.global.onActionEvent?c.global.onActionEvent(b):b;if("object"===x(b)){a=b;break a}p.onFireException.emit(Error("onActionEvent failed for the global page config. Must return an object or null."),"Site-wide Javascript")}catch(d){p.onFireException.emit(Error("onActionEvent failed for the global page config. ".concat(d.message,
".")),"Site-wide Javascript")}a=void 0}return n.beaconConfig.sendEvents?ld(a):Promise.resolve(a)},Cc=function(a){if(n.beaconConfig.sendEvents){var b={};b[".top"]=""+a.timeOnPageMillis;a.catalog&&0<Object.keys(a.catalog).length&&(b.item=JSON.stringify(dd(a.catalog)));a.action&&(b.action=a.action);eb(b);fb(b);Sb.send(b);a=void 0}else a=Promise.resolve(a);return a},Ma=function(a,b){var c={_id:null},d=!0,f=!1,g=void 0;try{for(var l=b[Symbol.iterator](),h;!(d=(h=l.next()).done);d=!0){var k=h.value;"undefined"!==
typeof a[k]&&Object.assign(c,C({},k,a[k]))}}catch(R){f=!0,g=R}finally{try{d||null==l.return||l.return()}finally{if(f)throw g;}}return c},ta,nd=function(){hb();Vb()&&(ta=setInterval(function(){var a=!1,b=(new Date).getTime(),c=h.result.matchedConfig.listeners.map(function(b){if(b.selectorFound)return b;b=Wb(b);a=b.selectorFound||a;return b}),d=h.result.matchedConfig.contentZones.map(function(b){if(b.selectorFound)return b;b=Xb(b);a=b.selectorFound||a;return b});a&&Object.assign(h.result.matchedConfig,
u({},h.result.matchedConfig,{contentZones:d,listeners:c}));(50<(new Date).getTime()-b||!Vb())&&hb()},1E3))},Vb=function(){if(h.result.matchedConfig){var a=h.result.matchedConfig,b=a.listeners;a=a.contentZones;return b&&a?b.filter(function(a){return!a.selectorFound}).length||a.filter(function(a){return!a.selectorFound}).length:!1}return!1},hb=function(){"number"===typeof ta&&clearInterval(ta);ta=null},Wb=function(a){var b=k(a.selector),c=u({},a,{selectorFound:0<b.length});b.on(c.bind,function(a){if(c.options)t.warn("ListenerOptions are deprecated. Please use a callback in the Listener instead."),
a=u({},c.options,{user:{}}),gb(a);else try{c.callback(a)}catch(f){p.onFireException.emit(Error("Listener callback on ".concat(c.bind," bound to ").concat(c.selector," failed for the ").concat(h.result.matchedConfig.name," page config. ").concat(f.message,".")),"Site-wide Javascript")}});return c},Xb=function(a){var b=!a.selector||0<k(a.selector).length;return u({selectorFound:b},a)},od=function(){h.result&&h.result.matchedConfig&&h.result.matchedConfig.listeners&&h.result.matchedConfig.listeners.forEach(function(a){k(a.selector).off(a.bind)})},
pd={_id:!0,currency:!0,inventoryCount:!0,price:!0,tagType:!0,type:!0},Yb=function(){var a=0<k('script[src*="//translate.googleusercontent.com"]').length,b=0<k("html.translated-ltr").length||0<k("html.translated-rtl").length;if(a||b)return t.debug("page is translated"),!0;try{var c=0<k(window.parent.document).find('script[src*="//www.microsofttranslator.com"]').length,d=0<k(window.parent.document).find('frame[src*="//www.worldlingo.com"]').length;if(c||d)return t.debug("page is translated"),!0;t.debug("page is not translated");
return!1}catch(f){return t.debug("exception caught, assuming page is untranslated "+f),!1}},qd=function(a){Yb()&&Object.keys(a).forEach(function(b){var c=a[b];Object.keys(c).forEach(function(a){pd[a]||delete c[a]})});return a},ac=function(a){return new Promise(function(b,c){a.length||c("No pages defined");var d=h.config.pageTypeDefault;d&&ha({pageName:d.name,status:D.Pending});rd(a);a.map(function(f){sd(f).then(function(g){g?(d&&Zb(d),$b(f),b(f)):(Zb(f),td(a)||(d?($b(d),b(d)):c("No matching page found")))}).catch(function(a){p.onFireException.emit(Error("isMatch failed while evaluating the ".concat(f.name,
" page config")),"Site-wide Javascript")})})})},ud=function(){var a=h;a.result.matchStatus&&(a.result.matchStatus.forEach(function(a){a.status===D.Running&&a._reject()}),h.result.matchStatus=[]);p.onPageMatchStatusUpdated.emit(h.result.matchStatus)},rd=function(a){a.forEach(function(a){ha({pageName:a.name,status:D.Pending})})},$b=function(a){ha({pageName:a.name,endTime:Date.now(),status:h.result.matchStatus.find(function(a){return a.status===D.Selected})?D.Matched:D.Selected})},Zb=function(a){ha({pageName:a.name,
status:D.Rejected,endTime:Date.now()})},td=function(a){return h.result.matchStatus.filter(function(a){return a.status===D.Rejected},0).length<a.length},sd=function(a){return new Promise(function(b,c){ha({pageName:a.name,status:D.Running,startTime:Date.now(),_reject:c});"function"===typeof a.isMatch?(c=a.isMatch(),"object"===x(c)?c.then(function(a){b(a)}).catch(function(){}):b(c)):p.onFireException.emit(Error("isMatch failed while evaluating the ".concat(a.name," page config. isMatch must be a function.")),
"Site-wide Javascript")})},ha=function(a){h.result.matchStatus=[].concat(ia(h.result.matchStatus||[]),[a]);p.onPageMatchStatusUpdated.emit(h.result.matchStatus)},vd=function(a,b){var c=[];a=ib(a);if(0===Object.keys(a).length)return{complete:{Product:[]}};try{c=bc(a),c=cc(c,h.config.settings.canonicalizeIds),jb(b,c,"cart")}catch(d){p.onFireException.emit(Error("getValue for ".concat(b," failed on ").concat(h.result.matchedConfig.name," while evaulating custom function. ").concat(d.message,".")),"Site-wide Javascript")}return{complete:{Product:c}}},
xd=function(a,b){var c={_id:null};Object.keys(a).forEach(function(b){h.config.currentKey=b;try{var d=a[b];if("attributes"===b||"dimensions"===b)var f=ib(d);else f="function"===typeof d?d():d,"categories"===b&&(f=wd(f));f=ua(b,f,h.config.settings.canonicalizeIds);jb(b,f)}catch(q){p.onFireException.emit(Error("getValue for ".concat(b," failed on ").concat(h.result.matchedConfig.name," while evaulating custom function. ").concat(q.message,".")),"Site-wide Javascript")}if(f||"number"===typeof f||"boolean"===
typeof f)c[b]=f});var d={};d[b]=c;return d},yd=function(a){var b={};Object.keys(a).forEach(function(c){h.config.currentKey=c;try{var d=a[c];if("lineItems"===c){var f="function"===typeof d?d():ib(a.lineItems);"object"===x(f)&&(f=bc(f))}else f="function"===typeof d?d():d;f=ua(c,f,h.config.settings.canonicalizeIds);jb(c,f,"order");b[c]=f}catch(g){p.onFireException.emit(Error("getValue for ".concat(c," failed on ").concat(h.result.matchedConfig.name," while evaulating custom function. ").concat(g.message,
".")),"Site-wide Javascript")}});return{Product:b}},bc=function(a){var b;a._id?b=a._id.length:a.sku?b=a.sku.length:p.onFireException.emit(Error("Either _id or sku must be defined for lineItems"),"Sitemap");for(var c=[],d=function(){var a=Y(g[f],2),d=a[0];a=a[1];a.length!=b?p.onFireException.emit(Error("Resolving mutliple values for ".concat(d," failed on ").concat(h.result.matchedConfig.name,". ").concat(d," does not have the same number of values as _id")),"Site-wide Javascript"):a.forEach(function(a,
b){c[b]||(c[b]={_id:null,quantity:null});c[b][d]=a})},f=0,g=Object.entries(a);f<g.length;f++)d();return c},wd=function(a){return a.map(function(a){return{type:"c",_id:a}})},ib=function(a){var b={};Object.keys(a).forEach(function(c){var d=a[c];(d="function"===typeof d?d():d)&&(b[c]=d)});return b},jb=function(a,b,c){var d=h.result;c=c||"catalog";d.currentPage&&d.currentPage[c]&&(d.currentPage[c][a]=b,Object.assign(h,u({},d)))},ua=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:
!0,d=b;return d=Array.isArray(b)?"lineItems"===a?cc(b,c):b.map(function(b){return dc(a,b,c)}):dc(a,b,c)},cc=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;return a.map(function(a){return zd(a,b)})},zd=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,c;for(c in a)if("item"===c)for(var d in a[c])a[c][d]=ua(d,a[c][d],b);else a[c]=ua(c,a[c],b);return a},dc=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0,d=b;"price"!==
a&&"listPrice"!==a&&"totalValue"!==a&&"rating"!==a||"string"!==typeof d||(d=bb(d));if("url"===a||"imageUrl"===a)d=ab(d);"_id"!==a&&"sku"!==a&&"orderId"!==a||"number"!==typeof d||(d=d.toString());!c||"string"!==typeof d||"_id"!==a&&"sku"!==a&&"orderId"!==a&&"alternateId"!==a&&"parentId"!==a||(d=d.toUpperCase());"string"===typeof d&&(0<=d.indexOf("&")&&(c=document.createElement("textarea"),Object.assign(c,{innerHTML:d}),d=c.value),d=d.trim());"description"===a&&"string"===typeof d&&200<d.length&&(d=
d.substr(0,197)+"...");"quantity"!==a&&"inventoryCount"!==a&&"numRatings"!==a||"string"!==typeof d||(d=Ob(d));return d},ec=function(a){a.global=a.global||{};"object"!=x(a.global)&&p.onFireException.emit(Error("The global config has a type of ".concat(x(a.global),", but it must be an object")),"Sitewide Javascript");Object.assign(h.config,u({},a));p.onInitSitemap.emit(h.config)},gc=function(a){fc(a);return!0},Ab=function(){return h.result.currentPage||{}},ic=function(a){h.result.matchedConfig=u({},
a,{contentZones:hc(a),listeners:Ad(a)});var b=h.result,c=h.result.currentPage||{};var d="function"===typeof a.action?a.action():a.action;var f=a.catalog?a.itemAction||r.ItemAction.ViewItem:null,g=a.name;var l="function"===typeof a.locale?a.locale():a.locale;b.currentPage=u({},c,{action:d,itemAction:f,source:{pageType:g,locale:l,contentZones:hc(a)},flags:{pageView:!0},user:{},performance:{},debug:{}});a.itemAction===r.ItemAction.ViewCart||a&&a.cart&&a.cart.complete?(h.result.currentPage.itemAction=
r.ItemAction.ViewCart,h.result.currentPage.cart=Bd(a)):a.itemAction===r.ItemAction.Purchase||a&&a.order?(h.result.currentPage.itemAction=r.ItemAction.Purchase,h.result.currentPage.order=Cd(a)):h.result.currentPage.catalog=Dd(a)},Bd=function(a){if(!a.catalog&&!a.cart&&!a.order)return{};if(a.cart)var b=a.cart;else if(a.order||a.catalog){var c={},d=a.order||a.catalog;Object.keys(d).forEach(function(a){var b=d[a];b&&b.lineItems&&(c[a]=b.lineItems)});b={complete:c}}if(b.complete){a=b.complete;for(var f in a)return Array.isArray(f.match(/[A-Z]/))?
vd(a[f],f):(p.onFireException.emit(Error("Item types must be capitalized. Did you mean ".concat(f.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),{})}},Cd=function(a){if(!a.catalog&&!a.order)return{};a=a.order||a.catalog;for(var b in a)return Array.isArray(b.match(/[A-Z]/))?yd(a[b]):(p.onFireException.emit(Error("Item types must be capitalized. Did you mean ".concat(b.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),{})},Dd=function(a){if(!a.catalog)return{};
for(var b in a.catalog)return Array.isArray(b.match(/[A-Z]/))?Ed(a.catalog[b],b):(p.onFireException.emit(Error("Item types must be capitalized. Did you mean ".concat(b.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),{})},Ed=function(a,b){var c=xd(a,b);Object.keys(c).forEach(function(a){c[a]._id||p.onFireException.emit(Error("Invalid ".concat(b,", missing _id for the ").concat(h.result.matchedConfig.name," page config.")),"Site-wide Javascript")});return h.config.settings.truncateTranslated?
qd(c):c},hc=function(a){return(a.contentZones||[]).map(function(a){return Xb(a)})},Ad=function(a){return(a.listeners||[]).map(function(a){return Wb(a)})},Fd=function b(){for(var c=arguments.length,d=Array(c),f=0;f<c;f++)d[f]=arguments[f];return d.reduce(function(c,d){Object.keys(d).forEach(function(f){var g=c[f],h=d[f];Array.isArray(g)&&Array.isArray(h)?Object.assign(c,C({},f,g.concat.apply(g,ia(h)))):g&&"object"===x(g)&&h&&"object"===x(h)?Object.assign(c,C({},f,b(g,h))):Object.assign(c,C({},f,h))});
return c},{})},jc=function(b){var c=h.config.global||{},d=c.onActionEvent;delete c.onActionEvent;b=Fd(c,b);c.onActionEvent=d;return b},Jd=function(b){try{return Gd(b.global),Hd(b.pageTypeDefault),Id(b.pageTypes),!0}catch(c){return p.onFireException.emit(Error(c),"Sitemap"),!1}},Hd=function(b){b&&Object.keys(b).forEach(function(b){if("contentZones"!==b&&"listeners"!==b&&"locale"!==b&&"name"!==b&&"onActionEvent"!=b)throw Error("".concat(b," is not a valid default config attribute."));})},Gd=function(b){b&&
Object.keys(b).forEach(function(b){if("contentZones"!==b&&"listeners"!==b&&"locale"!==b&&"onActionEvent"!=b)throw Error("".concat(b," is not a valid global config attribute."));})},Id=function(b){b.forEach(function(b){if(!b.name||!b.isMatch)throw Error("All page configs must have a name and isMatch attribute defined");})},Kd=function(){var b=h.result;gb(h.result.currentPage);h.result=b},fc=function(b){ec(b);od();ud();hb();(h.config.settings.runOnTranslatedPage||!Yb())&&Jd(b)&&ac(b.pageTypes).then(jc).then(ic).then(Kd).then(nd).catch(function(b){p.onFireException.emit(Error("Unhandled exception: ".concat(b)),
"Site-wide Javascript")})},w=0,z=-1,F,G,Ia,Ld={setupActivityTimers:yb,activityRegistered:ba,setUserInactive:pa},A=function(b,c){if(b)try{return b(c)}catch(d){return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name," inside of the custom transform function. ").concat(d)),"Site-wide Javascript"),null}return c},Md=k,Na,Oa,Pa,Qa,Ra,kc=function(){return u({},n.endpointConfig,{},n.beaconConfig)},lc=function(b){var c=document.dispatchEvent(new CustomEvent(J.OnInit,
{detail:{beaconConfig:u({},n.beaconConfig,{},n.endpointConfig,{},b)},cancelable:!0}));return new Promise(function(d){if(c){if(Kc(window.navigator.userAgent||"")?O("You are a robot."):"prerender"===document.visibilityState&&Lc?O("Page is pre-rendered and loaded in Safari."):1){var f=n.endpointConfig,g=f.account,h=f.dataset;n.beaconConfig=u({},n.beaconConfig,{trackerUrl:f.trackerUrl},b);f=n.beaconConfig.cookieDomain;f||(f=window.location.hostname);H.setCookieHash(g,h,f);Wa.setStorageKeyPrefix(g,h);
var k=H.read("a");f=H.read("n");k&&"object"===x(k)&&0<Object.keys(k).length?(n.visitor=u({},n.visitor,{},{uuid:k.uuid,affinityId:k.affinityId,persistedUserId:k.puid,persistedAccountId:k.paid}),t.debug("Loaded visitor record from cookie: ".concat(JSON.stringify(L())))):"string"===typeof k&&0<k.length||null!=f&&"object"===x(f)?(k&&"object"!==x(k)&&(k=k.split("."),0<k.length&&(n.visitor.uuid=k[0],1<k.length&&k[1]&&(n.visitor.affinityId=k[1])),H.remove("a",{domain:n.beaconConfig.cookieDomain}),H.remove("a",
{domain:Eb(location.hostname)})),f&&"object"===x(f)&&(f.puid&&"string"===typeof f.puid&&(n.visitor.persistedUserId=f.puid),f.paid&&"string"===typeof f.paid&&(n.visitor.persistedAccountId=f.paid),H.remove("n",{domain:n.beaconConfig.cookieDomain}),H.remove("n",{domain:Eb(location.hostname)})),t.debug("Classic cookie detected with anonymousId: ".concat(L().uuid))):(f=n.visitor,k=(window.navigator.userAgent||"")+(window.navigator.platform||"")+(new Date).getTime+JSON.stringify({})+Math.random(),k=ya(k).slice(0,
16),f.uuid=k,t.debug("Created new visitor record. anonymousId: ".concat(L().uuid)));f=L();Db(f);t.trace("Refreshing session");Wa.read("sessionTicket")||Wa.write("sessionTicket","*");f=n.beaconConfig.trackerUrl;Qb=new ad(f+"/api2/event/"+n.endpointConfig.dataset);Rb=new db(f+"/msreceiver");Sb=new db(f+"/pr");Bb=new $c(f+"/er");Ec();Ld.setupActivityTimers();if("shutDown"!==n.beaconState)return t.debug("Initialized Tracking Beacon v".concat(16," for account[").concat(g,"] dataset[").concat(h,"]")),qa("running"),
d(n),!0}}else t.debug("Cancelling activity tracking."),clearTimeout(F),F=-1,I(window,"unload",Ja),I(window,"blur",Ka),I(window,"focus",La),I(document,"mousemove keydown scroll click",ba),t.debug("Initialization aborted onBeforeInitHook() returned false.")})};r.CustomEvents=J;r.addEventListener=function(b){t.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");return null};r.addResponseListener=function(b){t.warn("Evergage.addResponseListener is deprecated. Use the Evergage.CustomEvents.OnEventReponse event instead.");
return p.onDeprecatedEventResponse.on(b)};r.build=function(b){ac(b.pageTypes).then(jc).then(ic).catch(function(b){p.onFireException.emit(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})};r.cashDom=Md;r.configure=function(b,c){if("running"==n.beaconState){t.debug("Unbinding signal subscriptions.");try{p.unbindAll()}catch(g){t.debug("Failed to unbind Experience.Signals",g)}}qa("initializing");n.endpointConfig=u({},n.endpointConfig,{},b);var d=n.endpointConfig;b=d.account;var f=d.dataset;
d=d.siteConfigVersion;if(!b||!f)return O("account/dataset undefined. Check your beacon configuration.");if(!d)return O("beacon config version undefined");n.endpointConfig.cdnUrl||(n.endpointConfig.cdnUrl="https://".concat(Gc));if(!n.endpointConfig.cdnUrl)return O("cdnUrl undefined. Check your beacon configuration.");n.endpointConfig.trackerUrl||(d=n.endpointConfig,b="https://".concat({account:b,dataset:f}.account,".").concat("evergage.com"),d.trackerUrl=b);if(!n.endpointConfig.trackerUrl)return O("trackerUrl undefined. Check your beacon configuration.");
n.beaconConfig=u({},n.beaconConfig,{},c);qa("configured")};r.getConfig=kc;r.getContentZoneSelector=function(b){var c=(h.result.matchedConfig||{}).contentZones;return c?(c=c.find(function(c){return c.name===b}))&&c.selector?c.selector:null:null};r.getCurrentPage=Ab;r.getLoggingLevel=function(){return t.getLoggingLevel()};r.getState=function(){return h};r.getVersion=function(){return 16};r.init=lc;r.initSitemap=gc;r.listener=function(b,c,d){return"object"===x(d)?{bind:b,selector:c,options:d}:"function"===
typeof d?{bind:b,selector:c,callback:d}:null};r.log=t;r.onBeforeInit=function(b,c){t.warn("Evergage.onBeforeInit is deprecated. Use the Evergage.CustomEvents.OnInit event instead.");b(n.endpointConfig,{});return!1};r.reinit=function(){lc(kc()).then(function(){gc(h.config)})};r.resolvers={fromSelector:function(b,c){return function(){if("string"!=typeof b)return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Selector must be a string.")),
"Site-wide Javascript"),null;var d=k(b).first().text();return d=A(c,d)}},fromSelectorAttribute:function(b,c,d){return function(){if("string"!=typeof b)return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof c)return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Attribute must be a string.")),
"Site-wide Javascript"),null;var f=k(b).first().attr(c);return f=A(d,f)}},fromSelectorMultiple:function(b,c){return function(){if("string"!=typeof b)return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;var d=k(b).get().map(function(b){return k(b).text()});return d=A(c,d)}},fromSelectorAttributeMultiple:function(b,c,d){return function(){if("string"!=typeof b)return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey,
" failed on ").concat(h.result.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof c)return p.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Attribute must be a string.")),"Site-wide Javascript"),null;var f=k(b).get().map(function(b){return k(b).attr(c)});return f=A(d,f)}},fromItemProp:function(b,c){return function(){var d=k("[itemprop='"+b+"']").first().attr("content");return d=
A(c,d)}},fromMeta:function(b,c){return function(){var d=k("meta[name='"+b+"']").first().attr("content")||k("meta[property='"+b+"']").first().attr("content");return d=A(c,d)}},fromWindow:function(b,c){return function(){var d=cb(b);return d=A(c,d)}},fromJsonLd:function(b,c){return function(){var d=k("script[type='application/ld+json']").first().text();try{var f=JSON.parse(d);if(b){var g=cb(b,f);return A(c,g)}return A(c,f)}catch(l){p.onFireException.emit(Error("Parsing JSON-LD for ".concat(h.config.currentKey,
" failed on ").concat(h.result.matchedConfig.name,". ").concat(l)),"Site-wide Javascript")}}},fromCanonical:function(b){return function(){var c=k("link[rel=canonical]").attr("href");return c=A(b,c)}},fromHref:function(b){return function(){var c=window.location.href;return c=A(b,c)}},buildCategoryId:function(b,c,d,f){return function(){var g=Array.from(k(b));c&&(g=g.slice(c));d&&(g=g.slice(0,-1));var l=[];g.forEach(function(b){(b=k(b).text().trim())?l.push(b):p.onFireException.emit(Error("buildCategoryId for ".concat(h.config.currentKey,
" failed on ").concat(h.result.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});g=l.join("|");return g=A(f,g)}},buildCategoryIdAttribute:function(b,c,d,f,g){return function(){var l=Array.from(k(b));d&&(l=l.slice(d));f&&(l=l.slice(0,-1));var m=[];l.forEach(function(b){(b=k(b).attr(c).trim())?m.push(b):p.onFireException.emit(Error("buildCategoryId for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});
l=m.join("|");return l=A(g,l)}}};r.runSpecificConfig=function(b){Object.assign(h.config,{pageTypes:[b]});fc(h.config)};r.sendEvent=gb;r.sendException=ca;r.sendStat=function(b){b.campaignStats.forEach(function(b){var c=h.campaignResponses.find(function(c){return c.experienceId===b.experienceId});p.onStatSend.emit(b,c)});return n.beaconConfig.sendEvents?id(b):Promise.resolve(b)};r.setConfig=ec;r.setLoggingLevel=function(b){t.setLoggingLevel(b)};r.shutDown=O;r.util=Pb;return r}({});

(function configureEvergage() {
    try {
       Evergage.configure({
           account: "b2b",
           dataset: "evergage",
           cdnUrl: "https://cdn.evergage.com",
           trackerUrl: "https://b2b.us-1.evergage.com",
           siteConfigVersion: "8"
       },{"allowBotTraffic":false,"corsAllowedOrigins":["*"],"defaultCurrency":"USD","defaultLocale":null,"disableQtipWindowScroll":false,"doNotStoreCookiesRequireProvidedAnonId":false,"doNotTrackPingRequestsForActions":false,"enableCorsRestrictedOrigins":false,"enableMessageRotation":false,"enableRememberMeUserIds":false,"enableTemplateEsc":false,"hideContentSections":false,"hideContentSectionsMillis":2500,"hidePagesForRedirect":false,"hidePagesForRedirectMillis":1000,"lastModified":1601476609731,"preventSensitiveDataCapture":false,"rememberMeUserIdsMillis":63072000000,"sendErrorEvents":true,"showPoweredBy":false,"siteConfigExecBeforePageReady":false,"spaRouteChangeTimeout":500,"trackAnonymousVisitors":true,"trackContextualRelatedItems":false,"trackSubdomainAsCompany":false,"trackUnknownPagesByTitle":false,"treatHashChangeAsPageLoad":false}       );
    } catch (e) {
          console.error(e);
    }
})();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (event) => {
    if (validateOnTemplateDisplayEndEvent(event)) {
        const payload = event.detail.payload;
        const campaignElement = getCampaignElementFromPayload(payload);
        sendImpression(payload, campaignElement);
        bindCampaignClickthroughsAndDismissals(campaignElement);
    }
});

const sendImpression = (payload, campaignElement) => {
    const userGroup = payload.userGroup;
    const stat = {
        control: userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL,
        experienceId: payload.experience,
        stat: CAMPAIGN_STAT_TYPE.IMPRESSION
    };
    const itemStats = generateItemStats(campaignElement);
    if (Object.keys(itemStats).length > 0) {
        stat.catalog = itemStats;
    }
    if (userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL || (userGroup === CAMPAIGN_STAT_USER_GROUP.TEST && campaignElement.length > 0)) {
        Evergage.sendStat({campaignStats: [stat]});
    } else {
        Evergage.log.warn("campaignStatsTracking.js", "Experience", payload.experience, "not found in DOM.");
    }
};

const generateItemStats = (campaignElement) => {
    const catalogStats = {};
    const itemNodes = Evergage.cashDom(campaignElement).find("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]");
    if (!itemNodes || itemNodes.length === 0) {
        return catalogStats;
    }
    Array.from(itemNodes).forEach(function(itemNode) {
        const itemId = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
        const itemType = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
        if (itemId && itemType) {
            if (!catalogStats[itemType]) {
                catalogStats[itemType] = [];
            }
            catalogStats[itemType].push(itemId);
        }
    });
    return catalogStats;
}

const getCampaignElementFromPayload = (payload) => {
    const experienceId = payload.experience;
    const campaignSelector = "[" + CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE + "=" + "'" + experienceId + "'" + "]";
    return Evergage.cashDom(campaignSelector);
};

const getCampaignClickthroughAndDismissalElements = (campaignElement) => {
    return Evergage.cashDom(campaignElement).find(`
        a,
        [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]
    `);
};

const sendClickthroughOrDismissal = (e) => {
    if (Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.IGNORE_CLICKTHROUGH}]`).length > 0) {
        return;
    }
    const campaignElement = Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}]`);
    if (campaignElement.length > 0  && Evergage.cashDom(e.target).closest(`
        a,
        [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]`).length > 0) {

        const stat = {
            control: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.USER_GROUP) === CAMPAIGN_STAT_USER_GROUP.CONTROL,
            experienceId: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE),
            stat: Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}]`).length > 0 || Evergage.cashDom(e.target).closest("a").length > 0
                ? CAMPAIGN_STAT_TYPE.CLICKTHROUGH
                : CAMPAIGN_STAT_TYPE.DISMISSAL
        };

        if (stat.stat === CAMPAIGN_STAT_TYPE.CLICKTHROUGH) {
            const itemClickthroughStats = generateItemClickthroughStats(e.target);
            if (Object.keys(itemClickthroughStats).length > 0) {
                stat.catalog = itemClickthroughStats;
            }
        }

        Evergage.sendStat({campaignStats: [stat]});
    }
};

const generateItemClickthroughStats = (target) => {
    const itemStats = {};
    const itemId = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
    const itemType = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);

    if (itemId && itemType) {
        itemStats[itemType] = [itemId];
    }
    return itemStats;
}

const bindCampaignClickthroughsAndDismissals = (campaignElement) => {
    const elements = getCampaignClickthroughAndDismissalElements(campaignElement);
    elements.off("click", sendClickthroughOrDismissal);
    elements.on("click", sendClickthroughOrDismissal);
};

const validateOnTemplateDisplayEndEvent = (event) => {
    if (!event.detail) {
        Evergage.log.warn("campaignStatsTracking.js", "No detail object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload) {
        Evergage.log.warn("campaignStatsTracking.js", "No payload object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload.campaign) {
        Evergage.log.warn("campaignStatsTracking.js", "No campaign found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.experience) {
        Evergage.log.warn("campaignStatsTracking.js", "No experience found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.userGroup) {
        Evergage.log.warn("campaignStatsTracking.js", "No user group found in payload object", event.detail);
        return false;
    }
    return true;
};

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    Evergage.DisplayUtils = Evergage.DisplayUtils || (function () {
    var unbindByIds = {};

    function generateId() {
        var id = Math.random().toString(36).slice(2);
        while (unbindByIds[id]) {
            id = Math.random().toString(36).slice(2);
        }
        return id;
    }

    function getBindId(providedId, defaultId, useRandomId) {
        return providedId || (useRandomId ? generateId() : defaultId);
    }

    function buildBaseMethods(bindId, useRandomId) {
        return {
            pageElementLoaded: function (targetSelector, observerSelector) {
                observerSelector = typeof observerSelector === "string" ? observerSelector : "body";
                if (typeof targetSelector !== "string" || targetSelector === "" || typeof observerSelector !== "string" || observerSelector === "") {
                    throw new Error("[pageElementLoaded] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var targetElements = Evergage.cashDom(targetSelector);
                    if (targetElements.length > 0) {
                        resolve(targetElements[0]);
                    } else {
                        var observerNode = Evergage.cashDom(observerSelector)[0];
                        var observer = new MutationObserver(function (mutationList, observer) {
                            for (var mutationRecord of mutationList) {
                                if (mutationRecord.addedNodes && mutationRecord.addedNodes.length > 0) {
                                    for (var addedNode of mutationRecord.addedNodes) {
                                        var targetElement = Evergage.cashDom(addedNode).is(targetSelector)
                                            ? addedNode
                                            : Evergage.cashDom(addedNode).find(targetSelector).get(0);
                                        if (targetElement) {
                                            if (bindId) {
                                                bindingMethods.unbind(bindId);
                                            } else {
                                                observer.disconnect();
                                            }
                                            resolve(targetElement);
                                            return;
                                        }
                                    }
                                }
                            }
                        });
                        observer.observe(observerNode, {
                            childList: true,
                            subtree: true,
                        });
                    }

                    bindId = getBindId(bindId, "<pageElementLoaded>" + targetSelector, useRandomId);
                    unbindByIds[bindId] = function () {
                        observer && observer.disconnect();
                    };
                });
            },
            pageElementVisible: function (selector, percentage) {
                var threshold = percentage || 0;
                if (typeof selector !== "string" || selector === "" || typeof threshold !== "number" || threshold < 0 || threshold > 1) {
                    throw new Error("[pageElementVisible] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var target = Evergage.cashDom(selector);
                    var options = {
                        threshold: threshold,
                    };
                    var observer = new IntersectionObserver(callbackFn, options);

                    function callbackFn(entries, observer) {
                        for (var i = 0; i < entries.length; i++) {
                            if (entries[i].isIntersecting) {
                                if (bindId) {
                                    bindingMethods.unbind(bindId);
                                } else {
                                    observer.disconnect();
                                }
                                resolve(entries[i]);
                                break;
                            }
                        }
                    }

                    observer.observe(target[0]);
                    bindId = getBindId(bindId, "<pageElementVisible>" + selector, useRandomId);
                    unbindByIds[bindId] = function () {
                        observer.disconnect();
                    };
                });
            },
            pageExit: function (delay) {
                delay = delay || 0;
                if (typeof delay !== "number" || delay < 0) {
                    throw new Error("[pageExit] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var $target = Evergage.cashDom(document);
                    var events = "mousemove";
                    var timer;

                    function onmousemove(e) {
                        clearTimeout(timer);
                        if (e.pageY - window.pageYOffset <= 10) {
                            timer = delay > 0 ? setTimeout(callbackFn.bind(this, e), delay) : callbackFn.call(this, e);
                        }
                    }

                    function callbackFn(e) {
                        if (bindId) {
                            bindingMethods.unbind(bindId);
                        } else {
                            $target.off(events, onmousemove);
                        }
                        clearTimeout(timer);
                        resolve(e);
                    }

                    $target.on(events, onmousemove);

                    bindId = getBindId(bindId, "<pageExit>", useRandomId);
                    unbindByIds[bindId] = function () {
                        $target.off(events, onmousemove);
                    };
                });
            },
            pageInactive: function (ms) {
                if (typeof ms !== "number" || ms <= 0) {
                    throw new Error("[pageInactive] Invalid arguments");
                }

                function _pageInactive(ms, state) {
                    var promise = new Promise(function (resolve) {
                        var $target = Evergage.cashDom(document);
                        var resetEvents = "mousemove click scroll keyup keydown";
                        var idleTimer;

                        function callbackFn(e) {
                            e = e || new Event("pageInactive");
                            if (bindId && !state.isSubscribe) {
                                bindingMethods.unbind(bindId);
                            } else {
                                $target.off(resetEvents, resetTimer);
                            }
                            resolve(e);
                        }

                        function resetTimer(e) {
                            clearTimeout(idleTimer);
                            idleTimer = setTimeout(callbackFn.bind(this, e), ms);
                        }

                        resetTimer();

                        $target.on(resetEvents, resetTimer);
                    });

                    promise.subscribe = function subscribe(callback) {
                        delete promise.subscribe;
                        state.isSubscribe = true;
                        promise.then(function (event) {
                            event.disconnect = function () {
                                if (bindId) {
                                    bindingMethods.unbind(bindId);
                                } else {
                                    state.isDisconnected = true;
                                }
                            };
                            callback(event);
                            !state.isDisconnected && _pageInactive(ms, state).subscribe(callback);
                        });
                        return promise;
                    };

                    return promise;
                }

                var state = {
                    isDisconnected: false,
                    isSubscribe: false,
                };

                bindId = getBindId(bindId, "<pageInactive>", useRandomId);
                unbindByIds[bindId] = function () {
                    state.isDisconnected = true;
                };

                return _pageInactive(ms, state);
            },
            pageScroll: function (percentage) {
                if (typeof percentage !== "number" || percentage < 0 || percentage > 1) {
                    throw new Error("[pageScroll] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var $target = Evergage.cashDom(document);
                    var events = "scroll";

                    function callbackFn(e) {
                        resolve(e);
                        if (bindId) {
                            bindingMethods.unbind(bindId);
                        } else {
                            $target.off(events, onScroll);
                        }
                    }

                    function onScroll(e) {
                        var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                        if (scrollPercentage >= percentage) {
                            callbackFn.call(this, e);
                        }
                    }

                    $target.on(events, onScroll);

                    bindId = getBindId(bindId, "<pageScroll>", useRandomId);
                    unbindByIds[bindId] = function () {
                        $target.off(events, onScroll);
                    };
                });
            },
        };
    }

    function buildBindingMethods() {
        return {
            bind: function (id) {
                if (id && unbindByIds[id]) {
                    unbindByIds[id]();
                    delete unbindByIds[id];
                }
                return buildBaseMethods(id);
            },
            unbind: function (id) {
                if (!id || typeof id !== "string" || typeof unbindByIds[id] !== "function") return null;
                unbindByIds[id]();
                delete unbindByIds[id];
            },
            getBindings: function () {
                return unbindByIds;
            },
            clearBindings: function () {
                for (var id in unbindByIds) {
                    if (unbindByIds.hasOwnProperty(id)) {
                        unbindByIds[id]();
                        delete unbindByIds[id];
                    }
                }
            }
        };
    }

    var baseMethods = buildBaseMethods(null, true);
    var bindingMethods = buildBindingMethods();
    return Object.assign(baseMethods, bindingMethods);
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Display Utilities:displayUtils.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
    const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";

    let personalizedSectionsString = "";
    let sectionsHaveEverBeenHidden = false;
    let hasBeenHidden = false;
    let shouldReshowNow = false;
    let hiddenSections = {};

    const utils = {
        getGlobalContentZoneSelectors: () => {
            return ((Evergage.getState().config.global || {}).contentZones || [])
                .filter((contentZone) => (contentZone || {}).selector)
                .map((contentZone) => contentZone.selector);
        },
        getPageTypeContentZoneSelectors: () => {
            const { pageTypes } = Evergage.getState().config;
            return pageTypes.length < 1
                ? []
                : pageTypes
                    .map((pageType) => pageType.contentZones || [])
                    .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                    .filter((contentZone) => (contentZone || {}).selector)
                    .map((contentZone) => contentZone.selector);
        },
        buildContentZoneSelectors: () => {
            return [
                ...new Set([
                    ...utils.getGlobalContentZoneSelectors(),
                    ...utils.getPageTypeContentZoneSelectors()
                ])
            ];
        },
        addToPersonalizedSectionsString: (selector) => {
            if (typeof selector === "string") {
                try {
                    document.querySelector(selector);
                    if (personalizedSectionsString !== "") {
                        personalizedSectionsString += ", ";
                    }
                    personalizedSectionsString += selector;
                } catch (exception) {
                    Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                }
            }
        },
        hasBeenReshown: () => {
            return Evergage.cashDom(personalizationSectionsSelector).length === 0;
        }
    };

    const actions = {
        hideSections: () => {
            if (sectionsHaveEverBeenHidden) return;

            const selectors = utils.buildContentZoneSelectors();
            if (selectors.length === 0) {
                Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                return;
            }
            for (const selector of selectors) {
                utils.addToPersonalizedSectionsString(selector);
            }

            if (!personalizedSectionsString) return;

            const head = document.head || document.getElementsByTagName("head")[0];
            const style = document.createElement("style");
            Evergage.cashDom(style)
                .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                .text(`${personalizedSectionsString} { visibility: hidden !important; }`);

            clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
            window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                if (utils.hasBeenReshown()) return;
                shouldReshowNow = true;
                actions.reshowPersonalizedSectionsNow();
            }, Evergage.FlickerDefender.redisplayTimeout);

            head.appendChild(style);
            sectionsHaveEverBeenHidden = true;
        },
        reshowPersonalizedSections: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (typeof window.requestAnimationFrame === "function") {
                    Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                    window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                } else {
                    actions.reshowPersonalizedSectionsNow();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSections");
            }
        },
        reshowReadyPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
            Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
        },
        reshowAllPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).remove();
            Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
        },
        reshowPersonalizedSectionsNow: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                    actions.reshowAllPersonalizedSections();
                } else if (Object.keys(hiddenSections).length > 0) {
                    personalizedSectionsString = "";
                    for (const contentZone in hiddenSections) {
                        utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                    }
                    actions.reshowReadyPersonalizedSections();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
            }
        }
    };

    const beaconListeners = {
        addOnInit: () => {
            document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                clearTimeout(window.evergagePageMatchTimeout);
                window.evergagePageMatchTimeout = setTimeout(function () {
                    const { pageType } = (Evergage.getCurrentPage().source || {});
                    if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                    shouldReshowNow = true;
                    actions.reshowPersonalizedSectionsNow();
                }, Evergage.FlickerDefender.pageMatchTimeout);
            });
        },
        addPageMatchStatusUpdated: () => {
            document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                if (!hasBeenHidden) {
                    actions.hideSections();
                    if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                        hasBeenHidden = true;
                    }
                }
            });
        },
        addOnEventResponse: () => {
            document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                const { campaignResponses } = ((domEvent.detail || {}).response || {});
                if ((campaignResponses || []).length >= 1) {
                    personalizedSectionsString = "";
                    for (const campaign of campaignResponses) {
                        const { contentZone } = ((campaign || {}).payload || {});
                        const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                        if (typeof contentZoneSelector === "string") {
                            hiddenSections[contentZone] = contentZoneSelector;
                            utils.addToPersonalizedSectionsString(contentZoneSelector);
                        }
                    }
                    if (!personalizedSectionsString) {
                        actions.reshowPersonalizedSections();
                        return;
                    }

                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                } else {
                    actions.reshowPersonalizedSections();
                }
            });
        },
        addOnTemplateDisplayEnd: () => {
            document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                if (utils.hasBeenReshown()) return;
                const { contentZone } = ((domEvent.detail || {}).payload || {});
                if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                    delete hiddenSections[contentZone];
                }
                actions.reshowPersonalizedSections();
            });
        },
    };

    return {
        pageMatchTimeout: 1000,
        redisplayTimeout: Evergage.getConfig().hideContentSectionsMillis || 2500,
        setPageMatchTimeout: (millis) => {
            if (typeof millis === "number") {
                Evergage.FlickerDefender.pageMatchTimeout = parseInt(millis);
            }
        },
        setRedisplayTimeout: (millis) => {
            if (typeof millis === "number") {
                Evergage.FlickerDefender.redisplayTimeout = parseInt(millis);
            }
        },
        init: function() {
            for (const key in beaconListeners) {
                beaconListeners[key]();
            }
        }
    };
})();

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.r(t),n.d(t,"extend",(function(){return l})),n.d(t,"toString",(function(){return c})),n.d(t,"isFunction",(function(){return s})),n.d(t,"isArray",(function(){return u})),n.d(t,"indexOf",(function(){return p})),n.d(t,"escapeExpression",(function(){return f})),n.d(t,"isEmpty",(function(){return d})),n.d(t,"createFrame",(function(){return h})),n.d(t,"blockParams",(function(){return m})),n.d(t,"appendContextPath",(function(){return g}));const r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let c=Object.prototype.toString,s=function(e){return"function"==typeof e};s(/x/)&&(s=function(e){return"function"==typeof e&&"[object Function]"===c.call(e)});const u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===c.call(e)};function p(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function f(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return a.test(e)?e.replace(o,i):e}function d(e){return!e&&0!==e||!(!u(e)||0!==e.length)}function h(e){let t=l({},e);return t._parent=e,t}function m(e,t){return e.path=t,e}function g(e,t){return(e?e+".":"")+t}},function(e,t,n){"use strict";const r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){let n,a,i,l,c=t&&t.loc;c&&(n=c.start.line,a=c.end.line,i=c.start.column,l=c.end.column,e+=" - "+n+":"+i);let s=Error.prototype.constructor.call(this,e);for(let e=0;e<r.length;e++)this[r[e]]=s[r[e]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{c&&(this.lineNumber=n,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=i,this.endColumn=l))}catch(e){}}o.prototype=new Error,t.a=o},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),a=n(3),i=r(n(4)),l=new Map,c=new Map,s=new Set,u=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(i.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(i.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(i.VE_INDICATOR_FLAG)||document.location.href.includes(i.TEST_TEMPLATE_PARAMETER)},p=function(e){return l.get(e)},f=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){e&&e.forEach((function(e){try{Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}catch(e){a.dispatchError(e)}}))},t.registerTemplate=function(e){var t=new o.Template(e);l.set(e.name,t)},t.resetTemplate=function(e,t){var n=f(e,t),r=c.get(n);if(r)try{r()}catch(e){a.dispatchError(e)}c.delete(n)},t.renderTemplate=function(e,t){if(l.has(e)){var n=p(e).render(t);c.set(f(e,t),n)}},t.handleCampaignResponses=function(e){u()||e.filter((function(e){return"ng"===e.type})).filter((function(e){return!h(e)})).forEach((function(e){switch(e.userGroup){case"Default":d(e);break;case"Control":t.executeControl(e)}}))};var d=function(e){e.templateNames.forEach((function(n){t.renderTemplate(n,e.payload)}))};t.executeControl=function(e){e.templateNames.forEach((function(t){var n=p(t),r=e.payload;if(n.control)try{var o=n.control(r);window.Promise&&window.Promise.resolve(o)===o?o.then((function(){a.dispatchTemplateDisplay(r)})):a.dispatchTemplateDisplay(r)}catch(e){a.dispatchError(e)}}))};var h=function(e){return e.payload.contentZone&&s.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&s.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},t.dispatchTemplateDisplay=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(0),o=n(1);t.a=function(t){t.registerHelper("each",(function(t,n){if(!n)throw new o.a("Must pass iterator to #each");let a,i,l=n.fn,c=n.inverse,s=0,u="";function p(e,n,o){a&&(a.key=e,a.index=n,a.first=0===n,a.last=!!o,i&&(a.contextPath=i+e)),u+=l(t[e],{data:a,blockParams:Object(r.blockParams)([t[e],e],[i+e,null])})}if(n.data&&n.ids&&(i=Object(r.appendContextPath)(n.data.contextPath,n.ids[0])+"."),Object(r.isFunction)(t)&&(t=t.call(this)),n.data&&(a=Object(r.createFrame)(n.data)),t&&"object"==typeof t)if(Object(r.isArray)(t))for(let e=t.length;s<e;s++)s in t&&p(s,s,s===t.length-1);else if(e.Symbol&&t[e.Symbol.iterator]){const n=[],r=t[e.Symbol.iterator]();for(let e=r.next();!e.done;e=r.next())n.push(e.value);for(let e=(t=n).length;s<e;s++)p(s,s,s===t.length-1)}else{let e;Object.keys(t).forEach(t=>{void 0!==e&&p(e,s-1),e=t,s++}),void 0!==e&&p(e,s-1,!0)}return 0===s&&(u=c(this)),u}))}}).call(this,n(5))},function(e,t,n){"use strict";(function(e){t.a=function(t){let n=void 0!==e?e:window,r=n.Handlebars;t.noConflict=function(){return n.Handlebars===t&&(n.Handlebars=r),t}}}).call(this,n(5))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(11),a=n(2);function i(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",(function(){r.renderTestTemplate(),o.initPreview()}))}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,(function(e){a.executeBundles(e.detail.response.compiledCampaignTemplates),a.handleCampaignResponses(e.detail.response.campaignResponses)})),t.render=i,i()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(3),a=n(4);t.renderTestTemplate=function(){if("true"==o.getQueryParam(a.TEST_TEMPLATE_PARAMETER)){var e=i();addEventListener("storage",(function(t){t.key==a.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=i())}))}};var i=function(){var e=localStorage.getItem(a.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(12)),a=n(3),i=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find((function(t){return t.name===e.contentZone}))||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){a.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return window.Promise&&window.Promise.resolve(t)===t?t.then((function(){a.dispatchTemplateDisplay(e)})):a.dispatchTemplateDisplay(e),this.reset.bind(this,e,this.generateHtml)}catch(e){a.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void a.dispatchError(o)}var i=this.generateHtml(t);if(!i)return;this.replaceContentAtTarget(i,r)}catch(e){a.dispatchError(e)}}},e}();t.Template=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(2);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var a=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,a),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"VERSION",(function(){return g})),n.d(r,"COMPILER_REVISION",(function(){return v})),n.d(r,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return b})),n.d(r,"REVISION_CHANGES",(function(){return y})),n.d(r,"HandlebarsEnvironment",(function(){return E})),n.d(r,"log",(function(){return w})),n.d(r,"createFrame",(function(){return a.createFrame})),n.d(r,"logger",(function(){return f}));var o={};n.r(o),n.d(o,"checkRevision",(function(){return P})),n.d(o,"template",(function(){return O})),n.d(o,"wrapProgram",(function(){return j})),n.d(o,"resolvePartial",(function(){return x})),n.d(o,"invokePartial",(function(){return M})),n.d(o,"noop",(function(){return C}));var a=n(0),i=n(1),l=n(6);function c(e){!function(e){e.registerHelper("blockHelperMissing",(function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(Object(a.isArray)(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=Object(a.createFrame)(n.data);e.contextPath=Object(a.appendContextPath)(n.data.contextPath,n.name),n={data:e}}return o(t,n)}))}(e),Object(l.a)(e),function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new i.a('Missing helper: "'+arguments[arguments.length-1].name+'"')}))}(e),function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.a("#if requires exactly one argument");return Object(a.isFunction)(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||Object(a.isEmpty)(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new i.a("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))}(e),function(e){e.registerHelper("log",(function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)}))}(e),function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}(e),function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.a("#with requires exactly one argument");Object(a.isFunction)(e)&&(e=e.call(this));let n=t.fn;if(Object(a.isEmpty)(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&(r=Object(a.createFrame)(t.data),r.contextPath=Object(a.appendContextPath)(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:Object(a.blockParams)([e],[r&&r.contextPath])})}}))}(e)}function s(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}function u(e){!function(e){e.registerDecorator("inline",(function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=Object(a.extend)({},i,t.partials);let l=e(r,o);return n.partials=i,l}),t.partials[r.args[0]]=r.fn,o}))}(e)}let p={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=Object(a.indexOf)(p.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=p.lookupLevel(e),"undefined"!=typeof console&&p.lookupLevel(p.level)<=e){let n=p.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var f=p;function d(...e){return Object(a.extend)(Object.create(null),...e)}const h=Object.create(null);function m(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==h[e]&&(h[e]=!0,(void 0)("error",`Handlebars: Access has been denied to resolve the property "${e}" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}(t),!1)}const g="4.7.6",v=8,b=7,y={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function E(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},c(this),u(this)}E.prototype={constructor:E,logger:f,log:f.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new i.a("Arg not supported with multiple helpers");Object(a.extend)(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))Object(a.extend)(this.partials,e);else{if(void 0===t)throw new i.a(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new i.a("Arg not supported with multiple decorators");Object(a.extend)(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses(){Object.keys(h).forEach(e=>{delete h[e]})}};let w=f.log;function T(e){this.string=e}T.prototype.toString=T.prototype.toHTML=function(){return""+this.string};var _=T;function P(e){const t=e&&e[0]||1;if(!(t>=b&&t<=v)){if(t<b){const e=y[v],n=y[t];throw new i.a("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new i.a("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function O(e,t){if(!t)throw new i.a("No environment passed to template");if(!e||!e.main)throw new i.a("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!e||!(t in e))throw new i.a('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookupProperty:function(e,t){let n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||function(e,t,n){return m("function"==typeof e?t.methods:t.properties,n)}(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){const n=e.length;for(let o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let l=a.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),c=t.VM.invokePartial.call(this,n,r,l);if(null==c&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),c=o.partials[o.name](r,l)),null!=c){if(o.indent){let e=c.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];c=e.join("\n")}return c}throw new i.a("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let a=this.programs[e],i=this.fn(e);return t||o||r||n?a=j(this,e,i,t,n,r,o):a||(a=this.programs[e]=j(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){let n=e||t;return e&&t&&e!==t&&(n=a.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?Object(a.createFrame)(t):{}).root=e);return t}(t,i));let l,c=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,c,l)}return e.useDepths&&(l=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=k(e.main,s,r,n.depths||[],i,c))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{let i=a.extend({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach(n=>{let r=e[n];e[n]=function(e,t){const n=t.lookupProperty;return function(e,t){return"function"!=typeof e?e:function(){const n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}(e,e=>a.extend({lookupProperty:n},e))}(r,t)})}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=a.extend({},t.decorators,o.decorators)),r.hooks={},r.protoAccessControl=function(e){let t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;let n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:d(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:d(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}(o);let l=o.allowCallsToHelperMissing||n;s(r,"helperMissing",l),s(r,"blockHelperMissing",l)}},o._child=function(t,n,o,a){if(e.useBlockParams&&!o)throw new i.a("must pass block params");if(e.useDepths&&!a)throw new i.a("must pass parent depths");return j(r,t,e[t],n,0,o,a)},o}function j(e,t,n,r,o,a,i){function l(t,o={}){let l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return(l=k(n,l,e,i,r,a)).program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function x(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function M(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==C){n.data=Object(a.createFrame)(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=Object(a.createFrame)(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=a.extend({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new i.a("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function C(){return""}function k(e,t,n,r,o,i){if(e.decorator){let l={};t=e.decorator(t,l,n,r&&r[0],o,i,r),a.extend(t,l)}return t}var A=n(7);function S(){let e=new E;return a.extend(e,r),e.SafeString=_,e.Exception=i.a,e.Utils=a,e.escapeExpression=a.escapeExpression,e.VM=o,e.template=function(t){return O(t,e)},e}let I=S();I.create=S,Object(A.a)(I),I.default=I;t.default=I}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';

function sendMessageToEvergageLauncher(message) {
    try {
        document.dispatchEvent(
            new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                detail: JSON.stringify(message),
            })
        );
    } catch (e) {
        console.error(e);
    }
}

var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, function (
        domEvent
    ) {
        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnInit,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
        domEvent
    ) {
        eventLinkId = Math.random().toString().slice(2);

        domEvent.detail.actionEvent._toolsEventLinkId = eventLinkId;
        domEvent.detail.actionEvent.debug = Object.assign(
            domEvent.detail.actionEvent.debug
                ? domEvent.detail.actionEvent.debug
                : {},
            { explanations: true }
        );

        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnEventSend,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
        domEvent
    ) {
        if (domEvent.detail) {
            const currentPage = Evergage.getCurrentPage();
            const sitemapConfig = Evergage.getState().config;
            const matchedPageConfig =
                Evergage.getState().result &&
                Evergage.getState().result.matchedConfig;

            eventLinkId = null;

            sendMessageToEvergageLauncher({
                type: TO_LAUNCHER_MESSAGE_TYPE,
                payload: {
                    type: TO_LAUNCHER_PAYLOAD_TYPE,
                    payload: {
                        name: Evergage.CustomEvents.OnEventResponse,
                        detail: {
                            response: domEvent.detail.response,
                            currentPage: currentPage,
                            sitemapConfig: sitemapConfig,
                            matchedPageConfig: matchedPageConfig,
                        },
                    },
                },
            });
        }
    });
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Interaction Studio Tools:interactionStudioTools.js");
    }
};


try {
    (function() {
    function injectVisualEditorLaunchScript(account) {
        try {
            var scriptTag = document.createElement('script');
            var scriptUrl = 'https://cdn.evergage.com/visual-editor/launch.js';
            if (Evergage.getConfig().trackerUrl) {
                scriptUrl = Evergage.getConfig().trackerUrl + '/visual-editor/launch.js'
            }
            scriptTag.setAttribute('id', 'evergageVisualEditorLaunchScript');
            scriptTag.src = scriptUrl;
            if (document.getElementById('evergageVisualEditorLaunchScript') == null) {
                document.head.appendChild(scriptTag);
            } else {
                Evergage.log.info('Launch script is already here.');
            }
        } catch (err) {
            Evergage.log.info('Failed to fetch the siteEditorFramein page services: ' + err);
        }
    }

    function getUrlBoolean(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : results[1] === 'true';
    }

    var veParam = getUrlBoolean('evergageEditor');
    var testTemplateParam = getUrlBoolean('evergageTestTemplate');

    var isVESiteEditorFrame = window.frameElement && window.frameElement.id === 'siteEditorFrame';
    var enabledInStorage = function() {
        return window.localStorage['evgVE'] === 'true';
    };

    // honor and set local storage based off queryParam
    if (veParam !== null) {
        window.localStorage.setItem('evgVE', veParam);
    }

    // trigger off of localStorage only
    // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
    if ((!enabledInStorage() || !(enabledInStorage() && !testTemplateParam)) && !isVESiteEditorFrame) {
        return;
    }

    if (window.top === window.self || isVESiteEditorFrame) {
        document.addEventListener(Evergage.CustomEvents.OnInit, (event) => {
            const beaconConfig = event.detail.beaconConfig;
            injectVisualEditorLaunchScript(beaconConfig.account);
            event.preventDefault();
        }, { once: true });
    }
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
Evergage.init({
    cookieDomain: "evergage.com"
}).then(() => {
    var config = {
        global: {
            contentZones: []
        },
        pageTypeDefault: {
            name: "default"
        },
        pageTypes: []
    };
    
    // This section will globally set any parameters as user attributes. 
    
    config.global.onActionEvent = function(event) {
        
        if (!event.user) {
            event.user = {};
            event.user.attributes = event.user.attributes || {};
            event.account = event.account || {};
            event.account.id = "evg:12587090";
        }
        
        return event;
    }

    // Fill out any page types for you demo here. These are key value pairs, where the key (before the colon)
    // is the action name that will be sent in the event when navigating to the url (after the colon). Copy
    // the entire url from the browser (including the https and www) that you want to map

    const pageTypeMapping = {
        "Page Name 1": "https://www.northerntrailoutfitters.com/default/homepage",
        "Page Name 2": "https://www.salesforce.com",
    };
    
    
    // Fill out any actions for your demo here. These are key value pairs, where the key (before the colon)
    // is the action name that will be sent in the event when the selector (after the colon) is clicked on the page

    const actionMappingClicks = {
        "Action 1": "#selector1",
        "Action 2": "#selector2",
    };

    // Fill out any content zones for your demo here. These are key value pairs, where the key (before the colon)
    // is the content zone name that will be defined on the page when the selector (after the colon) appears on that page

    const contentZoneMapping = {
        "HomeHero": "#hero",
        "HomeHero1":"#hero-cta",
        "HomeLogos": "#logo-caro",
        "HomeContent":"#sub-hero"
    };
    
    // HELPER CODE BELOW - DO NOT EDIT
    
    // The code below handles all of the page types that are defined in the pageTypeMapping object above

    Object.keys(pageTypeMapping).forEach(pageType => {
        let url = pageTypeMapping[pageType];
        url = url.replace(/([+,?])+/g, "\\$&");
        const re = new RegExp("^" + url + "");
        config.pageTypes.push({
            isMatch: () => {
                return re.test(window.location.href);
            },
            name: pageType,
            action: pageType
        });
    });

    // The code below handles all of the actions that are defined in the actionMappingClicks object above

    Object.keys(actionMappingClicks).forEach(action => {
        const selector = actionMappingClicks[action];
        Evergage.cashDom(selector).on("click", () => {
            Evergage.sendEvent({action});
        });
    });

    // The code below handles all of the content zones that are defined in the contentZonesMapping object above

    Object.keys(contentZoneMapping).forEach(contentZone => {
        const selector = contentZoneMapping[contentZone];
        config.global.contentZones.push({name: contentZone, selector: selector});
    });

    
    Evergage.cashDom(() => {
        Evergage.initSitemap(config);
    });
});
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};

