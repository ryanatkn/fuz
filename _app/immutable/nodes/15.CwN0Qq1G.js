var Je=Object.defineProperty;var Qe=(i,t,n)=>t in i?Je(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var dt=(i,t,n)=>(Qe(i,typeof t!="symbol"?t+"":t,n),n),me=(i,t,n)=>{if(!t.has(i))throw TypeError("Cannot "+n)};var I=(i,t,n)=>(me(i,t,"read from private field"),n?n.call(i):t.get(i)),Y=(i,t,n)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,n)},ve=(i,t,n,a)=>(me(i,t,"write to private field"),a?a.call(i,n):t.set(i,n),n);var Te=(i,t,n)=>(me(i,t,"access private method"),n);import{f as z,c as d,s as e,a as s,t as m,d as E,r as l,b as rt,J as At,$ as St}from"../chunks/disclose-version.D-YpP91c.js";import{i as qe,u as Le,r as Ze,a4 as tn,C as A,g as o,n as w,s as ge,f as xe,p as ht,t as j,a as pt,d as L,O as Rt,U as M,V as Ie}from"../chunks/runtime.CLWtUI7-.js";import{T as en}from"../chunks/Tome_Detail.6B1bbpTb.js";import{g as nn}from"../chunks/tome.BEaQ-Zqd.js";import{M as se}from"../chunks/Mdn_Link.DJGSzZLX.js";import{T as Ot}from"../chunks/Tome_Subheading.B0uQB2a4.js";import{i as H}from"../chunks/if.t2Adprt1.js";import{e as qt}from"../chunks/each.BqXyQR24.js";import{t as Mt,a as Ee,c as on,s as rn}from"../chunks/index.CsKtj9aR.js";import{C as Lt}from"../chunks/Code.CZGB2Sdr.js";import{e as be,f as lt}from"../chunks/svelte-head.BslmLo-c.js";import{s as _t,c as ce,r as sn,e as an}from"../chunks/attributes.laNZifmC.js";import{s as ae}from"../chunks/style.iv2mhl8q.js";import{p as R}from"../chunks/proxy.BywKGEcJ.js";import{b as ye}from"../chunks/this.CdNU6mSA.js";import{p as ot,s as Pe}from"../chunks/props.BqHnzyJo.js";import{a as cn,s as zt,b as he,c as Se,D as ln}from"../chunks/Dialog.DanKENvk.js";import{o as Ae}from"../chunks/index-client.DREpZvMv.js";import{s as mt}from"../chunks/render.DClLgGuB.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as bt}from"../chunks/class.iiaQ2wDY.js";import{P as un}from"../chunks/Pending_Animation.tUva-Khp.js";import{D as dn,b as Oe}from"../chunks/Details.CSMAYy6E.js";import{G as _n}from"../chunks/Github_Logo.DUKuCPq7.js";import{C as mn,T as vn}from"../chunks/Theme_Input.kgZ5E_EJ.js";import{b as ze}from"../chunks/input.bte73Sgg.js";function hn(i,t,n){qe(()=>{var a=Le(()=>t(i,n==null?void 0:n())||{});if(n&&(a!=null&&a.update)){var r=!1;Ze(()=>{var c=n();tn(c),r&&a.update(c)}),r=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}var kt,Nt,Ht,ue,He;const de=class de{constructor(t){Y(this,ue);Y(this,kt,new WeakMap);Y(this,Nt,void 0);Y(this,Ht,void 0);ve(this,Ht,t)}observe(t,n){var a=I(this,kt).get(t)||new Set;return a.add(n),I(this,kt).set(t,a),Te(this,ue,He).call(this).observe(t,I(this,Ht)),()=>{var r=I(this,kt).get(t);r.delete(n),r.size===0&&(I(this,kt).delete(t),I(this,Nt).unobserve(t))}}};kt=new WeakMap,Nt=new WeakMap,Ht=new WeakMap,ue=new WeakSet,He=function(){return I(this,Nt)??ve(this,Nt,new ResizeObserver(t=>{for(var n of t){de.entries.set(n.target,n);for(var a of I(this,kt).get(n.target)||[])a(n)}}))},dt(de,"entries",new WeakMap);let fe=de;var pn=new fe({box:"border-box"});function Ne(i,t,n){var a=pn.observe(i,()=>n(i[t]));qe(()=>(Le(()=>n(i[t])),a))}var fn=m('<span class="font_mono">contextmenu</span> event',1),gn=m('<span class="font_mono">navigator.vibrate</span>'),xn=m('<span class="font_mono">navigator.vibrate</span>'),bn=m(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function yn(i){var t=bn(),n=z(t),a=d(n);Ot(a,{text:"Expected behaviors",slug:"expected-behaviors"});var r=e(e(a,!0)),c=e(d(r));e(e(c,!0)),E(),l(r);var u=e(e(r,!0)),C=e(d(u));se(C,{path:"Web/API/Element/contextmenu_event",children:(ut,Tt)=>{var p=fn();z(p),E(),s(ut,p)},$$slots:{default:!0}});var T=e(e(C,!0)),k=e(e(T,!0));se(k,{path:"Web/API/Navigator/vibrate",children:(ut,Tt)=>{var p=gn();s(ut,p)},$$slots:{default:!0}}),E(),l(u);var x=e(e(u,!0)),h=e(d(x));e(e(h,!0)),E(),l(x);var g=e(e(x,!0)),v=e(e(g,!0)),$=d(v),f=e(e($,!0)),b=e(e(f,!0)),y=e(e(b,!0));e(d(y)),l(y),l(v);var P=e(e(v,!0)),S=e(e(P,!0)),N=d(S),O=e(e(N,!0)),W=e(e(O,!0)),K=e(e(W,!0)),G=e(e(K,!0)),B=e(e(G,!0)),Q=e(d(B));se(Q,{path:"Web/API/Navigator/vibrate",children:(ut,Tt)=>{var p=xn();s(ut,p)},$$slots:{default:!0}}),E(),l(B),l(S),l(n);var D=e(e(n,!0)),U=d(D);Ot(U,{text:"Motivation",slug:"motivation"});var X=e(e(U,!0)),q=e(e(X,!0)),J=d(q);e(e(J,!0)),l(q);var Z=e(e(q,!0));e(d(Z)),E(),l(Z);var st=e(e(Z,!0)),tt=e(e(st,!0)),at=e(e(tt,!0)),V=e(e(at,!0)),ft=d(V),yt=e(e(ft,!0)),wt=e(e(yt,!0));e(e(wt,!0)),l(V),l(D),s(i,t)}function wn(i){const t=i-1;return t*t*t+1}function $n(i){return--i*i*i*i*i+1}function Fe(i,{from:t,to:n},a={}){const r=getComputedStyle(i),c=r.transform==="none"?"":r.transform,[u,C]=r.transformOrigin.split(" ").map(parseFloat),T=t.left+t.width*u/n.width-(n.left+u),k=t.top+t.height*C/n.height-(n.top+C),{delay:x=0,duration:h=v=>Math.sqrt(v)*120,easing:g=wn}=a;return{delay:x,duration:typeof h=="function"?h(Math.sqrt(T*T+k*k)):h,easing:g,css:(v,$)=>{const f=$*T,b=$*k,y=v+$*t.width/n.width,P=v+$*t.height/n.height;return`transform: ${c} translate(${f}px, ${b}px) scale(${y}, ${P});`}}}var Ut,Wt;class Ue{constructor(){Y(this,Ut,A(0));Y(this,Wt,A(0))}get width(){return o(I(this,Ut))}set width(t){w(I(this,Ut),R(t))}get height(){return o(I(this,Wt))}set height(t){w(I(this,Wt),R(t))}}Ut=new WeakMap,Wt=new WeakMap;var Vt,Ft,Bt,Xt,Yt;class Cn{constructor(t,n){dt(this,"is_menu",!1);dt(this,"menu");Y(this,Vt,A(!1));Y(this,Ft,A());Y(this,Bt,A(!1));Y(this,Xt,A(null));Y(this,Yt,A(null));this.menu=t,I(this,Ft).v=R(n)}get selected(){return o(I(this,Vt))}set selected(t){w(I(this,Vt),R(t))}get run(){return o(I(this,Ft))}set run(t){w(I(this,Ft),R(t))}get pending(){return o(I(this,Bt))}set pending(t){w(I(this,Bt),R(t))}get error_message(){return o(I(this,Xt))}set error_message(t){w(I(this,Xt),R(t))}get promise(){return o(I(this,Yt))}set promise(t){w(I(this,Yt),R(t))}}Vt=new WeakMap,Ft=new WeakMap,Bt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap;var jt,Kt;class kn{constructor(t,n){dt(this,"is_menu",!0);dt(this,"menu");dt(this,"depth");Y(this,jt,A(!1));Y(this,Kt,A(R([])));this.menu=t,this.depth=n}get selected(){return o(I(this,jt))}set selected(t){w(I(this,jt),R(t))}get items(){return o(I(this,Kt))}set items(t){w(I(this,Kt),R(t))}}jt=new WeakMap,Kt=new WeakMap;var Gt;class Tn{constructor(){dt(this,"is_menu",!0);dt(this,"menu",null);dt(this,"depth",1);Y(this,Gt,A(R([])))}get items(){return o(I(this,Gt))}set items(t){w(I(this,Gt),R(t))}}Gt=new WeakMap;var Jt,Qt,Zt,te,ee,ne,oe;class we{constructor(t){dt(this,"layout");dt(this,"initial_layout");Y(this,Jt,A(!1));Y(this,Qt,A(0));Y(this,Zt,A(0));Y(this,te,A(R([])));Y(this,ee,A());Y(this,ne,A(R(new Tn)));Y(this,oe,A(R([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ue}get opened(){return o(I(this,Jt))}set opened(t){w(I(this,Jt),R(t))}get x(){return o(I(this,Qt))}set x(t){w(I(this,Qt),R(t))}get y(){return o(I(this,Zt))}set y(t){w(I(this,Zt),R(t))}get params(){return o(I(this,te))}set params(t){w(I(this,te),R(t))}get error(){return o(I(this,ee))}set error(t){w(I(this,ee),R(t))}get root_menu(){return o(I(this,ne))}set root_menu(t){w(I(this,ne),R(t))}get selections(){return o(I(this,oe))}set selections(t){w(I(this,oe),R(t))}open(t,n,a){this.selections.length=0,this.opened=!0,this.x=n,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise!==null&&(n.promise=null),n.error_message!==null&&(n.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let n;try{n=t.run()}catch(a){const r=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=r??"unknown error",this.error=r}if(cn(n)){t.pending=!0,t.error_message=null;const a=t.promise=n.then(r=>{if(a===t.promise){if(typeof(r==null?void 0:r.ok)=="boolean")if(r.ok)this.close();else{const c=typeof r.message=="string"?r.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return r}},r=>{if(a!==t.promise)return;const c=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var n;const{items:t}=((n=this.selections.at(-1))==null?void 0:n.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const n=Me()??this.root_menu,a=new Cn(n,t);return n.items.push(a),Ae(()=>{n.items.length=0}),a}add_submenu(){const t=Me()??this.root_menu,n=new kn(t,t.depth+1);return t.items.push(n),zn(n),Ae(()=>{t.items.length=0}),n}}Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap;const $e="contextmenu",In=`a,[data-${$e}]`,ie=new Map;let En=0;const Pn=(i,t)=>{if(t==null)return;const n=En+++"";return i.dataset[$e]=n,ie.set(n,t),{update:a=>{ie.set(n,a)},destroy:()=>{ie.delete(n)}}},Sn=17,De=(i,t,n,a)=>{const r=An(i);return r!=null&&r.length?(a.open(r,t,n),navigator.vibrate&&navigator.vibrate(Sn),!0):!1},An=i=>{var c;let t=null,n=i,a,r;for(;n=n==null?void 0:n.closest(In);){if(a=n.dataset[$e]){if(t||(t=[]),r=ie.get(a),r===void 0)continue;Array.isArray(r)?(t??(t=[])).push(...r):(t??(t=[])).push(r)}n.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const u=(c=window.getSelection())==null?void 0:c.toString();u&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(u)}})}return t},We=Symbol(),On=i=>ge(We,i),Ce=()=>xe(We),Ve=Symbol(),zn=i=>ge(Ve,i),Me=()=>xe(Ve),Be=Symbol(),Xe=(i=new Ue)=>(ge(Be,i),i),Nn=()=>xe(Be);var Fn=(i,t)=>t.close(),Dn=m('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ye(i,t){ht(t,!0);const n="🔗",a=ot(t,"icon",3,n),r=Ce(),c=(y,P=location.host)=>{const S=pe(pe(y,"https://"),"http://");return S.startsWith(P+"/")?pe(S,P):S},u=L(()=>c(t.href)),C=L(()=>!(o(u)[0]==="."||o(u)[0]==="/"&&o(u)[1]!=="/")),T=L(()=>o(C)?"noreferrer":void 0);var k=Dn(),x=d(k);x.__click=[Fn,r];var h=d(x),g=d(h),v=d(g);H(v,()=>typeof a()=="string",y=>{var P=At();j(()=>mt(P,a())),s(y,P)},y=>{var P=rt(),S=z(P);_t(S,a,()=>n),s(y,P)}),l(g);var $=e(e(g,!0)),f=d($),b=d(f);H(b,()=>t.children,y=>{var P=rt(),S=z(P);_t(S,()=>t.children),s(y,P)},y=>{var P=At();j(()=>mt(P,o(u))),s(y,P)}),l(f),l($),l(h),l(x),l(k),j(()=>{ce(x,"href",t.href),ce(x,"rel",o(T))}),s(i,k),pt()}be(["click"]);var Mn=m("⚠️",1),Rn=m('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function ct(i,t){ht(t,!0);const n=Ce(),a=n.add_entry(t.run);Rt(()=>{a.run=t.run});const r=L(()=>a),c=L(()=>{let{selected:b,pending:y,error_message:P}=o(r);return[b,y,P]}),u=L(()=>o(c)[0]),C=L(()=>o(c)[1]),T=L(()=>o(c)[2]);var k=Rn();k.__click=()=>{setTimeout(()=>n.activate(a))};var x=d(k),h=d(x),g=d(h);H(g,()=>typeof t.icon=="string",b=>{var y=At();j(()=>mt(y,t.icon)),s(b,y)},b=>{var y=rt(),P=z(y);H(P,()=>t.icon,S=>{var N=rt(),O=z(N);_t(O,()=>t.icon),s(S,N)},null,!0),s(b,y)}),l(h);var v=e(e(h,!0)),$=d(v);_t($,()=>t.children),l(v);var f=e(e(v,!0));H(f,()=>o(C),b=>{un(b,{})},b=>{var y=rt(),P=z(y);H(P,()=>o(T),S=>{var N=Mn();s(S,N)},null,!0),s(b,y)}),l(x),l(k),j(()=>{ce(k,"title",o(T)?`Error: ${o(T)}`:void 0),bt(k,"selected",o(u))}),lt("mouseenter",k,b=>{zt(b),n.select(a)},!1),s(i,k),pt()}be(["click"]);function je(i,t){ct(i,{get run(){return t.run},icon:a=>{E();var r=At();j(()=>mt(r,t.icon)),s(a,r)},children:(a,r)=>{E();var c=At();j(()=>mt(c,t.content)),s(a,c)},$$slots:{default:!0}})}var qn=m('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Ln=m('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Hn=m('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Un=m("<!> <!> <!>",1);function re(i,t){ht(t,!0);const n=(p,_=Ie)=>{Ye(p,Pe(_))},a=(p,_=Ie)=>{je(p,Pe(_))},r=ot(t,"contextmenu",11,()=>new we),c=ot(t,"longpress_move_tolerance",3,21),u=ot(t,"longpress_duration",3,633),C=ot(t,"bypass_with_tap_then_longpress",3,!0),T=ot(t,"tap_then_longpress_duration",3,660),k=ot(t,"tap_then_longpress_move_tolerance",3,7),x=ot(t,"open_offset_x",11,()=>-2),h=ot(t,"open_offset_y",11,()=>-2),g=ot(t,"scoped",3,!1);On(r());let v=A(void 0);const $=L(r),f=L(()=>{let{layout:p,initial_layout:_}=o($);return[p,_]}),b=L(()=>o(f)[0]),y=L(()=>o(f)[1]),P=L(()=>o(b)===o(y));let S=A(void 0),N=A(void 0);Rt(()=>{!o(P)&&o(S)!==void 0&&(o(b).width=o(S))}),Rt(()=>{!o(P)&&o(N)!==void 0&&(o(b).height=o(N))});const O=Xe();Rt(()=>{if(o(v)){const p=o(v).getBoundingClientRect();O.width=p.width,O.height=p.height}});const W=L(()=>r().x+Math.min(0,o(b).width-(r().x+O.width))),K=L(()=>r().y+Math.min(0,o(b).height-(r().y+O.height)));let G=A(void 0),B=A(void 0),Q=A(void 0),D=A(void 0),U=A(void 0),X=A(void 0);const q=()=>{o(U)&&w(U,!1),o(D)!=null&&(clearTimeout(o(D)),w(D,null))},J=p=>{var F;if(o(X)){w(X,!1);return}if(o(U)){q(),zt(p);return}const{target:_}=p;p.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||(F=o(v))!=null&&F.contains(_)||he(_)||Se(_)||De(_,p.clientX+x(),p.clientY+h(),r())&&(zt(p),q())},Z=p=>{o(U)&&w(U,!1);const{touches:_,target:F}=p;if(r().opened||_.length!==1||p.shiftKey||!(F instanceof HTMLElement||F instanceof SVGElement)||he(F)||Se(F))return;const{clientX:et,clientY:gt}=_[0];if(C()){if(o(Q)!=null&&performance.now()-o(Q)<T()&&Math.hypot(et-o(G),gt-o(B))<k()){w(X,!0),w(Q,null);return}w(Q,R(performance.now()))}w(G,R(et)),w(B,R(gt)),o(D)!=null&&q(),w(D,R(setTimeout(()=>{w(U,!0),De(F,o(G)+x(),o(B)+h(),r())},u())))},st=p=>{if(o(D)==null)return;const{touches:_}=p;if(_.length!==1)return;const{clientX:F,clientY:et}=_[0];Math.hypot(F-o(G),et-o(B))>c()&&(r().opened&&r().close(),q())},tt=p=>{o(D)!=null&&(o(U)&&zt(p),q())},at=p=>{o(v)&&!o(v).contains(p.target)&&r().close()},V=new Map([["Escape",()=>r().close()],["ArrowLeft",()=>r().collapse_selected()],["ArrowRight",()=>r().expand_selected()],["ArrowDown",()=>r().select_next()],["PageDown",()=>r().select_next()],["ArrowUp",()=>r().select_previous()],["PageUp",()=>r().select_previous()],["Home",()=>r().select_first()],["End",()=>r().select_last()],[" ",()=>r().activate_selected()],["Enter",()=>r().activate_selected()]]),ft=p=>{const _=V.get(p.key);!_||he(p.target)||(zt(p),_())};var yt=Un();lt("contextmenu",St,function(...p){const _=g()?void 0:J;return _==null?void 0:_.apply(this,p)},!0,!1),lt("touchstart",St,function(...p){const _=g()?void 0:Z;return _==null?void 0:_.apply(this,p)},!0,!0),lt("touchmove",St,function(...p){const _=g()?void 0:st;return _==null?void 0:_.apply(this,p)},!0,!0),lt("touchend",St,function(...p){const _=g()?void 0:tt;return _==null?void 0:_.apply(this,p)},!0,!1),lt("touchcancel",St,function(...p){const _=g()?void 0:tt;return _==null?void 0:_.apply(this,p)},!0,!1),lt("mousedown",St,function(...p){const _=r().opened?at:void 0;return _==null?void 0:_.apply(this,p)},!0,!0),lt("keydown",St,function(...p){const _=r().opened?ft:void 0;return _==null?void 0:_.apply(this,p)},!0,!1);var wt=z(yt);H(wt,g,p=>{var _=qn(),F=d(_);_t(F,()=>t.children),l(_),lt("contextmenu",_,J,!0,!1),lt("touchstart",_,Z,!0,!0),lt("touchmove",_,st,!0,!0),lt("touchend",_,tt,!0,!1),lt("touchcancel",_,tt,!0,!1),s(p,_)},p=>{var _=rt(),F=z(_);_t(F,()=>t.children),s(p,_)});var ut=e(e(wt,!0));H(ut,()=>!o(P),p=>{var _=Ln();Ne(_,"clientHeight",F=>w(N,F)),Ne(_,"clientWidth",F=>w(S,F)),s(p,_)});var Tt=e(e(ut,!0));H(Tt,()=>r().opened,p=>{var _=Hn();ye(_,F=>w(v,R(F)),()=>o(v)),qt(_,76,()=>r().params,(F,et)=>M(F),(F,et,gt)=>{var xt=rt(),vt=z(xt);H(vt,()=>typeof M(et)=="function",It=>{var it=rt(),$t=z(it);_t($t,()=>M(et)),s(It,it)},It=>{var it=rt(),$t=z(it);H($t,()=>M(et).snippet==="link",Et=>{n(Et,()=>M(et).props)},Et=>{var nt=rt(),Dt=z(nt);H(Dt,()=>M(et).snippet==="text",_e=>{a(_e,()=>M(et).props)},null,!0),s(Et,nt)},!0),s(It,it)}),s(F,xt)}),l(_),j(()=>ae(_,"transform",`translate3d(${o(W)??""}px, ${o(K)??""}px, 0)`)),s(p,_)}),s(i,yt),pt()}var Wn=m('<span class="display_contents"><!></span>');function Ct(i,t){ht(t,!0);var n=Wn(),a=d(n);_t(a,()=>t.children),l(n),hn(n,(r,c)=>Pn(r,c),()=>t.entries),s(i,n),pt()}var Vn=m('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=m('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ke(i,t){ht(t,!0);const n=Ce(),a=n.add_submenu(),{layout:r}=n,c=L(()=>a.selected);let u=A(void 0);const C=Nn(),T=Xe();let k=A(0),x=A(0);Rt(()=>{o(u)&&h(o(u),r,C)});const h=(N,O,W)=>{const{x:K,y:G,width:B,height:Q}=N.getBoundingClientRect();T.width=B,T.height=Q;const D=K-o(k),U=G-o(x),X=D+B+W.width-O.width;if(X<=0)w(k,R(W.width));else{const q=B-D;q<=0?w(k,-B):q>X?w(k,W.width-X):w(k,q-B)}w(x,R(Math.min(0,O.height-(U+Q))))};var g=Bn(),v=d(g),$=d(v),f=d($),b=d(f);H(b,()=>t.icon,N=>{var O=rt(),W=z(O);_t(W,()=>t.icon),s(N,O)}),l(f);var y=e(e(f,!0)),P=d(y);_t(P,()=>t.children),l(y),l($),e(e($,!0)),l(v);var S=e(e(v,!0));H(S,()=>o(c),N=>{var O=Vn();ye(O,K=>w(u,R(K)),()=>o(u));var W=d(O);_t(W,()=>t.menu),l(O),j(()=>{ae(O,"transform",`translate3d(${o(k)??""}px, ${o(x)??""}px, 0)`),ae(O,"max-height",`${r.height??""}px`)}),s(N,O)}),l(g),j(()=>{ae(g,"--contextmenu_depth",a.depth),ce(v,"aria-expanded",o(c)),bt(v,"selected",o(c))}),lt("mouseenter",v,N=>{zt(N),setTimeout(()=>n.select(a))},!1),s(i,g),pt()}var Xn=m("🏠",1),Yn=m("🌄",1),jn=m("go home",1),Kn=m("go adventure",1),Gn=m("🌄",1),Jn=m("🏠",1),Qn=m("do adventure",1),Zn=m("be home",1),to=m("<!> <!>",1);function le(i,t){ht(t,!0);const n=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺");ke(i,{icon:u=>{E();var C=At();j(()=>mt(C,a())),s(u,C)},menu:u=>{var C=to(),T=z(C);ct(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:h=>{var g=rt(),v=z(g);H(v,()=>t.position==="adventure",$=>{var f=Xn();s($,f)},$=>{var f=Yn();s($,f)}),s(h,g)},children:(h,g)=>{var v=rt(),$=z(v);H($,()=>t.position==="adventure",f=>{var b=jn();s(f,b)},f=>{var b=Kn();s(f,b)}),s(h,v)},$$slots:{default:!0}});var k=e(e(T,!0));ct(k,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:h=>{var g=rt(),v=z(g);H(v,()=>t.position==="adventure",$=>{var f=Gn();s($,f)},$=>{var f=Jn();s($,f)}),s(h,g)},children:(h,g)=>{var v=rt(),$=z(v);H($,()=>t.position==="adventure",f=>{var b=Qn();s(f,b)},f=>{var b=Zn();s(f,b)}),s(h,v)},$$slots:{default:!0}}),s(u,C)},children:(u,C)=>{E();var T=At();j(()=>mt(T,n())),s(u,T)},$$slots:{default:!0}}),pt()}var eo=m("Source code",1),no=m("?",1),oo=m("About",1),ro=m("<!> <!>",1);function so(i,t){var n=ro(),a=z(n);Ye(a,{href:"https://github.com/ryanatkn/fuz",icon:u=>{_n(u,{size:"var(--icon_size_xs)"})},children:(u,C)=>{E();var T=eo();s(u,T)},$$slots:{default:!0}});var r=e(e(a,!0));ct(r,{get run(){return t.toggle_about_dialog},icon:u=>{E();var C=no();s(u,C)},children:(u,C)=>{E();var T=oo();s(u,T)},$$slots:{default:!0}}),s(i,n)}const Ke=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const n=i[0];return n.icon+n.name};var ao=m("🏠",1),io=m("🐈‍⬛",1),co=m("call",1),lo=m("🏠",1),uo=m("be",1),_o=m("🦋",1),mo=m("leave",1),vo=m("<!> <!>",1),ho=m("<!> <!> <!>",1),po=m("home",1);function fo(i,t){ht(t,!0);const n=L(()=>Ke(t.adventure_cats));ke(i,{icon:c=>{E();var u=ao();s(c,u)},menu:c=>{var u=ho(),C=z(u);H(C,()=>o(n),x=>{ct(x,{run:()=>t.act({type:"call_cats_home"}),icon:g=>{E();var v=io();s(g,v)},children:(g,v)=>{E();var $=co();s(g,$)},$$slots:{default:!0}})});var T=e(e(C,!0));qt(T,69,()=>t.home_cats,(x,h)=>M(x).name,(x,h,g)=>{le(x,{get name(){return M(h).name},get icon(){return M(h).icon},get position(){return M(h).position},get act(){return t.act}})});var k=e(e(T,!0));H(k,()=>!o(n),x=>{var h=vo(),g=z(h);ct(g,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:f=>{E();var b=lo();s(f,b)},children:(f,b)=>{E();var y=uo();s(f,y)},$$slots:{default:!0}});var v=e(e(g,!0));ct(v,{run:()=>t.act({type:"call_cats_adventure"}),icon:f=>{E();var b=_o();s(f,b)},children:(f,b)=>{E();var y=mo();s(f,y)},$$slots:{default:!0}}),s(x,h)}),s(c,u)},children:(c,u)=>{E();var C=po();s(c,C)},$$slots:{default:!0}}),pt()}var go=m("🌄",1),xo=m("🦋",1),bo=m("call",1),yo=m("🌄",1),wo=m("do",1),$o=m("🐈‍⬛",1),Co=m("leave",1),ko=m("<!> <!>",1),To=m("<!> <!> <!>",1),Io=m("adventure",1);function Eo(i,t){ht(t,!0);const n=L(()=>Ke(t.home_cats));ke(i,{icon:c=>{E();var u=go();s(c,u)},menu:c=>{var u=To(),C=z(u);H(C,()=>o(n),x=>{ct(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:g=>{E();var v=xo();s(g,v)},children:(g,v)=>{E();var $=bo();s(g,$)},$$slots:{default:!0}})});var T=e(e(C,!0));qt(T,69,()=>t.adventure_cats,(x,h)=>M(x).name,(x,h,g)=>{le(x,{get name(){return M(h).name},get icon(){return M(h).icon},get position(){return M(h).position},get act(){return t.act}})});var k=e(e(T,!0));H(k,()=>!o(n),x=>{var h=ko(),g=z(h);ct(g,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:f=>{E();var b=yo();s(f,b)},children:(f,b)=>{E();var y=wo();s(f,y)},$$slots:{default:!0}});var v=e(e(g,!0));ct(v,{run:()=>t.act({type:"call_cats_home"}),icon:f=>{E();var b=$o();s(f,b)},children:(f,b)=>{E();var y=Co();s(f,y)},$$slots:{default:!0}}),s(x,h)}),s(c,u)},children:(c,u)=>{E();var C=Io();s(c,C)},$$slots:{default:!0}}),pt()}var Po=m('<span class="icon svelte-u0xdy"> </span>'),So=m('<span class="name svelte-u0xdy"><!> </span>'),Ao=m('<span class="cat svelte-u0xdy"><!><!></span>');function Re(i,t){ht(t,!0);const n=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺"),r=ot(t,"show_name",3,!0),c=ot(t,"show_icon",3,!0);var u=Ao(),C=d(u);H(C,c,k=>{var x=Po(),h=d(x);l(x),j(()=>mt(h,a())),s(k,x)});var T=e(C);H(T,r,k=>{var x=So(),h=d(x);H(h,()=>t.children,v=>{var $=rt(),f=z($);_t(f,()=>t.children),s(v,$)});var g=e(h,!0);l(x),j(()=>mt(g,n())),s(k,x)}),l(u),j(()=>bt(u,"has-icon",c())),s(i,u),pt()}const Oo=`<script lang="ts">
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
`;var zo=m("<!> <!>",1),No=m('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Fo=m('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Do=m('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Mo=m('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=m("View example source",1),qo=m("<section><!> <!></section> <section><!></section>",1),Lo=m("<!> <!>",1),Ho=m('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Uo=m("<!> <!>",1);function Wo(i,t){ht(t,!0);const n="Alyssa",a="Ben",r="home";let c=A(r),u=A(r);const C=L(()=>o(c)===o(u)?"😺":"😾"),T=L(()=>o(c)===o(u)?"😸":"😿"),k=L(()=>({name:n,icon:o(C),position:o(c)})),x=L(()=>({name:a,icon:o(T),position:o(u)}));let h=A(!1);const g=(D,U)=>{const X=[],q=[];for(const J of D){const Z=J.position==="home"?X:q;U?Z.unshift(J):Z.push(J)}return{home_cats:X,adventure_cats:q}},v=L(()=>g([o(k),o(x)],o(h))),$=L(()=>{let{home_cats:D,adventure_cats:U}=o(v);return[D,U]}),f=L(()=>o($)[0]),b=L(()=>o($)[1]),y=L(()=>o(c)!==r||o(u)!==r),P=()=>{w(c,r),w(u,r)};let S=A(!1);const N=()=>{w(S,!o(S))},O=D=>{switch(D.type){case"call_cats_adventure":{w(c,"adventure"),w(u,"adventure");break}case"call_cats_home":{w(c,"home"),w(u,"home");break}case"cat_go_adventure":{D.name===n?w(c,"adventure"):D.name===a&&w(u,"adventure");break}case"cat_go_home":{D.name===n?w(c,"home"):D.name===a&&w(u,"home");break}case"cat_be_or_do":{w(h,!o(h));break}}},[W,K]=on({fallback:(D,U)=>{const X=window.getComputedStyle(D),q=X.transform==="none"?"":X.transform;return{duration:1500,easing:$n,css:J=>`
					transform: ${q} scale(${J});
					opacity: ${J}
				`}}});var G=Uo(),B=z(G);re(B,{scoped:!0,children:(D,U)=>{var X=Lo(),q=z(X);Ot(q,{text:"Full example",slug:"full-example"});var J=e(e(q,!0));Ct(J,{entries:st=>{var tt=zo(),at=z(tt);H(at,()=>o(y),ft=>{je(ft,{run:P,content:"Reset",icon:"↻"})});var V=e(e(at,!0));so(V,{toggle_about_dialog:N}),s(st,tt)},children:(st,tt)=>{var at=qo(),V=z(at),ft=d(V);Ct(ft,{entries:p=>{fo(p,{act:O,get home_cats(){return o(f)},get adventure_cats(){return o(b)}})},children:(p,_)=>{var F=Fo(),et=d(F),gt=e(e(et,!0));qt(gt,95,()=>o(f),(xt,vt)=>M(M(xt)).name,(xt,vt,It)=>{let it=()=>M(M(vt)).name,$t=()=>M(M(vt)).icon,Et=()=>M(M(vt)).position;var nt=No();Mt(1,nt,()=>K,()=>({key:it()})),Mt(2,nt,()=>W,()=>({key:it()})),Ee(nt,()=>Fe,null);var Dt=d(nt);Ct(Dt,{entries:Pt=>{le(Pt,{act:O,get name(){return it()},get icon(){return $t()},get position(){return Et()}})},children:(Pt,Ge)=>{Re(Pt,{get name(){return it()},get icon(){return $t()}})},$$slots:{default:!0}}),l(nt),s(xt,nt)}),l(gt),l(F),s(p,F)},$$slots:{default:!0}});var yt=e(e(ft,!0));Ct(yt,{entries:p=>{Eo(p,{act:O,get home_cats(){return o(f)},get adventure_cats(){return o(b)}})},children:(p,_)=>{var F=Mo(),et=d(F),gt=e(e(et,!0));qt(gt,95,()=>o(b),(xt,vt)=>M(M(xt)).name,(xt,vt,It)=>{let it=()=>M(M(vt)).name,$t=()=>M(M(vt)).icon,Et=()=>M(M(vt)).position;var nt=Do();Mt(1,nt,()=>K,()=>({key:it()})),Mt(2,nt,()=>W,()=>({key:it()})),Ee(nt,()=>Fe,null);var Dt=d(nt);Ct(Dt,{entries:Pt=>{le(Pt,{act:O,get name(){return it()},get icon(){return $t()},get position(){return Et()}})},children:(Pt,Ge)=>{Re(Pt,{get name(){return it()},get icon(){return $t()}})},$$slots:{default:!0}}),l(nt),s(xt,nt)}),l(gt),l(F),s(p,F)},$$slots:{default:!0}}),l(V);var wt=e(e(V,!0)),ut=d(wt);dn(ut,{summary:p=>{E();var _=Ro();s(p,_)},children:(p,_)=>{Lt(p,{content:Oo})},$$slots:{default:!0}}),l(wt),s(st,at)},$$slots:{default:!0}}),s(D,X)},$$slots:{default:!0}});var Q=e(e(B,!0));H(Q,()=>o(S),D=>{ln(D,{onclose:()=>w(S,!1),children:(U,X)=>{var q=Ho(),J=d(q),Z=e(e(J,!0)),st=e(e(Z,!0)),tt=e(d(st));e(tt),l(st);var at=e(e(st,!0));e(d(at)),l(at);var V=e(e(at,!0)),ft=d(V),yt=e(e(ft,!0));mn(yt,{});var wt=e(e(yt,!0)),ut=e(e(wt,!0));vn(ut,{}),l(V),l(q),s(U,q)},$$slots:{default:!0}})}),s(i,G),pt()}var Vo=m("Hello world",1),Bo=m("🌞",1),Xo=m("Hello with an optional icon snippet",1),Yo=m("Hello with an optional icon string",1),jo=m("<!> <!> <!>",1),Ko=m(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Go=m("<!> <!>",1);function Jo(i){let t=A(!1),n=A(!1),a=A(!1);var r=Go(),c=z(r);Ot(c,{text:"Basic usage",slug:"basic-usage"});var u=e(e(c,!0));re(u,{scoped:!0,children:(C,T)=>{Ct(C,{entries:x=>{var h=jo(),g=z(h);ct(g,{run:()=>w(t,!o(t)),children:(f,b)=>{E();var y=Vo();s(f,y)},$$slots:{default:!0}});var v=e(e(g,!0));ct(v,{run:()=>w(n,!o(n)),icon:b=>{E();var y=Bo();s(b,y)},children:(b,y)=>{E();var P=Xo();s(b,P)},$$slots:{default:!0}});var $=e(e(v,!0));ct($,{run:()=>w(a,!o(a)),icon:"🌚",children:(f,b)=>{E();var y=Yo();s(f,y)},$$slots:{default:!0}}),s(x,h)},children:(x,h)=>{var g=Ko(),v=d(g),$=e(e(v,!0)),f=L(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(n)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(a)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Lt($,{get content(){return o(f)}});var b=e(e($,!0)),y=d(b),P=d(y);l(y),l(b);var S=e(e(b,!0)),N=d(S),O=d(N);l(N),l(S);var W=e(e(S,!0)),K=d(W),G=d(K);l(K),l(W);var B=e(e(W,!0));e(d(B)),E(),l(B),l(g),j(()=>{bt(y,"color_g_5",o(t)),mt(P,`greeted = ${o(t)??""}`),bt(N,"color_e_5",o(n)),mt(O,`greeted_icon_snippet = ${o(n)??""}`),bt(K,"color_d_5",o(a)),mt(G,`greeted_icon_string = ${o(a)??""}`)}),s(x,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),s(i,r)}var Qo=m("Toggle",1),Zo=m("<div>toggled</div>"),tr=m(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),er=m("<!> <!>",1);function nr(i){const t=new we;let n=A(!1);re(i,{contextmenu:t,scoped:!0,children:(a,r)=>{var c=er(),u=z(c);Ot(u,{text:"Custom instance",slug:"custom-instance"});var C=e(e(u,!0));Ct(C,{entries:k=>{ct(k,{run:()=>w(n,!o(n)),children:(x,h)=>{E();var g=Qo();s(x,g)},$$slots:{default:!0}})},children:(k,x)=>{var h=tr(),g=d(h);Lt(g,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var v=e(e(g,!0));Lt(v,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=e(e(v,!0)),f=e(d($));e(e(f,!0)),E(),l($);var b=e(e($,!0)),y=d(b);H(y,()=>o(n),P=>{var S=Zo();Mt(3,S,()=>rn),s(P,S)}),l(b),l(h),s(k,h)},$$slots:{default:!0}}),s(a,c)},$$slots:{default:!0}})}var or=m("Toggle something",1),rr=m(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),sr=m("<div><!></div> <!>",1);function ar(i){const t=new we;let n=A(!1),a;const r=()=>{const x=window.getSelection();if(!x)return;const h=document.createRange();h.selectNodeContents(a),x.removeAllRanges(),x.addRange(h)};let c=A("");const u="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",C=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,T=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,k=L(()=>o(c)===u||o(c)===C||o(c)===T);re(i,{contextmenu:t,scoped:!0,children:(x,h)=>{var g=sr(),v=z(g),$=d(v);Ot($,{text:"Select text",slug:"select-text"}),l(v);var f=e(e(v,!0));Ct(f,{entries:y=>{ct(y,{run:()=>w(n,!o(n)),children:(P,S)=>{E();var N=or();s(P,N)},$$slots:{default:!0}})},children:(y,P)=>{var S=rr(),N=d(S);ye(N,V=>a=V,()=>a);var O=d(N);e(d(O)),E(),l(O);var W=e(e(O,!0)),K=e(d(W));K.__click=r,E(),l(W),l(N);var G=e(e(N,!0)),B=d(G);sn(B),l(G);var Q=e(e(G,!0)),D=e(d(Q));e(e(D,!0)),E(),l(Q);var U=e(e(Q,!0)),X=d(U);an(X),l(U);var q=e(e(U,!0)),J=d(q);se(J,{path:"Web/HTML/Global_attributes/contenteditable"}),E(),l(q);var Z=e(e(q,!0));d(Z),l(Z);var st=e(e(Z,!0)),tt=e(e(st,!0));d(tt),l(tt);var at=e(e(tt,!0));l(S),j(()=>{bt(S,"color_g_5",o(k)),bt(K,"color_a",o(n)),bt(Q,"color_g_5",o(k))}),ze(B,()=>o(c),V=>w(c,V)),ze(X,()=>o(c),V=>w(c,V)),Oe("innerText",st,()=>o(c),V=>w(c,V)),Oe("innerText",at,()=>o(c),V=>w(c,V)),s(y,S)},$$slots:{default:!0}}),j(()=>bt(v,"color_d_5",o(k))),s(x,g)},$$slots:{default:!0}})}be(["click"]);var ir=m(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function cr(i){re(i,{scoped:!0,children:(t,n)=>{var a=ir(),r=z(a);Ot(r,{text:"Default behaviors",slug:"default-behaviors"});var c=e(e(r,!0)),u=d(c);Lt(u,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`});var C=e(e(u,!0)),T=e(d(C));e(e(T,!0)),E(),l(C);var k=e(e(C,!0));e(e(k,!0)),l(c),s(t,a)},$$slots:{default:!0}})}var lr=m("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Mr(i,t){ht(t,!0);const a=nn("Contextmenu");en(i,{tome:a,children:(r,c)=>{var u=lr(),C=z(u),T=d(C),k=d(T);e(d(k)),E(),l(k),l(T);var x=e(e(T,!0));d(x),l(x),l(C);var h=e(e(C,!0)),g=d(h);Jo(g),l(h);var v=e(e(h,!0)),$=d(v);cr($),l(v);var f=e(e(v,!0)),b=d(f);nr(b),l(f);var y=e(e(f,!0)),P=d(y);ar(P),l(y);var S=e(e(y,!0)),N=d(S);Wo(N,{}),l(S);var O=e(e(S,!0)),W=d(O);yn(W),l(O),s(r,u)},$$slots:{default:!0}}),pt()}export{Mr as component};
