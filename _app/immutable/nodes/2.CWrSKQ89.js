import{b as $,a,f as y,t as k,c as s,n as ee,s as n,$ as ke}from"../chunks/disclose-version.Dxr0gsna.js";import{r as ie,h as xe,p as F,a as K,v as V,g as h,J as ae,t as S,d as R,a7 as L,a5 as re,s as $e}from"../chunks/runtime.jOsey7ll.js";import{s as j,a as Q,d as me,e as we}from"../chunks/render.DebiWJO9.js";import{i as D}from"../chunks/if.Wn85vDr3.js";import{s as Y,b as ve}from"../chunks/attributes.BJddIwjt.js";import{u as W,s as J,a as Pe}from"../chunks/store.CiwmEv4D.js";import{p as Te}from"../chunks/proxy.Cl3psK3T.js";import{a as Le}from"../chunks/shared.BSNRrXXz.js";import{b as Ae,o as De}from"../chunks/entry.WkWZ89wF.js";import{B as te}from"../chunks/Breadcrumb.ZtzAy6Jg.js";import{s as Be,i as Ee}from"../chunks/tome.B0jujVAD.js";import{t as q}from"../chunks/class.DKRvNPJw.js";import{p as U}from"../chunks/stores.CJ7DJyiv.js";import{i as ze,D as _e}from"../chunks/Dialog.fp8_1O6l.js";import{p as oe}from"../chunks/props.D7qg7EHC.js";import{e as ne}from"../chunks/each.Dv7QH03A.js";import{t as ue,s as ge}from"../chunks/index.YqYSqJjX.js";import{g as Ne,s as Re}from"../chunks/Hashlink.CJc4r7jt.js";import{L as Se,F as le}from"../chunks/Fuz_Logo.C8YVvk6J.js";import{component as Ce}from"./27.CCfAq0F-.js";import{_ as Ie,S as Ye}from"../chunks/26.BnXmACyl.js";import{component as je}from"./22.DMRklkZv.js";import{component as Oe}from"./23.DdCL5G8M.js";import{component as Ve}from"./21.CIyICioH.js";import{component as qe}from"./20.BOPzgxMO.js";import{component as Fe}from"./16.DUzZedr-.js";import{component as Ke}from"./17.DaIp83gf.js";import{component as He}from"./25.ZJjNf45U.js";import{component as Me}from"./8.DvOU3N-7.js";import{component as We}from"./15.DluXHdjz.js";import{component as Je}from"./24.DSP-N-Pq.js";import{component as Xe}from"./18.iiIcIR0u.js";import{component as Ge}from"./9.DCfzH8NO.js";import{component as Qe}from"./14.BBHeO2Yc.js";import{w as Ue}from"../chunks/index.lFeV5zGS.js";import{g as Ze}from"../chunks/pkg.SzNCs4ry.js";function ea(g,e,v){var p=()=>{f=!0,clearTimeout(l),l=setTimeout(b,100),v(window.scrollY)};addEventListener("scroll",p,{passive:!0});var f=!1,l,b=()=>{f=!1},c=!0;ie(()=>{var d=e();c?c=!1:!f&&d!=null&&(f=!0,clearTimeout(l),scrollTo(window.scrollX,d),l=setTimeout(b,100))}),xe(()=>{var d=window.scrollY;d===0&&v(d)}),ie(()=>()=>{removeEventListener("scroll",p)})}function aa(g,e){Le(window,["resize"],()=>e(window[g]))}var ra=k('<div class="library_primary_nav svelte-1v06zp8"><div class="background svelte-1v06zp8" aria-hidden="true"></div> <div class="content svelte-1v06zp8"><nav class="svelte-1v06zp8"><!></nav> <!></div></div>');function ta(g,e){F(e,!0);const v={};W(v);const p=()=>J(U,"$page",v),f=R(()=>p().url),l=R(()=>{let{pathname:x}=h(f);return[x]}),b=R(()=>h(l)[0]),c=R(()=>h(b)==="/"),B=!ze();let _=ae(0);const r=R(()=>h(_)>0);var t=$(),m=y(t);D(m,()=>B,x=>{var o=ra(),i=s(o),w=n(n(i,!0)),P=s(w),N=s(P);te(N,{children:(A,T)=>{var z=$(),X=y(z);D(X,()=>e.breadcrumb_children,C=>{var E=$(),H=y(E);Y(()=>e.breadcrumb_children,H,()=>!0),a(C,E)},C=>{var E=ee(C);S(()=>j(E,e.pkg.package_json.icon??"🏠")),a(C,E)}),a(A,z)},$$slots:{default:!0}});var u=n(n(P,!0));D(u,()=>e.children,A=>{var T=$(),z=y(T);Y(()=>e.children,z),a(A,T)}),S(()=>{q(o,"scrolled",h(r)),q(P,"selected_root",h(c))}),a(x,o)}),ea("y",()=>h(_),x=>V(_,x)),a(g,t),K()}var na=k("<h6> </h6>"),oa=k('<li role="none"><a class="menu_item svelte-1rxe5ap"> </a></li>'),sa=k('<li class="category svelte-1rxe5ap"><!> <ul class="unstyled svelte-1rxe5ap"></ul></li>'),ia=k('<ul class="library_menu unstyled svelte-1rxe5ap"></ul>');function pe(g,e){F(e,!0);const v={};W(v);const p=()=>J(U,"$page",v),f=R(()=>e.tomes.reduce((c,d)=>(d.category in c||(c[d.category]=[]),c[d.category].push(d),c),{}));var l=ia();ne(l,79,()=>Object.entries(h(f)),(c,d)=>L(L(c))[0],(c,d,B)=>{let _=()=>L(L(d))[0],r=()=>L(L(d))[1];var t=sa(),m=s(t);D(m,()=>e.children,o=>{var i=$(),w=y(i);Y(()=>e.children,w,_),a(o,i)},o=>{var i=na(),w=s(i);S(()=>j(w,_())),a(o,i)});var x=n(n(m,!0));ne(x,77,r,(o,i)=>L(o).slug,(o,i,w)=>{var P=oa();ue(3,P,()=>ge);var N=s(P),u=s(N);S(()=>{ve(N,"href",`${Q(Ae)}/library/${Q(L(i).slug)}`),q(N,"selected",L(i).pathname===p().url.pathname),j(u,L(i).name)}),a(o,P)}),a(c,t)}),a(g,l),K()}var la=k('<aside class="library_secondary_nav unstyled svelte-3hkd0o"><nav><!></nav></aside>');function de(g,e){const v=oe(e,"sidebar",3,!0);var p=la(),f=s(p),l=s(f);pe(l,{get tomes(){return e.tomes}}),S(()=>q(p,"sidebar",v())),a(g,p)}var da=k('<li role="none"><a class="menu_item svelte-yv1bsq"> </a></li>'),ca=k('<ul class="unstyled svelte-yv1bsq"></ul>'),ma=k('<div class="sidebar_wrapper svelte-yv1bsq"><!></div>'),va=k('<div class="library_page_links svelte-yv1bsq"><h6>On this page</h6> <!></div>');function _a(g,e){F(e,!0);const v={};W(v);const p=()=>J(U,"$page",v);var f=_=>{var r=ca();ne(r,77,()=>e.library_links.library_links,(t,m)=>L(t).id,(t,m,x)=>{var o=da();ue(3,o,()=>ge);var i=s(o),w=s(i);S(()=>{q(o,"pl_xl4",L(m).tag==="h4"),ve(i,"href",`#${Q(L(m).slug)}`),q(i,"selected",L(m).slug===h(b)),j(w,L(m).text)}),a(t,o)}),a(_,r)};const l=oe(e,"sidebar",3,!0),b=R(()=>p().url.hash.slice(1));var c=va(),d=s(c),B=n(n(d,!0));D(B,l,_=>{var r=ma(),t=s(r);f(t),a(_,r)},_=>{var r=$(),t=y(r);f(t),a(_,r)}),a(g,c),K()}var ua=k("<h6> </h6>"),ga=k('<aside class="library_tertiary_nav unstyled svelte-vi1gc0"><!> <!></aside>');function ce(g,e){F(e,!0);const v={};W(v);const p=()=>J(U,"$page",v),f=oe(e,"sidebar",3,!0),l=R(()=>e.tomes.find(r=>r.pathname===p().url.pathname)),b=R(()=>{var r,t;return(t=(r=h(l))==null?void 0:r.related)==null?void 0:t.map(m=>e.tomes_by_name.get(m))}),c=Ne();var d=ga(),B=s(d);D(B,()=>{var r;return(r=h(b))==null?void 0:r.length},r=>{var t=$(),m=y(t);{var x=(o,i=re)=>{var w=ua(),P=s(w);S(()=>j(P,`related ${Q(i())}`)),a(o,w)};pe(m,{get tomes(){return h(b)},children:x})}a(r,t)});var _=n(n(B,!0));D(_,()=>c.library_links.length>1,r=>{var t=$(),m=y(t);_a(m,{library_links:c,get sidebar(){return f()}}),a(r,t)}),a(g,d),K()}var pa=(g,e)=>e(),fa=k('<div class="nav_dialog_toggle svelte-185hm91"><button class="plain svelte-185hm91" type="button">menu</button></div>'),ba=k('<div class="secondary_nav_wrapper svelte-185hm91"><!></div>'),ha=k('<div class="mb_xl5"><!></div>'),ya=k('<div class="pane"><div class="p_xl pb_0"><!></div> <div class="px_lg pb_xl"><!> <!></div></div>'),ka=k('<div class="library svelte-185hm91"><!> <!> <main><div class="content svelte-185hm91"><!> <!> <section class="box svelte-185hm91"><!></section></div></main></div> <!>',1);function xa(g,e){F(e,!0);const v=new Map(e.tomes.map(u=>[u.name,u]));Be(v);const p=1e3,f=800;let l=ae(void 0),b=ae(!1);const c=u=>{V(b,Te(u??!h(b)))};De(()=>{V(b,!1)}),Re();var d=ka();we("hashchange",ke,()=>V(b,!1),!1);var B=y(d),_=s(B);ta(_,{get pkg(){return e.pkg},get breadcrumb_children(){return e.breadcrumb_children},children:(u,A)=>{var T=fa(),z=s(T);z.__click=[pa,c],a(u,T)},$$slots:{default:!0}});var r=n(n(_,!0));D(r,()=>!h(l)||h(l)>f,u=>{var A=ba(),T=s(A);de(T,{get tomes(){return e.tomes}}),a(u,A)});var t=n(n(r,!0)),m=s(t),x=s(m);Y(()=>e.children,x);var o=n(n(x,!0));D(o,()=>!h(l)||h(l)>p,u=>{var A=$(),T=y(A);ce(T,{get tomes(){return e.tomes},tomes_by_name:v}),a(u,A)});var i=n(n(o,!0)),w=s(i);Se(w,{get pkg(){return e.pkg},children:(u,A)=>{var T=ha(),z=s(T);te(z,{children:(X,C)=>{var E=$(),H=y(E);D(H,()=>e.breadcrumb_children,O=>{var I=$(),Z=y(I);Y(()=>e.breadcrumb_children,Z,()=>!1),a(O,I)},O=>{var I=ee(O);S(()=>j(I,e.pkg.package_json.icon??"🏠")),a(O,I)}),a(X,E)},$$slots:{default:!0}}),a(u,T)},$$slots:{default:!0}});var P=n(B,!0);P.nodeValue="  ";var N=n(P);D(N,()=>h(b)&&h(l)&&h(l)<=p,u=>{var A=$(),T=y(A);_e(T,{onclose:()=>V(b,!1),children:(z,X)=>{var C=ya(),E=s(C),H=s(E);te(H,{children:(be,Aa)=>{var se=$(),he=y(se);D(he,()=>e.breadcrumb_children,G=>{var M=$(),ye=y(M);Y(()=>e.breadcrumb_children,ye,()=>!1),a(G,M)},G=>{var M=ee(G);S(()=>j(M,e.pkg.package_json.icon??"🏠")),a(G,M)}),a(be,se)},$$slots:{default:!0}});var O=n(n(E,!0)),I=s(O);de(I,{get tomes(){return e.tomes},sidebar:!1});var Z=n(n(I,!0));ce(Z,{get tomes(){return e.tomes},tomes_by_name:v,sidebar:!1}),a(z,C)},$$slots:{default:!0}}),a(u,A)}),aa("innerWidth",u=>V(l,u)),a(g,d),K()}me(["click"]);const fe=[{name:"introduction",slug:"introduction",pathname:"",category:"guide",component:Ce,related:[]},{name:"Themed",slug:"Themed",pathname:"",category:"components",component:Ie,related:[]},{name:"Teleport",slug:"Teleport",pathname:"",category:"components",component:He,related:["Dialog"]},{name:"Redirect",slug:"Redirect",pathname:"",category:"components",component:Je,related:["Breadcrumb"]},{name:"Pending_Button",slug:"Pending_Button",pathname:"",category:"components",component:Oe,related:["Pending_Animation"]},{name:"Pending_Animation",slug:"Pending_Animation",pathname:"",category:"components",component:je,related:["Pending_Button"]},{name:"Package_Summary",slug:"Package_Summary",pathname:"",category:"components",component:Ve,related:["Package_Detail"]},{name:"Package_Detail",slug:"Package_Detail",pathname:"",category:"components",component:qe,related:["Package_Summary"]},{name:"Hue_Input",slug:"Hue_Input",pathname:"",category:"components",component:Xe,related:[]},{name:"Dialog",slug:"Dialog",pathname:"",category:"components",component:Ke,related:["Teleport"]},{name:"Details",slug:"Details",pathname:"",category:"components",component:Fe,related:[]},{name:"Contextmenu",slug:"Contextmenu",pathname:"",category:"components",component:We,related:[]},{name:"Card",slug:"Card",pathname:"",category:"components",component:Qe,related:["Alert"]},{name:"Breadcrumb",slug:"Breadcrumb",pathname:"",category:"components",component:Ge,related:["Redirect"]},{name:"Alert",slug:"Alert",pathname:"",category:"components",component:Me,related:["Card"]}];for(const g of fe)Ee(g);const $a=Symbol("selected_variable"),wa=(g=Ue(null))=>$e($a,g);var Pa=k('<div class="icon row"><!> <span class="ml_sm">fuz</span></div>'),Ta=k('<div class="pane"><div class="panel p_lg box"><!> <aside>⚠️ This is unfinished and will change.</aside> <button>ok</button></div></div>'),La=k("<!> <!>",1);function mr(g,e){F(e,!0);const v={};W(v);const p=()=>J(f,"$selected_variable",v),f=wa(),l=Ze();var b=La(),c=y(b);{var d=(_,r=re)=>{var t=$(),m=y(t);D(m,r,x=>{var o=Pa(),i=s(o);le(i,{size:"32px"}),a(x,o)},x=>{var o=$(),i=y(o);le(i,{size:"32px"}),a(x,o)}),a(_,t)};xa(c,{tomes:fe,pkg:l,breadcrumb_children:d,children:(_,r)=>{var t=$(),m=y(t);Y(()=>e.children,m),a(_,t)},$$slots:{default:!0}})}var B=n(n(c,!0));D(B,p,_=>{var r=$(),t=y(r);{var m=(x,o=re)=>{var i=Ta(),w=s(i),P=s(w);Ye(P,{get variable(){return p()}});var N=n(n(P,!0)),u=n(n(N,!0));u.__click=o(),a(x,i)};_e(t,{onclose:()=>Pe(f,null),children:m})}a(_,r)}),a(g,b),K()}me(["click"]);export{mr as component};
