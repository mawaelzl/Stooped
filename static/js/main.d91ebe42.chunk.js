(this.webpackJsonpstooped=this.webpackJsonpstooped||[]).push([[0],{18:function(n,t,e){n.exports=e(27)},20:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),c=(e(20),e(10)),o=e(7),u=e(1),i=e(2),s="move 1s cubic-bezier(.2,.85,.5,1)";function l(){var n=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  background: black;\n"]);return l=function(){return n},n}function p(){var n=Object(u.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 1) 100%\n  );\n  top: 1px;\n  height: ","px;\n  position: relative;\n"]);return p=function(){return n},n}function f(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return f=function(){return n},n}function d(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n"]);return d=function(){return n},n}function h(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateY(100%);\n  animation: ",";\n\n  @keyframes move {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(100%);\n    }\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  &:hover {\n    .bar-image {\n      z-index: 9;\n      filter: drop-shadow(1px 1px 0 black) drop-shadow(1px -1px 0 black)\n        drop-shadow(1px 0px 0 black) drop-shadow(-1px 1px 0 black)\n        drop-shadow(-1px -1px 0 black) drop-shadow(-1px 0px 0 black)\n        drop-shadow(0px 1px 0 black) drop-shadow(0px -1px 0 black)\n        drop-shadow(0px 0px 0 black) invert();\n    }\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n"]);return b=function(){return n},n}var v=i.a.div(b()),x=i.a.div(m()),g=i.a.div(h(),s),O=i.a.div(d()),w=i.a.img(f()),j=i.a.div(p(),30),k=i.a.div(l()),E=function(n){var t=n.barNumber;return a.a.createElement(v,null,a.a.createElement(x,{style:{transform:"rotate(".concat(20*(Math.random()-.5)+(Math.random()>.5?180:0),"deg)")},id:"bar".concat(t)},a.a.createElement(O,{style:{transform:"rotate(".concat(Math.random()>.5?0:180,"deg)")}},a.a.createElement(g,{id:"cover".concat(t)},a.a.createElement(j,null),a.a.createElement(k,null))),a.a.createElement(w,{src:"/Stooped"+"/".concat(Math.floor(5*Math.random()+1),".png"),alt:"bar",className:"bar-image"})))},y=e(3),I=e.n(y),B=e(4),N={getNumberOfBars:function(){var n=Object(B.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stooped-api.herokuapp.com/numberOfBars");case 2:return t=n.sent,n.t0=parseInt,n.next=6,t.text();case 6:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),increment:function(){var n=Object(B.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stooped-api.herokuapp.com/numberOfBars/inc");case 2:return t=n.sent,n.t0=parseInt,n.next=6,t.text();case 6:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),decrement:function(){var n=Object(B.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stooped-api.herokuapp.com/numberOfBars/dec");case 2:return t=n.sent,n.t0=parseInt,n.next=6,t.text();case 6:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},M=e(16),z=Object(r.createContext)({numberOfBars:5,increment:function(){},decrement:function(){}}),C=function(n){var t=n.children,e=Object(r.useState)(0),c=Object(o.a)(e,2),u=c[0],i=c[1],l=Object(r.useRef)(0),p=Object(r.useRef)(!0),f=function(){clearInterval(l.current),l.current=setInterval(Object(B.a)(I.a.mark((function n(){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.getNumberOfBars().then((function(n){return i((function(t){return n}))}));case 2:case"end":return n.stop()}}),n)}))),5e3)};Object(r.useEffect)((function(){f(),N.getNumberOfBars().then((function(n){return i((function(t){return n}))}))}),[]),Object(r.useEffect)((function(){p.current?p.current=!1:M.a.fromTo("#root",{background:"black"},{duration:.1,repeat:1,ease:"power2.out",yoyoEase:"power2.in",background:"white"})}),[u]);var d=function(){var n=Object(B.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(),t=setInterval((function(){var n=document.getElementById("cover".concat(u+1));n&&(n.style.setProperty("animation","".concat(s)),clearInterval(t))}),5),n.t0=i,n.next=5,N.increment();case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(B.a)(I.a.mark((function n(){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(),n.t0=i,n.next=4,N.decrement();case 4:n.t1=n.sent,(0,n.t0)(n.t1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(z.Provider,{value:{numberOfBars:u,increment:d,decrement:h}},t)};function S(){var n=Object(u.a)(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n"]);return S=function(){return n},n}function Y(){var n=Object(u.a)(["\n  width: ","px;\n  height: ","px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return Y=function(){return n},n}function P(){var n=Object(u.a)(["\n  height: ","px;\n  width: ","px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  transform: rotate(90deg) translateY(","px)\n    translateX(","px);\n  z-index: 1;\n"]);return P=function(){return n},n}function T(){var n=Object(u.a)(["\n  position: absolute;\n  display: grid;\n  column-gap: ","px;\n  grid-template-columns: repeat(4, ","px);\n  z-index: 2;\n"]);return T=function(){return n},n}var J=i.a.div(T(),20,40),R=i.a.div(P(),220,200,-10,-10),A=i.a.div(Y(),40,300),D=i.a.div(S(),220,200),H=function(n){var t=n.bars;if(t.length>5)throw new Error;return a.a.createElement(D,null,a.a.createElement(J,null,t.filter((function(n,t){return(t+1)%5}))),a.a.createElement(R,null,a.a.createElement(A,null,t.filter((function(n,t){return!((t+1)%5)})))))};function X(){var n=Object(u.a)(["\n  padding: 100px 100px 200px 100px;\n  display: grid;\n  justify-content: center;\n  gap: 100px;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(","px, ","px)\n  );\n  pointer-events: none;\n"]);return X=function(){return n},n}var q=i.a.div(X(),220,220),F=function(){var n=Object(r.useContext)(z),t=n.numberOfBars,e=n.decrement,u=Object(r.useState)([]),i=Object(o.a)(u,2),s=i[0],l=i[1],p=Object(r.useCallback)((function(){l((function(n){return n.slice(0,-1)})),e()}),[e]);return Object(r.useEffect)((function(){if(s.length>0)var n=setInterval((function(){var t=document.getElementById("bar".concat(s.length));t&&(window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),t.onclick=function(){return p()},t.style.cursor="pointer",t.style.pointerEvents="all",clearInterval(n))}),5);if(s.length>1)var t=setInterval((function(){var n=document.getElementById("bar".concat(s.length-1));n&&(n.onclick=function(){},n.style.cursor="auto",n.style.pointerEvents="none",clearInterval(t))}),5)}),[s,p]),Object(r.useEffect)((function(){l((function(n){for(var e=Object(c.a)(n),r=n.length+1;r<=t;r++)e=[].concat(Object(c.a)(e),[a.a.createElement(E,{barNumber:r,key:r})]);for(var o=n.length;o>t;o++)e=e.slice(0,-1);return e}))}),[p,t]),a.a.createElement(q,null,function(n,t){for(var e=[],r=0;r<n.length;r+=t)e.push(n.slice(r,r+t));return e}(s,5).map((function(n,t){return a.a.createElement(H,{bars:n,key:t})})))};function G(){var n=Object(u.a)(["\n  width: 150px;\n  height: 50px;\n  border: 3px solid white;\n  background: black;\n  color: white;\n  transition: 0.4s;\n  font-family: inherit;\n  font-weight: 900;\n  pointer-events: all;\n  cursor: pointer;\n\n  &:hover {\n    background: white;\n    color: black;\n  }\n"]);return G=function(){return n},n}function K(){var n=Object(u.a)(["\n  position: fixed;\n  width: 100%;\n  height: 10vh;\n  bottom: 0;\n  text-align: center;\n  z-index: 10;\n"]);return K=function(){return n},n}var L=i.a.div(K()),Q=i.a.button(G()),U=function(){var n=Object(r.useContext)(z).increment;return a.a.createElement(L,null,a.a.createElement(Q,{onClick:n},"STOOPED"))};var V=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null,a.a.createElement(F,null),a.a.createElement(U,null)))};e(15).render(r.createElement(r.StrictMode,null,r.createElement(V,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d91ebe42.chunk.js.map