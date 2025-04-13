var Ke=Object.defineProperty;var ze=o=>{throw TypeError(o)};var Je=(o,t,e)=>t in o?Ke(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var ct=(o,t,e)=>Je(o,typeof t!="symbol"?t+"":t,e),pe=(o,t,e)=>t.has(o)||ze("Cannot "+e);var A=(o,t,e)=>(pe(o,t,"read from private field"),e?e.call(o):t.get(o)),Y=(o,t,e)=>t.has(o)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),fe=(o,t,e,a)=>(pe(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e),Ee=(o,t,e)=>(pe(o,t,"access private method"),e);import{t as z,a as s,k as Ce,j as E,c as ft,m as We,y as Ze,z as Qe}from"../chunks/DoRN4M-o.js";import{m as tn,j as en,f as U,s as v,k as $,a2 as M,l as y,a4 as D,g as n,J as m,I as Nt,p as mt,t as nt,u as V,a as vt,U as Dt,ap as Pt,a1 as ue}from"../chunks/CLNC1iHR.js";import{T as nn}from"../chunks/Bmvo2CVc.js";import{g as on}from"../chunks/B2QZsZmt.js";import{M as se}from"../chunks/CsLE7S9O.js";import{T as St,a as At}from"../chunks/BQsttWGi.js";import{i as B}from"../chunks/C1oRbkCz.js";import{c as Te,e as Mt}from"../chunks/CVfbnXn3.js";import{t as Ot,c as sn,a as Oe,s as an}from"../chunks/ZGCzptMR.js";import{C as Rt}from"../chunks/DeLZ0-Bp.js";import{b as re,s as ut,c as gt,d as we,r as rn}from"../chunks/BbynuF1-.js";import{a as it}from"../chunks/-Iq-wK7P.js";import{b as Ie}from"../chunks/8RlZCxH-.js";import{p as ot,s as Ue}from"../chunks/B3lj4C7e.js";import{a as ln,s as zt,b as ge,c as Ne,D as cn}from"../chunks/CN-kg1c8.js";import{o as De}from"../chunks/6b1L2s5o.js";import{s as dt}from"../chunks/LTUnQ_ua.js";import{a as xe}from"../chunks/ZJuK4sHN.js";import{P as un}from"../chunks/D9FOx2Or.js";import{D as dn,b as Me}from"../chunks/DhWviwRJ.js";import{S as _n,g as mn}from"../chunks/C7YbmPDM.js";import{C as vn,T as hn}from"../chunks/CTDpcMp-.js";import{b as Re}from"../chunks/DoV8jixt.js";var Ct,Et,qt,le,Be;const ce=class ce{constructor(t){Y(this,le);Y(this,Ct,new WeakMap);Y(this,Et);Y(this,qt);fe(this,qt,t)}observe(t,e){var a=A(this,Ct).get(t)||new Set;return a.add(e),A(this,Ct).set(t,a),Ee(this,le,Be).call(this).observe(t,A(this,qt)),()=>{var l=A(this,Ct).get(t);l.delete(e),l.size===0&&(A(this,Ct).delete(t),A(this,Et).unobserve(t))}}};Ct=new WeakMap,Et=new WeakMap,qt=new WeakMap,le=new WeakSet,Be=function(){return A(this,Et)??fe(this,Et,new ResizeObserver(t=>{for(var e of t){ce.entries.set(e.target,e);for(var a of A(this,Ct).get(e.target)||[])a(e)}}))},ct(ce,"entries",new WeakMap);let $e=ce;var pn=new $e({box:"border-box"});function qe(o,t,e){var a=pn.observe(o,()=>e(o[t]));tn(()=>(en(()=>e(o[t])),a))}var fn=z('<span class="font_mono">contextmenu</span> event',1),gn=z('<span class="font_mono">navigator.vibrate</span>'),xn=z('<span class="font_mono">navigator.vibrate</span>'),bn=z(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),yn=z(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),wn=z("<!> <!>",1);function $n(o){var t=wn(),e=U(t);St(e,{children:(l,c)=>{var r=bn(),h=U(r);At(h,{text:"Expected behaviors"});var k=v(h,4),C=v($(k));se(C,{path:"Web/API/Element/contextmenu_event",children:(u,x)=>{var f=fn();M(),s(u,f)},$$slots:{default:!0}});var P=v(C,4);se(P,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=gn();s(u,f)},$$slots:{default:!0}}),M(),y(k);var S=v(k,10),i=v($(S),10),p=v($(i));se(p,{path:"Web/API/Navigator/vibrate",children:(u,x)=>{var f=xn();s(u,f)},$$slots:{default:!0}}),M(),y(i),y(S),s(l,r)},$$slots:{default:!0}});var a=v(e,2);St(a,{children:(l,c)=>{var r=yn(),h=U(r);At(h,{text:"Motivation"}),M(14),s(l,r)},$$slots:{default:!0}}),s(o,t)}function kn(o){const t=o-1;return t*t*t+1}function Cn(o){return--o*o*o*o*o+1}function Fe(o,{from:t,to:e},a={}){var{delay:l=0,duration:c=T=>Math.sqrt(T)*120,easing:r=kn}=a,h=getComputedStyle(o),k=h.transform==="none"?"":h.transform,[C,P]=h.transformOrigin.split(" ").map(parseFloat);C/=o.clientWidth,P/=o.clientHeight;var S=Tn(o),i=o.clientWidth/e.width/S,p=o.clientHeight/e.height/S,u=t.left+t.width*C,x=t.top+t.height*P,f=e.left+e.width*C,d=e.top+e.height*P,w=(u-f)*i,b=(x-d)*p,R=t.width/e.width,O=t.height/e.height;return{delay:l,duration:typeof c=="function"?c(Math.sqrt(w*w+b*b)):c,easing:r,css:(T,I)=>{var L=I*w,G=I*b,K=T+I*R,W=T+I*O;return`transform: ${k} translate(${L}px, ${G}px) scale(${K}, ${W});`}}}function Tn(o){if("currentCSSZoom"in o)return o.currentCSSZoom;for(var t=o,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Ft,Ht;class Ve{constructor(){Y(this,Ft,D(0));Y(this,Ht,D(0))}get width(){return n(A(this,Ft))}set width(t){m(A(this,Ft),t,!0)}get height(){return n(A(this,Ht))}set height(t){m(A(this,Ht),t,!0)}}Ft=new WeakMap,Ht=new WeakMap;var Lt,Wt,Ut,Bt,Vt;class In{constructor(t,e){ct(this,"is_menu",!1);ct(this,"menu");Y(this,Lt,D(!1));Y(this,Wt,D());Y(this,Ut,D(!1));Y(this,Bt,D(null));Y(this,Vt,D(null));this.menu=t,this.run=e}get selected(){return n(A(this,Lt))}set selected(t){m(A(this,Lt),t,!0)}get run(){return n(A(this,Wt))}set run(t){m(A(this,Wt),t,!0)}get pending(){return n(A(this,Ut))}set pending(t){m(A(this,Ut),t,!0)}get error_message(){return n(A(this,Bt))}set error_message(t){m(A(this,Bt),t,!0)}get promise(){return n(A(this,Vt))}set promise(t){m(A(this,Vt),t,!0)}}Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,Bt=new WeakMap,Vt=new WeakMap;var Xt,Yt;class Pn{constructor(t,e){ct(this,"is_menu",!0);ct(this,"menu");ct(this,"depth");Y(this,Xt,D(!1));Y(this,Yt,D(Nt([])));this.menu=t,this.depth=e}get selected(){return n(A(this,Xt))}set selected(t){m(A(this,Xt),t,!0)}get items(){return n(A(this,Yt))}set items(t){m(A(this,Yt),t,!0)}}Xt=new WeakMap,Yt=new WeakMap;var jt;class Sn{constructor(){ct(this,"is_menu",!0);ct(this,"menu",null);ct(this,"depth",1);Y(this,jt,D(Nt([])))}get items(){return n(A(this,jt))}set items(t){m(A(this,jt),t,!0)}}jt=new WeakMap;var Gt,Kt,Jt,Zt,Qt,te,ee;class Pe{constructor(t){ct(this,"layout");ct(this,"initial_layout");Y(this,Gt,D(!1));Y(this,Kt,D(0));Y(this,Jt,D(0));Y(this,Zt,D(Nt([])));Y(this,Qt,D());Y(this,te,D(Nt(new Sn)));Y(this,ee,D(Nt([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ve}get opened(){return n(A(this,Gt))}set opened(t){m(A(this,Gt),t,!0)}get x(){return n(A(this,Kt))}set x(t){m(A(this,Kt),t,!0)}get y(){return n(A(this,Jt))}set y(t){m(A(this,Jt),t,!0)}get params(){return n(A(this,Zt))}set params(t){m(A(this,Zt),t,!0)}get error(){return n(A(this,Qt))}set error(t){m(A(this,Qt),t,!0)}get root_menu(){return n(A(this,te))}set root_menu(t){m(A(this,te),t,!0)}get selections(){return n(A(this,ee))}set selections(t){m(A(this,ee),t,!0)}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const l=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=l??"unknown error",this.error=l}if(ln(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(l=>{if(a===t.promise){if(typeof(l==null?void 0:l.ok)=="boolean")if(l.ok)this.close();else{const c=typeof l.message=="string"?l.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return l}},l=>{if(a!==t.promise)return;const c=typeof(l==null?void 0:l.message)=="string"?l.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=ye.maybe_get()??this.root_menu,a=new In(e,t);return e.items.push(a),De(()=>{e.items.length=0}),a}add_submenu(){const t=ye.maybe_get()??this.root_menu,e=new Pn(t,t.depth+1);return t.items.push(e),ye.set(e),De(()=>{t.items.length=0}),e}}Gt=new WeakMap,Kt=new WeakMap,Jt=new WeakMap,Zt=new WeakMap,Qt=new WeakMap,te=new WeakMap,ee=new WeakMap;const Se="contextmenu",An=`a,[data-${Se}]`,ae=new Map;let zn=0;const be=(o,t)=>{if(t==null)return;const e=zn+++"";return o.dataset[Se]=e,ae.set(e,t),{update:a=>{ae.set(e,a)},destroy:()=>{ae.delete(e)}}},En=17,He=(o,t,e,a)=>{const l=On(o);return l!=null&&l.length?(a.open(l,t,e),navigator.vibrate&&navigator.vibrate(En),!0):!1},On=o=>{var c;let t=null,e=o,a,l;for(;e=e==null?void 0:e.closest(An);){if(a=e.dataset[Se]){if(t??(t=[]),l=ae.get(a),l===void 0)continue;Array.isArray(l)?(t??(t=[])).push(...l):(t??(t=[])).push(l)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const r=(c=window.getSelection())==null?void 0:c.toString();r&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(r)}})}return t},de=Te(),ye=Te(),ke=Te(()=>new Ve);var Nn=(o,t)=>t.close(),Dn=z('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Xe(o,t){mt(t,!0);const e="🔗",a=ot(t,"icon",3,e),l=de.get(),c=(O,T=location.host)=>{const I=xe(xe(O,"https://"),"http://");return I.startsWith(T+"/")?xe(I,T):I},r=V(()=>c(t.href)),h=V(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),k=V(()=>n(h)?"noreferrer":void 0);var C=Dn(),P=$(C);P.__click=[Nn,l];var S=$(P),i=$(S),p=$(i);{var u=O=>{var T=E();nt(()=>dt(T,a())),s(O,T)},x=O=>{var T=ft(),I=U(T);ut(I,a,()=>e),s(O,T)};B(p,O=>{typeof a()=="string"?O(u):O(x,!1)})}y(i);var f=v(i,2),d=$(f),w=$(d);{var b=O=>{var T=ft(),I=U(T);ut(I,()=>t.children),s(O,T)},R=O=>{var T=E();nt(()=>dt(T,n(r))),s(O,T)};B(w,O=>{t.children?O(b):O(R,!1)})}y(d),y(f),y(S),y(P),y(C),nt(()=>{re(P,"href",t.href),re(P,"rel",n(k))}),s(o,C),vt()}Ce(["click"]);var Mn=z('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function st(o,t){mt(t,!0);const e=de.get(),a=e.add_entry(t.run);Dt(()=>{a.run=t.run});const l=V(()=>a.selected),c=V(()=>a.pending),r=V(()=>a.error_message);var h=Mn();let k;h.__click=()=>{setTimeout(()=>e.activate(a))};var C=$(h),P=$(C),S=$(P);{var i=b=>{var R=E();nt(()=>dt(R,t.icon)),s(b,R)},p=(b,R)=>{{var O=T=>{var I=ft(),L=U(I);ut(L,()=>t.icon),s(T,I)};B(b,T=>{t.icon&&T(O)},R)}};B(S,b=>{typeof t.icon=="string"?b(i):b(p,!1)})}y(P);var u=v(P,2),x=$(u);ut(x,()=>t.children),y(u);var f=v(u,2);{var d=b=>{un(b,{})},w=(b,R)=>{{var O=T=>{var I=E("⚠️");s(T,I)};B(b,T=>{n(r)&&T(O)},R)}};B(f,b=>{n(c)?b(d):b(w,!1)})}y(C),y(h),nt(b=>{k=gt(h,1,"menu_item plain selectable deselectable svelte-10kraez",null,k,b),re(h,"title",n(r)?`Error: ${n(r)}`:void 0)},[()=>({selected:n(l)})]),We("mouseenter",h,b=>{zt(b),e.select(a)}),s(o,h),vt()}Ce(["click"]);function Ye(o,t){st(o,{get run(){return t.run},icon:a=>{M();var l=E();nt(()=>dt(l,t.icon)),s(a,l)},children:(a,l)=>{M();var c=E();nt(()=>dt(c,t.content)),s(a,c)},$$slots:{icon:!0,default:!0}})}const Rn=(o,t=ue)=>{Xe(o,Ue(t))},qn=(o,t=ue)=>{Ye(o,Ue(t))};var Fn=z('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Hn=z('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Ln=z('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Wn=z("<!> <!> <!>",1);function ne(o,t){mt(t,!0);const e=ot(t,"contextmenu",19,()=>new Pe),a=ot(t,"longpress_move_tolerance",3,21),l=ot(t,"longpress_duration",3,633),c=ot(t,"bypass_with_tap_then_longpress",3,!0),r=ot(t,"tap_then_longpress_duration",3,660),h=ot(t,"tap_then_longpress_move_tolerance",3,7),k=ot(t,"open_offset_x",19,()=>-2),C=ot(t,"open_offset_y",19,()=>-2),P=ot(t,"scoped",3,!1);de.set(e());let S=D(void 0);const i=V(()=>e().layout),p=V(()=>e().initial_layout),u=V(()=>n(i)===n(p));let x=D(void 0),f=D(void 0);Dt(()=>{!n(u)&&n(x)!==void 0&&(n(i).width=n(x))}),Dt(()=>{!n(u)&&n(f)!==void 0&&(n(i).height=n(f))});const d=ke.set();Dt(()=>{if(n(S)){const g=n(S).getBoundingClientRect();d.width=g.width,d.height=g.height}});const w=V(()=>e().x+Math.min(0,n(i).width-(e().x+d.width))),b=V(()=>e().y+Math.min(0,n(i).height-(e().y+d.height)));let R=D(void 0),O=D(void 0),T=D(void 0),I=D(void 0),L=D(void 0),G=D(void 0);const K=()=>{n(L)&&m(L,!1),n(I)!=null&&(clearTimeout(n(I)),m(I,null))},W=g=>{var q;if(n(G)){m(G,!1);return}if(n(L)){K(),zt(g);return}const{target:_}=g;g.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||(q=n(S))!=null&&q.contains(_)||ge(_)||Ne(_)||He(_,g.clientX+k(),g.clientY+C(),e())&&(zt(g),K())},J=g=>{n(L)&&m(L,!1);const{touches:_,target:q}=g;if(e().opened||_.length!==1||g.shiftKey||!(q instanceof HTMLElement||q instanceof SVGElement)||ge(q)||Ne(q))return;const{clientX:H,clientY:F}=_[0];if(c()){if(n(T)!=null&&performance.now()-n(T)<r()&&Math.hypot(H-n(R),F-n(O))<h()){m(G,!0),m(T,null);return}m(T,performance.now(),!0)}m(R,H,!0),m(O,F,!0),n(I)!=null&&K(),m(I,setTimeout(()=>{m(L,!0),He(q,n(R)+k(),n(O)+C(),e())},l()),!0)},Z=g=>{if(n(I)==null)return;const{touches:_}=g;if(_.length!==1)return;const{clientX:q,clientY:H}=_[0];Math.hypot(q-n(R),H-n(O))>a()&&(e().opened&&e().close(),K())},X=g=>{n(I)!=null&&(n(L)&&zt(g),K())},j=g=>{n(S)&&!n(S).contains(g.target)&&e().close()},tt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),lt=g=>{const _=tt.get(g.key);!_||ge(g.target)||(zt(g),_())},N=(g,_)=>{let q=null;const H=F=>{q&&(q(),q=null),F.disabled||(q=Ze(g,F.event,F.cb,{capture:!0,passive:F.passive}))};return H(_),{update:F=>{H(F)},destroy:()=>{q==null||q()}}};var $t=Wn();it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"contextmenu",passive:!1,cb:W,disabled:P()})),it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"touchstart",passive:!0,cb:J,disabled:P()})),it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"touchmove",passive:!0,cb:Z,disabled:P()})),it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"touchend",passive:!1,cb:X,disabled:P()})),it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"touchcancel",passive:!1,cb:X,disabled:P()})),it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"mousedown",passive:!0,cb:j,disabled:!e().opened})),it(Pt,(g,_)=>N==null?void 0:N(g,_),()=>({event:"keydown",passive:!1,cb:lt,disabled:!e().opened}));var xt=U($t);{var bt=g=>{var _=Fn(),q=$(_);ut(q,()=>t.children),y(_),it(_,(H,F)=>N==null?void 0:N(H,F),()=>({event:"contextmenu",passive:!1,cb:W})),it(_,(H,F)=>N==null?void 0:N(H,F),()=>({event:"touchstart",passive:!0,cb:J})),it(_,(H,F)=>N==null?void 0:N(H,F),()=>({event:"touchmove",passive:!0,cb:Z})),it(_,(H,F)=>N==null?void 0:N(H,F),()=>({event:"touchend",passive:!1,cb:X})),it(_,(H,F)=>N==null?void 0:N(H,F),()=>({event:"touchcancel",passive:!1,cb:X})),s(g,_)},Q=g=>{var _=ft(),q=U(_);ut(q,()=>t.children),s(g,_)};B(xt,g=>{P()?g(bt):g(Q,!1)})}var yt=v(xt,2);{var wt=g=>{var _=Hn();qe(_,"clientHeight",q=>m(f,q)),qe(_,"clientWidth",q=>m(x,q)),s(g,_)};B(yt,g=>{n(u)||g(wt)})}var oe=v(yt,2);{var _e=g=>{var _=Ln();let q;Mt(_,20,()=>e().params,H=>H,(H,F)=>{var ht=ft(),_t=U(ht);{var rt=pt=>{var et=ft(),It=U(et);ut(It,()=>F),s(pt,et)},Tt=(pt,et)=>{{var It=at=>{Rn(at,()=>F.props)},me=(at,ve)=>{{var Ge=he=>{qn(he,()=>F.props)};B(at,he=>{F.snippet==="text"&&he(Ge)},ve)}};B(pt,at=>{F.snippet==="link"?at(It):at(me,!1)},et)}};B(_t,pt=>{typeof F=="function"?pt(rt):pt(Tt,!1)})}s(H,ht)}),y(_),Ie(_,H=>m(S,H),()=>n(S)),nt(()=>q=we(_,"",q,{transform:`translate3d(${n(w)??""}px, ${n(b)??""}px, 0)`})),s(g,_)};B(oe,g=>{e().opened&&g(_e)})}s(o,$t),vt()}var Un=z('<span class="display_contents"><!></span>');function kt(o,t){var e=Un(),a=$(e);ut(a,()=>t.children),y(e),it(e,(l,c)=>be==null?void 0:be(l,c),()=>t.entries),s(o,e)}var Bn=z('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Vn=z('<li role="none" class="svelte-pa2qv7"><div role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ae(o,t){mt(t,!0);const e=de.get(),a=e.add_submenu(),{layout:l}=e,c=V(()=>a.selected);let r=D(void 0);const h=ke.get(),k=ke.set();let C=D(0),P=D(0);Dt(()=>{n(r)&&S(n(r),l,h)});const S=(I,L,G)=>{const{x:K,y:W,width:J,height:Z}=I.getBoundingClientRect();k.width=J,k.height=Z;const X=K-n(C),j=W-n(P),tt=X+J+G.width-L.width;if(tt<=0)m(C,G.width,!0);else{const lt=J-X;lt<=0?m(C,-J):lt>tt?m(C,G.width-tt):m(C,lt-J)}m(P,Math.min(0,L.height-(j+Z)),!0)};var i=Vn();let p;var u=$(i);let x;var f=$(u),d=$(f),w=$(d);ut(w,()=>t.icon??ue),y(d);var b=v(d,2),R=$(b);ut(R,()=>t.children),y(b),y(f),M(2),y(u);var O=v(u,2);{var T=I=>{var L=Bn();let G;var K=$(L);ut(K,()=>t.menu),y(L),Ie(L,W=>m(r,W),()=>n(r)),nt(()=>G=we(L,"",G,{transform:`translate3d(${n(C)??""}px, ${n(P)??""}px, 0)`,"max-height":`${l.height??""}px`})),s(I,L)};B(O,I=>{n(c)&&I(T)})}y(i),nt(I=>{p=we(i,"",p,{"--contextmenu_depth":a.depth}),x=gt(u,1,"menu_item plain selectable svelte-pa2qv7",null,x,I),re(u,"aria-expanded",n(c))},[()=>({selected:n(c)})]),We("mouseenter",u,I=>{zt(I),setTimeout(()=>e.select(a))}),s(o,i),vt()}var Xn=z("<!> <!>",1);function ie(o,t){mt(t,!0);const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺");Ae(o,{icon:r=>{M();var h=E();nt(()=>dt(h,a())),s(r,h)},menu:r=>{var h=Xn(),k=U(h);st(k,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:S=>{var i=ft(),p=U(i);{var u=f=>{var d=E("🏠");s(f,d)},x=f=>{var d=E("🌄");s(f,d)};B(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ft(),u=U(p);{var x=d=>{var w=E("go home");s(d,w)},f=d=>{var w=E("go adventure");s(d,w)};B(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}});var C=v(k,2);st(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:S=>{var i=ft(),p=U(i);{var u=f=>{var d=E("🌄");s(f,d)},x=f=>{var d=E("🏠");s(f,d)};B(p,f=>{t.position==="adventure"?f(u):f(x,!1)})}s(S,i)},children:(S,i)=>{var p=ft(),u=U(p);{var x=d=>{var w=E("do adventure");s(d,w)},f=d=>{var w=E("be home");s(d,w)};B(u,d=>{t.position==="adventure"?d(x):d(f,!1)})}s(S,p)},$$slots:{icon:!0,default:!0}}),s(r,h)},children:(r,h)=>{M();var k=E();nt(()=>dt(k,e())),s(r,k)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var Yn=z("<!> <!>",1);function jn(o,t){var e=Yn(),a=U(e);Xe(a,{href:"https://github.com/ryanatkn/fuz",icon:r=>{_n(r,{data:mn,size:"var(--icon_size_xs)"})},children:(r,h)=>{M();var k=E("Source code");s(r,k)},$$slots:{icon:!0,default:!0}});var l=v(a,2);st(l,{get run(){return t.toggle_about_dialog},icon:r=>{M();var h=E("?");s(r,h)},children:(r,h)=>{M();var k=E("About");s(r,k)},$$slots:{icon:!0,default:!0}}),s(o,e)}const je=o=>{const t=o.length;if(t===2)return"cats";if(t===0)return null;const e=o[0];return e.icon+e.name};var Gn=z("<!> <!>",1),Kn=z("<!> <!> <!>",1);function Jn(o,t){mt(t,!0);const e=V(()=>je(t.adventure_cats));Ae(o,{icon:c=>{M();var r=E("🏠");s(c,r)},menu:c=>{var r=Kn(),h=U(r);{var k=i=>{st(i,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{M();var x=E("🐈‍⬛");s(u,x)},children:(u,x)=>{M();var f=E("call");s(u,f)},$$slots:{icon:!0,default:!0}})};B(h,i=>{n(e)&&i(k)})}var C=v(h,2);Mt(C,17,()=>t.home_cats,i=>i.name,(i,p)=>{ie(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var P=v(C,2);{var S=i=>{var p=Gn(),u=U(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{M();var w=E("🏠");s(d,w)},children:(d,w)=>{M();var b=E("be");s(d,b)},$$slots:{icon:!0,default:!0}});var x=v(u,2);st(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{M();var w=E("🦋");s(d,w)},children:(d,w)=>{M();var b=E("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};B(P,i=>{n(e)||i(S)})}s(c,r)},children:(c,r)=>{M();var h=E("home");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var Zn=z("<!> <!>",1),Qn=z("<!> <!> <!>",1);function to(o,t){mt(t,!0);const e=V(()=>je(t.home_cats));Ae(o,{icon:c=>{M();var r=E("🌄");s(c,r)},menu:c=>{var r=Qn(),h=U(r);{var k=i=>{st(i,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{M();var x=E("🦋");s(u,x)},children:(u,x)=>{M();var f=E("call");s(u,f)},$$slots:{icon:!0,default:!0}})};B(h,i=>{n(e)&&i(k)})}var C=v(h,2);Mt(C,17,()=>t.adventure_cats,i=>i.name,(i,p)=>{ie(i,{get name(){return n(p).name},get icon(){return n(p).icon},get position(){return n(p).position},get act(){return t.act}})});var P=v(C,2);{var S=i=>{var p=Zn(),u=U(p);st(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{M();var w=E("🌄");s(d,w)},children:(d,w)=>{M();var b=E("do");s(d,b)},$$slots:{icon:!0,default:!0}});var x=v(u,2);st(x,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{M();var w=E("🐈‍⬛");s(d,w)},children:(d,w)=>{M();var b=E("leave");s(d,b)},$$slots:{icon:!0,default:!0}}),s(i,p)};B(P,i=>{n(e)||i(S)})}s(c,r)},children:(c,r)=>{M();var h=E("adventure");s(c,h)},$$slots:{icon:!0,menu:!0,default:!0}}),vt()}var eo=z('<span class="icon svelte-u0xdy"> </span>'),no=z('<span class="name svelte-u0xdy"><!> </span>'),oo=z("<span><!><!></span>");function Le(o,t){const e=ot(t,"name",3,"Cat"),a=ot(t,"icon",3,"😺"),l=ot(t,"show_name",3,!0),c=ot(t,"show_icon",3,!0);var r=oo();let h;var k=$(r);{var C=i=>{var p=eo(),u=$(p,!0);y(p),nt(()=>dt(u,a())),s(i,p)};B(k,i=>{c()&&i(C)})}var P=v(k);{var S=i=>{var p=no(),u=$(p);ut(u,()=>t.children??ue);var x=v(u,1,!0);y(p),nt(()=>dt(x,e())),s(i,p)};B(P,i=>{l()&&i(S)})}y(r),nt(i=>h=gt(r,1,"cat svelte-u0xdy",null,h,i),[()=>({"has-icon":c()})]),s(o,r)}const so=`<script lang="ts">
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
`;var ao=z("<!> <!>",1),ro=z('<div class="cat_wrapper svelte-1b1oync"><!></div>'),io=z('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),lo=z('<div class="cat_wrapper svelte-1b1oync"><!></div>'),co=z('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),uo=z("<section><!> <!></section> <section><!></section>",1),_o=z("<!> <!>",1),mo=z('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),vo=z("<!> <!>",1);function ho(o,t){mt(t,!0);const e="Alyssa",a="Ben",l="home";let c=D(l),r=D(l);const h=V(()=>n(c)===n(r)?"😺":"😾"),k=V(()=>n(c)===n(r)?"😸":"😿"),C=V(()=>({name:e,icon:n(h),position:n(c)})),P=V(()=>({name:a,icon:n(k),position:n(r)}));let S=D(!1);const i=(W,J)=>{const Z=[],X=[];for(const j of W){const tt=j.position==="home"?Z:X;J?tt.unshift(j):tt.push(j)}return{home_cats:Z,adventure_cats:X}},p=V(()=>i([n(C),n(P)],n(S))),u=V(()=>n(p).home_cats),x=V(()=>n(p).adventure_cats),f=V(()=>n(c)!==l||n(r)!==l),d=()=>{m(c,l),m(r,l)};let w=D(!1);const b=()=>{m(w,!n(w))},R=W=>{switch(W.type){case"call_cats_adventure":{m(c,"adventure"),m(r,"adventure");break}case"call_cats_home":{m(c,"home"),m(r,"home");break}case"cat_go_adventure":{W.name===e?m(c,"adventure"):W.name===a&&m(r,"adventure");break}case"cat_go_home":{W.name===e?m(c,"home"):W.name===a&&m(r,"home");break}case"cat_be_or_do":{m(S,!n(S));break}}},[O,T]=sn({fallback:(W,J)=>{const Z=window.getComputedStyle(W),X=Z.transform==="none"?"":Z.transform;return{duration:1500,easing:Cn,css:j=>`
					transform: ${X} scale(${j});
					opacity: ${j}
				`}}});var I=vo(),L=U(I);ne(L,{scoped:!0,children:(W,J)=>{St(W,{children:(Z,X)=>{var j=_o(),tt=U(j);At(tt,{text:"Full example"});var lt=v(tt,2);kt(lt,{entries:$t=>{var xt=ao(),bt=U(xt);{var Q=wt=>{Ye(wt,{run:d,content:"Reset",icon:"↻"})};B(bt,wt=>{n(f)&&wt(Q)})}var yt=v(bt,2);jn(yt,{toggle_about_dialog:b}),s($t,xt)},children:($t,xt)=>{var bt=uo(),Q=U(bt),yt=$(Q);kt(yt,{entries:_=>{Jn(_,{act:R,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(_,q)=>{var H=io(),F=v($(H),2);Mt(F,29,()=>n(u),({name:ht,icon:_t,position:rt})=>ht,(ht,_t)=>{let rt=()=>n(_t).name,Tt=()=>n(_t).icon,pt=()=>n(_t).position;var et=ro(),It=$(et);kt(It,{entries:at=>{ie(at,{act:R,get name(){return rt()},get icon(){return Tt()},get position(){return pt()}})},children:(at,ve)=>{Le(at,{get name(){return rt()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>T,()=>({key:rt()})),Ot(2,et,()=>O,()=>({key:rt()})),Oe(et,()=>Fe,null),s(ht,et)}),y(F),y(H),s(_,H)},$$slots:{entries:!0,default:!0}});var wt=v(yt,2);kt(wt,{entries:_=>{to(_,{act:R,get home_cats(){return n(u)},get adventure_cats(){return n(x)}})},children:(_,q)=>{var H=co(),F=v($(H),2);Mt(F,29,()=>n(x),({name:ht,icon:_t,position:rt})=>ht,(ht,_t)=>{let rt=()=>n(_t).name,Tt=()=>n(_t).icon,pt=()=>n(_t).position;var et=lo(),It=$(et);kt(It,{entries:at=>{ie(at,{act:R,get name(){return rt()},get icon(){return Tt()},get position(){return pt()}})},children:(at,ve)=>{Le(at,{get name(){return rt()},get icon(){return Tt()}})},$$slots:{entries:!0,default:!0}}),y(et),Ot(1,et,()=>T,()=>({key:rt()})),Ot(2,et,()=>O,()=>({key:rt()})),Oe(et,()=>Fe,null),s(ht,et)}),y(F),y(H),s(_,H)},$$slots:{entries:!0,default:!0}}),y(Q);var oe=v(Q,2),_e=$(oe);dn(_e,{summary:_=>{M();var q=E("View example source");s(_,q)},children:(_,q)=>{Rt(_,{content:so})},$$slots:{summary:!0,default:!0}}),y(oe),s($t,bt)}}),s(Z,j)},$$slots:{default:!0}})},$$slots:{default:!0}});var G=v(L,2);{var K=W=>{cn(W,{onclose:()=>m(w,!1),children:(J,Z)=>{var X=mo(),j=v($(X),8),tt=v($(j),2);vn(tt,{});var lt=v(tt,4);hn(lt,{}),y(j),y(X),s(J,X)},$$slots:{default:!0}})};B(G,W=>{n(w)&&W(K)})}s(o,I),vt()}var po=z("<!> <!> <!>",1),fo=z(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),go=z("<!> <!>",1);function xo(o){let t=D(!1),e=D(!1),a=D(!1);ne(o,{scoped:!0,children:(l,c)=>{St(l,{children:(r,h)=>{var k=go(),C=U(k);At(C,{text:"Basic usage"});var P=v(C,2);kt(P,{entries:i=>{var p=po(),u=U(p);st(u,{run:()=>m(t,!n(t)),children:(d,w)=>{M();var b=E("Hello world");s(d,b)},$$slots:{default:!0}});var x=v(u,2);st(x,{run:()=>m(e,!n(e)),icon:w=>{M();var b=E("🌞");s(w,b)},children:(w,b)=>{M();var R=E("Hello with an optional icon snippet");s(w,R)},$$slots:{icon:!0,default:!0}});var f=v(x,2);st(f,{run:()=>m(a,!n(a)),icon:"🌚",children:(d,w)=>{M();var b=E("Hello with an optional icon string");s(d,b)},$$slots:{default:!0}}),s(i,p)},children:(i,p)=>{var u=fo(),x=v($(u),2);const f=V(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Rt(x,{get content(){return n(f)}});var d=v(x,2),w=$(d);let b;var R=$(w);y(w),y(d);var O=v(d,2),T=$(O);let I;var L=$(T);y(T),y(O);var G=v(O,2),K=$(G);let W;var J=$(K);y(K),y(G),M(2),y(u),nt((Z,X,j)=>{b=gt(w,1,"",null,b,Z),dt(R,`greeted = ${n(t)??""}`),I=gt(T,1,"",null,I,X),dt(L,`greeted_icon_snippet = ${n(e)??""}`),W=gt(K,1,"",null,W,j),dt(J,`greeted_icon_string = ${n(a)??""}`)},[()=>({color_g_5:n(t)}),()=>({color_e_5:n(e)}),()=>({color_d_5:n(a)})]),s(i,u)}}),s(r,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}var bo=z("<div>toggled</div>"),yo=z(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),wo=z("<!> <!>",1);function $o(o,t){mt(t,!0);const e=new Pe;let a=D(!1);ne(o,{contextmenu:e,scoped:!0,children:(l,c)=>{St(l,{children:(r,h)=>{var k=wo(),C=U(k);At(C,{text:"Custom instance"});var P=v(C,2);kt(P,{entries:i=>{st(i,{run:()=>m(a,!n(a)),children:(p,u)=>{M();var x=E("Toggle");s(p,x)},$$slots:{default:!0}})},children:(i,p)=>{var u=yo(),x=$(u);Rt(x,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var f=v(x,2);Rt(f,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var d=v(f,4),w=$(d);{var b=R=>{var O=bo();Ot(3,O,()=>an),s(R,O)};B(w,R=>{n(a)&&R(b)})}y(d),y(u),s(i,u)}}),s(r,k)},$$slots:{default:!0}})},$$slots:{default:!0}}),vt()}const ko=(o,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var Co=z(`<div><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),To=z("<div><!></div> <!>",1);function Io(o,t){mt(t,!0);const e=new Pe;let a=D(!1),l=D(void 0),c=D("");const r="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",h=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,k=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=V(()=>n(c)===r||n(c)===h||n(c)===k);ne(o,{contextmenu:e,scoped:!0,children:(P,S)=>{St(P,{children:(i,p)=>{var u=To(),x=U(u);let f;var d=$(x);At(d,{text:"Select text"}),y(x);var w=v(x,2);kt(w,{entries:R=>{st(R,{run:()=>m(a,!n(a)),children:(O,T)=>{M();var I=E("Toggle something");s(O,I)},$$slots:{default:!0}})},children:(R,O)=>{var T=Co();let I;var L=$(T),G=v($(L),2),K=v($(G));K.__click=[ko,l];let W;M(),y(G),y(L),Ie(L,Q=>m(l,Q),()=>n(l));var J=v(L,2),Z=$(J);rn(Z),y(J);var X=v(J,2);let j;var tt=v(X,2),lt=$(tt);Qe(lt),y(tt);var N=v(tt,2),$t=$(N);se($t,{path:"Web/HTML/Global_attributes/contenteditable"}),M(),y(N);var xt=v(N,4),bt=v(xt,4);y(T),nt((Q,yt,wt)=>{I=gt(T,1,"panel p_md",null,I,Q),W=gt(K,1,"",null,W,yt),j=gt(X,1,"",null,j,wt)},[()=>({color_g_5:n(C)}),()=>({color_a:n(a)}),()=>({color_g_5:n(C)})]),Re(Z,()=>n(c),Q=>m(c,Q)),Re(lt,()=>n(c),Q=>m(c,Q)),Me("innerText",xt,()=>n(c),Q=>m(c,Q)),Me("innerText",bt,()=>n(c),Q=>m(c,Q)),s(R,T)}}),nt(b=>f=gt(x,1,"",null,f,b),[()=>({color_d_5:n(C)})]),s(i,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),vt()}Ce(["click"]);var Po=z(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function So(o){ne(o,{scoped:!0,children:(t,e)=>{St(t,{children:(a,l)=>{var c=Po(),r=U(c);At(r,{text:"Default behaviors"});var h=v(r,2),k=$(h);Rt(k,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),M(6),y(h),s(a,c)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Ao=z("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function es(o,t){mt(t,!0);const a=on("Contextmenu");nn(o,{tome:a,children:(l,c)=>{var r=Ao(),h=v(U(r),2);xo(h);var k=v(h,2);So(k);var C=v(k,2);$o(C,{});var P=v(C,2);Io(P,{});var S=v(P,2);ho(S,{});var i=v(S,2);$n(i),s(l,r)},$$slots:{default:!0}}),vt()}export{es as component};
