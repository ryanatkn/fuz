import{t as I,a as s,j as T,k as $t}from"../chunks/CbbyqTNh.js";import{p as ht,a as Pt,f as K,k as r,g as t,s as n,G as l,a2 as b,d as B,l as o,a0 as O,t as Q,$ as kt}from"../chunks/C9aPwLmV.js";import{s as w}from"../chunks/Bb4_Y-AM.js";import{i as rt,p as At}from"../chunks/DSlEI_lp.js";import{r as U}from"../chunks/DGBAUQNC.js";import{s as L}from"../chunks/PwPRnE0L.js";import{b as X}from"../chunks/1Saa3kjD.js";import{C as E}from"../chunks/B0TzJDWH.js";import{g as yt}from"../chunks/DggT_4Xt.js";import{P as N}from"../chunks/Dc4r8A7J.js";import{T as zt}from"../chunks/D_X0wh0f.js";import{T as ot,a as it}from"../chunks/COdbsGyK.js";var Tt=(u,a)=>l(a,!t(a)),wt=(u,a)=>l(a,"🐢🐢🐢"),Et=(u,a)=>l(a,At((t(a)+t(a)).substring(0,24))),It=(u,a)=>l(a,!t(a)),Mt=I('<!> <!> <p>with children <input> <button type="button">🐢🐢🐢</button> <button type="button">* 2</button></p> <button type="button"><!></button> <div><!></div>',1),Rt=I("With children <code>index</code> prop",1),Ct=(u,a)=>l(a,!t(a)),St=I('<div class="row box"><span class="size_xl5"> </span> <span class="index svelte-1tring4"> </span> </div>'),Wt=I('<!> <!> <p>with <code> <button type="button"> </button> </code></p> <p>and children <input> <input></p> <!>',1),Bt=I('<section><!> <!> <div class="mb_lg"><!></div> <button type="button" class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <!> <!>',1);function Ut(u,a){ht(a,!0);const st=yt("Pending_Animation");let p=b("🐢"),M=b("🐸"),R=b("⏳"),C=b(!1),c=b(!0),S=b(!1);zt(u,{tome:st,children:(_t,Nt)=>{var Z=Bt(),V=K(Z),tt=r(V);E(tt,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var nt=n(tt,2);const lt=B(()=>`<Pending_Animation running={${t(c)}} />`);E(nt,{get content(){return t(lt)}});var Y=n(nt,2),vt=r(Y);N(vt,{get running(){return t(c)}}),o(Y);var W=n(Y,2);W.__click=[Tt,c];var dt=r(W);{var ut=i=>{var $=T("pause animation");s(i,$)},pt=i=>{var $=T("play animation");s(i,$)};rt(dt,i=>{t(c)?i(ut):i(pt,!1)})}o(W);var et=n(W,2);const ct=B(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${t(c)}}
/>`);E(et,{get content(){return t(ct)}});var j=n(et,2);L(j,"align-items","flex-start");var mt=r(j);N(mt,{attrs:{class:"size_xl5"},get running(){return t(c)}}),o(j),o(V);var at=n(V,2);ot(at,{children:(i,$)=>{var h=Mt(),P=K(h);it(P,{text:"With custom children"});var k=n(P,2);const G=B(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${t(S)}}>
		{${t(p)}}
	</Pending_Animation>
</div>`);E(k,{get content(){return t(G)}});var v=n(k,2),m=n(r(v));U(m);var A=n(m,2);A.__click=[wt,p];var g=n(A,2);g.__click=[Et,p],o(v);var f=n(v,2);f.__click=[It,S];var H=r(f);{var y=e=>{var d=T("pause animation");s(e,d)},z=e=>{var d=T("play animation");s(e,d)};rt(H,e=>{t(S)?e(y):e(z,!1)})}o(f);var _=n(f,2);L(_,"font-size","var(--size_xl6)"),L(_,"--animation_duration","var(--duration_6)"),L(_,"text-align","center");var q=r(_);N(q,{get running(){return t(S)},children:(e,d)=>{O();var x=T();Q(()=>w(x,t(p))),s(e,x)},$$slots:{default:!0}}),o(_),X(m,()=>t(p),e=>l(p,e)),s(i,h)},$$slots:{default:!0}});var gt=n(at,2);ot(gt,{children:(i,$)=>{var h=Wt(),P=K(h);it(P,{text:"With children index prop",children:(e,d)=>{O();var x=Rt();O(2),s(e,x)},$$slots:{default:!0}});var k=n(P,2);const G=B(()=>`<Pending_Animation running={${t(C)}}>
	{#snippet children(index)}
		<div class="row box">
			{${t(M)}}
			{index}
			<span class="size_xl5">
				{${t(R)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);E(k,{get content(){return t(G)}});var v=n(k,2),m=n(r(v)),A=r(m);A.nodeValue="running={";var g=n(A);g.__click=[Ct,C];var f=r(g,!0);o(g);var H=n(g,1,!0);H.nodeValue="}",o(m),o(v);var y=n(v,2),z=n(r(y));U(z);var _=n(z,2);U(_),o(y);var q=n(y,2);N(q,{get running(){return t(C)},children:(d,x=kt)=>{var D=St(),F=r(D),ft=r(F,!0);o(F);var J=n(F,2),xt=r(J,!0);o(J);var bt=n(J);o(D),Q(()=>{w(ft,t(M)),w(xt,x()),w(bt,` ${t(R)??""}`)}),s(d,D)},$$slots:{default:!0}}),Q(()=>w(f,t(C))),X(z,()=>t(M),e=>l(M,e)),X(_,()=>t(R),e=>l(R,e)),s(i,h)},$$slots:{default:!0}}),s(_t,Z)},$$slots:{default:!0}}),Pt()}$t(["click"]);export{Ut as component};
