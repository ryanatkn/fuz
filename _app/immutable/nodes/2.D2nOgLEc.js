import{b as x,a,f as h,t as y,c as s,l as ee,s as o,$ as ye}from"../chunks/disclose-version.Ddj0amtR.js";import{r as z,a as F,p as O,g as f,d as S,F as ae,m as q,$ as L,s as ke}from"../chunks/runtime.N2A2yyIi.js";import{s as j,a as Q,d as de,e as xe}from"../chunks/render.UwBO_r64.js";import{n as re}from"../chunks/utils.BSJX-nVd.js";import{i as B}from"../chunks/if.UhUuT2rm.js";import{s as Y,b as me}from"../chunks/attributes.aBPS3tII.js";import{u as W,s as X,a as we}from"../chunks/store.CYQVc-MD.js";import{a as Pe}from"../chunks/shared.C_DrP-Z0.js";import{p as Te}from"../chunks/proxy.Dw-yJxJX.js";import{b as Le,o as Ae}from"../chunks/entry.CNeS-VtA.js";import{B as te}from"../chunks/Breadcrumb.Cn_P-dOP.js";import{s as De,i as $e}from"../chunks/tome.60teOZbE.js";import{t as K}from"../chunks/class.BOV0QPCC.js";import{p as U}from"../chunks/stores.D0-QLEfO.js";import{i as Be,D as ve}from"../chunks/Dialog.BJ7uh4hk.js";import{p as oe}from"../chunks/props.CB8TrldN.js";import{e as ne}from"../chunks/each.CWSUAFwf.js";import{t as _e,s as ge}from"../chunks/index.D0CvV8xx.js";import{g as Ee,s as ze}from"../chunks/Hashlink.4wB58WpS.js";import{L as Ne,F as ie}from"../chunks/Fuz_Logo.ntVqjd9F.js";import{component as Re}from"./27.CPFZ39sZ.js";import{_ as Se,S as Ce}from"../chunks/26.sPXBnlBA.js";import{component as Ie}from"./22.BhM4kmqv.js";import{component as Ye}from"./23.Ck3ly17l.js";import{component as je}from"./21.BbOPMJ6S.js";import{component as Fe}from"./20.BX6suSE-.js";import{component as Oe}from"./16.iRku5oz_.js";import{component as Ve}from"./17.Ccv6C8h1.js";import{component as qe}from"./25.CzQA1lUj.js";import{component as Ke}from"./8.gKB4pIzA.js";import{component as He}from"./15.DR22RLXs.js";import{component as Me}from"./24.CPiOskes.js";import{component as We}from"./18.CZdzYfpx.js";import{component as Xe}from"./9.q3vIvkFb.js";import{component as Ge}from"./14.B61nc6fc.js";import{w as Je}from"../chunks/index.D6XVrNcu.js";import{g as Qe}from"../chunks/pkg.CqV5r5nW.js";function Ue(_,e,g){var p=_==="x",w=()=>{v=!0,clearTimeout(i),i=setTimeout(u,100),g(window[p?"scrollX":"scrollY"])};addEventListener("scroll",w,{passive:!0});var c=0,v=!1,i,u=()=>{v=!1};z(()=>{c=e()||0,v||(v=!0,clearTimeout(i),p?scrollTo(c,window.scrollY):scrollTo(window.scrollX,c),i=setTimeout(u,100))}),z(()=>()=>{removeEventListener("scroll",w)})}function Ze(_,e){Pe(window,["resize"],()=>e(window[_]))}var ea=y('<div class="library_primary_nav svelte-1v06zp8"><div class="background svelte-1v06zp8"></div> <div class="content svelte-1v06zp8"><nav class="svelte-1v06zp8"><!></nav> <!></div></div>');function aa(_,e){F(e,!0);const g={};W(g);const p=()=>X(U,"$page",g),w=S(()=>p().url),c=S(()=>{let{pathname:k}=f(w);return[k]}),v=S(()=>f(c)[0]),i=S(()=>f(v)==="/"),A=!Be();let d=ae(0);const r=S(()=>f(d)>0);var t=x(),m=h(t);B(m,()=>A,k=>{var n=ea(),l=s(n),P=o(o(l,!0)),D=s(P),R=s(D);te(R,{children:($,T)=>{var N=x(),G=h(N);B(G,()=>e.breadcrumb_children,C=>{var E=x(),H=h(E);Y(()=>e.breadcrumb_children,H,()=>!0),a(C,E)},C=>{var E=ee(C);z(()=>j(E,e.pkg.package_json.icon??"🏠")),a(C,E)}),a($,N)}});var b=o(o(D,!0));B(b,()=>e.children,$=>{var T=x(),N=h(T);Y(()=>e.children,N),a($,T)}),z(()=>{K(n,"scrolled",f(r)),K(D,"selected_root",f(i))}),a(k,n)}),Ue("y",()=>f(d),k=>q(d,k)),a(_,t),O()}var ra=y("<h6> </h6>"),ta=y('<li role="none"><a class="menu_item svelte-1rxe5ap"> </a></li>'),na=y('<li class="category svelte-1rxe5ap"><!> <ul class="unstyled svelte-1rxe5ap"></ul></li>'),oa=y('<ul class="library_menu unstyled svelte-1rxe5ap"></ul>');function ue(_,e){F(e,!0);const g={};W(g);const p=()=>X(U,"$page",g),w=S(()=>e.tomes.reduce((i,u)=>(u.category in i||(i[u.category]=[]),i[u.category].push(u),i),{}));var c=oa();ne(c,79,()=>Object.entries(f(w)),(i,u)=>L(L(i))[0],(i,u,A)=>{let d=()=>L(L(u))[0],r=()=>L(L(u))[1];var t=na(),m=s(t);B(m,()=>e.children,n=>{var l=x(),P=h(l);Y(()=>e.children,P,d),a(n,l)},n=>{var l=ra(),P=s(l);z(()=>j(P,d())),a(n,l)});var k=o(o(m,!0));ne(k,77,r,(n,l)=>L(n).slug,(n,l,P)=>{var D=ta();_e(3,D,()=>ge);var R=s(D),b=s(R);z(()=>{me(R,"href",`${Q(Le)}/library/${Q(L(l).slug)}`),K(R,"selected",L(l).pathname===p().url.pathname),j(b,L(l).name)}),a(n,D)}),a(i,t)}),a(_,c),O()}var sa=y('<aside class="library_secondary_nav unstyled svelte-3hkd0o"><nav><!></nav></aside>');function le(_,e){F(e,!0);const g=oe(e,"sidebar",3,!0);var p=sa(),w=s(p),c=s(w);ue(c,{get tomes(){return e.tomes}}),z(()=>K(p,"sidebar",g())),a(_,p),O()}var ia=y('<li role="none"><a class="menu_item svelte-yv1bsq"> </a></li>'),la=y('<ul class="unstyled svelte-yv1bsq"></ul>'),ca=y('<div class="sidebar_wrapper svelte-yv1bsq"><!></div>'),da=y('<div class="library_page_links svelte-yv1bsq"><h6>On this page</h6> <!></div>');function ma(_,e){F(e,!0);const g={};W(g);const p=()=>X(U,"$page",g),w=oe(e,"sidebar",3,!0),c=S(()=>p().url.hash.slice(1));var v=da();function i(d){var r=la();ne(r,77,()=>e.library_links.library_links,(t,m)=>L(t).id,(t,m,k)=>{var n=ia();_e(3,n,()=>ge);var l=s(n),P=s(l);z(()=>{K(n,"pl_xl4",L(m).tag==="h4"),me(l,"href",`#${Q(L(m).slug)}`),K(l,"selected",L(m).slug===f(c)),j(P,L(m).text)}),a(t,n)}),a(d,r)}var u=s(v),A=o(o(u,!0));B(A,w,d=>{var r=ca(),t=s(r);i(t),a(d,r)},d=>{var r=x(),t=h(r);i(t),a(d,r)}),a(_,v),O()}var va=y("<h6> </h6>"),_a=y('<aside class="library_tertiary_nav unstyled svelte-vi1gc0"><!> <!></aside>');function ce(_,e){F(e,!0);const g={};W(g);const p=()=>X(U,"$page",g),w=oe(e,"sidebar",3,!0),c=S(()=>e.tomes.find(r=>r.pathname===p().url.pathname)),v=S(()=>{var r,t;return(t=(r=f(c))==null?void 0:r.related)==null?void 0:t.map(m=>e.tomes_by_name.get(m))}),i=Ee();var u=_a(),A=s(u);B(A,()=>{var r;return(r=f(v))==null?void 0:r.length},r=>{var t=x(),m=h(t);ue(m,{get tomes(){return f(v)},children:(n,l=re)=>{var P=va(),D=s(P);z(()=>j(D,`related ${Q(l())}`)),a(n,P)}}),a(r,t)});var d=o(o(A,!0));B(d,()=>i.library_links.length>1,r=>{var t=x(),m=h(t);ma(m,{library_links:i,get sidebar(){return w()}}),a(r,t)}),a(_,u),O()}var ga=(_,e)=>e(),ua=y('<div class="nav_dialog_toggle svelte-185hm91"><button class="plain svelte-185hm91" type="button">menu</button></div>'),pa=y('<div class="secondary_nav_wrapper svelte-185hm91"><!></div>'),ba=y('<div class="mb_xl5"><!></div>'),fa=y('<div class="pane"><div class="p_xl pb_0"><!></div> <div class="px_lg pb_xl"><!> <!></div></div>'),ha=y('<div class="library svelte-185hm91"><!> <!> <main><div class="content svelte-185hm91"><!> <!> <section class="box svelte-185hm91"><!></section></div></main></div> <!>',1);function ya(_,e){F(e,!0);const g=new Map(e.tomes.map(b=>[b.name,b]));De(g);const p=1e3,w=800;let c=ae(void 0),v=ae(!1);const i=b=>{q(v,Te(b??!f(v)))};Ae(()=>{q(v,!1)}),ze();var u=ha();xe("hashchange",ye,()=>q(v,!1),!1);var A=h(u),d=s(A);aa(d,{get pkg(){return e.pkg},get breadcrumb_children(){return e.breadcrumb_children},children:(b,$)=>{var T=ua(),N=s(T);N.__click=[ga,i],a(b,T)}});var r=o(o(d,!0));B(r,()=>!f(c)||f(c)>w,b=>{var $=pa(),T=s($);le(T,{get tomes(){return e.tomes}}),a(b,$)});var t=o(o(r,!0)),m=s(t),k=s(m);Y(()=>e.children,k);var n=o(o(k,!0));B(n,()=>!f(c)||f(c)>p,b=>{var $=x(),T=h($);ce(T,{get tomes(){return e.tomes},tomes_by_name:g}),a(b,$)});var l=o(o(n,!0)),P=s(l);Ne(P,{get pkg(){return e.pkg},children:(b,$)=>{var T=ba(),N=s(T);te(N,{children:(G,C)=>{var E=x(),H=h(E);B(H,()=>e.breadcrumb_children,V=>{var I=x(),Z=h(I);Y(()=>e.breadcrumb_children,Z,()=>!1),a(V,I)},V=>{var I=ee(V);z(()=>j(I,e.pkg.package_json.icon??"🏠")),a(V,I)}),a(G,E)}}),a(b,T)}});var D=o(A,!0);D.nodeValue="  ";var R=o(D);B(R,()=>f(v)&&f(c)&&f(c)<=p,b=>{var $=x(),T=h($);ve(T,{onclose:()=>q(v,!1),children:(N,G)=>{var C=fa(),E=s(C),H=s(E);te(H,{children:(be,La)=>{var se=x(),fe=h(se);B(fe,()=>e.breadcrumb_children,J=>{var M=x(),he=h(M);Y(()=>e.breadcrumb_children,he,()=>!1),a(J,M)},J=>{var M=ee(J);z(()=>j(M,e.pkg.package_json.icon??"🏠")),a(J,M)}),a(be,se)}});var V=o(o(E,!0)),I=s(V);le(I,{get tomes(){return e.tomes},sidebar:!1});var Z=o(o(I,!0));ce(Z,{get tomes(){return e.tomes},tomes_by_name:g,sidebar:!1}),a(N,C)}}),a(b,$)}),Ze("innerWidth",b=>q(c,b)),a(_,u),O()}de(["click"]);const pe=[{name:"introduction",slug:"introduction",pathname:"",category:"guide",component:Re,related:[]},{name:"Themed",slug:"Themed",pathname:"",category:"components",component:Se,related:[]},{name:"Teleport",slug:"Teleport",pathname:"",category:"components",component:qe,related:["Dialog"]},{name:"Redirect",slug:"Redirect",pathname:"",category:"components",component:Me,related:["Breadcrumb"]},{name:"Pending_Button",slug:"Pending_Button",pathname:"",category:"components",component:Ye,related:["Pending_Animation"]},{name:"Pending_Animation",slug:"Pending_Animation",pathname:"",category:"components",component:Ie,related:["Pending_Button"]},{name:"Package_Summary",slug:"Package_Summary",pathname:"",category:"components",component:je,related:["Package_Detail"]},{name:"Package_Detail",slug:"Package_Detail",pathname:"",category:"components",component:Fe,related:["Package_Summary"]},{name:"Hue_Input",slug:"Hue_Input",pathname:"",category:"components",component:We,related:[]},{name:"Dialog",slug:"Dialog",pathname:"",category:"components",component:Ve,related:["Teleport"]},{name:"Details",slug:"Details",pathname:"",category:"components",component:Oe,related:[]},{name:"Contextmenu",slug:"Contextmenu",pathname:"",category:"components",component:He,related:[]},{name:"Card",slug:"Card",pathname:"",category:"components",component:Ge,related:["Alert"]},{name:"Breadcrumb",slug:"Breadcrumb",pathname:"",category:"components",component:Xe,related:["Redirect"]},{name:"Alert",slug:"Alert",pathname:"",category:"components",component:Ke,related:["Card"]}];for(const _ of pe)$e(_);const ka=Symbol("selected_variable"),xa=(_=Je(null))=>ke(ka,_);var wa=y('<div class="icon row"><!> <span class="ml_sm">fuz</span></div>'),Pa=y('<div class="pane"><div class="panel p_lg box"><!> <aside>⚠️ This is unfinished and will change.</aside> <button>ok</button></div></div>'),Ta=y("<!> <!>",1);function dr(_,e){F(e,!0);const g={};W(g);const p=()=>X(w,"$selected_variable",g),w=xa(),c=Qe();var v=Ta(),i=h(v);ya(i,{tomes:pe,pkg:c,breadcrumb_children:(d,r=re)=>{var t=x(),m=h(t);B(m,r,k=>{var n=wa(),l=s(n);ie(l,{size:"32px"}),a(k,n)},k=>{var n=x(),l=h(n);ie(l,{size:"32px"}),a(k,n)}),a(d,t)},children:(d,r)=>{var t=x(),m=h(t);Y(()=>e.children,m),a(d,t)}});var u=o(o(i,!0));B(u,p,A=>{var d=x(),r=h(d);ve(r,{onclose:()=>we(w,null),children:(m,k=re)=>{var n=Pa(),l=s(n),P=s(l);Ce(P,{get variable(){return p()}});var D=o(o(P,!0)),R=o(o(D,!0));R.__click=k(),a(m,n)}}),a(A,d)}),a(_,v),O()}de(["click"]);export{dr as component};
