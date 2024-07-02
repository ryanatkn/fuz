import{b as kt,a as i,t as _,f as tt,c as a,s as t,q as zt}from"../chunks/disclose-version.8cXmPj91.js";import{p as yt,a as Tt,g as n,t as E,n as s,F as c,d as $,J as wt}from"../chunks/runtime.tEJefHBO.js";import{d as Et,s as p}from"../chunks/render.C1K3rtSi.js";import{p as Ft}from"../chunks/proxy.DYJKBxXC.js";import{i as nt}from"../chunks/if.CTp5gYEz.js";import{r as F}from"../chunks/attributes.giDdLxsX.js";import{s as A}from"../chunks/style.iv2mhl8q.js";import{b as I}from"../chunks/input.Bm1DNmdC.js";import{C as m}from"../chunks/Code.BzCvvdEf.js";import{g as It}from"../chunks/tome.BiCC_aSq.js";import{P}from"../chunks/Pending_Animation.1GGmjUwL.js";import{T as Mt}from"../chunks/Tome_Detail.Dh6A_FIj.js";import{T as et}from"../chunks/Tome_Subheading.CZpUcrxS.js";var Rt=(u,r)=>s(r,!n(r)),Wt=_("pause animation",1),Bt=_("play animation",1),Ct=(u,r)=>s(r,"🐢🐢🐢"),Lt=(u,r)=>s(r,Ft((n(r)+n(r)).substring(0,24))),Nt=(u,r)=>s(r,!n(r)),St=_("pause animation",1),Vt=_("play animation",1),Yt=_("With children <code>index</code> prop",1),qt=(u,r)=>s(r,!n(r)),Dt=_('<div class="row box"><span style="font-size: var(--size_xl5)"> </span> <span class="index svelte-1tring4"> </span> </div>'),Jt=_('<section><!> <!> <div class="mb_lg"><!></div> <button class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button>🐢🐢🐢</button> <button>* 2</button></p> <button><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function sn(u,r){yt(r,!0);const rt=It("Pending_Animation");let v=c("🐢"),g=c("🐸"),f=c("⏳"),x=c(!1),l=c(!0),b=c(!1);var M=kt(!0),at=tt(M);Mt(at,{tome:rt,children:(ot,Gt)=>{var R=Jt(),W=tt(R),B=a(W);m(B,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var C=t(t(B,!0)),it=$(()=>`<Pending_Animation running={${n(l)}} />`);m(C,{get content(){return n(it)}});var L=t(t(C,!0)),st=a(L);P(st,{get running(){return n(l)}});var k=t(t(L,!0));k.__click=[Rt,l];var _t=a(k);nt(_t,()=>n(l),e=>{var o=Wt();i(e,o)},e=>{var o=Bt();i(e,o)});var N=t(t(k,!0)),ut=$(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(l)}}
/>`);m(N,{get content(){return n(ut)}});var S=t(t(N,!0));A(S,"align-items","flex-start");var vt=a(S);P(vt,{attrs:{class:"size_xl5"},get running(){return n(l)}});var V=t(t(W,!0)),Y=a(V);et(Y,{text:"With custom children",slug:"custom-children"});var q=t(t(Y,!0)),lt=$(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(b)}}>
		{${n(v)}}
	</Pending_Animation>
</div>`);m(q,{get content(){return n(lt)}});var D=t(t(q,!0)),z=t(a(D));F(z);var J=t(t(z,!0));J.__click=[Ct,v];var dt=t(t(J,!0));dt.__click=[Lt,v];var y=t(t(D,!0));y.__click=[Nt,b];var ct=a(y);nt(ct,()=>n(b),e=>{var o=St();i(e,o)},e=>{var o=Vt();i(e,o)});var h=t(t(y,!0));A(h,"font-size","var(--size_xl6)"),A(h,"--animation_duration","var(--duration_6)"),A(h,"text-align","center");var pt=a(h);P(pt,{get running(){return n(b)},children:(e,o)=>{var d=zt(e);E(()=>p(d,n(v))),i(e,d)},$$slots:{default:!0}});var mt=t(t(V,!0)),j=a(mt);et(j,{text:"With children index prop",slug:"children-index-prop",children:(e,o)=>{var d=Yt();i(e,d)},$$slots:{default:!0}});var G=t(t(j,!0)),gt=$(()=>`<Pending_Animation running={${n(x)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span style="font-size: var(--size_xl5)">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);m(G,{get content(){return n(gt)}});var H=t(t(G,!0)),ft=t(a(H)),K=a(ft);K.nodeValue="running={";var T=t(K);T.__click=[qt,x];var xt=a(T),bt=t(T,!0);bt.nodeValue="}";var O=t(t(H,!0)),w=t(a(O));F(w);var Q=t(t(w,!0));F(Q);var ht=t(t(O,!0));P(ht,{get running(){return n(x)},children:(o,d=wt)=>{var U=Dt(),X=a(U),$t=a(X),Z=t(t(X,!0)),At=a(Z),Pt=t(Z,!0);E(()=>{p($t,n(g)),p(At,d()),p(Pt,` ${n(f)??""}`)}),i(o,U)}}),E(()=>p(xt,n(x))),I(z,()=>n(v),e=>s(v,e)),I(w,()=>n(g),e=>s(g,e)),I(Q,()=>n(f),e=>s(f,e)),i(ot,R)},$$slots:{default:!0}}),i(u,M),Tt()}Et(["click"]);export{sn as component};
