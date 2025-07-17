import"../chunks/CWj6FrbW.js";import{p as C,c as L,f as N,a as B,s as t,d as o,am as D,b as k,h as e,aq as m,ap as v,an as _,r as s,u as P,aN as Y}from"../chunks/DpDn43ma.js";import{b as $}from"../chunks/C7blHE0M.js";import{C as w}from"../chunks/CGW2Az-c.js";import{g as O}from"../chunks/C6cJycfR.js";import{T as U}from"../chunks/C3bvAlJi.js";import{T as F}from"../chunks/BiCD2hV9.js";import{T as G}from"../chunks/A17g_MCO.js";var H=(u,n)=>m(n,!e(n)),J=N(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1nzkqjy"><div class="panel svelte-1nzkqjy"></div> <div class="panel svelte-1nzkqjy"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){C(n,!0);const x=O("Teleport");let h=v(!0),r=v(void 0),i=v(void 0);F(u,{get tome(){return x},children:(M,Q)=>{var f=J(),l=B(f),b=o(l),R=t(o(b));G(R,{name:"Dialog"}),_(),s(b),_(2),s(l);var p=t(l,2),d=o(p),q=o(d);w(q,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var z=t(d,2);w(z,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g);const A=P(()=>e(h)?e(r):e(i));U(T,{get to(){return e(A)},children:(a,S)=>{_();var j=D("🐰");k(a,j)},$$slots:{default:!0}});var c=t(T,2),y=o(c);$(y,a=>m(r,a),()=>e(r));var E=t(y,2);$(E,a=>m(i,a),()=>e(i)),s(c);var I=t(c,2);I.__click=[H,h],s(g),k(M,f)},$$slots:{default:!0}}),L()}Y(["click"]);export{at as component};
