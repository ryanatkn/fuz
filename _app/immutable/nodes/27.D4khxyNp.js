import{a as $,t as D,j as N,k as P}from"../chunks/disclose-version.qccFV9AM.js";import{f as Y,p as j,G as _,g as e,a as z,a6 as c,s as t,k as o,a4 as m,l as s,d as G}from"../chunks/runtime.B2HyCRSG.js";import{b as k}from"../chunks/this.ixia0uAj.js";import{C as w}from"../chunks/Code.CziE7ju_.js";import{g as O}from"../chunks/tome.BRswXeJT.js";import{T as U}from"../chunks/Teleport.CkXMKxPc.js";import{T as q}from"../chunks/Tome_Content.BBL2WRov.js";import{T as F}from"../chunks/Tome_Link.B-GIcaJ5.js";var H=(u,n)=>_(n,!e(n)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){z(n,!0);const M=O("Teleport");let f=c(!0),r=c(void 0),i=c(void 0);q(u,{tome:M,children:(R,Q)=>{var h=J(),l=Y(h),b=o(l),x=t(o(b));F(x,{name:"Dialog"}),m(),s(b),m(2),s(l);var p=t(l,2),d=o(p),A=o(d);w(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var E=t(d,2);w(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g),I=G(()=>e(f)?e(r):e(i));U(T,{get to(){return e(I)},children:(a,S)=>{m();var B=N("🐰");$(a,B)},$$slots:{default:!0}});var v=t(T,2),y=o(v);k(y,a=>_(r,a),()=>e(r));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),s(v);var L=t(v,2);L.__click=[H,f],s(g),$(R,h)},$$slots:{default:!0}}),j()}P(["click"]);export{at as component};
