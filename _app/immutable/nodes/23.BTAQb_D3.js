import{a as g,t as _,r as s,c,s as t}from"../chunks/disclose-version.D-YpP91c.js";import{p as M,t as D,a as R,g as o,n as v,C as T,d as E}from"../chunks/runtime.CLWtUI7-.js";import{e as j}from"../chunks/svelte-head.BslmLo-c.js";import{C as B}from"../chunks/Code.CB3bu1ip.js";import{g as q}from"../chunks/tome.BEaQ-Zqd.js";import{i as F}from"../chunks/if.t2Adprt1.js";import{s as G,a as H}from"../chunks/attributes.laNZifmC.js";import{t as J}from"../chunks/class.iiaQ2wDY.js";import{b as K}from"../chunks/this.CdNU6mSA.js";import{P as O}from"../chunks/Pending_Animation.BVobXiIF.js";import{T as Q}from"../chunks/Tome_Detail.mIKFiUpF.js";var S=_('<span class="animation svelte-cvss5b"><!></span>'),U=_('<button><span class="content svelte-cvss5b"><!></span> <!></button>');function I(p,n){M(n,!0);let r;const f=i=>r==null?void 0:r.focus(i);var e=U();K(e,i=>r=i,()=>r);let a;var u=c(e),y=c(u);G(y,()=>n.children),s(u);var l=t(t(u,!0));return F(l,()=>n.pending,i=>{var d=S(),m=c(d);O(m,{get running(){return n.running}}),s(d),g(i,d)}),s(e),D(()=>{a=H(e,a,{type:"button",...n.attrs,disabled:n.disabled??n.pending,title:n.title,onclick:n.onclick},!0,"svelte-cvss5b"),J(e,"pending",n.pending)}),g(p,e),R({focus:f})}var V=(p,n,r)=>{v(n,!o(n)),v(r,!o(r))},W=_("do something async",1),X=_("do another",1),Z=_(`<section><p>Preserves a button's normal width while animating.</p> <aside><p>This component may be replaced with an action in the future or otherwise change.</p></aside> <!> <p><button type="button">toggle the pending status of the buttons below</button></p> <!> <p><!></p> <!> <!></section>`);function ut(p,n){M(n,!0);const f=q("Pending_Button");let e=T(!1),a=T(!0);Q(p,{tome:f,children:(u,y)=>{var l=Z(),i=c(l),d=t(t(i,!0));s(d);var m=t(t(d,!0));B(m,{content:"import Pending_Button from '@ryanatkn/fuz/Pending_Button.svelte';",lang:"ts"});var b=t(t(m,!0)),C=c(b);C.__click=[V,e,a],s(b);var w=t(t(b,!0)),L=E(()=>`<Pending_Button
	pending={${o(e)}}
	onclick={() => (pending_1 = !pending_1)}
>
	do something async
</Pending_Button>`);B(w,{get content(){return o(L)}});var h=t(t(w,!0)),N=c(h);I(N,{get pending(){return o(e)},onclick:()=>v(e,!o(e)),children:(P,z)=>{var k=W();g(P,k)},$$slots:{default:!0}}),s(h);var A=t(t(h,!0)),Y=E(()=>`<Pending_Button
	pending={${o(a)}}
	onclick={() => (pending_2 = !pending_2)}
>
	do another
</Pending_Button>`);B(A,{get content(){return o(Y)}});var x=t(t(A,!0));I(x,{get pending(){return o(a)},onclick:()=>v(a,!o(a)),children:(P,z)=>{var k=X();g(P,k)},$$slots:{default:!0}}),s(l),g(u,l)},$$slots:{default:!0}}),R()}j(["click"]);export{ut as component};
