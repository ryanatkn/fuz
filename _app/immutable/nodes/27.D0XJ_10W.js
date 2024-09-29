import{a as $,t as D,g as N,l as P}from"../chunks/disclose-version.DkCpnmWz.js";import{p as Y,f as z,a as J,J as _,g as e,a5 as v,s as t,c as o,a4 as m,r as s,d as O}from"../chunks/runtime.BsoL6_G0.js";import{b as k}from"../chunks/this.Bj6-2nos.js";import{C as w}from"../chunks/Code.DDrBXyxH.js";import{g as U}from"../chunks/tome.C1LBsZpm.js";import{T as j}from"../chunks/Teleport.QUZqeVGH.js";import{T as q}from"../chunks/Tome_Content.zFEywe-m.js";import{T as F}from"../chunks/Tome_Link.BQT8-L2L.js";var G=(u,n)=>_(n,!e(n)),H=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){Y(n,!0);const M=U("Teleport");let f=v(!0),r=v(void 0),i=v(void 0);q(u,{tome:M,children:(R,Q)=>{var h=H(),l=z(h),b=o(l),x=t(o(b));F(x,{name:"Dialog"}),m(),s(b),m(2),s(l);var p=t(l,2),d=o(p),A=o(d);w(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var E=t(d,2);w(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g),I=O(()=>e(f)?e(r):e(i));j(T,{get to(){return e(I)},children:(a,S)=>{m();var B=N("🐰");$(a,B)},$$slots:{default:!0}});var c=t(T,2),y=o(c);k(y,a=>_(r,a),()=>e(r));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),s(c);var L=t(c,2);L.__click=[G,f],s(g),$(R,h)},$$slots:{default:!0}}),J()}P(["click"]);export{at as component};
