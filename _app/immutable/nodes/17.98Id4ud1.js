import{l as Rt,c as U,a as l,k as lt,t as m,p as St}from"../chunks/disclose-version.BmNp8pRT.js";import{m as wt,f as P,p as Tt,a as At,g as n,d as Bt,t as Q,a6 as S,G as _,s as o,c as d,a4 as B,r as s,a3 as it}from"../chunks/runtime.CTRYSQ17.js";import{s as st}from"../chunks/render.CRd-sPzB.js";import{a as Nt,i as C,p as N}from"../chunks/if.CQC794wY.js";import{e as et,i as dt}from"../chunks/context_helpers.BjzmN15b.js";import{c as It}from"../chunks/svelte-component.CdTH4dQe.js";import{s as vt}from"../chunks/style.PwPRnE0L.js";import{t as Ot,s as Yt}from"../chunks/index.Did-jBBm.js";import{s as ut,p as jt}from"../chunks/props.Dw9ghfrp.js";import{C as Ft}from"../chunks/Code.DpTM-mqG.js";import{A as Gt}from"../chunks/Alert.CR-1uUTZ.js";import{T as Ht}from"../chunks/Tome_Content.BxEMfj2D.js";import{g as Ut}from"../chunks/tome.DeebEyLr.js";import{D as H}from"../chunks/Dialog.BYnRjZ5w.js";import{T as Wt}from"../chunks/Tome_Link.FBtIxd7z.js";import{M as Jt}from"../chunks/Mdn_Link.BVOzoAuE.js";import{s as Kt}from"../chunks/attributes.Bd3_RS60.js";import{e as Qt}from"../chunks/svelte-element.RaleMG77.js";function Dt(e,t,c){if(e.multiple)return Xt(e,t);for(var u of e.options){var v=ot(u);if(Nt(v,t)){u.selected=!0;return}}(!c||t!==void 0)&&(e.selectedIndex=-1)}function Vt(e,t){wt(()=>{var c=new MutationObserver(()=>{var u=e.__value;Dt(e,u)});return c.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{c.disconnect()}})}function yt(e,t,c=t){var u=!0;Rt(e,"change",v=>{var p=v?"[selected]":":checked",A;if(e.multiple)A=[].map.call(e.querySelectorAll(p),ot);else{var I=e.querySelector(p)??e.querySelector("option:not([disabled])");A=I&&ot(I)}c(A)}),wt(()=>{var v=t();if(Dt(e,v,u),u&&v===void 0){var p=e.querySelector(":checked");p!==null&&(v=ot(p),c(v))}e.__value=v,u=!1}),Vt(e)}function Xt(e,t){for(var c of e.options)c.selected=~t.indexOf(ot(c))}function ot(e){return"__value"in e?e.__value:e.value}function Zt(e,t){At(t,!0);var c=U(),u=P(c);et(u,18,()=>t.dialogs,v=>v,(v,p,A)=>{var I=Bt(()=>n(A)===t.dialogs.length-1);H(v,ut({get onclose(){return t.onclose}},()=>p.dialog_props,{get index(){return n(A)},get active(){return n(I)},children:(W,J)=>{var k=U(),z=P(k);{var _t=R=>{var E=U(),V=P(E);Kt(V,()=>t.children,()=>p),l(R,E)},ct=R=>{var E=U(),V=P(E);It(V,()=>p.Component,(at,nt)=>{nt(at,ut(()=>p.props))}),l(R,E)};C(z,R=>{t.children?R(_t):R(ct,!1)})}l(W,k)},$$slots:{default:!0}}))}),l(e,c),Tt()}const te=(e,t,c)=>({Component:e,props:t,dialog_props:c}),xt=["centered","page"];function ee(e,t){const c=jt(t,"tag",3,"span");var u=U(),v=P(u);Qt(v,c,!1,(p,A)=>{Q(()=>{vt(p,"font-size",t.size),vt(p,"padding",t.padding)});var I=lt();Q(()=>st(I,t.text)),l(A,I)}),l(e,u)}var oe=(e,t)=>_(t,!0),ae=(e,t)=>_(t,!0),ne=(e,t)=>_(t,!0),re=(e,t)=>_(t,!0),ie=(e,t)=>t(5),le=m(`<section><p>A modal that overlays the entire page. Uses <!> to allow usage from any
			component without inheriting styles.</p> <aside>⚠️ This will change to use and align APIs with the builtin <!>. API</aside></section> <section><!></section> <section><button type="button" class="mb_lg">open a dialog</button> <button type="button" class="mb_lg">open a dialog that overflows vertically</button> <button type="button" class="mb_lg">open a dialog with <code>layout="page"</code> instead of the default <code>layout='centered'</code></button> <button type="button" class="mb_lg">open a dialog containing another dialog</button> <button type="button" class="mb_lg">open many dialogs</button></section>`,1),se=m('<div class="pane p_xl box"><h1>attention</h1> <p>this is a dialog</p> <button type="button">ok</button></div>'),_e=m("<p>this is a dialog that overflows vertically</p>"),ce=m('<div class="pane p_xl"><h1>attention</h1> <!> <button type="button">close</button></div>'),de=m("<option> </option>"),ve=m(`<p>This is a <code>Dialog</code> with <code>layout="<select></select>"</code>.</p> <p>Instead of being centered by default, the dialog's contents are aligned to the top of
						the page and grow downward. It's useful when the dialog's contents change in height.</p>`,1),ue=m("<option> </option>"),pe=m(`<p>This is a <code>Dialog</code> with <code>layout="<select></select>"</code>, the default value.</p> <p>It's often the best choice, but it can be undesirable in some situations, like when the
						height of the content changes as the user does things, leading to a janky experience.</p>`,1),fe=(e,t)=>t(),ge=(e,t)=>t(),be=(e,t,c)=>t(c),he=m('<p><button type="button">✕</button> new stuff appears <!></p>'),me=m('<div class="pane p_xl width_md"><!> <p><button type="button">add item</button> <button type="button">remove all</button></p> <!> <button type="button">close</button></div>'),ke=(e,t)=>_(t,!0),ye=m('<div class="pane p_xl"><h1>dialog 1</h1> <p>dialogs can open more dialogs</p> <button type="button">open another dialog</button></div>'),xe=(e,t)=>_(t,!0),we=m('<div class="pane p_xl"><h1>dialog 2</h1> <p>this dialog can open more dialogs</p> <p>this is the second dialog</p> <button type="button">open another dialog</button></div>'),Te=(e,t)=>_(t,!1),Ae=(e,t,c,u)=>{_(t,N(_(c,N(_(u,!1)))))},Ie=m('<div class="pane p_xl"><h1>3 dialogs!</h1> <button type="button">close dialog</button></div> <div class="pane p_xl"><h1>and another <code>.pane</code></h1> <button type="button">close all dialogs</button></div>',1),De=m('<div class="pane"><!></div>'),Me=m("<!> <!> <!> <!> <!> <!> <!> <!>",1);function We(e,t){At(t,!0);const u=Ut("Dialog");let v=S(!1),p=S(!1),A=S(!1),I=S(!1),W=S(!1),J=S(!1),k=S("page"),z=S(N([]));const _t=a=>{_(z,N(n(z).filter(b=>b!==a)))},ct=()=>{_(z,N(n(z).concat({})))},R=()=>{_(z,N([]))};let E=S(N([]));const V=a=>{const b=f=>"!".repeat(a*3-f*3);_(E,N(Array.from({length:a},(f,r)=>te(ee,{text:b(r),size:"var(--size_xl4)",padding:"var(--space_sm) var(--space_lg)"}))))};var at=Me(),nt=P(at);Ht(nt,{tome:u,children:(a,b)=>{var f=le(),r=P(f),i=d(r),y=o(d(i));Wt(y,{name:"Teleport"}),B(),s(i);var x=o(i,2),D=o(d(x));Jt(D,{path:"Web/HTML/Element/dialog"}),B(),s(x),s(r);var $=o(r,2),K=d($);Ft(K,{content:`<button onclick={() => (opened = true)}>
	open a dialog
</button>
{#if opened}
	<Dialog onclose={() => (opened = false)}>
		{#snippet children(close)}
			<div class="pane p_xl box">
				<h1>attention</h1>
				<p>this is a dialog</p>
				<button onclick={close}>ok</button>
			</div>
		{/snippet}
	</Dialog>
{/if}`}),s($);var X=o($,2),Z=d(X);Z.__click=[oe,v];var rt=o(Z,2);rt.__click=[ae,p];var h=o(rt,2);h.__click=[ne,A];var w=o(h,2);w.__click=[re,I];var L=o(w,2);L.__click=[ie,V],s(X),l(a,f)},$$slots:{default:!0}});var pt=o(nt,2);{var Mt=a=>{H(a,{onclose:()=>_(v,!1),children:(f,r=it)=>{var i=se(),y=o(d(i),4);y.__click=function(...x){var D;(D=r())==null||D.apply(this,x)},s(i),l(f,i)},$$slots:{default:!0}})};C(pt,a=>{n(v)&&a(Mt)})}var ft=o(pt,2);{var Pt=a=>{H(a,{onclose:()=>_(p,!1),children:(f,r=it)=>{var i=ce(),y=o(d(i),2);et(y,16,()=>({length:120}),dt,(D,$)=>{var K=_e();l(D,K)});var x=o(y,2);x.__click=function(...D){var $;($=r())==null||$.apply(this,D)},s(i),l(f,i)},$$slots:{default:!0}})};C(ft,a=>{n(p)&&a(Pt)})}var gt=o(ft,2);{var $t=a=>{H(a,{onclose:()=>(_(A,!1),R()),get layout(){return n(k)},children:(f,r=it)=>{var i=me(),y=d(i);{var x=h=>{var w=ve(),L=P(w),Y=o(d(L),3),j=o(d(Y));et(j,21,()=>xt,dt,(M,q)=>{var g=de(),T={},F=d(g,!0);s(g),Q(()=>{T!==(T=n(q))&&(g.value=(g.__value=n(q))==null?"":n(q)),st(F,n(q))}),l(M,g)}),s(j),B(),s(Y),B(),s(L),B(2),yt(j,()=>n(k),M=>_(k,M)),l(h,w)},D=h=>{var w=U(),L=P(w);{var Y=M=>{var q=pe(),g=P(q),T=o(d(g),3),F=o(d(T));et(F,21,()=>xt,dt,(tt,O)=>{var G=ue(),kt={},zt=d(G,!0);s(G),Q(()=>{kt!==(kt=n(O))&&(G.value=(G.__value=n(O))==null?"":n(O)),st(zt,n(O))}),l(tt,G)}),s(F),B(),s(T),B(),s(g),B(2),yt(F,()=>n(k),tt=>_(k,tt)),l(M,q)},j=M=>{Gt(M,{status:"error",children:(q,g)=>{B();var T=lt();Q(()=>st(T,`eek a bug! unknown layout "${n(k)??""}"`)),l(q,T)},$$slots:{default:!0}})};C(L,M=>{n(k)==="centered"?M(Y):M(j,!1)},!0)}l(h,w)};C(y,h=>{n(k)==="page"?h(x):h(D,!1)})}var $=o(y,2),K=d($);K.__click=[fe,ct];var X=o(K,2);X.__click=[ge,R],s($);var Z=o($,2);et(Z,16,()=>n(z),h=>h,(h,w)=>{var L=he(),Y=d(L);Y.__click=[be,_t,w];var j=o(Y,2);{var M=g=>{var T=lt("gracefully");l(g,T)},q=g=>{var T=U(),F=P(T);{var tt=O=>{var G=lt("ungracefully");l(O,G)};C(F,O=>{n(k)==="centered"&&O(tt)},!0)}l(g,T)};C(j,g=>{n(k)==="page"?g(M):g(q,!1)})}s(L),Ot(3,L,()=>Yt),l(h,L)});var rt=o(Z,2);rt.__click=function(...h){var w;(w=r())==null||w.apply(this,h)},s(i),Q(()=>X.disabled=!n(z).length),l(f,i)},$$slots:{default:!0}})};C(gt,a=>{n(A)&&a($t)})}var bt=o(gt,2);{var Lt=a=>{H(a,{onclose:()=>_(I,!1),children:(b,f)=>{var r=ye(),i=o(d(r),4);i.__click=[ke,W],s(r),l(b,r)},$$slots:{default:!0}})};C(bt,a=>{n(I)&&a(Lt)})}var ht=o(bt,2);{var qt=a=>{H(a,{onclose:()=>_(W,!1),children:(b,f)=>{var r=we(),i=o(d(r),6);i.__click=[xe,J],s(r),l(b,r)},$$slots:{default:!0}})};C(ht,a=>{n(W)&&a(qt)})}var mt=o(ht,2);{var Ct=a=>{H(a,{onclose:()=>_(J,!1),children:(b,f)=>{var r=Ie(),i=P(r);vt(i,"margin-bottom","var(--space_xl3)");var y=o(d(i),2);y.__click=[Te,J],s(i);var x=o(i,2),D=o(d(x),2);D.__click=[Ae,I,W,J],s(x),l(b,r)},$$slots:{default:!0}})};C(mt,a=>{n(J)&&a(Ct)})}var Et=o(mt,2);Zt(Et,{get dialogs(){return n(E)},onclose:()=>{_(E,N(n(E).slice(0,-1)))},children:(b,f=it)=>{var r=De(),i=d(r);It(i,()=>f().Component,(y,x)=>{x(y,ut(()=>f().props))}),s(r),l(b,r)},$$slots:{default:!0}}),l(e,at),Tt()}St(["click"]);export{We as component};
