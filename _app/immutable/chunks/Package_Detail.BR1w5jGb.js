import{a as _,t as m,b as y,c as i,s as t,q as ze,f as u}from"./disclose-version.8cXmPj91.js";import{p as De,a as Pe,g as s,t as d,d as p,a4 as f}from"./runtime.tEJefHBO.js";import{s as h}from"./render.C1K3rtSi.js";import{i as g}from"./if.CTp5gYEz.js";import{e as ae,i as Oe}from"./each.D9qf_eYe.js";import{s as w,b as k}from"./attributes.giDdLxsX.js";import{t as q,s as Ee}from"./class.C2cUJUDZ.js";import{s as z}from"./style.iv2mhl8q.js";import{u as Ne,s as Se}from"./store.D_tGndAz.js";import{p as Ce}from"./stores.BAH5ocey.js";import{e as N,a as te,s as re}from"./string.ZJuK4sHN.js";import{f as Ie}from"./url.Dt0VZVCT.js";import{D as Je}from"./Details.DAFl6QE4.js";var Le=m('<div class="repo_name svelte-19y7aej"> <!></div>'),Me=m('<div class="description svelte-19y7aej"> </div>'),Ae=m('<div class="motto svelte-19y7aej"> </div>'),Be=m('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),Fe=m('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),Ge=m('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),He=m('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),Ke=m('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),Qe=m('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),Re=m('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),Te=m('<div class="logo svelte-19y7aej"><img></div>'),Ue=m("<li> </li>"),Ve=m('<ul class="declarations unstyled svelte-19y7aej"></ul>'),Xe=m('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),Ye=m('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),Ze=m("raw data for <code>pkg: Package_Meta</code>",1),$e=m("<pre><code> </code></pre>"),ea=m('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function ua(se,r){De(r,!0);const S={};Ne(S);const oe=()=>Se(Ce,"$page",S),ve=p(()=>r.pkg),C=p(()=>{let{package_json:o,src_json:e}=s(ve);return[o,e]}),c=p(()=>s(C)[0]),le=p(()=>s(C)[1]),ne=p(()=>s(le)),ie=p(()=>{let{modules:o}=s(ne);return[o]}),_e=p(()=>s(ie)[0]),I=p(()=>s(c).repository?te(re(re(typeof s(c).repository=="string"?s(c).repository:s(c).repository.url,".git"),"/"),"git+"):null),J=p(()=>s(c).license&&s(I)?s(I)+"/blob/main/LICENSE":null),ce=(o,e)=>o+"/blob/main/src/lib/"+(e.endsWith(".js")?e.slice(0,-3)+".ts":e),de=p(()=>s(c).exports&&Object.keys(s(c).exports)),L=p(()=>s(c).exports?Object.keys(s(c).exports).map(o=>{const e=te(o,"./");return e==="."?"index.js":e}):null),P=p(()=>r.pkg.homepage_url?N(r.pkg.homepage_url,"/")+(r.pkg.package_json.logo??"favicon.png"):void 0),M=r.pkg.package_json.logo_alt??`logo for ${r.pkg.repo_name}`;var A=ea(),B=i(A),F=i(B),ge=i(F),G=i(ge),me=i(G);g(me,()=>r.repo_name,o=>{var e=y(),v=u(e);w(v,()=>r.repo_name,()=>r.pkg.repo_name),_(o,e)},o=>{var e=Le(),v=i(e),l=t(v);g(l,()=>s(c).glyph,a=>{var n=ze(a);d(()=>h(n,` ${s(c).glyph??""}`)),_(a,n)}),d(()=>h(v,r.pkg.repo_name)),_(o,e)});var H=t(t(G,!0));g(H,()=>r.children,o=>{var e=y(),v=u(e);w(v,()=>r.children,()=>r.pkg),_(o,e)});var K=t(t(H,!0));g(K,()=>s(c).description,o=>{var e=y(),v=u(e);g(v,()=>r.description,l=>{var a=y(),n=u(a);w(n,()=>r.description,()=>s(c).description),_(l,a)},l=>{var a=Me(),n=i(a);d(()=>h(n,s(c).description)),_(l,a)}),_(o,e)});var Q=t(t(K,!0));g(Q,()=>s(c).motto,o=>{var e=y(),v=u(e);g(v,()=>r.motto,l=>{var a=y(),n=u(a);w(n,()=>r.motto,()=>s(c).motto),_(l,a)},l=>{var a=Ae(),n=i(a);d(()=>h(n,s(c).motto)),_(l,a)}),_(o,e)});var R=t(t(Q,!0));g(R,()=>r.pkg.npm_url,o=>{var e=y(),v=u(e);g(v,()=>r.npm_url,l=>{var a=y(),n=u(a);w(n,()=>r.npm_url,()=>r.pkg.npm_url),_(l,a)},l=>{var a=Be(),n=i(a);d(()=>h(n,`npm i -D ${s(c).name??""}`)),_(l,a)}),_(o,e)});var ue=t(t(R,!0)),T=i(ue);g(T,()=>r.pkg.homepage_url,o=>{var e=y(),v=u(e);g(v,()=>r.homepage_url,l=>{var a=y(),n=u(a);w(n,()=>r.homepage_url,()=>r.pkg.homepage_url),_(l,a)},l=>{var a=Fe(),n=u(a),b=t(t(n,!0)),W=i(b),x=i(W);k(x,"alt",M);var D=t(x,!0);d(()=>h(D,` ${Ie(r.pkg.homepage_url)??""}`)),d(()=>{k(W,"href",r.pkg.homepage_url),q(W,"selected",r.pkg.homepage_url===oe().url.href),k(x,"src",s(P)),z(x,"width","16px"),z(x,"height","16px"),z(x,"margin-right","var(--space_xs)")}),_(l,a)}),_(o,e)});var U=t(t(T,!0));g(U,()=>r.pkg.repo_url,o=>{var e=Ge(),v=u(e),l=t(t(v,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",r.pkg.repo_url),h(n,`${r.pkg.owner_name??""}/${r.pkg.repo_name??""}`)}),_(o,e)});var V=t(t(U,!0));g(V,()=>r.pkg.npm_url,o=>{var e=He(),v=u(e),l=t(t(v,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",r.pkg.npm_url),h(n,s(c).name)}),_(o,e)});var X=t(t(V,!0));g(X,()=>r.pkg.changelog_url,o=>{var e=Ke(),v=u(e),l=t(t(v,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",r.pkg.changelog_url),h(n,s(c).version)}),_(o,e)});var Y=t(t(X,!0));g(Y,()=>s(J),o=>{var e=Qe(),v=u(e),l=t(t(v,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",s(J)),h(n,s(c).license)}),_(o,e)});var pe=t(t(Y,!0));g(pe,()=>r.pkg.homepage_url,o=>{var e=Re(),v=u(e),l=t(t(v,!0)),a=i(l);d(()=>k(a,"href",`${N(r.pkg.homepage_url,"/")??""}.well-known/package.json`));var n=t(t(a,!0));d(()=>k(n,"href",`${N(r.pkg.homepage_url,"/")??""}.well-known/src.json`)),_(o,e)});var he=t(t(F,!0));g(he,()=>s(P),o=>{var e=Te(),v=i(e);k(v,"alt",M),d(()=>{k(v,"src",s(P)),z(v,"width","var(--size, var(--icon_size_xl2))"),z(v,"height","var(--size, var(--icon_size_xl2))")}),_(o,e)});var Z=t(t(B,!0));g(Z,()=>s(L)&&r.pkg.repo_url,o=>{var e=Ye(),v=i(e);ae(v,79,()=>s(L),(l,a)=>f(l),(l,a,n)=>{var b=Xe();const W=p(()=>ce(r.pkg.repo_url,f(a))),x=p(()=>{var j;return(j=s(de))==null?void 0:j[f(n)]}),D=p(()=>{var j;return s(x)&&((j=s(_e))==null?void 0:j[s(x)])});d(()=>q(b,"ts",f(a).endsWith(".js"))),d(()=>q(b,"svelte",f(a).endsWith(".svelte"))),d(()=>q(b,"css",f(a).endsWith(".css"))),d(()=>q(b,"json",f(a).endsWith(".json")));var je=i(b),O=i(je),ye=i(O),xe=t(t(O,!0));g(xe,()=>{var j;return(j=s(D))==null?void 0:j.declarations.length},j=>{var $=Ve();ae($,73,()=>s(D).declarations,Oe,(be,ee,aa)=>{let we=()=>f(f(ee)).name,We=()=>f(f(ee)).kind;var E=Ue(),qe=i(E);d(()=>{Ee(E,`declaration chip ${We()??""}_declaration svelte-19y7aej`),h(qe,we())}),_(be,E)}),_(j,$)}),d(()=>{k(O,"href",s(W)),h(ye,f(a))}),_(l,b)}),_(o,e)});var fe=t(t(Z,!0)),ke=i(fe);Je(ke,{summary:e=>{var v=Ze();_(e,v)},children:(e,v)=>{var l=$e(),a=i(l),n=i(a);d(()=>h(n,JSON.stringify(r.pkg,null,"	"))),_(e,l)},$$slots:{default:!0}}),_(se,A),Pe()}export{ua as P};
