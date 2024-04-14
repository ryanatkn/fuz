import{b as zt,a as o,t as _,f as tt,s as t,c as a,l as yt}from"../chunks/disclose-version.COjBdUkA.js";import{p as Tt,a as wt,g as n,r as E,q as s,m as c,d as A}from"../chunks/runtime.BITJpo-a.js";import{d as Et,b as nt,s as m}from"../chunks/render.Z7Ne6upu.js";import{n as It}from"../chunks/utils.BSJX-nVd.js";import{i as rt}from"../chunks/if.C-SBJCAL.js";import{r as I}from"../chunks/attributes.CdOanwG5.js";import{s as P}from"../chunks/style.CN5pMWL6.js";import{b as M}from"../chunks/input.WqqsBRxZ.js";import{p as Mt}from"../chunks/proxy.QLsxkP1d.js";import{C as p}from"../chunks/Code.CAGfF-1b.js";import{g as Rt}from"../chunks/tome.DbsBumql.js";import{P as k}from"../chunks/Pending_Animation.CmKZJz9Z.js";import{T as Ft}from"../chunks/Tome_Detail.TBRsVCMf.js";import{T as et}from"../chunks/Tome_Subheading.DaaSjPkC.js";var St=(v,e)=>s(e,!n(e)),Wt=_("pause animation",1),Bt=_("play animation",1),Ct=(v,e)=>s(e,"🐢🐢🐢"),Dt=(v,e)=>s(e,Mt((n(e)+n(e)).substring(0,24))),Lt=(v,e)=>s(e,!n(e)),Nt=_("pause animation",1),Vt=_("play animation",1),Yt=_("With children <code>index</code> prop",1),qt=(v,e)=>s(e,!n(e)),jt=_('<div class="row box"><span style="font-size: var(--size_xl5)"> </span> <span class="index svelte-1tring4"> </span> </div>'),Gt=_('<section><!> <!> <div class="mb_lg"><!></div> <button class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button>🐢🐢🐢</button> <button>* 2</button></p> <button><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function vn(v,e){wt(e,!0);const at=Rt("Pending_Animation");let u=c("🐢"),g=c("🐸"),f=c("⏳"),b=c(!1),d=c(!0),x=c(!1);var R=zt(),it=tt(R);Ft(it,{tome:at,children:(ot,Jt)=>{var F=Gt(),S=tt(F),W=a(S);p(W,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var B=t(t(W,!0)),st=A(()=>`<Pending_Animation running={${n(d)}} />`);p(B,{get content(){return n(st)}});var C=t(t(B,!0)),_t=a(C);k(_t,{get running(){return n(d)}});var $=t(t(C,!0));$.__click=[St,d];var vt=a($);rt(vt,()=>n(d),r=>{var i=Wt();o(r,i)},r=>{var i=Bt();o(r,i)});var D=t(t($,!0)),ut=A(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(d)}}
/>`);p(D,{get content(){return n(ut)}});var L=t(t(D,!0));P(L,"align-items","flex-start");var dt=a(L);k(dt,{attrs:{class:"size_xl5"},get running(){return n(d)}});var N=t(t(S,!0)),V=a(N);et(V,{text:"With custom children",slug:"custom-children"});var Y=t(t(V,!0)),lt=A(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(x)}}>
		{${n(u)}}
	</Pending_Animation>
</div>`);p(Y,{get content(){return n(lt)}});var q=t(t(Y,!0)),z=t(a(q));I(z);var j=t(t(z,!0));j.__click=[Ct,u];var ct=t(t(j,!0));ct.__click=[Dt,u];var y=t(t(q,!0));y.__click=[Lt,x];var mt=a(y);rt(mt,()=>n(x),r=>{var i=Nt();o(r,i)},r=>{var i=Vt();o(r,i)});var h=t(t(y,!0));P(h,"font-size","var(--size_xl6)"),P(h,"--animation_duration","var(--duration_6)"),P(h,"text-align","center");var pt=a(h);k(pt,{get running(){return n(x)},children:(r,i)=>{var l=yt(r);E(()=>m(l,n(u))),o(r,l)}});var gt=t(t(N,!0)),G=a(gt);et(G,{text:"With children index prop",slug:"children-index-prop",children:(r,i)=>{var l=Yt();o(r,l)}});var H=t(t(G,!0)),ft=A(()=>`<Pending_Animation running={${n(b)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span style="font-size: var(--size_xl5)">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);p(H,{get content(){return n(ft)}});var J=t(t(H,!0)),bt=t(a(J)),K=a(bt);K.nodeValue="running={";var T=t(K);T.__click=[qt,b];var xt=a(T),ht=t(T,!0);ht.nodeValue=nt("}");var O=t(t(J,!0)),w=t(a(O));I(w);var Q=t(t(w,!0));I(Q);var At=t(t(O,!0));k(At,{get running(){return n(b)},children:(i,l=It)=>{var U=jt(),X=a(U),Pt=a(X),Z=t(t(X,!0)),kt=a(Z),$t=t(Z,!0);E(()=>{m(Pt,n(g)),m(kt,l()),m($t,` ${nt(n(f))}`)}),o(i,U)}}),E(()=>m(xt,n(b))),M(z,()=>n(u),r=>s(u,r)),M(w,()=>n(g),r=>s(g,r)),M(Q,()=>n(f),r=>s(f,r)),o(ot,F)}}),o(v,R),Tt()}Et(["click"]);export{vn as component};
