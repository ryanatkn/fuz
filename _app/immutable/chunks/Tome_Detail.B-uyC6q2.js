import{b as j,a as r,f as g,r as b,t as x,n as E,s as h,F as G,c as y}from"./disclose-version.D581KuaV.js";import{p as C,a as F,g as a,d as v,t as D,Q as I}from"./runtime.CkCVmNqE.js";import{i as L}from"./if.Chl1nh2x.js";import{d as J,c as K,s as H}from"./attributes.CMkiqDYj.js";import{s as M}from"./render.D5h2tPwo.js";import{e as N}from"./svelte-element.D0FJwh1R.js";import{s as O,a as P,p as R}from"./stores.phtmHB-z.js";import{o as S}from"./index-client.BFqbYNwY.js";import{g as U,H as V,t as X}from"./Hashlink.CaJZYXoV.js";var Y=x("<a><!></a>"),Z=x("<!> <!>",1);let $=0;function ee(p,e){C(e,!0);const s=O(),o=()=>P(R,"$page",s),_=(t,m=I)=>{E();var l=G();D(()=>M(l,m())),r(t,l)},d="tome_title_"+$++,n=t=>t.toLowerCase().replaceAll(/\s/gu,"-").replaceAll(/\W/gu,""),i=U(),c=n(e.tome.name);i.add(d,e.tome.name,c),S(()=>{i.remove(d)});const Q=v(()=>X(e.tome.slug,o().url.pathname)),k=v(()=>{let{path:t,path_is_selected:m}=a(Q);return[t,m]}),W=v(()=>a(k)[0]),T=v(()=>a(k)[1]);var w=j(),q=g(w);N(q,()=>a(T)?"h1":"h2",!1,(t,m)=>{J(t,null,{class:"tome_title"},"svelte-187f62t");var l=Z(),A=g(l);L(A,()=>a(T),u=>{_(u,()=>e.tome.name)},u=>{var f=Y(),B=y(f);_(B,()=>e.tome.name),b(f),D(()=>K(f,"href",a(W))),r(u,f)});var z=h(h(A,!0));V(z,{slug:c}),r(m,l)}),r(p,w),F()}var te=x('<div class="tome_detail width_md svelte-1f6fepp"><header class="svelte-1f6fepp"><!></header> <!></div>');function de(p,e){C(e,!0);var s=te(),o=y(s),_=y(o);L(_,()=>e.header,n=>{var i=j(),c=g(i);H(c,()=>e.header),r(n,i)},n=>{ee(n,{get tome(){return e.tome}})}),b(o);var d=h(h(o,!0));H(d,()=>e.children),b(s),r(p,s),F()}export{de as T};
