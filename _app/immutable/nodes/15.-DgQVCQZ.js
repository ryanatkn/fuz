var Qe=Object.defineProperty;var Ze=(s,t,e)=>t in s?Qe(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var at=(s,t,e)=>(Ze(s,typeof t!="symbol"?t+"":t,e),e),he=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var A=(s,t,e)=>(he(s,t,"read from private field"),e?e.call(s):t.get(s)),B=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},pe=(s,t,e,a)=>(he(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e);var Pe=(s,t,e)=>(he(s,t,"access private method"),e);import{a as r,t as d,c as w,s as n,f as h,b as P,l as zt,$ as At}from"../chunks/disclose-version.5tIm47j5.js";import{h as He,u as Ue,r as K,N as tn,H as O,g as o,t as b,s as be,f as ye,p as dt,a as _t,d as R,K as qt,a6 as M,a4 as Se}from"../chunks/runtime.BhNP7HCo.js";import{i as en}from"../chunks/lifecycle.BtGfaPtt.js";import{T as nn}from"../chunks/Tome_Detail.BJ7acDTi.js";import{g as on}from"../chunks/tome.DYc5lYMi.js";import{M as se}from"../chunks/Mdn_Link.Bv_GM05g.js";import{T as Ot}from"../chunks/Tome_Subheading.BN1osvYo.js";import{i as q}from"../chunks/if.BCURgWd1.js";import{e as Lt}from"../chunks/each.DJd99rmV.js";import{t as Dt,a as Ae,c as rn,s as an}from"../chunks/index.CftvCRyH.js";import{C as Ht}from"../chunks/Code.DoKnE_1e.js";import{d as we,s as st,e as ot,a as It}from"../chunks/render.YxUbVe5A.js";import{p as F}from"../chunks/proxy.CFT7Wq3v.js";import{s as it,b as le,r as sn,d as cn}from"../chunks/attributes.CvtJqRbz.js";import{s as ie}from"../chunks/style.iv2mhl8q.js";import{b as Ce}from"../chunks/this.DXh_fvnH.js";import{p as Z,s as ze}from"../chunks/props.Dyh0Sy5f.js";import{a as ln,s as Mt,b as fe,c as Oe,D as un}from"../chunks/Dialog.BDBKRNNy.js";import{o as $e}from"../chunks/index-client.CQiG7XqE.js";import{a as ge}from"../chunks/string.ZJuK4sHN.js";import{t as pt}from"../chunks/class.iY6R2noI.js";import{P as dn}from"../chunks/Pending_Animation.BcSRQgqR.js";import{D as _n,b as Ne}from"../chunks/Details.BQhqIyiK.js";import{G as mn}from"../chunks/Github_Logo.sfQuXiFs.js";import{C as vn,T as hn}from"../chunks/Theme_Input.gKrS4a_U.js";import{b as Me}from"../chunks/input.CjCsO_74.js";function pn(s,t,e){He(()=>{var a=Ue(()=>t(s,e==null?void 0:e())||{});if(e&&(a!=null&&a.update)){var u=!1;K(()=>{var c=e();tn(c),u&&a.update(c)}),u=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}var Tt,Ft,Ut,de,We;const _e=class _e{constructor(t){B(this,de);B(this,Tt,new WeakMap);B(this,Ft,void 0);B(this,Ut,void 0);pe(this,Ut,t)}observe(t,e){var a=A(this,Tt).get(t)||new Set;return a.add(e),A(this,Tt).set(t,a),Pe(this,de,We).call(this).observe(t,A(this,Ut)),()=>{var u=A(this,Tt).get(t);u.delete(e),u.size===0&&(A(this,Tt).delete(t),A(this,Ft).unobserve(t))}}};Tt=new WeakMap,Ft=new WeakMap,Ut=new WeakMap,de=new WeakSet,We=function(){return A(this,Ft)??pe(this,Ft,new ResizeObserver(t=>{for(var e of t){_e.entries.set(e.target,e);for(var a of A(this,Tt).get(e.target)||[])a(e)}}))},at(_e,"entries",new WeakMap);let xe=_e;var fn=new xe({box:"border-box"});function Fe(s,t,e){var a=fn.observe(s,()=>e(s[t]));He(()=>(Ue(()=>e(s[t])),a))}var gn=d('<span class="font_mono">contextmenu</span> event',1),xn=d('<span class="font_mono">navigator.vibrate</span>'),bn=d('<span class="font_mono">navigator.vibrate</span>'),yn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul></section> <section><!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function wn(s){var t=yn(),e=h(t),a=w(e);Ot(a,{text:"Expected behaviors",slug:"expected-behaviors"});var u=n(n(a,!0)),c=n(n(u,!0)),f=n(w(c));se(f,{href:"Web/API/Element/contextmenu_event",children:(U,j)=>{var D=gn();r(U,D)}});var I=n(n(f,!0)),y=n(n(I,!0));se(y,{href:"Web/API/Navigator/vibrate",children:(U,j)=>{var D=xn();r(U,D)}});var x=n(n(c,!0)),E=n(n(x,!0)),S=n(n(E,!0)),k=n(n(S,!0)),v=n(n(k,!0)),g=w(v),C=n(n(g,!0)),m=n(n(C,!0)),i=n(n(m,!0)),_=n(n(i,!0)),T=n(n(_,!0)),N=n(w(T));se(N,{href:"Web/API/Navigator/vibrate",children:(U,j)=>{var D=bn();r(U,D)}});var $=n(n(e,!0)),L=w($);Ot(L,{text:"Motivation",slug:"motivation"}),r(s,t)}function Cn(s){const t=s-1;return t*t*t+1}function kn(s){return--s*s*s*s*s+1}function Re(s,{from:t,to:e},a={}){const u=getComputedStyle(s),c=u.transform==="none"?"":u.transform,[f,I]=u.transformOrigin.split(" ").map(parseFloat),y=t.left+t.width*f/e.width-(e.left+f),x=t.top+t.height*I/e.height-(e.top+I),{delay:E=0,duration:S=v=>Math.sqrt(v)*120,easing:k=Cn}=a;return{delay:E,duration:typeof S=="function"?S(Math.sqrt(y*y+x*x)):S,easing:k,css:(v,g)=>{const C=g*y,m=g*x,i=v+g*t.width/e.width,_=v+g*t.height/e.height;return`transform: ${c} translate(${C}px, ${m}px) scale(${i}, ${_});`}}}var Wt,Bt;class Be{constructor(){B(this,Wt,O(0));B(this,Bt,O(0))}get width(){return o(A(this,Wt))}set width(t){b(A(this,Wt),F(t))}get height(){return o(A(this,Bt))}set height(t){b(A(this,Bt),F(t))}}Wt=new WeakMap,Bt=new WeakMap;var Xt,Rt,Vt,Yt,Kt;class Tn{constructor(t,e){at(this,"is_menu",!1);at(this,"menu");B(this,Xt,O(!1));B(this,Rt,O());B(this,Vt,O(!1));B(this,Yt,O(null));B(this,Kt,O(null));this.menu=t,A(this,Rt).v=F(e)}get selected(){return o(A(this,Xt))}set selected(t){b(A(this,Xt),F(t))}get run(){return o(A(this,Rt))}set run(t){b(A(this,Rt),F(t))}get pending(){return o(A(this,Vt))}set pending(t){b(A(this,Vt),F(t))}get error_message(){return o(A(this,Yt))}set error_message(t){b(A(this,Yt),F(t))}get promise(){return o(A(this,Kt))}set promise(t){b(A(this,Kt),F(t))}}Xt=new WeakMap,Rt=new WeakMap,Vt=new WeakMap,Yt=new WeakMap,Kt=new WeakMap;var jt,Gt;class In{constructor(t,e){at(this,"is_menu",!0);at(this,"menu");at(this,"depth");B(this,jt,O(!1));B(this,Gt,O(F([])));this.menu=t,this.depth=e}get selected(){return o(A(this,jt))}set selected(t){b(A(this,jt),F(t))}get items(){return o(A(this,Gt))}set items(t){b(A(this,Gt),F(t))}}jt=new WeakMap,Gt=new WeakMap;var Jt;class En{constructor(){at(this,"is_menu",!0);at(this,"menu",null);at(this,"depth",1);B(this,Jt,O(F([])))}get items(){return o(A(this,Jt))}set items(t){b(A(this,Jt),F(t))}}Jt=new WeakMap;var Qt,Zt,te,ee,ne,oe,re;class ke{constructor(t){at(this,"layout");at(this,"initial_layout");B(this,Qt,O(!1));B(this,Zt,O(0));B(this,te,O(0));B(this,ee,O(F([])));B(this,ne,O());B(this,oe,O(F(new En)));B(this,re,O(F([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout||new Be}get opened(){return o(A(this,Qt))}set opened(t){b(A(this,Qt),F(t))}get x(){return o(A(this,Zt))}set x(t){b(A(this,Zt),F(t))}get y(){return o(A(this,te))}set y(t){b(A(this,te),F(t))}get params(){return o(A(this,ee))}set params(t){b(A(this,ee),F(t))}get error(){return o(A(this,ne))}set error(t){b(A(this,ne),F(t))}get root_menu(){return o(A(this,oe))}set root_menu(t){b(A(this,oe),F(t))}get selections(){return o(A(this,re))}set selections(t){b(A(this,re),F(t))}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const u=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=u??"unknown error",this.error=u}if(ln(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(u=>{if(a===t.promise){if(typeof(u==null?void 0:u.ok)=="boolean")if(u.ok)this.close();else{const c=typeof u.message=="string"?u.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return u}},u=>{if(a!==t.promise)return;const c=typeof(u==null?void 0:u.message)=="string"?u.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);return t?this.activate(t):this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length)return this.select_first();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length)return this.select_last();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)||this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)||this.root_menu;return this.select(t.at(-1))}add_entry(t){const e=qe()||this.root_menu,a=new Tn(e,t);return e.items.push(a),$e(()=>{e.items.length=0}),a}add_submenu(){const t=qe()||this.root_menu,e=new In(t,t.depth+1);return t.items.push(e),Nn(e),$e(()=>{t.items.length=0}),e}}Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap,re=new WeakMap;const Te="contextmenu",Pn=`a,[data-${Te}]`,ce=new Map;let Sn=0;const An=(s,t)=>{const e=Sn+++"";return s.dataset[Te]=e,ce.set(e,t),{update:a=>{ce.set(e,a)},destroy:()=>{ce.delete(e)}}},zn=17,De=(s,t,e,a)=>{var c;const u=On(s);return u!=null&&u.length?(a.open(u,t,e),(c=navigator.vibrate)==null||c.call(navigator,zn),!0):!1},On=s=>{var c;let t=null,e=s,a,u;for(;e=e==null?void 0:e.closest(Pn);){if(a=e.dataset[Te]){if(t||(t=[]),u=ce.get(a),u===void 0)continue;Array.isArray(u)?(t||(t=[])).push(...u):(t||(t=[])).push(u)}e.tagName==="A"&&(t||(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const f=(c=window.getSelection())==null?void 0:c.toString();f&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(f)}})}return t},Xe=Symbol(),$n=s=>be(Xe,s),Ie=()=>ye(Xe),Ve=Symbol(),Nn=s=>be(Ve,s),qe=()=>ye(Ve),Ye=Symbol(),Ke=(s=new Be)=>(be(Ye,s),s),Mn=()=>ye(Ye);var Fn=(s,t)=>t.close(),Rn=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function je(s,t){dt(t,!0);const e="🔗",a=Z(t,"icon",3,e),u=Ie(),c=(i,_=location.host)=>{const T=ge(ge(i,"https://"),"http://");return T.startsWith(_+"/")?ge(T,_):T},f=R(()=>c(t.href)),I=R(()=>!(o(f)[0]==="."||o(f)[0]==="/"&&o(f)[1]!=="/")),y=R(()=>o(I)?"noreferrer":void 0);var x=Rn(),E=w(x);E.__click=[Fn,u];var S=w(E),k=w(S),v=w(k);q(v,()=>typeof a()=="string",i=>{var _=zt(i);K(()=>st(_,a())),r(i,_)},i=>{var _=P(),T=h(_);it(a,T,()=>e),r(i,_)});var g=n(n(k,!0)),C=w(g),m=w(C);q(m,()=>t.children,i=>{var _=P(),T=h(_);it(()=>t.children,T),r(i,_)},i=>{var _=zt(i);K(()=>st(_,o(f))),r(i,_)}),K(()=>{le(E,"href",t.href),le(E,"rel",o(y))}),r(s,x),_t()}we(["click"]);var Dn=d("⚠️",1),qn=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function nt(s,t){dt(t,!0);const e=Ie(),a=e.add_entry(t.run);qt(()=>{a.run=t.run});const u=R(()=>a),c=R(()=>{let{selected:m,pending:i,error_message:_}=o(u);return[m,i,_]}),f=R(()=>o(c)[0]),I=R(()=>o(c)[1]),y=R(()=>o(c)[2]);var x=qn();x.__click=()=>{setTimeout(()=>e.activate(a))};var E=w(x),S=w(E),k=w(S);q(k,()=>typeof t.icon=="string",m=>{var i=zt(m);K(()=>st(i,t.icon)),r(m,i)},m=>{var i=P(),_=h(i);q(_,()=>t.icon,T=>{var N=P(),$=h(N);it(()=>t.icon,$),r(T,N)},null,!0),r(m,i)});var v=n(n(S,!0)),g=w(v);it(()=>t.children,g);var C=n(n(v,!0));q(C,()=>o(I),m=>{var i=P(),_=h(i);dn(_,{}),r(m,i)},m=>{var i=P(),_=h(i);q(_,()=>o(y),T=>{var N=Dn();r(T,N)},null,!0),r(m,i)}),K(()=>{le(x,"title",o(y)?`Error: ${o(y)}`:void 0),pt(x,"selected",o(f))}),ot("mouseenter",x,m=>{Mt(m),e.select(a)},!1),r(s,x),_t()}we(["click"]);function Ge(s,t){var e=P(),a=h(e);nt(a,{get run(){return t.run},icon:c=>{var f=zt(c);K(()=>st(f,t.icon)),r(c,f)},children:(c,f)=>{var I=zt(c);K(()=>st(I,t.content)),r(c,I)}}),r(s,e)}var Ln=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Hn=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Un=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Wn=d("<!> <!> <!>",1);function ae(s,t){dt(t,!0);const e=Z(t,"contextmenu",11,()=>new ke),a=Z(t,"longpress_move_tolerance",3,21),u=Z(t,"longpress_duration",3,633),c=Z(t,"bypass_with_tap_then_longpress",3,!0),f=Z(t,"tap_then_longpress_duration",3,660),I=Z(t,"tap_then_longpress_move_tolerance",3,7),y=Z(t,"open_offset_x",11,()=>-2),x=Z(t,"open_offset_y",11,()=>-2),E=Z(t,"scoped",3,!1);$n(e());let S=O(void 0);const k=R(e),v=R(()=>{let{layout:p,initial_layout:l}=o(k);return[p,l]}),g=R(()=>o(v)[0]),C=R(()=>o(v)[1]),m=R(()=>o(g)===o(C));let i=O(void 0),_=O(void 0);qt(()=>{!o(m)&&o(i)!==void 0&&(o(g).width=o(i))}),qt(()=>{!o(m)&&o(_)!==void 0&&(o(g).height=o(_))});const T=Ke();qt(()=>{if(o(S)){const p=o(S).getBoundingClientRect();T.width=p.width,T.height=p.height}});const N=R(()=>e().x+Math.min(0,o(g).width-(e().x+T.width))),$=R(()=>e().y+Math.min(0,o(g).height-(e().y+T.height)));let L=O(void 0),U=O(void 0),j=O(void 0),D=O(void 0),J=O(void 0),H=O(void 0);const V=()=>{o(J)&&b(J,!1),o(D)!=null&&(clearTimeout(o(D)),b(D,null))},X=p=>{var z;if(o(H)){b(H,!1);return}if(o(J)){V(),Mt(p);return}const{target:l}=p;p.shiftKey||!(l instanceof HTMLElement||l instanceof SVGElement)||(z=o(S))!=null&&z.contains(l)||fe(l)||Oe(l)||De(l,p.clientX+y(),p.clientY+x(),e())&&(Mt(p),V())},Y=p=>{o(J)&&b(J,!1);const{touches:l,target:z}=p;if(e().opened||l.length!==1||p.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||fe(z)||Oe(z))return;const{clientX:W,clientY:Ct}=l[0];if(c()){if(o(j)!=null&&performance.now()-o(j)<f()&&Math.hypot(W-o(L),Ct-o(U))<I()){b(H,!0),b(j,null);return}b(j,F(performance.now()))}b(L,F(W)),b(U,F(Ct)),o(D)!=null&&V(),b(D,F(setTimeout(()=>{b(J,!0),De(z,o(L)+y(),o(U)+x(),e())},u())))},tt=p=>{if(o(D)==null)return;const{touches:l}=p;if(l.length!==1)return;const{clientX:z,clientY:W}=l[0];Math.hypot(z-o(L),W-o(U))>a()&&(e().opened&&e().close(),V())},rt=p=>{o(D)!=null&&(o(J)&&Mt(p),V())},ft=p=>{o(S)&&!o(S).contains(p.target)&&e().close()},mt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),ct=p=>{const l=mt.get(p.key);!l||fe(p.target)||(Mt(p),l())};var lt=Wn();ot("contextmenu",At,function(...p){const l=E()?void 0:X;return l==null?void 0:l.apply(this,p)},!0,!1),ot("touchstart",At,function(...p){const l=E()?void 0:Y;return l==null?void 0:l.apply(this,p)},!0,!0),ot("touchmove",At,function(...p){const l=E()?void 0:tt;return l==null?void 0:l.apply(this,p)},!0,!0),ot("touchend",At,function(...p){const l=E()?void 0:rt;return l==null?void 0:l.apply(this,p)},!0,!1),ot("touchcancel",At,function(...p){const l=E()?void 0:rt;return l==null?void 0:l.apply(this,p)},!0,!1),ot("mousedown",At,function(...p){const l=e().opened?ft:void 0;return l==null?void 0:l.apply(this,p)},!0,!0),ot("keydown",At,function(...p){const l=e().opened?ct:void 0;return l==null?void 0:l.apply(this,p)},!0,!1);function G(p,l=Se){var z=P(),W=h(z);je(W,ze(l)),r(p,z)}function wt(p,l=Se){var z=P(),W=h(z);Ge(W,ze(l)),r(p,z)}var gt=h(lt);q(gt,E,p=>{var l=Ln(),z=w(l);it(()=>t.children,z),ot("contextmenu",l,X,!0,!1),ot("touchstart",l,Y,!0,!0),ot("touchmove",l,tt,!0,!0),ot("touchend",l,rt,!0,!1),ot("touchcancel",l,rt,!0,!1),r(p,l)},p=>{var l=P(),z=h(l);it(()=>t.children,z),r(p,l)});var $t=n(n(gt,!0));q($t,()=>!o(m),p=>{var l=Hn();Fe(l,"clientHeight",z=>b(_,z)),Fe(l,"clientWidth",z=>b(i,z)),r(p,l)});var Nt=n(n($t,!0));q(Nt,()=>e().opened,p=>{var l=Un();Ce(l,z=>b(S,F(z)),()=>o(S)),Lt(l,76,()=>e().params,(z,W)=>M(z),(z,W,Ct)=>{var vt=P(),ut=h(vt);q(ut,()=>typeof M(W)=="function",Et=>{var et=P(),xt=h(et);it(()=>M(W),xt),r(Et,et)},Et=>{var et=P(),xt=h(et);q(xt,()=>M(W).snippet==="link",Pt=>{var Q=P(),St=h(Q);G(St,()=>M(W).props),r(Pt,Q)},Pt=>{var Q=P(),St=h(Q);q(St,()=>M(W).snippet==="text",me=>{var ht=P(),bt=h(ht);wt(bt,()=>M(W).props),r(me,ht)},null,!0),r(Pt,Q)},!0),r(Et,et)}),r(z,vt)}),K(()=>ie(l,"transform",`translate3d(${It(o(N))}px, ${It(o($))}px, 0)`)),r(p,l)}),r(s,lt),_t()}var Bn=d('<span class="display_contents"><!></span>');function kt(s,t){dt(t,!0);var e=Bn(),a=w(e);it(()=>t.children,a),pn(e,(u,c)=>An(u,c),()=>t.entries),r(s,e),_t()}var Xn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Vn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ee(s,t){dt(t,!0);const e=Ie(),a=e.add_submenu(),{layout:u}=e,c=R(()=>a.selected);let f=O(void 0);const I=Mn(),y=Ke();let x=O(0),E=O(0);qt(()=>{o(f)&&S(o(f),u,I)});const S=(N,$,L)=>{const{x:U,y:j,width:D,height:J}=N.getBoundingClientRect();y.width=D,y.height=J;const H=U-o(x),V=j-o(E),X=H+D+L.width-$.width;if(X<=0)b(x,F(L.width));else{const Y=D-H;Y<=0?b(x,-D):Y>X?b(x,L.width-X):b(x,Y-D)}b(E,F(Math.min(0,$.height-(V+J))))};var k=Vn(),v=w(k),g=w(v),C=w(g),m=w(C);q(m,()=>t.icon,N=>{var $=P(),L=h($);it(()=>t.icon,L),r(N,$)});var i=n(n(C,!0)),_=w(i);it(()=>t.children,_);var T=n(n(v,!0));q(T,()=>o(c),N=>{var $=Xn();Ce($,U=>b(f,F(U)),()=>o(f));var L=w($);it(()=>t.menu,L),K(()=>{ie($,"transform",`translate3d(${It(o(x))}px, ${It(o(E))}px, 0)`),ie($,"max-height",`${It(u.height)}px`)}),r(N,$)}),K(()=>{ie(k,"--contextmenu_depth",a.depth),le(v,"aria-expanded",o(c)),pt(v,"selected",o(c))}),ot("mouseenter",v,N=>{Mt(N),setTimeout(()=>e.select(a))},!1),r(s,k),_t()}var Yn=d("🏠",1),Kn=d("🌄",1),jn=d("go home",1),Gn=d("go adventure",1),Jn=d("🌄",1),Qn=d("🏠",1),Zn=d("do adventure",1),to=d("be home",1),eo=d("<!> <!>",1);function ue(s,t){dt(t,!0);const e=Z(t,"name",3,"Cat"),a=Z(t,"icon",3,"😺");var u=P(),c=h(u);Ee(c,{icon:y=>{var x=zt(y);K(()=>st(x,a())),r(y,x)},menu:y=>{var x=eo(),E=h(x);nt(E,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:v=>{var g=P(),C=h(g);q(C,()=>t.position==="adventure",m=>{var i=Yn();r(m,i)},m=>{var i=Kn();r(m,i)}),r(v,g)},children:(v,g)=>{var C=P(),m=h(C);q(m,()=>t.position==="adventure",i=>{var _=jn();r(i,_)},i=>{var _=Gn();r(i,_)}),r(v,C)}});var S=n(n(E,!0));nt(S,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:v=>{var g=P(),C=h(g);q(C,()=>t.position==="adventure",m=>{var i=Jn();r(m,i)},m=>{var i=Qn();r(m,i)}),r(v,g)},children:(v,g)=>{var C=P(),m=h(C);q(m,()=>t.position==="adventure",i=>{var _=Zn();r(i,_)},i=>{var _=to();r(i,_)}),r(v,C)}}),r(y,x)},children:(y,x)=>{var E=zt(y);K(()=>st(E,e())),r(y,E)}}),r(s,u),_t()}var no=d("Source code",1),oo=d("?",1),ro=d("About",1),ao=d("<!> <!>",1);function so(s,t){var e=ao(),a=h(e);je(a,{href:"https://github.com/ryanatkn/fuz",icon:f=>{var I=P(),y=h(I);mn(y,{size:"var(--icon_size_xs)"}),r(f,I)},children:(f,I)=>{var y=no();r(f,y)}});var u=n(n(a,!0));nt(u,{get run(){return t.toggle_about_dialog},icon:f=>{var I=oo();r(f,I)},children:(f,I)=>{var y=ro();r(f,y)}}),r(s,e)}const Je=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const e=s[0];return e.icon+e.name};var io=d("🏠",1),co=d("🐈‍⬛",1),lo=d("call",1),uo=d("🏠",1),_o=d("be",1),mo=d("🦋",1),vo=d("leave",1),ho=d("<!> <!>",1),po=d("<!> <!> <!>",1),fo=d("home",1);function go(s,t){dt(t,!0);const e=R(()=>Je(t.adventure_cats));var a=P(),u=h(a);Ee(u,{icon:I=>{var y=io();r(I,y)},menu:I=>{var y=po(),x=h(y);q(x,()=>o(e),k=>{var v=P(),g=h(v);nt(g,{run:()=>t.act({type:"call_cats_home"}),icon:m=>{var i=co();r(m,i)},children:(m,i)=>{var _=lo();r(m,_)}}),r(k,v)});var E=n(n(x,!0));Lt(E,69,()=>t.home_cats,(k,v)=>M(k).name,(k,v,g)=>{var C=P(),m=h(C);ue(m,{get name(){return M(v).name},get icon(){return M(v).icon},get position(){return M(v).position},get act(){return t.act}}),r(k,C)});var S=n(n(E,!0));q(S,()=>!o(e),k=>{var v=ho(),g=h(v);nt(g,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:i=>{var _=uo();r(i,_)},children:(i,_)=>{var T=_o();r(i,T)}});var C=n(n(g,!0));nt(C,{run:()=>t.act({type:"call_cats_adventure"}),icon:i=>{var _=mo();r(i,_)},children:(i,_)=>{var T=vo();r(i,T)}}),r(k,v)}),r(I,y)},children:(I,y)=>{var x=fo();r(I,x)}}),r(s,a),_t()}var xo=d("🌄",1),bo=d("🦋",1),yo=d("call",1),wo=d("🌄",1),Co=d("do",1),ko=d("🐈‍⬛",1),To=d("leave",1),Io=d("<!> <!>",1),Eo=d("<!> <!> <!>",1),Po=d("adventure",1);function So(s,t){dt(t,!0);const e=R(()=>Je(t.home_cats));var a=P(),u=h(a);Ee(u,{icon:I=>{var y=xo();r(I,y)},menu:I=>{var y=Eo(),x=h(y);q(x,()=>o(e),k=>{var v=P(),g=h(v);nt(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:m=>{var i=bo();r(m,i)},children:(m,i)=>{var _=yo();r(m,_)}}),r(k,v)});var E=n(n(x,!0));Lt(E,69,()=>t.adventure_cats,(k,v)=>M(k).name,(k,v,g)=>{var C=P(),m=h(C);ue(m,{get name(){return M(v).name},get icon(){return M(v).icon},get position(){return M(v).position},get act(){return t.act}}),r(k,C)});var S=n(n(E,!0));q(S,()=>!o(e),k=>{var v=Io(),g=h(v);nt(g,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:i=>{var _=wo();r(i,_)},children:(i,_)=>{var T=Co();r(i,T)}});var C=n(n(g,!0));nt(C,{run:()=>t.act({type:"call_cats_home"}),icon:i=>{var _=ko();r(i,_)},children:(i,_)=>{var T=To();r(i,T)}}),r(k,v)}),r(I,y)},children:(I,y)=>{var x=Po();r(I,x)}}),r(s,a),_t()}var Ao=d('<span class="icon svelte-u0xdy"> </span>'),zo=d('<span class="name svelte-u0xdy"><!> </span>'),Oo=d('<span class="cat svelte-u0xdy"><!><!></span>');function Le(s,t){dt(t,!0);const e=Z(t,"name",3,"Cat"),a=Z(t,"icon",3,"😺"),u=Z(t,"show_name",3,!0),c=Z(t,"show_icon",3,!0);var f=Oo(),I=w(f);q(I,c,x=>{var E=Ao(),S=w(E);K(()=>st(S,a())),r(x,E)});var y=n(I);q(y,u,x=>{var E=zo(),S=w(E);q(S,()=>t.children,v=>{var g=P(),C=h(g);it(()=>t.children,C),r(v,g)});var k=n(S,!0);K(()=>st(k,e())),r(x,E)}),K(()=>pt(f,"has-icon",c())),r(s,f),_t()}const $o=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Details from '$lib/Details.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import Cat_Contextmenu from '$routes/library/Contextmenu/Cat_Contextmenu.svelte';
	import App_Contextmenu from '$routes/library/Contextmenu/App_Contextmenu.svelte';
	import Home_Contextmenu from '$routes/library/Contextmenu/Home_Contextmenu.svelte';
	import Adventure_Contextmenu from '$routes/library/Contextmenu/Adventure_Contextmenu.svelte';
	import Cat_View from '$routes/library/Contextmenu/Cat_View.svelte';
	import type {Cat, Cat_Position, History_Item} from '$routes/library/Contextmenu/helpers.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import file_contents from '$routes/library/Contextmenu/Example_Full.svelte?raw';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

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
	<Tome_Subheading text="Full example" slug="full-example" />
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
							<div class="cat_wrapper" in:receive={{key: name}} out:send={{key: name}} animate:flip>
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
							<div class="cat_wrapper" in:receive={{key: name}} out:send={{key: name}} animate:flip>
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
`;var No=d("<!> <!>",1),Mo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Fo=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Do=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),qo=d("View example source",1),Lo=d("<section><!> <!></section> <section><!></section>",1),Ho=d("<!> <!>",1),Uo=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Wo=d("<!> <!>",1);function Bo(s,t){dt(t,!0);const e="Alyssa",a="Ben",u="home";let c=O(u),f=O(u);const I=R(()=>o(c)===o(f)?"😺":"😾"),y=R(()=>o(c)===o(f)?"😸":"😿"),x=R(()=>({name:e,icon:o(I),position:o(c)})),E=R(()=>({name:a,icon:o(y),position:o(f)}));let S=O(!1);const k=(H,V)=>{const X=[],Y=[];for(const tt of H){const rt=tt.position==="home"?X:Y;V?rt.unshift(tt):rt.push(tt)}return{home_cats:X,adventure_cats:Y}},v=R(()=>k([o(x),o(E)],o(S))),g=R(()=>{let{home_cats:H,adventure_cats:V}=o(v);return[H,V]}),C=R(()=>o(g)[0]),m=R(()=>o(g)[1]),i=R(()=>o(c)!==u||o(f)!==u),_=()=>{b(c,u),b(f,u)};let T=O(!1);const N=()=>{b(T,!o(T))},$=H=>{switch(H.type){case"call_cats_adventure":{b(c,"adventure"),b(f,"adventure");break}case"call_cats_home":{b(c,"home"),b(f,"home");break}case"cat_go_adventure":{H.name===e?b(c,"adventure"):H.name===a&&b(f,"adventure");break}case"cat_go_home":{H.name===e?b(c,"home"):H.name===a&&b(f,"home");break}case"cat_be_or_do":{b(S,!o(S));break}}},[L,U]=rn({fallback:(H,V)=>{const X=window.getComputedStyle(H),Y=X.transform==="none"?"":X.transform;return{duration:1500,easing:kn,css:tt=>`
					transform: ${Y} scale(${tt});
					opacity: ${tt}
				`}}});var j=Wo(),D=h(j);ae(D,{scoped:!0,children:(H,V)=>{var X=Ho(),Y=h(X);Ot(Y,{text:"Full example",slug:"full-example"});var tt=n(n(Y,!0));kt(tt,{entries:ft=>{var mt=No(),ct=h(mt);q(ct,()=>o(i),G=>{var wt=P(),gt=h(wt);Ge(gt,{run:_,content:"Reset",icon:"↻"}),r(G,wt)});var lt=n(n(ct,!0));so(lt,{toggle_about_dialog:N}),r(ft,mt)},children:(ft,mt)=>{var ct=Lo(),lt=h(ct),G=w(lt);kt(G,{entries:p=>{var l=P(),z=h(l);go(z,{act:$,get home_cats(){return o(C)},get adventure_cats(){return o(m)}}),r(p,l)},children:(p,l)=>{var z=Fo(),W=w(z),Ct=n(n(W,!0));Lt(Ct,95,()=>o(C),(vt,ut)=>M(M(vt)).name,(vt,ut,Et)=>{let et=()=>M(M(ut)).name,xt=()=>M(M(ut)).icon,Pt=()=>M(M(ut)).position;var Q=Mo();Dt(1,Q,()=>U,()=>({key:et()})),Dt(2,Q,()=>L,()=>({key:et()})),Ae(Q,()=>Re,null);var St=w(Q);kt(St,{entries:ht=>{var bt=P(),yt=h(bt);ue(yt,{act:$,get name(){return et()},get icon(){return xt()},get position(){return Pt()}}),r(ht,bt)},children:(ht,bt)=>{var yt=P(),ve=h(yt);Le(ve,{get name(){return et()},get icon(){return xt()}}),r(ht,yt)}}),r(vt,Q)}),r(p,z)}});var wt=n(n(G,!0));kt(wt,{entries:p=>{var l=P(),z=h(l);So(z,{act:$,get home_cats(){return o(C)},get adventure_cats(){return o(m)}}),r(p,l)},children:(p,l)=>{var z=Do(),W=w(z),Ct=n(n(W,!0));Lt(Ct,95,()=>o(m),(vt,ut)=>M(M(vt)).name,(vt,ut,Et)=>{let et=()=>M(M(ut)).name,xt=()=>M(M(ut)).icon,Pt=()=>M(M(ut)).position;var Q=Ro();Dt(1,Q,()=>U,()=>({key:et()})),Dt(2,Q,()=>L,()=>({key:et()})),Ae(Q,()=>Re,null);var St=w(Q);kt(St,{entries:ht=>{var bt=P(),yt=h(bt);ue(yt,{act:$,get name(){return et()},get icon(){return xt()},get position(){return Pt()}}),r(ht,bt)},children:(ht,bt)=>{var yt=P(),ve=h(yt);Le(ve,{get name(){return et()},get icon(){return xt()}}),r(ht,yt)}}),r(vt,Q)}),r(p,z)}});var gt=n(n(lt,!0)),$t=w(gt);_n($t,{summary:p=>{var l=qo();r(p,l)},children:(p,l)=>{var z=P(),W=h(z);Ht(W,{content:$o}),r(p,z)}}),r(ft,ct)}}),r(H,X)}});var J=n(n(D,!0));q(J,()=>o(T),H=>{var V=P(),X=h(V);un(X,{onclose:()=>b(T,!1),children:(Y,tt)=>{var rt=Uo(),ft=w(rt),mt=n(n(ft,!0)),ct=n(n(mt,!0)),lt=n(n(ct,!0)),G=n(n(lt,!0)),wt=w(G),gt=n(n(wt,!0));vn(gt,{});var $t=n(n(gt,!0)),Nt=n(n($t,!0));hn(Nt,{}),r(Y,rt)}}),r(H,V)}),r(s,j),_t()}var Xo=d("Hello world",1),Vo=d("🌞",1),Yo=d("Hello with an optional icon snippet",1),Ko=d("Hello with an optional icon string",1),jo=d("<!> <!> <!>",1),Go=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Jo=d("<!> <!>",1);function Qo(s){let t=O(!1),e=O(!1),a=O(!1);var u=Jo(),c=h(u);Ot(c,{text:"Basic usage",slug:"basic-usage"});var f=n(n(c,!0));ae(f,{scoped:!0,children:(I,y)=>{var x=P(),E=h(x);kt(E,{entries:k=>{var v=jo(),g=h(v);nt(g,{run:()=>b(t,!o(t)),children:(i,_)=>{var T=Xo();r(i,T)}});var C=n(n(g,!0));nt(C,{run:()=>b(e,!o(e)),icon:_=>{var T=Vo();r(_,T)},children:(_,T)=>{var N=Yo();r(_,N)}});var m=n(n(C,!0));nt(m,{run:()=>b(a,!o(a)),icon:"🌚",children:(i,_)=>{var T=Ko();r(i,T)}}),r(k,v)},children:(k,v)=>{var g=Go(),C=w(g),m=n(n(C,!0)),i=R(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(a)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Ht(m,{get content(){return o(i)}});var _=n(n(m,!0)),T=w(_),N=w(T),$=n(n(_,!0)),L=w($),U=w(L),j=n(n($,!0)),D=w(j),J=w(D);K(()=>{pt(T,"color_g_5",o(t)),st(N,`greeted = ${It(o(t))}`),pt(L,"color_e_5",o(e)),st(U,`greeted_icon_snippet = ${It(o(e))}`),pt(D,"color_d_5",o(a)),st(J,`greeted_icon_string = ${It(o(a))}`)}),r(k,g)}}),r(I,x)}}),r(s,u)}var Zo=d("Toggle",1),tr=d("<div>toggled</div>"),er=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),nr=d("<!> <!>",1);function or(s){const t=new ke;let e=O(!1);var a=P(),u=h(a);ae(u,{contextmenu:t,scoped:!0,children:(c,f)=>{var I=nr(),y=h(I);Ot(y,{text:"Custom instance",slug:"custom-instance"});var x=n(n(y,!0));kt(x,{entries:S=>{var k=P(),v=h(k);nt(v,{run:()=>b(e,!o(e)),children:(g,C)=>{var m=Zo();r(g,m)}}),r(S,k)},children:(S,k)=>{var v=er(),g=w(v);Ht(g,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var C=n(n(g,!0));Ht(C,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var m=n(n(C,!0)),i=n(n(m,!0)),_=w(i);q(_,()=>o(e),T=>{var N=tr();Dt(3,N,()=>an),r(T,N)}),r(S,v)}}),r(c,I)}}),r(s,a)}var rr=d("Toggle something",1),ar=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button>selecting text</button> and then
					opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),sr=d("<div><!></div> <!>",1);function ir(s){const t=new ke;let e=O(!1),a;const u=()=>{const k=window.getSelection();if(!k)return;const v=document.createRange();v.selectNodeContents(a),k.removeAllRanges(),k.addRange(v)};let c=O("");const f="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",I=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,y=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,x=R(()=>o(c)===f||o(c)===I||o(c)===y);var E=P(),S=h(E);ae(S,{contextmenu:t,scoped:!0,children:(k,v)=>{var g=sr(),C=h(g),m=w(C);Ot(m,{text:"Select text",slug:"select-text"});var i=n(n(C,!0));kt(i,{entries:T=>{var N=P(),$=h(N);nt($,{run:()=>b(e,!o(e)),children:(L,U)=>{var j=rr();r(L,j)}}),r(T,N)},children:(T,N)=>{var $=ar(),L=w($);Ce(L,G=>a=G,()=>a);var U=w(L),j=n(n(U,!0)),D=n(w(j));D.__click=u;var J=n(n(L,!0)),H=w(J);sn(H);var V=n(n(J,!0)),X=n(n(V,!0)),Y=w(X);cn(Y);var tt=n(n(X,!0)),rt=w(tt);se(rt,{href:"Web/HTML/Global_attributes/contenteditable"});var ft=n(n(tt,!0)),mt=n(n(ft,!0)),ct=n(n(mt,!0)),lt=n(n(ct,!0));K(()=>{pt($,"color_g_5",o(x)),pt(D,"color_a",o(e)),pt(V,"color_g_5",o(x))}),Me(H,()=>o(c),G=>b(c,G)),Me(Y,()=>o(c),G=>b(c,G)),Ne("innerText",mt,()=>o(c),G=>b(c,G)),Ne("innerText",lt,()=>o(c),G=>b(c,G)),r(T,$)}}),K(()=>pt(C,"color_d_5",o(x))),r(k,g)}}),r(s,E)}we(["click"]);var cr=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function lr(s){var t=P(),e=h(t);ae(e,{scoped:!0,children:(a,u)=>{var c=cr(),f=h(c);Ot(f,{text:"Default behaviors",slug:"default-behaviors"});var I=n(n(f,!0)),y=w(I);Ht(y,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),r(a,c)}}),r(s,t)}var ur=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Dr(s,t){dt(t,!1);const a=on("Contextmenu");en();var u=P(),c=h(u);nn(c,{tome:a,children:(f,I)=>{var y=ur(),x=h(y),E=n(n(x,!0)),S=w(E);Qo(S);var k=n(n(E,!0)),v=w(k);lr(v);var g=n(n(k,!0)),C=w(g);or(C);var m=n(n(g,!0)),i=w(m);ir(i);var _=n(n(m,!0)),T=w(_);Bo(T,{});var N=n(n(_,!0)),$=w(N);wn($),r(f,y)}}),r(s,u),_t()}export{Dr as component};
