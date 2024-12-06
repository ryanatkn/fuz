var Xe=Object.defineProperty;var Te=a=>{throw TypeError(a)};var Ye=(a,t,e)=>t in a?Xe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var _t=(a,t,e)=>Ye(a,typeof t!="symbol"?t+"":t,e),me=(a,t,e)=>t.has(a)||Te("Cannot "+e);var I=(a,t,e)=>(me(a,t,"read from private field"),e?e.call(a):t.get(a)),V=(a,t,e)=>t.has(a)?Te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e),ve=(a,t,e,r)=>(me(a,t,"write to private field"),r?r.call(a,e):t.set(a,e),e),Ie=(a,t,e)=>(me(a,t,"access private method"),e);import{a as s,t as P,p as be,c as it,k as A,x as qe,B as Ge}from"../chunks/disclose-version.D3rPzbyJ.js";import{m as Ke,u as je,f as N,s as v,c as k,a4 as E,r as y,a6 as z,g as n,G as m,a as ut,t as j,p as dt,d as W,X as Ot,aw as kt,a3 as ie}from"../chunks/runtime.B-gUiV1I.js";import{T as Ze}from"../chunks/Tome_Content.B3rIKLOc.js";import{g as Je}from"../chunks/tome.CIxbnHdd.js";import{M as se}from"../chunks/Mdn_Link.DzFKEQ9Y.js";import{T as Ct,a as Tt}from"../chunks/Tome_Section_Header.DXxo_wk_.js";import{p as M,i as L}from"../chunks/if.DNsq1zR9.js";import{c as ye,e as Nt}from"../chunks/context_helpers.mn64om0Y.js";import{t as Et,a as Pe,c as Qe,s as tn}from"../chunks/index.D1I6WcpA.js";import{C as Dt}from"../chunks/Code.LFCeq68w.js";import{s as mt,b as ce,r as en}from"../chunks/attributes.B_gKRhPE.js";import{a as lt}from"../chunks/intersect.DPevIX2y.js";import{s as ae}from"../chunks/style.PwPRnE0L.js";import{b as we}from"../chunks/this.B1Rg4b_C.js";import{p as tt,s as Se}from"../chunks/props.9yi1M7Bh.js";import{a as nn,s as Pt,b as he,c as Ae,D as on}from"../chunks/Dialog.Cpg58l4V.js";import{o as ze}from"../chunks/index-client.BtWieJN8.js";import{s as vt}from"../chunks/render.Bkis_WcS.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as ft}from"../chunks/class.BHrBxz3m.js";import{P as sn}from"../chunks/Pending_Animation.D3_eePIg.js";import{D as an,b as Ee}from"../chunks/Details.CQlzY0ji.js";import{S as rn,g as cn}from"../chunks/logos.D2-NQh2n.js";import{C as ln,T as un}from"../chunks/Theme_Input.B7a_r7qR.js";import{b as Oe}from"../chunks/input.DIsRvsjv.js";var yt,St,Mt,ue,Fe;const de=class de{constructor(t){V(this,ue);V(this,yt,new WeakMap);V(this,St);V(this,Mt);ve(this,Mt,t)}observe(t,e){var r=I(this,yt).get(t)||new Set;return r.add(e),I(this,yt).set(t,r),Ie(this,ue,Fe).call(this).observe(t,I(this,Mt)),()=>{var o=I(this,yt).get(t);o.delete(e),o.size===0&&(I(this,yt).delete(t),I(this,St).unobserve(t))}}};yt=new WeakMap,St=new WeakMap,Mt=new WeakMap,ue=new WeakSet,Fe=function(){return I(this,St)??ve(this,St,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var r of I(this,yt).get(e.target)||[])r(e)}}))},_t(de,"entries",new WeakMap);let ge=de;var dn=new ge({box:"border-box"});function Ne(a,t,e){var r=dn.observe(a,()=>e(a[t]));Ke(()=>(je(()=>e(a[t])),r))}var _n=P('<span class="font_mono">contextmenu</span> event',1),mn=P('<span class="font_mono">navigator.vibrate</span>'),vn=P('<span class="font_mono">navigator.vibrate</span>'),hn=P(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),pn=P(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),fn=P("<!> <!>",1);function gn(a){var t=fn(),e=N(t);Ct(e,{children:(o,c)=>{var i=hn(),h=N(i);Tt(h,{text:"Expected behaviors"});var w=v(h,4),C=v(k(w));se(C,{path:"Web/API/Element/contextmenu_event",children:(u,l)=>{var b=_n();E(),s(u,b)},$$slots:{default:!0}});var f=v(C,4);se(f,{path:"Web/API/Navigator/vibrate",children:(u,l)=>{var b=mn();s(u,b)},$$slots:{default:!0}}),E(),y(w);var p=v(w,10),d=v(k(p),10),x=v(k(d));se(x,{path:"Web/API/Navigator/vibrate",children:(u,l)=>{var b=vn();s(u,b)},$$slots:{default:!0}}),E(),y(d),y(p),s(o,i)},$$slots:{default:!0}});var r=v(e,2);Ct(r,{children:(o,c)=>{var i=pn(),h=N(i);Tt(h,{text:"Motivation"}),E(14),s(o,i)},$$slots:{default:!0}}),s(a,t)}function xn(a){const t=a-1;return t*t*t+1}function bn(a){return--a*a*a*a*a+1}function De(a,{from:t,to:e},r={}){var o=getComputedStyle(a),c=yn(a),i=o.transform==="none"?"":o.transform,[h,w]=o.transformOrigin.split(" ").map(parseFloat),C=t.width/e.width,f=t.height/e.height,p=(t.left+C*h-(e.left+h))/c,d=(t.top+f*w-(e.top+w))/c,{delay:x=0,duration:u=b=>Math.sqrt(b)*120,easing:l=xn}=r;return{delay:x,duration:typeof u=="function"?u(Math.sqrt(p*p+d*d)):u,easing:l,css:(b,$)=>{var T=$*p,O=$*d,F=b+$*C,H=b+$*f;return`transform: ${i} scale(${F}, ${H}) translate(${T}px, ${O}px);`}}}function yn(a){if("currentCSSZoom"in a)return a.currentCSSZoom;for(var t=a,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Rt,qt;class He{constructor(){V(this,Rt,z(0));V(this,qt,z(0))}get width(){return n(I(this,Rt))}set width(t){m(I(this,Rt),M(t))}get height(){return n(I(this,qt))}set height(t){m(I(this,qt),M(t))}}Rt=new WeakMap,qt=new WeakMap;var Ft,Ht,Lt,Wt,Bt;class wn{constructor(t,e){_t(this,"is_menu",!1);_t(this,"menu");V(this,Ft,z(!1));V(this,Ht,z());V(this,Lt,z(!1));V(this,Wt,z(null));V(this,Bt,z(null));this.menu=t,this.run=e}get selected(){return n(I(this,Ft))}set selected(t){m(I(this,Ft),M(t))}get run(){return n(I(this,Ht))}set run(t){m(I(this,Ht),M(t))}get pending(){return n(I(this,Lt))}set pending(t){m(I(this,Lt),M(t))}get error_message(){return n(I(this,Wt))}set error_message(t){m(I(this,Wt),M(t))}get promise(){return n(I(this,Bt))}set promise(t){m(I(this,Bt),M(t))}}Ft=new WeakMap,Ht=new WeakMap,Lt=new WeakMap,Wt=new WeakMap,Bt=new WeakMap;var Ut,Vt;class $n{constructor(t,e){_t(this,"is_menu",!0);_t(this,"menu");_t(this,"depth");V(this,Ut,z(!1));V(this,Vt,z(M([])));this.menu=t,this.depth=e}get selected(){return n(I(this,Ut))}set selected(t){m(I(this,Ut),M(t))}get items(){return n(I(this,Vt))}set items(t){m(I(this,Vt),M(t))}}Ut=new WeakMap,Vt=new WeakMap;var Xt;class kn{constructor(){_t(this,"is_menu",!0);_t(this,"menu",null);_t(this,"depth",1);V(this,Xt,z(M([])))}get items(){return n(I(this,Xt))}set items(t){m(I(this,Xt),M(t))}}Xt=new WeakMap;var Yt,Gt,Kt,jt,Zt,Jt,Qt;class $e{constructor(t){_t(this,"layout");_t(this,"initial_layout");V(this,Yt,z(!1));V(this,Gt,z(0));V(this,Kt,z(0));V(this,jt,z(M([])));V(this,Zt,z());V(this,Jt,z(M(new kn)));V(this,Qt,z(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new He}get opened(){return n(I(this,Yt))}set opened(t){m(I(this,Yt),M(t))}get x(){return n(I(this,Gt))}set x(t){m(I(this,Gt),M(t))}get y(){return n(I(this,Kt))}set y(t){m(I(this,Kt),M(t))}get params(){return n(I(this,jt))}set params(t){m(I(this,jt),M(t))}get error(){return n(I(this,Zt))}set error(t){m(I(this,Zt),M(t))}get root_menu(){return n(I(this,Jt))}set root_menu(t){m(I(this,Jt),M(t))}get selections(){return n(I(this,Qt))}set selections(t){m(I(this,Qt),M(t))}open(t,e,r){this.selections.length=0,this.opened=!0,this.x=e,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(r){const o=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=o??"unknown error",this.error=o}if(nn(e)){t.pending=!0,t.error_message=null;const r=t.promise=e.then(o=>{if(r===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const c=typeof o.message=="string"?o.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return o}},o=>{if(r!==t.promise)return;const c=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=fe.maybe_get()??this.root_menu,r=new wn(e,t);return e.items.push(r),ze(()=>{e.items.length=0}),r}add_submenu(){const t=fe.maybe_get()??this.root_menu,e=new $n(t,t.depth+1);return t.items.push(e),fe.set(e),ze(()=>{t.items.length=0}),e}}Yt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,jt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap;const ke="contextmenu",Cn=`a,[data-${ke}]`,re=new Map;let Tn=0;const In=(a,t)=>{if(t==null)return;const e=(Tn+=1)-1+"";return a.dataset[ke]=e,re.set(e,t),{update:r=>{re.set(e,r)},destroy:()=>{re.delete(e)}}},Pn=17,Me=(a,t,e,r)=>{const o=Sn(a);return o!=null&&o.length?(r.open(o,t,e),navigator.vibrate&&navigator.vibrate(Pn),!0):!1},Sn=a=>{var c;let t=null,e=a,r,o;for(;e=e==null?void 0:e.closest(Cn);){if(r=e.dataset[ke]){if(t??(t=[]),o=re.get(r),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(c=window.getSelection())==null?void 0:c.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},_e=ye(),fe=ye(),xe=ye(()=>new He);var An=(a,t)=>t.close(),zn=P('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Le(a,t){ut(t,!0);const e="🔗",r=tt(t,"icon",3,e),o=_e.get(),c=($,T=location.host)=>{const O=pe(pe($,"https://"),"http://");return O.startsWith(T+"/")?pe(O,T):O},i=W(()=>c(t.href)),h=W(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),w=W(()=>n(h)?"noreferrer":void 0);var C=zn(),f=k(C);f.__click=[An,o];var p=k(f),d=k(p),x=k(d);L(x,()=>typeof r()=="string",$=>{var T=A();j(()=>vt(T,r())),s($,T)},$=>{var T=it(),O=N(T);mt(O,r,()=>e),s($,T)}),y(d);var u=v(d,2),l=k(u),b=k(l);L(b,()=>t.children,$=>{var T=it(),O=N(T);mt(O,()=>t.children),s($,T)},$=>{var T=A();j(()=>vt(T,n(i))),s($,T)}),y(l),y(u),y(p),y(f),y(C),j(()=>{ce(f,"href",t.href),ce(f,"rel",n(w))}),s(a,C),dt()}be(["click"]);var En=P('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function rt(a,t){ut(t,!0);const e=_e.get(),r=e.add_entry(t.run);Ot(()=>{r.run=t.run});const o=W(()=>r.selected),c=W(()=>r.pending),i=W(()=>r.error_message);var h=En();h.__click=()=>{setTimeout(()=>e.activate(r))};var w=k(h),C=k(w),f=k(C);L(f,()=>typeof t.icon=="string",u=>{var l=A();j(()=>vt(l,t.icon)),s(u,l)},u=>{var l=it(),b=N(l);L(b,()=>t.icon,$=>{var T=it(),O=N(T);mt(O,()=>t.icon),s($,T)},null,!0),s(u,l)}),y(C);var p=v(C,2),d=k(p);mt(d,()=>t.children),y(p);var x=v(p,2);L(x,()=>n(c),u=>{sn(u,{})},u=>{var l=it(),b=N(l);L(b,()=>n(i),$=>{var T=A("⚠️");s($,T)},null,!0),s(u,l)}),y(w),y(h),j(()=>{ce(h,"title",n(i)?`Error: ${n(i)}`:void 0),ft(h,"selected",n(o))}),qe("mouseenter",h,u=>{Pt(u),e.select(r)}),s(a,h),dt()}be(["click"]);function We(a,t){rt(a,{get run(){return t.run},icon:r=>{E();var o=A();j(()=>vt(o,t.icon)),s(r,o)},children:(r,o)=>{E();var c=A();j(()=>vt(c,t.content)),s(r,c)},$$slots:{icon:!0,default:!0}})}var On=P('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Nn=P('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Dn=P('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Mn=P("<!> <!> <!>",1);function te(a,t){ut(t,!0);const e=(g,_=ie)=>{Le(g,Se(_))},r=(g,_=ie)=>{We(g,Se(_))},o=tt(t,"contextmenu",19,()=>new $e),c=tt(t,"longpress_move_tolerance",3,21),i=tt(t,"longpress_duration",3,633),h=tt(t,"bypass_with_tap_then_longpress",3,!0),w=tt(t,"tap_then_longpress_duration",3,660),C=tt(t,"tap_then_longpress_move_tolerance",3,7),f=tt(t,"open_offset_x",19,()=>-2),p=tt(t,"open_offset_y",19,()=>-2),d=tt(t,"scoped",3,!1);_e.set(o());let x=z(void 0);const u=W(()=>o().layout),l=W(()=>o().initial_layout),b=W(()=>n(u)===n(l));let $=z(void 0),T=z(void 0);Ot(()=>{!n(b)&&n($)!==void 0&&(n(u).width=n($))}),Ot(()=>{!n(b)&&n(T)!==void 0&&(n(u).height=n(T))});const O=xe.set();Ot(()=>{if(n(x)){const g=n(x).getBoundingClientRect();O.width=g.width,O.height=g.height}});const F=W(()=>o().x+Math.min(0,n(u).width-(o().x+O.width))),H=W(()=>o().y+Math.min(0,n(u).height-(o().y+O.height)));let U=z(void 0),Z=z(void 0),J=z(void 0),X=z(void 0),R=z(void 0),et=z(void 0);const Y=()=>{n(R)&&m(R,!1),n(X)!=null&&(clearTimeout(n(X)),m(X,null))},G=g=>{var S;if(n(et)){m(et,!1);return}if(n(R)){Y(),Pt(g);return}const{target:_}=g;g.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||(S=n(x))!=null&&S.contains(_)||he(_)||Ae(_)||Me(_,g.clientX+f(),g.clientY+p(),o())&&(Pt(g),Y())},B=g=>{n(R)&&m(R,!1);const{touches:_,target:S}=g;if(o().opened||_.length!==1||g.shiftKey||!(S instanceof HTMLElement||S instanceof SVGElement)||he(S)||Ae(S))return;const{clientX:D,clientY:q}=_[0];if(h()){if(n(J)!=null&&performance.now()-n(J)<w()&&Math.hypot(D-n(U),q-n(Z))<C()){m(et,!0),m(J,null);return}m(J,M(performance.now()))}m(U,M(D)),m(Z,M(q)),n(X)!=null&&Y(),m(X,M(setTimeout(()=>{m(R,!0),Me(S,n(U)+f(),n(Z)+p(),o())},i())))},ct=g=>{if(n(X)==null)return;const{touches:_}=g;if(_.length!==1)return;const{clientX:S,clientY:D}=_[0];Math.hypot(S-n(U),D-n(Z))>c()&&(o().opened&&o().close(),Y())},ht=g=>{n(X)!=null&&(n(R)&&Pt(g),Y())},ee=g=>{n(x)&&!n(x).contains(g.target)&&o().close()},nt=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),At=g=>{const _=nt.get(g.key);!_||he(g.target)||(Pt(g),_())},K=(g,_)=>{let S=null,D=null;const q=Q=>{S&&g.removeEventListener(D,S),Q.disabled||(g.addEventListener(Q.event,Q.cb,{capture:!0,passive:Q.passive}),S=Q.cb,D=Q.event)};return q(_),{update:Q=>{q(Q)},destroy:()=>{S&&g.removeEventListener(D,S)}}};var xt=Mn();lt(kt,(g,_)=>K(g,_),()=>({event:"contextmenu",passive:!1,cb:G,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchstart",passive:!0,cb:B,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchmove",passive:!0,cb:ct,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchend",passive:!1,cb:ht,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"touchcancel",passive:!1,cb:ht,disabled:d()})),lt(kt,(g,_)=>K(g,_),()=>({event:"mousedown",passive:!0,cb:ee,disabled:!o().opened})),lt(kt,(g,_)=>K(g,_),()=>({event:"keydown",passive:!1,cb:At,disabled:!o().opened}));var wt=N(xt);L(wt,d,g=>{var _=On(),S=k(_);mt(S,()=>t.children),y(_),lt(_,(D,q)=>K(D,q),()=>({event:"contextmenu",passive:!1,cb:G})),lt(_,(D,q)=>K(D,q),()=>({event:"touchstart",passive:!0,cb:B})),lt(_,(D,q)=>K(D,q),()=>({event:"touchmove",passive:!0,cb:ct})),lt(_,(D,q)=>K(D,q),()=>({event:"touchend",passive:!1,cb:ht})),lt(_,(D,q)=>K(D,q),()=>({event:"touchcancel",passive:!1,cb:ht})),s(g,_)},g=>{var _=it(),S=N(_);mt(S,()=>t.children),s(g,_)});var ne=v(wt,2);L(ne,()=>!n(b),g=>{var _=Nn();Ne(_,"clientHeight",S=>m(T,S)),Ne(_,"clientWidth",S=>m($,S)),s(g,_)});var oe=v(ne,2);L(oe,()=>o().opened,g=>{var _=Dn();Nt(_,20,()=>o().params,S=>S,(S,D)=>{var q=it(),Q=N(q);L(Q,()=>typeof D=="function",pt=>{var ot=it(),st=N(ot);mt(st,()=>D),s(pt,ot)},pt=>{var ot=it(),st=N(ot);L(st,()=>D.snippet==="link",gt=>{e(gt,()=>D.props)},gt=>{var It=it(),at=N(It);L(at,()=>D.snippet==="text",zt=>{r(zt,()=>D.props)},null,!0),s(gt,It)},!0),s(pt,ot)}),s(S,q)}),y(_),we(_,S=>m(x,S),()=>n(x)),j(()=>ae(_,"transform",`translate3d(${n(F)??""}px, ${n(H)??""}px, 0)`)),s(g,_)}),s(a,xt),dt()}var Rn=P('<span class="display_contents"><!></span>');function bt(a,t){ut(t,!0);var e=Rn(),r=k(e);mt(r,()=>t.children),y(e),lt(e,(o,c)=>In(o,c),()=>t.entries),s(a,e),dt()}var qn=P('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Fn=P('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ce(a,t){ut(t,!0);const e=_e.get(),r=e.add_submenu(),{layout:o}=e,c=W(()=>r.selected);let i=z(void 0);const h=xe.get(),w=xe.set();let C=z(0),f=z(0);Ot(()=>{n(i)&&p(n(i),o,h)});const p=(F,H,U)=>{const{x:Z,y:J,width:X,height:R}=F.getBoundingClientRect();w.width=X,w.height=R;const et=Z-n(C),Y=J-n(f),G=et+X+U.width-H.width;if(G<=0)m(C,M(U.width));else{const B=X-et;B<=0?m(C,-X):B>G?m(C,U.width-G):m(C,B-X)}m(f,M(Math.min(0,H.height-(Y+R))))};var d=Fn(),x=k(d),u=k(x),l=k(u),b=k(l);mt(b,()=>t.icon??ie),y(l);var $=v(l,2),T=k($);mt(T,()=>t.children),y($),y(u),E(2),y(x);var O=v(x,2);L(O,()=>n(c),F=>{var H=qn(),U=k(H);mt(U,()=>t.menu),y(H),we(H,Z=>m(i,Z),()=>n(i)),j(()=>{ae(H,"transform",`translate3d(${n(C)??""}px, ${n(f)??""}px, 0)`),ae(H,"max-height",`${o.height??""}px`)}),s(F,H)}),y(d),j(()=>{ae(d,"--contextmenu_depth",r.depth),ce(x,"aria-expanded",n(c)),ft(x,"selected",n(c))}),qe("mouseenter",x,F=>{Pt(F),setTimeout(()=>e.select(r))}),s(a,d),dt()}var Hn=P("<!> <!>",1);function le(a,t){ut(t,!0);const e=tt(t,"name",3,"Cat"),r=tt(t,"icon",3,"😺");Ce(a,{icon:i=>{E();var h=A();j(()=>vt(h,r())),s(i,h)},menu:i=>{var h=Hn(),w=N(h);rt(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:p=>{var d=it(),x=N(d);L(x,()=>t.position==="adventure",u=>{var l=A("🏠");s(u,l)},u=>{var l=A("🌄");s(u,l)}),s(p,d)},children:(p,d)=>{var x=it(),u=N(x);L(u,()=>t.position==="adventure",l=>{var b=A("go home");s(l,b)},l=>{var b=A("go adventure");s(l,b)}),s(p,x)},$$slots:{icon:!0,default:!0}});var C=v(w,2);rt(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:p=>{var d=it(),x=N(d);L(x,()=>t.position==="adventure",u=>{var l=A("🌄");s(u,l)},u=>{var l=A("🏠");s(u,l)}),s(p,d)},children:(p,d)=>{var x=it(),u=N(x);L(u,()=>t.position==="adventure",l=>{var b=A("do adventure");s(l,b)},l=>{var b=A("be home");s(l,b)}),s(p,x)},$$slots:{icon:!0,default:!0}}),s(i,h)},children:(i,h)=>{E();var w=A();j(()=>vt(w,e())),s(i,w)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Ln=P("<!> <!>",1);function Wn(a,t){var e=Ln(),r=N(e);Le(r,{href:"https://github.com/ryanatkn/fuz",icon:i=>{rn(i,{data:cn,size:"var(--icon_size_xs)"})},children:(i,h)=>{E();var w=A("Source code");s(i,w)},$$slots:{icon:!0,default:!0}});var o=v(r,2);rt(o,{get run(){return t.toggle_about_dialog},icon:i=>{E();var h=A("?");s(i,h)},children:(i,h)=>{E();var w=A("About");s(i,w)},$$slots:{icon:!0,default:!0}}),s(a,e)}const Be=a=>{const t=a.length;if(t===2)return"cats";if(t===0)return null;const e=a[0];return e.icon+e.name};var Bn=P("<!> <!>",1),Un=P("<!> <!> <!>",1);function Vn(a,t){ut(t,!0);const e=W(()=>Be(t.adventure_cats));Ce(a,{icon:c=>{E();var i=A("🏠");s(c,i)},menu:c=>{var i=Un(),h=N(i);L(h,()=>n(e),f=>{rt(f,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{E();var x=A("🐈‍⬛");s(d,x)},children:(d,x)=>{E();var u=A("call");s(d,u)},$$slots:{icon:!0,default:!0}})});var w=v(h,2);Nt(w,17,()=>t.home_cats,f=>f.name,(f,p)=>{le(f,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var C=v(w,2);L(C,()=>!n(e),f=>{var p=Bn(),d=N(p);rt(d,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:l=>{E();var b=A("🏠");s(l,b)},children:(l,b)=>{E();var $=A("be");s(l,$)},$$slots:{icon:!0,default:!0}});var x=v(d,2);rt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:l=>{E();var b=A("🦋");s(l,b)},children:(l,b)=>{E();var $=A("leave");s(l,$)},$$slots:{icon:!0,default:!0}}),s(f,p)}),s(c,i)},children:(c,i)=>{E();var h=A("home");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Xn=P("<!> <!>",1),Yn=P("<!> <!> <!>",1);function Gn(a,t){ut(t,!0);const e=W(()=>Be(t.home_cats));Ce(a,{icon:c=>{E();var i=A("🌄");s(c,i)},menu:c=>{var i=Yn(),h=N(i);L(h,()=>n(e),f=>{rt(f,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{E();var x=A("🦋");s(d,x)},children:(d,x)=>{E();var u=A("call");s(d,u)},$$slots:{icon:!0,default:!0}})});var w=v(h,2);Nt(w,17,()=>t.adventure_cats,f=>f.name,(f,p)=>{le(f,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var C=v(w,2);L(C,()=>!n(e),f=>{var p=Xn(),d=N(p);rt(d,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:l=>{E();var b=A("🌄");s(l,b)},children:(l,b)=>{E();var $=A("do");s(l,$)},$$slots:{icon:!0,default:!0}});var x=v(d,2);rt(x,{run:()=>t.act({type:"call_cats_home"}),icon:l=>{E();var b=A("🐈‍⬛");s(l,b)},children:(l,b)=>{E();var $=A("leave");s(l,$)},$$slots:{icon:!0,default:!0}}),s(f,p)}),s(c,i)},children:(c,i)=>{E();var h=A("adventure");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Kn=P('<span class="icon svelte-u0xdy"> </span>'),jn=P('<span class="name svelte-u0xdy"><!> </span>'),Zn=P('<span class="cat svelte-u0xdy"><!><!></span>');function Re(a,t){ut(t,!0);const e=tt(t,"name",3,"Cat"),r=tt(t,"icon",3,"😺"),o=tt(t,"show_name",3,!0),c=tt(t,"show_icon",3,!0);var i=Zn(),h=k(i);L(h,c,C=>{var f=Kn(),p=k(f,!0);y(f),j(()=>vt(p,r())),s(C,f)});var w=v(h);L(w,o,C=>{var f=jn(),p=k(f);mt(p,()=>t.children??ie);var d=v(p,1,!0);y(f),j(()=>vt(d,e())),s(C,f)}),y(i),j(()=>ft(i,"has-icon",c())),s(a,i),dt()}const Jn=`<script lang="ts">
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
`;var Qn=P("<!> <!>",1),to=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),eo=P('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),no=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),oo=P('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),so=P("<section><!> <!></section> <section><!></section>",1),ao=P("<!> <!>",1),ro=P('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),io=P("<!> <!>",1);function co(a,t){ut(t,!0);const e="Alyssa",r="Ben",o="home";let c=z(o),i=z(o);const h=W(()=>n(c)===n(i)?"😺":"😾"),w=W(()=>n(c)===n(i)?"😸":"😿"),C=W(()=>({name:e,icon:n(h),position:n(c)})),f=W(()=>({name:r,icon:n(w),position:n(i)}));let p=z(!1);const d=(R,et)=>{const Y=[],G=[];for(const B of R){const ct=B.position==="home"?Y:G;et?ct.unshift(B):ct.push(B)}return{home_cats:Y,adventure_cats:G}},x=W(()=>d([n(C),n(f)],n(p))),u=W(()=>n(x).home_cats),l=W(()=>n(x).adventure_cats),b=W(()=>n(c)!==o||n(i)!==o),$=()=>{m(c,o),m(i,o)};let T=z(!1);const O=()=>{m(T,!n(T))},F=R=>{switch(R.type){case"call_cats_adventure":{m(c,"adventure"),m(i,"adventure");break}case"call_cats_home":{m(c,"home"),m(i,"home");break}case"cat_go_adventure":{R.name===e?m(c,"adventure"):R.name===r&&m(i,"adventure");break}case"cat_go_home":{R.name===e?m(c,"home"):R.name===r&&m(i,"home");break}case"cat_be_or_do":{m(p,!n(p));break}}},[H,U]=Qe({fallback:(R,et)=>{const Y=window.getComputedStyle(R),G=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:bn,css:B=>`
					transform: ${G} scale(${B});
					opacity: ${B}
				`}}});var Z=io(),J=N(Z);te(J,{scoped:!0,children:(R,et)=>{Ct(R,{children:(Y,G)=>{var B=ao(),ct=N(B);Tt(ct,{text:"Full example"});var ht=v(ct,2);bt(ht,{entries:nt=>{var At=Qn(),K=N(At);L(K,()=>n(b),wt=>{We(wt,{run:$,content:"Reset",icon:"↻"})});var xt=v(K,2);Wn(xt,{toggle_about_dialog:O}),s(nt,At)},children:(nt,At)=>{var K=so(),xt=N(K),wt=k(xt);bt(wt,{entries:S=>{Vn(S,{act:F,get home_cats(){return n(u)},get adventure_cats(){return n(l)}})},children:(S,D)=>{var q=eo(),Q=v(k(q),2);Nt(Q,29,()=>n(u),({name:pt,icon:ot,position:st})=>pt,(pt,ot)=>{let st=()=>n(ot).name,gt=()=>n(ot).icon,It=()=>n(ot).position;var at=to(),zt=k(at);bt(zt,{entries:$t=>{le($t,{act:F,get name(){return st()},get icon(){return gt()},get position(){return It()}})},children:($t,Ve)=>{Re($t,{get name(){return st()},get icon(){return gt()}})},$$slots:{entries:!0,default:!0}}),y(at),Et(1,at,()=>U,()=>({key:st()})),Et(2,at,()=>H,()=>({key:st()})),Pe(at,()=>De,null),s(pt,at)}),y(Q),y(q),s(S,q)},$$slots:{entries:!0,default:!0}});var ne=v(wt,2);bt(ne,{entries:S=>{Gn(S,{act:F,get home_cats(){return n(u)},get adventure_cats(){return n(l)}})},children:(S,D)=>{var q=oo(),Q=v(k(q),2);Nt(Q,29,()=>n(l),({name:pt,icon:ot,position:st})=>pt,(pt,ot)=>{let st=()=>n(ot).name,gt=()=>n(ot).icon,It=()=>n(ot).position;var at=no(),zt=k(at);bt(zt,{entries:$t=>{le($t,{act:F,get name(){return st()},get icon(){return gt()},get position(){return It()}})},children:($t,Ve)=>{Re($t,{get name(){return st()},get icon(){return gt()}})},$$slots:{entries:!0,default:!0}}),y(at),Et(1,at,()=>U,()=>({key:st()})),Et(2,at,()=>H,()=>({key:st()})),Pe(at,()=>De,null),s(pt,at)}),y(Q),y(q),s(S,q)},$$slots:{entries:!0,default:!0}}),y(xt);var oe=v(xt,2),g=k(oe);an(g,{summary:S=>{E();var D=A("View example source");s(S,D)},children:(S,D)=>{Dt(S,{content:Jn})},$$slots:{summary:!0,default:!0}}),y(oe),s(nt,K)},$$slots:{entries:!0,default:!0}}),s(Y,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var X=v(J,2);L(X,()=>n(T),R=>{on(R,{onclose:()=>m(T,!1),children:(et,Y)=>{var G=ro(),B=v(k(G),8),ct=v(k(B),2);ln(ct,{});var ht=v(ct,4);un(ht,{}),y(B),y(G),s(et,G)},$$slots:{default:!0}})}),s(a,Z),dt()}var lo=P("<!> <!> <!>",1),uo=P(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),_o=P("<!> <!>",1);function mo(a){let t=z(!1),e=z(!1),r=z(!1);te(a,{scoped:!0,children:(o,c)=>{Ct(o,{children:(i,h)=>{var w=_o(),C=N(w);Tt(C,{text:"Basic usage"});var f=v(C,2);bt(f,{entries:d=>{var x=lo(),u=N(x);rt(u,{run:()=>m(t,!n(t)),children:($,T)=>{E();var O=A("Hello world");s($,O)},$$slots:{default:!0}});var l=v(u,2);rt(l,{run:()=>m(e,!n(e)),icon:T=>{E();var O=A("🌞");s(T,O)},children:(T,O)=>{E();var F=A("Hello with an optional icon snippet");s(T,F)},$$slots:{icon:!0,default:!0}});var b=v(l,2);rt(b,{run:()=>m(r,!n(r)),icon:"🌚",children:($,T)=>{E();var O=A("Hello with an optional icon string");s($,O)},$$slots:{default:!0}}),s(d,x)},children:(d,x)=>{var u=uo(),l=v(k(u),2),b=W(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Dt(l,{get content(){return n(b)}});var $=v(l,2),T=k($),O=k(T);y(T),y($);var F=v($,2),H=k(F),U=k(H);y(H),y(F);var Z=v(F,2),J=k(Z),X=k(J);y(J),y(Z),E(2),y(u),j(()=>{ft(T,"color_g_5",n(t)),vt(O,`greeted = ${n(t)??""}`),ft(H,"color_e_5",n(e)),vt(U,`greeted_icon_snippet = ${n(e)??""}`),ft(J,"color_d_5",n(r)),vt(X,`greeted_icon_string = ${n(r)??""}`)}),s(d,u)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var vo=P("<div>toggled</div>"),ho=P(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),po=P("<!> <!>",1);function fo(a,t){ut(t,!0);const e=new $e;let r=z(!1);te(a,{contextmenu:e,scoped:!0,children:(o,c)=>{Ct(o,{children:(i,h)=>{var w=po(),C=N(w);Tt(C,{text:"Custom instance"});var f=v(C,2);bt(f,{entries:d=>{rt(d,{run:()=>m(r,!n(r)),children:(x,u)=>{E();var l=A("Toggle");s(x,l)},$$slots:{default:!0}})},children:(d,x)=>{var u=ho(),l=k(u);Dt(l,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var b=v(l,2);Dt(b,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=v(b,4),T=k($);L(T,()=>n(r),O=>{var F=vo();Et(3,F,()=>tn),s(O,F)}),y($),y(u),s(d,u)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt()}const go=(a,t)=>{const e=window.getSelection();if(!e||!n(t))return;const r=document.createRange();r.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(r)};var xo=P(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),bo=P("<div><!></div> <!>",1);function yo(a,t){ut(t,!0);const e=new $e;let r=z(!1),o=z(void 0),c=z("");const i="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",h=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,w=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=W(()=>n(c)===i||n(c)===h||n(c)===w);te(a,{contextmenu:e,scoped:!0,children:(f,p)=>{Ct(f,{children:(d,x)=>{var u=bo(),l=N(u),b=k(l);Tt(b,{text:"Select text"}),y(l);var $=v(l,2);bt($,{entries:O=>{rt(O,{run:()=>m(r,!n(r)),children:(F,H)=>{E();var U=A("Toggle something");s(F,U)},$$slots:{default:!0}})},children:(O,F)=>{var H=xo(),U=k(H),Z=v(k(U),2),J=v(k(Z));J.__click=[go,o],E(),y(Z),y(U),we(U,nt=>m(o,nt),()=>n(o));var X=v(U,2),R=k(X);en(R),y(X);var et=v(X,2),Y=v(et,2),G=k(Y);Ge(G),y(Y);var B=v(Y,2),ct=k(B);se(ct,{path:"Web/HTML/Global_attributes/contenteditable"}),E(),y(B);var ht=v(B,4),ee=v(ht,4);y(H),j(()=>{ft(H,"color_g_5",n(C)),ft(J,"color_a",n(r)),ft(et,"color_g_5",n(C))}),Oe(R,()=>n(c),nt=>m(c,nt)),Oe(G,()=>n(c),nt=>m(c,nt)),Ee("innerText",ht,()=>n(c),nt=>m(c,nt)),Ee("innerText",ee,()=>n(c),nt=>m(c,nt)),s(O,H)},$$slots:{entries:!0,default:!0}}),j(()=>ft(l,"color_d_5",n(C))),s(d,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt()}be(["click"]);var wo=P(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function $o(a){te(a,{scoped:!0,children:(t,e)=>{Ct(t,{children:(r,o)=>{var c=wo(),i=N(c);Tt(i,{text:"Default behaviors"});var h=v(i,2),w=k(h);Dt(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),E(6),y(h),s(r,c)},$$slots:{default:!0}})},$$slots:{default:!0}})}var ko=P("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function Zo(a,t){ut(t,!0);const r=Je("Contextmenu");Ze(a,{tome:r,children:(o,c)=>{var i=ko(),h=v(N(i),2);mo(h);var w=v(h,2);$o(w);var C=v(w,2);fo(C,{});var f=v(C,2);yo(f,{});var p=v(f,2);co(p,{});var d=v(p,2);gn(d),s(o,i)},$$slots:{default:!0}}),dt()}export{Zo as component};
