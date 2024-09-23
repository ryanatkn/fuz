import{a as $,t as D,g as N,l as P}from"../chunks/disclose-version.D7hgbcr2.js";import{p as Y,f as j,a as z,M as _,g as e,aj as v,s as t,c as o,ai as m,r as s,d as O}from"../chunks/runtime.CyUAaF6i.js";import{b as k}from"../chunks/this.CmLMfmHa.js";import{C as M}from"../chunks/Code.Bq1kX1g6.js";import{g as U}from"../chunks/tome.BinCi5xK.js";import{T as q}from"../chunks/Teleport.BHyis3Ab.js";import{T as F}from"../chunks/Tome_Content.X8f4k4dB.js";import{T as G}from"../chunks/Tome_Link.BxDH6SAD.js";var H=(u,n)=>_(n,!e(n)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){Y(n,!0);const w=U("Teleport");let f=v(!0),r=v(void 0),i=v(void 0);F(u,{tome:w,children:(R,Q)=>{var h=J(),l=j(h),b=o(l),x=t(o(b));G(x,{name:"Dialog"}),m(),s(b),m(2),s(l);var p=t(l,2),d=o(p),A=o(d);M(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var E=t(d,2);M(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g),I=O(()=>e(f)?e(r):e(i));q(T,{get to(){return e(I)},children:(a,S)=>{m();var B=N("🐰");$(a,B)},$$slots:{default:!0}});var c=t(T,2),y=o(c);k(y,a=>_(r,a),()=>e(r));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),s(c);var L=t(c,2);L.__click=[H,f],s(g),$(R,h)},$$slots:{default:!0}}),z()}P(["click"]);export{at as component};
