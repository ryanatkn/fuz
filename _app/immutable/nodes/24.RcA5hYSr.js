import{a as i,t as E,g as z,l as xt}from"../chunks/disclose-version.C-Ww6_-A.js";import{p as bt,f as G,a as $t,K as l,g as t,ai as b,s as n,t as J,c as a,d as S,r,ah as O,ag as ht}from"../chunks/runtime.bViC5kxD.js";import{s as T}from"../chunks/render.HNLfjup5.js";import{i as rt,p as Pt}from"../chunks/if.xjYjBMBU.js";import{r as Q}from"../chunks/attributes.CEZtrAcH.js";import{s as W}from"../chunks/style.Bk7ejTAN.js";import{b as U}from"../chunks/input.BGGD6a6C.js";import{C as w}from"../chunks/Code.CVPzi4QU.js";import{g as At}from"../chunks/tome.BNJ_Ln0v.js";import{P as B}from"../chunks/Pending_Animation.Bs5pm-EF.js";import{T as kt}from"../chunks/Tome_Content.TLTK8WGI.js";import{T as ot,a as it}from"../chunks/Tome_Section_Header.OkKmkifX.js";var yt=(c,e)=>l(e,!t(e)),zt=(c,e)=>l(e,"🐢🐢🐢"),Tt=(c,e)=>l(e,Pt((t(e)+t(e)).substring(0,24))),wt=(c,e)=>l(e,!t(e)),Et=E('<!> <!> <p>with children <input> <button type="button">🐢🐢🐢</button> <button type="button">* 2</button></p> <button type="button"><!></button> <div><!></div>',1),It=E("With children <code>index</code> prop",1),Mt=(c,e)=>l(e,!t(e)),Rt=E('<div class="row box"><span class="size_xl5"> </span> <span class="index svelte-1tring4"> </span> </div>'),Ct=E('<!> <!> <p>with <code> <button type="button"> </button> </code></p> <p>and children <input> <input></p> <!>',1),Ft=E('<section><!> <!> <div class="mb_lg"><!></div> <button type="button" class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <!> <!>',1);function Ot(c,e){bt(e,!0);const st=At("Pending_Animation");let u=b("🐢"),I=b("🐸"),M=b("⏳"),R=b(!1),p=b(!0),C=b(!1);kt(c,{tome:st,children:(_t,Wt)=>{var X=Ft(),L=G(X),Z=a(L);w(Z,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var tt=n(Z,2),lt=S(()=>`<Pending_Animation running={${t(p)}} />`);w(tt,{get content(){return t(lt)}});var N=n(tt,2),vt=a(N);B(vt,{get running(){return t(p)}}),r(N);var F=n(N,2);F.__click=[yt,p];var dt=a(F);rt(dt,()=>t(p),v=>{var $=z("pause animation");i(v,$)},v=>{var $=z("play animation");i(v,$)}),r(F);var nt=n(F,2),ct=S(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${t(p)}}
/>`);w(nt,{get content(){return t(ct)}});var V=n(nt,2);W(V,"align-items","flex-start");var ut=a(V);B(ut,{attrs:{class:"size_xl5"},get running(){return t(p)}}),r(V),r(L);var et=n(L,2);ot(et,{children:(v,$)=>{var h=Et(),P=G(h);it(P,{text:"With custom children"});var A=n(P,2),Y=S(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${t(C)}}>
		{${t(u)}}
	</Pending_Animation>
</div>`);w(A,{get content(){return t(Y)}});var d=n(A,2),m=n(a(d));Q(m);var k=n(m,2);k.__click=[zt,u];var g=n(k,2);g.__click=[Tt,u],r(d);var f=n(d,2);f.__click=[wt,C];var H=a(f);rt(H,()=>t(C),o=>{var x=z("pause animation");i(o,x)},o=>{var x=z("play animation");i(o,x)}),r(f);var s=n(f,2);W(s,"font-size","var(--size_xl6)"),W(s,"--animation_duration","var(--duration_6)"),W(s,"text-align","center");var y=a(s);B(y,{get running(){return t(C)},children:(o,x)=>{O();var _=z();J(()=>T(_,t(u))),i(o,_)},$$slots:{default:!0}}),r(s),U(m,()=>t(u),o=>l(u,o)),i(v,h)},$$slots:{default:!0}});var pt=n(et,2);ot(pt,{children:(v,$)=>{var h=Ct(),P=G(h);it(P,{text:"With children index prop",children:(_,at)=>{O();var K=It();O(2),i(_,K)},$$slots:{default:!0}});var A=n(P,2),Y=S(()=>`<Pending_Animation running={${t(R)}}>
	{#snippet children(index)}
		<div class="row box">
			{${t(I)}}
			{index}
			<span class="size_xl5">
				{${t(M)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);w(A,{get content(){return t(Y)}});var d=n(A,2),m=n(a(d)),k=a(m);k.nodeValue="running={";var g=n(k);g.__click=[Mt,R];var f=a(g);r(g);var H=n(g,1,!0);H.nodeValue="}",r(m),r(d);var s=n(d,2),y=n(a(s));Q(y);var o=n(y,2);Q(o),r(s);var x=n(s,2);B(x,{get running(){return t(R)},children:(at,K=ht)=>{var j=Rt(),q=a(j),mt=a(q);r(q);var D=n(q,2),gt=a(D);r(D);var ft=n(D);r(j),J(()=>{T(mt,t(I)),T(gt,K()),T(ft,` ${t(M)??""}`)}),i(at,j)}}),J(()=>T(f,t(R))),U(y,()=>t(I),_=>l(I,_)),U(o,()=>t(M),_=>l(M,_)),i(v,h)},$$slots:{default:!0}}),i(_t,X)},$$slots:{default:!0}}),$t()}xt(["click"]);export{Ot as component};
