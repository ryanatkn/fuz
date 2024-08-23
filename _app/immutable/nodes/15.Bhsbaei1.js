var Ke=Object.defineProperty;var Ge=(r,t,e)=>t in r?Ke(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var ct=(r,t,e)=>(Ge(r,typeof t!="symbol"?t+"":t,e),e),le=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var I=(r,t,e)=>(le(r,t,"read from private field"),e?e.call(r):t.get(r)),W=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},ue=(r,t,e,s)=>(le(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);var we=(r,t,e)=>(le(r,t,"access private method"),e);import{a,t as P,c as ot,b as E}from"../chunks/disclose-version.DcVMHsl4.js";import{u as Fe,v as De,o as je,aH as Je,aF as Qe,f as O,c as b,s as f,n as A,r as g,a5 as S,g as n,F as p,l as ve,m as he,p as _t,t as J,a as mt,d as L,ac as At,at as wt,an as Ce}from"../chunks/runtime.DbtEYBdD.js";import{T as Ze}from"../chunks/Tome_Detail.BxUEs8Nb.js";import{g as tn}from"../chunks/tome.DTaX32zK.js";import{M as ee}from"../chunks/Mdn_Link.nqWMrUci.js";import{T as Ct}from"../chunks/Tome_Subheading.DeWIdqVk.js";import{p as D,i as M}from"../chunks/if.CjTBE8-9.js";import{e as zt}from"../chunks/each.C8-jnsCm.js";import{t as St,a as ke,c as en,s as nn}from"../chunks/index.DKhsTuTF.js";import{C as Ot}from"../chunks/Code.BKk6RzAF.js";import{s as lt,c as se,r as on,e as sn}from"../chunks/attributes.mFyRggzr.js";import{s as ne}from"../chunks/style.Bk7ejTAN.js";import{b as pe}from"../chunks/this.D2QOTIbN.js";import{p as nt,s as $e}from"../chunks/props.DeWI4C6L.js";import{a as an,s as $t,b as de,c as Te,D as rn}from"../chunks/Dialog.sEH6VEiT.js";import{o as Ie}from"../chunks/index-client.DsIkux8S.js";import{s as ut}from"../chunks/render.BYxdHAaC.js";import{e as fe,g as Me}from"../chunks/utils.C7dA-JMV.js";import{a as _e}from"../chunks/string.ZJuK4sHN.js";import{t as ht}from"../chunks/class.Dyhg0P6z.js";import{P as cn}from"../chunks/Pending_Animation.iBZ3zGtj.js";import{D as ln,b as Ee}from"../chunks/Details.Dqz8ymwp.js";import{G as un}from"../chunks/Github_Logo.CwvUcfhG.js";import{C as dn,T as _n}from"../chunks/Theme_Input.DByXmwQh.js";import{b as Pe}from"../chunks/input.DS6ftY69.js";function rt(r,t,e){Fe(()=>{var s=De(()=>t(r,e==null?void 0:e())||{});if(e&&(s!=null&&s.update)){var o=!1,l={};je(()=>{var i=e();Je(i),o&&Qe(l,i)&&(l=i,s.update(i))}),o=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}var gt,Tt,Nt,re,Re;const ie=class ie{constructor(t){W(this,re);W(this,gt,new WeakMap);W(this,Tt,void 0);W(this,Nt,void 0);ue(this,Nt,t)}observe(t,e){var s=I(this,gt).get(t)||new Set;return s.add(e),I(this,gt).set(t,s),we(this,re,Re).call(this).observe(t,I(this,Nt)),()=>{var o=I(this,gt).get(t);o.delete(e),o.size===0&&(I(this,gt).delete(t),I(this,Tt).unobserve(t))}}};gt=new WeakMap,Tt=new WeakMap,Nt=new WeakMap,re=new WeakSet,Re=function(){return I(this,Tt)??ue(this,Tt,new ResizeObserver(t=>{for(var e of t){ie.entries.set(e.target,e);for(var s of I(this,gt).get(e.target)||[])s(e)}}))},ct(ie,"entries",new WeakMap);let me=ie;var mn=new me({box:"border-box"});function Se(r,t,e){var s=mn.observe(r,()=>e(r[t]));Fe(()=>(De(()=>e(r[t])),s))}var vn=P('<span class="font_mono">contextmenu</span> event',1),hn=P('<span class="font_mono">navigator.vibrate</span>'),pn=P('<span class="font_mono">navigator.vibrate</span>'),fn=P(`<section><!> <p>The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
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
			default, so to access your system's functionality on links, tap-and-hold twice.</li></ul></section>`,1);function gn(r){var t=fn(),e=O(t),s=b(e);Ct(s,{text:"Expected behaviors",slug:"expected-behaviors"});var o=f(s,4),l=f(b(o));ee(l,{path:"Web/API/Element/contextmenu_event",children:(u,m)=>{var d=vn();A(),a(u,d)},$$slots:{default:!0}});var i=f(l,4);ee(i,{path:"Web/API/Navigator/vibrate",children:(u,m)=>{var d=hn();a(u,d)},$$slots:{default:!0}}),A(),g(o);var y=f(o,10),T=f(b(y),10),$=f(b(T));ee($,{path:"Web/API/Navigator/vibrate",children:(u,m)=>{var d=pn();a(u,d)},$$slots:{default:!0}}),A(),g(T),g(y),g(e);var x=f(e,2),_=b(x);Ct(_,{text:"Motivation",slug:"motivation"}),A(14),g(x),a(r,t)}function xn(r){const t=r-1;return t*t*t+1}function bn(r){return--r*r*r*r*r+1}function Ae(r,{from:t,to:e},s={}){const o=getComputedStyle(r),l=o.transform==="none"?"":o.transform,[i,y]=o.transformOrigin.split(" ").map(parseFloat),T=t.left+t.width*i/e.width-(e.left+i),$=t.top+t.height*y/e.height-(e.top+y),{delay:x=0,duration:_=m=>Math.sqrt(m)*120,easing:u=xn}=s;return{delay:x,duration:typeof _=="function"?_(Math.sqrt(T*T+$*$)):_,easing:u,css:(m,d)=>{const c=d*T,w=d*$,C=m+d*t.width/e.width,k=m+d*t.height/e.height;return`transform: ${l} translate(${c}px, ${w}px) scale(${C}, ${k});`}}}var Ft,Dt;class qe{constructor(){W(this,Ft,S(0));W(this,Dt,S(0))}get width(){return n(I(this,Ft))}set width(t){p(I(this,Ft),D(t))}get height(){return n(I(this,Dt))}set height(t){p(I(this,Dt),D(t))}}Ft=new WeakMap,Dt=new WeakMap;var Mt,It,Rt,qt,Lt;class yn{constructor(t,e){ct(this,"is_menu",!1);ct(this,"menu");W(this,Mt,S(!1));W(this,It,S());W(this,Rt,S(!1));W(this,qt,S(null));W(this,Lt,S(null));this.menu=t,I(this,It).v=D(e)}get selected(){return n(I(this,Mt))}set selected(t){p(I(this,Mt),D(t))}get run(){return n(I(this,It))}set run(t){p(I(this,It),D(t))}get pending(){return n(I(this,Rt))}set pending(t){p(I(this,Rt),D(t))}get error_message(){return n(I(this,qt))}set error_message(t){p(I(this,qt),D(t))}get promise(){return n(I(this,Lt))}set promise(t){p(I(this,Lt),D(t))}}Mt=new WeakMap,It=new WeakMap,Rt=new WeakMap,qt=new WeakMap,Lt=new WeakMap;var Ht,Ut;class wn{constructor(t,e){ct(this,"is_menu",!0);ct(this,"menu");ct(this,"depth");W(this,Ht,S(!1));W(this,Ut,S(D([])));this.menu=t,this.depth=e}get selected(){return n(I(this,Ht))}set selected(t){p(I(this,Ht),D(t))}get items(){return n(I(this,Ut))}set items(t){p(I(this,Ut),D(t))}}Ht=new WeakMap,Ut=new WeakMap;var Wt;class Cn{constructor(){ct(this,"is_menu",!0);ct(this,"menu",null);ct(this,"depth",1);W(this,Wt,S(D([])))}get items(){return n(I(this,Wt))}set items(t){p(I(this,Wt),D(t))}}Wt=new WeakMap;var Bt,Vt,Xt,Yt,Kt,Gt,jt;class ge{constructor(t){ct(this,"layout");ct(this,"initial_layout");W(this,Bt,S(!1));W(this,Vt,S(0));W(this,Xt,S(0));W(this,Yt,S(D([])));W(this,Kt,S());W(this,Gt,S(D(new Cn)));W(this,jt,S(D([])));this.initial_layout=t==null?void 0:t.layout,this.layout=this.initial_layout??new qe}get opened(){return n(I(this,Bt))}set opened(t){p(I(this,Bt),D(t))}get x(){return n(I(this,Vt))}set x(t){p(I(this,Vt),D(t))}get y(){return n(I(this,Xt))}set y(t){p(I(this,Xt),D(t))}get params(){return n(I(this,Yt))}set params(t){p(I(this,Yt),D(t))}get error(){return n(I(this,Kt))}set error(t){p(I(this,Kt),D(t))}get root_menu(){return n(I(this,Gt))}set root_menu(t){p(I(this,Gt),D(t))}get selections(){return n(I(this,jt))}set selections(t){p(I(this,jt),D(t))}open(t,e,s){this.selections.length=0,this.opened=!0,this.x=e,this.y=s,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const e of t)e.is_menu?this.reset_items(e.items):(e.promise!==null&&(e.promise=null),e.error_message!==null&&(e.error_message=null))}activate(t){if(t.is_menu)this.expand_selected();else{let e;try{e=t.run()}catch(s){const o=typeof(s==null?void 0:s.message)=="string"?s.message:void 0;t.error_message=o??"unknown error",this.error=o}if(an(e)){t.pending=!0,t.error_message=null;const s=t.promise=e.then(o=>{if(s===t.promise){if(typeof(o==null?void 0:o.ok)=="boolean")if(o.ok)this.close();else{const l=typeof o.message=="string"?o.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close();return o}},o=>{if(s!==t.promise)return;const l=typeof(o==null?void 0:o.message)=="string"?o.message:void 0;t.error_message=l??"unknown error",this.error=l}).finally(()=>{s===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const s of this.selections)s.selected=!1;this.selections.length=0;let e=t;do e.selected=!0,this.selections.unshift(e);while((e=e.menu)&&e.menu)}collapse_selected(){if(this.selections.length<=1)return;const t=this.selections.pop();t.selected=!1}expand_selected(){const t=this.selections.at(-1);if(!(t!=null&&t.is_menu))return;const e=t.items[0];e.selected=!0,this.selections.push(e)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===t.menu.items.length-1?0:e+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),e=t.menu.items.indexOf(t);this.select(t.menu.items[e===0?t.menu.items.length-1:e-1])}select_first(){var t;this.select((((t=this.selections.at(-1))==null?void 0:t.menu)??this.root_menu).items[0])}select_last(){var e;const{items:t}=((e=this.selections.at(-1))==null?void 0:e.menu)??this.root_menu;this.select(t.at(-1))}add_entry(t){const e=Oe()??this.root_menu,s=new yn(e,t);return e.items.push(s),Ie(()=>{e.items.length=0}),s}add_submenu(){const t=Oe()??this.root_menu,e=new wn(t,t.depth+1);return t.items.push(e),Sn(e),Ie(()=>{t.items.length=0}),e}}Bt=new WeakMap,Vt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap,Kt=new WeakMap,Gt=new WeakMap,jt=new WeakMap;const xe="contextmenu",kn=`a,[data-${xe}]`,oe=new Map;let $n=0;const Tn=(r,t)=>{if(t==null)return;const e=($n+=1)-1+"";return r.dataset[xe]=e,oe.set(e,t),{update:s=>{oe.set(e,s)},destroy:()=>{oe.delete(e)}}},In=17,ze=(r,t,e,s)=>{const o=En(r);return o!=null&&o.length?(s.open(o,t,e),navigator.vibrate&&navigator.vibrate(In),!0):!1},En=r=>{var l;let t=null,e=r,s,o;for(;e=e==null?void 0:e.closest(kn);){if(s=e.dataset[xe]){if(t??(t=[]),o=oe.get(s),o===void 0)continue;Array.isArray(o)?(t??(t=[])).push(...o):(t??(t=[])).push(o)}e.tagName==="A"&&(t??(t=[])).push({snippet:"link",props:{href:e.href}}),e=e.parentElement}if(t){const i=(l=window.getSelection())==null?void 0:l.toString();i&&t.unshift({snippet:"text",props:{content:"Copy text",icon:"📋",run:()=>void navigator.clipboard.writeText(i)}})}return t},Le=Symbol(),Pn=r=>ve(Le,r),be=()=>he(Le),He=Symbol(),Sn=r=>ve(He,r),Oe=()=>he(He),Ue=Symbol(),We=(r=new qe)=>(ve(Ue,r),r),An=()=>he(Ue);var zn=(r,t)=>t.close(),On=P('<li role="none" class="svelte-xrqtyv"><a class="menu_item plain svelte-xrqtyv" role="menuitem"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-xrqtyv"><!></span></div></div></a></li>');function Be(r,t){_t(t,!0);const e="🔗",s=nt(t,"icon",3,e),o=be(),l=(C,k=location.host)=>{const F=_e(_e(C,"https://"),"http://");return F.startsWith(k+"/")?_e(F,k):F},i=L(()=>l(t.href)),y=L(()=>!(n(i)[0]==="."||n(i)[0]==="/"&&n(i)[1]!=="/")),T=L(()=>n(y)?"noreferrer":void 0);var $=On(),x=b($);x.__click=[zn,o];var _=b(x),u=b(_),m=b(u);M(m,()=>typeof s()=="string",C=>{var k=E();J(()=>ut(k,s())),a(C,k)},C=>{var k=ot(),F=O(k);lt(F,s,()=>e),a(C,k)}),g(u);var d=f(u,2),c=b(d),w=b(c);M(w,()=>t.children,C=>{var k=ot(),F=O(k);lt(F,()=>t.children),a(C,k)},C=>{var k=E();J(()=>ut(k,n(i))),a(C,k)}),g(c),g(d),g(_),g(x),g($),J(()=>{se(x,"href",t.href),se(x,"rel",n(T))}),a(r,$),mt()}fe(["click"]);var Nn=P('<li class="menu_item plain selectable deselectable svelte-10kraez" role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function at(r,t){_t(t,!0);const e=be(),s=e.add_entry(t.run);At(()=>{s.run=t.run});const o=L(()=>s.selected),l=L(()=>s.pending),i=L(()=>s.error_message);var y=Nn();y.__click=()=>{setTimeout(()=>e.activate(s))};var T=b(y),$=b(T),x=b($);M(x,()=>typeof t.icon=="string",d=>{var c=E();J(()=>ut(c,t.icon)),a(d,c)},d=>{var c=ot(),w=O(c);M(w,()=>t.icon,C=>{var k=ot(),F=O(k);lt(F,()=>t.icon),a(C,k)},null,!0),a(d,c)}),g($);var _=f($,2),u=b(_);lt(u,()=>t.children),g(_);var m=f(_,2);M(m,()=>n(l),d=>{cn(d,{})},d=>{var c=ot(),w=O(c);M(w,()=>n(i),C=>{var k=E("⚠️");a(C,k)},null,!0),a(d,c)}),g(T),g(y),J(()=>{se(y,"title",n(i)?`Error: ${n(i)}`:void 0),ht(y,"selected",n(o))}),Me("mouseenter",y,d=>{$t(d),e.select(s)}),a(r,y),mt()}fe(["click"]);function Ve(r,t){at(r,{get run(){return t.run},icon:s=>{A();var o=E();J(()=>ut(o,t.icon)),a(s,o)},children:(s,o)=>{A();var l=E();J(()=>ut(l,t.content)),a(s,l)},$$slots:{default:!0}})}var Fn=P('<div class="contextmenu_root svelte-aif9y6" role="region"><!></div>'),Dn=P('<div class="contextmenu_layout svelte-aif9y6" aria-hidden="true"></div>'),Mn=P('<menu class="contextmenu unstyled pane svelte-aif9y6" role="dialog" tabindex="-1"></menu>'),Rn=P("<!> <!> <!>",1);function Jt(r,t){_t(t,!0);const e=(v,h=Ce)=>{Be(v,$e(h))},s=(v,h=Ce)=>{Ve(v,$e(h))},o=nt(t,"contextmenu",19,()=>new ge),l=nt(t,"longpress_move_tolerance",3,21),i=nt(t,"longpress_duration",3,633),y=nt(t,"bypass_with_tap_then_longpress",3,!0),T=nt(t,"tap_then_longpress_duration",3,660),$=nt(t,"tap_then_longpress_move_tolerance",3,7),x=nt(t,"open_offset_x",19,()=>-2),_=nt(t,"open_offset_y",19,()=>-2),u=nt(t,"scoped",3,!1);Pn(o());let m=S(void 0);const d=L(()=>o().layout),c=L(()=>o().initial_layout),w=L(()=>n(d)===n(c));let C=S(void 0),k=S(void 0);At(()=>{!n(w)&&n(C)!==void 0&&(n(d).width=n(C))}),At(()=>{!n(w)&&n(k)!==void 0&&(n(d).height=n(k))});const F=We();At(()=>{if(n(m)){const v=n(m).getBoundingClientRect();F.width=v.width,F.height=v.height}});const Y=L(()=>o().x+Math.min(0,n(d).width-(o().x+F.width))),H=L(()=>o().y+Math.min(0,n(d).height-(o().y+F.height)));let U=S(void 0),tt=S(void 0),it=S(void 0),K=S(void 0),R=S(void 0),et=S(void 0);const G=()=>{n(R)&&p(R,!1),n(K)!=null&&(clearTimeout(n(K)),p(K,null))},B=v=>{var z;if(n(et)){p(et,!1);return}if(n(R)){G(),$t(v);return}const{target:h}=v;v.shiftKey||!(h instanceof HTMLElement||h instanceof SVGElement)||(z=n(m))!=null&&z.contains(h)||de(h)||Te(h)||ze(h,v.clientX+x(),v.clientY+_(),o())&&($t(v),G())},V=v=>{n(R)&&p(R,!1);const{touches:h,target:z}=v;if(o().opened||h.length!==1||v.shiftKey||!(z instanceof HTMLElement||z instanceof SVGElement)||de(z)||Te(z))return;const{clientX:N,clientY:q}=h[0];if(y()){if(n(it)!=null&&performance.now()-n(it)<T()&&Math.hypot(N-n(U),q-n(tt))<$()){p(et,!0),p(it,null);return}p(it,D(performance.now()))}p(U,D(N)),p(tt,D(q)),n(K)!=null&&G(),p(K,D(setTimeout(()=>{p(R,!0),ze(z,n(U)+x(),n(tt)+_(),o())},i())))},j=v=>{if(n(K)==null)return;const{touches:h}=v;if(h.length!==1)return;const{clientX:z,clientY:N}=h[0];Math.hypot(z-n(U),N-n(tt))>l()&&(o().opened&&o().close(),G())},vt=v=>{n(K)!=null&&(n(R)&&$t(v),G())},Et=v=>{n(m)&&!n(m).contains(v.target)&&o().close()},xt=new Map([["Escape",()=>o().close()],["ArrowLeft",()=>o().collapse_selected()],["ArrowRight",()=>o().expand_selected()],["ArrowDown",()=>o().select_next()],["PageDown",()=>o().select_next()],["ArrowUp",()=>o().select_previous()],["PageUp",()=>o().select_previous()],["Home",()=>o().select_first()],["End",()=>o().select_last()],[" ",()=>o().activate_selected()],["Enter",()=>o().activate_selected()]]),bt=v=>{const h=xt.get(v.key);!h||de(v.target)||($t(v),h())},Q=(v,h)=>{let z=null,N=null;const q=X=>{z&&v.removeEventListener(N,z),X.disabled||(v.addEventListener(X.event,X.cb,{capture:!0,passive:X.passive}),z=X.cb,N=X.event)};return q(h),{update:X=>{q(X)},destroy:()=>{z&&v.removeEventListener(N,z)}}};var Qt=Rn(),Pt=O(Qt);M(Pt,u,v=>{var h=Fn(),z=b(h);lt(z,()=>t.children),g(h),rt(h,(N,q)=>Q(N,q),()=>({event:"contextmenu",passive:!1,cb:B})),rt(h,(N,q)=>Q(N,q),()=>({event:"touchstart",passive:!0,cb:V})),rt(h,(N,q)=>Q(N,q),()=>({event:"touchmove",passive:!0,cb:j})),rt(h,(N,q)=>Q(N,q),()=>({event:"touchend",passive:!1,cb:vt})),rt(h,(N,q)=>Q(N,q),()=>({event:"touchcancel",passive:!1,cb:vt})),a(v,h)},v=>{var h=ot(),z=O(h);lt(z,()=>t.children),a(v,h)});var Zt=f(Pt,2);M(Zt,()=>!n(w),v=>{var h=Dn();Se(h,"clientHeight",z=>p(k,z)),Se(h,"clientWidth",z=>p(C,z)),a(v,h)});var te=f(Zt,2);M(te,()=>o().opened,v=>{var h=Mn();pe(h,z=>p(m,z),()=>n(m)),zt(h,20,()=>o().params,z=>z,(z,N)=>{var q=ot(),X=O(q);M(X,()=>typeof N=="function",st=>{var dt=ot(),yt=O(dt);lt(yt,()=>N),a(st,dt)},st=>{var dt=ot(),yt=O(dt);M(yt,()=>N.snippet==="link",Z=>{e(Z,()=>N.props)},Z=>{var kt=ot(),ce=O(kt);M(ce,()=>N.snippet==="text",pt=>{s(pt,()=>N.props)},null,!0),a(Z,kt)},!0),a(st,dt)}),a(z,q)}),g(h),J(()=>ne(h,"transform",`translate3d(${n(Y)??""}px, ${n(H)??""}px, 0)`)),a(v,h)}),rt(wt,(v,h)=>Q(v,h),()=>({event:"contextmenu",passive:!1,cb:B,disabled:u()})),rt(wt,(v,h)=>Q(v,h),()=>({event:"touchstart",passive:!0,cb:V,disabled:u()})),rt(wt,(v,h)=>Q(v,h),()=>({event:"touchmove",passive:!0,cb:j,disabled:u()})),rt(wt,(v,h)=>Q(v,h),()=>({event:"touchend",passive:!1,cb:vt,disabled:u()})),rt(wt,(v,h)=>Q(v,h),()=>({event:"touchcancel",passive:!1,cb:vt,disabled:u()})),rt(wt,(v,h)=>Q(v,h),()=>({event:"mousedown",passive:!0,cb:Et,disabled:!o().opened})),rt(wt,(v,h)=>Q(v,h),()=>({event:"keydown",passive:!1,cb:bt,disabled:!o().opened})),a(r,Qt),mt()}var qn=P('<span class="display_contents"><!></span>');function ft(r,t){_t(t,!0);var e=qn(),s=b(e);lt(s,()=>t.children),g(e),rt(e,(o,l)=>Tn(o,l),()=>t.entries),a(r,e),mt()}var Ln=P('<menu class="pane unstyled svelte-pa2qv7"><!></menu>'),Hn=P('<li role="none" class="svelte-pa2qv7"><div class="menu_item plain selectable svelte-pa2qv7" role="menuitem" aria-label="contextmenu submenmu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-pa2qv7" aria-hidden="true"></div></div> <!></li>');function ye(r,t){_t(t,!0);const e=be(),s=e.add_submenu(),{layout:o}=e,l=L(()=>s.selected);let i=S(void 0);const y=An(),T=We();let $=S(0),x=S(0);At(()=>{n(i)&&_(n(i),o,y)});const _=(Y,H,U)=>{const{x:tt,y:it,width:K,height:R}=Y.getBoundingClientRect();T.width=K,T.height=R;const et=tt-n($),G=it-n(x),B=et+K+U.width-H.width;if(B<=0)p($,D(U.width));else{const V=K-et;V<=0?p($,-K):V>B?p($,U.width-B):p($,V-K)}p(x,D(Math.min(0,H.height-(G+R))))};var u=Hn(),m=b(u),d=b(m),c=b(d),w=b(c);M(w,()=>t.icon,Y=>{var H=ot(),U=O(H);lt(U,()=>t.icon),a(Y,H)}),g(c);var C=f(c,2),k=b(C);lt(k,()=>t.children),g(C),g(d),A(2),g(m);var F=f(m,2);M(F,()=>n(l),Y=>{var H=Ln();pe(H,tt=>p(i,tt),()=>n(i));var U=b(H);lt(U,()=>t.menu),g(H),J(()=>{ne(H,"transform",`translate3d(${n($)??""}px, ${n(x)??""}px, 0)`),ne(H,"max-height",`${o.height??""}px`)}),a(Y,H)}),g(u),J(()=>{ne(u,"--contextmenu_depth",s.depth),se(m,"aria-expanded",n(l)),ht(m,"selected",n(l))}),Me("mouseenter",m,Y=>{$t(Y),setTimeout(()=>e.select(s))}),a(r,u),mt()}var Un=P("<!> <!>",1);function ae(r,t){_t(t,!0);const e=nt(t,"name",3,"Cat"),s=nt(t,"icon",3,"😺");ye(r,{icon:i=>{A();var y=E();J(()=>ut(y,s())),a(i,y)},menu:i=>{var y=Un(),T=O(y);at(T,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:e()}),icon:_=>{var u=ot(),m=O(u);M(m,()=>t.position==="adventure",d=>{var c=E("🏠");a(d,c)},d=>{var c=E("🌄");a(d,c)}),a(_,u)},children:(_,u)=>{var m=ot(),d=O(m);M(d,()=>t.position==="adventure",c=>{var w=E("go home");a(c,w)},c=>{var w=E("go adventure");a(c,w)}),a(_,m)},$$slots:{default:!0}});var $=f(T,2);at($,{run:()=>t.act({type:"cat_be_or_do",name:e(),position:t.position}),icon:_=>{var u=ot(),m=O(u);M(m,()=>t.position==="adventure",d=>{var c=E("🌄");a(d,c)},d=>{var c=E("🏠");a(d,c)}),a(_,u)},children:(_,u)=>{var m=ot(),d=O(m);M(d,()=>t.position==="adventure",c=>{var w=E("do adventure");a(c,w)},c=>{var w=E("be home");a(c,w)}),a(_,m)},$$slots:{default:!0}}),a(i,y)},children:(i,y)=>{A();var T=E();J(()=>ut(T,e())),a(i,T)},$$slots:{default:!0}}),mt()}var Wn=P("<!> <!>",1);function Bn(r,t){var e=Wn(),s=O(e);Be(s,{href:"https://github.com/ryanatkn/fuz",icon:i=>{un(i,{size:"var(--icon_size_xs)"})},children:(i,y)=>{A();var T=E("Source code");a(i,T)},$$slots:{default:!0}});var o=f(s,2);at(o,{get run(){return t.toggle_about_dialog},icon:i=>{A();var y=E("?");a(i,y)},children:(i,y)=>{A();var T=E("About");a(i,T)},$$slots:{default:!0}}),a(r,e)}const Xe=r=>{const t=r.length;if(t===2)return"cats";if(t===0)return null;const e=r[0];return e.icon+e.name};var Vn=P("<!> <!>",1),Xn=P("<!> <!> <!>",1);function Yn(r,t){_t(t,!0);const e=L(()=>Xe(t.adventure_cats));ye(r,{icon:l=>{A();var i=E("🏠");a(l,i)},menu:l=>{var i=Xn(),y=O(i);M(y,()=>n(e),x=>{at(x,{run:()=>t.act({type:"call_cats_home"}),icon:u=>{A();var m=E("🐈‍⬛");a(u,m)},children:(u,m)=>{A();var d=E("call");a(u,d)},$$slots:{default:!0}})});var T=f(y,2);zt(T,17,()=>t.home_cats,x=>x.name,(x,_)=>{ae(x,{get name(){return n(_).name},get icon(){return n(_).icon},get position(){return n(_).position},get act(){return t.act}})});var $=f(T,2);M($,()=>!n(e),x=>{var _=Vn(),u=O(_);at(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:c=>{A();var w=E("🏠");a(c,w)},children:(c,w)=>{A();var C=E("be");a(c,C)},$$slots:{default:!0}});var m=f(u,2);at(m,{run:()=>t.act({type:"call_cats_adventure"}),icon:c=>{A();var w=E("🦋");a(c,w)},children:(c,w)=>{A();var C=E("leave");a(c,C)},$$slots:{default:!0}}),a(x,_)}),a(l,i)},children:(l,i)=>{A();var y=E("home");a(l,y)},$$slots:{default:!0}}),mt()}var Kn=P("<!> <!>",1),Gn=P("<!> <!> <!>",1);function jn(r,t){_t(t,!0);const e=L(()=>Xe(t.home_cats));ye(r,{icon:l=>{A();var i=E("🌄");a(l,i)},menu:l=>{var i=Gn(),y=O(i);M(y,()=>n(e),x=>{at(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:u=>{A();var m=E("🦋");a(u,m)},children:(u,m)=>{A();var d=E("call");a(u,d)},$$slots:{default:!0}})});var T=f(y,2);zt(T,17,()=>t.adventure_cats,x=>x.name,(x,_)=>{ae(x,{get name(){return n(_).name},get icon(){return n(_).icon},get position(){return n(_).position},get act(){return t.act}})});var $=f(T,2);M($,()=>!n(e),x=>{var _=Kn(),u=O(_);at(u,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:c=>{A();var w=E("🌄");a(c,w)},children:(c,w)=>{A();var C=E("do");a(c,C)},$$slots:{default:!0}});var m=f(u,2);at(m,{run:()=>t.act({type:"call_cats_home"}),icon:c=>{A();var w=E("🐈‍⬛");a(c,w)},children:(c,w)=>{A();var C=E("leave");a(c,C)},$$slots:{default:!0}}),a(x,_)}),a(l,i)},children:(l,i)=>{A();var y=E("adventure");a(l,y)},$$slots:{default:!0}}),mt()}var Jn=P('<span class="icon svelte-u0xdy"> </span>'),Qn=P('<span class="name svelte-u0xdy"><!> </span>'),Zn=P('<span class="cat svelte-u0xdy"><!><!></span>');function Ne(r,t){_t(t,!0);const e=nt(t,"name",3,"Cat"),s=nt(t,"icon",3,"😺"),o=nt(t,"show_name",3,!0),l=nt(t,"show_icon",3,!0);var i=Zn(),y=b(i);M(y,l,$=>{var x=Jn(),_=b(x);g(x),J(()=>ut(_,s())),a($,x)});var T=f(y);M(T,o,$=>{var x=Qn(),_=b(x);M(_,()=>t.children,m=>{var d=ot(),c=O(d);lt(c,()=>t.children),a(m,d)});var u=f(_,1,!0);g(x),J(()=>ut(u,e())),a($,x)}),g(i),J(()=>ht(i,"has-icon",l())),a(r,i),mt()}const to=`<script lang="ts">
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
`;var eo=P("<!> <!>",1),no=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),oo=P('<div class="position home svelte-1b1oync"><div class="icon svelte-1b1oync">🏠</div> <div class="cats svelte-1b1oync"></div></div>'),so=P('<div class="cat_wrapper svelte-1b1oync"><!></div>'),ao=P('<div class="position adventure svelte-1b1oync"><div class="icon svelte-1b1oync">🌄</div> <div class="cats svelte-1b1oync"></div></div>'),ro=P("<section><!> <!></section> <section><!></section>",1),io=P("<!> <!>",1),co=P('<div class="pane p_xl box text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color Scheme</h2> <!> <h2>Theme</h2> <!></div></div>'),lo=P("<!> <!>",1);function uo(r,t){_t(t,!0);const e="Alyssa",s="Ben",o="home";let l=S(o),i=S(o);const y=L(()=>n(l)===n(i)?"😺":"😾"),T=L(()=>n(l)===n(i)?"😸":"😿"),$=L(()=>({name:e,icon:n(y),position:n(l)})),x=L(()=>({name:s,icon:n(T),position:n(i)}));let _=S(!1);const u=(R,et)=>{const G=[],B=[];for(const V of R){const j=V.position==="home"?G:B;et?j.unshift(V):j.push(V)}return{home_cats:G,adventure_cats:B}},m=L(()=>u([n($),n(x)],n(_))),d=L(()=>n(m).home_cats),c=L(()=>n(m).adventure_cats),w=L(()=>n(l)!==o||n(i)!==o),C=()=>{p(l,o),p(i,o)};let k=S(!1);const F=()=>{p(k,!n(k))},Y=R=>{switch(R.type){case"call_cats_adventure":{p(l,"adventure"),p(i,"adventure");break}case"call_cats_home":{p(l,"home"),p(i,"home");break}case"cat_go_adventure":{R.name===e?p(l,"adventure"):R.name===s&&p(i,"adventure");break}case"cat_go_home":{R.name===e?p(l,"home"):R.name===s&&p(i,"home");break}case"cat_be_or_do":{p(_,!n(_));break}}},[H,U]=en({fallback:(R,et)=>{const G=window.getComputedStyle(R),B=G.transform==="none"?"":G.transform;return{duration:1500,easing:bn,css:V=>`
					transform: ${B} scale(${V});
					opacity: ${V}
				`}}});var tt=lo(),it=O(tt);Jt(it,{scoped:!0,children:(R,et)=>{var G=io(),B=O(G);Ct(B,{text:"Full example",slug:"full-example"});var V=f(B,2);ft(V,{entries:vt=>{var Et=eo(),xt=O(Et);M(xt,()=>n(w),Q=>{Ve(Q,{run:C,content:"Reset",icon:"↻"})});var bt=f(xt,2);Bn(bt,{toggle_about_dialog:F}),a(vt,Et)},children:(vt,Et)=>{var xt=ro(),bt=O(xt),Q=b(bt);ft(Q,{entries:v=>{Yn(v,{act:Y,get home_cats(){return n(d)},get adventure_cats(){return n(c)}})},children:(v,h)=>{var z=oo(),N=f(b(z),2);zt(N,29,()=>n(d),({name:q,icon:X,position:st})=>q,(q,X)=>{let st=()=>n(X).name,dt=()=>n(X).icon,yt=()=>n(X).position;var Z=no(),kt=b(Z);ft(kt,{entries:pt=>{ae(pt,{act:Y,get name(){return st()},get icon(){return dt()},get position(){return yt()}})},children:(pt,Ye)=>{Ne(pt,{get name(){return st()},get icon(){return dt()}})},$$slots:{default:!0}}),g(Z),St(1,Z,()=>U,()=>({key:st()})),St(2,Z,()=>H,()=>({key:st()})),ke(Z,()=>Ae,null),a(q,Z)}),g(N),g(z),a(v,z)},$$slots:{default:!0}});var Qt=f(Q,2);ft(Qt,{entries:v=>{jn(v,{act:Y,get home_cats(){return n(d)},get adventure_cats(){return n(c)}})},children:(v,h)=>{var z=ao(),N=f(b(z),2);zt(N,29,()=>n(c),({name:q,icon:X,position:st})=>q,(q,X)=>{let st=()=>n(X).name,dt=()=>n(X).icon,yt=()=>n(X).position;var Z=so(),kt=b(Z);ft(kt,{entries:pt=>{ae(pt,{act:Y,get name(){return st()},get icon(){return dt()},get position(){return yt()}})},children:(pt,Ye)=>{Ne(pt,{get name(){return st()},get icon(){return dt()}})},$$slots:{default:!0}}),g(Z),St(1,Z,()=>U,()=>({key:st()})),St(2,Z,()=>H,()=>({key:st()})),ke(Z,()=>Ae,null),a(q,Z)}),g(N),g(z),a(v,z)},$$slots:{default:!0}}),g(bt);var Pt=f(bt,2),Zt=b(Pt);ln(Zt,{summary:v=>{A();var h=E("View example source");a(v,h)},children:(v,h)=>{Ot(v,{content:to})},$$slots:{default:!0}}),g(Pt),a(vt,xt)},$$slots:{default:!0}}),a(R,G)},$$slots:{default:!0}});var K=f(it,2);M(K,()=>n(k),R=>{rn(R,{onclose:()=>p(k,!1),children:(et,G)=>{var B=co(),V=f(b(B),8),j=f(b(V),2);dn(j,{});var vt=f(j,4);_n(vt,{}),g(V),g(B),a(et,B)},$$slots:{default:!0}})}),a(r,tt),mt()}var _o=P("<!> <!> <!>",1),mo=P(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or longpress.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
				instead of the entire page.</aside></div>`),vo=P("<!> <!>",1);function ho(r){let t=S(!1),e=S(!1),s=S(!1);var o=vo(),l=O(o);Ct(l,{text:"Basic usage",slug:"basic-usage"});var i=f(l,2);Jt(i,{scoped:!0,children:(y,T)=>{ft(y,{entries:x=>{var _=_o(),u=O(_);at(u,{run:()=>p(t,!n(t)),children:(c,w)=>{A();var C=E("Hello world");a(c,C)},$$slots:{default:!0}});var m=f(u,2);at(m,{run:()=>p(e,!n(e)),icon:w=>{A();var C=E("🌞");a(w,C)},children:(w,C)=>{A();var k=E("Hello with an optional icon snippet");a(w,k)},$$slots:{default:!0}});var d=f(m,2);at(d,{run:()=>p(s,!n(s)),icon:"🌚",children:(c,w)=>{A();var C=E("Hello with an optional icon string");a(c,C)},$$slots:{default:!0}}),a(x,_)},children:(x,_)=>{var u=mo(),m=f(b(u),2),d=L(()=>`<Contextmenu_Root scoped>
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
...markup without contextmenu behavior...`);Ot(m,{get content(){return n(d)}});var c=f(m,2),w=b(c),C=b(w);g(w),g(c);var k=f(c,2),F=b(k),Y=b(F);g(F),g(k);var H=f(k,2),U=b(H),tt=b(U);g(U),g(H),A(2),g(u),J(()=>{ht(w,"color_g_5",n(t)),ut(C,`greeted = ${n(t)??""}`),ht(F,"color_e_5",n(e)),ut(Y,`greeted_icon_snippet = ${n(e)??""}`),ht(U,"color_d_5",n(s)),ut(tt,`greeted_icon_string = ${n(s)??""}`)}),a(x,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),a(r,o)}var po=P("<div>toggled</div>"),fo=P(`<div class="panel p_md"><!> <!> <p>The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.</p> <div><!></div></div>`),go=P("<!> <!>",1);function xo(r){const t=new ge;let e=S(!1);Jt(r,{contextmenu:t,scoped:!0,children:(s,o)=>{var l=go(),i=O(l);Ct(i,{text:"Custom instance",slug:"custom-instance"});var y=f(i,2);ft(y,{entries:$=>{at($,{run:()=>p(e,!n(e)),children:(x,_)=>{A();var u=E("Toggle");a(x,u)},$$slots:{default:!0}})},children:($,x)=>{var _=fo(),u=b(_);Ot(u,{lang:"ts",content:"const contextmenu = create_contextmenu();"});var m=f(u,2);Ot(m,{content:"<Contextmenu_Root {contextmenu} scoped>..."});var d=f(m,4),c=b(d);M(c,()=>n(e),w=>{var C=po();St(3,C,()=>nn),a(w,C)}),g(d),g(_),a($,_)},$$slots:{default:!0}}),a(s,l)},$$slots:{default:!0}})}const bo=(r,t)=>{const e=window.getSelection();if(!e||!n(t))return;const s=document.createRange();s.selectNodeContents(n(t)),e.removeAllRanges(),e.addRange(s)};var yo=P(`<div class="panel p_md"><div class="mb_lg"><p>If a contextmenu is triggered on selected text, it includes a <code>Copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1nae29z"><input type="text" placeholder="paste text here?"></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
				default contextmenu.</p> <label class="svelte-1nae29z"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's default
				contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote></div>`),wo=P("<div><!></div> <!>",1);function Co(r){const t=new ge;let e=S(!1),s=S(void 0),o=S("");const l="If a contextmenu is triggered on selected text, it includes a Copy text entry.  Try selecting text and then opening the contextmenu on it.",i=`If a contextmenu is triggered on selected text, it includes a Copy text entry.


Try selecting text and then opening the contextmenu on it.`,y=`If a contextmenu is triggered on selected text, it includes a Copy text entry.

Try selecting text and then opening the contextmenu on it.`,T=L(()=>n(o)===l||n(o)===i||n(o)===y);Jt(r,{contextmenu:t,scoped:!0,children:($,x)=>{var _=wo(),u=O(_),m=b(u);Ct(m,{text:"Select text",slug:"select-text"}),g(u);var d=f(u,2);ft(d,{entries:w=>{at(w,{run:()=>p(e,!n(e)),children:(C,k)=>{A();var F=E("Toggle something");a(C,F)},$$slots:{default:!0}})},children:(w,C)=>{var k=yo(),F=b(k);pe(F,j=>p(s,j),()=>n(s));var Y=f(b(F),2),H=f(b(Y));H.__click=[bo,s],A(),g(Y),g(F);var U=f(F,2),tt=b(U);on(tt),g(U);var it=f(U,2),K=f(it,2),R=b(K);sn(R),g(K);var et=f(K,2),G=b(et);ee(G,{path:"Web/HTML/Global_attributes/contenteditable"}),A(),g(et);var B=f(et,4),V=f(B,4);g(k),J(()=>{ht(k,"color_g_5",n(T)),ht(H,"color_a",n(e)),ht(it,"color_g_5",n(T))}),Pe(tt,()=>n(o),j=>p(o,j)),Pe(R,()=>n(o),j=>p(o,j)),Ee("innerText",B,()=>n(o),j=>p(o,j)),Ee("innerText",V,()=>n(o),j=>p(o,j)),a(w,k)},$$slots:{default:!0}}),J(()=>ht(u,"color_d_5",n(T))),a($,_)},$$slots:{default:!0}})}fe(["click"]);var ko=P(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
			behaviors, and it allows you to open the contextmenu anywhere to access all contextual
			behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
			browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function $o(r){Jt(r,{scoped:!0,children:(t,e)=>{var s=ko(),o=O(s);Ct(o,{text:"Default behaviors",slug:"default-behaviors"});var l=f(o,2),i=b(l);Ot(i,{content:`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}),A(6),g(l),a(t,s)},$$slots:{default:!0}})}var To=P("<section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section> <section><!></section>",1);function Zo(r,t){_t(t,!0);const s=tn("Contextmenu");Ze(r,{tome:s,children:(o,l)=>{var i=To(),y=f(O(i),2),T=b(y);ho(T),g(y);var $=f(y,2),x=b($);$o(x),g($);var _=f($,2),u=b(_);xo(u),g(_);var m=f(_,2),d=b(m);Co(d),g(m);var c=f(m,2),w=b(c);uo(w,{}),g(c);var C=f(c,2),k=b(C);gn(k),g(C),a(o,i)},$$slots:{default:!0}}),mt()}export{Zo as component};
