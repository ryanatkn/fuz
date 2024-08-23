import{b as C,a as y,t as N}from"../chunks/disclose-version.DcVMHsl4.js";import{p as P,a as Y,f as z,g as e,F as _,a5 as v,c as o,s as t,n as m,r as s,d as F}from"../chunks/runtime.DbtEYBdD.js";import{e as O}from"../chunks/utils.C7dA-JMV.js";import{b as k}from"../chunks/this.D2QOTIbN.js";import{C as w}from"../chunks/Code.BKk6RzAF.js";import{g as U}from"../chunks/tome.DTaX32zK.js";import{T as j}from"../chunks/Teleport.CwkbiBwW.js";import{T as q}from"../chunks/Tome_Detail.BxUEs8Nb.js";import{T as G}from"../chunks/Tome_Link.DSmQcCnu.js";var H=(u,r)=>_(r,!e(r)),J=N(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function rt(u,r){P(r,!0);const M=U("Teleport");let f=v(!0),n=v(void 0),i=v(void 0);q(u,{tome:M,children:(R,Q)=>{var h=J(),l=z(h),b=o(l),x=t(o(b));G(x,{name:"Dialog"}),m(),s(b),m(2),s(l);var p=t(l,2),d=o(p),A=o(d);w(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var E=t(d,2);w(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g),I=F(()=>e(f)?e(n):e(i));j(T,{get to(){return e(I)},children:(a,S)=>{m();var B=C("🐰");y(a,B)},$$slots:{default:!0}});var c=t(T,2),$=o(c);k($,a=>_(n,a),()=>e(n));var D=t($,2);k(D,a=>_(i,a),()=>e(i)),s(c);var L=t(c,2);L.__click=[H,f],s(g),y(R,h)},$$slots:{default:!0}}),Y()}O(["click"]);export{rt as component};
