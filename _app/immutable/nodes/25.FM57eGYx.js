import{b as Y,a as i,t as M,f as b,s as e,c as o}from"../chunks/disclose-version.5tIm47j5.js";import{p as z,a as H,g as t,t as p,H as l,d as O}from"../chunks/runtime.BhNP7HCo.js";import{d as U}from"../chunks/render.YxUbVe5A.js";import{p as y}from"../chunks/proxy.CFT7Wq3v.js";import{b as k}from"../chunks/this.DXh_fvnH.js";import{C as w}from"../chunks/Code.DoKnE_1e.js";import{g as j}from"../chunks/tome.DYc5lYMi.js";import{T as q}from"../chunks/Teleport.755hxKNX.js";import{T as F}from"../chunks/Tome_Detail.CJYxL4Kh.js";import{T as G}from"../chunks/Tome_Link.dW5nX03T.js";var J=M("🐰",1),K=(d,r)=>p(r,!t(r)),Q=M(`<section><p>Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <!> uses this to mount dialogs from any component without inheriting styles.</p> <aside><p>Use only when necessary or fun.</p></aside></section> <section><div class="mb_lg"><!></div> <!></section> <section><!> <div class="teleports svelte-1lm68os"><div class="panel svelte-1lm68os"></div> <div class="panel svelte-1lm68os"></div></div> <button>teleport the bunny</button></section>`,1);function le(d,r){z(r,!0);const R=j("Teleport");let m=l(!0),a=l(void 0),n=l(void 0);var v=Y(),A=b(v);F(A,{tome:R,children:(D,V)=>{var c=Q(),_=b(c),E=o(_),I=e(o(E));G(I,{name:"Dialog"});var u=e(e(_,!0)),f=o(u),$=o(f);w($,{content:"import Teleport from '@ryanatkn/fuz/Teleport.svelte';",lang:"ts"});var L=e(e(f,!0));w(L,{content:`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`});var x=e(e(u,!0)),h=o(x),B=O(()=>t(m)?t(a):t(n));q(h,{get to(){return t(B)},children:(s,W)=>{var P=J();i(s,P)}});var g=e(e(h,!0)),T=o(g);k(T,s=>p(a,y(s)),()=>t(a));var C=e(e(T,!0));k(C,s=>p(n,y(s)),()=>t(n));var N=e(e(g,!0));N.__click=[K,m],i(D,c)}}),i(d,v),H()}U(["click"]);export{le as component};
