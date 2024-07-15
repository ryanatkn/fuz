import{a as f,t as g,s as t,c as o,r as n,f as V}from"../chunks/disclose-version.D-YpP91c.js";import{p as G,t as J,a as K,g as h,C as R,n as k}from"../chunks/runtime.CLWtUI7-.js";import{s as X}from"../chunks/render.DClLgGuB.js";import{s as A}from"../chunks/style.iv2mhl8q.js";import{p as C}from"../chunks/proxy.BywKGEcJ.js";import{C as w}from"../chunks/Code.CB3bu1ip.js";import{g as Z}from"../chunks/tome.BEaQ-Zqd.js";import{e as tt}from"../chunks/svelte-head.BslmLo-c.js";import{i as et}from"../chunks/if.t2Adprt1.js";import{r as j,s as rt,f as q}from"../chunks/attributes.laNZifmC.js";import{b as ot}from"../chunks/this.CdNU6mSA.js";import{p as nt}from"../chunks/props.B_4kgomd.js";import{T as at}from"../chunks/Tome_Detail.mIKFiUpF.js";import{T as M}from"../chunks/Tome_Subheading.ChLNFAXc.js";const F=(d,e,s)=>{const l=e(d.currentTarget.value);l!==null&&s(l)},it=(d,e,s)=>{var v;const l=d.currentTarget.getBoundingClientRect(),i=(d.clientX-l.x)/l.width;e(Math.floor(360*i)),(v=h(s))==null||v.focus()};var ut=g('<div class="title"><!></div>'),st=g('<div class="hue_input svelte-47t615"><label><!> <div class="preview svelte-47t615">hue <input type="number" step="0" class="hue svelte-47t615"></div></label> <div class="minimap_wrapper svelte-47t615"><div class="minimap svelte-47t615" aria-hidden="true"></div></div> <input type="range" aria-label="hue" min="0" max="359" class="svelte-47t615"></div>');function P(d,e){G(e,!0);let s=nt(e,"value",7,180);const l=a=>{const r=typeof a;if(r==="number")return a;if(r!=="string")return null;const p=Number(a);return Number.isNaN(p)?null:p},i=a=>{var r;s(a),(r=e.oninput)==null||r.call(e,s())};let v=R(void 0);var b=st(),H=o(b),I=o(H);et(I,()=>e.children,a=>{var r=ut(),p=o(r);rt(p,()=>e.children),n(r),f(a,r)});var x=t(t(I,!0)),$=t(o(x));j($),$.__input=[F,l,i],n(x),n(H);var _=t(t(H,!0)),T=o(_);T.__click=[it,i,v],n(_);var c=t(t(_,!0));ot(c,a=>k(v,C(a)),()=>h(v)),j(c),c.__input=[F,l,i],n(b),J(()=>{A(b,"--hue",s()),q($,s()),q(c,s())}),f(d,b),K()}tt(["input","click"]);var lt=g("With <code>bind:value</code>",1),vt=g("With <code>oninput</code>",1),dt=g("With <code>children</code>",1),_t=g("Some colorful hue input",1),ct=g('<section><!></section> <section><!> <!> <!> <div class="mt_md"><code> </code></div></section> <section><!> <!> <!> <div class="mt_md"><code> </code></div></section> <section><!> <!> <!></section>',1);function Wt(d,e){G(e,!0);const l=Z("Hue_Input");let i=R(180),v=R(void 0);at(d,{tome:l,children:(b,H)=>{var I=ct(),x=V(I),$=o(x);w($,{content:"import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';",lang:"ts"}),n(x);var _=t(t(x,!0)),T=o(_);M(T,{text:"With bind:value",slug:"with-bindvalue",children:(u,W)=>{var m=lt();f(u,m)},$$slots:{default:!0}});var c=t(t(T,!0));w(c,{content:"<Hue_Input bind:value />"});var a=t(t(c,!0));P(a,{get value(){return h(i)},set value(u){k(i,C(u))}});var r=t(t(a,!0)),p=o(r),O=o(p);n(p),n(r),n(_);var y=t(t(_,!0)),E=o(y);M(E,{text:"With oninput",slug:"with-oninput",children:(u,W)=>{var m=vt();f(u,m)},$$slots:{default:!0}});var B=t(t(E,!0));w(B,{content:`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`});var S=t(t(B,!0));P(S,{oninput:u=>k(v,C(u))});var N=t(t(S,!0)),L=o(N),Q=o(L);n(L),n(N),n(y);var Y=t(t(y,!0)),z=o(Y);M(z,{text:"With children",slug:"with-children",children:(u,W)=>{var m=dt();f(u,m)},$$slots:{default:!0}});var D=t(t(z,!0));w(D,{content:`<Hue_Input>
	Some colorful hue input
</Hue_Input>`});var U=t(t(D,!0));P(U,{children:(u,W)=>{var m=_t();f(u,m)},$$slots:{default:!0}}),n(Y),J(()=>{A(r,"--text_color",`hsl(${h(i)??""} 62% 31%)`),X(O,`bind:value === ${h(i)??""}`),A(N,"--text_color",`hsl(${h(i)??""} 62% 31%)`),X(Q,`value_from_oninput === ${h(v)+""}`)}),f(b,I)},$$slots:{default:!0}}),K()}export{Wt as component};
