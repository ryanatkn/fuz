var Je=Object.defineProperty;var Qe=(i,t,n)=>t in i?Je(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var dt=(i,t,n)=>(Qe(i,typeof t!="symbol"?t+"":t,n),n),me=(i,t,n)=>{if(!t.has(i))throw TypeError("Cannot "+n)};var E=(i,t,n)=>(me(i,t,"read from private field"),n?n.call(i):t.get(i)),Y=(i,t,n)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,n)},ve=(i,t,n,s)=>(me(i,t,"write to private field"),s?s.call(i,n):t.set(i,n),n);var Te=(i,t,n)=>(me(i,t,"access private method"),n);import{f as O,c as u,s as e,a,t as _,d as P,r as c,b as nt,J as At,$ as St}from"../chunks/disclose-version.D-YpP91c.js";import{i as qe,u as Le,r as Ze,a4 as tn,C as A,g as o,n as w,s as ge,f as xe,p as ht,t as G,a as pt,d as q,O as Rt,U as M,V as Ie}from"../chunks/runtime.CLWtUI7-.js";import{T as en}from"../chunks/Tome_Detail.Cdz_hqF0.js";import{g as nn}from"../chunks/tome.BEaQ-Zqd.js";import{M as se}from"../chunks/Mdn_Link.Cqb0lSK1.js";import{T as Ot}from"../chunks/Tome_Subheading.D9f7yZqs.js";import{i as L}from"../chunks/if.t2Adprt1.js";import{e as qt}from"../chunks/each.BqXyQR24.js";import{t as Mt,a as Ee,c as on,s as rn}from"../chunks/index.C1SSbBAO.js";import{C as Lt}from"../chunks/Code.MOrgNCcM.js";import{e as be,f as it}from"../chunks/svelte-head.BiNYCvkA.js";import{s as _t,c as ce,r as sn,e as an}from"../chunks/attributes.w-7YtrUH.js";import{s as ae}from"../chunks/style.iv2mhl8q.js";import{p as D}from"../chunks/proxy.CnlAnLU8.js";import{b as ye}from"../chunks/this.CdNU6mSA.js";import{p as et,s as Pe}from"../chunks/props.BqHnzyJo.js";import{a as cn,s as zt,b as he,c as Se,D as ln}from"../chunks/Dialog.DnA4jUi4.js";import{o as Ae}from"../chunks/index-client.DREpZvMv.js";import{s as mt}from"../chunks/render.DYN3TrTz.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as bt}from"../chunks/class.iiaQ2wDY.js";import{P as un}from"../chunks/Pending_Animation.DToeN1qi.js";import{D as dn,b as Oe}from"../chunks/Details.et65Xyzm.js";import{G as _n}from"../chunks/Github_Logo.Cq5cYn9G.js";import{C as mn,T as vn}from"../chunks/Theme_Input.BlNkRGzZ.js";import{b as ze}from"../chunks/input.Dg7Z5plX.js";function hn(i,t,n){qe(()=>{var s=Le(()=>t(i,n==null?void 0:n())||{});if(n&&(s!=null&&s.update)){var r=!1;Ze(()=>{var m=n();tn(m),r&&s.update(m)}),r=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}var kt,Nt,Ht,ue,He;const de=class de{constructor(t){Y(this,ue);Y(this,kt,new WeakMap);Y(this,Nt,void 0);Y(this,Ht,void 0);ve(this,Ht,t)}observe(t,n){var s=E(this,kt).get(t)||new Set;return s.add(n),E(this,kt).set(t,s),Te(this,ue,He).call(this).observe(t,E(this,Ht)),()=>{var r=E(this,kt).get(t);r.delete(n),r.size===0&&(E(this,kt).delete(t),E(this,Nt).unobserve(t))}}};kt=new WeakMap,Nt=new WeakMap,Ht=new WeakMap,ue=new WeakSet,He=function(){return E(this,Nt)??ve(this,Nt,new ResizeObserver(t=>{for(var n of t){de.entries.set(n.target,n);for(var s of E(this,kt).get(n.target)||[])s(n)}}))},dt(de,"entries",new WeakMap);let fe=de;var pn=new fe({box:"border-box"});function Ne(i,t,n){var s=pn.observe(i,()=>n(i[t]));qe(()=>(Le(()=>n(i[t])),s))}var fn=_('<span class="font_mono">contextmenu</span> event',1),gn=_('<span class="font_mono">navigator.vibrate</span>'),xn=_('<span class="font_mono">navigator.vibrate</span>'),bn=_(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function yn(i){var t=bn(),n=O(t),s=u(n);Ot(s,{text:"Expected behaviors",slug:"expected-behaviors"});var r=e(e(s,!0)),m=e(u(r));e(e(m,!0)),P(),c(r);var l=e(e(r,!0)),C=e(u(l));se(C,{path:"Web/API/Element/contextmenu_event",children:(ut,Tt)=>{var v=fn();O(v),P(),a(ut,v)},$$slots:{default:!0}});var T=e(e(C,!0)),k=e(e(T,!0));se(k,{path:"Web/API/Navigator/vibrate",children:(ut,Tt)=>{var v=gn();a(ut,v)},$$slots:{default:!0}}),P(),c(l);var b=e(e(l,!0)),h=e(u(b));e(e(h,!0)),P(),c(b);var p=e(e(b,!0)),g=e(e(p,!0)),$=u(g),x=e(e($,!0)),f=e(e(x,!0)),y=e(e(f,!0));e(u(y)),c(y),c(g);var I=e(e(g,!0)),S=e(e(I,!0)),R=u(S),z=e(e(R,!0)),W=e(e(z,!0)),K=e(e(W,!0)),J=e(e(K,!0)),U=e(e(J,!0)),ct=e(u(U));se(ct,{path:"Web/API/Navigator/vibrate",children:(ut,Tt)=>{var v=xn();a(ut,v)},$$slots:{default:!0}}),P(),c(U),c(S),c(n);var N=e(e(n,!0)),V=u(N);Ot(V,{text:"Motivation",slug:"motivation"});var B=e(e(V,!0)),H=e(e(B,!0)),j=u(H);e(e(j,!0)),c(H);var ot=e(e(H,!0));e(u(ot)),P(),c(ot);var Q=e(e(ot,!0)),at=e(e(Q,!0)),X=e(e(at,!0)),lt=e(e(X,!0)),ft=u(lt),yt=e(e(ft,!0)),wt=e(e(yt,!0));e(e(wt,!0)),c(lt),c(N),a(i,t)}function wn(i){const t=i-1;return t*t*t+1}function $n(i){return--i*i*i*i*i+1}function Fe(i,{from:t,to:n},s={}){const r=getComputedStyle(i),m=r.transform==="none"?"":r.transform,[l,C]=r.transformOrigin.split(" ").map(parseFloat),T=t.left+t.width*l/n.width-(n.left+l),k=t.top+t.height*C/n.height-(n.top+C),{delay:b=0,duration:h=g=>Math.sqrt(g)*120,easing:p=wn}=s;return{delay:b,duration:typeof h=="function"?h(Math.sqrt(T*T+k*k)):h,easing:p,css:(g,$)=>{const x=$*T,f=$*k,y=g+$*t.width/n.width,I=g+$*t.height/n.height;return`transform: ${m} translate(${x}px, ${f}px) scale(${y}, ${I});`}}}var Ut,Wt;class Ue{constructor(){Y(this,Ut,A(0));Y(this,Wt,A(0))}get width(){return o(E(this,Ut))}set width(t){w(E(this,Ut),D(t))}get height(){return o(E(this,Wt))}set height(t){w(E(this,Wt),D(t))}}Ut=new WeakMap,Wt=new WeakMap;var Vt,Ft,Bt,Xt,Yt;class Cn{constructor(t,n){dt(this,"is_menu",!1);dt(this,"menu");Y(this,Vt,A(!1));Y(this,Ft,A());Y(this,Bt,A(!1));Y(this,Xt,A(null));Y(this,Yt,A(null));this.menu=t,E(this,Ft).v=D(n)}get selected(){return o(E(this,Vt))}set selected(t){w(E(this,Vt),D(t))}get run(){return o(E(this,Ft))}set run(t){w(E(this,Ft),D(t))}get pending(){return o(E(this,Bt))}set pending(t){w(E(this,Bt),D(t))}get error_message(){return o(E(this,Xt))}set error_message(t){w(E(this,Xt),D(t))}get promise(){return o(E(this,Yt))}set promise(t){w(E(this,Yt),D(t))}}Vt=new WeakMap,Ft=new WeakMap,Bt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap;var jt,Kt;class kn{constructor(t,n){dt(this,"is_menu",!0);dt(this,"menu");dt(this,"depth");Y(this,jt,A(!1));Y(this,Kt,A(D([])));this.menu=t,this.depth=n}get selected(){return o(E(this,jt))}set selected(t){w(E(this,jt),D(t))}get items(){return o(E(this,Kt))}set items(t){w(E(this,Kt),D(t))}}jt=new WeakMap,Kt=new WeakMap;var Gt;class Tn{constructor(){dt(this,"is_menu",!0);dt(this,"menu",null);dt(this,"depth",1);Y(this,Gt,A(D([])))}get items(){return o(E(this,Gt))}set items(t){w(E(this,Gt),D(t))}}Gt=new WeakMap;var Jt,Qt,Zt,te,ee,ne,oe;class we{constructor(t){dt(this,"layout");dt(this,"initial_layout");Y(this,Jt,A(!1));Y(this,Qt,A(0));Y(this,Zt,A(0));Y(this,te,A(D([])));Y(this,ee,A());Y(this,ne,A(D(new Tn)));Y(this,oe,A(D([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ue}get opened(){return o(E(this,Jt))}set opened(t){w(E(this,Jt),D(t))}get x(){return o(E(this,Qt))}set x(t){w(E(this,Qt),D(t))}get y(){return o(E(this,Zt))}set y(t){w(E(this,Zt),D(t))}get params(){return o(E(this,te))}set params(t){w(E(this,te),D(t))}get error(){return o(E(this,ee))}set error(t){w(E(this,ee),D(t))}get root_menu(){return o(E(this,ne))}set root_menu(t){w(E(this,ne),D(t))}get selections(){return o(E(this,oe))}set selections(t){w(E(this,oe),D(t))}open(t,n,s){this.selections.length=0,this.opened=!0,this.x=n,this.y=s,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise!==null&&(n.promise=null),n.error_message!==null&&(n.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let n;try{n=t.run()}catch(s){const r=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=r??"unknown error",this.error=r}if(cn(n)){t.pending=!0,t.error_message=null;const s=t.promise=n.then(r=>{if(s===t.promise){if(typeof(r==null?void 0:r.ok)=="boolean")if(r.ok)this.close();else{const m=typeof r.message=="string"?r.message:void 0;t.error_message=m??"unknown error",this.error=m}else this.close();return r}},r=>{if(s!==t.promise)return;const m=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=m??"unknown error",this.error=m}).finally(()=>{s===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const s of this.selections)s.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var n;const{items:t}=((n=this.selections.at(-1))==null?void 0:n.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const n=Me()??this.root_menu,s=new Cn(n,t);return n.items.push(s),Ae(()=>{n.items.length=0}),s}add_submenu(){const t=Me()??this.root_menu,n=new kn(t,t.depth+1);return t.items.push(n),zn(n),Ae(()=>{t.items.length=0}),n}}Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap;const $e="contextmenu",In=`a,[data-${$e}]`,ie=new Map;let En=0;const Pn=(i,t)=>{if(t==null)return;const n=En+++"";return i.dataset[$e]=n,ie.set(n,t),{update:s=>{ie.set(n,s)},destroy:()=>{ie.delete(n)}}},Sn=17,De=(i,t,n,s)=>{const r=An(i);return r!=null&&r.length?(s.open(r,t,n),navigator.vibrate&&navigator.vibrate(Sn),!0):!1},An=i=>{var m;let t=null,n=i,s,r;for(;n=n==null?void 0:n.closest(In);){if(s=n.dataset[$e]){if(t||(t=[]),r=ie.get(s),r===void 0)continue;Array.isArray(r)?(t??(t=[])).push(...r):(t??(t=[])).push(r)}n.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const l=(m=window.getSelection())==null?void 0:m.toString();l&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(l)}})}return t},We=Symbol(),On=i=>ge(We,i),Ce=()=>xe(We),Ve=Symbol(),zn=i=>ge(Ve,i),Me=()=>xe(Ve),Be=Symbol(),Xe=(i=new Ue)=>(ge(Be,i),i),Nn=()=>xe(Be);var Fn=(i,t)=>t.close(),Dn=_('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ye(i,t){ht(t,!0);const n="🔗",s=et(t,"icon",3,n),r=Ce(),m=(y,I=location.host)=>{const S=pe(pe(y,"https://"),"http://");return S.startsWith(I+"/")?pe(S,I):S},l=q(()=>m(t.href)),C=q(()=>!(o(l)[0]==="."||o(l)[0]==="/"&&o(l)[1]!=="/")),T=q(()=>o(C)?"noreferrer":void 0);var k=Dn(),b=u(k);b.__click=[Fn,r];var h=u(b),p=u(h),g=u(p);L(g,()=>typeof s()=="string",y=>{var I=At();G(()=>mt(I,s())),a(y,I)},y=>{var I=nt(),S=O(I);_t(S,s,()=>n),a(y,I)}),c(p);var $=e(e(p,!0)),x=u($),f=u(x);L(f,()=>t.children,y=>{var I=nt(),S=O(I);_t(S,()=>t.children),a(y,I)},y=>{var I=At();G(()=>mt(I,o(l))),a(y,I)}),c(x),c($),c(h),c(b),c(k),G(()=>{ce(b,"href",t.href),ce(b,"rel",o(T))}),a(i,k),pt()}be(["click"]);var Mn=_("⚠️",1),Rn=_('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function st(i,t){ht(t,!0);const n=Ce(),s=n.add_entry(t.run);Rt(()=>{s.run=t.run});const r=q(()=>s),m=q(()=>{let{selected:f,pending:y,error_message:I}=o(r);return[f,y,I]}),l=q(()=>o(m)[0]),C=q(()=>o(m)[1]),T=q(()=>o(m)[2]);var k=Rn();k.__click=()=>{setTimeout(()=>n.activate(s))};var b=u(k),h=u(b),p=u(h);L(p,()=>typeof t.icon=="string",f=>{var y=At();G(()=>mt(y,t.icon)),a(f,y)},f=>{var y=nt(),I=O(y);L(I,()=>t.icon,S=>{var R=nt(),z=O(R);_t(z,()=>t.icon),a(S,R)},null,!0),a(f,y)}),c(h);var g=e(e(h,!0)),$=u(g);_t($,()=>t.children),c(g);var x=e(e(g,!0));L(x,()=>o(C),f=>{un(f,{})},f=>{var y=nt(),I=O(y);L(I,()=>o(T),S=>{var R=Mn();a(S,R)},null,!0),a(f,y)}),c(b),c(k),G(()=>{ce(k,"title",o(T)?`Error: ${o(T)}`:void 0),bt(k,"selected",o(l))}),it("mouseenter",k,f=>{zt(f),n.select(s)},!1),a(i,k),pt()}be(["click"]);function je(i,t){st(i,{get run(){return t.run},icon:s=>{P();var r=At();G(()=>mt(r,t.icon)),a(s,r)},children:(s,r)=>{P();var m=At();G(()=>mt(m,t.content)),a(s,m)},$$slots:{default:!0}})}var qn=_('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Ln=_('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Hn=_('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Un=_("<!> <!> <!>",1);function re(i,t){ht(t,!0);const n=(v,d=Ie)=>{Ye(v,Pe(d))},s=(v,d=Ie)=>{je(v,Pe(d))},r=et(t,"contextmenu",11,()=>new we),m=et(t,"longpress_move_tolerance",3,21),l=et(t,"longpress_duration",3,633),C=et(t,"bypass_with_tap_then_longpress",3,!0),T=et(t,"tap_then_longpress_duration",3,660),k=et(t,"tap_then_longpress_move_tolerance",3,7),b=et(t,"open_offset_x",11,()=>-2),h=et(t,"open_offset_y",11,()=>-2),p=et(t,"scoped",3,!1);On(r());let g=A(void 0);const $=q(r),x=q(()=>{let{layout:v,initial_layout:d}=o($);return[v,d]}),f=q(()=>o(x)[0]),y=q(()=>o(x)[1]),I=q(()=>o(f)===o(y));let S=A(void 0),R=A(void 0);Rt(()=>{!o(I)&&o(S)!==void 0&&(o(f).width=o(S))}),Rt(()=>{!o(I)&&o(R)!==void 0&&(o(f).height=o(R))});const z=Xe();Rt(()=>{if(o(g)){const v=o(g).getBoundingClientRect();z.width=v.width,z.height=v.height}});const W=q(()=>r().x+Math.min(0,o(f).width-(r().x+z.width))),K=q(()=>r().y+Math.min(0,o(f).height-(r().y+z.height)));let J=A(void 0),U=A(void 0),ct=A(void 0),N=A(void 0),V=A(void 0),B=A(void 0);const H=()=>{o(V)&&w(V,!1),o(N)!=null&&(clearTimeout(o(N)),w(N,null))},j=v=>{var F;if(o(B)){w(B,!1);return}if(o(V)){H(),zt(v);return}const{target:d}=v;v.shiftKey||!(d instanceof HTMLElement||d instanceof SVGElement)||(F=o(g))!=null&&F.contains(d)||he(d)||Se(d)||De(d,v.clientX+b(),v.clientY+h(),r())&&(zt(v),H())},ot=v=>{o(V)&&w(V,!1);const{touches:d,target:F}=v;if(r().opened||d.length!==1||v.shiftKey||!(F instanceof HTMLElement||F instanceof SVGElement)||he(F)||Se(F))return;const{clientX:Z,clientY:gt}=d[0];if(C()){if(o(ct)!=null&&performance.now()-o(ct)<T()&&Math.hypot(Z-o(J),gt-o(U))<k()){w(B,!0),w(ct,null);return}w(ct,D(performance.now()))}w(J,D(Z)),w(U,D(gt)),o(N)!=null&&H(),w(N,D(setTimeout(()=>{w(V,!0),De(F,o(J)+b(),o(U)+h(),r())},l())))},Q=v=>{if(o(N)==null)return;const{touches:d}=v;if(d.length!==1)return;const{clientX:F,clientY:Z}=d[0];Math.hypot(F-o(J),Z-o(U))>m()&&(r().opened&&r().close(),H())},at=v=>{o(N)!=null&&(o(V)&&zt(v),H())},X=v=>{o(g)&&!o(g).contains(v.target)&&r().close()},lt=new Map([["Escape",()=>r().close()],["ArrowLeft",()=>r().collapse_selected()],["ArrowRight",()=>r().expand_selected()],["ArrowDown",()=>r().select_next()],["PageDown",()=>r().select_next()],["ArrowUp",()=>r().select_previous()],["PageUp",()=>r().select_previous()],["Home",()=>r().select_first()],["End",()=>r().select_last()],[" ",()=>r().activate_selected()],["Enter",()=>r().activate_selected()]]),ft=v=>{const d=lt.get(v.key);!d||he(v.target)||(zt(v),d())};var yt=Un();it("contextmenu",St,function(...v){const d=p()?void 0:j;return d==null?void 0:d.apply(this,v)},!0,!1),it("touchstart",St,function(...v){const d=p()?void 0:ot;return d==null?void 0:d.apply(this,v)},!0,!0),it("touchmove",St,function(...v){const d=p()?void 0:Q;return d==null?void 0:d.apply(this,v)},!0,!0),it("touchend",St,function(...v){const d=p()?void 0:at;return d==null?void 0:d.apply(this,v)},!0,!1),it("touchcancel",St,function(...v){const d=p()?void 0:at;return d==null?void 0:d.apply(this,v)},!0,!1),it("mousedown",St,function(...v){const d=r().opened?X:void 0;return d==null?void 0:d.apply(this,v)},!0,!0),it("keydown",St,function(...v){const d=r().opened?ft:void 0;return d==null?void 0:d.apply(this,v)},!0,!1);var wt=O(yt);L(wt,p,v=>{var d=qn(),F=u(d);_t(F,()=>t.children),c(d),it("contextmenu",d,j,!0,!1),it("touchstart",d,ot,!0,!0),it("touchmove",d,Q,!0,!0),it("touchend",d,at,!0,!1),it("touchcancel",d,at,!0,!1),a(v,d)},v=>{var d=nt(),F=O(d);_t(F,()=>t.children),a(v,d)});var ut=e(e(wt,!0));L(ut,()=>!o(I),v=>{var d=Ln();Ne(d,"clientHeight",F=>w(R,F)),Ne(d,"clientWidth",F=>w(S,F)),a(v,d)});var Tt=e(e(ut,!0));L(Tt,()=>r().opened,v=>{var d=Hn();ye(d,F=>w(g,D(F)),()=>o(g)),qt(d,76,()=>r().params,(F,Z)=>M(F),(F,Z,gt)=>{var xt=nt(),vt=O(xt);L(vt,()=>typeof M(Z)=="function",It=>{var rt=nt(),$t=O(rt);_t($t,()=>M(Z)),a(It,rt)},It=>{var rt=nt(),$t=O(rt);L($t,()=>M(Z).snippet==="link",Et=>{n(Et,()=>M(Z).props)},Et=>{var tt=nt(),Dt=O(tt);L(Dt,()=>M(Z).snippet==="text",_e=>{s(_e,()=>M(Z).props)},null,!0),a(Et,tt)},!0),a(It,rt)}),a(F,xt)}),c(d),G(()=>ae(d,"transform",`translate3d(${o(W)??""}px, ${o(K)??""}px, 0)`)),a(v,d)}),a(i,yt),pt()}var Wn=_('<span class="display_contents"><!></span>');function Ct(i,t){ht(t,!0);var n=Wn(),s=u(n);_t(s,()=>t.children),c(n),hn(n,(r,m)=>Pn(r,m),()=>t.entries),a(i,n),pt()}var Vn=_('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=_('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ke(i,t){ht(t,!0);const n=Ce(),s=n.add_submenu(),{layout:r}=n,m=q(()=>s.selected);let l=A(void 0);const C=Nn(),T=Xe();let k=A(0),b=A(0);Rt(()=>{o(l)&&h(o(l),r,C)});const h=(R,z,W)=>{const{x:K,y:J,width:U,height:ct}=R.getBoundingClientRect();T.width=U,T.height=ct;const N=K-o(k),V=J-o(b),B=N+U+W.width-z.width;if(B<=0)w(k,D(W.width));else{const H=U-N;H<=0?w(k,-U):H>B?w(k,W.width-B):w(k,H-U)}w(b,D(Math.min(0,z.height-(V+ct))))};var p=Bn(),g=u(p),$=u(g),x=u($),f=u(x);L(f,()=>t.icon,R=>{var z=nt(),W=O(z);_t(W,()=>t.icon),a(R,z)}),c(x);var y=e(e(x,!0)),I=u(y);_t(I,()=>t.children),c(y),c($),e(e($,!0)),c(g);var S=e(e(g,!0));L(S,()=>o(m),R=>{var z=Vn();ye(z,K=>w(l,D(K)),()=>o(l));var W=u(z);_t(W,()=>t.menu),c(z),G(()=>{ae(z,"transform",`translate3d(${o(k)??""}px, ${o(b)??""}px, 0)`),ae(z,"max-height",`${r.height??""}px`)}),a(R,z)}),c(p),G(()=>{ae(p,"--contextmenu_depth",s.depth),ce(g,"aria-expanded",o(m)),bt(g,"selected",o(m))}),it("mouseenter",g,R=>{zt(R),setTimeout(()=>n.select(s))},!1),a(i,p),pt()}var Xn=_("🏠",1),Yn=_("🌄",1),jn=_("go home",1),Kn=_("go adventure",1),Gn=_("🌄",1),Jn=_("🏠",1),Qn=_("do adventure",1),Zn=_("be home",1),to=_("<!> <!>",1);function le(i,t){ht(t,!0);const n=et(t,"name",3,"Cat"),s=et(t,"icon",3,"😺");ke(i,{icon:l=>{P();var C=At();G(()=>mt(C,s())),a(l,C)},menu:l=>{var C=to(),T=O(C);st(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:h=>{var p=nt(),g=O(p);L(g,()=>t.position==="adventure",$=>{var x=Xn();a($,x)},$=>{var x=Yn();a($,x)}),a(h,p)},children:(h,p)=>{var g=nt(),$=O(g);L($,()=>t.position==="adventure",x=>{var f=jn();a(x,f)},x=>{var f=Kn();a(x,f)}),a(h,g)},$$slots:{default:!0}});var k=e(e(T,!0));st(k,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:h=>{var p=nt(),g=O(p);L(g,()=>t.position==="adventure",$=>{var x=Gn();a($,x)},$=>{var x=Jn();a($,x)}),a(h,p)},children:(h,p)=>{var g=nt(),$=O(g);L($,()=>t.position==="adventure",x=>{var f=Qn();a(x,f)},x=>{var f=Zn();a(x,f)}),a(h,g)},$$slots:{default:!0}}),a(l,C)},children:(l,C)=>{P();var T=At();G(()=>mt(T,n())),a(l,T)},$$slots:{default:!0}}),pt()}var eo=_("Source code",1),no=_("?",1),oo=_("About",1),ro=_("<!> <!>",1);function so(i,t){var n=ro(),s=O(n);Ye(s,{href:"https://github.com/ryanatkn/fuz",icon:l=>{_n(l,{size:"var(--icon_size_xs)"})},children:(l,C)=>{P();var T=eo();a(l,T)},$$slots:{default:!0}});var r=e(e(s,!0));st(r,{get run(){return t.toggle_about_dialog},icon:l=>{P();var C=no();a(l,C)},children:(l,C)=>{P();var T=oo();a(l,T)},$$slots:{default:!0}}),a(i,n)}const Ke=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const n=i[0];return n.icon+n.name};var ao=_("🏠",1),io=_("🐈‍⬛",1),co=_("call",1),lo=_("🏠",1),uo=_("be",1),_o=_("🦋",1),mo=_("leave",1),vo=_("<!> <!>",1),ho=_("<!> <!> <!>",1),po=_("home",1);function fo(i,t){ht(t,!0);const n=q(()=>Ke(t.adventure_cats));ke(i,{icon:m=>{P();var l=ao();a(m,l)},menu:m=>{var l=ho(),C=O(l);L(C,()=>o(n),b=>{st(b,{run:()=>t.act({type:"call_cats_home"}),icon:p=>{P();var g=io();a(p,g)},children:(p,g)=>{P();var $=co();a(p,$)},$$slots:{default:!0}})});var T=e(e(C,!0));qt(T,69,()=>t.home_cats,(b,h)=>M(b).name,(b,h,p)=>{le(b,{get name(){return M(h).name},get icon(){return M(h).icon},get position(){return M(h).position},get act(){return t.act}})});var k=e(e(T,!0));L(k,()=>!o(n),b=>{var h=vo(),p=O(h);st(p,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:x=>{P();var f=lo();a(x,f)},children:(x,f)=>{P();var y=uo();a(x,y)},$$slots:{default:!0}});var g=e(e(p,!0));st(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:x=>{P();var f=_o();a(x,f)},children:(x,f)=>{P();var y=mo();a(x,y)},$$slots:{default:!0}}),a(b,h)}),a(m,l)},children:(m,l)=>{P();var C=po();a(m,C)},$$slots:{default:!0}}),pt()}var go=_("🌄",1),xo=_("🦋",1),bo=_("call",1),yo=_("🌄",1),wo=_("do",1),$o=_("🐈‍⬛",1),Co=_("leave",1),ko=_("<!> <!>",1),To=_("<!> <!> <!>",1),Io=_("adventure",1);function Eo(i,t){ht(t,!0);const n=q(()=>Ke(t.home_cats));ke(i,{icon:m=>{P();var l=go();a(m,l)},menu:m=>{var l=To(),C=O(l);L(C,()=>o(n),b=>{st(b,{run:()=>t.act({type:"call_cats_adventure"}),icon:p=>{P();var g=xo();a(p,g)},children:(p,g)=>{P();var $=bo();a(p,$)},$$slots:{default:!0}})});var T=e(e(C,!0));qt(T,69,()=>t.adventure_cats,(b,h)=>M(b).name,(b,h,p)=>{le(b,{get name(){return M(h).name},get icon(){return M(h).icon},get position(){return M(h).position},get act(){return t.act}})});var k=e(e(T,!0));L(k,()=>!o(n),b=>{var h=ko(),p=O(h);st(p,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:x=>{P();var f=yo();a(x,f)},children:(x,f)=>{P();var y=wo();a(x,y)},$$slots:{default:!0}});var g=e(e(p,!0));st(g,{run:()=>t.act({type:"call_cats_home"}),icon:x=>{P();var f=$o();a(x,f)},children:(x,f)=>{P();var y=Co();a(x,y)},$$slots:{default:!0}}),a(b,h)}),a(m,l)},children:(m,l)=>{P();var C=Io();a(m,C)},$$slots:{default:!0}}),pt()}var Po=_('<span class="icon svelte-u0xdy"> </span>'),So=_('<span class="name svelte-u0xdy"><!> </span>'),Ao=_('<span class="cat svelte-u0xdy"><!><!></span>');function Re(i,t){ht(t,!0);const n=et(t,"name",3,"Cat"),s=et(t,"icon",3,"😺"),r=et(t,"show_name",3,!0),m=et(t,"show_icon",3,!0);var l=Ao(),C=u(l);L(C,m,k=>{var b=Po(),h=u(b);c(b),G(()=>mt(h,s())),a(k,b)});var T=e(C);L(T,r,k=>{var b=So(),h=u(b);L(h,()=>t.children,g=>{var $=nt(),x=O($);_t(x,()=>t.children),a(g,$)});var p=e(h,!0);c(b),G(()=>mt(p,n())),a(k,b)}),c(l),G(()=>bt(l,"has-icon",m())),a(i,l),pt()}const Oo=`<script lang="ts">
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
`;var zo=_("<!> <!>",1),No=_('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Fo=_('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Do=_('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Mo=_('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=_("View example source",1),qo=_("<section><!> <!></section> <section><!></section>",1),Lo=_("<!> <!>",1),Ho=_('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Uo=_("<!> <!>",1);function Wo(i,t){ht(t,!0);const n="Alyssa",s="Ben",r="home";let m=A(r),l=A(r);const C=q(()=>o(m)===o(l)?"😺":"😾"),T=q(()=>o(m)===o(l)?"😸":"😿"),k=q(()=>({name:n,icon:o(C),position:o(m)})),b=q(()=>({name:s,icon:o(T),position:o(l)}));let h=A(!1);const p=(N,V)=>{const B=[],H=[];for(const j of N){const ot=j.position==="home"?B:H;V?ot.unshift(j):ot.push(j)}return{home_cats:B,adventure_cats:H}},g=q(()=>p([o(k),o(b)],o(h))),$=q(()=>{let{home_cats:N,adventure_cats:V}=o(g);return[N,V]}),x=q(()=>o($)[0]),f=q(()=>o($)[1]),y=q(()=>o(m)!==r||o(l)!==r),I=()=>{w(m,r),w(l,r)};let S=A(!1);const R=()=>{w(S,!o(S))},z=N=>{switch(N.type){case"call_cats_adventure":{w(m,"adventure"),w(l,"adventure");break}case"call_cats_home":{w(m,"home"),w(l,"home");break}case"cat_go_adventure":{N.name===n?w(m,"adventure"):N.name===s&&w(l,"adventure");break}case"cat_go_home":{N.name===n?w(m,"home"):N.name===s&&w(l,"home");break}case"cat_be_or_do":{w(h,!o(h));break}}},[W,K]=on({fallback:(N,V)=>{const B=window.getComputedStyle(N),H=B.transform==="none"?"":B.transform;return{duration:1500,easing:$n,css:j=>`
					transform: ${H} scale(${j});
					opacity: ${j}
				`}}});var J=Uo(),U=O(J);re(U,{scoped:!0,children:(N,V)=>{var B=Lo(),H=O(B);Ot(H,{text:"Full example",slug:"full-example"});var j=e(e(H,!0));Ct(j,{entries:Q=>{var at=zo(),X=O(at);L(X,()=>o(y),ft=>{je(ft,{run:I,content:"Reset",icon:"↻"})});var lt=e(e(X,!0));so(lt,{toggle_about_dialog:R}),a(Q,at)},children:(Q,at)=>{var X=qo(),lt=O(X),ft=u(lt);Ct(ft,{entries:v=>{fo(v,{act:z,get home_cats(){return o(x)},get adventure_cats(){return o(f)}})},children:(v,d)=>{var F=Fo(),Z=u(F),gt=e(e(Z,!0));qt(gt,93,()=>o(x),(xt,vt)=>M(M(xt)).name,(xt,vt,It)=>{let rt=()=>M(M(vt)).name,$t=()=>M(M(vt)).icon,Et=()=>M(M(vt)).position;var tt=No(),Dt=u(tt);Ct(Dt,{entries:Pt=>{le(Pt,{act:z,get name(){return rt()},get icon(){return $t()},get position(){return Et()}})},children:(Pt,Ge)=>{Re(Pt,{get name(){return rt()},get icon(){return $t()}})},$$slots:{default:!0}}),c(tt),Mt(1,tt,()=>K,()=>({key:rt()})),Mt(2,tt,()=>W,()=>({key:rt()})),Ee(tt,()=>Fe,null),a(xt,tt)}),c(gt),c(F),a(v,F)},$$slots:{default:!0}});var yt=e(e(ft,!0));Ct(yt,{entries:v=>{Eo(v,{act:z,get home_cats(){return o(x)},get adventure_cats(){return o(f)}})},children:(v,d)=>{var F=Mo(),Z=u(F),gt=e(e(Z,!0));qt(gt,93,()=>o(f),(xt,vt)=>M(M(xt)).name,(xt,vt,It)=>{let rt=()=>M(M(vt)).name,$t=()=>M(M(vt)).icon,Et=()=>M(M(vt)).position;var tt=Do(),Dt=u(tt);Ct(Dt,{entries:Pt=>{le(Pt,{act:z,get name(){return rt()},get icon(){return $t()},get position(){return Et()}})},children:(Pt,Ge)=>{Re(Pt,{get name(){return rt()},get icon(){return $t()}})},$$slots:{default:!0}}),c(tt),Mt(1,tt,()=>K,()=>({key:rt()})),Mt(2,tt,()=>W,()=>({key:rt()})),Ee(tt,()=>Fe,null),a(xt,tt)}),c(gt),c(F),a(v,F)},$$slots:{default:!0}}),c(lt);var wt=e(e(lt,!0)),ut=u(wt);dn(ut,{summary:v=>{P();var d=Ro();a(v,d)},children:(v,d)=>{Lt(v,{content:Oo})},$$slots:{default:!0}}),c(wt),a(Q,X)},$$slots:{default:!0}}),a(N,B)},$$slots:{default:!0}});var ct=e(e(U,!0));L(ct,()=>o(S),N=>{ln(N,{onclose:()=>w(S,!1),children:(V,B)=>{var H=Ho(),j=u(H),ot=e(e(j,!0)),Q=e(e(ot,!0)),at=e(u(Q));e(at),c(Q);var X=e(e(Q,!0));e(u(X)),c(X);var lt=e(e(X,!0)),ft=u(lt),yt=e(e(ft,!0));mn(yt,{});var wt=e(e(yt,!0)),ut=e(e(wt,!0));vn(ut,{}),c(lt),c(H),a(V,H)},$$slots:{default:!0}})}),a(i,J),pt()}var Vo=_("Hello world",1),Bo=_("🌞",1),Xo=_("Hello with an optional icon snippet",1),Yo=_("Hello with an optional icon string",1),jo=_("<!> <!> <!>",1),Ko=_(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Go=_("<!> <!>",1);function Jo(i){let t=A(!1),n=A(!1),s=A(!1);var r=Go(),m=O(r);Ot(m,{text:"Basic usage",slug:"basic-usage"});var l=e(e(m,!0));re(l,{scoped:!0,children:(C,T)=>{Ct(C,{entries:b=>{var h=jo(),p=O(h);st(p,{run:()=>w(t,!o(t)),children:(x,f)=>{P();var y=Vo();a(x,y)},$$slots:{default:!0}});var g=e(e(p,!0));st(g,{run:()=>w(n,!o(n)),icon:f=>{P();var y=Bo();a(f,y)},children:(f,y)=>{P();var I=Xo();a(f,I)},$$slots:{default:!0}});var $=e(e(g,!0));st($,{run:()=>w(s,!o(s)),icon:"🌚",children:(x,f)=>{P();var y=Yo();a(x,y)},$$slots:{default:!0}}),a(b,h)},children:(b,h)=>{var p=Ko(),g=u(p),$=e(e(g,!0)),x=q(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Lt($,{get content(){return o(x)}});var f=e(e($,!0)),y=u(f),I=u(y);c(y),c(f);var S=e(e(f,!0)),R=u(S),z=u(R);c(R),c(S);var W=e(e(S,!0)),K=u(W),J=u(K);c(K),c(W);var U=e(e(W,!0));e(u(U)),P(),c(U),c(p),G(()=>{bt(y,"color_g_5",o(t)),mt(I,`greeted = ${o(t)??""}`),bt(R,"color_e_5",o(n)),mt(z,`greeted_icon_snippet = ${o(n)??""}`),bt(K,"color_d_5",o(s)),mt(J,`greeted_icon_string = ${o(s)??""}`)}),a(b,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(i,r)}var Qo=_("Toggle",1),Zo=_("<div>toggled</div>"),tr=_(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),er=_("<!> <!>",1);function nr(i){const t=new we;let n=A(!1);re(i,{contextmenu:t,scoped:!0,children:(s,r)=>{var m=er(),l=O(m);Ot(l,{text:"Custom instance",slug:"custom-instance"});var C=e(e(l,!0));Ct(C,{entries:k=>{st(k,{run:()=>w(n,!o(n)),children:(b,h)=>{P();var p=Qo();a(b,p)},$$slots:{default:!0}})},children:(k,b)=>{var h=tr(),p=u(h);Lt(p,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var g=e(e(p,!0));Lt(g,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=e(e(g,!0)),x=e(u($));e(e(x,!0)),P(),c($);var f=e(e($,!0)),y=u(f);L(y,()=>o(n),I=>{var S=Zo();Mt(3,S,()=>rn),a(I,S)}),c(f),c(h),a(k,h)},$$slots:{default:!0}}),a(s,m)},$$slots:{default:!0}})}const or=(i,t)=>{const n=window.getSelection();if(!n||!o(t))return;const s=document.createRange();s.selectNodeContents(o(t)),n.removeAllRanges(),n.addRange(s)};var rr=_("Toggle something",1),sr=_(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ar=_("<div><!></div> <!>",1);function ir(i){const t=new we;let n=A(!1),s=A(void 0),r=A("");const m="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",l=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,C=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,T=q(()=>o(r)===m||o(r)===l||o(r)===C);re(i,{contextmenu:t,scoped:!0,children:(k,b)=>{var h=ar(),p=O(h),g=u(p);Ot(g,{text:"Select text",slug:"select-text"}),c(p);var $=e(e(p,!0));Ct($,{entries:f=>{st(f,{run:()=>w(n,!o(n)),children:(y,I)=>{P();var S=rr();a(y,S)},$$slots:{default:!0}})},children:(f,y)=>{var I=sr(),S=u(I);ye(S,X=>w(s,D(X)),()=>o(s));var R=u(S);e(u(R)),P(),c(R);var z=e(e(R,!0)),W=e(u(z));W.__click=[or,s],P(),c(z),c(S);var K=e(e(S,!0)),J=u(K);sn(J),c(K);var U=e(e(K,!0)),ct=e(u(U));e(e(ct,!0)),P(),c(U);var N=e(e(U,!0)),V=u(N);an(V),c(N);var B=e(e(N,!0)),H=u(B);se(H,{path:"Web/HTML/Global_attributes/contenteditable"}),P(),c(B);var j=e(e(B,!0));u(j),c(j);var ot=e(e(j,!0)),Q=e(e(ot,!0));u(Q),c(Q);var at=e(e(Q,!0));c(I),G(()=>{bt(I,"color_g_5",o(T)),bt(W,"color_a",o(n)),bt(U,"color_g_5",o(T))}),ze(J,()=>o(r),X=>w(r,X)),ze(V,()=>o(r),X=>w(r,X)),Oe("innerText",ot,()=>o(r),X=>w(r,X)),Oe("innerText",at,()=>o(r),X=>w(r,X)),a(f,I)},$$slots:{default:!0}}),G(()=>bt(p,"color_d_5",o(T))),a(k,h)},$$slots:{default:!0}})}be(["click"]);var cr=_(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function lr(i){re(i,{scoped:!0,children:(t,n)=>{var s=cr(),r=O(s);Ot(r,{text:"Default behaviors",slug:"default-behaviors"});var m=e(e(r,!0)),l=u(m);Lt(l,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`});var C=e(e(l,!0)),T=e(u(C));e(e(T,!0)),P(),c(C);var k=e(e(C,!0));e(e(k,!0)),c(m),a(t,s)},$$slots:{default:!0}})}var ur=_("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Rr(i,t){ht(t,!0);const s=nn("Contextmenu");en(i,{tome:s,children:(r,m)=>{var l=ur(),C=O(l),T=u(C),k=u(T);e(u(k)),P(),c(k),c(T);var b=e(e(T,!0));u(b),c(b),c(C);var h=e(e(C,!0)),p=u(h);Jo(p),c(h);var g=e(e(h,!0)),$=u(g);lr($),c(g);var x=e(e(g,!0)),f=u(x);nr(f),c(x);var y=e(e(x,!0)),I=u(y);ir(I),c(y);var S=e(e(y,!0)),R=u(S);Wo(R,{}),c(S);var z=e(e(S,!0)),W=u(z);yn(W),c(z),a(r,l)},$$slots:{default:!0}}),pt()}export{Rr as component};
