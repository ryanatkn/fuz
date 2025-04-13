import{t as D,j as N,a as $,k as P}from"../chunks/DoRN4M-o.js";import{p as Y,a as j,f as z,s as t,k as s,g as e,J as _,a4 as c,a2 as m,l as o,u as J}from"../chunks/CLNC1iHR.js";import{b as k}from"../chunks/8RlZCxH-.js";import{C as w}from"../chunks/DeLZ0-Bp.js";import{g as O}from"../chunks/Cmf78iW_.js";import{T as U}from"../chunks/4G7WVVPu.js";import{T as q}from"../chunks/DRS3UrDn.js";import{T as F}from"../chunks/UAw5DVWu.js";var G=(u,r)=>_(r,!e(r)),H=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,r){Y(r,!0);const x=O("Teleport");let f=c(!0),n=c(void 0),i=c(void 0);q(u,{tome:x,children:(M,Q)=>{var h=H(),l=z(h),b=s(l),R=t(s(b));F(R,{name:"Dialog"}),m(),o(b),m(2),o(l);var p=t(l,2),d=s(p),A=s(d);w(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),o(d);var E=t(d,2);w(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),o(p);var g=t(p,2),T=s(g);const I=J(()=>e(f)?e(n):e(i));U(T,{get to(){return e(I)},children:(a,S)=>{m();var B=N("🐰");$(a,B)},$$slots:{default:!0}});var v=t(T,2),y=s(v);k(y,a=>_(n,a),()=>e(n));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),o(v);var L=t(v,2);L.__click=[G,f],o(g),$(M,h)},$$slots:{default:!0}}),j()}P(["click"]);export{at as component};
