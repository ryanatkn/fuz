import{a as b,t as $,s as t,c as o,f as B}from"../chunks/disclose-version.BHqvyKx-.js";import{p as N,a as P,g as e,n as l,C as i,d as Y}from"../chunks/runtime.VNSPx__r.js";import{d as z}from"../chunks/render.BZs1ZF8H.js";import{p as g}from"../chunks/proxy.CO2BnZf8.js";import{b as T}from"../chunks/this.DdQ07oED.js";import{C as y}from"../chunks/Code.DpsevpDf.js";import{g as O}from"../chunks/tome.BuafWkLb.js";import{T as U}from"../chunks/Teleport.8Q6-0uKe.js";import{T as j}from"../chunks/Tome_Detail.C03oix-c.js";import{T as q}from"../chunks/Tome_Link.DC6mwEJ9.js";var F=$("🐰",1),G=(p,r)=>l(r,!e(r)),H=$(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button type="button">teleport the bunny</button></section>`,1);function at(p,r){N(r,!0);const k=O("Teleport");let d=i(!0),a=i(void 0),n=i(void 0);j(p,{tome:k,children:(w,K)=>{var c=H(),v=B(c),M=o(v),R=t(o(M));q(R,{name:"Dialog"});var m=t(t(v,!0)),u=o(m),A=o(u);y(A,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"});var E=t(t(u,!0));y(E,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`});var I=t(t(m,!0)),_=o(I),C=Y(()=>e(d)?e(a):e(n));U(_,{get to(){return e(C)},children:(s,Q)=>{var x=F();b(s,x)},$$slots:{default:!0}});var f=t(t(_,!0)),h=o(f);T(h,s=>l(a,g(s)),()=>e(a));var D=t(t(h,!0));T(D,s=>l(n,g(s)),()=>e(n));var L=t(t(f,!0));L.__click=[G,d],b(w,c)},$$slots:{default:!0}}),P()}z(["click"]);export{at as component};
