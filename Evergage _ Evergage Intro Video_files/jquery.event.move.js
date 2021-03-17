!function(e){"function"==typeof define&&define.amd?define([],e):"undefined"!=typeof module&&null!==module&&module.exports?module.exports=e:e()}(function(){var i=Object.assign||window.jQuery&&jQuery.extend,p=8,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return window.setTimeout(function(){e()},25)};function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e);var o={textarea:!0,input:!0,select:!0,button:!0},c={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},u={move:"touchmove",cancel:"touchend",end:"touchend"},r=/\s+/,d={bubbles:!0,cancelable:!0},t="function"==typeof Symbol?Symbol("events"):{};function m(e){return e[t]||(e[t]={})}function v(e,t,n,o){t=t.split(r);var i,a=m(e),c=t.length;function u(e){n(e,o)}for(;c--;)(a[i=t[c]]||(a[i]=[])).push([n,u]),e.addEventListener(i,u)}function f(e,t,n){t=t.split(r);var o,i,a,c=m(e),u=t.length;if(c)for(;u--;)if(i=c[o=t[u]])for(a=i.length;a--;)i[a][0]===n&&(e.removeEventListener(o,i[a][1]),i.splice(a,1))}function g(e,t,n){var o=new CustomEvent(t,d);n&&i(o,n),e.dispatchEvent(o)}function s(e){var n=e,o=!1,i=!1;function t(e){o?(n(),a(t),o=!(i=!0)):i=!1}this.kick=function(e){o=!0,i||t()},this.end=function(e){var t=n;e&&(i?(n=o?function(){t(),e()}:e,o=!0):e())}}function h(){}function l(e){e.preventDefault()}function X(e,t){var n,o;if(e.identifiedTouch)return e.identifiedTouch(t);for(n=-1,o=e.length;++n<o;)if(e[n].identifier===t)return e[n]}function Y(e,t){var n=X(e.changedTouches,t.identifier);if(n&&(n.pageX!==t.pageX||n.pageY!==t.pageY))return n}function n(e,t){T(e,t,e,w)}function y(e,t){w()}function w(){f(document,c.move,n),f(document,c.cancel,y)}function b(e){f(document,u.move,e.touchmove),f(document,u.cancel,e.touchend)}function T(e,t,n,o){var i,a,c,u,r,d,m,v,f,s=n.pageX-t.pageX,l=n.pageY-t.pageY;s*s+l*l<p*p||(a=t,c=n,u=s,r=l,d=o,m=(i=e).targetTouches,v=i.timeStamp-a.timeStamp,f={altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,startX:a.pageX,startY:a.pageY,distX:u,distY:r,deltaX:u,deltaY:r,pageX:c.pageX,pageY:c.pageY,velocityX:u/v,velocityY:r/v,identifier:a.identifier,targetTouches:m,finger:m?m.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=h,i.preventDefault()}},g(a.target,"movestart",f),d(a))}function E(e,t){var n=t.timer;t.touch=e,t.timeStamp=e.timeStamp,n.kick()}function S(e,t){var n=t.target,o=t.event,i=t.timer;f(document,c.move,E),f(document,c.end,S),K(n,o,i,function(){setTimeout(function(){f(n,"click",l)},0)})}function k(e,t){var n,o=t.target,i=t.event,a=t.timer;X(e.changedTouches,i.identifier)&&(n=t,f(document,u.move,n.activeTouchmove),f(document,u.end,n.activeTouchend),K(o,i,a))}function K(e,t,n,o){n.end(function(){return g(e,"moveend",t),o&&o()})}if(v(document,"mousedown",function(e){var t;1!==(t=e).which||t.ctrlKey||t.altKey||o[e.target.tagName.toLowerCase()]||(v(document,c.move,n,e),v(document,c.cancel,y,e))}),v(document,"touchstart",function(e){if(!o[e.target.tagName.toLowerCase()]){var t=e.changedTouches[0],n={target:t.target,pageX:t.pageX,pageY:t.pageY,identifier:t.identifier,touchmove:function(e,t){!function(e,t){var n=Y(e,t);if(!n)return;T(e,t,n,b)}(e,t)},touchend:function(e,t){!function(e,t){if(!X(e.changedTouches,t.identifier))return;b(t)}(e,t)}};v(document,u.move,n.touchmove,n),v(document,u.cancel,n.touchend,n)}}),v(document,"movestart",function(e){if(!e.defaultPrevented&&e.moveEnabled){var t={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger},n={target:e.target,event:t,timer:new s(function(e){(function(e,t,n){var o=n-e.timeStamp;e.distX=t.pageX-e.startX,e.distY=t.pageY-e.startY,e.deltaX=t.pageX-e.pageX,e.deltaY=t.pageY-e.pageY,e.velocityX=.3*e.velocityX+.7*e.deltaX/o,e.velocityY=.3*e.velocityY+.7*e.deltaY/o,e.pageX=t.pageX,e.pageY=t.pageY})(t,n.touch,n.timeStamp),g(n.target,"move",t)}),touch:void 0,timeStamp:e.timeStamp};void 0===e.identifier?(v(e.target,"click",l),v(document,c.move,E,n),v(document,c.end,S,n)):(n.activeTouchmove=function(e,t){var n,o,i,a,c;n=e,i=(o=t).event,a=o.timer,(c=Y(n,i))&&(n.preventDefault(),i.targetTouches=n.targetTouches,o.touch=c,o.timeStamp=n.timeStamp,a.kick())},n.activeTouchend=function(e,t){k(e,t)},v(document,u.move,n.activeTouchmove,n),v(document,u.end,n.activeTouchend,n))}}),window.jQuery){var j="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");jQuery.event.special.movestart={setup:function(){return v(this,"movestart",C),!1},teardown:function(){return f(this,"movestart",C),!1},add:A},jQuery.event.special.move={setup:function(){return v(this,"movestart",Q),!1},teardown:function(){return f(this,"movestart",Q),!1},add:A},jQuery.event.special.moveend={setup:function(){return v(this,"movestart",q),!1},teardown:function(){return f(this,"movestart",q),!1},add:A}}function C(e){e.enableMove()}function Q(e){e.enableMove()}function q(e){e.enableMove()}function A(e){var o=e.handler;e.handler=function(e){for(var t,n=j.length;n--;)e[t=j[n]]=e.originalEvent[t];o.apply(this,arguments)}}});