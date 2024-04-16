var Ze=Object.defineProperty;var tn=(s,t,e)=>t in s?Ze(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var ct=(s,t,e)=>(tn(s,typeof t!="symbol"?t+"":t,e),e),he=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var S=(s,t,e)=>(he(s,t,"read from private field"),e?e.call(s):t.get(s)),V=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},pe=(s,t,e,a)=>(he(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e);var Se=(s,t,e)=>(he(s,t,"access private method"),e);import{a as r,t as u,c as w,s as n,f as p,b as P,l as zt,$ as At}from"../chunks/disclose-version.Ddj0amtR.js";import{h as Ue,u as We,r as G,_ as en,a as Q,p as Z,F as O,g as o,m as b,s as be,f as ye,d as R,V as qt,$ as F}from"../chunks/runtime.N2A2yyIi.js";import{i as we}from"../chunks/lifecycle.B02H3xRw.js";import{T as nn}from"../chunks/Tome_Detail.BylrhXim.js";import{g as on}from"../chunks/tome.60teOZbE.js";import{M as se}from"../chunks/Mdn_Link.BsxRMmW4.js";import{T as Ot}from"../chunks/Tome_Subheading.N0FsnDZe.js";import{i as D}from"../chunks/if.UhUuT2rm.js";import{e as Lt}from"../chunks/each.CWSUAFwf.js";import{t as Dt,a as Ae,c as rn,s as an}from"../chunks/index.D0CvV8xx.js";import{C as Ht}from"../chunks/Code.CPjPhS4R.js";import{d as Ce,s as lt,e as st,a as It}from"../chunks/render.UwBO_r64.js";import{n as ze}from"../chunks/utils.BSJX-nVd.js";import{s as ut,b as le,r as sn,d as cn}from"../chunks/attributes.B9yWWQAs.js";import{s as ie}from"../chunks/style.CN5pMWL6.js";import{b as ke}from"../chunks/this.DR5cQyoW.js";import{p as et,s as Oe}from"../chunks/props.CB8TrldN.js";import{p as M}from"../chunks/proxy.Dw-yJxJX.js";import{a as ln,s as Ft,b as fe,c as $e,D as un}from"../chunks/Dialog.BwkknD0q.js";import{o as Ne}from"../chunks/index-client.DX7FO6xG.js";import{a as ge}from"../chunks/string.ZJuK4sHN.js";import{t as pt}from"../chunks/class.BOV0QPCC.js";import{P as dn}from"../chunks/Pending_Animation.CVQTN023.js";import{D as _n,b as Fe}from"../chunks/Details.zGUl23PA.js";import{G as mn}from"../chunks/Github_Logo.yRNPnxbx.js";import{C as vn,T as hn}from"../chunks/Theme_Input.BkF3tBzN.js";import{b as Me}from"../chunks/input.BHADLuGw.js";function pn(s,t,e){Ue(()=>{var a=We(()=>t(s,e==null?void 0:e())||{});if(e&&(a!=null&&a.update)){var c=!1;G(()=>{var h=e();en(h),c&&a.update(h)}),c=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}var Tt,Mt,Ut,de,Be;const _e=class _e{constructor(t){V(this,de);V(this,Tt,new WeakMap);V(this,Mt,void 0);V(this,Ut,void 0);pe(this,Ut,t)}observe(t,e){var a=S(this,Tt).get(t)||new Set;return a.add(e),S(this,Tt).set(t,a),Se(this,de,Be).call(this).observe(t,S(this,Ut)),()=>{var c=S(this,Tt).get(t);c.delete(e),c.size===0&&(S(this,Tt).delete(t),S(this,Mt).unobserve(t))}}};Tt=new WeakMap,Mt=new WeakMap,Ut=new WeakMap,de=new WeakSet,Be=function(){return S(this,Mt)??pe(this,Mt,new ResizeObserver(t=>{for(var e of t){_e.entries.set(e.target,e);for(var a of S(this,Tt).get(e.target)||[])a(e)}}))},ct(_e,"entries",new WeakMap);let xe=_e;var fn=new xe({box:"border-box"});function Re(s,t,e){var a=fn.observe(s,()=>e(s[t]));Ue(()=>(We(()=>e(s[t])),a))}var gn=u('<span class="font_mono">contextmenu</span> event',1),xn=u('<span class="font_mono">navigator.vibrate</span>'),bn=u('<span class="font_mono">navigator.vibrate</span>'),yn=u(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function wn(s,t){Q(t,!1),we();var e=yn(),a=p(e),c=w(a);Ot(c,{text:"Expected behaviors",slug:"expected-behaviors"});var h=n(n(c,!0)),d=n(n(h,!0)),T=n(w(d));se(T,{href:"Web/API/Element/contextmenu_event",children:(X,H)=>{var U=gn();r(X,U)}});var x=n(n(T,!0)),y=n(n(x,!0));se(y,{href:"Web/API/Navigator/vibrate",children:(X,H)=>{var U=xn();r(X,U)}});var k=n(n(d,!0)),A=n(n(k,!0)),E=n(n(A,!0)),v=n(n(E,!0)),g=n(n(v,!0)),C=w(g),_=n(n(C,!0)),i=n(n(_,!0)),m=n(n(i,!0)),I=n(n(m,!0)),$=n(n(I,!0)),N=n(w($));se(N,{href:"Web/API/Navigator/vibrate",children:(X,H)=>{var U=bn();r(X,U)}});var L=n(n(a,!0)),W=w(L);Ot(W,{text:"Motivation",slug:"motivation"}),r(s,e),Z()}function Cn(s){const t=s-1;return t*t*t+1}function kn(s){return--s*s*s*s*s+1}function De(s,{from:t,to:e},a={}){const c=getComputedStyle(s),h=c.transform==="none"?"":c.transform,[d,T]=c.transformOrigin.split(" ").map(parseFloat),x=t.left+t.width*d/e.width-(e.left+d),y=t.top+t.height*T/e.height-(e.top+T),{delay:k=0,duration:A=v=>Math.sqrt(v)*120,easing:E=Cn}=a;return{delay:k,duration:typeof A=="function"?A(Math.sqrt(x*x+y*y)):A,easing:E,css:(v,g)=>{const C=g*x,_=g*y,i=v+g*t.width/e.width,m=v+g*t.height/e.height;return`transform: ${h} translate(${C}px, ${_}px) scale(${i}, ${m});`}}}var Wt,Bt;class Ve{constructor(){V(this,Wt,O(0));V(this,Bt,O(0))}get width(){return o(S(this,Wt))}set width(t){b(S(this,Wt),M(t))}get height(){return o(S(this,Bt))}set height(t){b(S(this,Bt),M(t))}}Wt=new WeakMap,Bt=new WeakMap;var Vt,Rt,Xt,Yt,Kt;class Tn{constructor(t,e){ct(this,"is_menu",!1);ct(this,"menu");V(this,Vt,O(!1));V(this,Rt,O());V(this,Xt,O(!1));V(this,Yt,O(null));V(this,Kt,O(null));this.menu=t,S(this,Rt).v=M(e)}get selected(){return o(S(this,Vt))}set selected(t){b(S(this,Vt),M(t))}get run(){return o(S(this,Rt))}set run(t){b(S(this,Rt),M(t))}get pending(){return o(S(this,Xt))}set pending(t){b(S(this,Xt),M(t))}get error_message(){return o(S(this,Yt))}set error_message(t){b(S(this,Yt),M(t))}get promise(){return o(S(this,Kt))}set promise(t){b(S(this,Kt),M(t))}}Vt=new WeakMap,Rt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap,Kt=new WeakMap;var jt,Gt;class In{constructor(t,e){ct(this,"is_menu",!0);ct(this,"menu");ct(this,"depth");V(this,jt,O(!1));V(this,Gt,O(M([])));this.menu=t,this.depth=e}get selected(){return o(S(this,jt))}set selected(t){b(S(this,jt),M(t))}get items(){return o(S(this,Gt))}set items(t){b(S(this,Gt),M(t))}}jt=new WeakMap,Gt=new WeakMap;var Jt;class En{constructor(){ct(this,"is_menu",!0);ct(this,"menu",null);ct(this,"depth",1);V(this,Jt,O(M([])))}get items(){return o(S(this,Jt))}set items(t){b(S(this,Jt),M(t))}}Jt=new WeakMap;var Qt,Zt,te,ee,ne,oe,re;class Te{constructor(t){ct(this,"layout");ct(this,"initial_layout");V(this,Qt,O(!1));V(this,Zt,O(0));V(this,te,O(0));V(this,ee,O(M([])));V(this,ne,O());V(this,oe,O(M(new En)));V(this,re,O(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout||new Ve}get opened(){return o(S(this,Qt))}set opened(t){b(S(this,Qt),M(t))}get x(){return o(S(this,Zt))}set x(t){b(S(this,Zt),M(t))}get y(){return o(S(this,te))}set y(t){b(S(this,te),M(t))}get params(){return o(S(this,ee))}set params(t){b(S(this,ee),M(t))}get error(){return o(S(this,ne))}set error(t){b(S(this,ne),M(t))}get root_menu(){return o(S(this,oe))}set root_menu(t){b(S(this,oe),M(t))}get selections(){return o(S(this,re))}set selections(t){b(S(this,re),M(t))}open(t,e,a){this.selections.length=0,this.opened=!0,this.x=e,this.y=a,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(a){const c=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=c??"unknown error",this.error=c}if(ln(e)){t.pending=!0,t.error_message=null;const a=t.promise=e.then(c=>{if(a===t.promise){if(typeof(c==null?void 0:c.ok)=="boolean")if(c.ok)this.close();else{const h=typeof c.message=="string"?c.message:void 0;t.error_message=h??"unknown error",this.error=h}else this.close();return c}},c=>{if(a!==t.promise)return;const h=typeof(c==null?void 0:c.message)=="string"?c.message:void 0;t.error_message=h??"unknown error",this.error=h}).finally(()=>{a===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);return t?this.activate(t):this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const a of this.selections)a.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length)return this.select_first();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length)return this.select_last();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)||this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)||this.root_menu;return this.select(t.at(-1))}add_entry(t){const e=Le()||this.root_menu,a=new Tn(e,t);return e.items.push(a),Ne(()=>{e.items.length=0}),a}add_submenu(){const t=Le()||this.root_menu,e=new In(t,t.depth+1);return t.items.push(e),Nn(e),Ne(()=>{t.items.length=0}),e}}Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap,re=new WeakMap;const Ie="contextmenu",Pn=`a,[data-${Ie}]`,ce=new Map;let Sn=0;const An=(s,t)=>{const e=Sn+++"";return s.dataset[Ie]=e,ce.set(e,t),{update:a=>{ce.set(e,a)},destroy:()=>{ce.delete(e)}}},zn=17,qe=(s,t,e,a)=>{var h;const c=On(s);return c!=null&&c.length?(a.open(c,t,e),(h=navigator.vibrate)==null||h.call(navigator,zn),!0):!1},On=s=>{var h;let t=null,e=s,a,c;for(;e=e==null?void 0:e.closest(Pn);){if(a=e.dataset[Ie]){if(t||(t=[]),c=ce.get(a),c===void 0)continue;Array.isArray(c)?(t||(t=[])).push(...c):(t||(t=[])).push(c)}e.tagName==="A"&&(t||(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const d=(h=window.getSelection())==null?void 0:h.toString();d&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(d)}})}return t},Xe=Symbol(),$n=s=>be(Xe,s),Ee=()=>ye(Xe),Ye=Symbol(),Nn=s=>be(Ye,s),Le=()=>ye(Ye),Ke=Symbol(),je=(s=new Ve)=>(be(Ke,s),s),Fn=()=>ye(Ke);var Mn=(s,t)=>t.close(),Rn=u('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ge(s,t){Q(t,!0);const e="🔗",a=et(t,"icon",3,e),c=Ee(),h=(i,m=location.host)=>{const I=ge(ge(i,"https://"),"http://");return I.startsWith(m+"/")?ge(I,m):I},d=R(()=>h(t.href)),T=R(()=>!(o(d)[0]==="."||o(d)[0]==="/"&&o(d)[1]!=="/")),x=R(()=>o(T)?"noreferrer":void 0);var y=Rn(),k=w(y);k.__click=[Mn,c];var A=w(k),E=w(A),v=w(E);D(v,()=>typeof a()=="string",i=>{var m=zt(i);G(()=>lt(m,a())),r(i,m)},i=>{var m=P(),I=p(m);ut(a,I,()=>e),r(i,m)});var g=n(n(E,!0)),C=w(g),_=w(C);D(_,()=>t.children,i=>{var m=P(),I=p(m);ut(()=>t.children,I),r(i,m)},i=>{var m=zt(i);G(()=>lt(m,o(d))),r(i,m)}),G(()=>{le(k,"href",t.href),le(k,"rel",o(x))}),r(s,y),Z()}Ce(["click"]);var Dn=u("⚠️",1),qn=u('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function rt(s,t){Q(t,!0);const e=Ee(),a=e.add_entry(t.run);qt(()=>{a.run=t.run});const c=R(()=>a),h=R(()=>{let{selected:_,pending:i,error_message:m}=o(c);return[_,i,m]}),d=R(()=>o(h)[0]),T=R(()=>o(h)[1]),x=R(()=>o(h)[2]);var y=qn();y.__click=()=>{setTimeout(()=>e.activate(a))};var k=w(y),A=w(k),E=w(A);D(E,()=>typeof t.icon=="string",_=>{var i=zt(_);G(()=>lt(i,t.icon)),r(_,i)},_=>{var i=P(),m=p(i);D(m,()=>t.icon,I=>{var $=P(),N=p($);ut(()=>t.icon,N),r(I,$)},null,!0),r(_,i)});var v=n(n(A,!0)),g=w(v);ut(()=>t.children,g);var C=n(n(v,!0));D(C,()=>o(T),_=>{var i=P(),m=p(i);dn(m,{}),r(_,i)},_=>{var i=P(),m=p(i);D(m,()=>o(x),I=>{var $=Dn();r(I,$)},null,!0),r(_,i)}),G(()=>{le(y,"title",o(x)?`Error: ${o(x)}`:void 0),pt(y,"selected",o(d))}),st("mouseenter",y,_=>{Ft(_),e.select(a)},!1),r(s,y),Z()}Ce(["click"]);function Je(s,t){Q(t,!0);var e=P(),a=p(e);rt(a,{get run(){return t.run},icon:h=>{var d=zt(h);G(()=>lt(d,t.icon)),r(h,d)},children:(h,d)=>{var T=zt(h);G(()=>lt(T,t.content)),r(h,T)}}),r(s,e),Z()}var Ln=u('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Hn=u('<div class="contextmenu_layout svelte-aif9y6"></div>'),Un=u('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Wn=u("<!> <!> <!>",1);function ae(s,t){Q(t,!0);const e=et(t,"contextmenu",11,()=>new Te),a=et(t,"longpress_move_tolerance",3,21),c=et(t,"longpress_duration",3,633),h=et(t,"bypass_with_tap_then_longpress",3,!0),d=et(t,"tap_then_longpress_duration",3,660),T=et(t,"tap_then_longpress_move_tolerance",3,7),x=et(t,"open_offset_x",11,()=>-2),y=et(t,"open_offset_y",11,()=>-2),k=et(t,"scoped",3,!1);$n(e());let A=O(void 0);const E=R(e),v=R(()=>{let{layout:f,initial_layout:l}=o(E);return[f,l]}),g=R(()=>o(v)[0]),C=R(()=>o(v)[1]),_=R(()=>o(g)===o(C));let i=O(void 0),m=O(void 0);qt(()=>{!o(_)&&o(i)!==void 0&&(o(g).width=o(i))}),qt(()=>{!o(_)&&o(m)!==void 0&&(o(g).height=o(m))});const I=je();qt(()=>{if(o(A)){const f=o(A).getBoundingClientRect();I.width=f.width,I.height=f.height}});const $=R(()=>e().x+Math.min(0,o(g).width-(e().x+I.width))),N=R(()=>e().y+Math.min(0,o(g).height-(e().y+I.height)));let L=O(void 0),W=O(void 0),X=O(void 0),H=O(void 0),U=O(void 0),q=O(void 0);const K=()=>{o(U)&&b(U,!1),o(H)!=null&&(clearTimeout(o(H)),b(H,null))},Y=f=>{var z;if(o(q)){b(q,!1);return}if(o(U)){K(),Ft(f);return}const{target:l}=f;f.shiftKey||!(l instanceof HTMLElement||l instanceof SVGElement)||(z=o(A))!=null&&z.contains(l)||fe(l)||$e(l)||qe(l,f.clientX+x(),f.clientY+y(),e())&&(Ft(f),K())},j=f=>{o(U)&&b(U,!1);const{touches:l,target:z}=f;if(e().opened||l.length!==1||f.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||fe(z)||$e(z))return;const{clientX:B,clientY:Ct}=l[0];if(h()){if(o(X)!=null&&performance.now()-o(X)<d()&&Math.hypot(B-o(L),Ct-o(W))<T()){b(q,!0),b(X,null);return}b(X,M(performance.now()))}b(L,M(B)),b(W,M(Ct)),o(H)!=null&&K(),b(H,M(setTimeout(()=>{b(U,!0),qe(z,o(L)+x(),o(W)+y(),e())},c())))},nt=f=>{if(o(H)==null)return;const{touches:l}=f;if(l.length!==1)return;const{clientX:z,clientY:B}=l[0];Math.hypot(z-o(L),B-o(W))>a()&&(e().opened&&e().close(),K())},at=f=>{o(H)!=null&&(o(U)&&Ft(f),K())},ft=f=>{o(A)&&!o(A).contains(f.target)&&e().close()},gt=new Map([["Escape",()=>e().close()],["ArrowLeft",()=>e().collapse_selected()],["ArrowRight",()=>e().expand_selected()],["ArrowDown",()=>e().select_next()],["PageDown",()=>e().select_next()],["ArrowUp",()=>e().select_previous()],["PageUp",()=>e().select_previous()],["Home",()=>e().select_first()],["End",()=>e().select_last()],[" ",()=>e().activate_selected()],["Enter",()=>e().activate_selected()]]),it=f=>{const l=gt.get(f.key);!l||fe(f.target)||(Ft(f),l())};var dt=Wn();st("contextmenu",At,function(...f){const l=k()?void 0:Y;return l==null?void 0:l.apply(this,f)},!0,!1),st("touchstart",At,function(...f){const l=k()?void 0:j;return l==null?void 0:l.apply(this,f)},!0,!0),st("touchmove",At,function(...f){const l=k()?void 0:nt;return l==null?void 0:l.apply(this,f)},!0,!0),st("touchend",At,function(...f){const l=k()?void 0:at;return l==null?void 0:l.apply(this,f)},!0,!1),st("touchcancel",At,function(...f){const l=k()?void 0:at;return l==null?void 0:l.apply(this,f)},!0,!1),st("mousedown",At,function(...f){const l=e().opened?ft:void 0;return l==null?void 0:l.apply(this,f)},!0,!0),st("keydown",At,function(...f){const l=e().opened?it:void 0;return l==null?void 0:l.apply(this,f)},!0,!1);function mt(f,l=ze){var z=P(),B=p(z);Ge(B,Oe(l)),r(f,z)}function J(f,l=ze){var z=P(),B=p(z);Je(B,Oe(l)),r(f,z)}var xt=p(dt);D(xt,k,f=>{var l=Ln(),z=w(l);ut(()=>t.children,z),st("contextmenu",l,Y,!0,!1),st("touchstart",l,j,!0,!0),st("touchmove",l,nt,!0,!0),st("touchend",l,at,!0,!1),st("touchcancel",l,at,!0,!1),r(f,l)},f=>{var l=P(),z=p(l);ut(()=>t.children,z),r(f,l)});var $t=n(n(xt,!0));D($t,()=>!o(_),f=>{var l=Hn();Re(l,"clientHeight",z=>b(m,z)),Re(l,"clientWidth",z=>b(i,z)),r(f,l)});var Nt=n(n($t,!0));D(Nt,()=>e().opened,f=>{var l=Un();ke(l,z=>b(A,M(z)),()=>o(A)),Lt(l,76,()=>e().params,(z,B)=>F(z),(z,B,Ct)=>{var vt=P(),_t=p(vt);D(_t,()=>typeof F(B)=="function",Et=>{var ot=P(),bt=p(ot);ut(()=>F(B),bt),r(Et,ot)},Et=>{var ot=P(),bt=p(ot);D(bt,()=>F(B).snippet==="link",Pt=>{var tt=P(),St=p(tt);mt(St,()=>F(B).props),r(Pt,tt)},Pt=>{var tt=P(),St=p(tt);D(St,()=>F(B).snippet==="text",me=>{var ht=P(),yt=p(ht);J(yt,()=>F(B).props),r(me,ht)},null,!0),r(Pt,tt)},!0),r(Et,ot)}),r(z,vt)}),G(()=>ie(l,"transform",`translate3d(${It(o($))}px, ${It(o(N))}px, 0)`)),r(f,l)}),r(s,dt),Z()}var Bn=u('<span class="display_contents"><!></span>');function kt(s,t){Q(t,!0);var e=Bn(),a=w(e);ut(()=>t.children,a),pn(e,(c,h)=>An(c,h),()=>t.entries),r(s,e),Z()}var Vn=u('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Xn=u('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7"></div></div> <!></li>');function Pe(s,t){Q(t,!0);const e=Ee(),a=e.add_submenu(),{layout:c}=e,h=R(()=>a.selected);let d=O(void 0);const T=Fn(),x=je();let y=O(0),k=O(0);qt(()=>{o(d)&&A(o(d),c,T)});const A=($,N,L)=>{const{x:W,y:X,width:H,height:U}=$.getBoundingClientRect();x.width=H,x.height=U;const q=W-o(y),K=X-o(k),Y=q+H+L.width-N.width;if(Y<=0)b(y,M(L.width));else{const j=H-q;j<=0?b(y,-H):j>Y?b(y,L.width-Y):b(y,j-H)}b(k,M(Math.min(0,N.height-(K+U))))};var E=Xn(),v=w(E),g=w(v),C=w(g),_=w(C);D(_,()=>t.icon,$=>{var N=P(),L=p(N);ut(()=>t.icon,L),r($,N)});var i=n(n(C,!0)),m=w(i);ut(()=>t.children,m);var I=n(n(v,!0));D(I,()=>o(h),$=>{var N=Vn();ke(N,W=>b(d,M(W)),()=>o(d));var L=w(N);ut(()=>t.menu,L),G(()=>{ie(N,"transform",`translate3d(${It(o(y))}px, ${It(o(k))}px, 0)`),ie(N,"max-height",`${It(c.height)}px`)}),r($,N)}),G(()=>{ie(E,"--contextmenu_depth",a.depth),le(v,"aria-expanded",o(h)),pt(v,"selected",o(h))}),st("mouseenter",v,$=>{Ft($),setTimeout(()=>e.select(a))},!1),r(s,E),Z()}var Yn=u("🏠",1),Kn=u("🌄",1),jn=u("go home",1),Gn=u("go adventure",1),Jn=u("🌄",1),Qn=u("🏠",1),Zn=u("do adventure",1),to=u("be home",1),eo=u("<!> <!>",1);function ue(s,t){Q(t,!0);const e=et(t,"name",3,"Cat"),a=et(t,"icon",3,"😺");var c=P(),h=p(c);Pe(h,{icon:x=>{var y=zt(x);G(()=>lt(y,a())),r(x,y)},menu:x=>{var y=eo(),k=p(y);rt(k,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:v=>{var g=P(),C=p(g);D(C,()=>t.position==="adventure",_=>{var i=Yn();r(_,i)},_=>{var i=Kn();r(_,i)}),r(v,g)},children:(v,g)=>{var C=P(),_=p(C);D(_,()=>t.position==="adventure",i=>{var m=jn();r(i,m)},i=>{var m=Gn();r(i,m)}),r(v,C)}});var A=n(n(k,!0));rt(A,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:v=>{var g=P(),C=p(g);D(C,()=>t.position==="adventure",_=>{var i=Jn();r(_,i)},_=>{var i=Qn();r(_,i)}),r(v,g)},children:(v,g)=>{var C=P(),_=p(C);D(_,()=>t.position==="adventure",i=>{var m=Zn();r(i,m)},i=>{var m=to();r(i,m)}),r(v,C)}}),r(x,y)},children:(x,y)=>{var k=zt(x);G(()=>lt(k,e())),r(x,k)}}),r(s,c),Z()}var no=u("Source code",1),oo=u("?",1),ro=u("About",1),ao=u("<!> <!>",1);function so(s,t){Q(t,!0);var e=ao(),a=p(e);Ge(a,{href:"https://github.com/ryanatkn/fuz",icon:d=>{var T=P(),x=p(T);mn(x,{size:"var(--icon_size_xs)"}),r(d,T)},children:(d,T)=>{var x=no();r(d,x)}});var c=n(n(a,!0));rt(c,{get run(){return t.toggle_about_dialog},icon:d=>{var T=oo();r(d,T)},children:(d,T)=>{var x=ro();r(d,x)}}),r(s,e),Z()}const Qe=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const e=s[0];return e.icon+e.name};var io=u("🏠",1),co=u("🐈‍⬛",1),lo=u("call",1),uo=u("🏠",1),_o=u("be",1),mo=u("🦋",1),vo=u("leave",1),ho=u("<!> <!>",1),po=u("<!> <!> <!>",1),fo=u("home",1);function go(s,t){Q(t,!0);const e=R(()=>Qe(t.adventure_cats));var a=P(),c=p(a);Pe(c,{icon:T=>{var x=io();r(T,x)},menu:T=>{var x=po(),y=p(x);D(y,()=>o(e),E=>{var v=P(),g=p(v);rt(g,{run:()=>t.act({type:"call_cats_home"}),icon:_=>{var i=co();r(_,i)},children:(_,i)=>{var m=lo();r(_,m)}}),r(E,v)});var k=n(n(y,!0));Lt(k,69,()=>t.home_cats,(E,v)=>F(E).name,(E,v,g)=>{var C=P(),_=p(C);ue(_,{get name(){return F(v).name},get icon(){return F(v).icon},get position(){return F(v).position},get act(){return t.act}}),r(E,C)});var A=n(n(k,!0));D(A,()=>!o(e),E=>{var v=ho(),g=p(v);rt(g,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:i=>{var m=uo();r(i,m)},children:(i,m)=>{var I=_o();r(i,I)}});var C=n(n(g,!0));rt(C,{run:()=>t.act({type:"call_cats_adventure"}),icon:i=>{var m=mo();r(i,m)},children:(i,m)=>{var I=vo();r(i,I)}}),r(E,v)}),r(T,x)},children:(T,x)=>{var y=fo();r(T,y)}}),r(s,a),Z()}var xo=u("🌄",1),bo=u("🦋",1),yo=u("call",1),wo=u("🌄",1),Co=u("do",1),ko=u("🐈‍⬛",1),To=u("leave",1),Io=u("<!> <!>",1),Eo=u("<!> <!> <!>",1),Po=u("adventure",1);function So(s,t){Q(t,!0);const e=R(()=>Qe(t.home_cats));var a=P(),c=p(a);Pe(c,{icon:T=>{var x=xo();r(T,x)},menu:T=>{var x=Eo(),y=p(x);D(y,()=>o(e),E=>{var v=P(),g=p(v);rt(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:_=>{var i=bo();r(_,i)},children:(_,i)=>{var m=yo();r(_,m)}}),r(E,v)});var k=n(n(y,!0));Lt(k,69,()=>t.adventure_cats,(E,v)=>F(E).name,(E,v,g)=>{var C=P(),_=p(C);ue(_,{get name(){return F(v).name},get icon(){return F(v).icon},get position(){return F(v).position},get act(){return t.act}}),r(E,C)});var A=n(n(k,!0));D(A,()=>!o(e),E=>{var v=Io(),g=p(v);rt(g,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:i=>{var m=wo();r(i,m)},children:(i,m)=>{var I=Co();r(i,I)}});var C=n(n(g,!0));rt(C,{run:()=>t.act({type:"call_cats_home"}),icon:i=>{var m=ko();r(i,m)},children:(i,m)=>{var I=To();r(i,I)}}),r(E,v)}),r(T,x)},children:(T,x)=>{var y=Po();r(T,y)}}),r(s,a),Z()}var Ao=u('<span class="icon svelte-u0xdy"> </span>'),zo=u('<span class="name svelte-u0xdy"><!> </span>'),Oo=u('<span class="cat svelte-u0xdy"><!><!></span>');function He(s,t){Q(t,!0);const e=et(t,"name",3,"Cat"),a=et(t,"icon",3,"😺"),c=et(t,"show_name",3,!0),h=et(t,"show_icon",3,!0);var d=Oo(),T=w(d);D(T,h,y=>{var k=Ao(),A=w(k);G(()=>lt(A,a())),r(y,k)});var x=n(T);D(x,c,y=>{var k=zo(),A=w(k);D(A,()=>t.children,v=>{var g=P(),C=p(g);ut(()=>t.children,C),r(v,g)});var E=n(A,!0);G(()=>lt(E,e())),r(y,k)}),G(()=>pt(d,"has-icon",h())),r(s,d),Z()}const $o=`<script lang="ts">
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
`;var No=u("<!> <!>",1),Fo=u('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Mo=u('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=u('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Do=u('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),qo=u("View example source",1),Lo=u("<section><!> <!></section> <section><!></section>",1),Ho=u("<!> <!>",1),Uo=u('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Wo=u("<!> <!>",1);function Bo(s,t){Q(t,!0);const e="Alyssa",a="Ben",c="home";let h=O(c),d=O(c);const T=R(()=>o(h)===o(d)?"😺":"😾"),x=R(()=>o(h)===o(d)?"😸":"😿"),y=R(()=>({name:e,icon:o(T),position:o(h)})),k=R(()=>({name:a,icon:o(x),position:o(d)}));let A=O(!1);const E=(q,K)=>{const Y=[],j=[];for(const nt of q){const at=nt.position==="home"?Y:j;K?at.unshift(nt):at.push(nt)}return{home_cats:Y,adventure_cats:j}},v=R(()=>E([o(y),o(k)],o(A))),g=R(()=>{let{home_cats:q,adventure_cats:K}=o(v);return[q,K]}),C=R(()=>o(g)[0]),_=R(()=>o(g)[1]),i=R(()=>o(h)!==c||o(d)!==c),m=()=>{b(h,c),b(d,c)};let I=O(!1);const $=()=>{b(I,!o(I))},N=q=>{switch(q.type){case"call_cats_adventure":{b(h,"adventure"),b(d,"adventure");break}case"call_cats_home":{b(h,"home"),b(d,"home");break}case"cat_go_adventure":{q.name===e?b(h,"adventure"):q.name===a&&b(d,"adventure");break}case"cat_go_home":{q.name===e?b(h,"home"):q.name===a&&b(d,"home");break}case"cat_be_or_do":{b(A,!o(A));break}}},[L,W]=rn({fallback:(q,K)=>{const Y=window.getComputedStyle(q),j=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:kn,css:nt=>`
					transform: ${j} scale(${nt});
					opacity: ${nt}
				`}}});var X=Wo(),H=p(X);ae(H,{scoped:!0,children:(q,K)=>{var Y=Ho(),j=p(Y);Ot(j,{text:"Full example",slug:"full-example"});var nt=n(n(j,!0));kt(nt,{entries:ft=>{var gt=No(),it=p(gt);D(it,()=>o(i),mt=>{var J=P(),xt=p(J);Je(xt,{run:m,content:"Reset",icon:"↻"}),r(mt,J)});var dt=n(n(it,!0));so(dt,{toggle_about_dialog:$}),r(ft,gt)},children:(ft,gt)=>{var it=Lo(),dt=p(it),mt=w(dt);kt(mt,{entries:f=>{var l=P(),z=p(l);go(z,{act:N,get home_cats(){return o(C)},get adventure_cats(){return o(_)}}),r(f,l)},children:(f,l)=>{var z=Mo(),B=w(z),Ct=n(n(B,!0));Lt(Ct,95,()=>o(C),(vt,_t)=>F(F(vt)).name,(vt,_t,Et)=>{let ot=()=>F(F(_t)).name,bt=()=>F(F(_t)).icon,Pt=()=>F(F(_t)).position;var tt=Fo();Dt(1,tt,()=>W,()=>({key:ot()})),Dt(2,tt,()=>L,()=>({key:ot()})),Ae(tt,()=>De,null);var St=w(tt);kt(St,{entries:ht=>{var yt=P(),wt=p(yt);ue(wt,{act:N,get name(){return ot()},get icon(){return bt()},get position(){return Pt()}}),r(ht,yt)},children:(ht,yt)=>{var wt=P(),ve=p(wt);He(ve,{get name(){return ot()},get icon(){return bt()}}),r(ht,wt)}}),r(vt,tt)}),r(f,z)}});var J=n(n(mt,!0));kt(J,{entries:f=>{var l=P(),z=p(l);So(z,{act:N,get home_cats(){return o(C)},get adventure_cats(){return o(_)}}),r(f,l)},children:(f,l)=>{var z=Do(),B=w(z),Ct=n(n(B,!0));Lt(Ct,95,()=>o(_),(vt,_t)=>F(F(vt)).name,(vt,_t,Et)=>{let ot=()=>F(F(_t)).name,bt=()=>F(F(_t)).icon,Pt=()=>F(F(_t)).position;var tt=Ro();Dt(1,tt,()=>W,()=>({key:ot()})),Dt(2,tt,()=>L,()=>({key:ot()})),Ae(tt,()=>De,null);var St=w(tt);kt(St,{entries:ht=>{var yt=P(),wt=p(yt);ue(wt,{act:N,get name(){return ot()},get icon(){return bt()},get position(){return Pt()}}),r(ht,yt)},children:(ht,yt)=>{var wt=P(),ve=p(wt);He(ve,{get name(){return ot()},get icon(){return bt()}}),r(ht,wt)}}),r(vt,tt)}),r(f,z)}});var xt=n(n(dt,!0)),$t=w(xt);_n($t,{summary:f=>{var l=qo();r(f,l)},children:(f,l)=>{var z=P(),B=p(z);Ht(B,{content:$o}),r(f,z)}}),r(ft,it)}}),r(q,Y)}});var U=n(n(H,!0));D(U,()=>o(I),q=>{var K=P(),Y=p(K);un(Y,{onclose:()=>b(I,!1),children:(j,nt)=>{var at=Uo(),ft=w(at),gt=n(n(ft,!0)),it=n(n(gt,!0)),dt=n(n(it,!0)),mt=n(n(dt,!0)),J=w(mt),xt=n(n(J,!0));vn(xt,{});var $t=n(n(xt,!0)),Nt=n(n($t,!0));hn(Nt,{}),r(j,at)}}),r(q,K)}),r(s,X),Z()}var Vo=u("Hello world",1),Xo=u("🌞",1),Yo=u("Hello with an optional icon snippet",1),Ko=u("Hello with an optional icon string",1),jo=u("<!> <!> <!>",1),Go=u(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Jo=u("<!> <!>",1);function Qo(s,t){Q(t,!0);let e=O(!1),a=O(!1),c=O(!1);var h=Jo(),d=p(h);Ot(d,{text:"Basic usage",slug:"basic-usage"});var T=n(n(d,!0));ae(T,{scoped:!0,children:(x,y)=>{var k=P(),A=p(k);kt(A,{entries:v=>{var g=jo(),C=p(g);rt(C,{run:()=>b(e,!o(e)),children:(m,I)=>{var $=Vo();r(m,$)}});var _=n(n(C,!0));rt(_,{run:()=>b(a,!o(a)),icon:I=>{var $=Xo();r(I,$)},children:(I,$)=>{var N=Yo();r(I,N)}});var i=n(n(_,!0));rt(i,{run:()=>b(c,!o(c)),icon:"🌚",children:(m,I)=>{var $=Ko();r(m,$)}}),r(v,g)},children:(v,g)=>{var C=Go(),_=w(C),i=n(n(_,!0)),m=R(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(e)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(a)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(c)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Ht(i,{get content(){return o(m)}});var I=n(n(i,!0)),$=w(I),N=w($),L=n(n(I,!0)),W=w(L),X=w(W),H=n(n(L,!0)),U=w(H),q=w(U);G(()=>{pt($,"color_g_5",o(e)),lt(N,`greeted = ${It(o(e))}`),pt(W,"color_e_5",o(a)),lt(X,`greeted_icon_snippet = ${It(o(a))}`),pt(U,"color_d_5",o(c)),lt(q,`greeted_icon_string = ${It(o(c))}`)}),r(v,C)}}),r(x,k)}}),r(s,h),Z()}var Zo=u("Toggle",1),tr=u("<div>toggled</div>"),er=u(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),nr=u("<!> <!>",1);function or(s,t){Q(t,!0);const e=new Te;let a=O(!1);var c=P(),h=p(c);ae(h,{contextmenu:e,scoped:!0,children:(d,T)=>{var x=nr(),y=p(x);Ot(y,{text:"Custom instance",slug:"custom-instance"});var k=n(n(y,!0));kt(k,{entries:E=>{var v=P(),g=p(v);rt(g,{run:()=>b(a,!o(a)),children:(C,_)=>{var i=Zo();r(C,i)}}),r(E,v)},children:(E,v)=>{var g=er(),C=w(g);Ht(C,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var _=n(n(C,!0));Ht(_,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var i=n(n(_,!0)),m=n(n(i,!0)),I=w(m);D(I,()=>o(a),$=>{var N=tr();Dt(3,N,()=>an),r($,N)}),r(E,g)}}),r(d,x)}}),r(s,c),Z()}var rr=u("Toggle something",1),ar=u(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button>selecting text</button> and then
					opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),sr=u("<div><!></div> <!>",1);function ir(s,t){Q(t,!0);const e=new Te;let a=O(!1),c;const h=()=>{const v=window.getSelection();if(!v)return;const g=document.createRange();g.selectNodeContents(c),v.removeAllRanges(),v.addRange(g)};let d=O("");const T="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",x=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,y=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,k=R(()=>o(d)===T||o(d)===x||o(d)===y);var A=P(),E=p(A);ae(E,{contextmenu:e,scoped:!0,children:(v,g)=>{var C=sr(),_=p(C),i=w(_);Ot(i,{text:"Select text",slug:"select-text"});var m=n(n(_,!0));kt(m,{entries:$=>{var N=P(),L=p(N);rt(L,{run:()=>b(a,!o(a)),children:(W,X)=>{var H=rr();r(W,H)}}),r($,N)},children:($,N)=>{var L=ar(),W=w(L);ke(W,J=>c=J,()=>c);var X=w(W),H=n(n(X,!0)),U=n(w(H));U.__click=h;var q=n(n(W,!0)),K=w(q);sn(K);var Y=n(n(q,!0)),j=n(n(Y,!0)),nt=w(j);cn(nt);var at=n(n(j,!0)),ft=w(at);se(ft,{href:"Web/HTML/Global_attributes/contenteditable"});var gt=n(n(at,!0)),it=n(n(gt,!0)),dt=n(n(it,!0)),mt=n(n(dt,!0));G(()=>{pt(L,"color_g_5",o(k)),pt(U,"color_a",o(a)),pt(Y,"color_g_5",o(k))}),Me(K,()=>o(d),J=>b(d,J)),Me(nt,()=>o(d),J=>b(d,J)),Fe("innerText",it,()=>o(d),J=>b(d,J)),Fe("innerText",mt,()=>o(d),J=>b(d,J)),r($,L)}}),G(()=>pt(_,"color_d_5",o(k))),r(v,C)}}),r(s,A),Z()}Ce(["click"]);var cr=u(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function lr(s,t){Q(t,!1),we();var e=P(),a=p(e);ae(a,{scoped:!0,children:(c,h)=>{var d=cr(),T=p(d);Ot(T,{text:"Default behaviors",slug:"default-behaviors"});var x=n(n(T,!0)),y=w(x);Ht(y,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),r(c,d)}}),r(s,e),Z()}var ur=u("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function qr(s,t){Q(t,!1);const a=on("Contextmenu");we();var c=P(),h=p(c);nn(h,{tome:a,children:(d,T)=>{var x=ur(),y=p(x),k=n(n(y,!0)),A=w(k);Qo(A,{});var E=n(n(k,!0)),v=w(E);lr(v,{});var g=n(n(E,!0)),C=w(g);or(C,{});var _=n(n(g,!0)),i=w(_);ir(i,{});var m=n(n(_,!0)),I=w(m);Bo(I,{});var $=n(n(m,!0)),N=w($);wn(N,{}),r(d,x)}}),r(s,c),Z()}export{qr as component};
