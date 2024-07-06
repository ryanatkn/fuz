import{a as i,t as _,c as a,s as t,D as $t,f as At}from"../chunks/disclose-version.BHqvyKx-.js";import{p as Pt,a as kt,g as n,t as E,n as s,C as c,d as $,G as yt}from"../chunks/runtime.VNSPx__r.js";import{d as zt,s as p}from"../chunks/render.BZs1ZF8H.js";import{p as Tt}from"../chunks/proxy.CO2BnZf8.js";import{i as Z}from"../chunks/if.Dmk6Jy1T.js";import{r as I}from"../chunks/attributes.B0eU8BeJ.js";import{s as A}from"../chunks/style.iv2mhl8q.js";import{b as M}from"../chunks/input.FgKH7d7O.js";import{C as m}from"../chunks/Code.DpsevpDf.js";import{g as wt}from"../chunks/tome.BuafWkLb.js";import{P}from"../chunks/Pending_Animation.Cr0DN68O.js";import{T as Et}from"../chunks/Tome_Detail.B_QKVIdr.js";import{T as tt}from"../chunks/Tome_Subheading.CdaVKxjQ.js";var It=(u,r)=>s(r,!n(r)),Mt=_("pause animation",1),Rt=_("play animation",1),Ct=(u,r)=>s(r,"🐢🐢🐢"),Ft=(u,r)=>s(r,Tt((n(r)+n(r)).substring(0,24))),Wt=(u,r)=>s(r,!n(r)),Bt=_("pause animation",1),Dt=_("play animation",1),Lt=_("With children <code>index</code> prop",1),Nt=(u,r)=>s(r,!n(r)),St=_('<div class="row box"><span class="size_xl5"> </span> <span class="index svelte-1tring4"> </span> </div>'),Vt=_('<section><!> <!> <div class="mb_lg"><!></div> <button type="button" class="mb_lg"><!></button> <!> <div class="box" role="none"><!></div></section> <section><!> <!> <p>with children <input> <button type="button">🐢🐢🐢</button> <button type="button">* 2</button></p> <button type="button"><!></button> <div><!></div></section> <section><!> <!> <p>with <code> <button type="button"> </button> </code></p> <p>and children <input> <input></p> <!></section>',1);function rn(u,r){Pt(r,!0);const nt=wt("Pending_Animation");let v=c("🐢"),g=c("🐸"),f=c("⏳"),b=c(!1),l=c(!0),x=c(!1);Et(u,{tome:nt,children:(et,Gt)=>{var R=Vt(),C=At(R),F=a(C);m(F,{content:"import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';",lang:"ts"});var W=t(t(F,!0)),rt=$(()=>`<Pending_Animation running={${n(l)}} />`);m(W,{get content(){return n(rt)}});var B=t(t(W,!0)),at=a(B);P(at,{get running(){return n(l)}});var k=t(t(B,!0));k.__click=[It,l];var ot=a(k);Z(ot,()=>n(l),e=>{var o=Mt();i(e,o)},e=>{var o=Rt();i(e,o)});var D=t(t(k,!0)),it=$(()=>`<Pending_Animation
	attrs={{class: 'size_xl5'}}
	running={${n(l)}}
/>`);m(D,{get content(){return n(it)}});var L=t(t(D,!0));A(L,"align-items","flex-start");var st=a(L);P(st,{attrs:{class:"size_xl5"},get running(){return n(l)}});var N=t(t(C,!0)),S=a(N);tt(S,{text:"With custom children",slug:"custom-children"});var V=t(t(S,!0)),_t=$(()=>`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${n(x)}}>
		{${n(v)}}
	</Pending_Animation>
</div>`);m(V,{get content(){return n(_t)}});var Y=t(t(V,!0)),y=t(a(Y));I(y);var G=t(t(y,!0));G.__click=[Ct,v];var ut=t(t(G,!0));ut.__click=[Ft,v];var z=t(t(Y,!0));z.__click=[Wt,x];var vt=a(z);Z(vt,()=>n(x),e=>{var o=Bt();i(e,o)},e=>{var o=Dt();i(e,o)});var h=t(t(z,!0));A(h,"font-size","var(--size_xl6)"),A(h,"--animation_duration","var(--duration_6)"),A(h,"text-align","center");var lt=a(h);P(lt,{get running(){return n(x)},children:(e,o)=>{var d=$t(e);E(()=>p(d,n(v))),i(e,d)},$$slots:{default:!0}});var dt=t(t(N,!0)),j=a(dt);tt(j,{text:"With children index prop",slug:"children-index-prop",children:(e,o)=>{var d=Lt();i(e,d)},$$slots:{default:!0}});var q=t(t(j,!0)),ct=$(()=>`<Pending_Animation running={${n(b)}}>
	{#snippet children(index)}
		<div class="row box">
			{${n(g)}}
			{index}
			<span class="size_xl5">
				{${n(f)}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`);m(q,{get content(){return n(ct)}});var H=t(t(q,!0)),pt=t(a(H)),J=a(pt);J.nodeValue="running={";var T=t(J);T.__click=[Nt,b];var mt=a(T),gt=t(T,!0);gt.nodeValue="}";var K=t(t(H,!0)),w=t(a(K));I(w);var O=t(t(w,!0));I(O);var ft=t(t(K,!0));P(ft,{get running(){return n(b)},children:(o,d=yt)=>{var Q=St(),U=a(Q),bt=a(U),X=t(t(U,!0)),xt=a(X),ht=t(X,!0);E(()=>{p(bt,n(g)),p(xt,d()),p(ht,` ${n(f)??""}`)}),i(o,Q)}}),E(()=>p(mt,n(b))),M(y,()=>n(v),e=>s(v,e)),M(w,()=>n(g),e=>s(g,e)),M(O,()=>n(f),e=>s(f,e)),i(et,R)},$$slots:{default:!0}}),kt()}zt(["click"]);export{rn as component};
