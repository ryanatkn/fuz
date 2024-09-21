var je=Object.defineProperty;var Ge=(s,t,e)=>t in s?je(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var ut=(s,t,e)=>(Ge(s,typeof t!="symbol"?t+"":t,e),e),_e=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var I=(s,t,e)=>(_e(s,t,"read from private field"),e?e.call(s):t.get(s)),W=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},me=(s,t,e,r)=>(_e(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e);var ke=(s,t,e)=>(_e(s,t,"access private method"),e);import{a,t as P,l as fe,c as it,g as S,p as De}from"../chunks/disclose-version.D7hgbcr2.js";import{u as Ze,v as Je,f as N,s as h,c as $,ai as A,r as y,aj as z,g as n,M as v,l as ge,m as xe,p as vt,t as G,a as ht,d as U,ac as Nt,at as Ct,ah as ie}from"../chunks/runtime.CyUAaF6i.js";import{T as Qe}from"../chunks/Tome_Content.BJ-h9GCC.js";import{g as tn}from"../chunks/tome.BuYQJ7Vl.js";import{M as se}from"../chunks/Mdn_Link.DhGd4x3I.js";import{T as kt,a as Tt}from"../chunks/Tome_Section_Header.JnQ5pBGj.js";import{p as M,i as L}from"../chunks/if.Df50zaIY.js";import{e as Ft}from"../chunks/each.DbJxtm9_.js";import{t as Ot,a as Te,c as en,s as nn}from"../chunks/index.6MYwTKdS.js";import{C as Mt}from"../chunks/Code.eZyX9KYg.js";import{s as dt,c as ce,r as on,e as sn}from"../chunks/attributes.CECX38sg.js";import{a as ct}from"../chunks/intersect.BMTFiLJI.js";import{s as ae}from"../chunks/style.Bk7ejTAN.js";import{b as be}from"../chunks/this.CmLMfmHa.js";import{p as et,s as Ie}from"../chunks/props.jEArgUtm.js";import{a as an,s as Pt,b as ve,c as Pe,D as rn}from"../chunks/Dialog.Bx3Y2DKM.js";import{o as Ee}from"../chunks/index-client.DwVNPtAC.js";import{s as _t}from"../chunks/render.CCgqK4Xj.js";import{a as he}from"../chunks/string.ZJuK4sHN.js";import{t as ft}from"../chunks/class.BkFrtDpl.js";import{P as cn}from"../chunks/Pending_Animation.BF1LmoYl.js";import{D as ln,b as Se}from"../chunks/Details.QqzkT8A0.js";import{G as un}from"../chunks/Github_Logo.BiEX2Rz4.js";import{C as dn,T as _n}from"../chunks/Theme_Input.CXVa_s_C.js";import{b as ze}from"../chunks/input.Cz466tdp.js";var yt,Et,Dt,ue,Re;const de=class de{constructor(t){W(this,ue);W(this,yt,new WeakMap);W(this,Et,void 0);W(this,Dt,void 0);me(this,Dt,t)}observe(t,e){var r=I(this,yt).get(t)||new Set;return r.add(e),I(this,yt).set(t,r),ke(this,ue,Re).call(this).observe(t,I(this,Dt)),()=>{var o=I(this,yt).get(t);o.delete(e),o.size===0&&(I(this,yt).delete(t),I(this,Et).unobserve(t))}}};yt=new WeakMap,Et=new WeakMap,Dt=new WeakMap,ue=new WeakSet,Re=function(){return I(this,Et)??me(this,Et,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var r of I(this,yt).get(e.target)||[])r(e)}}))},ut(de,"entries",new WeakMap);let pe=de;var mn=new pe({box:"border-box"});function Ae(s,t,e){var r=mn.observe(s,()=>e(s[t]));Ze(()=>(Je(()=>e(s[t])),r))}var vn=P('<span class="font_mono">contextmenu</span> event',1),hn=P('<span class="font_mono">navigator.vibrate</span>'),pn=P('<span class="font_mono">navigator.vibrate</span>'),fn=P(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			opened it</li> <li>gives haptic feedback on open with <!> (currently broken, may remain so due to the iOS longpress workaround)</li></ul>`,1),gn=P(`<!> <p>Fuz takes two things very seriously, in no particular order:</p> <ol><li>giving users a powerful and customizable UX</li> <li>aligning with the web platform and not breaking its standard behaviors</li></ol> <p>For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),xn=P("<!> <!>",1);function bn(s){var t=xn(),e=N(t);kt(e,{children:(o,u)=>{var i=fn(),p=N(i);Tt(p,{text:"Expected behaviors"});var w=h(p,4),T=h($(w));se(T,{path:"Web/API/Element/contextmenu_event",children:(c,l)=>{var b=vn();A(),a(c,b)},$$slots:{default:!0}});var g=h(T,4);se(g,{path:"Web/API/Navigator/vibrate",children:(c,l)=>{var b=hn();a(c,b)},$$slots:{default:!0}}),A(),y(w);var d=h(w,10),_=h($(d),10),f=h($(_));se(f,{path:"Web/API/Navigator/vibrate",children:(c,l)=>{var b=pn();a(c,b)},$$slots:{default:!0}}),A(),y(_),y(d),a(o,i)},$$slots:{default:!0}});var r=h(e,2);kt(r,{children:(o,u)=>{var i=gn(),p=N(i);Tt(p,{text:"Motivation"}),A(14),a(o,i)},$$slots:{default:!0}}),a(s,t)}function yn(s){const t=s-1;return t*t*t+1}function wn(s){return--s*s*s*s*s+1}function Oe(s,{from:t,to:e},r={}){var o=getComputedStyle(s),u=$n(s),i=o.transform==="none"?"":o.transform,[p,w]=o.transformOrigin.split(" ").map(parseFloat),T=t.width/e.width,g=t.height/e.height,d=(t.left+T*p-(e.left+p))/u,_=(t.top+g*w-(e.top+w))/u,{delay:f=0,duration:c=b=>Math.sqrt(b)*120,easing:l=yn}=r;return{delay:f,duration:typeof c=="function"?c(Math.sqrt(d*d+_*_)):c,easing:l,css:(b,k)=>{var C=k*d,O=k*_,H=b+k*T,D=b+k*g;return`transform: ${i} scale(${H}, ${D}) translate(${C}px, ${O}px);`}}}function $n(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentNode;return e}var Rt,qt;class qe{constructor(){W(this,Rt,z(0));W(this,qt,z(0))}get width(){return n(I(this,Rt))}set width(t){v(I(this,Rt),M(t))}get height(){return n(I(this,qt))}set height(t){v(I(this,qt),M(t))}}Rt=new WeakMap,qt=new WeakMap;var Ht,Lt,Ut,Wt,Bt;class Cn{constructor(t,e){ut(this,"is_menu",!1);ut(this,"menu");W(this,Ht,z(!1));W(this,Lt,z());W(this,Ut,z(!1));W(this,Wt,z(null));W(this,Bt,z(null));this.menu=t,this.run=e}get selected(){return n(I(this,Ht))}set selected(t){v(I(this,Ht),M(t))}get run(){return n(I(this,Lt))}set run(t){v(I(this,Lt),M(t))}get pending(){return n(I(this,Ut))}set pending(t){v(I(this,Ut),M(t))}get error_message(){return n(I(this,Wt))}set error_message(t){v(I(this,Wt),M(t))}get promise(){return n(I(this,Bt))}set promise(t){v(I(this,Bt),M(t))}}Ht=new WeakMap,Lt=new WeakMap,Ut=new WeakMap,Wt=new WeakMap,Bt=new WeakMap;var Vt,Xt;class kn{constructor(t,e){ut(this,"is_menu",!0);ut(this,"menu");ut(this,"depth");W(this,Vt,z(!1));W(this,Xt,z(M([])));this.menu=t,this.depth=e}get selected(){return n(I(this,Vt))}set selected(t){v(I(this,Vt),M(t))}get items(){return n(I(this,Xt))}set items(t){v(I(this,Xt),M(t))}}Vt=new WeakMap,Xt=new WeakMap;var Yt;class Tn{constructor(){ut(this,"is_menu",!0);ut(this,"menu",null);ut(this,"depth",1);W(this,Yt,z(M([])))}get items(){return n(I(this,Yt))}set items(t){v(I(this,Yt),M(t))}}Yt=new WeakMap;var Kt,jt,Gt,Zt,Jt,Qt,te;class ye{constructor(t){ut(this,"layout");ut(this,"initial_layout");W(this,Kt,z(!1));W(this,jt,z(0));W(this,Gt,z(0));W(this,Zt,z(M([])));W(this,Jt,z());W(this,Qt,z(M(new Tn)));W(this,te,z(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new qe}get opened(){return n(I(this,Kt))}set opened(t){v(I(this,Kt),M(t))}get x(){return n(I(this,jt))}set x(t){v(I(this,jt),M(t))}get y(){return n(I(this,Gt))}set y(t){v(I(this,Gt),M(t))}get params(){return n(I(this,Zt))}set params(t){v(I(this,Zt),M(t))}get error(){return n(I(this,Jt))}set error(t){v(I(this,Jt),M(t))}get root_menu(){return n(I(this,Qt))}set root_menu(t){v(I(this,Qt),M(t))}get selections(){return n(I(this,te))}set selections(t){v(I(this,te),M(t))}open(t,e,r){this.selections.length=0,this.opened=!0,this.x=e,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(r){const o=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=o??"unknown error",this.error=o}if(an(e)){t.pending=!0,t.error_message=null;const r=t.promise=e.then(o=>{if(r===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const u=typeof o.message=="string"?o.message:void 0;t.error_message=u??"unknown error",this.error=u}else this.close();return o}},o=>{if(r!==t.promise)return;const u=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=u??"unknown error",this.error=u}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=Fe()??this.root_menu,r=new Cn(e,t);return e.items.push(r),Ee(()=>{e.items.length=0}),r}add_submenu(){const t=Fe()??this.root_menu,e=new kn(t,t.depth+1);return t.items.push(e),On(e),Ee(()=>{t.items.length=0}),e}}Kt=new WeakMap,jt=new WeakMap,Gt=new WeakMap,Zt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,te=new WeakMap;const we="contextmenu",In=`a,[data-${we}]`,re=new Map;let Pn=0;const En=(s,t)=>{if(t==null)return;const e=(Pn+=1)-1+"";return s.dataset[we]=e,re.set(e,t),{update:r=>{re.set(e,r)},destroy:()=>{re.delete(e)}}},Sn=17,Ne=(s,t,e,r)=>{const o=zn(s);return o!=null&&o.length?(r.open(o,t,e),navigator.vibrate&&navigator.vibrate(Sn),!0):!1},zn=s=>{var u;let t=null,e=s,r,o;for(;e=e==null?void 0:e.closest(In);){if(r=e.dataset[we]){if(t??(t=[]),o=re.get(r),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(u=window.getSelection())==null?void 0:u.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},He=Symbol(),An=s=>ge(He,s),$e=()=>xe(He),Le=Symbol(),On=s=>ge(Le,s),Fe=()=>xe(Le),Ue=Symbol(),We=(s=new qe)=>(ge(Ue,s),s),Nn=()=>xe(Ue);var Fn=(s,t)=>t.close(),Mn=P('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Be(s,t){vt(t,!0);const e="🔗",r=et(t,"icon",3,e),o=$e(),u=(k,C=location.host)=>{const O=he(he(k,"https://"),"http://");return O.startsWith(C+"/")?he(O,C):O},i=U(()=>u(t.href)),p=U(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),w=U(()=>n(p)?"noreferrer":void 0);var T=Mn(),g=$(T);g.__click=[Fn,o];var d=$(g),_=$(d),f=$(_);L(f,()=>typeof r()=="string",k=>{var C=S();G(()=>_t(C,r())),a(k,C)},k=>{var C=it(),O=N(C);dt(O,r,()=>e),a(k,C)}),y(_);var c=h(_,2),l=$(c),b=$(l);L(b,()=>t.children,k=>{var C=it(),O=N(C);dt(O,()=>t.children),a(k,C)},k=>{var C=S();G(()=>_t(C,n(i))),a(k,C)}),y(l),y(c),y(d),y(g),y(T),G(()=>{ce(g,"href",t.href),ce(g,"rel",n(w))}),a(s,T),ht()}fe(["click"]);var Dn=P('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(s,t){vt(t,!0);const e=$e(),r=e.add_entry(t.run);Nt(()=>{r.run=t.run});const o=U(()=>r.selected),u=U(()=>r.pending),i=U(()=>r.error_message);var p=Dn();p.__click=()=>{setTimeout(()=>e.activate(r))};var w=$(p),T=$(w),g=$(T);L(g,()=>typeof t.icon=="string",c=>{var l=S();G(()=>_t(l,t.icon)),a(c,l)},c=>{var l=it(),b=N(l);L(b,()=>t.icon,k=>{var C=it(),O=N(C);dt(O,()=>t.icon),a(k,C)},null,!0),a(c,l)}),y(T);var d=h(T,2),_=$(d);dt(_,()=>t.children),y(d);var f=h(d,2);L(f,()=>n(u),c=>{cn(c,{})},c=>{var l=it(),b=N(l);L(b,()=>n(i),k=>{var C=S("⚠️");a(k,C)},null,!0),a(c,l)}),y(w),y(p),G(()=>{ce(p,"title",n(i)?`Error: ${n(i)}`:void 0),ft(p,"selected",n(o))}),De("mouseenter",p,c=>{Pt(c),e.select(r)}),a(s,p),ht()}fe(["click"]);function Ve(s,t){at(s,{get run(){return t.run},icon:r=>{A();var o=S();G(()=>_t(o,t.icon)),a(r,o)},children:(r,o)=>{A();var u=S();G(()=>_t(u,t.content)),a(r,u)},$$slots:{default:!0}})}var Rn=P('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),qn=P('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Hn=P('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Ln=P("<!> <!> <!>",1);function ee(s,t){vt(t,!0);const e=(x,m=ie)=>{Be(x,Ie(m))},r=(x,m=ie)=>{Ve(x,Ie(m))},o=et(t,"contextmenu",19,()=>new ye),u=et(t,"longpress_move_tolerance",3,21),i=et(t,"longpress_duration",3,633),p=et(t,"bypass_with_tap_then_longpress",3,!0),w=et(t,"tap_then_longpress_duration",3,660),T=et(t,"tap_then_longpress_move_tolerance",3,7),g=et(t,"open_offset_x",19,()=>-2),d=et(t,"open_offset_y",19,()=>-2),_=et(t,"scoped",3,!1);An(o());let f=z(void 0);const c=U(()=>o().layout),l=U(()=>o().initial_layout),b=U(()=>n(c)===n(l));let k=z(void 0),C=z(void 0);Nt(()=>{!n(b)&&n(k)!==void 0&&(n(c).width=n(k))}),Nt(()=>{!n(b)&&n(C)!==void 0&&(n(c).height=n(C))});const O=We();Nt(()=>{if(n(f)){const x=n(f).getBoundingClientRect();O.width=x.width,O.height=x.height}});const H=U(()=>o().x+Math.min(0,n(c).width-(o().x+O.width))),D=U(()=>o().y+Math.min(0,n(c).height-(o().y+O.height)));let K=z(void 0),Z=z(void 0),J=z(void 0),V=z(void 0),R=z(void 0),Q=z(void 0);const Y=()=>{n(R)&&v(R,!1),n(V)!=null&&(clearTimeout(n(V)),v(V,null))},X=x=>{var E;if(n(Q)){v(Q,!1);return}if(n(R)){Y(),Pt(x);return}const{target:m}=x;x.shiftKey||!(m instanceof HTMLElement||m instanceof SVGElement)||(E=n(f))!=null&&E.contains(m)||ve(m)||Pe(m)||Ne(m,x.clientX+g(),x.clientY+d(),o())&&(Pt(x),Y())},B=x=>{n(R)&&v(R,!1);const{touches:m,target:E}=x;if(o().opened||m.length!==1||x.shiftKey||!(E instanceof HTMLElement||E instanceof SVGElement)||ve(E)||Pe(E))return;const{clientX:F,clientY:q}=m[0];if(p()){if(n(J)!=null&&performance.now()-n(J)<w()&&Math.hypot(F-n(K),q-n(Z))<T()){v(Q,!0),v(J,null);return}v(J,M(performance.now()))}v(K,M(F)),v(Z,M(q)),n(V)!=null&&Y(),v(V,M(setTimeout(()=>{v(R,!0),Ne(E,n(K)+g(),n(Z)+d(),o())},i())))},rt=x=>{if(n(V)==null)return;const{touches:m}=x;if(m.length!==1)return;const{clientX:E,clientY:F}=m[0];Math.hypot(E-n(K),F-n(Z))>u()&&(o().opened&&o().close(),Y())},pt=x=>{n(V)!=null&&(n(R)&&Pt(x),Y())},lt=x=>{n(f)&&!n(f).contains(x.target)&&o().close()},St=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),zt=x=>{const m=St.get(x.key);!m||ve(x.target)||(Pt(x),m())},j=(x,m)=>{let E=null,F=null;const q=tt=>{E&&x.removeEventListener(F,E),tt.disabled||(x.addEventListener(tt.event,tt.cb,{capture:!0,passive:tt.passive}),E=tt.cb,F=tt.event)};return q(m),{update:tt=>{q(tt)},destroy:()=>{E&&x.removeEventListener(F,E)}}};var xt=Ln(),wt=N(xt);L(wt,_,x=>{var m=Rn(),E=$(m);dt(E,()=>t.children),y(m),ct(m,(F,q)=>j(F,q),()=>({event:"contextmenu",passive:!1,cb:X})),ct(m,(F,q)=>j(F,q),()=>({event:"touchstart",passive:!0,cb:B})),ct(m,(F,q)=>j(F,q),()=>({event:"touchmove",passive:!0,cb:rt})),ct(m,(F,q)=>j(F,q),()=>({event:"touchend",passive:!1,cb:pt})),ct(m,(F,q)=>j(F,q),()=>({event:"touchcancel",passive:!1,cb:pt})),a(x,m)},x=>{var m=it(),E=N(m);dt(E,()=>t.children),a(x,m)});var ne=h(wt,2);L(ne,()=>!n(b),x=>{var m=qn();Ae(m,"clientHeight",E=>v(C,E)),Ae(m,"clientWidth",E=>v(k,E)),a(x,m)});var oe=h(ne,2);L(oe,()=>o().opened,x=>{var m=Hn();be(m,E=>v(f,E),()=>n(f)),Ft(m,20,()=>o().params,E=>E,(E,F)=>{var q=it(),tt=N(q);L(tt,()=>typeof F=="function",mt=>{var nt=it(),ot=N(nt);dt(ot,()=>F),a(mt,nt)},mt=>{var nt=it(),ot=N(nt);L(ot,()=>F.snippet==="link",gt=>{e(gt,()=>F.props)},gt=>{var It=it(),st=N(It);L(st,()=>F.snippet==="text",At=>{r(At,()=>F.props)},null,!0),a(gt,It)},!0),a(mt,nt)}),a(E,q)}),y(m),G(()=>ae(m,"transform",`translate3d(${n(H)??""}px, ${n(D)??""}px, 0)`)),a(x,m)}),ct(Ct,(x,m)=>j(x,m),()=>({event:"contextmenu",passive:!1,cb:X,disabled:_()})),ct(Ct,(x,m)=>j(x,m),()=>({event:"touchstart",passive:!0,cb:B,disabled:_()})),ct(Ct,(x,m)=>j(x,m),()=>({event:"touchmove",passive:!0,cb:rt,disabled:_()})),ct(Ct,(x,m)=>j(x,m),()=>({event:"touchend",passive:!1,cb:pt,disabled:_()})),ct(Ct,(x,m)=>j(x,m),()=>({event:"touchcancel",passive:!1,cb:pt,disabled:_()})),ct(Ct,(x,m)=>j(x,m),()=>({event:"mousedown",passive:!0,cb:lt,disabled:!o().opened})),ct(Ct,(x,m)=>j(x,m),()=>({event:"keydown",passive:!1,cb:zt,disabled:!o().opened})),a(s,xt),ht()}var Un=P('<span class="display_contents"><!></span>');function bt(s,t){vt(t,!0);var e=Un(),r=$(e);dt(r,()=>t.children),y(e),ct(e,(o,u)=>En(o,u),()=>t.entries),a(s,e),ht()}var Wn=P('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=P('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function Ce(s,t){vt(t,!0);const e=$e(),r=e.add_submenu(),{layout:o}=e,u=U(()=>r.selected);let i=z(void 0);const p=Nn(),w=We();let T=z(0),g=z(0);Nt(()=>{n(i)&&d(n(i),o,p)});const d=(H,D,K)=>{const{x:Z,y:J,width:V,height:R}=H.getBoundingClientRect();w.width=V,w.height=R;const Q=Z-n(T),Y=J-n(g),X=Q+V+K.width-D.width;if(X<=0)v(T,M(K.width));else{const B=V-Q;B<=0?v(T,-V):B>X?v(T,K.width-X):v(T,B-V)}v(g,M(Math.min(0,D.height-(Y+R))))};var _=Bn(),f=$(_),c=$(f),l=$(c),b=$(l);dt(b,()=>t.icon??ie),y(l);var k=h(l,2),C=$(k);dt(C,()=>t.children),y(k),y(c),A(2),y(f);var O=h(f,2);L(O,()=>n(u),H=>{var D=Wn();be(D,Z=>v(i,Z),()=>n(i));var K=$(D);dt(K,()=>t.menu),y(D),G(()=>{ae(D,"transform",`translate3d(${n(T)??""}px, ${n(g)??""}px, 0)`),ae(D,"max-height",`${o.height??""}px`)}),a(H,D)}),y(_),G(()=>{ae(_,"--contextmenu_depth",r.depth),ce(f,"aria-expanded",n(u)),ft(f,"selected",n(u))}),De("mouseenter",f,H=>{Pt(H),setTimeout(()=>e.select(r))}),a(s,_),ht()}var Vn=P("<!> <!>",1);function le(s,t){vt(t,!0);const e=et(t,"name",3,"Cat"),r=et(t,"icon",3,"😺");Ce(s,{icon:i=>{A();var p=S();G(()=>_t(p,r())),a(i,p)},menu:i=>{var p=Vn(),w=N(p);at(w,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:d=>{var _=it(),f=N(_);L(f,()=>t.position==="adventure",c=>{var l=S("🏠");a(c,l)},c=>{var l=S("🌄");a(c,l)}),a(d,_)},children:(d,_)=>{var f=it(),c=N(f);L(c,()=>t.position==="adventure",l=>{var b=S("go home");a(l,b)},l=>{var b=S("go adventure");a(l,b)}),a(d,f)},$$slots:{default:!0}});var T=h(w,2);at(T,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:d=>{var _=it(),f=N(_);L(f,()=>t.position==="adventure",c=>{var l=S("🌄");a(c,l)},c=>{var l=S("🏠");a(c,l)}),a(d,_)},children:(d,_)=>{var f=it(),c=N(f);L(c,()=>t.position==="adventure",l=>{var b=S("do adventure");a(l,b)},l=>{var b=S("be home");a(l,b)}),a(d,f)},$$slots:{default:!0}}),a(i,p)},children:(i,p)=>{A();var w=S();G(()=>_t(w,e())),a(i,w)},$$slots:{default:!0}}),ht()}var Xn=P("<!> <!>",1);function Yn(s,t){var e=Xn(),r=N(e);Be(r,{href:"https://github.com/ryanatkn/fuz",icon:i=>{un(i,{size:"var(--icon_size_xs)"})},children:(i,p)=>{A();var w=S("Source code");a(i,w)},$$slots:{default:!0}});var o=h(r,2);at(o,{get run(){return t.toggle_about_dialog},icon:i=>{A();var p=S("?");a(i,p)},children:(i,p)=>{A();var w=S("About");a(i,w)},$$slots:{default:!0}}),a(s,e)}const Xe=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const e=s[0];return e.icon+e.name};var Kn=P("<!> <!>",1),jn=P("<!> <!> <!>",1);function Gn(s,t){vt(t,!0);const e=U(()=>Xe(t.adventure_cats));Ce(s,{icon:u=>{A();var i=S("🏠");a(u,i)},menu:u=>{var i=jn(),p=N(i);L(p,()=>n(e),g=>{at(g,{run:()=>t.act({type:"call_cats_home"}),icon:_=>{A();var f=S("🐈‍⬛");a(_,f)},children:(_,f)=>{A();var c=S("call");a(_,c)},$$slots:{default:!0}})});var w=h(p,2);Ft(w,17,()=>t.home_cats,g=>g.name,(g,d)=>{le(g,{get name(){return n(d).name},get icon(){return n(d).icon},get position(){return n(d).position},get act(){return t.act}})});var T=h(w,2);L(T,()=>!n(e),g=>{var d=Kn(),_=N(d);at(_,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:l=>{A();var b=S("🏠");a(l,b)},children:(l,b)=>{A();var k=S("be");a(l,k)},$$slots:{default:!0}});var f=h(_,2);at(f,{run:()=>t.act({type:"call_cats_adventure"}),icon:l=>{A();var b=S("🦋");a(l,b)},children:(l,b)=>{A();var k=S("leave");a(l,k)},$$slots:{default:!0}}),a(g,d)}),a(u,i)},children:(u,i)=>{A();var p=S("home");a(u,p)},$$slots:{default:!0}}),ht()}var Zn=P("<!> <!>",1),Jn=P("<!> <!> <!>",1);function Qn(s,t){vt(t,!0);const e=U(()=>Xe(t.home_cats));Ce(s,{icon:u=>{A();var i=S("🌄");a(u,i)},menu:u=>{var i=Jn(),p=N(i);L(p,()=>n(e),g=>{at(g,{run:()=>t.act({type:"call_cats_adventure"}),icon:_=>{A();var f=S("🦋");a(_,f)},children:(_,f)=>{A();var c=S("call");a(_,c)},$$slots:{default:!0}})});var w=h(p,2);Ft(w,17,()=>t.adventure_cats,g=>g.name,(g,d)=>{le(g,{get name(){return n(d).name},get icon(){return n(d).icon},get position(){return n(d).position},get act(){return t.act}})});var T=h(w,2);L(T,()=>!n(e),g=>{var d=Zn(),_=N(d);at(_,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:l=>{A();var b=S("🌄");a(l,b)},children:(l,b)=>{A();var k=S("do");a(l,k)},$$slots:{default:!0}});var f=h(_,2);at(f,{run:()=>t.act({type:"call_cats_home"}),icon:l=>{A();var b=S("🐈‍⬛");a(l,b)},children:(l,b)=>{A();var k=S("leave");a(l,k)},$$slots:{default:!0}}),a(g,d)}),a(u,i)},children:(u,i)=>{A();var p=S("adventure");a(u,p)},$$slots:{default:!0}}),ht()}var to=P('<span class="icon svelte-u0xdy"> </span>'),eo=P('<span class="name svelte-u0xdy"><!> </span>'),no=P('<span class="cat svelte-u0xdy"><!><!></span>');function Me(s,t){vt(t,!0);const e=et(t,"name",3,"Cat"),r=et(t,"icon",3,"😺"),o=et(t,"show_name",3,!0),u=et(t,"show_icon",3,!0);var i=no(),p=$(i);L(p,u,T=>{var g=to(),d=$(g);y(g),G(()=>_t(d,r())),a(T,g)});var w=h(p);L(w,o,T=>{var g=eo(),d=$(g);dt(d,()=>t.children??ie);var _=h(d,1,!0);y(g),G(()=>_t(_,e())),a(T,g)}),y(i),G(()=>ft(i,"has-icon",u())),a(s,i),ht()}const oo=`<script lang="ts">
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
`;var so=P("<!> <!>",1),ao=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),ro=P('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),io=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),co=P('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),lo=P("<section><!> <!></section> <section><!></section>",1),uo=P("<!> <!>",1),_o=P('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),mo=P("<!> <!>",1);function vo(s,t){vt(t,!0);const e="Alyssa",r="Ben",o="home";let u=z(o),i=z(o);const p=U(()=>n(u)===n(i)?"😺":"😾"),w=U(()=>n(u)===n(i)?"😸":"😿"),T=U(()=>({name:e,icon:n(p),position:n(u)})),g=U(()=>({name:r,icon:n(w),position:n(i)}));let d=z(!1);const _=(R,Q)=>{const Y=[],X=[];for(const B of R){const rt=B.position==="home"?Y:X;Q?rt.unshift(B):rt.push(B)}return{home_cats:Y,adventure_cats:X}},f=U(()=>_([n(T),n(g)],n(d))),c=U(()=>n(f).home_cats),l=U(()=>n(f).adventure_cats),b=U(()=>n(u)!==o||n(i)!==o),k=()=>{v(u,o),v(i,o)};let C=z(!1);const O=()=>{v(C,!n(C))},H=R=>{switch(R.type){case"call_cats_adventure":{v(u,"adventure"),v(i,"adventure");break}case"call_cats_home":{v(u,"home"),v(i,"home");break}case"cat_go_adventure":{R.name===e?v(u,"adventure"):R.name===r&&v(i,"adventure");break}case"cat_go_home":{R.name===e?v(u,"home"):R.name===r&&v(i,"home");break}case"cat_be_or_do":{v(d,!n(d));break}}},[D,K]=en({fallback:(R,Q)=>{const Y=window.getComputedStyle(R),X=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:wn,css:B=>`
					transform: ${X} scale(${B});
					opacity: ${B}
				`}}});var Z=mo(),J=N(Z);ee(J,{scoped:!0,children:(R,Q)=>{kt(R,{children:(Y,X)=>{var B=uo(),rt=N(B);Tt(rt,{text:"Full example"});var pt=h(rt,2);bt(pt,{entries:St=>{var zt=so(),j=N(zt);L(j,()=>n(b),wt=>{Ve(wt,{run:k,content:"Reset",icon:"↻"})});var xt=h(j,2);Yn(xt,{toggle_about_dialog:O}),a(St,zt)},children:(St,zt)=>{var j=lo(),xt=N(j),wt=$(xt);bt(wt,{entries:E=>{Gn(E,{act:H,get home_cats(){return n(c)},get adventure_cats(){return n(l)}})},children:(E,F)=>{var q=ro(),tt=h($(q),2);Ft(tt,29,()=>n(c),({name:mt,icon:nt,position:ot})=>mt,(mt,nt)=>{let ot=()=>n(nt).name,gt=()=>n(nt).icon,It=()=>n(nt).position;var st=ao(),At=$(st);bt(At,{entries:$t=>{le($t,{act:H,get name(){return ot()},get icon(){return gt()},get position(){return It()}})},children:($t,Ke)=>{Me($t,{get name(){return ot()},get icon(){return gt()}})},$$slots:{default:!0}}),y(st),Ot(1,st,()=>K,()=>({key:ot()})),Ot(2,st,()=>D,()=>({key:ot()})),Te(st,()=>Oe,null),a(mt,st)}),y(tt),y(q),a(E,q)},$$slots:{default:!0}});var ne=h(wt,2);bt(ne,{entries:E=>{Qn(E,{act:H,get home_cats(){return n(c)},get adventure_cats(){return n(l)}})},children:(E,F)=>{var q=co(),tt=h($(q),2);Ft(tt,29,()=>n(l),({name:mt,icon:nt,position:ot})=>mt,(mt,nt)=>{let ot=()=>n(nt).name,gt=()=>n(nt).icon,It=()=>n(nt).position;var st=io(),At=$(st);bt(At,{entries:$t=>{le($t,{act:H,get name(){return ot()},get icon(){return gt()},get position(){return It()}})},children:($t,Ke)=>{Me($t,{get name(){return ot()},get icon(){return gt()}})},$$slots:{default:!0}}),y(st),Ot(1,st,()=>K,()=>({key:ot()})),Ot(2,st,()=>D,()=>({key:ot()})),Te(st,()=>Oe,null),a(mt,st)}),y(tt),y(q),a(E,q)},$$slots:{default:!0}}),y(xt);var oe=h(xt,2),x=$(oe);ln(x,{summary:E=>{A();var F=S("View example source");a(E,F)},children:(E,F)=>{Mt(E,{content:oo})},$$slots:{default:!0}}),y(oe),a(St,j)},$$slots:{default:!0}}),a(Y,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var V=h(J,2);L(V,()=>n(C),R=>{rn(R,{onclose:()=>v(C,!1),children:(Q,Y)=>{var X=_o(),B=h($(X),8),rt=h($(B),2);dn(rt,{});var pt=h(rt,4);_n(pt,{}),y(B),y(X),a(Q,X)},$$slots:{default:!0}})}),a(s,Z),ht()}var ho=P("<!> <!> <!>",1),po=P(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),fo=P("<!> <!>",1);function go(s){let t=z(!1),e=z(!1),r=z(!1);ee(s,{scoped:!0,children:(o,u)=>{kt(o,{children:(i,p)=>{var w=fo(),T=N(w);Tt(T,{text:"Basic usage"});var g=h(T,2);bt(g,{entries:_=>{var f=ho(),c=N(f);at(c,{run:()=>v(t,!n(t)),children:(k,C)=>{A();var O=S("Hello world");a(k,O)},$$slots:{default:!0}});var l=h(c,2);at(l,{run:()=>v(e,!n(e)),icon:C=>{A();var O=S("🌞");a(C,O)},children:(C,O)=>{A();var H=S("Hello with an optional icon snippet");a(C,H)},$$slots:{default:!0}});var b=h(l,2);at(b,{run:()=>v(r,!n(r)),icon:"🌚",children:(k,C)=>{A();var O=S("Hello with an optional icon string");a(k,O)},$$slots:{default:!0}}),a(_,f)},children:(_,f)=>{var c=po(),l=h($(c),2),b=U(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${n(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${n(e)} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${n(r)} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`);Mt(l,{get content(){return n(b)}});var k=h(l,2),C=$(k),O=$(C);y(C),y(k);var H=h(k,2),D=$(H),K=$(D);y(D),y(H);var Z=h(H,2),J=$(Z),V=$(J);y(J),y(Z),A(2),y(c),G(()=>{ft(C,"color_g_5",n(t)),_t(O,`greeted = ${n(t)??""}`),ft(D,"color_e_5",n(e)),_t(K,`greeted_icon_snippet = ${n(e)??""}`),ft(J,"color_d_5",n(r)),_t(V,`greeted_icon_string = ${n(r)??""}`)}),a(_,c)},$$slots:{default:!0}}),a(i,w)},$$slots:{default:!0}})},$$slots:{default:!0}})}var xo=P("<div>toggled</div>"),bo=P(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),yo=P("<!> <!>",1);function wo(s){const t=new ye;let e=z(!1);ee(s,{contextmenu:t,scoped:!0,children:(r,o)=>{kt(r,{children:(u,i)=>{var p=yo(),w=N(p);Tt(w,{text:"Custom instance"});var T=h(w,2);bt(T,{entries:d=>{at(d,{run:()=>v(e,!n(e)),children:(_,f)=>{A();var c=S("Toggle");a(_,c)},$$slots:{default:!0}})},children:(d,_)=>{var f=bo(),c=$(f);Mt(c,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var l=h(c,2);Mt(l,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var b=h(l,4),k=$(b);L(k,()=>n(e),C=>{var O=xo();Ot(3,O,()=>nn),a(C,O)}),y(b),y(f),a(d,f)},$$slots:{default:!0}}),a(u,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}const $o=(s,t)=>{const e=window.getSelection();if(!e||!n(t))return;const r=document.createRange();r.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(r)};var Co=P(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ko=P("<div><!></div> <!>",1);function To(s){const t=new ye;let e=z(!1),r=z(void 0),o=z("");const u="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",i=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,p=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,w=U(()=>n(o)===u||n(o)===i||n(o)===p);ee(s,{contextmenu:t,scoped:!0,children:(T,g)=>{kt(T,{children:(d,_)=>{var f=ko(),c=N(f),l=$(c);Tt(l,{text:"Select text"}),y(c);var b=h(c,2);bt(b,{entries:C=>{at(C,{run:()=>v(e,!n(e)),children:(O,H)=>{A();var D=S("Toggle something");a(O,D)},$$slots:{default:!0}})},children:(C,O)=>{var H=Co(),D=$(H);be(D,lt=>v(r,lt),()=>n(r));var K=h($(D),2),Z=h($(K));Z.__click=[$o,r],A(),y(K),y(D);var J=h(D,2),V=$(J);on(V),y(J);var R=h(J,2),Q=h(R,2),Y=$(Q);sn(Y),y(Q);var X=h(Q,2),B=$(X);se(B,{path:"Web/HTML/Global_attributes/contenteditable"}),A(),y(X);var rt=h(X,4),pt=h(rt,4);y(H),G(()=>{ft(H,"color_g_5",n(w)),ft(Z,"color_a",n(e)),ft(R,"color_g_5",n(w))}),ze(V,()=>n(o),lt=>v(o,lt)),ze(Y,()=>n(o),lt=>v(o,lt)),Se("innerText",rt,()=>n(o),lt=>v(o,lt)),Se("innerText",pt,()=>n(o),lt=>v(o,lt)),a(C,H)},$$slots:{default:!0}}),G(()=>ft(c,"color_d_5",n(w))),a(d,f)},$$slots:{default:!0}})},$$slots:{default:!0}})}fe(["click"]);var Io=P(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Po(s){ee(s,{scoped:!0,children:(t,e)=>{kt(t,{children:(r,o)=>{var u=Io(),i=N(u);Tt(i,{text:"Default behaviors"});var p=h(i,2),w=$(p);Mt(w,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),A(6),y(p),a(r,u)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Eo=P("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function ns(s,t){vt(t,!0);const r=tn("Contextmenu");Qe(s,{tome:r,children:(o,u)=>{var i=Eo(),p=h(N(i),2);go(p);var w=h(p,2);Po(w);var T=h(w,2);wo(T);var g=h(T,2);To(g);var d=h(g,2);vo(d,{});var _=h(d,2);bn(_),a(o,i)},$$slots:{default:!0}}),ht()}export{ns as component};
