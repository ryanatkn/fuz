import{b as g,a as n,f as l,t as F,c as z,s as b,m as O}from"./disclose-version.E6IJI96N.js";import{p as P,a as Q,g as t,d as a,t as A}from"./runtime.BaU8wwyi.js";import{s as R}from"./render.BOq403Mo.js";import{i as w}from"./if.Cxoc_153.js";import{d as S,s as C}from"./attributes.DNk-zn62.js";import{e as T}from"./svelte-element.CODmfcJ4.js";import{t as c}from"./class.BmmsmvgL.js";import{p as U}from"./props.kV--7V3-.js";import{u as V,s as W}from"./store.C8FhO-WN.js";import{p as X}from"./stores.D_iyJwjE.js";var Y=F('<div class="icon svelte-zwtgha"><!></div>'),Z=F('<!> <div class="content svelte-zwtgha"><!></div> <!>',1);function ft(j,e){P(e,!0);const k={};V(k);const q=()=>W(X,"$page",k);var x=r=>{var d=Y(),_=z(d);w(_,()=>typeof t(p)=="string",i=>{var o=O(i);A(()=>R(o,t(p))),n(i,o)},i=>{var o=g(),m=l(o);C(()=>t(p),m),n(i,o)}),n(r,d)};const s=U(e,"align",3,"left"),f=a(()=>!!e.href),B=a(()=>t(f)&&q().url.pathname===e.href),D=a(()=>e.tag||(t(f)?"a":"div")),E=a(()=>t(f)?{href:e.href}:void 0),G=a(()=>s()==="left"),H=a(()=>s()==="right"),I=a(()=>s()==="above"),J=a(()=>s()==="below"),K=a(()=>t(f)?"🔗":"🪧"),p=a(()=>e.icon??t(K));var y=g(),L=l(y);T(L,()=>t(D),!1,(r,d)=>{let _;A(()=>{_=S(r,_,{class:"card",...e.attrs,...t(E)},"svelte-zwtgha"),c(r,"link",t(f)),c(r,"selected",t(B)),c(r,"left",t(G)),c(r,"right",t(H)),c(r,"above",t(I)),c(r,"below",t(J))});var i=Z(),o=l(i);w(o,()=>s()==="left"||s()==="above",h=>{var v=g(),u=l(v);x(u),n(h,v)});var m=b(b(o,!0)),M=z(m);C(()=>e.children,M);var N=b(b(m,!0));w(N,()=>s()==="right"||s()==="below",h=>{var v=g(),u=l(v);x(u),n(h,v)}),n(d,i)}),n(j,y),Q()}export{ft as C};