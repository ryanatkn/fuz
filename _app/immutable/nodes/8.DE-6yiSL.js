import{b as Z,a,t as c,f as L,s as t,c as i,l as N}from"../chunks/disclose-version.COjBdUkA.js";import{p as tt,a as et,ak as rt,r as d,g as S,m as ot}from"../chunks/runtime.BITJpo-a.js";import{s as _,b as p}from"../chunks/render.Z7Ne6upu.js";import{n as at}from"../chunks/utils.BSJX-nVd.js";import{C as n}from"../chunks/Code.CAGfF-1b.js";import{g as nt}from"../chunks/tome.DbsBumql.js";import{A as s}from"../chunks/Alert.CSv7wDln.js";import{T as st}from"../chunks/Tome_Detail.CKmy_6pt.js";import{T as m}from"../chunks/Tome_Subheading.DzeN6WkQ.js";var ct=c("info",1),it=c("icon as a string prop",1),lt=c("icon as a snippet",1),pt=c("the computer is mistaken",1),ut=c("here's how to fix it",1),dt=c("the <code>color</code> prop overrides the status color",1),_t=c(`<section><!> <!> <!></section> <section><!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!></section> <section><!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p></section> <section><!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!></section>`,1);function Tt(W,Y){et(Y,!0);const j=nt("Alert");let u=ot(0);var v=Z(),q=L(v);st(q,{tome:j,children:(F,vt)=>{var f=_t(),h=L(f),A=i(h);n(A,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var g=t(t(A,!0));n(g,{content:"<Alert>info</Alert>"});var G=t(t(g,!0));s(G,{children:(r,o)=>{var e=ct();a(r,e)}});var b=t(t(h,!0)),$=i(b);m($,{text:"With custom icon",slug:"custom-icon"});var H=t(t($,!0)),k=t(t(H,!0));n(k,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var x=t(t(k,!0));s(x,{icon:"▷",children:(r,o)=>{var e=it();a(r,e)}});var P=t(t(x,!0));n(P,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var J=t(t(P,!0));s(J,{icon:(o,e=at)=>{var l=N(o);d(()=>_(l,`${p(e())}◡${p(e())}`)),a(o,l)},children:(o,e)=>{var l=lt();a(o,l)}});var T=t(t(b,!0)),y=i(T);m(y,{text:"As optional button",slug:"optional-button"});var K=t(t(y,!0)),I=t(t(K,!0));n(I,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var E=t(t(I,!0));s(E,{onclick:()=>rt(u),children:(r,o)=>{var e=N(r);d(()=>_(e,`alerts can be buttons${p(".".repeat(S(u)))}`)),a(r,e)}});var O=t(t(E,!0)),Q=i(O),U=t(t(T,!0)),M=i(U);m(M,{text:"With custom status",slug:"custom-status"});var V=t(t(M,!0)),R=t(t(V,!0));n(R,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var w=t(t(R,!0));n(w,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var B=t(t(w,!0));s(B,{status:"error",children:(r,o)=>{var e=pt();a(r,e)}});var z=t(t(B,!0));n(z,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var C=t(t(z,!0));s(C,{status:"help",children:(r,o)=>{var e=ut();a(r,e)}});var D=t(t(C,!0));n(D,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var X=t(t(D,!0));s(X,{status:"help",color:"var(--color_d_5)",children:(r,o)=>{var e=dt();a(r,e)}}),d(()=>_(Q,`clicks: ${p(S(u))}`)),a(F,f)}}),a(W,v),tt()}export{Tt as component};
