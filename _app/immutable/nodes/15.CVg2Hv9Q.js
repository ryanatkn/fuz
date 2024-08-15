var je=Object.defineProperty;var Je=(i,t,n)=>t in i?je(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var dt=(i,t,n)=>(Je(i,typeof t!="symbol"?t+"":t,n),n),de=(i,t,n)=>{if(!t.has(i))throw TypeError("Cannot "+n)};var E=(i,t,n)=>(de(i,t,"read from private field"),n?n.call(i):t.get(i)),K=(i,t,n)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,n)},_e=(i,t,n,r)=>(de(i,t,"write to private field"),r?r.call(i,n):t.set(i,n),n);var Ce=(i,t,n)=>(de(i,t,"access private method"),n);import{f as O,c as u,s as e,a,t as d,d as P,r as l,b as rt,I as Pt,$ as Et}from"../chunks/disclose-version.BDhqTD1c.js";import{i as Me,u as Re,r as Qe,a2 as Ze,a0 as tn,A as S,g as o,n as b,s as pe,f as fe,p as ht,t as tt,a as pt,d as W,G as Dt,R as ke}from"../chunks/runtime.BIep0U5Y.js";import{T as en}from"../chunks/Tome_Detail.BB3qXyrK.js";import{g as nn}from"../chunks/tome.1RKNoXyc.js";import{M as oe}from"../chunks/Mdn_Link.CzUHFBPn.js";import{T as St}from"../chunks/Tome_Subheading.cjspb3li.js";import{p as F,i as M}from"../chunks/if.CTyMIEjO.js";import{e as Mt}from"../chunks/each.DfDYFt8G.js";import{t as Ft,a as Te,c as on,s as sn}from"../chunks/index.DGwCOmjB.js";import{C as Rt}from"../chunks/Code.DRZWXb4x.js";import{s as _t,c as ae,r as rn,e as an}from"../chunks/attributes.DrO0J316.js";import{s as se}from"../chunks/style.Bk7ejTAN.js";import{b as ge}from"../chunks/this.gzNVxY_l.js";import{p as st,s as Ie}from"../chunks/props.BE2WXVPW.js";import{a as cn,s as At,b as ve,c as Ee,D as ln}from"../chunks/Dialog.B6BdGqzb.js";import{o as Pe}from"../chunks/index-client.DlFG8XBp.js";import{s as vt}from"../chunks/render.DSkk2BLw.js";import{e as xe,g as qe}from"../chunks/utils.BasVy1Zn.js";import{a as me}from"../chunks/string.ZJuK4sHN.js";import{t as gt}from"../chunks/class.CFbCgkTh.js";import{P as un}from"../chunks/Pending_Animation.kWTB1ZBg.js";import{D as dn,b as Se}from"../chunks/Details.Bi1C8foc.js";import{G as _n}from"../chunks/Github_Logo.D2HlLe-m.js";import{C as vn,T as mn}from"../chunks/Theme_Input.CIWMUv_c.js";import{b as Ae}from"../chunks/input.BpdtXeeA.js";function ut(i,t,n){Me(()=>{var r=Re(()=>t(i,n==null?void 0:n())||{});if(n&&(r!=null&&r.update)){var s=!1,v={};Qe(()=>{var c=n();Ze(c),s&&tn(v,c)&&(v=c,r.update(c))}),s=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}var Ct,zt,qt,ce,Le;const le=class le{constructor(t){K(this,ce);K(this,Ct,new WeakMap);K(this,zt,void 0);K(this,qt,void 0);_e(this,qt,t)}observe(t,n){var r=E(this,Ct).get(t)||new Set;return r.add(n),E(this,Ct).set(t,r),Ce(this,ce,Le).call(this).observe(t,E(this,qt)),()=>{var s=E(this,Ct).get(t);s.delete(n),s.size===0&&(E(this,Ct).delete(t),E(this,zt).unobserve(t))}}};Ct=new WeakMap,zt=new WeakMap,qt=new WeakMap,ce=new WeakSet,Le=function(){return E(this,zt)??_e(this,zt,new ResizeObserver(t=>{for(var n of t){le.entries.set(n.target,n);for(var r of E(this,Ct).get(n.target)||[])r(n)}}))},dt(le,"entries",new WeakMap);let he=le;var hn=new he({box:"border-box"});function ze(i,t,n){var r=hn.observe(i,()=>n(i[t]));Me(()=>(Re(()=>n(i[t])),r))}var pn=d('<span class="font_mono">contextmenu</span> event',1),fn=d('<span class="font_mono">navigator.vibrate</span>'),gn=d('<span class="font_mono">navigator.vibrate</span>'),xn=d(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function bn(i){var t=xn(),n=O(t),r=u(n);St(r,{text:"Expected behaviors",slug:"expected-behaviors"});var s=e(e(r,!0)),v=e(u(s));e(e(v,!0)),P(),l(s);var c=e(e(s,!0)),y=e(u(c));oe(y,{path:"Web/API/Element/contextmenu_event",children:(ft,g)=>{var h=pn();O(h),P(),a(ft,h)},$$slots:{default:!0}});var T=e(e(y,!0)),I=e(e(T,!0));oe(I,{path:"Web/API/Navigator/vibrate",children:(ft,g)=>{var h=fn();a(ft,h)},$$slots:{default:!0}}),P(),l(c);var w=e(e(c,!0)),p=e(u(w));e(e(p,!0)),P(),l(w);var f=e(e(w,!0)),x=e(e(f,!0)),m=u(x),_=e(e(m,!0)),$=e(e(_,!0)),C=e(e($,!0));e(u(C)),l(C),l(x);var k=e(e(x,!0)),A=e(e(k,!0)),q=u(A),R=e(e(q,!0)),L=e(e(R,!0)),j=e(e(L,!0)),nt=e(e(j,!0)),H=e(e(nt,!0)),D=e(u(H));oe(D,{path:"Web/API/Navigator/vibrate",children:(ft,g)=>{var h=gn();a(ft,h)},$$slots:{default:!0}}),P(),l(H),l(A),l(n);var J=e(e(n,!0)),B=u(J);St(B,{text:"Motivation",slug:"motivation"});var U=e(e(B,!0)),V=e(e(U,!0)),ct=u(V);e(e(ct,!0)),l(V);var Q=e(e(V,!0));e(u(Q)),P(),l(Q);var lt=e(e(Q,!0)),at=e(e(lt,!0)),Y=e(e(at,!0)),G=e(e(Y,!0)),xt=u(G),bt=e(e(xt,!0)),wt=e(e(bt,!0));e(e(wt,!0)),l(G),l(J),a(i,t)}function yn(i){const t=i-1;return t*t*t+1}function wn(i){return--i*i*i*i*i+1}function Oe(i,{from:t,to:n},r={}){const s=getComputedStyle(i),v=s.transform==="none"?"":s.transform,[c,y]=s.transformOrigin.split(" ").map(parseFloat),T=t.left+t.width*c/n.width-(n.left+c),I=t.top+t.height*y/n.height-(n.top+y),{delay:w=0,duration:p=x=>Math.sqrt(x)*120,easing:f=yn}=r;return{delay:w,duration:typeof p=="function"?p(Math.sqrt(T*T+I*I)):p,easing:f,css:(x,m)=>{const _=m*T,$=m*I,C=x+m*t.width/n.width,k=x+m*t.height/n.height;return`transform: ${v} translate(${_}px, ${$}px) scale(${C}, ${k});`}}}var Lt,Ht;class He{constructor(){K(this,Lt,S(0));K(this,Ht,S(0))}get width(){return o(E(this,Lt))}set width(t){b(E(this,Lt),F(t))}get height(){return o(E(this,Ht))}set height(t){b(E(this,Ht),F(t))}}Lt=new WeakMap,Ht=new WeakMap;var Ut,Ot,Wt,Bt,Vt;class $n{constructor(t,n){dt(this,"is_menu",!1);dt(this,"menu");K(this,Ut,S(!1));K(this,Ot,S());K(this,Wt,S(!1));K(this,Bt,S(null));K(this,Vt,S(null));this.menu=t,E(this,Ot).v=F(n)}get selected(){return o(E(this,Ut))}set selected(t){b(E(this,Ut),F(t))}get run(){return o(E(this,Ot))}set run(t){b(E(this,Ot),F(t))}get pending(){return o(E(this,Wt))}set pending(t){b(E(this,Wt),F(t))}get error_message(){return o(E(this,Bt))}set error_message(t){b(E(this,Bt),F(t))}get promise(){return o(E(this,Vt))}set promise(t){b(E(this,Vt),F(t))}}Ut=new WeakMap,Ot=new WeakMap,Wt=new WeakMap,Bt=new WeakMap,Vt=new WeakMap;var Xt,Yt;class Cn{constructor(t,n){dt(this,"is_menu",!0);dt(this,"menu");dt(this,"depth");K(this,Xt,S(!1));K(this,Yt,S(F([])));this.menu=t,this.depth=n}get selected(){return o(E(this,Xt))}set selected(t){b(E(this,Xt),F(t))}get items(){return o(E(this,Yt))}set items(t){b(E(this,Yt),F(t))}}Xt=new WeakMap,Yt=new WeakMap;var Gt;class kn{constructor(){dt(this,"is_menu",!0);dt(this,"menu",null);dt(this,"depth",1);K(this,Gt,S(F([])))}get items(){return o(E(this,Gt))}set items(t){b(E(this,Gt),F(t))}}Gt=new WeakMap;var Kt,jt,Jt,Qt,Zt,te,ee;class be{constructor(t){dt(this,"layout");dt(this,"initial_layout");K(this,Kt,S(!1));K(this,jt,S(0));K(this,Jt,S(0));K(this,Qt,S(F([])));K(this,Zt,S());K(this,te,S(F(new kn)));K(this,ee,S(F([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new He}get opened(){return o(E(this,Kt))}set opened(t){b(E(this,Kt),F(t))}get x(){return o(E(this,jt))}set x(t){b(E(this,jt),F(t))}get y(){return o(E(this,Jt))}set y(t){b(E(this,Jt),F(t))}get params(){return o(E(this,Qt))}set params(t){b(E(this,Qt),F(t))}get error(){return o(E(this,Zt))}set error(t){b(E(this,Zt),F(t))}get root_menu(){return o(E(this,te))}set root_menu(t){b(E(this,te),F(t))}get selections(){return o(E(this,ee))}set selections(t){b(E(this,ee),F(t))}open(t,n,r){this.selections.length=0,this.opened=!0,this.x=n,this.y=r,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise!==null&&(n.promise=null),n.error_message!==null&&(n.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let n;try{n=t.run()}catch(r){const s=typeof(r==null?void 0:r.message)=="string"?r.message:void 0;t.error_message=s??"unknown error",this.error=s}if(cn(n)){t.pending=!0,t.error_message=null;const r=t.promise=n.then(s=>{if(r===t.promise){if(typeof(s==null?void 0:s.ok)=="boolean")if(s.ok)this.close();else{const v=typeof s.message=="string"?s.message:void 0;t.error_message=v??"unknown error",this.error=v}else this.close();return s}},s=>{if(r!==t.promise)return;const v=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=v??"unknown error",this.error=v}).finally(()=>{r===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const r of this.selections)r.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var n;const{items:t}=((n=this.selections.at(-1))==null?void 0:n.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const n=Fe()??this.root_menu,r=new $n(n,t);return n.items.push(r),Pe(()=>{n.items.length=0}),r}add_submenu(){const t=Fe()??this.root_menu,n=new Cn(t,t.depth+1);return t.items.push(n),zn(n),Pe(()=>{t.items.length=0}),n}}Kt=new WeakMap,jt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap,te=new WeakMap,ee=new WeakMap;const ye="contextmenu",Tn=`a,[data-${ye}]`,re=new Map;let In=0;const En=(i,t)=>{if(t==null)return;const n=(In+=1)-1+"";return i.dataset[ye]=n,re.set(n,t),{update:r=>{re.set(n,r)},destroy:()=>{re.delete(n)}}},Pn=17,Ne=(i,t,n,r)=>{const s=Sn(i);return s!=null&&s.length?(r.open(s,t,n),navigator.vibrate&&navigator.vibrate(Pn),!0):!1},Sn=i=>{var v;let t=null,n=i,r,s;for(;n=n==null?void 0:n.closest(Tn);){if(r=n.dataset[ye]){if(t??(t=[]),s=re.get(r),s===void 0)continue;Array.isArray(s)?(t??(t=[])).push(...s):(t??(t=[])).push(s)}n.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const c=(v=window.getSelection())==null?void 0:v.toString();c&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(c)}})}return t},Ue=Symbol(),An=i=>pe(Ue,i),we=()=>fe(Ue),We=Symbol(),zn=i=>pe(We,i),Fe=()=>fe(We),Be=Symbol(),Ve=(i=new He)=>(pe(Be,i),i),On=()=>fe(Be);var Nn=(i,t)=>t.close(),Fn=d('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Xe(i,t){ht(t,!0);const n="🔗",r=st(t,"icon",3,n),s=we(),v=(C,k=location.host)=>{const A=me(me(C,"https://"),"http://");return A.startsWith(k+"/")?me(A,k):A},c=W(()=>v(t.href)),y=W(()=>!(o(c)[0]==="."||o(c)[0]==="/"&&o(c)[1]!=="/")),T=W(()=>o(y)?"noreferrer":void 0);var I=Fn(),w=u(I);w.__click=[Nn,s];var p=u(w),f=u(p),x=u(f);M(x,()=>typeof r()=="string",C=>{var k=Pt();tt(()=>vt(k,r())),a(C,k)},C=>{var k=rt(),A=O(k);_t(A,r,()=>n),a(C,k)}),l(f);var m=e(e(f,!0)),_=u(m),$=u(_);M($,()=>t.children,C=>{var k=rt(),A=O(k);_t(A,()=>t.children),a(C,k)},C=>{var k=Pt();tt(()=>vt(k,o(c))),a(C,k)}),l(_),l(m),l(p),l(w),l(I),tt(()=>{ae(w,"href",t.href),ae(w,"rel",o(T))}),a(i,I),pt()}xe(["click"]);var Dn=d("⚠️",1),Mn=d('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function it(i,t){ht(t,!0);const n=we(),r=n.add_entry(t.run);Dt(()=>{r.run=t.run});const s=W(()=>r.selected),v=W(()=>r.pending),c=W(()=>r.error_message);var y=Mn();y.__click=()=>{setTimeout(()=>n.activate(r))};var T=u(y),I=u(T),w=u(I);M(w,()=>typeof t.icon=="string",m=>{var _=Pt();tt(()=>vt(_,t.icon)),a(m,_)},m=>{var _=rt(),$=O(_);M($,()=>t.icon,C=>{var k=rt(),A=O(k);_t(A,()=>t.icon),a(C,k)},null,!0),a(m,_)}),l(I);var p=e(e(I,!0)),f=u(p);_t(f,()=>t.children),l(p);var x=e(e(p,!0));M(x,()=>o(v),m=>{un(m,{})},m=>{var _=rt(),$=O(_);M($,()=>o(c),C=>{var k=Dn();a(C,k)},null,!0),a(m,_)}),l(T),l(y),tt(()=>{ae(y,"title",o(c)?`Error: ${o(c)}`:void 0),gt(y,"selected",o(s))}),qe("mouseenter",y,m=>{At(m),n.select(r)}),a(i,y),pt()}xe(["click"]);function Ye(i,t){it(i,{get run(){return t.run},icon:r=>{P();var s=Pt();tt(()=>vt(s,t.icon)),a(r,s)},children:(r,s)=>{P();var v=Pt();tt(()=>vt(v,t.content)),a(r,v)},$$slots:{default:!0}})}var Rn=d('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),qn=d('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Ln=d('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Hn=d("<!> <!> <!>",1);function ne(i,t){ht(t,!0);const n=(g,h=ke)=>{Xe(g,Ie(h))},r=(g,h=ke)=>{Ye(g,Ie(h))},s=st(t,"contextmenu",19,()=>new be),v=st(t,"longpress_move_tolerance",3,21),c=st(t,"longpress_duration",3,633),y=st(t,"bypass_with_tap_then_longpress",3,!0),T=st(t,"tap_then_longpress_duration",3,660),I=st(t,"tap_then_longpress_move_tolerance",3,7),w=st(t,"open_offset_x",19,()=>-2),p=st(t,"open_offset_y",19,()=>-2),f=st(t,"scoped",3,!1);An(s());let x=S(void 0);const m=W(()=>s().layout),_=W(()=>s().initial_layout),$=W(()=>o(m)===o(_));let C=S(void 0),k=S(void 0);Dt(()=>{!o($)&&o(C)!==void 0&&(o(m).width=o(C))}),Dt(()=>{!o($)&&o(k)!==void 0&&(o(m).height=o(k))});const A=Ve();Dt(()=>{if(o(x)){const g=o(x).getBoundingClientRect();A.width=g.width,A.height=g.height}});const q=W(()=>s().x+Math.min(0,o(m).width-(s().x+A.width))),R=W(()=>s().y+Math.min(0,o(m).height-(s().y+A.height)));let L=S(void 0),j=S(void 0),nt=S(void 0),H=S(void 0),D=S(void 0),J=S(void 0);const B=()=>{o(D)&&b(D,!1),o(H)!=null&&(clearTimeout(o(H)),b(H,null))},U=g=>{var z;if(o(J)){b(J,!1);return}if(o(D)){B(),At(g);return}const{target:h}=g;g.shiftKey||!(h instanceof HTMLElement||h instanceof SVGElement)||(z=o(x))!=null&&z.contains(h)||ve(h)||Ee(h)||Ne(h,g.clientX+w(),g.clientY+p(),s())&&(At(g),B())},V=g=>{o(D)&&b(D,!1);const{touches:h,target:z}=g;if(s().opened||h.length!==1||g.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||ve(z)||Ee(z))return;const{clientX:N,clientY:X}=h[0];if(y()){if(o(nt)!=null&&performance.now()-o(nt)<T()&&Math.hypot(N-o(L),X-o(j))<I()){b(J,!0),b(nt,null);return}b(nt,F(performance.now()))}b(L,F(N)),b(j,F(X)),o(H)!=null&&B(),b(H,F(setTimeout(()=>{b(D,!0),Ne(z,o(L)+w(),o(j)+p(),s())},c())))},ct=g=>{if(o(H)==null)return;const{touches:h}=g;if(h.length!==1)return;const{clientX:z,clientY:N}=h[0];Math.hypot(z-o(L),N-o(j))>v()&&(s().opened&&s().close(),B())},Q=g=>{o(H)!=null&&(o(D)&&At(g),B())},lt=g=>{o(x)&&!o(x).contains(g.target)&&s().close()},at=new Map([["Escape",()=>s().close()],["ArrowLeft",()=>s().collapse_selected()],["ArrowRight",()=>s().expand_selected()],["ArrowDown",()=>s().select_next()],["PageDown",()=>s().select_next()],["ArrowUp",()=>s().select_previous()],["PageUp",()=>s().select_previous()],["Home",()=>s().select_first()],["End",()=>s().select_last()],[" ",()=>s().activate_selected()],["Enter",()=>s().activate_selected()]]),Y=g=>{const h=at.get(g.key);!h||ve(g.target)||(At(g),h())},G=(g,h)=>{let z=null,N=null;const X=Z=>{z&&g.removeEventListener(N,z),Z.disabled||(g.addEventListener(Z.event,Z.cb,{capture:!0,passive:Z.passive}),z=Z.cb,N=Z.event)};return X(h),{update:Z=>{X(Z)},destroy:()=>{z&&g.removeEventListener(N,z)}}};var xt=Hn(),bt=O(xt);M(bt,f,g=>{var h=Rn(),z=u(h);_t(z,()=>t.children),l(h),ut(h,(N,X)=>G(N,X),()=>({event:"contextmenu",passive:!1,cb:U})),ut(h,(N,X)=>G(N,X),()=>({event:"touchstart",passive:!0,cb:V})),ut(h,(N,X)=>G(N,X),()=>({event:"touchmove",passive:!0,cb:ct})),ut(h,(N,X)=>G(N,X),()=>({event:"touchend",passive:!1,cb:Q})),ut(h,(N,X)=>G(N,X),()=>({event:"touchcancel",passive:!1,cb:Q})),a(g,h)},g=>{var h=rt(),z=O(h);_t(z,()=>t.children),a(g,h)});var wt=e(e(bt,!0));M(wt,()=>!o($),g=>{var h=qn();ze(h,"clientHeight",z=>b(k,z)),ze(h,"clientWidth",z=>b(C,z)),a(g,h)});var ft=e(e(wt,!0));M(ft,()=>s().opened,g=>{var h=Ln();ge(h,z=>b(x,z),()=>o(x)),Mt(h,20,()=>s().params,(z,N)=>z,(z,N,X)=>{var Z=rt(),mt=O(Z);M(mt,()=>typeof N=="function",kt=>{var et=rt(),yt=O(et);_t(yt,()=>N),a(kt,et)},kt=>{var et=rt(),yt=O(et);M(yt,()=>N.snippet==="link",Tt=>{n(Tt,()=>N.props)},Tt=>{var ot=rt(),Nt=O(ot);M(Nt,()=>N.snippet==="text",ue=>{r(ue,()=>N.props)},null,!0),a(Tt,ot)},!0),a(kt,et)}),a(z,Z)}),l(h),tt(()=>se(h,"transform",`translate3d(${o(q)??""}px, ${o(R)??""}px, 0)`)),a(g,h)}),ut(Et,(g,h)=>G(g,h),()=>({event:"contextmenu",passive:!1,cb:U,disabled:f()})),ut(Et,(g,h)=>G(g,h),()=>({event:"touchstart",passive:!0,cb:V,disabled:f()})),ut(Et,(g,h)=>G(g,h),()=>({event:"touchmove",passive:!0,cb:ct,disabled:f()})),ut(Et,(g,h)=>G(g,h),()=>({event:"touchend",passive:!1,cb:Q,disabled:f()})),ut(Et,(g,h)=>G(g,h),()=>({event:"touchcancel",passive:!1,cb:Q,disabled:f()})),ut(Et,(g,h)=>G(g,h),()=>({event:"mousedown",passive:!0,cb:lt,disabled:!s().opened})),ut(Et,(g,h)=>G(g,h),()=>({event:"keydown",passive:!1,cb:Y,disabled:!s().opened})),a(i,xt),pt()}var Un=d('<span class="display_contents"><!></span>');function $t(i,t){ht(t,!0);var n=Un(),r=u(n);_t(r,()=>t.children),l(n),ut(n,(s,v)=>En(s,v),()=>t.entries),a(i,n),pt()}var Wn=d('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Bn=d('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function $e(i,t){ht(t,!0);const n=we(),r=n.add_submenu(),{layout:s}=n,v=W(()=>r.selected);let c=S(void 0);const y=On(),T=Ve();let I=S(0),w=S(0);Dt(()=>{o(c)&&p(o(c),s,y)});const p=(q,R,L)=>{const{x:j,y:nt,width:H,height:D}=q.getBoundingClientRect();T.width=H,T.height=D;const J=j-o(I),B=nt-o(w),U=J+H+L.width-R.width;if(U<=0)b(I,F(L.width));else{const V=H-J;V<=0?b(I,-H):V>U?b(I,L.width-U):b(I,V-H)}b(w,F(Math.min(0,R.height-(B+D))))};var f=Bn(),x=u(f),m=u(x),_=u(m),$=u(_);M($,()=>t.icon,q=>{var R=rt(),L=O(R);_t(L,()=>t.icon),a(q,R)}),l(_);var C=e(e(_,!0)),k=u(C);_t(k,()=>t.children),l(C),l(m),e(e(m,!0)),l(x);var A=e(e(x,!0));M(A,()=>o(v),q=>{var R=Wn();ge(R,j=>b(c,j),()=>o(c));var L=u(R);_t(L,()=>t.menu),l(R),tt(()=>{se(R,"transform",`translate3d(${o(I)??""}px, ${o(w)??""}px, 0)`),se(R,"max-height",`${s.height??""}px`)}),a(q,R)}),l(f),tt(()=>{se(f,"--contextmenu_depth",r.depth),ae(x,"aria-expanded",o(v)),gt(x,"selected",o(v))}),qe("mouseenter",x,q=>{At(q),setTimeout(()=>n.select(r))}),a(i,f),pt()}var Vn=d("🏠",1),Xn=d("🌄",1),Yn=d("go home",1),Gn=d("go adventure",1),Kn=d("🌄",1),jn=d("🏠",1),Jn=d("do adventure",1),Qn=d("be home",1),Zn=d("<!> <!>",1);function ie(i,t){ht(t,!0);const n=st(t,"name",3,"Cat"),r=st(t,"icon",3,"😺");$e(i,{icon:c=>{P();var y=Pt();tt(()=>vt(y,r())),a(c,y)},menu:c=>{var y=Zn(),T=O(y);it(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:p=>{var f=rt(),x=O(f);M(x,()=>t.position==="adventure",m=>{var _=Vn();a(m,_)},m=>{var _=Xn();a(m,_)}),a(p,f)},children:(p,f)=>{var x=rt(),m=O(x);M(m,()=>t.position==="adventure",_=>{var $=Yn();a(_,$)},_=>{var $=Gn();a(_,$)}),a(p,x)},$$slots:{default:!0}});var I=e(e(T,!0));it(I,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:p=>{var f=rt(),x=O(f);M(x,()=>t.position==="adventure",m=>{var _=Kn();a(m,_)},m=>{var _=jn();a(m,_)}),a(p,f)},children:(p,f)=>{var x=rt(),m=O(x);M(m,()=>t.position==="adventure",_=>{var $=Jn();a(_,$)},_=>{var $=Qn();a(_,$)}),a(p,x)},$$slots:{default:!0}}),a(c,y)},children:(c,y)=>{P();var T=Pt();tt(()=>vt(T,n())),a(c,T)},$$slots:{default:!0}}),pt()}var to=d("Source code",1),eo=d("?",1),no=d("About",1),oo=d("<!> <!>",1);function so(i,t){var n=oo(),r=O(n);Xe(r,{href:"https://github.com/ryanatkn/fuz",icon:c=>{_n(c,{size:"var(--icon_size_xs)"})},children:(c,y)=>{P();var T=to();a(c,T)},$$slots:{default:!0}});var s=e(e(r,!0));it(s,{get run(){return t.toggle_about_dialog},icon:c=>{P();var y=eo();a(c,y)},children:(c,y)=>{P();var T=no();a(c,T)},$$slots:{default:!0}}),a(i,n)}const Ge=i=>{const t=i.length;if(t===2)return"cats";if(t===0)return null;const n=i[0];return n.icon+n.name};var ro=d("🏠",1),ao=d("🐈‍⬛",1),io=d("call",1),co=d("🏠",1),lo=d("be",1),uo=d("🦋",1),_o=d("leave",1),vo=d("<!> <!>",1),mo=d("<!> <!> <!>",1),ho=d("home",1);function po(i,t){ht(t,!0);const n=W(()=>Ge(t.adventure_cats));$e(i,{icon:v=>{P();var c=ro();a(v,c)},menu:v=>{var c=mo(),y=O(c);M(y,()=>o(n),w=>{it(w,{run:()=>t.act({type:"call_cats_home"}),icon:f=>{P();var x=ao();a(f,x)},children:(f,x)=>{P();var m=io();a(f,m)},$$slots:{default:!0}})});var T=e(e(y,!0));Mt(T,17,()=>t.home_cats,(w,p)=>w.name,(w,p,f)=>{ie(w,{get name(){return o(p).name},get icon(){return o(p).icon},get position(){return o(p).position},get act(){return t.act}})});var I=e(e(T,!0));M(I,()=>!o(n),w=>{var p=vo(),f=O(p);it(f,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:_=>{P();var $=co();a(_,$)},children:(_,$)=>{P();var C=lo();a(_,C)},$$slots:{default:!0}});var x=e(e(f,!0));it(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:_=>{P();var $=uo();a(_,$)},children:(_,$)=>{P();var C=_o();a(_,C)},$$slots:{default:!0}}),a(w,p)}),a(v,c)},children:(v,c)=>{P();var y=ho();a(v,y)},$$slots:{default:!0}}),pt()}var fo=d("🌄",1),go=d("🦋",1),xo=d("call",1),bo=d("🌄",1),yo=d("do",1),wo=d("🐈‍⬛",1),$o=d("leave",1),Co=d("<!> <!>",1),ko=d("<!> <!> <!>",1),To=d("adventure",1);function Io(i,t){ht(t,!0);const n=W(()=>Ge(t.home_cats));$e(i,{icon:v=>{P();var c=fo();a(v,c)},menu:v=>{var c=ko(),y=O(c);M(y,()=>o(n),w=>{it(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:f=>{P();var x=go();a(f,x)},children:(f,x)=>{P();var m=xo();a(f,m)},$$slots:{default:!0}})});var T=e(e(y,!0));Mt(T,17,()=>t.adventure_cats,(w,p)=>w.name,(w,p,f)=>{ie(w,{get name(){return o(p).name},get icon(){return o(p).icon},get position(){return o(p).position},get act(){return t.act}})});var I=e(e(T,!0));M(I,()=>!o(n),w=>{var p=Co(),f=O(p);it(f,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:_=>{P();var $=bo();a(_,$)},children:(_,$)=>{P();var C=yo();a(_,C)},$$slots:{default:!0}});var x=e(e(f,!0));it(x,{run:()=>t.act({type:"call_cats_home"}),icon:_=>{P();var $=wo();a(_,$)},children:(_,$)=>{P();var C=$o();a(_,C)},$$slots:{default:!0}}),a(w,p)}),a(v,c)},children:(v,c)=>{P();var y=To();a(v,y)},$$slots:{default:!0}}),pt()}var Eo=d('<span class="icon svelte-u0xdy"> </span>'),Po=d('<span class="name svelte-u0xdy"><!> </span>'),So=d('<span class="cat svelte-u0xdy"><!><!></span>');function De(i,t){ht(t,!0);const n=st(t,"name",3,"Cat"),r=st(t,"icon",3,"😺"),s=st(t,"show_name",3,!0),v=st(t,"show_icon",3,!0);var c=So(),y=u(c);M(y,v,I=>{var w=Eo(),p=u(w);l(w),tt(()=>vt(p,r())),a(I,w)});var T=e(y);M(T,s,I=>{var w=Po(),p=u(w);M(p,()=>t.children,x=>{var m=rt(),_=O(m);_t(_,()=>t.children),a(x,m)});var f=e(p,!0);l(w),tt(()=>vt(f,n())),a(I,w)}),l(c),tt(()=>gt(c,"has-icon",v())),a(i,c),pt()}const Ao=`<script lang="ts">
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
`;var zo=d("<!> <!>",1),Oo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),No=d('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),Fo=d('<div class="cat_wrapper svelte-1b1oync"><!></div>'),Do=d('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),Mo=d("View example source",1),Ro=d("<section><!> <!></section> <section><!></section>",1),qo=d("<!> <!>",1),Lo=d('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),Ho=d("<!> <!>",1);function Uo(i,t){ht(t,!0);const n="Alyssa",r="Ben",s="home";let v=S(s),c=S(s);const y=W(()=>o(v)===o(c)?"😺":"😾"),T=W(()=>o(v)===o(c)?"😸":"😿"),I=W(()=>({name:n,icon:o(y),position:o(v)})),w=W(()=>({name:r,icon:o(T),position:o(c)}));let p=S(!1);const f=(D,J)=>{const B=[],U=[];for(const V of D){const ct=V.position==="home"?B:U;J?ct.unshift(V):ct.push(V)}return{home_cats:B,adventure_cats:U}},x=W(()=>f([o(I),o(w)],o(p))),m=W(()=>o(x).home_cats),_=W(()=>o(x).adventure_cats),$=W(()=>o(v)!==s||o(c)!==s),C=()=>{b(v,s),b(c,s)};let k=S(!1);const A=()=>{b(k,!o(k))},q=D=>{switch(D.type){case"call_cats_adventure":{b(v,"adventure"),b(c,"adventure");break}case"call_cats_home":{b(v,"home"),b(c,"home");break}case"cat_go_adventure":{D.name===n?b(v,"adventure"):D.name===r&&b(c,"adventure");break}case"cat_go_home":{D.name===n?b(v,"home"):D.name===r&&b(c,"home");break}case"cat_be_or_do":{b(p,!o(p));break}}},[R,L]=on({fallback:(D,J)=>{const B=window.getComputedStyle(D),U=B.transform==="none"?"":B.transform;return{duration:1500,easing:wn,css:V=>`
					transform: ${U} scale(${V});
					opacity: ${V}
				`}}});var j=Ho(),nt=O(j);ne(nt,{scoped:!0,children:(D,J)=>{var B=qo(),U=O(B);St(U,{text:"Full example",slug:"full-example"});var V=e(e(U,!0));$t(V,{entries:Q=>{var lt=zo(),at=O(lt);M(at,()=>o($),G=>{Ye(G,{run:C,content:"Reset",icon:"↻"})});var Y=e(e(at,!0));so(Y,{toggle_about_dialog:A}),a(Q,lt)},children:(Q,lt)=>{var at=Ro(),Y=O(at),G=u(Y);$t(G,{entries:g=>{po(g,{act:q,get home_cats(){return o(m)},get adventure_cats(){return o(_)}})},children:(g,h)=>{var z=No(),N=u(z),X=e(e(N,!0));Mt(X,29,()=>o(m),({name:Z,icon:mt,position:kt},et)=>Z,(Z,mt,kt)=>{let et=()=>o(mt).name,yt=()=>o(mt).icon,Tt=()=>o(mt).position;var ot=Oo(),Nt=u(ot);$t(Nt,{entries:It=>{ie(It,{act:q,get name(){return et()},get icon(){return yt()},get position(){return Tt()}})},children:(It,Ke)=>{De(It,{get name(){return et()},get icon(){return yt()}})},$$slots:{default:!0}}),l(ot),Ft(1,ot,()=>L,()=>({key:et()})),Ft(2,ot,()=>R,()=>({key:et()})),Te(ot,()=>Oe,null),a(Z,ot)}),l(X),l(z),a(g,z)},$$slots:{default:!0}});var xt=e(e(G,!0));$t(xt,{entries:g=>{Io(g,{act:q,get home_cats(){return o(m)},get adventure_cats(){return o(_)}})},children:(g,h)=>{var z=Do(),N=u(z),X=e(e(N,!0));Mt(X,29,()=>o(_),({name:Z,icon:mt,position:kt},et)=>Z,(Z,mt,kt)=>{let et=()=>o(mt).name,yt=()=>o(mt).icon,Tt=()=>o(mt).position;var ot=Fo(),Nt=u(ot);$t(Nt,{entries:It=>{ie(It,{act:q,get name(){return et()},get icon(){return yt()},get position(){return Tt()}})},children:(It,Ke)=>{De(It,{get name(){return et()},get icon(){return yt()}})},$$slots:{default:!0}}),l(ot),Ft(1,ot,()=>L,()=>({key:et()})),Ft(2,ot,()=>R,()=>({key:et()})),Te(ot,()=>Oe,null),a(Z,ot)}),l(X),l(z),a(g,z)},$$slots:{default:!0}}),l(Y);var bt=e(e(Y,!0)),wt=u(bt);dn(wt,{summary:g=>{P();var h=Mo();a(g,h)},children:(g,h)=>{Rt(g,{content:Ao})},$$slots:{default:!0}}),l(bt),a(Q,at)},$$slots:{default:!0}}),a(D,B)},$$slots:{default:!0}});var H=e(e(nt,!0));M(H,()=>o(k),D=>{ln(D,{onclose:()=>b(k,!1),children:(J,B)=>{var U=Lo(),V=u(U),ct=e(e(V,!0)),Q=e(e(ct,!0)),lt=e(u(Q));e(lt),l(Q);var at=e(e(Q,!0));e(u(at)),l(at);var Y=e(e(at,!0)),G=u(Y),xt=e(e(G,!0));vn(xt,{});var bt=e(e(xt,!0)),wt=e(e(bt,!0));mn(wt,{}),l(Y),l(U),a(J,U)},$$slots:{default:!0}})}),a(i,j),pt()}var Wo=d("Hello world",1),Bo=d("🌞",1),Vo=d("Hello with an optional icon snippet",1),Xo=d("Hello with an optional icon string",1),Yo=d("<!> <!> <!>",1),Go=d(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),Ko=d("<!> <!>",1);function jo(i){let t=S(!1),n=S(!1),r=S(!1);var s=Ko(),v=O(s);St(v,{text:"Basic usage",slug:"basic-usage"});var c=e(e(v,!0));ne(c,{scoped:!0,children:(y,T)=>{$t(y,{entries:w=>{var p=Yo(),f=O(p);it(f,{run:()=>b(t,!o(t)),children:(_,$)=>{P();var C=Wo();a(_,C)},$$slots:{default:!0}});var x=e(e(f,!0));it(x,{run:()=>b(n,!o(n)),icon:$=>{P();var C=Bo();a($,C)},children:($,C)=>{P();var k=Vo();a($,k)},$$slots:{default:!0}});var m=e(e(x,!0));it(m,{run:()=>b(r,!o(r)),icon:"🌚",children:(_,$)=>{P();var C=Xo();a(_,C)},$$slots:{default:!0}}),a(w,p)},children:(w,p)=>{var f=Go(),x=u(f),m=e(e(x,!0)),_=W(()=>`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${o(t)} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${o(n)} />
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
...markup without contextmenu behavior...`);Rt(m,{get content(){return o(_)}});var $=e(e(m,!0)),C=u($),k=u(C);l(C),l($);var A=e(e($,!0)),q=u(A),R=u(q);l(q),l(A);var L=e(e(A,!0)),j=u(L),nt=u(j);l(j),l(L);var H=e(e(L,!0));e(u(H)),P(),l(H),l(f),tt(()=>{gt(C,"color_g_5",o(t)),vt(k,`greeted = ${o(t)??""}`),gt(q,"color_e_5",o(n)),vt(R,`greeted_icon_snippet = ${o(n)??""}`),gt(j,"color_d_5",o(r)),vt(nt,`greeted_icon_string = ${o(r)??""}`)}),a(w,f)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(i,s)}var Jo=d("Toggle",1),Qo=d("<div>toggled</div>"),Zo=d(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),ts=d("<!> <!>",1);function es(i){const t=new be;let n=S(!1);ne(i,{contextmenu:t,scoped:!0,children:(r,s)=>{var v=ts(),c=O(v);St(c,{text:"Custom instance",slug:"custom-instance"});var y=e(e(c,!0));$t(y,{entries:I=>{it(I,{run:()=>b(n,!o(n)),children:(w,p)=>{P();var f=Jo();a(w,f)},$$slots:{default:!0}})},children:(I,w)=>{var p=Zo(),f=u(p);Rt(f,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var x=e(e(f,!0));Rt(x,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var m=e(e(x,!0)),_=e(u(m));e(e(_,!0)),P(),l(m);var $=e(e(m,!0)),C=u($);M(C,()=>o(n),k=>{var A=Qo();Ft(3,A,()=>sn),a(k,A)}),l($),l(p),a(I,p)},$$slots:{default:!0}}),a(r,v)},$$slots:{default:!0}})}const ns=(i,t)=>{const n=window.getSelection();if(!n||!o(t))return;const r=document.createRange();r.selectNodeContents(o(t)),n.removeAllRanges(),n.addRange(r)};var os=d("Toggle something",1),ss=d(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),rs=d("<div><!></div> <!>",1);function as(i){const t=new be;let n=S(!1),r=S(void 0),s=S("");const v="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",c=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,y=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,T=W(()=>o(s)===v||o(s)===c||o(s)===y);ne(i,{contextmenu:t,scoped:!0,children:(I,w)=>{var p=rs(),f=O(p),x=u(f);St(x,{text:"Select text",slug:"select-text"}),l(f);var m=e(e(f,!0));$t(m,{entries:$=>{it($,{run:()=>b(n,!o(n)),children:(C,k)=>{P();var A=os();a(C,A)},$$slots:{default:!0}})},children:($,C)=>{var k=ss(),A=u(k);ge(A,Y=>b(r,Y),()=>o(r));var q=u(A);e(u(q)),P(),l(q);var R=e(e(q,!0)),L=e(u(R));L.__click=[ns,r],P(),l(R),l(A);var j=e(e(A,!0)),nt=u(j);rn(nt),l(j);var H=e(e(j,!0)),D=e(u(H));e(e(D,!0)),P(),l(H);var J=e(e(H,!0)),B=u(J);an(B),l(J);var U=e(e(J,!0)),V=u(U);oe(V,{path:"Web/HTML/Global_attributes/contenteditable"}),P(),l(U);var ct=e(e(U,!0));u(ct),l(ct);var Q=e(e(ct,!0)),lt=e(e(Q,!0));u(lt),l(lt);var at=e(e(lt,!0));l(k),tt(()=>{gt(k,"color_g_5",o(T)),gt(L,"color_a",o(n)),gt(H,"color_g_5",o(T))}),Ae(nt,()=>o(s),Y=>b(s,Y)),Ae(B,()=>o(s),Y=>b(s,Y)),Se("innerText",Q,()=>o(s),Y=>b(s,Y)),Se("innerText",at,()=>o(s),Y=>b(s,Y)),a($,k)},$$slots:{default:!0}}),tt(()=>gt(f,"color_d_5",o(T))),a(I,p)},$$slots:{default:!0}})}xe(["click"]);var is=d(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function cs(i){ne(i,{scoped:!0,children:(t,n)=>{var r=is(),s=O(r);St(s,{text:"Default behaviors",slug:"default-behaviors"});var v=e(e(s,!0)),c=u(v);Rt(c,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`});var y=e(e(c,!0)),T=e(u(y));e(e(T,!0)),P(),l(y);var I=e(e(y,!0));e(e(I,!0)),l(v),a(t,r)},$$slots:{default:!0}})}var ls=d("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Ds(i,t){ht(t,!0);const r=nn("Contextmenu");en(i,{tome:r,children:(s,v)=>{var c=ls(),y=O(c),T=u(y),I=u(T);e(u(I)),P(),l(I),l(T);var w=e(e(T,!0));u(w),l(w),l(y);var p=e(e(y,!0)),f=u(p);jo(f),l(p);var x=e(e(p,!0)),m=u(x);cs(m),l(x);var _=e(e(x,!0)),$=u(_);es($),l(_);var C=e(e(_,!0)),k=u(C);as(k),l(C);var A=e(e(C,!0)),q=u(A);Uo(q,{}),l(A);var R=e(e(A,!0)),L=u(R);bn(L),l(R),a(s,c)},$$slots:{default:!0}}),pt()}export{Ds as component};
