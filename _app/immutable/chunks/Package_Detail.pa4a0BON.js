import{c as _,s as t,a as c,t as u,J as ze,b,f as p,r as i,d as De}from"./disclose-version.D-YpP91c.js";import{p as Pe,a as qe,g as v,t as g,d as h,U as f}from"./runtime.CLWtUI7-.js";import{s as k}from"./render.DYN3TrTz.js";import{i as m}from"./if.t2Adprt1.js";import{e as te,i as Oe}from"./each.BqXyQR24.js";import{s as z,c as y}from"./attributes.w-7YtrUH.js";import{t as D,s as Ee}from"./class.iiaQ2wDY.js";import{s as P}from"./style.iv2mhl8q.js";import{s as Je,a as Ne,p as Se}from"./stores.OAiEYmpE.js";import{e as re,a as se,s as ve}from"./string.ZJuK4sHN.js";import{f as Ce}from"./url.Dt0VZVCT.js";import{D as Ie}from"./Details.et65Xyzm.js";var Le=u('<div class="repo_name svelte-19y7aej"> <!></div>'),Me=u('<div class="description svelte-19y7aej"> </div>'),Ue=u('<div class="motto svelte-19y7aej"> </div>'),Ae=u('<blockquote class="npm_url svelte-19y7aej"> </blockquote>'),Be=u('<span class="title svelte-19y7aej">homepage</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej"><img> </a></div>',1),Fe=u('<span class="title svelte-19y7aej">repo</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="repo"> </a></div>',1),Ge=u('<span class="title svelte-19y7aej">npm</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="npm"> </a></div>',1),He=u('<span class="title svelte-19y7aej">version</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="version"> </a></div>',1),Ke=u('<span class="title svelte-19y7aej">license</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="license"> </a></div>',1),Qe=u('<span class="title svelte-19y7aej">data</span> <div class="content svelte-19y7aej"><a class="chip svelte-19y7aej" title="data">package.json</a> <a class="chip svelte-19y7aej" title="data">src.json</a></div>',1),Re=u('<div class="logo svelte-19y7aej"><img></div>'),Te=u("<li> </li>"),Ve=u('<ul class="declarations unstyled svelte-19y7aej"></ul>'),Xe=u('<li class="module svelte-19y7aej"><div class="module_content svelte-19y7aej"><a class="chip"> </a> <!></div></li>'),Ye=u('<section class="svelte-19y7aej"><menu class="unstyled"></menu></section>'),Ze=u("raw data for <code>pkg: Package_Meta</code>",1),$e=u("<pre><code> </code></pre>"),ea=u('<div class="package_detail svelte-19y7aej"><div class="info svelte-19y7aej"><div class="flex flex_1"><div><header class="svelte-19y7aej"><!></header> <!> <!> <!> <!> <section class="properties svelte-19y7aej"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-19y7aej"><!></section></div>');function ma(oe,r){Pe(r,!0);const le=Je(),ne=()=>Ne(Se,"$page",le),ie=h(()=>r.pkg),L=h(()=>{let{package_json:o,src_json:a}=v(ie);return[o,a]}),d=h(()=>v(L)[0]),_e=h(()=>v(L)[1]),ce=h(()=>v(_e)),de=h(()=>{let{modules:o}=v(ce);return[o]}),ge=h(()=>v(de)[0]),M=h(()=>v(d).repository?se(ve(ve(typeof v(d).repository=="string"?v(d).repository:v(d).repository.url,".git"),"/"),"git+"):null),U=h(()=>v(d).license&&v(M)?v(M)+"/blob/main/LICENSE":null),me=(o,a)=>o+"/blob/main/src/lib/"+(a.endsWith(".js")?a.slice(0,-3)+".ts":a),ue=h(()=>v(d).exports&&Object.keys(v(d).exports)),A=h(()=>v(d).exports?Object.keys(v(d).exports).map(o=>{const a=se(o,"./");return a==="."?"index.js":a}):null);var J=ea(),N=_(J),S=_(N),B=_(S),C=_(B),pe=_(C);m(pe,()=>r.repo_name,o=>{var a=b(),l=p(a);z(l,()=>r.repo_name,()=>r.pkg.repo_name),c(o,a)},o=>{var a=Le(),l=_(a),s=t(l);m(s,()=>v(d).glyph,e=>{var n=ze();g(()=>k(n,` ${v(d).glyph??""}`)),c(e,n)}),i(a),g(()=>k(l,r.pkg.repo_name)),c(o,a)}),i(C);var F=t(t(C,!0));m(F,()=>r.children,o=>{var a=b(),l=p(a);z(l,()=>r.children,()=>r.pkg),c(o,a)});var G=t(t(F,!0));m(G,()=>v(d).description,o=>{var a=b(),l=p(a);m(l,()=>r.description,s=>{var e=b(),n=p(e);z(n,()=>r.description,()=>v(d).description),c(s,e)},s=>{var e=Me(),n=_(e);i(e),g(()=>k(n,v(d).description)),c(s,e)}),c(o,a)});var H=t(t(G,!0));m(H,()=>v(d).motto,o=>{var a=b(),l=p(a);m(l,()=>r.motto,s=>{var e=b(),n=p(e);z(n,()=>r.motto,()=>v(d).motto),c(s,e)},s=>{var e=Ue(),n=_(e);i(e),g(()=>k(n,v(d).motto)),c(s,e)}),c(o,a)});var K=t(t(H,!0));m(K,()=>r.pkg.npm_url,o=>{var a=b(),l=p(a);m(l,()=>r.npm_url,s=>{var e=b(),n=p(e);z(n,()=>r.npm_url,()=>r.pkg.npm_url),c(s,e)},s=>{var e=Ae(),n=_(e);i(e),g(()=>k(n,`npm i -D ${v(d).name??""}`)),c(s,e)}),c(o,a)});var Q=t(t(K,!0)),R=_(Q);m(R,()=>r.pkg.homepage_url,o=>{var a=b(),l=p(a);m(l,()=>r.homepage_url,s=>{var e=b(),n=p(e);z(n,()=>r.homepage_url,()=>r.pkg.homepage_url),c(s,e)},s=>{var e=Be(),n=p(e),j=t(t(n,!0)),W=_(j),w=_(W),q=t(w,!0);g(()=>k(q,` ${Ce(r.pkg.homepage_url)??""}`)),i(W),i(j),g(()=>{y(W,"href",r.pkg.homepage_url),D(W,"selected",r.pkg.homepage_url===ne().url.href),y(w,"src",r.pkg.logo_url),y(w,"alt",r.pkg.logo_alt),P(w,"width","16px"),P(w,"height","16px"),P(w,"margin-right","var(--space_xs)")}),c(s,e)}),c(o,a)});var T=t(t(R,!0));m(T,()=>r.pkg.repo_url,o=>{var a=Fe(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),g(()=>{y(e,"href",r.pkg.repo_url),k(n,`${r.pkg.owner_name??""}/${r.pkg.repo_name??""}`)}),c(o,a)});var V=t(t(T,!0));m(V,()=>r.pkg.npm_url,o=>{var a=Ge(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),g(()=>{y(e,"href",r.pkg.npm_url),k(n,v(d).name)}),c(o,a)});var X=t(t(V,!0));m(X,()=>r.pkg.changelog_url,o=>{var a=He(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),g(()=>{y(e,"href",r.pkg.changelog_url),k(n,v(d).version)}),c(o,a)});var Y=t(t(X,!0));m(Y,()=>v(U),o=>{var a=Ke(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),g(()=>{y(e,"href",v(U)),k(n,v(d).license)}),c(o,a)});var he=t(t(Y,!0));m(he,()=>r.pkg.homepage_url,o=>{var a=Qe(),l=p(a),s=t(t(l,!0)),e=_(s);g(()=>y(e,"href",`${re(r.pkg.homepage_url,"/")??""}.well-known/package.json`));var n=t(t(e,!0));g(()=>y(n,"href",`${re(r.pkg.homepage_url,"/")??""}.well-known/src.json`)),i(s),c(o,a)}),i(Q),i(B),i(S);var ke=t(t(S,!0));m(ke,()=>r.pkg.logo_url,o=>{var a=Re(),l=_(a);i(a),g(()=>{y(l,"src",r.pkg.logo_url),y(l,"alt",r.pkg.logo_alt),P(l,"width","var(--size, var(--icon_size_xl2))"),P(l,"height","var(--size, var(--icon_size_xl2))")}),c(o,a)}),i(N);var Z=t(t(N,!0));m(Z,()=>v(A)&&r.pkg.repo_url,o=>{var a=Ye(),l=_(a);te(l,78,()=>v(A),(s,e)=>f(s),(s,e,n)=>{var j=Xe();const W=h(()=>me(r.pkg.repo_url,f(e))),w=h(()=>{var x;return(x=v(ue))==null?void 0:x[f(n)]}),q=h(()=>{var x;return v(w)&&((x=v(ge))==null?void 0:x[v(w)])});g(()=>D(j,"ts",f(e).endsWith(".js"))),g(()=>D(j,"svelte",f(e).endsWith(".svelte"))),g(()=>D(j,"css",f(e).endsWith(".css"))),g(()=>D(j,"json",f(e).endsWith(".json")));var ee=_(j),O=_(ee),ye=_(O);i(O);var je=t(t(O,!0));m(je,()=>{var x;return(x=v(q))==null?void 0:x.declarations.length},x=>{var I=Ve();te(I,73,()=>v(q).declarations,Oe,(xe,ae,aa)=>{let be=()=>f(f(ae)).name,we=()=>f(f(ae)).kind;var E=Te(),We=_(E);i(E),g(()=>{Ee(E,`declaration chip ${we()??""}_declaration svelte-19y7aej`),k(We,be())}),c(xe,E)}),i(I),c(x,I)}),i(ee),i(j),g(()=>{y(O,"href",v(W)),k(ye,f(e))}),c(s,j)}),i(l),i(a),c(o,a)});var $=t(t(Z,!0)),fe=_($);Ie(fe,{summary:a=>{De();var l=Ze();t(p(l,!0)),c(a,l)},children:(a,l)=>{var s=$e(),e=_(s),n=_(e);g(()=>k(n,JSON.stringify(r.pkg,null,"	"))),i(e),i(s),c(a,s)},$$slots:{default:!0}}),i($),i(J),c(oe,J),qe()}export{ma as P};
