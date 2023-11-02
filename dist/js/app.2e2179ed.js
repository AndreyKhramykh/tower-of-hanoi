(function(){"use strict";var e={7641:function(e,t,n){var o=n(9242),a=n(3396);const l={class:"wrapper"};function u(e,t){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n)])}var i=n(89);const r={},s=(0,i.Z)(r,[["render",u],["__scopeId","data-v-317b30fa"]]);var c=s,v=n(2483),d=(n(1719),n(560),n(7139)),f=n(4870);const p=e=>((0,a.dD)("data-v-c0a57112"),e=e(),(0,a.Cn)(),e),h={class:"header"},m=p((()=>(0,a._)("h1",null,"Tower of Hanoi game",-1)));function g(e,t){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",h,[m,(0,a._)("div",null,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Game")])),_:1}),(0,a.Wm)(n,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})])])}const _={},k=(0,i.Z)(_,[["render",g],["__scopeId","data-v-c0a57112"]]);var w=k,b={__name:"Timer",props:{timer:{type:Boolean}},emits:"sendTime",setup(e,{emit:t}){const n=e,o=t,l=()=>{o("sendTime",v.value)},u=(0,a.Fl)((()=>n.timer)),i=((0,a.YP)(u,(()=>{u.value?p():(h(),l())})),(0,f.iH)(!1)),r=(0,f.iH)(null),s=(0,f.iH)(0),c=(0,f.iH)(null),v=(0,a.Fl)((()=>{const e=s.value,t=Math.floor(e/60),n=Math.floor(t/60);return`${String(n).padStart(2,"0")}:${String(t%60).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`})),p=()=>{i.value||(r.value=Date.now()-s.value,i.value=!0,c.value=setInterval(m,1e3))},h=()=>{i.value&&(clearInterval(c.value),i.value=!1)},m=()=>{s.value=Math.floor((Date.now()-r.value)/1e3)};return(0,a.Jd)((()=>{h()})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,(0,d.zw)(v.value),1)]))}};const y=b;var H=y;const D=e=>((0,a.dD)("data-v-69d98e30"),e=e(),(0,a.Cn)(),e),F={class:"game-container"},I={class:"setup-block"},S=D((()=>(0,a._)("h3",null,"Select block's quantity:",-1))),C=(0,a.uE)('<option value="3" data-v-69d98e30>3 blocks</option><option value="4" data-v-69d98e30>4 blocks</option><option value="5" data-v-69d98e30>5 blocks</option><option value="6" data-v-69d98e30>6 blocks</option><option value="7" data-v-69d98e30>7 blocks</option><option value="8" data-v-69d98e30>8 blocks</option>',6),O=[C],z={key:0,class:"win-block"},T=D((()=>(0,a._)("h1",null,"Congrats!",-1))),Y=D((()=>(0,a._)("h2",null,"You win!",-1))),j={key:1,class:"hanoi"},U=["onClick"];var x={__name:"Game",setup(e){const t=e=>{i.value=e,console.log("output->emit data",e)},n=(0,f.iH)(!1);function l(){n.value=!0}function u(){n.value=!1}const i=(0,f.iH)(null),r=(0,f.iH)(!1),s=(0,f.iH)("3"),c=(0,a.Fl)((()=>(y(),C()))),v=(0,f.iH)(0),p=(0,f.iH)(0),h=(0,f.iH)(!1),m=[0,1,2],g=(0,f.iH)([[],[],[]]),_=["#F55353","#143F6B","#F6F54D","#1EAE98","#FF5200","#6F0000","#17B978","#2FA4FF"],k=(0,f.iH)(null),b=(0,f.iH)(null);function y(){sessionStorage.setItem("blocksQuantity",+s.value)}function D(e){sessionStorage.setItem("winBlocksCount",e)}function C(){let e=sessionStorage.getItem("blocksQuantity");return null==e?0:+e}function x(){y(),r.value=!1,p.value=0,h.value=!1,k.value=null,b.value=null,Q(),u()}function E(){return 0==r.value}function W(e){if(b.value&&!0===e.selected)return!0}function A(e){0!=g.value[e].length&&(b.value=!b.value,g.value[e][0].selected=!g.value[e][0].selected)}function B(e){0!=g.value[e].length&&g.value[e][0].selected&&(k.value=g.value[e][0])}function M(e){const t=k.value.towerID;g.value[t].splice(0,1),g.value[e].unshift(k.value),g.value[e][0].selected=!1,g.value[e][0].towerID=e,k.value=null,b.value=null}function P(e){0==g.value[e].length||g.value[e][0].id>k.value.id?(M(e),p.value++):g.value[e][0].id==k.value.id&&M(e)}function $(e){0!==e&&g.value[e].length==c.value&&(h.value=!0,u(),D(C()),v.value=sessionStorage.getItem("winBlocksCount"))}function Z(e){E()&&(l(),r.value=!0),h.value||(b.value?(P(e),$(e)):(A(e),B(e)))}const Q=()=>{g.value[0].length=0,g.value[1].length=0,g.value[2].length=0,[...Array(C()).keys()].forEach((e=>{g.value[0].push({id:e,towerID:0,style:`--width: ${25+10*e}%; --bgc: ${_[e]};`,selected:!1})}))};return(0,a.wF)((()=>{Q()})),(e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w),(0,a._)("div",F,[(0,a._)("div",I,[S,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":l[0]||(l[0]=e=>s.value=e),name:"blocksQuantity",id:""},O,512),[[o.bM,s.value]]),(0,a._)("button",{onClick:x},"Start")]),h.value?((0,a.wg)(),(0,a.iD)("div",z,[T,Y,(0,a._)("h4",null,[(0,a.Uk)(" You use "),(0,a._)("strong",null,(0,d.zw)(v.value),1),(0,a.Uk)(" blocks ")]),(0,a._)("h4",null,[(0,a.Uk)(" You have made "),(0,a._)("strong",null,(0,d.zw)(p.value),1),(0,a.Uk)(" moves ")]),(0,a._)("h4",null,[(0,a.Uk)(" Your time is "),(0,a._)("strong",null,(0,d.zw)(i.value),1)])])):((0,a.wg)(),(0,a.iD)("div",j,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(m,(e=>(0,a._)("div",{class:"hanoi__tower",key:e,onClick:t=>Z(e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.value[e],(e=>((0,a.wg)(),(0,a.iD)("div",{class:(0,d.C_)(["hanoi__block",{selected:W(e)}]),key:e.id,style:(0,d.j5)(e.style)},null,6)))),128))],8,U))),64))]))]),(0,a.Wm)(H,{class:"display-none",timer:n.value,onSendTime:t},null,8,["timer"])],64))}};const E=(0,i.Z)(x,[["__scopeId","data-v-69d98e30"]]);var W=E;const A=e=>((0,a.dD)("data-v-6acaa202"),e=e(),(0,a.Cn)(),e),B=A((()=>(0,a._)("div",{class:"about"},[(0,a._)("p",null," The Tower of Hanoi is a mathematical game or puzzle consisting of three rods and a number of disks of various diameters, which can slide onto any rod. The puzzle begins with the disks stacked on one rod in order of decreasing size, the smallest at the top, thus approximating a conical shape. The objective of the puzzle is to move the entire stack to one of the other rods, obeying the following "),(0,a._)("ul",null,[(0,a._)("li",null,"Only one disk may be moved at a time."),(0,a._)("li",null," Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. "),(0,a._)("li",null,"No disk may be placed on top of a disk that is smaller than it.")])],-1)));var M={__name:"About",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w),B],64))}};const P=(0,i.Z)(M,[["__scopeId","data-v-6acaa202"]]);var $=P;const Z=[{path:"/",name:"gamePage",component:W},{path:"/about",name:"aboutPage",component:$}],Q=(0,v.p7)({history:(0,v.r5)(),routes:Z});var G=Q;(0,o.ri)(c).use(G).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],l=e[c][2];for(var i=!0,r=0;r<o.length;r++)(!1&l||u>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(i=!1,l<u&&(u=l));if(i){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,u=o[0],i=o[1],r=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(r)var c=r(n)}for(t&&t(o);s<u.length;s++)l=u[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunktower_of_hanoi"]=self["webpackChunktower_of_hanoi"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7641)}));o=n.O(o)})();
//# sourceMappingURL=app.2e2179ed.js.map