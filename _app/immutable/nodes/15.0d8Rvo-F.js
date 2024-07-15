var Je=Object.defineProperty;var Qe=(i,t,n)=>t in i?Je(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var ut=(i,t,n)=>(Qe(i,typeof t!="symbol"?t+"":t,n),n),me=(i,t,n)=>{if(!t.has(i))throw TypeError("Cannot "+n)};var E=(i,t,n)=>(me(i,t,"read from private field"),n?n.call(i):t.get(i)),X=(i,t,n)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,n)},ve=(i,t,n,a)=>(me(i,t,"write to private field"),a?a.call(i,n):t.set(i,n),n);var Te=(i,t,n)=>(me(i,t,"access private method"),n);import{a as r,t as _,c as y,d as L,r as l,s as e,f as O,b as ot,J as Et,$ as It}from"../chunks/disclose-version.D-YpP91c.js";import{i as qe,u as Le,r as Ze,a4 as tn,C as P,g as o,n as w,s as ge,f as xe,p as vt,t as J,a as ht,d as R,O as Dt,U as D,V as Ie}from"../chunks/runtime.CLWtUI7-.js";import{T as en}from"../chunks/Tome_Detail.CypH8Jhs.js";import{g as nn}from"../chunks/tome.BEaQ-Zqd.js";import{M as re}from"../chunks/Mdn_Link.C-NXYAiW.js";import{T as Pt}from"../chunks/Tome_Subheading.D2R4itLj.js";import{i as q}from"../chunks/if.t2Adprt1.js";import{e as Mt}from"../chunks/each.BqXyQR24.js";import{t as Ft,a as Ee,c as on,s as sn}from"../chunks/index.CCgsirPg.js";import{C as Rt}from"../chunks/Code.CB3bu1ip.js";import{e as be,f as ct}from"../chunks/svelte-head.BslmLo-c.js";import{s as dt,c as ce,r as rn,e as an}from"../chunks/attributes.laNZifmC.js";import{s as ae}from"../chunks/style.iv2mhl8q.js";import{p as M}from"../chunks/proxy.BywKGEcJ.js";import{b as ye}from"../chunks/this.CdNU6mSA.js";import{p as nt,s as Pe}from"../chunks/props.B_4kgomd.js";import{a as cn,s as At,b as he,c as Se,D as ln}from"../chunks/Dialog.D8Hwr3hm.js";import{o as Ae}from"../chunks/index-client.DREpZvMv.js";import{s as _t}from"../chunks/render.DClLgGuB.js";import{a as pe}from"../chunks/string.ZJuK4sHN.js";import{t as gt}from"../chunks/class.iiaQ2wDY.js";import{P as un}from"../chunks/Pending_Animation.BVobXiIF.js";import{D as dn,b as Oe}from"../chunks/Details.0Rrotube.js";import{G as _n}from"../chunks/Github_Logo.enVzF0A_.js";import{C as mn,T as vn}from"../chunks/Theme_Input.BV2Oit4r.js";import{b as ze}from"../chunks/input.bte73Sgg.js";function hn(i,t,n){qe(()=>{var a=Le(()=>t(i,n==null?void 0:n())||{});if(n&&(a!=null&&a.update)){var s=!1;Ze(()=>{var c=n();tn(c),s&&a.update(c)}),s=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}var wt,Ot,qt,ue,He;const de=class de{constructor(t){X(this,ue);X(this,wt,new WeakMap);X(this,Ot,void 0);X(this,qt,void 0);ve(this,qt,t)}observe(t,n){var a=E(this,wt).get(t)||new Set;return a.add(n),E(this,wt).set(t,a),Te(this,ue,He).call(this).observe(t,E(this,qt)),()=>{var s=E(this,wt).get(t);s.delete(n),s.size===0&&(E(this,wt).delete(t),E(this,Ot).unobserve(t))}}};wt=new WeakMap,Ot=new WeakMap,qt=new WeakMap,ue=new WeakSet,He=function(){return E(this,Ot)??ve(this,Ot,new ResizeObserver(t=>{for(var n of t){de.entries.set(n.target,n);for(var a of E(this,wt).get(n.target)||[])a(n)}}))},ut(de,"entries",new WeakMap);let fe=de;var pn=new fe({box:"border-box"});function Ne(i,t,n){var a=pn.observe(i,()=>n(i[t]));qe(()=>(Le(()=>n(i[t])),a))}var fn=_('<span class="font_mono">contextmenu</span> event',1),gn=_('<span class="font_mono">navigator.vibrate</span>'),xn=_('<span class="font_mono">navigator.vibrate</span>'),bn=_(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function yn(i){var t=bn(),n=O(t),a=y(n);Pt(a,{text:"Expected behaviors",slug:"expected-behaviors"});var s=e(e(a,!0));L(),l(s);var c=e(e(s,!0)),u=e(y(c));re(u,{path:"Web/API/Element/contextmenu_event",children:(j,B)=>{var st=fn();L(),r(j,st)},$$slots:{default:!0}});var C=e(e(u,!0)),T=e(e(C,!0));re(T,{path:"Web/API/Navigator/vibrate",children:(j,B)=>{var st=gn();r(j,st)},$$slots:{default:!0}}),L(),l(c);var k=e(e(c,!0));L(),l(k);var g=e(e(k,!0)),m=e(e(g,!0)),p=y(m),h=e(e(p,!0)),$=e(e(h,!0)),v=e(e($,!0));l(v),l(m);var f=e(e(m,!0)),b=e(e(f,!0)),I=y(b),S=e(e(I,!0)),z=e(e(S,!0)),A=e(e(z,!0)),W=e(e(A,!0)),K=e(e(W,!0)),Q=e(y(K));re(Q,{path:"Web/API/Navigator/vibrate",children:(j,B)=>{var st=xn();r(j,st)},$$slots:{default:!0}}),L(),l(K),l(b),l(n);var Y=e(e(n,!0)),Z=y(Y);Pt(Z,{text:"Motivation",slug:"motivation"});var N=e(e(Z,!0)),V=e(e(N,!0));l(V);var U=e(e(V,!0));L(),l(U);var H=e(e(U,!0)),G=e(e(H,!0)),lt=e(e(G,!0)),it=e(e(lt,!0));l(it),l(Y),r(i,t)}function wn(i){const t=i-1;return t*t*t+1}function $n(i){return--i*i*i*i*i+1}function Fe(i,{from:t,to:n},a={}){const s=getComputedStyle(i),c=s.transform==="none"?"":s.transform,[u,C]=s.transformOrigin.split(" ").map(parseFloat),T=t.left+t.width*u/n.width-(n.left+u),k=t.top+t.height*C/n.height-(n.top+C),{delay:g=0,duration:m=h=>Math.sqrt(h)*120,easing:p=wn}=a;return{delay:g,duration:typeof m=="function"?m(Math.sqrt(T*T+k*k)):m,easing:p,css:(h,$)=>{const v=$*T,f=$*k,b=h+$*t.width/n.width,I=h+$*t.height/n.height;return`transform: ${c} translate(${v}px, ${f}px) scale(${b}, ${I});`}}}var Lt,Ht;class Ue{constructor(){X(this,Lt,P(0));X(this,Ht,P(0))}get width(){return o(E(this,Lt))}set width(t){w(E(this,Lt),M(t))}get height(){return o(E(this,Ht))}set height(t){w(E(this,Ht),M(t))}}Lt=new WeakMap,Ht=new WeakMap;var Ut,zt,Wt,Vt,Bt;class Cn{constructor(t,n){ut(this,"is_menu",!1);ut(this,"menu");X(this,Ut,P(!1));X(this,zt,P());X(this,Wt,P(!1));X(this,Vt,P(null));X(this,Bt,P(null));this.menu=t,E(this,zt).v=M(n)}get selected(){return o(E(this,Ut))}set selected(t){w(E(this,Ut),M(t))}get run(){return o(E(this,zt))}set run(t){w(E(this,zt),M(t))}get pending(){return o(E(this,Wt))}set pending(t){w(E(this,Wt),M(t))}get error_message(){return o(E(this,Vt))}set error_message(t){w(E(this,Vt),M(t))}get promise(){return o(E(this,Bt))}set promise(t){w(E(this,Bt),M(t))}}Ut=new WeakMap,zt=new WeakMap,Wt=new WeakMap,Vt=new WeakMap,Bt=new WeakMap;var Xt,Yt;class kn{constructor(t,n){ut(this,"is_menu",!0);ut(this,"menu");ut(this,"depth");X(this,Xt,P(!1));X(this,Yt,P(M([])));this.menu=t,this.depth=n}get selected(){return o(E(this,Xt))}set selected(t){w(E(this,Xt),M(t))}get items(){return o(E(this,Yt))}set items(t){w(E(this,Yt),M(t))}}Xt=new WeakMap,Yt=new WeakMap;var jt;class Tn{constructor(){ut(this,"is_menu",!0);ut(this,"menu",null);ut(this,"depth",1);X(this,jt,P(M([])))}get items(){return o(E(this,jt))}set items(t){w(E(this,jt),M(t))}}jt=new WeakMap;var Kt,Gt,Jt,Qt,Zt,te,ee;class we{constructor(t){ut(this,"layout");ut(this,"initial_layout");X(this,Kt,P(!1));X(this,Gt,P(0));X(this,Jt,P(0));X(this,Qt,P(M([])));X(this,Zt,P());X(this,te,P(M(new Tn)));X(this,ee,P(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Ue}get opened(){return o(E(this,Kt))}set opened(t){w(E(this,Kt),M(t))}get x(){return o(E(this,Gt))}set x(t){w(E(this,Gt),M(t))}get y(){return o(E(this,Jt))}set y(t){w(E(this,Jt),M(t))}get params(){return o(E(this,Qt))}set params(t){w(E(this,Qt),M(t))}get error(){return o(E(this,Zt))}set error(t){w(E(this,Zt),M(t))}get root_menu(){return o(E(this,te))}set root_menu(t){w(E(this,te),M(t))}get selections(){return o(E(this,ee))}set selections(t){w(E(this,ee),M(t))}open(t,n,a){this.selections.length=0,this.opened=!0,this.x=n,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise!==null&&(n.promise=null),n.error_message!==null&&(n.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let n;try{n=t.run()}catch(a){const s=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=s??"unknown error",this.error=s}if(cn(n)){t.pending=!0,t.error_message=null;const a=t.promise=n.then(s=>{if(a===t.promise){if(typeof(s==null?void 0:s.ok)=="boolean")if(s.ok)this.close();else{const c=typeof s.message=="string"?s.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return s}},s=>{if(a!==t.promise)return;const c=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var n;const{items:t}=((n=this.selections.at(-1))==null?void 0:n.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const n=Me()??this.root_menu,a=new Cn(n,t);return n.items.push(a),Ae(()=>{n.items.length=0}),a}add_submenu(){const t=Me()??this.root_menu,n=new kn(t,t.depth+1);return t.items.push(n),zn(n),Ae(()=>{t.items.length=0}),n}}Kt=new WeakMap,Gt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap;const $e="contextmenu",In=`a,[data-${$e}]`,ie=new Map;let En=0;const Pn=(i,t)=>{if(t==null)return;const n=En+++"";return i.dataset[$e]=n,ie.set(n,t),{update:a=>{ie.set(n,a)},destroy:()=>{ie.delete(n)}}},Sn=17,De=(i,t,n,a)=>{const s=An(i);return s!=null&&s.length?(a.open(s,t,n),navigator.vibrate&&navigator.vibrate(Sn),!0):!1},An=i=>{var c;let t=null,n=i,a,s;for(;n=n==null?void 0:n.closest(In);){if(a=n.dataset[$e]){if(t||(t=[]),s=ie.get(a),s===void 0)continue;Array.isArray(s)?(t??(t=[])).push(...s):(t??(t=[])).push(s)}n.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const u=(c=window.getSelection())==null?void 0:c.toString();u&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(u)}})}return t},We=Symbol(),On=i=>ge(We,i),Ce=()=>xe(We),Ve=Symbol(),zn=i=>ge(Ve,i),Me=()=>xe(Ve),Be=Symbol(),Xe=(i=new Ue)=>(ge(Be,i),i),Nn=()=>xe(Be);var Fn=(i,t)=>t.close(),Dn=_('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ye(i,t){vt(t,!0);const n="🔗",a=nt(t,"icon",3,n),s=Ce(),c=(b,I=location.host)=>{const S=pe(pe(b,"https://"),"http://");return S.startsWith(I+"/")?pe(S,I):S},u=R(()=>c(t.href)),C=R(()=>!(o(u)[0]==="."||o(u)[0]==="/"&&o(u)[1]!=="/")),T=R(()=>o(C)?"noreferrer":void 0);var k=Dn(),g=y(k);g.__click=[Fn,s];var m=y(g),p=y(m),h=y(p);q(h,()=>typeof a()=="string",b=>{var I=Et();J(()=>_t(I,a())),r(b,I)},b=>{var I=ot(),S=O(I);dt(S,a,()=>n),r(b,I)}),l(p);var $=e(e(p,!0)),v=y($),f=y(v);q(f,()=>t.children,b=>{var I=ot(),S=O(I);dt(S,()=>t.children),r(b,I)},b=>{var I=Et();J(()=>_t(I,o(u))),r(b,I)}),l(v),l($),l(m),l(g),l(k),J(()=>{ce(g,"href",t.href),ce(g,"rel",o(T))}),r(i,k),ht()}be(["click"]);var Mn=_("⚠️",1),Rn=_('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(i,t){vt(t,!0);const n=Ce(),a=n.add_entry(t.run);Dt(()=>{a.run=t.run});const s=R(()=>a),c=R(()=>{let{selected:f,pending:b,error_message:I}=o(s);return[f,b,I]}),u=R(()=>o(c)[0]),C=R(()=>o(c)[1]),T=R(()=>o(c)[2]);var k=Rn();k.__click=()=>{setTimeout(()=>n.activate(a))};var g=y(k),m=y(g),p=y(m);q(p,()=>typeof t.icon=="string",f=>{var b=Et();J(()=>_t(b,t.icon)),r(f,b)},f=>{var b=ot(),I=O(b);q(I,()=>t.icon,S=>{var z=ot(),A=O(z);dt(A,()=>t.icon),r(S,z)},null,!0),r(f,b)}),l(m);var h=e(e(m,!0)),$=y(h);dt($,()=>t.children),l(h);var v=e(e(h,!0));q(v,()=>o(C),f=>{un(f,{})},f=>{var b=ot(),I=O(b);q(I,()=>o(T),S=>{var z=Mn();r(S,z)},null,!0),r(f,b)}),l(g),l(k),J(()=>{ce(k,"title",o(T)?`Error: ${o(T)}`:void 0),gt(k,"selected",o(u))}),ct("mouseenter",k,f=>{At(f),n.select(a)},!1),r(i,k),ht()}be(["click"]);function je(i,t){at(i,{get run(){return t.run},icon:a=>{L();var s=Et();J(()=>_t(s,t.icon)),r(a,s)},children:(a,s)=>{var c=Et();J(()=>_t(c,t.content)),r(a,c)},$$slots:{default:!0}})}var qn=_('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Ln=_('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Hn=_('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Un=_("<!> <!> <!>",1);function ne(i,t){vt(t,!0);const n=(x,d=Ie)=>{Ye(x,Pe(d))},a=(x,d=Ie)=>{je(x,Pe(d))},s=nt(t,"contextmenu",11,()=>new we),c=nt(t,"longpress_move_tolerance",3,21),u=nt(t,"longpress_duration",3,633),C=nt(t,"bypass_with_tap_then_longpress",3,!0),T=nt(t,"tap_then_longpress_duration",3,660),k=nt(t,"tap_then_longpress_move_tolerance",3,7),g=nt(t,"open_offset_x",11,()=>-2),m=nt(t,"open_offset_y",11,()=>-2),p=nt(t,"scoped",3,!1);On(s());let h=P(void 0);const $=R(s),v=R(()=>{let{layout:x,initial_layout:d}=o($);return[x,d]}),f=R(()=>o(v)[0]),b=R(()=>o(v)[1]),I=R(()=>o(f)===o(b));let S=P(void 0),z=P(void 0);Dt(()=>{!o(I)&&o(S)!==void 0&&(o(f).width=o(S))}),Dt(()=>{!o(I)&&o(z)!==void 0&&(o(f).height=o(z))});const A=Xe();Dt(()=>{if(o(h)){const x=o(h).getBoundingClientRect();A.width=x.width,A.height=x.height}});const W=R(()=>s().x+Math.min(0,o(f).width-(s().x+A.width))),K=R(()=>s().y+Math.min(0,o(f).height-(s().y+A.height)));let Q=P(void 0),Y=P(void 0),Z=P(void 0),N=P(void 0),V=P(void 0),U=P(void 0);const H=()=>{o(V)&&w(V,!1),o(N)!=null&&(clearTimeout(o(N)),w(N,null))},G=x=>{var F;if(o(U)){w(U,!1);return}if(o(V)){H(),At(x);return}const{target:d}=x;x.shiftKey||!(d instanceof HTMLElement||d instanceof SVGElement)||(F=o(h))!=null&&F.contains(d)||he(d)||Se(d)||De(d,x.clientX+g(),x.clientY+m(),s())&&(At(x),H())},lt=x=>{o(V)&&w(V,!1);const{touches:d,target:F}=x;if(s().opened||d.length!==1||x.shiftKey||!(F instanceof HTMLElement||F instanceof SVGElement)||he(F)||Se(F))return;const{clientX:tt,clientY:pt}=d[0];if(C()){if(o(Z)!=null&&performance.now()-o(Z)<T()&&Math.hypot(tt-o(Q),pt-o(Y))<k()){w(U,!0),w(Z,null);return}w(Z,M(performance.now()))}w(Q,M(tt)),w(Y,M(pt)),o(N)!=null&&H(),w(N,M(setTimeout(()=>{w(V,!0),De(F,o(Q)+g(),o(Y)+m(),s())},u())))},it=x=>{if(o(N)==null)return;const{touches:d}=x;if(d.length!==1)return;const{clientX:F,clientY:tt}=d[0];Math.hypot(F-o(Q),tt-o(Y))>c()&&(s().opened&&s().close(),H())},j=x=>{o(N)!=null&&(o(V)&&At(x),H())},B=x=>{o(h)&&!o(h).contains(x.target)&&s().close()},st=new Map([["Escape",()=>s().close()],["ArrowLeft",()=>s().collapse_selected()],["ArrowRight",()=>s().expand_selected()],["ArrowDown",()=>s().select_next()],["PageDown",()=>s().select_next()],["ArrowUp",()=>s().select_previous()],["PageUp",()=>s().select_previous()],["Home",()=>s().select_first()],["End",()=>s().select_last()],[" ",()=>s().activate_selected()],["Enter",()=>s().activate_selected()]]),xt=x=>{const d=st.get(x.key);!d||he(x.target)||(At(x),d())};var St=Un();ct("contextmenu",It,function(...x){const d=p()?void 0:G;return d==null?void 0:d.apply(this,x)},!0,!1),ct("touchstart",It,function(...x){const d=p()?void 0:lt;return d==null?void 0:d.apply(this,x)},!0,!0),ct("touchmove",It,function(...x){const d=p()?void 0:it;return d==null?void 0:d.apply(this,x)},!0,!0),ct("touchend",It,function(...x){const d=p()?void 0:j;return d==null?void 0:d.apply(this,x)},!0,!1),ct("touchcancel",It,function(...x){const d=p()?void 0:j;return d==null?void 0:d.apply(this,x)},!0,!1),ct("mousedown",It,function(...x){const d=s().opened?B:void 0;return d==null?void 0:d.apply(this,x)},!0,!0),ct("keydown",It,function(...x){const d=s().opened?xt:void 0;return d==null?void 0:d.apply(this,x)},!0,!1);var $t=O(St);q($t,p,x=>{var d=qn(),F=y(d);dt(F,()=>t.children),l(d),ct("contextmenu",d,G,!0,!1),ct("touchstart",d,lt,!0,!0),ct("touchmove",d,it,!0,!0),ct("touchend",d,j,!0,!1),ct("touchcancel",d,j,!0,!1),r(x,d)},x=>{var d=ot(),F=O(d);dt(F,()=>t.children),r(x,d)});var oe=e(e($t,!0));q(oe,()=>!o(I),x=>{var d=Ln();Ne(d,"clientHeight",F=>w(z,F)),Ne(d,"clientWidth",F=>w(S,F)),r(x,d)});var se=e(e(oe,!0));q(se,()=>s().opened,x=>{var d=Hn();ye(d,F=>w(h,M(F)),()=>o(h)),Mt(d,76,()=>s().params,(F,tt)=>D(F),(F,tt,pt)=>{var ft=ot(),mt=O(ft);q(mt,()=>typeof D(tt)=="function",Ct=>{var rt=ot(),bt=O(rt);dt(bt,()=>D(tt)),r(Ct,rt)},Ct=>{var rt=ot(),bt=O(rt);q(bt,()=>D(tt).snippet==="link",kt=>{n(kt,()=>D(tt).props)},kt=>{var et=ot(),Nt=O(et);q(Nt,()=>D(tt).snippet==="text",_e=>{a(_e,()=>D(tt).props)},null,!0),r(kt,et)},!0),r(Ct,rt)}),r(F,ft)}),l(d),J(()=>ae(d,"transform",`translate3d(${o(W)??""}px, ${o(K)??""}px, 0)`)),r(x,d)}),r(i,St),ht()}var Wn=_('<span class="display_contents"><!></span>');function yt(i,t){vt(t,!0);var n=Wn(),a=y(n);dt(a,()=>t.children),l(n),hn(n,(s,c)=>Pn(s,c),()=>t.entries),r(i,n),ht()}var Vn=_('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=_('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ke(i,t){vt(t,!0);const n=Ce(),a=n.add_submenu(),{layout:s}=n,c=R(()=>a.selected);let u=P(void 0);const C=Nn(),T=Xe();let k=P(0),g=P(0);Dt(()=>{o(u)&&m(o(u),s,C)});const m=(z,A,W)=>{const{x:K,y:Q,width:Y,height:Z}=z.getBoundingClientRect();T.width=Y,T.height=Z;const N=K-o(k),V=Q-o(g),U=N+Y+W.width-A.width;if(U<=0)w(k,M(W.width));else{const H=Y-N;H<=0?w(k,-Y):H>U?w(k,W.width-U):w(k,H-Y)}w(g,M(Math.min(0,A.height-(V+Z))))};var p=Bn(),h=y(p),$=y(h),v=y($),f=y(v);q(f,()=>t.icon,z=>{var A=ot(),W=O(A);dt(W,()=>t.icon),r(z,A)}),l(v);var b=e(e(v,!0)),I=y(b);dt(I,()=>t.children),l(b),l($),l(h);var S=e(e(h,!0));q(S,()=>o(c),z=>{var A=Vn();ye(A,K=>w(u,M(K)),()=>o(u));var W=y(A);dt(W,()=>t.menu),l(A),J(()=>{ae(A,"transform",`translate3d(${o(k)??""}px, ${o(g)??""}px, 0)`),ae(A,"max-height",`${s.height??""}px`)}),r(z,A)}),l(p),J(()=>{ae(p,"--contextmenu_depth",a.depth),ce(h,"aria-expanded",o(c)),gt(h,"selected",o(c))}),ct("mouseenter",h,z=>{At(z),setTimeout(()=>n.select(a))},!1),r(i,p),ht()}var Xn=_("🏠",1),Yn=_("🌄",1),jn=_("go home",1),Kn=_("go adventure",1),Gn=_("🌄",1),Jn=_("🏠",1),Qn=_("do adventure",1),Zn=_("be home",1),to=_("<!> <!>",1);function le(i,t){vt(t,!0);const n=nt(t,"name",3,"Cat"),a=nt(t,"icon",3,"😺");ke(i,{icon:u=>{L();var C=Et();J(()=>_t(C,a())),r(u,C)},menu:u=>{var C=to(),T=O(C);at(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:m=>{var p=ot(),h=O(p);q(h,()=>t.position==="adventure",$=>{var v=Xn();r($,v)},$=>{var v=Yn();r($,v)}),r(m,p)},children:(m,p)=>{var h=ot(),$=O(h);q($,()=>t.position==="adventure",v=>{var f=jn();r(v,f)},v=>{var f=Kn();r(v,f)}),r(m,h)},$$slots:{default:!0}});var k=e(e(T,!0));at(k,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:m=>{var p=ot(),h=O(p);q(h,()=>t.position==="adventure",$=>{var v=Gn();r($,v)},$=>{var v=Jn();r($,v)}),r(m,p)},children:(m,p)=>{var h=ot(),$=O(h);q($,()=>t.position==="adventure",v=>{var f=Qn();r(v,f)},v=>{var f=Zn();r(v,f)}),r(m,h)},$$slots:{default:!0}}),r(u,C)},children:(u,C)=>{var T=Et();J(()=>_t(T,n())),r(u,T)},$$slots:{default:!0}}),ht()}var eo=_("Source code",1),no=_("?",1),oo=_("About",1),so=_("<!> <!>",1);function ro(i,t){var n=so(),a=O(n);Ye(a,{href:"https://github.com/ryanatkn/fuz",icon:u=>{_n(u,{size:"var(--icon_size_xs)"})},children:(u,C)=>{var T=eo();r(u,T)},$$slots:{default:!0}});var s=e(e(a,!0));at(s,{get run(){return t.toggle_about_dialog},icon:u=>{L();var C=no();r(u,C)},children:(u,C)=>{var T=oo();r(u,T)},$$slots:{default:!0}}),r(i,n)}const Ke=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const n=i[0];return n.icon+n.name};var ao=_("🏠",1),io=_("🐈‍⬛",1),co=_("call",1),lo=_("🏠",1),uo=_("be",1),_o=_("🦋",1),mo=_("leave",1),vo=_("<!> <!>",1),ho=_("<!> <!> <!>",1),po=_("home",1);function fo(i,t){vt(t,!0);const n=R(()=>Ke(t.adventure_cats));ke(i,{icon:c=>{L();var u=ao();r(c,u)},menu:c=>{var u=ho(),C=O(u);q(C,()=>o(n),g=>{at(g,{run:()=>t.act({type:"call_cats_home"}),icon:p=>{L();var h=io();r(p,h)},children:(p,h)=>{var $=co();r(p,$)},$$slots:{default:!0}})});var T=e(e(C,!0));Mt(T,69,()=>t.home_cats,(g,m)=>D(g).name,(g,m,p)=>{le(g,{get name(){return D(m).name},get icon(){return D(m).icon},get position(){return D(m).position},get act(){return t.act}})});var k=e(e(T,!0));q(k,()=>!o(n),g=>{var m=vo(),p=O(m);at(p,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:v=>{L();var f=lo();r(v,f)},children:(v,f)=>{var b=uo();r(v,b)},$$slots:{default:!0}});var h=e(e(p,!0));at(h,{run:()=>t.act({type:"call_cats_adventure"}),icon:v=>{L();var f=_o();r(v,f)},children:(v,f)=>{var b=mo();r(v,b)},$$slots:{default:!0}}),r(g,m)}),r(c,u)},children:(c,u)=>{var C=po();r(c,C)},$$slots:{default:!0}}),ht()}var go=_("🌄",1),xo=_("🦋",1),bo=_("call",1),yo=_("🌄",1),wo=_("do",1),$o=_("🐈‍⬛",1),Co=_("leave",1),ko=_("<!> <!>",1),To=_("<!> <!> <!>",1),Io=_("adventure",1);function Eo(i,t){vt(t,!0);const n=R(()=>Ke(t.home_cats));ke(i,{icon:c=>{L();var u=go();r(c,u)},menu:c=>{var u=To(),C=O(u);q(C,()=>o(n),g=>{at(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:p=>{L();var h=xo();r(p,h)},children:(p,h)=>{var $=bo();r(p,$)},$$slots:{default:!0}})});var T=e(e(C,!0));Mt(T,69,()=>t.adventure_cats,(g,m)=>D(g).name,(g,m,p)=>{le(g,{get name(){return D(m).name},get icon(){return D(m).icon},get position(){return D(m).position},get act(){return t.act}})});var k=e(e(T,!0));q(k,()=>!o(n),g=>{var m=ko(),p=O(m);at(p,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:v=>{L();var f=yo();r(v,f)},children:(v,f)=>{var b=wo();r(v,b)},$$slots:{default:!0}});var h=e(e(p,!0));at(h,{run:()=>t.act({type:"call_cats_home"}),icon:v=>{L();var f=$o();r(v,f)},children:(v,f)=>{var b=Co();r(v,b)},$$slots:{default:!0}}),r(g,m)}),r(c,u)},children:(c,u)=>{var C=Io();r(c,C)},$$slots:{default:!0}}),ht()}var Po=_('<span class="icon svelte-u0xdy"> </span>'),So=_('<span class="name svelte-u0xdy"><!> </span>'),Ao=_('<span class="cat svelte-u0xdy"><!><!></span>');function Re(i,t){vt(t,!0);const n=nt(t,"name",3,"Cat"),a=nt(t,"icon",3,"😺"),s=nt(t,"show_name",3,!0),c=nt(t,"show_icon",3,!0);var u=Ao(),C=y(u);q(C,c,k=>{var g=Po(),m=y(g);l(g),J(()=>_t(m,a())),r(k,g)});var T=e(C);q(T,s,k=>{var g=So(),m=y(g);q(m,()=>t.children,h=>{var $=ot(),v=O($);dt(v,()=>t.children),r(h,$)});var p=e(m,!0);l(g),J(()=>_t(p,n())),r(k,g)}),l(u),J(()=>gt(u,"has-icon",c())),r(i,u),ht()}const Oo=`<script lang="ts">
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
`;var zo=_("<!> <!>",1),No=_('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Fo=_('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Do=_('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Mo=_('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=_("View example source",1),qo=_("<section><!> <!></section> <section><!></section>",1),Lo=_("<!> <!>",1),Ho=_('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Uo=_("<!> <!>",1);function Wo(i,t){vt(t,!0);const n="Alyssa",a="Ben",s="home";let c=P(s),u=P(s);const C=R(()=>o(c)===o(u)?"😺":"😾"),T=R(()=>o(c)===o(u)?"😸":"😿"),k=R(()=>({name:n,icon:o(C),position:o(c)})),g=R(()=>({name:a,icon:o(T),position:o(u)}));let m=P(!1);const p=(N,V)=>{const U=[],H=[];for(const G of N){const lt=G.position==="home"?U:H;V?lt.unshift(G):lt.push(G)}return{home_cats:U,adventure_cats:H}},h=R(()=>p([o(k),o(g)],o(m))),$=R(()=>{let{home_cats:N,adventure_cats:V}=o(h);return[N,V]}),v=R(()=>o($)[0]),f=R(()=>o($)[1]),b=R(()=>o(c)!==s||o(u)!==s),I=()=>{w(c,s),w(u,s)};let S=P(!1);const z=()=>{w(S,!o(S))},A=N=>{switch(N.type){case"call_cats_adventure":{w(c,"adventure"),w(u,"adventure");break}case"call_cats_home":{w(c,"home"),w(u,"home");break}case"cat_go_adventure":{N.name===n?w(c,"adventure"):N.name===a&&w(u,"adventure");break}case"cat_go_home":{N.name===n?w(c,"home"):N.name===a&&w(u,"home");break}case"cat_be_or_do":{w(m,!o(m));break}}},[W,K]=on({fallback:(N,V)=>{const U=window.getComputedStyle(N),H=U.transform==="none"?"":U.transform;return{duration:1500,easing:$n,css:G=>`
					transform: ${H} scale(${G});
					opacity: ${G}
				`}}});var Q=Uo(),Y=O(Q);ne(Y,{scoped:!0,children:(N,V)=>{var U=Lo(),H=O(U);Pt(H,{text:"Full example",slug:"full-example"});var G=e(e(H,!0));yt(G,{entries:it=>{var j=zo(),B=O(j);q(B,()=>o(b),xt=>{je(xt,{run:I,content:"Reset",icon:"↻"})});var st=e(e(B,!0));ro(st,{toggle_about_dialog:z}),r(it,j)},children:(it,j)=>{var B=qo(),st=O(B),xt=y(st);yt(xt,{entries:x=>{fo(x,{act:A,get home_cats(){return o(v)},get adventure_cats(){return o(f)}})},children:(x,d)=>{var F=Fo(),tt=y(F),pt=e(e(tt,!0));Mt(pt,95,()=>o(v),(ft,mt)=>D(D(ft)).name,(ft,mt,Ct)=>{let rt=()=>D(D(mt)).name,bt=()=>D(D(mt)).icon,kt=()=>D(D(mt)).position;var et=No();Ft(1,et,()=>K,()=>({key:rt()})),Ft(2,et,()=>W,()=>({key:rt()})),Ee(et,()=>Fe,null);var Nt=y(et);yt(Nt,{entries:Tt=>{le(Tt,{act:A,get name(){return rt()},get icon(){return bt()},get position(){return kt()}})},children:(Tt,Ge)=>{Re(Tt,{get name(){return rt()},get icon(){return bt()}})},$$slots:{default:!0}}),l(et),r(ft,et)}),l(pt),l(F),r(x,F)},$$slots:{default:!0}});var St=e(e(xt,!0));yt(St,{entries:x=>{Eo(x,{act:A,get home_cats(){return o(v)},get adventure_cats(){return o(f)}})},children:(x,d)=>{var F=Mo(),tt=y(F),pt=e(e(tt,!0));Mt(pt,95,()=>o(f),(ft,mt)=>D(D(ft)).name,(ft,mt,Ct)=>{let rt=()=>D(D(mt)).name,bt=()=>D(D(mt)).icon,kt=()=>D(D(mt)).position;var et=Do();Ft(1,et,()=>K,()=>({key:rt()})),Ft(2,et,()=>W,()=>({key:rt()})),Ee(et,()=>Fe,null);var Nt=y(et);yt(Nt,{entries:Tt=>{le(Tt,{act:A,get name(){return rt()},get icon(){return bt()},get position(){return kt()}})},children:(Tt,Ge)=>{Re(Tt,{get name(){return rt()},get icon(){return bt()}})},$$slots:{default:!0}}),l(et),r(ft,et)}),l(pt),l(F),r(x,F)},$$slots:{default:!0}}),l(st);var $t=e(e(st,!0)),oe=y($t);dn(oe,{summary:x=>{L();var d=Ro();r(x,d)},children:(x,d)=>{Rt(x,{content:Oo})},$$slots:{default:!0}}),l($t),r(it,B)},$$slots:{default:!0}}),r(N,U)},$$slots:{default:!0}});var Z=e(e(Y,!0));q(Z,()=>o(S),N=>{ln(N,{onclose:()=>w(S,!1),children:(V,U)=>{var H=Ho(),G=y(H),lt=e(e(G,!0)),it=e(e(lt,!0));l(it);var j=e(e(it,!0));l(j);var B=e(e(j,!0)),st=y(B),xt=e(e(st,!0));mn(xt,{});var St=e(e(xt,!0)),$t=e(e(St,!0));vn($t,{}),l(B),l(H),r(V,H)},$$slots:{default:!0}})}),r(i,Q),ht()}var Vo=_("Hello world",1),Bo=_("🌞",1),Xo=_("Hello with an optional icon snippet",1),Yo=_("Hello with an optional icon string",1),jo=_("<!> <!> <!>",1),Ko=_(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Go=_("<!> <!>",1);function Jo(i){let t=P(!1),n=P(!1),a=P(!1);var s=Go(),c=O(s);Pt(c,{text:"Basic usage",slug:"basic-usage"});var u=e(e(c,!0));ne(u,{scoped:!0,children:(C,T)=>{yt(C,{entries:g=>{var m=jo(),p=O(m);at(p,{run:()=>w(t,!o(t)),children:(v,f)=>{var b=Vo();r(v,b)},$$slots:{default:!0}});var h=e(e(p,!0));at(h,{run:()=>w(n,!o(n)),icon:f=>{L();var b=Bo();r(f,b)},children:(f,b)=>{var I=Xo();r(f,I)},$$slots:{default:!0}});var $=e(e(h,!0));at($,{run:()=>w(a,!o(a)),icon:"🌚",children:(v,f)=>{var b=Yo();r(v,b)},$$slots:{default:!0}}),r(g,m)},children:(g,m)=>{var p=Ko(),h=y(p),$=e(e(h,!0)),v=R(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(n)} />
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
...markup without contextmenu behavior...`);Rt($,{get content(){return o(v)}});var f=e(e($,!0)),b=y(f),I=y(b);l(b),l(f);var S=e(e(f,!0)),z=y(S),A=y(z);l(z),l(S);var W=e(e(S,!0)),K=y(W),Q=y(K);l(K),l(W);var Y=e(e(W,!0));L(),l(Y),l(p),J(()=>{gt(b,"color_g_5",o(t)),_t(I,`greeted = ${o(t)??""}`),gt(z,"color_e_5",o(n)),_t(A,`greeted_icon_snippet = ${o(n)??""}`),gt(K,"color_d_5",o(a)),_t(Q,`greeted_icon_string = ${o(a)??""}`)}),r(g,p)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(i,s)}var Qo=_("Toggle",1),Zo=_("<div>toggled</div>"),ts=_(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),es=_("<!> <!>",1);function ns(i){const t=new we;let n=P(!1);ne(i,{contextmenu:t,scoped:!0,children:(a,s)=>{var c=es(),u=O(c);Pt(u,{text:"Custom instance",slug:"custom-instance"});var C=e(e(u,!0));yt(C,{entries:k=>{at(k,{run:()=>w(n,!o(n)),children:(g,m)=>{var p=Qo();r(g,p)},$$slots:{default:!0}})},children:(k,g)=>{var m=ts(),p=y(m);Rt(p,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var h=e(e(p,!0));Rt(h,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var $=e(e(h,!0));L(),l($);var v=e(e($,!0)),f=y(v);q(f,()=>o(n),b=>{var I=Zo();Ft(3,I,()=>sn),r(b,I)}),l(v),l(m),r(k,m)},$$slots:{default:!0}}),r(a,c)},$$slots:{default:!0}})}var os=_("Toggle something",1),ss=_(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),rs=_("<div><!></div> <!>",1);function as(i){const t=new we;let n=P(!1),a;const s=()=>{const g=window.getSelection();if(!g)return;const m=document.createRange();m.selectNodeContents(a),g.removeAllRanges(),g.addRange(m)};let c=P("");const u="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",C=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,T=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,k=R(()=>o(c)===u||o(c)===C||o(c)===T);ne(i,{contextmenu:t,scoped:!0,children:(g,m)=>{var p=rs(),h=O(p),$=y(h);Pt($,{text:"Select text",slug:"select-text"}),l(h);var v=e(e(h,!0));yt(v,{entries:b=>{at(b,{run:()=>w(n,!o(n)),children:(I,S)=>{var z=os();r(I,z)},$$slots:{default:!0}})},children:(b,I)=>{var S=ss(),z=y(S);ye(z,B=>a=B,()=>a);var A=y(z);L(),l(A);var W=e(e(A,!0)),K=e(y(W));K.__click=s,L(),l(W),l(z);var Q=e(e(z,!0)),Y=y(Q);rn(Y),l(Q);var Z=e(e(Q,!0));L(),l(Z);var N=e(e(Z,!0)),V=y(N);an(V),l(N);var U=e(e(N,!0)),H=y(U);re(H,{path:"Web/HTML/Global_attributes/contenteditable"}),L(),l(U);var G=e(e(U,!0));l(G);var lt=e(e(G,!0)),it=e(e(lt,!0));l(it);var j=e(e(it,!0));l(S),J(()=>{gt(S,"color_g_5",o(k)),gt(K,"color_a",o(n)),gt(Z,"color_g_5",o(k))}),ze(Y,()=>o(c),B=>w(c,B)),ze(V,()=>o(c),B=>w(c,B)),Oe("innerText",lt,()=>o(c),B=>w(c,B)),Oe("innerText",j,()=>o(c),B=>w(c,B)),r(b,S)},$$slots:{default:!0}}),J(()=>gt(h,"color_d_5",o(k))),r(g,p)},$$slots:{default:!0}})}be(["click"]);var is=_(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function cs(i){ne(i,{scoped:!0,children:(t,n)=>{var a=is(),s=O(a);Pt(s,{text:"Default behaviors",slug:"default-behaviors"});var c=e(e(s,!0)),u=y(c);Rt(u,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`});var C=e(e(u,!0));L(),l(C),l(c),r(t,a)},$$slots:{default:!0}})}var ls=_("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Ms(i,t){vt(t,!0);const a=nn("Contextmenu");en(i,{tome:a,children:(s,c)=>{var u=ls(),C=O(u),T=y(C),k=y(T);L(),l(k),l(T);var g=e(e(T,!0));l(g),l(C);var m=e(e(C,!0)),p=y(m);Jo(p),l(m);var h=e(e(m,!0)),$=y(h);cs($),l(h);var v=e(e(h,!0)),f=y(v);ns(f),l(v);var b=e(e(v,!0)),I=y(b);as(I),l(b);var S=e(e(b,!0)),z=y(S);Wo(z,{}),l(S);var A=e(e(S,!0)),W=y(A);yn(W),l(A),r(s,u)},$$slots:{default:!0}}),ht()}export{Ms as component};
