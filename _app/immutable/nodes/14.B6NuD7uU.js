import"../chunks/DsnmJJEf.js";import{C as en,z as nn,af as L,h as e,ae as a,aj as ie,u as E,e as tt,a as T,b as o,g as _t,p as $t,f as $,s as r,d as m,t as ct,b9 as pt,c as kt,r as d,b8 as jt,ac as B,ad as D,ab as St,F as Ht,ba as Nt,bB as ae,bE as on}from"../chunks/B7qs8f6Z.js";import{T as sn}from"../chunks/LxwPyP1K.js";import{g as an}from"../chunks/DGk0txWf.js";import{s as ft}from"../chunks/D2Z-uHvG.js";import{c as Bt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/DpqcPF0n.js";import{M as ee}from"../chunks/DHzjxUCy.js";import{T as Rt,a as Dt}from"../chunks/hgMeo7ZA.js";import{e as rn}from"../chunks/36zOYlHh.js";import{a as ln}from"../chunks/B2EI8ygw.js";import{a as we,b as ht,s as Ut,C as cn,c as le,d as Ee,r as Xt,S as un}from"../chunks/C61V10DD.js";import{p as nt,r as Fe,s as Vt}from"../chunks/C2A3Zqzr.js";import{o as Pe}from"../chunks/BMgspcsU.js";import{a as dn,s as It,b as Me,c as _n,D as vn}from"../chunks/DPmjiu3g.js";import{c as ve,a as ge,e as Yt}from"../chunks/GCAAGpmM.js";import{i as Z}from"../chunks/DHMuHmk0.js";import{P as mn}from"../chunks/B7mkSFrP.js";import{D as Le,b as Ie}from"../chunks/8X_O05eD.js";import{b as Ae,a as Oe,c as xe}from"../chunks/7g2Ar_02.js";import{b as Kt}from"../chunks/2LOYOryH.js";import{t as te,c as pn,a as ze,s as hn}from"../chunks/DkIYfvB-.js";import{S as fn,g as gn}from"../chunks/B-XuT0zp.js";import{C as xn,T as bn}from"../chunks/twD8klRS.js";import{r as yn}from"../chunks/DNCdNsWV.js";class $e{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){$e.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var wn=new $e({box:"border-box"});function ce(s,t,n){var c=wn.observe(s,()=>n(s[t]));en(()=>(nn(()=>n(s[t])),c))}const $n=Object.freeze({});class He{#t=L(0);get width(){return e(this.#t)}set width(t){a(this.#t,t,!0)}#e=L(0);get height(){return e(this.#e)}set height(t){a(this.#e,t,!0)}}class kn{is_menu=!1;menu;run;disabled;#t=L(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=L(!1);get pending(){return e(this.#e)}set pending(t){a(this.#e,t,!0)}#n=L(null);get error_message(){return e(this.#n)}set error_message(t){a(this.#n,t,!0)}#o=L(null);get promise(){return e(this.#o)}set promise(t){a(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class Cn{is_menu=!0;menu;depth;#t=L(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=L(ie([]));get items(){return e(this.#e)}set items(t){a(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class Tn{is_menu=!0;menu=null;depth=1;#t=L(ie([]));get items(){return e(this.#t)}set items(t){a(this.#t,t,!0)}}class ne{layout;initial_layout;#t=L(!1);get opened(){return e(this.#t)}set opened(t){a(this.#t,t,!0)}#e=L(0);get x(){return e(this.#e)}set x(t){a(this.#e,t,!0)}#n=L(0);get y(){return e(this.#n)}set y(t){a(this.#n,t,!0)}#o=L(ie([]));get params(){return e(this.#o)}set params(t){a(this.#o,t,!0)}#s=L();get error(){return e(this.#s)}set error(t){a(this.#s,t,!0)}root_menu=new Tn;#a=L(ie([]));get selections(){return e(this.#a)}set selections(t){a(this.#a,t,!0)}#r=E(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){a(this.#r,t)}#i=E(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){a(this.#i,t)}#l=E(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){a(this.#l,t)}#c=E(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){a(this.#c,t)}#u=E(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){a(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new He}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(dn(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=be.maybe_get()??this.root_menu,_=new kn(c,t,n);return c.items.push(_),Pe(()=>{c.items.length=0}),_}add_submenu(){const t=be.maybe_get()??this.root_menu,n=new Cn(t,t.depth+1);return t.items.push(n),be.set(n),Pe(()=>{t.items.length=0}),n}}const ke="contextmenu",Sn=`a,[data-${ke}]`,re=new Map;let En=0;const Pn=(s,t)=>{if(t==null)return;const n=En+++"";return s.dataset[ke]=n,re.set(n,t),{update:c=>{re.set(n,c)},destroy:()=>{re.delete(n)}}},In=17,ye=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:v=!0}=_??$n,f=An(s)?.filter(F=>typeof F=="function"||(F.snippet!=="link"||i)&&(F.snippet!=="text"||u)&&(F.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate(In),!0):!1},An=s=>{let t=null,n=s,c,_;for(;n=n?.closest(Sn);){if(c=n.dataset[ke]){if(t??=[],_=re.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},oe=ve(),be=ve(),ue=ve(()=>new He);function Ot(s,t){const n=nt(t,"tag",3,"span");var c=tt(),_=T(c);rn(_,n,!1,(i,u)=>{ln(i,(f,F)=>Pn?.(f,F),()=>t.entries),we(i,()=>({class:"display_contents",...t.attrs}));var l=tt(),v=T(l);_t(v,()=>t.children),o(u,l)}),o(s,c)}var On=$('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function vt(s,t){$t(t,!0);const n=nt(t,"disabled",3,!1),c=oe.get(),_=c.add_entry(()=>t.run,()=>n()),i=E(()=>_.selected),u=E(()=>_.pending),l=E(()=>_.error_message),v=E(()=>_.disabled());var f=On();let F;f.__click=function(...P){(e(v)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,P)};var I=m(f),p=m(I),g=m(p);{var x=P=>{var O=B();ct(()=>ft(O,t.icon)),o(P,O)},w=P=>{var O=tt(),S=T(O);{var R=b=>{var U=tt(),y=T(U);_t(y,()=>t.icon),o(b,U)};Z(S,b=>{t.icon&&b(R)},!0)}o(P,O)};Z(g,P=>{typeof t.icon=="string"?P(x):P(w,!1)})}d(p);var k=r(p,2),h=m(k);_t(h,()=>t.children),d(k);var C=r(k,2);{var X=P=>{mn(P,{})},J=P=>{var O=tt(),S=T(O);{var R=b=>{var U=B("⚠️");o(b,U)};Z(S,b=>{e(l)&&b(R)},!0)}o(P,O)};Z(C,P=>{e(u)?P(X):P(J,!1)})}d(I),d(f),ct(P=>{F=ht(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,F,P),Ut(f,"aria-disabled",e(v)),Ut(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(v)})]),pt("mouseenter",f,function(...P){(e(v)?void 0:O=>{It(O),c.select(_)})?.apply(this,P)}),o(s,f),kt()}jt(["click"]);var zn=s=>{s.stopPropagation()},Nn=$('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function Ce(s,t){$t(t,!0);const n="🔗",c=nt(t,"icon",3,n),_=nt(t,"disabled",3,!1),i=oe.get();let u=L(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),v=E(()=>l.selected),f=E(()=>l.disabled()),F=(y,z=location.host)=>{const N=ge(ge(y,"https://"),"http://");return N.startsWith(z+"/")?ge(N,z):N},I=E(()=>F(t.href)),p=E(()=>!(e(I)[0]==="."||e(I)[0]==="/"&&e(I)[1]!=="/")),g=E(()=>e(p)?"noreferrer":void 0);var x=Nn(),w=m(x);let k;w.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},w.__contextmenu=[zn];var h=m(w),C=m(h),X=m(C);{var J=y=>{var z=B();ct(()=>ft(z,c())),o(y,z)},P=y=>{var z=tt(),N=T(z);_t(N,c,()=>n),o(y,z)};Z(X,y=>{typeof c()=="string"?y(J):y(P,!1)})}d(C);var O=r(C,2),S=m(O),R=m(S);{var b=y=>{var z=tt(),N=T(z);_t(N,()=>t.children),o(y,z)},U=y=>{var z=B();ct(()=>ft(z,e(I))),o(y,z)};Z(R,y=>{t.children?y(b):y(U,!1)})}d(S),d(O),d(h),d(w),Kt(w,y=>a(u,y),()=>e(u)),d(x),ct(y=>{k=ht(w,1,"menu_item plain svelte-1fkm0gl",null,k,y),Ut(w,"aria-disabled",e(f)),Ut(w,"href",t.href),Ut(w,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),pt("mouseenter",w,function(...y){(e(f)?void 0:z=>{It(z),i.select(l)})?.apply(this,y)}),o(s,x),kt()}jt(["click","contextmenu"]);function Te(s,t){vt(s,{get run(){return t.run},icon:c=>{D();var _=B();ct(()=>ft(_,t.icon)),o(c,_)},children:(c,_)=>{D();var i=B();ct(()=>ft(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var Rn=$("<li></li>");function se(s,t){const n=Fe(t,["$$slots","$$events","$$legacy"]);var c=Rn();we(c,()=>({role:"separator","aria-orientation":"vertical",...n,[cn]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const Ue=-2,qe=-2,Be=910,We=7,Dn=633,Fn=21,de=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!Me(s)&&!_n(s),Xe=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Ye=s=>t=>{const n=s.get(t.key);!n||Me(t.target)||(It(t),n())},je=(s,t,n)=>s+Math.min(0,n-(s+t)),Ve=(s,t,n)=>s+Math.min(0,n-(s+t)),Mn=(s,t=St)=>{Ce(s,Vt(t))},Ln=(s,t=St)=>{Te(s,Vt(t))},Hn=(s,t=St)=>{se(s,Vt(t))};var Un=$('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),qn=$('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),Bn=$('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Wn=$("<!> <!>  <!>",1);function Ne(s,t){$t(t,!0);const n=nt(t,"contextmenu",19,()=>new ne),c=nt(t,"open_offset_x",3,Ue),_=nt(t,"open_offset_y",3,qe),i=nt(t,"bypass_with_tap_then_longpress",3,!0),u=nt(t,"bypass_window",3,Be),l=nt(t,"bypass_move_tolerance",3,We),v=nt(t,"scoped",3,!1),f=nt(t,"link_entry",3,Mn),F=nt(t,"text_entry",3,Ln),I=nt(t,"separator_entry",3,Hn);oe.set(n());let p=L(void 0);const g=E(()=>n().layout),x=E(()=>n().initial_layout),w=E(()=>e(g)===e(x));let k=L(void 0),h=L(void 0);Ht(()=>{!e(w)&&e(k)!==void 0&&(e(g).width=e(k))}),Ht(()=>{!e(w)&&e(h)!==void 0&&(e(g).height=e(h))});const C=ue.set();Ht(()=>{if(e(p)){const M=e(p).getBoundingClientRect();C.width=M.width,C.height=M.height}});const X=E(()=>je(n().x,C.width,e(g).width)),J=E(()=>Ve(n().y,C.height,e(g).height));let P=L(void 0),O=L(void 0),S=L(void 0),R=L(void 0),b=L(void 0);const U=M=>{if(e(R)){a(R,!1),a(S,null),a(P,null),a(O,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{target:j}=M;de(j,M.shiftKey)&&(e(p)?.contains(j)||ye(j,M.clientX+c(),M.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:F()!==null,separator_enabled:I()!==null})&&It(M))},y=M=>{if(!i())return;const{touches:j,target:G}=M;if(n().opened||j.length!==1||!de(G,M.shiftKey)){a(S,null),a(P,null),a(O,null),a(R,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{clientX:W,clientY:V}=j[0];if(e(S)!=null&&performance.now()-e(S)<u()&&Math.hypot(W-e(P),V-e(O))<l()){a(R,!0),a(S,null),a(P,null),a(O,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}a(S,performance.now(),!0),a(P,W,!0),a(O,V,!0),e(b)!=null&&clearTimeout(e(b)),a(b,setTimeout(()=>{a(S,null),a(P,null),a(O,null),a(b,null)},u()),!0)},z=()=>{a(S,null),a(P,null),a(O,null),a(R,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null))},N=M=>{e(p)&&!e(p).contains(M.target)&&n().close()},K=Xe(n()),Q=Ye(K);var Y=Wn();pt("contextmenu",Nt,function(...M){(v()?void 0:U)?.apply(this,M)}),pt("mousedown",Nt,function(...M){(n().opened?N:void 0)?.apply(this,M)}),pt("keydown",Nt,function(...M){(n().opened?Q:void 0)?.apply(this,M)}),pt("touchstart",Nt,function(...M){(v()||!i()?void 0:y)?.apply(this,M)},!0,!0),pt("touchcancel",Nt,function(...M){(v()||!i()?void 0:z)?.apply(this,M)},!0);var q=T(Y);{var at=M=>{var j=Un();j.__contextmenu=U;var G=m(j);_t(G,()=>t.children),d(j),pt("touchstart",j,function(...W){(i()?y:void 0)?.apply(this,W)},!0,!0),pt("touchcancel",j,function(...W){(i()?z:void 0)?.apply(this,W)},!0),o(M,j)},ut=M=>{var j=tt(),G=T(j);_t(G,()=>t.children),o(M,j)};Z(q,M=>{v()?M(at):M(ut,!1)})}var lt=r(q,2);{var gt=M=>{var j=qn();ce(j,"clientHeight",G=>a(h,G)),ce(j,"clientWidth",G=>a(k,G)),o(M,j)};Z(lt,M=>{e(w)||M(gt)})}var Ct=r(lt,2);{var xt=M=>{var j=Bn();let G;Yt(j,20,()=>n().params,W=>W,(W,V)=>{var mt=tt(),dt=T(mt);{var Mt=rt=>{var A=tt(),H=T(A);_t(H,()=>V),o(rt,A)},At=rt=>{var A=tt(),H=T(A);{var it=et=>{var st=tt(),Et=T(st);_t(Et,()=>f()??St,()=>V.props),o(et,st)},ot=et=>{var st=tt(),Et=T(st);{var bt=wt=>{var Pt=tt(),Tt=T(Pt);_t(Tt,()=>F()??St,()=>V.props),o(wt,Pt)},yt=wt=>{var Pt=tt(),Tt=T(Pt);{var Gt=Zt=>{var zt=tt(),Lt=T(zt);_t(Lt,()=>I()??St,()=>V.props),o(Zt,zt)};Z(Tt,Zt=>{V.snippet==="separator"&&Zt(Gt)},!0)}o(wt,Pt)};Z(Et,wt=>{V.snippet==="text"?wt(bt):wt(yt,!1)},!0)}o(et,st)};Z(H,et=>{V.snippet==="link"?et(it):et(ot,!1)},!0)}o(rt,A)};Z(dt,rt=>{typeof V=="function"?rt(Mt):rt(At,!1)})}o(W,mt)}),d(j),Kt(j,W=>a(p,W),()=>e(p)),ct(W=>G=le(j,"",G,W),[()=>({transform:`translate3d(${e(X)??""}px, ${e(J)??""}px, 0)`})]),o(M,j)};Z(Ct,M=>{n().opened&&M(xt)})}o(s,Y),kt()}jt(["contextmenu"]);const Xn=(s,t=St)=>{Ce(s,Vt(t))},Yn=(s,t=St)=>{Te(s,Vt(t))},jn=(s,t=St)=>{se(s,Vt(t))};var Vn=$('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),Kn=$('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Gn=$('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Zn=$("<!> <!> <!>",1);function Jn(s,t){$t(t,!0);const n=nt(t,"contextmenu",19,()=>new ne),c=nt(t,"longpress_move_tolerance",3,Fn),_=nt(t,"longpress_duration",3,Dn),i=nt(t,"bypass_with_tap_then_longpress",3,!0),u=nt(t,"bypass_window",3,Be),l=nt(t,"bypass_move_tolerance",3,We),v=nt(t,"open_offset_x",3,Ue),f=nt(t,"open_offset_y",3,qe),F=nt(t,"scoped",3,!1),I=nt(t,"link_entry",3,Xn),p=nt(t,"text_entry",3,Yn),g=nt(t,"separator_entry",3,jn);oe.set(n());let x=L(void 0);const w=E(()=>n().layout),k=E(()=>n().initial_layout),h=E(()=>e(w)===e(k));let C=L(void 0),X=L(void 0);Ht(()=>{!e(h)&&e(C)!==void 0&&(e(w).width=e(C))}),Ht(()=>{!e(h)&&e(X)!==void 0&&(e(w).height=e(X))});const J=ue.set();Ht(()=>{if(e(x)){const A=e(x).getBoundingClientRect();J.width=A.width,J.height=A.height}});const P=E(()=>je(n().x,J.width,e(w).width)),O=E(()=>Ve(n().y,J.height,e(w).height));let S=L(void 0),R=L(void 0),b=L(void 0),U=L(void 0),y=L(void 0),z=L(void 0),N=L(void 0);const K=()=>{a(y,!1),e(U)!=null&&(clearTimeout(e(U)),a(U,null))},Q=()=>{a(b,null),a(S,null),a(R,null),a(z,!1),e(N)!=null&&(clearTimeout(e(N)),a(N,null))},Y=()=>{K(),Q()},q=A=>{if(e(z)){Q();return}const{target:H}=A;if(e(y)){if(e(x)?.contains(H))return;Y(),It(A);return}de(H,A.shiftKey)&&(e(x)?.contains(H)||ye(H,A.clientX+v(),A.clientY+f(),n(),{link_enabled:I()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})&&(It(A),Y()))},at=A=>{a(y,!1);const{touches:H,target:it}=A;if(n().opened||H.length!==1||!de(it,A.shiftKey)){Y();return}const{clientX:ot,clientY:et}=H[0];if(i()){if(e(b)!=null&&performance.now()-e(b)<u()&&Math.hypot(ot-e(S),et-e(R))<l()){a(z,!0),a(b,null),a(S,null),a(R,null),e(N)!=null&&(clearTimeout(e(N)),a(N,null));return}a(b,performance.now(),!0),e(N)!=null&&clearTimeout(e(N)),a(N,setTimeout(()=>{Q()},u()),!0)}a(S,ot,!0),a(R,et,!0),e(U)!=null&&K(),a(U,setTimeout(()=>{a(y,!0),ye(it,e(S)+v(),e(R)+f(),n(),{link_enabled:I()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})},_()),!0)},ut=A=>{if(e(U)==null||n().opened)return;const{touches:H}=A;if(H.length!==1)return;const{clientX:it,clientY:ot}=H[0];if(Math.hypot(it-e(S),ot-e(R))>c()){K();return}A.preventDefault()},lt=A=>{e(U)!=null&&(e(y)&&It(A),K()),e(z)&&Q()},gt=()=>{Y()},Ct=A=>{e(x)&&!e(x).contains(A.target)&&n().close()},xt=Xe(n()),M=Ye(xt),j=A=>{const H={passive:!1,capture:!0},it=ae(A,"touchstart",at,H),ot=ae(A,"touchmove",ut,H),et=ae(A,"touchend",lt,H),st=ae(A,"touchcancel",gt,H);return()=>{it(),ot(),et(),st()}};var G=Zn();pt("contextmenu",Nt,function(...A){(F()?void 0:q)?.apply(this,A)}),pt("mousedown",Nt,function(...A){(n().opened?Ct:void 0)?.apply(this,A)}),pt("keydown",Nt,function(...A){(n().opened?M:void 0)?.apply(this,A)}),Ee(Nt,()=>F()?void 0:j);var W=T(G);{var V=A=>{var H=Vn();H.__contextmenu=q;var it=m(H);_t(it,()=>t.children),d(H),Ee(H,()=>j),o(A,H)},mt=A=>{var H=tt(),it=T(H);_t(it,()=>t.children),o(A,H)};Z(W,A=>{F()?A(V):A(mt,!1)})}var dt=r(W,2);{var Mt=A=>{var H=Kn();ce(H,"clientHeight",it=>a(X,it)),ce(H,"clientWidth",it=>a(C,it)),o(A,H)};Z(dt,A=>{e(h)||A(Mt)})}var At=r(dt,2);{var rt=A=>{var H=Gn();let it;Yt(H,20,()=>n().params,ot=>ot,(ot,et)=>{var st=tt(),Et=T(st);{var bt=wt=>{var Pt=tt(),Tt=T(Pt);_t(Tt,()=>et),o(wt,Pt)},yt=wt=>{var Pt=tt(),Tt=T(Pt);{var Gt=zt=>{var Lt=tt(),pe=T(Lt);_t(pe,()=>I()??St,()=>et.props),o(zt,Lt)},Zt=zt=>{var Lt=tt(),pe=T(Lt);{var Ze=Wt=>{var Jt=tt(),he=T(Jt);_t(he,()=>p()??St,()=>et.props),o(Wt,Jt)},Je=Wt=>{var Jt=tt(),he=T(Jt);{var Qe=fe=>{var Se=tt(),tn=T(Se);_t(tn,()=>g()??St,()=>et.props),o(fe,Se)};Z(he,fe=>{et.snippet==="separator"&&fe(Qe)},!0)}o(Wt,Jt)};Z(pe,Wt=>{et.snippet==="text"?Wt(Ze):Wt(Je,!1)},!0)}o(zt,Lt)};Z(Tt,zt=>{et.snippet==="link"?zt(Gt):zt(Zt,!1)},!0)}o(wt,Pt)};Z(Et,wt=>{typeof et=="function"?wt(bt):wt(yt,!1)})}o(ot,st)}),d(H),Kt(H,ot=>a(x,ot),()=>e(x)),ct(ot=>it=le(H,"",it,ot),[()=>({transform:`translate3d(${e(P)??""}px, ${e(O)??""}px, 0)`})]),o(A,H)};Z(At,A=>{n().opened&&A(rt)})}o(s,G),kt()}jt(["contextmenu"]);class Qn{#t=L();get variant(){return e(this.#t)}set variant(t){a(this.#t,t,!0)}#e=E(()=>this.variant==="standard"?Ne:Jn);get component(){return e(this.#e)}set component(t){a(this.#e,t)}#n=E(()=>this.component===Ne?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){a(this.#n,t)}constructor(t="standard"){this.variant=t}}const Ft=ve(()=>new Qn("standard"));var to=$('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Ke(s,t){$t(t,!0);const n=[],c=Ft.get();var _=to(),i=r(m(_),2),u=m(i);Xt(u),u.value=u.__value="standard",D(2),d(i);var l=r(i,2),v=m(l);Xt(v),v.value=v.__value="compat",D(2),d(l),d(_),Ae(n,[],u,()=>c.variant,f=>c.variant=f),Ae(n,[],v,()=>c.variant,f=>c.variant=f),o(s,_),kt()}var eo=$('<p class="panel p_md">alert B -- also inherits A</p>'),no=$('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),oo=$("<code>navigator.vibrate</code>"),so=$(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function ao(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name);Rt(s,{children:(i,u)=>{var l=so(),v=T(l);Dt(v,{text:"Introduction"});var f=r(v,2),F=r(m(f),5);ee(F,{path:"Web/API/Element/contextmenu_event"}),D(3),d(f);var I=r(f,4),p=r(m(I)),g=m(p,!0);d(p),D(5),d(I);var x=r(I,2);Bt(x,()=>e(c),(J,P)=>{P(J,{scoped:!0,children:(O,S)=>{Ot(O,{entries:b=>{vt(b,{run:()=>alert("alert A"),children:(U,y)=>{D();var z=B("alert A");o(U,z)},$$slots:{default:!0}})},children:(b,U)=>{var y=no(),z=r(m(y),2);Ot(z,{entries:K=>{vt(K,{run:()=>alert("alert B"),children:(Q,Y)=>{D();var q=B("alert B");o(Q,q)},$$slots:{default:!0}})},children:(K,Q)=>{var Y=eo();o(K,Y)},$$slots:{entries:!0,default:!0}}),d(y),o(b,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var w=r(x,2);Le(w,{summary:P=>{D();var O=B("view code");o(P,O)},children:(P,O)=>{{let S=E(()=>`<${e(_)}>
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
</${e(_)}>`);qt(P,{get content(){return e(S)}})}},$$slots:{summary:!0,default:!0}});var k=r(w,14),h=r(m(k),2),C=r(m(h));ee(C,{path:"Web/API/Navigator/vibrate",children:(J,P)=>{var O=oo();o(J,O)},$$slots:{default:!0}}),d(h),d(k);var X=r(k,2);Ke(X,{}),ct(()=>ft(g,e(_))),o(i,l)},$$slots:{default:!0}}),kt()}var ro=$('<span class="font_family_mono">contextmenu</span> event',1),io=$(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, fewer edge cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),lo=$(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),co=$("<!> <!>",1);function uo(s){var t=co(),n=T(t);Rt(n,{children:(_,i)=>{var u=io(),l=T(u);Dt(l,{text:"iOS compatibility"});var v=r(l,6),f=r(m(v),2),F=r(m(f));ee(F,{path:"Web/API/Element/contextmenu_event",children:(p,g)=>{var x=ro();D(),o(p,x)},$$slots:{default:!0}}),d(f),D(4),d(v);var I=r(v,6);Ke(I,{}),o(_,u)},$$slots:{default:!0}});var c=r(n,2);Rt(c,{children:(_,i)=>{var u=lo(),l=T(u);Dt(l,{text:"Caveats"});var v=r(l,8),f=r(m(v));ee(f,{path:"Web/API/Element/contextmenu_event"}),D(3),d(v),o(_,u)},$$slots:{default:!0}}),o(s,t)}function _o(s){const t=s-1;return t*t*t+1}function vo(s){return--s*s*s*s*s+1}function Re(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=O=>Math.sqrt(O)*120,easing:u=_o}=c,l=getComputedStyle(s),v=l.transform==="none"?"":l.transform,[f,F]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,F/=s.clientHeight;var I=mo(s),p=s.clientWidth/n.width/I,g=s.clientHeight/n.height/I,x=t.left+t.width*f,w=t.top+t.height*F,k=n.left+n.width*f,h=n.top+n.height*F,C=(x-k)*p,X=(w-h)*g,J=t.width/n.width,P=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(C*C+X*X)):i,easing:u,css:(O,S)=>{var R=S*C,b=S*X,U=O+S*J,y=O+S*P;return`transform: ${v} translate(${R}px, ${b}px) scale(${U}, ${y});`}}}function mo(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var po=$('<menu class="pane unstyled svelte-4htxep"><!></menu>'),ho=$('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function me(s,t){$t(t,!0);const n=oe.get(),c=n.add_submenu(),{layout:_}=n,i=E(()=>c.selected);let u=L(void 0);const l=ue.get(),v=ue.set();let f=L(0),F=L(0);Ht(()=>{e(u)&&I(e(u),_,l)});const I=(S,R,b)=>{const{x:U,y,width:z,height:N}=S.getBoundingClientRect();v.width=z,v.height=N;const K=U-e(f),Q=y-e(F),Y=K+z+b.width-R.width;if(Y<=0)a(f,b.width,!0);else{const q=z-K;q<=0?a(f,-z):q>Y?a(f,b.width-Y):a(f,q-z)}a(F,Math.min(0,R.height-(Q+N)),!0)};var p=ho();let g;var x=m(p);let w;var k=m(x),h=m(k),C=m(h);_t(C,()=>t.icon??St),d(h);var X=r(h,2),J=m(X);_t(J,()=>t.children),d(X),d(k),D(2),d(x);var P=r(x,2);{var O=S=>{var R=po();let b;var U=m(R);_t(U,()=>t.menu),d(R),Kt(R,y=>a(u,y),()=>e(u)),ct(y=>b=le(R,"",b,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(F)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(S,R)};Z(P,S=>{e(i)&&S(O)})}d(p),ct((S,R)=>{g=le(p,"",g,S),w=ht(x,1,"menu_item plain selectable svelte-4htxep",null,w,R),Ut(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),pt("mouseenter",x,S=>{It(S),setTimeout(()=>n.select(c))}),o(s,p),kt()}var fo=$("<!> <!>",1);function _e(s,t){$t(t,!0);const n=nt(t,"name",3,"Cat"),c=nt(t,"icon",3,"😺");me(s,{icon:u=>{D();var l=B();ct(()=>ft(l,c())),o(u,l)},menu:u=>{var l=fo(),v=T(l);vt(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:I=>{var p=tt(),g=T(p);{var x=k=>{var h=B("🏠");o(k,h)},w=k=>{var h=B("🌄");o(k,h)};Z(g,k=>{t.position==="adventure"?k(x):k(w,!1)})}o(I,p)},children:(I,p)=>{var g=tt(),x=T(g);{var w=h=>{var C=B("go home");o(h,C)},k=h=>{var C=B("go adventure");o(h,C)};Z(x,h=>{t.position==="adventure"?h(w):h(k,!1)})}o(I,g)},$$slots:{icon:!0,default:!0}});var f=r(v,2);vt(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:I=>{var p=tt(),g=T(p);{var x=k=>{var h=B("🌄");o(k,h)},w=k=>{var h=B("🏠");o(k,h)};Z(g,k=>{t.position==="adventure"?k(x):k(w,!1)})}o(I,p)},children:(I,p)=>{var g=tt(),x=T(g);{var w=h=>{var C=B("do adventure");o(h,C)},k=h=>{var C=B("be home");o(h,C)};Z(x,h=>{t.position==="adventure"?h(w):h(k,!1)})}o(I,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{D();var v=B();ct(()=>ft(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var go=$("<!> <!> <!>",1);function xo(s,t){var n=go(),c=T(n);Ce(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{fn(l,{get data(){return gn},size:"var(--icon_size_xs)"})},children:(l,v)=>{D();var f=B("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=r(c,2);se(_,{});var i=r(_,2);vt(i,{get run(){return t.toggle_about_dialog},icon:l=>{D();var v=B("?");o(l,v)},children:(l,v)=>{D();var f=B("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Ge=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var bo=$("<!> <!>",1),yo=$("<!> <!>",1),wo=$("<!> <!> <!>",1);function $o(s,t){$t(t,!0);const n=E(()=>Ge(t.adventure_cats));me(s,{icon:i=>{D();var u=B("🏠");o(i,u)},menu:i=>{var u=wo(),l=T(u);{var v=p=>{var g=bo(),x=T(g);vt(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var C=B("🐈‍⬛");o(h,C)},children:(h,C)=>{D();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);se(w,{}),o(p,g)};Z(l,p=>{e(n)&&p(v)})}var f=r(l,2);Yt(f,17,()=>t.home_cats,p=>p.name,(p,g)=>{_e(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var F=r(f,2);{var I=p=>{var g=yo(),x=T(g);vt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{D();var C=B("🏠");o(h,C)},children:(h,C)=>{D();var X=B("be");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);vt(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var C=B("🦋");o(h,C)},children:(h,C)=>{D();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(F,p=>{e(n)||p(I)})}o(i,u)},children:(i,u)=>{D();var l=B("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var ko=$("<!> <!>",1),Co=$("<!> <!>",1),To=$("<!> <!> <!>",1);function So(s,t){$t(t,!0);const n=E(()=>Ge(t.home_cats));me(s,{icon:i=>{D();var u=B("🌄");o(i,u)},menu:i=>{var u=To(),l=T(u);{var v=p=>{var g=ko(),x=T(g);vt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var C=B("🦋");o(h,C)},children:(h,C)=>{D();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);se(w,{}),o(p,g)};Z(l,p=>{e(n)&&p(v)})}var f=r(l,2);Yt(f,17,()=>t.adventure_cats,p=>p.name,(p,g)=>{_e(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var F=r(f,2);{var I=p=>{var g=Co(),x=T(g);vt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{D();var C=B("🌄");o(h,C)},children:(h,C)=>{D();var X=B("do");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);vt(w,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var C=B("🐈‍⬛");o(h,C)},children:(h,C)=>{D();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(F,p=>{e(n)||p(I)})}o(i,u)},children:(i,u)=>{D();var l=B("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var Eo=$('<span class="icon svelte-y90lnf"> </span>'),Po=$('<span class="name svelte-y90lnf"><!> </span>'),Io=$("<span><!><!></span>");function De(s,t){const n=nt(t,"name",3,"Cat"),c=nt(t,"icon",3,"😺"),_=nt(t,"show_name",3,!0),i=nt(t,"show_icon",3,!0);var u=Io();let l;var v=m(u);{var f=p=>{var g=Eo(),x=m(g,!0);d(g),ct(()=>ft(x,c())),o(p,g)};Z(v,p=>{i()&&p(f)})}var F=r(v);{var I=p=>{var g=Po(),x=m(g);_t(x,()=>t.children??St);var w=r(x,1,!0);d(g),ct(()=>ft(w,n())),o(p,g)};Z(F,p=>{_()&&p(I)})}d(u),ct(p=>l=ht(u,1,"cat svelte-y90lnf",null,l,p),[()=>({"has-icon":i()})]),o(s,u)}const Ao=`<script lang="ts">
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
`;var Oo=$("<!> <!>",1),zo=$('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),No=$('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Ro=$('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Do=$('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Fo=$('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Mo=$("<!> <!>",1),Lo=$('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Ho=$("<!> <!>",1);function Uo(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_="Alyssa",i="Ben",u="home";let l=L(u),v=L(u);const f=E(()=>e(l)===e(v)?"😺":"😾"),F=E(()=>e(l)===e(v)?"😸":"😿"),I=E(()=>({name:_,icon:e(f),position:e(l)})),p=E(()=>({name:i,icon:e(F),position:e(v)}));let g=L(!1);const x=(N,K)=>{const Q=[],Y=[];for(const q of N){const at=q.position==="home"?Q:Y;K?at.unshift(q):at.push(q)}return{home_cats:Q,adventure_cats:Y}},w=E(()=>x([e(I),e(p)],e(g))),k=E(()=>e(w).home_cats),h=E(()=>e(w).adventure_cats),C=E(()=>e(l)!==u||e(v)!==u),X=()=>{a(l,u),a(v,u)};let J=L(!1);const P=()=>{a(J,!e(J))},O=N=>{switch(N.type){case"call_cats_adventure":{a(l,"adventure"),a(v,"adventure");break}case"call_cats_home":{a(l,"home"),a(v,"home");break}case"cat_go_adventure":{N.name===_?a(l,"adventure"):N.name===i&&a(v,"adventure");break}case"cat_go_home":{N.name===_?a(l,"home"):N.name===i&&a(v,"home");break}case"cat_be_or_do":{a(g,!e(g));break}}},[S,R]=pn({fallback:(N,K)=>{const Q=window.getComputedStyle(N),Y=Q.transform==="none"?"":Q.transform;return{duration:1500,easing:vo,css:q=>`
					transform: ${Y} scale(${q});
					opacity: ${q}
				`}}});var b=Ho(),U=T(b);Bt(U,()=>e(c),(N,K)=>{K(N,{scoped:!0,children:(Q,Y)=>{Rt(Q,{children:(q,at)=>{var ut=Mo(),lt=T(ut);Dt(lt,{text:"Full example"});var gt=r(lt,2);Ot(gt,{entries:xt=>{var M=Oo(),j=T(M);{var G=V=>{Te(V,{run:X,content:"Reset",icon:"↻"})};Z(j,V=>{e(C)&&V(G)})}var W=r(j,2);xo(W,{toggle_about_dialog:P}),o(xt,M)},children:(xt,M)=>{var j=Fo(),G=T(j),W=m(G),V=m(W);Ot(V,{entries:rt=>{$o(rt,{act:O,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(rt,A)=>{var H=No(),it=r(m(H),2);Yt(it,29,()=>e(k),({name:ot,icon:et,position:st})=>ot,(ot,et)=>{let st=()=>e(et).name,Et=()=>e(et).icon,bt=()=>e(et).position;var yt=zo(),wt=m(yt);Ot(wt,{entries:Tt=>{_e(Tt,{act:O,get name(){return st()},get icon(){return Et()},get position(){return bt()}})},children:(Tt,Gt)=>{De(Tt,{get name(){return st()},get icon(){return Et()}})},$$slots:{entries:!0,default:!0}}),d(yt),te(1,yt,()=>R,()=>({key:st()})),te(2,yt,()=>S,()=>({key:st()})),ze(yt,()=>Re,null),o(ot,yt)}),d(it),d(H),o(rt,H)},$$slots:{entries:!0,default:!0}});var mt=r(V,2);Ot(mt,{entries:rt=>{So(rt,{act:O,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(rt,A)=>{var H=Do(),it=r(m(H),2);Yt(it,29,()=>e(h),({name:ot,icon:et,position:st})=>ot,(ot,et)=>{let st=()=>e(et).name,Et=()=>e(et).icon,bt=()=>e(et).position;var yt=Ro(),wt=m(yt);Ot(wt,{entries:Tt=>{_e(Tt,{act:O,get name(){return st()},get icon(){return Et()},get position(){return bt()}})},children:(Tt,Gt)=>{De(Tt,{get name(){return st()},get icon(){return Et()}})},$$slots:{entries:!0,default:!0}}),d(yt),te(1,yt,()=>R,()=>({key:st()})),te(2,yt,()=>S,()=>({key:st()})),ze(yt,()=>Re,null),o(ot,yt)}),d(it),d(H),o(rt,H)},$$slots:{entries:!0,default:!0}}),d(W),d(G);var dt=r(G,2),Mt=m(dt);Le(Mt,{summary:rt=>{D();var A=B("View example source");o(rt,A)},children:(rt,A)=>{qt(rt,{get content(){return Ao}})},$$slots:{summary:!0,default:!0}}),d(dt),o(xt,j)},$$slots:{entries:!0,default:!0}}),o(q,ut)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=r(U,2);{var z=N=>{vn(N,{onclose:()=>a(J,!1),children:(K,Q)=>{var Y=Lo(),q=m(Y),at=r(m(q),8),ut=r(m(at),2);xn(ut,{});var lt=r(ut,4);bn(lt,{}),d(at),d(q),d(Y),o(K,Y)},$$slots:{default:!0}})};Z(y,N=>{e(J)&&N(z)})}o(s,b),kt()}var qo=$("<!> <!> <!>",1),Bo=$(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Wo=$("<!> <!>",1);function Xo(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name);let i=L(!1),u=L(!1),l=L(!1);var v=tt(),f=T(v);Bt(f,()=>e(c),(F,I)=>{I(F,{scoped:!0,children:(p,g)=>{Rt(p,{children:(x,w)=>{var k=Wo(),h=T(k);Dt(h,{text:"Basic usage"});var C=r(h,2);Ot(C,{entries:J=>{var P=qo(),O=T(P);vt(O,{run:()=>void a(i,!e(i)),children:(b,U)=>{D();var y=B("Hello world");o(b,y)},$$slots:{default:!0}});var S=r(O,2);vt(S,{run:()=>void a(u,!e(u)),icon:U=>{D();var y=B("🌞");o(U,y)},children:(U,y)=>{D();var z=B("Hello with an optional icon snippet");o(U,z)},$$slots:{icon:!0,default:!0}});var R=r(S,2);vt(R,{run:()=>void a(l,!e(l)),icon:"🌚",children:(b,U)=>{D();var y=B("Hello with an optional icon string");o(b,y)},$$slots:{default:!0}}),o(J,P)},children:(J,P)=>{var O=Bo(),S=r(m(O),2);{let lt=E(()=>`<${e(_)} scoped>
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
...markup without contextmenu behavior...`);qt(S,{get content(){return e(lt)}})}var R=r(S,2),b=m(R);let U;var y=m(b);d(b),d(R);var z=r(R,2),N=m(z);let K;var Q=m(N);d(N),d(z);var Y=r(z,2),q=m(Y);let at;var ut=m(q);d(q),d(Y),D(2),d(O),ct((lt,gt,Ct)=>{U=ht(b,1,"",null,U,lt),ft(y,`greeted = ${e(i)??""}`),K=ht(N,1,"",null,K,gt),ft(Q,`greeted_icon_snippet = ${e(u)??""}`),at=ht(q,1,"",null,at,Ct),ft(ut,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(J,O)},$$slots:{entries:!0,default:!0}}),o(x,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),kt()}var Yo=$("<span> </span>");function Qt(s,t){const n=Fe(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=E(()=>t.size??c);var u=Yo();we(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[un]:v}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=m(u,!0);d(u),ct(()=>ft(l,t.glyph)),o(s,u)}var jo=$('<span class="color_f_5">option f</span>'),Vo=$('<span class="color_g_5">option g</span>'),Ko=$('<span class="color_j_5">option j</span>'),Go=$("<!> <!> <!> <!>",1),Zo=$('<li class="color_error">Error: <code> </code></li>'),Jo=$('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),Qo=$(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),ts=$("<!> <!>",1);function es(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name),i=new ne;let u=L(void 0);const l=E(()=>e(u)?`color_${e(u)}_5`:void 0),v=E(()=>e(u)?`color_${e(u)}`:void 0);var f=tt(),F=T(f);Bt(F,()=>e(c),(I,p)=>{p(I,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Rt(g,{children:(w,k)=>{var h=ts(),C=T(h);Dt(C,{text:"Custom instance"});var X=r(C,2);Ot(X,{entries:P=>{me(P,{icon:R=>{D();var b=B("🎨");o(R,b)},menu:R=>{var b=Go(),U=T(b);vt(U,{run:()=>(a(u,"f"),{ok:!0,close:!1}),children:(K,Q)=>{var Y=jo();o(K,Y)},$$slots:{default:!0}});var y=r(U,2);vt(y,{run:()=>(a(u,"g"),{ok:!0,close:!1}),children:(K,Q)=>{var Y=Vo();o(K,Y)},$$slots:{default:!0}});var z=r(y,2);vt(z,{run:()=>(a(u,"j"),{ok:!0,close:!1}),children:(K,Q)=>{var Y=Ko();o(K,Y)},$$slots:{default:!0}});var N=r(z,2);vt(N,{run:()=>(i.close(),{ok:!0}),children:(K,Q)=>{D();var Y=B("close contextmenu");o(K,Y)},$$slots:{default:!0}}),o(R,b)},children:(R,b)=>{D();var U=B("select color");o(R,U)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(P,O)=>{var S=Qo(),R=m(S),b=r(m(R)),U=m(b,!0);d(b),D(5),d(R);var y=r(R,2);qt(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var z=r(y,2);{let W=E(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);qt(z,{get content(){return e(W)}})}var N=r(z,2),K=r(m(N));K.textContent="{ok: true, close: false}",D(),d(N);var Q=r(N,2),Y=r(m(Q),2),q=m(Y),at=r(m(q),2),ut=m(at,!0);d(at),d(q);var lt=r(q,2),gt=r(m(lt),2),Ct=m(gt);d(gt),d(lt);var xt=r(lt,2);{var M=W=>{var V=Zo(),mt=r(m(V)),dt=m(mt,!0);d(mt),d(V),ct(()=>ft(dt,i.error)),o(W,V)};Z(xt,W=>{i.error&&W(M)})}d(Y),d(Q);var j=r(Q,2);{var G=W=>{var V=Jo(),mt=m(V),dt=m(mt),Mt=m(dt);Qt(Mt,{glyph:"↑"}),d(dt);var At=r(dt,2),rt=m(At),A=m(rt);Qt(A,{glyph:"←"}),d(rt);var H=r(rt,2),it=m(H);Qt(it,{glyph:"↵"}),d(H);var ot=r(H,2),et=m(ot);Qt(et,{glyph:"→"}),d(ot),d(At);var st=r(At,2),Et=m(st);Qt(Et,{glyph:"↓"}),d(st),d(mt),d(V),ct(()=>{ht(dt,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),dt.disabled=!i.can_select_previous,ht(rt,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),rt.disabled=!i.can_collapse,ht(H,1,`border_radius_0 ${e(v)??""}`),H.disabled=!i.can_activate,ht(ot,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),ot.disabled=!i.can_expand,ht(st,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),st.disabled=!i.can_select_next}),pt("mousedown",dt,bt=>{It(bt),i.select_previous()},!0),pt("mousedown",rt,bt=>{It(bt),i.collapse_selected()},!0),pt("mousedown",H,async bt=>{It(bt),await i.activate_selected()},!0),pt("mousedown",ot,bt=>{It(bt),i.expand_selected()},!0),pt("mousedown",st,bt=>{It(bt),i.select_next()},!0),te(3,V,()=>hn),o(W,V)};Z(j,W=>{i.opened&&W(G)})}d(S),ct(()=>{ft(U,e(_)),ht(Q,1,`mb_md ${e(l)??""}`),ft(ut,i.opened),ft(Ct,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(P,S)},$$slots:{entries:!0,default:!0}}),o(w,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),kt()}const ns=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var os=$(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),ss=$("<div><!></div> <!>",1);function as(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=new ne;let i=L(!1),u=L(void 0),l=L("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,F=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,I=E(()=>e(l)===v||e(l)===f||e(l)===F);var p=tt(),g=T(p);Bt(g,()=>e(c),(x,w)=>{w(x,{get contextmenu(){return _},scoped:!0,children:(k,h)=>{Rt(k,{children:(C,X)=>{var J=ss(),P=T(J);let O;var S=m(P);Dt(S,{text:"Select text"}),d(P);var R=r(P,2);Ot(R,{entries:U=>{vt(U,{run:()=>void a(i,!e(i)),children:(y,z)=>{D();var N=B("Toggle something");o(y,N)},$$slots:{default:!0}})},children:(U,y)=>{var z=os();let N;var K=m(z),Q=r(m(K),2),Y=r(m(Q));Y.__click=[ns,u];let q;D(),d(Q),d(K),Kt(K,V=>a(u,V),()=>e(u));var at=r(K,2),ut=m(at);Xt(ut),d(at);var lt=r(at,2);let gt;var Ct=r(lt,2),xt=m(Ct);on(xt),d(Ct);var M=r(Ct,2),j=m(M);ee(j,{path:"Web/HTML/Global_attributes/contenteditable"}),D(),d(M);var G=r(M,4),W=r(G,4);D(2),d(z),ct((V,mt,dt)=>{N=ht(z,1,"panel p_md",null,N,V),q=ht(Y,1,"",null,q,mt),gt=ht(lt,1,"",null,gt,dt)},[()=>({color_g_5:e(I)}),()=>({color_a:e(i)}),()=>({color_g_5:e(I)})]),Oe(ut,()=>e(l),V=>a(l,V)),Oe(xt,()=>e(l),V=>a(l,V)),Ie("innerText",G,()=>e(l),V=>a(l,V)),Ie("innerText",W,()=>e(l),V=>a(l,V)),o(U,z)},$$slots:{entries:!0,default:!0}}),ct(b=>O=ht(P,1,"",null,O,b),[()=>({color_d_5:e(I)})]),o(C,J)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,p),kt()}jt(["click"]);const rs=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var is=$('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),ls=$('<li>custom "some custom entry" entry</li>'),cs=$('<li>"copy text" entry when text is selected</li>'),us=$("<li>link entry when clicking on a link</li>"),ds=$("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),_s=$(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),vs=$('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function ms(s,t){$t(t,!0);const n=p=>{var g=is(),x=m(g),w=r(m(x));w.__click=[rs,I];let k;D(),d(x),Kt(x,X=>a(I,X),()=>e(I));var h=r(x,2),C=r(m(h));D(),d(h),d(g),ct((X,J)=>{k=ht(w,1,"",null,k,X),Ut(C,"href",J)},[()=>({color_h:e(F)}),()=>yn("/")]),o(p,g)},c=Ft.get(),_=E(()=>c.component),i=E(()=>c.name),u=new ne;let l=L(!1),v=L(!1),f=L(!0),F=L(!1),I=L(void 0);Rt(s,{children:(p,g)=>{var x=vs(),w=T(x);Dt(w,{text:"Disable default behaviors"});var k=r(w,4);{let q=E(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);qt(k,{get content(){return e(q)}})}var h=r(k,2),C=m(h),X=m(C);Xt(X);var J=r(X,2),P=r(m(J));P.textContent="link_entry={null}",d(J),d(C);var O=r(C,2),S=m(O);Xt(S);var R=r(S,2),b=r(m(R));b.textContent="text_entry={null}",d(R),d(O),d(h);var U=r(h,2);{let q=E(()=>e(l)?null:void 0),at=E(()=>e(v)?null:void 0);Bt(U,()=>e(_),(ut,lt)=>{lt(ut,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(q)},get text_entry(){return e(at)},children:(gt,Ct)=>{var xt=tt(),M=T(xt);{var j=W=>{Ot(W,{entries:mt=>{vt(mt,{icon:">",run:()=>void a(F,!e(F)),children:(dt,Mt)=>{D();var At=B("some custom entry");o(dt,At)},$$slots:{default:!0}})},children:(mt,dt)=>{n(mt)},$$slots:{entries:!0,default:!0}})},G=W=>{n(W)};Z(M,W=>{e(f)?W(j):W(G,!1)})}o(gt,xt)},$$slots:{default:!0}})})}var y=r(U,4),z=m(y),N=m(z);Xt(N),D(),d(z),d(y);var K=r(y,2);{var Q=q=>{var at=ds(),ut=r(T(at),2),lt=m(ut);{var gt=G=>{var W=ls();o(G,W)};Z(lt,G=>{e(f)&&G(gt)})}var Ct=r(lt,2);{var xt=G=>{var W=cs();o(G,W)};Z(Ct,G=>{e(v)||G(xt)})}var M=r(Ct,2);{var j=G=>{var W=us();o(G,W)};Z(M,G=>{e(l)||G(j)})}d(ut),o(q,at)},Y=q=>{var at=_s();o(q,at)};Z(K,q=>{e(f)||!e(l)||!e(v)?q(Q):q(Y,!1)})}xe(X,()=>e(l),q=>a(l,q)),xe(S,()=>e(v),q=>a(v,q)),xe(N,()=>e(f),q=>a(f,q)),o(p,x)},$$slots:{default:!0}}),kt()}jt(["click"]);var ps=$(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function hs(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name);var i=tt(),u=T(i);Bt(u,()=>e(c),(l,v)=>{v(l,{scoped:!0,children:(f,F)=>{Rt(f,{children:(I,p)=>{var g=ps(),x=T(g);Dt(x,{text:"Default behaviors"});var w=r(x,2),k=m(w);{let h=E(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);qt(k,{get content(){return e(h)}})}D(6),d(w),o(I,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),kt()}var fs=$("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function Bs(s,t){$t(t,!0);const c=an("Contextmenu");Ft.set(),sn(s,{get tome(){return c},children:(_,i)=>{var u=fs(),l=T(u);ao(l,{});var v=r(l,2);Xo(v,{});var f=r(v,2);hs(f,{});var F=r(f,2);as(F,{});var I=r(F,2);ms(I,{});var p=r(I,2);es(p,{});var g=r(p,2);Uo(g,{});var x=r(g,2);uo(x),D(2),o(_,u)},$$slots:{default:!0}}),kt()}export{Bs as component};
