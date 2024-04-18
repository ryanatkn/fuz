import{b as zt,a as o,t as _,f as tt,s as t,c as a,l as yt}from"../chunks/disclose-version.Ddj0amtR.js";import{p as Tt,g as n,r as E,m as s,a as wt,F as c,d as A}from"../chunks/runtime.N2A2yyIi.js";import{d as Et,a as nt,s as m}from"../chunks/render.UwBO_r64.js";import{n as Ft}from"../chunks/utils.BSJX-nVd.js";import{i as rt}from"../chunks/if.UhUuT2rm.js";import{r as F}from"../chunks/attributes.aBPS3tII.js";import{s as P}from"../chunks/style.CN5pMWL6.js";import{b as I}from"../chunks/input.BHADLuGw.js";import{p as It}from"../chunks/proxy.Dw-yJxJX.js";import{C as p}from"../chunks/Code.DLdTgamv.js";import{g as Mt}from"../chunks/tome.60teOZbE.js";import{P as k}from"../chunks/Pending_Animation.mA8_i8BY.js";import{T as Rt}from"../chunks/Tome_Detail.BxaZD4UU.js";import{T as et}from"../chunks/Tome_Subheading.DLoPsHje.js";var St=(v,e)=>s(e,!n(e)),Wt=_("pause animation",1),Bt=_("play animation",1),Ct=(v,e)=>s(e,"🐢🐢🐢"),Dt=(v,e)=>s(e,It((n(e)+n(e)).substring(0,24))),Lt=(v,e)=>s(e,!n(e)),Nt=_("pause animation",1),Vt=_("play animation",1),Yt=_("With children <code>index</code> prop",1),jt=(v,e)=>s(e,!n(e)),qt=_('<div class="row box"><span style="font-size: var(--size_xl5)"> </span> <span class="index svelte-1tring4"> </span> </div>'),Gt=_('<section><!> <!> <div class="mb_lg"><!></div> <button class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button>🐢🐢🐢</button> <button>* 2</button></p> <button><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function vn(v,e){wt(e,!0);const at=Mt("Pending_Animation");let u=c("🐢"),g=c("🐸"),f=c("⏳"),x=c(!1),d=c(!0),b=c(!1);var M=zt(),it=tt(M);Rt(it,{tome:at,children:(ot,Jt)=>{var R=Gt(),S=tt(R),W=a(S);p(W,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var B=t(t(W,!0)),st=A(()=>`<Pending_Animation running={${n(d)}} />`);p(B,{get content(){return n(st)}});var C=t(t(B,!0)),_t=a(C);k(_t,{get running(){return n(d)}});var $=t(t(C,!0));$.__click=[St,d];var vt=a($);rt(vt,()=>n(d),r=>{var i=Wt();o(r,i)},r=>{var i=Bt();o(r,i)});var D=t(t($,!0)),ut=A(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(d)}}
/>`);p(D,{get content(){return n(ut)}});var L=t(t(D,!0));P(L,"align-items","flex-start");var dt=a(L);k(dt,{attrs:{class:"size_xl5"},get running(){return n(d)}});var N=t(t(S,!0)),V=a(N);et(V,{text:"With custom children",slug:"custom-children"});var Y=t(t(V,!0)),lt=A(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(b)}}>
		{${n(u)}}
	</Pending_Animation>
</div>`);p(Y,{get content(){return n(lt)}});var j=t(t(Y,!0)),z=t(a(j));F(z);var q=t(t(z,!0));q.__click=[Ct,u];var ct=t(t(q,!0));ct.__click=[Dt,u];var y=t(t(j,!0));y.__click=[Lt,b];var mt=a(y);rt(mt,()=>n(b),r=>{var i=Nt();o(r,i)},r=>{var i=Vt();o(r,i)});var h=t(t(y,!0));P(h,"font-size","var(--size_xl6)"),P(h,"--animation_duration","var(--duration_6)"),P(h,"text-align","center");var pt=a(h);k(pt,{get running(){return n(b)},children:(r,i)=>{var l=yt(r);E(()=>m(l,n(u))),o(r,l)}});var gt=t(t(N,!0)),G=a(gt);et(G,{text:"With children index prop",slug:"children-index-prop",children:(r,i)=>{var l=Yt();o(r,l)}});var H=t(t(G,!0)),ft=A(()=>`<Pending_Animation running={${n(x)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span style="font-size: var(--size_xl5)">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);p(H,{get content(){return n(ft)}});var J=t(t(H,!0)),xt=t(a(J)),K=a(xt);K.nodeValue="running={";var T=t(K);T.__click=[jt,x];var bt=a(T),ht=t(T,!0);ht.nodeValue=nt("}");var O=t(t(J,!0)),w=t(a(O));F(w);var Q=t(t(w,!0));F(Q);var At=t(t(O,!0));k(At,{get running(){return n(x)},children:(i,l=Ft)=>{var U=qt(),X=a(U),Pt=a(X),Z=t(t(X,!0)),kt=a(Z),$t=t(Z,!0);E(()=>{m(Pt,n(g)),m(kt,l()),m($t,` ${nt(n(f))}`)}),o(i,U)}}),E(()=>m(bt,n(x))),I(z,()=>n(u),r=>s(u,r)),I(w,()=>n(g),r=>s(g,r)),I(Q,()=>n(f),r=>s(f,r)),o(ot,R)}}),o(v,M),Tt()}Et(["click"]);export{vn as component};
