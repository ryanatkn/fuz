import{b as Z,a,t as c,f as L,c as l,s as t,l as N}from"../chunks/disclose-version.5tIm47j5.js";import{p as tt,a as et,at as rt,r as d,a4 as ot,g as S,H as at}from"../chunks/runtime.BhNP7HCo.js";import{s as _,a as p}from"../chunks/render.YxUbVe5A.js";import{C as s}from"../chunks/Code.DoKnE_1e.js";import{g as st}from"../chunks/tome.DYc5lYMi.js";import{A as n}from"../chunks/Alert.BLucyRNA.js";import{T as nt}from"../chunks/Tome_Detail.BIg5umkX.js";import{T as v}from"../chunks/Tome_Subheading.DFz_cCJJ.js";var ct=c("info",1),lt=c("icon as a string prop",1),it=c("icon as a snippet",1),pt=c("the computer is mistaken",1),ut=c("here's how to fix it",1),dt=c("the <code>color</code> prop overrides the status color",1),_t=c(`<section><!> <!> <!></section> <section><!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!></section> <section><!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p></section> <section><!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!></section>`,1);function Pt(W,Y){tt(Y,!0);const j=st("Alert");let u=at(0);var m=Z(),H=L(m);nt(H,{tome:j,children:(q,mt)=>{var f=_t(),h=L(f),A=l(h);s(A,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var g=t(t(A,!0));s(g,{content:"<Alert>info</Alert>"});var F=t(t(g,!0));n(F,{children:(r,o)=>{var e=ct();a(r,e)}});var b=t(t(h,!0)),$=l(b);v($,{text:"With custom icon",slug:"custom-icon"});var G=t(t($,!0)),x=t(t(G,!0));s(x,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var k=t(t(x,!0));n(k,{icon:"▷",children:(r,o)=>{var e=lt();a(r,e)}});var P=t(t(k,!0));s(P,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var J=t(t(P,!0));n(J,{icon:(o,e=ot)=>{var i=N(o);d(()=>_(i,`${p(e())}◡${p(e())}`)),a(o,i)},children:(o,e)=>{var i=it();a(o,i)}});var T=t(t(b,!0)),y=l(T);v(y,{text:"As optional button",slug:"optional-button"});var K=t(t(y,!0)),I=t(t(K,!0));s(I,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var E=t(t(I,!0));n(E,{onclick:()=>rt(u),children:(r,o)=>{var e=N(r);d(()=>_(e,`alerts can be buttons${p(".".repeat(S(u)))}`)),a(r,e)}});var O=t(t(E,!0)),Q=l(O),U=t(t(T,!0)),M=l(U);v(M,{text:"With custom status",slug:"custom-status"});var V=t(t(M,!0)),R=t(t(V,!0));s(R,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var w=t(t(R,!0));s(w,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var B=t(t(w,!0));n(B,{status:"error",children:(r,o)=>{var e=pt();a(r,e)}});var z=t(t(B,!0));s(z,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var C=t(t(z,!0));n(C,{status:"help",children:(r,o)=>{var e=ut();a(r,e)}});var D=t(t(C,!0));s(D,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var X=t(t(D,!0));n(X,{status:"help",color:"var(--color_d_5)",children:(r,o)=>{var e=dt();a(r,e)}}),d(()=>_(Q,`clicks: ${p(S(u))}`)),a(q,f)}}),a(W,m),et()}export{Pt as component};
