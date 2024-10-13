var Ve=Object.defineProperty;var Xe=(a,t,e)=>t in a?Ve(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var ut=(a,t,e)=>(Xe(a,typeof t!="symbol"?t+"":t,e),e),me=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var I=(a,t,e)=>(me(a,t,"read from private field"),e?e.call(a):t.get(a)),U=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)},ve=(a,t,e,r)=>(me(a,t,"write to private field"),r?r.call(a,e):t.set(a,e),e);var Te=(a,t,e)=>(me(a,t,"access private method"),e);import{a as s,t as P,l as be,c as it,g as E,p as Re}from"../chunks/disclose-version.ZoaYz1AU.js";import{o as Ye,u as je,f as F,s as h,c as $,a4 as A,r as y,a5 as z,g as n,J as v,p as vt,t as K,a as ht,d as W,X as Ft,at as kt,a3 as ie}from"../chunks/runtime.DaB_8cOj.js";import{T as Ge}from"../chunks/Tome_Content.HM1pRWAk.js";import{g as Ke}from"../chunks/tome.gtogsibo.js";import{M as se}from"../chunks/Mdn_Link.D0ZrQ25x.js";import{T as Ct,a as Tt}from"../chunks/Tome_Section_Header.CPJbslWq.js";import{p as D,i as L}from"../chunks/if.BRCK-0uq.js";import{c as ye,e as Nt}from"../chunks/context_helpers.B8hPR0aD.js";import{t as Ot,a as Ie,c as Je,s as Ze}from"../chunks/index.Bt4uqa_Y.js";import{C as Dt}from"../chunks/Code.DozXpeGJ.js";import{s as dt,c as ce,r as Qe,d as tn}from"../chunks/attributes.BPvofiUC.js";import{a as ct}from"../chunks/intersect.BjZoTFN6.js";import{s as ae}from"../chunks/style.Bk7ejTAN.js";import{b as we}from"../chunks/this.D5gY84Ht.js";import{p as et,s as Pe}from"../chunks/props.tfL6ot4I.js";import{a as en,s as Pt,b as he,c as Se,D as nn}from"../chunks/Dialog.D5ffDNx3.js";import{o as Ee}from"../chunks/index-client.08JWXHmx.js";import{s as _t}from"../chunks/render.DpEwyGnv.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as ft}from"../chunks/class.CbbrPzi3.js";import{P as on}from"../chunks/Pending_Animation.DWdgyn_J.js";import{D as sn,b as ze}from"../chunks/Details.DU11toQk.js";import{S as an,g as rn}from"../chunks/logos.DDXGBnOE.js";import{C as cn,T as ln}from"../chunks/Theme_Input.BRhrJ3BR.js";import{b as Ae}from"../chunks/input.D42hkQiW.js";var yt,St,Rt,ue,Me;const de=class de{constructor(t){U(this,ue);U(this,yt,new WeakMap);U(this,St,void 0);U(this,Rt,void 0);ve(this,Rt,t)}observe(t,e){var r=I(this,yt).get(t)||new Set;return r.add(e),I(this,yt).set(t,r),Te(this,ue,Me).call(this).observe(t,I(this,Rt)),()=>{var o=I(this,yt).get(t);o.delete(e),o.size===0&&(I(this,yt).delete(t),I(this,St).unobserve(t))}}};yt=new WeakMap,St=new WeakMap,Rt=new WeakMap,ue=new WeakSet,Me=function(){return I(this,St)??ve(this,St,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var r of I(this,yt).get(e.target)||[])r(e)}}))},ut(de,"entries",new WeakMap);let ge=de;var un=new ge({box:"border-box"});function Oe(a,t,e){var r=un.observe(a,()=>e(a[t]));Ye(()=>(je(()=>e(a[t])),r))}var dn=P('<span class="font_mono">contextmenu</span> event',1),_n=P('<span class="font_mono">navigator.vibrate</span>'),mn=P('<span class="font_mono">navigator.vibrate</span>'),vn=P(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),pn=P("<!> <!>",1);function fn(a){var t=pn(),e=F(t);Ct(e,{children:(o,u)=>{var i=vn(),p=F(i);Tt(p,{text:"Expected behaviors"});var w=h(p,4),T=h($(w));se(T,{path:"Web/API/Element/contextmenu_event",children:(c,l)=>{var b=dn();A(),s(c,b)},$$slots:{default:!0}});var g=h(T,4);se(g,{path:"Web/API/Navigator/vibrate",children:(c,l)=>{var b=_n();s(c,b)},$$slots:{default:!0}}),A(),y(w);var d=h(w,10),_=h($(d),10),f=h($(_));se(f,{path:"Web/API/Navigator/vibrate",children:(c,l)=>{var b=mn();s(c,b)},$$slots:{default:!0}}),A(),y(_),y(d),s(o,i)},$$slots:{default:!0}});var r=h(e,2);Ct(r,{children:(o,u)=>{var i=hn(),p=F(i);Tt(p,{text:"Motivation"}),A(14),s(o,i)},$$slots:{default:!0}}),s(a,t)}function gn(a){const t=a-1;return t*t*t+1}function xn(a){return--a*a*a*a*a+1}function Fe(a,{from:t,to:e},r={}){var o=getComputedStyle(a),u=bn(a),i=o.transform==="none"?"":o.transform,[p,w]=o.transformOrigin.split(" ").map(parseFloat),T=t.width/e.width,g=t.height/e.height,d=(t.left+T*p-(e.left+p))/u,_=(t.top+g*w-(e.top+w))/u,{delay:f=0,duration:c=b=>Math.sqrt(b)*120,easing:l=gn}=r;return{delay:f,duration:typeof c=="function"?c(Math.sqrt(d*d+_*_)):c,easing:l,css:(b,C)=>{var k=C*d,O=C*_,H=b+C*T,R=b+C*g;return`transform: ${i} scale(${H}, ${R}) translate(${k}px, ${O}px);`}}}function bn(a){if("currentCSSZoom"in a)return a.currentCSSZoom;for(var t=a,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Mt,qt;class qe{constructor(){U(this,Mt,z(0));U(this,qt,z(0))}get width(){return n(I(this,Mt))}set width(t){v(I(this,Mt),D(t))}get height(){return n(I(this,qt))}set height(t){v(I(this,qt),D(t))}}Mt=new WeakMap,qt=new WeakMap;var Ht,Lt,Wt,Ut,Bt;class yn{constructor(t,e){ut(this,"is_menu",!1);ut(this,"menu");U(this,Ht,z(!1));U(this,Lt,z());U(this,Wt,z(!1));U(this,Ut,z(null));U(this,Bt,z(null));this.menu=t,this.run=e}get selected(){return n(I(this,Ht))}set selected(t){v(I(this,Ht),D(t))}get run(){return n(I(this,Lt))}set run(t){v(I(this,Lt),D(t))}get pending(){return n(I(this,Wt))}set pending(t){v(I(this,Wt),D(t))}get error_message(){return n(I(this,Ut))}set error_message(t){v(I(this,Ut),D(t))}get promise(){return n(I(this,Bt))}set promise(t){v(I(this,Bt),D(t))}}Ht=new WeakMap,Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,Bt=new WeakMap;var Vt,Xt;class wn{constructor(t,e){ut(this,"is_menu",!0);ut(this,"menu");ut(this,"depth");U(this,Vt,z(!1));U(this,Xt,z(D([])));this.menu=t,this.depth=e}get selected(){return n(I(this,Vt))}set selected(t){v(I(this,Vt),D(t))}get items(){return n(I(this,Xt))}set items(t){v(I(this,Xt),D(t))}}Vt=new WeakMap,Xt=new WeakMap;var Yt;class $n{constructor(){ut(this,"is_menu",!0);ut(this,"menu",null);ut(this,"depth",1);U(this,Yt,z(D([])))}get items(){return n(I(this,Yt))}set items(t){v(I(this,Yt),D(t))}}Yt=new WeakMap;var jt,Gt,Kt,Jt,Zt,Qt,te;class $e{constructor(t){ut(this,"layout");ut(this,"initial_layout");U(this,jt,z(!1));U(this,Gt,z(0));U(this,Kt,z(0));U(this,Jt,z(D([])));U(this,Zt,z());U(this,Qt,z(D(new $n)));U(this,te,z(D([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new qe}get opened(){return n(I(this,jt))}set opened(t){v(I(this,jt),D(t))}get x(){return n(I(this,Gt))}set x(t){v(I(this,Gt),D(t))}get y(){return n(I(this,Kt))}set y(t){v(I(this,Kt),D(t))}get params(){return n(I(this,Jt))}set params(t){v(I(this,Jt),D(t))}get error(){return n(I(this,Zt))}set error(t){v(I(this,Zt),D(t))}get root_menu(){return n(I(this,Qt))}set root_menu(t){v(I(this,Qt),D(t))}get selections(){return n(I(this,te))}set selections(t){v(I(this,te),D(t))}open(t,e,r){this.selections.length=0,this.opened=!0,this.x=e,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(r){const o=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=o??"unknown error",this.error=o}if(en(e)){t.pending=!0,t.error_message=null;const r=t.promise=e.then(o=>{if(r===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const u=typeof o.message=="string"?o.message:void 0;t.error_message=u??"unknown error",this.error=u}else this.close();return o}},o=>{if(r!==t.promise)return;const u=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=u??"unknown error",this.error=u}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=fe.maybe_get()??this.root_menu,r=new yn(e,t);return e.items.push(r),Ee(()=>{e.items.length=0}),r}add_submenu(){const t=fe.maybe_get()??this.root_menu,e=new wn(t,t.depth+1);return t.items.push(e),fe.set(e),Ee(()=>{t.items.length=0}),e}}jt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,Jt=new WeakMap,Zt=new WeakMap,Qt=new WeakMap,te=new WeakMap;const ke="contextmenu",kn=`a,[data-${ke}]`,re=new Map;let Cn=0;const Tn=(a,t)=>{if(t==null)return;const e=(Cn+=1)-1+"";return a.dataset[ke]=e,re.set(e,t),{update:r=>{re.set(e,r)},destroy:()=>{re.delete(e)}}},In=17,Ne=(a,t,e,r)=>{const o=Pn(a);return o!=null&&o.length?(r.open(o,t,e),navigator.vibrate&&navigator.vibrate(In),!0):!1},Pn=a=>{var u;let t=null,e=a,r,o;for(;e=e==null?void 0:e.closest(kn);){if(r=e.dataset[ke]){if(t??(t=[]),o=re.get(r),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(u=window.getSelection())==null?void 0:u.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},_e=ye(),fe=ye(),xe=ye(()=>new qe);var Sn=(a,t)=>t.close(),En=P('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function He(a,t){vt(t,!0);const e="🔗",r=et(t,"icon",3,e),o=_e.get(),u=(C,k=location.host)=>{const O=pe(pe(C,"https://"),"http://");return O.startsWith(k+"/")?pe(O,k):O},i=W(()=>u(t.href)),p=W(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),w=W(()=>n(p)?"noreferrer":void 0);var T=En(),g=$(T);g.__click=[Sn,o];var d=$(g),_=$(d),f=$(_);L(f,()=>typeof r()=="string",C=>{var k=E();K(()=>_t(k,r())),s(C,k)},C=>{var k=it(),O=F(k);dt(O,r,()=>e),s(C,k)}),y(_);var c=h(_,2),l=$(c),b=$(l);L(b,()=>t.children,C=>{var k=it(),O=F(k);dt(O,()=>t.children),s(C,k)},C=>{var k=E();K(()=>_t(k,n(i))),s(C,k)}),y(l),y(c),y(d),y(g),y(T),K(()=>{ce(g,"href",t.href),ce(g,"rel",n(w))}),s(a,T),ht()}be(["click"]);var zn=P('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(a,t){vt(t,!0);const e=_e.get(),r=e.add_entry(t.run);Ft(()=>{r.run=t.run});const o=W(()=>r.selected),u=W(()=>r.pending),i=W(()=>r.error_message);var p=zn();p.__click=()=>{setTimeout(()=>e.activate(r))};var w=$(p),T=$(w),g=$(T);L(g,()=>typeof t.icon=="string",c=>{var l=E();K(()=>_t(l,t.icon)),s(c,l)},c=>{var l=it(),b=F(l);L(b,()=>t.icon,C=>{var k=it(),O=F(k);dt(O,()=>t.icon),s(C,k)},null,!0),s(c,l)}),y(T);var d=h(T,2),_=$(d);dt(_,()=>t.children),y(d);var f=h(d,2);L(f,()=>n(u),c=>{on(c,{})},c=>{var l=it(),b=F(l);L(b,()=>n(i),C=>{var k=E("⚠️");s(C,k)},null,!0),s(c,l)}),y(w),y(p),K(()=>{ce(p,"title",n(i)?`Error: ${n(i)}`:void 0),ft(p,"selected",n(o))}),Re("mouseenter",p,c=>{Pt(c),e.select(r)}),s(a,p),ht()}be(["click"]);function Le(a,t){at(a,{get run(){return t.run},icon:r=>{A();var o=E();K(()=>_t(o,t.icon)),s(r,o)},children:(r,o)=>{A();var u=E();K(()=>_t(u,t.content)),s(r,u)},$$slots:{icon:!0,default:!0}})}var An=P('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),On=P('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Fn=P('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Nn=P("<!> <!> <!>",1);function ee(a,t){vt(t,!0);const e=(x,m=ie)=>{He(x,Pe(m))},r=(x,m=ie)=>{Le(x,Pe(m))},o=et(t,"contextmenu",19,()=>new $e),u=et(t,"longpress_move_tolerance",3,21),i=et(t,"longpress_duration",3,633),p=et(t,"bypass_with_tap_then_longpress",3,!0),w=et(t,"tap_then_longpress_duration",3,660),T=et(t,"tap_then_longpress_move_tolerance",3,7),g=et(t,"open_offset_x",19,()=>-2),d=et(t,"open_offset_y",19,()=>-2),_=et(t,"scoped",3,!1);_e.set(o());let f=z(void 0);const c=W(()=>o().layout),l=W(()=>o().initial_layout),b=W(()=>n(c)===n(l));let C=z(void 0),k=z(void 0);Ft(()=>{!n(b)&&n(C)!==void 0&&(n(c).width=n(C))}),Ft(()=>{!n(b)&&n(k)!==void 0&&(n(c).height=n(k))});const O=xe.set();Ft(()=>{if(n(f)){const x=n(f).getBoundingClientRect();O.width=x.width,O.height=x.height}});const H=W(()=>o().x+Math.min(0,n(c).width-(o().x+O.width))),R=W(()=>o().y+Math.min(0,n(c).height-(o().y+O.height)));let j=z(void 0),J=z(void 0),Z=z(void 0),V=z(void 0),M=z(void 0),Q=z(void 0);const Y=()=>{n(M)&&v(M,!1),n(V)!=null&&(clearTimeout(n(V)),v(V,null))},X=x=>{var S;if(n(Q)){v(Q,!1);return}if(n(M)){Y(),Pt(x);return}const{target:m}=x;x.shiftKey||!(m instanceof HTMLElement||m instanceof SVGElement)||(S=n(f))!=null&&S.contains(m)||he(m)||Se(m)||Ne(m,x.clientX+g(),x.clientY+d(),o())&&(Pt(x),Y())},B=x=>{n(M)&&v(M,!1);const{touches:m,target:S}=x;if(o().opened||m.length!==1||x.shiftKey||!(S instanceof HTMLElement||S instanceof SVGElement)||he(S)||Se(S))return;const{clientX:N,clientY:q}=m[0];if(p()){if(n(Z)!=null&&performance.now()-n(Z)<w()&&Math.hypot(N-n(j),q-n(J))<T()){v(Q,!0),v(Z,null);return}v(Z,D(performance.now()))}v(j,D(N)),v(J,D(q)),n(V)!=null&&Y(),v(V,D(setTimeout(()=>{v(M,!0),Ne(S,n(j)+g(),n(J)+d(),o())},i())))},rt=x=>{if(n(V)==null)return;const{touches:m}=x;if(m.length!==1)return;const{clientX:S,clientY:N}=m[0];Math.hypot(S-n(j),N-n(J))>u()&&(o().opened&&o().close(),Y())},pt=x=>{n(V)!=null&&(n(M)&&Pt(x),Y())},lt=x=>{n(f)&&!n(f).contains(x.target)&&o().close()},Et=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),zt=x=>{const m=Et.get(x.key);!m||he(x.target)||(Pt(x),m())},G=(x,m)=>{let S=null,N=null;const q=tt=>{S&&x.removeEventListener(N,S),tt.disabled||(x.addEventListener(tt.event,tt.cb,{capture:!0,passive:tt.passive}),S=tt.cb,N=tt.event)};return q(m),{update:tt=>{q(tt)},destroy:()=>{S&&x.removeEventListener(N,S)}}};var xt=Nn(),wt=F(xt);L(wt,_,x=>{var m=An(),S=$(m);dt(S,()=>t.children),y(m),ct(m,(N,q)=>G(N,q),()=>({event:"contextmenu",passive:!1,cb:X})),ct(m,(N,q)=>G(N,q),()=>({event:"touchstart",passive:!0,cb:B})),ct(m,(N,q)=>G(N,q),()=>({event:"touchmove",passive:!0,cb:rt})),ct(m,(N,q)=>G(N,q),()=>({event:"touchend",passive:!1,cb:pt})),ct(m,(N,q)=>G(N,q),()=>({event:"touchcancel",passive:!1,cb:pt})),s(x,m)},x=>{var m=it(),S=F(m);dt(S,()=>t.children),s(x,m)});var ne=h(wt,2);L(ne,()=>!n(b),x=>{var m=On();Oe(m,"clientHeight",S=>v(k,S)),Oe(m,"clientWidth",S=>v(C,S)),s(x,m)});var oe=h(ne,2);L(oe,()=>o().opened,x=>{var m=Fn();we(m,S=>v(f,S),()=>n(f)),Nt(m,20,()=>o().params,S=>S,(S,N)=>{var q=it(),tt=F(q);L(tt,()=>typeof N=="function",mt=>{var nt=it(),ot=F(nt);dt(ot,()=>N),s(mt,nt)},mt=>{var nt=it(),ot=F(nt);L(ot,()=>N.snippet==="link",gt=>{e(gt,()=>N.props)},gt=>{var It=it(),st=F(It);L(st,()=>N.snippet==="text",At=>{r(At,()=>N.props)},null,!0),s(gt,It)},!0),s(mt,nt)}),s(S,q)}),y(m),K(()=>ae(m,"transform",`translate3d(${n(H)??""}px, ${n(R)??""}px, 0)`)),s(x,m)}),ct(kt,(x,m)=>G(x,m),()=>({event:"contextmenu",passive:!1,cb:X,disabled:_()})),ct(kt,(x,m)=>G(x,m),()=>({event:"touchstart",passive:!0,cb:B,disabled:_()})),ct(kt,(x,m)=>G(x,m),()=>({event:"touchmove",passive:!0,cb:rt,disabled:_()})),ct(kt,(x,m)=>G(x,m),()=>({event:"touchend",passive:!1,cb:pt,disabled:_()})),ct(kt,(x,m)=>G(x,m),()=>({event:"touchcancel",passive:!1,cb:pt,disabled:_()})),ct(kt,(x,m)=>G(x,m),()=>({event:"mousedown",passive:!0,cb:lt,disabled:!o().opened})),ct(kt,(x,m)=>G(x,m),()=>({event:"keydown",passive:!1,cb:zt,disabled:!o().opened})),s(a,xt),ht()}var Dn=P('<span class="display_contents"><!></span>');function bt(a,t){vt(t,!0);var e=Dn(),r=$(e);dt(r,()=>t.children),y(e),ct(e,(o,u)=>Tn(o,u),()=>t.entries),s(a,e),ht()}var Rn=P('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Mn=P('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ce(a,t){vt(t,!0);const e=_e.get(),r=e.add_submenu(),{layout:o}=e,u=W(()=>r.selected);let i=z(void 0);const p=xe.get(),w=xe.set();let T=z(0),g=z(0);Ft(()=>{n(i)&&d(n(i),o,p)});const d=(H,R,j)=>{const{x:J,y:Z,width:V,height:M}=H.getBoundingClientRect();w.width=V,w.height=M;const Q=J-n(T),Y=Z-n(g),X=Q+V+j.width-R.width;if(X<=0)v(T,D(j.width));else{const B=V-Q;B<=0?v(T,-V):B>X?v(T,j.width-X):v(T,B-V)}v(g,D(Math.min(0,R.height-(Y+M))))};var _=Mn(),f=$(_),c=$(f),l=$(c),b=$(l);dt(b,()=>t.icon??ie),y(l);var C=h(l,2),k=$(C);dt(k,()=>t.children),y(C),y(c),A(2),y(f);var O=h(f,2);L(O,()=>n(u),H=>{var R=Rn();we(R,J=>v(i,J),()=>n(i));var j=$(R);dt(j,()=>t.menu),y(R),K(()=>{ae(R,"transform",`translate3d(${n(T)??""}px, ${n(g)??""}px, 0)`),ae(R,"max-height",`${o.height??""}px`)}),s(H,R)}),y(_),K(()=>{ae(_,"--contextmenu_depth",r.depth),ce(f,"aria-expanded",n(u)),ft(f,"selected",n(u))}),Re("mouseenter",f,H=>{Pt(H),setTimeout(()=>e.select(r))}),s(a,_),ht()}var qn=P("<!> <!>",1);function le(a,t){vt(t,!0);const e=et(t,"name",3,"Cat"),r=et(t,"icon",3,"😺");Ce(a,{icon:i=>{A();var p=E();K(()=>_t(p,r())),s(i,p)},menu:i=>{var p=qn(),w=F(p);at(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:d=>{var _=it(),f=F(_);L(f,()=>t.position==="adventure",c=>{var l=E("🏠");s(c,l)},c=>{var l=E("🌄");s(c,l)}),s(d,_)},children:(d,_)=>{var f=it(),c=F(f);L(c,()=>t.position==="adventure",l=>{var b=E("go home");s(l,b)},l=>{var b=E("go adventure");s(l,b)}),s(d,f)},$$slots:{icon:!0,default:!0}});var T=h(w,2);at(T,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:d=>{var _=it(),f=F(_);L(f,()=>t.position==="adventure",c=>{var l=E("🌄");s(c,l)},c=>{var l=E("🏠");s(c,l)}),s(d,_)},children:(d,_)=>{var f=it(),c=F(f);L(c,()=>t.position==="adventure",l=>{var b=E("do adventure");s(l,b)},l=>{var b=E("be home");s(l,b)}),s(d,f)},$$slots:{icon:!0,default:!0}}),s(i,p)},children:(i,p)=>{A();var w=E();K(()=>_t(w,e())),s(i,w)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var Hn=P("<!> <!>",1);function Ln(a,t){var e=Hn(),r=F(e);He(r,{href:"https://github.com/ryanatkn/fuz",icon:i=>{an(i,{data:rn,size:"var(--icon_size_xs)"})},children:(i,p)=>{A();var w=E("Source code");s(i,w)},$$slots:{icon:!0,default:!0}});var o=h(r,2);at(o,{get run(){return t.toggle_about_dialog},icon:i=>{A();var p=E("?");s(i,p)},children:(i,p)=>{A();var w=E("About");s(i,w)},$$slots:{icon:!0,default:!0}}),s(a,e)}const We=a=>{const t=a.length;if(t===2)return"cats";if(t===0)return null;const e=a[0];return e.icon+e.name};var Wn=P("<!> <!>",1),Un=P("<!> <!> <!>",1);function Bn(a,t){vt(t,!0);const e=W(()=>We(t.adventure_cats));Ce(a,{icon:u=>{A();var i=E("🏠");s(u,i)},menu:u=>{var i=Un(),p=F(i);L(p,()=>n(e),g=>{at(g,{run:()=>t.act({type:"call_cats_home"}),icon:_=>{A();var f=E("🐈‍⬛");s(_,f)},children:(_,f)=>{A();var c=E("call");s(_,c)},$$slots:{icon:!0,default:!0}})});var w=h(p,2);Nt(w,17,()=>t.home_cats,g=>g.name,(g,d)=>{le(g,{get name(){return n(d).name},get icon(){return n(d).icon},get position(){return n(d).position},get act(){return t.act}})});var T=h(w,2);L(T,()=>!n(e),g=>{var d=Wn(),_=F(d);at(_,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:l=>{A();var b=E("🏠");s(l,b)},children:(l,b)=>{A();var C=E("be");s(l,C)},$$slots:{icon:!0,default:!0}});var f=h(_,2);at(f,{run:()=>t.act({type:"call_cats_adventure"}),icon:l=>{A();var b=E("🦋");s(l,b)},children:(l,b)=>{A();var C=E("leave");s(l,C)},$$slots:{icon:!0,default:!0}}),s(g,d)}),s(u,i)},children:(u,i)=>{A();var p=E("home");s(u,p)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var Vn=P("<!> <!>",1),Xn=P("<!> <!> <!>",1);function Yn(a,t){vt(t,!0);const e=W(()=>We(t.home_cats));Ce(a,{icon:u=>{A();var i=E("🌄");s(u,i)},menu:u=>{var i=Xn(),p=F(i);L(p,()=>n(e),g=>{at(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:_=>{A();var f=E("🦋");s(_,f)},children:(_,f)=>{A();var c=E("call");s(_,c)},$$slots:{icon:!0,default:!0}})});var w=h(p,2);Nt(w,17,()=>t.adventure_cats,g=>g.name,(g,d)=>{le(g,{get name(){return n(d).name},get icon(){return n(d).icon},get position(){return n(d).position},get act(){return t.act}})});var T=h(w,2);L(T,()=>!n(e),g=>{var d=Vn(),_=F(d);at(_,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:l=>{A();var b=E("🌄");s(l,b)},children:(l,b)=>{A();var C=E("do");s(l,C)},$$slots:{icon:!0,default:!0}});var f=h(_,2);at(f,{run:()=>t.act({type:"call_cats_home"}),icon:l=>{A();var b=E("🐈‍⬛");s(l,b)},children:(l,b)=>{A();var C=E("leave");s(l,C)},$$slots:{icon:!0,default:!0}}),s(g,d)}),s(u,i)},children:(u,i)=>{A();var p=E("adventure");s(u,p)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var jn=P('<span class="icon svelte-u0xdy"> </span>'),Gn=P('<span class="name svelte-u0xdy"><!> </span>'),Kn=P('<span class="cat svelte-u0xdy"><!><!></span>');function De(a,t){vt(t,!0);const e=et(t,"name",3,"Cat"),r=et(t,"icon",3,"😺"),o=et(t,"show_name",3,!0),u=et(t,"show_icon",3,!0);var i=Kn(),p=$(i);L(p,u,T=>{var g=jn(),d=$(g);y(g),K(()=>_t(d,r())),s(T,g)});var w=h(p);L(w,o,T=>{var g=Gn(),d=$(g);dt(d,()=>t.children??ie);var _=h(d,1,!0);y(g),K(()=>_t(_,e())),s(T,g)}),y(i),K(()=>ft(i,"has-icon",u())),s(a,i),ht()}const Jn=`<script lang="ts">
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
`;var Zn=P("<!> <!>",1),Qn=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),to=P('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),eo=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),no=P('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),oo=P("<section><!> <!></section> <section><!></section>",1),so=P("<!> <!>",1),ao=P('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),ro=P("<!> <!>",1);function io(a,t){vt(t,!0);const e="Alyssa",r="Ben",o="home";let u=z(o),i=z(o);const p=W(()=>n(u)===n(i)?"😺":"😾"),w=W(()=>n(u)===n(i)?"😸":"😿"),T=W(()=>({name:e,icon:n(p),position:n(u)})),g=W(()=>({name:r,icon:n(w),position:n(i)}));let d=z(!1);const _=(M,Q)=>{const Y=[],X=[];for(const B of M){const rt=B.position==="home"?Y:X;Q?rt.unshift(B):rt.push(B)}return{home_cats:Y,adventure_cats:X}},f=W(()=>_([n(T),n(g)],n(d))),c=W(()=>n(f).home_cats),l=W(()=>n(f).adventure_cats),b=W(()=>n(u)!==o||n(i)!==o),C=()=>{v(u,o),v(i,o)};let k=z(!1);const O=()=>{v(k,!n(k))},H=M=>{switch(M.type){case"call_cats_adventure":{v(u,"adventure"),v(i,"adventure");break}case"call_cats_home":{v(u,"home"),v(i,"home");break}case"cat_go_adventure":{M.name===e?v(u,"adventure"):M.name===r&&v(i,"adventure");break}case"cat_go_home":{M.name===e?v(u,"home"):M.name===r&&v(i,"home");break}case"cat_be_or_do":{v(d,!n(d));break}}},[R,j]=Je({fallback:(M,Q)=>{const Y=window.getComputedStyle(M),X=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:xn,css:B=>`
					transform: ${X} scale(${B});
					opacity: ${B}
				`}}});var J=ro(),Z=F(J);ee(Z,{scoped:!0,children:(M,Q)=>{Ct(M,{children:(Y,X)=>{var B=so(),rt=F(B);Tt(rt,{text:"Full example"});var pt=h(rt,2);bt(pt,{entries:Et=>{var zt=Zn(),G=F(zt);L(G,()=>n(b),wt=>{Le(wt,{run:C,content:"Reset",icon:"↻"})});var xt=h(G,2);Ln(xt,{toggle_about_dialog:O}),s(Et,zt)},children:(Et,zt)=>{var G=oo(),xt=F(G),wt=$(xt);bt(wt,{entries:S=>{Bn(S,{act:H,get home_cats(){return n(c)},get adventure_cats(){return n(l)}})},children:(S,N)=>{var q=to(),tt=h($(q),2);Nt(tt,29,()=>n(c),({name:mt,icon:nt,position:ot})=>mt,(mt,nt)=>{let ot=()=>n(nt).name,gt=()=>n(nt).icon,It=()=>n(nt).position;var st=Qn(),At=$(st);bt(At,{entries:$t=>{le($t,{act:H,get name(){return ot()},get icon(){return gt()},get position(){return It()}})},children:($t,Be)=>{De($t,{get name(){return ot()},get icon(){return gt()}})},$$slots:{entries:!0,default:!0}}),y(st),Ot(1,st,()=>j,()=>({key:ot()})),Ot(2,st,()=>R,()=>({key:ot()})),Ie(st,()=>Fe,null),s(mt,st)}),y(tt),y(q),s(S,q)},$$slots:{entries:!0,default:!0}});var ne=h(wt,2);bt(ne,{entries:S=>{Yn(S,{act:H,get home_cats(){return n(c)},get adventure_cats(){return n(l)}})},children:(S,N)=>{var q=no(),tt=h($(q),2);Nt(tt,29,()=>n(l),({name:mt,icon:nt,position:ot})=>mt,(mt,nt)=>{let ot=()=>n(nt).name,gt=()=>n(nt).icon,It=()=>n(nt).position;var st=eo(),At=$(st);bt(At,{entries:$t=>{le($t,{act:H,get name(){return ot()},get icon(){return gt()},get position(){return It()}})},children:($t,Be)=>{De($t,{get name(){return ot()},get icon(){return gt()}})},$$slots:{entries:!0,default:!0}}),y(st),Ot(1,st,()=>j,()=>({key:ot()})),Ot(2,st,()=>R,()=>({key:ot()})),Ie(st,()=>Fe,null),s(mt,st)}),y(tt),y(q),s(S,q)},$$slots:{entries:!0,default:!0}}),y(xt);var oe=h(xt,2),x=$(oe);sn(x,{summary:S=>{A();var N=E("View example source");s(S,N)},children:(S,N)=>{Dt(S,{content:Jn})},$$slots:{summary:!0,default:!0}}),y(oe),s(Et,G)},$$slots:{entries:!0,default:!0}}),s(Y,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var V=h(Z,2);L(V,()=>n(k),M=>{nn(M,{onclose:()=>v(k,!1),children:(Q,Y)=>{var X=ao(),B=h($(X),8),rt=h($(B),2);cn(rt,{});var pt=h(rt,4);ln(pt,{}),y(B),y(X),s(Q,X)},$$slots:{default:!0}})}),s(a,J),ht()}var co=P("<!> <!> <!>",1),lo=P(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),uo=P("<!> <!>",1);function _o(a){let t=z(!1),e=z(!1),r=z(!1);ee(a,{scoped:!0,children:(o,u)=>{Ct(o,{children:(i,p)=>{var w=uo(),T=F(w);Tt(T,{text:"Basic usage"});var g=h(T,2);bt(g,{entries:_=>{var f=co(),c=F(f);at(c,{run:()=>v(t,!n(t)),children:(C,k)=>{A();var O=E("Hello world");s(C,O)},$$slots:{default:!0}});var l=h(c,2);at(l,{run:()=>v(e,!n(e)),icon:k=>{A();var O=E("🌞");s(k,O)},children:(k,O)=>{A();var H=E("Hello with an optional icon snippet");s(k,H)},$$slots:{icon:!0,default:!0}});var b=h(l,2);at(b,{run:()=>v(r,!n(r)),icon:"🌚",children:(C,k)=>{A();var O=E("Hello with an optional icon string");s(C,O)},$$slots:{default:!0}}),s(_,f)},children:(_,f)=>{var c=lo(),l=h($(c),2),b=W(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Dt(l,{get content(){return n(b)}});var C=h(l,2),k=$(C),O=$(k);y(k),y(C);var H=h(C,2),R=$(H),j=$(R);y(R),y(H);var J=h(H,2),Z=$(J),V=$(Z);y(Z),y(J),A(2),y(c),K(()=>{ft(k,"color_g_5",n(t)),_t(O,`greeted = ${n(t)??""}`),ft(R,"color_e_5",n(e)),_t(j,`greeted_icon_snippet = ${n(e)??""}`),ft(Z,"color_d_5",n(r)),_t(V,`greeted_icon_string = ${n(r)??""}`)}),s(_,c)},$$slots:{entries:!0,default:!0}}),s(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var mo=P("<div>toggled</div>"),vo=P(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),ho=P("<!> <!>",1);function po(a){const t=new $e;let e=z(!1);ee(a,{contextmenu:t,scoped:!0,children:(r,o)=>{Ct(r,{children:(u,i)=>{var p=ho(),w=F(p);Tt(w,{text:"Custom instance"});var T=h(w,2);bt(T,{entries:d=>{at(d,{run:()=>v(e,!n(e)),children:(_,f)=>{A();var c=E("Toggle");s(_,c)},$$slots:{default:!0}})},children:(d,_)=>{var f=vo(),c=$(f);Dt(c,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var l=h(c,2);Dt(l,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var b=h(l,4),C=$(b);L(C,()=>n(e),k=>{var O=mo();Ot(3,O,()=>Ze),s(k,O)}),y(b),y(f),s(d,f)},$$slots:{entries:!0,default:!0}}),s(u,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}const fo=(a,t)=>{const e=window.getSelection();if(!e||!n(t))return;const r=document.createRange();r.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(r)};var go=P(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),xo=P("<div><!></div> <!>",1);function bo(a){const t=new $e;let e=z(!1),r=z(void 0),o=z("");const u="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",i=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,p=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,w=W(()=>n(o)===u||n(o)===i||n(o)===p);ee(a,{contextmenu:t,scoped:!0,children:(T,g)=>{Ct(T,{children:(d,_)=>{var f=xo(),c=F(f),l=$(c);Tt(l,{text:"Select text"}),y(c);var b=h(c,2);bt(b,{entries:k=>{at(k,{run:()=>v(e,!n(e)),children:(O,H)=>{A();var R=E("Toggle something");s(O,R)},$$slots:{default:!0}})},children:(k,O)=>{var H=go(),R=$(H);we(R,lt=>v(r,lt),()=>n(r));var j=h($(R),2),J=h($(j));J.__click=[fo,r],A(),y(j),y(R);var Z=h(R,2),V=$(Z);Qe(V),y(Z);var M=h(Z,2),Q=h(M,2),Y=$(Q);tn(Y),y(Q);var X=h(Q,2),B=$(X);se(B,{path:"Web/HTML/Global_attributes/contenteditable"}),A(),y(X);var rt=h(X,4),pt=h(rt,4);y(H),K(()=>{ft(H,"color_g_5",n(w)),ft(J,"color_a",n(e)),ft(M,"color_g_5",n(w))}),Ae(V,()=>n(o),lt=>v(o,lt)),Ae(Y,()=>n(o),lt=>v(o,lt)),ze("innerText",rt,()=>n(o),lt=>v(o,lt)),ze("innerText",pt,()=>n(o),lt=>v(o,lt)),s(k,H)},$$slots:{entries:!0,default:!0}}),K(()=>ft(c,"color_d_5",n(w))),s(d,f)},$$slots:{default:!0}})},$$slots:{default:!0}})}be(["click"]);var yo=P(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function wo(a){ee(a,{scoped:!0,children:(t,e)=>{Ct(t,{children:(r,o)=>{var u=yo(),i=F(u);Tt(i,{text:"Default behaviors"});var p=h(i,2),w=$(p);Dt(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),A(6),y(p),s(r,u)},$$slots:{default:!0}})},$$slots:{default:!0}})}var $o=P("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function Ko(a,t){vt(t,!0);const r=Ke("Contextmenu");Ge(a,{tome:r,children:(o,u)=>{var i=$o(),p=h(F(i),2);_o(p);var w=h(p,2);wo(w);var T=h(w,2);po(T);var g=h(T,2);bo(g);var d=h(g,2);io(d,{});var _=h(d,2);fn(_),s(o,i)},$$slots:{default:!0}}),ht()}export{Ko as component};
