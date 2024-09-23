import{a as i,t as w,g as z,l as xt}from"../chunks/disclose-version.D7hgbcr2.js";import{p as bt,f as J,a as $t,M as l,g as t,aj as b,s as n,t as K,c as a,d as S,r,ai as O,ah as ht}from"../chunks/runtime.CyUAaF6i.js";import{s as T}from"../chunks/render.CCgqK4Xj.js";import{i as rt,p as Pt}from"../chunks/if.Df50zaIY.js";import{r as Q}from"../chunks/attributes.yEqByiAD.js";import{s as W}from"../chunks/style.Bk7ejTAN.js";import{b as U}from"../chunks/input.CteWEIrl.js";import{C as M}from"../chunks/Code.Bq1kX1g6.js";import{g as At}from"../chunks/tome.BinCi5xK.js";import{P as B}from"../chunks/Pending_Animation.Bg1RTgWs.js";import{T as kt}from"../chunks/Tome_Content.X8f4k4dB.js";import{T as ot,a as it}from"../chunks/Tome_Section_Header.Dn1Bp7Jr.js";var yt=(c,e)=>l(e,!t(e)),zt=(c,e)=>l(e,"🐢🐢🐢"),Tt=(c,e)=>l(e,Pt((t(e)+t(e)).substring(0,24))),Mt=(c,e)=>l(e,!t(e)),wt=w('<!> <!> <p>with children <input> <button type="button">🐢🐢🐢</button> <button type="button">* 2</button></p> <button type="button"><!></button> <div><!></div>',1),Et=w("With children <code>index</code> prop",1),It=(c,e)=>l(e,!t(e)),Rt=w('<div class="row box"><span class="size_xl5"> </span> <span class="index svelte-1tring4"> </span> </div>'),Ct=w('<!> <!> <p>with <code> <button type="button"> </button> </code></p> <p>and children <input> <input></p> <!>',1),Ft=w('<section><!> <!> <div class="mb_lg"><!></div> <button type="button" class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <!> <!>',1);function Ot(c,e){bt(e,!0);const st=At("Pending_Animation");let u=b("🐢"),E=b("🐸"),I=b("⏳"),R=b(!1),p=b(!0),C=b(!1);kt(c,{tome:st,children:(_t,Wt)=>{var X=Ft(),L=J(X),Z=a(L);M(Z,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var tt=n(Z,2),lt=S(()=>`<Pending_Animation running={${t(p)}} />`);M(tt,{get content(){return t(lt)}});var N=n(tt,2),vt=a(N);B(vt,{get running(){return t(p)}}),r(N);var F=n(N,2);F.__click=[yt,p];var dt=a(F);rt(dt,()=>t(p),v=>{var $=z("pause animation");i(v,$)},v=>{var $=z("play animation");i(v,$)}),r(F);var nt=n(F,2),ct=S(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${t(p)}}
/>`);M(nt,{get content(){return t(ct)}});var V=n(nt,2);W(V,"align-items","flex-start");var ut=a(V);B(ut,{attrs:{class:"size_xl5"},get running(){return t(p)}}),r(V),r(L);var et=n(L,2);ot(et,{children:(v,$)=>{var h=wt(),P=J(h);it(P,{text:"With custom children"});var A=n(P,2),Y=S(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${t(C)}}>
		{${t(u)}}
	</Pending_Animation>
</div>`);M(A,{get content(){return t(Y)}});var d=n(A,2),m=n(a(d));Q(m);var k=n(m,2);k.__click=[zt,u];var g=n(k,2);g.__click=[Tt,u],r(d);var f=n(d,2);f.__click=[Mt,C];var j=a(f);rt(j,()=>t(C),o=>{var x=z("pause animation");i(o,x)},o=>{var x=z("play animation");i(o,x)}),r(f);var s=n(f,2);W(s,"font-size","var(--size_xl6)"),W(s,"--animation_duration","var(--duration_6)"),W(s,"text-align","center");var y=a(s);B(y,{get running(){return t(C)},children:(o,x)=>{O();var _=z();K(()=>T(_,t(u))),i(o,_)},$$slots:{default:!0}}),r(s),U(m,()=>t(u),o=>l(u,o)),i(v,h)},$$slots:{default:!0}});var pt=n(et,2);ot(pt,{children:(v,$)=>{var h=Ct(),P=J(h);it(P,{text:"With children index prop",children:(_,at)=>{O();var H=Et();O(2),i(_,H)},$$slots:{default:!0}});var A=n(P,2),Y=S(()=>`<Pending_Animation running={${t(R)}}>
	{#snippet children(index)}
		<div class="row box">
			{${t(E)}}
			{index}
			<span class="size_xl5">
				{${t(I)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);M(A,{get content(){return t(Y)}});var d=n(A,2),m=n(a(d)),k=a(m);k.nodeValue="running={";var g=n(k);g.__click=[It,R];var f=a(g);r(g);var j=n(g,1,!0);j.nodeValue="}",r(m),r(d);var s=n(d,2),y=n(a(s));Q(y);var o=n(y,2);Q(o),r(s);var x=n(s,2);B(x,{get running(){return t(R)},children:(at,H=ht)=>{var q=Rt(),D=a(q),mt=a(D);r(D);var G=n(D,2),gt=a(G);r(G);var ft=n(G);r(q),K(()=>{T(mt,t(E)),T(gt,H()),T(ft,` ${t(I)??""}`)}),i(at,q)}}),K(()=>T(f,t(R))),U(y,()=>t(E),_=>l(E,_)),U(o,()=>t(I),_=>l(I,_)),i(v,h)},$$slots:{default:!0}}),i(_t,X)},$$slots:{default:!0}}),$t()}xt(["click"]);export{Ot as component};
