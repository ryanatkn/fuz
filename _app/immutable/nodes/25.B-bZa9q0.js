import{a as g,t as y,k as A,p as G}from"../chunks/disclose-version.BmNp8pRT.js";import{t as j,p as M,a as R,s as r,g as e,c as d,r as c,G as p,a6 as B,d as T,a4 as E}from"../chunks/runtime.CTRYSQ17.js";import{C as k}from"../chunks/Code.DpTM-mqG.js";import{g as q}from"../chunks/tome.DeebEyLr.js";import{i as D}from"../chunks/if.CQC794wY.js";import{s as F,a as H}from"../chunks/attributes.Bd3_RS60.js";import{t as J}from"../chunks/class.BHhese_l.js";import{b as K}from"../chunks/this.BpFE4fsi.js";import{P as O}from"../chunks/Pending_Animation.D9QOA-Qt.js";import{T as Q}from"../chunks/Tome_Content.BxEMfj2D.js";var S=y('<span class="animation svelte-cvss5b"><!></span>'),U=y('<button><span class="content svelte-cvss5b"><!></span> <!></button>');function I(_,t){R(t,!0);let i=B(void 0);const f=o=>{var s;return(s=e(i))==null?void 0:s.focus(o)};var n=U();let a;var l=d(n),w=d(l);F(w,()=>t.children),c(l);var u=r(l,2);{var m=o=>{var s=S(),v=d(s);O(v,{get running(){return t.running}}),c(s),g(o,s)};D(u,o=>{t.pending&&o(m)})}return c(n),K(n,o=>p(i,o),()=>e(i)),j(()=>{a=H(n,a,{type:"button",...t.attrs,disabled:t.disabled??t.pending,title:t.title,onclick:t.onclick},"svelte-cvss5b"),J(n,"pending",t.pending)}),g(_,n),M({focus:f})}var V=(_,t,i)=>{p(t,!e(t)),p(i,!e(i))},W=y(`<section><p>Preserves a button's normal width while animating.</p> <aside><p>This component may be replaced with an action in the future or otherwise change.</p></aside> <!> <p><button type="button">toggle the pending status of the buttons below</button></p> <!> <p><!></p> <!> <!></section>`);function rt(_,t){R(t,!0);const f=q("Pending_Button");let n=B(!1),a=B(!0);Q(_,{tome:f,children:(l,w)=>{var u=W(),m=r(d(u),4);k(m,{content:"import Pending_Button from '@ryanatkn/fuz/Pending_Button.svelte';",lang:"ts"});var o=r(m,2),s=d(o);s.__click=[V,n,a],c(o);var v=r(o,2),C=T(()=>`<Pending_Button
	pending={${e(n)}}
	onclick={() => (pending_1 = !pending_1)}
>
	do something async
</Pending_Button>`);k(v,{get content(){return e(C)}});var b=r(v,2),L=d(b);I(L,{get pending(){return e(n)},onclick:()=>p(n,!e(n)),children:(h,z)=>{E();var P=A("do something async");g(h,P)},$$slots:{default:!0}}),c(b);var x=r(b,2),N=T(()=>`<Pending_Button
	pending={${e(a)}}
	onclick={() => (pending_2 = !pending_2)}
>
	do another
</Pending_Button>`);k(x,{get content(){return e(N)}});var Y=r(x,2);I(Y,{get pending(){return e(a)},onclick:()=>p(a,!e(a)),children:(h,z)=>{E();var P=A("do another");g(h,P)},$$slots:{default:!0}}),c(u),g(l,u)},$$slots:{default:!0}}),M()}G(["click"]);export{rt as component};
