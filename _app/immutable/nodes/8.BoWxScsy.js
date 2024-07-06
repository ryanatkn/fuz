import{a as s,t as c,c as l,s as t,D as z,f as Q}from"../chunks/disclose-version.BHqvyKx-.js";import{p as U,a as V,a3 as X,t as u,G as Z,C as tt,g as D}from"../chunks/runtime.VNSPx__r.js";import{s as d}from"../chunks/render.BZs1ZF8H.js";import{C as a}from"../chunks/Code.DpsevpDf.js";import{g as et}from"../chunks/tome.BuafWkLb.js";import{A as n}from"../chunks/Alert.D33Q_H-X.js";import{T as ot}from"../chunks/Tome_Detail.C03oix-c.js";import{T as _}from"../chunks/Tome_Subheading.DLxyl89r.js";var rt=c("info",1),st=c("icon as a string prop",1),at=c("icon as a snippet",1),nt=c("the computer is mistaken",1),ct=c("here's how to fix it",1),lt=c("the <code>color</code> prop overrides the status color",1),it=c(`<section><!> <!> <!></section> <section><!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!></section> <section><!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p></section> <section><!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!></section>`,1);function gt(L,N){U(N,!0);const S=et("Alert");let p=tt(0);ot(L,{tome:S,children:(W,ut)=>{var v=it(),m=Q(v),f=l(m);a(f,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var h=t(t(f,!0));a(h,{content:"<Alert>info</Alert>"});var Y=t(t(h,!0));n(Y,{children:(o,r)=>{var e=rt();s(o,e)},$$slots:{default:!0}});var $=t(t(m,!0)),A=l($);_(A,{text:"With custom icon",slug:"custom-icon"});var j=t(t(A,!0)),g=t(t(j,!0));a(g,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var b=t(t(g,!0));n(b,{icon:"▷",children:(o,r)=>{var e=st();s(o,e)},$$slots:{default:!0}});var x=t(t(b,!0));a(x,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var G=t(t(x,!0));n(G,{icon:(r,e=Z)=>{var i=z(r);u(()=>d(i,`${e()??""}◡${e()??""}`)),s(r,i)},children:(r,e)=>{var i=at();s(r,i)},$$slots:{default:!0}});var k=t(t($,!0)),P=l(k);_(P,{text:"As optional button",slug:"optional-button"});var q=t(t(P,!0)),T=t(t(q,!0));a(T,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var y=t(t(T,!0));n(y,{onclick:()=>X(p),children:(o,r)=>{var e=z(o);u(()=>d(e,`alerts can be buttons${".".repeat(D(p))??""}`)),s(o,e)},$$slots:{default:!0}});var F=t(t(y,!0)),H=l(F),J=t(t(k,!0)),I=l(J);_(I,{text:"With custom status",slug:"custom-status"});var K=t(t(I,!0)),E=t(t(K,!0));a(E,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var M=t(t(E,!0));a(M,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var R=t(t(M,!0));n(R,{status:"error",children:(o,r)=>{var e=nt();s(o,e)},$$slots:{default:!0}});var w=t(t(R,!0));a(w,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var B=t(t(w,!0));n(B,{status:"help",children:(o,r)=>{var e=ct();s(o,e)},$$slots:{default:!0}});var C=t(t(B,!0));a(C,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var O=t(t(C,!0));n(O,{status:"help",color:"var(--color_d_5)",children:(o,r)=>{var e=lt();s(o,e)},$$slots:{default:!0}}),u(()=>d(H,`clicks: ${D(p)??""}`)),s(W,v)},$$slots:{default:!0}}),V()}export{gt as component};
