var Ke=Object.defineProperty;var Ae=o=>{throw TypeError(o)};var je=(o,t,e)=>t in o?Ke(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var ct=(o,t,e)=>je(o,typeof t!="symbol"?t+"":t,e),he=(o,t,e)=>t.has(o)||Ae("Cannot "+e);var N=(o,t,e)=>(he(o,t,"read from private field"),e?e.call(o):t.get(o)),G=(o,t,e)=>t.has(o)?Ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),pe=(o,t,e,a)=>(he(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e),ze=(o,t,e)=>(he(o,t,"access private method"),e);import"../chunks/CWj6FrbW.js";import{y as Ze,w as Je,f as E,a as B,b as s,s as v,d as C,an as q,r as y,ap as D,h as n,aq as h,au as se,p as vt,t as nt,c as ht,u as V,aN as ke,am as z,e as ut,g as dt,B as Nt,aO as Le,aP as Pt,bi as Qe,al as le,bl as tn}from"../chunks/DpDn43ma.js";import{T as en}from"../chunks/DLyc2h3i.js";import{g as nn}from"../chunks/TwCbVmV4.js";import{M as ne}from"../chunks/X1vxdkak.js";import{T as St,a as At}from"../chunks/C7rILfWm.js";import{i as U}from"../chunks/B7cJd8Gg.js";import{c as Ce,e as Dt}from"../chunks/Doywmu7X.js";import{t as Ot,c as on,a as Ee,s as sn}from"../chunks/BoBUGYKq.js";import{C as qt}from"../chunks/CGW2Az-c.js";import{a as lt}from"../chunks/F5oRfuht.js";import{s as ae,b as gt,c as ye,a as an,r as rn}from"../chunks/DuG0mCj_.js";import{b as Te}from"../chunks/C7blHE0M.js";import{p as ot,s as We}from"../chunks/CZHbM0wv.js";import{a as cn,s as zt,b as fe,c as Oe,D as ln}from"../chunks/zK5LfmMg.js";import{o as Ne}from"../chunks/xdwjdsAM.js";import{s as mt}from"../chunks/B7YlL7pk.js";import{a as ge}from"../chunks/ZJuK4sHN.js";import{P as un}from"../chunks/CE7veC6Q.js";import{e as dn}from"../chunks/h0CD0H22.js";import{D as mn,b as De}from"../chunks/Cq4UQmJS.js";import{S as _n,g as vn}from"../chunks/DjcUnBfk.js";import{C as hn,T as pn}from"../chunks/B59yi-bQ.js";import{b as qe}from"../chunks/Dz2uVi8S.js";var Ct,Et,Mt,ie,Be;const ce=class ce{constructor(t){G(this,ie);G(this,Ct,new WeakMap);G(this,Et);G(this,Mt);pe(this,Mt,t)}observe(t,e){var a=N(this,Ct).get(t)||new Set;return a.add(e),N(this,Ct).set(t,a),ze(this,ie,Be).call(this).observe(t,N(this,Mt)),()=>{var l=N(this,Ct).get(t);l.delete(e),l.size===0&&(N(this,Ct).delete(t),N(this,Et).unobserve(t))}}};Ct=new WeakMap,Et=new WeakMap,Mt=new WeakMap,ie=new WeakSet,Be=function(){return N(this,Et)??pe(this,Et,new ResizeObserver(t=>{for(var e of t){ce.entries.set(e.target,e);for(var a of N(this,Ct).get(e.target)||[])a(e)}}))},ct(ce,"entries",new WeakMap);let we=ce;var fn=new we({box:"border-box"});function Me(o,t,e){var a=fn.observe(o,()=>e(o[t]));Ze(()=>(Je(()=>e(o[t])),a))}var gn=E('<span class="font_family_mono">contextmenu</span> event',1),xn=E('<span class="font_family_mono">navigator.vibrate</span>'),bn=E('<span class="font_family_mono">navigator.vibrate</span>'),yn=E(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),wn=E(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
		tap-and-hold (aka longpress) on an element inside Fuz's <code>Contextmenu</code>, you'll see app-specific options and actions for your current context.</p> <p>This is a powerful UX pattern, but it violates #2. The Fuz contextmenu breaks the normal browser
		behavior of showing the system contextmenu and device-specific behaviors like selecting text on
		a longpress.</p> <p>Balancing these two concerns is going to be an ongoing challenge, and my current belief is that
		the contextmenu is too useful and powerful to ignore. I'm open to critical feedback, and I'll do
		what I can to minimize the harmful effects of choices like this. iOS in particular seems buggy
		despite my attempts to accommodate it, help is appreciated.</p> <p>Mitigations:</p> <ul><li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables.</li> <li>To bypass the Fuz contextmenu on a device with a keyboard, hold the Shift key.</li> <li>To bypass the Fuz contextmenu on a touch device, like to select text, tap one extra time
			before your longpress. This means double-tap-and-hold should behave the same as tap-and-hold
			on standard web pages.</li> <li>Triggering the contextmenu inside of the Fuz contextmenu shows your system contextmenu. This
			means you can either double-right-click or longpress twice to access your system contextmenu
			as an alternative to holding Shift or double-tap-and-hold, However a caveat is that the target
			of your action will be some element inside the Fuz contextmenu, so to select text or access a
			link's system contextmenu on a touch device, you must use double-tap-and-hold. When you open
			the Fuz contextmenu on a link, you'll see the link again in the menu under your pointer by
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),$n=E("<!> <!>",1);function kn(o){var t=$n(),e=B(t);St(e,{children:(l,c)=>{var r=yn(),_=B(r);At(_,{text:"Expected behaviors"});var w=v(_,4),$=v(C(w));ne($,{path:"Web/API/Element/contextmenu_event",children:(u,x)=>{var f=gn();q(),s(u,f)},$$slots:{default:!0}});var T=v($,4);ne(T,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=xn();s(u,f)},$$slots:{default:!0}}),q(),y(w);var S=v(w,10),i=v(C(S),10),p=v(C(i));ne(p,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=bn();s(u,f)},$$slots:{default:!0}}),q(),y(i),y(S),s(l,r)},$$slots:{default:!0}});var a=v(e,2);St(a,{children:(l,c)=>{var r=wn(),_=B(r);At(_,{text:"Motivation"}),q(14),s(l,r)},$$slots:{default:!0}}),s(o,t)}function Cn(o){const t=o-1;return t*t*t+1}function Tn(o){return--o*o*o*o*o+1}function Re(o,{from:t,to:e},a={}){var{delay:l=0,duration:c=I=>Math.sqrt(I)*120,easing:r=Cn}=a,_=getComputedStyle(o),w=_.transform==="none"?"":_.transform,[$,T]=_.transformOrigin.split(" ").map(parseFloat);$/=o.clientWidth,T/=o.clientHeight;var S=In(o),i=o.clientWidth/e.width/S,p=o.clientHeight/e.height/S,u=t.left+t.width*$,x=t.top+t.height*T,f=e.left+e.width*$,d=e.top+e.height*T,k=(u-f)*i,b=(x-d)*p,M=t.width/e.width,O=t.height/e.height;return{delay:l,duration:typeof c=="function"?c(Math.sqrt(k*k+b*b)):c,easing:r,css:(I,P)=>{var L=P*k,K=P*b,j=I+P*M,W=I+P*O;return`transform: ${w} translate(${L}px, ${K}px) scale(${j}, ${W});`}}}function In(o){if("currentCSSZoom"in o)return o.currentCSSZoom;for(var t=o,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Rt,Ft;class Ue{constructor(){G(this,Rt,D(0));G(this,Ft,D(0))}get width(){return n(N(this,Rt))}set width(t){h(N(this,Rt),t,!0)}get height(){return n(N(this,Ft))}set height(t){h(N(this,Ft),t,!0)}}Rt=new WeakMap,Ft=new WeakMap;var Ht,Lt,Wt,Bt,Ut;class Pn{constructor(t,e){ct(this,"is_menu",!1);ct(this,"menu");G(this,Ht,D(!1));G(this,Lt,D());G(this,Wt,D(!1));G(this,Bt,D(null));G(this,Ut,D(null));this.menu=t,this.run=e}get selected(){return n(N(this,Ht))}set selected(t){h(N(this,Ht),t,!0)}get run(){return n(N(this,Lt))}set run(t){h(N(this,Lt),t,!0)}get pending(){return n(N(this,Wt))}set pending(t){h(N(this,Wt),t,!0)}get error_message(){return n(N(this,Bt))}set error_message(t){h(N(this,Bt),t,!0)}get promise(){return n(N(this,Ut))}set promise(t){h(N(this,Ut),t,!0)}}Ht=new WeakMap,Lt=new WeakMap,Wt=new WeakMap,Bt=new WeakMap,Ut=new WeakMap;var Vt,Xt;class Sn{constructor(t,e){ct(this,"is_menu",!0);ct(this,"menu");ct(this,"depth");G(this,Vt,D(!1));G(this,Xt,D(se([])));this.menu=t,this.depth=e}get selected(){return n(N(this,Vt))}set selected(t){h(N(this,Vt),t,!0)}get items(){return n(N(this,Xt))}set items(t){h(N(this,Xt),t,!0)}}Vt=new WeakMap,Xt=new WeakMap;var Yt;class An{constructor(){ct(this,"is_menu",!0);ct(this,"menu",null);ct(this,"depth",1);G(this,Yt,D(se([])))}get items(){return n(N(this,Yt))}set items(t){h(N(this,Yt),t,!0)}}Yt=new WeakMap;var Gt,Kt,jt,Zt,Jt,Qt;class Ie{constructor(t){ct(this,"layout");ct(this,"initial_layout");G(this,Gt,D(!1));G(this,Kt,D(0));G(this,jt,D(0));G(this,Zt,D(se([])));G(this,Jt,D());ct(this,"root_menu",new An);G(this,Qt,D(se([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ue}get opened(){return n(N(this,Gt))}set opened(t){h(N(this,Gt),t,!0)}get x(){return n(N(this,Kt))}set x(t){h(N(this,Kt),t,!0)}get y(){return n(N(this,jt))}set y(t){h(N(this,jt),t,!0)}get params(){return n(N(this,Zt))}set params(t){h(N(this,Zt),t,!0)}get error(){return n(N(this,Jt))}set error(t){h(N(this,Jt),t,!0)}get selections(){return n(N(this,Qt))}set selections(t){h(N(this,Qt),t,!0)}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const l=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=l??"unknown error",this.error=l}if(cn(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(l=>{if(a===t.promise){if(typeof(l==null?void 0:l.ok)=="boolean")if(l.ok)this.close();else{const c=typeof l.message=="string"?l.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return l}},l=>{if(a!==t.promise)return;const c=typeof(l==null?void 0:l.message)=="string"?l.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=be.maybe_get()??this.root_menu,a=new Pn(e,t);return e.items.push(a),Ne(()=>{e.items.length=0}),a}add_submenu(){const t=be.maybe_get()??this.root_menu,e=new Sn(t,t.depth+1);return t.items.push(e),be.set(e),Ne(()=>{t.items.length=0}),e}}Gt=new WeakMap,Kt=new WeakMap,jt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap;const Pe="contextmenu",zn=`a,[data-${Pe}]`,oe=new Map;let En=0;const xe=(o,t)=>{if(t==null)return;const e=En+++"";return o.dataset[Pe]=e,oe.set(e,t),{update:a=>{oe.set(e,a)},destroy:()=>{oe.delete(e)}}},On=17,Fe=(o,t,e,a)=>{const l=Nn(o);return l!=null&&l.length?(a.open(l,t,e),navigator.vibrate&&navigator.vibrate(On),!0):!1},Nn=o=>{var c;let t=null,e=o,a,l;for(;e=e==null?void 0:e.closest(zn);){if(a=e.dataset[Pe]){if(t??(t=[]),l=oe.get(a),l===void 0)continue;Array.isArray(l)?(t??(t=[])).push(...l):(t??(t=[])).push(l)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const r=(c=window.getSelection())==null?void 0:c.toString();r&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(r)}})}return t},ue=Ce(),be=Ce(),$e=Ce(()=>new Ue);var Dn=(o,t)=>t.close(),qn=E('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ve(o,t){vt(t,!0);const e="🔗",a=ot(t,"icon",3,e),l=ue.get(),c=(O,I=location.host)=>{const P=ge(ge(O,"https://"),"http://");return P.startsWith(I+"/")?ge(P,I):P},r=V(()=>c(t.href)),_=V(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),w=V(()=>n(_)?"noreferrer":void 0);var $=qn(),T=C($);T.__click=[Dn,l];var S=C(T),i=C(S),p=C(i);{var u=O=>{var I=z();nt(()=>mt(I,a())),s(O,I)},x=O=>{var I=ut(),P=B(I);dt(P,a,()=>e),s(O,I)};U(p,O=>{typeof a()=="string"?O(u):O(x,!1)})}y(i);var f=v(i,2),d=C(f),k=C(d);{var b=O=>{var I=ut(),P=B(I);dt(P,()=>t.children),s(O,I)},M=O=>{var I=z();nt(()=>mt(I,n(r))),s(O,I)};U(k,O=>{t.children?O(b):O(M,!1)})}y(d),y(f),y(S),y(T),y($),nt(()=>{ae(T,"href",t.href),ae(T,"rel",n(w))}),s(o,$),ht()}ke(["click"]);var Mn=E('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function st(o,t){vt(t,!0);const e=ue.get(),a=e.add_entry(t.run);Nt(()=>{a.run=t.run});const l=V(()=>a.selected),c=V(()=>a.pending),r=V(()=>a.error_message);var _=Mn();let w;_.__click=()=>{setTimeout(()=>e.activate(a))};var $=C(_),T=C($),S=C(T);{var i=b=>{var M=z();nt(()=>mt(M,t.icon)),s(b,M)},p=(b,M)=>{{var O=I=>{var P=ut(),L=B(P);dt(L,()=>t.icon),s(I,P)};U(b,I=>{t.icon&&I(O)},M)}};U(S,b=>{typeof t.icon=="string"?b(i):b(p,!1)})}y(T);var u=v(T,2),x=C(u);dt(x,()=>t.children),y(u);var f=v(u,2);{var d=b=>{un(b,{})},k=(b,M)=>{{var O=I=>{var P=z("⚠️");s(I,P)};U(b,I=>{n(r)&&I(O)},M)}};U(f,b=>{n(c)?b(d):b(k,!1)})}y($),y(_),nt(b=>{w=gt(_,1,"menu_item plain selectable deselectable svelte-10kraez",null,w,b),ae(_,"title",n(r)?`Error: ${n(r)}`:void 0)},[()=>({selected:n(l)})]),Le("mouseenter",_,b=>{zt(b),e.select(a)}),s(o,_),ht()}ke(["click"]);function Xe(o,t){st(o,{get run(){return t.run},icon:a=>{q();var l=z();nt(()=>mt(l,t.icon)),s(a,l)},children:(a,l)=>{q();var c=z();nt(()=>mt(c,t.content)),s(a,c)},$$slots:{icon:!0,default:!0}})}const Rn=(o,t=le)=>{Ve(o,We(t))},Fn=(o,t=le)=>{Xe(o,We(t))};var Hn=E('<div class="contextmenu_root svelte-1oafc8t" role="region"><!></div>'),Ln=E('<div class="contextmenu_layout svelte-1oafc8t" aria-hidden="true"></div>'),Wn=E('<ul class="contextmenu unstyled pane svelte-1oafc8t" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Bn=E("<!> <!> <!>",1);function te(o,t){vt(t,!0);const e=ot(t,"contextmenu",19,()=>new Ie),a=ot(t,"longpress_move_tolerance",3,21),l=ot(t,"longpress_duration",3,633),c=ot(t,"bypass_with_tap_then_longpress",3,!0),r=ot(t,"tap_then_longpress_duration",3,660),_=ot(t,"tap_then_longpress_move_tolerance",3,7),w=ot(t,"open_offset_x",19,()=>-2),$=ot(t,"open_offset_y",19,()=>-2),T=ot(t,"scoped",3,!1);ue.set(e());let S=D(void 0);const i=V(()=>e().layout),p=V(()=>e().initial_layout),u=V(()=>n(i)===n(p));let x=D(void 0),f=D(void 0);Nt(()=>{!n(u)&&n(x)!==void 0&&(n(i).width=n(x))}),Nt(()=>{!n(u)&&n(f)!==void 0&&(n(i).height=n(f))});const d=$e.set();Nt(()=>{if(n(S)){const g=n(S).getBoundingClientRect();d.width=g.width,d.height=g.height}});const k=V(()=>e().x+Math.min(0,n(i).width-(e().x+d.width))),b=V(()=>e().y+Math.min(0,n(i).height-(e().y+d.height)));let M=D(void 0),O=D(void 0),I=D(void 0),P=D(void 0),L=D(void 0),K=D(void 0);const j=()=>{n(L)&&h(L,!1),n(P)!=null&&(clearTimeout(n(P)),h(P,null))},W=g=>{var R;if(n(K)){h(K,!1);return}if(n(L)){j(),zt(g);return}const{target:m}=g;g.shiftKey||!(m instanceof HTMLElement||m instanceof SVGElement)||(R=n(S))!=null&&R.contains(m)||fe(m)||Oe(m)||Fe(m,g.clientX+w(),g.clientY+$(),e())&&(zt(g),j())},Z=g=>{n(L)&&h(L,!1);const{touches:m,target:R}=g;if(e().opened||m.length!==1||g.shiftKey||!(R instanceof HTMLElement||R instanceof SVGElement)||fe(R)||Oe(R))return;const{clientX:F,clientY:H}=m[0];if(c()){if(n(I)!=null&&performance.now()-n(I)<r()&&Math.hypot(F-n(M),H-n(O))<_()){h(K,!0),h(I,null);return}h(I,performance.now(),!0)}h(M,F,!0),h(O,H,!0),n(P)!=null&&j(),h(P,setTimeout(()=>{h(L,!0),Fe(R,n(M)+w(),n(O)+$(),e())},l()),!0)},J=g=>{if(n(P)==null)return;const{touches:m}=g;if(m.length!==1)return;const{clientX:R,clientY:F}=m[0];Math.hypot(R-n(M),F-n(O))>a()&&(e().opened&&e().close(),j())},X=g=>{n(P)!=null&&(n(L)&&zt(g),j())},Y=g=>{n(S)&&!n(S).contains(g.target)&&e().close()},tt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),rt=g=>{const m=tt.get(g.key);!m||fe(g.target)||(zt(g),m())},A=(g,m)=>{let R=null;const F=H=>{R&&(R(),R=null),H.disabled||(R=Qe(g,H.event,H.cb,{capture:!0,passive:H.passive}))};return F(m),{update:H=>{F(H)},destroy:()=>{R==null||R()}}};var $t=Bn();lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"contextmenu",passive:!1,cb:W,disabled:T()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchstart",passive:!0,cb:Z,disabled:T()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchmove",passive:!0,cb:J,disabled:T()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchend",passive:!1,cb:X,disabled:T()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchcancel",passive:!1,cb:X,disabled:T()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"mousedown",passive:!0,cb:Y,disabled:!e().opened})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"keydown",passive:!1,cb:rt,disabled:!e().opened}));var xt=B($t);{var bt=g=>{var m=Hn(),R=C(m);dt(R,()=>t.children),y(m),lt(m,(F,H)=>A==null?void 0:A(F,H),()=>({event:"contextmenu",passive:!1,cb:W})),lt(m,(F,H)=>A==null?void 0:A(F,H),()=>({event:"touchstart",passive:!0,cb:Z})),lt(m,(F,H)=>A==null?void 0:A(F,H),()=>({event:"touchmove",passive:!0,cb:J})),lt(m,(F,H)=>A==null?void 0:A(F,H),()=>({event:"touchend",passive:!1,cb:X})),lt(m,(F,H)=>A==null?void 0:A(F,H),()=>({event:"touchcancel",passive:!1,cb:X})),s(g,m)},Q=g=>{var m=ut(),R=B(m);dt(R,()=>t.children),s(g,m)};U(xt,g=>{T()?g(bt):g(Q,!1)})}var yt=v(xt,2);{var wt=g=>{var m=Ln();Me(m,"clientHeight",R=>h(f,R)),Me(m,"clientWidth",R=>h(x,R)),s(g,m)};U(yt,g=>{n(u)||g(wt)})}var ee=v(yt,2);{var de=g=>{var m=Wn();let R;Dt(m,20,()=>e().params,F=>F,(F,H)=>{var pt=ut(),_t=B(pt);{var it=ft=>{var et=ut(),It=B(et);dt(It,()=>H),s(ft,et)},Tt=(ft,et)=>{{var It=at=>{Rn(at,()=>H.props)},me=(at,_e)=>{{var Ge=ve=>{Fn(ve,()=>H.props)};U(at,ve=>{H.snippet==="text"&&ve(Ge)},_e)}};U(ft,at=>{H.snippet==="link"?at(It):at(me,!1)},et)}};U(_t,ft=>{typeof H=="function"?ft(it):ft(Tt,!1)})}s(F,pt)}),y(m),Te(m,F=>h(S,F),()=>n(S)),nt(F=>R=ye(m,"",R,F),[()=>({transform:`translate3d(${n(k)??""}px, ${n(b)??""}px, 0)`})]),s(g,m)};U(ee,g=>{e().opened&&g(de)})}s(o,$t),ht()}function kt(o,t){const e=ot(t,"tag",3,"span");var a=ut(),l=B(a);dn(l,e,!1,(c,r)=>{lt(c,($,T)=>xe==null?void 0:xe($,T),()=>t.entries),an(c,()=>({class:"display_contents",...t.attrs}));var _=ut(),w=B(_);dt(w,()=>t.children),s(r,_)}),s(o,a)}var Un=E('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Vn=E('<li role="none" class="svelte-pa2qv7"><div role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Se(o,t){vt(t,!0);const e=ue.get(),a=e.add_submenu(),{layout:l}=e,c=V(()=>a.selected);let r=D(void 0);const _=$e.get(),w=$e.set();let $=D(0),T=D(0);Nt(()=>{n(r)&&S(n(r),l,_)});const S=(P,L,K)=>{const{x:j,y:W,width:Z,height:J}=P.getBoundingClientRect();w.width=Z,w.height=J;const X=j-n($),Y=W-n(T),tt=X+Z+K.width-L.width;if(tt<=0)h($,K.width,!0);else{const rt=Z-X;rt<=0?h($,-Z):rt>tt?h($,K.width-tt):h($,rt-Z)}h(T,Math.min(0,L.height-(Y+J)),!0)};var i=Vn();let p;var u=C(i);let x;var f=C(u),d=C(f),k=C(d);dt(k,()=>t.icon??le),y(d);var b=v(d,2),M=C(b);dt(M,()=>t.children),y(b),y(f),q(2),y(u);var O=v(u,2);{var I=P=>{var L=Un();let K;var j=C(L);dt(j,()=>t.menu),y(L),Te(L,W=>h(r,W),()=>n(r)),nt(W=>K=ye(L,"",K,W),[()=>({transform:`translate3d(${n($)??""}px, ${n(T)??""}px, 0)`,"max-height":`${l.height??""}px`})]),s(P,L)};U(O,P=>{n(c)&&P(I)})}y(i),nt((P,L)=>{p=ye(i,"",p,P),x=gt(u,1,"menu_item plain selectable svelte-pa2qv7",null,x,L),ae(u,"aria-expanded",n(c))},[()=>({"--contextmenu_depth":a.depth}),()=>({selected:n(c)})]),Le("mouseenter",u,P=>{zt(P),setTimeout(()=>e.select(a))}),s(o,i),ht()}var Xn=E("<!> <!>",1);function re(o,t){vt(t,!0);const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺");Se(o,{icon:r=>{q();var _=z();nt(()=>mt(_,a())),s(r,_)},menu:r=>{var _=Xn(),w=B(_);st(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:S=>{var i=ut(),p=B(i);{var u=f=>{var d=z("🏠");s(f,d)},x=f=>{var d=z("🌄");s(f,d)};U(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ut(),u=B(p);{var x=d=>{var k=z("go home");s(d,k)},f=d=>{var k=z("go adventure");s(d,k)};U(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}});var $=v(w,2);st($,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:S=>{var i=ut(),p=B(i);{var u=f=>{var d=z("🌄");s(f,d)},x=f=>{var d=z("🏠");s(f,d)};U(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ut(),u=B(p);{var x=d=>{var k=z("do adventure");s(d,k)},f=d=>{var k=z("be home");s(d,k)};U(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}}),s(r,_)},children:(r,_)=>{q();var w=z();nt(()=>mt(w,e())),s(r,w)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var Yn=E("<!> <!>",1);function Gn(o,t){var e=Yn(),a=B(e);Ve(a,{href:"https://github.com/ryanatkn/fuz",icon:r=>{_n(r,{get data(){return vn},size:"var(--icon_size_xs)"})},children:(r,_)=>{q();var w=z("Source code");s(r,w)},$$slots:{icon:!0,default:!0}});var l=v(a,2);st(l,{get run(){return t.toggle_about_dialog},icon:r=>{q();var _=z("?");s(r,_)},children:(r,_)=>{q();var w=z("About");s(r,w)},$$slots:{icon:!0,default:!0}}),s(o,e)}const Ye=o=>{const t=o.length;if(t===2)return"cats";if(t===0)return null;const e=o[0];return e.icon+e.name};var Kn=E("<!> <!>",1),jn=E("<!> <!> <!>",1);function Zn(o,t){vt(t,!0);const e=V(()=>Ye(t.adventure_cats));Se(o,{icon:c=>{q();var r=z("🏠");s(c,r)},menu:c=>{var r=jn(),_=B(r);{var w=i=>{st(i,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{q();var x=z("🐈‍⬛");s(u,x)},children:(u,x)=>{q();var f=z("call");s(u,f)},$$slots:{icon:!0,default:!0}})};U(_,i=>{n(e)&&i(w)})}var $=v(_,2);Dt($,17,()=>t.home_cats,i=>i.name,(i,p)=>{re(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var T=v($,2);{var S=i=>{var p=Kn(),u=B(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{q();var k=z("🏠");s(d,k)},children:(d,k)=>{q();var b=z("be");s(d,b)},$$slots:{icon:!0,default:!0}});var x=v(u,2);st(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{q();var k=z("🦋");s(d,k)},children:(d,k)=>{q();var b=z("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};U(T,i=>{n(e)||i(S)})}s(c,r)},children:(c,r)=>{q();var _=z("home");s(c,_)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var Jn=E("<!> <!>",1),Qn=E("<!> <!> <!>",1);function to(o,t){vt(t,!0);const e=V(()=>Ye(t.home_cats));Se(o,{icon:c=>{q();var r=z("🌄");s(c,r)},menu:c=>{var r=Qn(),_=B(r);{var w=i=>{st(i,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{q();var x=z("🦋");s(u,x)},children:(u,x)=>{q();var f=z("call");s(u,f)},$$slots:{icon:!0,default:!0}})};U(_,i=>{n(e)&&i(w)})}var $=v(_,2);Dt($,17,()=>t.adventure_cats,i=>i.name,(i,p)=>{re(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var T=v($,2);{var S=i=>{var p=Jn(),u=B(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{q();var k=z("🌄");s(d,k)},children:(d,k)=>{q();var b=z("do");s(d,b)},$$slots:{icon:!0,default:!0}});var x=v(u,2);st(x,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{q();var k=z("🐈‍⬛");s(d,k)},children:(d,k)=>{q();var b=z("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};U(T,i=>{n(e)||i(S)})}s(c,r)},children:(c,r)=>{q();var _=z("adventure");s(c,_)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var eo=E('<span class="icon svelte-i8hat5"> </span>'),no=E('<span class="name svelte-i8hat5"><!> </span>'),oo=E("<span><!><!></span>");function He(o,t){const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺"),l=ot(t,"show_name",3,!0),c=ot(t,"show_icon",3,!0);var r=oo();let _;var w=C(r);{var $=i=>{var p=eo(),u=C(p,!0);y(p),nt(()=>mt(u,a())),s(i,p)};U(w,i=>{c()&&i($)})}var T=v(w);{var S=i=>{var p=no(),u=C(p);dt(u,()=>t.children??le);var x=v(u,1,!0);y(p),nt(()=>mt(x,e())),s(i,p)};U(T,i=>{l()&&i(S)})}y(r),nt(i=>_=gt(r,1,"cat svelte-i8hat5",null,_,i),[()=>({"has-icon":c()})]),s(o,r)}const so=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Details from '$lib/Details.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import Cat_Contextmenu from '$routes/docs/contextmenu/Cat_Contextmenu.svelte';
	import App_Contextmenu from '$routes/docs/contextmenu/App_Contextmenu.svelte';
	import Home_Contextmenu from '$routes/docs/contextmenu/Home_Contextmenu.svelte';
	import Adventure_Contextmenu from '$routes/docs/contextmenu/Adventure_Contextmenu.svelte';
	import Cat_View from '$routes/docs/contextmenu/Cat_View.svelte';
	import type {Cat, Cat_Position, History_Item} from '$routes/docs/contextmenu/helpers.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import file_contents from '$routes/docs/contextmenu/Example_Full.svelte?raw';
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
		<div class="mx_auto box">
			<div class="pane p_xl text_align_center">
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
					<h2>Color scheme</h2>
					<Color_Scheme_Input />
					<h2>Theme</h2>
					<Theme_Input />
				</div>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.position {
		border-radius: var(--border_radius_md);
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
`;var ao=E("<!> <!>",1),ro=E('<div class="cat_wrapper svelte-hhr0et"><!></div>'),io=E('<div class="position home svelte-hhr0et"><div class="icon svelte-hhr0et">🏠</div> <div class="cats svelte-hhr0et"></div></div>'),co=E('<div class="cat_wrapper svelte-hhr0et"><!></div>'),lo=E('<div class="position adventure svelte-hhr0et"><div class="icon svelte-hhr0et">🌄</div> <div class="cats svelte-hhr0et"></div></div>'),uo=E("<section><!> <!></section> <section><!></section>",1),mo=E("<!> <!>",1),_o=E('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),vo=E("<!> <!>",1);function ho(o,t){vt(t,!0);const e="Alyssa",a="Ben",l="home";let c=D(l),r=D(l);const _=V(()=>n(c)===n(r)?"😺":"😾"),w=V(()=>n(c)===n(r)?"😸":"😿"),$=V(()=>({name:e,icon:n(_),position:n(c)})),T=V(()=>({name:a,icon:n(w),position:n(r)}));let S=D(!1);const i=(W,Z)=>{const J=[],X=[];for(const Y of W){const tt=Y.position==="home"?J:X;Z?tt.unshift(Y):tt.push(Y)}return{home_cats:J,adventure_cats:X}},p=V(()=>i([n($),n(T)],n(S))),u=V(()=>n(p).home_cats),x=V(()=>n(p).adventure_cats),f=V(()=>n(c)!==l||n(r)!==l),d=()=>{h(c,l),h(r,l)};let k=D(!1);const b=()=>{h(k,!n(k))},M=W=>{switch(W.type){case"call_cats_adventure":{h(c,"adventure"),h(r,"adventure");break}case"call_cats_home":{h(c,"home"),h(r,"home");break}case"cat_go_adventure":{W.name===e?h(c,"adventure"):W.name===a&&h(r,"adventure");break}case"cat_go_home":{W.name===e?h(c,"home"):W.name===a&&h(r,"home");break}case"cat_be_or_do":{h(S,!n(S));break}}},[O,I]=on({fallback:(W,Z)=>{const J=window.getComputedStyle(W),X=J.transform==="none"?"":J.transform;return{duration:1500,easing:Tn,css:Y=>`
					transform: ${X} scale(${Y});
					opacity: ${Y}
				`}}});var P=vo(),L=B(P);te(L,{scoped:!0,children:(W,Z)=>{St(W,{children:(J,X)=>{var Y=mo(),tt=B(Y);At(tt,{text:"Full example"});var rt=v(tt,2);kt(rt,{entries:$t=>{var xt=ao(),bt=B(xt);{var Q=wt=>{Xe(wt,{run:d,content:"Reset",icon:"↻"})};U(bt,wt=>{n(f)&&wt(Q)})}var yt=v(bt,2);Gn(yt,{toggle_about_dialog:b}),s($t,xt)},children:($t,xt)=>{var bt=uo(),Q=B(bt),yt=C(Q);kt(yt,{entries:m=>{Zn(m,{act:M,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(m,R)=>{var F=io(),H=v(C(F),2);Dt(H,29,()=>n(u),({name:pt,icon:_t,position:it})=>pt,(pt,_t)=>{let it=()=>n(_t).name,Tt=()=>n(_t).icon,ft=()=>n(_t).position;var et=ro(),It=C(et);kt(It,{entries:at=>{re(at,{act:M,get name(){return it()},get icon(){return Tt()},get position(){return ft()}})},children:(at,_e)=>{He(at,{get name(){return it()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>I,()=>({key:it()})),Ot(2,et,()=>O,()=>({key:it()})),Ee(et,()=>Re,null),s(pt,et)}),y(H),y(F),s(m,F)},$$slots:{entries:!0,default:!0}});var wt=v(yt,2);kt(wt,{entries:m=>{to(m,{act:M,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(m,R)=>{var F=lo(),H=v(C(F),2);Dt(H,29,()=>n(x),({name:pt,icon:_t,position:it})=>pt,(pt,_t)=>{let it=()=>n(_t).name,Tt=()=>n(_t).icon,ft=()=>n(_t).position;var et=co(),It=C(et);kt(It,{entries:at=>{re(at,{act:M,get name(){return it()},get icon(){return Tt()},get position(){return ft()}})},children:(at,_e)=>{He(at,{get name(){return it()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>I,()=>({key:it()})),Ot(2,et,()=>O,()=>({key:it()})),Ee(et,()=>Re,null),s(pt,et)}),y(H),y(F),s(m,F)},$$slots:{entries:!0,default:!0}}),y(Q);var ee=v(Q,2),de=C(ee);mn(de,{summary:m=>{q();var R=z("View example source");s(m,R)},children:(m,R)=>{qt(m,{get content(){return so}})},$$slots:{summary:!0,default:!0}}),y(ee),s($t,bt)},$$slots:{entries:!0,default:!0}}),s(J,Y)},$$slots:{default:!0}})},$$slots:{default:!0}});var K=v(L,2);{var j=W=>{ln(W,{onclose:()=>h(k,!1),children:(Z,J)=>{var X=_o(),Y=C(X),tt=v(C(Y),8),rt=v(C(tt),2);hn(rt,{});var A=v(rt,4);pn(A,{}),y(tt),y(Y),y(X),s(Z,X)},$$slots:{default:!0}})};U(K,W=>{n(k)&&W(j)})}s(o,P),ht()}var po=E("<!> <!> <!>",1),fo=E(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),go=E("<!> <!>",1);function xo(o){let t=D(!1),e=D(!1),a=D(!1);te(o,{scoped:!0,children:(l,c)=>{St(l,{children:(r,_)=>{var w=go(),$=B(w);At($,{text:"Basic usage"});var T=v($,2);kt(T,{entries:i=>{var p=po(),u=B(p);st(u,{run:()=>h(t,!n(t)),children:(d,k)=>{q();var b=z("Hello world");s(d,b)},$$slots:{default:!0}});var x=v(u,2);st(x,{run:()=>h(e,!n(e)),icon:k=>{q();var b=z("🌞");s(k,b)},children:(k,b)=>{q();var M=z("Hello with an optional icon snippet");s(k,M)},$$slots:{icon:!0,default:!0}});var f=v(x,2);st(f,{run:()=>h(a,!n(a)),icon:"🌚",children:(d,k)=>{q();var b=z("Hello with an optional icon string");s(d,b)},$$slots:{default:!0}}),s(i,p)},children:(i,p)=>{var u=fo(),x=v(C(u),2);const f=V(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);qt(x,{get content(){return n(f)}});var d=v(x,2),k=C(d);let b;var M=C(k);y(k),y(d);var O=v(d,2),I=C(O);let P;var L=C(I);y(I),y(O);var K=v(O,2),j=C(K);let W;var Z=C(j);y(j),y(K),q(2),y(u),nt((J,X,Y)=>{b=gt(k,1,"",null,b,J),mt(M,`greeted = ${n(t)??""}`),P=gt(I,1,"",null,P,X),mt(L,`greeted_icon_snippet = ${n(e)??""}`),W=gt(j,1,"",null,W,Y),mt(Z,`greeted_icon_string = ${n(a)??""}`)},[()=>({color_g_5:n(t)}),()=>({color_e_5:n(e)}),()=>({color_d_5:n(a)})]),s(i,u)},$$slots:{entries:!0,default:!0}}),s(r,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var bo=E("<div>toggled</div>"),yo=E(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),wo=E("<!> <!>",1);function $o(o,t){vt(t,!0);const e=new Ie;let a=D(!1);te(o,{get contextmenu(){return e},scoped:!0,children:(l,c)=>{St(l,{children:(r,_)=>{var w=wo(),$=B(w);At($,{text:"Custom instance"});var T=v($,2);kt(T,{entries:i=>{st(i,{run:()=>h(a,!n(a)),children:(p,u)=>{q();var x=z("Toggle");s(p,x)},$$slots:{default:!0}})},children:(i,p)=>{var u=yo(),x=C(u);qt(x,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var f=v(x,2);qt(f,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var d=v(f,4),k=C(d);{var b=M=>{var O=bo();Ot(3,O,()=>sn),s(M,O)};U(k,M=>{n(a)&&M(b)})}y(d),y(u),s(i,u)},$$slots:{entries:!0,default:!0}}),s(r,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),ht()}const ko=(o,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var Co=E(`<div><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),To=E("<div><!></div> <!>",1);function Io(o,t){vt(t,!0);const e=new Ie;let a=D(!1),l=D(void 0),c=D("");const r="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",_=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,w=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,$=V(()=>n(c)===r||n(c)===_||n(c)===w);te(o,{get contextmenu(){return e},scoped:!0,children:(T,S)=>{St(T,{children:(i,p)=>{var u=To(),x=B(u);let f;var d=C(x);At(d,{text:"Select text"}),y(x);var k=v(x,2);kt(k,{entries:M=>{st(M,{run:()=>h(a,!n(a)),children:(O,I)=>{q();var P=z("Toggle something");s(O,P)},$$slots:{default:!0}})},children:(M,O)=>{var I=Co();let P;var L=C(I),K=v(C(L),2),j=v(C(K));j.__click=[ko,l];let W;q(),y(K),y(L),Te(L,Q=>h(l,Q),()=>n(l));var Z=v(L,2),J=C(Z);rn(J),y(Z);var X=v(Z,2);let Y;var tt=v(X,2),rt=C(tt);tn(rt),y(tt);var A=v(tt,2),$t=C(A);ne($t,{path:"Web/HTML/Global_attributes/contenteditable"}),q(),y(A);var xt=v(A,4),bt=v(xt,4);y(I),nt((Q,yt,wt)=>{P=gt(I,1,"panel p_md",null,P,Q),W=gt(j,1,"",null,W,yt),Y=gt(X,1,"",null,Y,wt)},[()=>({color_g_5:n($)}),()=>({color_a:n(a)}),()=>({color_g_5:n($)})]),qe(J,()=>n(c),Q=>h(c,Q)),qe(rt,()=>n(c),Q=>h(c,Q)),De("innerText",xt,()=>n(c),Q=>h(c,Q)),De("innerText",bt,()=>n(c),Q=>h(c,Q)),s(M,I)},$$slots:{entries:!0,default:!0}}),nt(b=>f=gt(x,1,"",null,f,b),[()=>({color_d_5:n($)})]),s(i,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),ht()}ke(["click"]);var Po=E(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function So(o){te(o,{scoped:!0,children:(t,e)=>{St(t,{children:(a,l)=>{var c=Po(),r=B(c);At(r,{text:"Default behaviors"});var _=v(r,2),w=C(_);qt(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),q(6),y(_),s(a,c)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Ao=E("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function ns(o,t){vt(t,!0);const a=nn("Contextmenu");en(o,{get tome(){return a},children:(l,c)=>{var r=Ao(),_=v(B(r),2);xo(_);var w=v(_,2);So(w);var $=v(w,2);$o($,{});var T=v($,2);Io(T,{});var S=v(T,2);ho(S,{});var i=v(S,2);kn(i),s(l,r)},$$slots:{default:!0}}),ht()}export{ns as component};
