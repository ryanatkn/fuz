var tn=Object.defineProperty;var en=(i,t,e)=>t in i?tn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var it=(i,t,e)=>(en(i,typeof t!="symbol"?t+"":t,e),e),pe=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var P=(i,t,e)=>(pe(i,t,"read from private field"),e?e.call(i):t.get(i)),B=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},fe=(i,t,e,s)=>(pe(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e);var Pe=(i,t,e)=>(pe(i,t,"access private method"),e);import{a,t as d,c as C,s as n,f as h,b as E,n as At,$ as St}from"../chunks/disclose-version.Dxr0gsna.js";import{h as Ue,u as We,r as nn,T as on,J as O,g as o,v as x,s as ye,f as we,p as mt,t as G,a as ht,d as D,N as Ut,a7 as M,a5 as Se}from"../chunks/runtime.jOsey7ll.js";import{i as an}from"../chunks/lifecycle.9rCdOzSM.js";import{T as rn}from"../chunks/Tome_Detail.Biv7CnIw.js";import{g as sn}from"../chunks/tome.B0jujVAD.js";import{M as ce}from"../chunks/Mdn_Link.D8ArhA4m.js";import{T as zt}from"../chunks/Tome_Subheading.BFc2_PoY.js";import{i as L}from"../chunks/if.Wn85vDr3.js";import{e as Wt}from"../chunks/each.Dv7QH03A.js";import{t as Ht,a as Ae,c as ln,s as cn}from"../chunks/index.YqYSqJjX.js";import{C as Bt}from"../chunks/Code.BVkDTZyU.js";import{d as Ce,s as lt,e as et,a as Tt}from"../chunks/render.DebiWJO9.js";import{p as F}from"../chunks/proxy.Cl3psK3T.js";import{s as ct,b as _e,r as un,d as dn}from"../chunks/attributes.BJddIwjt.js";import{s as ue}from"../chunks/style.iv2mhl8q.js";import{b as ke}from"../chunks/this.C6AUypjL.js";import{p as J,s as ze}from"../chunks/props.D7qg7EHC.js";import{a as _n,s as Rt,b as ge,c as Oe,D as vn}from"../chunks/Dialog.fp8_1O6l.js";import{o as Ne}from"../chunks/index-client.BRyY5q1V.js";import{a as xe}from"../chunks/string.ZJuK4sHN.js";import{t as bt}from"../chunks/class.DKRvNPJw.js";import{P as mn}from"../chunks/Pending_Animation.3iqKz6JT.js";import{D as hn,b as Me}from"../chunks/Details.tiBT3sy7.js";import{G as pn}from"../chunks/Github_Logo.DlDx6Vfr.js";import{C as fn,T as gn}from"../chunks/Theme_Input.hTynp6EM.js";import{b as Fe}from"../chunks/input.xH_ElDYe.js";function xn(i,t,e){Ue(()=>{var s=We(()=>t(i,e==null?void 0:e())||{});if(e&&(s!=null&&s.update)){var r=!1;nn(()=>{var l=e();on(l),r&&s.update(l)}),r=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}var $t,Dt,Xt,me,Be;const he=class he{constructor(t){B(this,me);B(this,$t,new WeakMap);B(this,Dt,void 0);B(this,Xt,void 0);fe(this,Xt,t)}observe(t,e){var s=P(this,$t).get(t)||new Set;return s.add(e),P(this,$t).set(t,s),Pe(this,me,Be).call(this).observe(t,P(this,Xt)),()=>{var r=P(this,$t).get(t);r.delete(e),r.size===0&&(P(this,$t).delete(t),P(this,Dt).unobserve(t))}}};$t=new WeakMap,Dt=new WeakMap,Xt=new WeakMap,me=new WeakSet,Be=function(){return P(this,Dt)??fe(this,Dt,new ResizeObserver(t=>{for(var e of t){he.entries.set(e.target,e);for(var s of P(this,$t).get(e.target)||[])s(e)}}))},it(he,"entries",new WeakMap);let be=he;var bn=new be({box:"border-box"});function Re(i,t,e){var s=bn.observe(i,()=>e(i[t]));Ue(()=>(We(()=>e(i[t])),s))}var yn=d('<span class="font_mono">contextmenu</span> event',1),wn=d('<span class="font_mono">navigator.vibrate</span>'),Cn=d('<span class="font_mono">navigator.vibrate</span>'),kn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function $n(i){var t=kn(),e=h(t),s=C(e);zt(s,{text:"Expected behaviors",slug:"expected-behaviors"});var r=n(n(s,!0)),l=n(n(r,!0)),f=n(C(l));ce(f,{href:"Web/API/Element/contextmenu_event",children:(Y,K)=>{var H=yn();a(Y,H)},$$slots:{default:!0}});var $=n(n(f,!0)),b=n(n($,!0));ce(b,{href:"Web/API/Navigator/vibrate",children:(Y,K)=>{var H=wn();a(Y,H)},$$slots:{default:!0}});var g=n(n(l,!0)),I=n(n(g,!0)),S=n(n(I,!0)),y=n(n(S,!0)),m=n(n(y,!0)),w=C(m),p=n(n(w,!0)),v=n(n(p,!0)),_=n(n(v,!0)),c=n(n(_,!0)),k=n(n(c,!0)),A=n(C(k));ce(A,{href:"Web/API/Navigator/vibrate",children:(Y,K)=>{var H=Cn();a(Y,H)},$$slots:{default:!0}});var N=n(n(e,!0)),U=C(N);zt(U,{text:"Motivation",slug:"motivation"}),a(i,t)}function Tn(i){const t=i-1;return t*t*t+1}function In(i){return--i*i*i*i*i+1}function De(i,{from:t,to:e},s={}){const r=getComputedStyle(i),l=r.transform==="none"?"":r.transform,[f,$]=r.transformOrigin.split(" ").map(parseFloat),b=t.left+t.width*f/e.width-(e.left+f),g=t.top+t.height*$/e.height-(e.top+$),{delay:I=0,duration:S=m=>Math.sqrt(m)*120,easing:y=Tn}=s;return{delay:I,duration:typeof S=="function"?S(Math.sqrt(b*b+g*g)):S,easing:y,css:(m,w)=>{const p=w*b,v=w*g,_=m+w*t.width/e.width,c=m+w*t.height/e.height;return`transform: ${l} translate(${p}px, ${v}px) scale(${_}, ${c});`}}}var Vt,Yt;class Xe{constructor(){B(this,Vt,O(0));B(this,Yt,O(0))}get width(){return o(P(this,Vt))}set width(t){x(P(this,Vt),F(t))}get height(){return o(P(this,Yt))}set height(t){x(P(this,Yt),F(t))}}Vt=new WeakMap,Yt=new WeakMap;var Kt,qt,jt,Gt,Jt;class En{constructor(t,e){it(this,"is_menu",!1);it(this,"menu");B(this,Kt,O(!1));B(this,qt,O());B(this,jt,O(!1));B(this,Gt,O(null));B(this,Jt,O(null));this.menu=t,P(this,qt).v=F(e)}get selected(){return o(P(this,Kt))}set selected(t){x(P(this,Kt),F(t))}get run(){return o(P(this,qt))}set run(t){x(P(this,qt),F(t))}get pending(){return o(P(this,jt))}set pending(t){x(P(this,jt),F(t))}get error_message(){return o(P(this,Gt))}set error_message(t){x(P(this,Gt),F(t))}get promise(){return o(P(this,Jt))}set promise(t){x(P(this,Jt),F(t))}}Kt=new WeakMap,qt=new WeakMap,jt=new WeakMap,Gt=new WeakMap,Jt=new WeakMap;var Qt,Zt;class Pn{constructor(t,e){it(this,"is_menu",!0);it(this,"menu");it(this,"depth");B(this,Qt,O(!1));B(this,Zt,O(F([])));this.menu=t,this.depth=e}get selected(){return o(P(this,Qt))}set selected(t){x(P(this,Qt),F(t))}get items(){return o(P(this,Zt))}set items(t){x(P(this,Zt),F(t))}}Qt=new WeakMap,Zt=new WeakMap;var te;class Sn{constructor(){it(this,"is_menu",!0);it(this,"menu",null);it(this,"depth",1);B(this,te,O(F([])))}get items(){return o(P(this,te))}set items(t){x(P(this,te),F(t))}}te=new WeakMap;var ee,ne,oe,ae,re,se,ie;class $e{constructor(t){it(this,"layout");it(this,"initial_layout");B(this,ee,O(!1));B(this,ne,O(0));B(this,oe,O(0));B(this,ae,O(F([])));B(this,re,O());B(this,se,O(F(new Sn)));B(this,ie,O(F([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout||new Xe}get opened(){return o(P(this,ee))}set opened(t){x(P(this,ee),F(t))}get x(){return o(P(this,ne))}set x(t){x(P(this,ne),F(t))}get y(){return o(P(this,oe))}set y(t){x(P(this,oe),F(t))}get params(){return o(P(this,ae))}set params(t){x(P(this,ae),F(t))}get error(){return o(P(this,re))}set error(t){x(P(this,re),F(t))}get root_menu(){return o(P(this,se))}set root_menu(t){x(P(this,se),F(t))}get selections(){return o(P(this,ie))}set selections(t){x(P(this,ie),F(t))}open(t,e,s){this.selections.length=0,this.opened=!0,this.x=e,this.y=s,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(s){const r=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=r??"unknown error",this.error=r}if(_n(e)){t.pending=!0,t.error_message=null;const s=t.promise=e.then(r=>{if(s===t.promise){if(typeof(r==null?void 0:r.ok)=="boolean")if(r.ok)this.close();else{const l=typeof r.message=="string"?r.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return r}},r=>{if(s!==t.promise)return;const l=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{s===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);return t?this.activate(t):this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const s of this.selections)s.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length)return this.select_first();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length)return this.select_last();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)||this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)||this.root_menu;return this.select(t.at(-1))}add_entry(t){const e=Le()||this.root_menu,s=new En(e,t);return e.items.push(s),Ne(()=>{e.items.length=0}),s}add_submenu(){const t=Le()||this.root_menu,e=new Pn(t,t.depth+1);return t.items.push(e),Rn(e),Ne(()=>{t.items.length=0}),e}}ee=new WeakMap,ne=new WeakMap,oe=new WeakMap,ae=new WeakMap,re=new WeakMap,se=new WeakMap,ie=new WeakMap;const Te="contextmenu",An=`a,[data-${Te}]`,de=new Map;let zn=0;const On=(i,t)=>{const e=zn+++"";return i.dataset[Te]=e,de.set(e,t),{update:s=>{de.set(e,s)},destroy:()=>{de.delete(e)}}},Nn=17,qe=(i,t,e,s)=>{var l;const r=Mn(i);return r!=null&&r.length?(s.open(r,t,e),(l=navigator.vibrate)==null||l.call(navigator,Nn),!0):!1},Mn=i=>{var l;let t=null,e=i,s,r;for(;e=e==null?void 0:e.closest(An);){if(s=e.dataset[Te]){if(t||(t=[]),r=de.get(s),r===void 0)continue;Array.isArray(r)?(t||(t=[])).push(...r):(t||(t=[])).push(r)}e.tagName==="A"&&(t||(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const f=(l=window.getSelection())==null?void 0:l.toString();f&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(f)}})}return t},Ve=Symbol(),Fn=i=>ye(Ve,i),Ie=()=>we(Ve),Ye=Symbol(),Rn=i=>ye(Ye,i),Le=()=>we(Ye),Ke=Symbol(),je=(i=new Xe)=>(ye(Ke,i),i),Dn=()=>we(Ke);var qn=(i,t)=>t.close(),Ln=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ge(i,t){mt(t,!0);const e="🔗",s=J(t,"icon",3,e),r=Ie(),l=(_,c=location.host)=>{const k=xe(xe(_,"https://"),"http://");return k.startsWith(c+"/")?xe(k,c):k},f=D(()=>l(t.href)),$=D(()=>!(o(f)[0]==="."||o(f)[0]==="/"&&o(f)[1]!=="/")),b=D(()=>o($)?"noreferrer":void 0);var g=Ln(),I=C(g);I.__click=[qn,r];var S=C(I),y=C(S),m=C(y);L(m,()=>typeof s()=="string",_=>{var c=At(_);G(()=>lt(c,s())),a(_,c)},_=>{var c=E(),k=h(c);ct(s,k,()=>e),a(_,c)});var w=n(n(y,!0)),p=C(w),v=C(p);L(v,()=>t.children,_=>{var c=E(),k=h(c);ct(()=>t.children,k),a(_,c)},_=>{var c=At(_);G(()=>lt(c,o(f))),a(_,c)}),G(()=>{_e(I,"href",t.href),_e(I,"rel",o(b))}),a(i,g),ht()}Ce(["click"]);var Hn=d("⚠️",1),Un=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function Z(i,t){mt(t,!0);const e=Ie(),s=e.add_entry(t.run);Ut(()=>{s.run=t.run});const r=D(()=>s),l=D(()=>{let{selected:v,pending:_,error_message:c}=o(r);return[v,_,c]}),f=D(()=>o(l)[0]),$=D(()=>o(l)[1]),b=D(()=>o(l)[2]);var g=Un();g.__click=()=>{setTimeout(()=>e.activate(s))};var I=C(g),S=C(I),y=C(S);L(y,()=>typeof t.icon=="string",v=>{var _=At(v);G(()=>lt(_,t.icon)),a(v,_)},v=>{var _=E(),c=h(_);L(c,()=>t.icon,k=>{var A=E(),N=h(A);ct(()=>t.icon,N),a(k,A)},null,!0),a(v,_)});var m=n(n(S,!0)),w=C(m);ct(()=>t.children,w);var p=n(n(m,!0));L(p,()=>o($),v=>{var _=E(),c=h(_);mn(c,{}),a(v,_)},v=>{var _=E(),c=h(_);L(c,()=>o(b),k=>{var A=Hn();a(k,A)},null,!0),a(v,_)}),G(()=>{_e(g,"title",o(b)?`Error: ${o(b)}`:void 0),bt(g,"selected",o(f))}),et("mouseenter",g,v=>{Rt(v),e.select(s)},!1),a(i,g),ht()}Ce(["click"]);function Je(i,t){var e=E(),s=h(e);{var r=l=>{var f=At(l);G(()=>lt(f,t.icon)),a(l,f)};Z(s,{get run(){return t.run},icon:r,children:(l,f)=>{var $=At(l);G(()=>lt($,t.content)),a(l,$)},$$slots:{default:!0}})}a(i,e)}var Wn=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Bn=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Xn=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Vn=d("<!> <!> <!>",1);function le(i,t){mt(t,!0);var e=(T,u=Se)=>{var z=E(),q=h(z);Ge(q,ze(u)),a(T,z)},s=(T,u=Se)=>{var z=E(),q=h(z);Je(q,ze(u)),a(T,z)};const r=J(t,"contextmenu",11,()=>new $e),l=J(t,"longpress_move_tolerance",3,21),f=J(t,"longpress_duration",3,633),$=J(t,"bypass_with_tap_then_longpress",3,!0),b=J(t,"tap_then_longpress_duration",3,660),g=J(t,"tap_then_longpress_move_tolerance",3,7),I=J(t,"open_offset_x",11,()=>-2),S=J(t,"open_offset_y",11,()=>-2),y=J(t,"scoped",3,!1);Fn(r());let m=O(void 0);const w=D(r),p=D(()=>{let{layout:T,initial_layout:u}=o(w);return[T,u]}),v=D(()=>o(p)[0]),_=D(()=>o(p)[1]),c=D(()=>o(v)===o(_));let k=O(void 0),A=O(void 0);Ut(()=>{!o(c)&&o(k)!==void 0&&(o(v).width=o(k))}),Ut(()=>{!o(c)&&o(A)!==void 0&&(o(v).height=o(A))});const N=je();Ut(()=>{if(o(m)){const T=o(m).getBoundingClientRect();N.width=T.width,N.height=T.height}});const U=D(()=>r().x+Math.min(0,o(v).width-(r().x+N.width))),Y=D(()=>r().y+Math.min(0,o(v).height-(r().y+N.height)));let K=O(void 0),H=O(void 0),tt=O(void 0),R=O(void 0),X=O(void 0),V=O(void 0);const W=()=>{o(X)&&x(X,!1),o(R)!=null&&(clearTimeout(o(R)),x(R,null))},Q=T=>{var z;if(o(V)){x(V,!1);return}if(o(X)){W(),Rt(T);return}const{target:u}=T;T.shiftKey||!(u instanceof HTMLElement||u instanceof SVGElement)||(z=o(m))!=null&&z.contains(u)||ge(u)||Oe(u)||qe(u,T.clientX+I(),T.clientY+S(),r())&&(Rt(T),W())},at=T=>{o(X)&&x(X,!1);const{touches:u,target:z}=T;if(r().opened||u.length!==1||T.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||ge(z)||Oe(z))return;const{clientX:q,clientY:ot}=u[0];if($()){if(o(tt)!=null&&performance.now()-o(tt)<b()&&Math.hypot(q-o(K),ot-o(H))<g()){x(V,!0),x(tt,null);return}x(tt,F(performance.now()))}x(K,F(q)),x(H,F(ot)),o(R)!=null&&W(),x(R,F(setTimeout(()=>{x(X,!0),qe(z,o(K)+I(),o(H)+S(),r())},f())))},pt=T=>{if(o(R)==null)return;const{touches:u}=T;if(u.length!==1)return;const{clientX:z,clientY:q}=u[0];Math.hypot(z-o(K),q-o(H))>l()&&(r().opened&&r().close(),W())},nt=T=>{o(R)!=null&&(o(X)&&Rt(T),W())},ut=T=>{o(m)&&!o(m).contains(T.target)&&r().close()},ft=new Map([["Escape",()=>r().close()],["ArrowLeft",()=>r().collapse_selected()],["ArrowRight",()=>r().expand_selected()],["ArrowDown",()=>r().select_next()],["PageDown",()=>r().select_next()],["ArrowUp",()=>r().select_previous()],["PageUp",()=>r().select_previous()],["Home",()=>r().select_first()],["End",()=>r().select_last()],[" ",()=>r().activate_selected()],["Enter",()=>r().activate_selected()]]),j=T=>{const u=ft.get(T.key);!u||ge(T.target)||(Rt(T),u())};var dt=Vn();et("contextmenu",St,function(...T){const u=y()?void 0:Q;return u==null?void 0:u.apply(this,T)},!0,!1),et("touchstart",St,function(...T){const u=y()?void 0:at;return u==null?void 0:u.apply(this,T)},!0,!0),et("touchmove",St,function(...T){const u=y()?void 0:pt;return u==null?void 0:u.apply(this,T)},!0,!0),et("touchend",St,function(...T){const u=y()?void 0:nt;return u==null?void 0:u.apply(this,T)},!0,!1),et("touchcancel",St,function(...T){const u=y()?void 0:nt;return u==null?void 0:u.apply(this,T)},!0,!1),et("mousedown",St,function(...T){const u=r().opened?ut:void 0;return u==null?void 0:u.apply(this,T)},!0,!0),et("keydown",St,function(...T){const u=r().opened?j:void 0;return u==null?void 0:u.apply(this,T)},!0,!1);var yt=h(dt);L(yt,y,T=>{var u=Wn(),z=C(u);ct(()=>t.children,z),et("contextmenu",u,Q,!0,!1),et("touchstart",u,at,!0,!0),et("touchmove",u,pt,!0,!0),et("touchend",u,nt,!0,!1),et("touchcancel",u,nt,!0,!1),a(T,u)},T=>{var u=E(),z=h(u);ct(()=>t.children,z),a(T,u)});var Ot=n(n(yt,!0));L(Ot,()=>!o(c),T=>{var u=Bn();Re(u,"clientHeight",z=>x(A,z)),Re(u,"clientWidth",z=>x(k,z)),a(T,u)});var Lt=n(n(Ot,!0));L(Lt,()=>r().opened,T=>{var u=Xn();ke(u,z=>x(m,F(z)),()=>o(m)),Wt(u,76,()=>r().params,(z,q)=>M(z),(z,q,ot)=>{var Nt=E(),It=h(Nt);L(It,()=>typeof M(q)=="function",rt=>{var st=E(),gt=h(st);ct(()=>M(q),gt),a(rt,st)},rt=>{var st=E(),gt=h(st);L(gt,()=>M(q).snippet==="link",_t=>{var xt=E(),vt=h(xt);e(vt,()=>M(q).props),a(_t,xt)},_t=>{var xt=E(),vt=h(xt);L(vt,()=>M(q).snippet==="text",wt=>{var Mt=E(),Et=h(Mt);s(Et,()=>M(q).props),a(wt,Mt)},null,!0),a(_t,xt)},!0),a(rt,st)}),a(z,Nt)}),G(()=>ue(u,"transform",`translate3d(${Tt(o(U))}px, ${Tt(o(Y))}px, 0)`)),a(T,u)}),a(i,dt),ht()}var Yn=d('<span class="display_contents"><!></span>');function kt(i,t){mt(t,!0);var e=Yn(),s=C(e);ct(()=>t.children,s),xn(e,(r,l)=>On(r,l),()=>t.entries),a(i,e),ht()}var Kn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),jn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ee(i,t){mt(t,!0);const e=Ie(),s=e.add_submenu(),{layout:r}=e,l=D(()=>s.selected);let f=O(void 0);const $=Dn(),b=je();let g=O(0),I=O(0);Ut(()=>{o(f)&&S(o(f),r,$)});const S=(A,N,U)=>{const{x:Y,y:K,width:H,height:tt}=A.getBoundingClientRect();b.width=H,b.height=tt;const R=Y-o(g),X=K-o(I),V=R+H+U.width-N.width;if(V<=0)x(g,F(U.width));else{const W=H-R;W<=0?x(g,-H):W>V?x(g,U.width-V):x(g,W-H)}x(I,F(Math.min(0,N.height-(X+tt))))};var y=jn(),m=C(y),w=C(m),p=C(w),v=C(p);L(v,()=>t.icon,A=>{var N=E(),U=h(N);ct(()=>t.icon,U),a(A,N)});var _=n(n(p,!0)),c=C(_);ct(()=>t.children,c);var k=n(n(m,!0));L(k,()=>o(l),A=>{var N=Kn();ke(N,Y=>x(f,F(Y)),()=>o(f));var U=C(N);ct(()=>t.menu,U),G(()=>{ue(N,"transform",`translate3d(${Tt(o(g))}px, ${Tt(o(I))}px, 0)`),ue(N,"max-height",`${Tt(r.height)}px`)}),a(A,N)}),G(()=>{ue(y,"--contextmenu_depth",s.depth),_e(m,"aria-expanded",o(l)),bt(m,"selected",o(l))}),et("mouseenter",m,A=>{Rt(A),setTimeout(()=>e.select(s))},!1),a(i,y),ht()}var Gn=d("🏠",1),Jn=d("🌄",1),Qn=d("go home",1),Zn=d("go adventure",1),to=d("🌄",1),eo=d("🏠",1),no=d("do adventure",1),oo=d("be home",1),ao=d("<!> <!>",1);function ve(i,t){mt(t,!0);const e=J(t,"name",3,"Cat"),s=J(t,"icon",3,"😺");var r=E(),l=h(r);{var f=b=>{var g=At(b);G(()=>lt(g,s())),a(b,g)},$=b=>{var g=ao(),I=h(g);{var S=m=>{var w=E(),p=h(w);L(p,()=>t.position==="adventure",v=>{var _=Gn();a(v,_)},v=>{var _=Jn();a(v,_)}),a(m,w)};Z(I,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:S,children:(m,w)=>{var p=E(),v=h(p);L(v,()=>t.position==="adventure",_=>{var c=Qn();a(_,c)},_=>{var c=Zn();a(_,c)}),a(m,p)},$$slots:{default:!0}})}var y=n(n(I,!0));{var S=w=>{var p=E(),v=h(p);L(v,()=>t.position==="adventure",_=>{var c=to();a(_,c)},_=>{var c=eo();a(_,c)}),a(w,p)};Z(y,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:S,children:(w,p)=>{var v=E(),_=h(v);L(_,()=>t.position==="adventure",c=>{var k=no();a(c,k)},c=>{var k=oo();a(c,k)}),a(w,v)},$$slots:{default:!0}})}a(b,g)};Ee(l,{icon:f,menu:$,children:(b,g)=>{var I=At(b);G(()=>lt(I,e())),a(b,I)},$$slots:{default:!0}})}a(i,r),ht()}var ro=d("Source code",1),so=d("?",1),io=d("About",1),lo=d("<!> <!>",1);function co(i,t){var e=lo(),s=h(e);{var r=f=>{var $=E(),b=h($);pn(b,{size:"var(--icon_size_xs)"}),a(f,$)};Ge(s,{href:"https://github.com/ryanatkn/fuz",icon:r,children:(f,$)=>{var b=ro();a(f,b)},$$slots:{default:!0}})}var l=n(n(s,!0));{var r=$=>{var b=so();a($,b)};Z(l,{get run(){return t.toggle_about_dialog},icon:r,children:($,b)=>{var g=io();a($,g)},$$slots:{default:!0}})}a(i,e)}const Qe=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const e=i[0];return e.icon+e.name};var uo=d("🏠",1),_o=d("🐈‍⬛",1),vo=d("call",1),mo=d("🏠",1),ho=d("be",1),po=d("🦋",1),fo=d("leave",1),go=d("<!> <!>",1),xo=d("<!> <!> <!>",1),bo=d("home",1);function yo(i,t){mt(t,!0);const e=D(()=>Qe(t.adventure_cats));var s=E(),r=h(s);{var l=$=>{var b=uo();a($,b)},f=$=>{var b=xo(),g=h(b);L(g,()=>o(e),y=>{var m=E(),w=h(m);{var p=v=>{var _=_o();a(v,_)};Z(w,{run:()=>t.act({type:"call_cats_home"}),icon:p,children:(v,_)=>{var c=vo();a(v,c)},$$slots:{default:!0}})}a(y,m)});var I=n(n(g,!0));Wt(I,69,()=>t.home_cats,(y,m)=>M(y).name,(y,m,w)=>{var p=E(),v=h(p);ve(v,{get name(){return M(m).name},get icon(){return M(m).icon},get position(){return M(m).position},get act(){return t.act}}),a(y,p)});var S=n(n(I,!0));L(S,()=>!o(e),y=>{var m=go(),w=h(m);{var p=_=>{var c=mo();a(_,c)};Z(w,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:p,children:(_,c)=>{var k=ho();a(_,k)},$$slots:{default:!0}})}var v=n(n(w,!0));{var p=c=>{var k=po();a(c,k)};Z(v,{run:()=>t.act({type:"call_cats_adventure"}),icon:p,children:(c,k)=>{var A=fo();a(c,A)},$$slots:{default:!0}})}a(y,m)}),a($,b)};Ee(r,{icon:l,menu:f,children:($,b)=>{var g=bo();a($,g)},$$slots:{default:!0}})}a(i,s),ht()}var wo=d("🌄",1),Co=d("🦋",1),ko=d("call",1),$o=d("🌄",1),To=d("do",1),Io=d("🐈‍⬛",1),Eo=d("leave",1),Po=d("<!> <!>",1),So=d("<!> <!> <!>",1),Ao=d("adventure",1);function zo(i,t){mt(t,!0);const e=D(()=>Qe(t.home_cats));var s=E(),r=h(s);{var l=$=>{var b=wo();a($,b)},f=$=>{var b=So(),g=h(b);L(g,()=>o(e),y=>{var m=E(),w=h(m);{var p=v=>{var _=Co();a(v,_)};Z(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:p,children:(v,_)=>{var c=ko();a(v,c)},$$slots:{default:!0}})}a(y,m)});var I=n(n(g,!0));Wt(I,69,()=>t.adventure_cats,(y,m)=>M(y).name,(y,m,w)=>{var p=E(),v=h(p);ve(v,{get name(){return M(m).name},get icon(){return M(m).icon},get position(){return M(m).position},get act(){return t.act}}),a(y,p)});var S=n(n(I,!0));L(S,()=>!o(e),y=>{var m=Po(),w=h(m);{var p=_=>{var c=$o();a(_,c)};Z(w,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:p,children:(_,c)=>{var k=To();a(_,k)},$$slots:{default:!0}})}var v=n(n(w,!0));{var p=c=>{var k=Io();a(c,k)};Z(v,{run:()=>t.act({type:"call_cats_home"}),icon:p,children:(c,k)=>{var A=Eo();a(c,A)},$$slots:{default:!0}})}a(y,m)}),a($,b)};Ee(r,{icon:l,menu:f,children:($,b)=>{var g=Ao();a($,g)},$$slots:{default:!0}})}a(i,s),ht()}var Oo=d('<span class="icon svelte-u0xdy"> </span>'),No=d('<span class="name svelte-u0xdy"><!> </span>'),Mo=d('<span class="cat svelte-u0xdy"><!><!></span>');function He(i,t){mt(t,!0);const e=J(t,"name",3,"Cat"),s=J(t,"icon",3,"😺"),r=J(t,"show_name",3,!0),l=J(t,"show_icon",3,!0);var f=Mo(),$=C(f);L($,l,g=>{var I=Oo(),S=C(I);G(()=>lt(S,s())),a(g,I)});var b=n($);L(b,r,g=>{var I=No(),S=C(I);L(S,()=>t.children,m=>{var w=E(),p=h(w);ct(()=>t.children,p),a(m,w)});var y=n(S,!0);G(()=>lt(y,e())),a(g,I)}),G(()=>bt(f,"has-icon",l())),a(i,f),ht()}const Fo=`<script lang="ts">
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
`;var Ro=d("<!> <!>",1),Do=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),qo=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Lo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Ho=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Uo=d("View example source",1),Wo=d("<section><!> <!></section> <section><!></section>",1),Bo=d("<!> <!>",1),Xo=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Vo=d("<!> <!>",1);function Yo(i,t){mt(t,!0);const e="Alyssa",s="Ben",r="home";let l=O(r),f=O(r);const $=D(()=>o(l)===o(f)?"😺":"😾"),b=D(()=>o(l)===o(f)?"😸":"😿"),g=D(()=>({name:e,icon:o($),position:o(l)})),I=D(()=>({name:s,icon:o(b),position:o(f)}));let S=O(!1);const y=(R,X)=>{const V=[],W=[];for(const Q of R){const at=Q.position==="home"?V:W;X?at.unshift(Q):at.push(Q)}return{home_cats:V,adventure_cats:W}},m=D(()=>y([o(g),o(I)],o(S))),w=D(()=>{let{home_cats:R,adventure_cats:X}=o(m);return[R,X]}),p=D(()=>o(w)[0]),v=D(()=>o(w)[1]),_=D(()=>o(l)!==r||o(f)!==r),c=()=>{x(l,r),x(f,r)};let k=O(!1);const A=()=>{x(k,!o(k))},N=R=>{switch(R.type){case"call_cats_adventure":{x(l,"adventure"),x(f,"adventure");break}case"call_cats_home":{x(l,"home"),x(f,"home");break}case"cat_go_adventure":{R.name===e?x(l,"adventure"):R.name===s&&x(f,"adventure");break}case"cat_go_home":{R.name===e?x(l,"home"):R.name===s&&x(f,"home");break}case"cat_be_or_do":{x(S,!o(S));break}}},[U,Y]=ln({fallback:(R,X)=>{const V=window.getComputedStyle(R),W=V.transform==="none"?"":V.transform;return{duration:1500,easing:In,css:Q=>`
					transform: ${W} scale(${Q});
					opacity: ${Q}
				`}}});var K=Vo(),H=h(K);le(H,{scoped:!0,children:(R,X)=>{var V=Bo(),W=h(V);zt(W,{text:"Full example",slug:"full-example"});var Q=n(n(W,!0));{var at=pt=>{var nt=Ro(),ut=h(nt);L(ut,()=>o(_),j=>{var dt=E(),yt=h(dt);Je(yt,{run:c,content:"Reset",icon:"↻"}),a(j,dt)});var ft=n(n(ut,!0));co(ft,{toggle_about_dialog:A}),a(pt,nt)};kt(Q,{entries:at,children:(pt,nt)=>{var ut=Wo(),ft=h(ut),j=C(ft);{var dt=u=>{var z=E(),q=h(z);yo(q,{act:N,get home_cats(){return o(p)},get adventure_cats(){return o(v)}}),a(u,z)};kt(j,{entries:dt,children:(u,z)=>{var q=qo(),ot=C(q),Nt=n(n(ot,!0));Wt(Nt,95,()=>o(p),(It,rt)=>M(M(It)).name,(It,rt,st)=>{let gt=()=>M(M(rt)).name,_t=()=>M(M(rt)).icon,xt=()=>M(M(rt)).position;var vt=Do();Ht(1,vt,()=>Y,()=>({key:gt()})),Ht(2,vt,()=>U,()=>({key:gt()})),Ae(vt,()=>De,null);var wt=C(vt);{var Mt=Et=>{var Pt=E(),Ct=h(Pt);ve(Ct,{act:N,get name(){return gt()},get icon(){return _t()},get position(){return xt()}}),a(Et,Pt)};kt(wt,{entries:Mt,children:(Et,Pt)=>{var Ct=E(),Ft=h(Ct);He(Ft,{get name(){return gt()},get icon(){return _t()}}),a(Et,Ct)},$$slots:{default:!0}})}a(It,vt)}),a(u,q)},$$slots:{default:!0}})}var yt=n(n(j,!0));{var dt=z=>{var q=E(),ot=h(q);zo(ot,{act:N,get home_cats(){return o(p)},get adventure_cats(){return o(v)}}),a(z,q)};kt(yt,{entries:dt,children:(z,q)=>{var ot=Ho(),Nt=C(ot),It=n(n(Nt,!0));Wt(It,95,()=>o(v),(rt,st)=>M(M(rt)).name,(rt,st,gt)=>{let _t=()=>M(M(st)).name,xt=()=>M(M(st)).icon,vt=()=>M(M(st)).position;var wt=Lo();Ht(1,wt,()=>Y,()=>({key:_t()})),Ht(2,wt,()=>U,()=>({key:_t()})),Ae(wt,()=>De,null);var Mt=C(wt);{var Et=Pt=>{var Ct=E(),Ft=h(Ct);ve(Ft,{act:N,get name(){return _t()},get icon(){return xt()},get position(){return vt()}}),a(Pt,Ct)};kt(Mt,{entries:Et,children:(Pt,Ct)=>{var Ft=E(),Ze=h(Ft);He(Ze,{get name(){return _t()},get icon(){return xt()}}),a(Pt,Ft)},$$slots:{default:!0}})}a(rt,wt)}),a(z,ot)},$$slots:{default:!0}})}var Ot=n(n(ft,!0)),Lt=C(Ot);{var T=u=>{var z=Uo();a(u,z)};hn(Lt,{summary:T,children:(u,z)=>{var q=E(),ot=h(q);Bt(ot,{content:Fo}),a(u,q)},$$slots:{default:!0}})}a(pt,ut)},$$slots:{default:!0}})}a(R,V)},$$slots:{default:!0}});var tt=n(n(H,!0));L(tt,()=>o(k),R=>{var X=E(),V=h(X);vn(V,{onclose:()=>x(k,!1),children:(W,Q)=>{var at=Xo(),pt=C(at),nt=n(n(pt,!0)),ut=n(n(nt,!0)),ft=n(n(ut,!0)),j=n(n(ft,!0)),dt=C(j),yt=n(n(dt,!0));fn(yt,{});var Ot=n(n(yt,!0)),Lt=n(n(Ot,!0));gn(Lt,{}),a(W,at)},$$slots:{default:!0}}),a(R,X)}),a(i,K),ht()}var Ko=d("Hello world",1),jo=d("🌞",1),Go=d("Hello with an optional icon snippet",1),Jo=d("Hello with an optional icon string",1),Qo=d("<!> <!> <!>",1),Zo=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),ta=d("<!> <!>",1);function ea(i){let t=O(!1),e=O(!1),s=O(!1);var r=ta(),l=h(r);zt(l,{text:"Basic usage",slug:"basic-usage"});var f=n(n(l,!0));le(f,{scoped:!0,children:($,b)=>{var g=E(),I=h(g);{var S=y=>{var m=Qo(),w=h(m);Z(w,{run:()=>x(t,!o(t)),children:(c,k)=>{var A=Ko();a(c,A)},$$slots:{default:!0}});var p=n(n(w,!0));{var v=c=>{var k=jo();a(c,k)};Z(p,{run:()=>x(e,!o(e)),icon:v,children:(c,k)=>{var A=Go();a(c,A)},$$slots:{default:!0}})}var _=n(n(p,!0));Z(_,{run:()=>x(s,!o(s)),icon:"🌚",children:(c,k)=>{var A=Jo();a(c,A)},$$slots:{default:!0}}),a(y,m)};kt(I,{entries:S,children:(y,m)=>{var w=Zo(),p=C(w),v=n(n(p,!0)),_=D(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(s)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Bt(v,{get content(){return o(_)}});var c=n(n(v,!0)),k=C(c),A=C(k),N=n(n(c,!0)),U=C(N),Y=C(U),K=n(n(N,!0)),H=C(K),tt=C(H);G(()=>{bt(k,"color_g_5",o(t)),lt(A,`greeted = ${Tt(o(t))}`),bt(U,"color_e_5",o(e)),lt(Y,`greeted_icon_snippet = ${Tt(o(e))}`),bt(H,"color_d_5",o(s)),lt(tt,`greeted_icon_string = ${Tt(o(s))}`)}),a(y,w)},$$slots:{default:!0}})}a($,g)},$$slots:{default:!0}}),a(i,r)}var na=d("Toggle",1),oa=d("<div>toggled</div>"),aa=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),ra=d("<!> <!>",1);function sa(i){const t=new $e;let e=O(!1);var s=E(),r=h(s);le(r,{contextmenu:t,scoped:!0,children:(l,f)=>{var $=ra(),b=h($);zt(b,{text:"Custom instance",slug:"custom-instance"});var g=n(n(b,!0));{var I=S=>{var y=E(),m=h(y);Z(m,{run:()=>x(e,!o(e)),children:(w,p)=>{var v=na();a(w,v)},$$slots:{default:!0}}),a(S,y)};kt(g,{entries:I,children:(S,y)=>{var m=aa(),w=C(m);Bt(w,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var p=n(n(w,!0));Bt(p,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var v=n(n(p,!0)),_=n(n(v,!0)),c=C(_);L(c,()=>o(e),k=>{var A=oa();Ht(3,A,()=>cn),a(k,A)}),a(S,m)},$$slots:{default:!0}})}a(l,$)},$$slots:{default:!0}}),a(i,s)}var ia=d("Toggle something",1),la=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button>selecting text</button> and then
					opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ca=d("<div><!></div> <!>",1);function ua(i){const t=new $e;let e=O(!1),s;const r=()=>{const y=window.getSelection();if(!y)return;const m=document.createRange();m.selectNodeContents(s),y.removeAllRanges(),y.addRange(m)};let l=O("");const f="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",$=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,b=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,g=D(()=>o(l)===f||o(l)===$||o(l)===b);var I=E(),S=h(I);le(S,{contextmenu:t,scoped:!0,children:(y,m)=>{var w=ca(),p=h(w),v=C(p);zt(v,{text:"Select text",slug:"select-text"});var _=n(n(p,!0));{var c=k=>{var A=E(),N=h(A);Z(N,{run:()=>x(e,!o(e)),children:(U,Y)=>{var K=ia();a(U,K)},$$slots:{default:!0}}),a(k,A)};kt(_,{entries:c,children:(k,A)=>{var N=la(),U=C(N);ke(U,j=>s=j,()=>s);var Y=C(U),K=n(n(Y,!0)),H=n(C(K));H.__click=r;var tt=n(n(U,!0)),R=C(tt);un(R);var X=n(n(tt,!0)),V=n(n(X,!0)),W=C(V);dn(W);var Q=n(n(V,!0)),at=C(Q);ce(at,{href:"Web/HTML/Global_attributes/contenteditable"});var pt=n(n(Q,!0)),nt=n(n(pt,!0)),ut=n(n(nt,!0)),ft=n(n(ut,!0));G(()=>{bt(N,"color_g_5",o(g)),bt(H,"color_a",o(e)),bt(X,"color_g_5",o(g))}),Fe(R,()=>o(l),j=>x(l,j)),Fe(W,()=>o(l),j=>x(l,j)),Me("innerText",nt,()=>o(l),j=>x(l,j)),Me("innerText",ft,()=>o(l),j=>x(l,j)),a(k,N)},$$slots:{default:!0}})}G(()=>bt(p,"color_d_5",o(g))),a(y,w)},$$slots:{default:!0}}),a(i,I)}Ce(["click"]);var da=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function _a(i){var t=E(),e=h(t);le(e,{scoped:!0,children:(s,r)=>{var l=da(),f=h(l);zt(f,{text:"Default behaviors",slug:"default-behaviors"});var $=n(n(f,!0)),b=C($);Bt(b,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),a(s,l)},$$slots:{default:!0}}),a(i,t)}var va=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Ha(i,t){mt(t,!1);const s=sn("Contextmenu");an();var r=E(),l=h(r);rn(l,{tome:s,children:(f,$)=>{var b=va(),g=h(b),I=n(n(g,!0)),S=C(I);ea(S);var y=n(n(I,!0)),m=C(y);_a(m);var w=n(n(y,!0)),p=C(w);sa(p);var v=n(n(w,!0)),_=C(v);ua(_);var c=n(n(v,!0)),k=C(c);Yo(k,{});var A=n(n(c,!0)),N=C(A);$n(N),a(f,b)},$$slots:{default:!0}}),a(i,r),ht()}export{Ha as component};
