import"../chunks/DsnmJJEf.js";import{p as B,c as L,f as D,a as N,s as t,d as s,a8 as P,b as T,i as e,ar as c,aC as m,n as _,r as o,u as Y,aB as O}from"../chunks/DFPGRpXC.js";import{b as $}from"../chunks/uyiARXNM.js";import{C as y}from"../chunks/DXFXhwc6.js";import{g as U}from"../chunks/CBDCEcuP.js";import{T as j}from"../chunks/Db-upp8H.js";import{T as F}from"../chunks/BKgGqkWp.js";import{T as G}from"../chunks/DQAaaBUq.js";var H=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1azxbq4"><div class="panel svelte-1azxbq4"></div> <div class="panel svelte-1azxbq4"></div></div> <button type="button">teleport the bunny</button></section>`,1);function ot(x,w){B(w,!0);const k=U("Teleport");let r=m(!0),n=m(void 0),i=m(void 0);F(x,{get tome(){return k},children:(M,K)=>{var u=H(),l=N(u),b=s(l),R=t(s(b));G(R,{name:"Dialog"}),_(),o(b),_(2),o(l);var p=t(l,2),d=s(p),z=s(d);y(z,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),o(d);var A=t(d,2);y(A,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),o(p);var h=t(p,2),f=s(h);{let a=Y(()=>e(r)?e(n):e(i));j(f,{get to(){return e(a)},children:(I,Q)=>{_();var q=P("🐰");T(I,q)},$$slots:{default:!0}})}var v=t(f,2),g=s(v);$(g,a=>c(n,a),()=>e(n));var C=t(g,2);$(C,a=>c(i,a),()=>e(i)),o(v);var E=t(v,2);E.__click=()=>c(r,!e(r)),o(h),T(M,u)},$$slots:{default:!0}}),L()}O(["click"]);export{ot as component};
