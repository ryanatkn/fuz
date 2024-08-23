import{b as m,a as s,t as q}from"../chunks/disclose-version.DcVMHsl4.js";import{p as kt,a as yt,f as zt,g as t,t as V,F as _,a5 as u,c as r,s as n,d as y,r as i,n as Y,an as Tt}from"../chunks/runtime.DbtEYBdD.js";import{s as g}from"../chunks/render.BYxdHAaC.js";import{i as rt,p as wt}from"../chunks/if.CjTBE8-9.js";import{r as D}from"../chunks/attributes.mFyRggzr.js";import{e as Et}from"../chunks/utils.C7dA-JMV.js";import{s as z}from"../chunks/style.Bk7ejTAN.js";import{b as j}from"../chunks/input.DS6ftY69.js";import{C as x}from"../chunks/Code.BKk6RzAF.js";import{g as Ft}from"../chunks/tome.DTaX32zK.js";import{P as T}from"../chunks/Pending_Animation.iBZ3zGtj.js";import{T as It}from"../chunks/Tome_Detail.BzZiyWnL.js";import{T as it}from"../chunks/Tome_Subheading.COH5dvT_.js";var Mt=(l,a)=>_(a,!t(a)),Rt=(l,a)=>_(a,"🐢🐢🐢"),Wt=(l,a)=>_(a,wt((t(a)+t(a)).substring(0,24))),Bt=(l,a)=>_(a,!t(a)),Ct=q("With children <code>index</code> prop",1),Lt=(l,a)=>_(a,!t(a)),Nt=q('<div class="row box"><span class="size_xl5"> </span> <span class="index svelte-1tring4"> </span> </div>'),St=q('<section><!> <!> <div class="mb_lg"><!></div> <button type="button" class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button type="button">🐢🐢🐢</button> <button type="button">* 2</button></p> <button type="button"><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button type="button"> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function nn(l,a){kt(a,!0);const ot=Ft("Pending_Animation");let d=u("🐢"),b=u("🐸"),f=u("⏳"),h=u(!1),v=u(!0),$=u(!1);It(l,{tome:ot,children:(st,Yt)=>{var G=St(),w=zt(G),H=r(w);x(H,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var J=n(H,2),_t=y(()=>`<Pending_Animation running={${t(v)}} />`);x(J,{get content(){return t(_t)}});var E=n(J,2),lt=r(E);T(lt,{get running(){return t(v)}}),i(E);var A=n(E,2);A.__click=[Mt,v];var dt=r(A);rt(dt,()=>t(v),e=>{var o=m("pause animation");s(e,o)},e=>{var o=m("play animation");s(e,o)}),i(A);var K=n(A,2),vt=y(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${t(v)}}
/>`);x(K,{get content(){return t(vt)}});var F=n(K,2);z(F,"align-items","flex-start");var ct=r(F);T(ct,{attrs:{class:"size_xl5"},get running(){return t(v)}}),i(F),i(w);var I=n(w,2),O=r(I);it(O,{text:"With custom children",slug:"custom-children"});var Q=n(O,2),ut=y(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${t($)}}>
		{${t(d)}}
	</Pending_Animation>
</div>`);x(Q,{get content(){return t(ut)}});var M=n(Q,2),R=n(r(M));D(R);var U=n(R,2);U.__click=[Rt,d];var pt=n(U,2);pt.__click=[Wt,d],i(M);var P=n(M,2);P.__click=[Bt,$];var mt=r(P);rt(mt,()=>t($),e=>{var o=m("pause animation");s(e,o)},e=>{var o=m("play animation");s(e,o)}),i(P);var p=n(P,2);z(p,"font-size","var(--size_xl6)"),z(p,"--animation_duration","var(--duration_6)"),z(p,"text-align","center");var gt=r(p);T(gt,{get running(){return t($)},children:(e,o)=>{Y();var c=m();V(()=>g(c,t(d))),s(e,c)},$$slots:{default:!0}}),i(p),i(I);var X=n(I,2),Z=r(X);it(Z,{text:"With children index prop",slug:"children-index-prop",children:(e,o)=>{Y();var c=Ct();Y(2),s(e,c)},$$slots:{default:!0}});var tt=n(Z,2),xt=y(()=>`<Pending_Animation running={${t(h)}}>
	{#snippet children(index)}
		<div class="row box">
			{${t(b)}}
			{index}
			<span class="size_xl5">
				{${t(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);x(tt,{get content(){return t(xt)}});var W=n(tt,2),nt=n(r(W)),et=r(nt);et.nodeValue="running={";var k=n(et);k.__click=[Lt,h];var bt=r(k);i(k);var ft=n(k,1,!0);ft.nodeValue="}",i(nt),i(W);var B=n(W,2),C=n(r(B));D(C);var at=n(C,2);D(at),i(B);var ht=n(B,2);T(ht,{get running(){return t(h)},children:(o,c=Tt)=>{var L=Nt(),N=r(L),$t=r(N);i(N);var S=n(N,2),At=r(S);i(S);var Pt=n(S);i(L),V(()=>{g($t,t(b)),g(At,c()),g(Pt,` ${t(f)??""}`)}),s(o,L)}}),i(X),V(()=>g(bt,t(h))),j(R,()=>t(d),e=>_(d,e)),j(C,()=>t(b),e=>_(b,e)),j(at,()=>t(f),e=>_(f,e)),s(st,G)},$$slots:{default:!0}}),yt()}Et(["click"]);export{nn as component};
