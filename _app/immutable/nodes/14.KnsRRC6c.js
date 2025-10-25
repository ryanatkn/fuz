import"../chunks/DsnmJJEf.js";import{C as tn,z as en,af as U,h as e,ae as r,aj as ae,u as O,e as Q,a as S,b as o,g as pt,p as $t,f as w,s as a,d as m,t as ut,b9 as xt,c as kt,r as d,b8 as Yt,ac as B,ad as N,ab as St,ba as zt,bB as oe,F as nn,bE as on}from"../chunks/B7qs8f6Z.js";import{T as sn}from"../chunks/DnoiBR4t.js";import{g as an}from"../chunks/6oYKUwNN.js";import{s as wt}from"../chunks/D2Z-uHvG.js";import{c as Ht}from"../chunks/BrxtZYhB.js";import{C as Ut}from"../chunks/DpqcPF0n.js";import{M as Qt}from"../chunks/DHzjxUCy.js";import{T as Nt,a as Rt}from"../chunks/CqGkFTy5.js";import{e as rn}from"../chunks/36zOYlHh.js";import{a as ln}from"../chunks/B2EI8ygw.js";import{a as be,b as yt,s as Lt,C as cn,c as re,d as Te,r as Bt,S as un}from"../chunks/C61V10DD.js";import{p as st,r as Re,s as jt}from"../chunks/C2A3Zqzr.js";import{o as Se}from"../chunks/BMgspcsU.js";import{a as dn,s as Tt,b as De,c as _n,D as vn}from"../chunks/DPmjiu3g.js";import{c as ue,a as he,e as Xt}from"../chunks/GCAAGpmM.js";import{i as K}from"../chunks/DHMuHmk0.js";import{P as mn}from"../chunks/B7mkSFrP.js";import{D as Fe,b as Ee}from"../chunks/8X_O05eD.js";import{b as Pe,a as Ie,c as fe}from"../chunks/7g2Ar_02.js";import{b as Vt}from"../chunks/2LOYOryH.js";import{t as Jt,c as pn,a as Ae,s as hn}from"../chunks/DkIYfvB-.js";import{S as fn,g as gn}from"../chunks/B-XuT0zp.js";import{C as xn,T as bn}from"../chunks/twD8klRS.js";import{r as yn}from"../chunks/j8jFzdFV.js";class ye{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){ye.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var wn=new ye({box:"border-box"});function Mt(s,t,n){var c=wn.observe(s,()=>n(s[t]));tn(()=>(en(()=>n(s[t])),c))}const Me=Object.freeze({});class Le{#t=U(0);get width(){return e(this.#t)}set width(t){r(this.#t,t,!0)}#e=U(0);get height(){return e(this.#e)}set height(t){r(this.#e,t,!0)}}class $n{is_menu=!1;menu;run;disabled;#t=U(!1);get selected(){return e(this.#t)}set selected(t){r(this.#t,t,!0)}#e=U(!1);get pending(){return e(this.#e)}set pending(t){r(this.#e,t,!0)}#n=U(null);get error_message(){return e(this.#n)}set error_message(t){r(this.#n,t,!0)}#o=U(null);get promise(){return e(this.#o)}set promise(t){r(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class kn{is_menu=!0;menu;depth;#t=U(!1);get selected(){return e(this.#t)}set selected(t){r(this.#t,t,!0)}#e=U(ae([]));get items(){return e(this.#e)}set items(t){r(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class Cn{is_menu=!0;menu=null;depth=1;#t=U(ae([]));get items(){return e(this.#t)}set items(t){r(this.#t,t,!0)}}class te{layout;has_custom_layout;#t=U(!1);get opened(){return e(this.#t)}set opened(t){r(this.#t,t,!0)}#e=U(0);get x(){return e(this.#e)}set x(t){r(this.#e,t,!0)}#n=U(0);get y(){return e(this.#n)}set y(t){r(this.#n,t,!0)}#o=U(ae([]));get params(){return e(this.#o)}set params(t){r(this.#o,t,!0)}#s=U();get error(){return e(this.#s)}set error(t){r(this.#s,t,!0)}root_menu=new Cn;#a=U(ae([]));get selections(){return e(this.#a)}set selections(t){r(this.#a,t,!0)}#r=O(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){r(this.#r,t)}#i=O(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){r(this.#i,t)}#l=O(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){r(this.#l,t)}#c=O(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){r(this.#c,t)}#u=O(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){r(this.#u,t)}constructor(t=Me){const{layout:n}=t;this.has_custom_layout=!!n,this.layout=n??new Le}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(dn(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=ge.maybe_get()??this.root_menu,_=new $n(c,t,n);return c.items.push(_),Se(()=>{c.items.length=0}),_}add_submenu(){const t=ge.maybe_get()??this.root_menu,n=new kn(t,t.depth+1);return t.items.push(n),ge.set(n),Se(()=>{t.items.length=0}),n}}const we="contextmenu",Tn=`a,[data-${we}]`,se=new Map;let Sn=0;const En=(s,t)=>{if(t==null)return;const n=Sn+++"";return s.dataset[we]=n,se.set(n,t),{update:c=>{se.set(n,c)},destroy:()=>{se.delete(n)}}},Pn=17,xe=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:v=!0}=_??Me,f=In(s)?.filter(R=>typeof R=="function"||(R.snippet!=="link"||i)&&(R.snippet!=="text"||u)&&(R.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate(Pn),!0):!1},In=s=>{let t=null,n=s,c,_;for(;n=n?.closest(Tn);){if(c=n.dataset[we]){if(t??=[],_=se.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},ee=ue(),ge=ue(),ie=ue(()=>new Le);function At(s,t){const n=st(t,"tag",3,"span");var c=Q(),_=S(c);rn(_,n,!1,(i,u)=>{ln(i,(f,R)=>En?.(f,R),()=>t.entries),be(i,()=>({class:"display_contents",...t.attrs}));var l=Q(),v=S(l);pt(v,()=>t.children),o(u,l)}),o(s,c)}var An=w('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function ht(s,t){$t(t,!0);const n=st(t,"disabled",3,!1),c=ee.get(),_=c.add_entry(()=>t.run,()=>n()),i=O(()=>_.selected),u=O(()=>_.pending),l=O(()=>_.error_message),v=O(()=>_.disabled());var f=An();let R;f.__click=function(...b){(e(v)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,b)};var P=m(f),h=m(P),g=m(h);{var x=b=>{var I=B();ut(()=>wt(I,t.icon)),o(b,I)},T=b=>{var I=Q(),F=S(I);{var L=E=>{var W=Q(),y=S(W);pt(y,()=>t.icon),o(E,W)};K(F,E=>{t.icon&&E(L)},!0)}o(b,I)};K(g,b=>{typeof t.icon=="string"?b(x):b(T,!1)})}d(h);var $=a(h,2),p=m($);pt(p,()=>t.children),d($);var k=a($,2);{var D=b=>{mn(b,{})},Y=b=>{var I=Q(),F=S(I);{var L=E=>{var W=B("⚠️");o(E,W)};K(F,E=>{e(l)&&E(L)},!0)}o(b,I)};K(k,b=>{e(u)?b(D):b(Y,!1)})}d(P),d(f),ut(b=>{R=yt(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,R,b),Lt(f,"aria-disabled",e(v)),Lt(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(v)})]),xt("mouseenter",f,function(...b){(e(v)?void 0:I=>{Tt(I),c.select(_)})?.apply(this,b)}),o(s,f),kt()}Yt(["click"]);var On=s=>{s.stopPropagation()},zn=w('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function $e(s,t){$t(t,!0);const n="🔗",c=st(t,"icon",3,n),_=st(t,"disabled",3,!1),i=ee.get();let u=U(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),v=O(()=>l.selected),f=O(()=>l.disabled()),R=(y,z=location.host)=>{const M=he(he(y,"https://"),"http://");return M.startsWith(z+"/")?he(M,z):M},P=O(()=>R(t.href)),h=O(()=>!(e(P)[0]==="."||e(P)[0]==="/"&&e(P)[1]!=="/")),g=O(()=>e(h)?"noreferrer":void 0);var x=zn(),T=m(x);let $;T.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},T.__contextmenu=[On];var p=m(T),k=m(p),D=m(k);{var Y=y=>{var z=B();ut(()=>wt(z,c())),o(y,z)},b=y=>{var z=Q(),M=S(z);pt(M,c,()=>n),o(y,z)};K(D,y=>{typeof c()=="string"?y(Y):y(b,!1)})}d(k);var I=a(k,2),F=m(I),L=m(F);{var E=y=>{var z=Q(),M=S(z);pt(M,()=>t.children),o(y,z)},W=y=>{var z=B();ut(()=>wt(z,e(P))),o(y,z)};K(L,y=>{t.children?y(E):y(W,!1)})}d(F),d(I),d(p),d(T),Vt(T,y=>r(u,y),()=>e(u)),d(x),ut(y=>{$=yt(T,1,"menu_item plain svelte-1fkm0gl",null,$,y),Lt(T,"aria-disabled",e(f)),Lt(T,"href",t.href),Lt(T,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),xt("mouseenter",T,function(...y){(e(f)?void 0:z=>{Tt(z),i.select(l)})?.apply(this,y)}),o(s,x),kt()}Yt(["click","contextmenu"]);function ke(s,t){ht(s,{get run(){return t.run},icon:c=>{N();var _=B();ut(()=>wt(_,t.icon)),o(c,_)},children:(c,_)=>{N();var i=B();ut(()=>wt(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var Nn=w("<li></li>");function ne(s,t){const n=Re(t,["$$slots","$$events","$$legacy"]);var c=Nn();be(c,()=>({role:"separator","aria-orientation":"vertical",...n,[cn]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const Ue=-2,He=-2,qe=750,We=11,Rn=633,Dn=21,le=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!De(s)&&!_n(s),Be=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),Xe=s=>t=>{const n=s.get(t.key);!n||De(t.target)||(Tt(t),n())},Ye=(s,t,n)=>s+Math.min(0,n-(s+t)),je=(s,t,n)=>s+Math.min(0,n-(s+t)),Fn=(s,t=St)=>{$e(s,jt(t))},Mn=(s,t=St)=>{ke(s,jt(t))},Ln=(s,t=St)=>{ne(s,jt(t))};var Un=w('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Hn=w('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),qn=w('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Wn=w("<!> <!>  <!>",1);function Oe(s,t){$t(t,!0);const n=st(t,"contextmenu",19,()=>new te),c=st(t,"open_offset_x",3,Ue),_=st(t,"open_offset_y",3,He),i=st(t,"bypass_with_tap_then_longpress",3,!0),u=st(t,"bypass_window",3,qe),l=st(t,"bypass_move_tolerance",3,We),v=st(t,"scoped",3,!1),f=st(t,"link_entry",3,Fn),R=st(t,"text_entry",3,Mn),P=st(t,"separator_entry",3,Ln);ee.set(n());let h=U(void 0);const g=O(()=>n().layout),x=ie.set(),T=O(()=>Ye(n().x,x.width,e(g).width)),$=O(()=>je(n().y,x.height,e(g).height));let p=U(void 0),k=U(void 0),D=U(void 0),Y=U(void 0),b=U(void 0);const I=A=>{if(e(Y)){r(Y,!1),r(D,null),r(p,null),r(k,null),e(b)!=null&&(clearTimeout(e(b)),r(b,null));return}const{target:X}=A;le(X,A.shiftKey)&&(e(h)?.contains(X)||xe(X,A.clientX+c(),A.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:R()!==null,separator_enabled:P()!==null})&&Tt(A))},F=A=>{if(!i())return;const{touches:X,target:ct}=A;if(n().opened||X.length!==1||!le(ct,A.shiftKey)){r(D,null),r(p,null),r(k,null),r(Y,!1),e(b)!=null&&(clearTimeout(e(b)),r(b,null));return}const{clientX:J,clientY:rt}=X[0];if(e(D)!=null&&performance.now()-e(D)<u()&&Math.hypot(J-e(p),rt-e(k))<l()){r(Y,!0),r(D,null),r(p,null),r(k,null),e(b)!=null&&(clearTimeout(e(b)),r(b,null));return}r(D,performance.now(),!0),r(p,J,!0),r(k,rt,!0),e(b)!=null&&clearTimeout(e(b)),r(b,setTimeout(()=>{r(D,null),r(p,null),r(k,null),r(b,null)},u()),!0)},L=()=>{r(D,null),r(p,null),r(k,null),r(Y,!1),e(b)!=null&&(clearTimeout(e(b)),r(b,null))},E=A=>{e(h)&&!e(h).contains(A.target)&&n().close()},W=Be(n()),y=Xe(W);var z=Wn();xt("contextmenu",zt,function(...A){(v()?void 0:I)?.apply(this,A)}),xt("mousedown",zt,function(...A){(n().opened?E:void 0)?.apply(this,A)}),xt("keydown",zt,function(...A){(n().opened?y:void 0)?.apply(this,A)}),xt("touchstart",zt,function(...A){(v()||!i()?void 0:F)?.apply(this,A)},!0,!0),xt("touchcancel",zt,function(...A){(v()||!i()?void 0:L)?.apply(this,A)},!0);var M=S(z);{var V=A=>{var X=Un();X.__contextmenu=I;var ct=m(X);pt(ct,()=>t.children),d(X),xt("touchstart",X,function(...J){(i()?F:void 0)?.apply(this,J)},!0,!0),xt("touchcancel",X,function(...J){(i()?L:void 0)?.apply(this,J)},!0),o(A,X)},Z=A=>{var X=Q(),ct=S(X);pt(ct,()=>t.children),o(A,X)};K(M,A=>{v()?A(V):A(Z,!1)})}var j=a(M,2);{var H=A=>{var X=Hn();Mt(X,"clientWidth",ct=>e(g).width=ct),Mt(X,"clientHeight",ct=>e(g).height=ct),o(A,X)};K(j,A=>{n().has_custom_layout||A(H)})}var lt=a(j,2);{var mt=A=>{var X=qn();let ct;Xt(X,20,()=>n().params,J=>J,(J,rt)=>{var ft=Q(),at=S(ft);{var tt=_t=>{var dt=Q(),Ot=S(dt);pt(Ot,()=>rt),o(_t,dt)},et=_t=>{var dt=Q(),Ot=S(dt);{var Pt=q=>{var G=Q(),nt=S(G);pt(nt,()=>f()??St,()=>rt.props),o(q,G)},C=q=>{var G=Q(),nt=S(G);{var ot=it=>{var Ct=Q(),gt=S(Ct);pt(gt,()=>R()??St,()=>rt.props),o(it,Ct)},bt=it=>{var Ct=Q(),gt=S(Ct);{var vt=Et=>{var Ft=Q(),It=S(Ft);pt(It,()=>P()??St,()=>rt.props),o(Et,Ft)};K(gt,Et=>{rt.snippet==="separator"&&Et(vt)},!0)}o(it,Ct)};K(nt,it=>{rt.snippet==="text"?it(ot):it(bt,!1)},!0)}o(q,G)};K(Ot,q=>{rt.snippet==="link"?q(Pt):q(C,!1)},!0)}o(_t,dt)};K(at,_t=>{typeof rt=="function"?_t(tt):_t(et,!1)})}o(J,ft)}),d(X),Vt(X,J=>r(h,J),()=>e(h)),ut(J=>ct=re(X,"",ct,J),[()=>({transform:`translate3d(${e(T)??""}px, ${e($)??""}px, 0)`})]),Mt(X,"offsetWidth",J=>x.width=J),Mt(X,"offsetHeight",J=>x.height=J),o(A,X)};K(lt,A=>{n().opened&&A(mt)})}o(s,z),kt()}Yt(["contextmenu"]);const Bn=(s,t=St)=>{$e(s,jt(t))},Xn=(s,t=St)=>{ke(s,jt(t))},Yn=(s,t=St)=>{ne(s,jt(t))};var jn=w('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),Vn=w('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Kn=w('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Gn=w("<!> <!> <!>",1);function Zn(s,t){$t(t,!0);const n=st(t,"contextmenu",19,()=>new te),c=st(t,"longpress_move_tolerance",3,Dn),_=st(t,"longpress_duration",3,Rn),i=st(t,"bypass_with_tap_then_longpress",3,!0),u=st(t,"bypass_window",3,qe),l=st(t,"bypass_move_tolerance",3,We),v=st(t,"open_offset_x",3,Ue),f=st(t,"open_offset_y",3,He),R=st(t,"scoped",3,!1),P=st(t,"link_entry",3,Bn),h=st(t,"text_entry",3,Xn),g=st(t,"separator_entry",3,Yn);ee.set(n());let x=U(void 0);const T=O(()=>n().layout),$=ie.set(),p=O(()=>Ye(n().x,$.width,e(T).width)),k=O(()=>je(n().y,$.height,e(T).height));let D=U(void 0),Y=U(void 0),b=U(void 0),I=U(void 0),F=U(void 0),L=U(void 0),E=U(void 0),W=U(!1);const y=()=>{document.body.classList.add("contextmenu_pending")},z=()=>{document.body.classList.remove("contextmenu_pending")},M=()=>{r(F,!1),e(I)!=null&&(clearTimeout(e(I)),r(I,null)),z()},V=()=>{r(b,null),r(D,null),r(Y,null),r(L,!1),e(E)!=null&&(clearTimeout(e(E)),r(E,null))},Z=()=>{M(),V()},j=C=>{if(e(L)){V();return}const{target:q}=C;if(e(F)){if(e(x)?.contains(q))return;Z(),Tt(C);return}le(q,C.shiftKey)&&(e(x)?.contains(q)||xe(q,C.clientX+v(),C.clientY+f(),n(),{link_enabled:P()!==null,text_enabled:h()!==null,separator_enabled:g()!==null})&&(Tt(C),Z()))},H=C=>{r(F,!1),r(W,!1);const{touches:q,target:G}=C;if(n().opened||q.length!==1||!le(G,C.shiftKey)){Z();return}const{clientX:nt,clientY:ot}=q[0];if(i()){if(e(b)!=null&&performance.now()-e(b)<u()&&Math.hypot(nt-e(D),ot-e(Y))<l()){r(L,!0),r(b,null),r(D,null),r(Y,null),e(E)!=null&&(clearTimeout(e(E)),r(E,null));return}r(b,performance.now(),!0),e(E)!=null&&clearTimeout(e(E)),r(E,setTimeout(()=>{V()},u()),!0)}r(D,nt,!0),r(Y,ot,!0),y(),e(I)!=null&&M(),r(I,setTimeout(()=>{r(F,!0),z(),xe(G,e(D)+v(),e(Y)+f(),n(),{link_enabled:P()!==null,text_enabled:h()!==null,separator_enabled:g()!==null})},_()),!0)},lt=C=>{if(e(I)==null||n().opened)return;const{touches:q}=C;if(q.length!==1)return;const{clientX:G,clientY:nt}=q[0];if(Math.hypot(G-e(D),nt-e(Y))>c()){M();return}C.preventDefault()},mt=C=>{e(I)!=null&&(e(F)&&(Tt(C),r(W,!0)),M()),e(L)&&V()},A=()=>{Z()},X=C=>{e(x)&&!e(x).contains(C.target)&&n().close()},ct=Be(n()),J=Xe(ct),rt=C=>{const q={passive:!0,capture:!0},G={passive:!1,capture:!0},nt=oe(C,"touchstart",H,q),ot=oe(C,"touchmove",lt,G),bt=oe(C,"touchend",mt,G),it=oe(C,"touchcancel",A,q);return()=>{nt(),ot(),bt(),it()}};var ft=Gn();xt("contextmenu",zt,function(...C){(R()?void 0:j)?.apply(this,C)}),xt("mousedown",zt,function(...C){(n().opened?X:void 0)?.apply(this,C)}),xt("keydown",zt,function(...C){(n().opened?J:void 0)?.apply(this,C)}),Te(zt,()=>R()?void 0:rt);var at=S(ft);{var tt=C=>{var q=jn();q.__contextmenu=j;var G=m(q);pt(G,()=>t.children),d(q),Te(q,()=>rt),o(C,q)},et=C=>{var q=Q(),G=S(q);pt(G,()=>t.children),o(C,q)};K(at,C=>{R()?C(tt):C(et,!1)})}var _t=a(at,2);{var dt=C=>{var q=Vn();Mt(q,"clientWidth",G=>e(T).width=G),Mt(q,"clientHeight",G=>e(T).height=G),o(C,q)};K(_t,C=>{n().has_custom_layout||C(dt)})}var Ot=a(_t,2);{var Pt=C=>{var q=Kn();let G;Xt(q,20,()=>n().params,nt=>nt,(nt,ot)=>{var bt=Q(),it=S(bt);{var Ct=vt=>{var Et=Q(),Ft=S(Et);pt(Ft,()=>ot),o(vt,Et)},gt=vt=>{var Et=Q(),Ft=S(Et);{var It=qt=>{var Kt=Q(),ve=S(Kt);pt(ve,()=>P()??St,()=>ot.props),o(qt,Kt)},_e=qt=>{var Kt=Q(),ve=S(Kt);{var Ge=Wt=>{var Gt=Q(),me=S(Gt);pt(me,()=>h()??St,()=>ot.props),o(Wt,Gt)},Ze=Wt=>{var Gt=Q(),me=S(Gt);{var Je=pe=>{var Ce=Q(),Qe=S(Ce);pt(Qe,()=>g()??St,()=>ot.props),o(pe,Ce)};K(me,pe=>{ot.snippet==="separator"&&pe(Je)},!0)}o(Wt,Gt)};K(ve,Wt=>{ot.snippet==="text"?Wt(Ge):Wt(Ze,!1)},!0)}o(qt,Kt)};K(Ft,qt=>{ot.snippet==="link"?qt(It):qt(_e,!1)},!0)}o(vt,Et)};K(it,vt=>{typeof ot=="function"?vt(Ct):vt(gt,!1)})}o(nt,bt)}),d(q),Vt(q,nt=>r(x,nt),()=>e(x)),ut(nt=>G=re(q,"",G,nt),[()=>({transform:`translate3d(${e(p)??""}px, ${e(k)??""}px, 0)`})]),xt("click",q,function(...nt){(e(W)?ot=>{r(W,!1),Tt(ot)}:void 0)?.apply(this,nt)},!0),Mt(q,"offsetWidth",nt=>$.width=nt),Mt(q,"offsetHeight",nt=>$.height=nt),o(C,q)};K(Ot,C=>{n().opened&&C(Pt)})}o(s,ft),kt()}Yt(["contextmenu"]);class Jn{#t=U();get variant(){return e(this.#t)}set variant(t){r(this.#t,t,!0)}#e=O(()=>this.variant==="standard"?Oe:Zn);get component(){return e(this.#e)}set component(t){r(this.#e,t)}#n=O(()=>this.component===Oe?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){r(this.#n,t)}constructor(t="standard"){this.variant=t}}const Dt=ue(()=>new Jn("standard"));var Qn=w('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Ve(s,t){$t(t,!0);const n=[],c=Dt.get();var _=Qn(),i=a(m(_),2),u=m(i);Bt(u),u.value=u.__value="standard",N(2),d(i);var l=a(i,2),v=m(l);Bt(v),v.value=v.__value="compat",N(2),d(l),d(_),Pe(n,[],u,()=>c.variant,f=>c.variant=f),Pe(n,[],v,()=>c.variant,f=>c.variant=f),o(s,_),kt()}var to=w('<p class="panel p_md">alert B -- also inherits A</p>'),eo=w('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),no=w("<code>navigator.vibrate</code>"),oo=w(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			for input/textarea/contenteditable)</li> <li>tap-then-longpress opens the system contextmenu or performs other default behavior like
			selecting text, bypassing the Fuz contextmenu</li> <li>tap-then-longpress can't work for clickable elements like links; longpress on the first
			contextmenu entry for those cases (double-longpress)</li></ul> <h4>All devices:</h4> <ul><li>opening the contextmenu on the contextmenu itself shows the system contextmenu, bypassing the
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function so(s,t){$t(t,!0);const n=Dt.get(),c=O(()=>n.component),_=O(()=>n.name);Nt(s,{children:(i,u)=>{var l=oo(),v=S(l);Rt(v,{text:"Introduction"});var f=a(v,2),R=a(m(f),5);Qt(R,{path:"Web/API/Element/contextmenu_event"}),N(3),d(f);var P=a(f,4),h=a(m(P)),g=m(h,!0);d(h),N(5),d(P);var x=a(P,2);Ht(x,()=>e(c),(Y,b)=>{b(Y,{scoped:!0,children:(I,F)=>{At(I,{entries:E=>{ht(E,{run:()=>alert("alert A"),children:(W,y)=>{N();var z=B("alert A");o(W,z)},$$slots:{default:!0}})},children:(E,W)=>{var y=eo(),z=a(m(y),2);At(z,{entries:V=>{ht(V,{run:()=>alert("alert B"),children:(Z,j)=>{N();var H=B("alert B");o(Z,H)},$$slots:{default:!0}})},children:(V,Z)=>{var j=to();o(V,j)},$$slots:{entries:!0,default:!0}}),d(y),o(E,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var T=a(x,2);Fe(T,{summary:b=>{N();var I=B("view code");o(b,I)},children:(b,I)=>{{let F=O(()=>`<${e(_)}>
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
</${e(_)}>`);Ut(b,{get content(){return e(F)}})}},$$slots:{summary:!0,default:!0}});var $=a(T,14),p=a(m($),2),k=a(m(p));Qt(k,{path:"Web/API/Navigator/vibrate",children:(Y,b)=>{var I=no();o(Y,I)},$$slots:{default:!0}}),d(p),d($);var D=a($,2);Ve(D,{}),ut(()=>wt(g,e(_))),o(i,l)},$$slots:{default:!0}}),kt()}var ao=w('<span class="font_family_mono">contextmenu</span> event',1),ro=w(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <p>Use <code>Contextmenu_Root</code> by default for better performance and haptic feedback. Use <code>Contextmenu_Root_For_Safari_Compatibility</code> only if you need iOS Safari support.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, better performance with fewer and less intrusive event handlers, fewer edge
			cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),io=w(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use tap-then-longpress instead of longpress.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),lo=w("<!> <!>",1);function co(s){var t=lo(),n=S(t);Nt(n,{children:(_,i)=>{var u=ro(),l=S(u);Rt(l,{text:"iOS compatibility"});var v=a(l,8),f=a(m(v),2),R=a(m(f));Qt(R,{path:"Web/API/Element/contextmenu_event",children:(h,g)=>{var x=ao();N(),o(h,x)},$$slots:{default:!0}}),d(f),N(4),d(v);var P=a(v,6);Ve(P,{}),o(_,u)},$$slots:{default:!0}});var c=a(n,2);Nt(c,{children:(_,i)=>{var u=io(),l=S(u);Rt(l,{text:"Caveats"});var v=a(l,8),f=a(m(v));Qt(f,{path:"Web/API/Element/contextmenu_event"}),N(3),d(v),o(_,u)},$$slots:{default:!0}}),o(s,t)}function uo(s){const t=s-1;return t*t*t+1}function _o(s){return--s*s*s*s*s+1}function ze(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=I=>Math.sqrt(I)*120,easing:u=uo}=c,l=getComputedStyle(s),v=l.transform==="none"?"":l.transform,[f,R]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,R/=s.clientHeight;var P=vo(s),h=s.clientWidth/n.width/P,g=s.clientHeight/n.height/P,x=t.left+t.width*f,T=t.top+t.height*R,$=n.left+n.width*f,p=n.top+n.height*R,k=(x-$)*h,D=(T-p)*g,Y=t.width/n.width,b=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(k*k+D*D)):i,easing:u,css:(I,F)=>{var L=F*k,E=F*D,W=I+F*Y,y=I+F*b;return`transform: ${v} translate(${L}px, ${E}px) scale(${W}, ${y});`}}}function vo(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var mo=w('<menu class="pane unstyled svelte-4htxep"><!></menu>'),po=w('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function de(s,t){$t(t,!0);const n=ee.get(),c=n.add_submenu(),{layout:_}=n,i=O(()=>c.selected);let u=U(void 0);const l=ie.get(),v=ie.set();let f=U(0),R=U(0);nn(()=>{e(u)&&P(e(u),_,l)});const P=(F,L,E)=>{const{x:W,y,width:z,height:M}=F.getBoundingClientRect();v.width=z,v.height=M;const V=W-e(f),Z=y-e(R),j=V+z+E.width-L.width;if(j<=0)r(f,E.width,!0);else{const H=z-V;H<=0?r(f,-z):H>j?r(f,E.width-j):r(f,H-z)}r(R,Math.min(0,L.height-(Z+M)),!0)};var h=po();let g;var x=m(h);let T;var $=m(x),p=m($),k=m(p);pt(k,()=>t.icon??St),d(p);var D=a(p,2),Y=m(D);pt(Y,()=>t.children),d(D),d($),N(2),d(x);var b=a(x,2);{var I=F=>{var L=mo();let E;var W=m(L);pt(W,()=>t.menu),d(L),Vt(L,y=>r(u,y),()=>e(u)),ut(y=>E=re(L,"",E,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(R)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(F,L)};K(b,F=>{e(i)&&F(I)})}d(h),ut((F,L)=>{g=re(h,"",g,F),T=yt(x,1,"menu_item plain selectable svelte-4htxep",null,T,L),Lt(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),xt("mouseenter",x,F=>{Tt(F),setTimeout(()=>n.select(c))}),o(s,h),kt()}var ho=w("<!> <!>",1);function ce(s,t){$t(t,!0);const n=st(t,"name",3,"Cat"),c=st(t,"icon",3,"😺");de(s,{icon:u=>{N();var l=B();ut(()=>wt(l,c())),o(u,l)},menu:u=>{var l=ho(),v=S(l);ht(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:P=>{var h=Q(),g=S(h);{var x=$=>{var p=B("🏠");o($,p)},T=$=>{var p=B("🌄");o($,p)};K(g,$=>{t.position==="adventure"?$(x):$(T,!1)})}o(P,h)},children:(P,h)=>{var g=Q(),x=S(g);{var T=p=>{var k=B("go home");o(p,k)},$=p=>{var k=B("go adventure");o(p,k)};K(x,p=>{t.position==="adventure"?p(T):p($,!1)})}o(P,g)},$$slots:{icon:!0,default:!0}});var f=a(v,2);ht(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:P=>{var h=Q(),g=S(h);{var x=$=>{var p=B("🌄");o($,p)},T=$=>{var p=B("🏠");o($,p)};K(g,$=>{t.position==="adventure"?$(x):$(T,!1)})}o(P,h)},children:(P,h)=>{var g=Q(),x=S(g);{var T=p=>{var k=B("do adventure");o(p,k)},$=p=>{var k=B("be home");o(p,k)};K(x,p=>{t.position==="adventure"?p(T):p($,!1)})}o(P,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{N();var v=B();ut(()=>wt(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var fo=w("<!> <!> <!>",1);function go(s,t){var n=fo(),c=S(n);$e(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{fn(l,{get data(){return gn},size:"var(--icon_size_xs)"})},children:(l,v)=>{N();var f=B("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=a(c,2);ne(_,{});var i=a(_,2);ht(i,{get run(){return t.toggle_about_dialog},icon:l=>{N();var v=B("?");o(l,v)},children:(l,v)=>{N();var f=B("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Ke=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var xo=w("<!> <!>",1),bo=w("<!> <!>",1),yo=w("<!> <!> <!>",1);function wo(s,t){$t(t,!0);const n=O(()=>Ke(t.adventure_cats));de(s,{icon:i=>{N();var u=B("🏠");o(i,u)},menu:i=>{var u=yo(),l=S(u);{var v=h=>{var g=xo(),x=S(g);ht(x,{run:()=>t.act({type:"call_cats_home"}),icon:p=>{N();var k=B("🐈‍⬛");o(p,k)},children:(p,k)=>{N();var D=B("call");o(p,D)},$$slots:{icon:!0,default:!0}});var T=a(x,2);ne(T,{}),o(h,g)};K(l,h=>{e(n)&&h(v)})}var f=a(l,2);Xt(f,17,()=>t.home_cats,h=>h.name,(h,g)=>{ce(h,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var R=a(f,2);{var P=h=>{var g=bo(),x=S(g);ht(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:p=>{N();var k=B("🏠");o(p,k)},children:(p,k)=>{N();var D=B("be");o(p,D)},$$slots:{icon:!0,default:!0}});var T=a(x,2);ht(T,{run:()=>t.act({type:"call_cats_adventure"}),icon:p=>{N();var k=B("🦋");o(p,k)},children:(p,k)=>{N();var D=B("leave");o(p,D)},$$slots:{icon:!0,default:!0}}),o(h,g)};K(R,h=>{e(n)||h(P)})}o(i,u)},children:(i,u)=>{N();var l=B("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var $o=w("<!> <!>",1),ko=w("<!> <!>",1),Co=w("<!> <!> <!>",1);function To(s,t){$t(t,!0);const n=O(()=>Ke(t.home_cats));de(s,{icon:i=>{N();var u=B("🌄");o(i,u)},menu:i=>{var u=Co(),l=S(u);{var v=h=>{var g=$o(),x=S(g);ht(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:p=>{N();var k=B("🦋");o(p,k)},children:(p,k)=>{N();var D=B("call");o(p,D)},$$slots:{icon:!0,default:!0}});var T=a(x,2);ne(T,{}),o(h,g)};K(l,h=>{e(n)&&h(v)})}var f=a(l,2);Xt(f,17,()=>t.adventure_cats,h=>h.name,(h,g)=>{ce(h,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var R=a(f,2);{var P=h=>{var g=ko(),x=S(g);ht(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:p=>{N();var k=B("🌄");o(p,k)},children:(p,k)=>{N();var D=B("do");o(p,D)},$$slots:{icon:!0,default:!0}});var T=a(x,2);ht(T,{run:()=>t.act({type:"call_cats_home"}),icon:p=>{N();var k=B("🐈‍⬛");o(p,k)},children:(p,k)=>{N();var D=B("leave");o(p,D)},$$slots:{icon:!0,default:!0}}),o(h,g)};K(R,h=>{e(n)||h(P)})}o(i,u)},children:(i,u)=>{N();var l=B("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),kt()}var So=w('<span class="icon svelte-y90lnf"> </span>'),Eo=w('<span class="name svelte-y90lnf"><!> </span>'),Po=w("<span><!><!></span>");function Ne(s,t){const n=st(t,"name",3,"Cat"),c=st(t,"icon",3,"😺"),_=st(t,"show_name",3,!0),i=st(t,"show_icon",3,!0);var u=Po();let l;var v=m(u);{var f=h=>{var g=So(),x=m(g,!0);d(g),ut(()=>wt(x,c())),o(h,g)};K(v,h=>{i()&&h(f)})}var R=a(v);{var P=h=>{var g=Eo(),x=m(g);pt(x,()=>t.children??St);var T=a(x,1,!0);d(g),ut(()=>wt(T,n())),o(h,g)};K(R,h=>{_()&&h(P)})}d(u),ut(h=>l=yt(u,1,"cat svelte-y90lnf",null,l,h),[()=>({"has-icon":i()})]),o(s,u)}const Io=`<script lang="ts">
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
`;var Ao=w("<!> <!>",1),Oo=w('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),zo=w('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),No=w('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Ro=w('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),Do=w('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Fo=w("<!> <!>",1),Mo=w('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Lo=w("<!> <!>",1);function Uo(s,t){$t(t,!0);const n=Dt.get(),c=O(()=>n.component),_="Alyssa",i="Ben",u="home";let l=U(u),v=U(u);const f=O(()=>e(l)===e(v)?"😺":"😾"),R=O(()=>e(l)===e(v)?"😸":"😿"),P=O(()=>({name:_,icon:e(f),position:e(l)})),h=O(()=>({name:i,icon:e(R),position:e(v)}));let g=U(!1);const x=(M,V)=>{const Z=[],j=[];for(const H of M){const lt=H.position==="home"?Z:j;V?lt.unshift(H):lt.push(H)}return{home_cats:Z,adventure_cats:j}},T=O(()=>x([e(P),e(h)],e(g))),$=O(()=>e(T).home_cats),p=O(()=>e(T).adventure_cats),k=O(()=>e(l)!==u||e(v)!==u),D=()=>{r(l,u),r(v,u)};let Y=U(!1);const b=()=>{r(Y,!e(Y))},I=M=>{switch(M.type){case"call_cats_adventure":{r(l,"adventure"),r(v,"adventure");break}case"call_cats_home":{r(l,"home"),r(v,"home");break}case"cat_go_adventure":{M.name===_?r(l,"adventure"):M.name===i&&r(v,"adventure");break}case"cat_go_home":{M.name===_?r(l,"home"):M.name===i&&r(v,"home");break}case"cat_be_or_do":{r(g,!e(g));break}}},[F,L]=pn({fallback:(M,V)=>{const Z=window.getComputedStyle(M),j=Z.transform==="none"?"":Z.transform;return{duration:1500,easing:_o,css:H=>`
					transform: ${j} scale(${H});
					opacity: ${H}
				`}}});var E=Lo(),W=S(E);Ht(W,()=>e(c),(M,V)=>{V(M,{scoped:!0,children:(Z,j)=>{Nt(Z,{children:(H,lt)=>{var mt=Fo(),A=S(mt);Rt(A,{text:"Full example"});var X=a(A,2);At(X,{entries:J=>{var rt=Ao(),ft=S(rt);{var at=et=>{ke(et,{run:D,content:"Reset",icon:"↻"})};K(ft,et=>{e(k)&&et(at)})}var tt=a(ft,2);go(tt,{toggle_about_dialog:b}),o(J,rt)},children:(J,rt)=>{var ft=Do(),at=S(ft),tt=m(at),et=m(tt);At(et,{entries:C=>{wo(C,{act:I,get home_cats(){return e($)},get adventure_cats(){return e(p)}})},children:(C,q)=>{var G=zo(),nt=a(m(G),2);Xt(nt,29,()=>e($),({name:ot,icon:bt,position:it})=>ot,(ot,bt)=>{let it=()=>e(bt).name,Ct=()=>e(bt).icon,gt=()=>e(bt).position;var vt=Oo(),Et=m(vt);At(Et,{entries:It=>{ce(It,{act:I,get name(){return it()},get icon(){return Ct()},get position(){return gt()}})},children:(It,_e)=>{Ne(It,{get name(){return it()},get icon(){return Ct()}})},$$slots:{entries:!0,default:!0}}),d(vt),Jt(1,vt,()=>L,()=>({key:it()})),Jt(2,vt,()=>F,()=>({key:it()})),Ae(vt,()=>ze,null),o(ot,vt)}),d(nt),d(G),o(C,G)},$$slots:{entries:!0,default:!0}});var _t=a(et,2);At(_t,{entries:C=>{To(C,{act:I,get home_cats(){return e($)},get adventure_cats(){return e(p)}})},children:(C,q)=>{var G=Ro(),nt=a(m(G),2);Xt(nt,29,()=>e(p),({name:ot,icon:bt,position:it})=>ot,(ot,bt)=>{let it=()=>e(bt).name,Ct=()=>e(bt).icon,gt=()=>e(bt).position;var vt=No(),Et=m(vt);At(Et,{entries:It=>{ce(It,{act:I,get name(){return it()},get icon(){return Ct()},get position(){return gt()}})},children:(It,_e)=>{Ne(It,{get name(){return it()},get icon(){return Ct()}})},$$slots:{entries:!0,default:!0}}),d(vt),Jt(1,vt,()=>L,()=>({key:it()})),Jt(2,vt,()=>F,()=>({key:it()})),Ae(vt,()=>ze,null),o(ot,vt)}),d(nt),d(G),o(C,G)},$$slots:{entries:!0,default:!0}}),d(tt),d(at);var dt=a(at,2),Ot=m(dt);Fe(Ot,{summary:C=>{N();var q=B("View example source");o(C,q)},children:(C,q)=>{Ut(C,{get content(){return Io}})},$$slots:{summary:!0,default:!0}}),d(dt),o(J,ft)},$$slots:{entries:!0,default:!0}}),o(H,mt)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=a(W,2);{var z=M=>{vn(M,{onclose:()=>r(Y,!1),children:(V,Z)=>{var j=Mo(),H=m(j),lt=a(m(H),8),mt=a(m(lt),2);xn(mt,{});var A=a(mt,4);bn(A,{}),d(lt),d(H),d(j),o(V,j)},$$slots:{default:!0}})};K(y,M=>{e(Y)&&M(z)})}o(s,E),kt()}var Ho=w("<!> <!> <!>",1),qo=w(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Wo=w("<!> <!>",1);function Bo(s,t){$t(t,!0);const n=Dt.get(),c=O(()=>n.component),_=O(()=>n.name);let i=U(!1),u=U(!1),l=U(!1);var v=Q(),f=S(v);Ht(f,()=>e(c),(R,P)=>{P(R,{scoped:!0,children:(h,g)=>{Nt(h,{children:(x,T)=>{var $=Wo(),p=S($);Rt(p,{text:"Basic usage"});var k=a(p,2);At(k,{entries:Y=>{var b=Ho(),I=S(b);ht(I,{run:()=>void r(i,!e(i)),children:(E,W)=>{N();var y=B("Hello world");o(E,y)},$$slots:{default:!0}});var F=a(I,2);ht(F,{run:()=>void r(u,!e(u)),icon:W=>{N();var y=B("🌞");o(W,y)},children:(W,y)=>{N();var z=B("Hello with an optional icon snippet");o(W,z)},$$slots:{icon:!0,default:!0}});var L=a(F,2);ht(L,{run:()=>void r(l,!e(l)),icon:"🌚",children:(E,W)=>{N();var y=B("Hello with an optional icon string");o(E,y)},$$slots:{default:!0}}),o(Y,b)},children:(Y,b)=>{var I=qo(),F=a(m(I),2);{let A=O(()=>`<${e(_)} scoped>
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
...markup without contextmenu behavior...`);Ut(F,{get content(){return e(A)}})}var L=a(F,2),E=m(L);let W;var y=m(E);d(E),d(L);var z=a(L,2),M=m(z);let V;var Z=m(M);d(M),d(z);var j=a(z,2),H=m(j);let lt;var mt=m(H);d(H),d(j),N(2),d(I),ut((A,X,ct)=>{W=yt(E,1,"",null,W,A),wt(y,`greeted = ${e(i)??""}`),V=yt(M,1,"",null,V,X),wt(Z,`greeted_icon_snippet = ${e(u)??""}`),lt=yt(H,1,"",null,lt,ct),wt(mt,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(Y,I)},$$slots:{entries:!0,default:!0}}),o(x,$)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),kt()}var Xo=w("<span> </span>");function Zt(s,t){const n=Re(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=O(()=>t.size??c);var u=Xo();be(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[un]:v}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=m(u,!0);d(u),ut(()=>wt(l,t.glyph)),o(s,u)}var Yo=w('<span class="color_f_5">option f</span>'),jo=w('<span class="color_g_5">option g</span>'),Vo=w('<span class="color_j_5">option j</span>'),Ko=w("<!> <!> <!> <!>",1),Go=w('<li class="color_error">Error: <code> </code></li>'),Zo=w('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),Jo=w(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),Qo=w("<!> <!>",1);function ts(s,t){$t(t,!0);const n=Dt.get(),c=O(()=>n.component),_=O(()=>n.name),i=new te;let u=U(void 0);const l=O(()=>e(u)?`color_${e(u)}_5`:void 0),v=O(()=>e(u)?`color_${e(u)}`:void 0);var f=Q(),R=S(f);Ht(R,()=>e(c),(P,h)=>{h(P,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Nt(g,{children:(T,$)=>{var p=Qo(),k=S(p);Rt(k,{text:"Custom instance"});var D=a(k,2);At(D,{entries:b=>{de(b,{icon:L=>{N();var E=B("🎨");o(L,E)},menu:L=>{var E=Ko(),W=S(E);ht(W,{run:()=>(r(u,"f"),{ok:!0,close:!1}),children:(V,Z)=>{var j=Yo();o(V,j)},$$slots:{default:!0}});var y=a(W,2);ht(y,{run:()=>(r(u,"g"),{ok:!0,close:!1}),children:(V,Z)=>{var j=jo();o(V,j)},$$slots:{default:!0}});var z=a(y,2);ht(z,{run:()=>(r(u,"j"),{ok:!0,close:!1}),children:(V,Z)=>{var j=Vo();o(V,j)},$$slots:{default:!0}});var M=a(z,2);ht(M,{run:()=>(i.close(),{ok:!0}),children:(V,Z)=>{N();var j=B("close contextmenu");o(V,j)},$$slots:{default:!0}}),o(L,E)},children:(L,E)=>{N();var W=B("select color");o(L,W)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(b,I)=>{var F=Jo(),L=m(F),E=a(m(L)),W=m(E,!0);d(E),N(5),d(L);var y=a(L,2);Ut(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var z=a(y,2);{let tt=O(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);Ut(z,{get content(){return e(tt)}})}var M=a(z,2),V=a(m(M));V.textContent="{ok: true, close: false}",N(),d(M);var Z=a(M,2),j=a(m(Z),2),H=m(j),lt=a(m(H),2),mt=m(lt,!0);d(lt),d(H);var A=a(H,2),X=a(m(A),2),ct=m(X);d(X),d(A);var J=a(A,2);{var rt=tt=>{var et=Go(),_t=a(m(et)),dt=m(_t,!0);d(_t),d(et),ut(()=>wt(dt,i.error)),o(tt,et)};K(J,tt=>{i.error&&tt(rt)})}d(j),d(Z);var ft=a(Z,2);{var at=tt=>{var et=Zo(),_t=m(et),dt=m(_t),Ot=m(dt);Zt(Ot,{glyph:"↑"}),d(dt);var Pt=a(dt,2),C=m(Pt),q=m(C);Zt(q,{glyph:"←"}),d(C);var G=a(C,2),nt=m(G);Zt(nt,{glyph:"↵"}),d(G);var ot=a(G,2),bt=m(ot);Zt(bt,{glyph:"→"}),d(ot),d(Pt);var it=a(Pt,2),Ct=m(it);Zt(Ct,{glyph:"↓"}),d(it),d(_t),d(et),ut(()=>{yt(dt,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),dt.disabled=!i.can_select_previous,yt(C,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),C.disabled=!i.can_collapse,yt(G,1,`border_radius_0 ${e(v)??""}`),G.disabled=!i.can_activate,yt(ot,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),ot.disabled=!i.can_expand,yt(it,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),it.disabled=!i.can_select_next}),xt("mousedown",dt,gt=>{Tt(gt),i.select_previous()},!0),xt("mousedown",C,gt=>{Tt(gt),i.collapse_selected()},!0),xt("mousedown",G,async gt=>{Tt(gt),await i.activate_selected()},!0),xt("mousedown",ot,gt=>{Tt(gt),i.expand_selected()},!0),xt("mousedown",it,gt=>{Tt(gt),i.select_next()},!0),Jt(3,et,()=>hn),o(tt,et)};K(ft,tt=>{i.opened&&tt(at)})}d(F),ut(()=>{wt(W,e(_)),yt(Z,1,`mb_md ${e(l)??""}`),wt(mt,i.opened),wt(ct,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(b,F)},$$slots:{entries:!0,default:!0}}),o(T,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),kt()}const es=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var ns=w(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),os=w("<div><!></div> <!>",1);function ss(s,t){$t(t,!0);const n=Dt.get(),c=O(()=>n.component),_=new te;let i=U(!1),u=U(void 0),l=U("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,R=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,P=O(()=>e(l)===v||e(l)===f||e(l)===R);var h=Q(),g=S(h);Ht(g,()=>e(c),(x,T)=>{T(x,{get contextmenu(){return _},scoped:!0,children:($,p)=>{Nt($,{children:(k,D)=>{var Y=os(),b=S(Y);let I;var F=m(b);Rt(F,{text:"Select text"}),d(b);var L=a(b,2);At(L,{entries:W=>{ht(W,{run:()=>void r(i,!e(i)),children:(y,z)=>{N();var M=B("Toggle something");o(y,M)},$$slots:{default:!0}})},children:(W,y)=>{var z=ns();let M;var V=m(z),Z=a(m(V),2),j=a(m(Z));j.__click=[es,u];let H;N(),d(Z),d(V),Vt(V,et=>r(u,et),()=>e(u));var lt=a(V,2),mt=m(lt);Bt(mt),d(lt);var A=a(lt,2);let X;var ct=a(A,2),J=m(ct);on(J),d(ct);var rt=a(ct,2),ft=m(rt);Qt(ft,{path:"Web/HTML/Global_attributes/contenteditable"}),N(),d(rt);var at=a(rt,4),tt=a(at,4);N(2),d(z),ut((et,_t,dt)=>{M=yt(z,1,"panel p_md",null,M,et),H=yt(j,1,"",null,H,_t),X=yt(A,1,"",null,X,dt)},[()=>({color_g_5:e(P)}),()=>({color_a:e(i)}),()=>({color_g_5:e(P)})]),Ie(mt,()=>e(l),et=>r(l,et)),Ie(J,()=>e(l),et=>r(l,et)),Ee("innerText",at,()=>e(l),et=>r(l,et)),Ee("innerText",tt,()=>e(l),et=>r(l,et)),o(W,z)},$$slots:{entries:!0,default:!0}}),ut(E=>I=yt(b,1,"",null,I,E),[()=>({color_d_5:e(P)})]),o(k,Y)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,h),kt()}Yt(["click"]);const as=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var rs=w('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),is=w('<li>custom "some custom entry" entry</li>'),ls=w('<li>"copy text" entry when text is selected</li>'),cs=w("<li>link entry when clicking on a link</li>"),us=w("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),ds=w(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),_s=w('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function vs(s,t){$t(t,!0);const n=h=>{var g=rs(),x=m(g),T=a(m(x));T.__click=[as,P];let $;N(),d(x),Vt(x,D=>r(P,D),()=>e(P));var p=a(x,2),k=a(m(p));N(),d(p),d(g),ut((D,Y)=>{$=yt(T,1,"",null,$,D),Lt(k,"href",Y)},[()=>({color_h:e(R)}),()=>yn("/")]),o(h,g)},c=Dt.get(),_=O(()=>c.component),i=O(()=>c.name),u=new te;let l=U(!1),v=U(!1),f=U(!0),R=U(!1),P=U(void 0);Nt(s,{children:(h,g)=>{var x=_s(),T=S(x);Rt(T,{text:"Disable default behaviors"});var $=a(T,4);{let H=O(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);Ut($,{get content(){return e(H)}})}var p=a($,2),k=m(p),D=m(k);Bt(D);var Y=a(D,2),b=a(m(Y));b.textContent="link_entry={null}",d(Y),d(k);var I=a(k,2),F=m(I);Bt(F);var L=a(F,2),E=a(m(L));E.textContent="text_entry={null}",d(L),d(I),d(p);var W=a(p,2);{let H=O(()=>e(l)?null:void 0),lt=O(()=>e(v)?null:void 0);Ht(W,()=>e(_),(mt,A)=>{A(mt,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(H)},get text_entry(){return e(lt)},children:(X,ct)=>{var J=Q(),rt=S(J);{var ft=tt=>{At(tt,{entries:_t=>{ht(_t,{icon:">",run:()=>void r(R,!e(R)),children:(dt,Ot)=>{N();var Pt=B("some custom entry");o(dt,Pt)},$$slots:{default:!0}})},children:(_t,dt)=>{n(_t)},$$slots:{entries:!0,default:!0}})},at=tt=>{n(tt)};K(rt,tt=>{e(f)?tt(ft):tt(at,!1)})}o(X,J)},$$slots:{default:!0}})})}var y=a(W,4),z=m(y),M=m(z);Bt(M),N(),d(z),d(y);var V=a(y,2);{var Z=H=>{var lt=us(),mt=a(S(lt),2),A=m(mt);{var X=at=>{var tt=is();o(at,tt)};K(A,at=>{e(f)&&at(X)})}var ct=a(A,2);{var J=at=>{var tt=ls();o(at,tt)};K(ct,at=>{e(v)||at(J)})}var rt=a(ct,2);{var ft=at=>{var tt=cs();o(at,tt)};K(rt,at=>{e(l)||at(ft)})}d(mt),o(H,lt)},j=H=>{var lt=ds();o(H,lt)};K(V,H=>{e(f)||!e(l)||!e(v)?H(Z):H(j,!1)})}fe(D,()=>e(l),H=>r(l,H)),fe(F,()=>e(v),H=>r(v,H)),fe(M,()=>e(f),H=>r(f,H)),o(h,x)},$$slots:{default:!0}}),kt()}Yt(["click"]);var ms=w(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function ps(s,t){$t(t,!0);const n=Dt.get(),c=O(()=>n.component),_=O(()=>n.name);var i=Q(),u=S(i);Ht(u,()=>e(c),(l,v)=>{v(l,{scoped:!0,children:(f,R)=>{Nt(f,{children:(P,h)=>{var g=ms(),x=S(g);Rt(x,{text:"Default behaviors"});var T=a(x,2),$=m(T);{let p=O(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);Ut($,{get content(){return e(p)}})}N(6),d(T),o(P,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),kt()}var hs=w("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function qs(s,t){$t(t,!0);const c=an("Contextmenu");Dt.set(),sn(s,{get tome(){return c},children:(_,i)=>{var u=hs(),l=S(u);so(l,{});var v=a(l,2);Bo(v,{});var f=a(v,2);ps(f,{});var R=a(f,2);ss(R,{});var P=a(R,2);vs(P,{});var h=a(P,2);ts(h,{});var g=a(h,2);Uo(g,{});var x=a(g,2);co(x),N(2),o(_,u)},$$slots:{default:!0}}),kt()}export{qs as component};
