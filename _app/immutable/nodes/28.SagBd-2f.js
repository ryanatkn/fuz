import"../chunks/DsnmJJEf.js";import{p as C,c as L,f as B,a as D,s as t,d as o,aq as N,b as $,h as e,at as m,au as c,ar as _,r as s,u as P,aV as Y}from"../chunks/hvi78P_d.js";import{b as k}from"../chunks/B63KIICj.js";import{C as w}from"../chunks/BK81am7X.js";import{g as O}from"../chunks/DKsCkxQO.js";import{T as U}from"../chunks/Blb6Ag5K.js";import{T as V}from"../chunks/BMnVpRjX.js";import{T as F}from"../chunks/cr5XZsAN.js";var G=(u,r)=>m(r,!e(r)),H=B(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1nzkqjy"><div class="panel svelte-1nzkqjy"></div> <div class="panel svelte-1nzkqjy"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,r){C(r,!0);const M=O("Teleport");let h=c(!0),n=c(void 0),i=c(void 0);V(u,{get tome(){return M},children:(R,K)=>{var f=H(),l=D(f),b=o(l),q=t(o(b));F(q,{name:"Dialog"}),_(),s(b),_(2),s(l);var p=t(l,2),d=o(p),x=o(d);w(x,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var z=t(d,2);w(z,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g);{let a=P(()=>e(h)?e(n):e(i));U(T,{get to(){return e(a)},children:(I,Q)=>{_();var j=N("🐰");$(I,j)},$$slots:{default:!0}})}var v=t(T,2),y=o(v);k(y,a=>m(n,a),()=>e(n));var A=t(y,2);k(A,a=>m(i,a),()=>e(i)),s(v);var E=t(v,2);E.__click=[G,h],s(g),$(R,f)},$$slots:{default:!0}}),L()}Y(["click"]);export{at as component};
