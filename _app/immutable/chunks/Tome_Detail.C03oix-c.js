import{b as H,a as r,f as g,t as y,s as c,D as E,c as b}from"./disclose-version.BHqvyKx-.js";import{p as j,a as C,t as w,g as a,G as F,d as v}from"./runtime.VNSPx__r.js";import{i as G}from"./if.Dmk6Jy1T.js";import{d as I,b as J,s as A}from"./attributes.B0eU8BeJ.js";import{s as K}from"./render.BZs1ZF8H.js";import{e as M}from"./svelte-element.BHteci0S.js";import{s as N,a as O,p as P}from"./stores.Cd7CSNbW.js";import{o as Q}from"./index-client.03nsUFad.js";import{g as R,H as S,t as U}from"./Hashlink.DvOeKjoT.js";var V=y("<a><!></a>"),X=y("<!> <!>",1);let Y=0;function Z(p,e){j(e,!0);const n=N(),l=()=>O(P,"$page",n),_=(t,i=F)=>{var m=E(t);w(()=>K(m,i())),r(t,m)},d="tome_title_"+Y++,s=t=>t.toLowerCase().replaceAll(/\s/gu,"-").replaceAll(/\W/gu,""),o=R(),f=s(e.tome.name);o.add(d,e.tome.name,f),Q(()=>{o.remove(d)});const L=v(()=>U(e.tome.slug,l().url.pathname)),k=v(()=>{let{path:t,path_is_selected:i}=a(L);return[t,i]}),W=v(()=>a(k)[0]),x=v(()=>a(k)[1]);var T=H(),q=g(T);M(q,()=>a(x)?"h1":"h2",!1,(t,i)=>{I(t,null,{class:"tome_title"},"svelte-187f62t");var m=X(),D=g(m);G(D,()=>a(x),u=>{_(u,()=>e.tome.name)},u=>{var h=V(),B=b(h);_(B,()=>e.tome.name),w(()=>J(h,"href",a(W))),r(u,h)});var z=c(c(D,!0));S(z,{slug:f}),r(i,m)}),r(p,T),C()}var $=y('<div class="tome_detail width_md svelte-1f6fepp"><header class="svelte-1f6fepp"><!></header> <!></div>');function le(p,e){j(e,!0);var n=$(),l=b(n),_=b(l);G(_,()=>e.header,s=>{var o=H(),f=g(o);A(f,()=>e.header),r(s,o)},s=>{Z(s,{get tome(){return e.tome}})});var d=c(c(l,!0));A(d,()=>e.children),r(p,n),C()}export{le as T};
