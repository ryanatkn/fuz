import{k as O,t as m,a as d,j as Q}from"../chunks/CbbyqTNh.js";import{p as F,k as v,s as t,l as _,a2 as B,g as I,G as L,t as Y,a as J,f as M,a0 as x}from"../chunks/C9aPwLmV.js";import{s as z}from"../chunks/Bb4_Y-AM.js";import{s as j}from"../chunks/PwPRnE0L.js";import{i as U,p as G}from"../chunks/DSlEI_lp.js";import{C as R}from"../chunks/B0TzJDWH.js";import{g as V}from"../chunks/CAx5GMMd.js";import{r as X,c as q,s as Z}from"../chunks/DGBAUQNC.js";import{b as ee}from"../chunks/C4iwTAZ8.js";import{p as te}from"../chunks/2t0GVDdd.js";import{T as re}from"../chunks/z0uNEXKs.js";import{T as E,a as S}from"../chunks/BCmes7hO.js";const D=(p,a,s)=>{const u=a(p.currentTarget.value);u!==null&&s(u)},ae=(p,a,s)=>{var c;const u=p.currentTarget.getBoundingClientRect(),n=(p.clientX-u.x)/u.width;a(Math.floor(360*n)),(c=I(s))==null||c.focus()};var oe=m('<div class="title"><!></div>'),ne=m('<div class="hue_input svelte-um0i49"><label><!> <div class="preview svelte-um0i49">hue <input type="number" step="0" class="hue svelte-um0i49"></div></label> <div class="minimap_wrapper svelte-um0i49"><div class="minimap svelte-um0i49" aria-hidden="true"></div></div> <input type="range" aria-label="hue" min="0" max="359" class="svelte-um0i49"></div>');function w(p,a){F(a,!0);let s=te(a,"value",15,180);const u=r=>{const e=typeof r;if(e==="number")return r;if(e!=="string")return null;const o=Number(r);return Number.isNaN(o)?null:o},n=r=>{var e;s(r),(e=a.oninput)==null||e.call(a,s())};let c=B(void 0);var H=ne(),N=v(H),y=v(N);{var k=r=>{var e=oe(),o=v(e);Z(o,()=>a.children),_(e),d(r,e)};U(y,r=>{a.children&&r(k)})}var W=t(y,2),T=t(v(W));X(T),T.__input=[D,u,n],_(W),_(N);var P=t(N,2),A=v(P);A.__click=[ae,n,c],_(P);var l=t(P,2);X(l),l.__input=[D,u,n],ee(l,r=>L(c,r),()=>I(c)),_(H),Y(()=>{j(H,"--hue",s()),q(T,s()),q(l,s())}),d(p,H),J()}O(["input","click"]);var ie=m("With <code>bind:value</code>",1),se=m('<!> <!> <!> <div class="mt_md"><code> </code></div>',1),ue=m("With <code>oninput</code>",1),le=m('<!> <!> <!> <div class="mt_md"><code> </code></div>',1),de=m("With <code>children</code>",1),ve=m("<!> <!> <!>",1),_e=m("<section><!></section> <!> <!> <!>",1);function Pe(p,a){F(a,!0);const u=V("Hue_Input");let n=B(180),c=B(void 0);re(p,{tome:u,children:(H,N)=>{var y=_e(),k=M(y),W=v(k);R(W,{content:"import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';",lang:"ts"}),_(k);var T=t(k,2);E(T,{children:(l,r)=>{var e=se(),o=M(e);S(o,{text:"With bind:value",children:(b,K)=>{x();var C=ie();x(),d(b,C)},$$slots:{default:!0}});var f=t(o,2);R(f,{content:"<Hue_Input bind:value />"});var h=t(f,2);w(h,{get value(){return I(n)},set value(b){L(n,G(b))}});var i=t(h,2),g=v(i),$=v(g);_(g),_(i),Y(()=>{j(i,"--text_color",`hsl(${I(n)??""} 62% 31%)`),z($,`bind:value === ${I(n)??""}`)}),d(l,e)},$$slots:{default:!0}});var P=t(T,2);E(P,{children:(l,r)=>{var e=le(),o=M(e);S(o,{text:"With oninput",children:(b,K)=>{x();var C=ue();x(),d(b,C)},$$slots:{default:!0}});var f=t(o,2);R(f,{content:`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`});var h=t(f,2);w(h,{oninput:b=>L(c,G(b))});var i=t(h,2),g=v(i),$=v(g);_(g),_(i),Y(()=>{j(i,"--text_color",`hsl(${I(n)??""} 62% 31%)`),z($,`value_from_oninput === ${I(c)+""}`)}),d(l,e)},$$slots:{default:!0}});var A=t(P,2);E(A,{children:(l,r)=>{var e=ve(),o=M(e);S(o,{text:"With children",children:(i,g)=>{x();var $=de();x(),d(i,$)},$$slots:{default:!0}});var f=t(o,2);R(f,{content:`<Hue_Input>
	Some colorful hue input
</Hue_Input>`});var h=t(f,2);w(h,{children:(i,g)=>{x();var $=Q("Some colorful hue input");d(i,$)},$$slots:{default:!0}}),d(l,e)},$$slots:{default:!0}}),d(H,y)},$$slots:{default:!0}}),J()}export{Pe as component};
