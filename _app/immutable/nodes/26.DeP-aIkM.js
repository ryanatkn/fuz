import{s as J,c as w,v as O,a as o,b as U,t as g,k as C}from"../chunks/disclose-version.C93Xjdse.js";import{p as W,aR as j,f as _,a as q,s as e,t as H,c,r as p,a9 as d,a8 as D}from"../chunks/runtime.OOkXorm-.js";import{s as Y}from"../chunks/render.B9704Zl5.js";import{C as M}from"../chunks/Code.DNxGeEBz.js";import{g as F}from"../chunks/tome.Rzx9RbI_.js";import{i as P}from"../chunks/if.CJZ2U21M.js";import{c as B,s as G}from"../chunks/attributes.1KJqROqM.js";import{p as k}from"../chunks/props.BWB_lq4A.js";import{p as K}from"../chunks/stores.kyAns663.js";import{a as Q}from"../chunks/string.ZJuK4sHN.js";import{g as V}from"../chunks/entry.BAAZuU3-.js";import{M as N}from"../chunks/Mdn_Link.C4ebSieA.js";import{T as X}from"../chunks/Tome_Content.Dt21R4sz.js";var Z=g('<meta http-equiv="refresh">'),tt=g("<p>redirect to <a> </a></p>");function S(R,s){W(s,!0);const y=J(),$=()=>U(K,"$page",y),b=k(s,"host",3,""),E=k(s,"path",3,void 0),l=k(s,"auto",3,!0),m=E()??$().url.pathname,a=b()+m;l()&&j&&V(a,{replaceState:!0});var f=w();O(n=>{var t=w(),r=_(t);P(r,l,i=>{var h=Z();B(h,"content",`0; URL=${a??""}`),o(i,h)}),o(n,t)});var x=_(f);P(x,()=>s.children,n=>{var t=w(),r=_(t);G(r,()=>s.children,()=>a),o(n,t)},n=>{var t=tt(),r=e(c(t));B(r,"href",a);var i=c(r,!0);H(()=>Y(i,Q(a,"https://"))),p(r),p(t),o(n,t)}),o(R,f),q()}var et=g('the <span class="font_mono">refresh</span> header',1),at=g(`<section><p>Adds a redirect for a page using <!> with <!>. Includes a rendered link and JS navigation fallback.</p> <!> <aside>Note that <code></code> is only used here to prevent the page from
			redirecting! Typical usage lets it default to <code>true</code>.</aside> <!> <!></section> <section><!> <!></section>`,1);function vt(R,s){W(s,!0);const $=F("Redirect");X(R,{tome:$,children:(b,E)=>{var l=at(),m=_(l),a=c(m),f=e(c(a));N(f,{path:"Web/HTTP/Redirections#html_redirections",children:(v,T)=>{d();var u=C("a meta tag");o(v,u)},$$slots:{default:!0}});var x=e(f,2);N(x,{path:"Web/HTML/Element/meta#http-equiv",children:(v,T)=>{d();var u=et();d(2),o(v,u)},$$slots:{default:!0}}),d(),p(a);var n=e(a,2);M(n,{content:"import Redirect from '@ryanatkn/fuz/Redirect.svelte';",lang:"ts"});var t=e(n,2),r=e(c(t));r.textContent="auto={false}",d(3),p(t);var i=e(t,2);M(i,{content:"<Redirect auto={false} />"});var h=e(i,2);S(h,{auto:!1}),p(m);var A=e(m,2),I=c(A);M(I,{content:`<Redirect
	host="https://www.felt.dev"
	path="/library"
	let:url
	auto={false}
>
	the redirect url is {url}
</Redirect>`});var z=e(I,2);S(z,{host:"https://www.felt.dev",path:"/library",auto:!1,children:(T,u=D)=>{d();var L=C();H(()=>Y(L,`the redirect url is ${u()??""}`)),o(T,L)},$$slots:{default:!0}}),p(A),o(b,l)},$$slots:{default:!0}}),q()}export{vt as component};
