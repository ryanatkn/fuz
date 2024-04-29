import{b as zt,a as o,t as _,f as tt,s as t,c as a,l as yt}from"../chunks/disclose-version.DgZHFP_f.js";import{p as Tt,a as wt,g as n,r as E,o as s,G as c,d as A,Z as Et}from"../chunks/runtime.DrZKPIha.js";import{d as It,a as nt,s as p}from"../chunks/render.DVbc9Gtu.js";import{p as Mt}from"../chunks/proxy.CbdVWrCC.js";import{i as et}from"../chunks/if.IlGZE13_.js";import{r as I}from"../chunks/attributes.C1NqPvd0.js";import{s as P}from"../chunks/style.CN5pMWL6.js";import{b as M}from"../chunks/input.CzS2WOPp.js";import{C as m}from"../chunks/Code.BSANuBP2.js";import{g as Rt}from"../chunks/tome.DwGL1Ga_.js";import{P as k}from"../chunks/Pending_Animation.D8wjapNC.js";import{T as Ft}from"../chunks/Tome_Detail.C9zLz3YG.js";import{T as rt}from"../chunks/Tome_Subheading.BPCHfgdp.js";var St=(v,r)=>s(r,!n(r)),Wt=_("pause animation",1),Bt=_("play animation",1),Ct=(v,r)=>s(r,"🐢🐢🐢"),Dt=(v,r)=>s(r,Mt((n(r)+n(r)).substring(0,24))),Lt=(v,r)=>s(r,!n(r)),Nt=_("pause animation",1),Vt=_("play animation",1),Yt=_("With children <code>index</code> prop",1),Gt=(v,r)=>s(r,!n(r)),Zt=_('<div class="row box"><span style="font-size: var(--size_xl5)"> </span> <span class="index svelte-1tring4"> </span> </div>'),jt=_('<section><!> <!> <div class="mb_lg"><!></div> <button class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button>🐢🐢🐢</button> <button>* 2</button></p> <button><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function _n(v,r){Tt(r,!0);const at=Rt("Pending_Animation");let u=c("🐢"),g=c("🐸"),f=c("⏳"),x=c(!1),d=c(!0),b=c(!1);var R=zt(),it=tt(R);Ft(it,{tome:at,children:(ot,Ht)=>{var F=jt(),S=tt(F),W=a(S);m(W,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var B=t(t(W,!0)),st=A(()=>`<Pending_Animation running={${n(d)}} />`);m(B,{get content(){return n(st)}});var C=t(t(B,!0)),_t=a(C);k(_t,{get running(){return n(d)}});var $=t(t(C,!0));$.__click=[St,d];var vt=a($);et(vt,()=>n(d),e=>{var i=Wt();o(e,i)},e=>{var i=Bt();o(e,i)});var D=t(t($,!0)),ut=A(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(d)}}
/>`);m(D,{get content(){return n(ut)}});var L=t(t(D,!0));P(L,"align-items","flex-start");var dt=a(L);k(dt,{attrs:{class:"size_xl5"},get running(){return n(d)}});var N=t(t(S,!0)),V=a(N);rt(V,{text:"With custom children",slug:"custom-children"});var Y=t(t(V,!0)),lt=A(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(b)}}>
		{${n(u)}}
	</Pending_Animation>
</div>`);m(Y,{get content(){return n(lt)}});var G=t(t(Y,!0)),z=t(a(G));I(z);var Z=t(t(z,!0));Z.__click=[Ct,u];var ct=t(t(Z,!0));ct.__click=[Dt,u];var y=t(t(G,!0));y.__click=[Lt,b];var pt=a(y);et(pt,()=>n(b),e=>{var i=Nt();o(e,i)},e=>{var i=Vt();o(e,i)});var h=t(t(y,!0));P(h,"font-size","var(--size_xl6)"),P(h,"--animation_duration","var(--duration_6)"),P(h,"text-align","center");var mt=a(h);k(mt,{get running(){return n(b)},children:(e,i)=>{var l=yt(e);E(()=>p(l,n(u))),o(e,l)}});var gt=t(t(N,!0)),j=a(gt);rt(j,{text:"With children index prop",slug:"children-index-prop",children:(e,i)=>{var l=Yt();o(e,l)}});var q=t(t(j,!0)),ft=A(()=>`<Pending_Animation running={${n(x)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span style="font-size: var(--size_xl5)">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);m(q,{get content(){return n(ft)}});var H=t(t(q,!0)),xt=t(a(H)),J=a(xt);J.nodeValue="running={";var T=t(J);T.__click=[Gt,x];var bt=a(T),ht=t(T,!0);ht.nodeValue=nt("}");var K=t(t(H,!0)),w=t(a(K));I(w);var O=t(t(w,!0));I(O);var At=t(t(K,!0));k(At,{get running(){return n(x)},children:(i,l=Et)=>{var Q=Zt(),U=a(Q),Pt=a(U),X=t(t(U,!0)),kt=a(X),$t=t(X,!0);E(()=>{p(Pt,n(g)),p(kt,l()),p($t,` ${nt(n(f))}`)}),o(i,Q)}}),E(()=>p(bt,n(x))),M(z,()=>n(u),e=>s(u,e)),M(w,()=>n(g),e=>s(g,e)),M(O,()=>n(f),e=>s(f,e)),o(ot,F)}}),o(v,R),wt()}It(["click"]);export{_n as component};
