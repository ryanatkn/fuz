import{a as s,t as l,s as t,c as d,b as j,f as q}from"../chunks/disclose-version.CSpVFLMe.js";import{p as M,t as F,a as R,g as o,w as _,I,d as T}from"../chunks/runtime.Dht6Pzrj.js";import{d as G}from"../chunks/render.ldLefYc7.js";import{C as P}from"../chunks/Code.BJFX2aqi.js";import{g as H}from"../chunks/tome.C_gHmxyR.js";import{i as J}from"../chunks/if.BY8i3A5v.js";import{s as K,a as O}from"../chunks/attributes.ulKL4dWL.js";import{t as Q}from"../chunks/class.Ct8XOsNy.js";import{b as S}from"../chunks/this.Cm2itARI.js";import{P as U}from"../chunks/Pending_Animation.D_aobo-h.js";import{T as V}from"../chunks/Tome_Detail.Nh87G6Jo.js";var W=l('<span class="animation svelte-cvss5b"><!></span>'),X=l('<button><span class="content svelte-cvss5b"><!></span> <!></button>');function E(g,n){M(n,!0);let a;const m=i=>a==null?void 0:a.focus(i);var e=X();S(e,i=>a=i,()=>a);let r;var c=d(e),p=d(c);K(()=>n.children,p);var v=t(t(c,!0));return J(v,()=>n.pending,i=>{var u=W(),f=d(u);U(f,{get running(){return n.running}}),s(i,u)}),F(()=>{r=O(e,r,{type:"button",...n.attrs,disabled:n.disabled??n.pending,title:n.title,onclick:n.onclick},!0,"svelte-cvss5b"),Q(e,"pending",n.pending)}),s(g,e),R({focus:m})}var Z=(g,n,a)=>{_(n,!o(n)),_(a,!o(a))},$=l("do something async",1),tt=l("do another",1),nt=l("<section><p>Preserves a button's normal width while animating.</p> <aside><p>This component may be replaced with an action in the future or otherwise change.</p></aside> <!> <p><button>toggle the pending status of the buttons below</button></p> <!> <p><!></p> <!> <!></section>");function _t(g,n){M(n,!0);const m=H("Pending_Button");let e=I(!1),r=I(!0);var c=j(),p=q(c);V(p,{tome:m,children:(v,i)=>{var u=nt(),f=d(u),C=t(t(f,!0)),k=t(t(C,!0));P(k,{content:"import Pending_Button from '@ryanatkn/fuz/Pending_Button.svelte';",lang:"ts"});var B=t(t(k,!0)),L=d(B);L.__click=[Z,e,r];var w=t(t(B,!0)),N=T(()=>`<Pending_Button
	pending={${o(e)}}
	onclick={() => (pending_1 = !pending_1)}
>
	do something async
</Pending_Button>`);P(w,{get content(){return o(N)}});var y=t(t(w,!0)),Y=d(y);E(Y,{get pending(){return o(e)},onclick:()=>_(e,!o(e)),children:(b,D)=>{var h=$();s(b,h)},$$slots:{default:!0}});var A=t(t(y,!0)),x=T(()=>`<Pending_Button
	pending={${o(r)}}
	onclick={() => (pending_2 = !pending_2)}
>
	do another
</Pending_Button>`);P(A,{get content(){return o(x)}});var z=t(t(A,!0));E(z,{get pending(){return o(r)},onclick:()=>_(r,!o(r)),children:(b,D)=>{var h=tt();s(b,h)},$$slots:{default:!0}}),s(v,u)},$$slots:{default:!0}}),s(g,c),R()}G(["click"]);export{_t as component};
