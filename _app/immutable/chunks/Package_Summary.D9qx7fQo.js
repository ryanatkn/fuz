import{a as o,b as s,t as f,c as u,f as g,s as _,m as R}from"./disclose-version.CSpVFLMe.js";import{p as T,t as c,g as n,a as U,d as x}from"./runtime.Dht6Pzrj.js";import{s as k}from"./render.ldLefYc7.js";import{i as l}from"./if.BY8i3A5v.js";import{s as h,b as p}from"./attributes.ulKL4dWL.js";import{t as H}from"./class.Ct8XOsNy.js";import{s as I}from"./style.iv2mhl8q.js";import{u as W,s as X}from"./store.BhTnKRts.js";import{p as Y}from"./stores.BxjxAw3p.js";import{f as Z}from"./url.Dt0VZVCT.js";var $=f('<div class="repo_name svelte-1widkfd"> </div>'),ee=f("<img>"),ae=f("<blockquote> </blockquote>"),re=f('<p class="text_align_center"> <!></p>'),te=f('<div class="homepage_url svelte-1widkfd"><a class="chip svelte-1widkfd"> </a></div>'),oe=f('<a class="chip svelte-1widkfd">repo</a>'),_e=f('<a class="chip svelte-1widkfd" title="version"> </a>'),ve=f('<a class="chip svelte-1widkfd">npm</a>'),ie=f('<blockquote class="npm_url svelte-1widkfd"> </blockquote>'),ne=f('<div class="package_summary svelte-1widkfd"><header class="box svelte-1widkfd"><!> <!></header> <!> <!> <!> <!> <div class="links svelte-1widkfd"><!> <!> <!></div> <!></div>');function pe(J,a){T(a,!0);const w={};W(w);const K=()=>X(Y,"$page",w),L=x(()=>a.pkg),M=x(()=>{let{package_json:r}=n(L);return[r]}),m=x(()=>n(M)[0]),q=x(()=>a.pkg.homepage_url+"/favicon.png");var y=ne(),z=u(y),j=u(z);l(j,()=>a.repo_name,r=>{var e=s(),i=g(e);h(()=>a.repo_name,i,()=>a.pkg.repo_name),o(r,e)},r=>{var e=$(),i=u(e);c(()=>k(i,a.pkg.repo_name)),o(r,e)});var P=_(j,!0);P.nodeValue="  ";var N=_(P);l(N,()=>a.logo,r=>{var e=s(),i=g(e);h(()=>a.logo,i,()=>n(q)),o(r,e)},r=>{var e=ee();c(()=>{p(e,"src",n(q)),p(e,"alt",`logo for ${a.pkg.repo_name??""}`),H(e,"pixelated",a.pixelated_logo),I(e,"width","var(--size, var(--icon_size_xl2))"),I(e,"height","var(--size, var(--icon_size_xl2))")}),o(r,e)});var D=_(_(z,!0));l(D,()=>n(m).motto,r=>{var e=s(),i=g(e);l(i,()=>a.motto,d=>{var t=s(),v=g(t);h(()=>a.motto,v,()=>n(m).motto,()=>n(m).icon),o(d,t)},d=>{var t=ae(),v=u(t);c(()=>k(v,`${n(m).motto??""}
				${n(m).icon??""}`)),o(d,t)}),o(r,e)});var S=_(_(D,!0));l(S,()=>n(m).description,r=>{var e=s(),i=g(e);l(i,()=>a.description,d=>{var t=s(),v=g(t);h(()=>a.description,v,()=>n(m).description,()=>n(m).icon),o(d,t)},d=>{var t=re(),v=u(t),b=_(v);l(b,()=>!n(m).motto,F=>{var G=R(F);c(()=>k(G,n(m).icon)),o(F,G)}),c(()=>k(v,`${n(m).description??""} `)),o(d,t)}),o(r,e)});var V=_(_(S,!0));l(V,()=>a.children,r=>{var e=s(),i=g(e);h(()=>a.children,i),o(r,e)});var A=_(_(V,!0));l(A,()=>a.pkg.homepage_url,r=>{var e=s(),i=g(e);l(i,()=>a.homepage_url,d=>{var t=s(),v=g(t);h(()=>a.homepage_url,v,()=>a.pkg.homepage_url),o(d,t)},d=>{var t=te(),v=u(t),b=u(v);c(()=>k(b,Z(a.pkg.homepage_url))),c(()=>{p(v,"href",a.pkg.homepage_url),H(v,"selected",a.pkg.homepage_url===K().url.href)}),o(d,t)}),o(r,e)});var B=_(_(A,!0)),C=u(B);l(C,()=>a.pkg.repo_url,r=>{var e=oe();c(()=>p(e,"href",a.pkg.repo_url)),o(r,e)});var E=_(_(C,!0));l(E,()=>a.pkg.changelog_url,r=>{var e=_e(),i=u(e);c(()=>{p(e,"href",a.pkg.changelog_url),k(i,n(m).version)}),o(r,e)});var O=_(_(E,!0));l(O,()=>a.pkg.npm_url,r=>{var e=ve();c(()=>p(e,"href",a.pkg.npm_url)),o(r,e)});var Q=_(_(B,!0));l(Q,()=>a.pkg.npm_url,r=>{var e=s(),i=g(e);l(i,()=>a.npm_url,d=>{var t=s(),v=g(t);h(()=>a.npm_url,v,()=>a.pkg.npm_url),o(d,t)},d=>{var t=ie(),v=u(t);c(()=>k(v,`npm i -D ${n(m).name??""}`)),o(d,t)}),o(r,e)}),o(J,y),U()}export{pe as P};