import"../chunks/DsnmJJEf.js";import{D as ye,A as we,f as z,a as q,b as o,s as m,d as C,ar as N,r as y,au as O,h as n,at as p,ay as qt,p as ut,t as tt,c as dt,u as U,aV as jt,aq as A,e as nt,g as it,H as At,aW as ve,aX as Ct,bo as ke,ap as Ht,br as $e}from"../chunks/O0sQJLjQ.js";import{T as Ce}from"../chunks/D4ICO4ER.js";import{g as Te}from"../chunks/Ci7bMJfB.js";import{M as Dt}from"../chunks/CqemzU8B.js";import{T as Tt,a as It}from"../chunks/AdHPq57Z.js";import{i as W}from"../chunks/BkQkUnNd.js";import{c as Zt,a as Vt,e as zt}from"../chunks/WJ84k1AV.js";import{t as St,c as Ie,a as se,s as Pe}from"../chunks/BY8yZSvM.js";import{C as Et}from"../chunks/CTuTzM6y.js";import{a as rt}from"../chunks/BDjZYHDU.js";import{s as Mt,b as mt,c as Gt,a as Se,r as Ae}from"../chunks/BEimNeHU.js";import{b as Jt}from"../chunks/BbG1w06e.js";import{p as et,s as me}from"../chunks/Br3x_RYM.js";import{a as ze,s as Pt,b as Xt,c as ae,D as Ee}from"../chunks/Iypq38DZ.js";import{o as re}from"../chunks/GwEMlCmX.js";import{s as lt}from"../chunks/CdyPCflp.js";import{P as Oe}from"../chunks/HAwQBFL_.js";import{e as Ne}from"../chunks/DtAwGfIY.js";import{D as De,b as ie}from"../chunks/Du-4k_P4.js";import{S as Re,g as qe}from"../chunks/BhMcpDbt.js";import{C as Me,T as Fe}from"../chunks/fMFjkaxC.js";import{b as le}from"../chunks/DI3Yy-LX.js";class Qt{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,e){var s=this.#t.get(t)||new Set;return s.add(e),this.#t.set(t,s),this.#o().observe(t,this.#n),()=>{var u=this.#t.get(t);u.delete(e),u.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var e of t){Qt.entries.set(e.target,e);for(var s of this.#t.get(e.target)||[])s(e)}}))}}var He=new Qt({box:"border-box"});function ce(a,t,e){var s=He.observe(a,()=>e(a[t]));ye(()=>(we(()=>e(a[t])),s))}var Le=z('<span class="font_family_mono">contextmenu</span> event',1),We=z('<span class="font_family_mono">navigator.vibrate</span>'),Ue=z('<span class="font_family_mono">navigator.vibrate</span>'),Be=z(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),Ve=z(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),Xe=z("<!> <!>",1);function Ye(a){var t=Xe(),e=q(t);Tt(e,{children:(u,l)=>{var r=Be(),v=q(r);It(v,{text:"Expected behaviors"});var w=m(v,4),k=m(C(w));Dt(k,{path:"Web/API/Element/contextmenu_event",children:(c,x)=>{var h=Le();N(),o(c,h)},$$slots:{default:!0}});var I=m(k,4);Dt(I,{path:"Web/API/Navigator/vibrate",children:(c,x)=>{var h=We();o(c,h)},$$slots:{default:!0}}),N(),y(w);var P=m(w,10),i=m(C(P),10),f=m(C(i));Dt(f,{path:"Web/API/Navigator/vibrate",children:(c,x)=>{var h=Ue();o(c,h)},$$slots:{default:!0}}),N(),y(i),y(P),o(u,r)},$$slots:{default:!0}});var s=m(e,2);Tt(s,{children:(u,l)=>{var r=Ve(),v=q(r);It(v,{text:"Motivation"}),N(14),o(u,r)},$$slots:{default:!0}}),o(a,t)}function Ge(a){const t=a-1;return t*t*t+1}function Ke(a){return--a*a*a*a*a+1}function ue(a,{from:t,to:e},s={}){var{delay:u=0,duration:l=S=>Math.sqrt(S)*120,easing:r=Ge}=s,v=getComputedStyle(a),w=v.transform==="none"?"":v.transform,[k,I]=v.transformOrigin.split(" ").map(parseFloat);k/=a.clientWidth,I/=a.clientHeight;var P=je(a),i=a.clientWidth/e.width/P,f=a.clientHeight/e.height/P,c=t.left+t.width*k,x=t.top+t.height*I,h=e.left+e.width*k,d=e.top+e.height*I,$=(c-h)*i,b=(x-d)*f,D=t.width/e.width,E=t.height/e.height;return{delay:u,duration:typeof l=="function"?l(Math.sqrt($*$+b*b)):l,easing:r,css:(S,T)=>{var R=T*$,B=T*b,Y=S+T*D,H=S+T*E;return`transform: ${w} translate(${R}px, ${B}px) scale(${Y}, ${H});`}}}function je(a){if("currentCSSZoom"in a)return a.currentCSSZoom;for(var t=a,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}class he{#t=O(0);get width(){return n(this.#t)}set width(t){p(this.#t,t,!0)}#e=O(0);get height(){return n(this.#e)}set height(t){p(this.#e,t,!0)}}class Ze{is_menu=!1;menu;#t=O(!1);get selected(){return n(this.#t)}set selected(t){p(this.#t,t,!0)}#e=O();get run(){return n(this.#e)}set run(t){p(this.#e,t,!0)}#n=O(!1);get pending(){return n(this.#n)}set pending(t){p(this.#n,t,!0)}#o=O(null);get error_message(){return n(this.#o)}set error_message(t){p(this.#o,t,!0)}#s=O(null);get promise(){return n(this.#s)}set promise(t){p(this.#s,t,!0)}constructor(t,e){this.menu=t,this.run=e}}class Je{is_menu=!0;menu;depth;#t=O(!1);get selected(){return n(this.#t)}set selected(t){p(this.#t,t,!0)}#e=O(qt([]));get items(){return n(this.#e)}set items(t){p(this.#e,t,!0)}constructor(t,e){this.menu=t,this.depth=e}}class Qe{is_menu=!0;menu=null;depth=1;#t=O(qt([]));get items(){return n(this.#t)}set items(t){p(this.#t,t,!0)}}class te{layout;initial_layout;#t=O(!1);get opened(){return n(this.#t)}set opened(t){p(this.#t,t,!0)}#e=O(0);get x(){return n(this.#e)}set x(t){p(this.#e,t,!0)}#n=O(0);get y(){return n(this.#n)}set y(t){p(this.#n,t,!0)}#o=O(qt([]));get params(){return n(this.#o)}set params(t){p(this.#o,t,!0)}#s=O();get error(){return n(this.#s)}set error(t){p(this.#s,t,!0)}root_menu=new Qe;#a=O(qt([]));get selections(){return n(this.#a)}set selections(t){p(this.#a,t,!0)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new he}open(t,e,s){this.selections.length=0,this.opened=!0,this.x=e,this.y=s,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(s){const u=typeof s?.message=="string"?s.message:void 0;t.error_message=u??"unknown error",this.error=u}if(ze(e)){t.pending=!0,t.error_message=null;const s=t.promise=e.then(u=>{if(s===t.promise){if(typeof u?.ok=="boolean")if(u.ok)this.close();else{const l=typeof u.message=="string"?u.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return u}},u=>{if(s!==t.promise)return;const l=typeof u?.message=="string"?u.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{s===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const s of this.selections)s.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!t?.is_menu)return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=Yt.maybe_get()??this.root_menu,s=new Ze(e,t);return e.items.push(s),re(()=>{e.items.length=0}),s}add_submenu(){const t=Yt.maybe_get()??this.root_menu,e=new Je(t,t.depth+1);return t.items.push(e),Yt.set(e),re(()=>{t.items.length=0}),e}}const ee="contextmenu",tn=`a,[data-${ee}]`,Rt=new Map;let en=0;const nn=(a,t)=>{if(t==null)return;const e=en+++"";return a.dataset[ee]=e,Rt.set(e,t),{update:s=>{Rt.set(e,s)},destroy:()=>{Rt.delete(e)}}},on=17,de=(a,t,e,s)=>{const u=sn(a);return u?.length?(s.open(u,t,e),navigator.vibrate&&navigator.vibrate(on),!0):!1},sn=a=>{let t=null,e=a,s,u;for(;e=e?.closest(tn);){if(s=e.dataset[ee]){if(t??=[],u=Rt.get(s),u===void 0)continue;Array.isArray(u)?(t??=[]).push(...u):(t??=[]).push(u)}e.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const l=window.getSelection()?.toString();l&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(l)}})}return t},Lt=Zt(),Yt=Zt(),Kt=Zt(()=>new he);var an=(a,t)=>t.close(),rn=z('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function pe(a,t){ut(t,!0);const e="🔗",s=et(t,"icon",3,e),u=Lt.get(),l=(E,S=location.host)=>{const T=Vt(Vt(E,"https://"),"http://");return T.startsWith(S+"/")?Vt(T,S):T},r=U(()=>l(t.href)),v=U(()=>!(n(r)[0]==="."||n(r)[0]==="/"&&n(r)[1]!=="/")),w=U(()=>n(v)?"noreferrer":void 0);var k=rn(),I=C(k);I.__click=[an,u];var P=C(I),i=C(P),f=C(i);{var c=E=>{var S=A();tt(()=>lt(S,s())),o(E,S)},x=E=>{var S=nt(),T=q(S);it(T,s,()=>e),o(E,S)};W(f,E=>{typeof s()=="string"?E(c):E(x,!1)})}y(i);var h=m(i,2),d=C(h),$=C(d);{var b=E=>{var S=nt(),T=q(S);it(T,()=>t.children),o(E,S)},D=E=>{var S=A();tt(()=>lt(S,n(r))),o(E,S)};W($,E=>{t.children?E(b):E(D,!1)})}y(d),y(h),y(P),y(I),y(k),tt(()=>{Mt(I,"href",t.href),Mt(I,"rel",n(w))}),o(a,k),dt()}jt(["click"]);var ln=z('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function ot(a,t){ut(t,!0);const e=Lt.get(),s=e.add_entry(t.run);At(()=>{s.run=t.run});const u=U(()=>s.selected),l=U(()=>s.pending),r=U(()=>s.error_message);var v=ln();let w;v.__click=()=>{setTimeout(()=>e.activate(s))};var k=C(v),I=C(k),P=C(I);{var i=b=>{var D=A();tt(()=>lt(D,t.icon)),o(b,D)},f=b=>{var D=nt(),E=q(D);{var S=T=>{var R=nt(),B=q(R);it(B,()=>t.icon),o(T,R)};W(E,T=>{t.icon&&T(S)},!0)}o(b,D)};W(P,b=>{typeof t.icon=="string"?b(i):b(f,!1)})}y(I);var c=m(I,2),x=C(c);it(x,()=>t.children),y(c);var h=m(c,2);{var d=b=>{Oe(b,{})},$=b=>{var D=nt(),E=q(D);{var S=T=>{var R=A("⚠️");o(T,R)};W(E,T=>{n(r)&&T(S)},!0)}o(b,D)};W(h,b=>{n(l)?b(d):b($,!1)})}y(k),y(v),tt(b=>{w=mt(v,1,"menu_item plain selectable deselectable svelte-10kraez",null,w,b),Mt(v,"title",n(r)?`Error: ${n(r)}`:void 0)},[()=>({selected:n(u)})]),ve("mouseenter",v,b=>{Pt(b),e.select(s)}),o(a,v),dt()}jt(["click"]);function fe(a,t){ot(a,{get run(){return t.run},icon:s=>{N();var u=A();tt(()=>lt(u,t.icon)),o(s,u)},children:(s,u)=>{N();var l=A();tt(()=>lt(l,t.content)),o(s,l)},$$slots:{icon:!0,default:!0}})}const cn=(a,t=Ht)=>{pe(a,me(t))},un=(a,t=Ht)=>{fe(a,me(t))};var dn=z('<div class="contextmenu_root svelte-70kk4k" role="region"><!></div>'),_n=z('<div class="contextmenu_layout svelte-70kk4k" aria-hidden="true"></div>'),vn=z('<ul class="contextmenu unstyled pane svelte-70kk4k" role="menu" aria-label="context menu" tabindex="-1"></ul>'),mn=z("<!> <!> <!>",1);function Ot(a,t){ut(t,!0);const e=et(t,"contextmenu",19,()=>new te),s=et(t,"longpress_move_tolerance",3,21),u=et(t,"longpress_duration",3,633),l=et(t,"bypass_with_tap_then_longpress",3,!0),r=et(t,"tap_then_longpress_duration",3,660),v=et(t,"tap_then_longpress_move_tolerance",3,7),w=et(t,"open_offset_x",19,()=>-2),k=et(t,"open_offset_y",19,()=>-2),I=et(t,"scoped",3,!1);Lt.set(e());let P=O(void 0);const i=U(()=>e().layout),f=U(()=>e().initial_layout),c=U(()=>n(i)===n(f));let x=O(void 0),h=O(void 0);At(()=>{!n(c)&&n(x)!==void 0&&(n(i).width=n(x))}),At(()=>{!n(c)&&n(h)!==void 0&&(n(i).height=n(h))});const d=Kt.set();At(()=>{if(n(P)){const g=n(P).getBoundingClientRect();d.width=g.width,d.height=g.height}});const $=U(()=>e().x+Math.min(0,n(i).width-(e().x+d.width))),b=U(()=>e().y+Math.min(0,n(i).height-(e().y+d.height)));let D=O(void 0),E=O(void 0),S=O(void 0),T=O(void 0),R=O(void 0),B=O(void 0);const Y=()=>{n(R)&&p(R,!1),n(T)!=null&&(clearTimeout(n(T)),p(T,null))},H=g=>{if(n(B)){p(B,!1);return}if(n(R)){Y(),Pt(g);return}const{target:_}=g;g.shiftKey||!(_ instanceof HTMLElement||_ instanceof SVGElement)||n(P)?.contains(_)||Xt(_)||ae(_)||de(_,g.clientX+w(),g.clientY+k(),e())&&(Pt(g),Y())},V=g=>{n(R)&&p(R,!1);const{touches:_,target:L}=g;if(e().opened||_.length!==1||g.shiftKey||!(L instanceof HTMLElement||L instanceof SVGElement)||Xt(L)||ae(L))return;const{clientX:M,clientY:F}=_[0];if(l()){if(n(S)!=null&&performance.now()-n(S)<r()&&Math.hypot(M-n(D),F-n(E))<v()){p(B,!0),p(S,null);return}p(S,performance.now(),!0)}p(D,M,!0),p(E,F,!0),n(T)!=null&&Y(),p(T,setTimeout(()=>{p(R,!0),de(L,n(D)+w(),n(E)+k(),e())},u()),!0)},G=g=>{if(n(T)==null)return;const{touches:_}=g;if(_.length!==1)return;const{clientX:L,clientY:M}=_[0];Math.hypot(L-n(D),M-n(E))>s()&&(e().opened&&e().close(),Y())},X=g=>{n(T)!=null&&(n(R)&&Pt(g),Y())},K=g=>{n(P)&&!n(P).contains(g.target)&&e().close()},Q=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),st=g=>{const _=Q.get(g.key);!_||Xt(g.target)||(Pt(g),_())},j=(g,_)=>{let L=null;const M=F=>{L&&(L(),L=null),F.disabled||(L=ke(g,F.event,F.cb,{capture:!0,passive:F.passive}))};return M(_),{update:F=>{M(F)},destroy:()=>{L?.()}}};var bt=mn();rt(Ct,(g,_)=>j?.(g,_),()=>({event:"contextmenu",passive:!1,cb:H,disabled:I()})),rt(Ct,(g,_)=>j?.(g,_),()=>({event:"touchstart",passive:!0,cb:V,disabled:I()})),rt(Ct,(g,_)=>j?.(g,_),()=>({event:"touchmove",passive:!0,cb:G,disabled:I()})),rt(Ct,(g,_)=>j?.(g,_),()=>({event:"touchend",passive:!1,cb:X,disabled:I()})),rt(Ct,(g,_)=>j?.(g,_),()=>({event:"touchcancel",passive:!1,cb:X,disabled:I()})),rt(Ct,(g,_)=>j?.(g,_),()=>({event:"mousedown",passive:!0,cb:K,disabled:!e().opened})),rt(Ct,(g,_)=>j?.(g,_),()=>({event:"keydown",passive:!1,cb:st,disabled:!e().opened}));var ht=q(bt);{var pt=g=>{var _=dn(),L=C(_);it(L,()=>t.children),y(_),rt(_,(M,F)=>j?.(M,F),()=>({event:"contextmenu",passive:!1,cb:H})),rt(_,(M,F)=>j?.(M,F),()=>({event:"touchstart",passive:!0,cb:V})),rt(_,(M,F)=>j?.(M,F),()=>({event:"touchmove",passive:!0,cb:G})),rt(_,(M,F)=>j?.(M,F),()=>({event:"touchend",passive:!1,cb:X})),rt(_,(M,F)=>j?.(M,F),()=>({event:"touchcancel",passive:!1,cb:X})),o(g,_)},Z=g=>{var _=nt(),L=q(_);it(L,()=>t.children),o(g,_)};W(ht,g=>{I()?g(pt):g(Z,!1)})}var ft=m(ht,2);{var gt=g=>{var _=_n();ce(_,"clientHeight",L=>p(h,L)),ce(_,"clientWidth",L=>p(x,L)),o(g,_)};W(ft,g=>{n(c)||g(gt)})}var Nt=m(ft,2);{var Wt=g=>{var _=vn();let L;zt(_,20,()=>e().params,M=>M,(M,F)=>{var _t=nt(),ct=q(_t);{var at=vt=>{var J=nt(),$t=q(J);it($t,()=>F),o(vt,J)},kt=vt=>{var J=nt(),$t=q(J);{var Ut=yt=>{cn(yt,()=>F.props)},xt=yt=>{var oe=nt(),xe=q(oe);{var be=Bt=>{un(Bt,()=>F.props)};W(xe,Bt=>{F.snippet==="text"&&Bt(be)},!0)}o(yt,oe)};W($t,yt=>{F.snippet==="link"?yt(Ut):yt(xt,!1)},!0)}o(vt,J)};W(ct,vt=>{typeof F=="function"?vt(at):vt(kt,!1)})}o(M,_t)}),y(_),Jt(_,M=>p(P,M),()=>n(P)),tt(M=>L=Gt(_,"",L,M),[()=>({transform:`translate3d(${n($)??""}px, ${n(b)??""}px, 0)`})]),o(g,_)};W(Nt,g=>{e().opened&&g(Wt)})}o(a,bt),dt()}function wt(a,t){const e=et(t,"tag",3,"span");var s=nt(),u=q(s);Ne(u,e,!1,(l,r)=>{rt(l,(k,I)=>nn?.(k,I),()=>t.entries),Se(l,()=>({class:"display_contents",...t.attrs}));var v=nt(),w=q(v);it(w,()=>t.children),o(r,v)}),o(a,s)}var hn=z('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),pn=z('<li role="none" class="svelte-pa2qv7"><div role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ne(a,t){ut(t,!0);const e=Lt.get(),s=e.add_submenu(),{layout:u}=e,l=U(()=>s.selected);let r=O(void 0);const v=Kt.get(),w=Kt.set();let k=O(0),I=O(0);At(()=>{n(r)&&P(n(r),u,v)});const P=(T,R,B)=>{const{x:Y,y:H,width:V,height:G}=T.getBoundingClientRect();w.width=V,w.height=G;const X=Y-n(k),K=H-n(I),Q=X+V+B.width-R.width;if(Q<=0)p(k,B.width,!0);else{const st=V-X;st<=0?p(k,-V):st>Q?p(k,B.width-Q):p(k,st-V)}p(I,Math.min(0,R.height-(K+G)),!0)};var i=pn();let f;var c=C(i);let x;var h=C(c),d=C(h),$=C(d);it($,()=>t.icon??Ht),y(d);var b=m(d,2),D=C(b);it(D,()=>t.children),y(b),y(h),N(2),y(c);var E=m(c,2);{var S=T=>{var R=hn();let B;var Y=C(R);it(Y,()=>t.menu),y(R),Jt(R,H=>p(r,H),()=>n(r)),tt(H=>B=Gt(R,"",B,H),[()=>({transform:`translate3d(${n(k)??""}px, ${n(I)??""}px, 0)`,"max-height":`${u.height??""}px`})]),o(T,R)};W(E,T=>{n(l)&&T(S)})}y(i),tt((T,R)=>{f=Gt(i,"",f,T),x=mt(c,1,"menu_item plain selectable svelte-pa2qv7",null,x,R),Mt(c,"aria-expanded",n(l))},[()=>({"--contextmenu_depth":s.depth}),()=>({selected:n(l)})]),ve("mouseenter",c,T=>{Pt(T),setTimeout(()=>e.select(s))}),o(a,i),dt()}var fn=z("<!> <!>",1);function Ft(a,t){ut(t,!0);const e=et(t,"name",3,"Cat"),s=et(t,"icon",3,"😺");ne(a,{icon:r=>{N();var v=A();tt(()=>lt(v,s())),o(r,v)},menu:r=>{var v=fn(),w=q(v);ot(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:P=>{var i=nt(),f=q(i);{var c=h=>{var d=A("🏠");o(h,d)},x=h=>{var d=A("🌄");o(h,d)};W(f,h=>{t.position==="adventure"?h(c):h(x,!1)})}o(P,i)},children:(P,i)=>{var f=nt(),c=q(f);{var x=d=>{var $=A("go home");o(d,$)},h=d=>{var $=A("go adventure");o(d,$)};W(c,d=>{t.position==="adventure"?d(x):d(h,!1)})}o(P,f)},$$slots:{icon:!0,default:!0}});var k=m(w,2);ot(k,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:P=>{var i=nt(),f=q(i);{var c=h=>{var d=A("🌄");o(h,d)},x=h=>{var d=A("🏠");o(h,d)};W(f,h=>{t.position==="adventure"?h(c):h(x,!1)})}o(P,i)},children:(P,i)=>{var f=nt(),c=q(f);{var x=d=>{var $=A("do adventure");o(d,$)},h=d=>{var $=A("be home");o(d,$)};W(c,d=>{t.position==="adventure"?d(x):d(h,!1)})}o(P,f)},$$slots:{icon:!0,default:!0}}),o(r,v)},children:(r,v)=>{N();var w=A();tt(()=>lt(w,e())),o(r,w)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var gn=z("<!> <!>",1);function xn(a,t){var e=gn(),s=q(e);pe(s,{href:"https://github.com/ryanatkn/fuz",icon:r=>{Re(r,{get data(){return qe},size:"var(--icon_size_xs)"})},children:(r,v)=>{N();var w=A("Source code");o(r,w)},$$slots:{icon:!0,default:!0}});var u=m(s,2);ot(u,{get run(){return t.toggle_about_dialog},icon:r=>{N();var v=A("?");o(r,v)},children:(r,v)=>{N();var w=A("About");o(r,w)},$$slots:{icon:!0,default:!0}}),o(a,e)}const ge=a=>{const t=a.length;if(t===2)return"cats";if(t===0)return null;const e=a[0];return e.icon+e.name};var bn=z("<!> <!>",1),yn=z("<!> <!> <!>",1);function wn(a,t){ut(t,!0);const e=U(()=>ge(t.adventure_cats));ne(a,{icon:l=>{N();var r=A("🏠");o(l,r)},menu:l=>{var r=yn(),v=q(r);{var w=i=>{ot(i,{run:()=>t.act({type:"call_cats_home"}),icon:c=>{N();var x=A("🐈‍⬛");o(c,x)},children:(c,x)=>{N();var h=A("call");o(c,h)},$$slots:{icon:!0,default:!0}})};W(v,i=>{n(e)&&i(w)})}var k=m(v,2);zt(k,17,()=>t.home_cats,i=>i.name,(i,f)=>{Ft(i,{get name(){return n(f).name},get icon(){return n(f).icon},get position(){return n(f).position},get act(){return t.act}})});var I=m(k,2);{var P=i=>{var f=bn(),c=q(f);ot(c,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{N();var $=A("🏠");o(d,$)},children:(d,$)=>{N();var b=A("be");o(d,b)},$$slots:{icon:!0,default:!0}});var x=m(c,2);ot(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:d=>{N();var $=A("🦋");o(d,$)},children:(d,$)=>{N();var b=A("leave");o(d,b)},$$slots:{icon:!0,default:!0}}),o(i,f)};W(I,i=>{n(e)||i(P)})}o(l,r)},children:(l,r)=>{N();var v=A("home");o(l,v)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var kn=z("<!> <!>",1),$n=z("<!> <!> <!>",1);function Cn(a,t){ut(t,!0);const e=U(()=>ge(t.home_cats));ne(a,{icon:l=>{N();var r=A("🌄");o(l,r)},menu:l=>{var r=$n(),v=q(r);{var w=i=>{ot(i,{run:()=>t.act({type:"call_cats_adventure"}),icon:c=>{N();var x=A("🦋");o(c,x)},children:(c,x)=>{N();var h=A("call");o(c,h)},$$slots:{icon:!0,default:!0}})};W(v,i=>{n(e)&&i(w)})}var k=m(v,2);zt(k,17,()=>t.adventure_cats,i=>i.name,(i,f)=>{Ft(i,{get name(){return n(f).name},get icon(){return n(f).icon},get position(){return n(f).position},get act(){return t.act}})});var I=m(k,2);{var P=i=>{var f=kn(),c=q(f);ot(c,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{N();var $=A("🌄");o(d,$)},children:(d,$)=>{N();var b=A("do");o(d,b)},$$slots:{icon:!0,default:!0}});var x=m(c,2);ot(x,{run:()=>t.act({type:"call_cats_home"}),icon:d=>{N();var $=A("🐈‍⬛");o(d,$)},children:(d,$)=>{N();var b=A("leave");o(d,b)},$$slots:{icon:!0,default:!0}}),o(i,f)};W(I,i=>{n(e)||i(P)})}o(l,r)},children:(l,r)=>{N();var v=A("adventure");o(l,v)},$$slots:{icon:!0,menu:!0,default:!0}}),dt()}var Tn=z('<span class="icon svelte-i8hat5"> </span>'),In=z('<span class="name svelte-i8hat5"><!> </span>'),Pn=z("<span><!><!></span>");function _e(a,t){const e=et(t,"name",3,"Cat"),s=et(t,"icon",3,"😺"),u=et(t,"show_name",3,!0),l=et(t,"show_icon",3,!0);var r=Pn();let v;var w=C(r);{var k=i=>{var f=Tn(),c=C(f,!0);y(f),tt(()=>lt(c,s())),o(i,f)};W(w,i=>{l()&&i(k)})}var I=m(w);{var P=i=>{var f=In(),c=C(f);it(c,()=>t.children??Ht);var x=m(c,1,!0);y(f),tt(()=>lt(x,e())),o(i,f)};W(I,i=>{u()&&i(P)})}y(r),tt(i=>v=mt(r,1,"cat svelte-i8hat5",null,v,i),[()=>({"has-icon":l()})]),o(a,r)}const Sn=`<script lang="ts">
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
`;var An=z("<!> <!>",1),zn=z('<div class="cat_wrapper svelte-hhr0et"><!></div>'),En=z('<div class="position home svelte-hhr0et"><div class="icon svelte-hhr0et">🏠</div> <div class="cats svelte-hhr0et"></div></div>'),On=z('<div class="cat_wrapper svelte-hhr0et"><!></div>'),Nn=z('<div class="position adventure svelte-hhr0et"><div class="icon svelte-hhr0et">🌄</div> <div class="cats svelte-hhr0et"></div></div>'),Dn=z("<section><!> <!></section> <section><!></section>",1),Rn=z("<!> <!>",1),qn=z('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Mn=z("<!> <!>",1);function Fn(a,t){ut(t,!0);const e="Alyssa",s="Ben",u="home";let l=O(u),r=O(u);const v=U(()=>n(l)===n(r)?"😺":"😾"),w=U(()=>n(l)===n(r)?"😸":"😿"),k=U(()=>({name:e,icon:n(v),position:n(l)})),I=U(()=>({name:s,icon:n(w),position:n(r)}));let P=O(!1);const i=(H,V)=>{const G=[],X=[];for(const K of H){const Q=K.position==="home"?G:X;V?Q.unshift(K):Q.push(K)}return{home_cats:G,adventure_cats:X}},f=U(()=>i([n(k),n(I)],n(P))),c=U(()=>n(f).home_cats),x=U(()=>n(f).adventure_cats),h=U(()=>n(l)!==u||n(r)!==u),d=()=>{p(l,u),p(r,u)};let $=O(!1);const b=()=>{p($,!n($))},D=H=>{switch(H.type){case"call_cats_adventure":{p(l,"adventure"),p(r,"adventure");break}case"call_cats_home":{p(l,"home"),p(r,"home");break}case"cat_go_adventure":{H.name===e?p(l,"adventure"):H.name===s&&p(r,"adventure");break}case"cat_go_home":{H.name===e?p(l,"home"):H.name===s&&p(r,"home");break}case"cat_be_or_do":{p(P,!n(P));break}}},[E,S]=Ie({fallback:(H,V)=>{const G=window.getComputedStyle(H),X=G.transform==="none"?"":G.transform;return{duration:1500,easing:Ke,css:K=>`
					transform: ${X} scale(${K});
					opacity: ${K}
				`}}});var T=Mn(),R=q(T);Ot(R,{scoped:!0,children:(H,V)=>{Tt(H,{children:(G,X)=>{var K=Rn(),Q=q(K);It(Q,{text:"Full example"});var st=m(Q,2);wt(st,{entries:bt=>{var ht=An(),pt=q(ht);{var Z=gt=>{fe(gt,{run:d,content:"Reset",icon:"↻"})};W(pt,gt=>{n(h)&&gt(Z)})}var ft=m(pt,2);xn(ft,{toggle_about_dialog:b}),o(bt,ht)},children:(bt,ht)=>{var pt=Dn(),Z=q(pt),ft=C(Z);wt(ft,{entries:_=>{wn(_,{act:D,get home_cats(){return n(c)},get adventure_cats(){return n(x)}})},children:(_,L)=>{var M=En(),F=m(C(M),2);zt(F,29,()=>n(c),({name:_t,icon:ct,position:at})=>_t,(_t,ct)=>{let at=()=>n(ct).name,kt=()=>n(ct).icon,vt=()=>n(ct).position;var J=zn(),$t=C(J);wt($t,{entries:xt=>{Ft(xt,{act:D,get name(){return at()},get icon(){return kt()},get position(){return vt()}})},children:(xt,yt)=>{_e(xt,{get name(){return at()},get icon(){return kt()}})},$$slots:{entries:!0,default:!0}}),y(J),St(1,J,()=>S,()=>({key:at()})),St(2,J,()=>E,()=>({key:at()})),se(J,()=>ue,null),o(_t,J)}),y(F),y(M),o(_,M)},$$slots:{entries:!0,default:!0}});var gt=m(ft,2);wt(gt,{entries:_=>{Cn(_,{act:D,get home_cats(){return n(c)},get adventure_cats(){return n(x)}})},children:(_,L)=>{var M=Nn(),F=m(C(M),2);zt(F,29,()=>n(x),({name:_t,icon:ct,position:at})=>_t,(_t,ct)=>{let at=()=>n(ct).name,kt=()=>n(ct).icon,vt=()=>n(ct).position;var J=On(),$t=C(J);wt($t,{entries:xt=>{Ft(xt,{act:D,get name(){return at()},get icon(){return kt()},get position(){return vt()}})},children:(xt,yt)=>{_e(xt,{get name(){return at()},get icon(){return kt()}})},$$slots:{entries:!0,default:!0}}),y(J),St(1,J,()=>S,()=>({key:at()})),St(2,J,()=>E,()=>({key:at()})),se(J,()=>ue,null),o(_t,J)}),y(F),y(M),o(_,M)},$$slots:{entries:!0,default:!0}}),y(Z);var Nt=m(Z,2),Wt=C(Nt);De(Wt,{summary:_=>{N();var L=A("View example source");o(_,L)},children:(_,L)=>{Et(_,{get content(){return Sn}})},$$slots:{summary:!0,default:!0}}),y(Nt),o(bt,pt)},$$slots:{entries:!0,default:!0}}),o(G,K)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=m(R,2);{var Y=H=>{Ee(H,{onclose:()=>p($,!1),children:(V,G)=>{var X=qn(),K=C(X),Q=m(C(K),8),st=m(C(Q),2);Me(st,{});var j=m(st,4);Fe(j,{}),y(Q),y(K),y(X),o(V,X)},$$slots:{default:!0}})};W(B,H=>{n($)&&H(Y)})}o(a,T),dt()}var Hn=z("<!> <!> <!>",1),Ln=z(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Wn=z("<!> <!>",1);function Un(a){let t=O(!1),e=O(!1),s=O(!1);Ot(a,{scoped:!0,children:(u,l)=>{Tt(u,{children:(r,v)=>{var w=Wn(),k=q(w);It(k,{text:"Basic usage"});var I=m(k,2);wt(I,{entries:i=>{var f=Hn(),c=q(f);ot(c,{run:()=>p(t,!n(t)),children:(d,$)=>{N();var b=A("Hello world");o(d,b)},$$slots:{default:!0}});var x=m(c,2);ot(x,{run:()=>p(e,!n(e)),icon:$=>{N();var b=A("🌞");o($,b)},children:($,b)=>{N();var D=A("Hello with an optional icon snippet");o($,D)},$$slots:{icon:!0,default:!0}});var h=m(x,2);ot(h,{run:()=>p(s,!n(s)),icon:"🌚",children:(d,$)=>{N();var b=A("Hello with an optional icon string");o(d,b)},$$slots:{default:!0}}),o(i,f)},children:(i,f)=>{var c=Ln(),x=m(C(c),2);{let V=U(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${n(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${n(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${n(s)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Et(x,{get content(){return n(V)}})}var h=m(x,2),d=C(h);let $;var b=C(d);y(d),y(h);var D=m(h,2),E=C(D);let S;var T=C(E);y(E),y(D);var R=m(D,2),B=C(R);let Y;var H=C(B);y(B),y(R),N(2),y(c),tt((V,G,X)=>{$=mt(d,1,"",null,$,V),lt(b,`greeted = ${n(t)??""}`),S=mt(E,1,"",null,S,G),lt(T,`greeted_icon_snippet = ${n(e)??""}`),Y=mt(B,1,"",null,Y,X),lt(H,`greeted_icon_string = ${n(s)??""}`)},[()=>({color_g_5:n(t)}),()=>({color_e_5:n(e)}),()=>({color_d_5:n(s)})]),o(i,c)},$$slots:{entries:!0,default:!0}}),o(r,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Bn=z("<div>toggled</div>"),Vn=z(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),Xn=z("<!> <!>",1);function Yn(a,t){ut(t,!0);const e=new te;let s=O(!1);Ot(a,{get contextmenu(){return e},scoped:!0,children:(u,l)=>{Tt(u,{children:(r,v)=>{var w=Xn(),k=q(w);It(k,{text:"Custom instance"});var I=m(k,2);wt(I,{entries:i=>{ot(i,{run:()=>p(s,!n(s)),children:(f,c)=>{N();var x=A("Toggle");o(f,x)},$$slots:{default:!0}})},children:(i,f)=>{var c=Vn(),x=C(c);Et(x,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var h=m(x,2);Et(h,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var d=m(h,4),$=C(d);{var b=D=>{var E=Bn();St(3,E,()=>Pe),o(D,E)};W($,D=>{n(s)&&D(b)})}y(d),y(c),o(i,c)},$$slots:{entries:!0,default:!0}}),o(r,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt()}const Gn=(a,t)=>{const e=window.getSelection();if(!e||!n(t))return;const s=document.createRange();s.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(s)};var Kn=z(`<div><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),jn=z("<div><!></div> <!>",1);function Zn(a,t){ut(t,!0);const e=new te;let s=O(!1),u=O(void 0),l=O("");const r="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",v=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,w=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,k=U(()=>n(l)===r||n(l)===v||n(l)===w);Ot(a,{get contextmenu(){return e},scoped:!0,children:(I,P)=>{Tt(I,{children:(i,f)=>{var c=jn(),x=q(c);let h;var d=C(x);It(d,{text:"Select text"}),y(x);var $=m(x,2);wt($,{entries:D=>{ot(D,{run:()=>p(s,!n(s)),children:(E,S)=>{N();var T=A("Toggle something");o(E,T)},$$slots:{default:!0}})},children:(D,E)=>{var S=Kn();let T;var R=C(S),B=m(C(R),2),Y=m(C(B));Y.__click=[Gn,u];let H;N(),y(B),y(R),Jt(R,Z=>p(u,Z),()=>n(u));var V=m(R,2),G=C(V);Ae(G),y(V);var X=m(V,2);let K;var Q=m(X,2),st=C(Q);$e(st),y(Q);var j=m(Q,2),bt=C(j);Dt(bt,{path:"Web/HTML/Global_attributes/contenteditable"}),N(),y(j);var ht=m(j,4),pt=m(ht,4);y(S),tt((Z,ft,gt)=>{T=mt(S,1,"panel p_md",null,T,Z),H=mt(Y,1,"",null,H,ft),K=mt(X,1,"",null,K,gt)},[()=>({color_g_5:n(k)}),()=>({color_a:n(s)}),()=>({color_g_5:n(k)})]),le(G,()=>n(l),Z=>p(l,Z)),le(st,()=>n(l),Z=>p(l,Z)),ie("innerText",ht,()=>n(l),Z=>p(l,Z)),ie("innerText",pt,()=>n(l),Z=>p(l,Z)),o(D,S)},$$slots:{entries:!0,default:!0}}),tt(b=>h=mt(x,1,"",null,h,b),[()=>({color_d_5:n(k)})]),o(i,c)},$$slots:{default:!0}})},$$slots:{default:!0}}),dt()}jt(["click"]);var Jn=z(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Qn(a){Ot(a,{scoped:!0,children:(t,e)=>{Tt(t,{children:(s,u)=>{var l=Jn(),r=q(l);It(r,{text:"Default behaviors"});var v=m(r,2),w=C(v);Et(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),N(6),y(v),o(s,l)},$$slots:{default:!0}})},$$slots:{default:!0}})}var to=z("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function Co(a,t){ut(t,!0);const s=Te("Contextmenu");Ce(a,{get tome(){return s},children:(u,l)=>{var r=to(),v=m(q(r),2);Un(v);var w=m(v,2);Qn(w);var k=m(w,2);Yn(k,{});var I=m(k,2);Zn(I,{});var P=m(I,2);Fn(P,{});var i=m(P,2);Ye(i),o(u,r)},$$slots:{default:!0}}),dt()}export{Co as component};
