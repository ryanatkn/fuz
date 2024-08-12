var Qe=Object.defineProperty;var Ze=(i,t,n)=>t in i?Qe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var ht=(i,t,n)=>(Ze(i,typeof t!="symbol"?t+"":t,n),n),ve=(i,t,n)=>{if(!t.has(i))throw TypeError("Cannot "+n)};var E=(i,t,n)=>(ve(i,t,"read from private field"),n?n.call(i):t.get(i)),K=(i,t,n)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,n)},me=(i,t,n,r)=>(ve(i,t,"write to private field"),r?r.call(i,n):t.set(i,n),n);var Te=(i,t,n)=>(ve(i,t,"access private method"),n);import{f as O,c as u,s as e,a,t as d,d as P,r as l,b as at,I as St,$ as Pt}from"../chunks/disclose-version.rfpNPRPV.js";import{i as qe,u as Le,r as tn,a4 as en,a2 as nn,C as A,g as o,n as y,s as ge,f as xe,p as xt,t as et,a as bt,d as q,O as Rt,T as B,U as Ie}from"../chunks/runtime.BxFpMM5w.js";import{T as on}from"../chunks/Tome_Detail.Bdn2uCQw.js";import{g as sn}from"../chunks/tome.BCeixvcZ.js";import{M as re}from"../chunks/Mdn_Link.HQMNIXT9.js";import{T as At}from"../chunks/Tome_Subheading.BVMmPNnd.js";import{i as L}from"../chunks/if.BEc--qLH.js";import{e as qt}from"../chunks/each.BiuPCka9.js";import{t as Mt,a as Ee,c as rn,s as an}from"../chunks/index.Dk2meZB-.js";import{C as Lt}from"../chunks/Code.zFpC67uF.js";import{s as pt,c as ce,r as cn,e as ln}from"../chunks/attributes.B8BVxPeI.js";import{s as ae}from"../chunks/style.Bk7ejTAN.js";import{p as M}from"../chunks/proxy.BBuD2jL9.js";import{b as be}from"../chunks/this.CkJaWCNZ.js";import{p as rt,s as Pe}from"../chunks/props.CG8-7N7W.js";import{a as un,s as zt,b as he,c as Se,D as dn}from"../chunks/Dialog.CtyeA8x3.js";import{o as Ae}from"../chunks/index-client.B3HfSnmQ.js";import{s as ft}from"../chunks/render.CS4eACGI.js";import{e as ye,g as He}from"../chunks/utils.T4Zd4vGB.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as wt}from"../chunks/class.C5NkWeq0.js";import{P as _n}from"../chunks/Pending_Animation.CAMwMD6-.js";import{D as vn,b as Oe}from"../chunks/Details.6vJJH7VM.js";import{G as mn}from"../chunks/Github_Logo.DGgzIMbD.js";import{C as hn,T as pn}from"../chunks/Theme_Input.CqMhZYLt.js";import{b as ze}from"../chunks/input.CVKiWRwM.js";function vt(i,t,n){qe(()=>{var r=Le(()=>t(i,n==null?void 0:n())||{});if(n&&(r!=null&&r.update)){var s=!1,_={};tn(()=>{var c=n();en(c),s&&nn(_,c)&&(_=c,r.update(c))}),s=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}var It,Nt,Ht,ue,Ue;const de=class de{constructor(t){K(this,ue);K(this,It,new WeakMap);K(this,Nt,void 0);K(this,Ht,void 0);me(this,Ht,t)}observe(t,n){var r=E(this,It).get(t)||new Set;return r.add(n),E(this,It).set(t,r),Te(this,ue,Ue).call(this).observe(t,E(this,Ht)),()=>{var s=E(this,It).get(t);s.delete(n),s.size===0&&(E(this,It).delete(t),E(this,Nt).unobserve(t))}}};It=new WeakMap,Nt=new WeakMap,Ht=new WeakMap,ue=new WeakSet,Ue=function(){return E(this,Nt)??me(this,Nt,new ResizeObserver(t=>{for(var n of t){de.entries.set(n.target,n);for(var r of E(this,It).get(n.target)||[])r(n)}}))},ht(de,"entries",new WeakMap);let fe=de;var fn=new fe({box:"border-box"});function Ne(i,t,n){var r=fn.observe(i,()=>n(i[t]));qe(()=>(Le(()=>n(i[t])),r))}var gn=d('<span class="font_mono">contextmenu</span> event',1),xn=d('<span class="font_mono">navigator.vibrate</span>'),bn=d('<span class="font_mono">navigator.vibrate</span>'),yn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
		to your app. <a href="#motivation">The motivation docs</a> explain why Fuz breaks web platform expectations.</p> <p>On touch devices, we detect tap-and-hold (aka longpress) instead of simply overriding the web's <!> because iOS does not support this web standard as of July 2023 as described in <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">this WebKit bug report</a>. The Fuz
		implementation therefore has hacks that may cause corner case bugs on various devices and
		browsers, and it breaks <!> on all mobile browsers that I've tested because it triggers the gesture on a timeout, not a user
		action.</p> <p>When you rightclick or longpress inside a <code>Contextmenu_Root</code>, it searches for
		behaviors defined with <code>Contextmenu</code> starting from the target element up to the root.
		If any behaviors are found, the Fuz contextmenu opens, with the caveats below. The contextmenu displays
		the available behaviors which you can then activate. If no behaviors are found, the system contextmenu
		opens.</p> <h4>Devices with a mouse</h4> <ul><li>rightclick opens the Fuz contextmenu and not the system contextmenu except on
			input/textarea/contenteditable</li> <li>rightclick on the Fuz contextmenu opens the system contextmenu</li> <li>rightclick while holding Shift opens the system contextmenu</li> <li>keyboard navigation and activation should work similarly to the W3C <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/">APG menubar pattern</a></li></ul> <h4>Touch devices</h4> <ul><li>longpress opens the Fuz contextmenu and not the system contextmenu</li> <li>longpress on the Fuz contextmenu (two longpresses) opens the system contextmenu</li> <li>double-tap-and-hold (aka tap-then-longpress) opens the system contextmenu or performs other
			default behavior like selecting text - does not work for cases where the first tap performs
			some action on an element, like links - use two longpresses for those cases (this may need
			more design work, possibly adding a different gesture or a contextmenu entry for touch devices
			that triggers the system conextmenu on the next longpress)</li> <li>a longpress is canceled if you move the touch past a threshold before it triggers</li> <li>the contextmenu closes if you move past a threshold without lifting the longpress touch that
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul></section> <section><!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
		tap-and-hold (aka longpress) on an element inside Fuz's <code>Contextmenu</code>, you'll see app-specific options and actions for your current context.</p> <p>This is a powerful UX pattern, but it violates #2. The Fuz contextmenu breaks the normal browser
		behavior of showing the system contextmenu and device-specific behaviors like selecting text on
		a longpress.</p> <p>Balancing these two concerns is going to be an ongoing challenge, and my current belief is that
		the contextmenu is too useful and powerful to ignore. I'm open to critical feedback, and I'll do
		what I can to minimize the harmful effects of choices like this.</p> <p>Mitigations:</p> <ul><li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables.</li> <li>To bypass the Fuz contextmenu on a device with a keyboard, hold the Shift key.</li> <li>To bypass the Fuz contextmenu on a touch device, like to select text, tap one extra time
			before your longpress. This means double-tap-and-hold should behave the same as tap-and-hold
			on standard web pages.</li> <li>Triggering the contextmenu inside of the Fuz contextmenu shows your system contextmenu. This
			means you can either double-right-click or longpress twice to access your system contextmenu
			as an alternative to holding Shift or double-tap-and-hold, However a caveat is that the target
			of your action will be some element inside the Fuz contextmenu, so to select text or access a
			link's system contextmenu on a touch device, you must use double-tap-and-hold. When you open
			the Fuz contextmenu on a link, you'll see the link again in the menu under your pointer by
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function wn(i){var t=yn(),n=O(t),r=u(n);At(r,{text:"Expected behaviors",slug:"expected-behaviors"});var s=e(e(r,!0)),_=e(u(s));e(e(_,!0)),P(),l(s);var c=e(e(s,!0)),C=e(u(c));re(C,{path:"Web/API/Element/contextmenu_event",children:(mt,kt)=>{var J=gn();O(J),P(),a(mt,J)},$$slots:{default:!0}});var T=e(e(C,!0)),k=e(e(T,!0));re(k,{path:"Web/API/Navigator/vibrate",children:(mt,kt)=>{var J=xn();a(mt,J)},$$slots:{default:!0}}),P(),l(c);var x=e(e(c,!0)),v=e(u(x));e(e(v,!0)),P(),l(x);var m=e(e(x,!0)),p=e(e(m,!0)),$=u(p),f=e(e($,!0)),h=e(e(f,!0)),b=e(e(h,!0));e(u(b)),l(b),l(p);var I=e(e(p,!0)),S=e(e(I,!0)),R=u(S),z=e(e(R,!0)),V=e(e(z,!0)),tt=e(e(V,!0)),ot=e(e(tt,!0)),W=e(e(ot,!0)),dt=e(u(W));re(dt,{path:"Web/API/Navigator/vibrate",children:(mt,kt)=>{var J=bn();a(mt,J)},$$slots:{default:!0}}),P(),l(W),l(S),l(n);var F=e(e(n,!0)),X=u(F);At(X,{text:"Motivation",slug:"motivation"});var Y=e(e(X,!0)),H=e(e(Y,!0)),Q=u(H);e(e(Q,!0)),l(H);var it=e(e(H,!0));e(u(it)),P(),l(it);var st=e(e(it,!0)),ut=e(e(st,!0)),j=e(e(ut,!0)),_t=e(e(j,!0)),yt=u(_t),Z=e(e(yt,!0)),$t=e(e(Z,!0));e(e($t,!0)),l(_t),l(F),a(i,t)}function $n(i){const t=i-1;return t*t*t+1}function Cn(i){return--i*i*i*i*i+1}function Fe(i,{from:t,to:n},r={}){const s=getComputedStyle(i),_=s.transform==="none"?"":s.transform,[c,C]=s.transformOrigin.split(" ").map(parseFloat),T=t.left+t.width*c/n.width-(n.left+c),k=t.top+t.height*C/n.height-(n.top+C),{delay:x=0,duration:v=p=>Math.sqrt(p)*120,easing:m=$n}=r;return{delay:x,duration:typeof v=="function"?v(Math.sqrt(T*T+k*k)):v,easing:m,css:(p,$)=>{const f=$*T,h=$*k,b=p+$*t.width/n.width,I=p+$*t.height/n.height;return`transform: ${_} translate(${f}px, ${h}px) scale(${b}, ${I});`}}}var Ut,Wt;class We{constructor(){K(this,Ut,A(0));K(this,Wt,A(0))}get width(){return o(E(this,Ut))}set width(t){y(E(this,Ut),M(t))}get height(){return o(E(this,Wt))}set height(t){y(E(this,Wt),M(t))}}Ut=new WeakMap,Wt=new WeakMap;var Bt,Ft,Vt,Xt,Yt;class kn{constructor(t,n){ht(this,"is_menu",!1);ht(this,"menu");K(this,Bt,A(!1));K(this,Ft,A());K(this,Vt,A(!1));K(this,Xt,A(null));K(this,Yt,A(null));this.menu=t,E(this,Ft).v=M(n)}get selected(){return o(E(this,Bt))}set selected(t){y(E(this,Bt),M(t))}get run(){return o(E(this,Ft))}set run(t){y(E(this,Ft),M(t))}get pending(){return o(E(this,Vt))}set pending(t){y(E(this,Vt),M(t))}get error_message(){return o(E(this,Xt))}set error_message(t){y(E(this,Xt),M(t))}get promise(){return o(E(this,Yt))}set promise(t){y(E(this,Yt),M(t))}}Bt=new WeakMap,Ft=new WeakMap,Vt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap;var jt,Kt;class Tn{constructor(t,n){ht(this,"is_menu",!0);ht(this,"menu");ht(this,"depth");K(this,jt,A(!1));K(this,Kt,A(M([])));this.menu=t,this.depth=n}get selected(){return o(E(this,jt))}set selected(t){y(E(this,jt),M(t))}get items(){return o(E(this,Kt))}set items(t){y(E(this,Kt),M(t))}}jt=new WeakMap,Kt=new WeakMap;var Gt;class In{constructor(){ht(this,"is_menu",!0);ht(this,"menu",null);ht(this,"depth",1);K(this,Gt,A(M([])))}get items(){return o(E(this,Gt))}set items(t){y(E(this,Gt),M(t))}}Gt=new WeakMap;var Jt,Qt,Zt,te,ee,ne,oe;class we{constructor(t){ht(this,"layout");ht(this,"initial_layout");K(this,Jt,A(!1));K(this,Qt,A(0));K(this,Zt,A(0));K(this,te,A(M([])));K(this,ee,A());K(this,ne,A(M(new In)));K(this,oe,A(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new We}get opened(){return o(E(this,Jt))}set opened(t){y(E(this,Jt),M(t))}get x(){return o(E(this,Qt))}set x(t){y(E(this,Qt),M(t))}get y(){return o(E(this,Zt))}set y(t){y(E(this,Zt),M(t))}get params(){return o(E(this,te))}set params(t){y(E(this,te),M(t))}get error(){return o(E(this,ee))}set error(t){y(E(this,ee),M(t))}get root_menu(){return o(E(this,ne))}set root_menu(t){y(E(this,ne),M(t))}get selections(){return o(E(this,oe))}set selections(t){y(E(this,oe),M(t))}open(t,n,r){this.selections.length=0,this.opened=!0,this.x=n,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise!==null&&(n.promise=null),n.error_message!==null&&(n.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let n;try{n=t.run()}catch(r){const s=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=s??"unknown error",this.error=s}if(un(n)){t.pending=!0,t.error_message=null;const r=t.promise=n.then(s=>{if(r===t.promise){if(typeof(s==null?void 0:s.ok)=="boolean")if(s.ok)this.close();else{const _=typeof s.message=="string"?s.message:void 0;t.error_message=_??"unknown error",this.error=_}else this.close();return s}},s=>{if(r!==t.promise)return;const _=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=_??"unknown error",this.error=_}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var n;const{items:t}=((n=this.selections.at(-1))==null?void 0:n.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const n=Me()??this.root_menu,r=new kn(n,t);return n.items.push(r),Ae(()=>{n.items.length=0}),r}add_submenu(){const t=Me()??this.root_menu,n=new Tn(t,t.depth+1);return t.items.push(n),Nn(n),Ae(()=>{t.items.length=0}),n}}Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap;const $e="contextmenu",En=`a,[data-${$e}]`,ie=new Map;let Pn=0;const Sn=(i,t)=>{if(t==null)return;const n=Pn+++"";return i.dataset[$e]=n,ie.set(n,t),{update:r=>{ie.set(n,r)},destroy:()=>{ie.delete(n)}}},An=17,De=(i,t,n,r)=>{const s=On(i);return s!=null&&s.length?(r.open(s,t,n),navigator.vibrate&&navigator.vibrate(An),!0):!1},On=i=>{var _;let t=null,n=i,r,s;for(;n=n==null?void 0:n.closest(En);){if(r=n.dataset[$e]){if(t??(t=[]),s=ie.get(r),s===void 0)continue;Array.isArray(s)?(t??(t=[])).push(...s):(t??(t=[])).push(s)}n.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const c=(_=window.getSelection())==null?void 0:_.toString();c&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(c)}})}return t},Be=Symbol(),zn=i=>ge(Be,i),Ce=()=>xe(Be),Ve=Symbol(),Nn=i=>ge(Ve,i),Me=()=>xe(Ve),Xe=Symbol(),Ye=(i=new We)=>(ge(Xe,i),i),Fn=()=>xe(Xe);var Dn=(i,t)=>t.close(),Mn=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function je(i,t){xt(t,!0);const n="🔗",r=rt(t,"icon",3,n),s=Ce(),_=(b,I=location.host)=>{const S=pe(pe(b,"https://"),"http://");return S.startsWith(I+"/")?pe(S,I):S},c=q(()=>_(t.href)),C=q(()=>!(o(c)[0]==="."||o(c)[0]==="/"&&o(c)[1]!=="/")),T=q(()=>o(C)?"noreferrer":void 0);var k=Mn(),x=u(k);x.__click=[Dn,s];var v=u(x),m=u(v),p=u(m);L(p,()=>typeof r()=="string",b=>{var I=St();et(()=>ft(I,r())),a(b,I)},b=>{var I=at(),S=O(I);pt(S,r,()=>n),a(b,I)}),l(m);var $=e(e(m,!0)),f=u($),h=u(f);L(h,()=>t.children,b=>{var I=at(),S=O(I);pt(S,()=>t.children),a(b,I)},b=>{var I=St();et(()=>ft(I,o(c))),a(b,I)}),l(f),l($),l(v),l(x),l(k),et(()=>{ce(x,"href",t.href),ce(x,"rel",o(T))}),a(i,k),bt()}ye(["click"]);var Rn=d("⚠️",1),qn=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function lt(i,t){xt(t,!0);const n=Ce(),r=n.add_entry(t.run);Rt(()=>{r.run=t.run});const s=q(()=>r),_=q(()=>{let{selected:h,pending:b,error_message:I}=o(s);return[h,b,I]}),c=q(()=>o(_)[0]),C=q(()=>o(_)[1]),T=q(()=>o(_)[2]);var k=qn();k.__click=()=>{setTimeout(()=>n.activate(r))};var x=u(k),v=u(x),m=u(v);L(m,()=>typeof t.icon=="string",h=>{var b=St();et(()=>ft(b,t.icon)),a(h,b)},h=>{var b=at(),I=O(b);L(I,()=>t.icon,S=>{var R=at(),z=O(R);pt(z,()=>t.icon),a(S,R)},null,!0),a(h,b)}),l(v);var p=e(e(v,!0)),$=u(p);pt($,()=>t.children),l(p);var f=e(e(p,!0));L(f,()=>o(C),h=>{_n(h,{})},h=>{var b=at(),I=O(b);L(I,()=>o(T),S=>{var R=Rn();a(S,R)},null,!0),a(h,b)}),l(x),l(k),et(()=>{ce(k,"title",o(T)?`Error: ${o(T)}`:void 0),wt(k,"selected",o(c))}),He("mouseenter",k,h=>{zt(h),n.select(r)}),a(i,k),bt()}ye(["click"]);function Ke(i,t){lt(i,{get run(){return t.run},icon:r=>{P();var s=St();et(()=>ft(s,t.icon)),a(r,s)},children:(r,s)=>{P();var _=St();et(()=>ft(_,t.content)),a(r,_)},$$slots:{default:!0}})}var Ln=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Hn=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Un=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Wn=d("<!> <!> <!>",1);function se(i,t){xt(t,!0);const n=(w,g=Ie)=>{je(w,Pe(g))},r=(w,g=Ie)=>{Ke(w,Pe(g))},s=rt(t,"contextmenu",11,()=>new we),_=rt(t,"longpress_move_tolerance",3,21),c=rt(t,"longpress_duration",3,633),C=rt(t,"bypass_with_tap_then_longpress",3,!0),T=rt(t,"tap_then_longpress_duration",3,660),k=rt(t,"tap_then_longpress_move_tolerance",3,7),x=rt(t,"open_offset_x",11,()=>-2),v=rt(t,"open_offset_y",11,()=>-2),m=rt(t,"scoped",3,!1);zn(s());let p=A(void 0);const $=q(s),f=q(()=>{let{layout:w,initial_layout:g}=o($);return[w,g]}),h=q(()=>o(f)[0]),b=q(()=>o(f)[1]),I=q(()=>o(h)===o(b));let S=A(void 0),R=A(void 0);Rt(()=>{!o(I)&&o(S)!==void 0&&(o(h).width=o(S))}),Rt(()=>{!o(I)&&o(R)!==void 0&&(o(h).height=o(R))});const z=Ye();Rt(()=>{if(o(p)){const w=o(p).getBoundingClientRect();z.width=w.width,z.height=w.height}});const V=q(()=>s().x+Math.min(0,o(h).width-(s().x+z.width))),tt=q(()=>s().y+Math.min(0,o(h).height-(s().y+z.height)));let ot=A(void 0),W=A(void 0),dt=A(void 0),F=A(void 0),X=A(void 0),Y=A(void 0);const H=()=>{o(X)&&y(X,!1),o(F)!=null&&(clearTimeout(o(F)),y(F,null))},Q=w=>{var N;if(o(Y)){y(Y,!1);return}if(o(X)){H(),zt(w);return}const{target:g}=w;w.shiftKey||!(g instanceof HTMLElement||g instanceof SVGElement)||(N=o(p))!=null&&N.contains(g)||he(g)||Se(g)||De(g,w.clientX+x(),w.clientY+v(),s())&&(zt(w),H())},it=w=>{o(X)&&y(X,!1);const{touches:g,target:N}=w;if(s().opened||g.length!==1||w.shiftKey||!(N instanceof HTMLElement||N instanceof SVGElement)||he(N)||Se(N))return;const{clientX:D,clientY:U}=g[0];if(C()){if(o(dt)!=null&&performance.now()-o(dt)<T()&&Math.hypot(D-o(ot),U-o(W))<k()){y(Y,!0),y(dt,null);return}y(dt,M(performance.now()))}y(ot,M(D)),y(W,M(U)),o(F)!=null&&H(),y(F,M(setTimeout(()=>{y(X,!0),De(N,o(ot)+x(),o(W)+v(),s())},c())))},st=w=>{if(o(F)==null)return;const{touches:g}=w;if(g.length!==1)return;const{clientX:N,clientY:D}=g[0];Math.hypot(N-o(ot),D-o(W))>_()&&(s().opened&&s().close(),H())},ut=w=>{o(F)!=null&&(o(X)&&zt(w),H())},j=w=>{o(p)&&!o(p).contains(w.target)&&s().close()},_t=new Map([["Escape",()=>s().close()],["ArrowLeft",()=>s().collapse_selected()],["ArrowRight",()=>s().expand_selected()],["ArrowDown",()=>s().select_next()],["PageDown",()=>s().select_next()],["ArrowUp",()=>s().select_previous()],["PageUp",()=>s().select_previous()],["Home",()=>s().select_first()],["End",()=>s().select_last()],[" ",()=>s().activate_selected()],["Enter",()=>s().activate_selected()]]),yt=w=>{const g=_t.get(w.key);!g||he(w.target)||(zt(w),g())},Z=(w,g)=>{let N=null,D=null;const U=G=>{N&&w.removeEventListener(D,N),G.disabled||(w.addEventListener(G.event,G.cb,{capture:!0,passive:G.passive}),N=G.cb,D=G.event)};return U(g),{update:G=>{U(G)},destroy:()=>{N&&w.removeEventListener(D,N)}}};var $t=Wn(),mt=O($t);L(mt,m,w=>{var g=Ln(),N=u(g);pt(N,()=>t.children),l(g),vt(g,(D,U)=>Z(D,U),()=>({event:"contextmenu",passive:!1,cb:Q})),vt(g,(D,U)=>Z(D,U),()=>({event:"touchstart",passive:!0,cb:it})),vt(g,(D,U)=>Z(D,U),()=>({event:"touchmove",passive:!0,cb:st})),vt(g,(D,U)=>Z(D,U),()=>({event:"touchend",passive:!1,cb:ut})),vt(g,(D,U)=>Z(D,U),()=>({event:"touchcancel",passive:!1,cb:ut})),a(w,g)},w=>{var g=at(),N=O(g);pt(N,()=>t.children),a(w,g)});var kt=e(e(mt,!0));L(kt,()=>!o(I),w=>{var g=Hn();Ne(g,"clientHeight",N=>y(R,N)),Ne(g,"clientWidth",N=>y(S,N)),a(w,g)});var J=e(e(kt,!0));L(J,()=>s().opened,w=>{var g=Un();be(g,N=>y(p,M(N)),()=>o(p)),qt(g,76,()=>s().params,(N,D)=>N,(N,D,U)=>{var G=at(),Dt=O(G);L(Dt,()=>typeof B(D)=="function",ct=>{var gt=at(),Et=O(gt);pt(Et,()=>B(D)),a(ct,gt)},ct=>{var gt=at(),Et=O(gt);L(Et,()=>B(D).snippet==="link",nt=>{n(nt,()=>B(D).props)},nt=>{var Ot=at(),_e=O(Ot);L(_e,()=>B(D).snippet==="text",Ct=>{r(Ct,()=>B(D).props)},null,!0),a(nt,Ot)},!0),a(ct,gt)}),a(N,G)}),l(g),et(()=>ae(g,"transform",`translate3d(${o(V)??""}px, ${o(tt)??""}px, 0)`)),a(w,g)}),vt(Pt,(w,g)=>Z(w,g),()=>({event:"contextmenu",passive:!1,cb:Q,disabled:m()})),vt(Pt,(w,g)=>Z(w,g),()=>({event:"touchstart",passive:!0,cb:it,disabled:m()})),vt(Pt,(w,g)=>Z(w,g),()=>({event:"touchmove",passive:!0,cb:st,disabled:m()})),vt(Pt,(w,g)=>Z(w,g),()=>({event:"touchend",passive:!1,cb:ut,disabled:m()})),vt(Pt,(w,g)=>Z(w,g),()=>({event:"touchcancel",passive:!1,cb:ut,disabled:m()})),vt(Pt,(w,g)=>Z(w,g),()=>({event:"mousedown",passive:!0,cb:j,disabled:!s().opened})),vt(Pt,(w,g)=>Z(w,g),()=>({event:"keydown",passive:!1,cb:yt,disabled:!s().opened})),a(i,$t),bt()}var Bn=d('<span class="display_contents"><!></span>');function Tt(i,t){xt(t,!0);var n=Bn(),r=u(n);pt(r,()=>t.children),l(n),vt(n,(s,_)=>Sn(s,_),()=>t.entries),a(i,n),bt()}var Vn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Xn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ke(i,t){xt(t,!0);const n=Ce(),r=n.add_submenu(),{layout:s}=n,_=q(()=>r.selected);let c=A(void 0);const C=Fn(),T=Ye();let k=A(0),x=A(0);Rt(()=>{o(c)&&v(o(c),s,C)});const v=(R,z,V)=>{const{x:tt,y:ot,width:W,height:dt}=R.getBoundingClientRect();T.width=W,T.height=dt;const F=tt-o(k),X=ot-o(x),Y=F+W+V.width-z.width;if(Y<=0)y(k,M(V.width));else{const H=W-F;H<=0?y(k,-W):H>Y?y(k,V.width-Y):y(k,H-W)}y(x,M(Math.min(0,z.height-(X+dt))))};var m=Xn(),p=u(m),$=u(p),f=u($),h=u(f);L(h,()=>t.icon,R=>{var z=at(),V=O(z);pt(V,()=>t.icon),a(R,z)}),l(f);var b=e(e(f,!0)),I=u(b);pt(I,()=>t.children),l(b),l($),e(e($,!0)),l(p);var S=e(e(p,!0));L(S,()=>o(_),R=>{var z=Vn();be(z,tt=>y(c,M(tt)),()=>o(c));var V=u(z);pt(V,()=>t.menu),l(z),et(()=>{ae(z,"transform",`translate3d(${o(k)??""}px, ${o(x)??""}px, 0)`),ae(z,"max-height",`${s.height??""}px`)}),a(R,z)}),l(m),et(()=>{ae(m,"--contextmenu_depth",r.depth),ce(p,"aria-expanded",o(_)),wt(p,"selected",o(_))}),He("mouseenter",p,R=>{zt(R),setTimeout(()=>n.select(r))}),a(i,m),bt()}var Yn=d("🏠",1),jn=d("🌄",1),Kn=d("go home",1),Gn=d("go adventure",1),Jn=d("🌄",1),Qn=d("🏠",1),Zn=d("do adventure",1),to=d("be home",1),eo=d("<!> <!>",1);function le(i,t){xt(t,!0);const n=rt(t,"name",3,"Cat"),r=rt(t,"icon",3,"😺");ke(i,{icon:c=>{P();var C=St();et(()=>ft(C,r())),a(c,C)},menu:c=>{var C=eo(),T=O(C);lt(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:v=>{var m=at(),p=O(m);L(p,()=>t.position==="adventure",$=>{var f=Yn();a($,f)},$=>{var f=jn();a($,f)}),a(v,m)},children:(v,m)=>{var p=at(),$=O(p);L($,()=>t.position==="adventure",f=>{var h=Kn();a(f,h)},f=>{var h=Gn();a(f,h)}),a(v,p)},$$slots:{default:!0}});var k=e(e(T,!0));lt(k,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:v=>{var m=at(),p=O(m);L(p,()=>t.position==="adventure",$=>{var f=Jn();a($,f)},$=>{var f=Qn();a($,f)}),a(v,m)},children:(v,m)=>{var p=at(),$=O(p);L($,()=>t.position==="adventure",f=>{var h=Zn();a(f,h)},f=>{var h=to();a(f,h)}),a(v,p)},$$slots:{default:!0}}),a(c,C)},children:(c,C)=>{P();var T=St();et(()=>ft(T,n())),a(c,T)},$$slots:{default:!0}}),bt()}var no=d("Source code",1),oo=d("?",1),so=d("About",1),ro=d("<!> <!>",1);function ao(i,t){var n=ro(),r=O(n);je(r,{href:"https://github.com/ryanatkn/fuz",icon:c=>{mn(c,{size:"var(--icon_size_xs)"})},children:(c,C)=>{P();var T=no();a(c,T)},$$slots:{default:!0}});var s=e(e(r,!0));lt(s,{get run(){return t.toggle_about_dialog},icon:c=>{P();var C=oo();a(c,C)},children:(c,C)=>{P();var T=so();a(c,T)},$$slots:{default:!0}}),a(i,n)}const Ge=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const n=i[0];return n.icon+n.name};var io=d("🏠",1),co=d("🐈‍⬛",1),lo=d("call",1),uo=d("🏠",1),_o=d("be",1),vo=d("🦋",1),mo=d("leave",1),ho=d("<!> <!>",1),po=d("<!> <!> <!>",1),fo=d("home",1);function go(i,t){xt(t,!0);const n=q(()=>Ge(t.adventure_cats));ke(i,{icon:_=>{P();var c=io();a(_,c)},menu:_=>{var c=po(),C=O(c);L(C,()=>o(n),x=>{lt(x,{run:()=>t.act({type:"call_cats_home"}),icon:m=>{P();var p=co();a(m,p)},children:(m,p)=>{P();var $=lo();a(m,$)},$$slots:{default:!0}})});var T=e(e(C,!0));qt(T,69,()=>t.home_cats,(x,v)=>x.name,(x,v,m)=>{le(x,{get name(){return B(v).name},get icon(){return B(v).icon},get position(){return B(v).position},get act(){return t.act}})});var k=e(e(T,!0));L(k,()=>!o(n),x=>{var v=ho(),m=O(v);lt(m,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:f=>{P();var h=uo();a(f,h)},children:(f,h)=>{P();var b=_o();a(f,b)},$$slots:{default:!0}});var p=e(e(m,!0));lt(p,{run:()=>t.act({type:"call_cats_adventure"}),icon:f=>{P();var h=vo();a(f,h)},children:(f,h)=>{P();var b=mo();a(f,b)},$$slots:{default:!0}}),a(x,v)}),a(_,c)},children:(_,c)=>{P();var C=fo();a(_,C)},$$slots:{default:!0}}),bt()}var xo=d("🌄",1),bo=d("🦋",1),yo=d("call",1),wo=d("🌄",1),$o=d("do",1),Co=d("🐈‍⬛",1),ko=d("leave",1),To=d("<!> <!>",1),Io=d("<!> <!> <!>",1),Eo=d("adventure",1);function Po(i,t){xt(t,!0);const n=q(()=>Ge(t.home_cats));ke(i,{icon:_=>{P();var c=xo();a(_,c)},menu:_=>{var c=Io(),C=O(c);L(C,()=>o(n),x=>{lt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:m=>{P();var p=bo();a(m,p)},children:(m,p)=>{P();var $=yo();a(m,$)},$$slots:{default:!0}})});var T=e(e(C,!0));qt(T,69,()=>t.adventure_cats,(x,v)=>x.name,(x,v,m)=>{le(x,{get name(){return B(v).name},get icon(){return B(v).icon},get position(){return B(v).position},get act(){return t.act}})});var k=e(e(T,!0));L(k,()=>!o(n),x=>{var v=To(),m=O(v);lt(m,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:f=>{P();var h=wo();a(f,h)},children:(f,h)=>{P();var b=$o();a(f,b)},$$slots:{default:!0}});var p=e(e(m,!0));lt(p,{run:()=>t.act({type:"call_cats_home"}),icon:f=>{P();var h=Co();a(f,h)},children:(f,h)=>{P();var b=ko();a(f,b)},$$slots:{default:!0}}),a(x,v)}),a(_,c)},children:(_,c)=>{P();var C=Eo();a(_,C)},$$slots:{default:!0}}),bt()}var So=d('<span class="icon svelte-u0xdy"> </span>'),Ao=d('<span class="name svelte-u0xdy"><!> </span>'),Oo=d('<span class="cat svelte-u0xdy"><!><!></span>');function Re(i,t){xt(t,!0);const n=rt(t,"name",3,"Cat"),r=rt(t,"icon",3,"😺"),s=rt(t,"show_name",3,!0),_=rt(t,"show_icon",3,!0);var c=Oo(),C=u(c);L(C,_,k=>{var x=So(),v=u(x);l(x),et(()=>ft(v,r())),a(k,x)});var T=e(C);L(T,s,k=>{var x=Ao(),v=u(x);L(v,()=>t.children,p=>{var $=at(),f=O($);pt(f,()=>t.children),a(p,$)});var m=e(v,!0);l(x),et(()=>ft(m,n())),a(k,x)}),l(c),et(()=>wt(c,"has-icon",_())),a(i,c),bt()}const zo=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	// TODO @many why is this import needed? \`Code\` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of \`ssr.external/noExternal/external\` with \`@ryanatkn/fuz_code\` and \`prismjs\`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Details from '$lib/Details.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import Cat_Contextmenu from '$routes/library/Contextmenu/Cat_Contextmenu.svelte';
	import App_Contextmenu from '$routes/library/Contextmenu/App_Contextmenu.svelte';
	import Home_Contextmenu from '$routes/library/Contextmenu/Home_Contextmenu.svelte';
	import Adventure_Contextmenu from '$routes/library/Contextmenu/Adventure_Contextmenu.svelte';
	import Cat_View from '$routes/library/Contextmenu/Cat_View.svelte';
	import type {Cat, Cat_Position, History_Item} from '$routes/library/Contextmenu/helpers.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import file_contents from '$routes/library/Contextmenu/Example_Full.svelte?raw';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const alyssa = 'Alyssa';
	const ben = 'Ben';

	const INITIAL_POSITION: Cat_Position = 'home';
	let alyssa_position: Cat_Position = $state(INITIAL_POSITION);
	let ben_position: Cat_Position = $state(INITIAL_POSITION);

	const alyssa_icon = $derived(alyssa_position === ben_position ? '😺' : '😾');
	const ben_icon = $derived(alyssa_position === ben_position ? '😸' : '😿');

	const alyssa_cat = $derived({name: alyssa, icon: alyssa_icon, position: alyssa_position});
	const ben_cat = $derived({name: ben, icon: ben_icon, position: ben_position});

	let swapped = $state(false);

	// TODO this is weird but \`animate:\` needs an \`each\`?
	const locate_cats = (
		cats: Cat[],
		swapped: boolean,
	): {home_cats: Cat[]; adventure_cats: Cat[]} => {
		const home_cats: Cat[] = [];
		const adventure_cats: Cat[] = [];
		for (const cat of cats) {
			const list = cat.position === 'home' ? home_cats : adventure_cats;
			if (swapped) {
				list.unshift(cat);
			} else {
				list.push(cat);
			}
		}
		return {home_cats, adventure_cats};
	};

	const {home_cats, adventure_cats} = $derived(locate_cats([alyssa_cat, ben_cat], swapped));

	// const cats = [alyssa, ben];
	// TODO use these
	// const catMoods = ['😼', '😾', '😺', '😸', '😻'];

	const can_reset = $derived(
		alyssa_position !== INITIAL_POSITION || ben_position !== INITIAL_POSITION,
	);

	// reset the tome's state
	const reset = () => {
		alyssa_position = INITIAL_POSITION;
		ben_position = INITIAL_POSITION;
	};

	let show_about_dialog = $state(false);
	const toggle_about_dialog = () => {
		show_about_dialog = !show_about_dialog;
	};

	const act = (item: History_Item): void => {
		switch (item.type) {
			case 'call_cats_adventure': {
				alyssa_position = 'adventure';
				ben_position = 'adventure';
				break;
			}
			case 'call_cats_home': {
				alyssa_position = 'home';
				ben_position = 'home';
				break;
			}
			case 'cat_go_adventure': {
				if (item.name === alyssa) {
					alyssa_position = 'adventure';
				} else if (item.name === ben) {
					ben_position = 'adventure';
				}
				break;
			}
			case 'cat_go_home': {
				if (item.name === alyssa) {
					alyssa_position = 'home';
				} else if (item.name === ben) {
					ben_position = 'home';
				}
				break;
			}
			case 'cat_be_or_do': {
				swapped = !swapped;
				break;
			}
		}
	};

	const [send, receive] = crossfade({
		fallback: (node, _params) => {
			const style = window.getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 1500,
				easing: quintOut,
				css: (t) => \`
					transform: \${transform} scale(\${t});
					opacity: \${t}
				\`,
			};
		},
	});
<\/script>

<Contextmenu_Root scoped>
	<Tome_Subheading text="Full example" slug="full-example" />
	<Contextmenu>
		{#snippet entries()}
			{#if can_reset}
				<Contextmenu_Text_Entry run={reset} content="Reset" icon="↻" />
			{/if}
			<App_Contextmenu {toggle_about_dialog} />
		{/snippet}
		<section>
			<Contextmenu>
				{#snippet entries()}
					<Home_Contextmenu {act} {home_cats} {adventure_cats} />
				{/snippet}
				<div class="position home">
					<div class="icon">🏠</div>
					<div class="cats">
						{#each home_cats as { name, icon, position } (name)}
							<div class="cat_wrapper" in:receive={{key: name}} out:send={{key: name}} animate:flip>
								<Contextmenu>
									{#snippet entries()}
										<Cat_Contextmenu {act} {name} {icon} {position} />
									{/snippet}
									<Cat_View {name} {icon} />
								</Contextmenu>
							</div>
						{/each}
					</div>
				</div>
			</Contextmenu>
			<Contextmenu>
				{#snippet entries()}
					<Adventure_Contextmenu {act} {home_cats} {adventure_cats} />
				{/snippet}
				<div class="position adventure">
					<div class="icon">🌄</div>
					<div class="cats">
						{#each adventure_cats as { name, icon, position } (name)}
							<div class="cat_wrapper" in:receive={{key: name}} out:send={{key: name}} animate:flip>
								<Contextmenu>
									{#snippet entries()}
										<Cat_Contextmenu {act} {name} {icon} {position} />
									{/snippet}
									<Cat_View {name} {icon} />
								</Contextmenu>
							</div>
						{/each}
					</div>
				</div>
			</Contextmenu>
		</section>
		<section>
			<Details>
				{#snippet summary()}View example source{/snippet}
				<Code content={file_contents} />
			</Details>
		</section>
	</Contextmenu>
</Contextmenu_Root>

{#if show_about_dialog}
	<Dialog onclose={() => (show_about_dialog = false)}>
		<div class="pane p_xl box text_align_center">
			<h1>About Fuz</h1>
			<blockquote>Svelte UI library</blockquote>
			<blockquote>
				free and open source at<br /><a href="https://github.com/ryanatkn/fuz"
					>github.com/ryanatkn/fuz</a
				>
			</blockquote>
			<code class="p_md mb_lg"
				>npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu"
					>@fuz.dev/fuz_contextmenu</a
				></code
			>
			<div class="p_xl box">
				<h2>Color Scheme</h2>
				<Color_Scheme_Input />
				<h2>Theme</h2>
				<Theme_Input />
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.position {
		border-radius: var(--radius_md);
		background-color: var(--fg_1);
		display: flex;
		border: transparent var(--border_width_4) double;
	}
	.position:hover {
		border-color: var(--border_color_1);
	}
	.position .icon {
		font-size: var(--icon_size_xl);
	}
	.cats {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cat_wrapper {
		display: flex;
		flex-direction: column;
		width: 130px;
	}
</style>
`;var No=d("<!> <!>",1),Fo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Do=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Mo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Ro=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),qo=d("View example source",1),Lo=d("<section><!> <!></section> <section><!></section>",1),Ho=d("<!> <!>",1),Uo=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Wo=d("<!> <!>",1);function Bo(i,t){xt(t,!0);const n="Alyssa",r="Ben",s="home";let _=A(s),c=A(s);const C=q(()=>o(_)===o(c)?"😺":"😾"),T=q(()=>o(_)===o(c)?"😸":"😿"),k=q(()=>({name:n,icon:o(C),position:o(_)})),x=q(()=>({name:r,icon:o(T),position:o(c)}));let v=A(!1);const m=(F,X)=>{const Y=[],H=[];for(const Q of F){const it=Q.position==="home"?Y:H;X?it.unshift(Q):it.push(Q)}return{home_cats:Y,adventure_cats:H}},p=q(()=>m([o(k),o(x)],o(v))),$=q(()=>{let{home_cats:F,adventure_cats:X}=o(p);return[F,X]}),f=q(()=>o($)[0]),h=q(()=>o($)[1]),b=q(()=>o(_)!==s||o(c)!==s),I=()=>{y(_,s),y(c,s)};let S=A(!1);const R=()=>{y(S,!o(S))},z=F=>{switch(F.type){case"call_cats_adventure":{y(_,"adventure"),y(c,"adventure");break}case"call_cats_home":{y(_,"home"),y(c,"home");break}case"cat_go_adventure":{F.name===n?y(_,"adventure"):F.name===r&&y(c,"adventure");break}case"cat_go_home":{F.name===n?y(_,"home"):F.name===r&&y(c,"home");break}case"cat_be_or_do":{y(v,!o(v));break}}},[V,tt]=rn({fallback:(F,X)=>{const Y=window.getComputedStyle(F),H=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:Cn,css:Q=>`
					transform: ${H} scale(${Q});
					opacity: ${Q}
				`}}});var ot=Wo(),W=O(ot);se(W,{scoped:!0,children:(F,X)=>{var Y=Ho(),H=O(Y);At(H,{text:"Full example",slug:"full-example"});var Q=e(e(H,!0));Tt(Q,{entries:st=>{var ut=No(),j=O(ut);L(j,()=>o(b),yt=>{Ke(yt,{run:I,content:"Reset",icon:"↻"})});var _t=e(e(j,!0));ao(_t,{toggle_about_dialog:R}),a(st,ut)},children:(st,ut)=>{var j=Lo(),_t=O(j),yt=u(_t);Tt(yt,{entries:J=>{go(J,{act:z,get home_cats(){return o(f)},get adventure_cats(){return o(h)}})},children:(J,w)=>{var g=Do(),N=u(g),D=e(e(N,!0));qt(D,93,()=>o(f),({name:U,icon:G,position:Dt},ct)=>U,(U,G,Dt)=>{let ct=()=>B(B(G)).name,gt=()=>B(B(G)).icon,Et=()=>B(B(G)).position;var nt=Fo(),Ot=u(nt);Tt(Ot,{entries:Ct=>{le(Ct,{act:z,get name(){return ct()},get icon(){return gt()},get position(){return Et()}})},children:(Ct,Je)=>{Re(Ct,{get name(){return ct()},get icon(){return gt()}})},$$slots:{default:!0}}),l(nt),Mt(1,nt,()=>tt,()=>({key:ct()})),Mt(2,nt,()=>V,()=>({key:ct()})),Ee(nt,()=>Fe,null),a(U,nt)}),l(D),l(g),a(J,g)},$$slots:{default:!0}});var Z=e(e(yt,!0));Tt(Z,{entries:J=>{Po(J,{act:z,get home_cats(){return o(f)},get adventure_cats(){return o(h)}})},children:(J,w)=>{var g=Ro(),N=u(g),D=e(e(N,!0));qt(D,93,()=>o(h),({name:U,icon:G,position:Dt},ct)=>U,(U,G,Dt)=>{let ct=()=>B(B(G)).name,gt=()=>B(B(G)).icon,Et=()=>B(B(G)).position;var nt=Mo(),Ot=u(nt);Tt(Ot,{entries:Ct=>{le(Ct,{act:z,get name(){return ct()},get icon(){return gt()},get position(){return Et()}})},children:(Ct,Je)=>{Re(Ct,{get name(){return ct()},get icon(){return gt()}})},$$slots:{default:!0}}),l(nt),Mt(1,nt,()=>tt,()=>({key:ct()})),Mt(2,nt,()=>V,()=>({key:ct()})),Ee(nt,()=>Fe,null),a(U,nt)}),l(D),l(g),a(J,g)},$$slots:{default:!0}}),l(_t);var $t=e(e(_t,!0)),mt=u($t);vn(mt,{summary:J=>{P();var w=qo();a(J,w)},children:(J,w)=>{Lt(J,{content:zo})},$$slots:{default:!0}}),l($t),a(st,j)},$$slots:{default:!0}}),a(F,Y)},$$slots:{default:!0}});var dt=e(e(W,!0));L(dt,()=>o(S),F=>{dn(F,{onclose:()=>y(S,!1),children:(X,Y)=>{var H=Uo(),Q=u(H),it=e(e(Q,!0)),st=e(e(it,!0)),ut=e(u(st));e(ut),l(st);var j=e(e(st,!0));e(u(j)),l(j);var _t=e(e(j,!0)),yt=u(_t),Z=e(e(yt,!0));hn(Z,{});var $t=e(e(Z,!0)),mt=e(e($t,!0));pn(mt,{}),l(_t),l(H),a(X,H)},$$slots:{default:!0}})}),a(i,ot),bt()}var Vo=d("Hello world",1),Xo=d("🌞",1),Yo=d("Hello with an optional icon snippet",1),jo=d("Hello with an optional icon string",1),Ko=d("<!> <!> <!>",1),Go=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Jo=d("<!> <!>",1);function Qo(i){let t=A(!1),n=A(!1),r=A(!1);var s=Jo(),_=O(s);At(_,{text:"Basic usage",slug:"basic-usage"});var c=e(e(_,!0));se(c,{scoped:!0,children:(C,T)=>{Tt(C,{entries:x=>{var v=Ko(),m=O(v);lt(m,{run:()=>y(t,!o(t)),children:(f,h)=>{P();var b=Vo();a(f,b)},$$slots:{default:!0}});var p=e(e(m,!0));lt(p,{run:()=>y(n,!o(n)),icon:h=>{P();var b=Xo();a(h,b)},children:(h,b)=>{P();var I=Yo();a(h,I)},$$slots:{default:!0}});var $=e(e(p,!0));lt($,{run:()=>y(r,!o(r)),icon:"🌚",children:(f,h)=>{P();var b=jo();a(f,b)},$$slots:{default:!0}}),a(x,v)},children:(x,v)=>{var m=Go(),p=u(m),$=e(e(p,!0)),f=q(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(n)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(r)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Lt($,{get content(){return o(f)}});var h=e(e($,!0)),b=u(h),I=u(b);l(b),l(h);var S=e(e(h,!0)),R=u(S),z=u(R);l(R),l(S);var V=e(e(S,!0)),tt=u(V),ot=u(tt);l(tt),l(V);var W=e(e(V,!0));e(u(W)),P(),l(W),l(m),et(()=>{wt(b,"color_g_5",o(t)),ft(I,`greeted = ${o(t)??""}`),wt(R,"color_e_5",o(n)),ft(z,`greeted_icon_snippet = ${o(n)??""}`),wt(tt,"color_d_5",o(r)),ft(ot,`greeted_icon_string = ${o(r)??""}`)}),a(x,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(i,s)}var Zo=d("Toggle",1),ts=d("<div>toggled</div>"),es=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),ns=d("<!> <!>",1);function os(i){const t=new we;let n=A(!1);se(i,{contextmenu:t,scoped:!0,children:(r,s)=>{var _=ns(),c=O(_);At(c,{text:"Custom instance",slug:"custom-instance"});var C=e(e(c,!0));Tt(C,{entries:k=>{lt(k,{run:()=>y(n,!o(n)),children:(x,v)=>{P();var m=Zo();a(x,m)},$$slots:{default:!0}})},children:(k,x)=>{var v=es(),m=u(v);Lt(m,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var p=e(e(m,!0));Lt(p,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=e(e(p,!0)),f=e(u($));e(e(f,!0)),P(),l($);var h=e(e($,!0)),b=u(h);L(b,()=>o(n),I=>{var S=ts();Mt(3,S,()=>an),a(I,S)}),l(h),l(v),a(k,v)},$$slots:{default:!0}}),a(r,_)},$$slots:{default:!0}})}const ss=(i,t)=>{const n=window.getSelection();if(!n||!o(t))return;const r=document.createRange();r.selectNodeContents(o(t)),n.removeAllRanges(),n.addRange(r)};var rs=d("Toggle something",1),as=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),is=d("<div><!></div> <!>",1);function cs(i){const t=new we;let n=A(!1),r=A(void 0),s=A("");const _="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",c=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,C=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,T=q(()=>o(s)===_||o(s)===c||o(s)===C);se(i,{contextmenu:t,scoped:!0,children:(k,x)=>{var v=is(),m=O(v),p=u(m);At(p,{text:"Select text",slug:"select-text"}),l(m);var $=e(e(m,!0));Tt($,{entries:h=>{lt(h,{run:()=>y(n,!o(n)),children:(b,I)=>{P();var S=rs();a(b,S)},$$slots:{default:!0}})},children:(h,b)=>{var I=as(),S=u(I);be(S,j=>y(r,M(j)),()=>o(r));var R=u(S);e(u(R)),P(),l(R);var z=e(e(R,!0)),V=e(u(z));V.__click=[ss,r],P(),l(z),l(S);var tt=e(e(S,!0)),ot=u(tt);cn(ot),l(tt);var W=e(e(tt,!0)),dt=e(u(W));e(e(dt,!0)),P(),l(W);var F=e(e(W,!0)),X=u(F);ln(X),l(F);var Y=e(e(F,!0)),H=u(Y);re(H,{path:"Web/HTML/Global_attributes/contenteditable"}),P(),l(Y);var Q=e(e(Y,!0));u(Q),l(Q);var it=e(e(Q,!0)),st=e(e(it,!0));u(st),l(st);var ut=e(e(st,!0));l(I),et(()=>{wt(I,"color_g_5",o(T)),wt(V,"color_a",o(n)),wt(W,"color_g_5",o(T))}),ze(ot,()=>o(s),j=>y(s,j)),ze(X,()=>o(s),j=>y(s,j)),Oe("innerText",it,()=>o(s),j=>y(s,j)),Oe("innerText",ut,()=>o(s),j=>y(s,j)),a(h,I)},$$slots:{default:!0}}),et(()=>wt(m,"color_d_5",o(T))),a(k,v)},$$slots:{default:!0}})}ye(["click"]);var ls=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function us(i){se(i,{scoped:!0,children:(t,n)=>{var r=ls(),s=O(r);At(s,{text:"Default behaviors",slug:"default-behaviors"});var _=e(e(s,!0)),c=u(_);Lt(c,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`});var C=e(e(c,!0)),T=e(u(C));e(e(T,!0)),P(),l(C);var k=e(e(C,!0));e(e(k,!0)),l(_),a(t,r)},$$slots:{default:!0}})}var ds=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function qs(i,t){xt(t,!0);const r=sn("Contextmenu");on(i,{tome:r,children:(s,_)=>{var c=ds(),C=O(c),T=u(C),k=u(T);e(u(k)),P(),l(k),l(T);var x=e(e(T,!0));u(x),l(x),l(C);var v=e(e(C,!0)),m=u(v);Qo(m),l(v);var p=e(e(v,!0)),$=u(p);us($),l(p);var f=e(e(p,!0)),h=u(f);os(h),l(f);var b=e(e(f,!0)),I=u(b);cs(I),l(b);var S=e(e(b,!0)),R=u(S);Bo(R,{}),l(S);var z=e(e(S,!0)),V=u(z);wn(V),l(z),a(s,c)},$$slots:{default:!0}}),bt()}export{qs as component};
