import{a as $,t as D,g as N,l as P}from"../chunks/disclose-version.7b59C0PR.js";import{p as Y,f as z,a as O,E as _,g as e,ao as v,s as t,c as o,an as m,r as s,d as U}from"../chunks/runtime.TFn0e1ji.js";import{b as k}from"../chunks/this.ajt3TWDz.js";import{C as w}from"../chunks/Code.B3qo1_p1.js";import{g as j}from"../chunks/tome.D0gm-ZJ6.js";import{T as q}from"../chunks/Teleport.BU6DLklz.js";import{T as F}from"../chunks/Tome_Content.aHDdZoF9.js";import{T as G}from"../chunks/Tome_Link.B64cyHwu.js";var H=(u,n)=>_(n,!e(n)),J=D(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(u,n){Y(n,!0);const E=j("Teleport");let f=v(!0),r=v(void 0),i=v(void 0);F(u,{tome:E,children:(M,Q)=>{var h=J(),l=z(h),b=o(l),R=t(o(b));G(R,{name:"Dialog"}),m(),s(b),m(2),s(l);var p=t(l,2),d=o(p),x=o(d);w(x,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"}),s(d);var A=t(d,2);w(A,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}),s(p);var g=t(p,2),T=o(g),I=U(()=>e(f)?e(r):e(i));q(T,{get to(){return e(I)},children:(a,S)=>{m();var B=N("🐰");$(a,B)},$$slots:{default:!0}});var c=t(T,2),y=o(c);k(y,a=>_(r,a),()=>e(r));var C=t(y,2);k(C,a=>_(i,a),()=>e(i)),s(c);var L=t(c,2);L.__click=[H,f],s(g),$(M,h)},$$slots:{default:!0}}),O()}P(["click"]);export{at as component};
