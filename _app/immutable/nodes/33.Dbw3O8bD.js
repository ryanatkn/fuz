import"../chunks/DsnmJJEf.js";import{p as L,c as B,f as D,a as N,s as t,d as o,a7 as P,b as y,i as e,ap as m,aA as c,n as _,r as s,u as Y,az as O}from"../chunks/CCvlg-B_.js";import{b as x}from"../chunks/Cwi3i6rU.js";import{C as k}from"../chunks/CrxF6GP3.js";import{g as U}from"../chunks/BM1lFVNV.js";import{T as j}from"../chunks/AonMIShb.js";import{T as F}from"../chunks/CHq7LPwo.js";import{T as G}from"../chunks/i1xGGcVm.js";var H=(u,r)=>m(r,!e(r)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1azxbq4"><div class="panel svelte-1azxbq4"></div> <div class="panel svelte-1azxbq4"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,r){L(r,!0);const w=U("Teleport");let b=c(!0),n=c(void 0),i=c(void 0);F(u,{get tome(){return w},children:(z,Q)=>{var h=J(),l=N(h),f=o(l),A=t(o(f));G(A,{name:"Dialog"}),_(),s(f),_(2),s(l);var p=t(l,2),d=o(p),M=o(d);k(M,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var R=t(d,2);k(R,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g);{let a=Y(()=>e(b)?e(n):e(i));j(T,{get to(){return e(a)},children:(q,S)=>{_();var C=P("🐰");y(q,C)},$$slots:{default:!0}})}var v=t(T,2),$=o(v);x($,a=>m(n,a),()=>e(n));var E=t($,2);x(E,a=>m(i,a),()=>e(i)),s(v);var I=t(v,2);I.__click=[H,b],s(g),y(z,h)},$$slots:{default:!0}}),B()}O(["click"]);export{at as component};
