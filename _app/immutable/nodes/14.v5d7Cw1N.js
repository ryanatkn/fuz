import"../chunks/DsnmJJEf.js";import{C as Je,z as Qe,af as L,h as e,ae as r,aj as re,u as S,e as et,a as E,b as o,g as vt,p as wt,f as k,s as a,d as m,t as lt,b9 as rt,c as $t,r as d,b8 as Yt,ac as q,ad as D,ab as Tt,F as Ht,ba as It,bE as tn}from"../chunks/B7qs8f6Z.js";import{T as en}from"../chunks/B-vvwLsW.js";import{g as nn}from"../chunks/BJU8yBZG.js";import{s as xt}from"../chunks/D2Z-uHvG.js";import{c as Wt}from"../chunks/BrxtZYhB.js";import{C as qt}from"../chunks/D6MOtcoF.js";import{M as ee}from"../chunks/DTVHvbJH.js";import{T as Rt,a as Dt}from"../chunks/BMlqs85T.js";import{e as on}from"../chunks/36zOYlHh.js";import{a as sn}from"../chunks/DQ_KS0MJ.js";import{a as be,b as gt,s as Ut,C as an,c as ie,r as Xt,S as rn}from"../chunks/RztL3XFC.js";import{p as nt,r as Ne,s as Vt}from"../chunks/C2A3Zqzr.js";import{o as Te}from"../chunks/BMgspcsU.js";import{a as ln,s as Pt,b as Re,c as cn,D as un}from"../chunks/BHOd2aBW.js";import{c as _e,a as he,e as jt}from"../chunks/GCAAGpmM.js";import{i as Z}from"../chunks/DHMuHmk0.js";import{P as dn}from"../chunks/DQ8BTRL9.js";import{D as De,b as Ee}from"../chunks/DBElEuOP.js";import{b as Se,a as Pe,c as fe}from"../chunks/7g2Ar_02.js";import{b as Gt}from"../chunks/2LOYOryH.js";import{t as te,c as _n,a as Ae,s as vn}from"../chunks/DkIYfvB-.js";import{S as mn,g as pn}from"../chunks/D1VJQj3M.js";import{C as hn,T as fn}from"../chunks/YS9TCVCR.js";import{r as gn}from"../chunks/C9XuIb1c.js";class ye{#t=new WeakMap;#e;#n;static entries=new WeakMap;constructor(t){this.#n=t}observe(t,n){var c=this.#t.get(t)||new Set;return c.add(n),this.#t.set(t,c),this.#o().observe(t,this.#n),()=>{var _=this.#t.get(t);_.delete(n),_.size===0&&(this.#t.delete(t),this.#e.unobserve(t))}}#o(){return this.#e??(this.#e=new ResizeObserver(t=>{for(var n of t){ye.entries.set(n.target,n);for(var c of this.#t.get(n.target)||[])c(n)}}))}}var xn=new ye({box:"border-box"});function le(s,t,n){var c=xn.observe(s,()=>n(s[t]));Je(()=>(Qe(()=>n(s[t])),c))}const bn=Object.freeze({});class Fe{#t=L(0);get width(){return e(this.#t)}set width(t){r(this.#t,t,!0)}#e=L(0);get height(){return e(this.#e)}set height(t){r(this.#e,t,!0)}}class yn{is_menu=!1;menu;run;disabled;#t=L(!1);get selected(){return e(this.#t)}set selected(t){r(this.#t,t,!0)}#e=L(!1);get pending(){return e(this.#e)}set pending(t){r(this.#e,t,!0)}#n=L(null);get error_message(){return e(this.#n)}set error_message(t){r(this.#n,t,!0)}#o=L(null);get promise(){return e(this.#o)}set promise(t){r(this.#o,t,!0)}constructor(t,n,c=()=>!1){this.menu=t,this.run=n,this.disabled=c}}class wn{is_menu=!0;menu;depth;#t=L(!1);get selected(){return e(this.#t)}set selected(t){r(this.#t,t,!0)}#e=L(re([]));get items(){return e(this.#e)}set items(t){r(this.#e,t,!0)}constructor(t,n){this.menu=t,this.depth=n}}class $n{is_menu=!0;menu=null;depth=1;#t=L(re([]));get items(){return e(this.#t)}set items(t){r(this.#t,t,!0)}}class ne{layout;initial_layout;#t=L(!1);get opened(){return e(this.#t)}set opened(t){r(this.#t,t,!0)}#e=L(0);get x(){return e(this.#e)}set x(t){r(this.#e,t,!0)}#n=L(0);get y(){return e(this.#n)}set y(t){r(this.#n,t,!0)}#o=L(re([]));get params(){return e(this.#o)}set params(t){r(this.#o,t,!0)}#s=L();get error(){return e(this.#s)}set error(t){r(this.#s,t,!0)}root_menu=new $n;#a=L(re([]));get selections(){return e(this.#a)}set selections(t){r(this.#a,t,!0)}#r=S(()=>this.selections.length>1);get can_collapse(){return e(this.#r)}set can_collapse(t){r(this.#r,t)}#i=S(()=>{const t=this.selections.at(-1);return!!t?.is_menu&&t.items.length>0});get can_expand(){return e(this.#i)}set can_expand(t){r(this.#i,t)}#l=S(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_next(){return e(this.#l)}set can_select_next(t){r(this.#l,t)}#c=S(()=>(this.selections.at(-1)?.menu??this.root_menu).items.length>1);get can_select_previous(){return e(this.#c)}set can_select_previous(t){r(this.#c,t)}#u=S(()=>{const t=this.selections.at(-1);return t?t.is_menu?t.items.length>0:!t.disabled():!1});get can_activate(){return e(this.#u)}set can_activate(t){r(this.#u,t)}constructor(t){this.initial_layout=t?.layout,this.layout=this.initial_layout??new Fe}open(t,n,c){this.selections.length=0,this.opened=!0,this.x=n,this.y=c,this.params=t}close(){this.opened&&(this.reset_items(this.root_menu.items),this.opened=!1)}reset_items(t){for(const n of t)n.is_menu?this.reset_items(n.items):(n.promise=null,n.pending=!1,n.error_message=null)}activate(t){if(t.is_menu)this.expand_selected();else{if(t.disabled())return!1;let n;try{n=t.run()()}catch(c){const _=typeof c?.message=="string"?c.message:void 0;t.error_message=_??"unknown error",this.error=_}if(ln(n)){t.pending=!0,t.error_message=null;const c=t.promise=n.then(_=>{if(c===t.promise){if(typeof _?.ok=="boolean")if(_.ok)_.close!==!1&&this.close();else{const i=typeof _.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}else this.close();return _}},_=>{if(c!==t.promise)return;const i=typeof _?.message=="string"?_.message:void 0;t.error_message=i??"unknown error",this.error=i}).finally(()=>{c===t.promise&&(t.pending=!1,t.promise=null)});return t.promise}if(typeof n?.ok=="boolean")if(n.ok)n.close!==!1&&this.close();else{const c=typeof n.message=="string"?n.message:void 0;t.error_message=c??"unknown error",this.error=c}else this.close()}return!0}activate_selected(){const t=this.selections.at(-1);if(t)return this.activate(t);this.select_first()}select(t){if(this.selections.at(-1)===t)return;for(const c of this.selections)c.selected=!1;this.selections.length=0;let n=t;do n.selected=!0,this.selections.unshift(n);while((n=n.menu)&&n.menu)}collapse_selected(){if(!this.can_collapse)return;const t=this.selections.pop();t.selected=!1}expand_selected(){if(!this.can_expand)return;const t=this.selections.at(-1);if(!t?.is_menu)return;const n=t.items[0];n.selected=!0,this.selections.push(n)}select_next(){if(!this.selections.length){this.select_first();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===t.menu.items.length-1?0:n+1])}select_previous(){if(!this.selections.length){this.select_last();return}const t=this.selections.at(-1),n=t.menu.items.indexOf(t);this.select(t.menu.items[n===0?t.menu.items.length-1:n-1])}select_first(){this.select((this.selections.at(-1)?.menu??this.root_menu).items[0])}select_last(){const{items:t}=this.selections.at(-1)?.menu??this.root_menu;this.select(t.at(-1))}add_entry(t,n=()=>!1){const c=ge.maybe_get()??this.root_menu,_=new yn(c,t,n);return c.items.push(_),Te(()=>{c.items.length=0}),_}add_submenu(){const t=ge.maybe_get()??this.root_menu,n=new wn(t,t.depth+1);return t.items.push(n),ge.set(n),Te(()=>{t.items.length=0}),n}}const we="contextmenu",kn=`a,[data-${we}]`,ae=new Map;let Cn=0;const Tn=(s,t)=>{if(t==null)return;const n=Cn+++"";return s.dataset[we]=n,ae.set(n,t),{update:c=>{ae.set(n,c)},destroy:()=>{ae.delete(n)}}},En=17,xe=(s,t,n,c,_)=>{const{link_enabled:i=!0,text_enabled:u=!0,separator_enabled:l=!0,vibrate:v=!0}=_??bn,f=Sn(s)?.filter(O=>typeof O=="function"||(O.snippet!=="link"||i)&&(O.snippet!=="text"||u)&&(O.snippet!=="separator"||l));return f?.length?(c.open(f,t,n),v&&navigator.vibrate&&navigator.vibrate(En),!0):!1},Sn=s=>{let t=null,n=s,c,_;for(;n=n?.closest(kn);){if(c=n.dataset[we]){if(t??=[],_=ae.get(c),_===void 0)continue;Array.isArray(_)?(t??=[]).push(..._):(t??=[]).push(_)}n.tagName==="A"&&(t??=[]).push({snippet:"link",props:{href:n.href}}),n=n.parentElement}if(t){const i=window.getSelection()?.toString();i&&t.unshift({snippet:"text",props:{content:"copy text",icon:"📋",run:async()=>{await navigator.clipboard.writeText(i)}}})}return t},oe=_e(),ge=_e(),ce=_e(()=>new Fe);function zt(s,t){const n=nt(t,"tag",3,"span");var c=et(),_=E(c);on(_,n,!1,(i,u)=>{sn(i,(f,O)=>Tn?.(f,O),()=>t.entries),be(i,()=>({class:"display_contents",...t.attrs}));var l=et(),v=E(l);vt(v,()=>t.children),o(u,l)}),o(s,c)}var Pn=k('<li role="menuitem" aria-label="contextmenu entry" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div> <!></div></li>');function mt(s,t){wt(t,!0);const n=nt(t,"disabled",3,!1),c=oe.get(),_=c.add_entry(()=>t.run,()=>n()),i=S(()=>_.selected),u=S(()=>_.pending),l=S(()=>_.error_message),v=S(()=>_.disabled());var f=Pn();let O;f.__click=function(...P){(e(v)?void 0:()=>{setTimeout(()=>c.activate(_))})?.apply(this,P)};var I=m(f),p=m(I),g=m(p);{var x=P=>{var z=q();lt(()=>xt(z,t.icon)),o(P,z)},$=P=>{var z=et(),A=E(z);{var R=w=>{var H=et(),y=E(H);vt(y,()=>t.icon),o(w,H)};Z(A,w=>{t.icon&&w(R)},!0)}o(P,z)};Z(g,P=>{typeof t.icon=="string"?P(x):P($,!1)})}d(p);var C=a(p,2),h=m(C);vt(h,()=>t.children),d(C);var T=a(C,2);{var B=P=>{dn(P,{})},J=P=>{var z=et(),A=E(z);{var R=w=>{var H=q("⚠️");o(w,H)};Z(A,w=>{e(l)&&w(R)},!0)}o(P,z)};Z(T,P=>{e(u)?P(B):P(J,!1)})}d(I),d(f),lt(P=>{O=gt(f,1,"menu_item plain selectable deselectable svelte-q1a8dq",null,O,P),Ut(f,"aria-disabled",e(v)),Ut(f,"title",e(l)?`Error: ${e(l)}`:void 0)},[()=>({selected:e(i),disabled:e(v)})]),rt("mouseenter",f,function(...P){(e(v)?void 0:z=>{Pt(z),c.select(_)})?.apply(this,P)}),o(s,f),$t()}Yt(["click"]);var An=s=>{s.stopPropagation()},In=k('<li role="none" class="svelte-1fkm0gl"><a role="menuitem" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><span class="text svelte-1fkm0gl"><!></span></div></div></a></li>');function $e(s,t){wt(t,!0);const n="🔗",c=nt(t,"icon",3,n),_=nt(t,"disabled",3,!1),i=oe.get();let u=L(void 0);const l=i.add_entry(()=>()=>{e(u)&&e(u).click()},()=>_()),v=S(()=>l.selected),f=S(()=>l.disabled()),O=(y,N=location.host)=>{const F=he(he(y,"https://"),"http://");return F.startsWith(N+"/")?he(F,N):F},I=S(()=>O(t.href)),p=S(()=>!(e(I)[0]==="."||e(I)[0]==="/"&&e(I)[1]!=="/")),g=S(()=>e(p)?"noreferrer":void 0);var x=In(),$=m(x);let C;$.__click=function(...y){(e(f)?void 0:()=>i.close())?.apply(this,y)},$.__contextmenu=[An];var h=m($),T=m(h),B=m(T);{var J=y=>{var N=q();lt(()=>xt(N,c())),o(y,N)},P=y=>{var N=et(),F=E(N);vt(F,c,()=>n),o(y,N)};Z(B,y=>{typeof c()=="string"?y(J):y(P,!1)})}d(T);var z=a(T,2),A=m(z),R=m(A);{var w=y=>{var N=et(),F=E(N);vt(F,()=>t.children),o(y,N)},H=y=>{var N=q();lt(()=>xt(N,e(I))),o(y,N)};Z(R,y=>{t.children?y(w):y(H,!1)})}d(A),d(z),d(h),d($),Gt($,y=>r(u,y),()=>e(u)),d(x),lt(y=>{C=gt($,1,"menu_item plain svelte-1fkm0gl",null,C,y),Ut($,"aria-disabled",e(f)),Ut($,"href",t.href),Ut($,"rel",e(g))},[()=>({selected:e(v),disabled:e(f)})]),rt("mouseenter",$,function(...y){(e(f)?void 0:N=>{Pt(N),i.select(l)})?.apply(this,y)}),o(s,x),$t()}Yt(["click","contextmenu"]);function ke(s,t){mt(s,{get run(){return t.run},icon:c=>{D();var _=q();lt(()=>xt(_,t.icon)),o(c,_)},children:(c,_)=>{D();var i=q();lt(()=>xt(i,t.content)),o(c,i)},$$slots:{icon:!0,default:!0}})}var On=k("<li></li>");function se(s,t){const n=Ne(t,["$$slots","$$events","$$legacy"]);var c=On();be(c,()=>({role:"separator","aria-orientation":"vertical",...n,[an]:{contextmenu_separator:!0}}),void 0,void 0,"svelte-89x3rn"),o(s,c)}const Me=-2,Le=-2,He=660,Ue=7,zn=633,Nn=21,ue=(s,t)=>!t&&(s instanceof HTMLElement||s instanceof SVGElement)&&!Re(s)&&!cn(s),qe=s=>new Map([["Escape",()=>s.close()],["ArrowLeft",()=>s.collapse_selected()],["ArrowRight",()=>s.expand_selected()],["ArrowDown",()=>s.select_next()],["ArrowUp",()=>s.select_previous()],["Home",()=>s.select_first()],["End",()=>s.select_last()],[" ",()=>s.activate_selected()],["Enter",()=>s.activate_selected()]]),We=s=>t=>{const n=s.get(t.key);!n||Re(t.target)||(Pt(t),n())},Be=(s,t,n)=>s+Math.min(0,n-(s+t)),Xe=(s,t,n)=>s+Math.min(0,n-(s+t)),Rn=(s,t=Tt)=>{$e(s,Vt(t))},Dn=(s,t=Tt)=>{ke(s,Vt(t))},Fn=(s,t=Tt)=>{se(s,Vt(t))};var Mn=k('<div class="contextmenu_root svelte-1mc2pnq" role="region"><!></div>'),Ln=k('<div class="contextmenu_layout svelte-1mc2pnq" aria-hidden="true"></div>'),Hn=k('<ul class="contextmenu unstyled pane svelte-1mc2pnq" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Un=k("<!> <!>  <!>",1);function Ie(s,t){wt(t,!0);const n=nt(t,"contextmenu",19,()=>new ne),c=nt(t,"open_offset_x",3,Me),_=nt(t,"open_offset_y",3,Le),i=nt(t,"bypass_with_tap_then_longpress",3,!0),u=nt(t,"tap_then_longpress_duration",3,He),l=nt(t,"tap_then_longpress_move_tolerance",3,Ue),v=nt(t,"scoped",3,!1),f=nt(t,"link_entry",3,Rn),O=nt(t,"text_entry",3,Dn),I=nt(t,"separator_entry",3,Fn);oe.set(n());let p=L(void 0);const g=S(()=>n().layout),x=S(()=>n().initial_layout),$=S(()=>e(g)===e(x));let C=L(void 0),h=L(void 0);Ht(()=>{!e($)&&e(C)!==void 0&&(e(g).width=e(C))}),Ht(()=>{!e($)&&e(h)!==void 0&&(e(g).height=e(h))});const T=ce.set();Ht(()=>{if(e(p)){const M=e(p).getBoundingClientRect();T.width=M.width,T.height=M.height}});const B=S(()=>Be(n().x,T.width,e(g).width)),J=S(()=>Xe(n().y,T.height,e(g).height));let P=L(void 0),z=L(void 0),A=L(void 0),R=L(void 0),w=L(void 0);const H=M=>{if(e(R)){r(R,!1),r(A,void 0),r(P,void 0),r(z,void 0),e(w)!==void 0&&(clearTimeout(e(w)),r(w,void 0));return}const{target:Y}=M;ue(Y,M.shiftKey)&&(e(p)?.contains(Y)||xe(Y,M.clientX+c(),M.clientY+_(),n(),{link_enabled:f()!==null,text_enabled:O()!==null,separator_enabled:I()!==null})&&Pt(M))},y=M=>{if(!i())return;const{touches:Y,target:K}=M;if(n().opened||Y.length!==1||!ue(K,M.shiftKey)){r(A,void 0),r(P,void 0),r(z,void 0),r(R,!1),e(w)!==void 0&&(clearTimeout(e(w)),r(w,void 0));return}const{clientX:W,clientY:V}=Y[0];if(e(A)!==void 0&&performance.now()-e(A)<u()&&Math.hypot(W-e(P),V-e(z))<l()){r(R,!0),r(A,void 0),r(P,void 0),r(z,void 0),e(w)!==void 0&&(clearTimeout(e(w)),r(w,void 0));return}r(A,performance.now(),!0),r(P,W,!0),r(z,V,!0),e(w)!==void 0&&clearTimeout(e(w)),r(w,setTimeout(()=>{r(A,void 0),r(P,void 0),r(z,void 0),r(w,void 0)},u()),!0)},N=()=>{r(A,void 0),r(P,void 0),r(z,void 0),r(R,!1),e(w)!==void 0&&(clearTimeout(e(w)),r(w,void 0))},F=M=>{e(p)&&!e(p).contains(M.target)&&n().close()},G=qe(n()),Q=We(G);var j=Un();rt("contextmenu",It,function(...M){(v()?void 0:H)?.apply(this,M)}),rt("mousedown",It,function(...M){(n().opened?F:void 0)?.apply(this,M)}),rt("keydown",It,function(...M){(n().opened?Q:void 0)?.apply(this,M)}),rt("touchstart",It,function(...M){(v()||!i()?void 0:y)?.apply(this,M)},!0,!0),rt("touchcancel",It,function(...M){(v()||!i()?void 0:N)?.apply(this,M)},!0);var U=E(j);{var ot=M=>{var Y=Mn();Y.__contextmenu=H;var K=m(Y);vt(K,()=>t.children),d(Y),rt("touchstart",Y,function(...W){(i()?y:void 0)?.apply(this,W)},!0,!0),rt("touchcancel",Y,function(...W){(i()?N:void 0)?.apply(this,W)},!0),o(M,Y)},ct=M=>{var Y=et(),K=E(Y);vt(K,()=>t.children),o(M,Y)};Z(U,M=>{v()?M(ot):M(ct,!1)})}var at=a(U,2);{var ft=M=>{var Y=Ln();le(Y,"clientHeight",K=>r(h,K)),le(Y,"clientWidth",K=>r(C,K)),o(M,Y)};Z(at,M=>{e($)||M(ft)})}var kt=a(at,2);{var bt=M=>{var Y=Hn();let K;jt(Y,20,()=>n().params,W=>W,(W,V)=>{var ht=et(),pt=E(ht);{var Mt=b=>{var X=et(),tt=E(X);vt(tt,()=>V),o(b,X)},At=b=>{var X=et(),tt=E(X);{var ut=_t=>{var it=et(),Et=E(it);vt(Et,()=>f()??Tt,()=>V.props),o(_t,it)},st=_t=>{var it=et(),Et=E(it);{var yt=Ct=>{var Ot=et(),St=E(Ot);vt(St,()=>O()??Tt,()=>V.props),o(Ct,Ot)},dt=Ct=>{var Ot=et(),St=E(Ot);{var Kt=Nt=>{var Lt=et(),Zt=E(Lt);vt(Zt,()=>I()??Tt,()=>V.props),o(Nt,Lt)};Z(St,Nt=>{V.snippet==="separator"&&Nt(Kt)},!0)}o(Ct,Ot)};Z(Et,Ct=>{V.snippet==="text"?Ct(yt):Ct(dt,!1)},!0)}o(_t,it)};Z(tt,_t=>{V.snippet==="link"?_t(ut):_t(st,!1)},!0)}o(b,X)};Z(pt,b=>{typeof V=="function"?b(Mt):b(At,!1)})}o(W,ht)}),d(Y),Gt(Y,W=>r(p,W),()=>e(p)),lt(W=>K=ie(Y,"",K,W),[()=>({transform:`translate3d(${e(B)??""}px, ${e(J)??""}px, 0)`})]),o(M,Y)};Z(kt,M=>{n().opened&&M(bt)})}o(s,j),$t()}Yt(["contextmenu"]);const qn=(s,t=Tt)=>{$e(s,Vt(t))},Wn=(s,t=Tt)=>{ke(s,Vt(t))},Bn=(s,t=Tt)=>{se(s,Vt(t))};var Xn=k('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),jn=k('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),Yn=k('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),Vn=k("<!> <!> <!>",1);function Gn(s,t){wt(t,!0);const n=nt(t,"contextmenu",19,()=>new ne),c=nt(t,"longpress_move_tolerance",3,Nn),_=nt(t,"longpress_duration",3,zn),i=nt(t,"bypass_with_tap_then_longpress",3,!0),u=nt(t,"tap_then_longpress_duration",3,He),l=nt(t,"tap_then_longpress_move_tolerance",3,Ue),v=nt(t,"open_offset_x",3,Me),f=nt(t,"open_offset_y",3,Le),O=nt(t,"scoped",3,!1),I=nt(t,"link_entry",3,qn),p=nt(t,"text_entry",3,Wn),g=nt(t,"separator_entry",3,Bn);oe.set(n());let x=L(void 0);const $=S(()=>n().layout),C=S(()=>n().initial_layout),h=S(()=>e($)===e(C));let T=L(void 0),B=L(void 0);Ht(()=>{!e(h)&&e(T)!==void 0&&(e($).width=e(T))}),Ht(()=>{!e(h)&&e(B)!==void 0&&(e($).height=e(B))});const J=ce.set();Ht(()=>{if(e(x)){const b=e(x).getBoundingClientRect();J.width=b.width,J.height=b.height}});const P=S(()=>Be(n().x,J.width,e($).width)),z=S(()=>Xe(n().y,J.height,e($).height));let A=L(void 0),R=L(void 0),w=L(void 0),H=L(void 0),y=L(void 0),N=L(void 0),F=L(void 0);const G=()=>{r(y,!1),e(H)!=null&&(clearTimeout(e(H)),r(H,null))},Q=()=>{r(w,null),r(A,null),r(R,null),r(N,!1),e(F)!=null&&(clearTimeout(e(F)),r(F,null))},j=()=>{G(),Q()},U=b=>{if(e(N)){Q();return}if(e(y)){j(),Pt(b);return}const{target:X}=b;ue(X,b.shiftKey)&&(e(x)?.contains(X)||xe(X,b.clientX+v(),b.clientY+f(),n(),{link_enabled:I()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})&&(Pt(b),j()))},ot=b=>{r(y,!1);const{touches:X,target:tt}=b;if(n().opened||X.length!==1||!ue(tt,b.shiftKey)){j();return}const{clientX:ut,clientY:st}=X[0];if(i()){if(e(w)!=null&&performance.now()-e(w)<u()&&Math.hypot(ut-e(A),st-e(R))<l()){r(N,!0),Q();return}r(w,performance.now(),!0),e(F)!=null&&clearTimeout(e(F)),r(F,setTimeout(()=>{Q()},u()),!0)}r(A,ut,!0),r(R,st,!0),e(H)!=null&&G(),r(H,setTimeout(()=>{r(y,!0),xe(tt,e(A)+v(),e(R)+f(),n(),{link_enabled:I()!==null,text_enabled:p()!==null,separator_enabled:g()!==null})},_()),!0)},ct=b=>{if(e(H)==null)return;const{touches:X}=b;if(X.length!==1)return;const{clientX:tt,clientY:ut}=X[0];Math.hypot(tt-e(A),ut-e(R))>c()&&(n().opened&&n().close(),G())},at=b=>{e(H)!=null&&(e(y)&&Pt(b),G()),e(N)&&Q()},ft=()=>{j()},kt=b=>{e(x)&&!e(x).contains(b.target)&&n().close()},bt=qe(n()),M=We(bt);var Y=Vn();rt("contextmenu",It,function(...b){(O()?void 0:U)?.apply(this,b)}),rt("touchstart",It,function(...b){(O()?void 0:ot)?.apply(this,b)},!0,!0),rt("touchmove",It,function(...b){(O()?void 0:ct)?.apply(this,b)},!0,!0),rt("touchend",It,function(...b){(O()?void 0:at)?.apply(this,b)},!0),rt("touchcancel",It,function(...b){(O()?void 0:ft)?.apply(this,b)},!0),rt("mousedown",It,function(...b){(n().opened?kt:void 0)?.apply(this,b)}),rt("keydown",It,function(...b){(n().opened?M:void 0)?.apply(this,b)});var K=E(Y);{var W=b=>{var X=Xn();X.__contextmenu=U;var tt=m(X);vt(tt,()=>t.children),d(X),rt("touchstart",X,ot,!0,!0),rt("touchmove",X,ct,!0,!0),rt("touchend",X,at,!0),rt("touchcancel",X,ft,!0),o(b,X)},V=b=>{var X=et(),tt=E(X);vt(tt,()=>t.children),o(b,X)};Z(K,b=>{O()?b(W):b(V,!1)})}var ht=a(K,2);{var pt=b=>{var X=jn();le(X,"clientHeight",tt=>r(B,tt)),le(X,"clientWidth",tt=>r(T,tt)),o(b,X)};Z(ht,b=>{e(h)||b(pt)})}var Mt=a(ht,2);{var At=b=>{var X=Yn();let tt;jt(X,20,()=>n().params,ut=>ut,(ut,st)=>{var _t=et(),it=E(_t);{var Et=dt=>{var Ct=et(),Ot=E(Ct);vt(Ot,()=>st),o(dt,Ct)},yt=dt=>{var Ct=et(),Ot=E(Ct);{var St=Nt=>{var Lt=et(),Zt=E(Lt);vt(Zt,()=>I()??Tt,()=>st.props),o(Nt,Lt)},Kt=Nt=>{var Lt=et(),Zt=E(Lt);{var Ve=Bt=>{var Jt=et(),me=E(Jt);vt(me,()=>p()??Tt,()=>st.props),o(Bt,Jt)},Ge=Bt=>{var Jt=et(),me=E(Jt);{var Ke=pe=>{var Ce=et(),Ze=E(Ce);vt(Ze,()=>g()??Tt,()=>st.props),o(pe,Ce)};Z(me,pe=>{st.snippet==="separator"&&pe(Ke)},!0)}o(Bt,Jt)};Z(Zt,Bt=>{st.snippet==="text"?Bt(Ve):Bt(Ge,!1)},!0)}o(Nt,Lt)};Z(Ot,Nt=>{st.snippet==="link"?Nt(St):Nt(Kt,!1)},!0)}o(dt,Ct)};Z(it,dt=>{typeof st=="function"?dt(Et):dt(yt,!1)})}o(ut,_t)}),d(X),Gt(X,ut=>r(x,ut),()=>e(x)),lt(ut=>tt=ie(X,"",tt,ut),[()=>({transform:`translate3d(${e(P)??""}px, ${e(z)??""}px, 0)`})]),o(b,X)};Z(Mt,b=>{n().opened&&b(At)})}o(s,Y),$t()}Yt(["contextmenu"]);class Kn{#t=L();get variant(){return e(this.#t)}set variant(t){r(this.#t,t,!0)}#e=S(()=>this.variant==="standard"?Ie:Gn);get component(){return e(this.#e)}set component(t){r(this.#e,t)}#n=S(()=>this.component===Ie?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return e(this.#n)}set name(t){r(this.#n,t)}constructor(t="standard"){this.variant=t}}const Ft=_e(()=>new Kn("standard"));var Zn=k('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function je(s,t){wt(t,!0);const n=[],c=Ft.get();var _=Zn(),i=a(m(_),2),u=m(i);Xt(u),u.value=u.__value="standard",D(2),d(i);var l=a(i,2),v=m(l);Xt(v),v.value=v.__value="compat",D(2),d(l),d(_),Se(n,[],u,()=>c.variant,f=>c.variant=f),Se(n,[],v,()=>c.variant,f=>c.variant=f),o(s,_),$t()}var Jn=k('<p class="panel p_md">alert B -- also inherits A</p>'),Qn=k('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),to=k("<code>navigator.vibrate</code>"),eo=k(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function no(s,t){wt(t,!0);const n=Ft.get(),c=S(()=>n.component),_=S(()=>n.name);Rt(s,{children:(i,u)=>{var l=eo(),v=E(l);Dt(v,{text:"Introduction"});var f=a(v,2),O=a(m(f),5);ee(O,{path:"Web/API/Element/contextmenu_event"}),D(3),d(f);var I=a(f,4),p=a(m(I)),g=m(p,!0);d(p),D(5),d(I);var x=a(I,2);Wt(x,()=>e(c),(J,P)=>{P(J,{scoped:!0,children:(z,A)=>{zt(z,{entries:w=>{mt(w,{run:()=>alert("alert A"),children:(H,y)=>{D();var N=q("alert A");o(H,N)},$$slots:{default:!0}})},children:(w,H)=>{var y=Qn(),N=a(m(y),2);zt(N,{entries:G=>{mt(G,{run:()=>alert("alert B"),children:(Q,j)=>{D();var U=q("alert B");o(Q,U)},$$slots:{default:!0}})},children:(G,Q)=>{var j=Jn();o(G,j)},$$slots:{entries:!0,default:!0}}),d(y),o(w,y)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var $=a(x,2);De($,{summary:P=>{D();var z=q("view code");o(P,z)},children:(P,z)=>{{let A=S(()=>`<${e(_)}>
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
</${e(_)}>`);qt(P,{get content(){return e(A)}})}},$$slots:{summary:!0,default:!0}});var C=a($,14),h=a(m(C),2),T=a(m(h));ee(T,{path:"Web/API/Navigator/vibrate",children:(J,P)=>{var z=to();o(J,z)},$$slots:{default:!0}}),d(h),d(C);var B=a(C,2);je(B,{}),lt(()=>xt(g,e(_))),o(i,l)},$$slots:{default:!0}}),$t()}var oo=k('<span class="font_family_mono">contextmenu</span> event',1),so=k(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, fewer edge cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>the contextmenu closes if you move past a threshold without lifting the longpress touch that
			opened it</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),ao=k(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless <a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),ro=k("<!> <!>",1);function io(s){var t=ro(),n=E(t);Rt(n,{children:(_,i)=>{var u=so(),l=E(u);Dt(l,{text:"iOS compatibility"});var v=a(l,6),f=a(m(v),2),O=a(m(f));ee(O,{path:"Web/API/Element/contextmenu_event",children:(p,g)=>{var x=oo();D(),o(p,x)},$$slots:{default:!0}}),d(f),D(4),d(v);var I=a(v,6);je(I,{}),o(_,u)},$$slots:{default:!0}});var c=a(n,2);Rt(c,{children:(_,i)=>{var u=ao(),l=E(u);Dt(l,{text:"Caveats"});var v=a(l,8),f=a(m(v));ee(f,{path:"Web/API/Element/contextmenu_event"}),D(3),d(v),o(_,u)},$$slots:{default:!0}}),o(s,t)}function lo(s){const t=s-1;return t*t*t+1}function co(s){return--s*s*s*s*s+1}function Oe(s,{from:t,to:n},c={}){var{delay:_=0,duration:i=z=>Math.sqrt(z)*120,easing:u=lo}=c,l=getComputedStyle(s),v=l.transform==="none"?"":l.transform,[f,O]=l.transformOrigin.split(" ").map(parseFloat);f/=s.clientWidth,O/=s.clientHeight;var I=uo(s),p=s.clientWidth/n.width/I,g=s.clientHeight/n.height/I,x=t.left+t.width*f,$=t.top+t.height*O,C=n.left+n.width*f,h=n.top+n.height*O,T=(x-C)*p,B=($-h)*g,J=t.width/n.width,P=t.height/n.height;return{delay:_,duration:typeof i=="function"?i(Math.sqrt(T*T+B*B)):i,easing:u,css:(z,A)=>{var R=A*T,w=A*B,H=z+A*J,y=z+A*P;return`transform: ${v} translate(${R}px, ${w}px) scale(${H}, ${y});`}}}function uo(s){if("currentCSSZoom"in s)return s.currentCSSZoom;for(var t=s,n=1;t!==null;)n*=+getComputedStyle(t).zoom,t=t.parentElement;return n}var _o=k('<menu class="pane unstyled svelte-4htxep"><!></menu>'),vo=k('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function ve(s,t){wt(t,!0);const n=oe.get(),c=n.add_submenu(),{layout:_}=n,i=S(()=>c.selected);let u=L(void 0);const l=ce.get(),v=ce.set();let f=L(0),O=L(0);Ht(()=>{e(u)&&I(e(u),_,l)});const I=(A,R,w)=>{const{x:H,y,width:N,height:F}=A.getBoundingClientRect();v.width=N,v.height=F;const G=H-e(f),Q=y-e(O),j=G+N+w.width-R.width;if(j<=0)r(f,w.width,!0);else{const U=N-G;U<=0?r(f,-N):U>j?r(f,w.width-j):r(f,U-N)}r(O,Math.min(0,R.height-(Q+F)),!0)};var p=vo();let g;var x=m(p);let $;var C=m(x),h=m(C),T=m(h);vt(T,()=>t.icon??Tt),d(h);var B=a(h,2),J=m(B);vt(J,()=>t.children),d(B),d(C),D(2),d(x);var P=a(x,2);{var z=A=>{var R=_o();let w;var H=m(R);vt(H,()=>t.menu),d(R),Gt(R,y=>r(u,y),()=>e(u)),lt(y=>w=ie(R,"",w,y),[()=>({transform:`translate3d(${e(f)??""}px, ${e(O)??""}px, 0)`,"max-height":`${_.height??""}px`})]),o(A,R)};Z(P,A=>{e(i)&&A(z)})}d(p),lt((A,R)=>{g=ie(p,"",g,A),$=gt(x,1,"menu_item plain selectable svelte-4htxep",null,$,R),Ut(x,"aria-expanded",e(i))},[()=>({"--contextmenu_depth":c.depth}),()=>({selected:e(i)})]),rt("mouseenter",x,A=>{Pt(A),setTimeout(()=>n.select(c))}),o(s,p),$t()}var mo=k("<!> <!>",1);function de(s,t){wt(t,!0);const n=nt(t,"name",3,"Cat"),c=nt(t,"icon",3,"😺");ve(s,{icon:u=>{D();var l=q();lt(()=>xt(l,c())),o(u,l)},menu:u=>{var l=mo(),v=E(l);mt(v,{run:()=>t.act({type:t.position==="adventure"?"cat_go_home":"cat_go_adventure",name:n()}),icon:I=>{var p=et(),g=E(p);{var x=C=>{var h=q("🏠");o(C,h)},$=C=>{var h=q("🌄");o(C,h)};Z(g,C=>{t.position==="adventure"?C(x):C($,!1)})}o(I,p)},children:(I,p)=>{var g=et(),x=E(g);{var $=h=>{var T=q("go home");o(h,T)},C=h=>{var T=q("go adventure");o(h,T)};Z(x,h=>{t.position==="adventure"?h($):h(C,!1)})}o(I,g)},$$slots:{icon:!0,default:!0}});var f=a(v,2);mt(f,{run:()=>t.act({type:"cat_be_or_do",name:n(),position:t.position}),icon:I=>{var p=et(),g=E(p);{var x=C=>{var h=q("🌄");o(C,h)},$=C=>{var h=q("🏠");o(C,h)};Z(g,C=>{t.position==="adventure"?C(x):C($,!1)})}o(I,p)},children:(I,p)=>{var g=et(),x=E(g);{var $=h=>{var T=q("do adventure");o(h,T)},C=h=>{var T=q("be home");o(h,T)};Z(x,h=>{t.position==="adventure"?h($):h(C,!1)})}o(I,g)},$$slots:{icon:!0,default:!0}}),o(u,l)},children:(u,l)=>{D();var v=q();lt(()=>xt(v,n())),o(u,v)},$$slots:{icon:!0,menu:!0,default:!0}}),$t()}var po=k("<!> <!> <!>",1);function ho(s,t){var n=po(),c=E(n);$e(c,{href:"https://github.com/ryanatkn/fuz",icon:l=>{mn(l,{get data(){return pn},size:"var(--icon_size_xs)"})},children:(l,v)=>{D();var f=q("Source code");o(l,f)},$$slots:{icon:!0,default:!0}});var _=a(c,2);se(_,{});var i=a(_,2);mt(i,{get run(){return t.toggle_about_dialog},icon:l=>{D();var v=q("?");o(l,v)},children:(l,v)=>{D();var f=q("About");o(l,f)},$$slots:{icon:!0,default:!0}}),o(s,n)}const Ye=s=>{const t=s.length;if(t===2)return"cats";if(t===0)return null;const n=s[0];return n.icon+n.name};var fo=k("<!> <!>",1),go=k("<!> <!>",1),xo=k("<!> <!> <!>",1);function bo(s,t){wt(t,!0);const n=S(()=>Ye(t.adventure_cats));ve(s,{icon:i=>{D();var u=q("🏠");o(i,u)},menu:i=>{var u=xo(),l=E(u);{var v=p=>{var g=fo(),x=E(g);mt(x,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var T=q("🐈‍⬛");o(h,T)},children:(h,T)=>{D();var B=q("call");o(h,B)},$$slots:{icon:!0,default:!0}});var $=a(x,2);se($,{}),o(p,g)};Z(l,p=>{e(n)&&p(v)})}var f=a(l,2);jt(f,17,()=>t.home_cats,p=>p.name,(p,g)=>{de(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var O=a(f,2);{var I=p=>{var g=go(),x=E(g);mt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"home"}),icon:h=>{D();var T=q("🏠");o(h,T)},children:(h,T)=>{D();var B=q("be");o(h,B)},$$slots:{icon:!0,default:!0}});var $=a(x,2);mt($,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var T=q("🦋");o(h,T)},children:(h,T)=>{D();var B=q("leave");o(h,B)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(O,p=>{e(n)||p(I)})}o(i,u)},children:(i,u)=>{D();var l=q("home");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),$t()}var yo=k("<!> <!>",1),wo=k("<!> <!>",1),$o=k("<!> <!> <!>",1);function ko(s,t){wt(t,!0);const n=S(()=>Ye(t.home_cats));ve(s,{icon:i=>{D();var u=q("🌄");o(i,u)},menu:i=>{var u=$o(),l=E(u);{var v=p=>{var g=yo(),x=E(g);mt(x,{run:()=>t.act({type:"call_cats_adventure"}),icon:h=>{D();var T=q("🦋");o(h,T)},children:(h,T)=>{D();var B=q("call");o(h,B)},$$slots:{icon:!0,default:!0}});var $=a(x,2);se($,{}),o(p,g)};Z(l,p=>{e(n)&&p(v)})}var f=a(l,2);jt(f,17,()=>t.adventure_cats,p=>p.name,(p,g)=>{de(p,{get name(){return e(g).name},get icon(){return e(g).icon},get position(){return e(g).position},get act(){return t.act}})});var O=a(f,2);{var I=p=>{var g=wo(),x=E(g);mt(x,{run:()=>t.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:h=>{D();var T=q("🌄");o(h,T)},children:(h,T)=>{D();var B=q("do");o(h,B)},$$slots:{icon:!0,default:!0}});var $=a(x,2);mt($,{run:()=>t.act({type:"call_cats_home"}),icon:h=>{D();var T=q("🐈‍⬛");o(h,T)},children:(h,T)=>{D();var B=q("leave");o(h,B)},$$slots:{icon:!0,default:!0}}),o(p,g)};Z(O,p=>{e(n)||p(I)})}o(i,u)},children:(i,u)=>{D();var l=q("adventure");o(i,l)},$$slots:{icon:!0,menu:!0,default:!0}}),$t()}var Co=k('<span class="icon svelte-y90lnf"> </span>'),To=k('<span class="name svelte-y90lnf"><!> </span>'),Eo=k("<span><!><!></span>");function ze(s,t){const n=nt(t,"name",3,"Cat"),c=nt(t,"icon",3,"😺"),_=nt(t,"show_name",3,!0),i=nt(t,"show_icon",3,!0);var u=Eo();let l;var v=m(u);{var f=p=>{var g=Co(),x=m(g,!0);d(g),lt(()=>xt(x,c())),o(p,g)};Z(v,p=>{i()&&p(f)})}var O=a(v);{var I=p=>{var g=To(),x=m(g);vt(x,()=>t.children??Tt);var $=a(x,1,!0);d(g),lt(()=>xt($,n())),o(p,g)};Z(O,p=>{_()&&p(I)})}d(u),lt(p=>l=gt(u,1,"cat svelte-y90lnf",null,l,p),[()=>({"has-icon":i()})]),o(s,u)}const So=`<script lang="ts">
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
`;var Po=k("<!> <!>",1),Ao=k('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Io=k('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Oo=k('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),zo=k('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),No=k('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),Ro=k("<!> <!>",1),Do=k('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><a href="https://github.com/ryanatkn/fuz">github.com/ryanatkn/fuz</a></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu">@fuz.dev/fuz_contextmenu</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),Fo=k("<!> <!>",1);function Mo(s,t){wt(t,!0);const n=Ft.get(),c=S(()=>n.component),_="Alyssa",i="Ben",u="home";let l=L(u),v=L(u);const f=S(()=>e(l)===e(v)?"😺":"😾"),O=S(()=>e(l)===e(v)?"😸":"😿"),I=S(()=>({name:_,icon:e(f),position:e(l)})),p=S(()=>({name:i,icon:e(O),position:e(v)}));let g=L(!1);const x=(F,G)=>{const Q=[],j=[];for(const U of F){const ot=U.position==="home"?Q:j;G?ot.unshift(U):ot.push(U)}return{home_cats:Q,adventure_cats:j}},$=S(()=>x([e(I),e(p)],e(g))),C=S(()=>e($).home_cats),h=S(()=>e($).adventure_cats),T=S(()=>e(l)!==u||e(v)!==u),B=()=>{r(l,u),r(v,u)};let J=L(!1);const P=()=>{r(J,!e(J))},z=F=>{switch(F.type){case"call_cats_adventure":{r(l,"adventure"),r(v,"adventure");break}case"call_cats_home":{r(l,"home"),r(v,"home");break}case"cat_go_adventure":{F.name===_?r(l,"adventure"):F.name===i&&r(v,"adventure");break}case"cat_go_home":{F.name===_?r(l,"home"):F.name===i&&r(v,"home");break}case"cat_be_or_do":{r(g,!e(g));break}}},[A,R]=_n({fallback:(F,G)=>{const Q=window.getComputedStyle(F),j=Q.transform==="none"?"":Q.transform;return{duration:1500,easing:co,css:U=>`
					transform: ${j} scale(${U});
					opacity: ${U}
				`}}});var w=Fo(),H=E(w);Wt(H,()=>e(c),(F,G)=>{G(F,{scoped:!0,children:(Q,j)=>{Rt(Q,{children:(U,ot)=>{var ct=Ro(),at=E(ct);Dt(at,{text:"Full example"});var ft=a(at,2);zt(ft,{entries:bt=>{var M=Po(),Y=E(M);{var K=V=>{ke(V,{run:B,content:"Reset",icon:"↻"})};Z(Y,V=>{e(T)&&V(K)})}var W=a(Y,2);ho(W,{toggle_about_dialog:P}),o(bt,M)},children:(bt,M)=>{var Y=No(),K=E(Y),W=m(K),V=m(W);zt(V,{entries:b=>{bo(b,{act:z,get home_cats(){return e(C)},get adventure_cats(){return e(h)}})},children:(b,X)=>{var tt=Io(),ut=a(m(tt),2);jt(ut,29,()=>e(C),({name:st,icon:_t,position:it})=>st,(st,_t)=>{let it=()=>e(_t).name,Et=()=>e(_t).icon,yt=()=>e(_t).position;var dt=Ao(),Ct=m(dt);zt(Ct,{entries:St=>{de(St,{act:z,get name(){return it()},get icon(){return Et()},get position(){return yt()}})},children:(St,Kt)=>{ze(St,{get name(){return it()},get icon(){return Et()}})},$$slots:{entries:!0,default:!0}}),d(dt),te(1,dt,()=>R,()=>({key:it()})),te(2,dt,()=>A,()=>({key:it()})),Ae(dt,()=>Oe,null),o(st,dt)}),d(ut),d(tt),o(b,tt)},$$slots:{entries:!0,default:!0}});var ht=a(V,2);zt(ht,{entries:b=>{ko(b,{act:z,get home_cats(){return e(C)},get adventure_cats(){return e(h)}})},children:(b,X)=>{var tt=zo(),ut=a(m(tt),2);jt(ut,29,()=>e(h),({name:st,icon:_t,position:it})=>st,(st,_t)=>{let it=()=>e(_t).name,Et=()=>e(_t).icon,yt=()=>e(_t).position;var dt=Oo(),Ct=m(dt);zt(Ct,{entries:St=>{de(St,{act:z,get name(){return it()},get icon(){return Et()},get position(){return yt()}})},children:(St,Kt)=>{ze(St,{get name(){return it()},get icon(){return Et()}})},$$slots:{entries:!0,default:!0}}),d(dt),te(1,dt,()=>R,()=>({key:it()})),te(2,dt,()=>A,()=>({key:it()})),Ae(dt,()=>Oe,null),o(st,dt)}),d(ut),d(tt),o(b,tt)},$$slots:{entries:!0,default:!0}}),d(W),d(K);var pt=a(K,2),Mt=m(pt);De(Mt,{summary:b=>{D();var X=q("View example source");o(b,X)},children:(b,X)=>{qt(b,{get content(){return So}})},$$slots:{summary:!0,default:!0}}),d(pt),o(bt,Y)},$$slots:{entries:!0,default:!0}}),o(U,ct)},$$slots:{default:!0}})},$$slots:{default:!0}})});var y=a(H,2);{var N=F=>{un(F,{onclose:()=>r(J,!1),children:(G,Q)=>{var j=Do(),U=m(j),ot=a(m(U),8),ct=a(m(ot),2);hn(ct,{});var at=a(ct,4);fn(at,{}),d(ot),d(U),d(j),o(G,j)},$$slots:{default:!0}})};Z(y,F=>{e(J)&&F(N)})}o(s,w),$t()}var Lo=k("<!> <!> <!>",1),Ho=k(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),Uo=k("<!> <!>",1);function qo(s,t){wt(t,!0);const n=Ft.get(),c=S(()=>n.component),_=S(()=>n.name);let i=L(!1),u=L(!1),l=L(!1);var v=et(),f=E(v);Wt(f,()=>e(c),(O,I)=>{I(O,{scoped:!0,children:(p,g)=>{Rt(p,{children:(x,$)=>{var C=Uo(),h=E(C);Dt(h,{text:"Basic usage"});var T=a(h,2);zt(T,{entries:J=>{var P=Lo(),z=E(P);mt(z,{run:()=>void r(i,!e(i)),children:(w,H)=>{D();var y=q("Hello world");o(w,y)},$$slots:{default:!0}});var A=a(z,2);mt(A,{run:()=>void r(u,!e(u)),icon:H=>{D();var y=q("🌞");o(H,y)},children:(H,y)=>{D();var N=q("Hello with an optional icon snippet");o(H,N)},$$slots:{icon:!0,default:!0}});var R=a(A,2);mt(R,{run:()=>void r(l,!e(l)),icon:"🌚",children:(w,H)=>{D();var y=q("Hello with an optional icon string");o(w,y)},$$slots:{default:!0}}),o(J,P)},children:(J,P)=>{var z=Ho(),A=a(m(z),2);{let at=S(()=>`<${e(_)} scoped>
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
...markup without contextmenu behavior...`);qt(A,{get content(){return e(at)}})}var R=a(A,2),w=m(R);let H;var y=m(w);d(w),d(R);var N=a(R,2),F=m(N);let G;var Q=m(F);d(F),d(N);var j=a(N,2),U=m(j);let ot;var ct=m(U);d(U),d(j),D(2),d(z),lt((at,ft,kt)=>{H=gt(w,1,"",null,H,at),xt(y,`greeted = ${e(i)??""}`),G=gt(F,1,"",null,G,ft),xt(Q,`greeted_icon_snippet = ${e(u)??""}`),ot=gt(U,1,"",null,ot,kt),xt(ct,`greeted_icon_string = ${e(l)??""}`)},[()=>({color_g_5:e(i)}),()=>({color_e_5:e(u)}),()=>({color_d_5:e(l)})]),o(J,z)},$$slots:{entries:!0,default:!0}}),o(x,C)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,v),$t()}var Wo=k("<span> </span>");function Qt(s,t){const n=Ne(t,["$$slots","$$events","$$legacy","glyph","size","class"]),c="var(--font_size, 1em)",_="var(--font_size, inherit)",i=S(()=>t.size??c);var u=Wo();be(u,v=>({...n,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${t.class??""}`,[rn]:v}),[()=>({width:e(i),height:e(i),"min-width":e(i),"min-height":e(i),"font-size":t.size??_})]);var l=m(u,!0);d(u),lt(()=>xt(l,t.glyph)),o(s,u)}var Bo=k('<span class="color_f_5">option f</span>'),Xo=k('<span class="color_g_5">option g</span>'),jo=k('<span class="color_j_5">option j</span>'),Yo=k("<!> <!> <!> <!>",1),Vo=k('<li class="color_error">Error: <code> </code></li>'),Go=k('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),Ko=k(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),Zo=k("<!> <!>",1);function Jo(s,t){wt(t,!0);const n=Ft.get(),c=S(()=>n.component),_=S(()=>n.name),i=new ne;let u=L(void 0);const l=S(()=>e(u)?`color_${e(u)}_5`:void 0),v=S(()=>e(u)?`color_${e(u)}`:void 0);var f=et(),O=E(f);Wt(O,()=>e(c),(I,p)=>{p(I,{get contextmenu(){return i},scoped:!0,children:(g,x)=>{Rt(g,{children:($,C)=>{var h=Zo(),T=E(h);Dt(T,{text:"Custom instance"});var B=a(T,2);zt(B,{entries:P=>{ve(P,{icon:R=>{D();var w=q("🎨");o(R,w)},menu:R=>{var w=Yo(),H=E(w);mt(H,{run:()=>(r(u,"f"),{ok:!0,close:!1}),children:(G,Q)=>{var j=Bo();o(G,j)},$$slots:{default:!0}});var y=a(H,2);mt(y,{run:()=>(r(u,"g"),{ok:!0,close:!1}),children:(G,Q)=>{var j=Xo();o(G,j)},$$slots:{default:!0}});var N=a(y,2);mt(N,{run:()=>(r(u,"j"),{ok:!0,close:!1}),children:(G,Q)=>{var j=jo();o(G,j)},$$slots:{default:!0}});var F=a(N,2);mt(F,{run:()=>(i.close(),{ok:!0}),children:(G,Q)=>{D();var j=q("close contextmenu");o(G,j)},$$slots:{default:!0}}),o(R,w)},children:(R,w)=>{D();var H=q("select color");o(R,H)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(P,z)=>{var A=Ko(),R=m(A),w=a(m(R)),H=m(w,!0);d(w),D(5),d(R);var y=a(R,2);qt(y,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var N=a(y,2);{let W=S(()=>`<${e(_)} {contextmenu} scoped>...</${e(_)}>`);qt(N,{get content(){return e(W)}})}var F=a(N,2),G=a(m(F));G.textContent="{ok: true, close: false}",D(),d(F);var Q=a(F,2),j=a(m(Q),2),U=m(j),ot=a(m(U),2),ct=m(ot,!0);d(ot),d(U);var at=a(U,2),ft=a(m(at),2),kt=m(ft);d(ft),d(at);var bt=a(at,2);{var M=W=>{var V=Vo(),ht=a(m(V)),pt=m(ht,!0);d(ht),d(V),lt(()=>xt(pt,i.error)),o(W,V)};Z(bt,W=>{i.error&&W(M)})}d(j),d(Q);var Y=a(Q,2);{var K=W=>{var V=Go(),ht=m(V),pt=m(ht),Mt=m(pt);Qt(Mt,{glyph:"↑"}),d(pt);var At=a(pt,2),b=m(At),X=m(b);Qt(X,{glyph:"←"}),d(b);var tt=a(b,2),ut=m(tt);Qt(ut,{glyph:"↵"}),d(tt);var st=a(tt,2),_t=m(st);Qt(_t,{glyph:"→"}),d(st),d(At);var it=a(At,2),Et=m(it);Qt(Et,{glyph:"↓"}),d(it),d(ht),d(V),lt(()=>{gt(pt,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${e(v)??""}`),pt.disabled=!i.can_select_previous,gt(b,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${e(v)??""}`),b.disabled=!i.can_collapse,gt(tt,1,`border_radius_0 ${e(v)??""}`),tt.disabled=!i.can_activate,gt(st,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${e(v)??""}`),st.disabled=!i.can_expand,gt(it,1,`border_top_left_radius_0 border_top_right_radius_0 ${e(v)??""}`),it.disabled=!i.can_select_next}),rt("mousedown",pt,yt=>{Pt(yt),i.select_previous()},!0),rt("mousedown",b,yt=>{Pt(yt),i.collapse_selected()},!0),rt("mousedown",tt,async yt=>{Pt(yt),await i.activate_selected()},!0),rt("mousedown",st,yt=>{Pt(yt),i.expand_selected()},!0),rt("mousedown",it,yt=>{Pt(yt),i.select_next()},!0),te(3,V,()=>vn),o(W,V)};Z(Y,W=>{i.opened&&W(K)})}d(A),lt(()=>{xt(H,e(_)),gt(Q,1,`mb_md ${e(l)??""}`),xt(ct,i.opened),xt(kt,`${i.x??""} && contextmenu.y === ${i.y??""}`)}),o(P,A)},$$slots:{entries:!0,default:!0}}),o($,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,f),$t()}const Qo=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var ts=k(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the <a href="#default-behaviors">default behaviors</a>.</aside></div>`),es=k("<div><!></div> <!>",1);function ns(s,t){wt(t,!0);const n=Ft.get(),c=S(()=>n.component),_=new ne;let i=L(!1),u=L(void 0),l=L("");const v="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",f=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,O=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,I=S(()=>e(l)===v||e(l)===f||e(l)===O);var p=et(),g=E(p);Wt(g,()=>e(c),(x,$)=>{$(x,{get contextmenu(){return _},scoped:!0,children:(C,h)=>{Rt(C,{children:(T,B)=>{var J=es(),P=E(J);let z;var A=m(P);Dt(A,{text:"Select text"}),d(P);var R=a(P,2);zt(R,{entries:H=>{mt(H,{run:()=>void r(i,!e(i)),children:(y,N)=>{D();var F=q("Toggle something");o(y,F)},$$slots:{default:!0}})},children:(H,y)=>{var N=ts();let F;var G=m(N),Q=a(m(G),2),j=a(m(Q));j.__click=[Qo,u];let U;D(),d(Q),d(G),Gt(G,V=>r(u,V),()=>e(u));var ot=a(G,2),ct=m(ot);Xt(ct),d(ot);var at=a(ot,2);let ft;var kt=a(at,2),bt=m(kt);tn(bt),d(kt);var M=a(kt,2),Y=m(M);ee(Y,{path:"Web/HTML/Global_attributes/contenteditable"}),D(),d(M);var K=a(M,4),W=a(K,4);D(2),d(N),lt((V,ht,pt)=>{F=gt(N,1,"panel p_md",null,F,V),U=gt(j,1,"",null,U,ht),ft=gt(at,1,"",null,ft,pt)},[()=>({color_g_5:e(I)}),()=>({color_a:e(i)}),()=>({color_g_5:e(I)})]),Pe(ct,()=>e(l),V=>r(l,V)),Pe(bt,()=>e(l),V=>r(l,V)),Ee("innerText",K,()=>e(l),V=>r(l,V)),Ee("innerText",W,()=>e(l),V=>r(l,V)),o(H,N)},$$slots:{entries:!0,default:!0}}),lt(w=>z=gt(P,1,"",null,z,w),[()=>({color_d_5:e(I)})]),o(T,J)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,p),$t()}Yt(["click"]);const os=(s,t)=>{const n=window.getSelection();if(!n||!e(t))return;const c=document.createRange();c.selectNodeContents(e(t)),n.removeAllRanges(),n.addRange(c)};var ss=k('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),as=k('<li>custom "some custom entry" entry</li>'),rs=k('<li>"copy text" entry when text is selected</li>'),is=k("<li>link entry when clicking on a link</li>"),ls=k("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),cs=k(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),us=k('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function ds(s,t){wt(t,!0);const n=p=>{var g=ss(),x=m(g),$=a(m(x));$.__click=[os,I];let C;D(),d(x),Gt(x,B=>r(I,B),()=>e(I));var h=a(x,2),T=a(m(h));D(),d(h),d(g),lt((B,J)=>{C=gt($,1,"",null,C,B),Ut(T,"href",J)},[()=>({color_h:e(O)}),()=>gn("/")]),o(p,g)},c=Ft.get(),_=S(()=>c.component),i=S(()=>c.name),u=new ne;let l=L(!1),v=L(!1),f=L(!0),O=L(!1),I=L(void 0);Rt(s,{children:(p,g)=>{var x=us(),$=E(x);Dt($,{text:"Disable default behaviors"});var C=a($,4);{let U=S(()=>`<${e(i)}${e(l)?" link_entry={null}":""}${e(v)?" text_entry={null}":""}>`);qt(C,{get content(){return e(U)}})}var h=a(C,2),T=m(h),B=m(T);Xt(B);var J=a(B,2),P=a(m(J));P.textContent="link_entry={null}",d(J),d(T);var z=a(T,2),A=m(z);Xt(A);var R=a(A,2),w=a(m(R));w.textContent="text_entry={null}",d(R),d(z),d(h);var H=a(h,2);{let U=S(()=>e(l)?null:void 0),ot=S(()=>e(v)?null:void 0);Wt(H,()=>e(_),(ct,at)=>{at(ct,{get contextmenu(){return u},scoped:!0,get link_entry(){return e(U)},get text_entry(){return e(ot)},children:(ft,kt)=>{var bt=et(),M=E(bt);{var Y=W=>{zt(W,{entries:ht=>{mt(ht,{icon:">",run:()=>void r(O,!e(O)),children:(pt,Mt)=>{D();var At=q("some custom entry");o(pt,At)},$$slots:{default:!0}})},children:(ht,pt)=>{n(ht)},$$slots:{entries:!0,default:!0}})},K=W=>{n(W)};Z(M,W=>{e(f)?W(Y):W(K,!1)})}o(ft,bt)},$$slots:{default:!0}})})}var y=a(H,4),N=m(y),F=m(N);Xt(F),D(),d(N),d(y);var G=a(y,2);{var Q=U=>{var ot=ls(),ct=a(E(ot),2),at=m(ct);{var ft=K=>{var W=as();o(K,W)};Z(at,K=>{e(f)&&K(ft)})}var kt=a(at,2);{var bt=K=>{var W=rs();o(K,W)};Z(kt,K=>{e(v)||K(bt)})}var M=a(kt,2);{var Y=K=>{var W=is();o(K,W)};Z(M,K=>{e(l)||K(Y)})}d(ct),o(U,ot)},j=U=>{var ot=cs();o(U,ot)};Z(G,U=>{e(f)||!e(l)||!e(v)?U(Q):U(j,!1)})}fe(B,()=>e(l),U=>r(l,U)),fe(A,()=>e(v),U=>r(v,U)),fe(F,()=>e(f),U=>r(f,U)),o(p,x)},$$slots:{default:!0}}),$t()}Yt(["click"]);var _s=k(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function vs(s,t){wt(t,!0);const n=Ft.get(),c=S(()=>n.component),_=S(()=>n.name);var i=et(),u=E(i);Wt(u,()=>e(c),(l,v)=>{v(l,{scoped:!0,children:(f,O)=>{Rt(f,{children:(I,p)=>{var g=_s(),x=E(g);Dt(x,{text:"Default behaviors"});var $=a(x,2),C=m($);{let h=S(()=>`<${e(_)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${e(_)}>`);qt(C,{get content(){return e(h)}})}D(6),d($),o(I,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),o(s,i),$t()}var ms=k("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function Hs(s,t){wt(t,!0);const c=nn("Contextmenu");Ft.set(),en(s,{get tome(){return c},children:(_,i)=>{var u=ms(),l=E(u);no(l,{});var v=a(l,2);qo(v,{});var f=a(v,2);vs(f,{});var O=a(f,2);ns(O,{});var I=a(O,2);ds(I,{});var p=a(I,2);Jo(p,{});var g=a(p,2);Mo(g,{});var x=a(g,2);io(x),D(2),o(_,u)},$$slots:{default:!0}}),$t()}export{Hs as component};
