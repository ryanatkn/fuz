import"../chunks/DsnmJJEf.js";import{p as L,c as B,f as D,a as N,s as t,d as o,am as P,b as y,i as e,k as m,l as c,n as _,r as s,u as Y,aA as O}from"../chunks/BElm8bt9.js";import{b as k}from"../chunks/VROXyBOs.js";import{C as x}from"../chunks/JTQcVK_f.js";import{g as U}from"../chunks/BHlF-VH_.js";import{T as j}from"../chunks/CBp_DxPL.js";import{T as F}from"../chunks/CwfrO8Bg.js";import{T as G}from"../chunks/D6Et588g.js";var H=(u,r)=>m(r,!e(r)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1azxbq4"><div class="panel svelte-1azxbq4"></div> <div class="panel svelte-1azxbq4"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,r){L(r,!0);const w=U("Teleport");let b=c(!0),n=c(void 0),i=c(void 0);F(u,{get tome(){return w},children:(A,Q)=>{var h=J(),l=N(h),f=o(l),M=t(o(f));G(M,{name:"Dialog"}),_(),s(f),_(2),s(l);var p=t(l,2),d=o(p),R=o(d);x(R,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var z=t(d,2);x(z,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g);{let a=Y(()=>e(b)?e(n):e(i));j(T,{get to(){return e(a)},children:(q,S)=>{_();var C=P("🐰");y(q,C)},$$slots:{default:!0}})}var v=t(T,2),$=o(v);k($,a=>m(n,a),()=>e(n));var E=t($,2);k(E,a=>m(i,a),()=>e(i)),s(v);var I=t(v,2);I.__click=[H,b],s(g),y(A,h)},$$slots:{default:!0}}),B()}O(["click"]);export{at as component};
