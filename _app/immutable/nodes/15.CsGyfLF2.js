var Ze=Object.defineProperty;var ze=s=>{throw TypeError(s)};var Je=(s,t,e)=>t in s?Ze(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var mt=(s,t,e)=>Je(s,typeof t!="symbol"?t+"":t,e),fe=(s,t,e)=>t.has(s)||ze("Cannot "+e);var S=(s,t,e)=>(fe(s,t,"read from private field"),e?e.call(s):t.get(s)),G=(s,t,e)=>t.has(s)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),ge=(s,t,e,a)=>(fe(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e),Ee=(s,t,e)=>(fe(s,t,"access private method"),e);import{a as o,t as A,p as Ce,k as E,c as st,x as We,z as Qe,A as tn}from"../chunks/disclose-version.BmNp8pRT.js";import{m as en,u as nn,f as q,s as p,c as C,a4 as D,r as y,a6 as N,g as n,G as h,a as lt,t as j,p as ut,d as V,X as Dt,aw as Tt,a3 as me}from"../chunks/runtime.CTRYSQ17.js";import{T as on}from"../chunks/Tome_Content.B_UzizIq.js";import{g as sn}from"../chunks/tome.CTJLHWRE.js";import{M as ae}from"../chunks/Mdn_Link.BVOzoAuE.js";import{T as It,a as Pt}from"../chunks/Tome_Section_Header.Co7eTPcO.js";import{p as W,i as U}from"../chunks/if.CQC794wY.js";import{c as Te,e as Mt}from"../chunks/context_helpers.BjzmN15b.js";import{t as Nt,a as Oe,c as an,s as rn}from"../chunks/index.Did-jBBm.js";import{C as Rt}from"../chunks/Code.DpTM-mqG.js";import{s as _t,b as ce,r as cn}from"../chunks/attributes.Bd3_RS60.js";import{a as ct}from"../chunks/intersect.CEAVTEe-.js";import{s as re}from"../chunks/style.PwPRnE0L.js";import{b as Ie}from"../chunks/this.BpFE4fsi.js";import{p as tt,s as Ue}from"../chunks/props.Dw9ghfrp.js";import{a as ln,s as zt,b as xe,c as Ne,D as un}from"../chunks/Dialog.BYnRjZ5w.js";import{o as De}from"../chunks/index-client.DRAchYjU.js";import{s as vt}from"../chunks/render.CRd-sPzB.js";import{a as be}from"../chunks/string.ZJuK4sHN.js";import{t as pt}from"../chunks/class.BHhese_l.js";import{P as dn}from"../chunks/Pending_Animation.D9QOA-Qt.js";import{D as mn,b as Me}from"../chunks/Details.QOxGBIxY.js";import{S as _n,g as vn}from"../chunks/logos.DFPvPjMt.js";import{C as hn,T as pn}from"../chunks/Theme_Input.C5ZzhD52.js";import{b as Re}from"../chunks/input.d3-5tKPW.js";var bt,Et,qt,ue,Be;const de=class de{constructor(t){G(this,ue);G(this,bt,new WeakMap);G(this,Et);G(this,qt);ge(this,qt,t)}observe(t,e){var a=S(this,bt).get(t)||new Set;return a.add(e),S(this,bt).set(t,a),Ee(this,ue,Be).call(this).observe(t,S(this,qt)),()=>{var i=S(this,bt).get(t);i.delete(e),i.size===0&&(S(this,bt).delete(t),S(this,Et).unobserve(t))}}};bt=new WeakMap,Et=new WeakMap,qt=new WeakMap,ue=new WeakSet,Be=function(){return S(this,Et)??ge(this,Et,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var a of S(this,bt).get(e.target)||[])a(e)}}))},mt(de,"entries",new WeakMap);let $e=de;var fn=new $e({box:"border-box"});function qe(s,t,e){var a=fn.observe(s,()=>e(s[t]));en(()=>(nn(()=>e(s[t])),a))}var gn=A('<span class="font_mono">contextmenu</span> event',1),xn=A('<span class="font_mono">navigator.vibrate</span>'),bn=A('<span class="font_mono">navigator.vibrate</span>'),yn=A(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),wn=A(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),$n=A("<!> <!>",1);function kn(s){var t=$n(),e=q(t);It(e,{children:(i,l)=>{var r=yn(),g=q(r);Pt(g,{text:"Expected behaviors"});var T=p(g,4),I=p(C(T));ae(I,{path:"Web/API/Element/contextmenu_event",children:(m,b)=>{var f=gn();D(),o(m,f)},$$slots:{default:!0}});var z=p(I,4);ae(z,{path:"Web/API/Navigator/vibrate",children:(m,b)=>{var f=xn();o(m,f)},$$slots:{default:!0}}),D(),y(T);var w=p(T,10),c=p(C(w),10),v=p(C(c));ae(v,{path:"Web/API/Navigator/vibrate",children:(m,b)=>{var f=bn();o(m,f)},$$slots:{default:!0}}),D(),y(c),y(w),o(i,r)},$$slots:{default:!0}});var a=p(e,2);It(a,{children:(i,l)=>{var r=wn(),g=q(r);Pt(g,{text:"Motivation"}),D(14),o(i,r)},$$slots:{default:!0}}),o(s,t)}function Cn(s){const t=s-1;return t*t*t+1}function Tn(s){return--s*s*s*s*s+1}function Fe(s,{from:t,to:e},a={}){var i=getComputedStyle(s),l=In(s),r=i.transform==="none"?"":i.transform,[g,T]=i.transformOrigin.split(" ").map(parseFloat),I=t.width/e.width,z=t.height/e.height,w=(t.left+I*g-(e.left+g))/l,c=(t.top+z*T-(e.top+T))/l,{delay:v=0,duration:m=f=>Math.sqrt(f)*120,easing:b=Cn}=a;return{delay:v,duration:typeof m=="function"?m(Math.sqrt(w*w+c*c)):m,easing:b,css:(f,u)=>{var _=u*w,O=u*c,F=f+u*I,$=f+u*z;return`transform: ${r} scale(${F}, ${$}) translate(${_}px, ${O}px);`}}}function In(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}var Ft,Ht;class Ve{constructor(){G(this,Ft,N(0));G(this,Ht,N(0))}get width(){return n(S(this,Ft))}set width(t){h(S(this,Ft),W(t))}get height(){return n(S(this,Ht))}set height(t){h(S(this,Ht),W(t))}}Ft=new WeakMap,Ht=new WeakMap;var Lt,Wt,Ut,Bt,Vt;class Pn{constructor(t,e){mt(this,"is_menu",!1);mt(this,"menu");G(this,Lt,N(!1));G(this,Wt,N());G(this,Ut,N(!1));G(this,Bt,N(null));G(this,Vt,N(null));this.menu=t,this.run=e}get selected(){return n(S(this,Lt))}set selected(t){h(S(this,Lt),W(t))}get run(){return n(S(this,Wt))}set run(t){h(S(this,Wt),W(t))}get pending(){return n(S(this,Ut))}set pending(t){h(S(this,Ut),W(t))}get error_message(){return n(S(this,Bt))}set error_message(t){h(S(this,Bt),W(t))}get promise(){return n(S(this,Vt))}set promise(t){h(S(this,Vt),W(t))}}Lt=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,Bt=new WeakMap,Vt=new WeakMap;var Xt,Yt;class Sn{constructor(t,e){mt(this,"is_menu",!0);mt(this,"menu");mt(this,"depth");G(this,Xt,N(!1));G(this,Yt,N(W([])));this.menu=t,this.depth=e}get selected(){return n(S(this,Xt))}set selected(t){h(S(this,Xt),W(t))}get items(){return n(S(this,Yt))}set items(t){h(S(this,Yt),W(t))}}Xt=new WeakMap,Yt=new WeakMap;var Gt;class An{constructor(){mt(this,"is_menu",!0);mt(this,"menu",null);mt(this,"depth",1);G(this,Gt,N(W([])))}get items(){return n(S(this,Gt))}set items(t){h(S(this,Gt),W(t))}}Gt=new WeakMap;var Kt,jt,Zt,Jt,Qt,te,ee;class Pe{constructor(t){mt(this,"layout");mt(this,"initial_layout");G(this,Kt,N(!1));G(this,jt,N(0));G(this,Zt,N(0));G(this,Jt,N(W([])));G(this,Qt,N());G(this,te,N(W(new An)));G(this,ee,N(W([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ve}get opened(){return n(S(this,Kt))}set opened(t){h(S(this,Kt),W(t))}get x(){return n(S(this,jt))}set x(t){h(S(this,jt),W(t))}get y(){return n(S(this,Zt))}set y(t){h(S(this,Zt),W(t))}get params(){return n(S(this,Jt))}set params(t){h(S(this,Jt),W(t))}get error(){return n(S(this,Qt))}set error(t){h(S(this,Qt),W(t))}get root_menu(){return n(S(this,te))}set root_menu(t){h(S(this,te),W(t))}get selections(){return n(S(this,ee))}set selections(t){h(S(this,ee),W(t))}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const i=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=i??"unknown error",this.error=i}if(ln(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(i=>{if(a===t.promise){if(typeof(i==null?void 0:i.ok)=="boolean")if(i.ok)this.close();else{const l=typeof i.message=="string"?i.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return i}},i=>{if(a!==t.promise)return;const l=typeof(i==null?void 0:i.message)=="string"?i.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=we.maybe_get()??this.root_menu,a=new Pn(e,t);return e.items.push(a),De(()=>{e.items.length=0}),a}add_submenu(){const t=we.maybe_get()??this.root_menu,e=new Sn(t,t.depth+1);return t.items.push(e),we.set(e),De(()=>{t.items.length=0}),e}}Kt=new WeakMap,jt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,te=new WeakMap,ee=new WeakMap;const Se="contextmenu",zn=`a,[data-${Se}]`,ie=new Map;let En=0;const ye=(s,t)=>{if(t==null)return;const e=En+++"";return s.dataset[Se]=e,ie.set(e,t),{update:a=>{ie.set(e,a)},destroy:()=>{ie.delete(e)}}},On=17,He=(s,t,e,a)=>{const i=Nn(s);return i!=null&&i.length?(a.open(i,t,e),navigator.vibrate&&navigator.vibrate(On),!0):!1},Nn=s=>{var l;let t=null,e=s,a,i;for(;e=e==null?void 0:e.closest(zn);){if(a=e.dataset[Se]){if(t??(t=[]),i=ie.get(a),i===void 0)continue;Array.isArray(i)?(t??(t=[])).push(...i):(t??(t=[])).push(i)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const r=(l=window.getSelection())==null?void 0:l.toString();r&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(r)}})}return t},_e=Te(),we=Te(),ke=Te(()=>new Ve);var Dn=(s,t)=>t.close(),Mn=A('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Xe(s,t){lt(t,!0);const e="🔗",a=tt(t,"icon",3,e),i=_e.get(),l=($,k=location.host)=>{const R=be(be($,"https://"),"http://");return R.startsWith(k+"/")?be(R,k):R},r=V(()=>l(t.href)),g=V(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),T=V(()=>n(g)?"noreferrer":void 0);var I=Mn(),z=C(I);z.__click=[Dn,i];var w=C(z),c=C(w),v=C(c);{var m=$=>{var k=E();j(()=>vt(k,a())),o($,k)},b=$=>{var k=st(),R=q(k);_t(R,a,()=>e),o($,k)};U(v,$=>{typeof a()=="string"?$(m):$(b,!1)})}y(c);var f=p(c,2),u=C(f),_=C(u);{var O=$=>{var k=st(),R=q(k);_t(R,()=>t.children),o($,k)},F=$=>{var k=E();j(()=>vt(k,n(r))),o($,k)};U(_,$=>{t.children?$(O):$(F,!1)})}y(u),y(f),y(w),y(z),y(I),j(()=>{ce(z,"href",t.href),ce(z,"rel",n(T))}),o(s,I),ut()}Ce(["click"]);var Rn=A('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function nt(s,t){lt(t,!0);const e=_e.get(),a=e.add_entry(t.run);Dt(()=>{a.run=t.run});const i=V(()=>a.selected),l=V(()=>a.pending),r=V(()=>a.error_message);var g=Rn();g.__click=()=>{setTimeout(()=>e.activate(a))};var T=C(g),I=C(T),z=C(I);{var w=_=>{var O=E();j(()=>vt(O,t.icon)),o(_,O)},c=_=>{var O=st(),F=q(O);{var $=k=>{var R=st(),X=q(R);_t(X,()=>t.icon),o(k,R)};U(F,k=>{t.icon&&k($)},!0)}o(_,O)};U(z,_=>{typeof t.icon=="string"?_(w):_(c,!1)})}y(I);var v=p(I,2),m=C(v);_t(m,()=>t.children),y(v);var b=p(v,2);{var f=_=>{dn(_,{})},u=_=>{var O=st(),F=q(O);{var $=k=>{var R=E("⚠️");o(k,R)};U(F,k=>{n(r)&&k($)},!0)}o(_,O)};U(b,_=>{n(l)?_(f):_(u,!1)})}y(T),y(g),j(()=>{ce(g,"title",n(r)?`Error: ${n(r)}`:void 0),pt(g,"selected",n(i))}),We("mouseenter",g,_=>{zt(_),e.select(a)}),o(s,g),ut()}Ce(["click"]);function Ye(s,t){nt(s,{get run(){return t.run},icon:a=>{D();var i=E();j(()=>vt(i,t.icon)),o(a,i)},children:(a,i)=>{D();var l=E();j(()=>vt(l,t.content)),o(a,l)},$$slots:{icon:!0,default:!0}})}const qn=(s,t=me)=>{Xe(s,Ue(t))},Fn=(s,t=me)=>{Ye(s,Ue(t))};var Hn=A('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Ln=A('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Wn=A('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Un=A("<!> <!> <!>",1);function ne(s,t){lt(t,!0);const e=tt(t,"contextmenu",19,()=>new Pe),a=tt(t,"longpress_move_tolerance",3,21),i=tt(t,"longpress_duration",3,633),l=tt(t,"bypass_with_tap_then_longpress",3,!0),r=tt(t,"tap_then_longpress_duration",3,660),g=tt(t,"tap_then_longpress_move_tolerance",3,7),T=tt(t,"open_offset_x",19,()=>-2),I=tt(t,"open_offset_y",19,()=>-2),z=tt(t,"scoped",3,!1);_e.set(e());let w=N(void 0);const c=V(()=>e().layout),v=V(()=>e().initial_layout),m=V(()=>n(c)===n(v));let b=N(void 0),f=N(void 0);Dt(()=>{!n(m)&&n(b)!==void 0&&(n(c).width=n(b))}),Dt(()=>{!n(m)&&n(f)!==void 0&&(n(c).height=n(f))});const u=ke.set();Dt(()=>{if(n(w)){const x=n(w).getBoundingClientRect();u.width=x.width,u.height=x.height}});const _=V(()=>e().x+Math.min(0,n(c).width-(e().x+u.width))),O=V(()=>e().y+Math.min(0,n(c).height-(e().y+u.height)));let F=N(void 0),$=N(void 0),k=N(void 0),R=N(void 0),X=N(void 0),at=N(void 0);const J=()=>{n(X)&&h(X,!1),n(R)!=null&&(clearTimeout(n(R)),h(R,null))},B=x=>{var M;if(n(at)){h(at,!1);return}if(n(X)){J(),zt(x);return}const{target:d}=x;x.shiftKey||!(d instanceof HTMLElement||d instanceof SVGElement)||(M=n(w))!=null&&M.contains(d)||xe(d)||Ne(d)||He(d,x.clientX+T(),x.clientY+I(),e())&&(zt(x),J())},et=x=>{n(X)&&h(X,!1);const{touches:d,target:M}=x;if(e().opened||d.length!==1||x.shiftKey||!(M instanceof HTMLElement||M instanceof SVGElement)||xe(M)||Ne(M))return;const{clientX:H,clientY:L}=d[0];if(l()){if(n(k)!=null&&performance.now()-n(k)<r()&&Math.hypot(H-n(F),L-n($))<g()){h(at,!0),h(k,null);return}h(k,W(performance.now()))}h(F,W(H)),h($,W(L)),n(R)!=null&&J(),h(R,W(setTimeout(()=>{h(X,!0),He(M,n(F)+T(),n($)+I(),e())},i())))},Q=x=>{if(n(R)==null)return;const{touches:d}=x;if(d.length!==1)return;const{clientX:M,clientY:H}=d[0];Math.hypot(M-n(F),H-n($))>a()&&(e().opened&&e().close(),J())},Y=x=>{n(R)!=null&&(n(X)&&zt(x),J())},K=x=>{n(w)&&!n(w).contains(x.target)&&e().close()},rt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),yt=x=>{const d=rt.get(x.key);!d||xe(x.target)||(zt(x),d())},P=(x,d)=>{let M=null;const H=L=>{M&&(M(),M=null),L.disabled||(M=Qe(x,L.event,L.cb,{capture:!0,passive:L.passive}))};return H(d),{update:L=>{H(L)},destroy:()=>{M==null||M()}}};var St=Un();ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"contextmenu",passive:!1,cb:B,disabled:z()})),ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"touchstart",passive:!0,cb:et,disabled:z()})),ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"touchmove",passive:!0,cb:Q,disabled:z()})),ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"touchend",passive:!1,cb:Y,disabled:z()})),ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"touchcancel",passive:!1,cb:Y,disabled:z()})),ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"mousedown",passive:!0,cb:K,disabled:!e().opened})),ct(Tt,(x,d)=>P==null?void 0:P(x,d),()=>({event:"keydown",passive:!1,cb:yt,disabled:!e().opened}));var At=q(St);{var wt=x=>{var d=Hn(),M=C(d);_t(M,()=>t.children),y(d),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"contextmenu",passive:!1,cb:B})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchstart",passive:!0,cb:et})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchmove",passive:!0,cb:Q})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchend",passive:!1,cb:Y})),ct(d,(H,L)=>P==null?void 0:P(H,L),()=>({event:"touchcancel",passive:!1,cb:Y})),o(x,d)},$t=x=>{var d=st(),M=q(d);_t(M,()=>t.children),o(x,d)};U(At,x=>{z()?x(wt):x($t,!1)})}var kt=p(At,2);{var Ct=x=>{var d=Ln();qe(d,"clientHeight",M=>h(f,M)),qe(d,"clientWidth",M=>h(b,M)),o(x,d)};U(kt,x=>{n(m)||x(Ct)})}var oe=p(kt,2);{var ve=x=>{var d=Wn();Mt(d,20,()=>e().params,M=>M,(M,H)=>{var L=st(),ft=q(L);{var ht=dt=>{var gt=st(),Z=q(gt);_t(Z,()=>H),o(dt,gt)},it=dt=>{var gt=st(),Z=q(gt);{var Ot=ot=>{qn(ot,()=>H.props)},he=ot=>{var se=st(),Ke=q(se);{var je=pe=>{Fn(pe,()=>H.props)};U(Ke,pe=>{H.snippet==="text"&&pe(je)},!0)}o(ot,se)};U(Z,ot=>{H.snippet==="link"?ot(Ot):ot(he,!1)},!0)}o(dt,gt)};U(ft,dt=>{typeof H=="function"?dt(ht):dt(it,!1)})}o(M,L)}),y(d),Ie(d,M=>h(w,M),()=>n(w)),j(()=>re(d,"transform",`translate3d(${n(_)??""}px, ${n(O)??""}px, 0)`)),o(x,d)};U(oe,x=>{e().opened&&x(ve)})}o(s,St),ut()}var Bn=A('<span class="display_contents"><!></span>');function xt(s,t){lt(t,!0);var e=Bn(),a=C(e);_t(a,()=>t.children),y(e),ct(e,(i,l)=>ye==null?void 0:ye(i,l),()=>t.entries),o(s,e),ut()}var Vn=A('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Xn=A('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ae(s,t){lt(t,!0);const e=_e.get(),a=e.add_submenu(),{layout:i}=e,l=V(()=>a.selected);let r=N(void 0);const g=ke.get(),T=ke.set();let I=N(0),z=N(0);Dt(()=>{n(r)&&w(n(r),i,g)});const w=($,k,R)=>{const{x:X,y:at,width:J,height:B}=$.getBoundingClientRect();T.width=J,T.height=B;const et=X-n(I),Q=at-n(z),Y=et+J+R.width-k.width;if(Y<=0)h(I,W(R.width));else{const K=J-et;K<=0?h(I,-J):K>Y?h(I,R.width-Y):h(I,K-J)}h(z,W(Math.min(0,k.height-(Q+B))))};var c=Xn(),v=C(c),m=C(v),b=C(m),f=C(b);_t(f,()=>t.icon??me),y(b);var u=p(b,2),_=C(u);_t(_,()=>t.children),y(u),y(m),D(2),y(v);var O=p(v,2);{var F=$=>{var k=Vn(),R=C(k);_t(R,()=>t.menu),y(k),Ie(k,X=>h(r,X),()=>n(r)),j(()=>{re(k,"transform",`translate3d(${n(I)??""}px, ${n(z)??""}px, 0)`),re(k,"max-height",`${i.height??""}px`)}),o($,k)};U(O,$=>{n(l)&&$(F)})}y(c),j(()=>{re(c,"--contextmenu_depth",a.depth),ce(v,"aria-expanded",n(l)),pt(v,"selected",n(l))}),We("mouseenter",v,$=>{zt($),setTimeout(()=>e.select(a))}),o(s,c),ut()}var Yn=A("<!> <!>",1);function le(s,t){lt(t,!0);const e=tt(t,"name",3,"Cat"),a=tt(t,"icon",3,"😺");Ae(s,{icon:r=>{D();var g=E();j(()=>vt(g,a())),o(r,g)},menu:r=>{var g=Yn(),T=q(g);nt(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:w=>{var c=st(),v=q(c);{var m=f=>{var u=E("🏠");o(f,u)},b=f=>{var u=E("🌄");o(f,u)};U(v,f=>{t.position==="adventure"?f(m):f(b,!1)})}o(w,c)},children:(w,c)=>{var v=st(),m=q(v);{var b=u=>{var _=E("go home");o(u,_)},f=u=>{var _=E("go adventure");o(u,_)};U(m,u=>{t.position==="adventure"?u(b):u(f,!1)})}o(w,v)},$$slots:{icon:!0,default:!0}});var I=p(T,2);nt(I,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:w=>{var c=st(),v=q(c);{var m=f=>{var u=E("🌄");o(f,u)},b=f=>{var u=E("🏠");o(f,u)};U(v,f=>{t.position==="adventure"?f(m):f(b,!1)})}o(w,c)},children:(w,c)=>{var v=st(),m=q(v);{var b=u=>{var _=E("do adventure");o(u,_)},f=u=>{var _=E("be home");o(u,_)};U(m,u=>{t.position==="adventure"?u(b):u(f,!1)})}o(w,v)},$$slots:{icon:!0,default:!0}}),o(r,g)},children:(r,g)=>{D();var T=E();j(()=>vt(T,e())),o(r,T)},$$slots:{icon:!0,menu:!0,default:!0}}),ut()}var Gn=A("<!> <!>",1);function Kn(s,t){var e=Gn(),a=q(e);Xe(a,{href:"https://github.com/ryanatkn/fuz",icon:r=>{_n(r,{data:vn,size:"var(--icon_size_xs)"})},children:(r,g)=>{D();var T=E("Source code");o(r,T)},$$slots:{icon:!0,default:!0}});var i=p(a,2);nt(i,{get run(){return t.toggle_about_dialog},icon:r=>{D();var g=E("?");o(r,g)},children:(r,g)=>{D();var T=E("About");o(r,T)},$$slots:{icon:!0,default:!0}}),o(s,e)}const Ge=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const e=s[0];return e.icon+e.name};var jn=A("<!> <!>",1),Zn=A("<!> <!> <!>",1);function Jn(s,t){lt(t,!0);const e=V(()=>Ge(t.adventure_cats));Ae(s,{icon:l=>{D();var r=E("🏠");o(l,r)},menu:l=>{var r=Zn(),g=q(r);{var T=c=>{nt(c,{run:()=>t.act({type:"call_cats_home"}),icon:m=>{D();var b=E("🐈‍⬛");o(m,b)},children:(m,b)=>{D();var f=E("call");o(m,f)},$$slots:{icon:!0,default:!0}})};U(g,c=>{n(e)&&c(T)})}var I=p(g,2);Mt(I,17,()=>t.home_cats,c=>c.name,(c,v)=>{le(c,{get name(){return n(v).name},get icon(){return n(v).icon},get position(){return n(v).position},get act(){return t.act}})});var z=p(I,2);{var w=c=>{var v=jn(),m=q(v);nt(m,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:u=>{D();var _=E("🏠");o(u,_)},children:(u,_)=>{D();var O=E("be");o(u,O)},$$slots:{icon:!0,default:!0}});var b=p(m,2);nt(b,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{D();var _=E("🦋");o(u,_)},children:(u,_)=>{D();var O=E("leave");o(u,O)},$$slots:{icon:!0,default:!0}}),o(c,v)};U(z,c=>{n(e)||c(w)})}o(l,r)},children:(l,r)=>{D();var g=E("home");o(l,g)},$$slots:{icon:!0,menu:!0,default:!0}}),ut()}var Qn=A("<!> <!>",1),to=A("<!> <!> <!>",1);function eo(s,t){lt(t,!0);const e=V(()=>Ge(t.home_cats));Ae(s,{icon:l=>{D();var r=E("🌄");o(l,r)},menu:l=>{var r=to(),g=q(r);{var T=c=>{nt(c,{run:()=>t.act({type:"call_cats_adventure"}),icon:m=>{D();var b=E("🦋");o(m,b)},children:(m,b)=>{D();var f=E("call");o(m,f)},$$slots:{icon:!0,default:!0}})};U(g,c=>{n(e)&&c(T)})}var I=p(g,2);Mt(I,17,()=>t.adventure_cats,c=>c.name,(c,v)=>{le(c,{get name(){return n(v).name},get icon(){return n(v).icon},get position(){return n(v).position},get act(){return t.act}})});var z=p(I,2);{var w=c=>{var v=Qn(),m=q(v);nt(m,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:u=>{D();var _=E("🌄");o(u,_)},children:(u,_)=>{D();var O=E("do");o(u,O)},$$slots:{icon:!0,default:!0}});var b=p(m,2);nt(b,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{D();var _=E("🐈‍⬛");o(u,_)},children:(u,_)=>{D();var O=E("leave");o(u,O)},$$slots:{icon:!0,default:!0}}),o(c,v)};U(z,c=>{n(e)||c(w)})}o(l,r)},children:(l,r)=>{D();var g=E("adventure");o(l,g)},$$slots:{icon:!0,menu:!0,default:!0}}),ut()}var no=A('<span class="icon svelte-u0xdy"> </span>'),oo=A('<span class="name svelte-u0xdy"><!> </span>'),so=A('<span class="cat svelte-u0xdy"><!><!></span>');function Le(s,t){lt(t,!0);const e=tt(t,"name",3,"Cat"),a=tt(t,"icon",3,"😺"),i=tt(t,"show_name",3,!0),l=tt(t,"show_icon",3,!0);var r=so(),g=C(r);{var T=w=>{var c=no(),v=C(c,!0);y(c),j(()=>vt(v,a())),o(w,c)};U(g,w=>{l()&&w(T)})}var I=p(g);{var z=w=>{var c=oo(),v=C(c);_t(v,()=>t.children??me);var m=p(v,1,!0);y(c),j(()=>vt(m,e())),o(w,c)};U(I,w=>{i()&&w(z)})}y(r),j(()=>pt(r,"has-icon",l())),o(s,r),ut()}const ao=`<script lang="ts">
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
`;var ro=A("<!> <!>",1),io=A('<div class="cat_wrapper svelte-1b1oync"><!></div>'),co=A('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),lo=A('<div class="cat_wrapper svelte-1b1oync"><!></div>'),uo=A('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),mo=A("<section><!> <!></section> <section><!></section>",1),_o=A("<!> <!>",1),vo=A('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),ho=A("<!> <!>",1);function po(s,t){lt(t,!0);const e="Alyssa",a="Ben",i="home";let l=N(i),r=N(i);const g=V(()=>n(l)===n(r)?"😺":"😾"),T=V(()=>n(l)===n(r)?"😸":"😿"),I=V(()=>({name:e,icon:n(g),position:n(l)})),z=V(()=>({name:a,icon:n(T),position:n(r)}));let w=N(!1);const c=(B,et)=>{const Q=[],Y=[];for(const K of B){const rt=K.position==="home"?Q:Y;et?rt.unshift(K):rt.push(K)}return{home_cats:Q,adventure_cats:Y}},v=V(()=>c([n(I),n(z)],n(w))),m=V(()=>n(v).home_cats),b=V(()=>n(v).adventure_cats),f=V(()=>n(l)!==i||n(r)!==i),u=()=>{h(l,i),h(r,i)};let _=N(!1);const O=()=>{h(_,!n(_))},F=B=>{switch(B.type){case"call_cats_adventure":{h(l,"adventure"),h(r,"adventure");break}case"call_cats_home":{h(l,"home"),h(r,"home");break}case"cat_go_adventure":{B.name===e?h(l,"adventure"):B.name===a&&h(r,"adventure");break}case"cat_go_home":{B.name===e?h(l,"home"):B.name===a&&h(r,"home");break}case"cat_be_or_do":{h(w,!n(w));break}}},[$,k]=an({fallback:(B,et)=>{const Q=window.getComputedStyle(B),Y=Q.transform==="none"?"":Q.transform;return{duration:1500,easing:Tn,css:K=>`
					transform: ${Y} scale(${K});
					opacity: ${K}
				`}}});var R=ho(),X=q(R);ne(X,{scoped:!0,children:(B,et)=>{It(B,{children:(Q,Y)=>{var K=_o(),rt=q(K);Pt(rt,{text:"Full example"});var yt=p(rt,2);xt(yt,{entries:St=>{var At=ro(),wt=q(At);{var $t=Ct=>{Ye(Ct,{run:u,content:"Reset",icon:"↻"})};U(wt,Ct=>{n(f)&&Ct($t)})}var kt=p(wt,2);Kn(kt,{toggle_about_dialog:O}),o(St,At)},children:(St,At)=>{var wt=mo(),$t=q(wt),kt=C($t);xt(kt,{entries:d=>{Jn(d,{act:F,get home_cats(){return n(m)},get adventure_cats(){return n(b)}})},children:(d,M)=>{var H=co(),L=p(C(H),2);Mt(L,29,()=>n(m),({name:ft,icon:ht,position:it})=>ft,(ft,ht)=>{let it=()=>n(ht).name,dt=()=>n(ht).icon,gt=()=>n(ht).position;var Z=io(),Ot=C(Z);xt(Ot,{entries:ot=>{le(ot,{act:F,get name(){return it()},get icon(){return dt()},get position(){return gt()}})},children:(ot,se)=>{Le(ot,{get name(){return it()},get icon(){return dt()}})},$$slots:{entries:!0,default:!0}}),y(Z),Nt(1,Z,()=>k,()=>({key:it()})),Nt(2,Z,()=>$,()=>({key:it()})),Oe(Z,()=>Fe,null),o(ft,Z)}),y(L),y(H),o(d,H)},$$slots:{entries:!0,default:!0}});var Ct=p(kt,2);xt(Ct,{entries:d=>{eo(d,{act:F,get home_cats(){return n(m)},get adventure_cats(){return n(b)}})},children:(d,M)=>{var H=uo(),L=p(C(H),2);Mt(L,29,()=>n(b),({name:ft,icon:ht,position:it})=>ft,(ft,ht)=>{let it=()=>n(ht).name,dt=()=>n(ht).icon,gt=()=>n(ht).position;var Z=lo(),Ot=C(Z);xt(Ot,{entries:ot=>{le(ot,{act:F,get name(){return it()},get icon(){return dt()},get position(){return gt()}})},children:(ot,se)=>{Le(ot,{get name(){return it()},get icon(){return dt()}})},$$slots:{entries:!0,default:!0}}),y(Z),Nt(1,Z,()=>k,()=>({key:it()})),Nt(2,Z,()=>$,()=>({key:it()})),Oe(Z,()=>Fe,null),o(ft,Z)}),y(L),y(H),o(d,H)},$$slots:{entries:!0,default:!0}}),y($t);var oe=p($t,2),ve=C(oe);mn(ve,{summary:d=>{D();var M=E("View example source");o(d,M)},children:(d,M)=>{Rt(d,{content:ao})},$$slots:{summary:!0,default:!0}}),y(oe),o(St,wt)},$$slots:{entries:!0,default:!0}}),o(Q,K)},$$slots:{default:!0}})},$$slots:{default:!0}});var at=p(X,2);{var J=B=>{un(B,{onclose:()=>h(_,!1),children:(et,Q)=>{var Y=vo(),K=p(C(Y),8),rt=p(C(K),2);hn(rt,{});var yt=p(rt,4);pn(yt,{}),y(K),y(Y),o(et,Y)},$$slots:{default:!0}})};U(at,B=>{n(_)&&B(J)})}o(s,R),ut()}var fo=A("<!> <!> <!>",1),go=A(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),xo=A("<!> <!>",1);function bo(s){let t=N(!1),e=N(!1),a=N(!1);ne(s,{scoped:!0,children:(i,l)=>{It(i,{children:(r,g)=>{var T=xo(),I=q(T);Pt(I,{text:"Basic usage"});var z=p(I,2);xt(z,{entries:c=>{var v=fo(),m=q(v);nt(m,{run:()=>h(t,!n(t)),children:(u,_)=>{D();var O=E("Hello world");o(u,O)},$$slots:{default:!0}});var b=p(m,2);nt(b,{run:()=>h(e,!n(e)),icon:_=>{D();var O=E("🌞");o(_,O)},children:(_,O)=>{D();var F=E("Hello with an optional icon snippet");o(_,F)},$$slots:{icon:!0,default:!0}});var f=p(b,2);nt(f,{run:()=>h(a,!n(a)),icon:"🌚",children:(u,_)=>{D();var O=E("Hello with an optional icon string");o(u,O)},$$slots:{default:!0}}),o(c,v)},children:(c,v)=>{var m=go(),b=p(C(m),2),f=V(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Rt(b,{get content(){return n(f)}});var u=p(b,2),_=C(u),O=C(_);y(_),y(u);var F=p(u,2),$=C(F),k=C($);y($),y(F);var R=p(F,2),X=C(R),at=C(X);y(X),y(R),D(2),y(m),j(()=>{pt(_,"color_g_5",n(t)),vt(O,`greeted = ${n(t)??""}`),pt($,"color_e_5",n(e)),vt(k,`greeted_icon_snippet = ${n(e)??""}`),pt(X,"color_d_5",n(a)),vt(at,`greeted_icon_string = ${n(a)??""}`)}),o(c,m)},$$slots:{entries:!0,default:!0}}),o(r,T)},$$slots:{default:!0}})},$$slots:{default:!0}})}var yo=A("<div>toggled</div>"),wo=A(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),$o=A("<!> <!>",1);function ko(s,t){lt(t,!0);const e=new Pe;let a=N(!1);ne(s,{contextmenu:e,scoped:!0,children:(i,l)=>{It(i,{children:(r,g)=>{var T=$o(),I=q(T);Pt(I,{text:"Custom instance"});var z=p(I,2);xt(z,{entries:c=>{nt(c,{run:()=>h(a,!n(a)),children:(v,m)=>{D();var b=E("Toggle");o(v,b)},$$slots:{default:!0}})},children:(c,v)=>{var m=wo(),b=C(m);Rt(b,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var f=p(b,2);Rt(f,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var u=p(f,4),_=C(u);{var O=F=>{var $=yo();Nt(3,$,()=>rn),o(F,$)};U(_,F=>{n(a)&&F(O)})}y(u),y(m),o(c,m)},$$slots:{entries:!0,default:!0}}),o(r,T)},$$slots:{default:!0}})},$$slots:{default:!0}}),ut()}const Co=(s,t)=>{const e=window.getSelection();if(!e||!n(t))return;const a=document.createRange();a.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(a)};var To=A(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),Io=A("<div><!></div> <!>",1);function Po(s,t){lt(t,!0);const e=new Pe;let a=N(!1),i=N(void 0),l=N("");const r="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",g=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,T=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,I=V(()=>n(l)===r||n(l)===g||n(l)===T);ne(s,{contextmenu:e,scoped:!0,children:(z,w)=>{It(z,{children:(c,v)=>{var m=Io(),b=q(m),f=C(b);Pt(f,{text:"Select text"}),y(b);var u=p(b,2);xt(u,{entries:O=>{nt(O,{run:()=>h(a,!n(a)),children:(F,$)=>{D();var k=E("Toggle something");o(F,k)},$$slots:{default:!0}})},children:(O,F)=>{var $=To(),k=C($),R=p(C(k),2),X=p(C(R));X.__click=[Co,i],D(),y(R),y(k),Ie(k,P=>h(i,P),()=>n(i));var at=p(k,2),J=C(at);cn(J),y(at);var B=p(at,2),et=p(B,2),Q=C(et);tn(Q),y(et);var Y=p(et,2),K=C(Y);ae(K,{path:"Web/HTML/Global_attributes/contenteditable"}),D(),y(Y);var rt=p(Y,4),yt=p(rt,4);y($),j(()=>{pt($,"color_g_5",n(I)),pt(X,"color_a",n(a)),pt(B,"color_g_5",n(I))}),Re(J,()=>n(l),P=>h(l,P)),Re(Q,()=>n(l),P=>h(l,P)),Me("innerText",rt,()=>n(l),P=>h(l,P)),Me("innerText",yt,()=>n(l),P=>h(l,P)),o(O,$)},$$slots:{entries:!0,default:!0}}),j(()=>pt(b,"color_d_5",n(I))),o(c,m)},$$slots:{default:!0}})},$$slots:{default:!0}}),ut()}Ce(["click"]);var So=A(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Ao(s){ne(s,{scoped:!0,children:(t,e)=>{It(t,{children:(a,i)=>{var l=So(),r=q(l);Pt(r,{text:"Default behaviors"});var g=p(r,2),T=C(g);Rt(T,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),D(6),y(g),o(a,l)},$$slots:{default:!0}})},$$slots:{default:!0}})}var zo=A("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function ss(s,t){lt(t,!0);const a=sn("Contextmenu");on(s,{tome:a,children:(i,l)=>{var r=zo(),g=p(q(r),2);bo(g);var T=p(g,2);Ao(T);var I=p(T,2);ko(I,{});var z=p(I,2);Po(z,{});var w=p(z,2);po(w,{});var c=p(w,2);kn(c),o(i,r)},$$slots:{default:!0}}),ut()}export{ss as component};
