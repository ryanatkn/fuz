import{a as r,t as v,b as y,c as h,r as d,f as B,s as K}from"./disclose-version.D581KuaV.js";import{p as L,t as A,a as M,g as s,d as _,P as g}from"./runtime.CkCVmNqE.js";import{s as N}from"./render.D5h2tPwo.js";import{i as k}from"./if.Chl1nh2x.js";import{e as O,i as Q}from"./each.C13piV_6.js";import{s as C,c as D}from"./attributes.CMkiqDYj.js";import{t as E}from"./class.Ciq-vMZR.js";import{s as R,a as S,p as T}from"./stores.phtmHB-z.js";import{b as U}from"./entry.EG8rvHcM.js";const V=p=>p.split("/").filter(a=>a&&a!=="."&&a!==".."),W=p=>{const a=[],n=V(p);n.length&&a.push({type:"separator",path:"/"});let i="";for(let o=0;o<n.length;o++){const l=n[o];i+="/"+l,a.push({type:"piece",name:l,path:i}),o!==n.length-1&&a.push({type:"separator",path:i})}return a};var X=v("•",1),Y=v('<a class="svelte-44vg7j"> </a>'),Z=v("/",1),$=v('<span class="separator svelte-44vg7j"><!></span>'),aa=v('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function ca(p,a){L(a,!0);const n=R(),i=()=>S(T,"$page",n),o=_(()=>a.path??i().url.pathname),l=_(()=>a.selected_path===null?null:a.selected_path??s(o)),w=_(()=>a.base_path??U),F=_(()=>W(s(o))),P=_(()=>s(w)||"/");var u=aa(),c=h(u),G=h(c);k(G,()=>a.children,m=>{var e=y(),q=B(e);C(q,()=>a.children),r(m,e)},m=>{var e=X();r(m,e)}),d(c);var H=K(c);O(H,65,()=>s(F),Q,(m,e,q)=>{var z=y(),I=B(z);k(I,()=>g(e).type==="piece",b=>{var t=Y(),x=h(t);d(t),A(()=>{D(t,"href",s(w)+g(e).path),E(t,"selected",g(e).path===s(l)),N(x,g(e).name)}),r(b,t)},b=>{var t=$(),x=h(t);k(x,()=>a.separator,j=>{var f=y(),J=B(f);C(J,()=>a.separator),r(j,f)},j=>{var f=Z();r(j,f)}),d(t),r(b,t)}),r(m,z)}),d(u),A(()=>{D(c,"href",s(P)),E(c,"selected",s(P)===s(l))}),r(p,u),M()}export{ca as B};
