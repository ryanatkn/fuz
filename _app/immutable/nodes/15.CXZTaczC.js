var Ze=Object.defineProperty;var ze=o=>{throw TypeError(o)};var Je=(o,t,e)=>t in o?Ze(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var ut=(o,t,e)=>Je(o,typeof t!="symbol"?t+"":t,e),fe=(o,t,e)=>t.has(o)||ze("Cannot "+e);var z=(o,t,e)=>(fe(o,t,"read from private field"),e?e.call(o):t.get(o)),G=(o,t,e)=>t.has(o)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),ge=(o,t,e,a)=>(fe(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e),Ee=(o,t,e)=>(fe(o,t,"access private method"),e);import{t as E,a as s,k as Ce,j as O,c as at,m as We,y as Qe,z as tn}from"../chunks/CbbyqTNh.js";import{m as en,u as nn,f as q,s as p,k as T,a0 as R,l as w,a2 as D,g as n,G as h,p as vt,t as Z,d as X,a as ht,R as Dt,as as Tt,$ as me}from"../chunks/C9aPwLmV.js";import{T as on}from"../chunks/Df0qsIkI.js";import{g as sn}from"../chunks/Duboql-E.js";import{M as ae}from"../chunks/LHJSIGwR.js";import{T as It,a as Pt}from"../chunks/jxNXDam6.js";import{p as W,i as B}from"../chunks/DSlEI_lp.js";import{c as Te,e as Rt}from"../chunks/DT_pRE8c.js";import{t as Nt,c as an,a as Oe,s as rn}from"../chunks/BIdpjkft.js";import{C as Mt}from"../chunks/B0TzJDWH.js";import{b as ce,s as dt,r as cn}from"../chunks/DGBAUQNC.js";import{a as ct}from"../chunks/BTGG-Xgr.js";import{s as re}from"../chunks/PwPRnE0L.js";import{b as Ie}from"../chunks/C4iwTAZ8.js";import{p as tt,s as Ue}from"../chunks/2t0GVDdd.js";import{a as ln,s as zt,b as xe,c as Ne,D as un}from"../chunks/CpPa2AI6.js";import{o as De}from"../chunks/CM252P3v.js";import{s as mt}from"../chunks/Bb4_Y-AM.js";import{a as be}from"../chunks/ZJuK4sHN.js";import{t as pt}from"../chunks/cfbZBCHI.js";import{P as dn}from"../chunks/CNbsQF5c.js";import{D as mn,b as Re}from"../chunks/B0X7iCCS.js";import{S as _n,g as vn}from"../chunks/BohrdWfv.js";import{C as hn,T as pn}from"../chunks/BsG4N6jm.js";import{b as Me}from"../chunks/1Saa3kjD.js";var bt,Et,qt,ue,Be;const de=class de{constructor(t){G(this,ue);G(this,bt,new WeakMap);G(this,Et);G(this,qt);ge(this,qt,t)}observe(t,e){var a=z(this,bt).get(t)||new Set;return a.add(e),z(this,bt).set(t,a),Ee(this,ue,Be).call(this).observe(t,z(this,qt)),()=>{var i=z(this,bt).get(t);i.delete(e),i.size===0&&(z(this,bt).delete(t),z(this,Et).unobserve(t))}}};bt=new WeakMap,Et=new WeakMap,qt=new WeakMap,ue=new WeakSet,Be=function(){return z(this,Et)??ge(this,Et,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var a of z(this,bt).get(e.target)||[])a(e)}}))},ut(de,"entries",new WeakMap);let $e=de;var fn=new $e({box:"border-box"});function qe(o,t,e){var a=fn.observe(o,()=>e(o[t]));en(()=>(nn(()=>e(o[t])),a))}var gn=E('<span class="font_mono">contextmenu</span> event',1),xn=E('<span class="font_mono">navigator.vibrate</span>'),bn=E('<span class="font_mono">navigator.vibrate</span>'),yn=E(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
		what I can to minimize the harmful effects of choices like this.</p> <p>Mitigations:</p> <ul><li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables.</li> <li>To bypass the Fuz contextmenu on a device with a keyboard, hold the Shift key.</li> <li>To bypass the Fuz contextmenu on a touch device, like to select text, tap one extra time
			before your longpress. This means double-tap-and-hold should behave the same as tap-and-hold
			on standard web pages.</li> <li>Triggering the contextmenu inside of the Fuz contextmenu shows your system contextmenu. This
			means you can either double-right-click or longpress twice to access your system contextmenu
			as an alternative to holding Shift or double-tap-and-hold, However a caveat is that the target
			of your action will be some element inside the Fuz contextmenu, so to select text or access a
			link's system contextmenu on a touch device, you must use double-tap-and-hold. When you open
			the Fuz contextmenu on a link, you'll see the link again in the menu under your pointer by
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),$n=E("<!> <!>",1);function kn(o){var t=$n(),e=q(t);It(e,{children:(i,c)=>{var r=yn(),f=q(r);Pt(f,{text:"Expected behaviors"});var I=p(f,4),C=p(T(I));ae(C,{path:"Web/API/Element/contextmenu_event",children:(_,b)=>{var x=gn();R(),s(_,x)},$$slots:{default:!0}});var S=p(C,4);ae(S,{path:"Web/API/Navigator/vibrate",children:(_,b)=>{var x=xn();s(_,x)},$$slots:{default:!0}}),R(),w(I);var $=p(I,10),l=p(T($),10),v=p(T(l));ae(v,{path:"Web/API/Navigator/vibrate",children:(_,b)=>{var x=bn();s(_,x)},$$slots:{default:!0}}),R(),w(l),w($),s(i,r)},$$slots:{default:!0}});var a=p(e,2);It(a,{children:(i,c)=>{var r=wn(),f=q(r);Pt(f,{text:"Motivation"}),R(14),s(i,r)},$$slots:{default:!0}}),s(o,t)}function Cn(o){const t=o-1;return t*t*t+1}function Tn(o){return--o*o*o*o*o+1}function Fe(o,{from:t,to:e},a={}){var{delay:i=0,duration:c=y=>Math.sqrt(y)*120,easing:r=Cn}=a,f=getComputedStyle(o),I=f.transform==="none"?"":f.transform,[C,S]=f.transformOrigin.split(" ").map(parseFloat);C/=o.clientWidth,S/=o.clientHeight;var $=In(o),l=o.clientWidth/e.width/$,v=o.clientHeight/e.height/$,_=t.left+t.width*C,b=t.top+t.height*S,x=e.left+e.width*C,u=e.top+e.height*S,m=(_-x)*l,A=(b-u)*v,F=t.width/e.width,k=t.height/e.height;return{delay:i,duration:typeof c=="function"?c(Math.sqrt(m*m+A*A)):c,easing:r,css:(y,N)=>{var V=N*m,et=N*A,K=y+N*F,U=y+N*k;return`transform: ${I} translate(${V}px, ${et}px) scale(${K}, ${U});`}}}function In(o){if("currentCSSZoom"in o)return o.currentCSSZoom;for(var t=o,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Ft,Ht;class Ve{constructor(){G(this,Ft,D(0));G(this,Ht,D(0))}get width(){return n(z(this,Ft))}set width(t){h(z(this,Ft),W(t))}get height(){return n(z(this,Ht))}set height(t){h(z(this,Ht),W(t))}}Ft=new WeakMap,Ht=new WeakMap;var Lt,Wt,Ut,Bt,Vt;class Pn{constructor(t,e){ut(this,"is_menu",!1);ut(this,"menu");G(this,Lt,D(!1));G(this,Wt,D());G(this,Ut,D(!1));G(this,Bt,D(null));G(this,Vt,D(null));this.menu=t,this.run=e}get selected(){return n(z(this,Lt))}set selected(t){h(z(this,Lt),W(t))}get run(){return n(z(this,Wt))}set run(t){h(z(this,Wt),W(t))}get pending(){return n(z(this,Ut))}set pending(t){h(z(this,Ut),W(t))}get error_message(){return n(z(this,Bt))}set error_message(t){h(z(this,Bt),W(t))}get promise(){return n(z(this,Vt))}set promise(t){h(z(this,Vt),W(t))}}Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,Bt=new WeakMap,Vt=new WeakMap;var Xt,Yt;class Sn{constructor(t,e){ut(this,"is_menu",!0);ut(this,"menu");ut(this,"depth");G(this,Xt,D(!1));G(this,Yt,D(W([])));this.menu=t,this.depth=e}get selected(){return n(z(this,Xt))}set selected(t){h(z(this,Xt),W(t))}get items(){return n(z(this,Yt))}set items(t){h(z(this,Yt),W(t))}}Xt=new WeakMap,Yt=new WeakMap;var Gt;class An{constructor(){ut(this,"is_menu",!0);ut(this,"menu",null);ut(this,"depth",1);G(this,Gt,D(W([])))}get items(){return n(z(this,Gt))}set items(t){h(z(this,Gt),W(t))}}Gt=new WeakMap;var jt,Kt,Zt,Jt,Qt,te,ee;class Pe{constructor(t){ut(this,"layout");ut(this,"initial_layout");G(this,jt,D(!1));G(this,Kt,D(0));G(this,Zt,D(0));G(this,Jt,D(W([])));G(this,Qt,D());G(this,te,D(W(new An)));G(this,ee,D(W([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ve}get opened(){return n(z(this,jt))}set opened(t){h(z(this,jt),W(t))}get x(){return n(z(this,Kt))}set x(t){h(z(this,Kt),W(t))}get y(){return n(z(this,Zt))}set y(t){h(z(this,Zt),W(t))}get params(){return n(z(this,Jt))}set params(t){h(z(this,Jt),W(t))}get error(){return n(z(this,Qt))}set error(t){h(z(this,Qt),W(t))}get root_menu(){return n(z(this,te))}set root_menu(t){h(z(this,te),W(t))}get selections(){return n(z(this,ee))}set selections(t){h(z(this,ee),W(t))}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const i=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=i??"unknown error",this.error=i}if(ln(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(i=>{if(a===t.promise){if(typeof(i==null?void 0:i.ok)=="boolean")if(i.ok)this.close();else{const c=typeof i.message=="string"?i.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return i}},i=>{if(a!==t.promise)return;const c=typeof(i==null?void 0:i.message)=="string"?i.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=we.maybe_get()??this.root_menu,a=new Pn(e,t);return e.items.push(a),De(()=>{e.items.length=0}),a}add_submenu(){const t=we.maybe_get()??this.root_menu,e=new Sn(t,t.depth+1);return t.items.push(e),we.set(e),De(()=>{t.items.length=0}),e}}jt=new WeakMap,Kt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,te=new WeakMap,ee=new WeakMap;const Se="contextmenu",zn=`a,[data-${Se}]`,ie=new Map;let En=0;const ye=(o,t)=>{if(t==null)return;const e=En+++"";return o.dataset[Se]=e,ie.set(e,t),{update:a=>{ie.set(e,a)},destroy:()=>{ie.delete(e)}}},On=17,He=(o,t,e,a)=>{const i=Nn(o);return i!=null&&i.length?(a.open(i,t,e),navigator.vibrate&&navigator.vibrate(On),!0):!1},Nn=o=>{var c;let t=null,e=o,a,i;for(;e=e==null?void 0:e.closest(zn);){if(a=e.dataset[Se]){if(t??(t=[]),i=ie.get(a),i===void 0)continue;Array.isArray(i)?(t??(t=[])).push(...i):(t??(t=[])).push(i)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const r=(c=window.getSelection())==null?void 0:c.toString();r&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(r)}})}return t},_e=Te(),we=Te(),ke=Te(()=>new Ve);var Dn=(o,t)=>t.close(),Rn=E('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Xe(o,t){vt(t,!0);const e="🔗",a=tt(t,"icon",3,e),i=_e.get(),c=(k,y=location.host)=>{const N=be(be(k,"https://"),"http://");return N.startsWith(y+"/")?be(N,y):N},r=X(()=>c(t.href)),f=X(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),I=X(()=>n(f)?"noreferrer":void 0);var C=Rn(),S=T(C);S.__click=[Dn,i];var $=T(S),l=T($),v=T(l);{var _=k=>{var y=O();Z(()=>mt(y,a())),s(k,y)},b=k=>{var y=at(),N=q(y);dt(N,a,()=>e),s(k,y)};B(v,k=>{typeof a()=="string"?k(_):k(b,!1)})}w(l);var x=p(l,2),u=T(x),m=T(u);{var A=k=>{var y=at(),N=q(y);dt(N,()=>t.children),s(k,y)},F=k=>{var y=O();Z(()=>mt(y,n(r))),s(k,y)};B(m,k=>{t.children?k(A):k(F,!1)})}w(u),w(x),w($),w(S),w(C),Z(()=>{ce(S,"href",t.href),ce(S,"rel",n(I))}),s(o,C),ht()}Ce(["click"]);var Mn=E('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function ot(o,t){vt(t,!0);const e=_e.get(),a=e.add_entry(t.run);Dt(()=>{a.run=t.run});const i=X(()=>a.selected),c=X(()=>a.pending),r=X(()=>a.error_message);var f=Mn();f.__click=()=>{setTimeout(()=>e.activate(a))};var I=T(f),C=T(I),S=T(C);{var $=m=>{var A=O();Z(()=>mt(A,t.icon)),s(m,A)},l=m=>{var A=at(),F=q(A);{var k=y=>{var N=at(),V=q(N);dt(V,()=>t.icon),s(y,N)};B(F,y=>{t.icon&&y(k)},!0)}s(m,A)};B(S,m=>{typeof t.icon=="string"?m($):m(l,!1)})}w(C);var v=p(C,2),_=T(v);dt(_,()=>t.children),w(v);var b=p(v,2);{var x=m=>{dn(m,{})},u=m=>{var A=at(),F=q(A);{var k=y=>{var N=O("⚠️");s(y,N)};B(F,y=>{n(r)&&y(k)},!0)}s(m,A)};B(b,m=>{n(c)?m(x):m(u,!1)})}w(I),w(f),Z(()=>{ce(f,"title",n(r)?`Error: ${n(r)}`:void 0),pt(f,"selected",n(i))}),We("mouseenter",f,m=>{zt(m),e.select(a)}),s(o,f),ht()}Ce(["click"]);function Ye(o,t){ot(o,{get run(){return t.run},icon:a=>{R();var i=O();Z(()=>mt(i,t.icon)),s(a,i)},children:(a,i)=>{R();var c=O();Z(()=>mt(c,t.content)),s(a,c)},$$slots:{icon:!0,default:!0}})}const qn=(o,t=me)=>{Xe(o,Ue(t))},Fn=(o,t=me)=>{Ye(o,Ue(t))};var Hn=E('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Ln=E('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Wn=E('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Un=E("<!> <!> <!>",1);function ne(o,t){vt(t,!0);const e=tt(t,"contextmenu",19,()=>new Pe),a=tt(t,"longpress_move_tolerance",3,21),i=tt(t,"longpress_duration",3,633),c=tt(t,"bypass_with_tap_then_longpress",3,!0),r=tt(t,"tap_then_longpress_duration",3,660),f=tt(t,"tap_then_longpress_move_tolerance",3,7),I=tt(t,"open_offset_x",19,()=>-2),C=tt(t,"open_offset_y",19,()=>-2),S=tt(t,"scoped",3,!1);_e.set(e());let $=D(void 0);const l=X(()=>e().layout),v=X(()=>e().initial_layout),_=X(()=>n(l)===n(v));let b=D(void 0),x=D(void 0);Dt(()=>{!n(_)&&n(b)!==void 0&&(n(l).width=n(b))}),Dt(()=>{!n(_)&&n(x)!==void 0&&(n(l).height=n(x))});const u=ke.set();Dt(()=>{if(n($)){const g=n($).getBoundingClientRect();u.width=g.width,u.height=g.height}});const m=X(()=>e().x+Math.min(0,n(l).width-(e().x+u.width))),A=X(()=>e().y+Math.min(0,n(l).height-(e().y+u.height)));let F=D(void 0),k=D(void 0),y=D(void 0),N=D(void 0),V=D(void 0),et=D(void 0);const K=()=>{n(V)&&h(V,!1),n(N)!=null&&(clearTimeout(n(N)),h(N,null))},U=g=>{var M;if(n(et)){h(et,!1);return}if(n(V)){K(),zt(g);return}const{target:d}=g;g.shiftKey||!(d instanceof HTMLElement||d instanceof SVGElement)||(M=n($))!=null&&M.contains(d)||xe(d)||Ne(d)||He(d,g.clientX+I(),g.clientY+C(),e())&&(zt(g),K())},nt=g=>{n(V)&&h(V,!1);const{touches:d,target:M}=g;if(e().opened||d.length!==1||g.shiftKey||!(M instanceof HTMLElement||M instanceof SVGElement)||xe(M)||Ne(M))return;const{clientX:H,clientY:L}=d[0];if(c()){if(n(y)!=null&&performance.now()-n(y)<r()&&Math.hypot(H-n(F),L-n(k))<f()){h(et,!0),h(y,null);return}h(y,W(performance.now()))}h(F,W(H)),h(k,W(L)),n(N)!=null&&K(),h(N,W(setTimeout(()=>{h(V,!0),He(M,n(F)+I(),n(k)+C(),e())},i())))},Q=g=>{if(n(N)==null)return;const{touches:d}=g;if(d.length!==1)return;const{clientX:M,clientY:H}=d[0];Math.hypot(M-n(F),H-n(k))>a()&&(e().opened&&e().close(),K())},Y=g=>{n(N)!=null&&(n(V)&&zt(g),K())},j=g=>{n($)&&!n($).contains(g.target)&&e().close()},rt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),yt=g=>{const d=rt.get(g.key);!d||xe(g.target)||(zt(g),d())},P=(g,d)=>{let M=null;const H=L=>{M&&(M(),M=null),L.disabled||(M=Qe(g,L.event,L.cb,{capture:!0,passive:L.passive}))};return H(d),{update:L=>{H(L)},destroy:()=>{M==null||M()}}};var St=Un();ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"contextmenu",passive:!1,cb:U,disabled:S()})),ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"touchstart",passive:!0,cb:nt,disabled:S()})),ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"touchmove",passive:!0,cb:Q,disabled:S()})),ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"touchend",passive:!1,cb:Y,disabled:S()})),ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"touchcancel",passive:!1,cb:Y,disabled:S()})),ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"mousedown",passive:!0,cb:j,disabled:!e().opened})),ct(Tt,(g,d)=>P==null?void 0:P(g,d),()=>({event:"keydown",passive:!1,cb:yt,disabled:!e().opened}));var At=q(St);{var wt=g=>{var d=Hn(),M=T(d);dt(M,()=>t.children),w(d),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"contextmenu",passive:!1,cb:U})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchstart",passive:!0,cb:nt})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchmove",passive:!0,cb:Q})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchend",passive:!1,cb:Y})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchcancel",passive:!1,cb:Y})),s(g,d)},$t=g=>{var d=at(),M=q(d);dt(M,()=>t.children),s(g,d)};B(At,g=>{S()?g(wt):g($t,!1)})}var kt=p(At,2);{var Ct=g=>{var d=Ln();qe(d,"clientHeight",M=>h(x,M)),qe(d,"clientWidth",M=>h(b,M)),s(g,d)};B(kt,g=>{n(_)||g(Ct)})}var oe=p(kt,2);{var ve=g=>{var d=Wn();Rt(d,20,()=>e().params,M=>M,(M,H)=>{var L=at(),ft=q(L);{var _t=lt=>{var gt=at(),J=q(gt);dt(J,()=>H),s(lt,gt)},it=lt=>{var gt=at(),J=q(gt);{var Ot=st=>{qn(st,()=>H.props)},he=st=>{var se=at(),je=q(se);{var Ke=pe=>{Fn(pe,()=>H.props)};B(je,pe=>{H.snippet==="text"&&pe(Ke)},!0)}s(st,se)};B(J,st=>{H.snippet==="link"?st(Ot):st(he,!1)},!0)}s(lt,gt)};B(ft,lt=>{typeof H=="function"?lt(_t):lt(it,!1)})}s(M,L)}),w(d),Ie(d,M=>h($,M),()=>n($)),Z(()=>re(d,"transform",`translate3d(${n(m)??""}px, ${n(A)??""}px, 0)`)),s(g,d)};B(oe,g=>{e().opened&&g(ve)})}s(o,St),ht()}var Bn=E('<span class="display_contents"><!></span>');function xt(o,t){var e=Bn(),a=T(e);dt(a,()=>t.children),w(e),ct(e,(i,c)=>ye==null?void 0:ye(i,c),()=>t.entries),s(o,e)}var Vn=E('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Xn=E('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ae(o,t){vt(t,!0);const e=_e.get(),a=e.add_submenu(),{layout:i}=e,c=X(()=>a.selected);let r=D(void 0);const f=ke.get(),I=ke.set();let C=D(0),S=D(0);Dt(()=>{n(r)&&$(n(r),i,f)});const $=(k,y,N)=>{const{x:V,y:et,width:K,height:U}=k.getBoundingClientRect();I.width=K,I.height=U;const nt=V-n(C),Q=et-n(S),Y=nt+K+N.width-y.width;if(Y<=0)h(C,W(N.width));else{const j=K-nt;j<=0?h(C,-K):j>Y?h(C,N.width-Y):h(C,j-K)}h(S,W(Math.min(0,y.height-(Q+U))))};var l=Xn(),v=T(l),_=T(v),b=T(_),x=T(b);dt(x,()=>t.icon??me),w(b);var u=p(b,2),m=T(u);dt(m,()=>t.children),w(u),w(_),R(2),w(v);var A=p(v,2);{var F=k=>{var y=Vn(),N=T(y);dt(N,()=>t.menu),w(y),Ie(y,V=>h(r,V),()=>n(r)),Z(()=>{re(y,"transform",`translate3d(${n(C)??""}px, ${n(S)??""}px, 0)`),re(y,"max-height",`${i.height??""}px`)}),s(k,y)};B(A,k=>{n(c)&&k(F)})}w(l),Z(()=>{re(l,"--contextmenu_depth",a.depth),ce(v,"aria-expanded",n(c)),pt(v,"selected",n(c))}),We("mouseenter",v,k=>{zt(k),setTimeout(()=>e.select(a))}),s(o,l),ht()}var Yn=E("<!> <!>",1);function le(o,t){vt(t,!0);const e=tt(t,"name",3,"Cat"),a=tt(t,"icon",3,"😺");Ae(o,{icon:r=>{R();var f=O();Z(()=>mt(f,a())),s(r,f)},menu:r=>{var f=Yn(),I=q(f);ot(I,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:$=>{var l=at(),v=q(l);{var _=x=>{var u=O("🏠");s(x,u)},b=x=>{var u=O("🌄");s(x,u)};B(v,x=>{t.position==="adventure"?x(_):x(b,!1)})}s($,l)},children:($,l)=>{var v=at(),_=q(v);{var b=u=>{var m=O("go home");s(u,m)},x=u=>{var m=O("go adventure");s(u,m)};B(_,u=>{t.position==="adventure"?u(b):u(x,!1)})}s($,v)},$$slots:{icon:!0,default:!0}});var C=p(I,2);ot(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:$=>{var l=at(),v=q(l);{var _=x=>{var u=O("🌄");s(x,u)},b=x=>{var u=O("🏠");s(x,u)};B(v,x=>{t.position==="adventure"?x(_):x(b,!1)})}s($,l)},children:($,l)=>{var v=at(),_=q(v);{var b=u=>{var m=O("do adventure");s(u,m)},x=u=>{var m=O("be home");s(u,m)};B(_,u=>{t.position==="adventure"?u(b):u(x,!1)})}s($,v)},$$slots:{icon:!0,default:!0}}),s(r,f)},children:(r,f)=>{R();var I=O();Z(()=>mt(I,e())),s(r,I)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var Gn=E("<!> <!>",1);function jn(o,t){var e=Gn(),a=q(e);Xe(a,{href:"https://github.com/ryanatkn/fuz",icon:r=>{_n(r,{data:vn,size:"var(--icon_size_xs)"})},children:(r,f)=>{R();var I=O("Source code");s(r,I)},$$slots:{icon:!0,default:!0}});var i=p(a,2);ot(i,{get run(){return t.toggle_about_dialog},icon:r=>{R();var f=O("?");s(r,f)},children:(r,f)=>{R();var I=O("About");s(r,I)},$$slots:{icon:!0,default:!0}}),s(o,e)}const Ge=o=>{const t=o.length;if(t===2)return"cats";if(t===0)return null;const e=o[0];return e.icon+e.name};var Kn=E("<!> <!>",1),Zn=E("<!> <!> <!>",1);function Jn(o,t){vt(t,!0);const e=X(()=>Ge(t.adventure_cats));Ae(o,{icon:c=>{R();var r=O("🏠");s(c,r)},menu:c=>{var r=Zn(),f=q(r);{var I=l=>{ot(l,{run:()=>t.act({type:"call_cats_home"}),icon:_=>{R();var b=O("🐈‍⬛");s(_,b)},children:(_,b)=>{R();var x=O("call");s(_,x)},$$slots:{icon:!0,default:!0}})};B(f,l=>{n(e)&&l(I)})}var C=p(f,2);Rt(C,17,()=>t.home_cats,l=>l.name,(l,v)=>{le(l,{get name(){return n(v).name},get icon(){return n(v).icon},get position(){return n(v).position},get act(){return t.act}})});var S=p(C,2);{var $=l=>{var v=Kn(),_=q(v);ot(_,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:u=>{R();var m=O("🏠");s(u,m)},children:(u,m)=>{R();var A=O("be");s(u,A)},$$slots:{icon:!0,default:!0}});var b=p(_,2);ot(b,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{R();var m=O("🦋");s(u,m)},children:(u,m)=>{R();var A=O("leave");s(u,A)},$$slots:{icon:!0,default:!0}}),s(l,v)};B(S,l=>{n(e)||l($)})}s(c,r)},children:(c,r)=>{R();var f=O("home");s(c,f)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var Qn=E("<!> <!>",1),to=E("<!> <!> <!>",1);function eo(o,t){vt(t,!0);const e=X(()=>Ge(t.home_cats));Ae(o,{icon:c=>{R();var r=O("🌄");s(c,r)},menu:c=>{var r=to(),f=q(r);{var I=l=>{ot(l,{run:()=>t.act({type:"call_cats_adventure"}),icon:_=>{R();var b=O("🦋");s(_,b)},children:(_,b)=>{R();var x=O("call");s(_,x)},$$slots:{icon:!0,default:!0}})};B(f,l=>{n(e)&&l(I)})}var C=p(f,2);Rt(C,17,()=>t.adventure_cats,l=>l.name,(l,v)=>{le(l,{get name(){return n(v).name},get icon(){return n(v).icon},get position(){return n(v).position},get act(){return t.act}})});var S=p(C,2);{var $=l=>{var v=Qn(),_=q(v);ot(_,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:u=>{R();var m=O("🌄");s(u,m)},children:(u,m)=>{R();var A=O("do");s(u,A)},$$slots:{icon:!0,default:!0}});var b=p(_,2);ot(b,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{R();var m=O("🐈‍⬛");s(u,m)},children:(u,m)=>{R();var A=O("leave");s(u,A)},$$slots:{icon:!0,default:!0}}),s(l,v)};B(S,l=>{n(e)||l($)})}s(c,r)},children:(c,r)=>{R();var f=O("adventure");s(c,f)},$$slots:{icon:!0,menu:!0,default:!0}}),ht()}var no=E('<span class="icon svelte-u0xdy"> </span>'),oo=E('<span class="name svelte-u0xdy"><!> </span>'),so=E('<span class="cat svelte-u0xdy"><!><!></span>');function Le(o,t){const e=tt(t,"name",3,"Cat"),a=tt(t,"icon",3,"😺"),i=tt(t,"show_name",3,!0),c=tt(t,"show_icon",3,!0);var r=so(),f=T(r);{var I=$=>{var l=no(),v=T(l,!0);w(l),Z(()=>mt(v,a())),s($,l)};B(f,$=>{c()&&$(I)})}var C=p(f);{var S=$=>{var l=oo(),v=T(l);dt(v,()=>t.children??me);var _=p(v,1,!0);w(l),Z(()=>mt(_,e())),s($,l)};B(C,$=>{i()&&$(S)})}w(r),Z(()=>pt(r,"has-icon",c())),s(o,r)}const ao=`<script lang="ts">
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
`;var ro=E("<!> <!>",1),io=E('<div class="cat_wrapper svelte-1b1oync"><!></div>'),co=E('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),lo=E('<div class="cat_wrapper svelte-1b1oync"><!></div>'),uo=E('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),mo=E("<section><!> <!></section> <section><!></section>",1),_o=E("<!> <!>",1),vo=E('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),ho=E("<!> <!>",1);function po(o,t){vt(t,!0);const e="Alyssa",a="Ben",i="home";let c=D(i),r=D(i);const f=X(()=>n(c)===n(r)?"😺":"😾"),I=X(()=>n(c)===n(r)?"😸":"😿"),C=X(()=>({name:e,icon:n(f),position:n(c)})),S=X(()=>({name:a,icon:n(I),position:n(r)}));let $=D(!1);const l=(U,nt)=>{const Q=[],Y=[];for(const j of U){const rt=j.position==="home"?Q:Y;nt?rt.unshift(j):rt.push(j)}return{home_cats:Q,adventure_cats:Y}},v=X(()=>l([n(C),n(S)],n($))),_=X(()=>n(v).home_cats),b=X(()=>n(v).adventure_cats),x=X(()=>n(c)!==i||n(r)!==i),u=()=>{h(c,i),h(r,i)};let m=D(!1);const A=()=>{h(m,!n(m))},F=U=>{switch(U.type){case"call_cats_adventure":{h(c,"adventure"),h(r,"adventure");break}case"call_cats_home":{h(c,"home"),h(r,"home");break}case"cat_go_adventure":{U.name===e?h(c,"adventure"):U.name===a&&h(r,"adventure");break}case"cat_go_home":{U.name===e?h(c,"home"):U.name===a&&h(r,"home");break}case"cat_be_or_do":{h($,!n($));break}}},[k,y]=an({fallback:(U,nt)=>{const Q=window.getComputedStyle(U),Y=Q.transform==="none"?"":Q.transform;return{duration:1500,easing:Tn,css:j=>`
					transform: ${Y} scale(${j});
					opacity: ${j}
				`}}});var N=ho(),V=q(N);ne(V,{scoped:!0,children:(U,nt)=>{It(U,{children:(Q,Y)=>{var j=_o(),rt=q(j);Pt(rt,{text:"Full example"});var yt=p(rt,2);xt(yt,{entries:St=>{var At=ro(),wt=q(At);{var $t=Ct=>{Ye(Ct,{run:u,content:"Reset",icon:"↻"})};B(wt,Ct=>{n(x)&&Ct($t)})}var kt=p(wt,2);jn(kt,{toggle_about_dialog:A}),s(St,At)},children:(St,At)=>{var wt=mo(),$t=q(wt),kt=T($t);xt(kt,{entries:d=>{Jn(d,{act:F,get home_cats(){return n(_)},get adventure_cats(){return n(b)}})},children:(d,M)=>{var H=co(),L=p(T(H),2);Rt(L,29,()=>n(_),({name:ft,icon:_t,position:it})=>ft,(ft,_t)=>{let it=()=>n(_t).name,lt=()=>n(_t).icon,gt=()=>n(_t).position;var J=io(),Ot=T(J);xt(Ot,{entries:st=>{le(st,{act:F,get name(){return it()},get icon(){return lt()},get position(){return gt()}})},children:(st,se)=>{Le(st,{get name(){return it()},get icon(){return lt()}})},$$slots:{entries:!0,default:!0}}),w(J),Nt(1,J,()=>y,()=>({key:it()})),Nt(2,J,()=>k,()=>({key:it()})),Oe(J,()=>Fe,null),s(ft,J)}),w(L),w(H),s(d,H)},$$slots:{entries:!0,default:!0}});var Ct=p(kt,2);xt(Ct,{entries:d=>{eo(d,{act:F,get home_cats(){return n(_)},get adventure_cats(){return n(b)}})},children:(d,M)=>{var H=uo(),L=p(T(H),2);Rt(L,29,()=>n(b),({name:ft,icon:_t,position:it})=>ft,(ft,_t)=>{let it=()=>n(_t).name,lt=()=>n(_t).icon,gt=()=>n(_t).position;var J=lo(),Ot=T(J);xt(Ot,{entries:st=>{le(st,{act:F,get name(){return it()},get icon(){return lt()},get position(){return gt()}})},children:(st,se)=>{Le(st,{get name(){return it()},get icon(){return lt()}})},$$slots:{entries:!0,default:!0}}),w(J),Nt(1,J,()=>y,()=>({key:it()})),Nt(2,J,()=>k,()=>({key:it()})),Oe(J,()=>Fe,null),s(ft,J)}),w(L),w(H),s(d,H)},$$slots:{entries:!0,default:!0}}),w($t);var oe=p($t,2),ve=T(oe);mn(ve,{summary:d=>{R();var M=O("View example source");s(d,M)},children:(d,M)=>{Mt(d,{content:ao})},$$slots:{summary:!0,default:!0}}),w(oe),s(St,wt)}}),s(Q,j)},$$slots:{default:!0}})},$$slots:{default:!0}});var et=p(V,2);{var K=U=>{un(U,{onclose:()=>h(m,!1),children:(nt,Q)=>{var Y=vo(),j=p(T(Y),8),rt=p(T(j),2);hn(rt,{});var yt=p(rt,4);pn(yt,{}),w(j),w(Y),s(nt,Y)},$$slots:{default:!0}})};B(et,U=>{n(m)&&U(K)})}s(o,N),ht()}var fo=E("<!> <!> <!>",1),go=E(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),xo=E("<!> <!>",1);function bo(o){let t=D(!1),e=D(!1),a=D(!1);ne(o,{scoped:!0,children:(i,c)=>{It(i,{children:(r,f)=>{var I=xo(),C=q(I);Pt(C,{text:"Basic usage"});var S=p(C,2);xt(S,{entries:l=>{var v=fo(),_=q(v);ot(_,{run:()=>h(t,!n(t)),children:(u,m)=>{R();var A=O("Hello world");s(u,A)},$$slots:{default:!0}});var b=p(_,2);ot(b,{run:()=>h(e,!n(e)),icon:m=>{R();var A=O("🌞");s(m,A)},children:(m,A)=>{R();var F=O("Hello with an optional icon snippet");s(m,F)},$$slots:{icon:!0,default:!0}});var x=p(b,2);ot(x,{run:()=>h(a,!n(a)),icon:"🌚",children:(u,m)=>{R();var A=O("Hello with an optional icon string");s(u,A)},$$slots:{default:!0}}),s(l,v)},children:(l,v)=>{var _=go(),b=p(T(_),2);const x=X(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Mt(b,{get content(){return n(x)}});var u=p(b,2),m=T(u),A=T(m);w(m),w(u);var F=p(u,2),k=T(F),y=T(k);w(k),w(F);var N=p(F,2),V=T(N),et=T(V);w(V),w(N),R(2),w(_),Z(()=>{pt(m,"color_g_5",n(t)),mt(A,`greeted = ${n(t)??""}`),pt(k,"color_e_5",n(e)),mt(y,`greeted_icon_snippet = ${n(e)??""}`),pt(V,"color_d_5",n(a)),mt(et,`greeted_icon_string = ${n(a)??""}`)}),s(l,_)}}),s(r,I)},$$slots:{default:!0}})},$$slots:{default:!0}})}var yo=E("<div>toggled</div>"),wo=E(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),$o=E("<!> <!>",1);function ko(o,t){vt(t,!0);const e=new Pe;let a=D(!1);ne(o,{contextmenu:e,scoped:!0,children:(i,c)=>{It(i,{children:(r,f)=>{var I=$o(),C=q(I);Pt(C,{text:"Custom instance"});var S=p(C,2);xt(S,{entries:l=>{ot(l,{run:()=>h(a,!n(a)),children:(v,_)=>{R();var b=O("Toggle");s(v,b)},$$slots:{default:!0}})},children:(l,v)=>{var _=wo(),b=T(_);Mt(b,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var x=p(b,2);Mt(x,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var u=p(x,4),m=T(u);{var A=F=>{var k=yo();Nt(3,k,()=>rn),s(F,k)};B(m,F=>{n(a)&&F(A)})}w(u),w(_),s(l,_)}}),s(r,I)},$$slots:{default:!0}})},$$slots:{default:!0}}),ht()}const Co=(o,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var To=E(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),Io=E("<div><!></div> <!>",1);function Po(o,t){vt(t,!0);const e=new Pe;let a=D(!1),i=D(void 0),c=D("");const r="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,I=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,C=X(()=>n(c)===r||n(c)===f||n(c)===I);ne(o,{contextmenu:e,scoped:!0,children:(S,$)=>{It(S,{children:(l,v)=>{var _=Io(),b=q(_),x=T(b);Pt(x,{text:"Select text"}),w(b);var u=p(b,2);xt(u,{entries:A=>{ot(A,{run:()=>h(a,!n(a)),children:(F,k)=>{R();var y=O("Toggle something");s(F,y)},$$slots:{default:!0}})},children:(A,F)=>{var k=To(),y=T(k),N=p(T(y),2),V=p(T(N));V.__click=[Co,i],R(),w(N),w(y),Ie(y,P=>h(i,P),()=>n(i));var et=p(y,2),K=T(et);cn(K),w(et);var U=p(et,2),nt=p(U,2),Q=T(nt);tn(Q),w(nt);var Y=p(nt,2),j=T(Y);ae(j,{path:"Web/HTML/Global_attributes/contenteditable"}),R(),w(Y);var rt=p(Y,4),yt=p(rt,4);w(k),Z(()=>{pt(k,"color_g_5",n(C)),pt(V,"color_a",n(a)),pt(U,"color_g_5",n(C))}),Me(K,()=>n(c),P=>h(c,P)),Me(Q,()=>n(c),P=>h(c,P)),Re("innerText",rt,()=>n(c),P=>h(c,P)),Re("innerText",yt,()=>n(c),P=>h(c,P)),s(A,k)}}),Z(()=>pt(b,"color_d_5",n(C))),s(l,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),ht()}Ce(["click"]);var So=E(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Ao(o){ne(o,{scoped:!0,children:(t,e)=>{It(t,{children:(a,i)=>{var c=So(),r=q(c);Pt(r,{text:"Default behaviors"});var f=p(r,2),I=T(f);Mt(I,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),R(6),w(f),s(a,c)},$$slots:{default:!0}})},$$slots:{default:!0}})}var zo=E("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function ss(o,t){vt(t,!0);const a=sn("Contextmenu");on(o,{tome:a,children:(i,c)=>{var r=zo(),f=p(q(r),2);bo(f);var I=p(f,2);Ao(I);var C=p(I,2);ko(C,{});var S=p(C,2);Po(S,{});var $=p(S,2);po($,{});var l=p($,2);kn(l),s(i,r)},$$slots:{default:!0}}),ht()}export{ss as component};
