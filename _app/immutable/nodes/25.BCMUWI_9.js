import"../chunks/DsnmJJEf.js";import{p as L,c as B,f as D,a as N,s as t,d as s,Q as P,b as T,i as e,a4 as c,a5 as m,a0 as _,r as o,u as Y,a2 as O}from"../chunks/WhgF38LA.js";import{b as $}from"../chunks/B5t3gs10.js";import{C as y}from"../chunks/Iq2lMGNq.js";import{g as Q}from"../chunks/DeRzEwRk.js";import{T as U}from"../chunks/CRhlw6cw.js";import{T as j}from"../chunks/B5D2gklu.js";import{T as F}from"../chunks/C-pBZf7j.js";var G=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1plz9q4"><div class="panel svelte-1plz9q4"></div> <div class="panel svelte-1plz9q4"></div></div> <button type="button">teleport the bunny</button></section>`,1);function ot(w,k){L(k,!0);const M=Q("Teleport");let r=m(!0),n=m(void 0),i=m(void 0);j(w,{get tome(){return M},children:(R,J)=>{var u=G(),l=N(u),h=s(l),x=t(s(h));F(x,{name:"Dialog"}),_(),o(h),_(2),o(l);var p=t(l,2),d=s(p),z=s(d);y(z,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),o(d);var A=t(d,2);y(A,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),o(p);var f=t(p,2),b=s(f);{let a=Y(()=>e(r)?e(n):e(i));U(b,{get to(){return e(a)},children:(q,K)=>{_();var C=P("🐰");T(q,C)},$$slots:{default:!0}})}var v=t(b,2),g=s(v);$(g,a=>c(n,a),()=>e(n));var E=t(g,2);$(E,a=>c(i,a),()=>e(i)),o(v);var I=t(v,2);I.__click=()=>c(r,!e(r)),o(f),T(R,u)},$$slots:{default:!0}}),B()}O(["click"]);export{ot as component};
