import"../chunks/DsnmJJEf.js";import{C as Ve,z as Ge,af as U,h as e,ae as c,aj as se,u as S,e as et,a as C,b as o,g as pt,p as $t,f as w,s as a,d as p,t as lt,b9 as rt,c as kt,r as _,b8 as jt,ac as B,ad as D,ab as Tt,F as Ht,ba as It,bE as Ke}from"../chunks/B7qs8f6Z.js";import{T as Ze}from"../chunks/0KIecgQx.js";import{g as Je}from"../chunks/BNnkT_Sb.js";import{s as bt}from"../chunks/D2Z-uHvG.js";import{c as Wt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/D6MOtcoF.js";import{M as Jt}from"../chunks/DTVHvbJH.js";import{T as Rt,a as Dt}from"../chunks/Cxml6FAA.js";import{e as Qe}from"../chunks/36zOYlHh.js";import{a as tn}from"../chunks/DQ_KS0MJ.js";import{a as ge,b as xt,s as Ut,C as en,c as ae,r as Bt,S as nn}from"../chunks/RztL3XFC.js";import{p as nt,r as Oe,s as Yt}from"../chunks/C2A3Zqzr.js";import{o as ke}from"../chunks/BMgspcsU.js";import{a as on,s as At,b as ze,c as sn,D as an}from"../chunks/BHOd2aBW.js";import{c as ue,a as me,e as Xt}from"../chunks/GCAAGpmM.js";import{i as V}from"../chunks/DHMuHmk0.js";import{P as rn}from"../chunks/DQ8BTRL9.js";import{D as Ne,b as Ce}from"../chunks/DBElEuOP.js";import{b as Te,a as Ee,c as pe}from"../chunks/7g2Ar_02.js";import{b as Vt}from"../chunks/2LOYOryH.js";import{t as Zt,c as ln,a as Se,s as cn}from"../chunks/DkIYfvB-.js";import{S as un,g as dn}from"../chunks/D1VJQj3M.js";import{C as _n,T as vn}from"../chunks/YS9TCVCR.js";import{r as mn}from"../chunks/Syl2ndIS.js";class xe{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var l=this.#t.get(t)||new Set;return l.add(n),this.#t.set(t,l),this.#o().observe(t,this.#n),()=>{var d=this.#t.get(t);d.delete(n),d.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){xe.entries.set(n.target,n);for(var l of this.#t.get(n.target)||[])l(n)}}))}}var pn=new xe({box:"border-box"});function re(s,t,n){var l=pn.observe(s,()=>n(s[t]));Ve(()=>(Ge(()=>n(s[t])),l))}const hn=Object.freeze({});class Re{#t=U(0);get width(){return e(this.#t)}set width(t){c(this.#t,t,!0)}#e=U(0);get height(){return e(this.#e)}set height(t){c(this.#e,t,!0)}}class fn{is_menu=!1;menu;run;disabled;#t=U(!1);get selected(){return e(this.#t)}set selected(t){c(this.#t,t,!0)}#e=U(!1);get pending(){return e(this.#e)}set pending(t){c(this.#e,t,!0)}#n=U(null);get error_message(){return e(this.#n)}set error_message(t){c(this.#n,t,!0)}#o=U(null);get promise(){return e(this.#o)}set promise(t){c(this.#o,t,!0)}constructor(t,n,l=()=>!1){this.menu=t,this.run=n,this.disabled=l}}class gn{is_menu=!0;menu;depth;#t=U(!1);get selected(){return e(this.#t)}set selected(t){c(this.#t,t,!0)}#e=U(se([]));get items(){return e(this.#e)}set items(t){c(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class xn{is_menu=!0;menu=null;depth=1;#t=U(se([]));get items(){return e(this.#t)}set items(t){c(this.#t,t,!0)}}class Qt{layout;initial_layout;#t=U(!1);get opened(){return e(this.#t)}set opened(t){c(this.#t,t,!0)}#e=U(0);get x(){return e(this.#e)}set x(t){c(this.#e,t,!0)}#n=U(0);get y(){return e(this.#n)}set y(t){c(this.#n,t,!0)}#o=U(se([]));get params(){return e(this.#o)}set params(t){c(this.#o,t,!0)}#s=U();get error(){return e(this.#s)}set error(t){c(this.#s,t,!0)}root_menu=new xn;#a=U(se([]));get selections(){return e(this.#a)}set selections(t){c(this.#a,t,!0)}#r=S(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){c(this.#r,t)}#i=S(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){c(this.#i,t)}#l=S(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){c(this.#l,t)}#c=S(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){c(this.#c,t)}#u=S(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){c(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new Re}open(t,n,l){this.selections.length=0,this.opened=!0,this.x=n,this.y=l,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(l){const d=typeof l?.message=="string"?l.message:void 0;t.error_message=d??"unknown error",this.error=d}if(on(n)){t.pending=!0,t.error_message=null;const l=t.promise=n.then(d=>{if(l===t.promise){if(typeof d?.ok=="boolean")if(d.ok)d.close!==!1&&this.close();else{const r=typeof d.message=="string"?d.message:void 0;t.error_message=r??"unknown error",this.error=r}else this.close();return d}},d=>{if(l!==t.promise)return;const r=typeof d?.message=="string"?d.message:void 0;t.error_message=r??"unknown error",this.error=r}).finally(()=>{l===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const l=typeof n.message=="string"?n.message:void 0;t.error_message=l??"unknown error",this.error=l}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const l of this.selections)l.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const l=he.maybe_get()??this.root_menu,d=new fn(l,t,n);return l.items.push(d),ke(()=>{l.items.length=0}),d}add_submenu(){const t=he.maybe_get()??this.root_menu,n=new gn(t,t.depth+1);return t.items.push(n),he.set(n),ke(()=>{t.items.length=0}),n}}const be="contextmenu",bn=`a,[data-${be}]`,oe=new Map;let yn=0;const wn=(s,t)=>{if(t==null)return;const n=yn+++"";return s.dataset[be]=n,oe.set(n,t),{update:l=>{oe.set(n,l)},destroy:()=>{oe.delete(n)}}},$n=17,fe=(s,t,n,l,d)=>{const{link_enabled:r=!0,text_enabled:u=!0,separator_enabled:i=!0,vibrate:v=!0}=d??hn,f=kn(s)?.filter(I=>typeof I=="function"||(I.snippet!=="link"||r)&&(I.snippet!=="text"||u)&&(I.snippet!=="separator"||i));return f?.length?(l.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate($n),!0):!1},kn=s=>{let t=null,n=s,l,d;for(;n=n?.closest(bn);){if(l=n.dataset[be]){if(t??=[],d=oe.get(l),d===void 0)continue;Array.isArray(d)?(t??=[]).push(...d):(t??=[]).push(d)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const r=window.getSelection()?.toString();r&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(r)}}})}return t},te=ue(),he=ue(),ie=ue(()=>new Re);function Nt(s,t){const n=nt(t,"tag",3,"span");var l=et(),d=C(l);Qe(d,n,!1,(r,u)=>{tn(r,(f,I)=>wn?.(f,I),()=>t.entries),ge(r,()=>({class:"display_contents",...t.attrs}));var i=et(),v=C(i);pt(v,()=>t.children),o(u,i)}),o(s,l)}var Cn=w('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function ht(s,t){$t(t,!0);const n=nt(t,"disabled",3,!1),l=te.get(),d=l.add_entry(()=>t.run,()=>n()),r=S(()=>d.selected),u=S(()=>d.pending),i=S(()=>d.error_message),v=S(()=>d.disabled());var f=Cn();let I;f.__click=function(...A){(e(v)?void 0:()=>{setTimeout(()=>l.activate(d))})?.apply(this,A)};var P=p(f),m=p(P),g=p(m);{var x=A=>{var O=B();lt(()=>bt(O,t.icon)),o(A,O)},y=A=>{var O=et(),z=C(O);{var N=T=>{var M=et(),b=C(M);pt(b,()=>t.icon),o(T,M)};V(z,T=>{t.icon&&T(N)},!0)}o(A,O)};V(g,A=>{typeof t.icon=="string"?A(x):A(y,!1)})}_(m);var $=a(m,2),h=p($);pt(h,()=>t.children),_($);var k=a($,2);{var j=A=>{rn(A,{})},J=A=>{var O=et(),z=C(O);{var N=T=>{var M=B("⚠️");o(T,M)};V(z,T=>{e(i)&&T(N)},!0)}o(A,O)};V(k,A=>{e(u)?A(j):A(J,!1)})}_(P),_(f),lt(A=>{I=xt(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,I,A),Ut(f,"aria-disabled",e(v)),Ut(f,"title",e(i)?`Error: ${e(i)}`:void 0)},[()=>({selected:e(r),disabled:e(v)})]),rt("mouseenter",f,function(...A){(e(v)?void 0:O=>{At(O),l.select(d)})?.apply(this,A)}),o(s,f),kt()}jt(["click"]);var Tn=s=>{s.stopPropagation()},En=w('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function ye(s,t){$t(t,!0);const n="🔗",l=nt(t,"icon",3,n),d=nt(t,"disabled",3,!1),r=te.get();let u=U(void 0);const i=r.add_entry(()=>()=>{e(u)&&e(u).click()},()=>d()),v=S(()=>i.selected),f=S(()=>i.disabled()),I=(b,R=location.host)=>{const L=me(me(b,"https://"),"http://");return L.startsWith(R+"/")?me(L,R):L},P=S(()=>I(t.href)),m=S(()=>!(e(P)[0]==="."||e(P)[0]==="/"&&e(P)[1]!=="/")),g=S(()=>e(m)?"noreferrer":void 0);var x=En(),y=p(x);let $;y.__click=function(...b){(e(f)?void 0:()=>r.close())?.apply(this,b)},y.__contextmenu=[Tn];var h=p(y),k=p(h),j=p(k);{var J=b=>{var R=B();lt(()=>bt(R,l())),o(b,R)},A=b=>{var R=et(),L=C(R);pt(L,l,()=>n),o(b,R)};V(j,b=>{typeof l()=="string"?b(J):b(A,!1)})}_(k);var O=a(k,2),z=p(O),N=p(z);{var T=b=>{var R=et(),L=C(R);pt(L,()=>t.children),o(b,R)},M=b=>{var R=B();lt(()=>bt(R,e(P))),o(b,R)};V(N,b=>{t.children?b(T):b(M,!1)})}_(z),_(O),_(h),_(y),Vt(y,b=>c(u,b),()=>e(u)),_(x),lt(b=>{$=xt(y,1,"menu_item plain svelte-1fkm0gl",null,$,b),Ut(y,"aria-disabled",e(f)),Ut(y,"href",t.href),Ut(y,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),rt("mouseenter",y,function(...b){(e(f)?void 0:R=>{At(R),r.select(i)})?.apply(this,b)}),o(s,x),kt()}jt(["click","contextmenu"]);function we(s,t){ht(s,{get run(){return t.run},icon:l=>{D();var d=B();lt(()=>bt(d,t.icon)),o(l,d)},children:(l,d)=>{D();var r=B();lt(()=>bt(r,t.content)),o(l,r)},$$slots:{icon:!0,default:!0}})}var Sn=w("<li></li>");function ee(s,t){const n=Oe(t,["$$slots","$$events","$$legacy"]);var l=Sn();ge(l,()=>({role:"separator","aria-orientation":"vertical",...n,[en]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,l)}const De=-2,Fe=-2,Me=660,Le=7,Pn=633,An=21,le=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!ze(s)&&!sn(s),He=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Ue=s=>t=>{const n=s.get(t.key);!n||ze(t.target)||(At(t),n())},qe=(s,t,n)=>s+Math.min(0,n-(s+t)),We=(s,t,n)=>s+Math.min(0,n-(s+t)),In=(s,t=Tt)=>{ye(s,Yt(t))},On=(s,t=Tt)=>{we(s,Yt(t))},zn=(s,t=Tt)=>{ee(s,Yt(t))};var Nn=w('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Rn=w('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),Dn=w('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Fn=w("<!> <!>  <!>",1);function Pe(s,t){$t(t,!0);const n=nt(t,"contextmenu",19,()=>new Qt),l=nt(t,"open_offset_x",3,De),d=nt(t,"open_offset_y",3,Fe),r=nt(t,"bypass_with_tap_then_longpress",3,!0),u=nt(t,"tap_then_longpress_duration",3,Me),i=nt(t,"tap_then_longpress_move_tolerance",3,Le),v=nt(t,"scoped",3,!1),f=nt(t,"link_entry",3,In),I=nt(t,"text_entry",3,On),P=nt(t,"separator_entry",3,zn);te.set(n());let m=U(void 0);const g=S(()=>n().layout),x=S(()=>n().initial_layout),y=S(()=>e(g)===e(x));let $=U(void 0),h=U(void 0);Ht(()=>{!e(y)&&e($)!==void 0&&(e(g).width=e($))}),Ht(()=>{!e(y)&&e(h)!==void 0&&(e(g).height=e(h))});const k=ie.set();Ht(()=>{if(e(m)){const F=e(m).getBoundingClientRect();k.width=F.width,k.height=F.height}});const j=S(()=>qe(n().x,k.width,e(g).width)),J=S(()=>We(n().y,k.height,e(g).height));let A=U(void 0),O=U(void 0),z=U(void 0),N=U(void 0);const T=F=>{if(e(N)){c(N,!1);return}const{target:H}=F;le(H,F.shiftKey)&&(e(m)?.contains(H)||fe(H,F.clientX+l(),F.clientY+d(),n(),{link_enabled:f()!==null,text_enabled:I()!==null,separator_enabled:P()!==null})&&At(F))},M=F=>{if(!r())return;const{touches:H,target:K}=F;if(n().opened||H.length!==1||!le(K,F.shiftKey)){c(z,void 0),c(A,void 0),c(O,void 0);return}const{clientX:ot,clientY:tt}=H[0];if(e(z)!==void 0&&performance.now()-e(z)<u()&&Math.hypot(ot-e(A),tt-e(O))<i()){c(N,!0),c(z,void 0),c(A,void 0),c(O,void 0);return}c(z,performance.now(),!0),c(A,ot,!0),c(O,tt,!0)},b=()=>{c(z,void 0),c(A,void 0),c(O,void 0),c(N,!1)},R=F=>{e(m)&&!e(m).contains(F.target)&&n().close()},L=He(n()),G=Ue(L);var q=Fn();rt("contextmenu",It,function(...F){(v()?void 0:T)?.apply(this,F)}),rt("mousedown",It,function(...F){(n().opened?R:void 0)?.apply(this,F)}),rt("keydown",It,function(...F){(n().opened?G:void 0)?.apply(this,F)}),rt("touchstart",It,function(...F){(v()||!r()?void 0:M)?.apply(this,F)},!0,!0),rt("touchcancel",It,function(...F){(v()||!r()?void 0:b)?.apply(this,F)},!0);var X=C(q);{var Y=F=>{var H=Nn();H.__contextmenu=T;var K=p(H);pt(K,()=>t.children),_(H),rt("touchstart",H,function(...ot){(r()?M:void 0)?.apply(this,ot)},!0,!0),rt("touchcancel",H,function(...ot){(r()?b:void 0)?.apply(this,ot)},!0),o(F,H)},it=F=>{var H=et(),K=C(H);pt(K,()=>t.children),o(F,H)};V(X,F=>{v()?F(Y):F(it,!1)})}var vt=a(X,2);{var ut=F=>{var H=Rn();re(H,"clientHeight",K=>c(h,K)),re(H,"clientWidth",K=>c($,K)),o(F,H)};V(vt,F=>{e(y)||F(ut)})}var ft=a(vt,2);{var yt=F=>{var H=Dn();let K;Xt(H,20,()=>n().params,ot=>ot,(ot,tt)=>{var Q=et(),E=C(Q);{var W=at=>{var Z=et(),Et=C(Z);pt(Et,()=>tt),o(at,Z)},mt=at=>{var Z=et(),Et=C(Z);{var gt=dt=>{var ct=et(),st=C(ct);pt(st,()=>f()??Tt,()=>tt.props),o(dt,ct)},Ot=dt=>{var ct=et(),st=C(ct);{var St=_t=>{var Ct=et(),zt=C(Ct);pt(zt,()=>I()??Tt,()=>tt.props),o(_t,Ct)},wt=_t=>{var Ct=et(),zt=C(Ct);{var Pt=Lt=>{var ne=et(),Mt=C(ne);pt(Mt,()=>P()??Tt,()=>tt.props),o(Lt,ne)};V(zt,Lt=>{tt.snippet==="separator"&&Lt(Pt)},!0)}o(_t,Ct)};V(st,_t=>{tt.snippet==="text"?_t(St):_t(wt,!1)},!0)}o(dt,ct)};V(Et,dt=>{tt.snippet==="link"?dt(gt):dt(Ot,!1)},!0)}o(at,Z)};V(E,at=>{typeof tt=="function"?at(W):at(mt,!1)})}o(ot,Q)}),_(H),Vt(H,ot=>c(m,ot),()=>e(m)),lt(ot=>K=ae(H,"",K,ot),[()=>({transform:`translate3d(${e(j)??""}px, ${e(J)??""}px, 0)`})]),o(F,H)};V(ft,F=>{n().opened&&F(yt)})}o(s,q),kt()}jt(["contextmenu"]);const Mn=(s,t=Tt)=>{ye(s,Yt(t))},Ln=(s,t=Tt)=>{we(s,Yt(t))},Hn=(s,t=Tt)=>{ee(s,Yt(t))};var Un=w('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),qn=w('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Wn=w('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Bn=w("<!> <!> <!>",1);function Xn(s,t){$t(t,!0);const n=nt(t,"contextmenu",19,()=>new Qt),l=nt(t,"longpress_move_tolerance",3,An),d=nt(t,"longpress_duration",3,Pn),r=nt(t,"bypass_with_tap_then_longpress",3,!0),u=nt(t,"tap_then_longpress_duration",3,Me),i=nt(t,"tap_then_longpress_move_tolerance",3,Le),v=nt(t,"open_offset_x",3,De),f=nt(t,"open_offset_y",3,Fe),I=nt(t,"scoped",3,!1),P=nt(t,"link_entry",3,Mn),m=nt(t,"text_entry",3,Ln),g=nt(t,"separator_entry",3,Hn);te.set(n());let x=U(void 0);const y=S(()=>n().layout),$=S(()=>n().initial_layout),h=S(()=>e(y)===e($));let k=U(void 0),j=U(void 0);Ht(()=>{!e(h)&&e(k)!==void 0&&(e(y).width=e(k))}),Ht(()=>{!e(h)&&e(j)!==void 0&&(e(y).height=e(j))});const J=ie.set();Ht(()=>{if(e(x)){const E=e(x).getBoundingClientRect();J.width=E.width,J.height=E.height}});const A=S(()=>qe(n().x,J.width,e(y).width)),O=S(()=>We(n().y,J.height,e(y).height));let z=U(void 0),N=U(void 0),T=U(void 0),M=U(void 0),b=U(void 0),R=U(void 0);const L=()=>{c(b,!1),e(M)!=null&&(clearTimeout(e(M)),c(M,null),c(T,null),c(z,null),c(N,null),c(R,!1))},G=E=>{if(e(R)){c(R,!1);return}if(e(b)){L(),At(E);return}const{target:W}=E;le(W,E.shiftKey)&&(e(x)?.contains(W)||fe(W,E.clientX+v(),E.clientY+f(),n(),{link_enabled:P()!==null,text_enabled:m()!==null,separator_enabled:g()!==null})&&(At(E),L()))},q=E=>{c(b,!1);const{touches:W,target:mt}=E;if(n().opened||W.length!==1||!le(mt,E.shiftKey)){c(T,null),c(z,null),c(N,null);return}const{clientX:at,clientY:Z}=W[0];if(r()){if(e(T)!=null&&performance.now()-e(T)<u()&&Math.hypot(at-e(z),Z-e(N))<i()){c(R,!0),c(T,null);return}c(T,performance.now(),!0)}c(z,at,!0),c(N,Z,!0),e(M)!=null&&L(),c(M,setTimeout(()=>{c(b,!0),fe(mt,e(z)+v(),e(N)+f(),n(),{link_enabled:P()!==null,text_enabled:m()!==null,separator_enabled:g()!==null})},d()),!0)},X=E=>{if(e(M)==null)return;const{touches:W}=E;if(W.length!==1)return;const{clientX:mt,clientY:at}=W[0];Math.hypot(mt-e(z),at-e(N))>l()&&(n().opened&&n().close(),L())},Y=E=>{e(M)!=null&&(e(b)&&At(E),L())},it=E=>{e(x)&&!e(x).contains(E.target)&&n().close()},vt=He(n()),ut=Ue(vt);var ft=Bn();rt("contextmenu",It,function(...E){(I()?void 0:G)?.apply(this,E)}),rt("touchstart",It,function(...E){(I()?void 0:q)?.apply(this,E)},!0,!0),rt("touchmove",It,function(...E){(I()?void 0:X)?.apply(this,E)},!0,!0),rt("touchend",It,function(...E){(I()?void 0:Y)?.apply(this,E)},!0),rt("touchcancel",It,function(...E){(I()?void 0:Y)?.apply(this,E)},!0),rt("mousedown",It,function(...E){(n().opened?it:void 0)?.apply(this,E)}),rt("keydown",It,function(...E){(n().opened?ut:void 0)?.apply(this,E)});var yt=C(ft);{var F=E=>{var W=Un();W.__contextmenu=G;var mt=p(W);pt(mt,()=>t.children),_(W),rt("touchstart",W,q,!0,!0),rt("touchmove",W,X,!0,!0),rt("touchend",W,Y,!0),rt("touchcancel",W,Y,!0),o(E,W)},H=E=>{var W=et(),mt=C(W);pt(mt,()=>t.children),o(E,W)};V(yt,E=>{I()?E(F):E(H,!1)})}var K=a(yt,2);{var ot=E=>{var W=qn();re(W,"clientHeight",mt=>c(j,mt)),re(W,"clientWidth",mt=>c(k,mt)),o(E,W)};V(K,E=>{e(h)||E(ot)})}var tt=a(K,2);{var Q=E=>{var W=Wn();let mt;Xt(W,20,()=>n().params,at=>at,(at,Z)=>{var Et=et(),gt=C(Et);{var Ot=ct=>{var st=et(),St=C(st);pt(St,()=>Z),o(ct,st)},dt=ct=>{var st=et(),St=C(st);{var wt=Ct=>{var zt=et(),Pt=C(zt);pt(Pt,()=>P()??Tt,()=>Z.props),o(Ct,zt)},_t=Ct=>{var zt=et(),Pt=C(zt);{var Lt=Mt=>{var Gt=et(),_e=C(Gt);pt(_e,()=>m()??Tt,()=>Z.props),o(Mt,Gt)},ne=Mt=>{var Gt=et(),_e=C(Gt);{var je=ve=>{var $e=et(),Ye=C($e);pt(Ye,()=>g()??Tt,()=>Z.props),o(ve,$e)};V(_e,ve=>{Z.snippet==="separator"&&ve(je)},!0)}o(Mt,Gt)};V(Pt,Mt=>{Z.snippet==="text"?Mt(Lt):Mt(ne,!1)},!0)}o(Ct,zt)};V(St,Ct=>{Z.snippet==="link"?Ct(wt):Ct(_t,!1)},!0)}o(ct,st)};V(gt,ct=>{typeof Z=="function"?ct(Ot):ct(dt,!1)})}o(at,Et)}),_(W),Vt(W,at=>c(x,at),()=>e(x)),lt(at=>mt=ae(W,"",mt,at),[()=>({transform:`translate3d(${e(A)??""}px, ${e(O)??""}px, 0)`})]),o(E,W)};V(tt,E=>{n().opened&&E(Q)})}o(s,ft),kt()}jt(["contextmenu"]);class jn{#t=U();get variant(){return e(this.#t)}set variant(t){c(this.#t,t,!0)}#e=S(()=>this.variant==="standard"?Pe:Xn);get component(){return e(this.#e)}set component(t){c(this.#e,t)}#n=S(()=>this.component===Pe?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){c(this.#n,t)}constructor(t="standard"){this.variant=t}}const Ft=ue(()=>new jn("standard"));var Yn=w('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Be(s,t){$t(t,!0);const n=[],l=Ft.get();var d=Yn(),r=a(p(d),2),u=p(r);Bt(u),u.value=u.__value="standard",D(2),_(r);var i=a(r,2),v=p(i);Bt(v),v.value=v.__value="compat",D(2),_(i),_(d),Te(n,[],u,()=>l.variant,f=>l.variant=f),Te(n,[],v,()=>l.variant,f=>l.variant=f),o(s,d),kt()}var Vn=w('<p class="panel p_md">alert B -- also inherits A</p>'),Gn=w('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),Kn=w("<code>navigator.vibrate</code>"),Zn=w(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function Jn(s,t){$t(t,!0);const n=Ft.get(),l=S(()=>n.component),d=S(()=>n.name);Rt(s,{children:(r,u)=>{var i=Zn(),v=C(i);Dt(v,{text:"Introduction"});var f=a(v,2),I=a(p(f),5);Jt(I,{path:"Web/API/Element/contextmenu_event"}),D(3),_(f);var P=a(f,4),m=a(p(P)),g=p(m,!0);_(m),D(5),_(P);var x=a(P,2);Wt(x,()=>e(l),(J,A)=>{A(J,{scoped:!0,children:(O,z)=>{Nt(O,{entries:T=>{ht(T,{run:()=>alert("alert A"),children:(M,b)=>{D();var R=B("alert A");o(M,R)},$$slots:{default:!0}})},children:(T,M)=>{var b=Gn(),R=a(p(b),2);Nt(R,{entries:G=>{ht(G,{run:()=>alert("alert B"),children:(q,X)=>{D();var Y=B("alert B");o(q,Y)},$$slots:{default:!0}})},children:(G,q)=>{var X=Vn();o(G,X)},$$slots:{entries:!0,default:!0}}),_(b),o(T,b)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var y=a(x,2);Ne(y,{summary:A=>{D();var O=B("view code");o(A,O)},children:(A,O)=>{{let z=S(()=>`<${e(d)}>
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
</${e(d)}>`);qt(A,{get content(){return e(z)}})}},$$slots:{summary:!0,default:!0}});var $=a(y,14),h=a(p($),2),k=a(p(h));Jt(k,{path:"Web/API/Navigator/vibrate",children:(J,A)=>{var O=Kn();o(J,O)},$$slots:{default:!0}}),_(h),_($);var j=a($,2);Be(j,{}),lt(()=>bt(g,e(d))),o(r,i)},$$slots:{default:!0}}),kt()}var Qn=w('<span class="font_family_mono">contextmenu</span> event',1),to=w(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, fewer edge cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>the contextmenu closes if you move past a threshold without lifting the longpress touch that
			opened it</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),eo=w(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),no=w("<!> <!>",1);function oo(s){var t=no(),n=C(t);Rt(n,{children:(d,r)=>{var u=to(),i=C(u);Dt(i,{text:"iOS compatibility"});var v=a(i,6),f=a(p(v),2),I=a(p(f));Jt(I,{path:"Web/API/Element/contextmenu_event",children:(m,g)=>{var x=Qn();D(),o(m,x)},$$slots:{default:!0}}),_(f),D(4),_(v);var P=a(v,6);Be(P,{}),o(d,u)},$$slots:{default:!0}});var l=a(n,2);Rt(l,{children:(d,r)=>{var u=eo(),i=C(u);Dt(i,{text:"Caveats"});var v=a(i,8),f=a(p(v));Jt(f,{path:"Web/API/Element/contextmenu_event"}),D(3),_(v),o(d,u)},$$slots:{default:!0}}),o(s,t)}function so(s){const t=s-1;return t*t*t+1}function ao(s){return--s*s*s*s*s+1}function Ae(s,{from:t,to:n},l={}){var{delay:d=0,duration:r=O=>Math.sqrt(O)*120,easing:u=so}=l,i=getComputedStyle(s),v=i.transform==="none"?"":i.transform,[f,I]=i.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,I/=s.clientHeight;var P=ro(s),m=s.clientWidth/n.width/P,g=s.clientHeight/n.height/P,x=t.left+t.width*f,y=t.top+t.height*I,$=n.left+n.width*f,h=n.top+n.height*I,k=(x-$)*m,j=(y-h)*g,J=t.width/n.width,A=t.height/n.height;return{delay:d,duration:typeof r=="function"?r(Math.sqrt(k*k+j*j)):r,easing:u,css:(O,z)=>{var N=z*k,T=z*j,M=O+z*J,b=O+z*A;return`transform: ${v} translate(${N}px, ${T}px) scale(${M}, ${b});`}}}function ro(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var io=w('<menu class="pane unstyled svelte-4htxep"><!></menu>'),lo=w('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function de(s,t){$t(t,!0);const n=te.get(),l=n.add_submenu(),{layout:d}=n,r=S(()=>l.selected);let u=U(void 0);const i=ie.get(),v=ie.set();let f=U(0),I=U(0);Ht(()=>{e(u)&&P(e(u),d,i)});const P=(z,N,T)=>{const{x:M,y:b,width:R,height:L}=z.getBoundingClientRect();v.width=R,v.height=L;const G=M-e(f),q=b-e(I),X=G+R+T.width-N.width;if(X<=0)c(f,T.width,!0);else{const Y=R-G;Y<=0?c(f,-R):Y>X?c(f,T.width-X):c(f,Y-R)}c(I,Math.min(0,N.height-(q+L)),!0)};var m=lo();let g;var x=p(m);let y;var $=p(x),h=p($),k=p(h);pt(k,()=>t.icon??Tt),_(h);var j=a(h,2),J=p(j);pt(J,()=>t.children),_(j),_($),D(2),_(x);var A=a(x,2);{var O=z=>{var N=io();let T;var M=p(N);pt(M,()=>t.menu),_(N),Vt(N,b=>c(u,b),()=>e(u)),lt(b=>T=ae(N,"",T,b),[()=>({transform:`translate3d(${e(f)??""}px, ${e(I)??""}px, 0)`,"max-height":`${d.height??""}px`})]),o(z,N)};V(A,z=>{e(r)&&z(O)})}_(m),lt((z,N)=>{g=ae(m,"",g,z),y=xt(x,1,"menu_item plain selectable svelte-4htxep",null,y,N),Ut(x,"aria-expanded",e(r))},[()=>({"--contextmenu_depth":l.depth}),()=>({selected:e(r)})]),rt("mouseenter",x,z=>{At(z),setTimeout(()=>n.select(l))}),o(s,m),kt()}var co=w("<!> <!>",1);function ce(s,t){$t(t,!0);const n=nt(t,"name",3,"Cat"),l=nt(t,"icon",3,"😺");de(s,{icon:u=>{D();var i=B();lt(()=>bt(i,l())),o(u,i)},menu:u=>{var i=co(),v=C(i);ht(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:P=>{var m=et(),g=C(m);{var x=$=>{var h=B("🏠");o($,h)},y=$=>{var h=B("🌄");o($,h)};V(g,$=>{t.position==="adventure"?$(x):$(y,!1)})}o(P,m)},children:(P,m)=>{var g=et(),x=C(g);{var y=h=>{var k=B("go home");o(h,k)},$=h=>{var k=B("go adventure");o(h,k)};V(x,h=>{t.position==="adventure"?h(y):h($,!1)})}o(P,g)},$$slots:{icon:!0,default:!0}});var f=a(v,2);ht(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:P=>{var m=et(),g=C(m);{var x=$=>{var h=B("🌄");o($,h)},y=$=>{var h=B("🏠");o($,h)};V(g,$=>{t.position==="adventure"?$(x):$(y,!1)})}o(P,m)},children:(P,m)=>{var g=et(),x=C(g);{var y=h=>{var k=B("do adventure");o(h,k)},$=h=>{var k=B("be home");o(h,k)};V(x,h=>{t.position==="adventure"?h(y):h($,!1)})}o(P,g)},$$slots:{icon:!0,default:!0}}),o(u,i)},children:(u,i)=>{D();var v=B();lt(()=>bt(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var uo=w("<!> <!> <!>",1);function _o(s,t){var n=uo(),l=C(n);ye(l,{href:"https://github.com/ryanatkn/fuz",icon:i=>{un(i,{get data(){return dn},size:"var(--icon_size_xs)"})},children:(i,v)=>{D();var f=B("Source code");o(i,f)},$$slots:{icon:!0,default:!0}});var d=a(l,2);ee(d,{});var r=a(d,2);ht(r,{get run(){return t.toggle_about_dialog},icon:i=>{D();var v=B("?");o(i,v)},children:(i,v)=>{D();var f=B("About");o(i,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Xe=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var vo=w("<!> <!>",1),mo=w("<!> <!>",1),po=w("<!> <!> <!>",1);function ho(s,t){$t(t,!0);const n=S(()=>Xe(t.adventure_cats));de(s,{icon:r=>{D();var u=B("🏠");o(r,u)},menu:r=>{var u=po(),i=C(u);{var v=m=>{var g=vo(),x=C(g);ht(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var k=B("🐈‍⬛");o(h,k)},children:(h,k)=>{D();var j=B("call");o(h,j)},$$slots:{icon:!0,default:!0}});var y=a(x,2);ee(y,{}),o(m,g)};V(i,m=>{e(n)&&m(v)})}var f=a(i,2);Xt(f,17,()=>t.home_cats,m=>m.name,(m,g)=>{ce(m,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var I=a(f,2);{var P=m=>{var g=mo(),x=C(g);ht(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{D();var k=B("🏠");o(h,k)},children:(h,k)=>{D();var j=B("be");o(h,j)},$$slots:{icon:!0,default:!0}});var y=a(x,2);ht(y,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var k=B("🦋");o(h,k)},children:(h,k)=>{D();var j=B("leave");o(h,j)},$$slots:{icon:!0,default:!0}}),o(m,g)};V(I,m=>{e(n)||m(P)})}o(r,u)},children:(r,u)=>{D();var i=B("home");o(r,i)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var fo=w("<!> <!>",1),go=w("<!> <!>",1),xo=w("<!> <!> <!>",1);function bo(s,t){$t(t,!0);const n=S(()=>Xe(t.home_cats));de(s,{icon:r=>{D();var u=B("🌄");o(r,u)},menu:r=>{var u=xo(),i=C(u);{var v=m=>{var g=fo(),x=C(g);ht(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var k=B("🦋");o(h,k)},children:(h,k)=>{D();var j=B("call");o(h,j)},$$slots:{icon:!0,default:!0}});var y=a(x,2);ee(y,{}),o(m,g)};V(i,m=>{e(n)&&m(v)})}var f=a(i,2);Xt(f,17,()=>t.adventure_cats,m=>m.name,(m,g)=>{ce(m,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var I=a(f,2);{var P=m=>{var g=go(),x=C(g);ht(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{D();var k=B("🌄");o(h,k)},children:(h,k)=>{D();var j=B("do");o(h,j)},$$slots:{icon:!0,default:!0}});var y=a(x,2);ht(y,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var k=B("🐈‍⬛");o(h,k)},children:(h,k)=>{D();var j=B("leave");o(h,j)},$$slots:{icon:!0,default:!0}}),o(m,g)};V(I,m=>{e(n)||m(P)})}o(r,u)},children:(r,u)=>{D();var i=B("adventure");o(r,i)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var yo=w('<span class="icon svelte-y90lnf"> </span>'),wo=w('<span class="name svelte-y90lnf"><!> </span>'),$o=w("<span><!><!></span>");function Ie(s,t){const n=nt(t,"name",3,"Cat"),l=nt(t,"icon",3,"😺"),d=nt(t,"show_name",3,!0),r=nt(t,"show_icon",3,!0);var u=$o();let i;var v=p(u);{var f=m=>{var g=yo(),x=p(g,!0);_(g),lt(()=>bt(x,l())),o(m,g)};V(v,m=>{r()&&m(f)})}var I=a(v);{var P=m=>{var g=wo(),x=p(g);pt(x,()=>t.children??Tt);var y=a(x,1,!0);_(g),lt(()=>bt(y,n())),o(m,g)};V(I,m=>{d()&&m(P)})}_(u),lt(m=>i=xt(u,1,"cat svelte-y90lnf",null,i,m),[()=>({"has-icon":r()})]),o(s,u)}const ko=`<script lang="ts">
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
`;var Co=w("<!> <!>",1),To=w('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Eo=w('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),So=w('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Po=w('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Ao=w('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Io=w("<!> <!>",1),Oo=w('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),zo=w("<!> <!>",1);function No(s,t){$t(t,!0);const n=Ft.get(),l=S(()=>n.component),d="Alyssa",r="Ben",u="home";let i=U(u),v=U(u);const f=S(()=>e(i)===e(v)?"😺":"😾"),I=S(()=>e(i)===e(v)?"😸":"😿"),P=S(()=>({name:d,icon:e(f),position:e(i)})),m=S(()=>({name:r,icon:e(I),position:e(v)}));let g=U(!1);const x=(L,G)=>{const q=[],X=[];for(const Y of L){const it=Y.position==="home"?q:X;G?it.unshift(Y):it.push(Y)}return{home_cats:q,adventure_cats:X}},y=S(()=>x([e(P),e(m)],e(g))),$=S(()=>e(y).home_cats),h=S(()=>e(y).adventure_cats),k=S(()=>e(i)!==u||e(v)!==u),j=()=>{c(i,u),c(v,u)};let J=U(!1);const A=()=>{c(J,!e(J))},O=L=>{switch(L.type){case"call_cats_adventure":{c(i,"adventure"),c(v,"adventure");break}case"call_cats_home":{c(i,"home"),c(v,"home");break}case"cat_go_adventure":{L.name===d?c(i,"adventure"):L.name===r&&c(v,"adventure");break}case"cat_go_home":{L.name===d?c(i,"home"):L.name===r&&c(v,"home");break}case"cat_be_or_do":{c(g,!e(g));break}}},[z,N]=ln({fallback:(L,G)=>{const q=window.getComputedStyle(L),X=q.transform==="none"?"":q.transform;return{duration:1500,easing:ao,css:Y=>`
					transform: ${X} scale(${Y});
					opacity: ${Y}
				`}}});var T=zo(),M=C(T);Wt(M,()=>e(l),(L,G)=>{G(L,{scoped:!0,children:(q,X)=>{Rt(q,{children:(Y,it)=>{var vt=Io(),ut=C(vt);Dt(ut,{text:"Full example"});var ft=a(ut,2);Nt(ft,{entries:F=>{var H=Co(),K=C(H);{var ot=Q=>{we(Q,{run:j,content:"Reset",icon:"↻"})};V(K,Q=>{e(k)&&Q(ot)})}var tt=a(K,2);_o(tt,{toggle_about_dialog:A}),o(F,H)},children:(F,H)=>{var K=Ao(),ot=C(K),tt=p(ot),Q=p(tt);Nt(Q,{entries:Z=>{ho(Z,{act:O,get home_cats(){return e($)},get adventure_cats(){return e(h)}})},children:(Z,Et)=>{var gt=Eo(),Ot=a(p(gt),2);Xt(Ot,29,()=>e($),({name:dt,icon:ct,position:st})=>dt,(dt,ct)=>{let st=()=>e(ct).name,St=()=>e(ct).icon,wt=()=>e(ct).position;var _t=To(),Ct=p(_t);Nt(Ct,{entries:Pt=>{ce(Pt,{act:O,get name(){return st()},get icon(){return St()},get position(){return wt()}})},children:(Pt,Lt)=>{Ie(Pt,{get name(){return st()},get icon(){return St()}})},$$slots:{entries:!0,default:!0}}),_(_t),Zt(1,_t,()=>N,()=>({key:st()})),Zt(2,_t,()=>z,()=>({key:st()})),Se(_t,()=>Ae,null),o(dt,_t)}),_(Ot),_(gt),o(Z,gt)},$$slots:{entries:!0,default:!0}});var E=a(Q,2);Nt(E,{entries:Z=>{bo(Z,{act:O,get home_cats(){return e($)},get adventure_cats(){return e(h)}})},children:(Z,Et)=>{var gt=Po(),Ot=a(p(gt),2);Xt(Ot,29,()=>e(h),({name:dt,icon:ct,position:st})=>dt,(dt,ct)=>{let st=()=>e(ct).name,St=()=>e(ct).icon,wt=()=>e(ct).position;var _t=So(),Ct=p(_t);Nt(Ct,{entries:Pt=>{ce(Pt,{act:O,get name(){return st()},get icon(){return St()},get position(){return wt()}})},children:(Pt,Lt)=>{Ie(Pt,{get name(){return st()},get icon(){return St()}})},$$slots:{entries:!0,default:!0}}),_(_t),Zt(1,_t,()=>N,()=>({key:st()})),Zt(2,_t,()=>z,()=>({key:st()})),Se(_t,()=>Ae,null),o(dt,_t)}),_(Ot),_(gt),o(Z,gt)},$$slots:{entries:!0,default:!0}}),_(tt),_(ot);var W=a(ot,2),mt=p(W);Ne(mt,{summary:Z=>{D();var Et=B("View example source");o(Z,Et)},children:(Z,Et)=>{qt(Z,{get content(){return ko}})},$$slots:{summary:!0,default:!0}}),_(W),o(F,K)},$$slots:{entries:!0,default:!0}}),o(Y,vt)},$$slots:{default:!0}})},$$slots:{default:!0}})});var b=a(M,2);{var R=L=>{an(L,{onclose:()=>c(J,!1),children:(G,q)=>{var X=Oo(),Y=p(X),it=a(p(Y),8),vt=a(p(it),2);_n(vt,{});var ut=a(vt,4);vn(ut,{}),_(it),_(Y),_(X),o(G,X)},$$slots:{default:!0}})};V(b,L=>{e(J)&&L(R)})}o(s,T),kt()}var Ro=w("<!> <!> <!>",1),Do=w(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Fo=w("<!> <!>",1);function Mo(s,t){$t(t,!0);const n=Ft.get(),l=S(()=>n.component),d=S(()=>n.name);let r=U(!1),u=U(!1),i=U(!1);var v=et(),f=C(v);Wt(f,()=>e(l),(I,P)=>{P(I,{scoped:!0,children:(m,g)=>{Rt(m,{children:(x,y)=>{var $=Fo(),h=C($);Dt(h,{text:"Basic usage"});var k=a(h,2);Nt(k,{entries:J=>{var A=Ro(),O=C(A);ht(O,{run:()=>void c(r,!e(r)),children:(T,M)=>{D();var b=B("Hello world");o(T,b)},$$slots:{default:!0}});var z=a(O,2);ht(z,{run:()=>void c(u,!e(u)),icon:M=>{D();var b=B("🌞");o(M,b)},children:(M,b)=>{D();var R=B("Hello with an optional icon snippet");o(M,R)},$$slots:{icon:!0,default:!0}});var N=a(z,2);ht(N,{run:()=>void c(i,!e(i)),icon:"🌚",children:(T,M)=>{D();var b=B("Hello with an optional icon string");o(T,b)},$$slots:{default:!0}}),o(J,A)},children:(J,A)=>{var O=Do(),z=a(p(O),2);{let ut=S(()=>`<${e(d)} scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}>
        Hello world <!-- ${e(r)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}>
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet <!-- ${e(u)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚">
        Hello with an optional icon string <!-- ${e(i)} -->
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</${e(d)}>
...markup without contextmenu behavior...`);qt(z,{get content(){return e(ut)}})}var N=a(z,2),T=p(N);let M;var b=p(T);_(T),_(N);var R=a(N,2),L=p(R);let G;var q=p(L);_(L),_(R);var X=a(R,2),Y=p(X);let it;var vt=p(Y);_(Y),_(X),D(2),_(O),lt((ut,ft,yt)=>{M=xt(T,1,"",null,M,ut),bt(b,`greeted = ${e(r)??""}`),G=xt(L,1,"",null,G,ft),bt(q,`greeted_icon_snippet = ${e(u)??""}`),it=xt(Y,1,"",null,it,yt),bt(vt,`greeted_icon_string = ${e(i)??""}`)},[()=>({color_g_5:e(r)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(i)})]),o(J,O)},$$slots:{entries:!0,default:!0}}),o(x,$)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),kt()}var Lo=w("<span> </span>");function Kt(s,t){const n=Oe(t,["$$slots","$$events","$$legacy","glyph","size","class"]),l="var(--font_size, 1em)",d="var(--font_size, inherit)",r=S(()=>t.size??l);var u=Lo();ge(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[nn]:v}),[()=>({width:e(r),height:e(r),"min-width":e(r),"min-height":e(r),"font-size":t.size??d})]);var i=p(u,!0);_(u),lt(()=>bt(i,t.glyph)),o(s,u)}var Ho=w('<span class="color_f_5">option f</span>'),Uo=w('<span class="color_g_5">option g</span>'),qo=w('<span class="color_j_5">option j</span>'),Wo=w("<!> <!> <!> <!>",1),Bo=w('<li class="color_error">Error: <code> </code></li>'),Xo=w('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),jo=w(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),Yo=w("<!> <!>",1);function Vo(s,t){$t(t,!0);const n=Ft.get(),l=S(()=>n.component),d=S(()=>n.name),r=new Qt;let u=U(void 0);const i=S(()=>e(u)?`color_${e(u)}_5`:void 0),v=S(()=>e(u)?`color_${e(u)}`:void 0);var f=et(),I=C(f);Wt(I,()=>e(l),(P,m)=>{m(P,{get contextmenu(){return r},scoped:!0,children:(g,x)=>{Rt(g,{children:(y,$)=>{var h=Yo(),k=C(h);Dt(k,{text:"Custom instance"});var j=a(k,2);Nt(j,{entries:A=>{de(A,{icon:N=>{D();var T=B("🎨");o(N,T)},menu:N=>{var T=Wo(),M=C(T);ht(M,{run:()=>(c(u,"f"),{ok:!0,close:!1}),children:(G,q)=>{var X=Ho();o(G,X)},$$slots:{default:!0}});var b=a(M,2);ht(b,{run:()=>(c(u,"g"),{ok:!0,close:!1}),children:(G,q)=>{var X=Uo();o(G,X)},$$slots:{default:!0}});var R=a(b,2);ht(R,{run:()=>(c(u,"j"),{ok:!0,close:!1}),children:(G,q)=>{var X=qo();o(G,X)},$$slots:{default:!0}});var L=a(R,2);ht(L,{run:()=>(r.close(),{ok:!0}),children:(G,q)=>{D();var X=B("close contextmenu");o(G,X)},$$slots:{default:!0}}),o(N,T)},children:(N,T)=>{D();var M=B("select color");o(N,M)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(A,O)=>{var z=jo(),N=p(z),T=a(p(N)),M=p(T,!0);_(T),D(5),_(N);var b=a(N,2);qt(b,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var R=a(b,2);{let tt=S(()=>`<${e(d)} {contextmenu} scoped>...</${e(d)}>`);qt(R,{get content(){return e(tt)}})}var L=a(R,2),G=a(p(L));G.textContent="{ok: true, close: false}",D(),_(L);var q=a(L,2),X=a(p(q),2),Y=p(X),it=a(p(Y),2),vt=p(it,!0);_(it),_(Y);var ut=a(Y,2),ft=a(p(ut),2),yt=p(ft);_(ft),_(ut);var F=a(ut,2);{var H=tt=>{var Q=Bo(),E=a(p(Q)),W=p(E,!0);_(E),_(Q),lt(()=>bt(W,r.error)),o(tt,Q)};V(F,tt=>{r.error&&tt(H)})}_(X),_(q);var K=a(q,2);{var ot=tt=>{var Q=Xo(),E=p(Q),W=p(E),mt=p(W);Kt(mt,{glyph:"↑"}),_(W);var at=a(W,2),Z=p(at),Et=p(Z);Kt(Et,{glyph:"←"}),_(Z);var gt=a(Z,2),Ot=p(gt);Kt(Ot,{glyph:"↵"}),_(gt);var dt=a(gt,2),ct=p(dt);Kt(ct,{glyph:"→"}),_(dt),_(at);var st=a(at,2),St=p(st);Kt(St,{glyph:"↓"}),_(st),_(E),_(Q),lt(()=>{xt(W,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),W.disabled=!r.can_select_previous,xt(Z,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),Z.disabled=!r.can_collapse,xt(gt,1,`border_radius_0 ${e(v)??""}`),gt.disabled=!r.can_activate,xt(dt,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),dt.disabled=!r.can_expand,xt(st,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),st.disabled=!r.can_select_next}),rt("mousedown",W,wt=>{At(wt),r.select_previous()},!0),rt("mousedown",Z,wt=>{At(wt),r.collapse_selected()},!0),rt("mousedown",gt,async wt=>{At(wt),await r.activate_selected()},!0),rt("mousedown",dt,wt=>{At(wt),r.expand_selected()},!0),rt("mousedown",st,wt=>{At(wt),r.select_next()},!0),Zt(3,Q,()=>cn),o(tt,Q)};V(K,tt=>{r.opened&&tt(ot)})}_(z),lt(()=>{bt(M,e(d)),xt(q,1,`mb_md ${e(i)??""}`),bt(vt,r.opened),bt(yt,`${r.x??""} && contextmenu.y === ${r.y??""}`)}),o(A,z)},$$slots:{entries:!0,default:!0}}),o(y,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),kt()}const Go=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const l=document.createRange();l.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(l)};var Ko=w(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),Zo=w("<div><!></div> <!>",1);function Jo(s,t){$t(t,!0);const n=Ft.get(),l=S(()=>n.component),d=new Qt;let r=U(!1),u=U(void 0),i=U("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,I=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,P=S(()=>e(i)===v||e(i)===f||e(i)===I);var m=et(),g=C(m);Wt(g,()=>e(l),(x,y)=>{y(x,{get contextmenu(){return d},scoped:!0,children:($,h)=>{Rt($,{children:(k,j)=>{var J=Zo(),A=C(J);let O;var z=p(A);Dt(z,{text:"Select text"}),_(A);var N=a(A,2);Nt(N,{entries:M=>{ht(M,{run:()=>void c(r,!e(r)),children:(b,R)=>{D();var L=B("Toggle something");o(b,L)},$$slots:{default:!0}})},children:(M,b)=>{var R=Ko();let L;var G=p(R),q=a(p(G),2),X=a(p(q));X.__click=[Go,u];let Y;D(),_(q),_(G),Vt(G,Q=>c(u,Q),()=>e(u));var it=a(G,2),vt=p(it);Bt(vt),_(it);var ut=a(it,2);let ft;var yt=a(ut,2),F=p(yt);Ke(F),_(yt);var H=a(yt,2),K=p(H);Jt(K,{path:"Web/HTML/Global_attributes/contenteditable"}),D(),_(H);var ot=a(H,4),tt=a(ot,4);D(2),_(R),lt((Q,E,W)=>{L=xt(R,1,"panel p_md",null,L,Q),Y=xt(X,1,"",null,Y,E),ft=xt(ut,1,"",null,ft,W)},[()=>({color_g_5:e(P)}),()=>({color_a:e(r)}),()=>({color_g_5:e(P)})]),Ee(vt,()=>e(i),Q=>c(i,Q)),Ee(F,()=>e(i),Q=>c(i,Q)),Ce("innerText",ot,()=>e(i),Q=>c(i,Q)),Ce("innerText",tt,()=>e(i),Q=>c(i,Q)),o(M,R)},$$slots:{entries:!0,default:!0}}),lt(T=>O=xt(A,1,"",null,O,T),[()=>({color_d_5:e(P)})]),o(k,J)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,m),kt()}jt(["click"]);const Qo=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const l=document.createRange();l.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(l)};var ts=w('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),es=w('<li>custom "some custom entry" entry</li>'),ns=w('<li>"copy text" entry when text is selected</li>'),os=w("<li>link entry when clicking on a link</li>"),ss=w("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),as=w(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),rs=w('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> disable automatic link entries, <code></code></label> <label class="row"><input type="checkbox"/> disable automatic copy text entries, <code></code></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function is(s,t){$t(t,!0);const n=m=>{var g=ts(),x=p(g),y=a(p(x));y.__click=[Qo,P];let $;D(),_(x),Vt(x,j=>c(P,j),()=>e(P));var h=a(x,2),k=a(p(h));D(),_(h),_(g),lt((j,J)=>{$=xt(y,1,"",null,$,j),Ut(k,"href",J)},[()=>({color_h:e(I)}),()=>mn("/")]),o(m,g)},l=Ft.get(),d=S(()=>l.component),r=S(()=>l.name),u=new Qt;let i=U(!1),v=U(!1),f=U(!0),I=U(!1),P=U(void 0);Rt(s,{children:(m,g)=>{var x=rs(),y=C(x);Dt(y,{text:"Disable default behaviors"});var $=a(y,4);{let q=S(()=>`<${e(r)}${e(i)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);qt($,{get content(){return e(q)}})}var h=a($,2),k=p(h),j=p(k);Bt(j);var J=a(j,2);J.textContent="link_entry={null}",_(k);var A=a(k,2),O=p(A);Bt(O);var z=a(O,2);z.textContent="text_entry={null}",_(A),_(h);var N=a(h,2);{let q=S(()=>e(i)?null:void 0),X=S(()=>e(v)?null:void 0);Wt(N,()=>e(d),(Y,it)=>{it(Y,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(q)},get text_entry(){return e(X)},children:(vt,ut)=>{var ft=et(),yt=C(ft);{var F=K=>{Nt(K,{entries:tt=>{ht(tt,{icon:">",run:()=>void c(I,!e(I)),children:(Q,E)=>{D();var W=B("some custom entry");o(Q,W)},$$slots:{default:!0}})},children:(tt,Q)=>{n(tt)},$$slots:{entries:!0,default:!0}})},H=K=>{n(K)};V(yt,K=>{e(f)?K(F):K(H,!1)})}o(vt,ft)},$$slots:{default:!0}})})}var T=a(N,4),M=p(T),b=p(M);Bt(b),D(),_(M),_(T);var R=a(T,2);{var L=q=>{var X=ss(),Y=a(C(X),2),it=p(Y);{var vt=H=>{var K=es();o(H,K)};V(it,H=>{e(f)&&H(vt)})}var ut=a(it,2);{var ft=H=>{var K=ns();o(H,K)};V(ut,H=>{e(v)||H(ft)})}var yt=a(ut,2);{var F=H=>{var K=os();o(H,K)};V(yt,H=>{e(i)||H(F)})}_(Y),o(q,X)},G=q=>{var X=as();o(q,X)};V(R,q=>{e(f)||!e(i)||!e(v)?q(L):q(G,!1)})}pe(j,()=>e(i),q=>c(i,q)),pe(O,()=>e(v),q=>c(v,q)),pe(b,()=>e(f),q=>c(f,q)),o(m,x)},$$slots:{default:!0}}),kt()}jt(["click"]);var ls=w(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function cs(s,t){$t(t,!0);const n=Ft.get(),l=S(()=>n.component),d=S(()=>n.name);var r=et(),u=C(r);Wt(u,()=>e(l),(i,v)=>{v(i,{scoped:!0,children:(f,I)=>{Rt(f,{children:(P,m)=>{var g=ls(),x=C(g);Dt(x,{text:"Default behaviors"});var y=a(x,2),$=p(y);{let h=S(()=>`<${e(d)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(d)}>`);qt($,{get content(){return e(h)}})}D(6),_(y),o(P,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,r),kt()}var us=w("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function Ds(s,t){$t(t,!0);const l=Je("Contextmenu");Ft.set(),Ze(s,{get tome(){return l},children:(d,r)=>{var u=us(),i=C(u);Jn(i,{});var v=a(i,2);Mo(v,{});var f=a(v,2);cs(f,{});var I=a(f,2);Jo(I,{});var P=a(I,2);is(P,{});var m=a(P,2);Vo(m,{});var g=a(m,2);No(g,{});var x=a(g,2);oo(x),D(2),o(d,u)},$$slots:{default:!0}}),kt()}export{Ds as component};
