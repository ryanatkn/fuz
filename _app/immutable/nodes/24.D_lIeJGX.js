import{b as g,f as l,a as r,t as f,s as t,c as i,m as D}from"../chunks/disclose-version.E6IJI96N.js";import{p as B,t as N,a as S,K as J}from"../chunks/runtime.BaU8wwyi.js";import{f as K,s as W}from"../chunks/render.BOq403Mo.js";import{C as M}from"../chunks/Code.w1TMYuNb.js";import{g as O}from"../chunks/tome.BstDQqpu.js";import{i as A}from"../chunks/if.Cxoc_153.js";import{b as I,s as U}from"../chunks/attributes.DNk-zn62.js";import{p as x}from"../chunks/props.kV--7V3-.js";import{u as V,s as j}from"../chunks/store.C8FhO-WN.js";import{p as F}from"../chunks/stores.BO5slST8.js";import{a as G}from"../chunks/string.ZJuK4sHN.js";import{g as Q}from"../chunks/entry.CNAm3Qrq.js";import{M as L}from"../chunks/Mdn_Link.D_OLvcv0.js";import{T as X}from"../chunks/Tome_Detail.DwSHN5S-.js";const Z=!0,tt=Z;var et=f('<meta http-equiv="refresh">'),rt=f("<p>redirect to <a> </a></p>");function P(R,o){B(o,!0);const b={};V(b);const w=()=>j(F,"$page",b),u=x(o,"host",3,""),T=x(o,"path",11,()=>{}),v=x(o,"auto",3,!0),y=T()??w().url.pathname,s=u()+y;v()&&tt&&Q(s,{replaceState:!0});var m=g();K(n=>{var e=g(),a=l(e);A(a,v,d=>{var h=et();I(h,"content",`0; URL=${s??""}`),r(d,h)}),r(n,e)});var _=l(m);A(_,()=>o.children,n=>{var e=g(),a=l(e);U(()=>o.children,a,()=>s),r(n,e)},n=>{var e=rt(),a=t(i(e));I(a,"href",s);var d=i(a);N(()=>W(d,G(s,"https://"))),r(n,e)}),r(R,m),S()}var at=f("a meta tag",1),ot=f('the <span class="font_mono">refresh</span> header',1),st=f(`<section><p>Adds a redirect for a page using <!> with <!>. Includes a rendered link and JS navigation fallback.</p> <!> <aside>Note that <code> </code> is only used here to prevent the page from
			redirecting! Typical usage lets it default to <code>true</code>.</aside> <!> <!></section> <section><!> <!></section>`,1);function bt(R,o){B(o,!0);const w=O("Redirect");var u=g(),T=l(u);X(T,{tome:w,children:(v,y)=>{var s=st(),m=l(s),_=i(m),n=t(i(_));L(n,{path:"Web/HTTP/Redirections#html_redirections",children:(c,$)=>{var p=at();r(c,p)},$$slots:{default:!0}});var e=t(t(n,!0));L(e,{path:"Web/HTML/Element/meta#http-equiv",children:(c,$)=>{var p=ot();r(c,p)},$$slots:{default:!0}});var a=t(t(_,!0));M(a,{content:"import Redirect from '@ryanatkn/fuz/Redirect.svelte';",lang:"ts"});var d=t(t(a,!0)),h=t(i(d)),q=i(h);q.nodeValue="auto={false}";var E=t(t(d,!0));M(E,{content:"<Redirect auto={false} />"});var C=t(t(E,!0));P(C,{auto:!1});var H=t(t(m,!0)),k=i(H);M(k,{content:`<Redirect
	host="https://www.felt.dev"
	path="/library"
	let:url
	auto={false}
>
	the redirect url is {url}
</Redirect>`});var Y=t(t(k,!0));{var z=(c,$=J)=>{var p=D(c);N(()=>W(p,`the redirect url is ${$()??""}`)),r(c,p)};P(Y,{host:"https://www.felt.dev",path:"/library",auto:!1,children:z})}r(v,s)},$$slots:{default:!0}}),r(R,u),S()}export{bt as component};
