import{b as $,a,f as y,t as k,c as s,m as Z,s as n,$ as he}from"../chunks/disclose-version.CSpVFLMe.js";import{r as ye,i as ke,h as xe,p as K,a as F,w as Y,g as h,I as ee,t as S,d as R,a5 as A,K as ae,s as $e}from"../chunks/runtime.Dht6Pzrj.js";import{s as O,d as de,e as we}from"../chunks/render.ldLefYc7.js";import{i as D}from"../chunks/if.BY8i3A5v.js";import{s as j,b as ce}from"../chunks/attributes.ulKL4dWL.js";import{u as W,s as X,a as Pe}from"../chunks/store.BhTnKRts.js";import{p as Te}from"../chunks/proxy.BlvVYCw8.js";import{a as Ae}from"../chunks/shared.BBr0r38U.js";import{b as Le,o as De}from"../chunks/entry.eCgUsy-d.js";import{B as re}from"../chunks/Breadcrumb.CNRAQl6d.js";import{s as Be,i as Ee}from"../chunks/tome.C_gHmxyR.js";import{t as q}from"../chunks/class.Ct8XOsNy.js";import{p as Q}from"../chunks/stores.BxjxAw3p.js";import{i as ze,D as me}from"../chunks/Dialog.DGTqME5D.js";import{p as ne}from"../chunks/props.C7gNG4pc.js";import{e as te}from"../chunks/each.VeypzIej.js";import{t as ve,s as _e}from"../chunks/index.D8i92-Cy.js";import{g as Ne,s as Re}from"../chunks/Hashlink.CWrUi9wT.js";import{L as Se,F as se}from"../chunks/Fuz_Logo.V1HNHwCh.js";import{component as Ce}from"./27.ApubaSMQ.js";import{_ as Ie,S as je}from"../chunks/26.C-tzgtYy.js";import{component as Oe}from"./22.DeHHTX7p.js";import{component as Ve}from"./23.CsGM0Tru.js";import{component as Ye}from"./21.ctMfgBo2.js";import{component as qe}from"./20.BJD4Mml1.js";import{component as Ke}from"./16.BouchWXD.js";import{component as Fe}from"./17.JP8z6pnm.js";import{component as He}from"./25.BLUEsQ-V.js";import{component as Me}from"./8.hmVF3S1G.js";import{component as We}from"./15.CoTIVlsz.js";import{component as Xe}from"./24.C-CdA3rf.js";import{component as Ge}from"./18.CPSVfldM.js";import{component as Je}from"./9.BV3Lw4YD.js";import{component as Qe}from"./14.2G0bczIl.js";import{w as Ue}from"../chunks/index.BjiWuVIE.js";import{g as Ze}from"../chunks/pkg.DfcEtao7.js";function ea(g,e,v){var p=()=>{f=!0,clearTimeout(l),l=setTimeout(b,100),v(window.scrollY)};addEventListener("scroll",p,{passive:!0});var f=!1,l,b=()=>{f=!1},d=!0;ye(()=>{var _=e();d?d=!1:!f&&_!=null&&(f=!0,clearTimeout(l),scrollTo(window.scrollX,_),l=setTimeout(b,100))}),ke(p),xe(()=>{removeEventListener("scroll",p)})}function aa(g,e){Ae(window,["resize"],()=>e(window[g]))}var ra=k('<div class="library_primary_nav svelte-1v06zp8"><div class="background svelte-1v06zp8" aria-hidden="true"></div> <div class="content svelte-1v06zp8"><nav class="svelte-1v06zp8"><!></nav> <!></div></div>');function ta(g,e){K(e,!0);const v={};W(v);const p=()=>X(Q,"$page",v),f=R(()=>p().url),l=R(()=>{let{pathname:x}=h(f);return[x]}),b=R(()=>h(l)[0]),d=R(()=>h(b)==="/"),B=!ze();let m=ee(0);const r=R(()=>h(m)>0);var t=$(),c=y(t);D(c,()=>B,x=>{var o=ra(),i=s(o),w=n(n(i,!0)),P=s(w),N=s(P);re(N,{children:(L,T)=>{var z=$(),G=y(z);D(G,()=>e.breadcrumb_children,C=>{var E=$(),H=y(E);j(()=>e.breadcrumb_children,H,()=>!0),a(C,E)},C=>{var E=Z(C);S(()=>O(E,e.pkg.package_json.icon??"🏠")),a(C,E)}),a(L,z)},$$slots:{default:!0}});var u=n(n(P,!0));D(u,()=>e.children,L=>{var T=$(),z=y(T);j(()=>e.children,z),a(L,T)}),S(()=>{q(o,"scrolled",h(r)),q(P,"selected_root",h(d))}),a(x,o)}),ea("y",()=>h(m),x=>Y(m,x)),a(g,t),F()}var na=k("<h6> </h6>"),oa=k('<li role="none"><a class="menu_item svelte-1rxe5ap"> </a></li>'),sa=k('<li class="category svelte-1rxe5ap"><!> <ul class="unstyled svelte-1rxe5ap"></ul></li>'),ia=k('<ul class="library_menu unstyled svelte-1rxe5ap"></ul>');function ue(g,e){K(e,!0);const v={};W(v);const p=()=>X(Q,"$page",v),f=R(()=>e.tomes.reduce((d,_)=>(_.category in d||(d[_.category]=[]),d[_.category].push(_),d),{}));var l=ia();te(l,79,()=>Object.entries(h(f)),(d,_)=>A(A(d))[0],(d,_,B)=>{let m=()=>A(A(_))[0],r=()=>A(A(_))[1];var t=sa(),c=s(t);D(c,()=>e.children,o=>{var i=$(),w=y(i);j(()=>e.children,w,m),a(o,i)},o=>{var i=na(),w=s(i);S(()=>O(w,m())),a(o,i)});var x=n(n(c,!0));te(x,77,r,(o,i)=>A(o).slug,(o,i,w)=>{var P=oa();ve(3,P,()=>_e);var N=s(P),u=s(N);S(()=>{ce(N,"href",`${Le??""}/library/${A(i).slug??""}`),q(N,"selected",A(i).pathname===p().url.pathname),O(u,A(i).name)}),a(o,P)}),a(d,t)}),a(g,l),F()}var la=k('<aside class="library_secondary_nav unstyled svelte-3hkd0o"><nav><!></nav></aside>');function ie(g,e){const v=ne(e,"sidebar",3,!0);var p=la(),f=s(p),l=s(f);ue(l,{get tomes(){return e.tomes}}),S(()=>q(p,"sidebar",v())),a(g,p)}var da=k('<li role="none"><a class="menu_item svelte-yv1bsq"> </a></li>'),ca=k('<ul class="unstyled svelte-yv1bsq"></ul>'),ma=k('<div class="sidebar_wrapper svelte-yv1bsq"><!></div>'),va=k('<div class="library_page_links svelte-yv1bsq"><h6>On this page</h6> <!></div>');function _a(g,e){K(e,!0);const v={};W(v);const p=()=>X(Q,"$page",v);var f=m=>{var r=ca();te(r,77,()=>e.library_links.library_links,(t,c)=>A(t).id,(t,c,x)=>{var o=da();ve(3,o,()=>_e);var i=s(o),w=s(i);S(()=>{q(o,"pl_xl4",A(c).tag==="h4"),ce(i,"href",`#${A(c).slug??""}`),q(i,"selected",A(c).slug===h(b)),O(w,A(c).text)}),a(t,o)}),a(m,r)};const l=ne(e,"sidebar",3,!0),b=R(()=>p().url.hash.slice(1));var d=va(),_=s(d),B=n(n(_,!0));D(B,l,m=>{var r=ma(),t=s(r);f(t),a(m,r)},m=>{var r=$(),t=y(r);f(t),a(m,r)}),a(g,d),F()}var ua=k("<h6> </h6>"),ga=k('<aside class="library_tertiary_nav unstyled svelte-vi1gc0"><!> <!></aside>');function le(g,e){K(e,!0);const v={};W(v);const p=()=>X(Q,"$page",v),f=ne(e,"sidebar",3,!0),l=R(()=>e.tomes.find(r=>r.pathname===p().url.pathname)),b=R(()=>{var r,t;return(t=(r=h(l))==null?void 0:r.related)==null?void 0:t.map(c=>e.tomes_by_name.get(c))}),d=Ne();var _=ga(),B=s(_);D(B,()=>{var r;return(r=h(b))==null?void 0:r.length},r=>{var t=$(),c=y(t);{var x=(o,i=ae)=>{var w=ua(),P=s(w);S(()=>O(P,`related ${i()??""}`)),a(o,w)};ue(c,{get tomes(){return h(b)},children:x})}a(r,t)});var m=n(n(B,!0));D(m,()=>d.library_links.length>1,r=>{var t=$(),c=y(t);_a(c,{library_links:d,get sidebar(){return f()}}),a(r,t)}),a(g,_),F()}var pa=(g,e)=>e(),fa=k('<div class="nav_dialog_toggle svelte-185hm91"><button class="plain svelte-185hm91" type="button">menu</button></div>'),ba=k('<div class="secondary_nav_wrapper svelte-185hm91"><!></div>'),ha=k('<div class="mb_xl5"><!></div>'),ya=k('<div class="pane"><div class="p_xl pb_0"><!></div> <div class="px_lg pb_xl"><!> <!></div></div>'),ka=k('<div class="library svelte-185hm91"><!> <!> <main><div class="content svelte-185hm91"><!> <!> <section class="box svelte-185hm91"><!></section></div></main></div> <!>',1);function xa(g,e){K(e,!0);const v=new Map(e.tomes.map(u=>[u.name,u]));Be(v);const p=1e3,f=800;let l=ee(void 0),b=ee(!1);const d=u=>{Y(b,Te(u??!h(b)))};De(()=>{Y(b,!1)}),Re();var _=ka();we("hashchange",he,()=>Y(b,!1),!1);var B=y(_),m=s(B);ta(m,{get pkg(){return e.pkg},get breadcrumb_children(){return e.breadcrumb_children},children:(u,L)=>{var T=fa(),z=s(T);z.__click=[pa,d],a(u,T)},$$slots:{default:!0}});var r=n(n(m,!0));D(r,()=>!h(l)||h(l)>f,u=>{var L=ba(),T=s(L);ie(T,{get tomes(){return e.tomes}}),a(u,L)});var t=n(n(r,!0)),c=s(t),x=s(c);j(()=>e.children,x);var o=n(n(x,!0));D(o,()=>!h(l)||h(l)>p,u=>{var L=$(),T=y(L);le(T,{get tomes(){return e.tomes},tomes_by_name:v}),a(u,L)});var i=n(n(o,!0)),w=s(i);Se(w,{get pkg(){return e.pkg},children:(u,L)=>{var T=ha(),z=s(T);re(z,{children:(G,C)=>{var E=$(),H=y(E);D(H,()=>e.breadcrumb_children,V=>{var I=$(),U=y(I);j(()=>e.breadcrumb_children,U,()=>!1),a(V,I)},V=>{var I=Z(V);S(()=>O(I,e.pkg.package_json.icon??"🏠")),a(V,I)}),a(G,E)},$$slots:{default:!0}}),a(u,T)},$$slots:{default:!0}});var P=n(B,!0);P.nodeValue="  ";var N=n(P);D(N,()=>h(b)&&h(l)&&h(l)<=p,u=>{var L=$(),T=y(L);me(T,{onclose:()=>Y(b,!1),children:(z,G)=>{var C=ya(),E=s(C),H=s(E);re(H,{children:(pe,La)=>{var oe=$(),fe=y(oe);D(fe,()=>e.breadcrumb_children,J=>{var M=$(),be=y(M);j(()=>e.breadcrumb_children,be,()=>!1),a(J,M)},J=>{var M=Z(J);S(()=>O(M,e.pkg.package_json.icon??"🏠")),a(J,M)}),a(pe,oe)},$$slots:{default:!0}});var V=n(n(E,!0)),I=s(V);ie(I,{get tomes(){return e.tomes},sidebar:!1});var U=n(n(I,!0));le(U,{get tomes(){return e.tomes},tomes_by_name:v,sidebar:!1}),a(z,C)},$$slots:{default:!0}}),a(u,L)}),aa("innerWidth",u=>Y(l,u)),a(g,_),F()}de(["click"]);const ge=[{name:"introduction",slug:"introduction",pathname:"",category:"guide",component:Ce,related:[]},{name:"Themed",slug:"Themed",pathname:"",category:"components",component:Ie,related:[]},{name:"Teleport",slug:"Teleport",pathname:"",category:"components",component:He,related:["Dialog"]},{name:"Redirect",slug:"Redirect",pathname:"",category:"components",component:Xe,related:["Breadcrumb"]},{name:"Pending_Button",slug:"Pending_Button",pathname:"",category:"components",component:Ve,related:["Pending_Animation"]},{name:"Pending_Animation",slug:"Pending_Animation",pathname:"",category:"components",component:Oe,related:["Pending_Button"]},{name:"Package_Summary",slug:"Package_Summary",pathname:"",category:"components",component:Ye,related:["Package_Detail"]},{name:"Package_Detail",slug:"Package_Detail",pathname:"",category:"components",component:qe,related:["Package_Summary"]},{name:"Hue_Input",slug:"Hue_Input",pathname:"",category:"components",component:Ge,related:[]},{name:"Dialog",slug:"Dialog",pathname:"",category:"components",component:Fe,related:["Teleport"]},{name:"Details",slug:"Details",pathname:"",category:"components",component:Ke,related:[]},{name:"Contextmenu",slug:"Contextmenu",pathname:"",category:"components",component:We,related:[]},{name:"Card",slug:"Card",pathname:"",category:"components",component:Qe,related:["Alert"]},{name:"Breadcrumb",slug:"Breadcrumb",pathname:"",category:"components",component:Je,related:["Redirect"]},{name:"Alert",slug:"Alert",pathname:"",category:"components",component:Me,related:["Card"]}];for(const g of ge)Ee(g);const $a=Symbol("selected_variable"),wa=(g=Ue(null))=>$e($a,g);var Pa=k('<div class="icon row"><!> <span class="ml_sm">fuz</span></div>'),Ta=k('<div class="pane"><div class="panel p_lg box"><!> <aside>⚠️ This is unfinished and will change.</aside> <button>ok</button></div></div>'),Aa=k("<!> <!>",1);function mr(g,e){K(e,!0);const v={};W(v);const p=()=>X(f,"$selected_variable",v),f=wa(),l=Ze();var b=Aa(),d=y(b);{var _=(m,r=ae)=>{var t=$(),c=y(t);D(c,r,x=>{var o=Pa(),i=s(o);se(i,{size:"32px"}),a(x,o)},x=>{var o=$(),i=y(o);se(i,{size:"32px"}),a(x,o)}),a(m,t)};xa(d,{tomes:ge,pkg:l,breadcrumb_children:_,children:(m,r)=>{var t=$(),c=y(t);j(()=>e.children,c),a(m,t)},$$slots:{default:!0}})}var B=n(n(d,!0));D(B,p,m=>{var r=$(),t=y(r);{var c=(x,o=ae)=>{var i=Ta(),w=s(i),P=s(w);je(P,{get variable(){return p()}});var N=n(n(P,!0)),u=n(n(N,!0));u.__click=o(),a(x,i)};me(t,{onclose:()=>Pe(f,null),children:c})}a(m,r)}),a(g,b),F()}de(["click"]);export{mr as component};
