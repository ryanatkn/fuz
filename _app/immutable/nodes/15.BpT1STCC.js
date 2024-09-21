var Ge=Object.defineProperty;var je=(a,t,e)=>t in a?Ge(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var ut=(a,t,e)=>(je(a,typeof t!="symbol"?t+"":t,e),e),_e=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var I=(a,t,e)=>(_e(a,t,"read from private field"),e?e.call(a):t.get(a)),W=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)},me=(a,t,e,r)=>(_e(a,t,"write to private field"),r?r.call(a,e):t.set(a,e),e);var Ce=(a,t,e)=>(_e(a,t,"access private method"),e);import{a as s,t as P,l as fe,c as it,g as S,p as De}from"../chunks/disclose-version.C-Ww6_-A.js";import{q as Je,u as Qe,f as O,s as h,c as $,ah as z,r as y,ai as A,g as n,K as v,l as ge,m as xe,p as vt,t as j,a as ht,d as U,ab as Nt,as as kt,ag as ie}from"../chunks/runtime.bViC5kxD.js";import{T as Ze}from"../chunks/Tome_Content.TLTK8WGI.js";import{g as tn}from"../chunks/tome.BNJ_Ln0v.js";import{M as se}from"../chunks/Mdn_Link.BdaIQ9jN.js";import{T as Ct,a as Tt}from"../chunks/Tome_Section_Header.OkKmkifX.js";import{p as M,i as q}from"../chunks/if.xjYjBMBU.js";import{e as Ft}from"../chunks/each.B_jZhebh.js";import{t as Ot,a as Te,c as en,s as nn}from"../chunks/index.7eM3vJWe.js";import{C as Mt}from"../chunks/Code.CVPzi4QU.js";import{s as dt,c as ce,r as on,e as sn}from"../chunks/attributes.CEZtrAcH.js";import{a as ct}from"../chunks/intersect.C54GzS8Y.js";import{s as ae}from"../chunks/style.Bk7ejTAN.js";import{b as be}from"../chunks/this.DffqLa2P.js";import{p as et,s as Ie}from"../chunks/props.Cg0EPFFi.js";import{a as an,s as Pt,b as ve,c as Pe,D as rn}from"../chunks/Dialog.B4c2cUbg.js";import{o as Ee}from"../chunks/index-client.BcoiqBzb.js";import{s as _t}from"../chunks/render.HNLfjup5.js";import{a as he}from"../chunks/string.ZJuK4sHN.js";import{t as ft}from"../chunks/class.4rkcUk1B.js";import{P as cn}from"../chunks/Pending_Animation.Bs5pm-EF.js";import{D as ln,b as Se}from"../chunks/Details.aFaZAjzl.js";import{G as un}from"../chunks/Github_Logo.C8xqMeZY.js";import{C as dn,T as _n}from"../chunks/Theme_Input.BwwqjAyg.js";import{b as Ae}from"../chunks/input.BGGD6a6C.js";var yt,Et,Dt,ue,Re;const de=class de{constructor(t){W(this,ue);W(this,yt,new WeakMap);W(this,Et,void 0);W(this,Dt,void 0);me(this,Dt,t)}observe(t,e){var r=I(this,yt).get(t)||new Set;return r.add(e),I(this,yt).set(t,r),Ce(this,ue,Re).call(this).observe(t,I(this,Dt)),()=>{var o=I(this,yt).get(t);o.delete(e),o.size===0&&(I(this,yt).delete(t),I(this,Et).unobserve(t))}}};yt=new WeakMap,Et=new WeakMap,Dt=new WeakMap,ue=new WeakSet,Re=function(){return I(this,Et)??me(this,Et,new ResizeObserver(t=>{for(var e of t){de.entries.set(e.target,e);for(var r of I(this,yt).get(e.target)||[])r(e)}}))},ut(de,"entries",new WeakMap);let pe=de;var mn=new pe({box:"border-box"});function ze(a,t,e){var r=mn.observe(a,()=>e(a[t]));Je(()=>(Qe(()=>e(a[t])),r))}var vn=P('<span class="font_mono">contextmenu</span> event',1),hn=P('<span class="font_mono">navigator.vibrate</span>'),pn=P('<span class="font_mono">navigator.vibrate</span>'),fn=P(`<!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul>`,1),xn=P("<!> <!>",1);function bn(a){var t=xn(),e=O(t);Ct(e,{children:(o,u)=>{var i=fn(),p=O(i);Tt(p,{text:"Expected behaviors"});var b=h(p,4),C=h($(b));se(C,{path:"Web/API/Element/contextmenu_event",children:(c,l)=>{var w=vn();z(),s(c,w)},$$slots:{default:!0}});var x=h(C,4);se(x,{path:"Web/API/Navigator/vibrate",children:(c,l)=>{var w=hn();s(c,w)},$$slots:{default:!0}}),z(),y(b);var d=h(b,10),f=h($(d),10),_=h($(f));se(_,{path:"Web/API/Navigator/vibrate",children:(c,l)=>{var w=pn();s(c,w)},$$slots:{default:!0}}),z(),y(f),y(d),s(o,i)},$$slots:{default:!0}});var r=h(e,2);Ct(r,{children:(o,u)=>{var i=gn(),p=O(i);Tt(p,{text:"Motivation"}),z(14),s(o,i)},$$slots:{default:!0}}),s(a,t)}function yn(a){const t=a-1;return t*t*t+1}function wn(a){return--a*a*a*a*a+1}function Oe(a,{from:t,to:e},r={}){const o=getComputedStyle(a),u=o.transform==="none"?"":o.transform,[i,p]=o.transformOrigin.split(" ").map(parseFloat),b=t.left+t.width*i/e.width-(e.left+i),C=t.top+t.height*p/e.height-(e.top+p),{delay:x=0,duration:d=_=>Math.sqrt(_)*120,easing:f=yn}=r;return{delay:x,duration:typeof d=="function"?d(Math.sqrt(b*b+C*C)):d,easing:f,css:(_,c)=>{const l=c*b,w=c*C,T=_+c*t.width/e.width,k=_+c*t.height/e.height;return`transform: ${u} translate(${l}px, ${w}px) scale(${T}, ${k});`}}}var Rt,qt;class qe{constructor(){W(this,Rt,A(0));W(this,qt,A(0))}get width(){return n(I(this,Rt))}set width(t){v(I(this,Rt),M(t))}get height(){return n(I(this,qt))}set height(t){v(I(this,qt),M(t))}}Rt=new WeakMap,qt=new WeakMap;var Ht,Lt,Ut,Wt,Bt;class $n{constructor(t,e){ut(this,"is_menu",!1);ut(this,"menu");W(this,Ht,A(!1));W(this,Lt,A());W(this,Ut,A(!1));W(this,Wt,A(null));W(this,Bt,A(null));this.menu=t,this.run=e}get selected(){return n(I(this,Ht))}set selected(t){v(I(this,Ht),M(t))}get run(){return n(I(this,Lt))}set run(t){v(I(this,Lt),M(t))}get pending(){return n(I(this,Ut))}set pending(t){v(I(this,Ut),M(t))}get error_message(){return n(I(this,Wt))}set error_message(t){v(I(this,Wt),M(t))}get promise(){return n(I(this,Bt))}set promise(t){v(I(this,Bt),M(t))}}Ht=new WeakMap,Lt=new WeakMap,Ut=new WeakMap,Wt=new WeakMap,Bt=new WeakMap;var Vt,Xt;class kn{constructor(t,e){ut(this,"is_menu",!0);ut(this,"menu");ut(this,"depth");W(this,Vt,A(!1));W(this,Xt,A(M([])));this.menu=t,this.depth=e}get selected(){return n(I(this,Vt))}set selected(t){v(I(this,Vt),M(t))}get items(){return n(I(this,Xt))}set items(t){v(I(this,Xt),M(t))}}Vt=new WeakMap,Xt=new WeakMap;var Yt;class Cn{constructor(){ut(this,"is_menu",!0);ut(this,"menu",null);ut(this,"depth",1);W(this,Yt,A(M([])))}get items(){return n(I(this,Yt))}set items(t){v(I(this,Yt),M(t))}}Yt=new WeakMap;var Kt,Gt,jt,Jt,Qt,Zt,te;class ye{constructor(t){ut(this,"layout");ut(this,"initial_layout");W(this,Kt,A(!1));W(this,Gt,A(0));W(this,jt,A(0));W(this,Jt,A(M([])));W(this,Qt,A());W(this,Zt,A(M(new Cn)));W(this,te,A(M([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new qe}get opened(){return n(I(this,Kt))}set opened(t){v(I(this,Kt),M(t))}get x(){return n(I(this,Gt))}set x(t){v(I(this,Gt),M(t))}get y(){return n(I(this,jt))}set y(t){v(I(this,jt),M(t))}get params(){return n(I(this,Jt))}set params(t){v(I(this,Jt),M(t))}get error(){return n(I(this,Qt))}set error(t){v(I(this,Qt),M(t))}get root_menu(){return n(I(this,Zt))}set root_menu(t){v(I(this,Zt),M(t))}get selections(){return n(I(this,te))}set selections(t){v(I(this,te),M(t))}open(t,e,r){this.selections.length=0,this.opened=!0,this.x=e,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(r){const o=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=o??"unknown error",this.error=o}if(an(e)){t.pending=!0,t.error_message=null;const r=t.promise=e.then(o=>{if(r===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const u=typeof o.message=="string"?o.message:void 0;t.error_message=u??"unknown error",this.error=u}else this.close();return o}},o=>{if(r!==t.promise)return;const u=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=u??"unknown error",this.error=u}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=Fe()??this.root_menu,r=new $n(e,t);return e.items.push(r),Ee(()=>{e.items.length=0}),r}add_submenu(){const t=Fe()??this.root_menu,e=new kn(t,t.depth+1);return t.items.push(e),zn(e),Ee(()=>{t.items.length=0}),e}}Kt=new WeakMap,Gt=new WeakMap,jt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap;const we="contextmenu",Tn=`a,[data-${we}]`,re=new Map;let In=0;const Pn=(a,t)=>{if(t==null)return;const e=(In+=1)-1+"";return a.dataset[we]=e,re.set(e,t),{update:r=>{re.set(e,r)},destroy:()=>{re.delete(e)}}},En=17,Ne=(a,t,e,r)=>{const o=Sn(a);return o!=null&&o.length?(r.open(o,t,e),navigator.vibrate&&navigator.vibrate(En),!0):!1},Sn=a=>{var u;let t=null,e=a,r,o;for(;e=e==null?void 0:e.closest(Tn);){if(r=e.dataset[we]){if(t??(t=[]),o=re.get(r),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(u=window.getSelection())==null?void 0:u.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},He=Symbol(),An=a=>ge(He,a),$e=()=>xe(He),Le=Symbol(),zn=a=>ge(Le,a),Fe=()=>xe(Le),Ue=Symbol(),We=(a=new qe)=>(ge(Ue,a),a),On=()=>xe(Ue);var Nn=(a,t)=>t.close(),Fn=P('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Be(a,t){vt(t,!0);const e="🔗",r=et(t,"icon",3,e),o=$e(),u=(T,k=location.host)=>{const N=he(he(T,"https://"),"http://");return N.startsWith(k+"/")?he(N,k):N},i=U(()=>u(t.href)),p=U(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),b=U(()=>n(p)?"noreferrer":void 0);var C=Fn(),x=$(C);x.__click=[Nn,o];var d=$(x),f=$(d),_=$(f);q(_,()=>typeof r()=="string",T=>{var k=S();j(()=>_t(k,r())),s(T,k)},T=>{var k=it(),N=O(k);dt(N,r,()=>e),s(T,k)}),y(f);var c=h(f,2),l=$(c),w=$(l);q(w,()=>t.children,T=>{var k=it(),N=O(k);dt(N,()=>t.children),s(T,k)},T=>{var k=S();j(()=>_t(k,n(i))),s(T,k)}),y(l),y(c),y(d),y(x),y(C),j(()=>{ce(x,"href",t.href),ce(x,"rel",n(b))}),s(a,C),ht()}fe(["click"]);var Mn=P('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(a,t){vt(t,!0);const e=$e(),r=e.add_entry(t.run);Nt(()=>{r.run=t.run});const o=U(()=>r.selected),u=U(()=>r.pending),i=U(()=>r.error_message);var p=Mn();p.__click=()=>{setTimeout(()=>e.activate(r))};var b=$(p),C=$(b),x=$(C);q(x,()=>typeof t.icon=="string",c=>{var l=S();j(()=>_t(l,t.icon)),s(c,l)},c=>{var l=it(),w=O(l);q(w,()=>t.icon,T=>{var k=it(),N=O(k);dt(N,()=>t.icon),s(T,k)},null,!0),s(c,l)}),y(C);var d=h(C,2),f=$(d);dt(f,()=>t.children),y(d);var _=h(d,2);q(_,()=>n(u),c=>{cn(c,{})},c=>{var l=it(),w=O(l);q(w,()=>n(i),T=>{var k=S("⚠️");s(T,k)},null,!0),s(c,l)}),y(b),y(p),j(()=>{ce(p,"title",n(i)?`Error: ${n(i)}`:void 0),ft(p,"selected",n(o))}),De("mouseenter",p,c=>{Pt(c),e.select(r)}),s(a,p),ht()}fe(["click"]);function Ve(a,t){at(a,{get run(){return t.run},icon:r=>{z();var o=S();j(()=>_t(o,t.icon)),s(r,o)},children:(r,o)=>{z();var u=S();j(()=>_t(u,t.content)),s(r,u)},$$slots:{default:!0}})}var Dn=P('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Rn=P('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),qn=P('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Hn=P("<!> <!> <!>",1);function ee(a,t){vt(t,!0);const e=(g,m=ie)=>{Be(g,Ie(m))},r=(g,m=ie)=>{Ve(g,Ie(m))},o=et(t,"contextmenu",19,()=>new ye),u=et(t,"longpress_move_tolerance",3,21),i=et(t,"longpress_duration",3,633),p=et(t,"bypass_with_tap_then_longpress",3,!0),b=et(t,"tap_then_longpress_duration",3,660),C=et(t,"tap_then_longpress_move_tolerance",3,7),x=et(t,"open_offset_x",19,()=>-2),d=et(t,"open_offset_y",19,()=>-2),f=et(t,"scoped",3,!1);An(o());let _=A(void 0);const c=U(()=>o().layout),l=U(()=>o().initial_layout),w=U(()=>n(c)===n(l));let T=A(void 0),k=A(void 0);Nt(()=>{!n(w)&&n(T)!==void 0&&(n(c).width=n(T))}),Nt(()=>{!n(w)&&n(k)!==void 0&&(n(c).height=n(k))});const N=We();Nt(()=>{if(n(_)){const g=n(_).getBoundingClientRect();N.width=g.width,N.height=g.height}});const L=U(()=>o().x+Math.min(0,n(c).width-(o().x+N.width))),H=U(()=>o().y+Math.min(0,n(c).height-(o().y+N.height)));let K=A(void 0),J=A(void 0),Q=A(void 0),V=A(void 0),D=A(void 0),Z=A(void 0);const Y=()=>{n(D)&&v(D,!1),n(V)!=null&&(clearTimeout(n(V)),v(V,null))},X=g=>{var E;if(n(Z)){v(Z,!1);return}if(n(D)){Y(),Pt(g);return}const{target:m}=g;g.shiftKey||!(m instanceof HTMLElement||m instanceof SVGElement)||(E=n(_))!=null&&E.contains(m)||ve(m)||Pe(m)||Ne(m,g.clientX+x(),g.clientY+d(),o())&&(Pt(g),Y())},B=g=>{n(D)&&v(D,!1);const{touches:m,target:E}=g;if(o().opened||m.length!==1||g.shiftKey||!(E instanceof HTMLElement||E instanceof SVGElement)||ve(E)||Pe(E))return;const{clientX:F,clientY:R}=m[0];if(p()){if(n(Q)!=null&&performance.now()-n(Q)<b()&&Math.hypot(F-n(K),R-n(J))<C()){v(Z,!0),v(Q,null);return}v(Q,M(performance.now()))}v(K,M(F)),v(J,M(R)),n(V)!=null&&Y(),v(V,M(setTimeout(()=>{v(D,!0),Ne(E,n(K)+x(),n(J)+d(),o())},i())))},rt=g=>{if(n(V)==null)return;const{touches:m}=g;if(m.length!==1)return;const{clientX:E,clientY:F}=m[0];Math.hypot(E-n(K),F-n(J))>u()&&(o().opened&&o().close(),Y())},pt=g=>{n(V)!=null&&(n(D)&&Pt(g),Y())},lt=g=>{n(_)&&!n(_).contains(g.target)&&o().close()},St=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),At=g=>{const m=St.get(g.key);!m||ve(g.target)||(Pt(g),m())},G=(g,m)=>{let E=null,F=null;const R=tt=>{E&&g.removeEventListener(F,E),tt.disabled||(g.addEventListener(tt.event,tt.cb,{capture:!0,passive:tt.passive}),E=tt.cb,F=tt.event)};return R(m),{update:tt=>{R(tt)},destroy:()=>{E&&g.removeEventListener(F,E)}}};var xt=Hn(),wt=O(xt);q(wt,f,g=>{var m=Dn(),E=$(m);dt(E,()=>t.children),y(m),ct(m,(F,R)=>G(F,R),()=>({event:"contextmenu",passive:!1,cb:X})),ct(m,(F,R)=>G(F,R),()=>({event:"touchstart",passive:!0,cb:B})),ct(m,(F,R)=>G(F,R),()=>({event:"touchmove",passive:!0,cb:rt})),ct(m,(F,R)=>G(F,R),()=>({event:"touchend",passive:!1,cb:pt})),ct(m,(F,R)=>G(F,R),()=>({event:"touchcancel",passive:!1,cb:pt})),s(g,m)},g=>{var m=it(),E=O(m);dt(E,()=>t.children),s(g,m)});var ne=h(wt,2);q(ne,()=>!n(w),g=>{var m=Rn();ze(m,"clientHeight",E=>v(k,E)),ze(m,"clientWidth",E=>v(T,E)),s(g,m)});var oe=h(ne,2);q(oe,()=>o().opened,g=>{var m=qn();be(m,E=>v(_,E),()=>n(_)),Ft(m,20,()=>o().params,E=>E,(E,F)=>{var R=it(),tt=O(R);q(tt,()=>typeof F=="function",mt=>{var nt=it(),ot=O(nt);dt(ot,()=>F),s(mt,nt)},mt=>{var nt=it(),ot=O(nt);q(ot,()=>F.snippet==="link",gt=>{e(gt,()=>F.props)},gt=>{var It=it(),st=O(It);q(st,()=>F.snippet==="text",zt=>{r(zt,()=>F.props)},null,!0),s(gt,It)},!0),s(mt,nt)}),s(E,R)}),y(m),j(()=>ae(m,"transform",`translate3d(${n(L)??""}px, ${n(H)??""}px, 0)`)),s(g,m)}),ct(kt,(g,m)=>G(g,m),()=>({event:"contextmenu",passive:!1,cb:X,disabled:f()})),ct(kt,(g,m)=>G(g,m),()=>({event:"touchstart",passive:!0,cb:B,disabled:f()})),ct(kt,(g,m)=>G(g,m),()=>({event:"touchmove",passive:!0,cb:rt,disabled:f()})),ct(kt,(g,m)=>G(g,m),()=>({event:"touchend",passive:!1,cb:pt,disabled:f()})),ct(kt,(g,m)=>G(g,m),()=>({event:"touchcancel",passive:!1,cb:pt,disabled:f()})),ct(kt,(g,m)=>G(g,m),()=>({event:"mousedown",passive:!0,cb:lt,disabled:!o().opened})),ct(kt,(g,m)=>G(g,m),()=>({event:"keydown",passive:!1,cb:At,disabled:!o().opened})),s(a,xt),ht()}var Ln=P('<span class="display_contents"><!></span>');function bt(a,t){vt(t,!0);var e=Ln(),r=$(e);dt(r,()=>t.children),y(e),ct(e,(o,u)=>Pn(o,u),()=>t.entries),s(a,e),ht()}var Un=P('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Wn=P('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ke(a,t){vt(t,!0);const e=$e(),r=e.add_submenu(),{layout:o}=e,u=U(()=>r.selected);let i=A(void 0);const p=On(),b=We();let C=A(0),x=A(0);Nt(()=>{n(i)&&d(n(i),o,p)});const d=(L,H,K)=>{const{x:J,y:Q,width:V,height:D}=L.getBoundingClientRect();b.width=V,b.height=D;const Z=J-n(C),Y=Q-n(x),X=Z+V+K.width-H.width;if(X<=0)v(C,M(K.width));else{const B=V-Z;B<=0?v(C,-V):B>X?v(C,K.width-X):v(C,B-V)}v(x,M(Math.min(0,H.height-(Y+D))))};var f=Wn(),_=$(f),c=$(_),l=$(c),w=$(l);dt(w,()=>t.icon??ie),y(l);var T=h(l,2),k=$(T);dt(k,()=>t.children),y(T),y(c),z(2),y(_);var N=h(_,2);q(N,()=>n(u),L=>{var H=Un();be(H,J=>v(i,J),()=>n(i));var K=$(H);dt(K,()=>t.menu),y(H),j(()=>{ae(H,"transform",`translate3d(${n(C)??""}px, ${n(x)??""}px, 0)`),ae(H,"max-height",`${o.height??""}px`)}),s(L,H)}),y(f),j(()=>{ae(f,"--contextmenu_depth",r.depth),ce(_,"aria-expanded",n(u)),ft(_,"selected",n(u))}),De("mouseenter",_,L=>{Pt(L),setTimeout(()=>e.select(r))}),s(a,f),ht()}var Bn=P("<!> <!>",1);function le(a,t){vt(t,!0);const e=et(t,"name",3,"Cat"),r=et(t,"icon",3,"😺");ke(a,{icon:i=>{z();var p=S();j(()=>_t(p,r())),s(i,p)},menu:i=>{var p=Bn(),b=O(p);at(b,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:d=>{var f=it(),_=O(f);q(_,()=>t.position==="adventure",c=>{var l=S("🏠");s(c,l)},c=>{var l=S("🌄");s(c,l)}),s(d,f)},children:(d,f)=>{var _=it(),c=O(_);q(c,()=>t.position==="adventure",l=>{var w=S("go home");s(l,w)},l=>{var w=S("go adventure");s(l,w)}),s(d,_)},$$slots:{default:!0}});var C=h(b,2);at(C,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:d=>{var f=it(),_=O(f);q(_,()=>t.position==="adventure",c=>{var l=S("🌄");s(c,l)},c=>{var l=S("🏠");s(c,l)}),s(d,f)},children:(d,f)=>{var _=it(),c=O(_);q(c,()=>t.position==="adventure",l=>{var w=S("do adventure");s(l,w)},l=>{var w=S("be home");s(l,w)}),s(d,_)},$$slots:{default:!0}}),s(i,p)},children:(i,p)=>{z();var b=S();j(()=>_t(b,e())),s(i,b)},$$slots:{default:!0}}),ht()}var Vn=P("<!> <!>",1);function Xn(a,t){var e=Vn(),r=O(e);Be(r,{href:"https://github.com/ryanatkn/fuz",icon:i=>{un(i,{size:"var(--icon_size_xs)"})},children:(i,p)=>{z();var b=S("Source code");s(i,b)},$$slots:{default:!0}});var o=h(r,2);at(o,{get run(){return t.toggle_about_dialog},icon:i=>{z();var p=S("?");s(i,p)},children:(i,p)=>{z();var b=S("About");s(i,b)},$$slots:{default:!0}}),s(a,e)}const Xe=a=>{const t=a.length;if(t===2)return"cats";if(t===0)return null;const e=a[0];return e.icon+e.name};var Yn=P("<!> <!>",1),Kn=P("<!> <!> <!>",1);function Gn(a,t){vt(t,!0);const e=U(()=>Xe(t.adventure_cats));ke(a,{icon:u=>{z();var i=S("🏠");s(u,i)},menu:u=>{var i=Kn(),p=O(i);q(p,()=>n(e),x=>{at(x,{run:()=>t.act({type:"call_cats_home"}),icon:f=>{z();var _=S("🐈‍⬛");s(f,_)},children:(f,_)=>{z();var c=S("call");s(f,c)},$$slots:{default:!0}})});var b=h(p,2);Ft(b,17,()=>t.home_cats,x=>x.name,(x,d)=>{le(x,{get name(){return n(d).name},get icon(){return n(d).icon},get position(){return n(d).position},get act(){return t.act}})});var C=h(b,2);q(C,()=>!n(e),x=>{var d=Yn(),f=O(d);at(f,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:l=>{z();var w=S("🏠");s(l,w)},children:(l,w)=>{z();var T=S("be");s(l,T)},$$slots:{default:!0}});var _=h(f,2);at(_,{run:()=>t.act({type:"call_cats_adventure"}),icon:l=>{z();var w=S("🦋");s(l,w)},children:(l,w)=>{z();var T=S("leave");s(l,T)},$$slots:{default:!0}}),s(x,d)}),s(u,i)},children:(u,i)=>{z();var p=S("home");s(u,p)},$$slots:{default:!0}}),ht()}var jn=P("<!> <!>",1),Jn=P("<!> <!> <!>",1);function Qn(a,t){vt(t,!0);const e=U(()=>Xe(t.home_cats));ke(a,{icon:u=>{z();var i=S("🌄");s(u,i)},menu:u=>{var i=Jn(),p=O(i);q(p,()=>n(e),x=>{at(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:f=>{z();var _=S("🦋");s(f,_)},children:(f,_)=>{z();var c=S("call");s(f,c)},$$slots:{default:!0}})});var b=h(p,2);Ft(b,17,()=>t.adventure_cats,x=>x.name,(x,d)=>{le(x,{get name(){return n(d).name},get icon(){return n(d).icon},get position(){return n(d).position},get act(){return t.act}})});var C=h(b,2);q(C,()=>!n(e),x=>{var d=jn(),f=O(d);at(f,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:l=>{z();var w=S("🌄");s(l,w)},children:(l,w)=>{z();var T=S("do");s(l,T)},$$slots:{default:!0}});var _=h(f,2);at(_,{run:()=>t.act({type:"call_cats_home"}),icon:l=>{z();var w=S("🐈‍⬛");s(l,w)},children:(l,w)=>{z();var T=S("leave");s(l,T)},$$slots:{default:!0}}),s(x,d)}),s(u,i)},children:(u,i)=>{z();var p=S("adventure");s(u,p)},$$slots:{default:!0}}),ht()}var Zn=P('<span class="icon svelte-u0xdy"> </span>'),to=P('<span class="name svelte-u0xdy"><!> </span>'),eo=P('<span class="cat svelte-u0xdy"><!><!></span>');function Me(a,t){vt(t,!0);const e=et(t,"name",3,"Cat"),r=et(t,"icon",3,"😺"),o=et(t,"show_name",3,!0),u=et(t,"show_icon",3,!0);var i=eo(),p=$(i);q(p,u,C=>{var x=Zn(),d=$(x);y(x),j(()=>_t(d,r())),s(C,x)});var b=h(p);q(b,o,C=>{var x=to(),d=$(x);dt(d,()=>t.children??ie);var f=h(d,1,!0);y(x),j(()=>_t(f,e())),s(C,x)}),y(i),j(()=>ft(i,"has-icon",u())),s(a,i),ht()}const no=`<script lang="ts">
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
`;var oo=P("<!> <!>",1),so=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),ao=P('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),ro=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),io=P('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),co=P("<section><!> <!></section> <section><!></section>",1),lo=P("<!> <!>",1),uo=P('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),_o=P("<!> <!>",1);function mo(a,t){vt(t,!0);const e="Alyssa",r="Ben",o="home";let u=A(o),i=A(o);const p=U(()=>n(u)===n(i)?"😺":"😾"),b=U(()=>n(u)===n(i)?"😸":"😿"),C=U(()=>({name:e,icon:n(p),position:n(u)})),x=U(()=>({name:r,icon:n(b),position:n(i)}));let d=A(!1);const f=(D,Z)=>{const Y=[],X=[];for(const B of D){const rt=B.position==="home"?Y:X;Z?rt.unshift(B):rt.push(B)}return{home_cats:Y,adventure_cats:X}},_=U(()=>f([n(C),n(x)],n(d))),c=U(()=>n(_).home_cats),l=U(()=>n(_).adventure_cats),w=U(()=>n(u)!==o||n(i)!==o),T=()=>{v(u,o),v(i,o)};let k=A(!1);const N=()=>{v(k,!n(k))},L=D=>{switch(D.type){case"call_cats_adventure":{v(u,"adventure"),v(i,"adventure");break}case"call_cats_home":{v(u,"home"),v(i,"home");break}case"cat_go_adventure":{D.name===e?v(u,"adventure"):D.name===r&&v(i,"adventure");break}case"cat_go_home":{D.name===e?v(u,"home"):D.name===r&&v(i,"home");break}case"cat_be_or_do":{v(d,!n(d));break}}},[H,K]=en({fallback:(D,Z)=>{const Y=window.getComputedStyle(D),X=Y.transform==="none"?"":Y.transform;return{duration:1500,easing:wn,css:B=>`
					transform: ${X} scale(${B});
					opacity: ${B}
				`}}});var J=_o(),Q=O(J);ee(Q,{scoped:!0,children:(D,Z)=>{Ct(D,{children:(Y,X)=>{var B=lo(),rt=O(B);Tt(rt,{text:"Full example"});var pt=h(rt,2);bt(pt,{entries:St=>{var At=oo(),G=O(At);q(G,()=>n(w),wt=>{Ve(wt,{run:T,content:"Reset",icon:"↻"})});var xt=h(G,2);Xn(xt,{toggle_about_dialog:N}),s(St,At)},children:(St,At)=>{var G=co(),xt=O(G),wt=$(xt);bt(wt,{entries:E=>{Gn(E,{act:L,get home_cats(){return n(c)},get adventure_cats(){return n(l)}})},children:(E,F)=>{var R=ao(),tt=h($(R),2);Ft(tt,29,()=>n(c),({name:mt,icon:nt,position:ot})=>mt,(mt,nt)=>{let ot=()=>n(nt).name,gt=()=>n(nt).icon,It=()=>n(nt).position;var st=so(),zt=$(st);bt(zt,{entries:$t=>{le($t,{act:L,get name(){return ot()},get icon(){return gt()},get position(){return It()}})},children:($t,Ke)=>{Me($t,{get name(){return ot()},get icon(){return gt()}})},$$slots:{default:!0}}),y(st),Ot(1,st,()=>K,()=>({key:ot()})),Ot(2,st,()=>H,()=>({key:ot()})),Te(st,()=>Oe,null),s(mt,st)}),y(tt),y(R),s(E,R)},$$slots:{default:!0}});var ne=h(wt,2);bt(ne,{entries:E=>{Qn(E,{act:L,get home_cats(){return n(c)},get adventure_cats(){return n(l)}})},children:(E,F)=>{var R=io(),tt=h($(R),2);Ft(tt,29,()=>n(l),({name:mt,icon:nt,position:ot})=>mt,(mt,nt)=>{let ot=()=>n(nt).name,gt=()=>n(nt).icon,It=()=>n(nt).position;var st=ro(),zt=$(st);bt(zt,{entries:$t=>{le($t,{act:L,get name(){return ot()},get icon(){return gt()},get position(){return It()}})},children:($t,Ke)=>{Me($t,{get name(){return ot()},get icon(){return gt()}})},$$slots:{default:!0}}),y(st),Ot(1,st,()=>K,()=>({key:ot()})),Ot(2,st,()=>H,()=>({key:ot()})),Te(st,()=>Oe,null),s(mt,st)}),y(tt),y(R),s(E,R)},$$slots:{default:!0}}),y(xt);var oe=h(xt,2),g=$(oe);ln(g,{summary:E=>{z();var F=S("View example source");s(E,F)},children:(E,F)=>{Mt(E,{content:no})},$$slots:{default:!0}}),y(oe),s(St,G)},$$slots:{default:!0}}),s(Y,B)},$$slots:{default:!0}})},$$slots:{default:!0}});var V=h(Q,2);q(V,()=>n(k),D=>{rn(D,{onclose:()=>v(k,!1),children:(Z,Y)=>{var X=uo(),B=h($(X),8),rt=h($(B),2);dn(rt,{});var pt=h(rt,4);_n(pt,{}),y(B),y(X),s(Z,X)},$$slots:{default:!0}})}),s(a,J),ht()}var vo=P("<!> <!> <!>",1),ho=P(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),po=P("<!> <!>",1);function fo(a){let t=A(!1),e=A(!1),r=A(!1);ee(a,{scoped:!0,children:(o,u)=>{Ct(o,{children:(i,p)=>{var b=po(),C=O(b);Tt(C,{text:"Basic usage"});var x=h(C,2);bt(x,{entries:f=>{var _=vo(),c=O(_);at(c,{run:()=>v(t,!n(t)),children:(T,k)=>{z();var N=S("Hello world");s(T,N)},$$slots:{default:!0}});var l=h(c,2);at(l,{run:()=>v(e,!n(e)),icon:k=>{z();var N=S("🌞");s(k,N)},children:(k,N)=>{z();var L=S("Hello with an optional icon snippet");s(k,L)},$$slots:{default:!0}});var w=h(l,2);at(w,{run:()=>v(r,!n(r)),icon:"🌚",children:(T,k)=>{z();var N=S("Hello with an optional icon string");s(T,N)},$$slots:{default:!0}}),s(f,_)},children:(f,_)=>{var c=ho(),l=h($(c),2),w=U(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Mt(l,{get content(){return n(w)}});var T=h(l,2),k=$(T),N=$(k);y(k),y(T);var L=h(T,2),H=$(L),K=$(H);y(H),y(L);var J=h(L,2),Q=$(J),V=$(Q);y(Q),y(J),z(2),y(c),j(()=>{ft(k,"color_g_5",n(t)),_t(N,`greeted = ${n(t)??""}`),ft(H,"color_e_5",n(e)),_t(K,`greeted_icon_snippet = ${n(e)??""}`),ft(Q,"color_d_5",n(r)),_t(V,`greeted_icon_string = ${n(r)??""}`)}),s(f,c)},$$slots:{default:!0}}),s(i,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}var go=P("<div>toggled</div>"),xo=P(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.</p> <div><!></div></div>`),bo=P("<!> <!>",1);function yo(a){const t=new ye;let e=A(!1);ee(a,{contextmenu:t,scoped:!0,children:(r,o)=>{Ct(r,{children:(u,i)=>{var p=bo(),b=O(p);Tt(b,{text:"Custom instance"});var C=h(b,2);bt(C,{entries:d=>{at(d,{run:()=>v(e,!n(e)),children:(f,_)=>{z();var c=S("Toggle");s(f,c)},$$slots:{default:!0}})},children:(d,f)=>{var _=xo(),c=$(_);Mt(c,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var l=h(c,2);Mt(l,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var w=h(l,4),T=$(w);q(T,()=>n(e),k=>{var N=go();Ot(3,N,()=>nn),s(k,N)}),y(w),y(_),s(d,_)},$$slots:{default:!0}}),s(u,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}const wo=(a,t)=>{const e=window.getSelection();if(!e||!n(t))return;const r=document.createRange();r.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(r)};var $o=P(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),ko=P("<div><!></div> <!>",1);function Co(a){const t=new ye;let e=A(!1),r=A(void 0),o=A("");const u="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",i=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,p=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,b=U(()=>n(o)===u||n(o)===i||n(o)===p);ee(a,{contextmenu:t,scoped:!0,children:(C,x)=>{Ct(C,{children:(d,f)=>{var _=ko(),c=O(_),l=$(c);Tt(l,{text:"Select text"}),y(c);var w=h(c,2);bt(w,{entries:k=>{at(k,{run:()=>v(e,!n(e)),children:(N,L)=>{z();var H=S("Toggle something");s(N,H)},$$slots:{default:!0}})},children:(k,N)=>{var L=$o(),H=$(L);be(H,lt=>v(r,lt),()=>n(r));var K=h($(H),2),J=h($(K));J.__click=[wo,r],z(),y(K),y(H);var Q=h(H,2),V=$(Q);on(V),y(Q);var D=h(Q,2),Z=h(D,2),Y=$(Z);sn(Y),y(Z);var X=h(Z,2),B=$(X);se(B,{path:"Web/HTML/Global_attributes/contenteditable"}),z(),y(X);var rt=h(X,4),pt=h(rt,4);y(L),j(()=>{ft(L,"color_g_5",n(b)),ft(J,"color_a",n(e)),ft(D,"color_g_5",n(b))}),Ae(V,()=>n(o),lt=>v(o,lt)),Ae(Y,()=>n(o),lt=>v(o,lt)),Se("innerText",rt,()=>n(o),lt=>v(o,lt)),Se("innerText",pt,()=>n(o),lt=>v(o,lt)),s(k,L)},$$slots:{default:!0}}),j(()=>ft(c,"color_d_5",n(b))),s(d,_)},$$slots:{default:!0}})},$$slots:{default:!0}})}fe(["click"]);var To=P(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Io(a){ee(a,{scoped:!0,children:(t,e)=>{Ct(t,{children:(r,o)=>{var u=To(),i=O(u);Tt(i,{text:"Default behaviors"});var p=h(i,2),b=$(p);Mt(b,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),z(6),y(p),s(r,u)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Po=P("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <!> <!> <!> <!> <!> <!>",1);function es(a,t){vt(t,!0);const r=tn("Contextmenu");Ze(a,{tome:r,children:(o,u)=>{var i=Po(),p=h(O(i),2);fo(p);var b=h(p,2);Io(b);var C=h(b,2);yo(C);var x=h(C,2);Co(x);var d=h(x,2);mo(d,{});var f=h(d,2);bn(f),s(o,i)},$$slots:{default:!0}}),ht()}export{es as component};
