import{t as h,a as o,j as $}from"../chunks/C3a0MWKm.js";import{p as Q,a as X,f as A,Z as C,s as t,a3 as s,_ as S,a2 as Z,X as P,aQ as q,g as j,a5 as D}from"../chunks/CBcvYSsl.js";import{s as k}from"../chunks/DQ8o1HLG.js";import{C as n}from"../chunks/sas11ncx.js";import{g as F}from"../chunks/DzFw_MwK.js";import{A as v}from"../chunks/D2eBZZxM.js";import{T as G}from"../chunks/1bEN7zfF.js";import{T,a as y}from"../chunks/Bb-sAynS.js";var J=h("<!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!>",1),K=h(`<!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p>`,1),O=h("the <code>color</code> prop overrides the status color",1),U=h(`<!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!>`,1),V=h("<section><!> <!> <!></section> <!> <!> <!>",1);function pt(z,L){Q(L,!0);const N=F("Alert");let g=D(0);G(z,{tome:N,children:(W,et)=>{var I=V(),x=A(I),E=C(x);n(E,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var M=t(E,2);n(M,{content:"<Alert>info</Alert>"});var Y=t(M,2);v(Y,{children:(_,b)=>{s();var r=$("info");o(_,r)},$$slots:{default:!0}}),S(x);var R=t(x,2);T(R,{children:(_,b)=>{var r=J(),l=A(r);y(l,{text:"With custom icon"});var c=t(l,4);n(c,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var i=t(c,2);v(i,{icon:"▷",children:(u,d)=>{s();var a=$("icon as a string prop");o(u,a)},$$slots:{default:!0}});var p=t(i,2);n(p,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var m=t(p,2);v(m,{icon:(d,a=Z)=>{s();var e=$();P(()=>k(e,`${a()??""}◡${a()??""}`)),o(d,e)},children:(d,a)=>{s();var e=$("icon as a snippet");o(d,e)},$$slots:{icon:!0,default:!0}}),o(_,r)},$$slots:{default:!0}});var w=t(R,2);T(w,{children:(_,b)=>{var r=K(),l=A(r);y(l,{text:"As optional button"});var c=t(l,4);n(c,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var i=t(c,2);v(i,{onclick:()=>q(g),children:(u,d)=>{s();var a=$();P(e=>k(a,`alerts can be buttons${e??""}`),[()=>".".repeat(j(g))]),o(u,a)},$$slots:{default:!0}});var p=t(i,2),m=C(p);S(p),P(()=>k(m,`clicks: ${j(g)??""}`)),o(_,r)},$$slots:{default:!0}});var H=t(w,2);T(H,{children:(_,b)=>{var r=U(),l=A(r);y(l,{text:"With custom status"});var c=t(l,4);n(c,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var i=t(c,2);n(i,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var p=t(i,2);v(p,{status:"error",children:(e,B)=>{s();var f=$("the computer is mistaken");o(e,f)},$$slots:{default:!0}});var m=t(p,2);n(m,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var u=t(m,2);v(u,{status:"help",children:(e,B)=>{s();var f=$("here's how to fix it");o(e,f)},$$slots:{default:!0}});var d=t(u,2);n(d,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var a=t(d,2);v(a,{status:"help",color:"var(--color_d_5)",children:(e,B)=>{s();var f=O();s(2),o(e,f)},$$slots:{default:!0}}),o(_,r)},$$slots:{default:!0}}),o(W,I)},$$slots:{default:!0}}),X()}export{pt as component};
