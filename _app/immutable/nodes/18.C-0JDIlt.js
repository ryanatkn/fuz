import{a as l,t as m,c as r,s as e,b as ee,f as z}from"../chunks/disclose-version.COjBdUkA.js";import{a as G,g as c,q as M,r as J,p as K,m as P}from"../chunks/runtime.BITJpo-a.js";import{d as te,e as X,b as k,s as j}from"../chunks/render.Z7Ne6upu.js";import{s as R}from"../chunks/style.CN5pMWL6.js";import{p as A}from"../chunks/proxy.QLsxkP1d.js";import{C as H}from"../chunks/Code.CAGfF-1b.js";import{g as ne}from"../chunks/tome.DbsBumql.js";import{i as re}from"../chunks/if.C-SBJCAL.js";import{r as F,s as ae}from"../chunks/attributes.CdOanwG5.js";import{b as ie}from"../chunks/this.Dvx4rKmO.js";import{p as oe}from"../chunks/props.CQvavPLi.js";import{T as ue}from"../chunks/Tome_Detail.Bv5GFb6O.js";import{T as S}from"../chunks/Tome_Subheading.BQSEHhY3.js";const se=(p,a,u)=>{var s;const f=p.currentTarget.getBoundingClientRect(),o=(p.clientX-f.x)/f.width;a(Math.floor(360*o)),(s=c(u))==null||s.focus()};var le=m('<div class="title"><!></div>'),de=m('<div class="hue_input svelte-nx6ksy"><label><!> <div class="preview svelte-nx6ksy">hue <input type="number" step="0" class="hue svelte-nx6ksy"></div></label> <div class="minimap_wrapper svelte-nx6ksy"><div class="minimap svelte-nx6ksy" aria-hidden=""></div></div> <input type="range" aria-label="hue" min="0" max="359" class="svelte-nx6ksy"></div>');function W(p,a){G(a,!0);let u=oe(a,"value",7,180);const f=t=>{const n=typeof t;if(n==="number")return t;if(n!=="string")return null;const v=Number(t);return Number.isNaN(v)?null:v},o=t=>{var n;u(t),(n=a.oninput)==null||n.call(a,u())},s=t=>{const n=f(t.currentTarget.value);n!==null&&o(n)};let h=P(void 0);var b=de(),x=r(b),w=r(x);re(w,()=>a.children,t=>{var n=le(),v=r(n);ae(()=>a.children,v),l(t,n)});var y=e(e(w,!0)),g=e(r(y));F(g);var I=e(e(x,!0)),T=r(I);T.__click=[se,o,h];var d=e(e(I,!0));ie(d,t=>M(h,A(t)),()=>c(h)),F(d),J(()=>{R(b,"--hue",u()),g.value=u(),d.value=u()}),X("input",g,s,!1),X("input",d,s,!1),l(p,b),K()}te(["click"]);var ve=m("With <code>bind:value</code>",1),_e=m("With <code>oninput</code>",1),ce=m("With <code>children</code>",1),me=m("Some colorful hue input",1),pe=m('<section><!></section> <section><!> <!> <!> <div class="mt_md"><code> </code></div></section> <section><!> <!> <!> <div class="mt_md"><code> </code></div></section> <section><!> <!> <!></section>',1);function We(p,a){G(a,!0);const f=ne("Hue_Input");let o=P(180),s=P(void 0);var h=ee(),b=z(h);ue(b,{tome:f,children:(x,w)=>{var y=pe(),g=z(y),I=r(g);H(I,{content:"import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';",lang:"ts"});var T=e(e(g,!0)),d=r(T);S(d,{text:"With bind:value",slug:"with-bindvalue",children:(i,N)=>{var _=ve();l(i,_)}});var t=e(e(d,!0));H(t,{content:"<Hue_Input bind:value />"});var n=e(e(t,!0));W(n,{get value(){return c(o)},set value(i){M(o,A(i))}});var v=e(e(n,!0)),O=r(v),Q=r(O),E=e(e(T,!0)),B=r(E);S(B,{text:"With oninput",slug:"with-oninput",children:(i,N)=>{var _=_e();l(i,_)}});var C=e(e(B,!0));H(C,{content:`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`});var D=e(e(C,!0));W(D,{oninput:i=>M(s,A(i))});var L=e(e(D,!0)),U=r(L),V=r(U),Z=e(e(E,!0)),Y=r(Z);S(Y,{text:"With children",slug:"with-children",children:(i,N)=>{var _=ce();l(i,_)}});var q=e(e(Y,!0));H(q,{content:`<Hue_Input>
	Some colorful hue input
</Hue_Input>`});var $=e(e(q,!0));W($,{children:(i,N)=>{var _=me();l(i,_)}}),J(()=>{R(v,"--color",`hsl(${k(c(o))} 62% 31%)`),j(Q,`bind:value === ${k(c(o))}`),R(L,"--color",`hsl(${k(c(o))} 62% 31%)`),j(V,`value_from_oninput === ${k(c(s)+"")}`)}),l(x,y)}}),l(p,h),K()}export{We as component};
