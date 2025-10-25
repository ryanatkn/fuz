import"../chunks/DsnmJJEf.js";import{C as sn,z as an,af as D,h as e,ae as a,aj as le,u as P,e as tt,a as S,b as o,g as dt,p as yt,f as $,s as r,d as m,t as lt,b9 as ht,c as wt,r as d,b8 as Kt,ac as B,ad as F,ab as St,F as Ht,ba as Rt,bB as re,bE as rn}from"../chunks/B7qs8f6Z.js";import{T as ln}from"../chunks/DT4bL0T1.js";import{g as cn}from"../chunks/Dm3VkzS2.js";import{s as gt}from"../chunks/D2Z-uHvG.js";import{c as Bt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/DpqcPF0n.js";import{M as ne}from"../chunks/DHzjxUCy.js";import{T as Dt,a as Ft}from"../chunks/DkCX55Uf.js";import{e as un}from"../chunks/36zOYlHh.js";import{a as dn}from"../chunks/B2EI8ygw.js";import{a as ke,b as ft,s as Ut,C as _n,c as ce,d as Ie,r as jt,S as vn}from"../chunks/C61V10DD.js";import{p as ot,r as Le,s as Gt}from"../chunks/C2A3Zqzr.js";import{o as Ae}from"../chunks/BMgspcsU.js";import{a as mn,s as Tt,b as He,c as pn,D as hn}from"../chunks/DPmjiu3g.js";import{c as me,a as be,e as Vt}from"../chunks/GCAAGpmM.js";import{i as Z}from"../chunks/DHMuHmk0.js";import{P as fn}from"../chunks/B7mkSFrP.js";import{D as Ue,b as Oe}from"../chunks/8X_O05eD.js";import{b as ze,a as Ne,c as ye}from"../chunks/7g2Ar_02.js";import{b as Zt}from"../chunks/2LOYOryH.js";import{t as ee,c as gn,a as Re,s as xn}from"../chunks/DkIYfvB-.js";import{S as bn,g as yn}from"../chunks/B-XuT0zp.js";import{C as wn,T as $n}from"../chunks/twD8klRS.js";import{r as kn}from"../chunks/CmYoQXw7.js";class Ce{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){Ce.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var Cn=new Ce({box:"border-box"});function ue(s,t,n){var c=Cn.observe(s,()=>n(s[t]));sn(()=>(an(()=>n(s[t])),c))}const Tn=Object.freeze({});class qe{#t=D(0);get width(){return e(this.#t)}set width(t){a(this.#t,t,!0)}#e=D(0);get height(){return e(this.#e)}set height(t){a(this.#e,t,!0)}}class Sn{is_menu=!1;menu;run;disabled;#t=D(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=D(!1);get pending(){return e(this.#e)}set pending(t){a(this.#e,t,!0)}#n=D(null);get error_message(){return e(this.#n)}set error_message(t){a(this.#n,t,!0)}#o=D(null);get promise(){return e(this.#o)}set promise(t){a(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class En{is_menu=!0;menu;depth;#t=D(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=D(le([]));get items(){return e(this.#e)}set items(t){a(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class Pn{is_menu=!0;menu=null;depth=1;#t=D(le([]));get items(){return e(this.#t)}set items(t){a(this.#t,t,!0)}}class oe{layout;initial_layout;#t=D(!1);get opened(){return e(this.#t)}set opened(t){a(this.#t,t,!0)}#e=D(0);get x(){return e(this.#e)}set x(t){a(this.#e,t,!0)}#n=D(0);get y(){return e(this.#n)}set y(t){a(this.#n,t,!0)}#o=D(le([]));get params(){return e(this.#o)}set params(t){a(this.#o,t,!0)}#s=D();get error(){return e(this.#s)}set error(t){a(this.#s,t,!0)}root_menu=new Pn;#a=D(le([]));get selections(){return e(this.#a)}set selections(t){a(this.#a,t,!0)}#r=P(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){a(this.#r,t)}#i=P(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){a(this.#i,t)}#l=P(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){a(this.#l,t)}#c=P(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){a(this.#c,t)}#u=P(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){a(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new qe}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(mn(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=we.maybe_get()??this.root_menu,_=new Sn(c,t,n);return c.items.push(_),Ae(()=>{c.items.length=0}),_}add_submenu(){const t=we.maybe_get()??this.root_menu,n=new En(t,t.depth+1);return t.items.push(n),we.set(n),Ae(()=>{t.items.length=0}),n}}const Te="contextmenu",In=`a,[data-${Te}]`,ie=new Map;let An=0;const On=(s,t)=>{if(t==null)return;const n=An+++"";return s.dataset[Te]=n,ie.set(n,t),{update:c=>{ie.set(n,c)},destroy:()=>{ie.delete(n)}}},zn=17,$e=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:v=!0}=_??Tn,f=Nn(s)?.filter(M=>typeof M=="function"||(M.snippet!=="link"||i)&&(M.snippet!=="text"||u)&&(M.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate(zn),!0):!1},Nn=s=>{let t=null,n=s,c,_;for(;n=n?.closest(In);){if(c=n.dataset[Te]){if(t??=[],_=ie.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},se=me(),we=me(),de=me(()=>new qe);function At(s,t){const n=ot(t,"tag",3,"span");var c=tt(),_=S(c);un(_,n,!1,(i,u)=>{dn(i,(f,M)=>On?.(f,M),()=>t.entries),ke(i,()=>({class:"display_contents",...t.attrs}));var l=tt(),v=S(l);dt(v,()=>t.children),o(u,l)}),o(s,c)}var Rn=$('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function _t(s,t){yt(t,!0);const n=ot(t,"disabled",3,!1),c=se.get(),_=c.add_entry(()=>t.run,()=>n()),i=P(()=>_.selected),u=P(()=>_.pending),l=P(()=>_.error_message),v=P(()=>_.disabled());var f=Rn();let M;f.__click=function(...I){(e(v)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,I)};var A=m(f),p=m(A),g=m(p);{var x=I=>{var O=B();lt(()=>gt(O,t.icon)),o(I,O)},w=I=>{var O=tt(),E=S(O);{var R=b=>{var U=tt(),y=S(U);dt(y,()=>t.icon),o(b,U)};Z(E,b=>{t.icon&&b(R)},!0)}o(I,O)};Z(g,I=>{typeof t.icon=="string"?I(x):I(w,!1)})}d(p);var k=r(p,2),h=m(k);dt(h,()=>t.children),d(k);var C=r(k,2);{var X=I=>{fn(I,{})},Q=I=>{var O=tt(),E=S(O);{var R=b=>{var U=B("⚠️");o(b,U)};Z(E,b=>{e(l)&&b(R)},!0)}o(I,O)};Z(C,I=>{e(u)?I(X):I(Q,!1)})}d(A),d(f),lt(I=>{M=ft(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,M,I),Ut(f,"aria-disabled",e(v)),Ut(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(v)})]),ht("mouseenter",f,function(...I){(e(v)?void 0:O=>{Tt(O),c.select(_)})?.apply(this,I)}),o(s,f),wt()}Kt(["click"]);var Dn=s=>{s.stopPropagation()},Fn=$('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function Se(s,t){yt(t,!0);const n="🔗",c=ot(t,"icon",3,n),_=ot(t,"disabled",3,!1),i=se.get();let u=D(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),v=P(()=>l.selected),f=P(()=>l.disabled()),M=(y,z=location.host)=>{const N=be(be(y,"https://"),"http://");return N.startsWith(z+"/")?be(N,z):N},A=P(()=>M(t.href)),p=P(()=>!(e(A)[0]==="."||e(A)[0]==="/"&&e(A)[1]!=="/")),g=P(()=>e(p)?"noreferrer":void 0);var x=Fn(),w=m(x);let k;w.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},w.__contextmenu=[Dn];var h=m(w),C=m(h),X=m(C);{var Q=y=>{var z=B();lt(()=>gt(z,c())),o(y,z)},I=y=>{var z=tt(),N=S(z);dt(N,c,()=>n),o(y,z)};Z(X,y=>{typeof c()=="string"?y(Q):y(I,!1)})}d(C);var O=r(C,2),E=m(O),R=m(E);{var b=y=>{var z=tt(),N=S(z);dt(N,()=>t.children),o(y,z)},U=y=>{var z=B();lt(()=>gt(z,e(A))),o(y,z)};Z(R,y=>{t.children?y(b):y(U,!1)})}d(E),d(O),d(h),d(w),Zt(w,y=>a(u,y),()=>e(u)),d(x),lt(y=>{k=ft(w,1,"menu_item plain svelte-1fkm0gl",null,k,y),Ut(w,"aria-disabled",e(f)),Ut(w,"href",t.href),Ut(w,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),ht("mouseenter",w,function(...y){(e(f)?void 0:z=>{Tt(z),i.select(l)})?.apply(this,y)}),o(s,x),wt()}Kt(["click","contextmenu"]);function Ee(s,t){_t(s,{get run(){return t.run},icon:c=>{F();var _=B();lt(()=>gt(_,t.icon)),o(c,_)},children:(c,_)=>{F();var i=B();lt(()=>gt(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var Mn=$("<li></li>");function ae(s,t){const n=Le(t,["$$slots","$$events","$$legacy"]);var c=Mn();ke(c,()=>({role:"separator","aria-orientation":"vertical",...n,[_n]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const Be=-2,We=-2,Xe=860,Ye=11,Ln=633,Hn=21,_e=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!He(s)&&!pn(s),je=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Ve=s=>t=>{const n=s.get(t.key);!n||He(t.target)||(Tt(t),n())},Ke=(s,t,n)=>s+Math.min(0,n-(s+t)),Ge=(s,t,n)=>s+Math.min(0,n-(s+t)),Un=(s,t=St)=>{Se(s,Gt(t))},qn=(s,t=St)=>{Ee(s,Gt(t))},Bn=(s,t=St)=>{ae(s,Gt(t))};var Wn=$('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Xn=$('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),Yn=$('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),jn=$("<!> <!>  <!>",1);function De(s,t){yt(t,!0);const n=ot(t,"contextmenu",19,()=>new oe),c=ot(t,"open_offset_x",3,Be),_=ot(t,"open_offset_y",3,We),i=ot(t,"bypass_with_tap_then_longpress",3,!0),u=ot(t,"bypass_window",3,Xe),l=ot(t,"bypass_move_tolerance",3,Ye),v=ot(t,"scoped",3,!1),f=ot(t,"link_entry",3,Un),M=ot(t,"text_entry",3,qn),A=ot(t,"separator_entry",3,Bn);se.set(n());let p=D(void 0);const g=P(()=>n().layout),x=P(()=>n().initial_layout),w=P(()=>e(g)===e(x));let k=D(void 0),h=D(void 0);Ht(()=>{!e(w)&&e(k)!==void 0&&(e(g).width=e(k))}),Ht(()=>{!e(w)&&e(h)!==void 0&&(e(g).height=e(h))});const C=de.set();Ht(()=>{if(e(p)){const L=e(p).getBoundingClientRect();C.width=L.width,C.height=L.height}});const X=P(()=>Ke(n().x,C.width,e(g).width)),Q=P(()=>Ge(n().y,C.height,e(g).height));let I=D(void 0),O=D(void 0),E=D(void 0),R=D(void 0),b=D(void 0);const U=L=>{if(e(R)){a(R,!1),a(E,null),a(I,null),a(O,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{target:j}=L;_e(j,L.shiftKey)&&(e(p)?.contains(j)||$e(j,L.clientX+c(),L.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:M()!==null,separator_enabled:A()!==null})&&Tt(L))},y=L=>{if(!i())return;const{touches:j,target:J}=L;if(n().opened||j.length!==1||!_e(J,L.shiftKey)){a(E,null),a(I,null),a(O,null),a(R,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{clientX:W,clientY:Y}=j[0];if(e(E)!=null&&performance.now()-e(E)<u()&&Math.hypot(W-e(I),Y-e(O))<l()){a(R,!0),a(E,null),a(I,null),a(O,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}a(E,performance.now(),!0),a(I,W,!0),a(O,Y,!0),e(b)!=null&&clearTimeout(e(b)),a(b,setTimeout(()=>{a(E,null),a(I,null),a(O,null),a(b,null)},u()),!0)},z=()=>{a(E,null),a(I,null),a(O,null),a(R,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null))},N=L=>{e(p)&&!e(p).contains(L.target)&&n().close()},G=je(n()),et=Ve(G);var K=jn();ht("contextmenu",Rt,function(...L){(v()?void 0:U)?.apply(this,L)}),ht("mousedown",Rt,function(...L){(n().opened?N:void 0)?.apply(this,L)}),ht("keydown",Rt,function(...L){(n().opened?et:void 0)?.apply(this,L)}),ht("touchstart",Rt,function(...L){(v()||!i()?void 0:y)?.apply(this,L)},!0,!0),ht("touchcancel",Rt,function(...L){(v()||!i()?void 0:z)?.apply(this,L)},!0);var H=S(K);{var st=L=>{var j=Wn();j.__contextmenu=U;var J=m(j);dt(J,()=>t.children),d(j),ht("touchstart",j,function(...W){(i()?y:void 0)?.apply(this,W)},!0,!0),ht("touchcancel",j,function(...W){(i()?z:void 0)?.apply(this,W)},!0),o(L,j)},ct=L=>{var j=tt(),J=S(j);dt(J,()=>t.children),o(L,j)};Z(H,L=>{v()?L(st):L(ct,!1)})}var it=r(H,2);{var xt=L=>{var j=Xn();ue(j,"clientHeight",J=>a(h,J)),ue(j,"clientWidth",J=>a(k,J)),o(L,j)};Z(it,L=>{e(w)||L(xt)})}var $t=r(it,2);{var bt=L=>{var j=Yn();let J;Vt(j,20,()=>n().params,W=>W,(W,Y)=>{var pt=tt(),ut=S(pt);{var Lt=at=>{var kt=tt(),vt=S(kt);dt(vt,()=>Y),o(at,kt)},Pt=at=>{var kt=tt(),vt=S(kt);{var It=q=>{var V=tt(),rt=S(V);dt(rt,()=>f()??St,()=>Y.props),o(q,V)},T=q=>{var V=tt(),rt=S(V);{var nt=Ct=>{var zt=tt(),Et=S(zt);dt(Et,()=>M()??St,()=>Y.props),o(Ct,zt)},mt=Ct=>{var zt=tt(),Et=S(zt);{var Ot=Nt=>{var Wt=tt(),he=S(Wt);dt(he,()=>A()??St,()=>Y.props),o(Nt,Wt)};Z(Et,Nt=>{Y.snippet==="separator"&&Nt(Ot)},!0)}o(Ct,zt)};Z(rt,Ct=>{Y.snippet==="text"?Ct(nt):Ct(mt,!1)},!0)}o(q,V)};Z(vt,q=>{Y.snippet==="link"?q(It):q(T,!1)},!0)}o(at,kt)};Z(ut,at=>{typeof Y=="function"?at(Lt):at(Pt,!1)})}o(W,pt)}),d(j),Zt(j,W=>a(p,W),()=>e(p)),lt(W=>J=ce(j,"",J,W),[()=>({transform:`translate3d(${e(X)??""}px, ${e(Q)??""}px, 0)`})]),o(L,j)};Z($t,L=>{n().opened&&L(bt)})}o(s,K),wt()}Kt(["contextmenu"]);const Vn=(s,t=St)=>{Se(s,Gt(t))},Kn=(s,t=St)=>{Ee(s,Gt(t))},Gn=(s,t=St)=>{ae(s,Gt(t))};var Zn=$('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),Jn=$('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Qn=$('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),to=$("<!> <!> <!>",1);function eo(s,t){yt(t,!0);const n=ot(t,"contextmenu",19,()=>new oe),c=ot(t,"longpress_move_tolerance",3,Hn),_=ot(t,"longpress_duration",3,Ln),i=ot(t,"bypass_with_tap_then_longpress",3,!0),u=ot(t,"bypass_window",3,Xe),l=ot(t,"bypass_move_tolerance",3,Ye),v=ot(t,"open_offset_x",3,Be),f=ot(t,"open_offset_y",3,We),M=ot(t,"scoped",3,!1),A=ot(t,"link_entry",3,Vn),p=ot(t,"text_entry",3,Kn),g=ot(t,"separator_entry",3,Gn);se.set(n());let x=D(void 0);const w=P(()=>n().layout),k=P(()=>n().initial_layout),h=P(()=>e(w)===e(k));let C=D(void 0),X=D(void 0);Ht(()=>{!e(h)&&e(C)!==void 0&&(e(w).width=e(C))}),Ht(()=>{!e(h)&&e(X)!==void 0&&(e(w).height=e(X))});const Q=de.set();Ht(()=>{if(e(x)){const T=e(x).getBoundingClientRect();Q.width=T.width,Q.height=T.height}});const I=P(()=>Ke(n().x,Q.width,e(w).width)),O=P(()=>Ge(n().y,Q.height,e(w).height));let E=D(void 0),R=D(void 0),b=D(void 0),U=D(void 0),y=D(void 0),z=D(void 0),N=D(void 0),G=D(!1);const et=()=>{document.body.classList.add("contextmenu_pending")},K=()=>{document.body.classList.remove("contextmenu_pending")},H=()=>{a(y,!1),e(U)!=null&&(clearTimeout(e(U)),a(U,null)),K()},st=()=>{a(b,null),a(E,null),a(R,null),a(z,!1),e(N)!=null&&(clearTimeout(e(N)),a(N,null))},ct=()=>{H(),st()},it=T=>{if(e(z)){st();return}const{target:q}=T;if(e(y)){if(e(x)?.contains(q))return;ct(),Tt(T);return}_e(q,T.shiftKey)&&(e(x)?.contains(q)||$e(q,T.clientX+v(),T.clientY+f(),n(),{link_enabled:A()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})&&(Tt(T),ct()))},xt=T=>{a(y,!1),a(G,!1);const{touches:q,target:V}=T;if(n().opened||q.length!==1||!_e(V,T.shiftKey)){ct();return}const{clientX:rt,clientY:nt}=q[0];if(i()){if(e(b)!=null&&performance.now()-e(b)<u()&&Math.hypot(rt-e(E),nt-e(R))<l()){a(z,!0),a(b,null),a(E,null),a(R,null),e(N)!=null&&(clearTimeout(e(N)),a(N,null));return}a(b,performance.now(),!0),e(N)!=null&&clearTimeout(e(N)),a(N,setTimeout(()=>{st()},u()),!0)}a(E,rt,!0),a(R,nt,!0),et(),e(U)!=null&&H(),a(U,setTimeout(()=>{a(y,!0),K(),$e(V,e(E)+v(),e(R)+f(),n(),{link_enabled:A()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})},_()),!0)},$t=T=>{if(e(U)==null||n().opened)return;const{touches:q}=T;if(q.length!==1)return;const{clientX:V,clientY:rt}=q[0];if(Math.hypot(V-e(E),rt-e(R))>c()){H();return}T.preventDefault()},bt=T=>{e(U)!=null&&(e(y)&&(Tt(T),a(G,!0)),H()),e(z)&&st()},L=()=>{ct()},j=T=>{e(x)&&!e(x).contains(T.target)&&n().close()},J=je(n()),W=Ve(J),Y=T=>{const q={passive:!0,capture:!0},V={passive:!1,capture:!0},rt=re(T,"touchstart",xt,q),nt=re(T,"touchmove",$t,V),mt=re(T,"touchend",bt,V),Ct=re(T,"touchcancel",L,q);return()=>{rt(),nt(),mt(),Ct()}};var pt=to();ht("contextmenu",Rt,function(...T){(M()?void 0:it)?.apply(this,T)}),ht("mousedown",Rt,function(...T){(n().opened?j:void 0)?.apply(this,T)}),ht("keydown",Rt,function(...T){(n().opened?W:void 0)?.apply(this,T)}),Ie(Rt,()=>M()?void 0:Y);var ut=S(pt);{var Lt=T=>{var q=Zn();q.__contextmenu=it;var V=m(q);dt(V,()=>t.children),d(q),Ie(q,()=>Y),o(T,q)},Pt=T=>{var q=tt(),V=S(q);dt(V,()=>t.children),o(T,q)};Z(ut,T=>{M()?T(Lt):T(Pt,!1)})}var at=r(ut,2);{var kt=T=>{var q=Jn();ue(q,"clientHeight",V=>a(X,V)),ue(q,"clientWidth",V=>a(C,V)),o(T,q)};Z(at,T=>{e(h)||T(kt)})}var vt=r(at,2);{var It=T=>{var q=Qn();let V;Vt(q,20,()=>n().params,rt=>rt,(rt,nt)=>{var mt=tt(),Ct=S(mt);{var zt=Ot=>{var Nt=tt(),Wt=S(Nt);dt(Wt,()=>nt),o(Ot,Nt)},Et=Ot=>{var Nt=tt(),Wt=S(Nt);{var he=Xt=>{var Jt=tt(),fe=S(Jt);dt(fe,()=>A()??St,()=>nt.props),o(Xt,Jt)},Qe=Xt=>{var Jt=tt(),fe=S(Jt);{var tn=Yt=>{var Qt=tt(),ge=S(Qt);dt(ge,()=>p()??St,()=>nt.props),o(Yt,Qt)},en=Yt=>{var Qt=tt(),ge=S(Qt);{var nn=xe=>{var Pe=tt(),on=S(Pe);dt(on,()=>g()??St,()=>nt.props),o(xe,Pe)};Z(ge,xe=>{nt.snippet==="separator"&&xe(nn)},!0)}o(Yt,Qt)};Z(fe,Yt=>{nt.snippet==="text"?Yt(tn):Yt(en,!1)},!0)}o(Xt,Jt)};Z(Wt,Xt=>{nt.snippet==="link"?Xt(he):Xt(Qe,!1)},!0)}o(Ot,Nt)};Z(Ct,Ot=>{typeof nt=="function"?Ot(zt):Ot(Et,!1)})}o(rt,mt)}),d(q),Zt(q,rt=>a(x,rt),()=>e(x)),lt(rt=>V=ce(q,"",V,rt),[()=>({transform:`translate3d(${e(I)??""}px, ${e(O)??""}px, 0)`})]),ht("click",q,function(...rt){(e(G)?nt=>{a(G,!1),Tt(nt)}:void 0)?.apply(this,rt)},!0),o(T,q)};Z(vt,T=>{n().opened&&T(It)})}o(s,pt),wt()}Kt(["contextmenu"]);class no{#t=D();get variant(){return e(this.#t)}set variant(t){a(this.#t,t,!0)}#e=P(()=>this.variant==="standard"?De:eo);get component(){return e(this.#e)}set component(t){a(this.#e,t)}#n=P(()=>this.component===De?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){a(this.#n,t)}constructor(t="standard"){this.variant=t}}const Mt=me(()=>new no("standard"));var oo=$('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Ze(s,t){yt(t,!0);const n=[],c=Mt.get();var _=oo(),i=r(m(_),2),u=m(i);jt(u),u.value=u.__value="standard",F(2),d(i);var l=r(i,2),v=m(l);jt(v),v.value=v.__value="compat",F(2),d(l),d(_),ze(n,[],u,()=>c.variant,f=>c.variant=f),ze(n,[],v,()=>c.variant,f=>c.variant=f),o(s,_),wt()}var so=$('<p class="panel p_md">alert B -- also inherits A</p>'),ao=$('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),ro=$("<code>navigator.vibrate</code>"),io=$(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
		capabilities to users. Popular websites with similar features include Google Docs and Discord.
		Below are <a href="#caveats">caveats</a> about this breaking some user expectations, and a workaround for <a href="#ios-compatibility">iOS Safari support</a>. See also the <!> docs and <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p> <p>When you rightclick inside a <code>Contextmenu_Root</code>, or longpress on touch devices, it
		searches the DOM tree for behaviors defined with <code>Contextmenu</code> starting from the target
		element up to the root. If any behaviors are found, the Fuz contextmenu opens, showing all contextually
		available actions. If no behaviors are found, the default system contextmenu opens.</p> <p>Here's a <code> </code> with a <code>Contextmenu</code> inside another <code>Contextmenu</code>:</p> <!> <!> <p>This simple hierarchical pattern gives users the full contextual actions by default -- not just
		the actions for the target being clicked, but all ancestor actions too. This means users don't
		need to hunt for specific parent elements to find the desired action, unlike many systems --
		instead, all actions in the tree are available, improving UX convenience and predictability at
		the cost of more noisy menus. Developers can opt out of this inheritance behavior by simply not
		nesting <code>Contextmenu</code> declarations, and submenus are useful for managing complexity.</p> <h4>Mouse and keyboard:</h4> <ul><li>rightclick opens the Fuz contextmenu and not the system contextmenu (minus current exceptions
			for input/textarea/contenteditable)</li> <li>holding Shift opens the system contextmenu, bypassing the Fuz contextmenu</li> <li>keyboard navigation and activation should work similarly to the W3C <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/">APG menubar pattern</a></li></ul> <h4>Touch devices:</h4> <ul><li>longpress opens the Fuz contextmenu and not the system contextmenu (minus current exceptions
			for input/textarea/contenteditable)</li> <li>double-tap-and-hold (tap-then-longpress) opens the system contextmenu or performs other
			default behavior like selecting text, bypassing the Fuz contextmenu</li> <li>double-tap-and-hold can't work for clickable elements like links; longpress on the first
			contextmenu entry for those cases (double-longpress)</li></ul> <h4>All devices:</h4> <ul><li>opening the contextmenu on the contextmenu itself shows the system contextmenu, bypassing the
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function lo(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name);Dt(s,{children:(i,u)=>{var l=io(),v=S(l);Ft(v,{text:"Introduction"});var f=r(v,2),M=r(m(f),5);ne(M,{path:"Web/API/Element/contextmenu_event"}),F(3),d(f);var A=r(f,4),p=r(m(A)),g=m(p,!0);d(p),F(5),d(A);var x=r(A,2);Bt(x,()=>e(c),(Q,I)=>{I(Q,{scoped:!0,children:(O,E)=>{At(O,{entries:b=>{_t(b,{run:()=>alert("alert A"),children:(U,y)=>{F();var z=B("alert A");o(U,z)},$$slots:{default:!0}})},children:(b,U)=>{var y=ao(),z=r(m(y),2);At(z,{entries:G=>{_t(G,{run:()=>alert("alert B"),children:(et,K)=>{F();var H=B("alert B");o(et,H)},$$slots:{default:!0}})},children:(G,et)=>{var K=so();o(G,K)},$$slots:{entries:!0,default:!0}}),d(y),o(b,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var w=r(x,2);Ue(w,{summary:I=>{F();var O=B("view code");o(I,O)},children:(I,O)=>{{let E=P(()=>`<${e(_)}>
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => alert('alert A')}>
				alert A
			</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md mb_lg">
			<p>alert A -- rightclick or longpress here to open the contextmenu</p>
			<Contextmenu>
				{#snippet entries()}
					<Contextmenu_Entry run={() => alert('alert B')}>
						alert B
					</Contextmenu_Entry>
				{/snippet}
				<p class="panel p_md">
					alert B -- also inherits A
				</p>
			</Contextmenu>
		</div>
	</Contextmenu>
</${e(_)}>`);qt(I,{get content(){return e(E)}})}},$$slots:{summary:!0,default:!0}});var k=r(w,14),h=r(m(k),2),C=r(m(h));ne(C,{path:"Web/API/Navigator/vibrate",children:(Q,I)=>{var O=ro();o(Q,O)},$$slots:{default:!0}}),d(h),d(k);var X=r(k,2);Ze(X,{}),lt(()=>gt(g,e(_))),o(i,l)},$$slots:{default:!0}}),wt()}var co=$('<span class="font_family_mono">contextmenu</span> event',1),uo=$(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, better performance with fewer and less intrusive event handlers, fewer edge
			cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),_o=$(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),vo=$("<!> <!>",1);function mo(s){var t=vo(),n=S(t);Dt(n,{children:(_,i)=>{var u=uo(),l=S(u);Ft(l,{text:"iOS compatibility"});var v=r(l,6),f=r(m(v),2),M=r(m(f));ne(M,{path:"Web/API/Element/contextmenu_event",children:(p,g)=>{var x=co();F(),o(p,x)},$$slots:{default:!0}}),d(f),F(4),d(v);var A=r(v,6);Ze(A,{}),o(_,u)},$$slots:{default:!0}});var c=r(n,2);Dt(c,{children:(_,i)=>{var u=_o(),l=S(u);Ft(l,{text:"Caveats"});var v=r(l,8),f=r(m(v));ne(f,{path:"Web/API/Element/contextmenu_event"}),F(3),d(v),o(_,u)},$$slots:{default:!0}}),o(s,t)}function po(s){const t=s-1;return t*t*t+1}function ho(s){return--s*s*s*s*s+1}function Fe(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=O=>Math.sqrt(O)*120,easing:u=po}=c,l=getComputedStyle(s),v=l.transform==="none"?"":l.transform,[f,M]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,M/=s.clientHeight;var A=fo(s),p=s.clientWidth/n.width/A,g=s.clientHeight/n.height/A,x=t.left+t.width*f,w=t.top+t.height*M,k=n.left+n.width*f,h=n.top+n.height*M,C=(x-k)*p,X=(w-h)*g,Q=t.width/n.width,I=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(C*C+X*X)):i,easing:u,css:(O,E)=>{var R=E*C,b=E*X,U=O+E*Q,y=O+E*I;return`transform: ${v} translate(${R}px, ${b}px) scale(${U}, ${y});`}}}function fo(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var go=$('<menu class="pane unstyled svelte-4htxep"><!></menu>'),xo=$('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function pe(s,t){yt(t,!0);const n=se.get(),c=n.add_submenu(),{layout:_}=n,i=P(()=>c.selected);let u=D(void 0);const l=de.get(),v=de.set();let f=D(0),M=D(0);Ht(()=>{e(u)&&A(e(u),_,l)});const A=(E,R,b)=>{const{x:U,y,width:z,height:N}=E.getBoundingClientRect();v.width=z,v.height=N;const G=U-e(f),et=y-e(M),K=G+z+b.width-R.width;if(K<=0)a(f,b.width,!0);else{const H=z-G;H<=0?a(f,-z):H>K?a(f,b.width-K):a(f,H-z)}a(M,Math.min(0,R.height-(et+N)),!0)};var p=xo();let g;var x=m(p);let w;var k=m(x),h=m(k),C=m(h);dt(C,()=>t.icon??St),d(h);var X=r(h,2),Q=m(X);dt(Q,()=>t.children),d(X),d(k),F(2),d(x);var I=r(x,2);{var O=E=>{var R=go();let b;var U=m(R);dt(U,()=>t.menu),d(R),Zt(R,y=>a(u,y),()=>e(u)),lt(y=>b=ce(R,"",b,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(M)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(E,R)};Z(I,E=>{e(i)&&E(O)})}d(p),lt((E,R)=>{g=ce(p,"",g,E),w=ft(x,1,"menu_item plain selectable svelte-4htxep",null,w,R),Ut(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),ht("mouseenter",x,E=>{Tt(E),setTimeout(()=>n.select(c))}),o(s,p),wt()}var bo=$("<!> <!>",1);function ve(s,t){yt(t,!0);const n=ot(t,"name",3,"Cat"),c=ot(t,"icon",3,"😺");pe(s,{icon:u=>{F();var l=B();lt(()=>gt(l,c())),o(u,l)},menu:u=>{var l=bo(),v=S(l);_t(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:A=>{var p=tt(),g=S(p);{var x=k=>{var h=B("🏠");o(k,h)},w=k=>{var h=B("🌄");o(k,h)};Z(g,k=>{t.position==="adventure"?k(x):k(w,!1)})}o(A,p)},children:(A,p)=>{var g=tt(),x=S(g);{var w=h=>{var C=B("go home");o(h,C)},k=h=>{var C=B("go adventure");o(h,C)};Z(x,h=>{t.position==="adventure"?h(w):h(k,!1)})}o(A,g)},$$slots:{icon:!0,default:!0}});var f=r(v,2);_t(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:A=>{var p=tt(),g=S(p);{var x=k=>{var h=B("🌄");o(k,h)},w=k=>{var h=B("🏠");o(k,h)};Z(g,k=>{t.position==="adventure"?k(x):k(w,!1)})}o(A,p)},children:(A,p)=>{var g=tt(),x=S(g);{var w=h=>{var C=B("do adventure");o(h,C)},k=h=>{var C=B("be home");o(h,C)};Z(x,h=>{t.position==="adventure"?h(w):h(k,!1)})}o(A,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{F();var v=B();lt(()=>gt(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),wt()}var yo=$("<!> <!> <!>",1);function wo(s,t){var n=yo(),c=S(n);Se(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{bn(l,{get data(){return yn},size:"var(--icon_size_xs)"})},children:(l,v)=>{F();var f=B("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=r(c,2);ae(_,{});var i=r(_,2);_t(i,{get run(){return t.toggle_about_dialog},icon:l=>{F();var v=B("?");o(l,v)},children:(l,v)=>{F();var f=B("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Je=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var $o=$("<!> <!>",1),ko=$("<!> <!>",1),Co=$("<!> <!> <!>",1);function To(s,t){yt(t,!0);const n=P(()=>Je(t.adventure_cats));pe(s,{icon:i=>{F();var u=B("🏠");o(i,u)},menu:i=>{var u=Co(),l=S(u);{var v=p=>{var g=$o(),x=S(g);_t(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{F();var C=B("🐈‍⬛");o(h,C)},children:(h,C)=>{F();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);ae(w,{}),o(p,g)};Z(l,p=>{e(n)&&p(v)})}var f=r(l,2);Vt(f,17,()=>t.home_cats,p=>p.name,(p,g)=>{ve(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var M=r(f,2);{var A=p=>{var g=ko(),x=S(g);_t(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{F();var C=B("🏠");o(h,C)},children:(h,C)=>{F();var X=B("be");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);_t(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{F();var C=B("🦋");o(h,C)},children:(h,C)=>{F();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(M,p=>{e(n)||p(A)})}o(i,u)},children:(i,u)=>{F();var l=B("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),wt()}var So=$("<!> <!>",1),Eo=$("<!> <!>",1),Po=$("<!> <!> <!>",1);function Io(s,t){yt(t,!0);const n=P(()=>Je(t.home_cats));pe(s,{icon:i=>{F();var u=B("🌄");o(i,u)},menu:i=>{var u=Po(),l=S(u);{var v=p=>{var g=So(),x=S(g);_t(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{F();var C=B("🦋");o(h,C)},children:(h,C)=>{F();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);ae(w,{}),o(p,g)};Z(l,p=>{e(n)&&p(v)})}var f=r(l,2);Vt(f,17,()=>t.adventure_cats,p=>p.name,(p,g)=>{ve(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var M=r(f,2);{var A=p=>{var g=Eo(),x=S(g);_t(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{F();var C=B("🌄");o(h,C)},children:(h,C)=>{F();var X=B("do");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);_t(w,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{F();var C=B("🐈‍⬛");o(h,C)},children:(h,C)=>{F();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(M,p=>{e(n)||p(A)})}o(i,u)},children:(i,u)=>{F();var l=B("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),wt()}var Ao=$('<span class="icon svelte-y90lnf"> </span>'),Oo=$('<span class="name svelte-y90lnf"><!> </span>'),zo=$("<span><!><!></span>");function Me(s,t){const n=ot(t,"name",3,"Cat"),c=ot(t,"icon",3,"😺"),_=ot(t,"show_name",3,!0),i=ot(t,"show_icon",3,!0);var u=zo();let l;var v=m(u);{var f=p=>{var g=Ao(),x=m(g,!0);d(g),lt(()=>gt(x,c())),o(p,g)};Z(v,p=>{i()&&p(f)})}var M=r(v);{var A=p=>{var g=Oo(),x=m(g);dt(x,()=>t.children??St);var w=r(x,1,!0);d(g),lt(()=>gt(w,n())),o(p,g)};Z(M,p=>{_()&&p(A)})}d(u),lt(p=>l=ft(u,1,"cat svelte-y90lnf",null,l,p),[()=>({"has-icon":i()})]),o(s,u)}const No=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

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
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	const selected = selected_contextmenu_root_component_context.get();
	const Contextmenu_Root_Component = $derived(selected.component);

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

<Contextmenu_Root_Component scoped>
	<Tome_Section>
		<Tome_Section_Header text="Full example" />
		<Contextmenu>
			{#snippet entries()}
				{#if can_reset}
					<Contextmenu_Text_Entry run={reset} content="Reset" icon="↻" />
				{/if}
				<App_Contextmenu {toggle_about_dialog} />
			{/snippet}
			<section class="display_flex">
				<div>
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
				</div>
			</section>
			<section>
				<Details>
					{#snippet summary()}View example source{/snippet}
					<Code content={file_contents} />
				</Details>
			</section>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root_Component>

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
				<code class="display_block p_md mb_lg"
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
`;var Ro=$("<!> <!>",1),Do=$('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Fo=$('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Mo=$('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Lo=$('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Ho=$('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Uo=$("<!> <!>",1),qo=$('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Bo=$("<!> <!>",1);function Wo(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_="Alyssa",i="Ben",u="home";let l=D(u),v=D(u);const f=P(()=>e(l)===e(v)?"😺":"😾"),M=P(()=>e(l)===e(v)?"😸":"😿"),A=P(()=>({name:_,icon:e(f),position:e(l)})),p=P(()=>({name:i,icon:e(M),position:e(v)}));let g=D(!1);const x=(N,G)=>{const et=[],K=[];for(const H of N){const st=H.position==="home"?et:K;G?st.unshift(H):st.push(H)}return{home_cats:et,adventure_cats:K}},w=P(()=>x([e(A),e(p)],e(g))),k=P(()=>e(w).home_cats),h=P(()=>e(w).adventure_cats),C=P(()=>e(l)!==u||e(v)!==u),X=()=>{a(l,u),a(v,u)};let Q=D(!1);const I=()=>{a(Q,!e(Q))},O=N=>{switch(N.type){case"call_cats_adventure":{a(l,"adventure"),a(v,"adventure");break}case"call_cats_home":{a(l,"home"),a(v,"home");break}case"cat_go_adventure":{N.name===_?a(l,"adventure"):N.name===i&&a(v,"adventure");break}case"cat_go_home":{N.name===_?a(l,"home"):N.name===i&&a(v,"home");break}case"cat_be_or_do":{a(g,!e(g));break}}},[E,R]=gn({fallback:(N,G)=>{const et=window.getComputedStyle(N),K=et.transform==="none"?"":et.transform;return{duration:1500,easing:ho,css:H=>`
					transform: ${K} scale(${H});
					opacity: ${H}
				`}}});var b=Bo(),U=S(b);Bt(U,()=>e(c),(N,G)=>{G(N,{scoped:!0,children:(et,K)=>{Dt(et,{children:(H,st)=>{var ct=Uo(),it=S(ct);Ft(it,{text:"Full example"});var xt=r(it,2);At(xt,{entries:bt=>{var L=Ro(),j=S(L);{var J=Y=>{Ee(Y,{run:X,content:"Reset",icon:"↻"})};Z(j,Y=>{e(C)&&Y(J)})}var W=r(j,2);wo(W,{toggle_about_dialog:I}),o(bt,L)},children:(bt,L)=>{var j=Ho(),J=S(j),W=m(J),Y=m(W);At(Y,{entries:at=>{To(at,{act:O,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(at,kt)=>{var vt=Fo(),It=r(m(vt),2);Vt(It,29,()=>e(k),({name:T,icon:q,position:V})=>T,(T,q)=>{let V=()=>e(q).name,rt=()=>e(q).icon,nt=()=>e(q).position;var mt=Do(),Ct=m(mt);At(Ct,{entries:Et=>{ve(Et,{act:O,get name(){return V()},get icon(){return rt()},get position(){return nt()}})},children:(Et,Ot)=>{Me(Et,{get name(){return V()},get icon(){return rt()}})},$$slots:{entries:!0,default:!0}}),d(mt),ee(1,mt,()=>R,()=>({key:V()})),ee(2,mt,()=>E,()=>({key:V()})),Re(mt,()=>Fe,null),o(T,mt)}),d(It),d(vt),o(at,vt)},$$slots:{entries:!0,default:!0}});var pt=r(Y,2);At(pt,{entries:at=>{Io(at,{act:O,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(at,kt)=>{var vt=Lo(),It=r(m(vt),2);Vt(It,29,()=>e(h),({name:T,icon:q,position:V})=>T,(T,q)=>{let V=()=>e(q).name,rt=()=>e(q).icon,nt=()=>e(q).position;var mt=Mo(),Ct=m(mt);At(Ct,{entries:Et=>{ve(Et,{act:O,get name(){return V()},get icon(){return rt()},get position(){return nt()}})},children:(Et,Ot)=>{Me(Et,{get name(){return V()},get icon(){return rt()}})},$$slots:{entries:!0,default:!0}}),d(mt),ee(1,mt,()=>R,()=>({key:V()})),ee(2,mt,()=>E,()=>({key:V()})),Re(mt,()=>Fe,null),o(T,mt)}),d(It),d(vt),o(at,vt)},$$slots:{entries:!0,default:!0}}),d(W),d(J);var ut=r(J,2),Lt=m(ut);Ue(Lt,{summary:at=>{F();var kt=B("View example source");o(at,kt)},children:(at,kt)=>{qt(at,{get content(){return No}})},$$slots:{summary:!0,default:!0}}),d(ut),o(bt,j)},$$slots:{entries:!0,default:!0}}),o(H,ct)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=r(U,2);{var z=N=>{hn(N,{onclose:()=>a(Q,!1),children:(G,et)=>{var K=qo(),H=m(K),st=r(m(H),8),ct=r(m(st),2);wn(ct,{});var it=r(ct,4);$n(it,{}),d(st),d(H),d(K),o(G,K)},$$slots:{default:!0}})};Z(y,N=>{e(Q)&&N(z)})}o(s,b),wt()}var Xo=$("<!> <!> <!>",1),Yo=$(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),jo=$("<!> <!>",1);function Vo(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name);let i=D(!1),u=D(!1),l=D(!1);var v=tt(),f=S(v);Bt(f,()=>e(c),(M,A)=>{A(M,{scoped:!0,children:(p,g)=>{Dt(p,{children:(x,w)=>{var k=jo(),h=S(k);Ft(h,{text:"Basic usage"});var C=r(h,2);At(C,{entries:Q=>{var I=Xo(),O=S(I);_t(O,{run:()=>void a(i,!e(i)),children:(b,U)=>{F();var y=B("Hello world");o(b,y)},$$slots:{default:!0}});var E=r(O,2);_t(E,{run:()=>void a(u,!e(u)),icon:U=>{F();var y=B("🌞");o(U,y)},children:(U,y)=>{F();var z=B("Hello with an optional icon snippet");o(U,z)},$$slots:{icon:!0,default:!0}});var R=r(E,2);_t(R,{run:()=>void a(l,!e(l)),icon:"🌚",children:(b,U)=>{F();var y=B("Hello with an optional icon string");o(b,y)},$$slots:{default:!0}}),o(Q,I)},children:(Q,I)=>{var O=Yo(),E=r(m(O),2);{let it=P(()=>`<${e(_)} scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}>
        Hello world <!-- ${e(i)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}>
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet <!-- ${e(u)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚">
        Hello with an optional icon string <!-- ${e(l)} -->
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</${e(_)}>
...markup without contextmenu behavior...`);qt(E,{get content(){return e(it)}})}var R=r(E,2),b=m(R);let U;var y=m(b);d(b),d(R);var z=r(R,2),N=m(z);let G;var et=m(N);d(N),d(z);var K=r(z,2),H=m(K);let st;var ct=m(H);d(H),d(K),F(2),d(O),lt((it,xt,$t)=>{U=ft(b,1,"",null,U,it),gt(y,`greeted = ${e(i)??""}`),G=ft(N,1,"",null,G,xt),gt(et,`greeted_icon_snippet = ${e(u)??""}`),st=ft(H,1,"",null,st,$t),gt(ct,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(Q,O)},$$slots:{entries:!0,default:!0}}),o(x,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),wt()}var Ko=$("<span> </span>");function te(s,t){const n=Le(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=P(()=>t.size??c);var u=Ko();ke(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[vn]:v}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=m(u,!0);d(u),lt(()=>gt(l,t.glyph)),o(s,u)}var Go=$('<span class="color_f_5">option f</span>'),Zo=$('<span class="color_g_5">option g</span>'),Jo=$('<span class="color_j_5">option j</span>'),Qo=$("<!> <!> <!> <!>",1),ts=$('<li class="color_error">Error: <code> </code></li>'),es=$('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),ns=$(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),os=$("<!> <!>",1);function ss(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name),i=new oe;let u=D(void 0);const l=P(()=>e(u)?`color_${e(u)}_5`:void 0),v=P(()=>e(u)?`color_${e(u)}`:void 0);var f=tt(),M=S(f);Bt(M,()=>e(c),(A,p)=>{p(A,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Dt(g,{children:(w,k)=>{var h=os(),C=S(h);Ft(C,{text:"Custom instance"});var X=r(C,2);At(X,{entries:I=>{pe(I,{icon:R=>{F();var b=B("🎨");o(R,b)},menu:R=>{var b=Qo(),U=S(b);_t(U,{run:()=>(a(u,"f"),{ok:!0,close:!1}),children:(G,et)=>{var K=Go();o(G,K)},$$slots:{default:!0}});var y=r(U,2);_t(y,{run:()=>(a(u,"g"),{ok:!0,close:!1}),children:(G,et)=>{var K=Zo();o(G,K)},$$slots:{default:!0}});var z=r(y,2);_t(z,{run:()=>(a(u,"j"),{ok:!0,close:!1}),children:(G,et)=>{var K=Jo();o(G,K)},$$slots:{default:!0}});var N=r(z,2);_t(N,{run:()=>(i.close(),{ok:!0}),children:(G,et)=>{F();var K=B("close contextmenu");o(G,K)},$$slots:{default:!0}}),o(R,b)},children:(R,b)=>{F();var U=B("select color");o(R,U)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(I,O)=>{var E=ns(),R=m(E),b=r(m(R)),U=m(b,!0);d(b),F(5),d(R);var y=r(R,2);qt(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var z=r(y,2);{let W=P(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);qt(z,{get content(){return e(W)}})}var N=r(z,2),G=r(m(N));G.textContent="{ok: true, close: false}",F(),d(N);var et=r(N,2),K=r(m(et),2),H=m(K),st=r(m(H),2),ct=m(st,!0);d(st),d(H);var it=r(H,2),xt=r(m(it),2),$t=m(xt);d(xt),d(it);var bt=r(it,2);{var L=W=>{var Y=ts(),pt=r(m(Y)),ut=m(pt,!0);d(pt),d(Y),lt(()=>gt(ut,i.error)),o(W,Y)};Z(bt,W=>{i.error&&W(L)})}d(K),d(et);var j=r(et,2);{var J=W=>{var Y=es(),pt=m(Y),ut=m(pt),Lt=m(ut);te(Lt,{glyph:"↑"}),d(ut);var Pt=r(ut,2),at=m(Pt),kt=m(at);te(kt,{glyph:"←"}),d(at);var vt=r(at,2),It=m(vt);te(It,{glyph:"↵"}),d(vt);var T=r(vt,2),q=m(T);te(q,{glyph:"→"}),d(T),d(Pt);var V=r(Pt,2),rt=m(V);te(rt,{glyph:"↓"}),d(V),d(pt),d(Y),lt(()=>{ft(ut,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),ut.disabled=!i.can_select_previous,ft(at,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),at.disabled=!i.can_collapse,ft(vt,1,`border_radius_0 ${e(v)??""}`),vt.disabled=!i.can_activate,ft(T,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),T.disabled=!i.can_expand,ft(V,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),V.disabled=!i.can_select_next}),ht("mousedown",ut,nt=>{Tt(nt),i.select_previous()},!0),ht("mousedown",at,nt=>{Tt(nt),i.collapse_selected()},!0),ht("mousedown",vt,async nt=>{Tt(nt),await i.activate_selected()},!0),ht("mousedown",T,nt=>{Tt(nt),i.expand_selected()},!0),ht("mousedown",V,nt=>{Tt(nt),i.select_next()},!0),ee(3,Y,()=>xn),o(W,Y)};Z(j,W=>{i.opened&&W(J)})}d(E),lt(()=>{gt(U,e(_)),ft(et,1,`mb_md ${e(l)??""}`),gt(ct,i.opened),gt($t,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(I,E)},$$slots:{entries:!0,default:!0}}),o(w,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),wt()}const as=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var rs=$(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),is=$("<div><!></div> <!>",1);function ls(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=new oe;let i=D(!1),u=D(void 0),l=D("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,M=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,A=P(()=>e(l)===v||e(l)===f||e(l)===M);var p=tt(),g=S(p);Bt(g,()=>e(c),(x,w)=>{w(x,{get contextmenu(){return _},scoped:!0,children:(k,h)=>{Dt(k,{children:(C,X)=>{var Q=is(),I=S(Q);let O;var E=m(I);Ft(E,{text:"Select text"}),d(I);var R=r(I,2);At(R,{entries:U=>{_t(U,{run:()=>void a(i,!e(i)),children:(y,z)=>{F();var N=B("Toggle something");o(y,N)},$$slots:{default:!0}})},children:(U,y)=>{var z=rs();let N;var G=m(z),et=r(m(G),2),K=r(m(et));K.__click=[as,u];let H;F(),d(et),d(G),Zt(G,Y=>a(u,Y),()=>e(u));var st=r(G,2),ct=m(st);jt(ct),d(st);var it=r(st,2);let xt;var $t=r(it,2),bt=m($t);rn(bt),d($t);var L=r($t,2),j=m(L);ne(j,{path:"Web/HTML/Global_attributes/contenteditable"}),F(),d(L);var J=r(L,4),W=r(J,4);F(2),d(z),lt((Y,pt,ut)=>{N=ft(z,1,"panel p_md",null,N,Y),H=ft(K,1,"",null,H,pt),xt=ft(it,1,"",null,xt,ut)},[()=>({color_g_5:e(A)}),()=>({color_a:e(i)}),()=>({color_g_5:e(A)})]),Ne(ct,()=>e(l),Y=>a(l,Y)),Ne(bt,()=>e(l),Y=>a(l,Y)),Oe("innerText",J,()=>e(l),Y=>a(l,Y)),Oe("innerText",W,()=>e(l),Y=>a(l,Y)),o(U,z)},$$slots:{entries:!0,default:!0}}),lt(b=>O=ft(I,1,"",null,O,b),[()=>({color_d_5:e(A)})]),o(C,Q)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,p),wt()}Kt(["click"]);const cs=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var us=$('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),ds=$('<li>custom "some custom entry" entry</li>'),_s=$('<li>"copy text" entry when text is selected</li>'),vs=$("<li>link entry when clicking on a link</li>"),ms=$("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),ps=$(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),hs=$('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function fs(s,t){yt(t,!0);const n=p=>{var g=us(),x=m(g),w=r(m(x));w.__click=[cs,A];let k;F(),d(x),Zt(x,X=>a(A,X),()=>e(A));var h=r(x,2),C=r(m(h));F(),d(h),d(g),lt((X,Q)=>{k=ft(w,1,"",null,k,X),Ut(C,"href",Q)},[()=>({color_h:e(M)}),()=>kn("/")]),o(p,g)},c=Mt.get(),_=P(()=>c.component),i=P(()=>c.name),u=new oe;let l=D(!1),v=D(!1),f=D(!0),M=D(!1),A=D(void 0);Dt(s,{children:(p,g)=>{var x=hs(),w=S(x);Ft(w,{text:"Disable default behaviors"});var k=r(w,4);{let H=P(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);qt(k,{get content(){return e(H)}})}var h=r(k,2),C=m(h),X=m(C);jt(X);var Q=r(X,2),I=r(m(Q));I.textContent="link_entry={null}",d(Q),d(C);var O=r(C,2),E=m(O);jt(E);var R=r(E,2),b=r(m(R));b.textContent="text_entry={null}",d(R),d(O),d(h);var U=r(h,2);{let H=P(()=>e(l)?null:void 0),st=P(()=>e(v)?null:void 0);Bt(U,()=>e(_),(ct,it)=>{it(ct,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(H)},get text_entry(){return e(st)},children:(xt,$t)=>{var bt=tt(),L=S(bt);{var j=W=>{At(W,{entries:pt=>{_t(pt,{icon:">",run:()=>void a(M,!e(M)),children:(ut,Lt)=>{F();var Pt=B("some custom entry");o(ut,Pt)},$$slots:{default:!0}})},children:(pt,ut)=>{n(pt)},$$slots:{entries:!0,default:!0}})},J=W=>{n(W)};Z(L,W=>{e(f)?W(j):W(J,!1)})}o(xt,bt)},$$slots:{default:!0}})})}var y=r(U,4),z=m(y),N=m(z);jt(N),F(),d(z),d(y);var G=r(y,2);{var et=H=>{var st=ms(),ct=r(S(st),2),it=m(ct);{var xt=J=>{var W=ds();o(J,W)};Z(it,J=>{e(f)&&J(xt)})}var $t=r(it,2);{var bt=J=>{var W=_s();o(J,W)};Z($t,J=>{e(v)||J(bt)})}var L=r($t,2);{var j=J=>{var W=vs();o(J,W)};Z(L,J=>{e(l)||J(j)})}d(ct),o(H,st)},K=H=>{var st=ps();o(H,st)};Z(G,H=>{e(f)||!e(l)||!e(v)?H(et):H(K,!1)})}ye(X,()=>e(l),H=>a(l,H)),ye(E,()=>e(v),H=>a(v,H)),ye(N,()=>e(f),H=>a(f,H)),o(p,x)},$$slots:{default:!0}}),wt()}Kt(["click"]);var gs=$(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function xs(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name);var i=tt(),u=S(i);Bt(u,()=>e(c),(l,v)=>{v(l,{scoped:!0,children:(f,M)=>{Dt(f,{children:(A,p)=>{var g=gs(),x=S(g);Ft(x,{text:"Default behaviors"});var w=r(x,2),k=m(w);{let h=P(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);qt(k,{get content(){return e(h)}})}F(6),d(w),o(A,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),wt()}var bs=$("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function Ys(s,t){yt(t,!0);const c=cn("Contextmenu");Mt.set(),ln(s,{get tome(){return c},children:(_,i)=>{var u=bs(),l=S(u);lo(l,{});var v=r(l,2);Vo(v,{});var f=r(v,2);xs(f,{});var M=r(f,2);ls(M,{});var A=r(M,2);fs(A,{});var p=r(A,2);ss(p,{});var g=r(p,2);Wo(g,{});var x=r(g,2);mo(x),F(2),o(_,u)},$$slots:{default:!0}}),wt()}export{Ys as component};
