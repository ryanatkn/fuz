import"../chunks/DsnmJJEf.js";import{C as on,z as sn,af as L,h as e,ae as a,aj as le,u as E,e as nt,a as T,b as o,g as ut,p as $t,f as $,s as r,d as m,t as lt,b9 as ft,c as kt,r as d,b8 as Vt,ac as B,ad as D,ab as St,F as Ht,ba as Nt,bB as re,bE as an}from"../chunks/B7qs8f6Z.js";import{T as rn}from"../chunks/C7dlPG1Q.js";import{g as ln}from"../chunks/7r--Qyep.js";import{s as xt}from"../chunks/D2Z-uHvG.js";import{c as Bt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/DpqcPF0n.js";import{M as ee}from"../chunks/DHzjxUCy.js";import{T as Rt,a as Dt}from"../chunks/CV1VVLPw.js";import{e as cn}from"../chunks/36zOYlHh.js";import{a as un}from"../chunks/B2EI8ygw.js";import{a as ke,b as gt,s as Ut,C as dn,c as ce,d as Ie,r as Yt,S as _n}from"../chunks/C61V10DD.js";import{p as ot,r as Le,s as Kt}from"../chunks/C2A3Zqzr.js";import{o as Ae}from"../chunks/BMgspcsU.js";import{a as vn,s as Pt,b as He,c as mn,D as pn}from"../chunks/DPmjiu3g.js";import{c as me,a as be,e as jt}from"../chunks/GCAAGpmM.js";import{i as K}from"../chunks/DHMuHmk0.js";import{P as hn}from"../chunks/B7mkSFrP.js";import{D as Ue,b as Oe}from"../chunks/8X_O05eD.js";import{b as ze,a as Ne,c as ye}from"../chunks/7g2Ar_02.js";import{b as Gt}from"../chunks/2LOYOryH.js";import{t as te,c as fn,a as Re,s as gn}from"../chunks/DkIYfvB-.js";import{S as xn,g as bn}from"../chunks/B-XuT0zp.js";import{C as yn,T as wn}from"../chunks/twD8klRS.js";import{r as $n}from"../chunks/Bb9wigh_.js";class Ce{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){Ce.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var kn=new Ce({box:"border-box"});function ue(s,t,n){var c=kn.observe(s,()=>n(s[t]));on(()=>(sn(()=>n(s[t])),c))}const Cn=Object.freeze({});class qe{#t=L(0);get width(){return e(this.#t)}set width(t){a(this.#t,t,!0)}#e=L(0);get height(){return e(this.#e)}set height(t){a(this.#e,t,!0)}}class Tn{is_menu=!1;menu;run;disabled;#t=L(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=L(!1);get pending(){return e(this.#e)}set pending(t){a(this.#e,t,!0)}#n=L(null);get error_message(){return e(this.#n)}set error_message(t){a(this.#n,t,!0)}#o=L(null);get promise(){return e(this.#o)}set promise(t){a(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class Sn{is_menu=!0;menu;depth;#t=L(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=L(le([]));get items(){return e(this.#e)}set items(t){a(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class En{is_menu=!0;menu=null;depth=1;#t=L(le([]));get items(){return e(this.#t)}set items(t){a(this.#t,t,!0)}}class ne{layout;initial_layout;#t=L(!1);get opened(){return e(this.#t)}set opened(t){a(this.#t,t,!0)}#e=L(0);get x(){return e(this.#e)}set x(t){a(this.#e,t,!0)}#n=L(0);get y(){return e(this.#n)}set y(t){a(this.#n,t,!0)}#o=L(le([]));get params(){return e(this.#o)}set params(t){a(this.#o,t,!0)}#s=L();get error(){return e(this.#s)}set error(t){a(this.#s,t,!0)}root_menu=new En;#a=L(le([]));get selections(){return e(this.#a)}set selections(t){a(this.#a,t,!0)}#r=E(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){a(this.#r,t)}#i=E(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){a(this.#i,t)}#l=E(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){a(this.#l,t)}#c=E(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){a(this.#c,t)}#u=E(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){a(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new qe}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(vn(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=we.maybe_get()??this.root_menu,_=new Tn(c,t,n);return c.items.push(_),Ae(()=>{c.items.length=0}),_}add_submenu(){const t=we.maybe_get()??this.root_menu,n=new Sn(t,t.depth+1);return t.items.push(n),we.set(n),Ae(()=>{t.items.length=0}),n}}const Te="contextmenu",Pn=`a,[data-${Te}]`,ie=new Map;let In=0;const An=(s,t)=>{if(t==null)return;const n=In+++"";return s.dataset[Te]=n,ie.set(n,t),{update:c=>{ie.set(n,c)},destroy:()=>{ie.delete(n)}}},On=17,$e=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:v=!0}=_??Cn,f=zn(s)?.filter(F=>typeof F=="function"||(F.snippet!=="link"||i)&&(F.snippet!=="text"||u)&&(F.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate(On),!0):!1},zn=s=>{let t=null,n=s,c,_;for(;n=n?.closest(Pn);){if(c=n.dataset[Te]){if(t??=[],_=ie.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},oe=me(),we=me(),de=me(()=>new qe);function At(s,t){const n=ot(t,"tag",3,"span");var c=nt(),_=T(c);cn(_,n,!1,(i,u)=>{un(i,(f,F)=>An?.(f,F),()=>t.entries),ke(i,()=>({class:"display_contents",...t.attrs}));var l=nt(),v=T(l);ut(v,()=>t.children),o(u,l)}),o(s,c)}var Nn=$('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function dt(s,t){$t(t,!0);const n=ot(t,"disabled",3,!1),c=oe.get(),_=c.add_entry(()=>t.run,()=>n()),i=E(()=>_.selected),u=E(()=>_.pending),l=E(()=>_.error_message),v=E(()=>_.disabled());var f=Nn();let F;f.__click=function(...P){(e(v)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,P)};var I=m(f),p=m(I),g=m(p);{var x=P=>{var A=B();lt(()=>xt(A,t.icon)),o(P,A)},w=P=>{var A=nt(),S=T(A);{var N=b=>{var U=nt(),y=T(U);ut(y,()=>t.icon),o(b,U)};K(S,b=>{t.icon&&b(N)},!0)}o(P,A)};K(g,P=>{typeof t.icon=="string"?P(x):P(w,!1)})}d(p);var k=r(p,2),h=m(k);ut(h,()=>t.children),d(k);var C=r(k,2);{var X=P=>{hn(P,{})},J=P=>{var A=nt(),S=T(A);{var N=b=>{var U=B("⚠️");o(b,U)};K(S,b=>{e(l)&&b(N)},!0)}o(P,A)};K(C,P=>{e(u)?P(X):P(J,!1)})}d(I),d(f),lt(P=>{F=gt(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,F,P),Ut(f,"aria-disabled",e(v)),Ut(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(v)})]),ft("mouseenter",f,function(...P){(e(v)?void 0:A=>{Pt(A),c.select(_)})?.apply(this,P)}),o(s,f),kt()}Vt(["click"]);var Rn=s=>{s.stopPropagation()},Dn=$('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function Se(s,t){$t(t,!0);const n="🔗",c=ot(t,"icon",3,n),_=ot(t,"disabled",3,!1),i=oe.get();let u=L(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),v=E(()=>l.selected),f=E(()=>l.disabled()),F=(y,O=location.host)=>{const z=be(be(y,"https://"),"http://");return z.startsWith(O+"/")?be(z,O):z},I=E(()=>F(t.href)),p=E(()=>!(e(I)[0]==="."||e(I)[0]==="/"&&e(I)[1]!=="/")),g=E(()=>e(p)?"noreferrer":void 0);var x=Dn(),w=m(x);let k;w.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},w.__contextmenu=[Rn];var h=m(w),C=m(h),X=m(C);{var J=y=>{var O=B();lt(()=>xt(O,c())),o(y,O)},P=y=>{var O=nt(),z=T(O);ut(z,c,()=>n),o(y,O)};K(X,y=>{typeof c()=="string"?y(J):y(P,!1)})}d(C);var A=r(C,2),S=m(A),N=m(S);{var b=y=>{var O=nt(),z=T(O);ut(z,()=>t.children),o(y,O)},U=y=>{var O=B();lt(()=>xt(O,e(I))),o(y,O)};K(N,y=>{t.children?y(b):y(U,!1)})}d(S),d(A),d(h),d(w),Gt(w,y=>a(u,y),()=>e(u)),d(x),lt(y=>{k=gt(w,1,"menu_item plain svelte-1fkm0gl",null,k,y),Ut(w,"aria-disabled",e(f)),Ut(w,"href",t.href),Ut(w,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),ft("mouseenter",w,function(...y){(e(f)?void 0:O=>{Pt(O),i.select(l)})?.apply(this,y)}),o(s,x),kt()}Vt(["click","contextmenu"]);function Ee(s,t){dt(s,{get run(){return t.run},icon:c=>{D();var _=B();lt(()=>xt(_,t.icon)),o(c,_)},children:(c,_)=>{D();var i=B();lt(()=>xt(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var Fn=$("<li></li>");function se(s,t){const n=Le(t,["$$slots","$$events","$$legacy"]);var c=Fn();ke(c,()=>({role:"separator","aria-orientation":"vertical",...n,[dn]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const Be=-2,We=-2,Xe=910,Ye=7,Mn=633,Ln=21,_e=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!He(s)&&!mn(s),je=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Ve=s=>t=>{const n=s.get(t.key);!n||He(t.target)||(Pt(t),n())},Ke=(s,t,n)=>s+Math.min(0,n-(s+t)),Ge=(s,t,n)=>s+Math.min(0,n-(s+t)),Hn=(s,t=St)=>{Se(s,Kt(t))},Un=(s,t=St)=>{Ee(s,Kt(t))},qn=(s,t=St)=>{se(s,Kt(t))};var Bn=$('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Wn=$('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),Xn=$('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Yn=$("<!> <!>  <!>",1);function De(s,t){$t(t,!0);const n=ot(t,"contextmenu",19,()=>new ne),c=ot(t,"open_offset_x",3,Be),_=ot(t,"open_offset_y",3,We),i=ot(t,"bypass_with_tap_then_longpress",3,!0),u=ot(t,"bypass_window",3,Xe),l=ot(t,"bypass_move_tolerance",3,Ye),v=ot(t,"scoped",3,!1),f=ot(t,"link_entry",3,Hn),F=ot(t,"text_entry",3,Un),I=ot(t,"separator_entry",3,qn);oe.set(n());let p=L(void 0);const g=E(()=>n().layout),x=E(()=>n().initial_layout),w=E(()=>e(g)===e(x));let k=L(void 0),h=L(void 0);Ht(()=>{!e(w)&&e(k)!==void 0&&(e(g).width=e(k))}),Ht(()=>{!e(w)&&e(h)!==void 0&&(e(g).height=e(h))});const C=de.set();Ht(()=>{if(e(p)){const M=e(p).getBoundingClientRect();C.width=M.width,C.height=M.height}});const X=E(()=>Ke(n().x,C.width,e(g).width)),J=E(()=>Ge(n().y,C.height,e(g).height));let P=L(void 0),A=L(void 0),S=L(void 0),N=L(void 0),b=L(void 0);const U=M=>{if(e(N)){a(N,!1),a(S,null),a(P,null),a(A,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{target:V}=M;_e(V,M.shiftKey)&&(e(p)?.contains(V)||$e(V,M.clientX+c(),M.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:F()!==null,separator_enabled:I()!==null})&&Pt(M))},y=M=>{if(!i())return;const{touches:V,target:G}=M;if(n().opened||V.length!==1||!_e(G,M.shiftKey)){a(S,null),a(P,null),a(A,null),a(N,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{clientX:W,clientY:j}=V[0];if(e(S)!=null&&performance.now()-e(S)<u()&&Math.hypot(W-e(P),j-e(A))<l()){a(N,!0),a(S,null),a(P,null),a(A,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}a(S,performance.now(),!0),a(P,W,!0),a(A,j,!0),e(b)!=null&&clearTimeout(e(b)),a(b,setTimeout(()=>{a(S,null),a(P,null),a(A,null),a(b,null)},u()),!0)},O=()=>{a(S,null),a(P,null),a(A,null),a(N,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null))},z=M=>{e(p)&&!e(p).contains(M.target)&&n().close()},Q=je(n()),et=Ve(Q);var Y=Yn();ft("contextmenu",Nt,function(...M){(v()?void 0:U)?.apply(this,M)}),ft("mousedown",Nt,function(...M){(n().opened?z:void 0)?.apply(this,M)}),ft("keydown",Nt,function(...M){(n().opened?et:void 0)?.apply(this,M)}),ft("touchstart",Nt,function(...M){(v()||!i()?void 0:y)?.apply(this,M)},!0,!0),ft("touchcancel",Nt,function(...M){(v()||!i()?void 0:O)?.apply(this,M)},!0);var H=T(Y);{var st=M=>{var V=Bn();V.__contextmenu=U;var G=m(V);ut(G,()=>t.children),d(V),ft("touchstart",V,function(...W){(i()?y:void 0)?.apply(this,W)},!0,!0),ft("touchcancel",V,function(...W){(i()?O:void 0)?.apply(this,W)},!0),o(M,V)},ct=M=>{var V=nt(),G=T(V);ut(G,()=>t.children),o(M,V)};K(H,M=>{v()?M(st):M(ct,!1)})}var it=r(H,2);{var bt=M=>{var V=Wn();ue(V,"clientHeight",G=>a(h,G)),ue(V,"clientWidth",G=>a(k,G)),o(M,V)};K(it,M=>{e(w)||M(bt)})}var Ct=r(it,2);{var yt=M=>{var V=Xn();let G;jt(V,20,()=>n().params,W=>W,(W,j)=>{var pt=nt(),_t=T(pt);{var Mt=at=>{var Tt=nt(),vt=T(Tt);ut(vt,()=>j),o(at,Tt)},Et=at=>{var Tt=nt(),vt=T(Tt);{var R=tt=>{var Z=nt(),rt=T(Z);ut(rt,()=>f()??St,()=>j.props),o(tt,Z)},q=tt=>{var Z=nt(),rt=T(Z);{var mt=It=>{var Ot=nt(),ht=T(Ot);ut(ht,()=>F()??St,()=>j.props),o(It,Ot)},wt=It=>{var Ot=nt(),ht=T(Ot);{var zt=Lt=>{var ae=nt(),he=T(ae);ut(he,()=>I()??St,()=>j.props),o(Lt,ae)};K(ht,Lt=>{j.snippet==="separator"&&Lt(zt)},!0)}o(It,Ot)};K(rt,It=>{j.snippet==="text"?It(mt):It(wt,!1)},!0)}o(tt,Z)};K(vt,tt=>{j.snippet==="link"?tt(R):tt(q,!1)},!0)}o(at,Tt)};K(_t,at=>{typeof j=="function"?at(Mt):at(Et,!1)})}o(W,pt)}),d(V),Gt(V,W=>a(p,W),()=>e(p)),lt(W=>G=ce(V,"",G,W),[()=>({transform:`translate3d(${e(X)??""}px, ${e(J)??""}px, 0)`})]),o(M,V)};K(Ct,M=>{n().opened&&M(yt)})}o(s,Y),kt()}Vt(["contextmenu"]);const jn=(s,t=St)=>{Se(s,Kt(t))},Vn=(s,t=St)=>{Ee(s,Kt(t))},Kn=(s,t=St)=>{se(s,Kt(t))};var Gn=$('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),Zn=$('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Jn=$('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Qn=$("<!> <!> <!>",1);function to(s,t){$t(t,!0);const n=ot(t,"contextmenu",19,()=>new ne),c=ot(t,"longpress_move_tolerance",3,Ln),_=ot(t,"longpress_duration",3,Mn),i=ot(t,"bypass_with_tap_then_longpress",3,!0),u=ot(t,"bypass_window",3,Xe),l=ot(t,"bypass_move_tolerance",3,Ye),v=ot(t,"open_offset_x",3,Be),f=ot(t,"open_offset_y",3,We),F=ot(t,"scoped",3,!1),I=ot(t,"link_entry",3,jn),p=ot(t,"text_entry",3,Vn),g=ot(t,"separator_entry",3,Kn);oe.set(n());let x=L(void 0);const w=E(()=>n().layout),k=E(()=>n().initial_layout),h=E(()=>e(w)===e(k));let C=L(void 0),X=L(void 0);Ht(()=>{!e(h)&&e(C)!==void 0&&(e(w).width=e(C))}),Ht(()=>{!e(h)&&e(X)!==void 0&&(e(w).height=e(X))});const J=de.set();Ht(()=>{if(e(x)){const R=e(x).getBoundingClientRect();J.width=R.width,J.height=R.height}});const P=E(()=>Ke(n().x,J.width,e(w).width)),A=E(()=>Ge(n().y,J.height,e(w).height));let S=L(void 0),N=L(void 0),b=L(void 0),U=L(void 0),y=L(void 0),O=L(void 0),z=L(void 0);const Q=()=>{document.body.classList.add("contextmenu_pending")},et=()=>{document.body.classList.remove("contextmenu_pending")},Y=()=>{a(y,!1),e(U)!=null&&(clearTimeout(e(U)),a(U,null)),et()},H=()=>{a(b,null),a(S,null),a(N,null),a(O,!1),e(z)!=null&&(clearTimeout(e(z)),a(z,null))},st=()=>{Y(),H()},ct=R=>{if(e(O)){H();return}const{target:q}=R;if(e(y)){if(e(x)?.contains(q))return;st(),Pt(R);return}_e(q,R.shiftKey)&&(e(x)?.contains(q)||$e(q,R.clientX+v(),R.clientY+f(),n(),{link_enabled:I()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})&&(Pt(R),st()))},it=R=>{a(y,!1);const{touches:q,target:tt}=R;if(n().opened||q.length!==1||!_e(tt,R.shiftKey)){st();return}const{clientX:Z,clientY:rt}=q[0];if(i()){if(e(b)!=null&&performance.now()-e(b)<u()&&Math.hypot(Z-e(S),rt-e(N))<l()){a(O,!0),a(b,null),a(S,null),a(N,null),e(z)!=null&&(clearTimeout(e(z)),a(z,null));return}a(b,performance.now(),!0),e(z)!=null&&clearTimeout(e(z)),a(z,setTimeout(()=>{H()},u()),!0)}a(S,Z,!0),a(N,rt,!0),Q(),e(U)!=null&&Y(),a(U,setTimeout(()=>{a(y,!0),et(),$e(tt,e(S)+v(),e(N)+f(),n(),{link_enabled:I()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})},_()),!0)},bt=R=>{if(e(U)==null||n().opened)return;const{touches:q}=R;if(q.length!==1)return;const{clientX:tt,clientY:Z}=q[0];if(Math.hypot(tt-e(S),Z-e(N))>c()){Y();return}R.preventDefault()},Ct=R=>{e(U)!=null&&(e(y)&&Pt(R),Y()),e(O)&&H()},yt=()=>{st()},M=R=>{e(x)&&!e(x).contains(R.target)&&n().close()},V=je(n()),G=Ve(V),W=R=>{const q={passive:!1,capture:!0},tt=re(R,"touchstart",it,q),Z=re(R,"touchmove",bt,q),rt=re(R,"touchend",Ct,q),mt=re(R,"touchcancel",yt,q);return()=>{tt(),Z(),rt(),mt()}};var j=Qn();ft("contextmenu",Nt,function(...R){(F()?void 0:ct)?.apply(this,R)}),ft("mousedown",Nt,function(...R){(n().opened?M:void 0)?.apply(this,R)}),ft("keydown",Nt,function(...R){(n().opened?G:void 0)?.apply(this,R)}),Ie(Nt,()=>F()?void 0:W);var pt=T(j);{var _t=R=>{var q=Gn();q.__contextmenu=ct;var tt=m(q);ut(tt,()=>t.children),d(q),Ie(q,()=>W),o(R,q)},Mt=R=>{var q=nt(),tt=T(q);ut(tt,()=>t.children),o(R,q)};K(pt,R=>{F()?R(_t):R(Mt,!1)})}var Et=r(pt,2);{var at=R=>{var q=Zn();ue(q,"clientHeight",tt=>a(X,tt)),ue(q,"clientWidth",tt=>a(C,tt)),o(R,q)};K(Et,R=>{e(h)||R(at)})}var Tt=r(Et,2);{var vt=R=>{var q=Jn();let tt;jt(q,20,()=>n().params,Z=>Z,(Z,rt)=>{var mt=nt(),wt=T(mt);{var It=ht=>{var zt=nt(),Lt=T(zt);ut(Lt,()=>rt),o(ht,zt)},Ot=ht=>{var zt=nt(),Lt=T(zt);{var ae=Wt=>{var Zt=nt(),fe=T(Zt);ut(fe,()=>I()??St,()=>rt.props),o(Wt,Zt)},he=Wt=>{var Zt=nt(),fe=T(Zt);{var Qe=Xt=>{var Jt=nt(),ge=T(Jt);ut(ge,()=>p()??St,()=>rt.props),o(Xt,Jt)},tn=Xt=>{var Jt=nt(),ge=T(Jt);{var en=xe=>{var Pe=nt(),nn=T(Pe);ut(nn,()=>g()??St,()=>rt.props),o(xe,Pe)};K(ge,xe=>{rt.snippet==="separator"&&xe(en)},!0)}o(Xt,Jt)};K(fe,Xt=>{rt.snippet==="text"?Xt(Qe):Xt(tn,!1)},!0)}o(Wt,Zt)};K(Lt,Wt=>{rt.snippet==="link"?Wt(ae):Wt(he,!1)},!0)}o(ht,zt)};K(wt,ht=>{typeof rt=="function"?ht(It):ht(Ot,!1)})}o(Z,mt)}),d(q),Gt(q,Z=>a(x,Z),()=>e(x)),lt(Z=>tt=ce(q,"",tt,Z),[()=>({transform:`translate3d(${e(P)??""}px, ${e(A)??""}px, 0)`})]),o(R,q)};K(Tt,R=>{n().opened&&R(vt)})}o(s,j),kt()}Vt(["contextmenu"]);class eo{#t=L();get variant(){return e(this.#t)}set variant(t){a(this.#t,t,!0)}#e=E(()=>this.variant==="standard"?De:to);get component(){return e(this.#e)}set component(t){a(this.#e,t)}#n=E(()=>this.component===De?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){a(this.#n,t)}constructor(t="standard"){this.variant=t}}const Ft=me(()=>new eo("standard"));var no=$('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Ze(s,t){$t(t,!0);const n=[],c=Ft.get();var _=no(),i=r(m(_),2),u=m(i);Yt(u),u.value=u.__value="standard",D(2),d(i);var l=r(i,2),v=m(l);Yt(v),v.value=v.__value="compat",D(2),d(l),d(_),ze(n,[],u,()=>c.variant,f=>c.variant=f),ze(n,[],v,()=>c.variant,f=>c.variant=f),o(s,_),kt()}var oo=$('<p class="panel p_md">alert B -- also inherits A</p>'),so=$('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),ao=$("<code>navigator.vibrate</code>"),ro=$(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function io(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name);Rt(s,{children:(i,u)=>{var l=ro(),v=T(l);Dt(v,{text:"Introduction"});var f=r(v,2),F=r(m(f),5);ee(F,{path:"Web/API/Element/contextmenu_event"}),D(3),d(f);var I=r(f,4),p=r(m(I)),g=m(p,!0);d(p),D(5),d(I);var x=r(I,2);Bt(x,()=>e(c),(J,P)=>{P(J,{scoped:!0,children:(A,S)=>{At(A,{entries:b=>{dt(b,{run:()=>alert("alert A"),children:(U,y)=>{D();var O=B("alert A");o(U,O)},$$slots:{default:!0}})},children:(b,U)=>{var y=so(),O=r(m(y),2);At(O,{entries:Q=>{dt(Q,{run:()=>alert("alert B"),children:(et,Y)=>{D();var H=B("alert B");o(et,H)},$$slots:{default:!0}})},children:(Q,et)=>{var Y=oo();o(Q,Y)},$$slots:{entries:!0,default:!0}}),d(y),o(b,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var w=r(x,2);Ue(w,{summary:P=>{D();var A=B("view code");o(P,A)},children:(P,A)=>{{let S=E(()=>`<${e(_)}>
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
</${e(_)}>`);qt(P,{get content(){return e(S)}})}},$$slots:{summary:!0,default:!0}});var k=r(w,14),h=r(m(k),2),C=r(m(h));ee(C,{path:"Web/API/Navigator/vibrate",children:(J,P)=>{var A=ao();o(J,A)},$$slots:{default:!0}}),d(h),d(k);var X=r(k,2);Ze(X,{}),lt(()=>xt(g,e(_))),o(i,l)},$$slots:{default:!0}}),kt()}var lo=$('<span class="font_family_mono">contextmenu</span> event',1),co=$(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, fewer edge cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),uo=$(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),_o=$("<!> <!>",1);function vo(s){var t=_o(),n=T(t);Rt(n,{children:(_,i)=>{var u=co(),l=T(u);Dt(l,{text:"iOS compatibility"});var v=r(l,6),f=r(m(v),2),F=r(m(f));ee(F,{path:"Web/API/Element/contextmenu_event",children:(p,g)=>{var x=lo();D(),o(p,x)},$$slots:{default:!0}}),d(f),D(4),d(v);var I=r(v,6);Ze(I,{}),o(_,u)},$$slots:{default:!0}});var c=r(n,2);Rt(c,{children:(_,i)=>{var u=uo(),l=T(u);Dt(l,{text:"Caveats"});var v=r(l,8),f=r(m(v));ee(f,{path:"Web/API/Element/contextmenu_event"}),D(3),d(v),o(_,u)},$$slots:{default:!0}}),o(s,t)}function mo(s){const t=s-1;return t*t*t+1}function po(s){return--s*s*s*s*s+1}function Fe(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=A=>Math.sqrt(A)*120,easing:u=mo}=c,l=getComputedStyle(s),v=l.transform==="none"?"":l.transform,[f,F]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,F/=s.clientHeight;var I=ho(s),p=s.clientWidth/n.width/I,g=s.clientHeight/n.height/I,x=t.left+t.width*f,w=t.top+t.height*F,k=n.left+n.width*f,h=n.top+n.height*F,C=(x-k)*p,X=(w-h)*g,J=t.width/n.width,P=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(C*C+X*X)):i,easing:u,css:(A,S)=>{var N=S*C,b=S*X,U=A+S*J,y=A+S*P;return`transform: ${v} translate(${N}px, ${b}px) scale(${U}, ${y});`}}}function ho(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var fo=$('<menu class="pane unstyled svelte-4htxep"><!></menu>'),go=$('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function pe(s,t){$t(t,!0);const n=oe.get(),c=n.add_submenu(),{layout:_}=n,i=E(()=>c.selected);let u=L(void 0);const l=de.get(),v=de.set();let f=L(0),F=L(0);Ht(()=>{e(u)&&I(e(u),_,l)});const I=(S,N,b)=>{const{x:U,y,width:O,height:z}=S.getBoundingClientRect();v.width=O,v.height=z;const Q=U-e(f),et=y-e(F),Y=Q+O+b.width-N.width;if(Y<=0)a(f,b.width,!0);else{const H=O-Q;H<=0?a(f,-O):H>Y?a(f,b.width-Y):a(f,H-O)}a(F,Math.min(0,N.height-(et+z)),!0)};var p=go();let g;var x=m(p);let w;var k=m(x),h=m(k),C=m(h);ut(C,()=>t.icon??St),d(h);var X=r(h,2),J=m(X);ut(J,()=>t.children),d(X),d(k),D(2),d(x);var P=r(x,2);{var A=S=>{var N=fo();let b;var U=m(N);ut(U,()=>t.menu),d(N),Gt(N,y=>a(u,y),()=>e(u)),lt(y=>b=ce(N,"",b,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(F)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(S,N)};K(P,S=>{e(i)&&S(A)})}d(p),lt((S,N)=>{g=ce(p,"",g,S),w=gt(x,1,"menu_item plain selectable svelte-4htxep",null,w,N),Ut(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),ft("mouseenter",x,S=>{Pt(S),setTimeout(()=>n.select(c))}),o(s,p),kt()}var xo=$("<!> <!>",1);function ve(s,t){$t(t,!0);const n=ot(t,"name",3,"Cat"),c=ot(t,"icon",3,"😺");pe(s,{icon:u=>{D();var l=B();lt(()=>xt(l,c())),o(u,l)},menu:u=>{var l=xo(),v=T(l);dt(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:I=>{var p=nt(),g=T(p);{var x=k=>{var h=B("🏠");o(k,h)},w=k=>{var h=B("🌄");o(k,h)};K(g,k=>{t.position==="adventure"?k(x):k(w,!1)})}o(I,p)},children:(I,p)=>{var g=nt(),x=T(g);{var w=h=>{var C=B("go home");o(h,C)},k=h=>{var C=B("go adventure");o(h,C)};K(x,h=>{t.position==="adventure"?h(w):h(k,!1)})}o(I,g)},$$slots:{icon:!0,default:!0}});var f=r(v,2);dt(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:I=>{var p=nt(),g=T(p);{var x=k=>{var h=B("🌄");o(k,h)},w=k=>{var h=B("🏠");o(k,h)};K(g,k=>{t.position==="adventure"?k(x):k(w,!1)})}o(I,p)},children:(I,p)=>{var g=nt(),x=T(g);{var w=h=>{var C=B("do adventure");o(h,C)},k=h=>{var C=B("be home");o(h,C)};K(x,h=>{t.position==="adventure"?h(w):h(k,!1)})}o(I,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{D();var v=B();lt(()=>xt(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var bo=$("<!> <!> <!>",1);function yo(s,t){var n=bo(),c=T(n);Se(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{xn(l,{get data(){return bn},size:"var(--icon_size_xs)"})},children:(l,v)=>{D();var f=B("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=r(c,2);se(_,{});var i=r(_,2);dt(i,{get run(){return t.toggle_about_dialog},icon:l=>{D();var v=B("?");o(l,v)},children:(l,v)=>{D();var f=B("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Je=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var wo=$("<!> <!>",1),$o=$("<!> <!>",1),ko=$("<!> <!> <!>",1);function Co(s,t){$t(t,!0);const n=E(()=>Je(t.adventure_cats));pe(s,{icon:i=>{D();var u=B("🏠");o(i,u)},menu:i=>{var u=ko(),l=T(u);{var v=p=>{var g=wo(),x=T(g);dt(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var C=B("🐈‍⬛");o(h,C)},children:(h,C)=>{D();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);se(w,{}),o(p,g)};K(l,p=>{e(n)&&p(v)})}var f=r(l,2);jt(f,17,()=>t.home_cats,p=>p.name,(p,g)=>{ve(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var F=r(f,2);{var I=p=>{var g=$o(),x=T(g);dt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{D();var C=B("🏠");o(h,C)},children:(h,C)=>{D();var X=B("be");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);dt(w,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var C=B("🦋");o(h,C)},children:(h,C)=>{D();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};K(F,p=>{e(n)||p(I)})}o(i,u)},children:(i,u)=>{D();var l=B("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var To=$("<!> <!>",1),So=$("<!> <!>",1),Eo=$("<!> <!> <!>",1);function Po(s,t){$t(t,!0);const n=E(()=>Je(t.home_cats));pe(s,{icon:i=>{D();var u=B("🌄");o(i,u)},menu:i=>{var u=Eo(),l=T(u);{var v=p=>{var g=To(),x=T(g);dt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var C=B("🦋");o(h,C)},children:(h,C)=>{D();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);se(w,{}),o(p,g)};K(l,p=>{e(n)&&p(v)})}var f=r(l,2);jt(f,17,()=>t.adventure_cats,p=>p.name,(p,g)=>{ve(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var F=r(f,2);{var I=p=>{var g=So(),x=T(g);dt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{D();var C=B("🌄");o(h,C)},children:(h,C)=>{D();var X=B("do");o(h,X)},$$slots:{icon:!0,default:!0}});var w=r(x,2);dt(w,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var C=B("🐈‍⬛");o(h,C)},children:(h,C)=>{D();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};K(F,p=>{e(n)||p(I)})}o(i,u)},children:(i,u)=>{D();var l=B("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var Io=$('<span class="icon svelte-y90lnf"> </span>'),Ao=$('<span class="name svelte-y90lnf"><!> </span>'),Oo=$("<span><!><!></span>");function Me(s,t){const n=ot(t,"name",3,"Cat"),c=ot(t,"icon",3,"😺"),_=ot(t,"show_name",3,!0),i=ot(t,"show_icon",3,!0);var u=Oo();let l;var v=m(u);{var f=p=>{var g=Io(),x=m(g,!0);d(g),lt(()=>xt(x,c())),o(p,g)};K(v,p=>{i()&&p(f)})}var F=r(v);{var I=p=>{var g=Ao(),x=m(g);ut(x,()=>t.children??St);var w=r(x,1,!0);d(g),lt(()=>xt(w,n())),o(p,g)};K(F,p=>{_()&&p(I)})}d(u),lt(p=>l=gt(u,1,"cat svelte-y90lnf",null,l,p),[()=>({"has-icon":i()})]),o(s,u)}const zo=`<script lang="ts">
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
`;var No=$("<!> <!>",1),Ro=$('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Do=$('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Fo=$('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Mo=$('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Lo=$('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Ho=$("<!> <!>",1),Uo=$('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),qo=$("<!> <!>",1);function Bo(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_="Alyssa",i="Ben",u="home";let l=L(u),v=L(u);const f=E(()=>e(l)===e(v)?"😺":"😾"),F=E(()=>e(l)===e(v)?"😸":"😿"),I=E(()=>({name:_,icon:e(f),position:e(l)})),p=E(()=>({name:i,icon:e(F),position:e(v)}));let g=L(!1);const x=(z,Q)=>{const et=[],Y=[];for(const H of z){const st=H.position==="home"?et:Y;Q?st.unshift(H):st.push(H)}return{home_cats:et,adventure_cats:Y}},w=E(()=>x([e(I),e(p)],e(g))),k=E(()=>e(w).home_cats),h=E(()=>e(w).adventure_cats),C=E(()=>e(l)!==u||e(v)!==u),X=()=>{a(l,u),a(v,u)};let J=L(!1);const P=()=>{a(J,!e(J))},A=z=>{switch(z.type){case"call_cats_adventure":{a(l,"adventure"),a(v,"adventure");break}case"call_cats_home":{a(l,"home"),a(v,"home");break}case"cat_go_adventure":{z.name===_?a(l,"adventure"):z.name===i&&a(v,"adventure");break}case"cat_go_home":{z.name===_?a(l,"home"):z.name===i&&a(v,"home");break}case"cat_be_or_do":{a(g,!e(g));break}}},[S,N]=fn({fallback:(z,Q)=>{const et=window.getComputedStyle(z),Y=et.transform==="none"?"":et.transform;return{duration:1500,easing:po,css:H=>`
					transform: ${Y} scale(${H});
					opacity: ${H}
				`}}});var b=qo(),U=T(b);Bt(U,()=>e(c),(z,Q)=>{Q(z,{scoped:!0,children:(et,Y)=>{Rt(et,{children:(H,st)=>{var ct=Ho(),it=T(ct);Dt(it,{text:"Full example"});var bt=r(it,2);At(bt,{entries:yt=>{var M=No(),V=T(M);{var G=j=>{Ee(j,{run:X,content:"Reset",icon:"↻"})};K(V,j=>{e(C)&&j(G)})}var W=r(V,2);yo(W,{toggle_about_dialog:P}),o(yt,M)},children:(yt,M)=>{var V=Lo(),G=T(V),W=m(G),j=m(W);At(j,{entries:at=>{Co(at,{act:A,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(at,Tt)=>{var vt=Do(),R=r(m(vt),2);jt(R,29,()=>e(k),({name:q,icon:tt,position:Z})=>q,(q,tt)=>{let Z=()=>e(tt).name,rt=()=>e(tt).icon,mt=()=>e(tt).position;var wt=Ro(),It=m(wt);At(It,{entries:ht=>{ve(ht,{act:A,get name(){return Z()},get icon(){return rt()},get position(){return mt()}})},children:(ht,zt)=>{Me(ht,{get name(){return Z()},get icon(){return rt()}})},$$slots:{entries:!0,default:!0}}),d(wt),te(1,wt,()=>N,()=>({key:Z()})),te(2,wt,()=>S,()=>({key:Z()})),Re(wt,()=>Fe,null),o(q,wt)}),d(R),d(vt),o(at,vt)},$$slots:{entries:!0,default:!0}});var pt=r(j,2);At(pt,{entries:at=>{Po(at,{act:A,get home_cats(){return e(k)},get adventure_cats(){return e(h)}})},children:(at,Tt)=>{var vt=Mo(),R=r(m(vt),2);jt(R,29,()=>e(h),({name:q,icon:tt,position:Z})=>q,(q,tt)=>{let Z=()=>e(tt).name,rt=()=>e(tt).icon,mt=()=>e(tt).position;var wt=Fo(),It=m(wt);At(It,{entries:ht=>{ve(ht,{act:A,get name(){return Z()},get icon(){return rt()},get position(){return mt()}})},children:(ht,zt)=>{Me(ht,{get name(){return Z()},get icon(){return rt()}})},$$slots:{entries:!0,default:!0}}),d(wt),te(1,wt,()=>N,()=>({key:Z()})),te(2,wt,()=>S,()=>({key:Z()})),Re(wt,()=>Fe,null),o(q,wt)}),d(R),d(vt),o(at,vt)},$$slots:{entries:!0,default:!0}}),d(W),d(G);var _t=r(G,2),Mt=m(_t);Ue(Mt,{summary:at=>{D();var Tt=B("View example source");o(at,Tt)},children:(at,Tt)=>{qt(at,{get content(){return zo}})},$$slots:{summary:!0,default:!0}}),d(_t),o(yt,V)},$$slots:{entries:!0,default:!0}}),o(H,ct)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=r(U,2);{var O=z=>{pn(z,{onclose:()=>a(J,!1),children:(Q,et)=>{var Y=Uo(),H=m(Y),st=r(m(H),8),ct=r(m(st),2);yn(ct,{});var it=r(ct,4);wn(it,{}),d(st),d(H),d(Y),o(Q,Y)},$$slots:{default:!0}})};K(y,z=>{e(J)&&z(O)})}o(s,b),kt()}var Wo=$("<!> <!> <!>",1),Xo=$(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Yo=$("<!> <!>",1);function jo(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name);let i=L(!1),u=L(!1),l=L(!1);var v=nt(),f=T(v);Bt(f,()=>e(c),(F,I)=>{I(F,{scoped:!0,children:(p,g)=>{Rt(p,{children:(x,w)=>{var k=Yo(),h=T(k);Dt(h,{text:"Basic usage"});var C=r(h,2);At(C,{entries:J=>{var P=Wo(),A=T(P);dt(A,{run:()=>void a(i,!e(i)),children:(b,U)=>{D();var y=B("Hello world");o(b,y)},$$slots:{default:!0}});var S=r(A,2);dt(S,{run:()=>void a(u,!e(u)),icon:U=>{D();var y=B("🌞");o(U,y)},children:(U,y)=>{D();var O=B("Hello with an optional icon snippet");o(U,O)},$$slots:{icon:!0,default:!0}});var N=r(S,2);dt(N,{run:()=>void a(l,!e(l)),icon:"🌚",children:(b,U)=>{D();var y=B("Hello with an optional icon string");o(b,y)},$$slots:{default:!0}}),o(J,P)},children:(J,P)=>{var A=Xo(),S=r(m(A),2);{let it=E(()=>`<${e(_)} scoped>
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
...markup without contextmenu behavior...`);qt(S,{get content(){return e(it)}})}var N=r(S,2),b=m(N);let U;var y=m(b);d(b),d(N);var O=r(N,2),z=m(O);let Q;var et=m(z);d(z),d(O);var Y=r(O,2),H=m(Y);let st;var ct=m(H);d(H),d(Y),D(2),d(A),lt((it,bt,Ct)=>{U=gt(b,1,"",null,U,it),xt(y,`greeted = ${e(i)??""}`),Q=gt(z,1,"",null,Q,bt),xt(et,`greeted_icon_snippet = ${e(u)??""}`),st=gt(H,1,"",null,st,Ct),xt(ct,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(J,A)},$$slots:{entries:!0,default:!0}}),o(x,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),kt()}var Vo=$("<span> </span>");function Qt(s,t){const n=Le(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=E(()=>t.size??c);var u=Vo();ke(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[_n]:v}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=m(u,!0);d(u),lt(()=>xt(l,t.glyph)),o(s,u)}var Ko=$('<span class="color_f_5">option f</span>'),Go=$('<span class="color_g_5">option g</span>'),Zo=$('<span class="color_j_5">option j</span>'),Jo=$("<!> <!> <!> <!>",1),Qo=$('<li class="color_error">Error: <code> </code></li>'),ts=$('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),es=$(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),ns=$("<!> <!>",1);function os(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name),i=new ne;let u=L(void 0);const l=E(()=>e(u)?`color_${e(u)}_5`:void 0),v=E(()=>e(u)?`color_${e(u)}`:void 0);var f=nt(),F=T(f);Bt(F,()=>e(c),(I,p)=>{p(I,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Rt(g,{children:(w,k)=>{var h=ns(),C=T(h);Dt(C,{text:"Custom instance"});var X=r(C,2);At(X,{entries:P=>{pe(P,{icon:N=>{D();var b=B("🎨");o(N,b)},menu:N=>{var b=Jo(),U=T(b);dt(U,{run:()=>(a(u,"f"),{ok:!0,close:!1}),children:(Q,et)=>{var Y=Ko();o(Q,Y)},$$slots:{default:!0}});var y=r(U,2);dt(y,{run:()=>(a(u,"g"),{ok:!0,close:!1}),children:(Q,et)=>{var Y=Go();o(Q,Y)},$$slots:{default:!0}});var O=r(y,2);dt(O,{run:()=>(a(u,"j"),{ok:!0,close:!1}),children:(Q,et)=>{var Y=Zo();o(Q,Y)},$$slots:{default:!0}});var z=r(O,2);dt(z,{run:()=>(i.close(),{ok:!0}),children:(Q,et)=>{D();var Y=B("close contextmenu");o(Q,Y)},$$slots:{default:!0}}),o(N,b)},children:(N,b)=>{D();var U=B("select color");o(N,U)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(P,A)=>{var S=es(),N=m(S),b=r(m(N)),U=m(b,!0);d(b),D(5),d(N);var y=r(N,2);qt(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var O=r(y,2);{let W=E(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);qt(O,{get content(){return e(W)}})}var z=r(O,2),Q=r(m(z));Q.textContent="{ok: true, close: false}",D(),d(z);var et=r(z,2),Y=r(m(et),2),H=m(Y),st=r(m(H),2),ct=m(st,!0);d(st),d(H);var it=r(H,2),bt=r(m(it),2),Ct=m(bt);d(bt),d(it);var yt=r(it,2);{var M=W=>{var j=Qo(),pt=r(m(j)),_t=m(pt,!0);d(pt),d(j),lt(()=>xt(_t,i.error)),o(W,j)};K(yt,W=>{i.error&&W(M)})}d(Y),d(et);var V=r(et,2);{var G=W=>{var j=ts(),pt=m(j),_t=m(pt),Mt=m(_t);Qt(Mt,{glyph:"↑"}),d(_t);var Et=r(_t,2),at=m(Et),Tt=m(at);Qt(Tt,{glyph:"←"}),d(at);var vt=r(at,2),R=m(vt);Qt(R,{glyph:"↵"}),d(vt);var q=r(vt,2),tt=m(q);Qt(tt,{glyph:"→"}),d(q),d(Et);var Z=r(Et,2),rt=m(Z);Qt(rt,{glyph:"↓"}),d(Z),d(pt),d(j),lt(()=>{gt(_t,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),_t.disabled=!i.can_select_previous,gt(at,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),at.disabled=!i.can_collapse,gt(vt,1,`border_radius_0 ${e(v)??""}`),vt.disabled=!i.can_activate,gt(q,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),q.disabled=!i.can_expand,gt(Z,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),Z.disabled=!i.can_select_next}),ft("mousedown",_t,mt=>{Pt(mt),i.select_previous()},!0),ft("mousedown",at,mt=>{Pt(mt),i.collapse_selected()},!0),ft("mousedown",vt,async mt=>{Pt(mt),await i.activate_selected()},!0),ft("mousedown",q,mt=>{Pt(mt),i.expand_selected()},!0),ft("mousedown",Z,mt=>{Pt(mt),i.select_next()},!0),te(3,j,()=>gn),o(W,j)};K(V,W=>{i.opened&&W(G)})}d(S),lt(()=>{xt(U,e(_)),gt(et,1,`mb_md ${e(l)??""}`),xt(ct,i.opened),xt(Ct,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(P,S)},$$slots:{entries:!0,default:!0}}),o(w,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),kt()}const ss=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var as=$(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),rs=$("<div><!></div> <!>",1);function is(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=new ne;let i=L(!1),u=L(void 0),l=L("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,F=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,I=E(()=>e(l)===v||e(l)===f||e(l)===F);var p=nt(),g=T(p);Bt(g,()=>e(c),(x,w)=>{w(x,{get contextmenu(){return _},scoped:!0,children:(k,h)=>{Rt(k,{children:(C,X)=>{var J=rs(),P=T(J);let A;var S=m(P);Dt(S,{text:"Select text"}),d(P);var N=r(P,2);At(N,{entries:U=>{dt(U,{run:()=>void a(i,!e(i)),children:(y,O)=>{D();var z=B("Toggle something");o(y,z)},$$slots:{default:!0}})},children:(U,y)=>{var O=as();let z;var Q=m(O),et=r(m(Q),2),Y=r(m(et));Y.__click=[ss,u];let H;D(),d(et),d(Q),Gt(Q,j=>a(u,j),()=>e(u));var st=r(Q,2),ct=m(st);Yt(ct),d(st);var it=r(st,2);let bt;var Ct=r(it,2),yt=m(Ct);an(yt),d(Ct);var M=r(Ct,2),V=m(M);ee(V,{path:"Web/HTML/Global_attributes/contenteditable"}),D(),d(M);var G=r(M,4),W=r(G,4);D(2),d(O),lt((j,pt,_t)=>{z=gt(O,1,"panel p_md",null,z,j),H=gt(Y,1,"",null,H,pt),bt=gt(it,1,"",null,bt,_t)},[()=>({color_g_5:e(I)}),()=>({color_a:e(i)}),()=>({color_g_5:e(I)})]),Ne(ct,()=>e(l),j=>a(l,j)),Ne(yt,()=>e(l),j=>a(l,j)),Oe("innerText",G,()=>e(l),j=>a(l,j)),Oe("innerText",W,()=>e(l),j=>a(l,j)),o(U,O)},$$slots:{entries:!0,default:!0}}),lt(b=>A=gt(P,1,"",null,A,b),[()=>({color_d_5:e(I)})]),o(C,J)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,p),kt()}Vt(["click"]);const ls=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var cs=$('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),us=$('<li>custom "some custom entry" entry</li>'),ds=$('<li>"copy text" entry when text is selected</li>'),_s=$("<li>link entry when clicking on a link</li>"),vs=$("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),ms=$(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),ps=$('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function hs(s,t){$t(t,!0);const n=p=>{var g=cs(),x=m(g),w=r(m(x));w.__click=[ls,I];let k;D(),d(x),Gt(x,X=>a(I,X),()=>e(I));var h=r(x,2),C=r(m(h));D(),d(h),d(g),lt((X,J)=>{k=gt(w,1,"",null,k,X),Ut(C,"href",J)},[()=>({color_h:e(F)}),()=>$n("/")]),o(p,g)},c=Ft.get(),_=E(()=>c.component),i=E(()=>c.name),u=new ne;let l=L(!1),v=L(!1),f=L(!0),F=L(!1),I=L(void 0);Rt(s,{children:(p,g)=>{var x=ps(),w=T(x);Dt(w,{text:"Disable default behaviors"});var k=r(w,4);{let H=E(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);qt(k,{get content(){return e(H)}})}var h=r(k,2),C=m(h),X=m(C);Yt(X);var J=r(X,2),P=r(m(J));P.textContent="link_entry={null}",d(J),d(C);var A=r(C,2),S=m(A);Yt(S);var N=r(S,2),b=r(m(N));b.textContent="text_entry={null}",d(N),d(A),d(h);var U=r(h,2);{let H=E(()=>e(l)?null:void 0),st=E(()=>e(v)?null:void 0);Bt(U,()=>e(_),(ct,it)=>{it(ct,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(H)},get text_entry(){return e(st)},children:(bt,Ct)=>{var yt=nt(),M=T(yt);{var V=W=>{At(W,{entries:pt=>{dt(pt,{icon:">",run:()=>void a(F,!e(F)),children:(_t,Mt)=>{D();var Et=B("some custom entry");o(_t,Et)},$$slots:{default:!0}})},children:(pt,_t)=>{n(pt)},$$slots:{entries:!0,default:!0}})},G=W=>{n(W)};K(M,W=>{e(f)?W(V):W(G,!1)})}o(bt,yt)},$$slots:{default:!0}})})}var y=r(U,4),O=m(y),z=m(O);Yt(z),D(),d(O),d(y);var Q=r(y,2);{var et=H=>{var st=vs(),ct=r(T(st),2),it=m(ct);{var bt=G=>{var W=us();o(G,W)};K(it,G=>{e(f)&&G(bt)})}var Ct=r(it,2);{var yt=G=>{var W=ds();o(G,W)};K(Ct,G=>{e(v)||G(yt)})}var M=r(Ct,2);{var V=G=>{var W=_s();o(G,W)};K(M,G=>{e(l)||G(V)})}d(ct),o(H,st)},Y=H=>{var st=ms();o(H,st)};K(Q,H=>{e(f)||!e(l)||!e(v)?H(et):H(Y,!1)})}ye(X,()=>e(l),H=>a(l,H)),ye(S,()=>e(v),H=>a(v,H)),ye(z,()=>e(f),H=>a(f,H)),o(p,x)},$$slots:{default:!0}}),kt()}Vt(["click"]);var fs=$(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function gs(s,t){$t(t,!0);const n=Ft.get(),c=E(()=>n.component),_=E(()=>n.name);var i=nt(),u=T(i);Bt(u,()=>e(c),(l,v)=>{v(l,{scoped:!0,children:(f,F)=>{Rt(f,{children:(I,p)=>{var g=fs(),x=T(g);Dt(x,{text:"Default behaviors"});var w=r(x,2),k=m(w);{let h=E(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);qt(k,{get content(){return e(h)}})}D(6),d(w),o(I,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),kt()}var xs=$("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function Xs(s,t){$t(t,!0);const c=ln("Contextmenu");Ft.set(),rn(s,{get tome(){return c},children:(_,i)=>{var u=xs(),l=T(u);io(l,{});var v=r(l,2);jo(v,{});var f=r(v,2);gs(f,{});var F=r(f,2);is(F,{});var I=r(F,2);hs(I,{});var p=r(I,2);os(p,{});var g=r(p,2);Bo(g,{});var x=r(g,2);vo(x),D(2),o(_,u)},$$slots:{default:!0}}),kt()}export{Xs as component};
