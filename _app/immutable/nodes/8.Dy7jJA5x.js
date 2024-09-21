import{a as e,t as h,g as $}from"../chunks/disclose-version.C-Ww6_-A.js";import{p as q,f as A,a as D,s as t,aI as F,t as P,c as C,ah as s,r as S,ag as G,g as z,ai as J}from"../chunks/runtime.bViC5kxD.js";import{s as k}from"../chunks/render.HNLfjup5.js";import{C as n}from"../chunks/Code.CVPzi4QU.js";import{g as K}from"../chunks/tome.BNJ_Ln0v.js";import{A as v}from"../chunks/Alert.D5dWWXIS.js";import{T as O}from"../chunks/Tome_Content.TLTK8WGI.js";import{T,a as y}from"../chunks/Tome_Section_Header.OkKmkifX.js";var Q=h("<!> <p><code>icon</code> can be a string prop or snippet:</p> <!> <!> <!> <!>",1),U=h(`<!> <p>Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.</p> <!> <!> <p> </p>`,1),V=h("the <code>color</code> prop overrides the status color",1),X=h(`<!> <p>The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.</p> <!> <!> <!> <!> <!> <!> <!>`,1),Z=h("<section><!> <!> <!></section> <!> <!> <!>",1);function pt(L,N){q(N,!0);const W=K("Alert");let g=J(0);O(L,{tome:W,children:(Y,et)=>{var I=Z(),x=A(I),E=C(x);n(E,{content:"import Alert from '@ryanatkn/fuz/Alert.svelte';",lang:"ts"});var M=t(E,2);n(M,{content:"<Alert>info</Alert>"});var j=t(M,2);v(j,{children:(_,b)=>{s();var o=$("info");e(_,o)},$$slots:{default:!0}}),S(x);var R=t(x,2);T(R,{children:(_,b)=>{var o=Q(),l=A(o);y(l,{text:"With custom icon"});var c=t(l,4);n(c,{content:`<Alert icon="▷">
	icon as a string prop
</Alert>`});var i=t(c,2);v(i,{icon:"▷",children:(u,d)=>{s();var r=$("icon as a string prop");e(u,r)},$$slots:{default:!0}});var p=t(i,2);n(p,{content:`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`});var m=t(p,2);v(m,{icon:(d,r=G)=>{s();var a=$();P(()=>k(a,`${r()??""}◡${r()??""}`)),e(d,a)},children:(d,r)=>{s();var a=$("icon as a snippet");e(d,a)},$$slots:{default:!0}}),e(_,o)},$$slots:{default:!0}});var w=t(R,2);T(w,{children:(_,b)=>{var o=U(),l=A(o);y(l,{text:"As optional button"});var c=t(l,4);n(c,{content:`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`});var i=t(c,2);v(i,{onclick:()=>F(g),children:(u,d)=>{s();var r=$();P(()=>k(r,`alerts can be buttons${".".repeat(z(g))??""}`)),e(u,r)},$$slots:{default:!0}});var p=t(i,2),m=C(p);S(p),P(()=>k(m,`clicks: ${z(g)??""}`)),e(_,o)},$$slots:{default:!0}});var H=t(w,2);T(H,{children:(_,b)=>{var o=X(),l=A(o);y(l,{text:"With custom status"});var c=t(l,4);n(c,{content:`// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';`,lang:"ts"});var i=t(c,2);n(i,{content:`<Alert status="error">
	the computer is mistaken
</Alert>`});var p=t(i,2);v(p,{status:"error",children:(a,B)=>{s();var f=$("the computer is mistaken");e(a,f)},$$slots:{default:!0}});var m=t(p,2);n(m,{content:`<Alert status="help">
	here's how to fix it
</Alert>`});var u=t(m,2);v(u,{status:"help",children:(a,B)=>{s();var f=$("here's how to fix it");e(a,f)},$$slots:{default:!0}});var d=t(u,2);n(d,{content:`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`});var r=t(d,2);v(r,{status:"help",color:"var(--color_d_5)",children:(a,B)=>{s();var f=V();s(2),e(a,f)},$$slots:{default:!0}}),e(_,o)},$$slots:{default:!0}}),e(Y,I)},$$slots:{default:!0}}),D()}export{pt as component};