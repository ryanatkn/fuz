import{b as Y,a as i,t as M,f as b,s as e,c as o}from"../chunks/disclose-version.Ddj0amtR.js";import{p as z,m as p,g as t,a as F,F as l,d as O}from"../chunks/runtime.N2A2yyIi.js";import{d as U}from"../chunks/render.UwBO_r64.js";import{b as y}from"../chunks/this.DR5cQyoW.js";import{p as k}from"../chunks/proxy.Dw-yJxJX.js";import{C as w}from"../chunks/Code.DLdTgamv.js";import{g as j}from"../chunks/tome.60teOZbE.js";import{T as q}from"../chunks/Teleport.Czhw44_g.js";import{T as G}from"../chunks/Tome_Detail.ClDJyqdD.js";import{T as H}from"../chunks/Tome_Link.BrUggbaM.js";var J=M("🐰",1),K=(d,r)=>p(r,!t(r)),Q=M(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button>teleport the bunny</button></section>`,1);function le(d,r){F(r,!0);const R=j("Teleport");let m=l(!0),a=l(void 0),n=l(void 0);var v=Y(),A=b(v);G(A,{tome:R,children:(D,V)=>{var c=Q(),_=b(c),E=o(_),I=e(o(E));H(I,{name:"Dialog"});var u=e(e(_,!0)),f=o(u),$=o(f);w($,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"});var L=e(e(f,!0));w(L,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`});var x=e(e(u,!0)),h=o(x),B=O(()=>t(m)?t(a):t(n));q(h,{get to(){return t(B)},children:(s,W)=>{var P=J();i(s,P)}});var g=e(e(h,!0)),T=o(g);y(T,s=>p(a,k(s)),()=>t(a));var C=e(e(T,!0));y(C,s=>p(n,k(s)),()=>t(n));var N=e(e(g,!0));N.__click=[K,m],i(D,c)}}),i(d,v),z()}U(["click"]);export{le as component};
