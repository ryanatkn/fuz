var Ke=Object.defineProperty;var Ae=o=>{throw TypeError(o)};var je=(o,t,e)=>t in o?Ke(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var ct=(o,t,e)=>je(o,typeof t!="symbol"?t+"":t,e),he=(o,t,e)=>t.has(o)||Ae("Cannot "+e);var N=(o,t,e)=>(he(o,t,"read from private field"),e?e.call(o):t.get(o)),G=(o,t,e)=>t.has(o)?Ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),pe=(o,t,e,a)=>(he(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e),ze=(o,t,e)=>(he(o,t,"access private method"),e);import{t as z,a as s,m as ke,k as E,c as ft,o as Le,z as Ze,A as Je}from"../chunks/CiDQTsPF.js";import{m as Qe,k as tn,f as U,s as _,c as $,V as M,r as y,X as D,g as n,Y as v,a2 as se,p as _t,t as nt,u as V,a as vt,o as Nt,an as Pt,T as le}from"../chunks/BwMJFMlG.js";import{T as en}from"../chunks/B4FUr1Wa.js";import{g as nn}from"../chunks/DVCD0T87.js";import{M as ne}from"../chunks/ZIUhunym.js";import{T as St,a as At}from"../chunks/DHmZm6fS.js";import{i as B}from"../chunks/OnAfY6hx.js";import{c as Ce,e as Dt}from"../chunks/X5ifSRV2.js";import{t as Ot,c as on,a as Ee,s as sn}from"../chunks/Cd1guL8S.js";import{C as Mt}from"../chunks/BEQQKOKv.js";import{b as ae,s as ut,c as gt,d as ye,r as an}from"../chunks/CXdsb7cp.js";import{a as lt}from"../chunks/BeyfYMJO.js";import{b as Te}from"../chunks/CaCZp8p2.js";import{p as ot,s as We}from"../chunks/Cg-tDuWj.js";import{a as rn,s as zt,b as fe,c as Oe,D as cn}from"../chunks/DTGstjyM.js";import{o as Ne}from"../chunks/Q-dCrvP3.js";import{s as dt}from"../chunks/DcJ6W0Cs.js";import{a as ge}from"../chunks/ZJuK4sHN.js";import{P as ln}from"../chunks/BRhKA9yw.js";import{D as un,b as De}from"../chunks/Ytj8QEaA.js";import{S as dn,g as mn}from"../chunks/BPBSbo4X.js";import{C as _n,T as vn}from"../chunks/ZWRKvh-C.js";import{b as Me}from"../chunks/BfA1UjMe.js";var Ct,Et,Rt,ie,Ue;const ce=class ce{constructor(t){G(this,ie);G(this,Ct,new WeakMap);G(this,Et);G(this,Rt);pe(this,Rt,t)}observe(t,e){var a=N(this,Ct).get(t)||new Set;return a.add(e),N(this,Ct).set(t,a),ze(this,ie,Ue).call(this).observe(t,N(this,Rt)),()=>{var c=N(this,Ct).get(t);c.delete(e),c.size===0&&(N(this,Ct).delete(t),N(this,Et).unobserve(t))}}};Ct=new WeakMap,Et=new WeakMap,Rt=new WeakMap,ie=new WeakSet,Ue=function(){return N(this,Et)??pe(this,Et,new ResizeObserver(t=>{for(var e of t){ce.entries.set(e.target,e);for(var a of N(this,Ct).get(e.target)||[])a(e)}}))},ct(ce,"entries",new WeakMap);let we=ce;var hn=new we({box:"border-box"});function Re(o,t,e){var a=hn.observe(o,()=>e(o[t]));Qe(()=>(tn(()=>e(o[t])),a))}var pn=z('<span class="font_family_mono">contextmenu</span> event',1),fn=z('<span class="font_family_mono">navigator.vibrate</span>'),gn=z('<span class="font_family_mono">navigator.vibrate</span>'),xn=z(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),bn=z(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),yn=z("<!> <!>",1);function wn(o){var t=yn(),e=U(t);St(e,{children:(c,l)=>{var r=xn(),h=U(r);At(h,{text:"Expected behaviors"});var k=_(h,4),C=_($(k));ne(C,{path:"Web/API/Element/contextmenu_event",children:(u,x)=>{var f=pn();M(),s(u,f)},$$slots:{default:!0}});var P=_(C,4);ne(P,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=fn();s(u,f)},$$slots:{default:!0}}),M(),y(k);var S=_(k,10),i=_($(S),10),p=_($(i));ne(p,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=gn();s(u,f)},$$slots:{default:!0}}),M(),y(i),y(S),s(c,r)},$$slots:{default:!0}});var a=_(e,2);St(a,{children:(c,l)=>{var r=bn(),h=U(r);At(h,{text:"Motivation"}),M(14),s(c,r)},$$slots:{default:!0}}),s(o,t)}function $n(o){const t=o-1;return t*t*t+1}function kn(o){return--o*o*o*o*o+1}function qe(o,{from:t,to:e},a={}){var{delay:c=0,duration:l=T=>Math.sqrt(T)*120,easing:r=$n}=a,h=getComputedStyle(o),k=h.transform==="none"?"":h.transform,[C,P]=h.transformOrigin.split(" ").map(parseFloat);C/=o.clientWidth,P/=o.clientHeight;var S=Cn(o),i=o.clientWidth/e.width/S,p=o.clientHeight/e.height/S,u=t.left+t.width*C,x=t.top+t.height*P,f=e.left+e.width*C,d=e.top+e.height*P,w=(u-f)*i,b=(x-d)*p,R=t.width/e.width,O=t.height/e.height;return{delay:c,duration:typeof l=="function"?l(Math.sqrt(w*w+b*b)):l,easing:r,css:(T,I)=>{var L=I*w,K=I*b,j=T+I*R,W=T+I*O;return`transform: ${k} translate(${L}px, ${K}px) scale(${j}, ${W});`}}}function Cn(o){if("currentCSSZoom"in o)return o.currentCSSZoom;for(var t=o,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var qt,Ft;class Be{constructor(){G(this,qt,D(0));G(this,Ft,D(0))}get width(){return n(N(this,qt))}set width(t){v(N(this,qt),t,!0)}get height(){return n(N(this,Ft))}set height(t){v(N(this,Ft),t,!0)}}qt=new WeakMap,Ft=new WeakMap;var Ht,Lt,Wt,Ut,Bt;class Tn{constructor(t,e){ct(this,"is_menu",!1);ct(this,"menu");G(this,Ht,D(!1));G(this,Lt,D());G(this,Wt,D(!1));G(this,Ut,D(null));G(this,Bt,D(null));this.menu=t,this.run=e}get selected(){return n(N(this,Ht))}set selected(t){v(N(this,Ht),t,!0)}get run(){return n(N(this,Lt))}set run(t){v(N(this,Lt),t,!0)}get pending(){return n(N(this,Wt))}set pending(t){v(N(this,Wt),t,!0)}get error_message(){return n(N(this,Ut))}set error_message(t){v(N(this,Ut),t,!0)}get promise(){return n(N(this,Bt))}set promise(t){v(N(this,Bt),t,!0)}}Ht=new WeakMap,Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,Bt=new WeakMap;var Vt,Xt;class In{constructor(t,e){ct(this,"is_menu",!0);ct(this,"menu");ct(this,"depth");G(this,Vt,D(!1));G(this,Xt,D(se([])));this.menu=t,this.depth=e}get selected(){return n(N(this,Vt))}set selected(t){v(N(this,Vt),t,!0)}get items(){return n(N(this,Xt))}set items(t){v(N(this,Xt),t,!0)}}Vt=new WeakMap,Xt=new WeakMap;var Yt;class Pn{constructor(){ct(this,"is_menu",!0);ct(this,"menu",null);ct(this,"depth",1);G(this,Yt,D(se([])))}get items(){return n(N(this,Yt))}set items(t){v(N(this,Yt),t,!0)}}Yt=new WeakMap;var Gt,Kt,jt,Zt,Jt,Qt;class Ie{constructor(t){ct(this,"layout");ct(this,"initial_layout");G(this,Gt,D(!1));G(this,Kt,D(0));G(this,jt,D(0));G(this,Zt,D(se([])));G(this,Jt,D());ct(this,"root_menu",new Pn);G(this,Qt,D(se([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Be}get opened(){return n(N(this,Gt))}set opened(t){v(N(this,Gt),t,!0)}get x(){return n(N(this,Kt))}set x(t){v(N(this,Kt),t,!0)}get y(){return n(N(this,jt))}set y(t){v(N(this,jt),t,!0)}get params(){return n(N(this,Zt))}set params(t){v(N(this,Zt),t,!0)}get error(){return n(N(this,Jt))}set error(t){v(N(this,Jt),t,!0)}get selections(){return n(N(this,Qt))}set selections(t){v(N(this,Qt),t,!0)}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const c=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=c??"unknown error",this.error=c}if(rn(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(c=>{if(a===t.promise){if(typeof(c==null?void 0:c.ok)=="boolean")if(c.ok)this.close();else{const l=typeof c.message=="string"?c.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return c}},c=>{if(a!==t.promise)return;const l=typeof(c==null?void 0:c.message)=="string"?c.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=be.maybe_get()??this.root_menu,a=new Tn(e,t);return e.items.push(a),Ne(()=>{e.items.length=0}),a}add_submenu(){const t=be.maybe_get()??this.root_menu,e=new In(t,t.depth+1);return t.items.push(e),be.set(e),Ne(()=>{t.items.length=0}),e}}Gt=new WeakMap,Kt=new WeakMap,jt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap;const Pe="contextmenu",Sn=`a,[data-${Pe}]`,oe=new Map;let An=0;const xe=(o,t)=>{if(t==null)return;const e=An+++"";return o.dataset[Pe]=e,oe.set(e,t),{update:a=>{oe.set(e,a)},destroy:()=>{oe.delete(e)}}},zn=17,Fe=(o,t,e,a)=>{const c=En(o);return c!=null&&c.length?(a.open(c,t,e),navigator.vibrate&&navigator.vibrate(zn),!0):!1},En=o=>{var l;let t=null,e=o,a,c;for(;e=e==null?void 0:e.closest(Sn);){if(a=e.dataset[Pe]){if(t??(t=[]),c=oe.get(a),c===void 0)continue;Array.isArray(c)?(t??(t=[])).push(...c):(t??(t=[])).push(c)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const r=(l=window.getSelection())==null?void 0:l.toString();r&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(r)}})}return t},ue=Ce(),be=Ce(),$e=Ce(()=>new Be);var On=(o,t)=>t.close(),Nn=z('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ve(o,t){_t(t,!0);const e="🔗",a=ot(t,"icon",3,e),c=ue.get(),l=(O,T=location.host)=>{const I=ge(ge(O,"https://"),"http://");return I.startsWith(T+"/")?ge(I,T):I},r=V(()=>l(t.href)),h=V(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),k=V(()=>n(h)?"noreferrer":void 0);var C=Nn(),P=$(C);P.__click=[On,c];var S=$(P),i=$(S),p=$(i);{var u=O=>{var T=E();nt(()=>dt(T,a())),s(O,T)},x=O=>{var T=ft(),I=U(T);ut(I,a,()=>e),s(O,T)};B(p,O=>{typeof a()=="string"?O(u):O(x,!1)})}y(i);var f=_(i,2),d=$(f),w=$(d);{var b=O=>{var T=ft(),I=U(T);ut(I,()=>t.children),s(O,T)},R=O=>{var T=E();nt(()=>dt(T,n(r))),s(O,T)};B(w,O=>{t.children?O(b):O(R,!1)})}y(d),y(f),y(S),y(P),y(C),nt(()=>{ae(P,"href",t.href),ae(P,"rel",n(k))}),s(o,C),vt()}ke(["click"]);var Dn=z('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function st(o,t){_t(t,!0);const e=ue.get(),a=e.add_entry(t.run);Nt(()=>{a.run=t.run});const c=V(()=>a.selected),l=V(()=>a.pending),r=V(()=>a.error_message);var h=Dn();let k;h.__click=()=>{setTimeout(()=>e.activate(a))};var C=$(h),P=$(C),S=$(P);{var i=b=>{var R=E();nt(()=>dt(R,t.icon)),s(b,R)},p=(b,R)=>{{var O=T=>{var I=ft(),L=U(I);ut(L,()=>t.icon),s(T,I)};B(b,T=>{t.icon&&T(O)},R)}};B(S,b=>{typeof t.icon=="string"?b(i):b(p,!1)})}y(P);var u=_(P,2),x=$(u);ut(x,()=>t.children),y(u);var f=_(u,2);{var d=b=>{ln(b,{})},w=(b,R)=>{{var O=T=>{var I=E("⚠️");s(T,I)};B(b,T=>{n(r)&&T(O)},R)}};B(f,b=>{n(l)?b(d):b(w,!1)})}y(C),y(h),nt(b=>{k=gt(h,1,"menu_item plain selectable deselectable svelte-10kraez",null,k,b),ae(h,"title",n(r)?`Error: ${n(r)}`:void 0)},[()=>({selected:n(c)})]),Le("mouseenter",h,b=>{zt(b),e.select(a)}),s(o,h),vt()}ke(["click"]);function Xe(o,t){st(o,{get run(){return t.run},icon:a=>{M();var c=E();nt(()=>dt(c,t.icon)),s(a,c)},children:(a,c)=>{M();var l=E();nt(()=>dt(l,t.content)),s(a,l)},$$slots:{icon:!0,default:!0}})}const Mn=(o,t=le)=>{Ve(o,We(t))},Rn=(o,t=le)=>{Xe(o,We(t))};var qn=z('<div class="contextmenu_root svelte-1oafc8t" role="region"><!></div>'),Fn=z('<div class="contextmenu_layout svelte-1oafc8t" aria-hidden="true"></div>'),Hn=z('<ul class="contextmenu unstyled pane svelte-1oafc8t" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Ln=z("<!> <!> <!>",1);function te(o,t){_t(t,!0);const e=ot(t,"contextmenu",19,()=>new Ie),a=ot(t,"longpress_move_tolerance",3,21),c=ot(t,"longpress_duration",3,633),l=ot(t,"bypass_with_tap_then_longpress",3,!0),r=ot(t,"tap_then_longpress_duration",3,660),h=ot(t,"tap_then_longpress_move_tolerance",3,7),k=ot(t,"open_offset_x",19,()=>-2),C=ot(t,"open_offset_y",19,()=>-2),P=ot(t,"scoped",3,!1);ue.set(e());let S=D(void 0);const i=V(()=>e().layout),p=V(()=>e().initial_layout),u=V(()=>n(i)===n(p));let x=D(void 0),f=D(void 0);Nt(()=>{!n(u)&&n(x)!==void 0&&(n(i).width=n(x))}),Nt(()=>{!n(u)&&n(f)!==void 0&&(n(i).height=n(f))});const d=$e.set();Nt(()=>{if(n(S)){const g=n(S).getBoundingClientRect();d.width=g.width,d.height=g.height}});const w=V(()=>e().x+Math.min(0,n(i).width-(e().x+d.width))),b=V(()=>e().y+Math.min(0,n(i).height-(e().y+d.height)));let R=D(void 0),O=D(void 0),T=D(void 0),I=D(void 0),L=D(void 0),K=D(void 0);const j=()=>{n(L)&&v(L,!1),n(I)!=null&&(clearTimeout(n(I)),v(I,null))},W=g=>{var q;if(n(K)){v(K,!1);return}if(n(L)){j(),zt(g);return}const{target:m}=g;g.shiftKey||!(m instanceof HTMLElement||m instanceof SVGElement)||(q=n(S))!=null&&q.contains(m)||fe(m)||Oe(m)||Fe(m,g.clientX+k(),g.clientY+C(),e())&&(zt(g),j())},Z=g=>{n(L)&&v(L,!1);const{touches:m,target:q}=g;if(e().opened||m.length!==1||g.shiftKey||!(q instanceof HTMLElement||q instanceof SVGElement)||fe(q)||Oe(q))return;const{clientX:H,clientY:F}=m[0];if(l()){if(n(T)!=null&&performance.now()-n(T)<r()&&Math.hypot(H-n(R),F-n(O))<h()){v(K,!0),v(T,null);return}v(T,performance.now(),!0)}v(R,H,!0),v(O,F,!0),n(I)!=null&&j(),v(I,setTimeout(()=>{v(L,!0),Fe(q,n(R)+k(),n(O)+C(),e())},c()),!0)},J=g=>{if(n(I)==null)return;const{touches:m}=g;if(m.length!==1)return;const{clientX:q,clientY:H}=m[0];Math.hypot(q-n(R),H-n(O))>a()&&(e().opened&&e().close(),j())},X=g=>{n(I)!=null&&(n(L)&&zt(g),j())},Y=g=>{n(S)&&!n(S).contains(g.target)&&e().close()},tt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),rt=g=>{const m=tt.get(g.key);!m||fe(g.target)||(zt(g),m())},A=(g,m)=>{let q=null;const H=F=>{q&&(q(),q=null),F.disabled||(q=Ze(g,F.event,F.cb,{capture:!0,passive:F.passive}))};return H(m),{update:F=>{H(F)},destroy:()=>{q==null||q()}}};var $t=Ln();lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"contextmenu",passive:!1,cb:W,disabled:P()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchstart",passive:!0,cb:Z,disabled:P()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchmove",passive:!0,cb:J,disabled:P()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchend",passive:!1,cb:X,disabled:P()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"touchcancel",passive:!1,cb:X,disabled:P()})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"mousedown",passive:!0,cb:Y,disabled:!e().opened})),lt(Pt,(g,m)=>A==null?void 0:A(g,m),()=>({event:"keydown",passive:!1,cb:rt,disabled:!e().opened}));var xt=U($t);{var bt=g=>{var m=qn(),q=$(m);ut(q,()=>t.children),y(m),lt(m,(H,F)=>A==null?void 0:A(H,F),()=>({event:"contextmenu",passive:!1,cb:W})),lt(m,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchstart",passive:!0,cb:Z})),lt(m,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchmove",passive:!0,cb:J})),lt(m,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchend",passive:!1,cb:X})),lt(m,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchcancel",passive:!1,cb:X})),s(g,m)},Q=g=>{var m=ft(),q=U(m);ut(q,()=>t.children),s(g,m)};B(xt,g=>{P()?g(bt):g(Q,!1)})}var yt=_(xt,2);{var wt=g=>{var m=Fn();Re(m,"clientHeight",q=>v(f,q)),Re(m,"clientWidth",q=>v(x,q)),s(g,m)};B(yt,g=>{n(u)||g(wt)})}var ee=_(yt,2);{var de=g=>{var m=Hn();let q;Dt(m,20,()=>e().params,H=>H,(H,F)=>{var ht=ft(),mt=U(ht);{var it=pt=>{var et=ft(),It=U(et);ut(It,()=>F),s(pt,et)},Tt=(pt,et)=>{{var It=at=>{Mn(at,()=>F.props)},me=(at,_e)=>{{var Ge=ve=>{Rn(ve,()=>F.props)};B(at,ve=>{F.snippet==="text"&&ve(Ge)},_e)}};B(pt,at=>{F.snippet==="link"?at(It):at(me,!1)},et)}};B(mt,pt=>{typeof F=="function"?pt(it):pt(Tt,!1)})}s(H,ht)}),y(m),Te(m,H=>v(S,H),()=>n(S)),nt(()=>q=ye(m,"",q,{transform:`translate3d(${n(w)??""}px, ${n(b)??""}px, 0)`})),s(g,m)};B(ee,g=>{e().opened&&g(de)})}s(o,$t),vt()}var Wn=z('<span class="display_contents"><!></span>');function kt(o,t){var e=Wn(),a=$(e);ut(a,()=>t.children),y(e),lt(e,(c,l)=>xe==null?void 0:xe(c,l),()=>t.entries),s(o,e)}var Un=z('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=z('<li role="none" class="svelte-pa2qv7"><div role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Se(o,t){_t(t,!0);const e=ue.get(),a=e.add_submenu(),{layout:c}=e,l=V(()=>a.selected);let r=D(void 0);const h=$e.get(),k=$e.set();let C=D(0),P=D(0);Nt(()=>{n(r)&&S(n(r),c,h)});const S=(I,L,K)=>{const{x:j,y:W,width:Z,height:J}=I.getBoundingClientRect();k.width=Z,k.height=J;const X=j-n(C),Y=W-n(P),tt=X+Z+K.width-L.width;if(tt<=0)v(C,K.width,!0);else{const rt=Z-X;rt<=0?v(C,-Z):rt>tt?v(C,K.width-tt):v(C,rt-Z)}v(P,Math.min(0,L.height-(Y+J)),!0)};var i=Bn();let p;var u=$(i);let x;var f=$(u),d=$(f),w=$(d);ut(w,()=>t.icon??le),y(d);var b=_(d,2),R=$(b);ut(R,()=>t.children),y(b),y(f),M(2),y(u);var O=_(u,2);{var T=I=>{var L=Un();let K;var j=$(L);ut(j,()=>t.menu),y(L),Te(L,W=>v(r,W),()=>n(r)),nt(()=>K=ye(L,"",K,{transform:`translate3d(${n(C)??""}px, ${n(P)??""}px, 0)`,"max-height":`${c.height??""}px`})),s(I,L)};B(O,I=>{n(l)&&I(T)})}y(i),nt(I=>{p=ye(i,"",p,{"--contextmenu_depth":a.depth}),x=gt(u,1,"menu_item plain selectable svelte-pa2qv7",null,x,I),ae(u,"aria-expanded",n(l))},[()=>({selected:n(l)})]),Le("mouseenter",u,I=>{zt(I),setTimeout(()=>e.select(a))}),s(o,i),vt()}var Vn=z("<!> <!>",1);function re(o,t){_t(t,!0);const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺");Se(o,{icon:r=>{M();var h=E();nt(()=>dt(h,a())),s(r,h)},menu:r=>{var h=Vn(),k=U(h);st(k,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:S=>{var i=ft(),p=U(i);{var u=f=>{var d=E("🏠");s(f,d)},x=f=>{var d=E("🌄");s(f,d)};B(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ft(),u=U(p);{var x=d=>{var w=E("go home");s(d,w)},f=d=>{var w=E("go adventure");s(d,w)};B(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}});var C=_(k,2);st(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:S=>{var i=ft(),p=U(i);{var u=f=>{var d=E("🌄");s(f,d)},x=f=>{var d=E("🏠");s(f,d)};B(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ft(),u=U(p);{var x=d=>{var w=E("do adventure");s(d,w)},f=d=>{var w=E("be home");s(d,w)};B(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}}),s(r,h)},children:(r,h)=>{M();var k=E();nt(()=>dt(k,e())),s(r,k)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var Xn=z("<!> <!>",1);function Yn(o,t){var e=Xn(),a=U(e);Ve(a,{href:"https://github.com/ryanatkn/fuz",icon:r=>{dn(r,{data:mn,size:"var(--icon_size_xs)"})},children:(r,h)=>{M();var k=E("Source code");s(r,k)},$$slots:{icon:!0,default:!0}});var c=_(a,2);st(c,{get run(){return t.toggle_about_dialog},icon:r=>{M();var h=E("?");s(r,h)},children:(r,h)=>{M();var k=E("About");s(r,k)},$$slots:{icon:!0,default:!0}}),s(o,e)}const Ye=o=>{const t=o.length;if(t===2)return"cats";if(t===0)return null;const e=o[0];return e.icon+e.name};var Gn=z("<!> <!>",1),Kn=z("<!> <!> <!>",1);function jn(o,t){_t(t,!0);const e=V(()=>Ye(t.adventure_cats));Se(o,{icon:l=>{M();var r=E("🏠");s(l,r)},menu:l=>{var r=Kn(),h=U(r);{var k=i=>{st(i,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{M();var x=E("🐈‍⬛");s(u,x)},children:(u,x)=>{M();var f=E("call");s(u,f)},$$slots:{icon:!0,default:!0}})};B(h,i=>{n(e)&&i(k)})}var C=_(h,2);Dt(C,17,()=>t.home_cats,i=>i.name,(i,p)=>{re(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var P=_(C,2);{var S=i=>{var p=Gn(),u=U(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{M();var w=E("🏠");s(d,w)},children:(d,w)=>{M();var b=E("be");s(d,b)},$$slots:{icon:!0,default:!0}});var x=_(u,2);st(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{M();var w=E("🦋");s(d,w)},children:(d,w)=>{M();var b=E("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};B(P,i=>{n(e)||i(S)})}s(l,r)},children:(l,r)=>{M();var h=E("home");s(l,h)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var Zn=z("<!> <!>",1),Jn=z("<!> <!> <!>",1);function Qn(o,t){_t(t,!0);const e=V(()=>Ye(t.home_cats));Se(o,{icon:l=>{M();var r=E("🌄");s(l,r)},menu:l=>{var r=Jn(),h=U(r);{var k=i=>{st(i,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{M();var x=E("🦋");s(u,x)},children:(u,x)=>{M();var f=E("call");s(u,f)},$$slots:{icon:!0,default:!0}})};B(h,i=>{n(e)&&i(k)})}var C=_(h,2);Dt(C,17,()=>t.adventure_cats,i=>i.name,(i,p)=>{re(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var P=_(C,2);{var S=i=>{var p=Zn(),u=U(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{M();var w=E("🌄");s(d,w)},children:(d,w)=>{M();var b=E("do");s(d,b)},$$slots:{icon:!0,default:!0}});var x=_(u,2);st(x,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{M();var w=E("🐈‍⬛");s(d,w)},children:(d,w)=>{M();var b=E("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};B(P,i=>{n(e)||i(S)})}s(l,r)},children:(l,r)=>{M();var h=E("adventure");s(l,h)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var to=z('<span class="icon svelte-i8hat5"> </span>'),eo=z('<span class="name svelte-i8hat5"><!> </span>'),no=z("<span><!><!></span>");function He(o,t){const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺"),c=ot(t,"show_name",3,!0),l=ot(t,"show_icon",3,!0);var r=no();let h;var k=$(r);{var C=i=>{var p=to(),u=$(p,!0);y(p),nt(()=>dt(u,a())),s(i,p)};B(k,i=>{l()&&i(C)})}var P=_(k);{var S=i=>{var p=eo(),u=$(p);ut(u,()=>t.children??le);var x=_(u,1,!0);y(p),nt(()=>dt(x,e())),s(i,p)};B(P,i=>{c()&&i(S)})}y(r),nt(i=>h=gt(r,1,"cat svelte-i8hat5",null,h,i),[()=>({"has-icon":l()})]),s(o,r)}const oo=`<script lang="ts">
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
`;var so=z("<!> <!>",1),ao=z('<div class="cat_wrapper svelte-hhr0et"><!></div>'),ro=z('<div class="position home svelte-hhr0et"><div class="icon svelte-hhr0et">🏠</div> <div class="cats svelte-hhr0et"></div></div>'),io=z('<div class="cat_wrapper svelte-hhr0et"><!></div>'),co=z('<div class="position adventure svelte-hhr0et"><div class="icon svelte-hhr0et">🌄</div> <div class="cats svelte-hhr0et"></div></div>'),lo=z("<section><!> <!></section> <section><!></section>",1),uo=z("<!> <!>",1),mo=z('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),_o=z("<!> <!>",1);function vo(o,t){_t(t,!0);const e="Alyssa",a="Ben",c="home";let l=D(c),r=D(c);const h=V(()=>n(l)===n(r)?"😺":"😾"),k=V(()=>n(l)===n(r)?"😸":"😿"),C=V(()=>({name:e,icon:n(h),position:n(l)})),P=V(()=>({name:a,icon:n(k),position:n(r)}));let S=D(!1);const i=(W,Z)=>{const J=[],X=[];for(const Y of W){const tt=Y.position==="home"?J:X;Z?tt.unshift(Y):tt.push(Y)}return{home_cats:J,adventure_cats:X}},p=V(()=>i([n(C),n(P)],n(S))),u=V(()=>n(p).home_cats),x=V(()=>n(p).adventure_cats),f=V(()=>n(l)!==c||n(r)!==c),d=()=>{v(l,c),v(r,c)};let w=D(!1);const b=()=>{v(w,!n(w))},R=W=>{switch(W.type){case"call_cats_adventure":{v(l,"adventure"),v(r,"adventure");break}case"call_cats_home":{v(l,"home"),v(r,"home");break}case"cat_go_adventure":{W.name===e?v(l,"adventure"):W.name===a&&v(r,"adventure");break}case"cat_go_home":{W.name===e?v(l,"home"):W.name===a&&v(r,"home");break}case"cat_be_or_do":{v(S,!n(S));break}}},[O,T]=on({fallback:(W,Z)=>{const J=window.getComputedStyle(W),X=J.transform==="none"?"":J.transform;return{duration:1500,easing:kn,css:Y=>`
					transform: ${X} scale(${Y});
					opacity: ${Y}
				`}}});var I=_o(),L=U(I);te(L,{scoped:!0,children:(W,Z)=>{St(W,{children:(J,X)=>{var Y=uo(),tt=U(Y);At(tt,{text:"Full example"});var rt=_(tt,2);kt(rt,{entries:$t=>{var xt=so(),bt=U(xt);{var Q=wt=>{Xe(wt,{run:d,content:"Reset",icon:"↻"})};B(bt,wt=>{n(f)&&wt(Q)})}var yt=_(bt,2);Yn(yt,{toggle_about_dialog:b}),s($t,xt)},children:($t,xt)=>{var bt=lo(),Q=U(bt),yt=$(Q);kt(yt,{entries:m=>{jn(m,{act:R,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(m,q)=>{var H=ro(),F=_($(H),2);Dt(F,29,()=>n(u),({name:ht,icon:mt,position:it})=>ht,(ht,mt)=>{let it=()=>n(mt).name,Tt=()=>n(mt).icon,pt=()=>n(mt).position;var et=ao(),It=$(et);kt(It,{entries:at=>{re(at,{act:R,get name(){return it()},get icon(){return Tt()},get position(){return pt()}})},children:(at,_e)=>{He(at,{get name(){return it()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>T,()=>({key:it()})),Ot(2,et,()=>O,()=>({key:it()})),Ee(et,()=>qe,null),s(ht,et)}),y(F),y(H),s(m,H)},$$slots:{entries:!0,default:!0}});var wt=_(yt,2);kt(wt,{entries:m=>{Qn(m,{act:R,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(m,q)=>{var H=co(),F=_($(H),2);Dt(F,29,()=>n(x),({name:ht,icon:mt,position:it})=>ht,(ht,mt)=>{let it=()=>n(mt).name,Tt=()=>n(mt).icon,pt=()=>n(mt).position;var et=io(),It=$(et);kt(It,{entries:at=>{re(at,{act:R,get name(){return it()},get icon(){return Tt()},get position(){return pt()}})},children:(at,_e)=>{He(at,{get name(){return it()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>T,()=>({key:it()})),Ot(2,et,()=>O,()=>({key:it()})),Ee(et,()=>qe,null),s(ht,et)}),y(F),y(H),s(m,H)},$$slots:{entries:!0,default:!0}}),y(Q);var ee=_(Q,2),de=$(ee);un(de,{summary:m=>{M();var q=E("View example source");s(m,q)},children:(m,q)=>{Mt(m,{content:oo})},$$slots:{summary:!0,default:!0}}),y(ee),s($t,bt)}}),s(J,Y)},$$slots:{default:!0}})},$$slots:{default:!0}});var K=_(L,2);{var j=W=>{cn(W,{onclose:()=>v(w,!1),children:(Z,J)=>{var X=mo(),Y=$(X),tt=_($(Y),8),rt=_($(tt),2);_n(rt,{});var A=_(rt,4);vn(A,{}),y(tt),y(Y),y(X),s(Z,X)},$$slots:{default:!0}})};B(K,W=>{n(w)&&W(j)})}s(o,I),vt()}var ho=z("<!> <!> <!>",1),po=z(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),fo=z("<!> <!>",1);function go(o){let t=D(!1),e=D(!1),a=D(!1);te(o,{scoped:!0,children:(c,l)=>{St(c,{children:(r,h)=>{var k=fo(),C=U(k);At(C,{text:"Basic usage"});var P=_(C,2);kt(P,{entries:i=>{var p=ho(),u=U(p);st(u,{run:()=>v(t,!n(t)),children:(d,w)=>{M();var b=E("Hello world");s(d,b)},$$slots:{default:!0}});var x=_(u,2);st(x,{run:()=>v(e,!n(e)),icon:w=>{M();var b=E("🌞");s(w,b)},children:(w,b)=>{M();var R=E("Hello with an optional icon snippet");s(w,R)},$$slots:{icon:!0,default:!0}});var f=_(x,2);st(f,{run:()=>v(a,!n(a)),icon:"🌚",children:(d,w)=>{M();var b=E("Hello with an optional icon string");s(d,b)},$$slots:{default:!0}}),s(i,p)},children:(i,p)=>{var u=po(),x=_($(u),2);const f=V(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Mt(x,{get content(){return n(f)}});var d=_(x,2),w=$(d);let b;var R=$(w);y(w),y(d);var O=_(d,2),T=$(O);let I;var L=$(T);y(T),y(O);var K=_(O,2),j=$(K);let W;var Z=$(j);y(j),y(K),M(2),y(u),nt((J,X,Y)=>{b=gt(w,1,"",null,b,J),dt(R,`greeted = ${n(t)??""}`),I=gt(T,1,"",null,I,X),dt(L,`greeted_icon_snippet = ${n(e)??""}`),W=gt(j,1,"",null,W,Y),dt(Z,`greeted_icon_string = ${n(a)??""}`)},[()=>({color_g_5:n(t)}),()=>({color_e_5:n(e)}),()=>({color_d_5:n(a)})]),s(i,u)}}),s(r,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}var xo=z("<div>toggled</div>"),bo=z(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),yo=z("<!> <!>",1);function wo(o,t){_t(t,!0);const e=new Ie;let a=D(!1);te(o,{contextmenu:e,scoped:!0,children:(c,l)=>{St(c,{children:(r,h)=>{var k=yo(),C=U(k);At(C,{text:"Custom instance"});var P=_(C,2);kt(P,{entries:i=>{st(i,{run:()=>v(a,!n(a)),children:(p,u)=>{M();var x=E("Toggle");s(p,x)},$$slots:{default:!0}})},children:(i,p)=>{var u=bo(),x=$(u);Mt(x,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var f=_(x,2);Mt(f,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var d=_(f,4),w=$(d);{var b=R=>{var O=xo();Ot(3,O,()=>sn),s(R,O)};B(w,R=>{n(a)&&R(b)})}y(d),y(u),s(i,u)}}),s(r,k)},$$slots:{default:!0}})},$$slots:{default:!0}}),vt()}const $o=(o,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var ko=z(`<div><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),Co=z("<div><!></div> <!>",1);function To(o,t){_t(t,!0);const e=new Ie;let a=D(!1),c=D(void 0),l=D("");const r="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",h=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,k=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=V(()=>n(l)===r||n(l)===h||n(l)===k);te(o,{contextmenu:e,scoped:!0,children:(P,S)=>{St(P,{children:(i,p)=>{var u=Co(),x=U(u);let f;var d=$(x);At(d,{text:"Select text"}),y(x);var w=_(x,2);kt(w,{entries:R=>{st(R,{run:()=>v(a,!n(a)),children:(O,T)=>{M();var I=E("Toggle something");s(O,I)},$$slots:{default:!0}})},children:(R,O)=>{var T=ko();let I;var L=$(T),K=_($(L),2),j=_($(K));j.__click=[$o,c];let W;M(),y(K),y(L),Te(L,Q=>v(c,Q),()=>n(c));var Z=_(L,2),J=$(Z);an(J),y(Z);var X=_(Z,2);let Y;var tt=_(X,2),rt=$(tt);Je(rt),y(tt);var A=_(tt,2),$t=$(A);ne($t,{path:"Web/HTML/Global_attributes/contenteditable"}),M(),y(A);var xt=_(A,4),bt=_(xt,4);y(T),nt((Q,yt,wt)=>{I=gt(T,1,"panel p_md",null,I,Q),W=gt(j,1,"",null,W,yt),Y=gt(X,1,"",null,Y,wt)},[()=>({color_g_5:n(C)}),()=>({color_a:n(a)}),()=>({color_g_5:n(C)})]),Me(J,()=>n(l),Q=>v(l,Q)),Me(rt,()=>n(l),Q=>v(l,Q)),De("innerText",xt,()=>n(l),Q=>v(l,Q)),De("innerText",bt,()=>n(l),Q=>v(l,Q)),s(R,T)}}),nt(b=>f=gt(x,1,"",null,f,b),[()=>({color_d_5:n(C)})]),s(i,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),vt()}ke(["click"]);var Io=z(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Po(o){te(o,{scoped:!0,children:(t,e)=>{St(t,{children:(a,c)=>{var l=Io(),r=U(l);At(r,{text:"Default behaviors"});var h=_(r,2),k=$(h);Mt(k,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),M(6),y(h),s(a,l)},$$slots:{default:!0}})},$$slots:{default:!0}})}var So=z("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function ts(o,t){_t(t,!0);const a=nn("Contextmenu");en(o,{tome:a,children:(c,l)=>{var r=So(),h=_(U(r),2);go(h);var k=_(h,2);Po(k);var C=_(k,2);wo(C,{});var P=_(C,2);To(P,{});var S=_(P,2);vo(S,{});var i=_(S,2);wn(i),s(c,r)},$$slots:{default:!0}}),vt()}export{ts as component};
