import{b as X,a as o,t as c,f as C,c as l,s as t,m as L}from"../chunks/disclose-version.E6IJI96N.js";import{p as Z,a as tt,av as et,t as p,K as rt,g as N,I as ot}from"../chunks/runtime.BaU8wwyi.js";import{s as u}from"../chunks/render.BOq403Mo.js";import{C as s}from"../chunks/Code.w1TMYuNb.js";import{g as at}from"../chunks/tome.BstDQqpu.js";import{A as n}from"../chunks/Alert.QH7FjRHA.js";import{T as st}from"../chunks/Tome_Detail.C1cJ8-uw.js";import{T as d}from"../chunks/Tome_Subheading.DjePMaR-.js";var nt=c("info",1),ct=c("icon as a string prop",1),lt=c("icon as a snippet",1),it=c("the computer is mistaken",1),pt=c("here's how to fix it",1),ut=c("the <code>color</code> prop overrides the status color",1),dt=c(`<section><!> <!> <!></section> <section><!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!></section> <section><!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p></section> <section><!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!></section>`,1);function kt(S,W){Z(W,!0);const Y=at("Alert");let i=ot(0);var _=X(),j=C(_);st(j,{tome:Y,children:(D,vt)=>{var v=dt(),m=C(v),f=l(m);s(f,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var h=t(t(f,!0));s(h,{content:"<Alert>info</Alert>"});var K=t(t(h,!0));n(K,{children:(e,a)=>{var r=nt();o(e,r)},$$slots:{default:!0}});var $=t(t(m,!0)),A=l($);d(A,{text:"With custom icon",slug:"custom-icon"});var q=t(t(A,!0)),g=t(t(q,!0));s(g,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var b=t(t(g,!0));n(b,{icon:"▷",children:(e,a)=>{var r=ct();o(e,r)},$$slots:{default:!0}});var x=t(t(b,!0));s(x,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var F=t(t(x,!0));{var G=(e,a=rt)=>{var r=L(e);p(()=>u(r,`${a()??""}◡${a()??""}`)),o(e,r)};n(F,{icon:G,children:(e,a)=>{var r=lt();o(e,r)},$$slots:{default:!0}})}var k=t(t($,!0)),P=l(k);d(P,{text:"As optional button",slug:"optional-button"});var H=t(t(P,!0)),T=t(t(H,!0));s(T,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var y=t(t(T,!0));n(y,{onclick:()=>et(i),children:(e,a)=>{var r=L(e);p(()=>u(r,`alerts can be buttons${".".repeat(N(i))??""}`)),o(e,r)},$$slots:{default:!0}});var J=t(t(y,!0)),O=l(J),Q=t(t(k,!0)),I=l(Q);d(I,{text:"With custom status",slug:"custom-status"});var U=t(t(I,!0)),E=t(t(U,!0));s(E,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var M=t(t(E,!0));s(M,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var R=t(t(M,!0));n(R,{status:"error",children:(e,a)=>{var r=it();o(e,r)},$$slots:{default:!0}});var w=t(t(R,!0));s(w,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var B=t(t(w,!0));n(B,{status:"help",children:(e,a)=>{var r=pt();o(e,r)},$$slots:{default:!0}});var z=t(t(B,!0));s(z,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var V=t(t(z,!0));n(V,{status:"help",color:"var(--color_d_5)",children:(e,a)=>{var r=ut();o(e,r)},$$slots:{default:!0}}),p(()=>u(O,`clicks: ${N(i)??""}`)),o(D,v)},$$slots:{default:!0}}),o(S,_),tt()}export{kt as component};
