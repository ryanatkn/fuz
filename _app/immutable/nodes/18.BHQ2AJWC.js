import{l as O,a as l,t as c,g as Q}from"../chunks/disclose-version.ZoaYz1AU.js";import{p as F,s as t,t as B,a as G,g as I,a5 as L,c as d,r as v,J as Y,f as k,a4 as x}from"../chunks/runtime.DaB_8cOj.js";import{s as J}from"../chunks/render.DpEwyGnv.js";import{s as z}from"../chunks/style.Bk7ejTAN.js";import{i as U,p as X}from"../chunks/if.BRCK-0uq.js";import{C as A}from"../chunks/Code.DozXpeGJ.js";import{g as V}from"../chunks/tome.5eURj7Q1.js";import{r as j,e as q,s as Z}from"../chunks/attributes.BPvofiUC.js";import{b as ee}from"../chunks/this.D5gY84Ht.js";import{p as te}from"../chunks/props.tfL6ot4I.js";import{T as re}from"../chunks/Tome_Content.DufYPmHL.js";import{T as E,a as S}from"../chunks/Tome_Section_Header.bDewzFep.js";const D=(m,r,s)=>{const u=r(m.currentTarget.value);u!==null&&s(u)},ae=(m,r,s)=>{var _;const u=m.currentTarget.getBoundingClientRect(),n=(m.clientX-u.x)/u.width;r(Math.floor(360*n)),(_=I(s))==null||_.focus()};var oe=c('<div class="title"><!></div>'),ne=c('<div class="hue_input svelte-um0i49"><label><!> <div class="preview svelte-um0i49">hue <input type="number" step="0" class="hue svelte-um0i49"></div></label> <div class="minimap_wrapper svelte-um0i49"><div class="minimap svelte-um0i49" aria-hidden="true"></div></div> <input type="range" aria-label="hue" min="0" max="359" class="svelte-um0i49"></div>');function w(m,r){F(r,!0);let s=te(r,"value",15,180);const u=e=>{const o=typeof e;if(o==="number")return e;if(o!=="string")return null;const a=Number(e);return Number.isNaN(a)?null:a},n=e=>{var o;s(e),(o=r.oninput)==null||o.call(r,s())};let _=L(void 0);var H=ne(),M=d(H),N=d(M);U(N,()=>r.children,e=>{var o=oe(),a=d(o);Z(a,()=>r.children),v(o),l(e,o)});var T=t(N,2),W=t(d(T));j(W),W.__input=[D,u,n],v(T),v(M);var P=t(M,2),R=d(P);R.__click=[ae,n,_],v(P);var y=t(P,2);ee(y,e=>Y(_,e),()=>I(_)),j(y),y.__input=[D,u,n],v(H),B(()=>{z(H,"--hue",s()),q(W,s()),q(y,s())}),l(m,H),G()}O(["input","click"]);var ie=c("With <code>bind:value</code>",1),se=c('<!> <!> <!> <div class="mt_md"><code> </code></div>',1),ue=c("With <code>oninput</code>",1),le=c('<!> <!> <!> <div class="mt_md"><code> </code></div>',1),de=c("With <code>children</code>",1),ve=c("<!> <!> <!>",1),_e=c("<section><!></section> <!> <!> <!>",1);function Pe(m,r){F(r,!0);const u=V("Hue_Input");let n=L(180),_=L(void 0);re(m,{tome:u,children:(H,M)=>{var N=_e(),T=k(N),W=d(T);A(W,{content:"import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';",lang:"ts"}),v(T);var P=t(T,2);E(P,{children:(e,o)=>{var a=se(),p=k(a);S(p,{text:"With bind:value",children:(b,K)=>{x();var C=ie();x(),l(b,C)},$$slots:{default:!0}});var f=t(p,2);A(f,{content:"<Hue_Input bind:value />"});var h=t(f,2);w(h,{get value(){return I(n)},set value(b){Y(n,X(b))}});var i=t(h,2),g=d(i),$=d(g);v(g),v(i),B(()=>{z(i,"--text_color",`hsl(${I(n)??""} 62% 31%)`),J($,`bind:value === ${I(n)??""}`)}),l(e,a)},$$slots:{default:!0}});var R=t(P,2);E(R,{children:(e,o)=>{var a=le(),p=k(a);S(p,{text:"With oninput",children:(b,K)=>{x();var C=ue();x(),l(b,C)},$$slots:{default:!0}});var f=t(p,2);A(f,{content:`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`});var h=t(f,2);w(h,{oninput:b=>Y(_,X(b))});var i=t(h,2),g=d(i),$=d(g);v(g),v(i),B(()=>{z(i,"--text_color",`hsl(${I(n)??""} 62% 31%)`),J($,`value_from_oninput === ${I(_)+""}`)}),l(e,a)},$$slots:{default:!0}});var y=t(R,2);E(y,{children:(e,o)=>{var a=ve(),p=k(a);S(p,{text:"With children",children:(i,g)=>{x();var $=de();x(),l(i,$)},$$slots:{default:!0}});var f=t(p,2);A(f,{content:`<Hue_Input>
	Some colorful hue input
</Hue_Input>`});var h=t(f,2);w(h,{children:(i,g)=>{x();var $=Q("Some colorful hue input");l(i,$)},$$slots:{default:!0}}),l(e,a)},$$slots:{default:!0}}),l(H,N)},$$slots:{default:!0}}),G()}export{Pe as component};