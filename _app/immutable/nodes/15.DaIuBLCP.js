var Xe=Object.defineProperty;var Te=a=>{throw TypeError(a)};var Ye=(a,t,e)=>t in a?Xe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var dt=(a,t,e)=>Ye(a,typeof t!="symbol"?t+"":t,e),me=(a,t,e)=>t.has(a)||Te("Cannot "+e);var P=(a,t,e)=>(me(a,t,"read from private field"),e?e.call(a):t.get(a)),V=(a,t,e)=>t.has(a)?Te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e),ve=(a,t,e,r)=>(me(a,t,"write to private field"),r?r.call(a,e):t.set(a,e),e),Ie=(a,t,e)=>(me(a,t,"access private method"),e);import{a as s,t as S,p as be,c as rt,k as A,x as qe,B as Ge,C as Ke}from"../chunks/disclose-version.CNjwL26W.js";import{m as je,u as Ze,f as N,s as v,c as k,a4 as E,r as y,a6 as z,g as n,G as m,a as lt,t as j,p as ut,d as W,X as Ot,aw as kt,a3 as ie}from"../chunks/runtime.B-gUiV1I.js";import{T as Je}from"../chunks/Tome_Content.xpXiVQfR.js";import{g as Qe}from"../chunks/tome.siBNfEyl.js";import{M as se}from"../chunks/Mdn_Link.DkcqrsCv.js";import{T as Ct,a as Tt}from"../chunks/Tome_Section_Header.DDYC-MNe.js";import{p as R,i as L}from"../chunks/if.DNsq1zR9.js";import{c as ye,e as Nt}from"../chunks/context_helpers.mn64om0Y.js";import{t as Et,a as Pe,c as tn,s as en}from"../chunks/index.BTflLVjk.js";import{C as Dt}from"../chunks/Code.6WAVxGbz.js";import{s as _t,b as ce,r as nn}from"../chunks/attributes.C4-PK8QZ.js";import{a as ct}from"../chunks/intersect.BIOnSgs1.js";import{s as ae}from"../chunks/style.PwPRnE0L.js";import{b as we}from"../chunks/this.B1Rg4b_C.js";import{p as Q,s as Se}from"../chunks/props.Cy-UtRwa.js";import{a as on,s as Pt,b as he,c as Ae,D as sn}from"../chunks/Dialog.DixKc0OY.js";import{o as ze}from"../chunks/index-client.BtWieJN8.js";import{s as mt}from"../chunks/render.Dvbgo3Ck.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as pt}from"../chunks/class.BHrBxz3m.js";import{P as an}from"../chunks/Pending_Animation.DkktiTx1.js";import{D as rn,b as Ee}from"../chunks/Details.BXAtmSrO.js";import{S as cn,g as ln}from"../chunks/logos.Bui5YFwi.js";import{C as un,T as dn}from"../chunks/Theme_Input.whmyojYa.js";import{b as Oe}from"../chunks/input.4AtqOfsH.js";var bt,St,Mt,ue,Fe;const de=class de{constructor(t){V(this,ue);V(this,bt,new WeakMap);V(this,St);V(this,Mt);ve(this,Mt,t)}observe(t,e){var r=P(this,bt).get(t)||new Set;return r.add(e),P(this,bt).set(t,r),Ie(this,ue,Fe).call(this).observe(t,P(this,Mt)),()=>{var o=P(this,bt).get(t);o.delete(e),o.size===0&&(P(this,bt).delete(t),P(this,St).unobserve(t))}}};bt=new WeakMap,St=new WeakMap,Mt=new WeakMap,ue=new WeakSet,Fe=function(){return P(this,St)??ve(this,St,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var r of P(this,bt).get(e.target)||[])r(e)}}))},dt(de,"entries",new WeakMap);let ge=de;var _n=new ge({box:"border-box"});function Ne(a,t,e){var r=_n.observe(a,()=>e(a[t]));je(()=>(Ze(()=>e(a[t])),r))}var mn=S('<span class="font_mono">contextmenu</span> event',1),vn=S('<span class="font_mono">navigator.vibrate</span>'),hn=S('<span class="font_mono">navigator.vibrate</span>'),pn=S(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),fn=S(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),gn=S("<!> <!>",1);function xn(a){var t=gn(),e=N(t);Ct(e,{children:(o,c)=>{var i=pn(),h=N(i);Tt(h,{text:"Expected behaviors"});var w=v(h,4),C=v(k(w));se(C,{path:"Web/API/Element/contextmenu_event",children:(u,l)=>{var x=mn();E(),s(u,x)},$$slots:{default:!0}});var f=v(C,4);se(f,{path:"Web/API/Navigator/vibrate",children:(u,l)=>{var x=vn();s(u,x)},$$slots:{default:!0}}),E(),y(w);var p=v(w,10),d=v(k(p),10),g=v(k(d));se(g,{path:"Web/API/Navigator/vibrate",children:(u,l)=>{var x=hn();s(u,x)},$$slots:{default:!0}}),E(),y(d),y(p),s(o,i)},$$slots:{default:!0}});var r=v(e,2);Ct(r,{children:(o,c)=>{var i=fn(),h=N(i);Tt(h,{text:"Motivation"}),E(14),s(o,i)},$$slots:{default:!0}}),s(a,t)}function bn(a){const t=a-1;return t*t*t+1}function yn(a){return--a*a*a*a*a+1}function De(a,{from:t,to:e},r={}){var o=getComputedStyle(a),c=wn(a),i=o.transform==="none"?"":o.transform,[h,w]=o.transformOrigin.split(" ").map(parseFloat),C=t.width/e.width,f=t.height/e.height,p=(t.left+C*h-(e.left+h))/c,d=(t.top+f*w-(e.top+w))/c,{delay:g=0,duration:u=x=>Math.sqrt(x)*120,easing:l=bn}=r;return{delay:g,duration:typeof u=="function"?u(Math.sqrt(p*p+d*d)):u,easing:l,css:(x,$)=>{var T=$*p,O=$*d,F=x+$*C,H=x+$*f;return`transform: ${i} scale(${F}, ${H}) translate(${T}px, ${O}px);`}}}function wn(a){if("currentCSSZoom"in a)return a.currentCSSZoom;for(var t=a,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Rt,qt;class He{constructor(){V(this,Rt,z(0));V(this,qt,z(0))}get width(){return n(P(this,Rt))}set width(t){m(P(this,Rt),R(t))}get height(){return n(P(this,qt))}set height(t){m(P(this,qt),R(t))}}Rt=new WeakMap,qt=new WeakMap;var Ft,Ht,Lt,Wt,Bt;class $n{constructor(t,e){dt(this,"is_menu",!1);dt(this,"menu");V(this,Ft,z(!1));V(this,Ht,z());V(this,Lt,z(!1));V(this,Wt,z(null));V(this,Bt,z(null));this.menu=t,this.run=e}get selected(){return n(P(this,Ft))}set selected(t){m(P(this,Ft),R(t))}get run(){return n(P(this,Ht))}set run(t){m(P(this,Ht),R(t))}get pending(){return n(P(this,Lt))}set pending(t){m(P(this,Lt),R(t))}get error_message(){return n(P(this,Wt))}set error_message(t){m(P(this,Wt),R(t))}get promise(){return n(P(this,Bt))}set promise(t){m(P(this,Bt),R(t))}}Ft=new WeakMap,Ht=new WeakMap,Lt=new WeakMap,Wt=new WeakMap,Bt=new WeakMap;var Ut,Vt;class kn{constructor(t,e){dt(this,"is_menu",!0);dt(this,"menu");dt(this,"depth");V(this,Ut,z(!1));V(this,Vt,z(R([])));this.menu=t,this.depth=e}get selected(){return n(P(this,Ut))}set selected(t){m(P(this,Ut),R(t))}get items(){return n(P(this,Vt))}set items(t){m(P(this,Vt),R(t))}}Ut=new WeakMap,Vt=new WeakMap;var Xt;class Cn{constructor(){dt(this,"is_menu",!0);dt(this,"menu",null);dt(this,"depth",1);V(this,Xt,z(R([])))}get items(){return n(P(this,Xt))}set items(t){m(P(this,Xt),R(t))}}Xt=new WeakMap;var Yt,Gt,Kt,jt,Zt,Jt,Qt;class $e{constructor(t){dt(this,"layout");dt(this,"initial_layout");V(this,Yt,z(!1));V(this,Gt,z(0));V(this,Kt,z(0));V(this,jt,z(R([])));V(this,Zt,z());V(this,Jt,z(R(new Cn)));V(this,Qt,z(R([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new He}get opened(){return n(P(this,Yt))}set opened(t){m(P(this,Yt),R(t))}get x(){return n(P(this,Gt))}set x(t){m(P(this,Gt),R(t))}get y(){return n(P(this,Kt))}set y(t){m(P(this,Kt),R(t))}get params(){return n(P(this,jt))}set params(t){m(P(this,jt),R(t))}get error(){return n(P(this,Zt))}set error(t){m(P(this,Zt),R(t))}get root_menu(){return n(P(this,Jt))}set root_menu(t){m(P(this,Jt),R(t))}get selections(){return n(P(this,Qt))}set selections(t){m(P(this,Qt),R(t))}open(t,e,r){this.selections.length=0,this.opened=!0,this.x=e,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(r){const o=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=o??"unknown error",this.error=o}if(on(e)){t.pending=!0,t.error_message=null;const r=t.promise=e.then(o=>{if(r===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const c=typeof o.message=="string"?o.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return o}},o=>{if(r!==t.promise)return;const c=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=fe.maybe_get()??this.root_menu,r=new $n(e,t);return e.items.push(r),ze(()=>{e.items.length=0}),r}add_submenu(){const t=fe.maybe_get()??this.root_menu,e=new kn(t,t.depth+1);return t.items.push(e),fe.set(e),ze(()=>{t.items.length=0}),e}}Yt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,jt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap;const ke="contextmenu",Tn=`a,[data-${ke}]`,re=new Map;let In=0;const Pn=(a,t)=>{if(t==null)return;const e=(In+=1)-1+"";return a.dataset[ke]=e,re.set(e,t),{update:r=>{re.set(e,r)},destroy:()=>{re.delete(e)}}},Sn=17,Me=(a,t,e,r)=>{const o=An(a);return o!=null&&o.length?(r.open(o,t,e),navigator.vibrate&&navigator.vibrate(Sn),!0):!1},An=a=>{var c;let t=null,e=a,r,o;for(;e=e==null?void 0:e.closest(Tn);){if(r=e.dataset[ke]){if(t??(t=[]),o=re.get(r),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(c=window.getSelection())==null?void 0:c.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},_e=ye(),fe=ye(),xe=ye(()=>new He);var zn=(a,t)=>t.close(),En=S('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Le(a,t){lt(t,!0);const e="🔗",r=Q(t,"icon",3,e),o=_e.get(),c=($,T=location.host)=>{const O=pe(pe($,"https://"),"http://");return O.startsWith(T+"/")?pe(O,T):O},i=W(()=>c(t.href)),h=W(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),w=W(()=>n(h)?"noreferrer":void 0);var C=En(),f=k(C);f.__click=[zn,o];var p=k(f),d=k(p),g=k(d);L(g,()=>typeof r()=="string",$=>{var T=A();j(()=>mt(T,r())),s($,T)},$=>{var T=rt(),O=N(T);_t(O,r,()=>e),s($,T)}),y(d);var u=v(d,2),l=k(u),x=k(l);L(x,()=>t.children,$=>{var T=rt(),O=N(T);_t(O,()=>t.children),s($,T)},$=>{var T=A();j(()=>mt(T,n(i))),s($,T)}),y(l),y(u),y(p),y(f),y(C),j(()=>{ce(f,"href",t.href),ce(f,"rel",n(w))}),s(a,C),ut()}be(["click"]);var On=S('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(a,t){lt(t,!0);const e=_e.get(),r=e.add_entry(t.run);Ot(()=>{r.run=t.run});const o=W(()=>r.selected),c=W(()=>r.pending),i=W(()=>r.error_message);var h=On();h.__click=()=>{setTimeout(()=>e.activate(r))};var w=k(h),C=k(w),f=k(C);L(f,()=>typeof t.icon=="string",u=>{var l=A();j(()=>mt(l,t.icon)),s(u,l)},u=>{var l=rt(),x=N(l);L(x,()=>t.icon,$=>{var T=rt(),O=N(T);_t(O,()=>t.icon),s($,T)},null,!0),s(u,l)}),y(C);var p=v(C,2),d=k(p);_t(d,()=>t.children),y(p);var g=v(p,2);L(g,()=>n(c),u=>{an(u,{})},u=>{var l=rt(),x=N(l);L(x,()=>n(i),$=>{var T=A("⚠️");s($,T)},null,!0),s(u,l)}),y(w),y(h),j(()=>{ce(h,"title",n(i)?`Error: ${n(i)}`:void 0),pt(h,"selected",n(o))}),qe("mouseenter",h,u=>{Pt(u),e.select(r)}),s(a,h),ut()}be(["click"]);function We(a,t){at(a,{get run(){return t.run},icon:r=>{E();var o=A();j(()=>mt(o,t.icon)),s(r,o)},children:(r,o)=>{E();var c=A();j(()=>mt(c,t.content)),s(r,c)},$$slots:{icon:!0,default:!0}})}var Nn=S('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Dn=S('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Mn=S('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Rn=S("<!> <!> <!>",1);function te(a,t){lt(t,!0);const e=(b,_=ie)=>{Le(b,Se(_))},r=(b,_=ie)=>{We(b,Se(_))},o=Q(t,"contextmenu",19,()=>new $e),c=Q(t,"longpress_move_tolerance",3,21),i=Q(t,"longpress_duration",3,633),h=Q(t,"bypass_with_tap_then_longpress",3,!0),w=Q(t,"tap_then_longpress_duration",3,660),C=Q(t,"tap_then_longpress_move_tolerance",3,7),f=Q(t,"open_offset_x",19,()=>-2),p=Q(t,"open_offset_y",19,()=>-2),d=Q(t,"scoped",3,!1);_e.set(o());let g=z(void 0);const u=W(()=>o().layout),l=W(()=>o().initial_layout),x=W(()=>n(u)===n(l));let $=z(void 0),T=z(void 0);Ot(()=>{!n(x)&&n($)!==void 0&&(n(u).width=n($))}),Ot(()=>{!n(x)&&n(T)!==void 0&&(n(u).height=n(T))});const O=xe.set();Ot(()=>{if(n(g)){const b=n(g).getBoundingClientRect();O.width=b.width,O.height=b.height}});const F=W(()=>o().x+Math.min(0,n(u).width-(o().x+O.width))),H=W(()=>o().y+Math.min(0,n(u).height-(o().y+O.height)));let U=z(void 0),Z=z(void 0),J=z(void 0),X=z(void 0),q=z(void 0),tt=z(void 0);const Y=()=>{n(q)&&m(q,!1),n(X)!=null&&(clearTimeout(n(X)),m(X,null))},G=b=>{var I;if(n(tt)){m(tt,!1);return}if(n(q)){Y(),Pt(b);return}const{target:_}=b;b.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||(I=n(g))!=null&&I.contains(_)||he(_)||Ae(_)||Me(_,b.clientX+f(),b.clientY+p(),o())&&(Pt(b),Y())},B=b=>{n(q)&&m(q,!1);const{touches:_,target:I}=b;if(o().opened||_.length!==1||b.shiftKey||!(I instanceof HTMLElement||I instanceof SVGElement)||he(I)||Ae(I))return;const{clientX:M,clientY:D}=_[0];if(h()){if(n(J)!=null&&performance.now()-n(J)<w()&&Math.hypot(M-n(U),D-n(Z))<C()){m(tt,!0),m(J,null);return}m(J,R(performance.now()))}m(U,R(M)),m(Z,R(D)),n(X)!=null&&Y(),m(X,R(setTimeout(()=>{m(q,!0),Me(I,n(U)+f(),n(Z)+p(),o())},i())))},it=b=>{if(n(X)==null)return;const{touches:_}=b;if(_.length!==1)return;const{clientX:I,clientY:M}=_[0];Math.hypot(I-n(U),M-n(Z))>c()&&(o().opened&&o().close(),Y())},vt=b=>{n(X)!=null&&(n(q)&&Pt(b),Y())},ee=b=>{n(g)&&!n(g).contains(b.target)&&o().close()},et=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),At=b=>{const _=et.get(b.key);!_||he(b.target)||(Pt(b),_())},K=(b,_)=>{let I=null;const M=D=>{I&&(I(),I=null),D.disabled||(I=Ge(b,D.event,D.cb,{capture:!0,passive:D.passive}))};return M(_),{update:D=>{M(D)},destroy:()=>{I==null||I()}}};var gt=Rn();ct(kt,(b,_)=>K(b,_),()=>({event:"contextmenu",passive:!1,cb:G,disabled:d()})),ct(kt,(b,_)=>K(b,_),()=>({event:"touchstart",passive:!0,cb:B,disabled:d()})),ct(kt,(b,_)=>K(b,_),()=>({event:"touchmove",passive:!0,cb:it,disabled:d()})),ct(kt,(b,_)=>K(b,_),()=>({event:"touchend",passive:!1,cb:vt,disabled:d()})),ct(kt,(b,_)=>K(b,_),()=>({event:"touchcancel",passive:!1,cb:vt,disabled:d()})),ct(kt,(b,_)=>K(b,_),()=>({event:"mousedown",passive:!0,cb:ee,disabled:!o().opened})),ct(kt,(b,_)=>K(b,_),()=>({event:"keydown",passive:!1,cb:At,disabled:!o().opened}));var yt=N(gt);L(yt,d,b=>{var _=Nn(),I=k(_);_t(I,()=>t.children),y(_),ct(_,(M,D)=>K(M,D),()=>({event:"contextmenu",passive:!1,cb:G})),ct(_,(M,D)=>K(M,D),()=>({event:"touchstart",passive:!0,cb:B})),ct(_,(M,D)=>K(M,D),()=>({event:"touchmove",passive:!0,cb:it})),ct(_,(M,D)=>K(M,D),()=>({event:"touchend",passive:!1,cb:vt})),ct(_,(M,D)=>K(M,D),()=>({event:"touchcancel",passive:!1,cb:vt})),s(b,_)},b=>{var _=rt(),I=N(_);_t(I,()=>t.children),s(b,_)});var ne=v(yt,2);L(ne,()=>!n(x),b=>{var _=Dn();Ne(_,"clientHeight",I=>m(T,I)),Ne(_,"clientWidth",I=>m($,I)),s(b,_)});var oe=v(ne,2);L(oe,()=>o().opened,b=>{var _=Mn();Nt(_,20,()=>o().params,I=>I,(I,M)=>{var D=rt(),wt=N(D);L(wt,()=>typeof M=="function",ht=>{var nt=rt(),ot=N(nt);_t(ot,()=>M),s(ht,nt)},ht=>{var nt=rt(),ot=N(nt);L(ot,()=>M.snippet==="link",ft=>{e(ft,()=>M.props)},ft=>{var It=rt(),st=N(It);L(st,()=>M.snippet==="text",zt=>{r(zt,()=>M.props)},null,!0),s(ft,It)},!0),s(ht,nt)}),s(I,D)}),y(_),we(_,I=>m(g,I),()=>n(g)),j(()=>ae(_,"transform",`translate3d(${n(F)??""}px, ${n(H)??""}px, 0)`)),s(b,_)}),s(a,gt),ut()}var qn=S('<span class="display_contents"><!></span>');function xt(a,t){lt(t,!0);var e=qn(),r=k(e);_t(r,()=>t.children),y(e),ct(e,(o,c)=>Pn(o,c),()=>t.entries),s(a,e),ut()}var Fn=S('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Hn=S('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ce(a,t){lt(t,!0);const e=_e.get(),r=e.add_submenu(),{layout:o}=e,c=W(()=>r.selected);let i=z(void 0);const h=xe.get(),w=xe.set();let C=z(0),f=z(0);Ot(()=>{n(i)&&p(n(i),o,h)});const p=(F,H,U)=>{const{x:Z,y:J,width:X,height:q}=F.getBoundingClientRect();w.width=X,w.height=q;const tt=Z-n(C),Y=J-n(f),G=tt+X+U.width-H.width;if(G<=0)m(C,R(U.width));else{const B=X-tt;B<=0?m(C,-X):B>G?m(C,U.width-G):m(C,B-X)}m(f,R(Math.min(0,H.height-(Y+q))))};var d=Hn(),g=k(d),u=k(g),l=k(u),x=k(l);_t(x,()=>t.icon??ie),y(l);var $=v(l,2),T=k($);_t(T,()=>t.children),y($),y(u),E(2),y(g);var O=v(g,2);L(O,()=>n(c),F=>{var H=Fn(),U=k(H);_t(U,()=>t.menu),y(H),we(H,Z=>m(i,Z),()=>n(i)),j(()=>{ae(H,"transform",`translate3d(${n(C)??""}px, ${n(f)??""}px, 0)`),ae(H,"max-height",`${o.height??""}px`)}),s(F,H)}),y(d),j(()=>{ae(d,"--contextmenu_depth",r.depth),ce(g,"aria-expanded",n(c)),pt(g,"selected",n(c))}),qe("mouseenter",g,F=>{Pt(F),setTimeout(()=>e.select(r))}),s(a,d),ut()}var Ln=S("<!> <!>",1);function le(a,t){lt(t,!0);const e=Q(t,"name",3,"Cat"),r=Q(t,"icon",3,"😺");Ce(a,{icon:i=>{E();var h=A();j(()=>mt(h,r())),s(i,h)},menu:i=>{var h=Ln(),w=N(h);at(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:p=>{var d=rt(),g=N(d);L(g,()=>t.position==="adventure",u=>{var l=A("🏠");s(u,l)},u=>{var l=A("🌄");s(u,l)}),s(p,d)},children:(p,d)=>{var g=rt(),u=N(g);L(u,()=>t.position==="adventure",l=>{var x=A("go home");s(l,x)},l=>{var x=A("go adventure");s(l,x)}),s(p,g)},$$slots:{icon:!0,default:!0}});var C=v(w,2);at(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:p=>{var d=rt(),g=N(d);L(g,()=>t.position==="adventure",u=>{var l=A("🌄");s(u,l)},u=>{var l=A("🏠");s(u,l)}),s(p,d)},children:(p,d)=>{var g=rt(),u=N(g);L(u,()=>t.position==="adventure",l=>{var x=A("do adventure");s(l,x)},l=>{var x=A("be home");s(l,x)}),s(p,g)},$$slots:{icon:!0,default:!0}}),s(i,h)},children:(i,h)=>{E();var w=A();j(()=>mt(w,e())),s(i,w)},$$slots:{icon:!0,menu:!0,default:!0}}),ut()}var Wn=S("<!> <!>",1);function Bn(a,t){var e=Wn(),r=N(e);Le(r,{href:"https://github.com/ryanatkn/fuz",icon:i=>{cn(i,{data:ln,size:"var(--icon_size_xs)"})},children:(i,h)=>{E();var w=A("Source code");s(i,w)},$$slots:{icon:!0,default:!0}});var o=v(r,2);at(o,{get run(){return t.toggle_about_dialog},icon:i=>{E();var h=A("?");s(i,h)},children:(i,h)=>{E();var w=A("About");s(i,w)},$$slots:{icon:!0,default:!0}}),s(a,e)}const Be=a=>{const t=a.length;if(t===2)return"cats";if(t===0)return null;const e=a[0];return e.icon+e.name};var Un=S("<!> <!>",1),Vn=S("<!> <!> <!>",1);function Xn(a,t){lt(t,!0);const e=W(()=>Be(t.adventure_cats));Ce(a,{icon:c=>{E();var i=A("🏠");s(c,i)},menu:c=>{var i=Vn(),h=N(i);L(h,()=>n(e),f=>{at(f,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{E();var g=A("🐈‍⬛");s(d,g)},children:(d,g)=>{E();var u=A("call");s(d,u)},$$slots:{icon:!0,default:!0}})});var w=v(h,2);Nt(w,17,()=>t.home_cats,f=>f.name,(f,p)=>{le(f,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var C=v(w,2);L(C,()=>!n(e),f=>{var p=Un(),d=N(p);at(d,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:l=>{E();var x=A("🏠");s(l,x)},children:(l,x)=>{E();var $=A("be");s(l,$)},$$slots:{icon:!0,default:!0}});var g=v(d,2);at(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:l=>{E();var x=A("🦋");s(l,x)},children:(l,x)=>{E();var $=A("leave");s(l,$)},$$slots:{icon:!0,default:!0}}),s(f,p)}),s(c,i)},children:(c,i)=>{E();var h=A("home");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),ut()}var Yn=S("<!> <!>",1),Gn=S("<!> <!> <!>",1);function Kn(a,t){lt(t,!0);const e=W(()=>Be(t.home_cats));Ce(a,{icon:c=>{E();var i=A("🌄");s(c,i)},menu:c=>{var i=Gn(),h=N(i);L(h,()=>n(e),f=>{at(f,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{E();var g=A("🦋");s(d,g)},children:(d,g)=>{E();var u=A("call");s(d,u)},$$slots:{icon:!0,default:!0}})});var w=v(h,2);Nt(w,17,()=>t.adventure_cats,f=>f.name,(f,p)=>{le(f,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var C=v(w,2);L(C,()=>!n(e),f=>{var p=Yn(),d=N(p);at(d,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:l=>{E();var x=A("🌄");s(l,x)},children:(l,x)=>{E();var $=A("do");s(l,$)},$$slots:{icon:!0,default:!0}});var g=v(d,2);at(g,{run:()=>t.act({type:"call_cats_home"}),icon:l=>{E();var x=A("🐈‍⬛");s(l,x)},children:(l,x)=>{E();var $=A("leave");s(l,$)},$$slots:{icon:!0,default:!0}}),s(f,p)}),s(c,i)},children:(c,i)=>{E();var h=A("adventure");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),ut()}var jn=S('<span class="icon svelte-u0xdy"> </span>'),Zn=S('<span class="name svelte-u0xdy"><!> </span>'),Jn=S('<span class="cat svelte-u0xdy"><!><!></span>');function Re(a,t){lt(t,!0);const e=Q(t,"name",3,"Cat"),r=Q(t,"icon",3,"😺"),o=Q(t,"show_name",3,!0),c=Q(t,"show_icon",3,!0);var i=Jn(),h=k(i);L(h,c,C=>{var f=jn(),p=k(f,!0);y(f),j(()=>mt(p,r())),s(C,f)});var w=v(h);L(w,o,C=>{var f=Zn(),p=k(f);_t(p,()=>t.children??ie);var d=v(p,1,!0);y(f),j(()=>mt(d,e())),s(C,f)}),y(i),j(()=>pt(i,"has-icon",c())),s(a,i),ut()}const Qn=`<script lang="ts">
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
		cats: Array<Cat>,
		swapped: boolean,
	): {home_cats: Array<Cat>; adventure_cats: Array<Cat>} => {
		const home_cats: Array<Cat> = [];
		const adventure_cats: Array<Cat> = [];
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
`;var to=S("<!> <!>",1),eo=S('<div class="cat_wrapper svelte-1b1oync"><!></div>'),no=S('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),oo=S('<div class="cat_wrapper svelte-1b1oync"><!></div>'),so=S('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),ao=S("<section><!> <!></section> <section><!></section>",1),ro=S("<!> <!>",1),io=S('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),co=S("<!> <!>",1);function lo(a,t){lt(t,!0);const e="Alyssa",r="Ben",o="home";let c=z(o),i=z(o);const h=W(()=>n(c)===n(i)?"😺":"😾"),w=W(()=>n(c)===n(i)?"😸":"😿"),C=W(()=>({name:e,icon:n(h),position:n(c)})),f=W(()=>({name:r,icon:n(w),position:n(i)}));let p=z(!1);const d=(q,tt)=>{const Y=[],G=[];for(const B of q){const it=B.position==="home"?Y:G;tt?it.unshift(B):it.push(B)}return{home_cats:Y,adventure_cats:G}},g=W(()=>d([n(C),n(f)],n(p))),u=W(()=>n(g).home_cats),l=W(()=>n(g).adventure_cats),x=W(()=>n(c)!==o||n(i)!==o),$=()=>{m(c,o),m(i,o)};let T=z(!1);const O=()=>{m(T,!n(T))},F=q=>{switch(q.type){case"call_cats_adventure":{m(c,"adventure"),m(i,"adventure");break}case"call_cats_home":{m(c,"home"),m(i,"home");break}case"cat_go_adventure":{q.name===e?m(c,"adventure"):q.name===r&&m(i,"adventure");break}case"cat_go_home":{q.name===e?m(c,"home"):q.name===r&&m(i,"home");break}case"cat_be_or_do":{m(p,!n(p));break}}},[H,U]=tn({fallback:(q,tt)=>{const Y=window.getComputedStyle(q),G=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:yn,css:B=>`
					transform: ${G} scale(${B});
					opacity: ${B}
				`}}});var Z=co(),J=N(Z);te(J,{scoped:!0,children:(q,tt)=>{Ct(q,{children:(Y,G)=>{var B=ro(),it=N(B);Tt(it,{text:"Full example"});var vt=v(it,2);xt(vt,{entries:et=>{var At=to(),K=N(At);L(K,()=>n(x),yt=>{We(yt,{run:$,content:"Reset",icon:"↻"})});var gt=v(K,2);Bn(gt,{toggle_about_dialog:O}),s(et,At)},children:(et,At)=>{var K=ao(),gt=N(K),yt=k(gt);xt(yt,{entries:I=>{Xn(I,{act:F,get home_cats(){return n(u)},get adventure_cats(){return n(l)}})},children:(I,M)=>{var D=no(),wt=v(k(D),2);Nt(wt,29,()=>n(u),({name:ht,icon:nt,position:ot})=>ht,(ht,nt)=>{let ot=()=>n(nt).name,ft=()=>n(nt).icon,It=()=>n(nt).position;var st=eo(),zt=k(st);xt(zt,{entries:$t=>{le($t,{act:F,get name(){return ot()},get icon(){return ft()},get position(){return It()}})},children:($t,Ve)=>{Re($t,{get name(){return ot()},get icon(){return ft()}})},$$slots:{entries:!0,default:!0}}),y(st),Et(1,st,()=>U,()=>({key:ot()})),Et(2,st,()=>H,()=>({key:ot()})),Pe(st,()=>De,null),s(ht,st)}),y(wt),y(D),s(I,D)},$$slots:{entries:!0,default:!0}});var ne=v(yt,2);xt(ne,{entries:I=>{Kn(I,{act:F,get home_cats(){return n(u)},get adventure_cats(){return n(l)}})},children:(I,M)=>{var D=so(),wt=v(k(D),2);Nt(wt,29,()=>n(l),({name:ht,icon:nt,position:ot})=>ht,(ht,nt)=>{let ot=()=>n(nt).name,ft=()=>n(nt).icon,It=()=>n(nt).position;var st=oo(),zt=k(st);xt(zt,{entries:$t=>{le($t,{act:F,get name(){return ot()},get icon(){return ft()},get position(){return It()}})},children:($t,Ve)=>{Re($t,{get name(){return ot()},get icon(){return ft()}})},$$slots:{entries:!0,default:!0}}),y(st),Et(1,st,()=>U,()=>({key:ot()})),Et(2,st,()=>H,()=>({key:ot()})),Pe(st,()=>De,null),s(ht,st)}),y(wt),y(D),s(I,D)},$$slots:{entries:!0,default:!0}}),y(gt);var oe=v(gt,2),b=k(oe);rn(b,{summary:I=>{E();var M=A("View example source");s(I,M)},children:(I,M)=>{Dt(I,{content:Qn})},$$slots:{summary:!0,default:!0}}),y(oe),s(et,K)},$$slots:{entries:!0,default:!0}}),s(Y,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var X=v(J,2);L(X,()=>n(T),q=>{sn(q,{onclose:()=>m(T,!1),children:(tt,Y)=>{var G=io(),B=v(k(G),8),it=v(k(B),2);un(it,{});var vt=v(it,4);dn(vt,{}),y(B),y(G),s(tt,G)},$$slots:{default:!0}})}),s(a,Z),ut()}var uo=S("<!> <!> <!>",1),_o=S(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),mo=S("<!> <!>",1);function vo(a){let t=z(!1),e=z(!1),r=z(!1);te(a,{scoped:!0,children:(o,c)=>{Ct(o,{children:(i,h)=>{var w=mo(),C=N(w);Tt(C,{text:"Basic usage"});var f=v(C,2);xt(f,{entries:d=>{var g=uo(),u=N(g);at(u,{run:()=>m(t,!n(t)),children:($,T)=>{E();var O=A("Hello world");s($,O)},$$slots:{default:!0}});var l=v(u,2);at(l,{run:()=>m(e,!n(e)),icon:T=>{E();var O=A("🌞");s(T,O)},children:(T,O)=>{E();var F=A("Hello with an optional icon snippet");s(T,F)},$$slots:{icon:!0,default:!0}});var x=v(l,2);at(x,{run:()=>m(r,!n(r)),icon:"🌚",children:($,T)=>{E();var O=A("Hello with an optional icon string");s($,O)},$$slots:{default:!0}}),s(d,g)},children:(d,g)=>{var u=_o(),l=v(k(u),2),x=W(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${n(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${n(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${n(r)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Dt(l,{get content(){return n(x)}});var $=v(l,2),T=k($),O=k(T);y(T),y($);var F=v($,2),H=k(F),U=k(H);y(H),y(F);var Z=v(F,2),J=k(Z),X=k(J);y(J),y(Z),E(2),y(u),j(()=>{pt(T,"color_g_5",n(t)),mt(O,`greeted = ${n(t)??""}`),pt(H,"color_e_5",n(e)),mt(U,`greeted_icon_snippet = ${n(e)??""}`),pt(J,"color_d_5",n(r)),mt(X,`greeted_icon_string = ${n(r)??""}`)}),s(d,u)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var ho=S("<div>toggled</div>"),po=S(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),fo=S("<!> <!>",1);function go(a,t){lt(t,!0);const e=new $e;let r=z(!1);te(a,{contextmenu:e,scoped:!0,children:(o,c)=>{Ct(o,{children:(i,h)=>{var w=fo(),C=N(w);Tt(C,{text:"Custom instance"});var f=v(C,2);xt(f,{entries:d=>{at(d,{run:()=>m(r,!n(r)),children:(g,u)=>{E();var l=A("Toggle");s(g,l)},$$slots:{default:!0}})},children:(d,g)=>{var u=po(),l=k(u);Dt(l,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var x=v(l,2);Dt(x,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=v(x,4),T=k($);L(T,()=>n(r),O=>{var F=ho();Et(3,F,()=>en),s(O,F)}),y($),y(u),s(d,u)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),ut()}const xo=(a,t)=>{const e=window.getSelection();if(!e||!n(t))return;const r=document.createRange();r.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(r)};var bo=S(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),yo=S("<div><!></div> <!>",1);function wo(a,t){lt(t,!0);const e=new $e;let r=z(!1),o=z(void 0),c=z("");const i="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",h=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,w=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=W(()=>n(c)===i||n(c)===h||n(c)===w);te(a,{contextmenu:e,scoped:!0,children:(f,p)=>{Ct(f,{children:(d,g)=>{var u=yo(),l=N(u),x=k(l);Tt(x,{text:"Select text"}),y(l);var $=v(l,2);xt($,{entries:O=>{at(O,{run:()=>m(r,!n(r)),children:(F,H)=>{E();var U=A("Toggle something");s(F,U)},$$slots:{default:!0}})},children:(O,F)=>{var H=bo(),U=k(H),Z=v(k(U),2),J=v(k(Z));J.__click=[xo,o],E(),y(Z),y(U),we(U,et=>m(o,et),()=>n(o));var X=v(U,2),q=k(X);nn(q),y(X);var tt=v(X,2),Y=v(tt,2),G=k(Y);Ke(G),y(Y);var B=v(Y,2),it=k(B);se(it,{path:"Web/HTML/Global_attributes/contenteditable"}),E(),y(B);var vt=v(B,4),ee=v(vt,4);y(H),j(()=>{pt(H,"color_g_5",n(C)),pt(J,"color_a",n(r)),pt(tt,"color_g_5",n(C))}),Oe(q,()=>n(c),et=>m(c,et)),Oe(G,()=>n(c),et=>m(c,et)),Ee("innerText",vt,()=>n(c),et=>m(c,et)),Ee("innerText",ee,()=>n(c),et=>m(c,et)),s(O,H)},$$slots:{entries:!0,default:!0}}),j(()=>pt(l,"color_d_5",n(C))),s(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),ut()}be(["click"]);var $o=S(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function ko(a){te(a,{scoped:!0,children:(t,e)=>{Ct(t,{children:(r,o)=>{var c=$o(),i=N(c);Tt(i,{text:"Default behaviors"});var h=v(i,2),w=k(h);Dt(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),E(6),y(h),s(r,c)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Co=S("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function Jo(a,t){lt(t,!0);const r=Qe("Contextmenu");Je(a,{tome:r,children:(o,c)=>{var i=Co(),h=v(N(i),2);vo(h);var w=v(h,2);ko(w);var C=v(w,2);go(C,{});var f=v(C,2);wo(f,{});var p=v(f,2);lo(p,{});var d=v(p,2);xn(d),s(o,i)},$$slots:{default:!0}}),ut()}export{Jo as component};
