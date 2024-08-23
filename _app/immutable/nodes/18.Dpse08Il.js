import{a as h,t as I,b as Z}from"../chunks/disclose-version.DcVMHsl4.js";import{p as J,t as K,a as O,g,a5 as k,c as r,s as e,r as o,F as A,f as ee,n as f}from"../chunks/runtime.DbtEYBdD.js";import{s as F}from"../chunks/render.BYxdHAaC.js";import{s as E}from"../chunks/style.Bk7ejTAN.js";import{i as te,p as X}from"../chunks/if.CjTBE8-9.js";import{C as y}from"../chunks/Code.BKk6RzAF.js";import{g as ne}from"../chunks/tome.DTaX32zK.js";import{e as re}from"../chunks/utils.C7dA-JMV.js";import{r as j,s as oe,f as q}from"../chunks/attributes.mFyRggzr.js";import{b as ae}from"../chunks/this.D2QOTIbN.js";import{p as ie}from"../chunks/props.DeWI4C6L.js";import{T as se}from"../chunks/Tome_Detail.BzZiyWnL.js";import{T as P}from"../chunks/Tome_Subheading.COH5dvT_.js";const G=(d,t,u)=>{const l=t(d.currentTarget.value);l!==null&&u(l)},ue=(d,t,u)=>{var v;const l=d.currentTarget.getBoundingClientRect(),i=(d.clientX-l.x)/l.width;t(Math.floor(360*i)),(v=g(u))==null||v.focus()};var le=I('<div class="title"><!></div>'),ve=I('<div class="hue_input svelte-um0i49"><label><!> <div class="preview svelte-um0i49">hue <input type="number" step="0" class="hue svelte-um0i49"></div></label> <div class="minimap_wrapper svelte-um0i49"><div class="minimap svelte-um0i49" aria-hidden="true"></div></div> <input type="range" aria-label="hue" min="0" max="359" class="svelte-um0i49"></div>');function R(d,t){J(t,!0);let u=ie(t,"value",15,180);const l=a=>{const n=typeof a;if(n==="number")return a;if(n!=="string")return null;const m=Number(a);return Number.isNaN(m)?null:m},i=a=>{var n;u(a),(n=t.oninput)==null||n.call(t,u())};let v=k(void 0);var b=ve(),T=r(b),$=r(T);te($,()=>t.children,a=>{var n=le(),m=r(n);oe(m,()=>t.children),o(n),h(a,n)});var x=e($,2),H=e(r(x));j(H),H.__input=[G,l,i],o(x),o(T);var c=e(T,2),w=r(c);w.__click=[ue,i,v],o(c);var _=e(c,2);ae(_,a=>A(v,a),()=>g(v)),j(_),_.__input=[G,l,i],o(b),K(()=>{E(b,"--hue",u()),q(H,u()),q(_,u())}),h(d,b),O()}re(["input","click"]);var de=I("With <code>bind:value</code>",1),ce=I("With <code>oninput</code>",1),_e=I("With <code>children</code>",1),me=I('<section><!></section> <section><!> <!> <!> <div class="mt_md"><code> </code></div></section> <section><!> <!> <!> <div class="mt_md"><code> </code></div></section> <section><!> <!> <!></section>',1);function We(d,t){J(t,!0);const l=ne("Hue_Input");let i=k(180),v=k(void 0);se(d,{tome:l,children:(b,T)=>{var $=me(),x=ee($),H=r(x);y(H,{content:"import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';",lang:"ts"}),o(x);var c=e(x,2),w=r(c);P(w,{text:"With bind:value",slug:"with-bindvalue",children:(s,M)=>{f();var p=de();f(),h(s,p)},$$slots:{default:!0}});var _=e(w,2);y(_,{content:"<Hue_Input bind:value />"});var a=e(_,2);R(a,{get value(){return g(i)},set value(s){A(i,X(s))}});var n=e(a,2),m=r(n),Q=r(m);o(m),o(n),o(c);var N=e(c,2),B=r(N);P(B,{text:"With oninput",slug:"with-oninput",children:(s,M)=>{f();var p=ce();f(),h(s,p)},$$slots:{default:!0}});var C=e(B,2);y(C,{content:`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`});var S=e(C,2);R(S,{oninput:s=>A(v,X(s))});var W=e(S,2),L=r(W),U=r(L);o(L),o(W),o(N);var Y=e(N,2),z=r(Y);P(z,{text:"With children",slug:"with-children",children:(s,M)=>{f();var p=_e();f(),h(s,p)},$$slots:{default:!0}});var D=e(z,2);y(D,{content:`<Hue_Input>
	Some colorful hue input
</Hue_Input>`});var V=e(D,2);R(V,{children:(s,M)=>{f();var p=Z("Some colorful hue input");h(s,p)},$$slots:{default:!0}}),o(Y),K(()=>{E(n,"--text_color",`hsl(${g(i)??""} 62% 31%)`),F(Q,`bind:value === ${g(i)??""}`),E(W,"--text_color",`hsl(${g(i)??""} 62% 31%)`),F(U,`value_from_oninput === ${g(v)+""}`)}),h(b,$)},$$slots:{default:!0}}),O()}export{We as component};
