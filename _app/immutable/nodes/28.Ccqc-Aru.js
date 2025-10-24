import"../chunks/DsnmJJEf.js";import{p as L,c as B,f as D,a as N,s as t,d as o,ac as P,b as y,h as e,ae as m,af as v,ad as _,r as s,u as Y,b8 as O}from"../chunks/B7qs8f6Z.js";import{b as x}from"../chunks/2LOYOryH.js";import{C as k}from"../chunks/D6MOtcoF.js";import{g as U}from"../chunks/DlLR_aGU.js";import{T as j}from"../chunks/BHQHYPbw.js";import{T as F}from"../chunks/92qYZcGG.js";import{T as G}from"../chunks/BZ5Tkezc.js";var H=(u,r)=>m(r,!e(r)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1azxbq4"><div class="panel svelte-1azxbq4"></div> <div class="panel svelte-1azxbq4"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,r){L(r,!0);const w=U("Teleport");let b=v(!0),n=v(void 0),i=v(void 0);F(u,{get tome(){return w},children:(M,Q)=>{var h=J(),l=N(h),f=o(l),R=t(o(f));G(R,{name:"Dialog"}),_(),s(f),_(2),s(l);var p=t(l,2),d=o(p),z=o(d);k(z,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var A=t(d,2);k(A,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g);{let a=Y(()=>e(b)?e(n):e(i));j(T,{get to(){return e(a)},children:(q,S)=>{_();var C=P("🐰");y(q,C)},$$slots:{default:!0}})}var c=t(T,2),$=o(c);x($,a=>m(n,a),()=>e(n));var E=t($,2);x(E,a=>m(i,a),()=>e(i)),s(c);var I=t(c,2);I.__click=[H,b],s(g),y(M,h)},$$slots:{default:!0}}),B()}O(["click"]);export{at as component};
