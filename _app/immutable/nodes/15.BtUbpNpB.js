var Ve=Object.defineProperty;var Xe=(r,t,e)=>t in r?Ve(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var _t=(r,t,e)=>(Xe(r,typeof t!="symbol"?t+"":t,e),e),me=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var I=(r,t,e)=>(me(r,t,"read from private field"),e?e.call(r):t.get(r)),V=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},ve=(r,t,e,a)=>(me(r,t,"write to private field"),a?a.call(r,e):t.set(r,e),e);var Te=(r,t,e)=>(me(r,t,"access private method"),e);import{a as s,t as P,m as be,c as it,k as z,u as Re}from"../chunks/disclose-version.C6CaZEXV.js";import{o as Ye,u as Ge,f as N,s as v,c as k,a7 as A,r as y,a8 as E,g as n,J as m,p as ut,t as j,a as dt,d as W,_ as Ot,ay as kt,a6 as ie}from"../chunks/runtime.BlvMpPMl.js";import{T as Ke}from"../chunks/Tome_Content.DJwjYkKf.js";import{g as je}from"../chunks/tome.D7Vqk4D8.js";import{M as se}from"../chunks/Mdn_Link.C0M-1Mjq.js";import{T as Ct,a as Tt}from"../chunks/Tome_Section_Header.Cb2Toad7.js";import{p as M,i as L}from"../chunks/if.CeQEPai8.js";import{c as ye,e as Nt}from"../chunks/context_helpers.DDG-D7cC.js";import{t as At,a as Ie,c as Je,s as Ze}from"../chunks/index.LNDYRokY.js";import{C as Dt}from"../chunks/Code.DKJkAISM.js";import{s as mt,c as ce,r as Qe,d as tn}from"../chunks/attributes.B1MIqu8U.js";import{a as lt}from"../chunks/intersect.CMQKZfRK.js";import{s as ae}from"../chunks/style.PwPRnE0L.js";import{b as we}from"../chunks/this.BBx8sYFl.js";import{p as tt,s as Pe}from"../chunks/props.CWHcYp2n.js";import{a as en,s as Pt,b as he,c as Se,D as nn}from"../chunks/Dialog.DJwC8SyQ.js";import{o as ze}from"../chunks/index-client.C_IWJyX8.js";import{s as vt}from"../chunks/render.DFKAUyK5.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as ft}from"../chunks/class.DHpJ88Ue.js";import{P as on}from"../chunks/Pending_Animation.DUCVusHx.js";import{D as sn,b as Ee}from"../chunks/Details.Dfj6E4Gz.js";import{S as an,g as rn}from"../chunks/logos.D_MrYsrK.js";import{C as cn,T as ln}from"../chunks/Theme_Input.DSsllgj_.js";import{b as Ae}from"../chunks/input.D-2s8nnN.js";var yt,St,Mt,ue,qe;const de=class de{constructor(t){V(this,ue);V(this,yt,new WeakMap);V(this,St,void 0);V(this,Mt,void 0);ve(this,Mt,t)}observe(t,e){var a=I(this,yt).get(t)||new Set;return a.add(e),I(this,yt).set(t,a),Te(this,ue,qe).call(this).observe(t,I(this,Mt)),()=>{var o=I(this,yt).get(t);o.delete(e),o.size===0&&(I(this,yt).delete(t),I(this,St).unobserve(t))}}};yt=new WeakMap,St=new WeakMap,Mt=new WeakMap,ue=new WeakSet,qe=function(){return I(this,St)??ve(this,St,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var a of I(this,yt).get(e.target)||[])a(e)}}))},_t(de,"entries",new WeakMap);let ge=de;var un=new ge({box:"border-box"});function Oe(r,t,e){var a=un.observe(r,()=>e(r[t]));Ye(()=>(Ge(()=>e(r[t])),a))}var dn=P('<span class="font_mono">contextmenu</span> event',1),_n=P('<span class="font_mono">navigator.vibrate</span>'),mn=P('<span class="font_mono">navigator.vibrate</span>'),vn=P(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),hn=P(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),pn=P("<!> <!>",1);function fn(r){var t=pn(),e=N(t);Ct(e,{children:(o,c)=>{var i=vn(),h=N(i);Tt(h,{text:"Expected behaviors"});var w=v(h,4),C=v(k(w));se(C,{path:"Web/API/Element/contextmenu_event",children:(u,l)=>{var b=dn();A(),s(u,b)},$$slots:{default:!0}});var f=v(C,4);se(f,{path:"Web/API/Navigator/vibrate",children:(u,l)=>{var b=_n();s(u,b)},$$slots:{default:!0}}),A(),y(w);var p=v(w,10),d=v(k(p),10),x=v(k(d));se(x,{path:"Web/API/Navigator/vibrate",children:(u,l)=>{var b=mn();s(u,b)},$$slots:{default:!0}}),A(),y(d),y(p),s(o,i)},$$slots:{default:!0}});var a=v(e,2);Ct(a,{children:(o,c)=>{var i=hn(),h=N(i);Tt(h,{text:"Motivation"}),A(14),s(o,i)},$$slots:{default:!0}}),s(r,t)}function gn(r){const t=r-1;return t*t*t+1}function xn(r){return--r*r*r*r*r+1}function Ne(r,{from:t,to:e},a={}){var o=getComputedStyle(r),c=bn(r),i=o.transform==="none"?"":o.transform,[h,w]=o.transformOrigin.split(" ").map(parseFloat),C=t.width/e.width,f=t.height/e.height,p=(t.left+C*h-(e.left+h))/c,d=(t.top+f*w-(e.top+w))/c,{delay:x=0,duration:u=b=>Math.sqrt(b)*120,easing:l=gn}=a;return{delay:x,duration:typeof u=="function"?u(Math.sqrt(p*p+d*d)):u,easing:l,css:(b,$)=>{var T=$*p,O=$*d,F=b+$*C,H=b+$*f;return`transform: ${i} scale(${F}, ${H}) translate(${T}px, ${O}px);`}}}function bn(r){if("currentCSSZoom"in r)return r.currentCSSZoom;for(var t=r,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Rt,qt;class Fe{constructor(){V(this,Rt,E(0));V(this,qt,E(0))}get width(){return n(I(this,Rt))}set width(t){m(I(this,Rt),M(t))}get height(){return n(I(this,qt))}set height(t){m(I(this,qt),M(t))}}Rt=new WeakMap,qt=new WeakMap;var Ft,Ht,Lt,Wt,Ut;class yn{constructor(t,e){_t(this,"is_menu",!1);_t(this,"menu");V(this,Ft,E(!1));V(this,Ht,E());V(this,Lt,E(!1));V(this,Wt,E(null));V(this,Ut,E(null));this.menu=t,this.run=e}get selected(){return n(I(this,Ft))}set selected(t){m(I(this,Ft),M(t))}get run(){return n(I(this,Ht))}set run(t){m(I(this,Ht),M(t))}get pending(){return n(I(this,Lt))}set pending(t){m(I(this,Lt),M(t))}get error_message(){return n(I(this,Wt))}set error_message(t){m(I(this,Wt),M(t))}get promise(){return n(I(this,Ut))}set promise(t){m(I(this,Ut),M(t))}}Ft=new WeakMap,Ht=new WeakMap,Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap;var Bt,Vt;class wn{constructor(t,e){_t(this,"is_menu",!0);_t(this,"menu");_t(this,"depth");V(this,Bt,E(!1));V(this,Vt,E(M([])));this.menu=t,this.depth=e}get selected(){return n(I(this,Bt))}set selected(t){m(I(this,Bt),M(t))}get items(){return n(I(this,Vt))}set items(t){m(I(this,Vt),M(t))}}Bt=new WeakMap,Vt=new WeakMap;var Xt;class $n{constructor(){_t(this,"is_menu",!0);_t(this,"menu",null);_t(this,"depth",1);V(this,Xt,E(M([])))}get items(){return n(I(this,Xt))}set items(t){m(I(this,Xt),M(t))}}Xt=new WeakMap;var Yt,Gt,Kt,jt,Jt,Zt,Qt;class $e{constructor(t){_t(this,"layout");_t(this,"initial_layout");V(this,Yt,E(!1));V(this,Gt,E(0));V(this,Kt,E(0));V(this,jt,E(M([])));V(this,Jt,E());V(this,Zt,E(M(new $n)));V(this,Qt,E(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Fe}get opened(){return n(I(this,Yt))}set opened(t){m(I(this,Yt),M(t))}get x(){return n(I(this,Gt))}set x(t){m(I(this,Gt),M(t))}get y(){return n(I(this,Kt))}set y(t){m(I(this,Kt),M(t))}get params(){return n(I(this,jt))}set params(t){m(I(this,jt),M(t))}get error(){return n(I(this,Jt))}set error(t){m(I(this,Jt),M(t))}get root_menu(){return n(I(this,Zt))}set root_menu(t){m(I(this,Zt),M(t))}get selections(){return n(I(this,Qt))}set selections(t){m(I(this,Qt),M(t))}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const o=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=o??"unknown error",this.error=o}if(en(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(o=>{if(a===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const c=typeof o.message=="string"?o.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return o}},o=>{if(a!==t.promise)return;const c=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=fe.maybe_get()??this.root_menu,a=new yn(e,t);return e.items.push(a),ze(()=>{e.items.length=0}),a}add_submenu(){const t=fe.maybe_get()??this.root_menu,e=new wn(t,t.depth+1);return t.items.push(e),fe.set(e),ze(()=>{t.items.length=0}),e}}Yt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,jt=new WeakMap,Jt=new WeakMap,Zt=new WeakMap,Qt=new WeakMap;const ke="contextmenu",kn=`a,[data-${ke}]`,re=new Map;let Cn=0;const Tn=(r,t)=>{if(t==null)return;const e=(Cn+=1)-1+"";return r.dataset[ke]=e,re.set(e,t),{update:a=>{re.set(e,a)},destroy:()=>{re.delete(e)}}},In=17,De=(r,t,e,a)=>{const o=Pn(r);return o!=null&&o.length?(a.open(o,t,e),navigator.vibrate&&navigator.vibrate(In),!0):!1},Pn=r=>{var c;let t=null,e=r,a,o;for(;e=e==null?void 0:e.closest(kn);){if(a=e.dataset[ke]){if(t??(t=[]),o=re.get(a),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(c=window.getSelection())==null?void 0:c.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},_e=ye(),fe=ye(),xe=ye(()=>new Fe);var Sn=(r,t)=>t.close(),zn=P('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function He(r,t){ut(t,!0);const e="🔗",a=tt(t,"icon",3,e),o=_e.get(),c=($,T=location.host)=>{const O=pe(pe($,"https://"),"http://");return O.startsWith(T+"/")?pe(O,T):O},i=W(()=>c(t.href)),h=W(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),w=W(()=>n(h)?"noreferrer":void 0);var C=zn(),f=k(C);f.__click=[Sn,o];var p=k(f),d=k(p),x=k(d);L(x,()=>typeof a()=="string",$=>{var T=z();j(()=>vt(T,a())),s($,T)},$=>{var T=it(),O=N(T);mt(O,a,()=>e),s($,T)}),y(d);var u=v(d,2),l=k(u),b=k(l);L(b,()=>t.children,$=>{var T=it(),O=N(T);mt(O,()=>t.children),s($,T)},$=>{var T=z();j(()=>vt(T,n(i))),s($,T)}),y(l),y(u),y(p),y(f),y(C),j(()=>{ce(f,"href",t.href),ce(f,"rel",n(w))}),s(r,C),dt()}be(["click"]);var En=P('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function rt(r,t){ut(t,!0);const e=_e.get(),a=e.add_entry(t.run);Ot(()=>{a.run=t.run});const o=W(()=>a.selected),c=W(()=>a.pending),i=W(()=>a.error_message);var h=En();h.__click=()=>{setTimeout(()=>e.activate(a))};var w=k(h),C=k(w),f=k(C);L(f,()=>typeof t.icon=="string",u=>{var l=z();j(()=>vt(l,t.icon)),s(u,l)},u=>{var l=it(),b=N(l);L(b,()=>t.icon,$=>{var T=it(),O=N(T);mt(O,()=>t.icon),s($,T)},null,!0),s(u,l)}),y(C);var p=v(C,2),d=k(p);mt(d,()=>t.children),y(p);var x=v(p,2);L(x,()=>n(c),u=>{on(u,{})},u=>{var l=it(),b=N(l);L(b,()=>n(i),$=>{var T=z("⚠️");s($,T)},null,!0),s(u,l)}),y(w),y(h),j(()=>{ce(h,"title",n(i)?`Error: ${n(i)}`:void 0),ft(h,"selected",n(o))}),Re("mouseenter",h,u=>{Pt(u),e.select(a)}),s(r,h),dt()}be(["click"]);function Le(r,t){rt(r,{get run(){return t.run},icon:a=>{A();var o=z();j(()=>vt(o,t.icon)),s(a,o)},children:(a,o)=>{A();var c=z();j(()=>vt(c,t.content)),s(a,c)},$$slots:{icon:!0,default:!0}})}var An=P('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),On=P('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Nn=P('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Dn=P("<!> <!> <!>",1);function te(r,t){ut(t,!0);const e=(g,_=ie)=>{He(g,Pe(_))},a=(g,_=ie)=>{Le(g,Pe(_))},o=tt(t,"contextmenu",19,()=>new $e),c=tt(t,"longpress_move_tolerance",3,21),i=tt(t,"longpress_duration",3,633),h=tt(t,"bypass_with_tap_then_longpress",3,!0),w=tt(t,"tap_then_longpress_duration",3,660),C=tt(t,"tap_then_longpress_move_tolerance",3,7),f=tt(t,"open_offset_x",19,()=>-2),p=tt(t,"open_offset_y",19,()=>-2),d=tt(t,"scoped",3,!1);_e.set(o());let x=E(void 0);const u=W(()=>o().layout),l=W(()=>o().initial_layout),b=W(()=>n(u)===n(l));let $=E(void 0),T=E(void 0);Ot(()=>{!n(b)&&n($)!==void 0&&(n(u).width=n($))}),Ot(()=>{!n(b)&&n(T)!==void 0&&(n(u).height=n(T))});const O=xe.set();Ot(()=>{if(n(x)){const g=n(x).getBoundingClientRect();O.width=g.width,O.height=g.height}});const F=W(()=>o().x+Math.min(0,n(u).width-(o().x+O.width))),H=W(()=>o().y+Math.min(0,n(u).height-(o().y+O.height)));let B=E(void 0),J=E(void 0),Z=E(void 0),X=E(void 0),R=E(void 0),et=E(void 0);const Y=()=>{n(R)&&m(R,!1),n(X)!=null&&(clearTimeout(n(X)),m(X,null))},G=g=>{var S;if(n(et)){m(et,!1);return}if(n(R)){Y(),Pt(g);return}const{target:_}=g;g.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||(S=n(x))!=null&&S.contains(_)||he(_)||Se(_)||De(_,g.clientX+f(),g.clientY+p(),o())&&(Pt(g),Y())},U=g=>{n(R)&&m(R,!1);const{touches:_,target:S}=g;if(o().opened||_.length!==1||g.shiftKey||!(S instanceof HTMLElement||S instanceof SVGElement)||he(S)||Se(S))return;const{clientX:D,clientY:q}=_[0];if(h()){if(n(Z)!=null&&performance.now()-n(Z)<w()&&Math.hypot(D-n(B),q-n(J))<C()){m(et,!0),m(Z,null);return}m(Z,M(performance.now()))}m(B,M(D)),m(J,M(q)),n(X)!=null&&Y(),m(X,M(setTimeout(()=>{m(R,!0),De(S,n(B)+f(),n(J)+p(),o())},i())))},ct=g=>{if(n(X)==null)return;const{touches:_}=g;if(_.length!==1)return;const{clientX:S,clientY:D}=_[0];Math.hypot(S-n(B),D-n(J))>c()&&(o().opened&&o().close(),Y())},ht=g=>{n(X)!=null&&(n(R)&&Pt(g),Y())},ee=g=>{n(x)&&!n(x).contains(g.target)&&o().close()},nt=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),zt=g=>{const _=nt.get(g.key);!_||he(g.target)||(Pt(g),_())},K=(g,_)=>{let S=null,D=null;const q=Q=>{S&&g.removeEventListener(D,S),Q.disabled||(g.addEventListener(Q.event,Q.cb,{capture:!0,passive:Q.passive}),S=Q.cb,D=Q.event)};return q(_),{update:Q=>{q(Q)},destroy:()=>{S&&g.removeEventListener(D,S)}}};var xt=Dn();lt(kt,(g,_)=>K(g,_),()=>({event:"contextmenu",passive:!1,cb:G,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchstart",passive:!0,cb:U,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchmove",passive:!0,cb:ct,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchend",passive:!1,cb:ht,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchcancel",passive:!1,cb:ht,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"mousedown",passive:!0,cb:ee,disabled:!o().opened})),lt(kt,(g,_)=>K(g,_),()=>({event:"keydown",passive:!1,cb:zt,disabled:!o().opened}));var wt=N(xt);L(wt,d,g=>{var _=An(),S=k(_);mt(S,()=>t.children),y(_),lt(_,(D,q)=>K(D,q),()=>({event:"contextmenu",passive:!1,cb:G})),lt(_,(D,q)=>K(D,q),()=>({event:"touchstart",passive:!0,cb:U})),lt(_,(D,q)=>K(D,q),()=>({event:"touchmove",passive:!0,cb:ct})),lt(_,(D,q)=>K(D,q),()=>({event:"touchend",passive:!1,cb:ht})),lt(_,(D,q)=>K(D,q),()=>({event:"touchcancel",passive:!1,cb:ht})),s(g,_)},g=>{var _=it(),S=N(_);mt(S,()=>t.children),s(g,_)});var ne=v(wt,2);L(ne,()=>!n(b),g=>{var _=On();Oe(_,"clientHeight",S=>m(T,S)),Oe(_,"clientWidth",S=>m($,S)),s(g,_)});var oe=v(ne,2);L(oe,()=>o().opened,g=>{var _=Nn();Nt(_,20,()=>o().params,S=>S,(S,D)=>{var q=it(),Q=N(q);L(Q,()=>typeof D=="function",pt=>{var ot=it(),st=N(ot);mt(st,()=>D),s(pt,ot)},pt=>{var ot=it(),st=N(ot);L(st,()=>D.snippet==="link",gt=>{e(gt,()=>D.props)},gt=>{var It=it(),at=N(It);L(at,()=>D.snippet==="text",Et=>{a(Et,()=>D.props)},null,!0),s(gt,It)},!0),s(pt,ot)}),s(S,q)}),y(_),we(_,S=>m(x,S),()=>n(x)),j(()=>ae(_,"transform",`translate3d(${n(F)??""}px, ${n(H)??""}px, 0)`)),s(g,_)}),s(r,xt),dt()}var Mn=P('<span class="display_contents"><!></span>');function bt(r,t){ut(t,!0);var e=Mn(),a=k(e);mt(a,()=>t.children),y(e),lt(e,(o,c)=>Tn(o,c),()=>t.entries),s(r,e),dt()}var Rn=P('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),qn=P('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ce(r,t){ut(t,!0);const e=_e.get(),a=e.add_submenu(),{layout:o}=e,c=W(()=>a.selected);let i=E(void 0);const h=xe.get(),w=xe.set();let C=E(0),f=E(0);Ot(()=>{n(i)&&p(n(i),o,h)});const p=(F,H,B)=>{const{x:J,y:Z,width:X,height:R}=F.getBoundingClientRect();w.width=X,w.height=R;const et=J-n(C),Y=Z-n(f),G=et+X+B.width-H.width;if(G<=0)m(C,M(B.width));else{const U=X-et;U<=0?m(C,-X):U>G?m(C,B.width-G):m(C,U-X)}m(f,M(Math.min(0,H.height-(Y+R))))};var d=qn(),x=k(d),u=k(x),l=k(u),b=k(l);mt(b,()=>t.icon??ie),y(l);var $=v(l,2),T=k($);mt(T,()=>t.children),y($),y(u),A(2),y(x);var O=v(x,2);L(O,()=>n(c),F=>{var H=Rn(),B=k(H);mt(B,()=>t.menu),y(H),we(H,J=>m(i,J),()=>n(i)),j(()=>{ae(H,"transform",`translate3d(${n(C)??""}px, ${n(f)??""}px, 0)`),ae(H,"max-height",`${o.height??""}px`)}),s(F,H)}),y(d),j(()=>{ae(d,"--contextmenu_depth",a.depth),ce(x,"aria-expanded",n(c)),ft(x,"selected",n(c))}),Re("mouseenter",x,F=>{Pt(F),setTimeout(()=>e.select(a))}),s(r,d),dt()}var Fn=P("<!> <!>",1);function le(r,t){ut(t,!0);const e=tt(t,"name",3,"Cat"),a=tt(t,"icon",3,"😺");Ce(r,{icon:i=>{A();var h=z();j(()=>vt(h,a())),s(i,h)},menu:i=>{var h=Fn(),w=N(h);rt(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:p=>{var d=it(),x=N(d);L(x,()=>t.position==="adventure",u=>{var l=z("🏠");s(u,l)},u=>{var l=z("🌄");s(u,l)}),s(p,d)},children:(p,d)=>{var x=it(),u=N(x);L(u,()=>t.position==="adventure",l=>{var b=z("go home");s(l,b)},l=>{var b=z("go adventure");s(l,b)}),s(p,x)},$$slots:{icon:!0,default:!0}});var C=v(w,2);rt(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:p=>{var d=it(),x=N(d);L(x,()=>t.position==="adventure",u=>{var l=z("🌄");s(u,l)},u=>{var l=z("🏠");s(u,l)}),s(p,d)},children:(p,d)=>{var x=it(),u=N(x);L(u,()=>t.position==="adventure",l=>{var b=z("do adventure");s(l,b)},l=>{var b=z("be home");s(l,b)}),s(p,x)},$$slots:{icon:!0,default:!0}}),s(i,h)},children:(i,h)=>{A();var w=z();j(()=>vt(w,e())),s(i,w)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Hn=P("<!> <!>",1);function Ln(r,t){var e=Hn(),a=N(e);He(a,{href:"https://github.com/ryanatkn/fuz",icon:i=>{an(i,{data:rn,size:"var(--icon_size_xs)"})},children:(i,h)=>{A();var w=z("Source code");s(i,w)},$$slots:{icon:!0,default:!0}});var o=v(a,2);rt(o,{get run(){return t.toggle_about_dialog},icon:i=>{A();var h=z("?");s(i,h)},children:(i,h)=>{A();var w=z("About");s(i,w)},$$slots:{icon:!0,default:!0}}),s(r,e)}const We=r=>{const t=r.length;if(t===2)return"cats";if(t===0)return null;const e=r[0];return e.icon+e.name};var Wn=P("<!> <!>",1),Un=P("<!> <!> <!>",1);function Bn(r,t){ut(t,!0);const e=W(()=>We(t.adventure_cats));Ce(r,{icon:c=>{A();var i=z("🏠");s(c,i)},menu:c=>{var i=Un(),h=N(i);L(h,()=>n(e),f=>{rt(f,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{A();var x=z("🐈‍⬛");s(d,x)},children:(d,x)=>{A();var u=z("call");s(d,u)},$$slots:{icon:!0,default:!0}})});var w=v(h,2);Nt(w,17,()=>t.home_cats,f=>f.name,(f,p)=>{le(f,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var C=v(w,2);L(C,()=>!n(e),f=>{var p=Wn(),d=N(p);rt(d,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:l=>{A();var b=z("🏠");s(l,b)},children:(l,b)=>{A();var $=z("be");s(l,$)},$$slots:{icon:!0,default:!0}});var x=v(d,2);rt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:l=>{A();var b=z("🦋");s(l,b)},children:(l,b)=>{A();var $=z("leave");s(l,$)},$$slots:{icon:!0,default:!0}}),s(f,p)}),s(c,i)},children:(c,i)=>{A();var h=z("home");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Vn=P("<!> <!>",1),Xn=P("<!> <!> <!>",1);function Yn(r,t){ut(t,!0);const e=W(()=>We(t.home_cats));Ce(r,{icon:c=>{A();var i=z("🌄");s(c,i)},menu:c=>{var i=Xn(),h=N(i);L(h,()=>n(e),f=>{rt(f,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{A();var x=z("🦋");s(d,x)},children:(d,x)=>{A();var u=z("call");s(d,u)},$$slots:{icon:!0,default:!0}})});var w=v(h,2);Nt(w,17,()=>t.adventure_cats,f=>f.name,(f,p)=>{le(f,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var C=v(w,2);L(C,()=>!n(e),f=>{var p=Vn(),d=N(p);rt(d,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:l=>{A();var b=z("🌄");s(l,b)},children:(l,b)=>{A();var $=z("do");s(l,$)},$$slots:{icon:!0,default:!0}});var x=v(d,2);rt(x,{run:()=>t.act({type:"call_cats_home"}),icon:l=>{A();var b=z("🐈‍⬛");s(l,b)},children:(l,b)=>{A();var $=z("leave");s(l,$)},$$slots:{icon:!0,default:!0}}),s(f,p)}),s(c,i)},children:(c,i)=>{A();var h=z("adventure");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Gn=P('<span class="icon svelte-u0xdy"> </span>'),Kn=P('<span class="name svelte-u0xdy"><!> </span>'),jn=P('<span class="cat svelte-u0xdy"><!><!></span>');function Me(r,t){ut(t,!0);const e=tt(t,"name",3,"Cat"),a=tt(t,"icon",3,"😺"),o=tt(t,"show_name",3,!0),c=tt(t,"show_icon",3,!0);var i=jn(),h=k(i);L(h,c,C=>{var f=Gn(),p=k(f,!0);y(f),j(()=>vt(p,a())),s(C,f)});var w=v(h);L(w,o,C=>{var f=Kn(),p=k(f);mt(p,()=>t.children??ie);var d=v(p,1,!0);y(f),j(()=>vt(d,e())),s(C,f)}),y(i),j(()=>ft(i,"has-icon",c())),s(r,i),dt()}const Jn=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Details from '$lib/Details.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import Cat_Contextmenu from '$routes/library/contextmenu/Cat_Contextmenu.svelte';
	import App_Contextmenu from '$routes/library/contextmenu/App_Contextmenu.svelte';
	import Home_Contextmenu from '$routes/library/contextmenu/Home_Contextmenu.svelte';
	import Adventure_Contextmenu from '$routes/library/contextmenu/Adventure_Contextmenu.svelte';
	import Cat_View from '$routes/library/contextmenu/Cat_View.svelte';
	import type {Cat, Cat_Position, History_Item} from '$routes/library/contextmenu/helpers.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import file_contents from '$routes/library/contextmenu/Example_Full.svelte?raw';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

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
	<Tome_Section>
		<Tome_Section_Header text="Full example" />
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
								<div
									class="cat_wrapper"
									in:receive={{key: name}}
									out:send={{key: name}}
									animate:flip
								>
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
								<div
									class="cat_wrapper"
									in:receive={{key: name}}
									out:send={{key: name}}
									animate:flip
								>
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
	</Tome_Section>
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
`;var Zn=P("<!> <!>",1),Qn=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),to=P('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),eo=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),no=P('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),oo=P("<section><!> <!></section> <section><!></section>",1),so=P("<!> <!>",1),ao=P('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),ro=P("<!> <!>",1);function io(r,t){ut(t,!0);const e="Alyssa",a="Ben",o="home";let c=E(o),i=E(o);const h=W(()=>n(c)===n(i)?"😺":"😾"),w=W(()=>n(c)===n(i)?"😸":"😿"),C=W(()=>({name:e,icon:n(h),position:n(c)})),f=W(()=>({name:a,icon:n(w),position:n(i)}));let p=E(!1);const d=(R,et)=>{const Y=[],G=[];for(const U of R){const ct=U.position==="home"?Y:G;et?ct.unshift(U):ct.push(U)}return{home_cats:Y,adventure_cats:G}},x=W(()=>d([n(C),n(f)],n(p))),u=W(()=>n(x).home_cats),l=W(()=>n(x).adventure_cats),b=W(()=>n(c)!==o||n(i)!==o),$=()=>{m(c,o),m(i,o)};let T=E(!1);const O=()=>{m(T,!n(T))},F=R=>{switch(R.type){case"call_cats_adventure":{m(c,"adventure"),m(i,"adventure");break}case"call_cats_home":{m(c,"home"),m(i,"home");break}case"cat_go_adventure":{R.name===e?m(c,"adventure"):R.name===a&&m(i,"adventure");break}case"cat_go_home":{R.name===e?m(c,"home"):R.name===a&&m(i,"home");break}case"cat_be_or_do":{m(p,!n(p));break}}},[H,B]=Je({fallback:(R,et)=>{const Y=window.getComputedStyle(R),G=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:xn,css:U=>`
					transform: ${G} scale(${U});
					opacity: ${U}
				`}}});var J=ro(),Z=N(J);te(Z,{scoped:!0,children:(R,et)=>{Ct(R,{children:(Y,G)=>{var U=so(),ct=N(U);Tt(ct,{text:"Full example"});var ht=v(ct,2);bt(ht,{entries:nt=>{var zt=Zn(),K=N(zt);L(K,()=>n(b),wt=>{Le(wt,{run:$,content:"Reset",icon:"↻"})});var xt=v(K,2);Ln(xt,{toggle_about_dialog:O}),s(nt,zt)},children:(nt,zt)=>{var K=oo(),xt=N(K),wt=k(xt);bt(wt,{entries:S=>{Bn(S,{act:F,get home_cats(){return n(u)},get adventure_cats(){return n(l)}})},children:(S,D)=>{var q=to(),Q=v(k(q),2);Nt(Q,29,()=>n(u),({name:pt,icon:ot,position:st})=>pt,(pt,ot)=>{let st=()=>n(ot).name,gt=()=>n(ot).icon,It=()=>n(ot).position;var at=Qn(),Et=k(at);bt(Et,{entries:$t=>{le($t,{act:F,get name(){return st()},get icon(){return gt()},get position(){return It()}})},children:($t,Be)=>{Me($t,{get name(){return st()},get icon(){return gt()}})},$$slots:{entries:!0,default:!0}}),y(at),At(1,at,()=>B,()=>({key:st()})),At(2,at,()=>H,()=>({key:st()})),Ie(at,()=>Ne,null),s(pt,at)}),y(Q),y(q),s(S,q)},$$slots:{entries:!0,default:!0}});var ne=v(wt,2);bt(ne,{entries:S=>{Yn(S,{act:F,get home_cats(){return n(u)},get adventure_cats(){return n(l)}})},children:(S,D)=>{var q=no(),Q=v(k(q),2);Nt(Q,29,()=>n(l),({name:pt,icon:ot,position:st})=>pt,(pt,ot)=>{let st=()=>n(ot).name,gt=()=>n(ot).icon,It=()=>n(ot).position;var at=eo(),Et=k(at);bt(Et,{entries:$t=>{le($t,{act:F,get name(){return st()},get icon(){return gt()},get position(){return It()}})},children:($t,Be)=>{Me($t,{get name(){return st()},get icon(){return gt()}})},$$slots:{entries:!0,default:!0}}),y(at),At(1,at,()=>B,()=>({key:st()})),At(2,at,()=>H,()=>({key:st()})),Ie(at,()=>Ne,null),s(pt,at)}),y(Q),y(q),s(S,q)},$$slots:{entries:!0,default:!0}}),y(xt);var oe=v(xt,2),g=k(oe);sn(g,{summary:S=>{A();var D=z("View example source");s(S,D)},children:(S,D)=>{Dt(S,{content:Jn})},$$slots:{summary:!0,default:!0}}),y(oe),s(nt,K)},$$slots:{entries:!0,default:!0}}),s(Y,U)},$$slots:{default:!0}})},$$slots:{default:!0}});var X=v(Z,2);L(X,()=>n(T),R=>{nn(R,{onclose:()=>m(T,!1),children:(et,Y)=>{var G=ao(),U=v(k(G),8),ct=v(k(U),2);cn(ct,{});var ht=v(ct,4);ln(ht,{}),y(U),y(G),s(et,G)},$$slots:{default:!0}})}),s(r,J),dt()}var co=P("<!> <!> <!>",1),lo=P(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),uo=P("<!> <!>",1);function _o(r){let t=E(!1),e=E(!1),a=E(!1);te(r,{scoped:!0,children:(o,c)=>{Ct(o,{children:(i,h)=>{var w=uo(),C=N(w);Tt(C,{text:"Basic usage"});var f=v(C,2);bt(f,{entries:d=>{var x=co(),u=N(x);rt(u,{run:()=>m(t,!n(t)),children:($,T)=>{A();var O=z("Hello world");s($,O)},$$slots:{default:!0}});var l=v(u,2);rt(l,{run:()=>m(e,!n(e)),icon:T=>{A();var O=z("🌞");s(T,O)},children:(T,O)=>{A();var F=z("Hello with an optional icon snippet");s(T,F)},$$slots:{icon:!0,default:!0}});var b=v(l,2);rt(b,{run:()=>m(a,!n(a)),icon:"🌚",children:($,T)=>{A();var O=z("Hello with an optional icon string");s($,O)},$$slots:{default:!0}}),s(d,x)},children:(d,x)=>{var u=lo(),l=v(k(u),2),b=W(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${n(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${n(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${n(a)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Dt(l,{get content(){return n(b)}});var $=v(l,2),T=k($),O=k(T);y(T),y($);var F=v($,2),H=k(F),B=k(H);y(H),y(F);var J=v(F,2),Z=k(J),X=k(Z);y(Z),y(J),A(2),y(u),j(()=>{ft(T,"color_g_5",n(t)),vt(O,`greeted = ${n(t)??""}`),ft(H,"color_e_5",n(e)),vt(B,`greeted_icon_snippet = ${n(e)??""}`),ft(Z,"color_d_5",n(a)),vt(X,`greeted_icon_string = ${n(a)??""}`)}),s(d,u)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var mo=P("<div>toggled</div>"),vo=P(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),ho=P("<!> <!>",1);function po(r,t){ut(t,!0);const e=new $e;let a=E(!1);te(r,{contextmenu:e,scoped:!0,children:(o,c)=>{Ct(o,{children:(i,h)=>{var w=ho(),C=N(w);Tt(C,{text:"Custom instance"});var f=v(C,2);bt(f,{entries:d=>{rt(d,{run:()=>m(a,!n(a)),children:(x,u)=>{A();var l=z("Toggle");s(x,l)},$$slots:{default:!0}})},children:(d,x)=>{var u=vo(),l=k(u);Dt(l,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var b=v(l,2);Dt(b,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=v(b,4),T=k($);L(T,()=>n(a),O=>{var F=mo();At(3,F,()=>Ze),s(O,F)}),y($),y(u),s(d,u)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt()}const fo=(r,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var go=P(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),xo=P("<div><!></div> <!>",1);function bo(r,t){ut(t,!0);const e=new $e;let a=E(!1),o=E(void 0),c=E("");const i="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",h=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,w=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=W(()=>n(c)===i||n(c)===h||n(c)===w);te(r,{contextmenu:e,scoped:!0,children:(f,p)=>{Ct(f,{children:(d,x)=>{var u=xo(),l=N(u),b=k(l);Tt(b,{text:"Select text"}),y(l);var $=v(l,2);bt($,{entries:O=>{rt(O,{run:()=>m(a,!n(a)),children:(F,H)=>{A();var B=z("Toggle something");s(F,B)},$$slots:{default:!0}})},children:(O,F)=>{var H=go(),B=k(H),J=v(k(B),2),Z=v(k(J));Z.__click=[fo,o],A(),y(J),y(B),we(B,nt=>m(o,nt),()=>n(o));var X=v(B,2),R=k(X);Qe(R),y(X);var et=v(X,2),Y=v(et,2),G=k(Y);tn(G),y(Y);var U=v(Y,2),ct=k(U);se(ct,{path:"Web/HTML/Global_attributes/contenteditable"}),A(),y(U);var ht=v(U,4),ee=v(ht,4);y(H),j(()=>{ft(H,"color_g_5",n(C)),ft(Z,"color_a",n(a)),ft(et,"color_g_5",n(C))}),Ae(R,()=>n(c),nt=>m(c,nt)),Ae(G,()=>n(c),nt=>m(c,nt)),Ee("innerText",ht,()=>n(c),nt=>m(c,nt)),Ee("innerText",ee,()=>n(c),nt=>m(c,nt)),s(O,H)},$$slots:{entries:!0,default:!0}}),j(()=>ft(l,"color_d_5",n(C))),s(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt()}be(["click"]);var yo=P(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function wo(r){te(r,{scoped:!0,children:(t,e)=>{Ct(t,{children:(a,o)=>{var c=yo(),i=N(c);Tt(i,{text:"Default behaviors"});var h=v(i,2),w=k(h);Dt(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),A(6),y(h),s(a,c)},$$slots:{default:!0}})},$$slots:{default:!0}})}var $o=P("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function jo(r,t){ut(t,!0);const a=je("Contextmenu");Ke(r,{tome:a,children:(o,c)=>{var i=$o(),h=v(N(i),2);_o(h);var w=v(h,2);wo(w);var C=v(w,2);po(C,{});var f=v(C,2);bo(f,{});var p=v(f,2);io(p,{});var d=v(p,2);fn(d),s(o,i)},$$slots:{default:!0}}),dt()}export{jo as component};
