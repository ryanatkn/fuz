import{c as _,s as t,a as c,t as m,J as We,b as y,f as p,r as i,d as ze}from"./disclose-version.D-YpP91c.js";import{p as De,a as Pe,g as v,t as d,d as x,U as k}from"./runtime.CLWtUI7-.js";import{s as h}from"./render.DYN3TrTz.js";import{i as u}from"./if.t2Adprt1.js";import{e as te,i as Oe}from"./each.BqXyQR24.js";import{s as W,c as f}from"./attributes.w-7YtrUH.js";import{t as z,s as Ee}from"./class.iiaQ2wDY.js";import{s as D}from"./style.iv2mhl8q.js";import{s as Je,a as Ne,p as Se}from"./stores.DWwbPLVo.js";import{e as re,a as se,s as ve}from"./string.ZJuK4sHN.js";import{f as Ce}from"./url.Dt0VZVCT.js";import{D as Ie}from"./Details.et65Xyzm.js";var Le=m('<div class="repo_name svelte-w7xguq"> <!></div>'),Me=m('<div class="description svelte-w7xguq"> </div>'),Ue=m('<div class="motto svelte-w7xguq"> </div>'),Ae=m('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Be=m('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),Fe=m('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Ge=m('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),He=m('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),Ke=m('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),Qe=m('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),Re=m('<div class="logo svelte-w7xguq"><img></div>'),Te=m("<li> </li>"),Ve=m('<ul class="declarations unstyled svelte-w7xguq"></ul>'),Xe=m('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),Ye=m('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),Ze=m("raw data for <code>pkg: Package_Meta</code>",1),$e=m("<pre><code> </code></pre>"),ea=m('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function ua(oe,r){De(r,!0);const le=Je(),ne=()=>Ne(Se,"$page",le),ie=x(()=>r.pkg),L=x(()=>{let{package_json:o,src_json:a}=v(ie);return[o,a]}),g=x(()=>v(L)[0]),_e=x(()=>v(L)[1]),ce=x(()=>v(_e)),ge=x(()=>{let{modules:o}=v(ce);return[o]}),de=x(()=>v(ge)[0]),M=x(()=>v(g).repository?se(ve(ve(typeof v(g).repository=="string"?v(g).repository:v(g).repository.url,".git"),"/"),"git+"):null),U=x(()=>v(g).license&&v(M)?v(M)+"/blob/main/LICENSE":null),ue=(o,a)=>o+"/blob/main/src/lib/"+(a.endsWith(".js")?a.slice(0,-3)+".ts":a),me=x(()=>v(g).exports&&Object.keys(v(g).exports)),A=x(()=>v(g).exports?Object.keys(v(g).exports).map(o=>{const a=se(o,"./");return a==="."?"index.js":a}):null);var J=ea(),N=_(J),S=_(N),B=_(S),C=_(B),pe=_(C);u(pe,()=>r.repo_name,o=>{var a=y(),l=p(a);W(l,()=>r.repo_name,()=>r.pkg.repo_name),c(o,a)},o=>{var a=Le(),l=_(a),s=t(l);u(s,()=>v(g).glyph,e=>{var n=We();d(()=>h(n,` ${v(g).glyph??""}`)),c(e,n)}),i(a),d(()=>h(l,r.pkg.repo_name)),c(o,a)}),i(C);var F=t(t(C,!0));u(F,()=>r.children,o=>{var a=y(),l=p(a);W(l,()=>r.children,()=>r.pkg),c(o,a)});var G=t(t(F,!0));u(G,()=>v(g).description,o=>{var a=y(),l=p(a);u(l,()=>r.description,s=>{var e=y(),n=p(e);W(n,()=>r.description,()=>v(g).description),c(s,e)},s=>{var e=Me(),n=_(e);i(e),d(()=>h(n,v(g).description)),c(s,e)}),c(o,a)});var H=t(t(G,!0));u(H,()=>v(g).motto,o=>{var a=y(),l=p(a);u(l,()=>r.motto,s=>{var e=y(),n=p(e);W(n,()=>r.motto,()=>v(g).motto),c(s,e)},s=>{var e=Ue(),n=_(e);i(e),d(()=>h(n,v(g).motto)),c(s,e)}),c(o,a)});var K=t(t(H,!0));u(K,()=>r.pkg.npm_url,o=>{var a=y(),l=p(a);u(l,()=>r.npm_url,s=>{var e=y(),n=p(e);W(n,()=>r.npm_url,()=>r.pkg.npm_url),c(s,e)},s=>{var e=Ae(),n=_(e);i(e),d(()=>h(n,`npm i -D ${v(g).name??""}`)),c(s,e)}),c(o,a)});var Q=t(t(K,!0)),R=_(Q);u(R,()=>r.pkg.homepage_url,o=>{var a=y(),l=p(a);u(l,()=>r.homepage_url,s=>{var e=y(),n=p(e);W(n,()=>r.homepage_url,()=>r.pkg.homepage_url),c(s,e)},s=>{var e=Be(),n=p(e),w=t(t(n,!0)),b=_(w),j=_(b),P=t(j,!0);d(()=>h(P,` ${Ce(r.pkg.homepage_url)??""}`)),i(b),i(w),d(()=>{f(b,"href",r.pkg.homepage_url),z(b,"selected",r.pkg.homepage_url===ne().url.href),f(j,"src",r.pkg.logo_url),f(j,"alt",r.pkg.logo_alt),D(j,"width","16px"),D(j,"height","16px"),D(j,"margin-right","var(--space_xs)")}),c(s,e)}),c(o,a)});var T=t(t(R,!0));u(T,()=>r.pkg.repo_url,o=>{var a=Fe(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),d(()=>{f(e,"href",r.pkg.repo_url),h(n,`${r.pkg.owner_name??""}/${r.pkg.repo_name??""}`)}),c(o,a)});var V=t(t(T,!0));u(V,()=>r.pkg.npm_url,o=>{var a=Ge(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),d(()=>{f(e,"href",r.pkg.npm_url),h(n,v(g).name)}),c(o,a)});var X=t(t(V,!0));u(X,()=>r.pkg.changelog_url,o=>{var a=He(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),d(()=>{f(e,"href",r.pkg.changelog_url),h(n,v(g).version)}),c(o,a)});var Y=t(t(X,!0));u(Y,()=>v(U),o=>{var a=Ke(),l=p(a),s=t(t(l,!0)),e=_(s),n=_(e);i(e),i(s),d(()=>{f(e,"href",v(U)),h(n,v(g).license)}),c(o,a)});var xe=t(t(Y,!0));u(xe,()=>r.pkg.homepage_url,o=>{var a=Qe(),l=p(a),s=t(t(l,!0)),e=_(s);d(()=>f(e,"href",`${re(r.pkg.homepage_url,"/")??""}.well-known/package.json`));var n=t(t(e,!0));d(()=>f(n,"href",`${re(r.pkg.homepage_url,"/")??""}.well-known/src.json`)),i(s),c(o,a)}),i(Q),i(B),i(S);var he=t(t(S,!0));u(he,()=>r.pkg.logo_url,o=>{var a=Re(),l=_(a);i(a),d(()=>{f(l,"src",r.pkg.logo_url),f(l,"alt",r.pkg.logo_alt),D(l,"width","var(--size, var(--icon_size_xl2))"),D(l,"height","var(--size, var(--icon_size_xl2))")}),c(o,a)}),i(N);var Z=t(t(N,!0));u(Z,()=>v(A)&&r.pkg.repo_url,o=>{var a=Ye(),l=_(a);te(l,78,()=>v(A),(s,e)=>k(s),(s,e,n)=>{var w=Xe();const b=x(()=>ue(r.pkg.repo_url,k(e))),j=x(()=>{var q;return(q=v(me))==null?void 0:q[k(n)]}),P=x(()=>{var q;return v(j)&&((q=v(de))==null?void 0:q[v(j)])});d(()=>z(w,"ts",k(e).endsWith(".js"))),d(()=>z(w,"svelte",k(e).endsWith(".svelte"))),d(()=>z(w,"css",k(e).endsWith(".css"))),d(()=>z(w,"json",k(e).endsWith(".json")));var ee=_(w),O=_(ee),fe=_(O);i(O);var we=t(t(O,!0));u(we,()=>{var q;return(q=v(P))==null?void 0:q.declarations.length},q=>{var I=Ve();te(I,73,()=>v(P).declarations,Oe,(qe,ae,aa)=>{let ye=()=>k(k(ae)).name,je=()=>k(k(ae)).kind;var E=Te(),be=_(E);i(E),d(()=>{Ee(E,`declaration chip ${je()??""}_declaration svelte-w7xguq`),h(be,ye())}),c(qe,E)}),i(I),c(q,I)}),i(ee),i(w),d(()=>{f(O,"href",v(b)),h(fe,k(e))}),c(s,w)}),i(l),i(a),c(o,a)});var $=t(t(Z,!0)),ke=_($);Ie(ke,{summary:a=>{ze();var l=Ze();t(p(l,!0)),c(a,l)},children:(a,l)=>{var s=$e(),e=_(s),n=_(e);d(()=>h(n,JSON.stringify(r.pkg,null,"	"))),i(e),i(s),c(a,s)},$$slots:{default:!0}}),i($),i(J),c(oe,J),Pe()}export{ua as P};
