import{b as kt,a as i,t as v,f as Z,c as a,s as t,m as zt}from"../chunks/disclose-version.E6IJI96N.js";import{p as yt,a as Tt,g as n,t as I,w as s,I as c,d as $,K as wt}from"../chunks/runtime.BaU8wwyi.js";import{d as It,s as p}from"../chunks/render.BOq403Mo.js";import{p as Et}from"../chunks/proxy.D936owAO.js";import{i as tt}from"../chunks/if.Cxoc_153.js";import{r as E}from"../chunks/attributes.DNk-zn62.js";import{s as A}from"../chunks/style.iv2mhl8q.js";import{b as M}from"../chunks/input.DlqoBkHu.js";import{C as m}from"../chunks/Code.w1TMYuNb.js";import{g as Mt}from"../chunks/tome.BstDQqpu.js";import{P}from"../chunks/Pending_Animation.wUtWlcZC.js";import{T as Rt}from"../chunks/Tome_Detail.DHx0TW2e.js";import{T as nt}from"../chunks/Tome_Subheading.BtG7GGkm.js";var Ft=(u,r)=>s(r,!n(r)),Wt=v("pause animation",1),Bt=v("play animation",1),Ct=(u,r)=>s(r,"🐢🐢🐢"),Lt=(u,r)=>s(r,Et((n(r)+n(r)).substring(0,24))),Nt=(u,r)=>s(r,!n(r)),St=v("pause animation",1),Vt=v("play animation",1),Yt=v("With children <code>index</code> prop",1),Dt=(u,r)=>s(r,!n(r)),Kt=v('<div class="row box"><span style="font-size: var(--size_xl5)"> </span> <span class="index svelte-1tring4"> </span> </div>'),jt=v('<section><!> <!> <div class="mb_lg"><!></div> <button class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button>🐢🐢🐢</button> <button>* 2</button></p> <button><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function sn(u,r){yt(r,!0);const et=Mt("Pending_Animation");let l=c("🐢"),g=c("🐸"),f=c("⏳"),x=c(!1),d=c(!0),b=c(!1);var R=kt(),rt=Z(R);Rt(rt,{tome:et,children:(at,Gt)=>{var F=jt(),W=Z(F),B=a(W);m(B,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var C=t(t(B,!0)),ot=$(()=>`<Pending_Animation running={${n(d)}} />`);m(C,{get content(){return n(ot)}});var L=t(t(C,!0)),it=a(L);P(it,{get running(){return n(d)}});var k=t(t(L,!0));k.__click=[Ft,d];var st=a(k);tt(st,()=>n(d),e=>{var o=Wt();i(e,o)},e=>{var o=Bt();i(e,o)});var N=t(t(k,!0)),_t=$(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(d)}}
/>`);m(N,{get content(){return n(_t)}});var S=t(t(N,!0));A(S,"align-items","flex-start");var vt=a(S);P(vt,{attrs:{class:"size_xl5"},get running(){return n(d)}});var V=t(t(W,!0)),Y=a(V);nt(Y,{text:"With custom children",slug:"custom-children"});var D=t(t(Y,!0)),ut=$(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(b)}}>
		{${n(l)}}
	</Pending_Animation>
</div>`);m(D,{get content(){return n(ut)}});var K=t(t(D,!0)),z=t(a(K));E(z);var j=t(t(z,!0));j.__click=[Ct,l];var lt=t(t(j,!0));lt.__click=[Lt,l];var y=t(t(K,!0));y.__click=[Nt,b];var dt=a(y);tt(dt,()=>n(b),e=>{var o=St();i(e,o)},e=>{var o=Vt();i(e,o)});var h=t(t(y,!0));A(h,"font-size","var(--size_xl6)"),A(h,"--animation_duration","var(--duration_6)"),A(h,"text-align","center");var ct=a(h);P(ct,{get running(){return n(b)},children:(e,o)=>{var _=zt(e);I(()=>p(_,n(l))),i(e,_)},$$slots:{default:!0}});var pt=t(t(V,!0)),q=a(pt);nt(q,{text:"With children index prop",slug:"children-index-prop",children:(e,o)=>{var _=Yt();i(e,_)},$$slots:{default:!0}});var G=t(t(q,!0)),mt=$(()=>`<Pending_Animation running={${n(x)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span style="font-size: var(--size_xl5)">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);m(G,{get content(){return n(mt)}});var H=t(t(G,!0)),gt=t(a(H)),J=a(gt);J.nodeValue="running={";var T=t(J);T.__click=[Dt,x];var ft=a(T),xt=t(T,!0);xt.nodeValue="}";var O=t(t(H,!0)),w=t(a(O));E(w);var Q=t(t(w,!0));E(Q);var bt=t(t(O,!0));{var ht=(e,o=wt)=>{var _=Kt(),U=a(_),$t=a(U),X=t(t(U,!0)),At=a(X),Pt=t(X,!0);I(()=>{p($t,n(g)),p(At,o()),p(Pt,` ${n(f)??""}`)}),i(e,_)};P(bt,{get running(){return n(x)},children:ht})}I(()=>p(ft,n(x))),M(z,()=>n(l),e=>s(l,e)),M(w,()=>n(g),e=>s(g,e)),M(Q,()=>n(f),e=>s(f,e)),i(at,F)},$$slots:{default:!0}}),i(u,R),Tt()}It(["click"]);export{sn as component};
