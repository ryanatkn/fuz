import{t as B,k as D,a as $,m as N}from"../chunks/BVHb_Il8.js";import{p as P,a as z,f as O,s as t,c as s,g as e,Y as _,X as v,V as m,r as o,u as U}from"../chunks/KxkgHfFn.js";import{b as k}from"../chunks/CBbEanmN.js";import{C as w}from"../chunks/kRT7KGBF.js";import{g as V}from"../chunks/BSAS3wBa.js";import{T as X}from"../chunks/CepesTCt.js";import{T as j}from"../chunks/CzKwTOie.js";import{T as q}from"../chunks/CLj9B3mj.js";var F=(u,r)=>_(r,!e(r)),G=B(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,r){P(r,!0);const x=V("Teleport");let f=v(!0),n=v(void 0),i=v(void 0);j(u,{tome:x,children:(M,J)=>{var h=G(),l=O(h),b=s(l),R=t(s(b));q(R,{name:"Dialog"}),m(),o(b),m(2),o(l);var p=t(l,2),c=s(p),A=s(c);w(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),o(c);var E=t(c,2);w(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),o(p);var g=t(p,2),T=s(g);const I=U(()=>e(f)?e(n):e(i));X(T,{get to(){return e(I)},children:(a,K)=>{m();var Y=D("🐰");$(a,Y)},$$slots:{default:!0}});var d=t(T,2),y=s(d);k(y,a=>_(n,a),()=>e(n));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),o(d);var L=t(d,2);L.__click=[F,f],o(g),$(M,h)},$$slots:{default:!0}}),z()}N(["click"]);export{at as component};
