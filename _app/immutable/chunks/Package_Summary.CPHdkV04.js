import{a as t,c as g,t as u,b as M}from"./disclose-version.DcVMHsl4.js";import{p as N,t as s,f as m,a as O,c as f,r as k,s as c,g as i,d as Q}from"./runtime.DbtEYBdD.js";import{s as h}from"./render.BYxdHAaC.js";import{i as n}from"./if.CjTBE8-9.js";import{s as p,c as x}from"./attributes.mFyRggzr.js";import{t as R}from"./class.Dyhg0P6z.js";import{s as E}from"./style.Bk7ejTAN.js";import{s as T,a as U,p as W}from"./stores.DDMiTyJI.js";import{f as X}from"./url.Dt0VZVCT.js";var Y=u('<div class="repo_name svelte-1widkfd"> </div>'),Z=u("<img>"),$=u("<blockquote> </blockquote>"),aa=u('<p class="text_align_center"> <!></p>'),ea=u('<div class="homepage_url svelte-1widkfd"><a class="chip svelte-1widkfd"> </a></div>'),ra=u('<a class="chip svelte-1widkfd">repo</a>'),ta=u('<a class="chip svelte-1widkfd" title="version"> </a>'),oa=u('<a class="chip svelte-1widkfd">npm</a>'),_a=u('<blockquote class="npm_url svelte-1widkfd"> </blockquote>'),va=u('<div class="package_summary svelte-1widkfd"><header class="box svelte-1widkfd"><!> <!></header> <!> <!> <!> <!> <div class="links svelte-1widkfd"><!> <!> <!></div> <!></div>');function ka(F,a){N(a,!0);const G=T(),H=()=>U(W,"$page",G),d=Q(()=>a.pkg.package_json);var b=va(),w=f(b),z=f(w);n(z,()=>a.repo_name,o=>{var r=g(),l=m(r);p(l,()=>a.repo_name,()=>a.pkg.repo_name),t(o,r)},o=>{var r=Y(),l=f(r);k(r),s(()=>h(l,a.pkg.repo_name)),t(o,r)});var j=c(z);j.nodeValue="  ";var I=c(j);n(I,()=>a.pkg.logo_url,o=>{var r=g(),l=m(r);n(l,()=>a.logo,v=>{var e=g(),_=m(e);p(_,()=>a.logo,()=>a.pkg.logo_url,()=>a.pkg.logo_alt),t(v,e)},v=>{var e=Z();s(()=>{x(e,"src",a.pkg.logo_url),x(e,"alt",a.pkg.logo_alt),E(e,"width","var(--size, var(--icon_size_xl2))"),E(e,"height","var(--size, var(--icon_size_xl2))")}),t(v,e)}),t(o,r)}),k(w);var P=c(w,2);n(P,()=>i(d).motto,o=>{var r=g(),l=m(r);n(l,()=>a.motto,v=>{var e=g(),_=m(e);p(_,()=>a.motto,()=>i(d).motto,()=>i(d).glyph),t(v,e)},v=>{var e=$(),_=f(e);k(e),s(()=>h(_,`${i(d).motto??""}
				${i(d).glyph??""}`)),t(v,e)}),t(o,r)});var D=c(P,2);n(D,()=>i(d).description,o=>{var r=g(),l=m(r);n(l,()=>a.description,v=>{var e=g(),_=m(e);p(_,()=>a.description,()=>i(d).description,()=>i(d).glyph),t(v,e)},v=>{var e=aa(),_=f(e),q=c(_);n(q,()=>!i(d).motto,L=>{var C=M();s(()=>h(C,i(d).glyph)),t(L,C)}),k(e),s(()=>h(_,`${i(d).description??""} `)),t(v,e)}),t(o,r)});var S=c(D,2);n(S,()=>a.children,o=>{var r=g(),l=m(r);p(l,()=>a.children),t(o,r)});var V=c(S,2);n(V,()=>a.pkg.homepage_url,o=>{var r=g(),l=m(r);n(l,()=>a.homepage_url,v=>{var e=g(),_=m(e);p(_,()=>a.homepage_url,()=>a.pkg.homepage_url),t(v,e)},v=>{var e=ea(),_=f(e),q=f(_);s(()=>h(q,X(a.pkg.homepage_url))),k(_),k(e),s(()=>{x(_,"href",a.pkg.homepage_url),R(_,"selected",a.pkg.homepage_url===H().url.href)}),t(v,e)}),t(o,r)});var y=c(V,2),A=f(y);n(A,()=>a.pkg.repo_url,o=>{var r=ra();s(()=>x(r,"href",a.pkg.repo_url)),t(o,r)});var B=c(A,2);n(B,()=>a.pkg.changelog_url,o=>{var r=ta(),l=f(r);k(r),s(()=>{x(r,"href",a.pkg.changelog_url),h(l,i(d).version)}),t(o,r)});var J=c(B,2);n(J,()=>a.pkg.npm_url,o=>{var r=oa();s(()=>x(r,"href",a.pkg.npm_url)),t(o,r)}),k(y);var K=c(y,2);n(K,()=>a.pkg.npm_url,o=>{var r=g(),l=m(r);n(l,()=>a.npm_url,v=>{var e=g(),_=m(e);p(_,()=>a.npm_url,()=>a.pkg.npm_url),t(v,e)},v=>{var e=_a(),_=f(e);k(e),s(()=>h(_,`npm i -D ${i(d).name??""}`)),t(v,e)}),t(o,r)}),k(b),t(F,b),O()}export{ka as P};
