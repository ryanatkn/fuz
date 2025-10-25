import"../chunks/DsnmJJEf.js";import{C as an,z as rn,af as F,h as e,ae as a,aj as ce,u as P,e as Q,a as S,b as o,g as dt,p as yt,f as k,s as r,d as m,t as lt,b9 as pt,c as wt,r as d,b8 as Vt,ac as B,ad as M,ab as Tt,F as Ht,ba as Rt,bB as ie,bE as ln}from"../chunks/B7qs8f6Z.js";import{T as cn}from"../chunks/BJ5womcE.js";import{g as un}from"../chunks/1kVJUU7R.js";import{s as ft}from"../chunks/D2Z-uHvG.js";import{c as Bt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/DpqcPF0n.js";import{M as oe}from"../chunks/DHzjxUCy.js";import{T as Dt,a as Ft}from"../chunks/Dz6_Q8E0.js";import{e as dn}from"../chunks/36zOYlHh.js";import{a as _n}from"../chunks/B2EI8ygw.js";import{a as ke,b as ht,s as Ut,C as vn,c as ue,d as Ie,r as Yt,S as mn}from"../chunks/C61V10DD.js";import{p as et,r as Le,s as Kt}from"../chunks/C2A3Zqzr.js";import{o as Ae}from"../chunks/BMgspcsU.js";import{a as pn,s as Et,b as He,c as hn,D as fn}from"../chunks/DPmjiu3g.js";import{c as pe,a as be,e as jt}from"../chunks/GCAAGpmM.js";import{i as G}from"../chunks/DHMuHmk0.js";import{P as gn}from"../chunks/B7mkSFrP.js";import{D as Ue,b as Oe}from"../chunks/8X_O05eD.js";import{b as ze,a as Ne,c as ye}from"../chunks/7g2Ar_02.js";import{b as Gt}from"../chunks/2LOYOryH.js";import{t as ne,c as xn,a as Re,s as bn}from"../chunks/DkIYfvB-.js";import{S as yn,g as wn}from"../chunks/B-XuT0zp.js";import{C as $n,T as kn}from"../chunks/twD8klRS.js";import{r as Cn}from"../chunks/DjoGitiQ.js";class Ce{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){Ce.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var Tn=new Ce({box:"border-box"});function de(s,t,n){var c=Tn.observe(s,()=>n(s[t]));an(()=>(rn(()=>n(s[t])),c))}const Sn=Object.freeze({});class qe{#t=F(0);get width(){return e(this.#t)}set width(t){a(this.#t,t,!0)}#e=F(0);get height(){return e(this.#e)}set height(t){a(this.#e,t,!0)}}class En{is_menu=!1;menu;run;disabled;#t=F(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=F(!1);get pending(){return e(this.#e)}set pending(t){a(this.#e,t,!0)}#n=F(null);get error_message(){return e(this.#n)}set error_message(t){a(this.#n,t,!0)}#o=F(null);get promise(){return e(this.#o)}set promise(t){a(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class Pn{is_menu=!0;menu;depth;#t=F(!1);get selected(){return e(this.#t)}set selected(t){a(this.#t,t,!0)}#e=F(ce([]));get items(){return e(this.#e)}set items(t){a(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class In{is_menu=!0;menu=null;depth=1;#t=F(ce([]));get items(){return e(this.#t)}set items(t){a(this.#t,t,!0)}}class se{layout;initial_layout;#t=F(!1);get opened(){return e(this.#t)}set opened(t){a(this.#t,t,!0)}#e=F(0);get x(){return e(this.#e)}set x(t){a(this.#e,t,!0)}#n=F(0);get y(){return e(this.#n)}set y(t){a(this.#n,t,!0)}#o=F(ce([]));get params(){return e(this.#o)}set params(t){a(this.#o,t,!0)}#s=F();get error(){return e(this.#s)}set error(t){a(this.#s,t,!0)}root_menu=new In;#a=F(ce([]));get selections(){return e(this.#a)}set selections(t){a(this.#a,t,!0)}#r=P(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){a(this.#r,t)}#i=P(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){a(this.#i,t)}#l=P(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){a(this.#l,t)}#c=P(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){a(this.#c,t)}#u=P(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){a(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new qe}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(pn(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=we.maybe_get()??this.root_menu,_=new En(c,t,n);return c.items.push(_),Ae(()=>{c.items.length=0}),_}add_submenu(){const t=we.maybe_get()??this.root_menu,n=new Pn(t,t.depth+1);return t.items.push(n),we.set(n),Ae(()=>{t.items.length=0}),n}}const Te="contextmenu",An=`a,[data-${Te}]`,le=new Map;let On=0;const zn=(s,t)=>{if(t==null)return;const n=On+++"";return s.dataset[Te]=n,le.set(n,t),{update:c=>{le.set(n,c)},destroy:()=>{le.delete(n)}}},Nn=17,$e=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:v=!0}=_??Sn,f=Rn(s)?.filter(L=>typeof L=="function"||(L.snippet!=="link"||i)&&(L.snippet!=="text"||u)&&(L.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate(Nn),!0):!1},Rn=s=>{let t=null,n=s,c,_;for(;n=n?.closest(An);){if(c=n.dataset[Te]){if(t??=[],_=le.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},ae=pe(),we=pe(),_e=pe(()=>new qe);function At(s,t){const n=et(t,"tag",3,"span");var c=Q(),_=S(c);dn(_,n,!1,(i,u)=>{_n(i,(f,L)=>zn?.(f,L),()=>t.entries),ke(i,()=>({class:"display_contents",...t.attrs}));var l=Q(),v=S(l);dt(v,()=>t.children),o(u,l)}),o(s,c)}var Dn=k('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function _t(s,t){yt(t,!0);const n=et(t,"disabled",3,!1),c=ae.get(),_=c.add_entry(()=>t.run,()=>n()),i=P(()=>_.selected),u=P(()=>_.pending),l=P(()=>_.error_message),v=P(()=>_.disabled());var f=Dn();let L;f.__click=function(...I){(e(v)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,I)};var O=m(f),p=m(O),g=m(p);{var x=I=>{var z=B();lt(()=>ft(z,t.icon)),o(I,z)},$=I=>{var z=Q(),E=S(z);{var D=b=>{var q=Q(),y=S(q);dt(y,()=>t.icon),o(b,q)};G(E,b=>{t.icon&&b(D)},!0)}o(I,z)};G(g,I=>{typeof t.icon=="string"?I(x):I($,!1)})}d(p);var C=r(p,2),h=m(C);dt(h,()=>t.children),d(C);var T=r(C,2);{var X=I=>{gn(I,{})},J=I=>{var z=Q(),E=S(z);{var D=b=>{var q=B("⚠️");o(b,q)};G(E,b=>{e(l)&&b(D)},!0)}o(I,z)};G(T,I=>{e(u)?I(X):I(J,!1)})}d(O),d(f),lt(I=>{L=ht(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,L,I),Ut(f,"aria-disabled",e(v)),Ut(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(v)})]),pt("mouseenter",f,function(...I){(e(v)?void 0:z=>{Et(z),c.select(_)})?.apply(this,I)}),o(s,f),wt()}Vt(["click"]);var Fn=s=>{s.stopPropagation()},Mn=k('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function Se(s,t){yt(t,!0);const n="🔗",c=et(t,"icon",3,n),_=et(t,"disabled",3,!1),i=ae.get();let u=F(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),v=P(()=>l.selected),f=P(()=>l.disabled()),L=(y,N=location.host)=>{const R=be(be(y,"https://"),"http://");return R.startsWith(N+"/")?be(R,N):R},O=P(()=>L(t.href)),p=P(()=>!(e(O)[0]==="."||e(O)[0]==="/"&&e(O)[1]!=="/")),g=P(()=>e(p)?"noreferrer":void 0);var x=Mn(),$=m(x);let C;$.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},$.__contextmenu=[Fn];var h=m($),T=m(h),X=m(T);{var J=y=>{var N=B();lt(()=>ft(N,c())),o(y,N)},I=y=>{var N=Q(),R=S(N);dt(R,c,()=>n),o(y,N)};G(X,y=>{typeof c()=="string"?y(J):y(I,!1)})}d(T);var z=r(T,2),E=m(z),D=m(E);{var b=y=>{var N=Q(),R=S(N);dt(R,()=>t.children),o(y,N)},q=y=>{var N=B();lt(()=>ft(N,e(O))),o(y,N)};G(D,y=>{t.children?y(b):y(q,!1)})}d(E),d(z),d(h),d($),Gt($,y=>a(u,y),()=>e(u)),d(x),lt(y=>{C=ht($,1,"menu_item plain svelte-1fkm0gl",null,C,y),Ut($,"aria-disabled",e(f)),Ut($,"href",t.href),Ut($,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),pt("mouseenter",$,function(...y){(e(f)?void 0:N=>{Et(N),i.select(l)})?.apply(this,y)}),o(s,x),wt()}Vt(["click","contextmenu"]);function Ee(s,t){_t(s,{get run(){return t.run},icon:c=>{M();var _=B();lt(()=>ft(_,t.icon)),o(c,_)},children:(c,_)=>{M();var i=B();lt(()=>ft(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var Ln=k("<li></li>");function re(s,t){const n=Le(t,["$$slots","$$events","$$legacy"]);var c=Ln();ke(c,()=>({role:"separator","aria-orientation":"vertical",...n,[vn]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const Be=-2,We=-2,Xe=910,Ye=7,Hn=633,Un=21,ve=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!He(s)&&!hn(s),je=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Ve=s=>t=>{const n=s.get(t.key);!n||He(t.target)||(Et(t),n())},Ke=(s,t,n)=>s+Math.min(0,n-(s+t)),Ge=(s,t,n)=>s+Math.min(0,n-(s+t)),qn=(s,t=Tt)=>{Se(s,Kt(t))},Bn=(s,t=Tt)=>{Ee(s,Kt(t))},Wn=(s,t=Tt)=>{re(s,Kt(t))};var Xn=k('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Yn=k('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),jn=k('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Vn=k("<!> <!>  <!>",1);function De(s,t){yt(t,!0);const n=et(t,"contextmenu",19,()=>new se),c=et(t,"open_offset_x",3,Be),_=et(t,"open_offset_y",3,We),i=et(t,"bypass_with_tap_then_longpress",3,!0),u=et(t,"bypass_window",3,Xe),l=et(t,"bypass_move_tolerance",3,Ye),v=et(t,"scoped",3,!1),f=et(t,"link_entry",3,qn),L=et(t,"text_entry",3,Bn),O=et(t,"separator_entry",3,Wn);ae.set(n());let p=F(void 0);const g=P(()=>n().layout),x=P(()=>n().initial_layout),$=P(()=>e(g)===e(x));let C=F(void 0),h=F(void 0);Ht(()=>{!e($)&&e(C)!==void 0&&(e(g).width=e(C))}),Ht(()=>{!e($)&&e(h)!==void 0&&(e(g).height=e(h))});const T=_e.set();Ht(()=>{if(e(p)){const H=e(p).getBoundingClientRect();T.width=H.width,T.height=H.height}});const X=P(()=>Ke(n().x,T.width,e(g).width)),J=P(()=>Ge(n().y,T.height,e(g).height));let I=F(void 0),z=F(void 0),E=F(void 0),D=F(void 0),b=F(void 0);const q=H=>{if(e(D)){a(D,!1),a(E,null),a(I,null),a(z,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{target:Y}=H;ve(Y,H.shiftKey)&&(e(p)?.contains(Y)||$e(Y,H.clientX+c(),H.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:L()!==null,separator_enabled:O()!==null})&&Et(H))},y=H=>{if(!i())return;const{touches:Y,target:Z}=H;if(n().opened||Y.length!==1||!ve(Z,H.shiftKey)){a(E,null),a(I,null),a(z,null),a(D,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}const{clientX:W,clientY:j}=Y[0];if(e(E)!=null&&performance.now()-e(E)<u()&&Math.hypot(W-e(I),j-e(z))<l()){a(D,!0),a(E,null),a(I,null),a(z,null),e(b)!=null&&(clearTimeout(e(b)),a(b,null));return}a(E,performance.now(),!0),a(I,W,!0),a(z,j,!0),e(b)!=null&&clearTimeout(e(b)),a(b,setTimeout(()=>{a(E,null),a(I,null),a(z,null),a(b,null)},u()),!0)},N=()=>{a(E,null),a(I,null),a(z,null),a(D,!1),e(b)!=null&&(clearTimeout(e(b)),a(b,null))},R=H=>{e(p)&&!e(p).contains(H.target)&&n().close()},K=je(n()),tt=Ve(K);var V=Vn();pt("contextmenu",Rt,function(...H){(v()?void 0:q)?.apply(this,H)}),pt("mousedown",Rt,function(...H){(n().opened?R:void 0)?.apply(this,H)}),pt("keydown",Rt,function(...H){(n().opened?tt:void 0)?.apply(this,H)}),pt("touchstart",Rt,function(...H){(v()||!i()?void 0:y)?.apply(this,H)},!0,!0),pt("touchcancel",Rt,function(...H){(v()||!i()?void 0:N)?.apply(this,H)},!0);var U=S(V);{var nt=H=>{var Y=Xn();Y.__contextmenu=q;var Z=m(Y);dt(Z,()=>t.children),d(Y),pt("touchstart",Y,function(...W){(i()?y:void 0)?.apply(this,W)},!0,!0),pt("touchcancel",Y,function(...W){(i()?N:void 0)?.apply(this,W)},!0),o(H,Y)},ct=H=>{var Y=Q(),Z=S(Y);dt(Z,()=>t.children),o(H,Y)};G(U,H=>{v()?H(nt):H(ct,!1)})}var it=r(U,2);{var gt=H=>{var Y=Yn();de(Y,"clientHeight",Z=>a(h,Z)),de(Y,"clientWidth",Z=>a(C,Z)),o(H,Y)};G(it,H=>{e($)||H(gt)})}var $t=r(it,2);{var xt=H=>{var Y=jn();let Z;jt(Y,20,()=>n().params,W=>W,(W,j)=>{var mt=Q(),ut=S(mt);{var zt=rt=>{var kt=Q(),vt=S(kt);dt(vt,()=>j),o(rt,kt)},Pt=rt=>{var kt=Q(),vt=S(kt);{var It=w=>{var A=Q(),at=S(A);dt(at,()=>f()??Tt,()=>j.props),o(w,A)},bt=w=>{var A=Q(),at=S(A);{var ot=Ct=>{var Nt=Q(),St=S(Nt);dt(St,()=>L()??Tt,()=>j.props),o(Ct,Nt)},st=Ct=>{var Nt=Q(),St=S(Nt);{var Zt=Ot=>{var Lt=Q(),Jt=S(Lt);dt(Jt,()=>O()??Tt,()=>j.props),o(Ot,Lt)};G(St,Ot=>{j.snippet==="separator"&&Ot(Zt)},!0)}o(Ct,Nt)};G(at,Ct=>{j.snippet==="text"?Ct(ot):Ct(st,!1)},!0)}o(w,A)};G(vt,w=>{j.snippet==="link"?w(It):w(bt,!1)},!0)}o(rt,kt)};G(ut,rt=>{typeof j=="function"?rt(zt):rt(Pt,!1)})}o(W,mt)}),d(Y),Gt(Y,W=>a(p,W),()=>e(p)),lt(W=>Z=ue(Y,"",Z,W),[()=>({transform:`translate3d(${e(X)??""}px, ${e(J)??""}px, 0)`})]),o(H,Y)};G($t,H=>{n().opened&&H(xt)})}o(s,V),wt()}Vt(["contextmenu"]);const Kn=(s,t=Tt)=>{Se(s,Kt(t))},Gn=(s,t=Tt)=>{Ee(s,Kt(t))},Zn=(s,t=Tt)=>{re(s,Kt(t))};var Jn=k('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),Qn=k('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),to=k('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),eo=k("<!> <!> <!>",1);function no(s,t){yt(t,!0);const n=et(t,"contextmenu",19,()=>new se),c=et(t,"longpress_move_tolerance",3,Un),_=et(t,"longpress_duration",3,Hn),i=et(t,"bypass_with_tap_then_longpress",3,!0),u=et(t,"bypass_window",3,Xe),l=et(t,"bypass_move_tolerance",3,Ye),v=et(t,"open_offset_x",3,Be),f=et(t,"open_offset_y",3,We),L=et(t,"scoped",3,!1),O=et(t,"link_entry",3,Kn),p=et(t,"text_entry",3,Gn),g=et(t,"separator_entry",3,Zn);ae.set(n());let x=F(void 0);const $=P(()=>n().layout),C=P(()=>n().initial_layout),h=P(()=>e($)===e(C));let T=F(void 0),X=F(void 0);Ht(()=>{!e(h)&&e(T)!==void 0&&(e($).width=e(T))}),Ht(()=>{!e(h)&&e(X)!==void 0&&(e($).height=e(X))});const J=_e.set();Ht(()=>{if(e(x)){const w=e(x).getBoundingClientRect();J.width=w.width,J.height=w.height}});const I=P(()=>Ke(n().x,J.width,e($).width)),z=P(()=>Ge(n().y,J.height,e($).height));let E=F(void 0),D=F(void 0),b=F(void 0),q=F(void 0),y=F(void 0),N=F(void 0),R=F(void 0),K=F(!1);const tt=()=>{document.body.classList.add("contextmenu_pending")},V=()=>{document.body.classList.remove("contextmenu_pending")},U=()=>{a(y,!1),e(q)!=null&&(clearTimeout(e(q)),a(q,null)),V()},nt=()=>{a(b,null),a(E,null),a(D,null),a(N,!1),e(R)!=null&&(clearTimeout(e(R)),a(R,null))},ct=()=>{U(),nt()},it=w=>{if(e(N)){nt();return}const{target:A}=w;if(e(y)){if(e(x)?.contains(A))return;ct(),Et(w);return}ve(A,w.shiftKey)&&(e(x)?.contains(A)||$e(A,w.clientX+v(),w.clientY+f(),n(),{link_enabled:O()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})&&(Et(w),ct()))},gt=w=>{a(y,!1),a(K,!1);const{touches:A,target:at}=w;if(n().opened||A.length!==1||!ve(at,w.shiftKey)){ct();return}const{clientX:ot,clientY:st}=A[0];if(i()){if(e(b)!=null&&performance.now()-e(b)<u()&&Math.hypot(ot-e(E),st-e(D))<l()){a(N,!0),a(b,null),a(E,null),a(D,null),e(R)!=null&&(clearTimeout(e(R)),a(R,null));return}a(b,performance.now(),!0),e(R)!=null&&clearTimeout(e(R)),a(R,setTimeout(()=>{nt()},u()),!0)}a(E,ot,!0),a(D,st,!0),tt(),e(q)!=null&&U(),a(q,setTimeout(()=>{a(y,!0),V(),$e(at,e(E)+v(),e(D)+f(),n(),{link_enabled:O()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})},_()),!0)},$t=w=>{if(e(q)==null||n().opened)return;const{touches:A}=w;if(A.length!==1)return;const{clientX:at,clientY:ot}=A[0];if(Math.hypot(at-e(E),ot-e(D))>c()){U();return}w.preventDefault()},xt=w=>{e(q)!=null&&(e(y)&&(Et(w),a(K,!0)),U()),e(N)&&nt()},H=()=>{ct()},Y=w=>{e(K)&&(a(K,!1),w.stopPropagation(),w.preventDefault())},Z=w=>{e(x)&&!e(x).contains(w.target)&&n().close()},W=je(n()),j=Ve(W),mt=w=>{const A={passive:!1,capture:!0},at=ie(w,"touchstart",gt,A),ot=ie(w,"touchmove",$t,A),st=ie(w,"touchend",xt,A),Ct=ie(w,"touchcancel",H,A);return()=>{at(),ot(),st(),Ct()}};var ut=eo();pt("contextmenu",Rt,function(...w){(L()?void 0:it)?.apply(this,w)}),pt("mousedown",Rt,function(...w){(n().opened?Z:void 0)?.apply(this,w)}),pt("keydown",Rt,function(...w){(n().opened?j:void 0)?.apply(this,w)}),Ie(Rt,()=>L()?void 0:mt);var zt=S(ut);{var Pt=w=>{var A=Jn();A.__contextmenu=it;var at=m(A);dt(at,()=>t.children),d(A),Ie(A,()=>mt),o(w,A)},rt=w=>{var A=Q(),at=S(A);dt(at,()=>t.children),o(w,A)};G(zt,w=>{L()?w(Pt):w(rt,!1)})}var kt=r(zt,2);{var vt=w=>{var A=Qn();de(A,"clientHeight",at=>a(X,at)),de(A,"clientWidth",at=>a(T,at)),o(w,A)};G(kt,w=>{e(h)||w(vt)})}var It=r(kt,2);{var bt=w=>{var A=to();let at;jt(A,20,()=>n().params,ot=>ot,(ot,st)=>{var Ct=Q(),Nt=S(Ct);{var St=Ot=>{var Lt=Q(),Jt=S(Lt);dt(Jt,()=>st),o(Ot,Lt)},Zt=Ot=>{var Lt=Q(),Jt=S(Lt);{var Qe=Wt=>{var Qt=Q(),fe=S(Qt);dt(fe,()=>O()??Tt,()=>st.props),o(Wt,Qt)},tn=Wt=>{var Qt=Q(),fe=S(Qt);{var en=Xt=>{var te=Q(),ge=S(te);dt(ge,()=>p()??Tt,()=>st.props),o(Xt,te)},nn=Xt=>{var te=Q(),ge=S(te);{var on=xe=>{var Pe=Q(),sn=S(Pe);dt(sn,()=>g()??Tt,()=>st.props),o(xe,Pe)};G(ge,xe=>{st.snippet==="separator"&&xe(on)},!0)}o(Xt,te)};G(fe,Xt=>{st.snippet==="text"?Xt(en):Xt(nn,!1)},!0)}o(Wt,Qt)};G(Jt,Wt=>{st.snippet==="link"?Wt(Qe):Wt(tn,!1)},!0)}o(Ot,Lt)};G(Nt,Ot=>{typeof st=="function"?Ot(St):Ot(Zt,!1)})}o(ot,Ct)}),d(A),Gt(A,ot=>a(x,ot),()=>e(x)),lt(ot=>at=ue(A,"",at,ot),[()=>({transform:`translate3d(${e(I)??""}px, ${e(z)??""}px, 0)`})]),pt("click",A,Y,!0),o(w,A)};G(It,w=>{n().opened&&w(bt)})}o(s,ut),wt()}Vt(["contextmenu"]);class oo{#t=F();get variant(){return e(this.#t)}set variant(t){a(this.#t,t,!0)}#e=P(()=>this.variant==="standard"?De:no);get component(){return e(this.#e)}set component(t){a(this.#e,t)}#n=P(()=>this.component===De?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){a(this.#n,t)}constructor(t="standard"){this.variant=t}}const Mt=pe(()=>new oo("standard"));var so=k('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Ze(s,t){yt(t,!0);const n=[],c=Mt.get();var _=so(),i=r(m(_),2),u=m(i);Yt(u),u.value=u.__value="standard",M(2),d(i);var l=r(i,2),v=m(l);Yt(v),v.value=v.__value="compat",M(2),d(l),d(_),ze(n,[],u,()=>c.variant,f=>c.variant=f),ze(n,[],v,()=>c.variant,f=>c.variant=f),o(s,_),wt()}var ao=k('<p class="panel p_md">alert B -- also inherits A</p>'),ro=k('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),io=k("<code>navigator.vibrate</code>"),lo=k(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function co(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name);Dt(s,{children:(i,u)=>{var l=lo(),v=S(l);Ft(v,{text:"Introduction"});var f=r(v,2),L=r(m(f),5);oe(L,{path:"Web/API/Element/contextmenu_event"}),M(3),d(f);var O=r(f,4),p=r(m(O)),g=m(p,!0);d(p),M(5),d(O);var x=r(O,2);Bt(x,()=>e(c),(J,I)=>{I(J,{scoped:!0,children:(z,E)=>{At(z,{entries:b=>{_t(b,{run:()=>alert("alert A"),children:(q,y)=>{M();var N=B("alert A");o(q,N)},$$slots:{default:!0}})},children:(b,q)=>{var y=ro(),N=r(m(y),2);At(N,{entries:K=>{_t(K,{run:()=>alert("alert B"),children:(tt,V)=>{M();var U=B("alert B");o(tt,U)},$$slots:{default:!0}})},children:(K,tt)=>{var V=ao();o(K,V)},$$slots:{entries:!0,default:!0}}),d(y),o(b,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var $=r(x,2);Ue($,{summary:I=>{M();var z=B("view code");o(I,z)},children:(I,z)=>{{let E=P(()=>`<${e(_)}>
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
</${e(_)}>`);qt(I,{get content(){return e(E)}})}},$$slots:{summary:!0,default:!0}});var C=r($,14),h=r(m(C),2),T=r(m(h));oe(T,{path:"Web/API/Navigator/vibrate",children:(J,I)=>{var z=io();o(J,z)},$$slots:{default:!0}}),d(h),d(C);var X=r(C,2);Ze(X,{}),lt(()=>ft(g,e(_))),o(i,l)},$$slots:{default:!0}}),wt()}var uo=k('<span class="font_family_mono">contextmenu</span> event',1),_o=k(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, fewer edge cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),vo=k(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),mo=k("<!> <!>",1);function po(s){var t=mo(),n=S(t);Dt(n,{children:(_,i)=>{var u=_o(),l=S(u);Ft(l,{text:"iOS compatibility"});var v=r(l,6),f=r(m(v),2),L=r(m(f));oe(L,{path:"Web/API/Element/contextmenu_event",children:(p,g)=>{var x=uo();M(),o(p,x)},$$slots:{default:!0}}),d(f),M(4),d(v);var O=r(v,6);Ze(O,{}),o(_,u)},$$slots:{default:!0}});var c=r(n,2);Dt(c,{children:(_,i)=>{var u=vo(),l=S(u);Ft(l,{text:"Caveats"});var v=r(l,8),f=r(m(v));oe(f,{path:"Web/API/Element/contextmenu_event"}),M(3),d(v),o(_,u)},$$slots:{default:!0}}),o(s,t)}function ho(s){const t=s-1;return t*t*t+1}function fo(s){return--s*s*s*s*s+1}function Fe(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=z=>Math.sqrt(z)*120,easing:u=ho}=c,l=getComputedStyle(s),v=l.transform==="none"?"":l.transform,[f,L]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,L/=s.clientHeight;var O=go(s),p=s.clientWidth/n.width/O,g=s.clientHeight/n.height/O,x=t.left+t.width*f,$=t.top+t.height*L,C=n.left+n.width*f,h=n.top+n.height*L,T=(x-C)*p,X=($-h)*g,J=t.width/n.width,I=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(T*T+X*X)):i,easing:u,css:(z,E)=>{var D=E*T,b=E*X,q=z+E*J,y=z+E*I;return`transform: ${v} translate(${D}px, ${b}px) scale(${q}, ${y});`}}}function go(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var xo=k('<menu class="pane unstyled svelte-4htxep"><!></menu>'),bo=k('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function he(s,t){yt(t,!0);const n=ae.get(),c=n.add_submenu(),{layout:_}=n,i=P(()=>c.selected);let u=F(void 0);const l=_e.get(),v=_e.set();let f=F(0),L=F(0);Ht(()=>{e(u)&&O(e(u),_,l)});const O=(E,D,b)=>{const{x:q,y,width:N,height:R}=E.getBoundingClientRect();v.width=N,v.height=R;const K=q-e(f),tt=y-e(L),V=K+N+b.width-D.width;if(V<=0)a(f,b.width,!0);else{const U=N-K;U<=0?a(f,-N):U>V?a(f,b.width-V):a(f,U-N)}a(L,Math.min(0,D.height-(tt+R)),!0)};var p=bo();let g;var x=m(p);let $;var C=m(x),h=m(C),T=m(h);dt(T,()=>t.icon??Tt),d(h);var X=r(h,2),J=m(X);dt(J,()=>t.children),d(X),d(C),M(2),d(x);var I=r(x,2);{var z=E=>{var D=xo();let b;var q=m(D);dt(q,()=>t.menu),d(D),Gt(D,y=>a(u,y),()=>e(u)),lt(y=>b=ue(D,"",b,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(L)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(E,D)};G(I,E=>{e(i)&&E(z)})}d(p),lt((E,D)=>{g=ue(p,"",g,E),$=ht(x,1,"menu_item plain selectable svelte-4htxep",null,$,D),Ut(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),pt("mouseenter",x,E=>{Et(E),setTimeout(()=>n.select(c))}),o(s,p),wt()}var yo=k("<!> <!>",1);function me(s,t){yt(t,!0);const n=et(t,"name",3,"Cat"),c=et(t,"icon",3,"😺");he(s,{icon:u=>{M();var l=B();lt(()=>ft(l,c())),o(u,l)},menu:u=>{var l=yo(),v=S(l);_t(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:O=>{var p=Q(),g=S(p);{var x=C=>{var h=B("🏠");o(C,h)},$=C=>{var h=B("🌄");o(C,h)};G(g,C=>{t.position==="adventure"?C(x):C($,!1)})}o(O,p)},children:(O,p)=>{var g=Q(),x=S(g);{var $=h=>{var T=B("go home");o(h,T)},C=h=>{var T=B("go adventure");o(h,T)};G(x,h=>{t.position==="adventure"?h($):h(C,!1)})}o(O,g)},$$slots:{icon:!0,default:!0}});var f=r(v,2);_t(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:O=>{var p=Q(),g=S(p);{var x=C=>{var h=B("🌄");o(C,h)},$=C=>{var h=B("🏠");o(C,h)};G(g,C=>{t.position==="adventure"?C(x):C($,!1)})}o(O,p)},children:(O,p)=>{var g=Q(),x=S(g);{var $=h=>{var T=B("do adventure");o(h,T)},C=h=>{var T=B("be home");o(h,T)};G(x,h=>{t.position==="adventure"?h($):h(C,!1)})}o(O,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{M();var v=B();lt(()=>ft(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),wt()}var wo=k("<!> <!> <!>",1);function $o(s,t){var n=wo(),c=S(n);Se(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{yn(l,{get data(){return wn},size:"var(--icon_size_xs)"})},children:(l,v)=>{M();var f=B("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=r(c,2);re(_,{});var i=r(_,2);_t(i,{get run(){return t.toggle_about_dialog},icon:l=>{M();var v=B("?");o(l,v)},children:(l,v)=>{M();var f=B("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Je=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var ko=k("<!> <!>",1),Co=k("<!> <!>",1),To=k("<!> <!> <!>",1);function So(s,t){yt(t,!0);const n=P(()=>Je(t.adventure_cats));he(s,{icon:i=>{M();var u=B("🏠");o(i,u)},menu:i=>{var u=To(),l=S(u);{var v=p=>{var g=ko(),x=S(g);_t(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{M();var T=B("🐈‍⬛");o(h,T)},children:(h,T)=>{M();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);re($,{}),o(p,g)};G(l,p=>{e(n)&&p(v)})}var f=r(l,2);jt(f,17,()=>t.home_cats,p=>p.name,(p,g)=>{me(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var L=r(f,2);{var O=p=>{var g=Co(),x=S(g);_t(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{M();var T=B("🏠");o(h,T)},children:(h,T)=>{M();var X=B("be");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);_t($,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{M();var T=B("🦋");o(h,T)},children:(h,T)=>{M();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};G(L,p=>{e(n)||p(O)})}o(i,u)},children:(i,u)=>{M();var l=B("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),wt()}var Eo=k("<!> <!>",1),Po=k("<!> <!>",1),Io=k("<!> <!> <!>",1);function Ao(s,t){yt(t,!0);const n=P(()=>Je(t.home_cats));he(s,{icon:i=>{M();var u=B("🌄");o(i,u)},menu:i=>{var u=Io(),l=S(u);{var v=p=>{var g=Eo(),x=S(g);_t(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{M();var T=B("🦋");o(h,T)},children:(h,T)=>{M();var X=B("call");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);re($,{}),o(p,g)};G(l,p=>{e(n)&&p(v)})}var f=r(l,2);jt(f,17,()=>t.adventure_cats,p=>p.name,(p,g)=>{me(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var L=r(f,2);{var O=p=>{var g=Po(),x=S(g);_t(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{M();var T=B("🌄");o(h,T)},children:(h,T)=>{M();var X=B("do");o(h,X)},$$slots:{icon:!0,default:!0}});var $=r(x,2);_t($,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{M();var T=B("🐈‍⬛");o(h,T)},children:(h,T)=>{M();var X=B("leave");o(h,X)},$$slots:{icon:!0,default:!0}}),o(p,g)};G(L,p=>{e(n)||p(O)})}o(i,u)},children:(i,u)=>{M();var l=B("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),wt()}var Oo=k('<span class="icon svelte-y90lnf"> </span>'),zo=k('<span class="name svelte-y90lnf"><!> </span>'),No=k("<span><!><!></span>");function Me(s,t){const n=et(t,"name",3,"Cat"),c=et(t,"icon",3,"😺"),_=et(t,"show_name",3,!0),i=et(t,"show_icon",3,!0);var u=No();let l;var v=m(u);{var f=p=>{var g=Oo(),x=m(g,!0);d(g),lt(()=>ft(x,c())),o(p,g)};G(v,p=>{i()&&p(f)})}var L=r(v);{var O=p=>{var g=zo(),x=m(g);dt(x,()=>t.children??Tt);var $=r(x,1,!0);d(g),lt(()=>ft($,n())),o(p,g)};G(L,p=>{_()&&p(O)})}d(u),lt(p=>l=ht(u,1,"cat svelte-y90lnf",null,l,p),[()=>({"has-icon":i()})]),o(s,u)}const Ro=`<script lang="ts">
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
`;var Do=k("<!> <!>",1),Fo=k('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Mo=k('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Lo=k('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Ho=k('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Uo=k('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),qo=k("<!> <!>",1),Bo=k('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Wo=k("<!> <!>",1);function Xo(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_="Alyssa",i="Ben",u="home";let l=F(u),v=F(u);const f=P(()=>e(l)===e(v)?"😺":"😾"),L=P(()=>e(l)===e(v)?"😸":"😿"),O=P(()=>({name:_,icon:e(f),position:e(l)})),p=P(()=>({name:i,icon:e(L),position:e(v)}));let g=F(!1);const x=(R,K)=>{const tt=[],V=[];for(const U of R){const nt=U.position==="home"?tt:V;K?nt.unshift(U):nt.push(U)}return{home_cats:tt,adventure_cats:V}},$=P(()=>x([e(O),e(p)],e(g))),C=P(()=>e($).home_cats),h=P(()=>e($).adventure_cats),T=P(()=>e(l)!==u||e(v)!==u),X=()=>{a(l,u),a(v,u)};let J=F(!1);const I=()=>{a(J,!e(J))},z=R=>{switch(R.type){case"call_cats_adventure":{a(l,"adventure"),a(v,"adventure");break}case"call_cats_home":{a(l,"home"),a(v,"home");break}case"cat_go_adventure":{R.name===_?a(l,"adventure"):R.name===i&&a(v,"adventure");break}case"cat_go_home":{R.name===_?a(l,"home"):R.name===i&&a(v,"home");break}case"cat_be_or_do":{a(g,!e(g));break}}},[E,D]=xn({fallback:(R,K)=>{const tt=window.getComputedStyle(R),V=tt.transform==="none"?"":tt.transform;return{duration:1500,easing:fo,css:U=>`
					transform: ${V} scale(${U});
					opacity: ${U}
				`}}});var b=Wo(),q=S(b);Bt(q,()=>e(c),(R,K)=>{K(R,{scoped:!0,children:(tt,V)=>{Dt(tt,{children:(U,nt)=>{var ct=qo(),it=S(ct);Ft(it,{text:"Full example"});var gt=r(it,2);At(gt,{entries:xt=>{var H=Do(),Y=S(H);{var Z=j=>{Ee(j,{run:X,content:"Reset",icon:"↻"})};G(Y,j=>{e(T)&&j(Z)})}var W=r(Y,2);$o(W,{toggle_about_dialog:I}),o(xt,H)},children:(xt,H)=>{var Y=Uo(),Z=S(Y),W=m(Z),j=m(W);At(j,{entries:rt=>{So(rt,{act:z,get home_cats(){return e(C)},get adventure_cats(){return e(h)}})},children:(rt,kt)=>{var vt=Mo(),It=r(m(vt),2);jt(It,29,()=>e(C),({name:bt,icon:w,position:A})=>bt,(bt,w)=>{let A=()=>e(w).name,at=()=>e(w).icon,ot=()=>e(w).position;var st=Fo(),Ct=m(st);At(Ct,{entries:St=>{me(St,{act:z,get name(){return A()},get icon(){return at()},get position(){return ot()}})},children:(St,Zt)=>{Me(St,{get name(){return A()},get icon(){return at()}})},$$slots:{entries:!0,default:!0}}),d(st),ne(1,st,()=>D,()=>({key:A()})),ne(2,st,()=>E,()=>({key:A()})),Re(st,()=>Fe,null),o(bt,st)}),d(It),d(vt),o(rt,vt)},$$slots:{entries:!0,default:!0}});var mt=r(j,2);At(mt,{entries:rt=>{Ao(rt,{act:z,get home_cats(){return e(C)},get adventure_cats(){return e(h)}})},children:(rt,kt)=>{var vt=Ho(),It=r(m(vt),2);jt(It,29,()=>e(h),({name:bt,icon:w,position:A})=>bt,(bt,w)=>{let A=()=>e(w).name,at=()=>e(w).icon,ot=()=>e(w).position;var st=Lo(),Ct=m(st);At(Ct,{entries:St=>{me(St,{act:z,get name(){return A()},get icon(){return at()},get position(){return ot()}})},children:(St,Zt)=>{Me(St,{get name(){return A()},get icon(){return at()}})},$$slots:{entries:!0,default:!0}}),d(st),ne(1,st,()=>D,()=>({key:A()})),ne(2,st,()=>E,()=>({key:A()})),Re(st,()=>Fe,null),o(bt,st)}),d(It),d(vt),o(rt,vt)},$$slots:{entries:!0,default:!0}}),d(W),d(Z);var ut=r(Z,2),zt=m(ut);Ue(zt,{summary:rt=>{M();var kt=B("View example source");o(rt,kt)},children:(rt,kt)=>{qt(rt,{get content(){return Ro}})},$$slots:{summary:!0,default:!0}}),d(ut),o(xt,Y)},$$slots:{entries:!0,default:!0}}),o(U,ct)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=r(q,2);{var N=R=>{fn(R,{onclose:()=>a(J,!1),children:(K,tt)=>{var V=Bo(),U=m(V),nt=r(m(U),8),ct=r(m(nt),2);$n(ct,{});var it=r(ct,4);kn(it,{}),d(nt),d(U),d(V),o(K,V)},$$slots:{default:!0}})};G(y,R=>{e(J)&&R(N)})}o(s,b),wt()}var Yo=k("<!> <!> <!>",1),jo=k(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Vo=k("<!> <!>",1);function Ko(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name);let i=F(!1),u=F(!1),l=F(!1);var v=Q(),f=S(v);Bt(f,()=>e(c),(L,O)=>{O(L,{scoped:!0,children:(p,g)=>{Dt(p,{children:(x,$)=>{var C=Vo(),h=S(C);Ft(h,{text:"Basic usage"});var T=r(h,2);At(T,{entries:J=>{var I=Yo(),z=S(I);_t(z,{run:()=>void a(i,!e(i)),children:(b,q)=>{M();var y=B("Hello world");o(b,y)},$$slots:{default:!0}});var E=r(z,2);_t(E,{run:()=>void a(u,!e(u)),icon:q=>{M();var y=B("🌞");o(q,y)},children:(q,y)=>{M();var N=B("Hello with an optional icon snippet");o(q,N)},$$slots:{icon:!0,default:!0}});var D=r(E,2);_t(D,{run:()=>void a(l,!e(l)),icon:"🌚",children:(b,q)=>{M();var y=B("Hello with an optional icon string");o(b,y)},$$slots:{default:!0}}),o(J,I)},children:(J,I)=>{var z=jo(),E=r(m(z),2);{let it=P(()=>`<${e(_)} scoped>
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
...markup without contextmenu behavior...`);qt(E,{get content(){return e(it)}})}var D=r(E,2),b=m(D);let q;var y=m(b);d(b),d(D);var N=r(D,2),R=m(N);let K;var tt=m(R);d(R),d(N);var V=r(N,2),U=m(V);let nt;var ct=m(U);d(U),d(V),M(2),d(z),lt((it,gt,$t)=>{q=ht(b,1,"",null,q,it),ft(y,`greeted = ${e(i)??""}`),K=ht(R,1,"",null,K,gt),ft(tt,`greeted_icon_snippet = ${e(u)??""}`),nt=ht(U,1,"",null,nt,$t),ft(ct,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(J,z)},$$slots:{entries:!0,default:!0}}),o(x,C)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),wt()}var Go=k("<span> </span>");function ee(s,t){const n=Le(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=P(()=>t.size??c);var u=Go();ke(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[mn]:v}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=m(u,!0);d(u),lt(()=>ft(l,t.glyph)),o(s,u)}var Zo=k('<span class="color_f_5">option f</span>'),Jo=k('<span class="color_g_5">option g</span>'),Qo=k('<span class="color_j_5">option j</span>'),ts=k("<!> <!> <!> <!>",1),es=k('<li class="color_error">Error: <code> </code></li>'),ns=k('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),os=k(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),ss=k("<!> <!>",1);function as(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name),i=new se;let u=F(void 0);const l=P(()=>e(u)?`color_${e(u)}_5`:void 0),v=P(()=>e(u)?`color_${e(u)}`:void 0);var f=Q(),L=S(f);Bt(L,()=>e(c),(O,p)=>{p(O,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Dt(g,{children:($,C)=>{var h=ss(),T=S(h);Ft(T,{text:"Custom instance"});var X=r(T,2);At(X,{entries:I=>{he(I,{icon:D=>{M();var b=B("🎨");o(D,b)},menu:D=>{var b=ts(),q=S(b);_t(q,{run:()=>(a(u,"f"),{ok:!0,close:!1}),children:(K,tt)=>{var V=Zo();o(K,V)},$$slots:{default:!0}});var y=r(q,2);_t(y,{run:()=>(a(u,"g"),{ok:!0,close:!1}),children:(K,tt)=>{var V=Jo();o(K,V)},$$slots:{default:!0}});var N=r(y,2);_t(N,{run:()=>(a(u,"j"),{ok:!0,close:!1}),children:(K,tt)=>{var V=Qo();o(K,V)},$$slots:{default:!0}});var R=r(N,2);_t(R,{run:()=>(i.close(),{ok:!0}),children:(K,tt)=>{M();var V=B("close contextmenu");o(K,V)},$$slots:{default:!0}}),o(D,b)},children:(D,b)=>{M();var q=B("select color");o(D,q)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(I,z)=>{var E=os(),D=m(E),b=r(m(D)),q=m(b,!0);d(b),M(5),d(D);var y=r(D,2);qt(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var N=r(y,2);{let W=P(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);qt(N,{get content(){return e(W)}})}var R=r(N,2),K=r(m(R));K.textContent="{ok: true, close: false}",M(),d(R);var tt=r(R,2),V=r(m(tt),2),U=m(V),nt=r(m(U),2),ct=m(nt,!0);d(nt),d(U);var it=r(U,2),gt=r(m(it),2),$t=m(gt);d(gt),d(it);var xt=r(it,2);{var H=W=>{var j=es(),mt=r(m(j)),ut=m(mt,!0);d(mt),d(j),lt(()=>ft(ut,i.error)),o(W,j)};G(xt,W=>{i.error&&W(H)})}d(V),d(tt);var Y=r(tt,2);{var Z=W=>{var j=ns(),mt=m(j),ut=m(mt),zt=m(ut);ee(zt,{glyph:"↑"}),d(ut);var Pt=r(ut,2),rt=m(Pt),kt=m(rt);ee(kt,{glyph:"←"}),d(rt);var vt=r(rt,2),It=m(vt);ee(It,{glyph:"↵"}),d(vt);var bt=r(vt,2),w=m(bt);ee(w,{glyph:"→"}),d(bt),d(Pt);var A=r(Pt,2),at=m(A);ee(at,{glyph:"↓"}),d(A),d(mt),d(j),lt(()=>{ht(ut,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),ut.disabled=!i.can_select_previous,ht(rt,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),rt.disabled=!i.can_collapse,ht(vt,1,`border_radius_0 ${e(v)??""}`),vt.disabled=!i.can_activate,ht(bt,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),bt.disabled=!i.can_expand,ht(A,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),A.disabled=!i.can_select_next}),pt("mousedown",ut,ot=>{Et(ot),i.select_previous()},!0),pt("mousedown",rt,ot=>{Et(ot),i.collapse_selected()},!0),pt("mousedown",vt,async ot=>{Et(ot),await i.activate_selected()},!0),pt("mousedown",bt,ot=>{Et(ot),i.expand_selected()},!0),pt("mousedown",A,ot=>{Et(ot),i.select_next()},!0),ne(3,j,()=>bn),o(W,j)};G(Y,W=>{i.opened&&W(Z)})}d(E),lt(()=>{ft(q,e(_)),ht(tt,1,`mb_md ${e(l)??""}`),ft(ct,i.opened),ft($t,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(I,E)},$$slots:{entries:!0,default:!0}}),o($,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),wt()}const rs=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var is=k(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),ls=k("<div><!></div> <!>",1);function cs(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=new se;let i=F(!1),u=F(void 0),l=F("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,L=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,O=P(()=>e(l)===v||e(l)===f||e(l)===L);var p=Q(),g=S(p);Bt(g,()=>e(c),(x,$)=>{$(x,{get contextmenu(){return _},scoped:!0,children:(C,h)=>{Dt(C,{children:(T,X)=>{var J=ls(),I=S(J);let z;var E=m(I);Ft(E,{text:"Select text"}),d(I);var D=r(I,2);At(D,{entries:q=>{_t(q,{run:()=>void a(i,!e(i)),children:(y,N)=>{M();var R=B("Toggle something");o(y,R)},$$slots:{default:!0}})},children:(q,y)=>{var N=is();let R;var K=m(N),tt=r(m(K),2),V=r(m(tt));V.__click=[rs,u];let U;M(),d(tt),d(K),Gt(K,j=>a(u,j),()=>e(u));var nt=r(K,2),ct=m(nt);Yt(ct),d(nt);var it=r(nt,2);let gt;var $t=r(it,2),xt=m($t);ln(xt),d($t);var H=r($t,2),Y=m(H);oe(Y,{path:"Web/HTML/Global_attributes/contenteditable"}),M(),d(H);var Z=r(H,4),W=r(Z,4);M(2),d(N),lt((j,mt,ut)=>{R=ht(N,1,"panel p_md",null,R,j),U=ht(V,1,"",null,U,mt),gt=ht(it,1,"",null,gt,ut)},[()=>({color_g_5:e(O)}),()=>({color_a:e(i)}),()=>({color_g_5:e(O)})]),Ne(ct,()=>e(l),j=>a(l,j)),Ne(xt,()=>e(l),j=>a(l,j)),Oe("innerText",Z,()=>e(l),j=>a(l,j)),Oe("innerText",W,()=>e(l),j=>a(l,j)),o(q,N)},$$slots:{entries:!0,default:!0}}),lt(b=>z=ht(I,1,"",null,z,b),[()=>({color_d_5:e(O)})]),o(T,J)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,p),wt()}Vt(["click"]);const us=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var ds=k('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),_s=k('<li>custom "some custom entry" entry</li>'),vs=k('<li>"copy text" entry when text is selected</li>'),ms=k("<li>link entry when clicking on a link</li>"),ps=k("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),hs=k(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),fs=k('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function gs(s,t){yt(t,!0);const n=p=>{var g=ds(),x=m(g),$=r(m(x));$.__click=[us,O];let C;M(),d(x),Gt(x,X=>a(O,X),()=>e(O));var h=r(x,2),T=r(m(h));M(),d(h),d(g),lt((X,J)=>{C=ht($,1,"",null,C,X),Ut(T,"href",J)},[()=>({color_h:e(L)}),()=>Cn("/")]),o(p,g)},c=Mt.get(),_=P(()=>c.component),i=P(()=>c.name),u=new se;let l=F(!1),v=F(!1),f=F(!0),L=F(!1),O=F(void 0);Dt(s,{children:(p,g)=>{var x=fs(),$=S(x);Ft($,{text:"Disable default behaviors"});var C=r($,4);{let U=P(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);qt(C,{get content(){return e(U)}})}var h=r(C,2),T=m(h),X=m(T);Yt(X);var J=r(X,2),I=r(m(J));I.textContent="link_entry={null}",d(J),d(T);var z=r(T,2),E=m(z);Yt(E);var D=r(E,2),b=r(m(D));b.textContent="text_entry={null}",d(D),d(z),d(h);var q=r(h,2);{let U=P(()=>e(l)?null:void 0),nt=P(()=>e(v)?null:void 0);Bt(q,()=>e(_),(ct,it)=>{it(ct,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(U)},get text_entry(){return e(nt)},children:(gt,$t)=>{var xt=Q(),H=S(xt);{var Y=W=>{At(W,{entries:mt=>{_t(mt,{icon:">",run:()=>void a(L,!e(L)),children:(ut,zt)=>{M();var Pt=B("some custom entry");o(ut,Pt)},$$slots:{default:!0}})},children:(mt,ut)=>{n(mt)},$$slots:{entries:!0,default:!0}})},Z=W=>{n(W)};G(H,W=>{e(f)?W(Y):W(Z,!1)})}o(gt,xt)},$$slots:{default:!0}})})}var y=r(q,4),N=m(y),R=m(N);Yt(R),M(),d(N),d(y);var K=r(y,2);{var tt=U=>{var nt=ps(),ct=r(S(nt),2),it=m(ct);{var gt=Z=>{var W=_s();o(Z,W)};G(it,Z=>{e(f)&&Z(gt)})}var $t=r(it,2);{var xt=Z=>{var W=vs();o(Z,W)};G($t,Z=>{e(v)||Z(xt)})}var H=r($t,2);{var Y=Z=>{var W=ms();o(Z,W)};G(H,Z=>{e(l)||Z(Y)})}d(ct),o(U,nt)},V=U=>{var nt=hs();o(U,nt)};G(K,U=>{e(f)||!e(l)||!e(v)?U(tt):U(V,!1)})}ye(X,()=>e(l),U=>a(l,U)),ye(E,()=>e(v),U=>a(v,U)),ye(R,()=>e(f),U=>a(f,U)),o(p,x)},$$slots:{default:!0}}),wt()}Vt(["click"]);var xs=k(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function bs(s,t){yt(t,!0);const n=Mt.get(),c=P(()=>n.component),_=P(()=>n.name);var i=Q(),u=S(i);Bt(u,()=>e(c),(l,v)=>{v(l,{scoped:!0,children:(f,L)=>{Dt(f,{children:(O,p)=>{var g=xs(),x=S(g);Ft(x,{text:"Default behaviors"});var $=r(x,2),C=m($);{let h=P(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);qt(C,{get content(){return e(h)}})}M(6),d($),o(O,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),wt()}var ys=k("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function js(s,t){yt(t,!0);const c=un("Contextmenu");Mt.set(),cn(s,{get tome(){return c},children:(_,i)=>{var u=ys(),l=S(u);co(l,{});var v=r(l,2);Ko(v,{});var f=r(v,2);bs(f,{});var L=r(f,2);cs(L,{});var O=r(L,2);gs(O,{});var p=r(O,2);as(p,{});var g=r(p,2);Xo(g,{});var x=r(g,2);po(x),M(2),o(_,u)},$$slots:{default:!0}}),wt()}export{js as component};
