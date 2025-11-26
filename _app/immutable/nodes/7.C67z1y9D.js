import"../chunks/DsnmJJEf.js";import{p as Q,c as q,f,s as t,a as A,d as C,Q as $,b as o,a0 as a,r as S,a1 as D,t as P,e as k,bs as F,i as z,a5 as G}from"../chunks/WhgF38LA.js";import{C as n}from"../chunks/CWLs1pnN.js";import{g as J}from"../chunks/CILXeftM.js";import{A as v}from"../chunks/sv_mw_JU.js";import{T as K}from"../chunks/BN8icDEM.js";import{T,a as y}from"../chunks/yApgEaLf.js";var O=f("<!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!>",1),U=f(`<!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>AlertButton</code> may be better.</p> <!> <!> <p> </p>`,1),V=f("the <code>color</code> prop overrides the status color",1),X=f(`<!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!>`,1),Z=f("<section><aside>⚠️ This API is unfinished and will likely change.</aside></section> <section><!> <!> <!></section> <!> <!> <!>",1);function it(L,N){Q(N,!0);const W=J("Alert");let g=G(0);K(L,{get tome(){return W},children:(Y,et)=>{var I=Z(),x=t(A(I),2),w=C(x);n(w,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var E=t(w,2);n(E,{content:"<Alert>info</Alert>"});var j=t(E,2);v(j,{children:(u,b)=>{a();var r=$("info");o(u,r)},$$slots:{default:!0}}),S(x);var M=t(x,2);T(M,{children:(u,b)=>{var r=O(),l=A(r);y(l,{text:"With custom icon"});var c=t(l,4);n(c,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var i=t(c,2);v(i,{icon:"▷",children:(_,p)=>{a();var s=$("icon as a string prop");o(_,s)},$$slots:{default:!0}});var d=t(i,2);n(d,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var h=t(d,2);v(h,{icon:(p,s=D)=>{a();var e=$();P(()=>k(e,`${s()??""}◡${s()??""}`)),o(p,e)},children:(p,s)=>{a();var e=$("icon as a snippet");o(p,e)},$$slots:{icon:!0,default:!0}}),o(u,r)},$$slots:{default:!0}});var R=t(M,2);T(R,{children:(u,b)=>{var r=U(),l=A(r);y(l,{text:"As optional button"});var c=t(l,4);n(c,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var i=t(c,2);v(i,{onclick:()=>F(g),children:(_,p)=>{a();var s=$();P(e=>k(s,`alerts can be buttons${e??""}`),[()=>".".repeat(z(g))]),o(_,s)},$$slots:{default:!0}});var d=t(i,2),h=C(d);S(d),P(()=>k(h,`clicks: ${z(g)??""}`)),o(u,r)},$$slots:{default:!0}});var H=t(R,2);T(H,{children:(u,b)=>{var r=X(),l=A(r);y(l,{text:"With custom status"});var c=t(l,4);n(c,{content:`// @ryanatkn/fuz/alert.js
export type AlertStatus = 'inform' | 'help' | 'error';`,lang:"ts"});var i=t(c,2);n(i,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var d=t(i,2);v(d,{status:"error",children:(e,B)=>{a();var m=$("the computer is mistaken");o(e,m)},$$slots:{default:!0}});var h=t(d,2);n(h,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var _=t(h,2);v(_,{status:"help",children:(e,B)=>{a();var m=$("here's how to fix it");o(e,m)},$$slots:{default:!0}});var p=t(_,2);n(p,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var s=t(p,2);v(s,{status:"help",color:"var(--color_d_5)",children:(e,B)=>{a();var m=V();a(2),o(e,m)},$$slots:{default:!0}}),o(u,r)},$$slots:{default:!0}}),o(Y,I)},$$slots:{default:!0}}),q()}export{it as component};
