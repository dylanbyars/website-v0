!function(t){function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(1)},function(t,o,e){"use strict";e(2);var n={bar__html:"virtuoso",bar__css:"virtuoso",bar__js:"cozy",bar__python:"learning",bar__cpp:"fiddled",bar__php:"fiddled",bar__node:"learning",bar__react:"fiddled",bar__jquery:"learning",bar__polymer:"read",bar__wordpress:"learning",bar__webpack:"learning",bar__sql:"read",bar__git:"fiddled"},r=function(t,o){t.classList.add(o)},i=function(){for(var t in n){var o=document.getElementById(t),e=n[t];r(o,e)}};!function(t){t.fn.isOnScreen=function(o,e){null!=o&&"undefined"!=typeof o||(o=1),null!=e&&"undefined"!=typeof e||(e=1);var n=t(window),r={top:n.scrollTop(),left:n.scrollLeft()};r.right=r.left+n.width(),r.bottom=r.top+n.height();var i=this.outerHeight(),a=this.outerWidth();if(!a||!i)return!1;var u=this.offset();u.right=u.left+a,u.bottom=u.top+i;var s=!(r.right<u.left||r.left>u.right||r.bottom<u.top||r.top>u.bottom);if(!s)return!1;var l={top:Math.min(1,(u.bottom-r.top)/i),bottom:Math.min(1,(r.bottom-u.top)/i),left:Math.min(1,(u.right-r.left)/a),right:Math.min(1,(r.right-u.left)/a)};return l.left*l.right>=o&&l.top*l.bottom>=e}}(jQuery),$(window).scroll(function(){$("#widget").isOnScreen(.4,.4)&&i()});var a=function(t){return Math.floor(Math.random()*t)},u=function(t){return Object.keys(t).length},s=[{quote:"Test to destruction: engineers like to do that. Only with a test to destruction can you find the outer limits of a system's strength.",author:"Kim Stanley Robinson"},{quote:"You know more than you think you know, just as you know less than you want to know.",author:"Oscar Wilde"},{quote:"Society can be seen as a conspiracy of unquestioning acceptance of unprovable things.",author:"John Varley"},{quote:"I would rather sit on a pumpkin and have it all to myself than be crowded on a velvet cushion.",author:"Henry David Thoreau"},{quote:"Specialization is for insects.",author:"LL"}],l=function(t){$(".quote").text(s[t].quote),$(".author").text(s[t].author)};l(a(u(s))),console.log("If you like music, check me out :-) https://www.youtube.com/watch?v=9Lnh9VM_WC4")},function(t,o){}]);
//# sourceMappingURL=bundle.js.map