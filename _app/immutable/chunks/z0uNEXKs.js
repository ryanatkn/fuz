import{t as k,a as p,j as J,c as K}from"./CbbyqTNh.js";import{p as w,k as x,N as O,f as C,g as i,d as b,s as I,$ as Q,l as y,t as L,a as P,a0 as W}from"./C9aPwLmV.js";import{i as S,s as U,a as j}from"./DSlEI_lp.js";import{a as X,b as Z,s as D}from"./DGBAUQNC.js";import{H as $,a as E,i as N}from"./BTGG-Xgr.js";import{p as ee}from"./2t0GVDdd.js";import{s as B}from"./QeaNnfvq.js";import{p as F}from"./XSOcX6Z7.js";import{b as ae}from"./CWhcQWrQ.js";import{s as te}from"./Bb4_Y-AM.js";import{e as se}from"./D3Y0gN4q.js";import{o as oe}from"./CM252P3v.js";import{a as G}from"./CAx5GMMd.js";import{l as M,t as re,D as ne}from"./o3_rb7ZV.js";const R=(f,a=Q)=>{W();var m=J();L(()=>te(m,a())),p(f,m)};let ie=0;var me=k("<a><!></a>"),le=k("<!> <!>",1),_e=k("<header><!></header>");function ce(f,a){w(a,!0);const[m,A]=U(),T=()=>j(F,"$page",m),l=G.get(),o="tome_header_"+ie++,r=M.get(),_=B(l.name);r.add(o,l.name,_),oe(()=>{r.remove(o)});const n=b(()=>re(_,T().url.pathname)),c=b(()=>i(n).path),u=b(()=>i(n).path_is_selected);var h=_e(),H=x(h);se(H,()=>i(u)?"h1":"h2",!1,(v,e)=>{X(v,null,{class:"tome_header"},"svelte-d05s6w",v.namespaceURI===O,v.nodeName.includes("-"));var s=le(),t=C(s);{var V=d=>{R(d,()=>l.name)},Y=d=>{var g=me(),z=x(g);R(z,()=>l.name),y(g),L(()=>Z(g,"href",i(c))),p(d,g)};S(t,d=>{i(u)?d(V):d(Y,!1)})}var q=I(t,2);$(q,{slug:_}),p(e,s)}),y(h),p(f,h),P(),A()}var de=k('<section class="tome_content width_md mb_xl9"><header class="mb_xl3"><!></header> <!></section>');function Ee(f,a){w(a,!0);const[m,A]=U(),T=()=>j(F,"$page",m),l=ee(a,"library_path",3,ne),o=M.get();G.set(a.tome);const r=B(a.tome.name),_=b(()=>T().url.pathname===ae+l());var n=de(),c=x(n),u=x(c);{var h=e=>{var s=K(),t=C(s);D(t,()=>a.header),p(e,s)},H=e=>{ce(e,{})};S(u,e=>{a.header?e(h):e(H,!1)})}y(c),E(c,(e,s)=>{var t;return(t=N)==null?void 0:t(e,s)},()=>i(_)?null:({intersecting:e})=>{e?o.slugs_onscreen.add(r):o.slugs_onscreen.delete(r)});var v=I(c,2);D(v,()=>a.children),y(n),E(n,(e,s)=>{var t;return(t=N)==null?void 0:t(e,s)},()=>i(_)?({intersecting:e})=>{e?o.slugs_onscreen.add(r):o.slugs_onscreen.delete(r)}:null),p(f,n),P(),A()}export{Ee as T};
