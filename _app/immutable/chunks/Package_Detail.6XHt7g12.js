import{a as _,t as m,b as y,c as i,s as t,m as Pe,f as u}from"./disclose-version.E6IJI96N.js";import{p as qe,a as Oe,g as s,t as d,d as p,a5 as f}from"./runtime.BaU8wwyi.js";import{s as h}from"./render.BOq403Mo.js";import{i as g}from"./if.Cxoc_153.js";import{e as ae,i as Ee}from"./each.BFgiVuVq.js";import{s as w,b as k}from"./attributes.DNk-zn62.js";import{t as z,s as Ne}from"./class.BmmsmvgL.js";import{s as D}from"./style.iv2mhl8q.js";import{u as Se,s as Ce}from"./store.C8FhO-WN.js";import{p as Ie}from"./stores.D_iyJwjE.js";import{e as N,a as te,s as re}from"./string.ZJuK4sHN.js";import{f as Je}from"./url.Dt0VZVCT.js";import{D as Le}from"./Details.Xj3i4AfX.js";var Me=m('<div class="repo_name svelte-19y7aej"> <!></div>'),Ae=m('<div class="description svelte-19y7aej"> </div>'),Be=m('<div class="motto svelte-19y7aej"> </div>'),Fe=m('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),Ge=m('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),He=m('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),Ke=m('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),Qe=m('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),Re=m('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),Te=m('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),Ue=m('<div class="logo svelte-19y7aej"><img></div>'),Ve=m("<li> </li>"),Xe=m('<ul class="declarations unstyled svelte-19y7aej"></ul>'),Ye=m('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),Ze=m('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),$e=m("raw data for <code>pkg: Package_Meta</code>",1),ea=m("<pre><code> </code></pre>"),aa=m('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function pa(se,r){qe(r,!0);const S={};Se(S);const ve=()=>Ce(Ie,"$page",S),oe=p(()=>r.pkg),C=p(()=>{let{package_json:v,src_json:e}=s(oe);return[v,e]}),c=p(()=>s(C)[0]),le=p(()=>s(C)[1]),ne=p(()=>s(le)),ie=p(()=>{let{modules:v}=s(ne);return[v]}),_e=p(()=>s(ie)[0]),I=p(()=>s(c).repository?te(re(re(typeof s(c).repository=="string"?s(c).repository:s(c).repository.url,".git"),"/"),"git+"):null),J=p(()=>s(c).license&&s(I)?s(I)+"/blob/main/LICENSE":null),ce=(v,e)=>v+"/blob/main/src/lib/"+(e.endsWith(".js")?e.slice(0,-3)+".ts":e),de=p(()=>s(c).exports&&Object.keys(s(c).exports)),L=p(()=>s(c).exports?Object.keys(s(c).exports).map(v=>{const e=te(v,"./");return e==="."?"index.js":e}):null),q=p(()=>r.pkg.homepage_url?N(r.pkg.homepage_url,"/")+(r.pkg.package_json.logo??"favicon.png"):void 0),M=r.pkg.package_json.logo_alt??`logo for ${r.pkg.repo_name}`;var A=aa(),B=i(A),F=i(B),ge=i(F),G=i(ge),me=i(G);g(me,()=>r.repo_name,v=>{var e=y(),o=u(e);w(()=>r.repo_name,o,()=>r.pkg.repo_name),_(v,e)},v=>{var e=Me(),o=i(e),l=t(o);g(l,()=>s(c).glyph,a=>{var n=Pe(a);d(()=>h(n,` ${s(c).glyph??""}`)),_(a,n)}),d(()=>h(o,r.pkg.repo_name)),_(v,e)});var H=t(t(G,!0));g(H,()=>r.children,v=>{var e=y(),o=u(e);w(()=>r.children,o,()=>r.pkg),_(v,e)});var K=t(t(H,!0));g(K,()=>s(c).description,v=>{var e=y(),o=u(e);g(o,()=>r.description,l=>{var a=y(),n=u(a);w(()=>r.description,n,()=>s(c).description),_(l,a)},l=>{var a=Ae(),n=i(a);d(()=>h(n,s(c).description)),_(l,a)}),_(v,e)});var Q=t(t(K,!0));g(Q,()=>s(c).motto,v=>{var e=y(),o=u(e);g(o,()=>r.motto,l=>{var a=y(),n=u(a);w(()=>r.motto,n,()=>s(c).motto),_(l,a)},l=>{var a=Be(),n=i(a);d(()=>h(n,s(c).motto)),_(l,a)}),_(v,e)});var R=t(t(Q,!0));g(R,()=>r.pkg.npm_url,v=>{var e=y(),o=u(e);g(o,()=>r.npm_url,l=>{var a=y(),n=u(a);w(()=>r.npm_url,n,()=>r.pkg.npm_url),_(l,a)},l=>{var a=Fe(),n=i(a);d(()=>h(n,`npm i -D ${s(c).name??""}`)),_(l,a)}),_(v,e)});var ue=t(t(R,!0)),T=i(ue);g(T,()=>r.pkg.homepage_url,v=>{var e=y(),o=u(e);g(o,()=>r.homepage_url,l=>{var a=y(),n=u(a);w(()=>r.homepage_url,n,()=>r.pkg.homepage_url),_(l,a)},l=>{var a=Ge(),n=u(a),b=t(t(n,!0)),W=i(b),x=i(W);k(x,"alt",M);var P=t(x,!0);d(()=>h(P,` ${Je(r.pkg.homepage_url)??""}`)),d(()=>{k(W,"href",r.pkg.homepage_url),z(W,"selected",r.pkg.homepage_url===ve().url.href),k(x,"src",s(q)),D(x,"width","16px"),D(x,"height","16px"),D(x,"margin-right","var(--space_xs)")}),_(l,a)}),_(v,e)});var U=t(t(T,!0));g(U,()=>r.pkg.repo_url,v=>{var e=He(),o=u(e),l=t(t(o,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",r.pkg.repo_url),h(n,`${r.pkg.owner_name??""}/${r.pkg.repo_name??""}`)}),_(v,e)});var V=t(t(U,!0));g(V,()=>r.pkg.npm_url,v=>{var e=Ke(),o=u(e),l=t(t(o,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",r.pkg.npm_url),h(n,s(c).name)}),_(v,e)});var X=t(t(V,!0));g(X,()=>r.pkg.changelog_url,v=>{var e=Qe(),o=u(e),l=t(t(o,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",r.pkg.changelog_url),h(n,s(c).version)}),_(v,e)});var Y=t(t(X,!0));g(Y,()=>s(J),v=>{var e=Re(),o=u(e),l=t(t(o,!0)),a=i(l),n=i(a);d(()=>{k(a,"href",s(J)),h(n,s(c).license)}),_(v,e)});var pe=t(t(Y,!0));g(pe,()=>r.pkg.homepage_url,v=>{var e=Te(),o=u(e),l=t(t(o,!0)),a=i(l);d(()=>k(a,"href",`${N(r.pkg.homepage_url,"/")??""}.well-known/package.json`));var n=t(t(a,!0));d(()=>k(n,"href",`${N(r.pkg.homepage_url,"/")??""}.well-known/src.json`)),_(v,e)});var he=t(t(F,!0));g(he,()=>s(q),v=>{var e=Ue(),o=i(e);k(o,"alt",M),d(()=>{k(o,"src",s(q)),D(o,"width","var(--size, var(--icon_size_xl3))"),D(o,"height","var(--size, var(--icon_size_xl3))")}),_(v,e)});var Z=t(t(B,!0));g(Z,()=>s(L)&&r.pkg.repo_url,v=>{var e=Ze(),o=i(e);ae(o,79,()=>s(L),(l,a)=>f(l),(l,a,n)=>{var b=Ye();const W=p(()=>ce(r.pkg.repo_url,f(a))),x=p(()=>{var j;return(j=s(de))==null?void 0:j[f(n)]}),P=p(()=>{var j;return s(x)&&((j=s(_e))==null?void 0:j[s(x)])});d(()=>z(b,"ts",f(a).endsWith(".js"))),d(()=>z(b,"svelte",f(a).endsWith(".svelte"))),d(()=>z(b,"css",f(a).endsWith(".css"))),d(()=>z(b,"json",f(a).endsWith(".json")));var ye=i(b),O=i(ye),xe=i(O),be=t(t(O,!0));g(be,()=>{var j;return(j=s(P))==null?void 0:j.declarations.length},j=>{var $=Xe();ae($,73,()=>s(P).declarations,Ee,(we,ee,ta)=>{let We=()=>f(f(ee)).name,ze=()=>f(f(ee)).kind;var E=Ve(),De=i(E);d(()=>{Ne(E,`declaration chip ${ze()??""}_declaration svelte-19y7aej`),h(De,We())}),_(we,E)}),_(j,$)}),d(()=>{k(O,"href",s(W)),h(xe,f(a))}),_(l,b)}),_(v,e)});var fe=t(t(Z,!0)),ke=i(fe);{var je=v=>{var e=$e();_(v,e)};Le(ke,{summary:je,children:(v,e)=>{var o=ea(),l=i(o),a=i(l);d(()=>h(a,JSON.stringify(r.pkg,null,"	"))),_(v,o)},$$slots:{default:!0}})}_(se,A),Oe()}export{pa as P};
