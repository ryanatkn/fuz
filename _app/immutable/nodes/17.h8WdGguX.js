import{b as H,f as P,a as n,J as xe,s as e,t as h,c as l,d as j,r as i}from"../chunks/disclose-version.D-YpP91c.js";import{i as ye,p as we,a as $e,U as m,g as d,d as Me,t as Q,C as B,n as s,V as ae}from"../chunks/runtime.CLWtUI7-.js";import{s as re}from"../chunks/render.DClLgGuB.js";import{i as z}from"../chunks/if.t2Adprt1.js";import{e as te,i as ie}from"../chunks/each.BqXyQR24.js";import{c as Te}from"../chunks/svelte-component.BT0SPQW-.js";import{e as Pe}from"../chunks/svelte-head.BslmLo-c.js";import{s as le}from"../chunks/style.iv2mhl8q.js";import{t as Le,s as Ce}from"../chunks/index.CCgsirPg.js";import{i as Ee,p as N}from"../chunks/proxy.BywKGEcJ.js";import{l as ze}from"../chunks/shared.BVJZtkjr.js";import{s as se,p as Re}from"../chunks/props.BqHnzyJo.js";import{C as qe}from"../chunks/Code.CZGB2Sdr.js";import{A as Se}from"../chunks/Alert.C_pvDSii.js";import{T as Be}from"../chunks/Tome_Detail.DO4YsK59.js";import{g as Ne}from"../chunks/tome.BEaQ-Zqd.js";import{D as F}from"../chunks/Dialog.DanKENvk.js";import{T as Oe}from"../chunks/Tome_Link.DmglE5JH.js";import{M as Ue}from"../chunks/Mdn_Link.DJGSzZLX.js";import{s as Ye}from"../chunks/attributes.laNZifmC.js";import{e as je}from"../chunks/svelte-element.Dgu5v4HA.js";function Ae(o,t,_){if(o.multiple)return He(o,t);for(var g of o.options){var c=oe(g);if(Ee(c,t)){g.selected=!0;return}}(!_||t!==void 0)&&(o.selectedIndex=-1)}function Fe(o,t){ye(()=>{var _=new MutationObserver(()=>{var g=o.__value;Ae(o,g)});return _.observe(o,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{_.disconnect()}})}function be(o,t,_){var g=!0;ze(o,"change",()=>{var c;if(o.multiple)c=[].map.call(o.querySelectorAll(":checked"),oe);else{var p=o.querySelector(":checked");c=p&&oe(p)}_(c)}),ye(()=>{var c=t();if(Ae(o,c,g),g&&c===void 0){var p=o.querySelector(":checked");p!==null&&(c=oe(p),_(c))}o.__value=c,g=!1}),Fe(o)}function He(o,t){for(var _ of o.options)_.selected=~t.indexOf(oe(_))}function oe(o){return"__value"in o?o.__value:o.value}function Je(o,t){we(t,!0);var _=H(),g=P(_);te(g,71,()=>t.dialogs,(c,p)=>m(c),(c,p,O)=>{var R=Me(()=>m(O)===t.dialogs.length-1);F(c,se({get onclose(){return t.onclose}},()=>m(p).dialog_props,{get index(){return m(O)},get active(){return d(R)},children:(J,V)=>{var x=H(),q=P(x);z(q,()=>t.children,X=>{var U=H(),W=P(U);Ye(W,()=>t.children,()=>m(p)),n(X,U)},X=>{var U=H(),W=P(U);Te(W,()=>m(p).Component,(G,ne)=>{ne(G,se(()=>m(p).props))}),n(X,U)}),n(J,x)},$$slots:{default:!0}}))}),n(o,_),$e()}const Ve=(o,t,_)=>({Component:o,props:t,dialog_props:_}),ke=["centered","page"];function We(o,t){const _=Re(t,"tag",3,"span");var g=H(),c=P(g);je(c,_,!1,(p,O)=>{Q(()=>{le(p,"font-size",t.size),le(p,"padding",t.padding)});var R=xe();Q(()=>re(R,t.text)),n(O,R)}),n(o,g)}var Ge=(o,t)=>s(t,!0),Ke=(o,t)=>s(t,!0),Qe=(o,t)=>s(t,!0),Xe=(o,t)=>s(t,!0),Ze=(o,t)=>t(5),et=h(`<section><p>A modal that overlays the entire page. Uses <!> to allow usage from any
			component without inheriting styles.</p> <aside>⚠️ This will change to use and align APIs with the builtin <!>. API</aside></section> <section><!></section> <section><button type="button" class="mb_lg">open a dialog</button> <button type="button" class="mb_lg">open a dialog that overflows vertically</button> <button type="button" class="mb_lg">open a dialog with <code>layout="page"</code> instead of the default <code>layout='centered'</code></button> <button type="button" class="mb_lg">open a dialog containing another dialog</button> <button type="button" class="mb_lg">open many dialogs</button></section>`,1),tt=h('<div class="pane p_xl box"><h1>attention</h1> <p>this is a dialog</p> <button type="button">ok</button></div>'),ot=h("<p>this is a dialog that overflows vertically</p>"),at=h('<div class="pane p_xl"><h1>attention</h1> <!> <button type="button">close</button></div>'),rt=h("<option> </option>"),nt=h(`<p>This is a <code>Dialog</code> with <code>layout="<select></select>"</code>.</p> <p>Instead of being centered by default, the dialog's contents are aligned to the top of
						the page and grow downward. It's useful when the dialog's contents change in height.</p>`,1),it=h("<option> </option>"),lt=h(`<p>This is a <code>Dialog</code> with <code>layout="<select></select>"</code>, the default value.</p> <p>It's often the best choice, but it can be undesirable in some situations, like when the
						height of the content changes as the user does things, leading to a janky experience.</p>`,1),st=(o,t)=>t(),_t=(o,t)=>t(),ct=(o,t,_)=>t(m(_)),dt=h("gracefully",1),ut=h("ungracefully",1),vt=h('<p><button type="button">✕</button> new stuff appears <!></p>'),pt=h('<div class="pane p_xl width_md"><!> <p><button type="button">add item</button> <button type="button">remove all</button></p> <!> <button type="button">close</button></div>'),gt=(o,t)=>s(t,!0),ft=h('<div class="pane p_xl"><h1>dialog 1</h1> <p>dialogs can open more dialogs</p> <button type="button">open another dialog</button></div>'),mt=(o,t)=>s(t,!0),ht=h('<div class="pane p_xl"><h1>dialog 2</h1> <p>this dialog can open more dialogs</p> <p>this is the second dialog</p> <button type="button">open another dialog</button></div>'),bt=(o,t)=>s(t,!1),kt=(o,t,_,g)=>{s(t,N(s(_,N(s(g,!1)))))},xt=h('<div class="pane p_xl"><h1>3 dialogs!</h1> <button type="button">close dialog</button></div> <div class="pane p_xl"><h1>and another <code>.pane</code></h1> <button type="button">close all dialogs</button></div>',1),yt=h('<div class="pane"><!></div>'),wt=h("<!> <!> <!> <!> <!> <!> <!> <!>",1);function Ht(o,t){we(t,!0);const g=Ne("Dialog");let c=B(!1),p=B(!1),O=B(!1),R=B(!1),J=B(!1),V=B(!1),x=B("page"),q=B(N([]));const X=u=>{s(q,N(d(q).filter(k=>k!==u)))},U=()=>{s(q,N(d(q).concat({})))},W=()=>{s(q,N([]))};let G=B(N([]));const ne=u=>{const k=f=>"!".repeat(u*3-f*3);s(G,N(Array.from({length:u},(f,a)=>Ve(We,{text:k(a),size:"var(--size_xl4)",padding:"var(--space_sm) var(--space_lg)"}))))};var _e=wt(),ce=P(_e);Be(ce,{tome:g,children:(u,k)=>{var f=et(),a=P(f),r=l(a),b=e(l(r));Oe(b,{name:"Teleport"}),j(),i(r);var v=e(e(r,!0)),y=e(l(v));Ue(y,{path:"Web/HTML/Element/dialog"}),j(),i(v),i(a);var $=e(e(a,!0)),Y=l($);qe(Y,{content:`<button onclick={() => (opened = true)}>
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
{/if}`}),i($);var Z=e(e($,!0)),T=l(Z);T.__click=[Ge,c];var L=e(e(T,!0));L.__click=[Ke,p];var C=e(e(L,!0));C.__click=[Qe,O];var A=e(l(C));e(e(A,!0)),i(C);var w=e(e(C,!0));w.__click=[Xe,R];var I=e(e(w,!0));I.__click=[Ze,ne],i(Z),n(u,f)},$$slots:{default:!0}});var de=e(e(ce,!0));z(de,()=>d(c),u=>{F(u,{onclose:()=>s(c,!1),children:(f,a=ae)=>{var r=tt(),b=l(r),v=e(e(b,!0)),y=e(e(v,!0));y.__click=a(),i(r),n(f,r)}})});var ue=e(e(de,!0));z(ue,()=>d(p),u=>{F(u,{onclose:()=>s(p,!1),children:(f,a=ae)=>{var r=at(),b=l(r),v=e(e(b,!0));te(v,65,()=>({length:120}),ie,($,Y,Z)=>{var T=ot();n($,T)});var y=e(e(v,!0));y.__click=a(),i(r),n(f,r)}})});var ve=e(e(ue,!0));z(ve,()=>d(O),u=>{F(u,{onclose:()=>(s(O,!1),W()),get layout(){return d(x)},children:(f,a=ae)=>{var r=pt(),b=l(r);z(b,()=>d(x)==="page",T=>{var L=nt(),C=P(L),A=e(l(C)),w=e(e(A,!0)),I=e(l(w));te(I,73,()=>ke,ie,(D,M,K)=>{var E=rt(),S={},me=l(E);i(E),Q(()=>{S!==(S=m(M))&&(E.value=(E.__value=m(M))==null?"":m(M)),re(me,m(M))}),n(D,E)}),i(I),j(),i(w),j(),i(C),e(e(C,!0)),be(I,()=>d(x),D=>s(x,D)),n(T,L)},T=>{var L=H(),C=P(L);z(C,()=>d(x)==="centered",A=>{var w=lt(),I=P(w),D=e(l(I)),M=e(e(D,!0)),K=e(l(M));te(K,73,()=>ke,ie,(E,S,me)=>{var ee=it(),he={},De=l(ee);i(ee),Q(()=>{he!==(he=m(S))&&(ee.value=(ee.__value=m(S))==null?"":m(S)),re(De,m(S))}),n(E,ee)}),i(K),j(),i(M),j(),i(I),e(e(I,!0)),be(K,()=>d(x),E=>s(x,E)),n(A,w)},A=>{Se(A,{status:"error",children:(w,I)=>{j();var D=xe();Q(()=>re(D,`eek a bug! unknown layout "${d(x)??""}"`)),n(w,D)},$$slots:{default:!0}})},!0),n(T,L)});var v=e(e(b,!0)),y=l(v);y.__click=[st,U];var $=e(e(y,!0));$.__click=[_t,W],i(v);var Y=e(e(v,!0));te(Y,68,()=>d(q),(T,L)=>m(T),(T,L,C)=>{var A=vt();Le(3,A,()=>Ce);var w=l(A);w.__click=[ct,X,L];var I=e(e(w,!0));z(I,()=>d(x)==="page",D=>{var M=dt();n(D,M)},D=>{var M=H(),K=P(M);z(K,()=>d(x)==="centered",E=>{var S=ut();n(E,S)},null,!0),n(D,M)}),i(A),n(T,A)});var Z=e(e(Y,!0));Z.__click=a(),i(r),Q(()=>$.disabled=!d(q).length),n(f,r)}})});var pe=e(e(ve,!0));z(pe,()=>d(R),u=>{F(u,{onclose:()=>s(R,!1),children:(k,f)=>{var a=ft(),r=l(a),b=e(e(r,!0)),v=e(e(b,!0));v.__click=[gt,J],i(a),n(k,a)},$$slots:{default:!0}})});var ge=e(e(pe,!0));z(ge,()=>d(J),u=>{F(u,{onclose:()=>s(J,!1),children:(k,f)=>{var a=ht(),r=l(a),b=e(e(r,!0)),v=e(e(b,!0)),y=e(e(v,!0));y.__click=[mt,V],i(a),n(k,a)},$$slots:{default:!0}})});var fe=e(e(ge,!0));z(fe,()=>d(V),u=>{F(u,{onclose:()=>s(V,!1),children:(k,f)=>{var a=xt(),r=P(a);le(r,"margin-bottom","var(--space_xl3)");var b=l(r),v=e(e(b,!0));v.__click=[bt,V],i(r);var y=e(e(r,!0)),$=l(y);e(l($)),i($);var Y=e(e($,!0));Y.__click=[kt,R,J,V],i(y),n(k,a)},$$slots:{default:!0}})});var Ie=e(e(fe,!0));Je(Ie,{get dialogs(){return d(G)},onclose:()=>{s(G,N(d(G).slice(0,-1)))},children:(k,f=ae)=>{var a=yt(),r=l(a);Te(r,()=>f().Component,(b,v)=>{v(b,se(()=>f().props))}),i(a),n(k,a)}}),n(o,_e),$e()}Pe(["click"]);export{Ht as component};
