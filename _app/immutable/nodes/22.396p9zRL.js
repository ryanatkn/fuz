import{b as zt,a as o,t as u,f as Z,c as a,s as t,l as yt}from"../chunks/disclose-version.g1lNbIEt.js";import{p as Tt,a as wt,g as n,t as E,v as s,K as c,d as $,a6 as Et}from"../chunks/runtime.BNQUFw9P.js";import{d as It,a as tt,s as p}from"../chunks/render.BfRz317k.js";import{p as Mt}from"../chunks/proxy.e8IdU8z_.js";import{i as nt}from"../chunks/if.tys1TH-B.js";import{r as I}from"../chunks/attributes.BbCbgtXg.js";import{s as A}from"../chunks/style.iv2mhl8q.js";import{b as M}from"../chunks/input.Cj5A9DgV.js";import{C as m}from"../chunks/Code.CmOe_vY5.js";import{g as Rt}from"../chunks/tome.BkNJ7AoT.js";import{P}from"../chunks/Pending_Animation.BCCl5I3_.js";import{T as Ft}from"../chunks/Tome_Detail.DIZ-GXT2.js";import{T as et}from"../chunks/Tome_Subheading.B-Jl7j99.js";var St=(v,r)=>s(r,!n(r)),Wt=u("pause animation",1),Bt=u("play animation",1),Ct=(v,r)=>s(r,"🐢🐢🐢"),Dt=(v,r)=>s(r,Mt((n(r)+n(r)).substring(0,24))),Lt=(v,r)=>s(r,!n(r)),Nt=u("pause animation",1),Vt=u("play animation",1),Yt=u("With children <code>index</code> prop",1),Kt=(v,r)=>s(r,!n(r)),jt=u('<div class="row box"><span style="font-size: var(--size_xl5)"> </span> <span class="index svelte-1tring4"> </span> </div>'),qt=u('<section><!> <!> <div class="mb_lg"><!></div> <button class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button>🐢🐢🐢</button> <button>* 2</button></p> <button><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function _n(v,r){Tt(r,!0);const rt=Rt("Pending_Animation");let l=c("🐢"),g=c("🐸"),f=c("⏳"),x=c(!1),d=c(!0),b=c(!1);var R=zt(),at=Z(R);Ft(at,{tome:rt,children:(it,Ht)=>{var F=qt(),S=Z(F),W=a(S);m(W,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var B=t(t(W,!0)),ot=$(()=>`<Pending_Animation running={${n(d)}} />`);m(B,{get content(){return n(ot)}});var C=t(t(B,!0)),st=a(C);P(st,{get running(){return n(d)}});var k=t(t(C,!0));k.__click=[St,d];var _t=a(k);nt(_t,()=>n(d),e=>{var i=Wt();o(e,i)},e=>{var i=Bt();o(e,i)});var D=t(t(k,!0)),ut=$(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(d)}}
/>`);m(D,{get content(){return n(ut)}});var L=t(t(D,!0));A(L,"align-items","flex-start");var vt=a(L);P(vt,{attrs:{class:"size_xl5"},get running(){return n(d)}});var N=t(t(S,!0)),V=a(N);et(V,{text:"With custom children",slug:"custom-children"});var Y=t(t(V,!0)),lt=$(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(b)}}>
		{${n(l)}}
	</Pending_Animation>
</div>`);m(Y,{get content(){return n(lt)}});var K=t(t(Y,!0)),z=t(a(K));I(z);var j=t(t(z,!0));j.__click=[Ct,l];var dt=t(t(j,!0));dt.__click=[Dt,l];var y=t(t(K,!0));y.__click=[Lt,b];var ct=a(y);nt(ct,()=>n(b),e=>{var i=Nt();o(e,i)},e=>{var i=Vt();o(e,i)});var h=t(t(y,!0));A(h,"font-size","var(--size_xl6)"),A(h,"--animation_duration","var(--duration_6)"),A(h,"text-align","center");var pt=a(h);P(pt,{get running(){return n(b)},children:(e,i)=>{var _=yt(e);E(()=>p(_,n(l))),o(e,_)},$$slots:{default:!0}});var mt=t(t(N,!0)),q=a(mt);et(q,{text:"With children index prop",slug:"children-index-prop",children:(e,i)=>{var _=Yt();o(e,_)},$$slots:{default:!0}});var G=t(t(q,!0)),gt=$(()=>`<Pending_Animation running={${n(x)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span style="font-size: var(--size_xl5)">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);m(G,{get content(){return n(gt)}});var H=t(t(G,!0)),ft=t(a(H)),J=a(ft);J.nodeValue="running={";var T=t(J);T.__click=[Kt,x];var xt=a(T),bt=t(T,!0);bt.nodeValue=tt("}");var O=t(t(H,!0)),w=t(a(O));I(w);var Q=t(t(w,!0));I(Q);var ht=t(t(O,!0));{var $t=(e,i=Et)=>{var _=jt(),U=a(_),At=a(U),X=t(t(U,!0)),Pt=a(X),kt=t(X,!0);E(()=>{p(At,n(g)),p(Pt,i()),p(kt,` ${tt(n(f))}`)}),o(e,_)};P(ht,{get running(){return n(x)},children:$t})}E(()=>p(xt,n(x))),M(z,()=>n(l),e=>s(l,e)),M(w,()=>n(g),e=>s(g,e)),M(Q,()=>n(f),e=>s(f,e)),o(it,F)},$$slots:{default:!0}}),o(v,R),wt()}It(["click"]);export{_n as component};
