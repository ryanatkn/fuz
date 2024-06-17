var Qe=Object.defineProperty;var Ze=(i,t,e)=>t in i?Qe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var it=(i,t,e)=>(Ze(i,typeof t!="symbol"?t+"":t,e),e),he=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var P=(i,t,e)=>(he(i,t,"read from private field"),e?e.call(i):t.get(i)),B=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},pe=(i,t,e,s)=>(he(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e);var Ee=(i,t,e)=>(he(i,t,"access private method"),e);import{a as r,t as d,c as $,s as n,f as h,b as E,m as At,$ as Pt}from"../chunks/disclose-version.CSpVFLMe.js";import{i as He,u as tn,r as en,aw as nn,I as O,g as o,w as x,s as be,f as ye,p as mt,t as G,a as ht,d as R,a3 as Ht,a5 as F,K as Pe}from"../chunks/runtime.Dht6Pzrj.js";import{T as on}from"../chunks/Tome_Detail.Nh87G6Jo.js";import{g as rn}from"../chunks/tome.C_gHmxyR.js";import{M as ce}from"../chunks/Mdn_Link.4q-BcL0D.js";import{T as St}from"../chunks/Tome_Subheading.BHHeCcEv.js";import{i as L}from"../chunks/if.BY8i3A5v.js";import{e as Ut}from"../chunks/each.VeypzIej.js";import{t as Lt,a as Ae,c as an,s as sn}from"../chunks/index.D8i92-Cy.js";import{C as Wt}from"../chunks/Code.BJFX2aqi.js";import{d as we,s as ct,e as et}from"../chunks/render.ldLefYc7.js";import{p as M}from"../chunks/proxy.BlvVYCw8.js";import{s as lt,b as de,r as cn,e as ln}from"../chunks/attributes.ulKL4dWL.js";import{s as le}from"../chunks/style.iv2mhl8q.js";import{b as $e}from"../chunks/this.Cm2itARI.js";import{p as J,s as Se}from"../chunks/props.C7gNG4pc.js";import{a as un,s as Mt,b as fe,c as ze,D as dn}from"../chunks/Dialog.DGTqME5D.js";import{o as Oe}from"../chunks/index-client.DKLjGx0J.js";import{a as ge}from"../chunks/string.ZJuK4sHN.js";import{t as bt}from"../chunks/class.Ct8XOsNy.js";import{P as _n}from"../chunks/Pending_Animation.D_aobo-h.js";import{D as vn,b as Ne}from"../chunks/Details.CC3ehwmM.js";import{G as mn}from"../chunks/Github_Logo.BmBJqGz1.js";import{C as hn,T as pn}from"../chunks/Theme_Input.CWb2SE06.js";import{b as Fe}from"../chunks/input.DwkY9vSt.js";function fn(i,t,e){He(()=>{var s=tn(()=>t(i,e==null?void 0:e())||{});if(e&&(s!=null&&s.update)){var a=!1;en(()=>{var c=e();nn(c),a&&s.update(c)}),a=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}var kt,Dt,Bt,ve,Ue;const me=class me{constructor(t){B(this,ve);B(this,kt,new WeakMap);B(this,Dt,void 0);B(this,Bt,void 0);pe(this,Bt,t)}observe(t,e){var s=P(this,kt).get(t)||new Set;return s.add(e),P(this,kt).set(t,s),Ee(this,ve,Ue).call(this).observe(t,P(this,Bt)),()=>{var a=P(this,kt).get(t);a.delete(e),a.size===0&&(P(this,kt).delete(t),P(this,Dt).unobserve(t))}}};kt=new WeakMap,Dt=new WeakMap,Bt=new WeakMap,ve=new WeakSet,Ue=function(){return P(this,Dt)??pe(this,Dt,new ResizeObserver(t=>{for(var e of t){me.entries.set(e.target,e);for(var s of P(this,kt).get(e.target)||[])s(e)}}))},it(me,"entries",new WeakMap);let xe=me;var gn=new xe({box:"border-box"});function Me(i,t,e){var s=gn.observe(i,()=>e(i[t]));He(()=>(e(i[t]),s))}var xn=d('<span class="font_mono">contextmenu</span> event',1),bn=d('<span class="font_mono">navigator.vibrate</span>'),yn=d('<span class="font_mono">navigator.vibrate</span>'),wn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function $n(i){var t=wn(),e=h(t),s=$(e);St(s,{text:"Expected behaviors",slug:"expected-behaviors"});var a=n(n(s,!0)),c=n(n(a,!0)),f=n($(c));ce(f,{href:"Web/API/Element/contextmenu_event",children:(Y,K)=>{var H=xn();r(Y,H)},$$slots:{default:!0}});var k=n(n(f,!0)),b=n(n(k,!0));ce(b,{href:"Web/API/Navigator/vibrate",children:(Y,K)=>{var H=bn();r(Y,H)},$$slots:{default:!0}});var g=n(n(c,!0)),I=n(n(g,!0)),A=n(n(I,!0)),y=n(n(A,!0)),m=n(n(y,!0)),w=$(m),p=n(n(w,!0)),v=n(n(p,!0)),_=n(n(v,!0)),l=n(n(_,!0)),C=n(n(l,!0)),S=n($(C));ce(S,{href:"Web/API/Navigator/vibrate",children:(Y,K)=>{var H=yn();r(Y,H)},$$slots:{default:!0}});var N=n(n(e,!0)),U=$(N);St(U,{text:"Motivation",slug:"motivation"}),r(i,t)}function Cn(i){const t=i-1;return t*t*t+1}function kn(i){return--i*i*i*i*i+1}function De(i,{from:t,to:e},s={}){const a=getComputedStyle(i),c=a.transform==="none"?"":a.transform,[f,k]=a.transformOrigin.split(" ").map(parseFloat),b=t.left+t.width*f/e.width-(e.left+f),g=t.top+t.height*k/e.height-(e.top+k),{delay:I=0,duration:A=m=>Math.sqrt(m)*120,easing:y=Cn}=s;return{delay:I,duration:typeof A=="function"?A(Math.sqrt(b*b+g*g)):A,easing:y,css:(m,w)=>{const p=w*b,v=w*g,_=m+w*t.width/e.width,l=m+w*t.height/e.height;return`transform: ${c} translate(${p}px, ${v}px) scale(${_}, ${l});`}}}var Xt,Vt;class We{constructor(){B(this,Xt,O(0));B(this,Vt,O(0))}get width(){return o(P(this,Xt))}set width(t){x(P(this,Xt),M(t))}get height(){return o(P(this,Vt))}set height(t){x(P(this,Vt),M(t))}}Xt=new WeakMap,Vt=new WeakMap;var Yt,Rt,Kt,jt,Gt;class Tn{constructor(t,e){it(this,"is_menu",!1);it(this,"menu");B(this,Yt,O(!1));B(this,Rt,O());B(this,Kt,O(!1));B(this,jt,O(null));B(this,Gt,O(null));this.menu=t,P(this,Rt).v=M(e)}get selected(){return o(P(this,Yt))}set selected(t){x(P(this,Yt),M(t))}get run(){return o(P(this,Rt))}set run(t){x(P(this,Rt),M(t))}get pending(){return o(P(this,Kt))}set pending(t){x(P(this,Kt),M(t))}get error_message(){return o(P(this,jt))}set error_message(t){x(P(this,jt),M(t))}get promise(){return o(P(this,Gt))}set promise(t){x(P(this,Gt),M(t))}}Yt=new WeakMap,Rt=new WeakMap,Kt=new WeakMap,jt=new WeakMap,Gt=new WeakMap;var Jt,Qt;class In{constructor(t,e){it(this,"is_menu",!0);it(this,"menu");it(this,"depth");B(this,Jt,O(!1));B(this,Qt,O(M([])));this.menu=t,this.depth=e}get selected(){return o(P(this,Jt))}set selected(t){x(P(this,Jt),M(t))}get items(){return o(P(this,Qt))}set items(t){x(P(this,Qt),M(t))}}Jt=new WeakMap,Qt=new WeakMap;var Zt;class En{constructor(){it(this,"is_menu",!0);it(this,"menu",null);it(this,"depth",1);B(this,Zt,O(M([])))}get items(){return o(P(this,Zt))}set items(t){x(P(this,Zt),M(t))}}Zt=new WeakMap;var te,ee,ne,oe,re,ae,se;class Ce{constructor(t){it(this,"layout");it(this,"initial_layout");B(this,te,O(!1));B(this,ee,O(0));B(this,ne,O(0));B(this,oe,O(M([])));B(this,re,O());B(this,ae,O(M(new En)));B(this,se,O(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout||new We}get opened(){return o(P(this,te))}set opened(t){x(P(this,te),M(t))}get x(){return o(P(this,ee))}set x(t){x(P(this,ee),M(t))}get y(){return o(P(this,ne))}set y(t){x(P(this,ne),M(t))}get params(){return o(P(this,oe))}set params(t){x(P(this,oe),M(t))}get error(){return o(P(this,re))}set error(t){x(P(this,re),M(t))}get root_menu(){return o(P(this,ae))}set root_menu(t){x(P(this,ae),M(t))}get selections(){return o(P(this,se))}set selections(t){x(P(this,se),M(t))}open(t,e,s){this.selections.length=0,this.opened=!0,this.x=e,this.y=s,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(s){const a=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=a??"unknown error",this.error=a}if(un(e)){t.pending=!0,t.error_message=null;const s=t.promise=e.then(a=>{if(s===t.promise){if(typeof(a==null?void 0:a.ok)=="boolean")if(a.ok)this.close();else{const c=typeof a.message=="string"?a.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return a}},a=>{if(s!==t.promise)return;const c=typeof(a==null?void 0:a.message)=="string"?a.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{s===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);return t?this.activate(t):this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const s of this.selections)s.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length)return this.select_first();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length)return this.select_last();const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)||this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)||this.root_menu;return this.select(t.at(-1))}add_entry(t){const e=qe()||this.root_menu,s=new Tn(e,t);return e.items.push(s),Oe(()=>{e.items.length=0}),s}add_submenu(){const t=qe()||this.root_menu,e=new In(t,t.depth+1);return t.items.push(e),Fn(e),Oe(()=>{t.items.length=0}),e}}te=new WeakMap,ee=new WeakMap,ne=new WeakMap,oe=new WeakMap,re=new WeakMap,ae=new WeakMap,se=new WeakMap;const ke="contextmenu",Pn=`a,[data-${ke}]`,ue=new Map;let An=0;const Sn=(i,t)=>{if(t==null)return;const e=An+++"";return i.dataset[ke]=e,ue.set(e,t),{update:s=>{ue.set(e,s)},destroy:()=>{ue.delete(e)}}},zn=17,Re=(i,t,e,s)=>{var c;const a=On(i);return a!=null&&a.length?(s.open(a,t,e),(c=navigator.vibrate)==null||c.call(navigator,zn),!0):!1},On=i=>{var c;let t=null,e=i,s,a;for(;e=e==null?void 0:e.closest(Pn);){if(s=e.dataset[ke]){if(t||(t=[]),a=ue.get(s),a===void 0)continue;Array.isArray(a)?(t||(t=[])).push(...a):(t||(t=[])).push(a)}e.tagName==="A"&&(t||(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const f=(c=window.getSelection())==null?void 0:c.toString();f&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(f)}})}return t},Be=Symbol(),Nn=i=>be(Be,i),Te=()=>ye(Be),Xe=Symbol(),Fn=i=>be(Xe,i),qe=()=>ye(Xe),Ve=Symbol(),Ye=(i=new We)=>(be(Ve,i),i),Mn=()=>ye(Ve);var Dn=(i,t)=>t.close(),Rn=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ke(i,t){mt(t,!0);const e="🔗",s=J(t,"icon",3,e),a=Te(),c=(_,l=location.host)=>{const C=ge(ge(_,"https://"),"http://");return C.startsWith(l+"/")?ge(C,l):C},f=R(()=>c(t.href)),k=R(()=>!(o(f)[0]==="."||o(f)[0]==="/"&&o(f)[1]!=="/")),b=R(()=>o(k)?"noreferrer":void 0);var g=Rn(),I=$(g);I.__click=[Dn,a];var A=$(I),y=$(A),m=$(y);L(m,()=>typeof s()=="string",_=>{var l=At(_);G(()=>ct(l,s())),r(_,l)},_=>{var l=E(),C=h(l);lt(s,C,()=>e),r(_,l)});var w=n(n(y,!0)),p=$(w),v=$(p);L(v,()=>t.children,_=>{var l=E(),C=h(l);lt(()=>t.children,C),r(_,l)},_=>{var l=At(_);G(()=>ct(l,o(f))),r(_,l)}),G(()=>{de(I,"href",t.href),de(I,"rel",o(b))}),r(i,g),ht()}we(["click"]);var qn=d("⚠️",1),Ln=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function Z(i,t){mt(t,!0);const e=Te(),s=e.add_entry(t.run);Ht(()=>{s.run=t.run});const a=R(()=>s),c=R(()=>{let{selected:v,pending:_,error_message:l}=o(a);return[v,_,l]}),f=R(()=>o(c)[0]),k=R(()=>o(c)[1]),b=R(()=>o(c)[2]);var g=Ln();g.__click=()=>{setTimeout(()=>e.activate(s))};var I=$(g),A=$(I),y=$(A);L(y,()=>typeof t.icon=="string",v=>{var _=At(v);G(()=>ct(_,t.icon)),r(v,_)},v=>{var _=E(),l=h(_);L(l,()=>t.icon,C=>{var S=E(),N=h(S);lt(()=>t.icon,N),r(C,S)},null,!0),r(v,_)});var m=n(n(A,!0)),w=$(m);lt(()=>t.children,w);var p=n(n(m,!0));L(p,()=>o(k),v=>{var _=E(),l=h(_);_n(l,{}),r(v,_)},v=>{var _=E(),l=h(_);L(l,()=>o(b),C=>{var S=qn();r(C,S)},null,!0),r(v,_)}),G(()=>{de(g,"title",o(b)?`Error: ${o(b)}`:void 0),bt(g,"selected",o(f))}),et("mouseenter",g,v=>{Mt(v),e.select(s)},!1),r(i,g),ht()}we(["click"]);function je(i,t){var e=E(),s=h(e);{var a=c=>{var f=At(c);G(()=>ct(f,t.icon)),r(c,f)};Z(s,{get run(){return t.run},icon:a,children:(c,f)=>{var k=At(c);G(()=>ct(k,t.content)),r(c,k)},$$slots:{default:!0}})}r(i,e)}var Hn=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Un=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Wn=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Bn=d("<!> <!> <!>",1);function ie(i,t){mt(t,!0);var e=(T,u=Pe)=>{var z=E(),q=h(z);Ke(q,Se(u)),r(T,z)},s=(T,u=Pe)=>{var z=E(),q=h(z);je(q,Se(u)),r(T,z)};const a=J(t,"contextmenu",11,()=>new Ce),c=J(t,"longpress_move_tolerance",3,21),f=J(t,"longpress_duration",3,633),k=J(t,"bypass_with_tap_then_longpress",3,!0),b=J(t,"tap_then_longpress_duration",3,660),g=J(t,"tap_then_longpress_move_tolerance",3,7),I=J(t,"open_offset_x",11,()=>-2),A=J(t,"open_offset_y",11,()=>-2),y=J(t,"scoped",3,!1);Nn(a());let m=O(void 0);const w=R(a),p=R(()=>{let{layout:T,initial_layout:u}=o(w);return[T,u]}),v=R(()=>o(p)[0]),_=R(()=>o(p)[1]),l=R(()=>o(v)===o(_));let C=O(void 0),S=O(void 0);Ht(()=>{!o(l)&&o(C)!==void 0&&(o(v).width=o(C))}),Ht(()=>{!o(l)&&o(S)!==void 0&&(o(v).height=o(S))});const N=Ye();Ht(()=>{if(o(m)){const T=o(m).getBoundingClientRect();N.width=T.width,N.height=T.height}});const U=R(()=>a().x+Math.min(0,o(v).width-(a().x+N.width))),Y=R(()=>a().y+Math.min(0,o(v).height-(a().y+N.height)));let K=O(void 0),H=O(void 0),tt=O(void 0),D=O(void 0),X=O(void 0),V=O(void 0);const W=()=>{o(X)&&x(X,!1),o(D)!=null&&(clearTimeout(o(D)),x(D,null))},Q=T=>{var z;if(o(V)){x(V,!1);return}if(o(X)){W(),Mt(T);return}const{target:u}=T;T.shiftKey||!(u instanceof HTMLElement||u instanceof SVGElement)||(z=o(m))!=null&&z.contains(u)||fe(u)||ze(u)||Re(u,T.clientX+I(),T.clientY+A(),a())&&(Mt(T),W())},rt=T=>{o(X)&&x(X,!1);const{touches:u,target:z}=T;if(a().opened||u.length!==1||T.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||fe(z)||ze(z))return;const{clientX:q,clientY:ot}=u[0];if(k()){if(o(tt)!=null&&performance.now()-o(tt)<b()&&Math.hypot(q-o(K),ot-o(H))<g()){x(V,!0),x(tt,null);return}x(tt,M(performance.now()))}x(K,M(q)),x(H,M(ot)),o(D)!=null&&W(),x(D,M(setTimeout(()=>{x(X,!0),Re(z,o(K)+I(),o(H)+A(),a())},f())))},pt=T=>{if(o(D)==null)return;const{touches:u}=T;if(u.length!==1)return;const{clientX:z,clientY:q}=u[0];Math.hypot(z-o(K),q-o(H))>c()&&(a().opened&&a().close(),W())},nt=T=>{o(D)!=null&&(o(X)&&Mt(T),W())},ut=T=>{o(m)&&!o(m).contains(T.target)&&a().close()},ft=new Map([["Escape",()=>a().close()],["ArrowLeft",()=>a().collapse_selected()],["ArrowRight",()=>a().expand_selected()],["ArrowDown",()=>a().select_next()],["PageDown",()=>a().select_next()],["ArrowUp",()=>a().select_previous()],["PageUp",()=>a().select_previous()],["Home",()=>a().select_first()],["End",()=>a().select_last()],[" ",()=>a().activate_selected()],["Enter",()=>a().activate_selected()]]),j=T=>{const u=ft.get(T.key);!u||fe(T.target)||(Mt(T),u())};var dt=Bn();et("contextmenu",Pt,function(...T){const u=y()?void 0:Q;return u==null?void 0:u.apply(this,T)},!0,!1),et("touchstart",Pt,function(...T){const u=y()?void 0:rt;return u==null?void 0:u.apply(this,T)},!0,!0),et("touchmove",Pt,function(...T){const u=y()?void 0:pt;return u==null?void 0:u.apply(this,T)},!0,!0),et("touchend",Pt,function(...T){const u=y()?void 0:nt;return u==null?void 0:u.apply(this,T)},!0,!1),et("touchcancel",Pt,function(...T){const u=y()?void 0:nt;return u==null?void 0:u.apply(this,T)},!0,!1),et("mousedown",Pt,function(...T){const u=a().opened?ut:void 0;return u==null?void 0:u.apply(this,T)},!0,!0),et("keydown",Pt,function(...T){const u=a().opened?j:void 0;return u==null?void 0:u.apply(this,T)},!0,!1);var yt=h(dt);L(yt,y,T=>{var u=Hn(),z=$(u);lt(()=>t.children,z),et("contextmenu",u,Q,!0,!1),et("touchstart",u,rt,!0,!0),et("touchmove",u,pt,!0,!0),et("touchend",u,nt,!0,!1),et("touchcancel",u,nt,!0,!1),r(T,u)},T=>{var u=E(),z=h(u);lt(()=>t.children,z),r(T,u)});var zt=n(n(yt,!0));L(zt,()=>!o(l),T=>{var u=Un();Me(u,"clientHeight",z=>x(S,z)),Me(u,"clientWidth",z=>x(C,z)),r(T,u)});var qt=n(n(zt,!0));L(qt,()=>a().opened,T=>{var u=Wn();$e(u,z=>x(m,M(z)),()=>o(m)),Ut(u,76,()=>a().params,(z,q)=>F(z),(z,q,ot)=>{var Ot=E(),Tt=h(Ot);L(Tt,()=>typeof F(q)=="function",at=>{var st=E(),gt=h(st);lt(()=>F(q),gt),r(at,st)},at=>{var st=E(),gt=h(st);L(gt,()=>F(q).snippet==="link",_t=>{var xt=E(),vt=h(xt);e(vt,()=>F(q).props),r(_t,xt)},_t=>{var xt=E(),vt=h(xt);L(vt,()=>F(q).snippet==="text",wt=>{var Nt=E(),It=h(Nt);s(It,()=>F(q).props),r(wt,Nt)},null,!0),r(_t,xt)},!0),r(at,st)}),r(z,Ot)}),G(()=>le(u,"transform",`translate3d(${o(U)??""}px, ${o(Y)??""}px, 0)`)),r(T,u)}),r(i,dt),ht()}var Xn=d('<span class="display_contents"><!></span>');function Ct(i,t){mt(t,!0);var e=Xn(),s=$(e);lt(()=>t.children,s),fn(e,(a,c)=>Sn(a,c),()=>t.entries),r(i,e),ht()}var Vn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Yn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ie(i,t){mt(t,!0);const e=Te(),s=e.add_submenu(),{layout:a}=e,c=R(()=>s.selected);let f=O(void 0);const k=Mn(),b=Ye();let g=O(0),I=O(0);Ht(()=>{o(f)&&A(o(f),a,k)});const A=(S,N,U)=>{const{x:Y,y:K,width:H,height:tt}=S.getBoundingClientRect();b.width=H,b.height=tt;const D=Y-o(g),X=K-o(I),V=D+H+U.width-N.width;if(V<=0)x(g,M(U.width));else{const W=H-D;W<=0?x(g,-H):W>V?x(g,U.width-V):x(g,W-H)}x(I,M(Math.min(0,N.height-(X+tt))))};var y=Yn(),m=$(y),w=$(m),p=$(w),v=$(p);L(v,()=>t.icon,S=>{var N=E(),U=h(N);lt(()=>t.icon,U),r(S,N)});var _=n(n(p,!0)),l=$(_);lt(()=>t.children,l);var C=n(n(m,!0));L(C,()=>o(c),S=>{var N=Vn();$e(N,Y=>x(f,M(Y)),()=>o(f));var U=$(N);lt(()=>t.menu,U),G(()=>{le(N,"transform",`translate3d(${o(g)??""}px, ${o(I)??""}px, 0)`),le(N,"max-height",`${a.height??""}px`)}),r(S,N)}),G(()=>{le(y,"--contextmenu_depth",s.depth),de(m,"aria-expanded",o(c)),bt(m,"selected",o(c))}),et("mouseenter",m,S=>{Mt(S),setTimeout(()=>e.select(s))},!1),r(i,y),ht()}var Kn=d("🏠",1),jn=d("🌄",1),Gn=d("go home",1),Jn=d("go adventure",1),Qn=d("🌄",1),Zn=d("🏠",1),to=d("do adventure",1),eo=d("be home",1),no=d("<!> <!>",1);function _e(i,t){mt(t,!0);const e=J(t,"name",3,"Cat"),s=J(t,"icon",3,"😺");var a=E(),c=h(a);{var f=b=>{var g=At(b);G(()=>ct(g,s())),r(b,g)},k=b=>{var g=no(),I=h(g);{var A=m=>{var w=E(),p=h(w);L(p,()=>t.position==="adventure",v=>{var _=Kn();r(v,_)},v=>{var _=jn();r(v,_)}),r(m,w)};Z(I,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:A,children:(m,w)=>{var p=E(),v=h(p);L(v,()=>t.position==="adventure",_=>{var l=Gn();r(_,l)},_=>{var l=Jn();r(_,l)}),r(m,p)},$$slots:{default:!0}})}var y=n(n(I,!0));{var A=w=>{var p=E(),v=h(p);L(v,()=>t.position==="adventure",_=>{var l=Qn();r(_,l)},_=>{var l=Zn();r(_,l)}),r(w,p)};Z(y,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:A,children:(w,p)=>{var v=E(),_=h(v);L(_,()=>t.position==="adventure",l=>{var C=to();r(l,C)},l=>{var C=eo();r(l,C)}),r(w,v)},$$slots:{default:!0}})}r(b,g)};Ie(c,{icon:f,menu:k,children:(b,g)=>{var I=At(b);G(()=>ct(I,e())),r(b,I)},$$slots:{default:!0}})}r(i,a),ht()}var oo=d("Source code",1),ro=d("?",1),ao=d("About",1),so=d("<!> <!>",1);function io(i,t){var e=so(),s=h(e);{var a=f=>{var k=E(),b=h(k);mn(b,{size:"var(--icon_size_xs)"}),r(f,k)};Ke(s,{href:"https://github.com/ryanatkn/fuz",icon:a,children:(f,k)=>{var b=oo();r(f,b)},$$slots:{default:!0}})}var c=n(n(s,!0));{var a=k=>{var b=ro();r(k,b)};Z(c,{get run(){return t.toggle_about_dialog},icon:a,children:(k,b)=>{var g=ao();r(k,g)},$$slots:{default:!0}})}r(i,e)}const Ge=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const e=i[0];return e.icon+e.name};var co=d("🏠",1),lo=d("🐈‍⬛",1),uo=d("call",1),_o=d("🏠",1),vo=d("be",1),mo=d("🦋",1),ho=d("leave",1),po=d("<!> <!>",1),fo=d("<!> <!> <!>",1),go=d("home",1);function xo(i,t){mt(t,!0);const e=R(()=>Ge(t.adventure_cats));var s=E(),a=h(s);{var c=k=>{var b=co();r(k,b)},f=k=>{var b=fo(),g=h(b);L(g,()=>o(e),y=>{var m=E(),w=h(m);{var p=v=>{var _=lo();r(v,_)};Z(w,{run:()=>t.act({type:"call_cats_home"}),icon:p,children:(v,_)=>{var l=uo();r(v,l)},$$slots:{default:!0}})}r(y,m)});var I=n(n(g,!0));Ut(I,69,()=>t.home_cats,(y,m)=>F(y).name,(y,m,w)=>{var p=E(),v=h(p);_e(v,{get name(){return F(m).name},get icon(){return F(m).icon},get position(){return F(m).position},get act(){return t.act}}),r(y,p)});var A=n(n(I,!0));L(A,()=>!o(e),y=>{var m=po(),w=h(m);{var p=_=>{var l=_o();r(_,l)};Z(w,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:p,children:(_,l)=>{var C=vo();r(_,C)},$$slots:{default:!0}})}var v=n(n(w,!0));{var p=l=>{var C=mo();r(l,C)};Z(v,{run:()=>t.act({type:"call_cats_adventure"}),icon:p,children:(l,C)=>{var S=ho();r(l,S)},$$slots:{default:!0}})}r(y,m)}),r(k,b)};Ie(a,{icon:c,menu:f,children:(k,b)=>{var g=go();r(k,g)},$$slots:{default:!0}})}r(i,s),ht()}var bo=d("🌄",1),yo=d("🦋",1),wo=d("call",1),$o=d("🌄",1),Co=d("do",1),ko=d("🐈‍⬛",1),To=d("leave",1),Io=d("<!> <!>",1),Eo=d("<!> <!> <!>",1),Po=d("adventure",1);function Ao(i,t){mt(t,!0);const e=R(()=>Ge(t.home_cats));var s=E(),a=h(s);{var c=k=>{var b=bo();r(k,b)},f=k=>{var b=Eo(),g=h(b);L(g,()=>o(e),y=>{var m=E(),w=h(m);{var p=v=>{var _=yo();r(v,_)};Z(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:p,children:(v,_)=>{var l=wo();r(v,l)},$$slots:{default:!0}})}r(y,m)});var I=n(n(g,!0));Ut(I,69,()=>t.adventure_cats,(y,m)=>F(y).name,(y,m,w)=>{var p=E(),v=h(p);_e(v,{get name(){return F(m).name},get icon(){return F(m).icon},get position(){return F(m).position},get act(){return t.act}}),r(y,p)});var A=n(n(I,!0));L(A,()=>!o(e),y=>{var m=Io(),w=h(m);{var p=_=>{var l=$o();r(_,l)};Z(w,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:p,children:(_,l)=>{var C=Co();r(_,C)},$$slots:{default:!0}})}var v=n(n(w,!0));{var p=l=>{var C=ko();r(l,C)};Z(v,{run:()=>t.act({type:"call_cats_home"}),icon:p,children:(l,C)=>{var S=To();r(l,S)},$$slots:{default:!0}})}r(y,m)}),r(k,b)};Ie(a,{icon:c,menu:f,children:(k,b)=>{var g=Po();r(k,g)},$$slots:{default:!0}})}r(i,s),ht()}var So=d('<span class="icon svelte-u0xdy"> </span>'),zo=d('<span class="name svelte-u0xdy"><!> </span>'),Oo=d('<span class="cat svelte-u0xdy"><!><!></span>');function Le(i,t){mt(t,!0);const e=J(t,"name",3,"Cat"),s=J(t,"icon",3,"😺"),a=J(t,"show_name",3,!0),c=J(t,"show_icon",3,!0);var f=Oo(),k=$(f);L(k,c,g=>{var I=So(),A=$(I);G(()=>ct(A,s())),r(g,I)});var b=n(k);L(b,a,g=>{var I=zo(),A=$(I);L(A,()=>t.children,m=>{var w=E(),p=h(w);lt(()=>t.children,p),r(m,w)});var y=n(A,!0);G(()=>ct(y,e())),r(g,I)}),G(()=>bt(f,"has-icon",c())),r(i,f),ht()}const No=`<script lang="ts">
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
`;var Fo=d("<!> <!>",1),Mo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Do=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Ro=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),qo=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Lo=d("View example source",1),Ho=d("<section><!> <!></section> <section><!></section>",1),Uo=d("<!> <!>",1),Wo=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Bo=d("<!> <!>",1);function Xo(i,t){mt(t,!0);const e="Alyssa",s="Ben",a="home";let c=O(a),f=O(a);const k=R(()=>o(c)===o(f)?"😺":"😾"),b=R(()=>o(c)===o(f)?"😸":"😿"),g=R(()=>({name:e,icon:o(k),position:o(c)})),I=R(()=>({name:s,icon:o(b),position:o(f)}));let A=O(!1);const y=(D,X)=>{const V=[],W=[];for(const Q of D){const rt=Q.position==="home"?V:W;X?rt.unshift(Q):rt.push(Q)}return{home_cats:V,adventure_cats:W}},m=R(()=>y([o(g),o(I)],o(A))),w=R(()=>{let{home_cats:D,adventure_cats:X}=o(m);return[D,X]}),p=R(()=>o(w)[0]),v=R(()=>o(w)[1]),_=R(()=>o(c)!==a||o(f)!==a),l=()=>{x(c,a),x(f,a)};let C=O(!1);const S=()=>{x(C,!o(C))},N=D=>{switch(D.type){case"call_cats_adventure":{x(c,"adventure"),x(f,"adventure");break}case"call_cats_home":{x(c,"home"),x(f,"home");break}case"cat_go_adventure":{D.name===e?x(c,"adventure"):D.name===s&&x(f,"adventure");break}case"cat_go_home":{D.name===e?x(c,"home"):D.name===s&&x(f,"home");break}case"cat_be_or_do":{x(A,!o(A));break}}},[U,Y]=an({fallback:(D,X)=>{const V=window.getComputedStyle(D),W=V.transform==="none"?"":V.transform;return{duration:1500,easing:kn,css:Q=>`
					transform: ${W} scale(${Q});
					opacity: ${Q}
				`}}});var K=Bo(),H=h(K);ie(H,{scoped:!0,children:(D,X)=>{var V=Uo(),W=h(V);St(W,{text:"Full example",slug:"full-example"});var Q=n(n(W,!0));{var rt=pt=>{var nt=Fo(),ut=h(nt);L(ut,()=>o(_),j=>{var dt=E(),yt=h(dt);je(yt,{run:l,content:"Reset",icon:"↻"}),r(j,dt)});var ft=n(n(ut,!0));io(ft,{toggle_about_dialog:S}),r(pt,nt)};Ct(Q,{entries:rt,children:(pt,nt)=>{var ut=Ho(),ft=h(ut),j=$(ft);{var dt=u=>{var z=E(),q=h(z);xo(q,{act:N,get home_cats(){return o(p)},get adventure_cats(){return o(v)}}),r(u,z)};Ct(j,{entries:dt,children:(u,z)=>{var q=Do(),ot=$(q),Ot=n(n(ot,!0));Ut(Ot,95,()=>o(p),(Tt,at)=>F(F(Tt)).name,(Tt,at,st)=>{let gt=()=>F(F(at)).name,_t=()=>F(F(at)).icon,xt=()=>F(F(at)).position;var vt=Mo();Lt(1,vt,()=>Y,()=>({key:gt()})),Lt(2,vt,()=>U,()=>({key:gt()})),Ae(vt,()=>De,null);var wt=$(vt);{var Nt=It=>{var Et=E(),$t=h(Et);_e($t,{act:N,get name(){return gt()},get icon(){return _t()},get position(){return xt()}}),r(It,Et)};Ct(wt,{entries:Nt,children:(It,Et)=>{var $t=E(),Ft=h($t);Le(Ft,{get name(){return gt()},get icon(){return _t()}}),r(It,$t)},$$slots:{default:!0}})}r(Tt,vt)}),r(u,q)},$$slots:{default:!0}})}var yt=n(n(j,!0));{var dt=z=>{var q=E(),ot=h(q);Ao(ot,{act:N,get home_cats(){return o(p)},get adventure_cats(){return o(v)}}),r(z,q)};Ct(yt,{entries:dt,children:(z,q)=>{var ot=qo(),Ot=$(ot),Tt=n(n(Ot,!0));Ut(Tt,95,()=>o(v),(at,st)=>F(F(at)).name,(at,st,gt)=>{let _t=()=>F(F(st)).name,xt=()=>F(F(st)).icon,vt=()=>F(F(st)).position;var wt=Ro();Lt(1,wt,()=>Y,()=>({key:_t()})),Lt(2,wt,()=>U,()=>({key:_t()})),Ae(wt,()=>De,null);var Nt=$(wt);{var It=Et=>{var $t=E(),Ft=h($t);_e(Ft,{act:N,get name(){return _t()},get icon(){return xt()},get position(){return vt()}}),r(Et,$t)};Ct(Nt,{entries:It,children:(Et,$t)=>{var Ft=E(),Je=h(Ft);Le(Je,{get name(){return _t()},get icon(){return xt()}}),r(Et,Ft)},$$slots:{default:!0}})}r(at,wt)}),r(z,ot)},$$slots:{default:!0}})}var zt=n(n(ft,!0)),qt=$(zt);{var T=u=>{var z=Lo();r(u,z)};vn(qt,{summary:T,children:(u,z)=>{var q=E(),ot=h(q);Wt(ot,{content:No}),r(u,q)},$$slots:{default:!0}})}r(pt,ut)},$$slots:{default:!0}})}r(D,V)},$$slots:{default:!0}});var tt=n(n(H,!0));L(tt,()=>o(C),D=>{var X=E(),V=h(X);dn(V,{onclose:()=>x(C,!1),children:(W,Q)=>{var rt=Wo(),pt=$(rt),nt=n(n(pt,!0)),ut=n(n(nt,!0)),ft=n(n(ut,!0)),j=n(n(ft,!0)),dt=$(j),yt=n(n(dt,!0));hn(yt,{});var zt=n(n(yt,!0)),qt=n(n(zt,!0));pn(qt,{}),r(W,rt)},$$slots:{default:!0}}),r(D,X)}),r(i,K),ht()}var Vo=d("Hello world",1),Yo=d("🌞",1),Ko=d("Hello with an optional icon snippet",1),jo=d("Hello with an optional icon string",1),Go=d("<!> <!> <!>",1),Jo=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Qo=d("<!> <!>",1);function Zo(i){let t=O(!1),e=O(!1),s=O(!1);var a=Qo(),c=h(a);St(c,{text:"Basic usage",slug:"basic-usage"});var f=n(n(c,!0));ie(f,{scoped:!0,children:(k,b)=>{var g=E(),I=h(g);{var A=y=>{var m=Go(),w=h(m);Z(w,{run:()=>x(t,!o(t)),children:(l,C)=>{var S=Vo();r(l,S)},$$slots:{default:!0}});var p=n(n(w,!0));{var v=l=>{var C=Yo();r(l,C)};Z(p,{run:()=>x(e,!o(e)),icon:v,children:(l,C)=>{var S=Ko();r(l,S)},$$slots:{default:!0}})}var _=n(n(p,!0));Z(_,{run:()=>x(s,!o(s)),icon:"🌚",children:(l,C)=>{var S=jo();r(l,S)},$$slots:{default:!0}}),r(y,m)};Ct(I,{entries:A,children:(y,m)=>{var w=Jo(),p=$(w),v=n(n(p,!0)),_=R(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Wt(v,{get content(){return o(_)}});var l=n(n(v,!0)),C=$(l),S=$(C),N=n(n(l,!0)),U=$(N),Y=$(U),K=n(n(N,!0)),H=$(K),tt=$(H);G(()=>{bt(C,"color_g_5",o(t)),ct(S,`greeted = ${o(t)??""}`),bt(U,"color_e_5",o(e)),ct(Y,`greeted_icon_snippet = ${o(e)??""}`),bt(H,"color_d_5",o(s)),ct(tt,`greeted_icon_string = ${o(s)??""}`)}),r(y,w)},$$slots:{default:!0}})}r(k,g)},$$slots:{default:!0}}),r(i,a)}var tr=d("Toggle",1),er=d("<div>toggled</div>"),nr=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),or=d("<!> <!>",1);function rr(i){const t=new Ce;let e=O(!1);var s=E(),a=h(s);ie(a,{contextmenu:t,scoped:!0,children:(c,f)=>{var k=or(),b=h(k);St(b,{text:"Custom instance",slug:"custom-instance"});var g=n(n(b,!0));{var I=A=>{var y=E(),m=h(y);Z(m,{run:()=>x(e,!o(e)),children:(w,p)=>{var v=tr();r(w,v)},$$slots:{default:!0}}),r(A,y)};Ct(g,{entries:I,children:(A,y)=>{var m=nr(),w=$(m);Wt(w,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var p=n(n(w,!0));Wt(p,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var v=n(n(p,!0)),_=n(n(v,!0)),l=$(_);L(l,()=>o(e),C=>{var S=er();Lt(3,S,()=>sn),r(C,S)}),r(A,m)},$$slots:{default:!0}})}r(c,k)},$$slots:{default:!0}}),r(i,s)}var ar=d("Toggle something",1),sr=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button>selecting text</button> and then
					opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ir=d("<div><!></div> <!>",1);function cr(i){const t=new Ce;let e=O(!1),s;const a=()=>{const y=window.getSelection();if(!y)return;const m=document.createRange();m.selectNodeContents(s),y.removeAllRanges(),y.addRange(m)};let c=O("");const f="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",k=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,b=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,g=R(()=>o(c)===f||o(c)===k||o(c)===b);var I=E(),A=h(I);ie(A,{contextmenu:t,scoped:!0,children:(y,m)=>{var w=ir(),p=h(w),v=$(p);St(v,{text:"Select text",slug:"select-text"});var _=n(n(p,!0));{var l=C=>{var S=E(),N=h(S);Z(N,{run:()=>x(e,!o(e)),children:(U,Y)=>{var K=ar();r(U,K)},$$slots:{default:!0}}),r(C,S)};Ct(_,{entries:l,children:(C,S)=>{var N=sr(),U=$(N);$e(U,j=>s=j,()=>s);var Y=$(U),K=n(n(Y,!0)),H=n($(K));H.__click=a;var tt=n(n(U,!0)),D=$(tt);cn(D);var X=n(n(tt,!0)),V=n(n(X,!0)),W=$(V);ln(W);var Q=n(n(V,!0)),rt=$(Q);ce(rt,{href:"Web/HTML/Global_attributes/contenteditable"});var pt=n(n(Q,!0)),nt=n(n(pt,!0)),ut=n(n(nt,!0)),ft=n(n(ut,!0));G(()=>{bt(N,"color_g_5",o(g)),bt(H,"color_a",o(e)),bt(X,"color_g_5",o(g))}),Fe(D,()=>o(c),j=>x(c,j)),Fe(W,()=>o(c),j=>x(c,j)),Ne("innerText",nt,()=>o(c),j=>x(c,j)),Ne("innerText",ft,()=>o(c),j=>x(c,j)),r(C,N)},$$slots:{default:!0}})}G(()=>bt(p,"color_d_5",o(g))),r(y,w)},$$slots:{default:!0}}),r(i,I)}we(["click"]);var lr=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function ur(i){var t=E(),e=h(t);ie(e,{scoped:!0,children:(s,a)=>{var c=lr(),f=h(c);St(f,{text:"Default behaviors",slug:"default-behaviors"});var k=n(n(f,!0)),b=$(k);Wt(b,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),r(s,c)},$$slots:{default:!0}}),r(i,t)}var dr=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Rr(i,t){mt(t,!0);const s=rn("Contextmenu");var a=E(),c=h(a);on(c,{tome:s,children:(f,k)=>{var b=dr(),g=h(b),I=n(n(g,!0)),A=$(I);Zo(A);var y=n(n(I,!0)),m=$(y);ur(m);var w=n(n(y,!0)),p=$(w);rr(p);var v=n(n(w,!0)),_=$(v);cr(_);var l=n(n(v,!0)),C=$(l);Xo(C,{});var S=n(n(l,!0)),N=$(S);$n(N),r(f,b)},$$slots:{default:!0}}),r(i,a),ht()}export{Rr as component};
