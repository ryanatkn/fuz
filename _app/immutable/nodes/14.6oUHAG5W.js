var Ke=Object.defineProperty;var ze=o=>{throw TypeError(o)};var Ze=(o,t,e)=>t in o?Ke(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var lt=(o,t,e)=>Ze(o,typeof t!="symbol"?t+"":t,e),pe=(o,t,e)=>t.has(o)||ze("Cannot "+e);var z=(o,t,e)=>(pe(o,t,"read from private field"),e?e.call(o):t.get(o)),Y=(o,t,e)=>t.has(o)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),fe=(o,t,e,a)=>(pe(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e),Ee=(o,t,e)=>(pe(o,t,"access private method"),e);import{t as E,a as s,k as Ce,j as O,c as ft,m as We,y as Je,z as Qe}from"../chunks/C3a0MWKm.js";import{k as tn,j as en,f as U,s as v,Z as $,a3 as q,_ as y,a5 as D,g as n,O as m,N as Nt,p as mt,X as nt,u as V,a as vt,m as Dt,aq as Pt,a2 as ue}from"../chunks/CBcvYSsl.js";import{T as nn}from"../chunks/CZUf9OYd.js";import{g as on}from"../chunks/CavmO7JB.js";import{M as se}from"../chunks/1FkqCrwq.js";import{T as St,a as At}from"../chunks/DHzDI3Gf.js";import{i as B}from"../chunks/DzvUtkRf.js";import{c as Te,e as qt}from"../chunks/C2ryNpiE.js";import{t as Ot,c as sn,a as Oe,s as an}from"../chunks/Bdye9407.js";import{C as Mt}from"../chunks/sas11ncx.js";import{b as re,s as ut,c as gt,d as we,r as rn}from"../chunks/DxWaIpUH.js";import{a as ct}from"../chunks/eshfZozb.js";import{b as Ie}from"../chunks/Cy0IVI8Z.js";import{p as ot,s as Ue}from"../chunks/pUEIKI1Z.js";import{a as cn,s as zt,b as ge,c as Ne,D as ln}from"../chunks/C11LIk5w.js";import{o as De}from"../chunks/DeY2zof9.js";import{s as dt}from"../chunks/DQ8o1HLG.js";import{a as xe}from"../chunks/ZJuK4sHN.js";import{P as un}from"../chunks/_6EjW-Je.js";import{D as dn,b as qe}from"../chunks/wEOqUzxZ.js";import{S as _n,g as mn}from"../chunks/BvQpkeQG.js";import{C as vn,T as hn}from"../chunks/Ejdxuzet.js";import{b as Me}from"../chunks/BwQKsfiA.js";var Ct,Et,Rt,ce,Be;const le=class le{constructor(t){Y(this,ce);Y(this,Ct,new WeakMap);Y(this,Et);Y(this,Rt);fe(this,Rt,t)}observe(t,e){var a=z(this,Ct).get(t)||new Set;return a.add(e),z(this,Ct).set(t,a),Ee(this,ce,Be).call(this).observe(t,z(this,Rt)),()=>{var c=z(this,Ct).get(t);c.delete(e),c.size===0&&(z(this,Ct).delete(t),z(this,Et).unobserve(t))}}};Ct=new WeakMap,Et=new WeakMap,Rt=new WeakMap,ce=new WeakSet,Be=function(){return z(this,Et)??fe(this,Et,new ResizeObserver(t=>{for(var e of t){le.entries.set(e.target,e);for(var a of z(this,Ct).get(e.target)||[])a(e)}}))},lt(le,"entries",new WeakMap);let $e=le;var pn=new $e({box:"border-box"});function Re(o,t,e){var a=pn.observe(o,()=>e(o[t]));tn(()=>(en(()=>e(o[t])),a))}var fn=E('<span class="font_mono">contextmenu</span> event',1),gn=E('<span class="font_mono">navigator.vibrate</span>'),xn=E('<span class="font_mono">navigator.vibrate</span>'),bn=E(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),yn=E(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),wn=E("<!> <!>",1);function $n(o){var t=wn(),e=U(t);St(e,{children:(c,l)=>{var r=bn(),h=U(r);At(h,{text:"Expected behaviors"});var k=v(h,4),C=v($(k));se(C,{path:"Web/API/Element/contextmenu_event",children:(u,x)=>{var f=fn();q(),s(u,f)},$$slots:{default:!0}});var P=v(C,4);se(P,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=gn();s(u,f)},$$slots:{default:!0}}),q(),y(k);var S=v(k,10),i=v($(S),10),p=v($(i));se(p,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=xn();s(u,f)},$$slots:{default:!0}}),q(),y(i),y(S),s(c,r)},$$slots:{default:!0}});var a=v(e,2);St(a,{children:(c,l)=>{var r=yn(),h=U(r);At(h,{text:"Motivation"}),q(14),s(c,r)},$$slots:{default:!0}}),s(o,t)}function kn(o){const t=o-1;return t*t*t+1}function Cn(o){return--o*o*o*o*o+1}function Fe(o,{from:t,to:e},a={}){var{delay:c=0,duration:l=T=>Math.sqrt(T)*120,easing:r=kn}=a,h=getComputedStyle(o),k=h.transform==="none"?"":h.transform,[C,P]=h.transformOrigin.split(" ").map(parseFloat);C/=o.clientWidth,P/=o.clientHeight;var S=Tn(o),i=o.clientWidth/e.width/S,p=o.clientHeight/e.height/S,u=t.left+t.width*C,x=t.top+t.height*P,f=e.left+e.width*C,d=e.top+e.height*P,w=(u-f)*i,b=(x-d)*p,M=t.width/e.width,N=t.height/e.height;return{delay:c,duration:typeof l=="function"?l(Math.sqrt(w*w+b*b)):l,easing:r,css:(T,I)=>{var L=I*w,G=I*b,K=T+I*M,W=T+I*N;return`transform: ${k} translate(${L}px, ${G}px) scale(${K}, ${W});`}}}function Tn(o){if("currentCSSZoom"in o)return o.currentCSSZoom;for(var t=o,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Ft,Ht;class Ve{constructor(){Y(this,Ft,D(0));Y(this,Ht,D(0))}get width(){return n(z(this,Ft))}set width(t){m(z(this,Ft),t,!0)}get height(){return n(z(this,Ht))}set height(t){m(z(this,Ht),t,!0)}}Ft=new WeakMap,Ht=new WeakMap;var Lt,Wt,Ut,Bt,Vt;class In{constructor(t,e){lt(this,"is_menu",!1);lt(this,"menu");Y(this,Lt,D(!1));Y(this,Wt,D());Y(this,Ut,D(!1));Y(this,Bt,D(null));Y(this,Vt,D(null));this.menu=t,this.run=e}get selected(){return n(z(this,Lt))}set selected(t){m(z(this,Lt),t,!0)}get run(){return n(z(this,Wt))}set run(t){m(z(this,Wt),t,!0)}get pending(){return n(z(this,Ut))}set pending(t){m(z(this,Ut),t,!0)}get error_message(){return n(z(this,Bt))}set error_message(t){m(z(this,Bt),t,!0)}get promise(){return n(z(this,Vt))}set promise(t){m(z(this,Vt),t,!0)}}Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,Bt=new WeakMap,Vt=new WeakMap;var Xt,Yt;class Pn{constructor(t,e){lt(this,"is_menu",!0);lt(this,"menu");lt(this,"depth");Y(this,Xt,D(!1));Y(this,Yt,D(Nt([])));this.menu=t,this.depth=e}get selected(){return n(z(this,Xt))}set selected(t){m(z(this,Xt),t,!0)}get items(){return n(z(this,Yt))}set items(t){m(z(this,Yt),t,!0)}}Xt=new WeakMap,Yt=new WeakMap;var jt;class Sn{constructor(){lt(this,"is_menu",!0);lt(this,"menu",null);lt(this,"depth",1);Y(this,jt,D(Nt([])))}get items(){return n(z(this,jt))}set items(t){m(z(this,jt),t,!0)}}jt=new WeakMap;var Gt,Kt,Zt,Jt,Qt,te,ee;class Pe{constructor(t){lt(this,"layout");lt(this,"initial_layout");Y(this,Gt,D(!1));Y(this,Kt,D(0));Y(this,Zt,D(0));Y(this,Jt,D(Nt([])));Y(this,Qt,D());Y(this,te,D(Nt(new Sn)));Y(this,ee,D(Nt([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ve}get opened(){return n(z(this,Gt))}set opened(t){m(z(this,Gt),t,!0)}get x(){return n(z(this,Kt))}set x(t){m(z(this,Kt),t,!0)}get y(){return n(z(this,Zt))}set y(t){m(z(this,Zt),t,!0)}get params(){return n(z(this,Jt))}set params(t){m(z(this,Jt),t,!0)}get error(){return n(z(this,Qt))}set error(t){m(z(this,Qt),t,!0)}get root_menu(){return n(z(this,te))}set root_menu(t){m(z(this,te),t,!0)}get selections(){return n(z(this,ee))}set selections(t){m(z(this,ee),t,!0)}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const c=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=c??"unknown error",this.error=c}if(cn(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(c=>{if(a===t.promise){if(typeof(c==null?void 0:c.ok)=="boolean")if(c.ok)this.close();else{const l=typeof c.message=="string"?c.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return c}},c=>{if(a!==t.promise)return;const l=typeof(c==null?void 0:c.message)=="string"?c.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=ye.maybe_get()??this.root_menu,a=new In(e,t);return e.items.push(a),De(()=>{e.items.length=0}),a}add_submenu(){const t=ye.maybe_get()??this.root_menu,e=new Pn(t,t.depth+1);return t.items.push(e),ye.set(e),De(()=>{t.items.length=0}),e}}Gt=new WeakMap,Kt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,te=new WeakMap,ee=new WeakMap;const Se="contextmenu",An=`a,[data-${Se}]`,ae=new Map;let zn=0;const be=(o,t)=>{if(t==null)return;const e=zn+++"";return o.dataset[Se]=e,ae.set(e,t),{update:a=>{ae.set(e,a)},destroy:()=>{ae.delete(e)}}},En=17,He=(o,t,e,a)=>{const c=On(o);return c!=null&&c.length?(a.open(c,t,e),navigator.vibrate&&navigator.vibrate(En),!0):!1},On=o=>{var l;let t=null,e=o,a,c;for(;e=e==null?void 0:e.closest(An);){if(a=e.dataset[Se]){if(t??(t=[]),c=ae.get(a),c===void 0)continue;Array.isArray(c)?(t??(t=[])).push(...c):(t??(t=[])).push(c)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const r=(l=window.getSelection())==null?void 0:l.toString();r&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(r)}})}return t},de=Te(),ye=Te(),ke=Te(()=>new Ve);var Nn=(o,t)=>t.close(),Dn=E('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Xe(o,t){mt(t,!0);const e="🔗",a=ot(t,"icon",3,e),c=de.get(),l=(N,T=location.host)=>{const I=xe(xe(N,"https://"),"http://");return I.startsWith(T+"/")?xe(I,T):I},r=V(()=>l(t.href)),h=V(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),k=V(()=>n(h)?"noreferrer":void 0);var C=Dn(),P=$(C);P.__click=[Nn,c];var S=$(P),i=$(S),p=$(i);{var u=N=>{var T=O();nt(()=>dt(T,a())),s(N,T)},x=N=>{var T=ft(),I=U(T);ut(I,a,()=>e),s(N,T)};B(p,N=>{typeof a()=="string"?N(u):N(x,!1)})}y(i);var f=v(i,2),d=$(f),w=$(d);{var b=N=>{var T=ft(),I=U(T);ut(I,()=>t.children),s(N,T)},M=N=>{var T=O();nt(()=>dt(T,n(r))),s(N,T)};B(w,N=>{t.children?N(b):N(M,!1)})}y(d),y(f),y(S),y(P),y(C),nt(()=>{re(P,"href",t.href),re(P,"rel",n(k))}),s(o,C),vt()}Ce(["click"]);var qn=E('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function st(o,t){mt(t,!0);const e=de.get(),a=e.add_entry(t.run);Dt(()=>{a.run=t.run});const c=V(()=>a.selected),l=V(()=>a.pending),r=V(()=>a.error_message);var h=qn();let k;h.__click=()=>{setTimeout(()=>e.activate(a))};var C=$(h),P=$(C),S=$(P);{var i=b=>{var M=O();nt(()=>dt(M,t.icon)),s(b,M)},p=(b,M)=>{{var N=T=>{var I=ft(),L=U(I);ut(L,()=>t.icon),s(T,I)};B(b,T=>{t.icon&&T(N)},M)}};B(S,b=>{typeof t.icon=="string"?b(i):b(p,!1)})}y(P);var u=v(P,2),x=$(u);ut(x,()=>t.children),y(u);var f=v(u,2);{var d=b=>{un(b,{})},w=(b,M)=>{{var N=T=>{var I=O("⚠️");s(T,I)};B(b,T=>{n(r)&&T(N)},M)}};B(f,b=>{n(l)?b(d):b(w,!1)})}y(C),y(h),nt(b=>{k=gt(h,1,"menu_item plain selectable deselectable svelte-10kraez",null,k,b),re(h,"title",n(r)?`Error: ${n(r)}`:void 0)},[()=>({selected:n(c)})]),We("mouseenter",h,b=>{zt(b),e.select(a)}),s(o,h),vt()}Ce(["click"]);function Ye(o,t){st(o,{get run(){return t.run},icon:a=>{q();var c=O();nt(()=>dt(c,t.icon)),s(a,c)},children:(a,c)=>{q();var l=O();nt(()=>dt(l,t.content)),s(a,l)},$$slots:{icon:!0,default:!0}})}const Mn=(o,t=ue)=>{Xe(o,Ue(t))},Rn=(o,t=ue)=>{Ye(o,Ue(t))};var Fn=E('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Hn=E('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Ln=E('<ul class="contextmenu unstyled pane svelte-aif9y6" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Wn=E("<!> <!> <!>",1);function ne(o,t){mt(t,!0);const e=ot(t,"contextmenu",19,()=>new Pe),a=ot(t,"longpress_move_tolerance",3,21),c=ot(t,"longpress_duration",3,633),l=ot(t,"bypass_with_tap_then_longpress",3,!0),r=ot(t,"tap_then_longpress_duration",3,660),h=ot(t,"tap_then_longpress_move_tolerance",3,7),k=ot(t,"open_offset_x",19,()=>-2),C=ot(t,"open_offset_y",19,()=>-2),P=ot(t,"scoped",3,!1);de.set(e());let S=D(void 0);const i=V(()=>e().layout),p=V(()=>e().initial_layout),u=V(()=>n(i)===n(p));let x=D(void 0),f=D(void 0);Dt(()=>{!n(u)&&n(x)!==void 0&&(n(i).width=n(x))}),Dt(()=>{!n(u)&&n(f)!==void 0&&(n(i).height=n(f))});const d=ke.set();Dt(()=>{if(n(S)){const g=n(S).getBoundingClientRect();d.width=g.width,d.height=g.height}});const w=V(()=>e().x+Math.min(0,n(i).width-(e().x+d.width))),b=V(()=>e().y+Math.min(0,n(i).height-(e().y+d.height)));let M=D(void 0),N=D(void 0),T=D(void 0),I=D(void 0),L=D(void 0),G=D(void 0);const K=()=>{n(L)&&m(L,!1),n(I)!=null&&(clearTimeout(n(I)),m(I,null))},W=g=>{var R;if(n(G)){m(G,!1);return}if(n(L)){K(),zt(g);return}const{target:_}=g;g.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||(R=n(S))!=null&&R.contains(_)||ge(_)||Ne(_)||He(_,g.clientX+k(),g.clientY+C(),e())&&(zt(g),K())},Z=g=>{n(L)&&m(L,!1);const{touches:_,target:R}=g;if(e().opened||_.length!==1||g.shiftKey||!(R instanceof HTMLElement||R instanceof SVGElement)||ge(R)||Ne(R))return;const{clientX:H,clientY:F}=_[0];if(l()){if(n(T)!=null&&performance.now()-n(T)<r()&&Math.hypot(H-n(M),F-n(N))<h()){m(G,!0),m(T,null);return}m(T,performance.now(),!0)}m(M,H,!0),m(N,F,!0),n(I)!=null&&K(),m(I,setTimeout(()=>{m(L,!0),He(R,n(M)+k(),n(N)+C(),e())},c()),!0)},J=g=>{if(n(I)==null)return;const{touches:_}=g;if(_.length!==1)return;const{clientX:R,clientY:H}=_[0];Math.hypot(R-n(M),H-n(N))>a()&&(e().opened&&e().close(),K())},X=g=>{n(I)!=null&&(n(L)&&zt(g),K())},j=g=>{n(S)&&!n(S).contains(g.target)&&e().close()},tt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),rt=g=>{const _=tt.get(g.key);!_||ge(g.target)||(zt(g),_())},A=(g,_)=>{let R=null;const H=F=>{R&&(R(),R=null),F.disabled||(R=Je(g,F.event,F.cb,{capture:!0,passive:F.passive}))};return H(_),{update:F=>{H(F)},destroy:()=>{R==null||R()}}};var $t=Wn();ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"contextmenu",passive:!1,cb:W,disabled:P()})),ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"touchstart",passive:!0,cb:Z,disabled:P()})),ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"touchmove",passive:!0,cb:J,disabled:P()})),ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"touchend",passive:!1,cb:X,disabled:P()})),ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"touchcancel",passive:!1,cb:X,disabled:P()})),ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"mousedown",passive:!0,cb:j,disabled:!e().opened})),ct(Pt,(g,_)=>A==null?void 0:A(g,_),()=>({event:"keydown",passive:!1,cb:rt,disabled:!e().opened}));var xt=U($t);{var bt=g=>{var _=Fn(),R=$(_);ut(R,()=>t.children),y(_),ct(_,(H,F)=>A==null?void 0:A(H,F),()=>({event:"contextmenu",passive:!1,cb:W})),ct(_,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchstart",passive:!0,cb:Z})),ct(_,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchmove",passive:!0,cb:J})),ct(_,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchend",passive:!1,cb:X})),ct(_,(H,F)=>A==null?void 0:A(H,F),()=>({event:"touchcancel",passive:!1,cb:X})),s(g,_)},Q=g=>{var _=ft(),R=U(_);ut(R,()=>t.children),s(g,_)};B(xt,g=>{P()?g(bt):g(Q,!1)})}var yt=v(xt,2);{var wt=g=>{var _=Hn();Re(_,"clientHeight",R=>m(f,R)),Re(_,"clientWidth",R=>m(x,R)),s(g,_)};B(yt,g=>{n(u)||g(wt)})}var oe=v(yt,2);{var _e=g=>{var _=Ln();let R;qt(_,20,()=>e().params,H=>H,(H,F)=>{var ht=ft(),_t=U(ht);{var it=pt=>{var et=ft(),It=U(et);ut(It,()=>F),s(pt,et)},Tt=(pt,et)=>{{var It=at=>{Mn(at,()=>F.props)},me=(at,ve)=>{{var Ge=he=>{Rn(he,()=>F.props)};B(at,he=>{F.snippet==="text"&&he(Ge)},ve)}};B(pt,at=>{F.snippet==="link"?at(It):at(me,!1)},et)}};B(_t,pt=>{typeof F=="function"?pt(it):pt(Tt,!1)})}s(H,ht)}),y(_),Ie(_,H=>m(S,H),()=>n(S)),nt(()=>R=we(_,"",R,{transform:`translate3d(${n(w)??""}px, ${n(b)??""}px, 0)`})),s(g,_)};B(oe,g=>{e().opened&&g(_e)})}s(o,$t),vt()}var Un=E('<span class="display_contents"><!></span>');function kt(o,t){var e=Un(),a=$(e);ut(a,()=>t.children),y(e),ct(e,(c,l)=>be==null?void 0:be(c,l),()=>t.entries),s(o,e)}var Bn=E('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Vn=E('<li role="none" class="svelte-pa2qv7"><div role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ae(o,t){mt(t,!0);const e=de.get(),a=e.add_submenu(),{layout:c}=e,l=V(()=>a.selected);let r=D(void 0);const h=ke.get(),k=ke.set();let C=D(0),P=D(0);Dt(()=>{n(r)&&S(n(r),c,h)});const S=(I,L,G)=>{const{x:K,y:W,width:Z,height:J}=I.getBoundingClientRect();k.width=Z,k.height=J;const X=K-n(C),j=W-n(P),tt=X+Z+G.width-L.width;if(tt<=0)m(C,G.width,!0);else{const rt=Z-X;rt<=0?m(C,-Z):rt>tt?m(C,G.width-tt):m(C,rt-Z)}m(P,Math.min(0,L.height-(j+J)),!0)};var i=Vn();let p;var u=$(i);let x;var f=$(u),d=$(f),w=$(d);ut(w,()=>t.icon??ue),y(d);var b=v(d,2),M=$(b);ut(M,()=>t.children),y(b),y(f),q(2),y(u);var N=v(u,2);{var T=I=>{var L=Bn();let G;var K=$(L);ut(K,()=>t.menu),y(L),Ie(L,W=>m(r,W),()=>n(r)),nt(()=>G=we(L,"",G,{transform:`translate3d(${n(C)??""}px, ${n(P)??""}px, 0)`,"max-height":`${c.height??""}px`})),s(I,L)};B(N,I=>{n(l)&&I(T)})}y(i),nt(I=>{p=we(i,"",p,{"--contextmenu_depth":a.depth}),x=gt(u,1,"menu_item plain selectable svelte-pa2qv7",null,x,I),re(u,"aria-expanded",n(l))},[()=>({selected:n(l)})]),We("mouseenter",u,I=>{zt(I),setTimeout(()=>e.select(a))}),s(o,i),vt()}var Xn=E("<!> <!>",1);function ie(o,t){mt(t,!0);const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺");Ae(o,{icon:r=>{q();var h=O();nt(()=>dt(h,a())),s(r,h)},menu:r=>{var h=Xn(),k=U(h);st(k,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:S=>{var i=ft(),p=U(i);{var u=f=>{var d=O("🏠");s(f,d)},x=f=>{var d=O("🌄");s(f,d)};B(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ft(),u=U(p);{var x=d=>{var w=O("go home");s(d,w)},f=d=>{var w=O("go adventure");s(d,w)};B(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}});var C=v(k,2);st(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:S=>{var i=ft(),p=U(i);{var u=f=>{var d=O("🌄");s(f,d)},x=f=>{var d=O("🏠");s(f,d)};B(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ft(),u=U(p);{var x=d=>{var w=O("do adventure");s(d,w)},f=d=>{var w=O("be home");s(d,w)};B(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}}),s(r,h)},children:(r,h)=>{q();var k=O();nt(()=>dt(k,e())),s(r,k)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var Yn=E("<!> <!>",1);function jn(o,t){var e=Yn(),a=U(e);Xe(a,{href:"https://github.com/ryanatkn/fuz",icon:r=>{_n(r,{data:mn,size:"var(--icon_size_xs)"})},children:(r,h)=>{q();var k=O("Source code");s(r,k)},$$slots:{icon:!0,default:!0}});var c=v(a,2);st(c,{get run(){return t.toggle_about_dialog},icon:r=>{q();var h=O("?");s(r,h)},children:(r,h)=>{q();var k=O("About");s(r,k)},$$slots:{icon:!0,default:!0}}),s(o,e)}const je=o=>{const t=o.length;if(t===2)return"cats";if(t===0)return null;const e=o[0];return e.icon+e.name};var Gn=E("<!> <!>",1),Kn=E("<!> <!> <!>",1);function Zn(o,t){mt(t,!0);const e=V(()=>je(t.adventure_cats));Ae(o,{icon:l=>{q();var r=O("🏠");s(l,r)},menu:l=>{var r=Kn(),h=U(r);{var k=i=>{st(i,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{q();var x=O("🐈‍⬛");s(u,x)},children:(u,x)=>{q();var f=O("call");s(u,f)},$$slots:{icon:!0,default:!0}})};B(h,i=>{n(e)&&i(k)})}var C=v(h,2);qt(C,17,()=>t.home_cats,i=>i.name,(i,p)=>{ie(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var P=v(C,2);{var S=i=>{var p=Gn(),u=U(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{q();var w=O("🏠");s(d,w)},children:(d,w)=>{q();var b=O("be");s(d,b)},$$slots:{icon:!0,default:!0}});var x=v(u,2);st(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{q();var w=O("🦋");s(d,w)},children:(d,w)=>{q();var b=O("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};B(P,i=>{n(e)||i(S)})}s(l,r)},children:(l,r)=>{q();var h=O("home");s(l,h)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var Jn=E("<!> <!>",1),Qn=E("<!> <!> <!>",1);function to(o,t){mt(t,!0);const e=V(()=>je(t.home_cats));Ae(o,{icon:l=>{q();var r=O("🌄");s(l,r)},menu:l=>{var r=Qn(),h=U(r);{var k=i=>{st(i,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{q();var x=O("🦋");s(u,x)},children:(u,x)=>{q();var f=O("call");s(u,f)},$$slots:{icon:!0,default:!0}})};B(h,i=>{n(e)&&i(k)})}var C=v(h,2);qt(C,17,()=>t.adventure_cats,i=>i.name,(i,p)=>{ie(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var P=v(C,2);{var S=i=>{var p=Jn(),u=U(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{q();var w=O("🌄");s(d,w)},children:(d,w)=>{q();var b=O("do");s(d,b)},$$slots:{icon:!0,default:!0}});var x=v(u,2);st(x,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{q();var w=O("🐈‍⬛");s(d,w)},children:(d,w)=>{q();var b=O("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};B(P,i=>{n(e)||i(S)})}s(l,r)},children:(l,r)=>{q();var h=O("adventure");s(l,h)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var eo=E('<span class="icon svelte-u0xdy"> </span>'),no=E('<span class="name svelte-u0xdy"><!> </span>'),oo=E("<span><!><!></span>");function Le(o,t){const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺"),c=ot(t,"show_name",3,!0),l=ot(t,"show_icon",3,!0);var r=oo();let h;var k=$(r);{var C=i=>{var p=eo(),u=$(p,!0);y(p),nt(()=>dt(u,a())),s(i,p)};B(k,i=>{l()&&i(C)})}var P=v(k);{var S=i=>{var p=no(),u=$(p);ut(u,()=>t.children??ue);var x=v(u,1,!0);y(p),nt(()=>dt(x,e())),s(i,p)};B(P,i=>{c()&&i(S)})}y(r),nt(i=>h=gt(r,1,"cat svelte-u0xdy",null,h,i),[()=>({"has-icon":l()})]),s(o,r)}const so=`<script lang="ts">
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
`;var ao=E("<!> <!>",1),ro=E('<div class="cat_wrapper svelte-1b1oync"><!></div>'),io=E('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),co=E('<div class="cat_wrapper svelte-1b1oync"><!></div>'),lo=E('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),uo=E("<section><!> <!></section> <section><!></section>",1),_o=E("<!> <!>",1),mo=E('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),vo=E("<!> <!>",1);function ho(o,t){mt(t,!0);const e="Alyssa",a="Ben",c="home";let l=D(c),r=D(c);const h=V(()=>n(l)===n(r)?"😺":"😾"),k=V(()=>n(l)===n(r)?"😸":"😿"),C=V(()=>({name:e,icon:n(h),position:n(l)})),P=V(()=>({name:a,icon:n(k),position:n(r)}));let S=D(!1);const i=(W,Z)=>{const J=[],X=[];for(const j of W){const tt=j.position==="home"?J:X;Z?tt.unshift(j):tt.push(j)}return{home_cats:J,adventure_cats:X}},p=V(()=>i([n(C),n(P)],n(S))),u=V(()=>n(p).home_cats),x=V(()=>n(p).adventure_cats),f=V(()=>n(l)!==c||n(r)!==c),d=()=>{m(l,c),m(r,c)};let w=D(!1);const b=()=>{m(w,!n(w))},M=W=>{switch(W.type){case"call_cats_adventure":{m(l,"adventure"),m(r,"adventure");break}case"call_cats_home":{m(l,"home"),m(r,"home");break}case"cat_go_adventure":{W.name===e?m(l,"adventure"):W.name===a&&m(r,"adventure");break}case"cat_go_home":{W.name===e?m(l,"home"):W.name===a&&m(r,"home");break}case"cat_be_or_do":{m(S,!n(S));break}}},[N,T]=sn({fallback:(W,Z)=>{const J=window.getComputedStyle(W),X=J.transform==="none"?"":J.transform;return{duration:1500,easing:Cn,css:j=>`
					transform: ${X} scale(${j});
					opacity: ${j}
				`}}});var I=vo(),L=U(I);ne(L,{scoped:!0,children:(W,Z)=>{St(W,{children:(J,X)=>{var j=_o(),tt=U(j);At(tt,{text:"Full example"});var rt=v(tt,2);kt(rt,{entries:$t=>{var xt=ao(),bt=U(xt);{var Q=wt=>{Ye(wt,{run:d,content:"Reset",icon:"↻"})};B(bt,wt=>{n(f)&&wt(Q)})}var yt=v(bt,2);jn(yt,{toggle_about_dialog:b}),s($t,xt)},children:($t,xt)=>{var bt=uo(),Q=U(bt),yt=$(Q);kt(yt,{entries:_=>{Zn(_,{act:M,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(_,R)=>{var H=io(),F=v($(H),2);qt(F,29,()=>n(u),({name:ht,icon:_t,position:it})=>ht,(ht,_t)=>{let it=()=>n(_t).name,Tt=()=>n(_t).icon,pt=()=>n(_t).position;var et=ro(),It=$(et);kt(It,{entries:at=>{ie(at,{act:M,get name(){return it()},get icon(){return Tt()},get position(){return pt()}})},children:(at,ve)=>{Le(at,{get name(){return it()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>T,()=>({key:it()})),Ot(2,et,()=>N,()=>({key:it()})),Oe(et,()=>Fe,null),s(ht,et)}),y(F),y(H),s(_,H)},$$slots:{entries:!0,default:!0}});var wt=v(yt,2);kt(wt,{entries:_=>{to(_,{act:M,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(_,R)=>{var H=lo(),F=v($(H),2);qt(F,29,()=>n(x),({name:ht,icon:_t,position:it})=>ht,(ht,_t)=>{let it=()=>n(_t).name,Tt=()=>n(_t).icon,pt=()=>n(_t).position;var et=co(),It=$(et);kt(It,{entries:at=>{ie(at,{act:M,get name(){return it()},get icon(){return Tt()},get position(){return pt()}})},children:(at,ve)=>{Le(at,{get name(){return it()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>T,()=>({key:it()})),Ot(2,et,()=>N,()=>({key:it()})),Oe(et,()=>Fe,null),s(ht,et)}),y(F),y(H),s(_,H)},$$slots:{entries:!0,default:!0}}),y(Q);var oe=v(Q,2),_e=$(oe);dn(_e,{summary:_=>{q();var R=O("View example source");s(_,R)},children:(_,R)=>{Mt(_,{content:so})},$$slots:{summary:!0,default:!0}}),y(oe),s($t,bt)}}),s(J,j)},$$slots:{default:!0}})},$$slots:{default:!0}});var G=v(L,2);{var K=W=>{ln(W,{onclose:()=>m(w,!1),children:(Z,J)=>{var X=mo(),j=$(X),tt=v($(j),8),rt=v($(tt),2);vn(rt,{});var A=v(rt,4);hn(A,{}),y(tt),y(j),y(X),s(Z,X)},$$slots:{default:!0}})};B(G,W=>{n(w)&&W(K)})}s(o,I),vt()}var po=E("<!> <!> <!>",1),fo=E(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),go=E("<!> <!>",1);function xo(o){let t=D(!1),e=D(!1),a=D(!1);ne(o,{scoped:!0,children:(c,l)=>{St(c,{children:(r,h)=>{var k=go(),C=U(k);At(C,{text:"Basic usage"});var P=v(C,2);kt(P,{entries:i=>{var p=po(),u=U(p);st(u,{run:()=>m(t,!n(t)),children:(d,w)=>{q();var b=O("Hello world");s(d,b)},$$slots:{default:!0}});var x=v(u,2);st(x,{run:()=>m(e,!n(e)),icon:w=>{q();var b=O("🌞");s(w,b)},children:(w,b)=>{q();var M=O("Hello with an optional icon snippet");s(w,M)},$$slots:{icon:!0,default:!0}});var f=v(x,2);st(f,{run:()=>m(a,!n(a)),icon:"🌚",children:(d,w)=>{q();var b=O("Hello with an optional icon string");s(d,b)},$$slots:{default:!0}}),s(i,p)},children:(i,p)=>{var u=fo(),x=v($(u),2);const f=V(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Mt(x,{get content(){return n(f)}});var d=v(x,2),w=$(d);let b;var M=$(w);y(w),y(d);var N=v(d,2),T=$(N);let I;var L=$(T);y(T),y(N);var G=v(N,2),K=$(G);let W;var Z=$(K);y(K),y(G),q(2),y(u),nt((J,X,j)=>{b=gt(w,1,"",null,b,J),dt(M,`greeted = ${n(t)??""}`),I=gt(T,1,"",null,I,X),dt(L,`greeted_icon_snippet = ${n(e)??""}`),W=gt(K,1,"",null,W,j),dt(Z,`greeted_icon_string = ${n(a)??""}`)},[()=>({color_g_5:n(t)}),()=>({color_e_5:n(e)}),()=>({color_d_5:n(a)})]),s(i,u)}}),s(r,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}var bo=E("<div>toggled</div>"),yo=E(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),wo=E("<!> <!>",1);function $o(o,t){mt(t,!0);const e=new Pe;let a=D(!1);ne(o,{contextmenu:e,scoped:!0,children:(c,l)=>{St(c,{children:(r,h)=>{var k=wo(),C=U(k);At(C,{text:"Custom instance"});var P=v(C,2);kt(P,{entries:i=>{st(i,{run:()=>m(a,!n(a)),children:(p,u)=>{q();var x=O("Toggle");s(p,x)},$$slots:{default:!0}})},children:(i,p)=>{var u=yo(),x=$(u);Mt(x,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var f=v(x,2);Mt(f,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var d=v(f,4),w=$(d);{var b=M=>{var N=bo();Ot(3,N,()=>an),s(M,N)};B(w,M=>{n(a)&&M(b)})}y(d),y(u),s(i,u)}}),s(r,k)},$$slots:{default:!0}})},$$slots:{default:!0}}),vt()}const ko=(o,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var Co=E(`<div><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),To=E("<div><!></div> <!>",1);function Io(o,t){mt(t,!0);const e=new Pe;let a=D(!1),c=D(void 0),l=D("");const r="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",h=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,k=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=V(()=>n(l)===r||n(l)===h||n(l)===k);ne(o,{contextmenu:e,scoped:!0,children:(P,S)=>{St(P,{children:(i,p)=>{var u=To(),x=U(u);let f;var d=$(x);At(d,{text:"Select text"}),y(x);var w=v(x,2);kt(w,{entries:M=>{st(M,{run:()=>m(a,!n(a)),children:(N,T)=>{q();var I=O("Toggle something");s(N,I)},$$slots:{default:!0}})},children:(M,N)=>{var T=Co();let I;var L=$(T),G=v($(L),2),K=v($(G));K.__click=[ko,c];let W;q(),y(G),y(L),Ie(L,Q=>m(c,Q),()=>n(c));var Z=v(L,2),J=$(Z);rn(J),y(Z);var X=v(Z,2);let j;var tt=v(X,2),rt=$(tt);Qe(rt),y(tt);var A=v(tt,2),$t=$(A);se($t,{path:"Web/HTML/Global_attributes/contenteditable"}),q(),y(A);var xt=v(A,4),bt=v(xt,4);y(T),nt((Q,yt,wt)=>{I=gt(T,1,"panel p_md",null,I,Q),W=gt(K,1,"",null,W,yt),j=gt(X,1,"",null,j,wt)},[()=>({color_g_5:n(C)}),()=>({color_a:n(a)}),()=>({color_g_5:n(C)})]),Me(J,()=>n(l),Q=>m(l,Q)),Me(rt,()=>n(l),Q=>m(l,Q)),qe("innerText",xt,()=>n(l),Q=>m(l,Q)),qe("innerText",bt,()=>n(l),Q=>m(l,Q)),s(M,T)}}),nt(b=>f=gt(x,1,"",null,f,b),[()=>({color_d_5:n(C)})]),s(i,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),vt()}Ce(["click"]);var Po=E(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function So(o){ne(o,{scoped:!0,children:(t,e)=>{St(t,{children:(a,c)=>{var l=Po(),r=U(l);At(r,{text:"Default behaviors"});var h=v(r,2),k=$(h);Mt(k,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),q(6),y(h),s(a,l)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Ao=E("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function es(o,t){mt(t,!0);const a=on("Contextmenu");nn(o,{tome:a,children:(c,l)=>{var r=Ao(),h=v(U(r),2);xo(h);var k=v(h,2);So(k);var C=v(k,2);$o(C,{});var P=v(C,2);Io(P,{});var S=v(P,2);ho(S,{});var i=v(S,2);$n(i),s(c,r)},$$slots:{default:!0}}),vt()}export{es as component};
