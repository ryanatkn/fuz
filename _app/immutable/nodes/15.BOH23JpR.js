var Je=Object.defineProperty;var Qe=(i,t,n)=>t in i?Je(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var dt=(i,t,n)=>(Qe(i,typeof t!="symbol"?t+"":t,n),n),me=(i,t,n)=>{if(!t.has(i))throw TypeError("Cannot "+n)};var P=(i,t,n)=>(me(i,t,"read from private field"),n?n.call(i):t.get(i)),Y=(i,t,n)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,n)},ve=(i,t,n,s)=>(me(i,t,"write to private field"),s?s.call(i,n):t.set(i,n),n);var Te=(i,t,n)=>(me(i,t,"access private method"),n);import{f as z,c as u,s as e,a,t as d,d as S,r as c,b as ot,J as At,$ as St}from"../chunks/disclose-version.D-YpP91c.js";import{i as qe,u as Le,r as Ze,a4 as tn,C as A,g as o,n as b,s as ge,f as xe,p as ht,t as J,a as pt,d as R,O as Rt,U as q,V as Ie}from"../chunks/runtime.CLWtUI7-.js";import{T as en}from"../chunks/Tome_Detail.CJt4Zom6.js";import{g as nn}from"../chunks/tome.BEaQ-Zqd.js";import{M as se}from"../chunks/Mdn_Link.b83BbEU4.js";import{T as Ot}from"../chunks/Tome_Subheading.ZU1vKFHw.js";import{i as L}from"../chunks/if.t2Adprt1.js";import{e as qt}from"../chunks/each.BqXyQR24.js";import{t as Mt,a as Ee,c as on,s as rn}from"../chunks/index.C1SSbBAO.js";import{C as Lt}from"../chunks/Code.MOrgNCcM.js";import{e as be,f as ct}from"../chunks/svelte-head.BiNYCvkA.js";import{s as _t,c as ce,r as sn,e as an}from"../chunks/attributes.w-7YtrUH.js";import{s as ae}from"../chunks/style.iv2mhl8q.js";import{p as M}from"../chunks/proxy.CnlAnLU8.js";import{b as ye}from"../chunks/this.CdNU6mSA.js";import{p as nt,s as Pe}from"../chunks/props.BqHnzyJo.js";import{a as cn,s as zt,b as he,c as Se,D as ln}from"../chunks/Dialog.CgraS0ub.js";import{o as Ae}from"../chunks/index-client.DREpZvMv.js";import{s as mt}from"../chunks/render.DYN3TrTz.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as bt}from"../chunks/class.iiaQ2wDY.js";import{P as un}from"../chunks/Pending_Animation.DToeN1qi.js";import{D as dn,b as Oe}from"../chunks/Details.et65Xyzm.js";import{G as _n}from"../chunks/Github_Logo.BYPtA-np.js";import{C as mn,T as vn}from"../chunks/Theme_Input.CwFU6J_t.js";import{b as ze}from"../chunks/input.Dg7Z5plX.js";function hn(i,t,n){qe(()=>{var s=Le(()=>t(i,n==null?void 0:n())||{});if(n&&(s!=null&&s.update)){var r=!1;Ze(()=>{var _=n();tn(_),r&&s.update(_)}),r=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}var kt,Nt,Ht,ue,He;const de=class de{constructor(t){Y(this,ue);Y(this,kt,new WeakMap);Y(this,Nt,void 0);Y(this,Ht,void 0);ve(this,Ht,t)}observe(t,n){var s=P(this,kt).get(t)||new Set;return s.add(n),P(this,kt).set(t,s),Te(this,ue,He).call(this).observe(t,P(this,Ht)),()=>{var r=P(this,kt).get(t);r.delete(n),r.size===0&&(P(this,kt).delete(t),P(this,Nt).unobserve(t))}}};kt=new WeakMap,Nt=new WeakMap,Ht=new WeakMap,ue=new WeakSet,He=function(){return P(this,Nt)??ve(this,Nt,new ResizeObserver(t=>{for(var n of t){de.entries.set(n.target,n);for(var s of P(this,kt).get(n.target)||[])s(n)}}))},dt(de,"entries",new WeakMap);let fe=de;var pn=new fe({box:"border-box"});function Ne(i,t,n){var s=pn.observe(i,()=>n(i[t]));qe(()=>(Le(()=>n(i[t])),s))}var fn=d('<span class="font_mono">contextmenu</span> event',1),gn=d('<span class="font_mono">navigator.vibrate</span>'),xn=d('<span class="font_mono">navigator.vibrate</span>'),bn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function yn(i){var t=bn(),n=z(t),s=u(n);Ot(s,{text:"Expected behaviors",slug:"expected-behaviors"});var r=e(e(s,!0)),_=e(u(r));e(e(_,!0)),S(),c(r);var l=e(e(r,!0)),k=e(u(l));se(k,{path:"Web/API/Element/contextmenu_event",children:(ut,Tt)=>{var h=fn();z(h),S(),a(ut,h)},$$slots:{default:!0}});var E=e(e(k,!0)),T=e(e(E,!0));se(T,{path:"Web/API/Navigator/vibrate",children:(ut,Tt)=>{var h=gn();a(ut,h)},$$slots:{default:!0}}),S(),c(l);var y=e(e(l,!0)),g=e(u(y));e(e(g,!0)),S(),c(y);var m=e(e(y,!0)),f=e(e(m,!0)),C=u(f),v=e(e(C,!0)),x=e(e(v,!0)),I=e(e(x,!0));e(u(I)),c(I),c(f);var w=e(e(f,!0)),$=e(e(w,!0)),U=u($),N=e(e(U,!0)),O=e(e(N,!0)),W=e(e(O,!0)),G=e(e(W,!0)),K=e(e(G,!0)),Q=e(u(K));se(Q,{path:"Web/API/Navigator/vibrate",children:(ut,Tt)=>{var h=xn();a(ut,h)},$$slots:{default:!0}}),S(),c(K),c($),c(n);var F=e(e(n,!0)),V=u(F);Ot(V,{text:"Motivation",slug:"motivation"});var j=e(e(V,!0)),H=e(e(j,!0)),B=u(H);e(e(B,!0)),c(H);var rt=e(e(H,!0));e(u(rt)),S(),c(rt);var Z=e(e(rt,!0)),it=e(e(Z,!0)),X=e(e(it,!0)),lt=e(e(X,!0)),ft=u(lt),yt=e(e(ft,!0)),wt=e(e(yt,!0));e(e(wt,!0)),c(lt),c(F),a(i,t)}function wn(i){const t=i-1;return t*t*t+1}function $n(i){return--i*i*i*i*i+1}function Fe(i,{from:t,to:n},s={}){const r=getComputedStyle(i),_=r.transform==="none"?"":r.transform,[l,k]=r.transformOrigin.split(" ").map(parseFloat),E=t.left+t.width*l/n.width-(n.left+l),T=t.top+t.height*k/n.height-(n.top+k),{delay:y=0,duration:g=f=>Math.sqrt(f)*120,easing:m=wn}=s;return{delay:y,duration:typeof g=="function"?g(Math.sqrt(E*E+T*T)):g,easing:m,css:(f,C)=>{const v=C*E,x=C*T,I=f+C*t.width/n.width,w=f+C*t.height/n.height;return`transform: ${_} translate(${v}px, ${x}px) scale(${I}, ${w});`}}}var Ut,Wt;class Ue{constructor(){Y(this,Ut,A(0));Y(this,Wt,A(0))}get width(){return o(P(this,Ut))}set width(t){b(P(this,Ut),M(t))}get height(){return o(P(this,Wt))}set height(t){b(P(this,Wt),M(t))}}Ut=new WeakMap,Wt=new WeakMap;var Vt,Ft,Bt,Xt,Yt;class Cn{constructor(t,n){dt(this,"is_menu",!1);dt(this,"menu");Y(this,Vt,A(!1));Y(this,Ft,A());Y(this,Bt,A(!1));Y(this,Xt,A(null));Y(this,Yt,A(null));this.menu=t,P(this,Ft).v=M(n)}get selected(){return o(P(this,Vt))}set selected(t){b(P(this,Vt),M(t))}get run(){return o(P(this,Ft))}set run(t){b(P(this,Ft),M(t))}get pending(){return o(P(this,Bt))}set pending(t){b(P(this,Bt),M(t))}get error_message(){return o(P(this,Xt))}set error_message(t){b(P(this,Xt),M(t))}get promise(){return o(P(this,Yt))}set promise(t){b(P(this,Yt),M(t))}}Vt=new WeakMap,Ft=new WeakMap,Bt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap;var jt,Kt;class kn{constructor(t,n){dt(this,"is_menu",!0);dt(this,"menu");dt(this,"depth");Y(this,jt,A(!1));Y(this,Kt,A(M([])));this.menu=t,this.depth=n}get selected(){return o(P(this,jt))}set selected(t){b(P(this,jt),M(t))}get items(){return o(P(this,Kt))}set items(t){b(P(this,Kt),M(t))}}jt=new WeakMap,Kt=new WeakMap;var Gt;class Tn{constructor(){dt(this,"is_menu",!0);dt(this,"menu",null);dt(this,"depth",1);Y(this,Gt,A(M([])))}get items(){return o(P(this,Gt))}set items(t){b(P(this,Gt),M(t))}}Gt=new WeakMap;var Jt,Qt,Zt,te,ee,ne,oe;class we{constructor(t){dt(this,"layout");dt(this,"initial_layout");Y(this,Jt,A(!1));Y(this,Qt,A(0));Y(this,Zt,A(0));Y(this,te,A(M([])));Y(this,ee,A());Y(this,ne,A(M(new Tn)));Y(this,oe,A(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ue}get opened(){return o(P(this,Jt))}set opened(t){b(P(this,Jt),M(t))}get x(){return o(P(this,Qt))}set x(t){b(P(this,Qt),M(t))}get y(){return o(P(this,Zt))}set y(t){b(P(this,Zt),M(t))}get params(){return o(P(this,te))}set params(t){b(P(this,te),M(t))}get error(){return o(P(this,ee))}set error(t){b(P(this,ee),M(t))}get root_menu(){return o(P(this,ne))}set root_menu(t){b(P(this,ne),M(t))}get selections(){return o(P(this,oe))}set selections(t){b(P(this,oe),M(t))}open(t,n,s){this.selections.length=0,this.opened=!0,this.x=n,this.y=s,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise!==null&&(n.promise=null),n.error_message!==null&&(n.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let n;try{n=t.run()}catch(s){const r=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=r??"unknown error",this.error=r}if(cn(n)){t.pending=!0,t.error_message=null;const s=t.promise=n.then(r=>{if(s===t.promise){if(typeof(r==null?void 0:r.ok)=="boolean")if(r.ok)this.close();else{const _=typeof r.message=="string"?r.message:void 0;t.error_message=_??"unknown error",this.error=_}else this.close();return r}},r=>{if(s!==t.promise)return;const _=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=_??"unknown error",this.error=_}).finally(()=>{s===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const s of this.selections)s.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var n;const{items:t}=((n=this.selections.at(-1))==null?void 0:n.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const n=Me()??this.root_menu,s=new Cn(n,t);return n.items.push(s),Ae(()=>{n.items.length=0}),s}add_submenu(){const t=Me()??this.root_menu,n=new kn(t,t.depth+1);return t.items.push(n),zn(n),Ae(()=>{t.items.length=0}),n}}Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap;const $e="contextmenu",In=`a,[data-${$e}]`,ie=new Map;let En=0;const Pn=(i,t)=>{if(t==null)return;const n=En+++"";return i.dataset[$e]=n,ie.set(n,t),{update:s=>{ie.set(n,s)},destroy:()=>{ie.delete(n)}}},Sn=17,De=(i,t,n,s)=>{const r=An(i);return r!=null&&r.length?(s.open(r,t,n),navigator.vibrate&&navigator.vibrate(Sn),!0):!1},An=i=>{var _;let t=null,n=i,s,r;for(;n=n==null?void 0:n.closest(In);){if(s=n.dataset[$e]){if(t??(t=[]),r=ie.get(s),r===void 0)continue;Array.isArray(r)?(t??(t=[])).push(...r):(t??(t=[])).push(r)}n.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const l=(_=window.getSelection())==null?void 0:_.toString();l&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(l)}})}return t},We=Symbol(),On=i=>ge(We,i),Ce=()=>xe(We),Ve=Symbol(),zn=i=>ge(Ve,i),Me=()=>xe(Ve),Be=Symbol(),Xe=(i=new Ue)=>(ge(Be,i),i),Nn=()=>xe(Be);var Fn=(i,t)=>t.close(),Dn=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ye(i,t){ht(t,!0);const n="🔗",s=nt(t,"icon",3,n),r=Ce(),_=(I,w=location.host)=>{const $=pe(pe(I,"https://"),"http://");return $.startsWith(w+"/")?pe($,w):$},l=R(()=>_(t.href)),k=R(()=>!(o(l)[0]==="."||o(l)[0]==="/"&&o(l)[1]!=="/")),E=R(()=>o(k)?"noreferrer":void 0);var T=Dn(),y=u(T);y.__click=[Fn,r];var g=u(y),m=u(g),f=u(m);L(f,()=>typeof s()=="string",I=>{var w=At();J(()=>mt(w,s())),a(I,w)},I=>{var w=ot(),$=z(w);_t($,s,()=>n),a(I,w)}),c(m);var C=e(e(m,!0)),v=u(C),x=u(v);L(x,()=>t.children,I=>{var w=ot(),$=z(w);_t($,()=>t.children),a(I,w)},I=>{var w=At();J(()=>mt(w,o(l))),a(I,w)}),c(v),c(C),c(g),c(y),c(T),J(()=>{ce(y,"href",t.href),ce(y,"rel",o(E))}),a(i,T),pt()}be(["click"]);var Mn=d("⚠️",1),Rn=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(i,t){ht(t,!0);const n=Ce(),s=n.add_entry(t.run);Rt(()=>{s.run=t.run});const r=R(()=>s),_=R(()=>{let{selected:w,pending:$,error_message:U}=o(r);return[w,$,U]}),l=R(()=>o(_)[0]),k=R(()=>o(_)[1]),E=R(()=>o(_)[2]);var T=Rn(),y=R(()=>()=>{setTimeout(()=>n.activate(s))});T.__click=function(...w){var $;return($=o(y))==null?void 0:$.apply(this,w)};var g=R(()=>w=>{zt(w),n.select(s)}),m=u(T),f=u(m),C=u(f);L(C,()=>typeof t.icon=="string",w=>{var $=At();J(()=>mt($,t.icon)),a(w,$)},w=>{var $=ot(),U=z($);L(U,()=>t.icon,N=>{var O=ot(),W=z(O);_t(W,()=>t.icon),a(N,O)},null,!0),a(w,$)}),c(f);var v=e(e(f,!0)),x=u(v);_t(x,()=>t.children),c(v);var I=e(e(v,!0));L(I,()=>o(k),w=>{un(w,{})},w=>{var $=ot(),U=z($);L(U,()=>o(E),N=>{var O=Mn();a(N,O)},null,!0),a(w,$)}),c(m),c(T),J(()=>{ce(T,"title",o(E)?`Error: ${o(E)}`:void 0),bt(T,"selected",o(l))}),ct("mouseenter",T,function(...w){var $;return($=o(g))==null?void 0:$.apply(this,w)},!1),a(i,T),pt()}be(["click"]);function je(i,t){at(i,{get run(){return t.run},icon:s=>{S();var r=At();J(()=>mt(r,t.icon)),a(s,r)},children:(s,r)=>{S();var _=At();J(()=>mt(_,t.content)),a(s,_)},$$slots:{default:!0}})}var qn=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Ln=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Hn=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Un=d("<!> <!> <!>",1);function re(i,t){ht(t,!0);const n=(h,p=Ie)=>{Ye(h,Pe(p))},s=(h,p=Ie)=>{je(h,Pe(p))},r=nt(t,"contextmenu",11,()=>new we),_=nt(t,"longpress_move_tolerance",3,21),l=nt(t,"longpress_duration",3,633),k=nt(t,"bypass_with_tap_then_longpress",3,!0),E=nt(t,"tap_then_longpress_duration",3,660),T=nt(t,"tap_then_longpress_move_tolerance",3,7),y=nt(t,"open_offset_x",11,()=>-2),g=nt(t,"open_offset_y",11,()=>-2),m=nt(t,"scoped",3,!1);On(r());let f=A(void 0);const C=R(r),v=R(()=>{let{layout:h,initial_layout:p}=o(C);return[h,p]}),x=R(()=>o(v)[0]),I=R(()=>o(v)[1]),w=R(()=>o(x)===o(I));let $=A(void 0),U=A(void 0);Rt(()=>{!o(w)&&o($)!==void 0&&(o(x).width=o($))}),Rt(()=>{!o(w)&&o(U)!==void 0&&(o(x).height=o(U))});const N=Xe();Rt(()=>{if(o(f)){const h=o(f).getBoundingClientRect();N.width=h.width,N.height=h.height}});const O=R(()=>r().x+Math.min(0,o(x).width-(r().x+N.width))),W=R(()=>r().y+Math.min(0,o(x).height-(r().y+N.height)));let G=A(void 0),K=A(void 0),Q=A(void 0),F=A(void 0),V=A(void 0),j=A(void 0);const H=()=>{o(V)&&b(V,!1),o(F)!=null&&(clearTimeout(o(F)),b(F,null))},B=h=>{var D;if(o(j)){b(j,!1);return}if(o(V)){H(),zt(h);return}const{target:p}=h;h.shiftKey||!(p instanceof HTMLElement||p instanceof SVGElement)||(D=o(f))!=null&&D.contains(p)||he(p)||Se(p)||De(p,h.clientX+y(),h.clientY+g(),r())&&(zt(h),H())},rt=h=>{o(V)&&b(V,!1);const{touches:p,target:D}=h;if(r().opened||p.length!==1||h.shiftKey||!(D instanceof HTMLElement||D instanceof SVGElement)||he(D)||Se(D))return;const{clientX:tt,clientY:gt}=p[0];if(k()){if(o(Q)!=null&&performance.now()-o(Q)<E()&&Math.hypot(tt-o(G),gt-o(K))<T()){b(j,!0),b(Q,null);return}b(Q,M(performance.now()))}b(G,M(tt)),b(K,M(gt)),o(F)!=null&&H(),b(F,M(setTimeout(()=>{b(V,!0),De(D,o(G)+y(),o(K)+g(),r())},l())))},Z=h=>{if(o(F)==null)return;const{touches:p}=h;if(p.length!==1)return;const{clientX:D,clientY:tt}=p[0];Math.hypot(D-o(G),tt-o(K))>_()&&(r().opened&&r().close(),H())},it=h=>{o(F)!=null&&(o(V)&&zt(h),H())},X=h=>{o(f)&&!o(f).contains(h.target)&&r().close()},lt=new Map([["Escape",()=>r().close()],["ArrowLeft",()=>r().collapse_selected()],["ArrowRight",()=>r().expand_selected()],["ArrowDown",()=>r().select_next()],["PageDown",()=>r().select_next()],["ArrowUp",()=>r().select_previous()],["PageUp",()=>r().select_previous()],["Home",()=>r().select_first()],["End",()=>r().select_last()],[" ",()=>r().activate_selected()],["Enter",()=>r().activate_selected()]]),ft=h=>{const p=lt.get(h.key);!p||he(h.target)||(zt(h),p())};var yt=Un();ct("contextmenu",St,function(...h){var p;return(p=m()?void 0:B)==null?void 0:p.apply(this,h)},!0,!1),ct("touchstart",St,function(...h){var p;return(p=m()?void 0:rt)==null?void 0:p.apply(this,h)},!0,!0),ct("touchmove",St,function(...h){var p;return(p=m()?void 0:Z)==null?void 0:p.apply(this,h)},!0,!0),ct("touchend",St,function(...h){var p;return(p=m()?void 0:it)==null?void 0:p.apply(this,h)},!0,!1),ct("touchcancel",St,function(...h){var p;return(p=m()?void 0:it)==null?void 0:p.apply(this,h)},!0,!1),ct("mousedown",St,function(...h){var p;return(p=r().opened?X:void 0)==null?void 0:p.apply(this,h)},!0,!0),ct("keydown",St,function(...h){var p;return(p=r().opened?ft:void 0)==null?void 0:p.apply(this,h)},!0,!1);var wt=z(yt);L(wt,m,h=>{var p=qn(),D=u(p);_t(D,()=>t.children),c(p),ct("contextmenu",p,B,!0,!1),ct("touchstart",p,rt,!0,!0),ct("touchmove",p,Z,!0,!0),ct("touchend",p,it,!0,!1),ct("touchcancel",p,it,!0,!1),a(h,p)},h=>{var p=ot(),D=z(p);_t(D,()=>t.children),a(h,p)});var ut=e(e(wt,!0));L(ut,()=>!o(w),h=>{var p=Ln();Ne(p,"clientHeight",D=>b(U,D)),Ne(p,"clientWidth",D=>b($,D)),a(h,p)});var Tt=e(e(ut,!0));L(Tt,()=>r().opened,h=>{var p=Hn();ye(p,D=>b(f,M(D)),()=>o(f)),qt(p,76,()=>r().params,(D,tt)=>q(D),(D,tt,gt)=>{var xt=ot(),vt=z(xt);L(vt,()=>typeof q(tt)=="function",It=>{var st=ot(),$t=z(st);_t($t,()=>q(tt)),a(It,st)},It=>{var st=ot(),$t=z(st);L($t,()=>q(tt).snippet==="link",Et=>{n(Et,()=>q(tt).props)},Et=>{var et=ot(),Dt=z(et);L(Dt,()=>q(tt).snippet==="text",_e=>{s(_e,()=>q(tt).props)},null,!0),a(Et,et)},!0),a(It,st)}),a(D,xt)}),c(p),J(()=>ae(p,"transform",`translate3d(${o(O)??""}px, ${o(W)??""}px, 0)`)),a(h,p)}),a(i,yt),pt()}var Wn=d('<span class="display_contents"><!></span>');function Ct(i,t){ht(t,!0);var n=Wn(),s=u(n);_t(s,()=>t.children),c(n),hn(n,(r,_)=>Pn(r,_),()=>t.entries),a(i,n),pt()}var Vn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ke(i,t){ht(t,!0);const n=Ce(),s=n.add_submenu(),{layout:r}=n,_=R(()=>s.selected);let l=A(void 0);const k=Nn(),E=Xe();let T=A(0),y=A(0);Rt(()=>{o(l)&&g(o(l),r,k)});const g=(N,O,W)=>{const{x:G,y:K,width:Q,height:F}=N.getBoundingClientRect();E.width=Q,E.height=F;const V=G-o(T),j=K-o(y),H=V+Q+W.width-O.width;if(H<=0)b(T,M(W.width));else{const B=Q-V;B<=0?b(T,-Q):B>H?b(T,W.width-H):b(T,B-Q)}b(y,M(Math.min(0,O.height-(j+F))))};var m=Bn(),f=u(m),C=R(()=>N=>{zt(N),setTimeout(()=>n.select(s))}),v=u(f),x=u(v),I=u(x);L(I,()=>t.icon,N=>{var O=ot(),W=z(O);_t(W,()=>t.icon),a(N,O)}),c(x);var w=e(e(x,!0)),$=u(w);_t($,()=>t.children),c(w),c(v),e(e(v,!0)),c(f);var U=e(e(f,!0));L(U,()=>o(_),N=>{var O=Vn();ye(O,G=>b(l,M(G)),()=>o(l));var W=u(O);_t(W,()=>t.menu),c(O),J(()=>{ae(O,"transform",`translate3d(${o(T)??""}px, ${o(y)??""}px, 0)`),ae(O,"max-height",`${r.height??""}px`)}),a(N,O)}),c(m),J(()=>{ae(m,"--contextmenu_depth",s.depth),ce(f,"aria-expanded",o(_)),bt(f,"selected",o(_))}),ct("mouseenter",f,function(...N){var O;return(O=o(C))==null?void 0:O.apply(this,N)},!1),a(i,m),pt()}var Xn=d("🏠",1),Yn=d("🌄",1),jn=d("go home",1),Kn=d("go adventure",1),Gn=d("🌄",1),Jn=d("🏠",1),Qn=d("do adventure",1),Zn=d("be home",1),to=d("<!> <!>",1);function le(i,t){ht(t,!0);const n=nt(t,"name",3,"Cat"),s=nt(t,"icon",3,"😺");ke(i,{icon:l=>{S();var k=At();J(()=>mt(k,s())),a(l,k)},menu:l=>{var k=to(),E=z(k);at(E,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:g=>{var m=ot(),f=z(m);L(f,()=>t.position==="adventure",C=>{var v=Xn();a(C,v)},C=>{var v=Yn();a(C,v)}),a(g,m)},children:(g,m)=>{var f=ot(),C=z(f);L(C,()=>t.position==="adventure",v=>{var x=jn();a(v,x)},v=>{var x=Kn();a(v,x)}),a(g,f)},$$slots:{default:!0}});var T=e(e(E,!0));at(T,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:g=>{var m=ot(),f=z(m);L(f,()=>t.position==="adventure",C=>{var v=Gn();a(C,v)},C=>{var v=Jn();a(C,v)}),a(g,m)},children:(g,m)=>{var f=ot(),C=z(f);L(C,()=>t.position==="adventure",v=>{var x=Qn();a(v,x)},v=>{var x=Zn();a(v,x)}),a(g,f)},$$slots:{default:!0}}),a(l,k)},children:(l,k)=>{S();var E=At();J(()=>mt(E,n())),a(l,E)},$$slots:{default:!0}}),pt()}var eo=d("Source code",1),no=d("?",1),oo=d("About",1),ro=d("<!> <!>",1);function so(i,t){var n=ro(),s=z(n);Ye(s,{href:"https://github.com/ryanatkn/fuz",icon:l=>{_n(l,{size:"var(--icon_size_xs)"})},children:(l,k)=>{S();var E=eo();a(l,E)},$$slots:{default:!0}});var r=e(e(s,!0));at(r,{get run(){return t.toggle_about_dialog},icon:l=>{S();var k=no();a(l,k)},children:(l,k)=>{S();var E=oo();a(l,E)},$$slots:{default:!0}}),a(i,n)}const Ke=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const n=i[0];return n.icon+n.name};var ao=d("🏠",1),io=d("🐈‍⬛",1),co=d("call",1),lo=d("🏠",1),uo=d("be",1),_o=d("🦋",1),mo=d("leave",1),vo=d("<!> <!>",1),ho=d("<!> <!> <!>",1),po=d("home",1);function fo(i,t){ht(t,!0);const n=R(()=>Ke(t.adventure_cats));ke(i,{icon:_=>{S();var l=ao();a(_,l)},menu:_=>{var l=ho(),k=z(l);L(k,()=>o(n),y=>{at(y,{run:()=>t.act({type:"call_cats_home"}),icon:m=>{S();var f=io();a(m,f)},children:(m,f)=>{S();var C=co();a(m,C)},$$slots:{default:!0}})});var E=e(e(k,!0));qt(E,69,()=>t.home_cats,(y,g)=>q(y).name,(y,g,m)=>{le(y,{get name(){return q(g).name},get icon(){return q(g).icon},get position(){return q(g).position},get act(){return t.act}})});var T=e(e(E,!0));L(T,()=>!o(n),y=>{var g=vo(),m=z(g);at(m,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:v=>{S();var x=lo();a(v,x)},children:(v,x)=>{S();var I=uo();a(v,I)},$$slots:{default:!0}});var f=e(e(m,!0));at(f,{run:()=>t.act({type:"call_cats_adventure"}),icon:v=>{S();var x=_o();a(v,x)},children:(v,x)=>{S();var I=mo();a(v,I)},$$slots:{default:!0}}),a(y,g)}),a(_,l)},children:(_,l)=>{S();var k=po();a(_,k)},$$slots:{default:!0}}),pt()}var go=d("🌄",1),xo=d("🦋",1),bo=d("call",1),yo=d("🌄",1),wo=d("do",1),$o=d("🐈‍⬛",1),Co=d("leave",1),ko=d("<!> <!>",1),To=d("<!> <!> <!>",1),Io=d("adventure",1);function Eo(i,t){ht(t,!0);const n=R(()=>Ke(t.home_cats));ke(i,{icon:_=>{S();var l=go();a(_,l)},menu:_=>{var l=To(),k=z(l);L(k,()=>o(n),y=>{at(y,{run:()=>t.act({type:"call_cats_adventure"}),icon:m=>{S();var f=xo();a(m,f)},children:(m,f)=>{S();var C=bo();a(m,C)},$$slots:{default:!0}})});var E=e(e(k,!0));qt(E,69,()=>t.adventure_cats,(y,g)=>q(y).name,(y,g,m)=>{le(y,{get name(){return q(g).name},get icon(){return q(g).icon},get position(){return q(g).position},get act(){return t.act}})});var T=e(e(E,!0));L(T,()=>!o(n),y=>{var g=ko(),m=z(g);at(m,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:v=>{S();var x=yo();a(v,x)},children:(v,x)=>{S();var I=wo();a(v,I)},$$slots:{default:!0}});var f=e(e(m,!0));at(f,{run:()=>t.act({type:"call_cats_home"}),icon:v=>{S();var x=$o();a(v,x)},children:(v,x)=>{S();var I=Co();a(v,I)},$$slots:{default:!0}}),a(y,g)}),a(_,l)},children:(_,l)=>{S();var k=Io();a(_,k)},$$slots:{default:!0}}),pt()}var Po=d('<span class="icon svelte-u0xdy"> </span>'),So=d('<span class="name svelte-u0xdy"><!> </span>'),Ao=d('<span class="cat svelte-u0xdy"><!><!></span>');function Re(i,t){ht(t,!0);const n=nt(t,"name",3,"Cat"),s=nt(t,"icon",3,"😺"),r=nt(t,"show_name",3,!0),_=nt(t,"show_icon",3,!0);var l=Ao(),k=u(l);L(k,_,T=>{var y=Po(),g=u(y);c(y),J(()=>mt(g,s())),a(T,y)});var E=e(k);L(E,r,T=>{var y=So(),g=u(y);L(g,()=>t.children,f=>{var C=ot(),v=z(C);_t(v,()=>t.children),a(f,C)});var m=e(g,!0);c(y),J(()=>mt(m,n())),a(T,y)}),c(l),J(()=>bt(l,"has-icon",_())),a(i,l),pt()}const Oo=`<script lang="ts">
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
`;var zo=d("<!> <!>",1),No=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Fo=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Do=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Mo=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=d("View example source",1),qo=d("<section><!> <!></section> <section><!></section>",1),Lo=d("<!> <!>",1),Ho=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Uo=d("<!> <!>",1);function Wo(i,t){ht(t,!0);const n="Alyssa",s="Ben",r="home";let _=A(r),l=A(r);const k=R(()=>o(_)===o(l)?"😺":"😾"),E=R(()=>o(_)===o(l)?"😸":"😿"),T=R(()=>({name:n,icon:o(k),position:o(_)})),y=R(()=>({name:s,icon:o(E),position:o(l)}));let g=A(!1);const m=(F,V)=>{const j=[],H=[];for(const B of F){const rt=B.position==="home"?j:H;V?rt.unshift(B):rt.push(B)}return{home_cats:j,adventure_cats:H}},f=R(()=>m([o(T),o(y)],o(g))),C=R(()=>{let{home_cats:F,adventure_cats:V}=o(f);return[F,V]}),v=R(()=>o(C)[0]),x=R(()=>o(C)[1]),I=R(()=>o(_)!==r||o(l)!==r),w=()=>{b(_,r),b(l,r)};let $=A(!1);const U=()=>{b($,!o($))},N=F=>{switch(F.type){case"call_cats_adventure":{b(_,"adventure"),b(l,"adventure");break}case"call_cats_home":{b(_,"home"),b(l,"home");break}case"cat_go_adventure":{F.name===n?b(_,"adventure"):F.name===s&&b(l,"adventure");break}case"cat_go_home":{F.name===n?b(_,"home"):F.name===s&&b(l,"home");break}case"cat_be_or_do":{b(g,!o(g));break}}},[O,W]=on({fallback:(F,V)=>{const j=window.getComputedStyle(F),H=j.transform==="none"?"":j.transform;return{duration:1500,easing:$n,css:B=>`
					transform: ${H} scale(${B});
					opacity: ${B}
				`}}});var G=Uo(),K=z(G);re(K,{scoped:!0,children:(F,V)=>{var j=Lo(),H=z(j);Ot(H,{text:"Full example",slug:"full-example"});var B=e(e(H,!0));Ct(B,{entries:Z=>{var it=zo(),X=z(it);L(X,()=>o(I),ft=>{je(ft,{run:w,content:"Reset",icon:"↻"})});var lt=e(e(X,!0));so(lt,{toggle_about_dialog:U}),a(Z,it)},children:(Z,it)=>{var X=qo(),lt=z(X),ft=u(lt);Ct(ft,{entries:h=>{fo(h,{act:N,get home_cats(){return o(v)},get adventure_cats(){return o(x)}})},children:(h,p)=>{var D=Fo(),tt=u(D),gt=e(e(tt,!0));qt(gt,93,()=>o(v),(xt,vt)=>q(q(xt)).name,(xt,vt,It)=>{let st=()=>q(q(vt)).name,$t=()=>q(q(vt)).icon,Et=()=>q(q(vt)).position;var et=No(),Dt=u(et);Ct(Dt,{entries:Pt=>{le(Pt,{act:N,get name(){return st()},get icon(){return $t()},get position(){return Et()}})},children:(Pt,Ge)=>{Re(Pt,{get name(){return st()},get icon(){return $t()}})},$$slots:{default:!0}}),c(et),Mt(1,et,()=>W,()=>({key:st()})),Mt(2,et,()=>O,()=>({key:st()})),Ee(et,()=>Fe,null),a(xt,et)}),c(gt),c(D),a(h,D)},$$slots:{default:!0}});var yt=e(e(ft,!0));Ct(yt,{entries:h=>{Eo(h,{act:N,get home_cats(){return o(v)},get adventure_cats(){return o(x)}})},children:(h,p)=>{var D=Mo(),tt=u(D),gt=e(e(tt,!0));qt(gt,93,()=>o(x),(xt,vt)=>q(q(xt)).name,(xt,vt,It)=>{let st=()=>q(q(vt)).name,$t=()=>q(q(vt)).icon,Et=()=>q(q(vt)).position;var et=Do(),Dt=u(et);Ct(Dt,{entries:Pt=>{le(Pt,{act:N,get name(){return st()},get icon(){return $t()},get position(){return Et()}})},children:(Pt,Ge)=>{Re(Pt,{get name(){return st()},get icon(){return $t()}})},$$slots:{default:!0}}),c(et),Mt(1,et,()=>W,()=>({key:st()})),Mt(2,et,()=>O,()=>({key:st()})),Ee(et,()=>Fe,null),a(xt,et)}),c(gt),c(D),a(h,D)},$$slots:{default:!0}}),c(lt);var wt=e(e(lt,!0)),ut=u(wt);dn(ut,{summary:h=>{S();var p=Ro();a(h,p)},children:(h,p)=>{Lt(h,{content:Oo})},$$slots:{default:!0}}),c(wt),a(Z,X)},$$slots:{default:!0}}),a(F,j)},$$slots:{default:!0}});var Q=e(e(K,!0));L(Q,()=>o($),F=>{ln(F,{onclose:()=>b($,!1),children:(V,j)=>{var H=Ho(),B=u(H),rt=e(e(B,!0)),Z=e(e(rt,!0)),it=e(u(Z));e(it),c(Z);var X=e(e(Z,!0));e(u(X)),c(X);var lt=e(e(X,!0)),ft=u(lt),yt=e(e(ft,!0));mn(yt,{});var wt=e(e(yt,!0)),ut=e(e(wt,!0));vn(ut,{}),c(lt),c(H),a(V,H)},$$slots:{default:!0}})}),a(i,G),pt()}var Vo=d("Hello world",1),Bo=d("🌞",1),Xo=d("Hello with an optional icon snippet",1),Yo=d("Hello with an optional icon string",1),jo=d("<!> <!> <!>",1),Ko=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Go=d("<!> <!>",1);function Jo(i){let t=A(!1),n=A(!1),s=A(!1);var r=Go(),_=z(r);Ot(_,{text:"Basic usage",slug:"basic-usage"});var l=e(e(_,!0));re(l,{scoped:!0,children:(k,E)=>{Ct(k,{entries:y=>{var g=jo(),m=z(g);at(m,{run:()=>b(t,!o(t)),children:(v,x)=>{S();var I=Vo();a(v,I)},$$slots:{default:!0}});var f=e(e(m,!0));at(f,{run:()=>b(n,!o(n)),icon:x=>{S();var I=Bo();a(x,I)},children:(x,I)=>{S();var w=Xo();a(x,w)},$$slots:{default:!0}});var C=e(e(f,!0));at(C,{run:()=>b(s,!o(s)),icon:"🌚",children:(v,x)=>{S();var I=Yo();a(v,I)},$$slots:{default:!0}}),a(y,g)},children:(y,g)=>{var m=Ko(),f=u(m),C=e(e(f,!0)),v=R(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(n)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(s)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Lt(C,{get content(){return o(v)}});var x=e(e(C,!0)),I=u(x),w=u(I);c(I),c(x);var $=e(e(x,!0)),U=u($),N=u(U);c(U),c($);var O=e(e($,!0)),W=u(O),G=u(W);c(W),c(O);var K=e(e(O,!0));e(u(K)),S(),c(K),c(m),J(()=>{bt(I,"color_g_5",o(t)),mt(w,`greeted = ${o(t)??""}`),bt(U,"color_e_5",o(n)),mt(N,`greeted_icon_snippet = ${o(n)??""}`),bt(W,"color_d_5",o(s)),mt(G,`greeted_icon_string = ${o(s)??""}`)}),a(y,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(i,r)}var Qo=d("Toggle",1),Zo=d("<div>toggled</div>"),tr=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),er=d("<!> <!>",1);function nr(i){const t=new we;let n=A(!1);re(i,{contextmenu:t,scoped:!0,children:(s,r)=>{var _=er(),l=z(_);Ot(l,{text:"Custom instance",slug:"custom-instance"});var k=e(e(l,!0));Ct(k,{entries:T=>{at(T,{run:()=>b(n,!o(n)),children:(y,g)=>{S();var m=Qo();a(y,m)},$$slots:{default:!0}})},children:(T,y)=>{var g=tr(),m=u(g);Lt(m,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var f=e(e(m,!0));Lt(f,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var C=e(e(f,!0)),v=e(u(C));e(e(v,!0)),S(),c(C);var x=e(e(C,!0)),I=u(x);L(I,()=>o(n),w=>{var $=Zo();Mt(3,$,()=>rn),a(w,$)}),c(x),c(g),a(T,g)},$$slots:{default:!0}}),a(s,_)},$$slots:{default:!0}})}const or=(i,t)=>{const n=window.getSelection();if(!n||!o(t))return;const s=document.createRange();s.selectNodeContents(o(t)),n.removeAllRanges(),n.addRange(s)};var rr=d("Toggle something",1),sr=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ar=d("<div><!></div> <!>",1);function ir(i){const t=new we;let n=A(!1),s=A(void 0),r=A("");const _="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",l=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,k=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,E=R(()=>o(r)===_||o(r)===l||o(r)===k);re(i,{contextmenu:t,scoped:!0,children:(T,y)=>{var g=ar(),m=z(g),f=u(m);Ot(f,{text:"Select text",slug:"select-text"}),c(m);var C=e(e(m,!0));Ct(C,{entries:x=>{at(x,{run:()=>b(n,!o(n)),children:(I,w)=>{S();var $=rr();a(I,$)},$$slots:{default:!0}})},children:(x,I)=>{var w=sr(),$=u(w);ye($,X=>b(s,M(X)),()=>o(s));var U=u($);e(u(U)),S(),c(U);var N=e(e(U,!0)),O=e(u(N));O.__click=[or,s],S(),c(N),c($);var W=e(e($,!0)),G=u(W);sn(G),c(W);var K=e(e(W,!0)),Q=e(u(K));e(e(Q,!0)),S(),c(K);var F=e(e(K,!0)),V=u(F);an(V),c(F);var j=e(e(F,!0)),H=u(j);se(H,{path:"Web/HTML/Global_attributes/contenteditable"}),S(),c(j);var B=e(e(j,!0));u(B),c(B);var rt=e(e(B,!0)),Z=e(e(rt,!0));u(Z),c(Z);var it=e(e(Z,!0));c(w),J(()=>{bt(w,"color_g_5",o(E)),bt(O,"color_a",o(n)),bt(K,"color_g_5",o(E))}),ze(G,()=>o(r),X=>b(r,X)),ze(V,()=>o(r),X=>b(r,X)),Oe("innerText",rt,()=>o(r),X=>b(r,X)),Oe("innerText",it,()=>o(r),X=>b(r,X)),a(x,w)},$$slots:{default:!0}}),J(()=>bt(m,"color_d_5",o(E))),a(T,g)},$$slots:{default:!0}})}be(["click"]);var cr=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function lr(i){re(i,{scoped:!0,children:(t,n)=>{var s=cr(),r=z(s);Ot(r,{text:"Default behaviors",slug:"default-behaviors"});var _=e(e(r,!0)),l=u(_);Lt(l,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`});var k=e(e(l,!0)),E=e(u(k));e(e(E,!0)),S(),c(k);var T=e(e(k,!0));e(e(T,!0)),c(_),a(t,s)},$$slots:{default:!0}})}var ur=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Rr(i,t){ht(t,!0);const s=nn("Contextmenu");en(i,{tome:s,children:(r,_)=>{var l=ur(),k=z(l),E=u(k),T=u(E);e(u(T)),S(),c(T),c(E);var y=e(e(E,!0));u(y),c(y),c(k);var g=e(e(k,!0)),m=u(g);Jo(m),c(g);var f=e(e(g,!0)),C=u(f);lr(C),c(f);var v=e(e(f,!0)),x=u(v);nr(x),c(v);var I=e(e(v,!0)),w=u(I);ir(w),c(I);var $=e(e(I,!0)),U=u($);Wo(U,{}),c($);var N=e(e($,!0)),O=u(N);yn(O),c(N),a(r,l)},$$slots:{default:!0}}),pt()}export{Rr as component};
