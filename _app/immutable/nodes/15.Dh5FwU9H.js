var Ge=Object.defineProperty;var Ke=(i,t,e)=>t in i?Ge(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>(Ke(i,typeof t!="symbol"?t+"":t,e),e),de=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var T=(i,t,e)=>(de(i,t,"read from private field"),e?e.call(i):t.get(i)),H=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},_e=(i,t,e,r)=>(de(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var Ce=(i,t,e)=>(de(i,t,"access private method"),e);import{a,t as u,c as y,s as n,f as S,b as Q,D as kt,$ as Ct}from"../chunks/disclose-version.BHqvyKx-.js";import{i as Me,u as Re,r as Qe,a4 as Je,C as E,g as o,n as x,s as pe,f as fe,p as ut,t as Y,a as dt,d as M,O as Nt,Q as A,G as ke}from"../chunks/runtime.VNSPx__r.js";import{T as Ze}from"../chunks/Tome_Detail.B_QKVIdr.js";import{g as tn}from"../chunks/tome.BuafWkLb.js";import{M as oe}from"../chunks/Mdn_Link.CcRcFMdz.js";import{T as Tt}from"../chunks/Tome_Subheading.CdaVKxjQ.js";import{i as R}from"../chunks/if.Dmk6Jy1T.js";import{e as Ft}from"../chunks/each._S1x_LPC.js";import{t as zt,a as Te,c as en,s as nn}from"../chunks/index.DFAi61nl.js";import{C as Dt}from"../chunks/Code.DpsevpDf.js";import{d as ge,s as at,e as nt}from"../chunks/render.BZs1ZF8H.js";import{p as O}from"../chunks/proxy.CO2BnZf8.js";import{s as it,b as ae,r as on,e as sn}from"../chunks/attributes.B0eU8BeJ.js";import{s as se}from"../chunks/style.iv2mhl8q.js";import{b as xe}from"../chunks/this.DdQ07oED.js";import{p as K,s as Ie}from"../chunks/props.BOsT0QGW.js";import{a as rn,s as Pt,b as me,c as Ee,D as an}from"../chunks/Dialog.DrTNLJIy.js";import{o as Pe}from"../chunks/index-client.03nsUFad.js";import{a as ve}from"../chunks/string.ZJuK4sHN.js";import{t as vt}from"../chunks/class.CETg5euJ.js";import{P as cn}from"../chunks/Pending_Animation.Cr0DN68O.js";import{D as ln,b as Se}from"../chunks/Details.B8RJupBn.js";import{G as un}from"../chunks/Github_Logo.C_CQDR2h.js";import{C as dn,T as _n}from"../chunks/Theme_Input.BJI-uPM5.js";import{b as Ae}from"../chunks/input.FgKH7d7O.js";function mn(i,t,e){Me(()=>{var r=Re(()=>t(i,e==null?void 0:e())||{});if(e&&(r!=null&&r.update)){var s=!1;Qe(()=>{var c=e();Je(c),s&&r.update(c)}),s=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}var bt,St,Mt,ce,qe;const le=class le{constructor(t){H(this,ce);H(this,bt,new WeakMap);H(this,St,void 0);H(this,Mt,void 0);_e(this,Mt,t)}observe(t,e){var r=T(this,bt).get(t)||new Set;return r.add(e),T(this,bt).set(t,r),Ce(this,ce,qe).call(this).observe(t,T(this,Mt)),()=>{var s=T(this,bt).get(t);s.delete(e),s.size===0&&(T(this,bt).delete(t),T(this,St).unobserve(t))}}};bt=new WeakMap,St=new WeakMap,Mt=new WeakMap,ce=new WeakSet,qe=function(){return T(this,St)??_e(this,St,new ResizeObserver(t=>{for(var e of t){le.entries.set(e.target,e);for(var r of T(this,bt).get(e.target)||[])r(e)}}))},rt(le,"entries",new WeakMap);let he=le;var vn=new he({box:"border-box"});function Oe(i,t,e){var r=vn.observe(i,()=>e(i[t]));Me(()=>(Re(()=>e(i[t])),r))}var hn=u('<span class="font_mono">contextmenu</span> event',1),pn=u('<span class="font_mono">navigator.vibrate</span>'),fn=u('<span class="font_mono">navigator.vibrate</span>'),gn=u(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function xn(i){var t=gn(),e=S(t),r=y(e);Tt(r,{text:"Expected behaviors",slug:"expected-behaviors"});var s=n(n(r,!0)),c=n(n(s,!0)),l=n(y(c));oe(l,{path:"Web/API/Element/contextmenu_event",children:(U,j)=>{var q=hn();a(U,q)},$$slots:{default:!0}});var C=n(n(l,!0)),I=n(n(C,!0));oe(I,{path:"Web/API/Navigator/vibrate",children:(U,j)=>{var q=pn();a(U,q)},$$slots:{default:!0}});var $=n(n(c,!0)),g=n(n($,!0)),m=n(n(g,!0)),v=n(n(m,!0)),p=n(n(v,!0)),w=y(p),h=n(n(w,!0)),_=n(n(h,!0)),b=n(n(_,!0)),k=n(n(b,!0)),P=n(n(k,!0)),N=n(y(P));oe(N,{path:"Web/API/Navigator/vibrate",children:(U,j)=>{var q=fn();a(U,q)},$$slots:{default:!0}});var F=n(n(e,!0)),X=y(F);Tt(X,{text:"Motivation",slug:"motivation"}),a(i,t)}function bn(i){const t=i-1;return t*t*t+1}function yn(i){return--i*i*i*i*i+1}function ze(i,{from:t,to:e},r={}){const s=getComputedStyle(i),c=s.transform==="none"?"":s.transform,[l,C]=s.transformOrigin.split(" ").map(parseFloat),I=t.left+t.width*l/e.width-(e.left+l),$=t.top+t.height*C/e.height-(e.top+C),{delay:g=0,duration:m=p=>Math.sqrt(p)*120,easing:v=bn}=r;return{delay:g,duration:typeof m=="function"?m(Math.sqrt(I*I+$*$)):m,easing:v,css:(p,w)=>{const h=w*I,_=w*$,b=p+w*t.width/e.width,k=p+w*t.height/e.height;return`transform: ${c} translate(${h}px, ${_}px) scale(${b}, ${k});`}}}var Rt,qt;class Le{constructor(){H(this,Rt,E(0));H(this,qt,E(0))}get width(){return o(T(this,Rt))}set width(t){x(T(this,Rt),O(t))}get height(){return o(T(this,qt))}set height(t){x(T(this,qt),O(t))}}Rt=new WeakMap,qt=new WeakMap;var Lt,At,Ht,Ut,Wt;class wn{constructor(t,e){rt(this,"is_menu",!1);rt(this,"menu");H(this,Lt,E(!1));H(this,At,E());H(this,Ht,E(!1));H(this,Ut,E(null));H(this,Wt,E(null));this.menu=t,T(this,At).v=O(e)}get selected(){return o(T(this,Lt))}set selected(t){x(T(this,Lt),O(t))}get run(){return o(T(this,At))}set run(t){x(T(this,At),O(t))}get pending(){return o(T(this,Ht))}set pending(t){x(T(this,Ht),O(t))}get error_message(){return o(T(this,Ut))}set error_message(t){x(T(this,Ut),O(t))}get promise(){return o(T(this,Wt))}set promise(t){x(T(this,Wt),O(t))}}Lt=new WeakMap,At=new WeakMap,Ht=new WeakMap,Ut=new WeakMap,Wt=new WeakMap;var Bt,Vt;class $n{constructor(t,e){rt(this,"is_menu",!0);rt(this,"menu");rt(this,"depth");H(this,Bt,E(!1));H(this,Vt,E(O([])));this.menu=t,this.depth=e}get selected(){return o(T(this,Bt))}set selected(t){x(T(this,Bt),O(t))}get items(){return o(T(this,Vt))}set items(t){x(T(this,Vt),O(t))}}Bt=new WeakMap,Vt=new WeakMap;var Xt;class Cn{constructor(){rt(this,"is_menu",!0);rt(this,"menu",null);rt(this,"depth",1);H(this,Xt,E(O([])))}get items(){return o(T(this,Xt))}set items(t){x(T(this,Xt),O(t))}}Xt=new WeakMap;var Yt,jt,Gt,Kt,Qt,Jt,Zt;class be{constructor(t){rt(this,"layout");rt(this,"initial_layout");H(this,Yt,E(!1));H(this,jt,E(0));H(this,Gt,E(0));H(this,Kt,E(O([])));H(this,Qt,E());H(this,Jt,E(O(new Cn)));H(this,Zt,E(O([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new Le}get opened(){return o(T(this,Yt))}set opened(t){x(T(this,Yt),O(t))}get x(){return o(T(this,jt))}set x(t){x(T(this,jt),O(t))}get y(){return o(T(this,Gt))}set y(t){x(T(this,Gt),O(t))}get params(){return o(T(this,Kt))}set params(t){x(T(this,Kt),O(t))}get error(){return o(T(this,Qt))}set error(t){x(T(this,Qt),O(t))}get root_menu(){return o(T(this,Jt))}set root_menu(t){x(T(this,Jt),O(t))}get selections(){return o(T(this,Zt))}set selections(t){x(T(this,Zt),O(t))}open(t,e,r){this.selections.length=0,this.opened=!0,this.x=e,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(r){const s=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=s??"unknown error",this.error=s}if(rn(e)){t.pending=!0,t.error_message=null;const r=t.promise=e.then(s=>{if(r===t.promise){if(typeof(s==null?void 0:s.ok)=="boolean")if(s.ok)this.close();else{const c=typeof s.message=="string"?s.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close();return s}},s=>{if(r!==t.promise)return;const c=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=c??"unknown error",this.error=c}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=Fe()??this.root_menu,r=new wn(e,t);return e.items.push(r),Pe(()=>{e.items.length=0}),r}add_submenu(){const t=Fe()??this.root_menu,e=new $n(t,t.depth+1);return t.items.push(e),An(e),Pe(()=>{t.items.length=0}),e}}Yt=new WeakMap,jt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,Qt=new WeakMap,Jt=new WeakMap,Zt=new WeakMap;const ye="contextmenu",kn=`a,[data-${ye}]`,re=new Map;let Tn=0;const In=(i,t)=>{if(t==null)return;const e=Tn+++"";return i.dataset[ye]=e,re.set(e,t),{update:r=>{re.set(e,r)},destroy:()=>{re.delete(e)}}},En=17,Ne=(i,t,e,r)=>{const s=Pn(i);return s!=null&&s.length?(r.open(s,t,e),navigator.vibrate&&navigator.vibrate(En),!0):!1},Pn=i=>{var c;let t=null,e=i,r,s;for(;e=e==null?void 0:e.closest(kn);){if(r=e.dataset[ye]){if(t||(t=[]),s=re.get(r),s===void 0)continue;Array.isArray(s)?(t??(t=[])).push(...s):(t??(t=[])).push(s)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const l=(c=window.getSelection())==null?void 0:c.toString();l&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(l)}})}return t},He=Symbol(),Sn=i=>pe(He,i),we=()=>fe(He),Ue=Symbol(),An=i=>pe(Ue,i),Fe=()=>fe(Ue),We=Symbol(),Be=(i=new Le)=>(pe(We,i),i),On=()=>fe(We);var zn=(i,t)=>t.close(),Nn=u('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Ve(i,t){ut(t,!0);const e="🔗",r=K(t,"icon",3,e),s=we(),c=(b,k=location.host)=>{const P=ve(ve(b,"https://"),"http://");return P.startsWith(k+"/")?ve(P,k):P},l=M(()=>c(t.href)),C=M(()=>!(o(l)[0]==="."||o(l)[0]==="/"&&o(l)[1]!=="/")),I=M(()=>o(C)?"noreferrer":void 0);var $=Nn(),g=y($);g.__click=[zn,s];var m=y(g),v=y(m),p=y(v);R(p,()=>typeof r()=="string",b=>{var k=kt(b);Y(()=>at(k,r())),a(b,k)},b=>{var k=Q(),P=S(k);it(P,r,()=>e),a(b,k)});var w=n(n(v,!0)),h=y(w),_=y(h);R(_,()=>t.children,b=>{var k=Q(),P=S(k);it(P,()=>t.children),a(b,k)},b=>{var k=kt(b);Y(()=>at(k,o(l))),a(b,k)}),Y(()=>{ae(g,"href",t.href),ae(g,"rel",o(I))}),a(i,$),dt()}ge(["click"]);var Fn=u("⚠️",1),Dn=u('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function tt(i,t){ut(t,!0);const e=we(),r=e.add_entry(t.run);Nt(()=>{r.run=t.run});const s=M(()=>r),c=M(()=>{let{selected:_,pending:b,error_message:k}=o(s);return[_,b,k]}),l=M(()=>o(c)[0]),C=M(()=>o(c)[1]),I=M(()=>o(c)[2]);var $=Dn();$.__click=()=>{setTimeout(()=>e.activate(r))};var g=y($),m=y(g),v=y(m);R(v,()=>typeof t.icon=="string",_=>{var b=kt(_);Y(()=>at(b,t.icon)),a(_,b)},_=>{var b=Q(),k=S(b);R(k,()=>t.icon,P=>{var N=Q(),F=S(N);it(F,()=>t.icon),a(P,N)},null,!0),a(_,b)});var p=n(n(m,!0)),w=y(p);it(w,()=>t.children);var h=n(n(p,!0));R(h,()=>o(C),_=>{cn(_,{})},_=>{var b=Q(),k=S(b);R(k,()=>o(I),P=>{var N=Fn();a(P,N)},null,!0),a(_,b)}),Y(()=>{ae($,"title",o(I)?`Error: ${o(I)}`:void 0),vt($,"selected",o(l))}),nt("mouseenter",$,_=>{Pt(_),e.select(r)},!1),a(i,$),dt()}ge(["click"]);function Xe(i,t){tt(i,{get run(){return t.run},icon:r=>{var s=kt(r);Y(()=>at(s,t.icon)),a(r,s)},children:(r,s)=>{var c=kt(r);Y(()=>at(c,t.content)),a(r,c)},$$slots:{default:!0}})}var Mn=u('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Rn=u('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),qn=u('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Ln=u("<!> <!> <!>",1);function te(i,t){ut(t,!0);const e=(f,d=ke)=>{Ve(f,Ie(d))},r=(f,d=ke)=>{Xe(f,Ie(d))},s=K(t,"contextmenu",11,()=>new be),c=K(t,"longpress_move_tolerance",3,21),l=K(t,"longpress_duration",3,633),C=K(t,"bypass_with_tap_then_longpress",3,!0),I=K(t,"tap_then_longpress_duration",3,660),$=K(t,"tap_then_longpress_move_tolerance",3,7),g=K(t,"open_offset_x",11,()=>-2),m=K(t,"open_offset_y",11,()=>-2),v=K(t,"scoped",3,!1);Sn(s());let p=E(void 0);const w=M(s),h=M(()=>{let{layout:f,initial_layout:d}=o(w);return[f,d]}),_=M(()=>o(h)[0]),b=M(()=>o(h)[1]),k=M(()=>o(_)===o(b));let P=E(void 0),N=E(void 0);Nt(()=>{!o(k)&&o(P)!==void 0&&(o(_).width=o(P))}),Nt(()=>{!o(k)&&o(N)!==void 0&&(o(_).height=o(N))});const F=Be();Nt(()=>{if(o(p)){const f=o(p).getBoundingClientRect();F.width=f.width,F.height=f.height}});const X=M(()=>s().x+Math.min(0,o(_).width-(s().x+F.width))),U=M(()=>s().y+Math.min(0,o(_).height-(s().y+F.height)));let j=E(void 0),q=E(void 0),ot=E(void 0),D=E(void 0),W=E(void 0),B=E(void 0);const L=()=>{o(W)&&x(W,!1),o(D)!=null&&(clearTimeout(o(D)),x(D,null))},J=f=>{var z;if(o(B)){x(B,!1);return}if(o(W)){L(),Pt(f);return}const{target:d}=f;f.shiftKey||!(d instanceof HTMLElement||d instanceof SVGElement)||(z=o(p))!=null&&z.contains(d)||me(d)||Ee(d)||Ne(d,f.clientX+g(),f.clientY+m(),s())&&(Pt(f),L())},ct=f=>{o(W)&&x(W,!1);const{touches:d,target:z}=f;if(s().opened||d.length!==1||f.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||me(z)||Ee(z))return;const{clientX:G,clientY:gt}=d[0];if(C()){if(o(ot)!=null&&performance.now()-o(ot)<I()&&Math.hypot(G-o(j),gt-o(q))<$()){x(B,!0),x(ot,null);return}x(ot,O(performance.now()))}x(j,O(G)),x(q,O(gt)),o(D)!=null&&L(),x(D,O(setTimeout(()=>{x(W,!0),Ne(z,o(j)+g(),o(q)+m(),s())},l())))},_t=f=>{if(o(D)==null)return;const{touches:d}=f;if(d.length!==1)return;const{clientX:z,clientY:G}=d[0];Math.hypot(z-o(j),G-o(q))>c()&&(s().opened&&s().close(),L())},st=f=>{o(D)!=null&&(o(W)&&Pt(f),L())},V=f=>{o(p)&&!o(p).contains(f.target)&&s().close()},ft=new Map([["Escape",()=>s().close()],["ArrowLeft",()=>s().collapse_selected()],["ArrowRight",()=>s().expand_selected()],["ArrowDown",()=>s().select_next()],["PageDown",()=>s().select_next()],["ArrowUp",()=>s().select_previous()],["PageUp",()=>s().select_previous()],["Home",()=>s().select_first()],["End",()=>s().select_last()],[" ",()=>s().activate_selected()],["Enter",()=>s().activate_selected()]]),ht=f=>{const d=ft.get(f.key);!d||me(f.target)||(Pt(f),d())};var It=Ln();nt("contextmenu",Ct,function(...f){const d=v()?void 0:J;return d==null?void 0:d.apply(this,f)},!0,!1),nt("touchstart",Ct,function(...f){const d=v()?void 0:ct;return d==null?void 0:d.apply(this,f)},!0,!0),nt("touchmove",Ct,function(...f){const d=v()?void 0:_t;return d==null?void 0:d.apply(this,f)},!0,!0),nt("touchend",Ct,function(...f){const d=v()?void 0:st;return d==null?void 0:d.apply(this,f)},!0,!1),nt("touchcancel",Ct,function(...f){const d=v()?void 0:st;return d==null?void 0:d.apply(this,f)},!0,!1),nt("mousedown",Ct,function(...f){const d=s().opened?V:void 0;return d==null?void 0:d.apply(this,f)},!0,!0),nt("keydown",Ct,function(...f){const d=s().opened?ht:void 0;return d==null?void 0:d.apply(this,f)},!0,!1);var Et=S(It);R(Et,v,f=>{var d=Mn(),z=y(d);it(z,()=>t.children),nt("contextmenu",d,J,!0,!1),nt("touchstart",d,ct,!0,!0),nt("touchmove",d,_t,!0,!0),nt("touchend",d,st,!0,!1),nt("touchcancel",d,st,!0,!1),a(f,d)},f=>{var d=Q(),z=S(d);it(z,()=>t.children),a(f,d)});var ee=n(n(Et,!0));R(ee,()=>!o(k),f=>{var d=Rn();Oe(d,"clientHeight",z=>x(N,z)),Oe(d,"clientWidth",z=>x(P,z)),a(f,d)});var ne=n(n(ee,!0));R(ne,()=>s().opened,f=>{var d=qn();xe(d,z=>x(p,O(z)),()=>o(p)),Ft(d,76,()=>s().params,(z,G)=>A(z),(z,G,gt)=>{var mt=Q(),lt=S(mt);R(lt,()=>typeof A(G)=="function",yt=>{var Z=Q(),pt=S(Z);it(pt,()=>A(G)),a(yt,Z)},yt=>{var Z=Q(),pt=S(Z);R(pt,()=>A(G).snippet==="link",wt=>{e(wt,()=>A(G).props)},wt=>{var et=Q(),Ot=S(et);R(Ot,()=>A(G).snippet==="text",ue=>{r(ue,()=>A(G).props)},null,!0),a(wt,et)},!0),a(yt,Z)}),a(z,mt)}),Y(()=>se(d,"transform",`translate3d(${o(X)??""}px, ${o(U)??""}px, 0)`)),a(f,d)}),a(i,It),dt()}var Hn=u('<span class="display_contents"><!></span>');function xt(i,t){ut(t,!0);var e=Hn(),r=y(e);it(r,()=>t.children),mn(e,(s,c)=>In(s,c),()=>t.entries),a(i,e),dt()}var Un=u('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Wn=u('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function $e(i,t){ut(t,!0);const e=we(),r=e.add_submenu(),{layout:s}=e,c=M(()=>r.selected);let l=E(void 0);const C=On(),I=Be();let $=E(0),g=E(0);Nt(()=>{o(l)&&m(o(l),s,C)});const m=(N,F,X)=>{const{x:U,y:j,width:q,height:ot}=N.getBoundingClientRect();I.width=q,I.height=ot;const D=U-o($),W=j-o(g),B=D+q+X.width-F.width;if(B<=0)x($,O(X.width));else{const L=q-D;L<=0?x($,-q):L>B?x($,X.width-B):x($,L-q)}x(g,O(Math.min(0,F.height-(W+ot))))};var v=Wn(),p=y(v),w=y(p),h=y(w),_=y(h);R(_,()=>t.icon,N=>{var F=Q(),X=S(F);it(X,()=>t.icon),a(N,F)});var b=n(n(h,!0)),k=y(b);it(k,()=>t.children);var P=n(n(p,!0));R(P,()=>o(c),N=>{var F=Un();xe(F,U=>x(l,O(U)),()=>o(l));var X=y(F);it(X,()=>t.menu),Y(()=>{se(F,"transform",`translate3d(${o($)??""}px, ${o(g)??""}px, 0)`),se(F,"max-height",`${s.height??""}px`)}),a(N,F)}),Y(()=>{se(v,"--contextmenu_depth",r.depth),ae(p,"aria-expanded",o(c)),vt(p,"selected",o(c))}),nt("mouseenter",p,N=>{Pt(N),setTimeout(()=>e.select(r))},!1),a(i,v),dt()}var Bn=u("🏠",1),Vn=u("🌄",1),Xn=u("go home",1),Yn=u("go adventure",1),jn=u("🌄",1),Gn=u("🏠",1),Kn=u("do adventure",1),Qn=u("be home",1),Jn=u("<!> <!>",1);function ie(i,t){ut(t,!0);const e=K(t,"name",3,"Cat"),r=K(t,"icon",3,"😺");$e(i,{icon:l=>{var C=kt(l);Y(()=>at(C,r())),a(l,C)},menu:l=>{var C=Jn(),I=S(C);tt(I,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:m=>{var v=Q(),p=S(v);R(p,()=>t.position==="adventure",w=>{var h=Bn();a(w,h)},w=>{var h=Vn();a(w,h)}),a(m,v)},children:(m,v)=>{var p=Q(),w=S(p);R(w,()=>t.position==="adventure",h=>{var _=Xn();a(h,_)},h=>{var _=Yn();a(h,_)}),a(m,p)},$$slots:{default:!0}});var $=n(n(I,!0));tt($,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:m=>{var v=Q(),p=S(v);R(p,()=>t.position==="adventure",w=>{var h=jn();a(w,h)},w=>{var h=Gn();a(w,h)}),a(m,v)},children:(m,v)=>{var p=Q(),w=S(p);R(w,()=>t.position==="adventure",h=>{var _=Kn();a(h,_)},h=>{var _=Qn();a(h,_)}),a(m,p)},$$slots:{default:!0}}),a(l,C)},children:(l,C)=>{var I=kt(l);Y(()=>at(I,e())),a(l,I)},$$slots:{default:!0}}),dt()}var Zn=u("Source code",1),to=u("?",1),eo=u("About",1),no=u("<!> <!>",1);function oo(i,t){var e=no(),r=S(e);Ve(r,{href:"https://github.com/ryanatkn/fuz",icon:l=>{un(l,{size:"var(--icon_size_xs)"})},children:(l,C)=>{var I=Zn();a(l,I)},$$slots:{default:!0}});var s=n(n(r,!0));tt(s,{get run(){return t.toggle_about_dialog},icon:l=>{var C=to();a(l,C)},children:(l,C)=>{var I=eo();a(l,I)},$$slots:{default:!0}}),a(i,e)}const Ye=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const e=i[0];return e.icon+e.name};var so=u("🏠",1),ro=u("🐈‍⬛",1),ao=u("call",1),io=u("🏠",1),co=u("be",1),lo=u("🦋",1),uo=u("leave",1),_o=u("<!> <!>",1),mo=u("<!> <!> <!>",1),vo=u("home",1);function ho(i,t){ut(t,!0);const e=M(()=>Ye(t.adventure_cats));$e(i,{icon:c=>{var l=so();a(c,l)},menu:c=>{var l=mo(),C=S(l);R(C,()=>o(e),g=>{tt(g,{run:()=>t.act({type:"call_cats_home"}),icon:v=>{var p=ro();a(v,p)},children:(v,p)=>{var w=ao();a(v,w)},$$slots:{default:!0}})});var I=n(n(C,!0));Ft(I,69,()=>t.home_cats,(g,m)=>A(g).name,(g,m,v)=>{ie(g,{get name(){return A(m).name},get icon(){return A(m).icon},get position(){return A(m).position},get act(){return t.act}})});var $=n(n(I,!0));R($,()=>!o(e),g=>{var m=_o(),v=S(m);tt(v,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{var _=io();a(h,_)},children:(h,_)=>{var b=co();a(h,b)},$$slots:{default:!0}});var p=n(n(v,!0));tt(p,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{var _=lo();a(h,_)},children:(h,_)=>{var b=uo();a(h,b)},$$slots:{default:!0}}),a(g,m)}),a(c,l)},children:(c,l)=>{var C=vo();a(c,C)},$$slots:{default:!0}}),dt()}var po=u("🌄",1),fo=u("🦋",1),go=u("call",1),xo=u("🌄",1),bo=u("do",1),yo=u("🐈‍⬛",1),wo=u("leave",1),$o=u("<!> <!>",1),Co=u("<!> <!> <!>",1),ko=u("adventure",1);function To(i,t){ut(t,!0);const e=M(()=>Ye(t.home_cats));$e(i,{icon:c=>{var l=po();a(c,l)},menu:c=>{var l=Co(),C=S(l);R(C,()=>o(e),g=>{tt(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:v=>{var p=fo();a(v,p)},children:(v,p)=>{var w=go();a(v,w)},$$slots:{default:!0}})});var I=n(n(C,!0));Ft(I,69,()=>t.adventure_cats,(g,m)=>A(g).name,(g,m,v)=>{ie(g,{get name(){return A(m).name},get icon(){return A(m).icon},get position(){return A(m).position},get act(){return t.act}})});var $=n(n(I,!0));R($,()=>!o(e),g=>{var m=$o(),v=S(m);tt(v,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{var _=xo();a(h,_)},children:(h,_)=>{var b=bo();a(h,b)},$$slots:{default:!0}});var p=n(n(v,!0));tt(p,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{var _=yo();a(h,_)},children:(h,_)=>{var b=wo();a(h,b)},$$slots:{default:!0}}),a(g,m)}),a(c,l)},children:(c,l)=>{var C=ko();a(c,C)},$$slots:{default:!0}}),dt()}var Io=u('<span class="icon svelte-u0xdy"> </span>'),Eo=u('<span class="name svelte-u0xdy"><!> </span>'),Po=u('<span class="cat svelte-u0xdy"><!><!></span>');function De(i,t){ut(t,!0);const e=K(t,"name",3,"Cat"),r=K(t,"icon",3,"😺"),s=K(t,"show_name",3,!0),c=K(t,"show_icon",3,!0);var l=Po(),C=y(l);R(C,c,$=>{var g=Io(),m=y(g);Y(()=>at(m,r())),a($,g)});var I=n(C);R(I,s,$=>{var g=Eo(),m=y(g);R(m,()=>t.children,p=>{var w=Q(),h=S(w);it(h,()=>t.children),a(p,w)});var v=n(m,!0);Y(()=>at(v,e())),a($,g)}),Y(()=>vt(l,"has-icon",c())),a(i,l),dt()}const So=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	// TODO @multiple why is this import needed? \`Code\` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of \`ssr.external/noExternal/external\` with \`@ryanatkn/fuz_code\` and \`prismjs\`.
	import Prism from 'prismjs';
	Prism;
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
`;var Ao=u("<!> <!>",1),Oo=u('<div class="cat_wrapper svelte-1b1oync"><!></div>'),zo=u('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),No=u('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Fo=u('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Do=u("View example source",1),Mo=u("<section><!> <!></section> <section><!></section>",1),Ro=u("<!> <!>",1),qo=u('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Lo=u("<!> <!>",1);function Ho(i,t){ut(t,!0);const e="Alyssa",r="Ben",s="home";let c=E(s),l=E(s);const C=M(()=>o(c)===o(l)?"😺":"😾"),I=M(()=>o(c)===o(l)?"😸":"😿"),$=M(()=>({name:e,icon:o(C),position:o(c)})),g=M(()=>({name:r,icon:o(I),position:o(l)}));let m=E(!1);const v=(D,W)=>{const B=[],L=[];for(const J of D){const ct=J.position==="home"?B:L;W?ct.unshift(J):ct.push(J)}return{home_cats:B,adventure_cats:L}},p=M(()=>v([o($),o(g)],o(m))),w=M(()=>{let{home_cats:D,adventure_cats:W}=o(p);return[D,W]}),h=M(()=>o(w)[0]),_=M(()=>o(w)[1]),b=M(()=>o(c)!==s||o(l)!==s),k=()=>{x(c,s),x(l,s)};let P=E(!1);const N=()=>{x(P,!o(P))},F=D=>{switch(D.type){case"call_cats_adventure":{x(c,"adventure"),x(l,"adventure");break}case"call_cats_home":{x(c,"home"),x(l,"home");break}case"cat_go_adventure":{D.name===e?x(c,"adventure"):D.name===r&&x(l,"adventure");break}case"cat_go_home":{D.name===e?x(c,"home"):D.name===r&&x(l,"home");break}case"cat_be_or_do":{x(m,!o(m));break}}},[X,U]=en({fallback:(D,W)=>{const B=window.getComputedStyle(D),L=B.transform==="none"?"":B.transform;return{duration:1500,easing:yn,css:J=>`
					transform: ${L} scale(${J});
					opacity: ${J}
				`}}});var j=Lo(),q=S(j);te(q,{scoped:!0,children:(D,W)=>{var B=Ro(),L=S(B);Tt(L,{text:"Full example",slug:"full-example"});var J=n(n(L,!0));xt(J,{entries:_t=>{var st=Ao(),V=S(st);R(V,()=>o(b),ht=>{Xe(ht,{run:k,content:"Reset",icon:"↻"})});var ft=n(n(V,!0));oo(ft,{toggle_about_dialog:N}),a(_t,st)},children:(_t,st)=>{var V=Mo(),ft=S(V),ht=y(ft);xt(ht,{entries:f=>{ho(f,{act:F,get home_cats(){return o(h)},get adventure_cats(){return o(_)}})},children:(f,d)=>{var z=zo(),G=y(z),gt=n(n(G,!0));Ft(gt,95,()=>o(h),(mt,lt)=>A(A(mt)).name,(mt,lt,yt)=>{let Z=()=>A(A(lt)).name,pt=()=>A(A(lt)).icon,wt=()=>A(A(lt)).position;var et=Oo();zt(1,et,()=>U,()=>({key:Z()})),zt(2,et,()=>X,()=>({key:Z()})),Te(et,()=>ze,null);var Ot=y(et);xt(Ot,{entries:$t=>{ie($t,{act:F,get name(){return Z()},get icon(){return pt()},get position(){return wt()}})},children:($t,je)=>{De($t,{get name(){return Z()},get icon(){return pt()}})},$$slots:{default:!0}}),a(mt,et)}),a(f,z)},$$slots:{default:!0}});var It=n(n(ht,!0));xt(It,{entries:f=>{To(f,{act:F,get home_cats(){return o(h)},get adventure_cats(){return o(_)}})},children:(f,d)=>{var z=Fo(),G=y(z),gt=n(n(G,!0));Ft(gt,95,()=>o(_),(mt,lt)=>A(A(mt)).name,(mt,lt,yt)=>{let Z=()=>A(A(lt)).name,pt=()=>A(A(lt)).icon,wt=()=>A(A(lt)).position;var et=No();zt(1,et,()=>U,()=>({key:Z()})),zt(2,et,()=>X,()=>({key:Z()})),Te(et,()=>ze,null);var Ot=y(et);xt(Ot,{entries:$t=>{ie($t,{act:F,get name(){return Z()},get icon(){return pt()},get position(){return wt()}})},children:($t,je)=>{De($t,{get name(){return Z()},get icon(){return pt()}})},$$slots:{default:!0}}),a(mt,et)}),a(f,z)},$$slots:{default:!0}});var Et=n(n(ft,!0)),ee=y(Et);ln(ee,{summary:f=>{var d=Do();a(f,d)},children:(f,d)=>{Dt(f,{content:So})},$$slots:{default:!0}}),a(_t,V)},$$slots:{default:!0}}),a(D,B)},$$slots:{default:!0}});var ot=n(n(q,!0));R(ot,()=>o(P),D=>{an(D,{onclose:()=>x(P,!1),children:(W,B)=>{var L=qo(),J=y(L),ct=n(n(J,!0)),_t=n(n(ct,!0)),st=n(n(_t,!0)),V=n(n(st,!0)),ft=y(V),ht=n(n(ft,!0));dn(ht,{});var It=n(n(ht,!0)),Et=n(n(It,!0));_n(Et,{}),a(W,L)},$$slots:{default:!0}})}),a(i,j),dt()}var Uo=u("Hello world",1),Wo=u("🌞",1),Bo=u("Hello with an optional icon snippet",1),Vo=u("Hello with an optional icon string",1),Xo=u("<!> <!> <!>",1),Yo=u(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),jo=u("<!> <!>",1);function Go(i){let t=E(!1),e=E(!1),r=E(!1);var s=jo(),c=S(s);Tt(c,{text:"Basic usage",slug:"basic-usage"});var l=n(n(c,!0));te(l,{scoped:!0,children:(C,I)=>{xt(C,{entries:g=>{var m=Xo(),v=S(m);tt(v,{run:()=>x(t,!o(t)),children:(h,_)=>{var b=Uo();a(h,b)},$$slots:{default:!0}});var p=n(n(v,!0));tt(p,{run:()=>x(e,!o(e)),icon:_=>{var b=Wo();a(_,b)},children:(_,b)=>{var k=Bo();a(_,k)},$$slots:{default:!0}});var w=n(n(p,!0));tt(w,{run:()=>x(r,!o(r)),icon:"🌚",children:(h,_)=>{var b=Vo();a(h,b)},$$slots:{default:!0}}),a(g,m)},children:(g,m)=>{var v=Yo(),p=y(v),w=n(n(p,!0)),h=M(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${o(r)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Dt(w,{get content(){return o(h)}});var _=n(n(w,!0)),b=y(_),k=y(b),P=n(n(_,!0)),N=y(P),F=y(N),X=n(n(P,!0)),U=y(X),j=y(U);Y(()=>{vt(b,"color_g_5",o(t)),at(k,`greeted = ${o(t)??""}`),vt(N,"color_e_5",o(e)),at(F,`greeted_icon_snippet = ${o(e)??""}`),vt(U,"color_d_5",o(r)),at(j,`greeted_icon_string = ${o(r)??""}`)}),a(g,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(i,s)}var Ko=u("Toggle",1),Qo=u("<div>toggled</div>"),Jo=u(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),Zo=u("<!> <!>",1);function ts(i){const t=new be;let e=E(!1);te(i,{contextmenu:t,scoped:!0,children:(r,s)=>{var c=Zo(),l=S(c);Tt(l,{text:"Custom instance",slug:"custom-instance"});var C=n(n(l,!0));xt(C,{entries:$=>{tt($,{run:()=>x(e,!o(e)),children:(g,m)=>{var v=Ko();a(g,v)},$$slots:{default:!0}})},children:($,g)=>{var m=Jo(),v=y(m);Dt(v,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var p=n(n(v,!0));Dt(p,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var w=n(n(p,!0)),h=n(n(w,!0)),_=y(h);R(_,()=>o(e),b=>{var k=Qo();zt(3,k,()=>nn),a(b,k)}),a($,m)},$$slots:{default:!0}}),a(r,c)},$$slots:{default:!0}})}var es=u("Toggle something",1),ns=u(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),os=u("<div><!></div> <!>",1);function ss(i){const t=new be;let e=E(!1),r;const s=()=>{const g=window.getSelection();if(!g)return;const m=document.createRange();m.selectNodeContents(r),g.removeAllRanges(),g.addRange(m)};let c=E("");const l="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",C=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,I=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,$=M(()=>o(c)===l||o(c)===C||o(c)===I);te(i,{contextmenu:t,scoped:!0,children:(g,m)=>{var v=os(),p=S(v),w=y(p);Tt(w,{text:"Select text",slug:"select-text"});var h=n(n(p,!0));xt(h,{entries:b=>{tt(b,{run:()=>x(e,!o(e)),children:(k,P)=>{var N=es();a(k,N)},$$slots:{default:!0}})},children:(b,k)=>{var P=ns(),N=y(P);xe(N,V=>r=V,()=>r);var F=y(N),X=n(n(F,!0)),U=n(y(X));U.__click=s;var j=n(n(N,!0)),q=y(j);on(q);var ot=n(n(j,!0)),D=n(n(ot,!0)),W=y(D);sn(W);var B=n(n(D,!0)),L=y(B);oe(L,{path:"Web/HTML/Global_attributes/contenteditable"});var J=n(n(B,!0)),ct=n(n(J,!0)),_t=n(n(ct,!0)),st=n(n(_t,!0));Y(()=>{vt(P,"color_g_5",o($)),vt(U,"color_a",o(e)),vt(ot,"color_g_5",o($))}),Ae(q,()=>o(c),V=>x(c,V)),Ae(W,()=>o(c),V=>x(c,V)),Se("innerText",ct,()=>o(c),V=>x(c,V)),Se("innerText",st,()=>o(c),V=>x(c,V)),a(b,P)},$$slots:{default:!0}}),Y(()=>vt(p,"color_d_5",o($))),a(g,v)},$$slots:{default:!0}})}ge(["click"]);var rs=u(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function as(i){te(i,{scoped:!0,children:(t,e)=>{var r=rs(),s=S(r);Tt(s,{text:"Default behaviors",slug:"default-behaviors"});var c=n(n(s,!0)),l=y(c);Dt(l,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),a(t,r)},$$slots:{default:!0}})}var is=u("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Ns(i,t){ut(t,!0);const r=tn("Contextmenu");Ze(i,{tome:r,children:(s,c)=>{var l=is(),C=S(l),I=n(n(C,!0)),$=y(I);Go($);var g=n(n(I,!0)),m=y(g);as(m);var v=n(n(g,!0)),p=y(v);ts(p);var w=n(n(v,!0)),h=y(w);ss(h);var _=n(n(w,!0)),b=y(_);Ho(b,{});var k=n(n(_,!0)),P=y(k);xn(P),a(s,l)},$$slots:{default:!0}}),dt()}export{Ns as component};
