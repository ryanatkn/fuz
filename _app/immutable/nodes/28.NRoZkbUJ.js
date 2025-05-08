import{t as C,k as L,a as k,m as Y}from"../chunks/CiDQTsPF.js";import{p as B,a as D,f as N,s as t,c as s,g as e,Y as m,X as v,V as _,r as o,u as P}from"../chunks/BwMJFMlG.js";import{b as $}from"../chunks/CaCZp8p2.js";import{C as w}from"../chunks/BEQQKOKv.js";import{g as O}from"../chunks/DsSRnsEa.js";import{T as U}from"../chunks/CwAvIVfU.js";import{T as V}from"../chunks/-O4meYE2.js";import{T as X}from"../chunks/5niNWyUu.js";var F=(u,n)=>m(n,!e(n)),G=C(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1nzkqjy"><div class="panel svelte-1nzkqjy"></div> <div class="panel svelte-1nzkqjy"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){B(n,!0);const x=O("Teleport");let f=v(!0),r=v(void 0),i=v(void 0);V(u,{tome:x,children:(M,J)=>{var h=G(),l=N(h),b=s(l),R=t(s(b));X(R,{name:"Dialog"}),_(),o(b),_(2),o(l);var p=t(l,2),c=s(p),z=s(c);w(z,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),o(c);var A=t(c,2);w(A,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),o(p);var g=t(p,2),T=s(g);const E=P(()=>e(f)?e(r):e(i));U(T,{get to(){return e(E)},children:(a,K)=>{_();var q=L("🐰");k(a,q)},$$slots:{default:!0}});var d=t(T,2),y=s(d);$(y,a=>m(r,a),()=>e(r));var I=t(y,2);$(I,a=>m(i,a),()=>e(i)),o(d);var j=t(d,2);j.__click=[F,f],o(g),k(M,h)},$$slots:{default:!0}}),D()}Y(["click"]);export{at as component};
