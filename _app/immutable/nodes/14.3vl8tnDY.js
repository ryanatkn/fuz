import"../chunks/DsnmJJEf.js";import{C as tn,z as en,af as L,h as e,ae as a,aj as ie,u as S,e as nt,a as E,b as o,g as _t,p as $t,f as w,s as r,d as v,t as ct,b9 as ht,c as kt,r as d,b8 as jt,ac as W,ad as D,ab as Et,F as Ht,ba as Lt,bE as nn}from"../chunks/B7qs8f6Z.js";import{T as on}from"../chunks/Xt42EWjS.js";import{g as sn}from"../chunks/CAyeLnre.js";import{s as gt}from"../chunks/D2Z-uHvG.js";import{c as Wt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/CirvM9AB.js";import{M as ee}from"../chunks/DHzjxUCy.js";import{T as Nt,a as Rt}from"../chunks/0WCyz8Sg.js";import{e as an}from"../chunks/36zOYlHh.js";import{a as rn}from"../chunks/B2EI8ygw.js";import{a as ye,b as ft,s as Ut,C as ln,c as ne,d as Ee,r as Xt,S as cn}from"../chunks/C61V10DD.js";import{p as ot,r as De,s as Vt}from"../chunks/C2A3Zqzr.js";import{o as Se}from"../chunks/BMgspcsU.js";import{a as un,s as At,b as Fe,c as dn,D as _n}from"../chunks/DPmjiu3g.js";import{c as _e,a as fe,e as Yt}from"../chunks/GCAAGpmM.js";import{i as Z}from"../chunks/DHMuHmk0.js";import{P as vn}from"../chunks/B7mkSFrP.js";import{D as Le,b as Pe}from"../chunks/8X_O05eD.js";import{b as Ae,a as Ie,c as ge}from"../chunks/7g2Ar_02.js";import{b as Kt}from"../chunks/2LOYOryH.js";import{t as te,c as mn,a as Oe,s as pn}from"../chunks/DkIYfvB-.js";import{S as hn,g as fn}from"../chunks/B-XuT0zp.js";import{C as gn,T as xn}from"../chunks/twD8klRS.js";import{r as bn}from"../chunks/CLWaxOdE.js";class we{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){we.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var yn=new we({box:"border-box"});function le(s,t,n){var c=yn.observe(s,()=>n(s[t]));tn(()=>(en(()=>n(s[t])),c))}const wn=Object.freeze({});class Me{#t=L(0);get width(){return e(this.#t)}set width(t){a(this.#t,t,!0)}#e=L(0);get height(){return e(this.#e)}set height(t){a(this.#e,t,!0)}}class $n{is_menu=!1;menu;run;disabled;#t=L(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=L(!1);get pending(){return e(this.#e)}set pending(t){a(this.#e,t,!0)}#n=L(null);get error_message(){return e(this.#n)}set error_message(t){a(this.#n,t,!0)}#o=L(null);get promise(){return e(this.#o)}set promise(t){a(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class kn{is_menu=!0;menu;depth;#t=L(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=L(ie([]));get items(){return e(this.#e)}set items(t){a(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class Cn{is_menu=!0;menu=null;depth=1;#t=L(ie([]));get items(){return e(this.#t)}set items(t){a(this.#t,t,!0)}}class oe{layout;initial_layout;#t=L(!1);get opened(){return e(this.#t)}set opened(t){a(this.#t,t,!0)}#e=L(0);get x(){return e(this.#e)}set x(t){a(this.#e,t,!0)}#n=L(0);get y(){return e(this.#n)}set y(t){a(this.#n,t,!0)}#o=L(ie([]));get params(){return e(this.#o)}set params(t){a(this.#o,t,!0)}#s=L();get error(){return e(this.#s)}set error(t){a(this.#s,t,!0)}root_menu=new Cn;#a=L(ie([]));get selections(){return e(this.#a)}set selections(t){a(this.#a,t,!0)}#r=S(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){a(this.#r,t)}#i=S(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){a(this.#i,t)}#l=S(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){a(this.#l,t)}#c=S(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){a(this.#c,t)}#u=S(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){a(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new Me}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(un(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=xe.maybe_get()??this.root_menu,_=new $n(c,t,n);return c.items.push(_),Se(()=>{c.items.length=0}),_}add_submenu(){const t=xe.maybe_get()??this.root_menu,n=new kn(t,t.depth+1);return t.items.push(n),xe.set(n),Se(()=>{t.items.length=0}),n}}const $e="contextmenu",Tn=`a,[data-${$e}]`,re=new Map;let En=0;const Sn=(s,t)=>{if(t==null)return;const n=En+++"";return s.dataset[$e]=n,re.set(n,t),{update:c=>{re.set(n,c)},destroy:()=>{re.delete(n)}}},Pn=17,be=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:m=!0}=_??wn,f=An(s)?.filter(M=>typeof M=="function"||(M.snippet!=="link"||i)&&(M.snippet!=="text"||u)&&(M.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),m&&navigator.vibrate&&navigator.vibrate(Pn),!0):!1},An=s=>{let t=null,n=s,c,_;for(;n=n?.closest(Tn);){if(c=n.dataset[$e]){if(t??=[],_=re.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},se=_e(),xe=_e(),ce=_e(()=>new Me);function Ot(s,t){const n=ot(t,"tag",3,"span");var c=nt(),_=E(c);an(_,n,!1,(i,u)=>{rn(i,(f,M)=>Sn?.(f,M),()=>t.entries),ye(i,()=>({class:"display_contents",...t.attrs}));var l=nt(),m=E(l);_t(m,()=>t.children),o(u,l)}),o(s,c)}var In=w('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function vt(s,t){$t(t,!0);const n=ot(t,"disabled",3,!1),c=se.get(),_=c.add_entry(()=>t.run,()=>n()),i=S(()=>_.selected),u=S(()=>_.pending),l=S(()=>_.error_message),m=S(()=>_.disabled());var f=In();let M;f.__click=function(...P){(e(m)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,P)};var A=v(f),p=v(A),g=v(p);{var x=P=>{var I=W();ct(()=>gt(I,t.icon)),o(P,I)},$=P=>{var I=nt(),T=E(I);{var N=b=>{var U=nt(),y=E(U);_t(y,()=>t.icon),o(b,U)};Z(T,b=>{t.icon&&b(N)},!0)}o(P,I)};Z(g,P=>{typeof t.icon=="string"?P(x):P($,!1)})}d(p);var k=r(p,2),h=v(k);_t(h,()=>t.children),d(k);var C=r(k,2);{var X=P=>{vn(P,{})},J=P=>{var I=nt(),T=E(I);{var N=b=>{var U=W("⚠️");o(b,U)};Z(T,b=>{e(l)&&b(N)},!0)}o(P,I)};Z(C,P=>{e(u)?P(X):P(J,!1)})}d(A),d(f),ct(P=>{M=ft(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,M,P),Ut(f,"aria-disabled",e(m)),Ut(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(m)})]),ht("mouseenter",f,function(...P){(e(m)?void 0:I=>{At(I),c.select(_)})?.apply(this,P)}),o(s,f),kt()}jt(["click"]);var On=s=>{s.stopPropagation()},zn=w('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function ke(s,t){$t(t,!0);const n="🔗",c=ot(t,"icon",3,n),_=ot(t,"disabled",3,!1),i=se.get();let u=L(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),m=S(()=>l.selected),f=S(()=>l.disabled()),M=(y,O=location.host)=>{const z=fe(fe(y,"https://"),"http://");return z.startsWith(O+"/")?fe(z,O):z},A=S(()=>M(t.href)),p=S(()=>!(e(A)[0]==="."||e(A)[0]==="/"&&e(A)[1]!=="/")),g=S(()=>e(p)?"noreferrer":void 0);var x=zn(),$=v(x);let k;$.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},$.__contextmenu=[On];var h=v($),C=v(h),X=v(C);{var J=y=>{var O=W();ct(()=>gt(O,c())),o(y,O)},P=y=>{var O=nt(),z=E(O);_t(z,c,()=>n),o(y,O)};Z(X,y=>{typeof c()=="string"?y(J):y(P,!1)})}d(C);var I=r(C,2),T=v(I),N=v(T);{var b=y=>{var O=nt(),z=E(O);_t(z,()=>t.children),o(y,O)},U=y=>{var O=W();ct(()=>gt(O,e(A))),o(y,O)};Z(N,y=>{t.children?y(b):y(U,!1)})}d(T),d(I),d(h),d($),Kt($,y=>a(u,y),()=>e(u)),d(x),ct(y=>{k=ft($,1,"menu_item plain svelte-1fkm0gl",null,k,y),Ut($,"aria-disabled",e(f)),Ut($,"href",t.href),Ut($,"rel",e(g))},[()=>({selected:e(m),disabled:e(f)})]),ht("mouseenter",$,function(...y){(e(f)?void 0:O=>{At(O),i.select(l)})?.apply(this,y)}),o(s,x),kt()}jt(["click","contextmenu"]);function Ce(s,t){vt(s,{get run(){return t.run},icon:c=>{D();var _=W();ct(()=>gt(_,t.icon)),o(c,_)},children:(c,_)=>{D();var i=W();ct(()=>gt(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var Nn=w("<li></li>");function ae(s,t){const n=De(t,["$$slots","$$events","$$legacy"]);var c=Nn();ye(c,()=>({role:"separator","aria-orientation":"vertical",...n,[ln]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const He=-2,Ue=-2,qe=910,We=7,Rn=633,Dn=21,ue=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!Fe(s)&&!dn(s),Be=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Xe=s=>t=>{const n=s.get(t.key);!n||Fe(t.target)||(At(t),n())},Ye=(s,t,n)=>s+Math.min(0,n-(s+t)),je=(s,t,n)=>s+Math.min(0,n-(s+t)),Fn=(s,t=Et)=>{ke(s,Vt(t))},Ln=(s,t=Et)=>{Ce(s,Vt(t))},Mn=(s,t=Et)=>{ae(s,Vt(t))};var Hn=w('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Un=w('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),qn=w('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Wn=w("<!> <!>  <!>",1);function ze(s,t){$t(t,!0);const n=ot(t,"contextmenu",19,()=>new oe),c=ot(t,"open_offset_x",3,He),_=ot(t,"open_offset_y",3,Ue),i=ot(t,"bypass_with_tap_then_longpress",3,!0),u=ot(t,"bypass_window",3,qe),l=ot(t,"bypass_move_tolerance",3,We),m=ot(t,"scoped",3,!1),f=ot(t,"link_entry",3,Fn),M=ot(t,"text_entry",3,Ln),A=ot(t,"separator_entry",3,Mn);se.set(n());let p=L(void 0);const g=S(()=>n().layout),x=S(()=>n().initial_layout),$=S(()=>e(g)===e(x));let k=L(void 0),h=L(void 0);Ht(()=>{!e($)&&e(k)!==void 0&&(e(g).width=e(k))}),Ht(()=>{!e($)&&e(h)!==void 0&&(e(g).height=e(h))});const C=ce.set();Ht(()=>{if(e(p)){const F=e(p).getBoundingClientRect();C.width=F.width,C.height=F.height}});const X=S(()=>Ye(n().x,C.width,e(g).width)),J=S(()=>je(n().y,C.height,e(g).height));let P=L(void 0),I=L(void 0),T=L(void 0),N=L(void 0),b=L(void 0);const U=F=>{if(e(N)){a(N,!1),a(T,null),a(P,null),a(I,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{target:j}=F;ue(j,F.shiftKey)&&(e(p)?.contains(j)||be(j,F.clientX+c(),F.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:M()!==null,separator_enabled:A()!==null})&&At(F))},y=F=>{if(!i())return;const{touches:j,target:G}=F;if(n().opened||j.length!==1||!ue(G,F.shiftKey)){a(T,null),a(P,null),a(I,null),a(N,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{clientX:B,clientY:V}=j[0];if(e(T)!=null&&performance.now()-e(T)<u()&&Math.hypot(B-e(P),V-e(I))<l()){a(N,!0),a(T,null),a(P,null),a(I,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}a(T,performance.now(),!0),a(P,B,!0),a(I,V,!0),e(b)!=null&&clearTimeout(e(b)),a(b,setTimeout(()=>{a(T,null),a(P,null),a(I,null),a(b,null)},u()),!0)},O=()=>{a(T,null),a(P,null),a(I,null),a(N,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null))},z=F=>{e(p)&&!e(p).contains(F.target)&&n().close()},K=Be(n()),tt=Xe(K);var Y=Wn();ht("contextmenu",Lt,function(...F){(m()?void 0:U)?.apply(this,F)}),ht("mousedown",Lt,function(...F){(n().opened?z:void 0)?.apply(this,F)}),ht("keydown",Lt,function(...F){(n().opened?tt:void 0)?.apply(this,F)}),ht("touchstart",Lt,function(...F){(m()||!i()?void 0:y)?.apply(this,F)},!0,!0),ht("touchcancel",Lt,function(...F){(m()||!i()?void 0:O)?.apply(this,F)},!0);var q=E(Y);{var at=F=>{var j=Hn();j.__contextmenu=U;var G=v(j);_t(G,()=>t.children),d(j),ht("touchstart",j,function(...B){(i()?y:void 0)?.apply(this,B)},!0,!0),ht("touchcancel",j,function(...B){(i()?O:void 0)?.apply(this,B)},!0),o(F,j)},ut=F=>{var j=nt(),G=E(j);_t(G,()=>t.children),o(F,j)};Z(q,F=>{m()?F(at):F(ut,!1)})}var it=r(q,2);{var mt=F=>{var j=Un();le(j,"clientHeight",G=>a(h,G)),le(j,"clientWidth",G=>a(k,G)),o(F,j)};Z(it,F=>{e($)||F(mt)})}var Ct=r(it,2);{var xt=F=>{var j=qn();let G;Yt(j,20,()=>n().params,B=>B,(B,V)=>{var pt=nt(),dt=E(pt);{var Ft=rt=>{var R=nt(),H=E(R);_t(H,()=>V),o(rt,R)},It=rt=>{var R=nt(),H=E(R);{var et=st=>{var lt=nt(),St=E(lt);_t(St,()=>f()??Et,()=>V.props),o(st,lt)},Q=st=>{var lt=nt(),St=E(lt);{var bt=wt=>{var Pt=nt(),Tt=E(Pt);_t(Tt,()=>M()??Et,()=>V.props),o(wt,Pt)},yt=wt=>{var Pt=nt(),Tt=E(Pt);{var Gt=Zt=>{var zt=nt(),Mt=E(zt);_t(Mt,()=>A()??Et,()=>V.props),o(Zt,zt)};Z(Tt,Zt=>{V.snippet==="separator"&&Zt(Gt)},!0)}o(wt,Pt)};Z(St,wt=>{V.snippet==="text"?wt(bt):wt(yt,!1)},!0)}o(st,lt)};Z(H,st=>{V.snippet==="link"?st(et):st(Q,!1)},!0)}o(rt,R)};Z(dt,rt=>{typeof V=="function"?rt(Ft):rt(It,!1)})}o(B,pt)}),d(j),Kt(j,B=>a(p,B),()=>e(p)),ct(B=>G=ne(j,"",G,B),[()=>({transform:`translate3d(${e(X)??""}px, ${e(J)??""}px, 0)`})]),o(F,j)};Z(Ct,F=>{n().opened&&F(xt)})}o(s,Y),kt()}jt(["contextmenu"]);const Bn=(s,t=Et)=>{ke(s,Vt(t))},Xn=(s,t=Et)=>{Ce(s,Vt(t))},Yn=(s,t=Et)=>{ae(s,Vt(t))};var jn=w('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),Vn=w("<div><!></div>"),Kn=w('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Gn=w('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Zn=w("<!> <!> <!>",1);function Jn(s,t){$t(t,!0);const n=ot(t,"contextmenu",19,()=>new oe),c=ot(t,"longpress_move_tolerance",3,Dn),_=ot(t,"longpress_duration",3,Rn),i=ot(t,"bypass_with_tap_then_longpress",3,!0),u=ot(t,"bypass_window",3,qe),l=ot(t,"bypass_move_tolerance",3,We),m=ot(t,"open_offset_x",3,He),f=ot(t,"open_offset_y",3,Ue),M=ot(t,"scoped",3,!1),A=ot(t,"link_entry",3,Bn),p=ot(t,"text_entry",3,Xn),g=ot(t,"separator_entry",3,Yn);se.set(n());let x=L(void 0);const $=S(()=>n().layout),k=S(()=>n().initial_layout),h=S(()=>e($)===e(k));let C=L(void 0),X=L(void 0);Ht(()=>{!e(h)&&e(C)!==void 0&&(e($).width=e(C))}),Ht(()=>{!e(h)&&e(X)!==void 0&&(e($).height=e(X))});const J=ce.set();Ht(()=>{if(e(x)){const R=e(x).getBoundingClientRect();J.width=R.width,J.height=R.height}});const P=S(()=>Ye(n().x,J.width,e($).width)),I=S(()=>je(n().y,J.height,e($).height));let T=L(void 0),N=L(void 0),b=L(void 0),U=L(void 0),y=L(void 0),O=L(void 0),z=L(void 0);const K=()=>{a(y,!1),e(U)!=null&&(clearTimeout(e(U)),a(U,null))},tt=()=>{a(b,null),a(T,null),a(N,null),a(O,!1),e(z)!=null&&(clearTimeout(e(z)),a(z,null))},Y=()=>{K(),tt()},q=R=>{if(e(O)){tt();return}const{target:H}=R;if(e(y)){if(e(x)?.contains(H))return;Y(),At(R);return}ue(H,R.shiftKey)&&(e(x)?.contains(H)||be(H,R.clientX+m(),R.clientY+f(),n(),{link_enabled:A()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})&&(At(R),Y()))},at=R=>{a(y,!1);const{touches:H,target:et}=R;if(n().opened||H.length!==1||!ue(et,R.shiftKey)){Y();return}const{clientX:Q,clientY:st}=H[0];if(i()){if(e(b)!=null&&performance.now()-e(b)<u()&&Math.hypot(Q-e(T),st-e(N))<l()){a(O,!0),a(b,null),a(T,null),a(N,null),e(z)!=null&&(clearTimeout(e(z)),a(z,null));return}a(b,performance.now(),!0),e(z)!=null&&clearTimeout(e(z)),a(z,setTimeout(()=>{tt()},u()),!0)}a(T,Q,!0),a(N,st,!0),e(U)!=null&&K(),a(U,setTimeout(()=>{a(y,!0),be(et,e(T)+m(),e(N)+f(),n(),{link_enabled:A()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})},_()),!0)},ut=R=>{if(e(U)==null||n().opened)return;const{touches:H}=R;if(H.length!==1)return;const{clientX:et,clientY:Q}=H[0];if(Math.hypot(et-e(T),Q-e(N))>c()){K();return}R.preventDefault()},it=R=>{e(U)!=null&&(e(y)&&At(R),K()),e(O)&&tt()},mt=()=>{Y()},Ct=R=>{e(x)&&!e(x).contains(R.target)&&n().close()},xt=Be(n()),F=Xe(xt),j=R=>H=>{const et={passive:!1,capture:!0},Q=R==="window"?window:H;return Q.addEventListener("touchstart",at,et),Q.addEventListener("touchmove",ut,et),Q.addEventListener("touchend",it,et),Q.addEventListener("touchcancel",mt,et),()=>{Q.removeEventListener("touchstart",at,et),Q.removeEventListener("touchmove",ut,et),Q.removeEventListener("touchend",it,et),Q.removeEventListener("touchcancel",mt,et)}};var G=Zn();ht("contextmenu",Lt,function(...R){(M()?void 0:q)?.apply(this,R)}),ht("mousedown",Lt,function(...R){(n().opened?Ct:void 0)?.apply(this,R)}),ht("keydown",Lt,function(...R){(n().opened?F:void 0)?.apply(this,R)});var B=E(G);{var V=R=>{var H=jn();H.__contextmenu=q;var et=v(H);_t(et,()=>t.children),d(H),Ee(H,()=>j("element")),o(R,H)},pt=R=>{var H=Vn();ne(H,"",{},{display:"contents"});var et=v(H);_t(et,()=>t.children),d(H),Ee(H,()=>j("window")),o(R,H)};Z(B,R=>{M()?R(V):R(pt,!1)})}var dt=r(B,2);{var Ft=R=>{var H=Kn();le(H,"clientHeight",et=>a(X,et)),le(H,"clientWidth",et=>a(C,et)),o(R,H)};Z(dt,R=>{e(h)||R(Ft)})}var It=r(dt,2);{var rt=R=>{var H=Gn();let et;Yt(H,20,()=>n().params,Q=>Q,(Q,st)=>{var lt=nt(),St=E(lt);{var bt=wt=>{var Pt=nt(),Tt=E(Pt);_t(Tt,()=>st),o(wt,Pt)},yt=wt=>{var Pt=nt(),Tt=E(Pt);{var Gt=zt=>{var Mt=nt(),me=E(Mt);_t(me,()=>A()??Et,()=>st.props),o(zt,Mt)},Zt=zt=>{var Mt=nt(),me=E(Mt);{var Ge=Bt=>{var Jt=nt(),pe=E(Jt);_t(pe,()=>p()??Et,()=>st.props),o(Bt,Jt)},Ze=Bt=>{var Jt=nt(),pe=E(Jt);{var Je=he=>{var Te=nt(),Qe=E(Te);_t(Qe,()=>g()??Et,()=>st.props),o(he,Te)};Z(pe,he=>{st.snippet==="separator"&&he(Je)},!0)}o(Bt,Jt)};Z(me,Bt=>{st.snippet==="text"?Bt(Ge):Bt(Ze,!1)},!0)}o(zt,Mt)};Z(Tt,zt=>{st.snippet==="link"?zt(Gt):zt(Zt,!1)},!0)}o(wt,Pt)};Z(St,wt=>{typeof st=="function"?wt(bt):wt(yt,!1)})}o(Q,lt)}),d(H),Kt(H,Q=>a(x,Q),()=>e(x)),ct(Q=>et=ne(H,"",et,Q),[()=>({transform:`translate3d(${e(P)??""}px, ${e(I)??""}px, 0)`})]),o(R,H)};Z(It,R=>{n().opened&&R(rt)})}o(s,G),kt()}jt(["contextmenu"]);class Qn{#t=L();get variant(){return e(this.#t)}set variant(t){a(this.#t,t,!0)}#e=S(()=>this.variant==="standard"?ze:Jn);get component(){return e(this.#e)}set component(t){a(this.#e,t)}#n=S(()=>this.component===ze?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){a(this.#n,t)}constructor(t="standard"){this.variant=t}}const Dt=_e(()=>new Qn("standard"));var to=w('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Ve(s,t){$t(t,!0);const n=[],c=Dt.get();var _=to(),i=r(v(_),2),u=v(i);Xt(u),u.value=u.__value="standard",D(2),d(i);var l=r(i,2),m=v(l);Xt(m),m.value=m.__value="compat",D(2),d(l),d(_),Ae(n,[],u,()=>c.variant,f=>c.variant=f),Ae(n,[],m,()=>c.variant,f=>c.variant=f),o(s,_),kt()}var eo=w('<p class="panel p_md">alert B -- also inherits A</p>'),no=w('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),oo=w("<code>navigator.vibrate</code>"),so=w(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function ao(s,t){$t(t,!0);const n=Dt.get(),c=S(()=>n.component),_=S(()=>n.name);Nt(s,{children:(i,u)=>{var l=so(),m=E(l);Rt(m,{text:"Introduction"});var f=r(m,2),M=r(v(f),5);ee(M,{path:"Web/API/Element/contextmenu_event"}),D(3),d(f);var A=r(f,4),p=r(v(A)),g=v(p,!0);d(p),D(5),d(A);var x=r(A,2);Wt(x,()=>e(c),(J,P)=>{P(J,{scoped:!0,children:(I,T)=>{Ot(I,{entries:b=>{vt(b,{run:()=>alert("alert A"),children:(U,y)=>{D();var O=W("alert A");o(U,O)},$$slots:{default:!0}})},children:(b,U)=>{var y=no(),O=r(v(y),2);Ot(O,{entries:K=>{vt(K,{run:()=>alert("alert B"),children:(tt,Y)=>{D();var q=W("alert B");o(tt,q)},$$slots:{default:!0}})},children:(K,tt)=>{var Y=eo();o(K,Y)},$$slots:{entries:!0,default:!0}}),d(y),o(b,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var $=r(x,2);Le($,{summary:P=>{D();var I=W("view code");o(P,I)},children:(P,I)=>{{let T=S(()=>`<${e(_)}>
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
</${e(_)}>`);qt(P,{get content(){return e(T)}})}},$$slots:{summary:!0,default:!0}});var k=r($,14),h=r(v(k),2),C=r(v(h));ee(C,{path:"Web/API/Navigator/vibrate",children:(J,P)=>{var I=oo();o(J,I)},$$slots:{default:!0}}),d(h),d(k);var X=r(k,2);Ve(X,{}),ct(()=>gt(g,e(_))),o(i,l)},$$slots:{default:!0}}),kt()}var ro=w('<span class="font_family_mono">contextmenu</span> event',1),io=w(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, fewer edge cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),lo=w(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),co=w("<!> <!>",1);function uo(s){var t=co(),n=E(t);Nt(n,{children:(_,i)=>{var u=io(),l=E(u);Rt(l,{text:"iOS compatibility"});var m=r(l,6),f=r(v(m),2),M=r(v(f));ee(M,{path:"Web/API/Element/contextmenu_event",children:(p,g)=>{var x=ro();D(),o(p,x)},$$slots:{default:!0}}),d(f),D(4),d(m);var A=r(m,6);Ve(A,{}),o(_,u)},$$slots:{default:!0}});var c=r(n,2);Nt(c,{children:(_,i)=>{var u=lo(),l=E(u);Rt(l,{text:"Caveats"});var m=r(l,8),f=r(v(m));ee(f,{path:"Web/API/Element/contextmenu_event"}),D(3),d(m),o(_,u)},$$slots:{default:!0}}),o(s,t)}function _o(s){const t=s-1;return t*t*t+1}function vo(s){return--s*s*s*s*s+1}function Ne(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=I=>Math.sqrt(I)*120,easing:u=_o}=c,l=getComputedStyle(s),m=l.transform==="none"?"":l.transform,[f,M]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,M/=s.clientHeight;var A=mo(s),p=s.clientWidth/n.width/A,g=s.clientHeight/n.height/A,x=t.left+t.width*f,$=t.top+t.height*M,k=n.left+n.width*f,h=n.top+n.height*M,C=(x-k)*p,X=($-h)*g,J=t.width/n.width,P=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(C*C+X*X)):i,easing:u,css:(I,T)=>{var N=T*C,b=T*X,U=I+T*J,y=I+T*P;return`transform: ${m} translate(${N}px, ${b}px) scale(${U}, ${y});`}}}function mo(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var po=w('<menu class="pane unstyled svelte-4htxep"><!></menu>'),ho=w('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function ve(s,t){$t(t,!0);const n=se.get(),c=n.add_submenu(),{layout:_}=n,i=S(()=>c.selected);let u=L(void 0);const l=ce.get(),m=ce.set();let f=L(0),M=L(0);Ht(()=>{e(u)&&A(e(u),_,l)});const A=(T,N,b)=>{const{x:U,y,width:O,height:z}=T.getBoundingClientRect();m.width=O,m.height=z;const K=U-e(f),tt=y-e(M),Y=K+O+b.width-N.width;if(Y<=0)a(f,b.width,!0);else{const q=O-K;q<=0?a(f,-O):q>Y?a(f,b.width-Y):a(f,q-O)}a(M,Math.min(0,N.height-(tt+z)),!0)};var p=ho();let g;var x=v(p);let $;var k=v(x),h=v(k),C=v(h);_t(C,()=>t.icon??Et),d(h);var X=r(h,2),J=v(X);_t(J,()=>t.children),d(X),d(k),D(2),d(x);var P=r(x,2);{var I=T=>{var N=po();let b;var U=v(N);_t(U,()=>t.menu),d(N),Kt(N,y=>a(u,y),()=>e(u)),ct(y=>b=ne(N,"",b,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(M)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(T,N)};Z(P,T=>{e(i)&&T(I)})}d(p),ct((T,N)=>{g=ne(p,"",g,T),$=ft(x,1,"menu_item plain selectable svelte-4htxep",null,$,N),Ut(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),ht("mouseenter",x,T=>{At(T),setTimeout(()=>n.select(c))}),o(s,p),kt()}var fo=w("<!> <!>",1);function de(s,t){$t(t,!0);const n=ot(t,"name",3,"Cat"),c=ot(t,"icon",3,"😺");ve(s,{icon:u=>{D();var l=W();ct(()=>gt(l,c())),o(u,l)},menu:u=>{var l=fo(),m=E(l);vt(m,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:A=>{var p=nt(),g=E(p);{var x=k=>{var h=W("🏠");o(k,h)},$=k=>{var h=W("🌄");o(k,h)};Z(g,k=>{t.position==="adventure"?k(x):k($,!1)})}o(A,p)},children:(A,p)=>{var g=nt(),x=E(g);{var $=h=>{var C=W("go home");o(h,C)},k=h=>{var C=W("go adventure");o(h,C)};Z(x,h=>{t.position==="adventure"?h($):h(k,!1)})}o(A,g)},$$slots:{icon:!0,default:!0}});var f=r(m,2);vt(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:A=>{var p=nt(),g=E(p);{var x=k=>{var h=W("🌄");o(k,h)},$=k=>{var h=W("🏠");o(k,h)};Z(g,k=>{t.position==="adventure"?k(x):k($,!1)})}o(A,p)},children:(A,p)=>{var g=nt(),x=E(g);{var $=h=>{var C=W("do adventure");o(h,C)},k=h=>{var C=W("be home");o(h,C)};Z(x,h=>{t.position==="adventure"?h($):h(k,!1)})}o(A,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{D();var m=W();ct(()=>gt(m,n())),o(u,m)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var go=w("<!> <!> <!>",1);function xo(s,t){var n=go(),c=E(n);ke(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{hn(l,{get data(){return fn},size:"var(--icon_size_xs)"})},children:(l,m)=>{D();var f=W("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=r(c,2);ae(_,{});var i=r(_,2);vt(i,{get run(){return t.toggle_about_dialog},icon:l=>{D();var m=W("?");o(l,m)},children:(l,m)=>{D();var f=W("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Ke=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var bo=w("<!> <!>",1),yo=w("<!> <!>",1),wo=w("<!> <!> <!>",1);function $o(s,t){$t(t,!0);const n=S(()=>Ke(t.adventure_cats));ve(s,{icon:i=>{D();var u=W("🏠");o(i,u)},menu:i=>{var u=wo(),l=E(u);{var m=p=>{var g=bo(),x=E(g);vt(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var C=W("🐈‍⬛");o(h,C)},children:(h,C)=>{D();var X=W("call");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);ae($,{}),o(p,g)};Z(l,p=>{e(n)&&p(m)})}var f=r(l,2);Yt(f,17,()=>t.home_cats,p=>p.name,(p,g)=>{de(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var M=r(f,2);{var A=p=>{var g=yo(),x=E(g);vt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{D();var C=W("🏠");o(h,C)},children:(h,C)=>{D();var X=W("be");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);vt($,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var C=W("🦋");o(h,C)},children:(h,C)=>{D();var X=W("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(M,p=>{e(n)||p(A)})}o(i,u)},children:(i,u)=>{D();var l=W("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var ko=w("<!> <!>",1),Co=w("<!> <!>",1),To=w("<!> <!> <!>",1);function Eo(s,t){$t(t,!0);const n=S(()=>Ke(t.home_cats));ve(s,{icon:i=>{D();var u=W("🌄");o(i,u)},menu:i=>{var u=To(),l=E(u);{var m=p=>{var g=ko(),x=E(g);vt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var C=W("🦋");o(h,C)},children:(h,C)=>{D();var X=W("call");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);ae($,{}),o(p,g)};Z(l,p=>{e(n)&&p(m)})}var f=r(l,2);Yt(f,17,()=>t.adventure_cats,p=>p.name,(p,g)=>{de(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var M=r(f,2);{var A=p=>{var g=Co(),x=E(g);vt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{D();var C=W("🌄");o(h,C)},children:(h,C)=>{D();var X=W("do");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);vt($,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var C=W("🐈‍⬛");o(h,C)},children:(h,C)=>{D();var X=W("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(M,p=>{e(n)||p(A)})}o(i,u)},children:(i,u)=>{D();var l=W("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var So=w('<span class="icon svelte-y90lnf"> </span>'),Po=w('<span class="name svelte-y90lnf"><!> </span>'),Ao=w("<span><!><!></span>");function Re(s,t){const n=ot(t,"name",3,"Cat"),c=ot(t,"icon",3,"😺"),_=ot(t,"show_name",3,!0),i=ot(t,"show_icon",3,!0);var u=Ao();let l;var m=v(u);{var f=p=>{var g=So(),x=v(g,!0);d(g),ct(()=>gt(x,c())),o(p,g)};Z(m,p=>{i()&&p(f)})}var M=r(m);{var A=p=>{var g=Po(),x=v(g);_t(x,()=>t.children??Et);var $=r(x,1,!0);d(g),ct(()=>gt($,n())),o(p,g)};Z(M,p=>{_()&&p(A)})}d(u),ct(p=>l=ft(u,1,"cat svelte-y90lnf",null,l,p),[()=>({"has-icon":i()})]),o(s,u)}const Io=`<script lang="ts">
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
`;var Oo=w("<!> <!>",1),zo=w('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),No=w('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Ro=w('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Do=w('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Fo=w('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Lo=w("<!> <!>",1),Mo=w('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Ho=w("<!> <!>",1);function Uo(s,t){$t(t,!0);const n=Dt.get(),c=S(()=>n.component),_="Alyssa",i="Ben",u="home";let l=L(u),m=L(u);const f=S(()=>e(l)===e(m)?"😺":"😾"),M=S(()=>e(l)===e(m)?"😸":"😿"),A=S(()=>({name:_,icon:e(f),position:e(l)})),p=S(()=>({name:i,icon:e(M),position:e(m)}));let g=L(!1);const x=(z,K)=>{const tt=[],Y=[];for(const q of z){const at=q.position==="home"?tt:Y;K?at.unshift(q):at.push(q)}return{home_cats:tt,adventure_cats:Y}},$=S(()=>x([e(A),e(p)],e(g))),k=S(()=>e($).home_cats),h=S(()=>e($).adventure_cats),C=S(()=>e(l)!==u||e(m)!==u),X=()=>{a(l,u),a(m,u)};let J=L(!1);const P=()=>{a(J,!e(J))},I=z=>{switch(z.type){case"call_cats_adventure":{a(l,"adventure"),a(m,"adventure");break}case"call_cats_home":{a(l,"home"),a(m,"home");break}case"cat_go_adventure":{z.name===_?a(l,"adventure"):z.name===i&&a(m,"adventure");break}case"cat_go_home":{z.name===_?a(l,"home"):z.name===i&&a(m,"home");break}case"cat_be_or_do":{a(g,!e(g));break}}},[T,N]=mn({fallback:(z,K)=>{const tt=window.getComputedStyle(z),Y=tt.transform==="none"?"":tt.transform;return{duration:1500,easing:vo,css:q=>`
					transform: ${Y} scale(${q});
					opacity: ${q}
				`}}});var b=Ho(),U=E(b);Wt(U,()=>e(c),(z,K)=>{K(z,{scoped:!0,children:(tt,Y)=>{Nt(tt,{children:(q,at)=>{var ut=Lo(),it=E(ut);Rt(it,{text:"Full example"});var mt=r(it,2);Ot(mt,{entries:xt=>{var F=Oo(),j=E(F);{var G=V=>{Ce(V,{run:X,content:"Reset",icon:"↻"})};Z(j,V=>{e(C)&&V(G)})}var B=r(j,2);xo(B,{toggle_about_dialog:P}),o(xt,F)},children:(xt,F)=>{var j=Fo(),G=E(j),B=v(G),V=v(B);Ot(V,{entries:rt=>{$o(rt,{act:I,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(rt,R)=>{var H=No(),et=r(v(H),2);Yt(et,29,()=>e(k),({name:Q,icon:st,position:lt})=>Q,(Q,st)=>{let lt=()=>e(st).name,St=()=>e(st).icon,bt=()=>e(st).position;var yt=zo(),wt=v(yt);Ot(wt,{entries:Tt=>{de(Tt,{act:I,get name(){return lt()},get icon(){return St()},get position(){return bt()}})},children:(Tt,Gt)=>{Re(Tt,{get name(){return lt()},get icon(){return St()}})},$$slots:{entries:!0,default:!0}}),d(yt),te(1,yt,()=>N,()=>({key:lt()})),te(2,yt,()=>T,()=>({key:lt()})),Oe(yt,()=>Ne,null),o(Q,yt)}),d(et),d(H),o(rt,H)},$$slots:{entries:!0,default:!0}});var pt=r(V,2);Ot(pt,{entries:rt=>{Eo(rt,{act:I,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(rt,R)=>{var H=Do(),et=r(v(H),2);Yt(et,29,()=>e(h),({name:Q,icon:st,position:lt})=>Q,(Q,st)=>{let lt=()=>e(st).name,St=()=>e(st).icon,bt=()=>e(st).position;var yt=Ro(),wt=v(yt);Ot(wt,{entries:Tt=>{de(Tt,{act:I,get name(){return lt()},get icon(){return St()},get position(){return bt()}})},children:(Tt,Gt)=>{Re(Tt,{get name(){return lt()},get icon(){return St()}})},$$slots:{entries:!0,default:!0}}),d(yt),te(1,yt,()=>N,()=>({key:lt()})),te(2,yt,()=>T,()=>({key:lt()})),Oe(yt,()=>Ne,null),o(Q,yt)}),d(et),d(H),o(rt,H)},$$slots:{entries:!0,default:!0}}),d(B),d(G);var dt=r(G,2),Ft=v(dt);Le(Ft,{summary:rt=>{D();var R=W("View example source");o(rt,R)},children:(rt,R)=>{qt(rt,{get content(){return Io}})},$$slots:{summary:!0,default:!0}}),d(dt),o(xt,j)},$$slots:{entries:!0,default:!0}}),o(q,ut)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=r(U,2);{var O=z=>{_n(z,{onclose:()=>a(J,!1),children:(K,tt)=>{var Y=Mo(),q=v(Y),at=r(v(q),8),ut=r(v(at),2);gn(ut,{});var it=r(ut,4);xn(it,{}),d(at),d(q),d(Y),o(K,Y)},$$slots:{default:!0}})};Z(y,z=>{e(J)&&z(O)})}o(s,b),kt()}var qo=w("<!> <!> <!>",1),Wo=w(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Bo=w("<!> <!>",1);function Xo(s,t){$t(t,!0);const n=Dt.get(),c=S(()=>n.component),_=S(()=>n.name);let i=L(!1),u=L(!1),l=L(!1);var m=nt(),f=E(m);Wt(f,()=>e(c),(M,A)=>{A(M,{scoped:!0,children:(p,g)=>{Nt(p,{children:(x,$)=>{var k=Bo(),h=E(k);Rt(h,{text:"Basic usage"});var C=r(h,2);Ot(C,{entries:J=>{var P=qo(),I=E(P);vt(I,{run:()=>void a(i,!e(i)),children:(b,U)=>{D();var y=W("Hello world");o(b,y)},$$slots:{default:!0}});var T=r(I,2);vt(T,{run:()=>void a(u,!e(u)),icon:U=>{D();var y=W("🌞");o(U,y)},children:(U,y)=>{D();var O=W("Hello with an optional icon snippet");o(U,O)},$$slots:{icon:!0,default:!0}});var N=r(T,2);vt(N,{run:()=>void a(l,!e(l)),icon:"🌚",children:(b,U)=>{D();var y=W("Hello with an optional icon string");o(b,y)},$$slots:{default:!0}}),o(J,P)},children:(J,P)=>{var I=Wo(),T=r(v(I),2);{let it=S(()=>`<${e(_)} scoped>
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
...markup without contextmenu behavior...`);qt(T,{get content(){return e(it)}})}var N=r(T,2),b=v(N);let U;var y=v(b);d(b),d(N);var O=r(N,2),z=v(O);let K;var tt=v(z);d(z),d(O);var Y=r(O,2),q=v(Y);let at;var ut=v(q);d(q),d(Y),D(2),d(I),ct((it,mt,Ct)=>{U=ft(b,1,"",null,U,it),gt(y,`greeted = ${e(i)??""}`),K=ft(z,1,"",null,K,mt),gt(tt,`greeted_icon_snippet = ${e(u)??""}`),at=ft(q,1,"",null,at,Ct),gt(ut,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(J,I)},$$slots:{entries:!0,default:!0}}),o(x,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,m),kt()}var Yo=w("<span> </span>");function Qt(s,t){const n=De(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=S(()=>t.size??c);var u=Yo();ye(u,m=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[cn]:m}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=v(u,!0);d(u),ct(()=>gt(l,t.glyph)),o(s,u)}var jo=w('<span class="color_f_5">option f</span>'),Vo=w('<span class="color_g_5">option g</span>'),Ko=w('<span class="color_j_5">option j</span>'),Go=w("<!> <!> <!> <!>",1),Zo=w('<li class="color_error">Error: <code> </code></li>'),Jo=w('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),Qo=w(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),ts=w("<!> <!>",1);function es(s,t){$t(t,!0);const n=Dt.get(),c=S(()=>n.component),_=S(()=>n.name),i=new oe;let u=L(void 0);const l=S(()=>e(u)?`color_${e(u)}_5`:void 0),m=S(()=>e(u)?`color_${e(u)}`:void 0);var f=nt(),M=E(f);Wt(M,()=>e(c),(A,p)=>{p(A,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Nt(g,{children:($,k)=>{var h=ts(),C=E(h);Rt(C,{text:"Custom instance"});var X=r(C,2);Ot(X,{entries:P=>{ve(P,{icon:N=>{D();var b=W("🎨");o(N,b)},menu:N=>{var b=Go(),U=E(b);vt(U,{run:()=>(a(u,"f"),{ok:!0,close:!1}),children:(K,tt)=>{var Y=jo();o(K,Y)},$$slots:{default:!0}});var y=r(U,2);vt(y,{run:()=>(a(u,"g"),{ok:!0,close:!1}),children:(K,tt)=>{var Y=Vo();o(K,Y)},$$slots:{default:!0}});var O=r(y,2);vt(O,{run:()=>(a(u,"j"),{ok:!0,close:!1}),children:(K,tt)=>{var Y=Ko();o(K,Y)},$$slots:{default:!0}});var z=r(O,2);vt(z,{run:()=>(i.close(),{ok:!0}),children:(K,tt)=>{D();var Y=W("close contextmenu");o(K,Y)},$$slots:{default:!0}}),o(N,b)},children:(N,b)=>{D();var U=W("select color");o(N,U)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(P,I)=>{var T=Qo(),N=v(T),b=r(v(N)),U=v(b,!0);d(b),D(5),d(N);var y=r(N,2);qt(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var O=r(y,2);{let B=S(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);qt(O,{get content(){return e(B)}})}var z=r(O,2),K=r(v(z));K.textContent="{ok: true, close: false}",D(),d(z);var tt=r(z,2),Y=r(v(tt),2),q=v(Y),at=r(v(q),2),ut=v(at,!0);d(at),d(q);var it=r(q,2),mt=r(v(it),2),Ct=v(mt);d(mt),d(it);var xt=r(it,2);{var F=B=>{var V=Zo(),pt=r(v(V)),dt=v(pt,!0);d(pt),d(V),ct(()=>gt(dt,i.error)),o(B,V)};Z(xt,B=>{i.error&&B(F)})}d(Y),d(tt);var j=r(tt,2);{var G=B=>{var V=Jo(),pt=v(V),dt=v(pt),Ft=v(dt);Qt(Ft,{glyph:"↑"}),d(dt);var It=r(dt,2),rt=v(It),R=v(rt);Qt(R,{glyph:"←"}),d(rt);var H=r(rt,2),et=v(H);Qt(et,{glyph:"↵"}),d(H);var Q=r(H,2),st=v(Q);Qt(st,{glyph:"→"}),d(Q),d(It);var lt=r(It,2),St=v(lt);Qt(St,{glyph:"↓"}),d(lt),d(pt),d(V),ct(()=>{ft(dt,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(m)??""}`),dt.disabled=!i.can_select_previous,ft(rt,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(m)??""}`),rt.disabled=!i.can_collapse,ft(H,1,`border_radius_0 ${e(m)??""}`),H.disabled=!i.can_activate,ft(Q,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(m)??""}`),Q.disabled=!i.can_expand,ft(lt,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(m)??""}`),lt.disabled=!i.can_select_next}),ht("mousedown",dt,bt=>{At(bt),i.select_previous()},!0),ht("mousedown",rt,bt=>{At(bt),i.collapse_selected()},!0),ht("mousedown",H,async bt=>{At(bt),await i.activate_selected()},!0),ht("mousedown",Q,bt=>{At(bt),i.expand_selected()},!0),ht("mousedown",lt,bt=>{At(bt),i.select_next()},!0),te(3,V,()=>pn),o(B,V)};Z(j,B=>{i.opened&&B(G)})}d(T),ct(()=>{gt(U,e(_)),ft(tt,1,`mb_md ${e(l)??""}`),gt(ut,i.opened),gt(Ct,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(P,T)},$$slots:{entries:!0,default:!0}}),o($,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),kt()}const ns=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var os=w(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),ss=w("<div><!></div> <!>",1);function as(s,t){$t(t,!0);const n=Dt.get(),c=S(()=>n.component),_=new oe;let i=L(!1),u=L(void 0),l=L("");const m="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,M=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,A=S(()=>e(l)===m||e(l)===f||e(l)===M);var p=nt(),g=E(p);Wt(g,()=>e(c),(x,$)=>{$(x,{get contextmenu(){return _},scoped:!0,children:(k,h)=>{Nt(k,{children:(C,X)=>{var J=ss(),P=E(J);let I;var T=v(P);Rt(T,{text:"Select text"}),d(P);var N=r(P,2);Ot(N,{entries:U=>{vt(U,{run:()=>void a(i,!e(i)),children:(y,O)=>{D();var z=W("Toggle something");o(y,z)},$$slots:{default:!0}})},children:(U,y)=>{var O=os();let z;var K=v(O),tt=r(v(K),2),Y=r(v(tt));Y.__click=[ns,u];let q;D(),d(tt),d(K),Kt(K,V=>a(u,V),()=>e(u));var at=r(K,2),ut=v(at);Xt(ut),d(at);var it=r(at,2);let mt;var Ct=r(it,2),xt=v(Ct);nn(xt),d(Ct);var F=r(Ct,2),j=v(F);ee(j,{path:"Web/HTML/Global_attributes/contenteditable"}),D(),d(F);var G=r(F,4),B=r(G,4);D(2),d(O),ct((V,pt,dt)=>{z=ft(O,1,"panel p_md",null,z,V),q=ft(Y,1,"",null,q,pt),mt=ft(it,1,"",null,mt,dt)},[()=>({color_g_5:e(A)}),()=>({color_a:e(i)}),()=>({color_g_5:e(A)})]),Ie(ut,()=>e(l),V=>a(l,V)),Ie(xt,()=>e(l),V=>a(l,V)),Pe("innerText",G,()=>e(l),V=>a(l,V)),Pe("innerText",B,()=>e(l),V=>a(l,V)),o(U,O)},$$slots:{entries:!0,default:!0}}),ct(b=>I=ft(P,1,"",null,I,b),[()=>({color_d_5:e(A)})]),o(C,J)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,p),kt()}jt(["click"]);const rs=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var is=w('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),ls=w('<li>custom "some custom entry" entry</li>'),cs=w('<li>"copy text" entry when text is selected</li>'),us=w("<li>link entry when clicking on a link</li>"),ds=w("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),_s=w(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),vs=w('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function ms(s,t){$t(t,!0);const n=p=>{var g=is(),x=v(g),$=r(v(x));$.__click=[rs,A];let k;D(),d(x),Kt(x,X=>a(A,X),()=>e(A));var h=r(x,2),C=r(v(h));D(),d(h),d(g),ct((X,J)=>{k=ft($,1,"",null,k,X),Ut(C,"href",J)},[()=>({color_h:e(M)}),()=>bn("/")]),o(p,g)},c=Dt.get(),_=S(()=>c.component),i=S(()=>c.name),u=new oe;let l=L(!1),m=L(!1),f=L(!0),M=L(!1),A=L(void 0);Nt(s,{children:(p,g)=>{var x=vs(),$=E(x);Rt($,{text:"Disable default behaviors"});var k=r($,4);{let q=S(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(m)?" text_entry={null}":""}>`);qt(k,{get content(){return e(q)}})}var h=r(k,2),C=v(h),X=v(C);Xt(X);var J=r(X,2),P=r(v(J));P.textContent="link_entry={null}",d(J),d(C);var I=r(C,2),T=v(I);Xt(T);var N=r(T,2),b=r(v(N));b.textContent="text_entry={null}",d(N),d(I),d(h);var U=r(h,2);{let q=S(()=>e(l)?null:void 0),at=S(()=>e(m)?null:void 0);Wt(U,()=>e(_),(ut,it)=>{it(ut,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(q)},get text_entry(){return e(at)},children:(mt,Ct)=>{var xt=nt(),F=E(xt);{var j=B=>{Ot(B,{entries:pt=>{vt(pt,{icon:">",run:()=>void a(M,!e(M)),children:(dt,Ft)=>{D();var It=W("some custom entry");o(dt,It)},$$slots:{default:!0}})},children:(pt,dt)=>{n(pt)},$$slots:{entries:!0,default:!0}})},G=B=>{n(B)};Z(F,B=>{e(f)?B(j):B(G,!1)})}o(mt,xt)},$$slots:{default:!0}})})}var y=r(U,4),O=v(y),z=v(O);Xt(z),D(),d(O),d(y);var K=r(y,2);{var tt=q=>{var at=ds(),ut=r(E(at),2),it=v(ut);{var mt=G=>{var B=ls();o(G,B)};Z(it,G=>{e(f)&&G(mt)})}var Ct=r(it,2);{var xt=G=>{var B=cs();o(G,B)};Z(Ct,G=>{e(m)||G(xt)})}var F=r(Ct,2);{var j=G=>{var B=us();o(G,B)};Z(F,G=>{e(l)||G(j)})}d(ut),o(q,at)},Y=q=>{var at=_s();o(q,at)};Z(K,q=>{e(f)||!e(l)||!e(m)?q(tt):q(Y,!1)})}ge(X,()=>e(l),q=>a(l,q)),ge(T,()=>e(m),q=>a(m,q)),ge(z,()=>e(f),q=>a(f,q)),o(p,x)},$$slots:{default:!0}}),kt()}jt(["click"]);var ps=w(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function hs(s,t){$t(t,!0);const n=Dt.get(),c=S(()=>n.component),_=S(()=>n.name);var i=nt(),u=E(i);Wt(u,()=>e(c),(l,m)=>{m(l,{scoped:!0,children:(f,M)=>{Nt(f,{children:(A,p)=>{var g=ps(),x=E(g);Rt(x,{text:"Default behaviors"});var $=r(x,2),k=v($);{let h=S(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);qt(k,{get content(){return e(h)}})}D(6),d($),o(A,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),kt()}var fs=w("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function Ws(s,t){$t(t,!0);const c=sn("Contextmenu");Dt.set(),on(s,{get tome(){return c},children:(_,i)=>{var u=fs(),l=E(u);ao(l,{});var m=r(l,2);Xo(m,{});var f=r(m,2);hs(f,{});var M=r(f,2);as(M,{});var A=r(M,2);ms(A,{});var p=r(A,2);es(p,{});var g=r(p,2);Uo(g,{});var x=r(g,2);uo(x),D(2),o(_,u)},$$slots:{default:!0}}),kt()}export{Ws as component};
