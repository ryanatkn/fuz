import{c as l,s as K,a as r,t as m,b as g,f as h,r as _}from"./disclose-version.BDhqTD1c.js";import{p as L,t as q,a as M,g as a,d as c}from"./runtime.BIep0U5Y.js";import{s as N}from"./render.DSkk2BLw.js";import{i as b}from"./if.CTyMIEjO.js";import{e as O,i as P}from"./each.DfDYFt8G.js";import{s as w,c as z}from"./attributes.DrO0J316.js";import{t as A}from"./class.CFbCgkTh.js";import{s as Q,a as R,p as S}from"./stores.Be-e-XOj.js";import{p as T}from"./path.QeaNnfvq.js";import{b as U}from"./entry.Ch3n056w.js";var V=m("•",1),W=m('<a class="svelte-c9k2g"> </a>'),X=m("/",1),Y=m('<span class="separator svelte-c9k2g"><!></span>'),Z=m('<div class="breadcrumb svelte-c9k2g"><a class="svelte-c9k2g"><!></a><!></div>');function ia(C,e){L(e,!0);const D=Q(),E=()=>R(S,"$page",D),u=c(()=>e.path??E().url.pathname),k=c(()=>e.selected_path===null?null:e.selected_path??a(u)),x=c(()=>e.base_path??U),F=c(()=>T(a(u))),B=c(()=>a(x)||"/");var p=Z(),o=l(p),G=l(o);b(G,()=>e.children,n=>{var t=g(),y=h(t);w(y,()=>e.children),r(n,t)},n=>{var t=V();r(n,t)}),_(o);var H=K(o);O(H,17,()=>a(F),P,(n,t,y)=>{var j=g(),I=h(j);b(I,()=>a(t).type==="piece",v=>{var s=W(),d=l(s);_(s),q(()=>{z(s,"href",a(x)+a(t).path),A(s,"selected",a(t).path===a(k)),N(d,a(t).name)}),r(v,s)},v=>{var s=Y(),d=l(s);b(d,()=>e.separator,f=>{var i=g(),J=h(i);w(J,()=>e.separator),r(f,i)},f=>{var i=X();r(f,i)}),_(s),r(v,s)}),r(n,j)}),_(p),q(()=>{z(o,"href",a(B)),A(o,"selected",a(B)===a(k))}),r(C,p),M()}export{ia as B};
