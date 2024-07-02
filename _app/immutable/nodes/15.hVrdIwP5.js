var Qe=Object.defineProperty;var Ie=i=>{throw TypeError(i)};var Ze=(i,t,e)=>t in i?Qe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var st=(i,t,e)=>Ze(i,typeof t!="symbol"?t+"":t,e),ve=(i,t,e)=>t.has(i)||Ie("Cannot "+e);var P=(i,t,e)=>(ve(i,t,"read from private field"),e?e.call(i):t.get(i)),B=(i,t,e)=>t.has(i)?Ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),he=(i,t,e,a)=>(ve(i,t,"write to private field"),a?a.call(i,e):t.set(i,e),e),Ee=(i,t,e)=>(ve(i,t,"access private method"),e);import{a as r,t as d,c as $,s as n,f as h,b as E,q as At,$ as Pt}from"../chunks/disclose-version.8cXmPj91.js";import{i as He,u as Ue,r as tn,aw as en,F as z,g as o,n as g,s as xe,f as be,p as dt,t as G,a as _t,d as q,a2 as qt,a4 as F,J as Pe}from"../chunks/runtime.tEJefHBO.js";import{T as nn}from"../chunks/Tome_Detail.Dh6A_FIj.js";import{g as on}from"../chunks/tome.BiCC_aSq.js";import{M as se}from"../chunks/Mdn_Link.DEGtUVRD.js";import{T as St}from"../chunks/Tome_Subheading.CZpUcrxS.js";import{i as R}from"../chunks/if.CTp5gYEz.js";import{e as Rt}from"../chunks/each.D9qf_eYe.js";import{t as Dt,a as Ae,c as rn,s as sn}from"../chunks/index.BsS6wkAM.js";import{C as Lt}from"../chunks/Code.BzCvvdEf.js";import{d as ye,s as at,e as ot}from"../chunks/render.C1K3rtSi.js";import{p as M}from"../chunks/proxy.DYJKBxXC.js";import{s as it,b as ce,r as an,e as cn}from"../chunks/attributes.giDdLxsX.js";import{s as ae}from"../chunks/style.iv2mhl8q.js";import{b as we}from"../chunks/this.DDNg7jPB.js";import{p as Q,s as Se}from"../chunks/props.B6XUCPZJ.js";import{a as ln,s as Nt,b as pe,c as ze,D as un}from"../chunks/Dialog.B38fTjfo.js";import{o as Oe}from"../chunks/index-client.CBTtSbVh.js";import{a as fe}from"../chunks/string.ZJuK4sHN.js";import{t as ft}from"../chunks/class.C2cUJUDZ.js";import{P as dn}from"../chunks/Pending_Animation.1GGmjUwL.js";import{D as _n,b as Ne}from"../chunks/Details.DAFl6QE4.js";import{G as mn}from"../chunks/Github_Logo.B5ZMe71d.js";import{C as vn,T as hn}from"../chunks/Theme_Input.CqtZ2eut.js";import{b as Fe}from"../chunks/input.Bm1DNmdC.js";function pn(i,t,e){He(()=>{var a=Ue(()=>t(i,e==null?void 0:e())||{});if(e&&(a!=null&&a.update)){var s=!1;tn(()=>{var l=e();en(l),s&&a.update(l)}),s=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}var kt,Ft,Ht,ue,We;const de=class de{constructor(t){B(this,ue);B(this,kt,new WeakMap);B(this,Ft);B(this,Ht);he(this,Ht,t)}observe(t,e){var a=P(this,kt).get(t)||new Set;return a.add(e),P(this,kt).set(t,a),Ee(this,ue,We).call(this).observe(t,P(this,Ht)),()=>{var s=P(this,kt).get(t);s.delete(e),s.size===0&&(P(this,kt).delete(t),P(this,Ft).unobserve(t))}}};kt=new WeakMap,Ft=new WeakMap,Ht=new WeakMap,ue=new WeakSet,We=function(){return P(this,Ft)??he(this,Ft,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var a of P(this,kt).get(e.target)||[])a(e)}}))},st(de,"entries",new WeakMap);let ge=de;var fn=new ge({box:"border-box"});function Me(i,t,e){var a=fn.observe(i,()=>e(i[t]));He(()=>(Ue(()=>e(i[t])),a))}var gn=d('<span class="font_mono">contextmenu</span> event',1),xn=d('<span class="font_mono">navigator.vibrate</span>'),bn=d('<span class="font_mono">navigator.vibrate</span>'),yn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function wn(i){var t=yn(),e=h(t),a=$(e);St(a,{text:"Expected behaviors",slug:"expected-behaviors"});var s=n(n(a,!0)),l=n(n(s,!0)),f=n($(l));se(f,{href:"Web/API/Element/contextmenu_event",children:(Y,K)=>{var L=gn();r(Y,L)},$$slots:{default:!0}});var k=n(n(f,!0)),y=n(n(k,!0));se(y,{href:"Web/API/Navigator/vibrate",children:(Y,K)=>{var L=xn();r(Y,L)},$$slots:{default:!0}});var x=n(n(l,!0)),I=n(n(x,!0)),S=n(n(I,!0)),b=n(n(S,!0)),_=n(n(b,!0)),w=$(_),C=n(n(w,!0)),v=n(n(C,!0)),c=n(n(v,!0)),m=n(n(c,!0)),T=n(n(m,!0)),N=n($(T));se(N,{href:"Web/API/Navigator/vibrate",children:(Y,K)=>{var L=bn();r(Y,L)},$$slots:{default:!0}});var O=n(n(e,!0)),H=$(O);St(H,{text:"Motivation",slug:"motivation"}),r(i,t)}function $n(i){const t=i-1;return t*t*t+1}function Cn(i){return--i*i*i*i*i+1}function De(i,{from:t,to:e},a={}){const s=getComputedStyle(i),l=s.transform==="none"?"":s.transform,[f,k]=s.transformOrigin.split(" ").map(parseFloat),y=t.left+t.width*f/e.width-(e.left+f),x=t.top+t.height*k/e.height-(e.top+k),{delay:I=0,duration:S=_=>Math.sqrt(_)*120,easing:b=$n}=a;return{delay:I,duration:typeof S=="function"?S(Math.sqrt(y*y+x*x)):S,easing:b,css:(_,w)=>{const C=w*y,v=w*x,c=_+w*t.width/e.width,m=_+w*t.height/e.height;return`transform: ${l} translate(${C}px, ${v}px) scale(${c}, ${m});`}}}var Ut,Wt;class Be{constructor(){B(this,Ut,z(0));B(this,Wt,z(0))}get width(){return o(P(this,Ut))}set width(t){g(P(this,Ut),M(t))}get height(){return o(P(this,Wt))}set height(t){g(P(this,Wt),M(t))}}Ut=new WeakMap,Wt=new WeakMap;var Bt,Mt,Xt,Vt,Yt;class kn{constructor(t,e){st(this,"is_menu",!1);st(this,"menu");B(this,Bt,z(!1));B(this,Mt,z());B(this,Xt,z(!1));B(this,Vt,z(null));B(this,Yt,z(null));this.menu=t,P(this,Mt).v=M(e)}get selected(){return o(P(this,Bt))}set selected(t){g(P(this,Bt),M(t))}get run(){return o(P(this,Mt))}set run(t){g(P(this,Mt),M(t))}get pending(){return o(P(this,Xt))}set pending(t){g(P(this,Xt),M(t))}get error_message(){return o(P(this,Vt))}set error_message(t){g(P(this,Vt),M(t))}get promise(){return o(P(this,Yt))}set promise(t){g(P(this,Yt),M(t))}}Bt=new WeakMap,Mt=new WeakMap,Xt=new WeakMap,Vt=new WeakMap,Yt=new WeakMap;var Kt,jt;class Tn{constructor(t,e){st(this,"is_menu",!0);st(this,"menu");st(this,"depth");B(this,Kt,z(!1));B(this,jt,z(M([])));this.menu=t,this.depth=e}get selected(){return o(P(this,Kt))}set selected(t){g(P(this,Kt),M(t))}get items(){return o(P(this,jt))}set items(t){g(P(this,jt),M(t))}}Kt=new WeakMap,jt=new WeakMap;var Gt;class In{constructor(){st(this,"is_menu",!0);st(this,"menu",null);st(this,"depth",1);B(this,Gt,z(M([])))}get items(){return o(P(this,Gt))}set items(t){g(P(this,Gt),M(t))}}Gt=new WeakMap;var Jt,Qt,Zt,te,ee,ne,oe;class $e{constructor(t){st(this,"layout");st(this,"initial_layout");B(this,Jt,z(!1));B(this,Qt,z(0));B(this,Zt,z(0));B(this,te,z(M([])));B(this,ee,z());B(this,ne,z(M(new In)));B(this,oe,z(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout||new Be}get opened(){return o(P(this,Jt))}set opened(t){g(P(this,Jt),M(t))}get x(){return o(P(this,Qt))}set x(t){g(P(this,Qt),M(t))}get y(){return o(P(this,Zt))}set y(t){g(P(this,Zt),M(t))}get params(){return o(P(this,te))}set params(t){g(P(this,te),M(t))}get error(){return o(P(this,ee))}set error(t){g(P(this,ee),M(t))}get root_menu(){return o(P(this,ne))}set root_menu(t){g(P(this,ne),M(t))}get selections(){return o(P(this,oe))}set selections(t){g(P(this,oe),M(t))}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const s=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=s??"unknown error",this.error=s}if(ln(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(s=>{if(a===t.promise){if(typeof(s==null?void 0:s.ok)=="boolean")if(s.ok)this.close();else{const l=typeof s.message=="string"?s.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return s}},s=>{if(a!==t.promise)return;const l=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);return t?this.activate(t):this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length)return this.select_first();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length)return this.select_last();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)||this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)||this.root_menu;return this.select(t.at(-1))}add_entry(t){const e=Re()||this.root_menu,a=new kn(e,t);return e.items.push(a),Oe(()=>{e.items.length=0}),a}add_submenu(){const t=Re()||this.root_menu,e=new Tn(t,t.depth+1);return t.items.push(e),Nn(e),Oe(()=>{t.items.length=0}),e}}Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap;const Ce="contextmenu",En=`a,[data-${Ce}]`,ie=new Map;let Pn=0;const An=(i,t)=>{if(t==null)return;const e=Pn+++"";return i.dataset[Ce]=e,ie.set(e,t),{update:a=>{ie.set(e,a)},destroy:()=>{ie.delete(e)}}},Sn=17,qe=(i,t,e,a)=>{var l;const s=zn(i);return s!=null&&s.length?(a.open(s,t,e),(l=navigator.vibrate)==null||l.call(navigator,Sn),!0):!1},zn=i=>{var l;let t=null,e=i,a,s;for(;e=e==null?void 0:e.closest(En);){if(a=e.dataset[Ce]){if(t||(t=[]),s=ie.get(a),s===void 0)continue;Array.isArray(s)?(t||(t=[])).push(...s):(t||(t=[])).push(s)}e.tagName==="A"&&(t||(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const f=(l=window.getSelection())==null?void 0:l.toString();f&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(f)}})}return t},Xe=Symbol(),On=i=>xe(Xe,i),ke=()=>be(Xe),Ve=Symbol(),Nn=i=>xe(Ve,i),Re=()=>be(Ve),Ye=Symbol(),Ke=(i=new Be)=>(xe(Ye,i),i),Fn=()=>be(Ye);var Mn=(i,t)=>t.close(),Dn=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function je(i,t){dt(t,!0);const e="🔗",a=Q(t,"icon",3,e),s=ke(),l=(c,m=location.host)=>{const T=fe(fe(c,"https://"),"http://");return T.startsWith(m+"/")?fe(T,m):T},f=q(()=>l(t.href)),k=q(()=>!(o(f)[0]==="."||o(f)[0]==="/"&&o(f)[1]!=="/")),y=q(()=>o(k)?"noreferrer":void 0);var x=Dn(),I=$(x);I.__click=[Mn,s];var S=$(I),b=$(S),_=$(b);R(_,()=>typeof a()=="string",c=>{var m=At(c);G(()=>at(m,a())),r(c,m)},c=>{var m=E(),T=h(m);it(T,a,()=>e),r(c,m)});var w=n(n(b,!0)),C=$(w),v=$(C);R(v,()=>t.children,c=>{var m=E(),T=h(m);it(T,()=>t.children),r(c,m)},c=>{var m=At(c);G(()=>at(m,o(f))),r(c,m)}),G(()=>{ce(I,"href",t.href),ce(I,"rel",o(y))}),r(i,x),_t()}ye(["click"]);var qn=d("⚠️",1),Rn=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function et(i,t){dt(t,!0);const e=ke(),a=e.add_entry(t.run);qt(()=>{a.run=t.run});const s=q(()=>a),l=q(()=>{let{selected:v,pending:c,error_message:m}=o(s);return[v,c,m]}),f=q(()=>o(l)[0]),k=q(()=>o(l)[1]),y=q(()=>o(l)[2]);var x=Rn();x.__click=()=>{setTimeout(()=>e.activate(a))};var I=$(x),S=$(I),b=$(S);R(b,()=>typeof t.icon=="string",v=>{var c=At(v);G(()=>at(c,t.icon)),r(v,c)},v=>{var c=E(),m=h(c);R(m,()=>t.icon,T=>{var N=E(),O=h(N);it(O,()=>t.icon),r(T,N)},null,!0),r(v,c)});var _=n(n(S,!0)),w=$(_);it(w,()=>t.children);var C=n(n(_,!0));R(C,()=>o(k),v=>{var c=E(!0),m=h(c);dn(m,{}),r(v,c)},v=>{var c=E(),m=h(c);R(m,()=>o(y),T=>{var N=qn();r(T,N)},null,!0),r(v,c)}),G(()=>{ce(x,"title",o(y)?`Error: ${o(y)}`:void 0),ft(x,"selected",o(f))}),ot("mouseenter",x,v=>{Nt(v),e.select(a)},!1),r(i,x),_t()}ye(["click"]);function Ge(i,t){var e=E(!0),a=h(e);et(a,{get run(){return t.run},icon:l=>{var f=At(l);G(()=>at(f,t.icon)),r(l,f)},children:(l,f)=>{var k=At(l);G(()=>at(k,t.content)),r(l,k)},$$slots:{default:!0}}),r(i,e)}var Ln=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Hn=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Un=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Wn=d("<!> <!> <!>",1);function re(i,t){dt(t,!0);const e=(p,u=Pe)=>{var A=E(!0),W=h(A);je(W,Se(u)),r(p,A)},a=(p,u=Pe)=>{var A=E(!0),W=h(A);Ge(W,Se(u)),r(p,A)},s=Q(t,"contextmenu",11,()=>new $e),l=Q(t,"longpress_move_tolerance",3,21),f=Q(t,"longpress_duration",3,633),k=Q(t,"bypass_with_tap_then_longpress",3,!0),y=Q(t,"tap_then_longpress_duration",3,660),x=Q(t,"tap_then_longpress_move_tolerance",3,7),I=Q(t,"open_offset_x",11,()=>-2),S=Q(t,"open_offset_y",11,()=>-2),b=Q(t,"scoped",3,!1);On(s());let _=z(void 0);const w=q(s),C=q(()=>{let{layout:p,initial_layout:u}=o(w);return[p,u]}),v=q(()=>o(C)[0]),c=q(()=>o(C)[1]),m=q(()=>o(v)===o(c));let T=z(void 0),N=z(void 0);qt(()=>{!o(m)&&o(T)!==void 0&&(o(v).width=o(T))}),qt(()=>{!o(m)&&o(N)!==void 0&&(o(v).height=o(N))});const O=Ke();qt(()=>{if(o(_)){const p=o(_).getBoundingClientRect();O.width=p.width,O.height=p.height}});const H=q(()=>s().x+Math.min(0,o(v).width-(s().x+O.width))),Y=q(()=>s().y+Math.min(0,o(v).height-(s().y+O.height)));let K=z(void 0),L=z(void 0),nt=z(void 0),D=z(void 0),X=z(void 0),V=z(void 0);const U=()=>{o(X)&&g(X,!1),o(D)!=null&&(clearTimeout(o(D)),g(D,null))},Z=p=>{var A;if(o(V)){g(V,!1);return}if(o(X)){U(),Nt(p);return}const{target:u}=p;p.shiftKey||!(u instanceof HTMLElement||u instanceof SVGElement)||(A=o(_))!=null&&A.contains(u)||pe(u)||ze(u)||qe(u,p.clientX+I(),p.clientY+S(),s())&&(Nt(p),U())},ct=p=>{o(X)&&g(X,!1);const{touches:u,target:A}=p;if(s().opened||u.length!==1||p.shiftKey||!(A instanceof HTMLElement||A instanceof SVGElement)||pe(A)||ze(A))return;const{clientX:W,clientY:$t}=u[0];if(k()){if(o(nt)!=null&&performance.now()-o(nt)<y()&&Math.hypot(W-o(K),$t-o(L))<x()){g(V,!0),g(nt,null);return}g(nt,M(performance.now()))}g(K,M(W)),g(L,M($t)),o(D)!=null&&U(),g(D,M(setTimeout(()=>{g(X,!0),qe(A,o(K)+I(),o(L)+S(),s())},f())))},mt=p=>{if(o(D)==null)return;const{touches:u}=p;if(u.length!==1)return;const{clientX:A,clientY:W}=u[0];Math.hypot(A-o(K),W-o(L))>l()&&(s().opened&&s().close(),U())},rt=p=>{o(D)!=null&&(o(X)&&Nt(p),U())},lt=p=>{o(_)&&!o(_).contains(p.target)&&s().close()},vt=new Map([["Escape",()=>s().close()],["ArrowLeft",()=>s().collapse_selected()],["ArrowRight",()=>s().expand_selected()],["ArrowDown",()=>s().select_next()],["PageDown",()=>s().select_next()],["ArrowUp",()=>s().select_previous()],["PageUp",()=>s().select_previous()],["Home",()=>s().select_first()],["End",()=>s().select_last()],[" ",()=>s().activate_selected()],["Enter",()=>s().activate_selected()]]),j=p=>{const u=vt.get(p.key);!u||pe(p.target)||(Nt(p),u())};var gt=Wn();ot("contextmenu",Pt,function(...p){const u=b()?void 0:Z;return u==null?void 0:u.apply(this,p)},!0,!1),ot("touchstart",Pt,function(...p){const u=b()?void 0:ct;return u==null?void 0:u.apply(this,p)},!0,!0),ot("touchmove",Pt,function(...p){const u=b()?void 0:mt;return u==null?void 0:u.apply(this,p)},!0,!0),ot("touchend",Pt,function(...p){const u=b()?void 0:rt;return u==null?void 0:u.apply(this,p)},!0,!1),ot("touchcancel",Pt,function(...p){const u=b()?void 0:rt;return u==null?void 0:u.apply(this,p)},!0,!1),ot("mousedown",Pt,function(...p){const u=s().opened?lt:void 0;return u==null?void 0:u.apply(this,p)},!0,!0),ot("keydown",Pt,function(...p){const u=s().opened?j:void 0;return u==null?void 0:u.apply(this,p)},!0,!1);var xt=h(gt);R(xt,b,p=>{var u=Ln(),A=$(u);it(A,()=>t.children),ot("contextmenu",u,Z,!0,!1),ot("touchstart",u,ct,!0,!0),ot("touchmove",u,mt,!0,!0),ot("touchend",u,rt,!0,!1),ot("touchcancel",u,rt,!0,!1),r(p,u)},p=>{var u=E(),A=h(u);it(A,()=>t.children),r(p,u)});var zt=n(n(xt,!0));R(zt,()=>!o(m),p=>{var u=Hn();Me(u,"clientHeight",A=>g(N,A)),Me(u,"clientWidth",A=>g(T,A)),r(p,u)});var Ot=n(n(zt,!0));R(Ot,()=>s().opened,p=>{var u=Un();we(u,A=>g(_,M(A)),()=>o(_)),Rt(u,76,()=>s().params,(A,W)=>F(A),(A,W,$t)=>{var ht=E(),ut=h(ht);R(ut,()=>typeof F(W)=="function",Tt=>{var tt=E(),bt=h(tt);it(bt,()=>F(W)),r(Tt,tt)},Tt=>{var tt=E(),bt=h(tt);R(bt,()=>F(W).snippet==="link",It=>{var J=E(!0),Et=h(J);e(Et,()=>F(W).props),r(It,J)},It=>{var J=E(),Et=h(J);R(Et,()=>F(W).snippet==="text",_e=>{var pt=E(!0),yt=h(pt);a(yt,()=>F(W).props),r(_e,pt)},null,!0),r(It,J)},!0),r(Tt,tt)}),r(A,ht)}),G(()=>ae(u,"transform",`translate3d(${o(H)??""}px, ${o(Y)??""}px, 0)`)),r(p,u)}),r(i,gt),_t()}var Bn=d('<span class="display_contents"><!></span>');function Ct(i,t){dt(t,!0);var e=Bn(),a=$(e);it(a,()=>t.children),pn(e,(s,l)=>An(s,l),()=>t.entries),r(i,e),_t()}var Xn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Vn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Te(i,t){dt(t,!0);const e=ke(),a=e.add_submenu(),{layout:s}=e,l=q(()=>a.selected);let f=z(void 0);const k=Fn(),y=Ke();let x=z(0),I=z(0);qt(()=>{o(f)&&S(o(f),s,k)});const S=(N,O,H)=>{const{x:Y,y:K,width:L,height:nt}=N.getBoundingClientRect();y.width=L,y.height=nt;const D=Y-o(x),X=K-o(I),V=D+L+H.width-O.width;if(V<=0)g(x,M(H.width));else{const U=L-D;U<=0?g(x,-L):U>V?g(x,H.width-V):g(x,U-L)}g(I,M(Math.min(0,O.height-(X+nt))))};var b=Vn(),_=$(b),w=$(_),C=$(w),v=$(C);R(v,()=>t.icon,N=>{var O=E(),H=h(O);it(H,()=>t.icon),r(N,O)});var c=n(n(C,!0)),m=$(c);it(m,()=>t.children);var T=n(n(_,!0));R(T,()=>o(l),N=>{var O=Xn();we(O,Y=>g(f,M(Y)),()=>o(f));var H=$(O);it(H,()=>t.menu),G(()=>{ae(O,"transform",`translate3d(${o(x)??""}px, ${o(I)??""}px, 0)`),ae(O,"max-height",`${s.height??""}px`)}),r(N,O)}),G(()=>{ae(b,"--contextmenu_depth",a.depth),ce(_,"aria-expanded",o(l)),ft(_,"selected",o(l))}),ot("mouseenter",_,N=>{Nt(N),setTimeout(()=>e.select(a))},!1),r(i,b),_t()}var Yn=d("🏠",1),Kn=d("🌄",1),jn=d("go home",1),Gn=d("go adventure",1),Jn=d("🌄",1),Qn=d("🏠",1),Zn=d("do adventure",1),to=d("be home",1),eo=d("<!> <!>",5);function le(i,t){dt(t,!0);const e=Q(t,"name",3,"Cat"),a=Q(t,"icon",3,"😺");var s=E(!0),l=h(s);Te(l,{icon:y=>{var x=At(y);G(()=>at(x,a())),r(y,x)},menu:y=>{var x=eo(),I=h(x);et(I,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:_=>{var w=E(),C=h(w);R(C,()=>t.position==="adventure",v=>{var c=Yn();r(v,c)},v=>{var c=Kn();r(v,c)}),r(_,w)},children:(_,w)=>{var C=E(),v=h(C);R(v,()=>t.position==="adventure",c=>{var m=jn();r(c,m)},c=>{var m=Gn();r(c,m)}),r(_,C)},$$slots:{default:!0}});var S=n(n(I,!0));et(S,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:_=>{var w=E(),C=h(w);R(C,()=>t.position==="adventure",v=>{var c=Jn();r(v,c)},v=>{var c=Qn();r(v,c)}),r(_,w)},children:(_,w)=>{var C=E(),v=h(C);R(v,()=>t.position==="adventure",c=>{var m=Zn();r(c,m)},c=>{var m=to();r(c,m)}),r(_,C)},$$slots:{default:!0}}),r(y,x)},children:(y,x)=>{var I=At(y);G(()=>at(I,e())),r(y,I)},$$slots:{default:!0}}),r(i,s),_t()}var no=d("Source code",1),oo=d("?",1),ro=d("About",1),so=d("<!> <!>",5);function ao(i,t){var e=so(),a=h(e);je(a,{href:"https://github.com/ryanatkn/fuz",icon:f=>{var k=E(!0),y=h(k);mn(y,{size:"var(--icon_size_xs)"}),r(f,k)},children:(f,k)=>{var y=no();r(f,y)},$$slots:{default:!0}});var s=n(n(a,!0));et(s,{get run(){return t.toggle_about_dialog},icon:f=>{var k=oo();r(f,k)},children:(f,k)=>{var y=ro();r(f,y)},$$slots:{default:!0}}),r(i,e)}const Je=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const e=i[0];return e.icon+e.name};var io=d("🏠",1),co=d("🐈‍⬛",1),lo=d("call",1),uo=d("🏠",1),_o=d("be",1),mo=d("🦋",1),vo=d("leave",1),ho=d("<!> <!>",5),po=d("<!> <!> <!>",1),fo=d("home",1);function go(i,t){dt(t,!0);const e=q(()=>Je(t.adventure_cats));var a=E(!0),s=h(a);Te(s,{icon:k=>{var y=io();r(k,y)},menu:k=>{var y=po(),x=h(y);R(x,()=>o(e),b=>{var _=E(!0),w=h(_);et(w,{run:()=>t.act({type:"call_cats_home"}),icon:v=>{var c=co();r(v,c)},children:(v,c)=>{var m=lo();r(v,m)},$$slots:{default:!0}}),r(b,_)});var I=n(n(x,!0));Rt(I,69,()=>t.home_cats,(b,_)=>F(b).name,(b,_,w)=>{var C=E(!0),v=h(C);le(v,{get name(){return F(_).name},get icon(){return F(_).icon},get position(){return F(_).position},get act(){return t.act}}),r(b,C)});var S=n(n(I,!0));R(S,()=>!o(e),b=>{var _=ho(),w=h(_);et(w,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:c=>{var m=uo();r(c,m)},children:(c,m)=>{var T=_o();r(c,T)},$$slots:{default:!0}});var C=n(n(w,!0));et(C,{run:()=>t.act({type:"call_cats_adventure"}),icon:c=>{var m=mo();r(c,m)},children:(c,m)=>{var T=vo();r(c,T)},$$slots:{default:!0}}),r(b,_)}),r(k,y)},children:(k,y)=>{var x=fo();r(k,x)},$$slots:{default:!0}}),r(i,a),_t()}var xo=d("🌄",1),bo=d("🦋",1),yo=d("call",1),wo=d("🌄",1),$o=d("do",1),Co=d("🐈‍⬛",1),ko=d("leave",1),To=d("<!> <!>",5),Io=d("<!> <!> <!>",1),Eo=d("adventure",1);function Po(i,t){dt(t,!0);const e=q(()=>Je(t.home_cats));var a=E(!0),s=h(a);Te(s,{icon:k=>{var y=xo();r(k,y)},menu:k=>{var y=Io(),x=h(y);R(x,()=>o(e),b=>{var _=E(!0),w=h(_);et(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:v=>{var c=bo();r(v,c)},children:(v,c)=>{var m=yo();r(v,m)},$$slots:{default:!0}}),r(b,_)});var I=n(n(x,!0));Rt(I,69,()=>t.adventure_cats,(b,_)=>F(b).name,(b,_,w)=>{var C=E(!0),v=h(C);le(v,{get name(){return F(_).name},get icon(){return F(_).icon},get position(){return F(_).position},get act(){return t.act}}),r(b,C)});var S=n(n(I,!0));R(S,()=>!o(e),b=>{var _=To(),w=h(_);et(w,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:c=>{var m=wo();r(c,m)},children:(c,m)=>{var T=$o();r(c,T)},$$slots:{default:!0}});var C=n(n(w,!0));et(C,{run:()=>t.act({type:"call_cats_home"}),icon:c=>{var m=Co();r(c,m)},children:(c,m)=>{var T=ko();r(c,T)},$$slots:{default:!0}}),r(b,_)}),r(k,y)},children:(k,y)=>{var x=Eo();r(k,x)},$$slots:{default:!0}}),r(i,a),_t()}var Ao=d('<span class="icon svelte-u0xdy"> </span>'),So=d('<span class="name svelte-u0xdy"><!> </span>'),zo=d('<span class="cat svelte-u0xdy"><!><!></span>');function Le(i,t){dt(t,!0);const e=Q(t,"name",3,"Cat"),a=Q(t,"icon",3,"😺"),s=Q(t,"show_name",3,!0),l=Q(t,"show_icon",3,!0);var f=zo(),k=$(f);R(k,l,x=>{var I=Ao(),S=$(I);G(()=>at(S,a())),r(x,I)});var y=n(k);R(y,s,x=>{var I=So(),S=$(I);R(S,()=>t.children,_=>{var w=E(),C=h(w);it(C,()=>t.children),r(_,w)});var b=n(S,!0);G(()=>at(b,e())),r(x,I)}),G(()=>ft(f,"has-icon",l())),r(i,f),_t()}const Oo=`<script lang="ts">
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
`;var No=d("<!> <!>",1),Fo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Mo=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Do=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),qo=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=d("View example source",1),Lo=d("<section><!> <!></section> <section><!></section>",1),Ho=d("<!> <!>",5),Uo=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Wo=d("<!> <!>",5);function Bo(i,t){dt(t,!0);const e="Alyssa",a="Ben",s="home";let l=z(s),f=z(s);const k=q(()=>o(l)===o(f)?"😺":"😾"),y=q(()=>o(l)===o(f)?"😸":"😿"),x=q(()=>({name:e,icon:o(k),position:o(l)})),I=q(()=>({name:a,icon:o(y),position:o(f)}));let S=z(!1);const b=(D,X)=>{const V=[],U=[];for(const Z of D){const ct=Z.position==="home"?V:U;X?ct.unshift(Z):ct.push(Z)}return{home_cats:V,adventure_cats:U}},_=q(()=>b([o(x),o(I)],o(S))),w=q(()=>{let{home_cats:D,adventure_cats:X}=o(_);return[D,X]}),C=q(()=>o(w)[0]),v=q(()=>o(w)[1]),c=q(()=>o(l)!==s||o(f)!==s),m=()=>{g(l,s),g(f,s)};let T=z(!1);const N=()=>{g(T,!o(T))},O=D=>{switch(D.type){case"call_cats_adventure":{g(l,"adventure"),g(f,"adventure");break}case"call_cats_home":{g(l,"home"),g(f,"home");break}case"cat_go_adventure":{D.name===e?g(l,"adventure"):D.name===a&&g(f,"adventure");break}case"cat_go_home":{D.name===e?g(l,"home"):D.name===a&&g(f,"home");break}case"cat_be_or_do":{g(S,!o(S));break}}},[H,Y]=rn({fallback:(D,X)=>{const V=window.getComputedStyle(D),U=V.transform==="none"?"":V.transform;return{duration:1500,easing:Cn,css:Z=>`
					transform: ${U} scale(${Z});
					opacity: ${Z}
				`}}});var K=Wo(),L=h(K);re(L,{scoped:!0,children:(D,X)=>{var V=Ho(),U=h(V);St(U,{text:"Full example",slug:"full-example"});var Z=n(n(U,!0));Ct(Z,{entries:mt=>{var rt=No(),lt=h(rt);R(lt,()=>o(c),j=>{var gt=E(!0),xt=h(gt);Ge(xt,{run:m,content:"Reset",icon:"↻"}),r(j,gt)});var vt=n(n(lt,!0));ao(vt,{toggle_about_dialog:N}),r(mt,rt)},children:(mt,rt)=>{var lt=Lo(),vt=h(lt),j=$(vt);Ct(j,{entries:p=>{var u=E(!0),A=h(u);go(A,{act:O,get home_cats(){return o(C)},get adventure_cats(){return o(v)}}),r(p,u)},children:(p,u)=>{var A=Mo(),W=$(A),$t=n(n(W,!0));Rt($t,95,()=>o(C),(ht,ut)=>F(F(ht)).name,(ht,ut,Tt)=>{let tt=()=>F(F(ut)).name,bt=()=>F(F(ut)).icon,It=()=>F(F(ut)).position;var J=Fo();Dt(1,J,()=>Y,()=>({key:tt()})),Dt(2,J,()=>H,()=>({key:tt()})),Ae(J,()=>De,null);var Et=$(J);Ct(Et,{entries:pt=>{var yt=E(!0),wt=h(yt);le(wt,{act:O,get name(){return tt()},get icon(){return bt()},get position(){return It()}}),r(pt,yt)},children:(pt,yt)=>{var wt=E(!0),me=h(wt);Le(me,{get name(){return tt()},get icon(){return bt()}}),r(pt,wt)},$$slots:{default:!0}}),r(ht,J)}),r(p,A)},$$slots:{default:!0}});var gt=n(n(j,!0));Ct(gt,{entries:p=>{var u=E(!0),A=h(u);Po(A,{act:O,get home_cats(){return o(C)},get adventure_cats(){return o(v)}}),r(p,u)},children:(p,u)=>{var A=qo(),W=$(A),$t=n(n(W,!0));Rt($t,95,()=>o(v),(ht,ut)=>F(F(ht)).name,(ht,ut,Tt)=>{let tt=()=>F(F(ut)).name,bt=()=>F(F(ut)).icon,It=()=>F(F(ut)).position;var J=Do();Dt(1,J,()=>Y,()=>({key:tt()})),Dt(2,J,()=>H,()=>({key:tt()})),Ae(J,()=>De,null);var Et=$(J);Ct(Et,{entries:pt=>{var yt=E(!0),wt=h(yt);le(wt,{act:O,get name(){return tt()},get icon(){return bt()},get position(){return It()}}),r(pt,yt)},children:(pt,yt)=>{var wt=E(!0),me=h(wt);Le(me,{get name(){return tt()},get icon(){return bt()}}),r(pt,wt)},$$slots:{default:!0}}),r(ht,J)}),r(p,A)},$$slots:{default:!0}});var xt=n(n(vt,!0)),zt=$(xt);_n(zt,{summary:p=>{var u=Ro();r(p,u)},children:(p,u)=>{var A=E(!0),W=h(A);Lt(W,{content:Oo}),r(p,A)},$$slots:{default:!0}}),r(mt,lt)},$$slots:{default:!0}}),r(D,V)},$$slots:{default:!0}});var nt=n(n(L,!0));R(nt,()=>o(T),D=>{var X=E(!0),V=h(X);un(V,{onclose:()=>g(T,!1),children:(U,Z)=>{var ct=Uo(),mt=$(ct),rt=n(n(mt,!0)),lt=n(n(rt,!0)),vt=n(n(lt,!0)),j=n(n(vt,!0)),gt=$(j),xt=n(n(gt,!0));vn(xt,{});var zt=n(n(xt,!0)),Ot=n(n(zt,!0));hn(Ot,{}),r(U,ct)},$$slots:{default:!0}}),r(D,X)}),r(i,K),_t()}var Xo=d("Hello world",1),Vo=d("🌞",1),Yo=d("Hello with an optional icon snippet",1),Ko=d("Hello with an optional icon string",1),jo=d("<!> <!> <!>",5),Go=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Jo=d("<!> <!>",5);function Qo(i){let t=z(!1),e=z(!1),a=z(!1);var s=Jo(),l=h(s);St(l,{text:"Basic usage",slug:"basic-usage"});var f=n(n(l,!0));re(f,{scoped:!0,children:(k,y)=>{var x=E(!0),I=h(x);Ct(I,{entries:b=>{var _=jo(),w=h(_);et(w,{run:()=>g(t,!o(t)),children:(c,m)=>{var T=Xo();r(c,T)},$$slots:{default:!0}});var C=n(n(w,!0));et(C,{run:()=>g(e,!o(e)),icon:m=>{var T=Vo();r(m,T)},children:(m,T)=>{var N=Yo();r(m,N)},$$slots:{default:!0}});var v=n(n(C,!0));et(v,{run:()=>g(a,!o(a)),icon:"🌚",children:(c,m)=>{var T=Ko();r(c,T)},$$slots:{default:!0}}),r(b,_)},children:(b,_)=>{var w=Go(),C=$(w),v=n(n(C,!0)),c=q(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Lt(v,{get content(){return o(c)}});var m=n(n(v,!0)),T=$(m),N=$(T),O=n(n(m,!0)),H=$(O),Y=$(H),K=n(n(O,!0)),L=$(K),nt=$(L);G(()=>{ft(T,"color_g_5",o(t)),at(N,`greeted = ${o(t)??""}`),ft(H,"color_e_5",o(e)),at(Y,`greeted_icon_snippet = ${o(e)??""}`),ft(L,"color_d_5",o(a)),at(nt,`greeted_icon_string = ${o(a)??""}`)}),r(b,w)},$$slots:{default:!0}}),r(k,x)},$$slots:{default:!0}}),r(i,s)}var Zo=d("Toggle",1),tr=d("<div>toggled</div>"),er=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),nr=d("<!> <!>",5);function or(i){const t=new $e;let e=z(!1);var a=E(!0),s=h(a);re(s,{contextmenu:t,scoped:!0,children:(l,f)=>{var k=nr(),y=h(k);St(y,{text:"Custom instance",slug:"custom-instance"});var x=n(n(y,!0));Ct(x,{entries:S=>{var b=E(!0),_=h(b);et(_,{run:()=>g(e,!o(e)),children:(w,C)=>{var v=Zo();r(w,v)},$$slots:{default:!0}}),r(S,b)},children:(S,b)=>{var _=er(),w=$(_);Lt(w,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var C=n(n(w,!0));Lt(C,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var v=n(n(C,!0)),c=n(n(v,!0)),m=$(c);R(m,()=>o(e),T=>{var N=tr();Dt(3,N,()=>sn),r(T,N)}),r(S,_)},$$slots:{default:!0}}),r(l,k)},$$slots:{default:!0}}),r(i,a)}var rr=d("Toggle something",1),sr=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button>selecting text</button> and then
					opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ar=d("<div><!></div> <!>",1);function ir(i){const t=new $e;let e=z(!1),a;const s=()=>{const b=window.getSelection();if(!b)return;const _=document.createRange();_.selectNodeContents(a),b.removeAllRanges(),b.addRange(_)};let l=z("");const f="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",k=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,y=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,x=q(()=>o(l)===f||o(l)===k||o(l)===y);var I=E(!0),S=h(I);re(S,{contextmenu:t,scoped:!0,children:(b,_)=>{var w=ar(),C=h(w),v=$(C);St(v,{text:"Select text",slug:"select-text"});var c=n(n(C,!0));Ct(c,{entries:T=>{var N=E(!0),O=h(N);et(O,{run:()=>g(e,!o(e)),children:(H,Y)=>{var K=rr();r(H,K)},$$slots:{default:!0}}),r(T,N)},children:(T,N)=>{var O=sr(),H=$(O);we(H,j=>a=j,()=>a);var Y=$(H),K=n(n(Y,!0)),L=n($(K));L.__click=s;var nt=n(n(H,!0)),D=$(nt);an(D);var X=n(n(nt,!0)),V=n(n(X,!0)),U=$(V);cn(U);var Z=n(n(V,!0)),ct=$(Z);se(ct,{href:"Web/HTML/Global_attributes/contenteditable"});var mt=n(n(Z,!0)),rt=n(n(mt,!0)),lt=n(n(rt,!0)),vt=n(n(lt,!0));G(()=>{ft(O,"color_g_5",o(x)),ft(L,"color_a",o(e)),ft(X,"color_g_5",o(x))}),Fe(D,()=>o(l),j=>g(l,j)),Fe(U,()=>o(l),j=>g(l,j)),Ne("innerText",rt,()=>o(l),j=>g(l,j)),Ne("innerText",vt,()=>o(l),j=>g(l,j)),r(T,O)},$$slots:{default:!0}}),G(()=>ft(C,"color_d_5",o(x))),r(b,w)},$$slots:{default:!0}}),r(i,I)}ye(["click"]);var cr=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,5);function lr(i){var t=E(!0),e=h(t);re(e,{scoped:!0,children:(a,s)=>{var l=cr(),f=h(l);St(f,{text:"Default behaviors",slug:"default-behaviors"});var k=n(n(f,!0)),y=$(k);Lt(y,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),r(a,l)},$$slots:{default:!0}}),r(i,t)}var ur=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Dr(i,t){dt(t,!0);const a=on("Contextmenu");var s=E(!0),l=h(s);nn(l,{tome:a,children:(f,k)=>{var y=ur(),x=h(y),I=n(n(x,!0)),S=$(I);Qo(S);var b=n(n(I,!0)),_=$(b);lr(_);var w=n(n(b,!0)),C=$(w);or(C);var v=n(n(w,!0)),c=$(v);ir(c);var m=n(n(v,!0)),T=$(m);Bo(T,{});var N=n(n(m,!0)),O=$(N);wn(O),r(f,y)},$$slots:{default:!0}}),r(i,s),_t()}export{Dr as component};
