import{b as g,f as p,a as r,t as u,s as t,c as n,n as J}from"../chunks/disclose-version.Dxr0gsna.js";import{p as P,t as B,a as N,a5 as O}from"../chunks/runtime.jOsey7ll.js";import{f as U,a as S,s as W}from"../chunks/render.DebiWJO9.js";import{i as V}from"../chunks/lifecycle.9rCdOzSM.js";import{C as k}from"../chunks/Code.BVkDTZyU.js";import{g as j}from"../chunks/tome.B0jujVAD.js";import{i as x}from"../chunks/if.Wn85vDr3.js";import{b as E,s as F}from"../chunks/attributes.BJddIwjt.js";import{p as y}from"../chunks/props.D7qg7EHC.js";import{u as G,s as K}from"../chunks/store.CiwmEv4D.js";import{p as Q}from"../chunks/stores.CJ7DJyiv.js";import{a as X}from"../chunks/string.ZJuK4sHN.js";import{g as Z}from"../chunks/entry.WkWZ89wF.js";import{M as A}from"../chunks/Mdn_Link.D8ArhA4m.js";import{T as tt}from"../chunks/Tome_Detail.Biv7CnIw.js";const et=!0,rt=et;var at=u('<meta http-equiv="refresh">'),ot=u("<p>redirect to <a> </a></p>");function I(R,a){P(a,!0);const b={};G(b);const M=()=>K(Q,"$page",b),_=y(a,"host",3,""),T=y(a,"path",11,()=>M().url.pathname),v=y(a,"auto",3,!0),i=_()+T();v()&&rt&&Z(i,{replaceState:!0});var l=g();U(o=>{var e=g(),s=p(e);x(s,v,d=>{var m=at();E(m,"content",`0; URL=${S(i)}`),r(d,m)}),r(o,e)});var h=p(l);x(h,()=>a.children,o=>{var e=g(),s=p(e);F(()=>a.children,s,()=>i),r(o,e)},o=>{var e=ot(),s=t(n(e));E(s,"href",i);var d=n(s);B(()=>W(d,X(i,"https://"))),r(o,e)}),r(R,l),N()}var st=u("a meta tag",1),nt=u('the <span class="font_mono">refresh</span> header',1),it=u(`<section><p>Adds a redirect for a page using <!> with <!>. Includes a rendered link and JS navigation fallback.</p> <!> <aside>Note that <code> </code> is only used here to prevent the page from
			redirecting! Typical usage lets it default to <code>true</code>.</aside> <!> <!></section> <section><!> <!></section>`,1);function wt(R,a){P(a,!1);const M=j("Redirect");V();var _=g(),T=p(_);tt(T,{tome:M,children:(v,i)=>{var l=it(),h=p(l),o=n(h),e=t(n(o));A(e,{href:"Web/HTTP/Redirections#html_redirections",children:(f,w)=>{var c=st();r(f,c)},$$slots:{default:!0}});var s=t(t(e,!0));A(s,{href:"Web/HTML/Element/meta#http-equiv",children:(f,w)=>{var c=nt();r(f,c)},$$slots:{default:!0}});var d=t(t(o,!0));k(d,{content:"import Redirect from '@ryanatkn/fuz/Redirect.svelte';",lang:"ts"});var m=t(t(d,!0)),q=t(n(m)),C=n(q);C.nodeValue="auto={false}";var L=t(t(m,!0));k(L,{content:"<Redirect auto={false} />"});var D=t(t(L,!0));I(D,{auto:!1});var H=t(t(h,!0)),$=n(H);k($,{content:`<Redirect
	host="https://www.felt.dev"
	path="/library"
	let:url
	auto={false}
>
	the redirect url is {url}
</Redirect>`});var Y=t(t($,!0));{var z=(f,w=O)=>{var c=J(f);B(()=>W(c,`the redirect url is ${S(w())}`)),r(f,c)};I(Y,{host:"https://www.felt.dev",path:"/library",auto:!1,children:z})}r(v,l)},$$slots:{default:!0}}),r(R,_),N()}export{wt as component};
