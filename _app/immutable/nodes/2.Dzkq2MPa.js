var $e=(n,e,c)=>{if(!e.has(n))throw TypeError("Cannot "+c)};var Q=(n,e,c)=>($e(n,e,"read from private field"),c?c.call(n):e.get(n)),ce=(n,e,c)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,c)};import{c as S,a as t,k as U,t as k,s as ae,b as te,u as Pe,m as ue}from"../chunks/disclose-version.C93Xjdse.js";import{m as Te,o as Le,n as Se,p as I,f as T,a as V,J as R,g as i,aa as J,s as x,c as l,t as D,r,a8 as X,d as O,az as Ae,a9 as De}from"../chunks/runtime.OOkXorm-.js";import{i as $,p as q}from"../chunks/if.CJZ2U21M.js";import{s as E,c as pe}from"../chunks/attributes.1KJqROqM.js";import{s as j}from"../chunks/render.B9704Zl5.js";import{s as de}from"../chunks/style.PwPRnE0L.js";import{a as ze}from"../chunks/shared.DBX-BfgT.js";import{o as Ne}from"../chunks/entry.BAAZuU3-.js";import{B as Z}from"../chunks/Breadcrumb.BTFiLh91.js";import{b as fe,t as Be}from"../chunks/tome.Rzx9RbI_.js";import{t as C}from"../chunks/class.uY2yOmw_.js";import{i as Re,D as be}from"../chunks/Dialog.jG1ADFix.js";import{p as re}from"../chunks/props.BWB_lq4A.js";import{e as ee,c as Ee}from"../chunks/context_helpers.BT2NswI4.js";import{t as he,s as ye}from"../chunks/index.ozkZrIM_.js";import{p as oe}from"../chunks/stores.kyAns663.js";import{l as ne}from"../chunks/library_helpers.svelte.BdZ6BWA7.js";import{L as Oe}from"../chunks/Library_Footer.B6btL-FQ.js";import{component as je}from"./19.oZwYxOwE.js";import{_ as Ce,S as Ie}from"../chunks/28.D5nEqw9e.js";import{component as Ve}from"./24.BCk1RPMT.js";import{component as Ye}from"./25.C4AS2TgC.js";import{component as Ke}from"./23.DYIVJ-BZ.js";import{component as Me}from"./22.CMJankLz.js";import{component as We}from"./16.DfO6FlUq.js";import{component as Fe}from"./17.BHbJPkRJ.js";import{component as He}from"./27.BO_sV4ju.js";import{component as Je}from"./8.b2gAuEYm.js";import{component as Xe}from"./20.BtmTI32P.js";import{component as qe}from"./15.BOqaSIbc.js";import{component as Ge}from"./26.DeP-aIkM.js";import{component as Qe}from"./18.LlzoNjqf.js";import{component as Ue}from"./9.BM7PtyVv.js";import{component as Ze}from"./14.BHxZByYW.js";import{component as ea}from"./21.ovzoZrrb.js";import{p as aa}from"../chunks/pkg.DbtWa5vN.js";import{S as me,f as ve}from"../chunks/logos.BmxfGxCI.js";function ta(n,e,c=e){var y=()=>{u=!0,clearTimeout(f),f=setTimeout(b,100),c(window.scrollY)};addEventListener("scroll",y,{passive:!0});var u=!1,f,b=()=>{u=!1},s=!0;Te(()=>{var o=e();s?s=!1:!u&&o!=null&&(u=!0,clearTimeout(f),scrollTo(window.scrollX,o),f=setTimeout(b,100))}),Le(y),Se(()=>{removeEventListener("scroll",y)})}function ra(n,e){ze(window,["resize"],()=>e(window[n]))}var oa=k('<div class="library_primary_nav svelte-1458tgc"><div class="background svelte-1458tgc" aria-hidden="true"></div> <div class="content svelte-1458tgc"><nav aria-label="Primary" class="svelte-1458tgc"><!></nav> <!></div></div>');function na(n,e){I(e,!0);const y=!Re();let u=J(0);const f=O(()=>i(u)>0);var b=S(),s=T(b);$(s,()=>y,o=>{var p=oa(),d=x(l(p),2),a=l(d),h=l(a);Z(h,{children:(_,m)=>{var v=S(),z=T(v);$(z,()=>e.breadcrumb_children,P=>{var g=S(),A=T(g);E(A,()=>e.breadcrumb_children,()=>!0),t(P,g)},P=>{var g=U();D(()=>j(g,e.pkg.package_json.glyph??"🏠")),t(P,g)}),t(_,v)},$$slots:{default:!0}}),r(a);var w=x(a,2);E(w,()=>e.children??X),r(d),r(p),D(()=>C(p,"scrolled",i(f))),t(o,p)}),ta("y",()=>i(u),o=>R(u,q(o))),t(n,b),V()}var sa=k("<h6> </h6>"),la=k('<li role="none"><a class="menu_item ellipsis line_height_lg svelte-epe03s"> </a></li>'),ia=k('<li class="category svelte-epe03s"><!> <ul class="unstyled"></ul></li>'),ca=k('<ul class="library_menu unstyled svelte-epe03s"></ul>');function we(n,e){I(e,!0);const c=ae(),y=()=>te(oe,"$page",c),u=O(()=>e.tomes.reduce((s,o)=>{var p;return s[p=o.category]??(s[p]=[]),s[o.category].push(o),s},{}));var f=ca();ee(f,21,()=>Object.entries(i(u)),([s,o])=>s,(s,o)=>{let p=()=>i(o)[0],d=()=>i(o)[1];var a=ia(),h=l(a);$(h,()=>e.children,_=>{var m=S(),v=T(m);E(v,()=>e.children,p),t(_,m)},_=>{var m=sa(),v=l(m,!0);r(m),D(()=>j(v,p())),t(_,m)});var w=x(h,2);ee(w,20,d,_=>_,(_,m)=>{var v=la();const z=O(()=>fe(m));var P=l(v),g=l(P,!0);r(P),r(v),D(()=>{pe(P,"href",i(z)),C(P,"selected",i(z)===y().url.pathname),j(g,m.name)}),he(3,v,()=>ye),t(_,v)}),r(w),r(a),t(s,a)}),r(f),t(n,f),V()}var da=k('<aside class="library_secondary_nav unstyled svelte-1b4dig"><nav aria-label="Secondary" class="svelte-1b4dig"><!></nav></aside>');function _e(n,e){const c=re(e,"sidebar",3,!0);var y=da(),u=l(y),f=l(u);we(f,{get tomes(){return e.tomes}}),r(u),r(y),D(()=>C(y,"sidebar",c())),t(n,y)}var ma=k('<li role="none"><a class="menu_item overflow_wrap_anywhere line_height_sm svelte-1f64b7o"> </a></li>'),va=k('<nav aria-label="On this page" class="w_100"><ul class="unstyled"></ul></nav>'),_a=k('<div class="sidebar_wrapper svelte-1f64b7o"><!></div>'),ga=k('<div class="library_page_links svelte-1f64b7o"><h6>On this page</h6> <!></div>');function ua(n,e){I(e,!0);const c=ae(),y=()=>te(oe,"$page",c),u=d=>{var a=va(),h=l(a);ee(h,21,()=>b.library_links,w=>w.id,(w,_)=>{var m=ma(),v=l(m);const z=O(()=>b.slugs_onscreen.has(i(_).slug));var P=l(v,!0);r(v),r(m),D(()=>{C(m,"pl_xl4",i(_).tag==="h4"),pe(v,"href",`#${i(_).slug??""}`),C(v,"selected",i(_).slug===i(s)),C(v,"highlighted",i(z)),j(P,i(_).text)}),he(3,m,()=>ye),t(w,m)}),r(h),r(a),t(d,a)},f=re(e,"sidebar",3,!0),b=ne.get(),s=O(()=>y().url.hash.slice(1));var o=ga(),p=x(l(o),2);$(p,f,d=>{var a=_a(),h=l(a);u(h),r(a),t(d,a)},d=>{u(d)}),r(o),t(n,o),V()}var pa=k("<h6> </h6>"),fa=k('<aside class="library_tertiary_nav unstyled svelte-vi1gc0"><!> <!></aside>');function ge(n,e){I(e,!0);const c=ae(),y=()=>te(oe,"$page",c),u=re(e,"sidebar",3,!0),f=O(()=>e.tomes.find(a=>fe(a)===y().url.pathname)),b=O(()=>{var a;return(a=i(f))==null?void 0:a.related.map(h=>e.tomes_by_name.get(h))}),s=ne.get();var o=fa(),p=l(o);$(p,()=>{var a;return(a=i(b))==null?void 0:a.length},a=>{we(a,{get tomes(){return i(b)},children:(w,_=X)=>{var m=pa(),v=l(m);r(m),D(()=>j(v,`related ${_()??""}`)),t(w,m)},$$slots:{default:!0}})});var d=x(p,2);$(d,()=>s.library_links.length>1,a=>{ua(a,{get sidebar(){return u()}})}),r(o),t(n,o),V()}var ba=(n,e)=>e(),ha=k('<div class="nav_dialog_toggle svelte-7wvfhw"><button class="plain svelte-7wvfhw" type="button">menu</button></div>'),ya=k('<div class="secondary_nav_wrapper svelte-7wvfhw"><!></div>'),wa=k('<div class="mb_xl5"><!></div>'),ka=k('<div class="pane"><div class="p_xl pb_0"><!></div> <div class="px_lg pb_xl"><!> <!></div></div>'),xa=k('<div class="library svelte-7wvfhw"><!> <!> <main class="svelte-7wvfhw"><!> <!> <section class="box svelte-7wvfhw"><!></section></main></div>  <!>',1);function $a(n,e){I(e,!0);const c=new Map(e.tomes.map(g=>[g.name,g]));Be.set(c);const y=1e3,u=800,f="180px";let b=J(void 0),s=J(!1);const o=g=>{R(s,q(g??!i(s)))};Ne(()=>{R(s,!1)}),ne.set();var p=xa();Pe("hashchange",Ae,()=>R(s,!1));var d=T(p);de(d,"--library_menu_width",f);var a=l(d);na(a,{get pkg(){return e.pkg},get breadcrumb_children(){return e.breadcrumb_children},children:(g,A)=>{var L=ha(),N=l(L);N.__click=[ba,o],r(L),t(g,L)},$$slots:{default:!0}});var h=x(a,2);$(h,()=>!i(b)||i(b)>u,g=>{var A=ya(),L=l(A);_e(L,{get tomes(){return e.tomes}}),r(A),t(g,A)});var w=x(h,2),_=l(w);E(_,()=>e.children);var m=x(_,2);$(m,()=>!i(b)||i(b)>y,g=>{ge(g,{get tomes(){return e.tomes},tomes_by_name:c})});var v=x(m,2),z=l(v);Oe(z,{get pkg(){return e.pkg},children:(g,A)=>{var L=wa(),N=l(L);Z(N,{children:(Y,se)=>{var K=S(),H=T(K);$(H,()=>e.breadcrumb_children,M=>{var B=S(),le=T(B);E(le,()=>e.breadcrumb_children,()=>!1),t(M,B)},M=>{var B=U();D(()=>j(B,e.pkg.package_json.glyph??"🏠")),t(M,B)}),t(Y,K)},$$slots:{default:!0}}),r(L),t(g,L)},$$slots:{default:!0}}),r(v),r(w),r(d);var P=x(d,2);$(P,()=>i(s)&&i(b)&&i(b)<=y,g=>{be(g,{onclose:()=>R(s,!1),children:(A,L)=>{var N=ka();de(N,"--library_menu_width",f);var Y=l(N),se=l(Y);Z(se,{children:(B,le)=>{var ie=S(),ke=T(ie);$(ke,()=>e.breadcrumb_children,G=>{var W=S(),xe=T(W);E(xe,()=>e.breadcrumb_children,()=>!1),t(G,W)},G=>{var W=U();D(()=>j(W,e.pkg.package_json.glyph??"🏠")),t(G,W)}),t(B,ie)},$$slots:{default:!0}}),r(Y);var K=x(Y,2),H=l(K);_e(H,{get tomes(){return e.tomes},sidebar:!1});var M=x(H,2);ge(M,{get tomes(){return e.tomes},tomes_by_name:c,sidebar:!1}),r(K),r(N),t(A,N)},$$slots:{default:!0}})}),ra("innerWidth",g=>R(b,q(g))),t(n,p),V()}ue(["click"]);const Pa=[{name:"introduction",category:"guide",component:je,related:[]},{name:"Themed",category:"theming",component:Ce,related:[]},{name:"Alert",category:"components",component:Je,related:["Card"]},{name:"Breadcrumb",category:"components",component:Ue,related:["Redirect"]},{name:"Card",category:"components",component:Ze,related:["Alert"]},{name:"Contextmenu",category:"components",component:qe,related:[]},{name:"Details",category:"components",component:We,related:[]},{name:"Dialog",category:"components",component:Fe,related:["Teleport"]},{name:"Hue_Input",category:"components",component:Qe,related:[]},{name:"Library",category:"components",component:Xe,related:[]},{name:"logos",category:"components",component:ea,related:["Package_Detail","Package_Summary"]},{name:"Package_Detail",category:"components",component:Me,related:["logos","Package_Summary"]},{name:"Package_Summary",category:"components",component:Ke,related:["logos","Package_Detail"]},{name:"Pending_Animation",category:"components",component:Ve,related:["Pending_Button"]},{name:"Pending_Button",category:"components",component:Ye,related:["Pending_Animation"]},{name:"Redirect",category:"components",component:Ge,related:["Breadcrumb"]},{name:"Teleport",category:"components",component:He,related:["Dialog"]}];var F;class Ta{constructor(e=null){ce(this,F,J());this.value=e}get value(){return i(Q(this,F))}set value(e){R(Q(this,F),q(e))}}F=new WeakMap;const La=Ee(()=>new Ta(null));var Sa=k('<div class="icon row"><!> <span class="ml_sm">fuz</span></div>'),Aa=k('<div class="pane"><div class="panel p_lg box"><!> <aside>⚠️ This is unfinished and will change.</aside> <button type="button">ok</button></div></div>'),Da=k("<!> <!>",1);function ut(n,e){I(e,!0);const c=La.set(),y=aa.get();var u=Da(),f=T(u);$a(f,{tomes:Pa,pkg:y,breadcrumb_children:(o,p=X)=>{var d=S(),a=T(d);$(a,p,h=>{var w=Sa(),_=l(w);me(_,{data:ve,size:"var(--icon_size_sm)"}),De(2),r(w),t(h,w)},h=>{me(h,{data:ve,size:"var(--icon_size_sm)"})}),t(o,d)},children:(o,p)=>{var d=S(),a=T(d);E(a,()=>e.children),t(o,d)},$$slots:{breadcrumb_children:!0,default:!0}});var b=x(f,2);$(b,()=>c.value,s=>{be(s,{onclose:()=>c.value=null,children:(p,d=X)=>{var a=Aa(),h=l(a),w=l(h);Ie(w,{get variable(){return c.value}});var _=x(w,4);_.__click=function(...m){var v;(v=d())==null||v.apply(this,m)},r(h),r(a),t(p,a)},$$slots:{default:!0}})}),t(n,u),V()}ue(["click"]);export{ut as component};
