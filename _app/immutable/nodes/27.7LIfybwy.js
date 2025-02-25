import{t as D,j as N,a as $,k as P}from"../chunks/CbbyqTNh.js";import{p as Y,a as j,f as z,s as t,k as s,g as e,G as _,a2 as v,a0 as m,l as o,d as G}from"../chunks/C9aPwLmV.js";import{b as k}from"../chunks/C4iwTAZ8.js";import{C as w}from"../chunks/B0TzJDWH.js";import{g as O}from"../chunks/CkkassG4.js";import{T as U}from"../chunks/CNwAJ-75.js";import{T as q}from"../chunks/Bd5zx37R.js";import{T as F}from"../chunks/LYi2sWAb.js";var H=(u,n)=>_(n,!e(n)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){Y(n,!0);const x=O("Teleport");let f=v(!0),r=v(void 0),i=v(void 0);q(u,{tome:x,children:(M,Q)=>{var h=J(),l=z(h),b=s(l),R=t(s(b));F(R,{name:"Dialog"}),m(),o(b),m(2),o(l);var p=t(l,2),d=s(p),A=s(d);w(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),o(d);var E=t(d,2);w(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),o(p);var g=t(p,2),T=s(g);const I=G(()=>e(f)?e(r):e(i));U(T,{get to(){return e(I)},children:(a,S)=>{m();var B=N("🐰");$(a,B)},$$slots:{default:!0}});var c=t(T,2),y=s(c);k(y,a=>_(r,a),()=>e(r));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),o(c);var L=t(c,2);L.__click=[H,f],o(g),$(M,h)},$$slots:{default:!0}}),j()}P(["click"]);export{at as component};
