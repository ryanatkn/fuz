import{e as c,a as s,t as Y}from"../chunks/disclose-version.B7b5AUHK.js";import{p as O,a as Q,f as U,aH as V,t as h,c as i,s as t,n as a,r as p,ao as X,ah as Z,g as W}from"../chunks/runtime.Dl2wjisw.js";import{s as $}from"../chunks/render.z44PQ4cw.js";import{C as n}from"../chunks/Code.BPVxtOXF.js";import{g as tt}from"../chunks/tome.BOHtt9xd.js";import{A as l}from"../chunks/Alert.CqLBcMm1.js";import{T as et}from"../chunks/Tome_Detail.DnQ-jxps.js";import{T as f}from"../chunks/Tome_Subheading.BLyJZ5n4.js";var ot=Y("the <code>color</code> prop overrides the status color",1),rt=Y(`<section><!> <!> <!></section> <section><!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!></section> <section><!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p></section> <section><!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!></section>`,1);function vt(j,D){O(D,!0);const H=tt("Alert");let u=Z(0);et(j,{tome:H,children:(q,at)=>{var A=rt(),_=U(A),g=i(_);n(g,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var x=t(g,2);n(x,{content:"<Alert>info</Alert>"});var F=t(x,2);l(F,{children:(o,r)=>{a();var e=c("info");s(o,e)},$$slots:{default:!0}}),p(_);var v=t(_,2),b=i(v);f(b,{text:"With custom icon",slug:"custom-icon"});var k=t(b,4);n(k,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var P=t(k,2);l(P,{icon:"▷",children:(o,r)=>{a();var e=c("icon as a string prop");s(o,e)},$$slots:{default:!0}});var T=t(P,2);n(T,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var G=t(T,2);l(G,{icon:(r,e=X)=>{a();var d=c();h(()=>$(d,`${e()??""}◡${e()??""}`)),s(r,d)},children:(r,e)=>{a();var d=c("icon as a snippet");s(r,d)},$$slots:{default:!0}}),p(v);var m=t(v,2),y=i(m);f(y,{text:"As optional button",slug:"optional-button"});var I=t(y,4);n(I,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var E=t(I,2);l(E,{onclick:()=>V(u),children:(o,r)=>{a();var e=c();h(()=>$(e,`alerts can be buttons${".".repeat(W(u))??""}`)),s(o,e)},$$slots:{default:!0}});var M=t(E,2),J=i(M);p(M),p(m);var R=t(m,2),w=i(R);f(w,{text:"With custom status",slug:"custom-status"});var B=t(w,4);n(B,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var z=t(B,2);n(z,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var C=t(z,2);l(C,{status:"error",children:(o,r)=>{a();var e=c("the computer is mistaken");s(o,e)},$$slots:{default:!0}});var L=t(C,2);n(L,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var N=t(L,2);l(N,{status:"help",children:(o,r)=>{a();var e=c("here's how to fix it");s(o,e)},$$slots:{default:!0}});var S=t(N,2);n(S,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var K=t(S,2);l(K,{status:"help",color:"var(--color_d_5)",children:(o,r)=>{a();var e=ot();a(2),s(o,e)},$$slots:{default:!0}}),p(R),h(()=>$(J,`clicks: ${W(u)??""}`)),s(q,A)},$$slots:{default:!0}}),Q()}export{vt as component};
