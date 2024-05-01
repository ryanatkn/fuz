import{b as k,a as o,f as _,l as Ae,t as m,s as e,c as i}from"../chunks/disclose-version.P6j1kb0M.js";import{h as $e,u as Re,p as Ie,a as Me,a6 as f,g as d,d as qe,r as X,H as j,t as s,a4 as ie}from"../chunks/runtime.BNZvPhR8.js";import{s as se,d as Se,a as Be}from"../chunks/render.mpT5_OMu.js";import{p as Z}from"../chunks/proxy.CgWesAHI.js";import{i as L}from"../chunks/if.B-UrVCq9.js";import{e as te,i as _e}from"../chunks/each.ZGz6eWNW.js";import{c as Pe}from"../chunks/svelte-component.CaHPxQtv.js";import{s as He,r as we}from"../chunks/attributes.pzVQFU6X.js";import{s as ce}from"../chunks/style.CN5pMWL6.js";import{t as Ne,s as Oe}from"../chunks/index.DsNDlR1P.js";import{l as Ye}from"../chunks/shared.BAfXSweP.js";import{s as de,p as je}from"../chunks/props.DlI4434Y.js";import{u as Le,s as Ee,a as ye}from"../chunks/store.MJTzlNEz.js";import{w as Fe}from"../chunks/index.C7H0ExHr.js";import{C as Ue}from"../chunks/Code.QBXv6WUh.js";import{A as We}from"../chunks/Alert.DiigstTw.js";import{T as Ge}from"../chunks/Tome_Detail.Du0bsHiA.js";import{g as Je}from"../chunks/tome.C2gfJtcL.js";import{D as W}from"../chunks/Dialog.YCS-GJNA.js";import{T as Ke}from"../chunks/Tome_Link.rwcl-Uvv.js";import{M as Qe}from"../chunks/Mdn_Link.BsHN0i9o.js";import{e as Ve}from"../chunks/svelte-element.2YNkGe3d.js";function ve(a,t,r){if(a.multiple)return Ze(a,t);for(var v of a.options){var g=ae(v);if(g===t){v.selected=!0;return}}(!r||t!==void 0)&&(a.selectedIndex=-1)}function Xe(a,t){$e(()=>{t&&ve(a,Re(t));var r=new MutationObserver(()=>{var v=a.__value;ve(a,v)});return r.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function De(a,t,r){var v=!0;Ye(a,"change",()=>{var g;if(a.multiple)g=[].map.call(a.querySelectorAll(":checked"),ae);else{var y=a.querySelector(":checked");g=y&&ae(y)}r(g)}),$e(()=>{var g=t();if(ve(a,g,v),v&&g===void 0){var y=a.querySelector(":checked");y!==null&&(g=ae(y),r(g))}a.__value=g,v=!1}),Xe(a)}function Ze(a,t){for(var r of a.options)r.selected=~t.indexOf(ae(r))}function ae(a){return"__value"in a?a.__value:a.value}function et(a,t){Ie(t,!0);const r={};Le(r);const v=()=>Ee(t.dialogs,"$dialogs",r);var g=k(),y=_(g);te(y,71,v,(E,D)=>f(E),(E,D,G)=>{var F=k(),J=_(F),U=qe(()=>f(G)===v().length-1);W(J,de({get onclose(){return t.onclose}},()=>f(D).dialog_props,{get index(){return f(G)},get active(){return d(U)},children:(T,N)=>{var oe=k(),le=_(oe);L(le,()=>t.children,K=>{var z=k(),Q=_(z);He(()=>t.children,Q,()=>f(D)),o(K,z)},K=>{var z=k(),Q=_(z);Pe(Q,()=>f(D).Component,re=>{re(Q,de(()=>f(D).props))}),o(K,z)}),o(T,oe)}})),o(E,F)}),o(a,g),Me()}const tt=(a,t,r)=>({Component:a,props:t,dialog_props:r}),Te=["centered","page"];function at(a,t){const r=je(t,"tag",3,"span");var v=k(),g=_(v);Ve(g,r,!1,(y,E)=>{X(()=>{ce(y,"font-size",t.size),ce(y,"padding",t.padding)});var D=Ae(E);X(()=>se(D,t.text)),o(E,D)}),o(a,v)}var ot=(a,t)=>s(t,!0),rt=(a,t)=>s(t,!0),nt=(a,t)=>s(t,!0),it=(a,t)=>s(t,!0),st=(a,t)=>t(5),lt=m(`<section><p>A modal that overlays the entire page. Uses <!> to allow usage from any
			component without inheriting styles.</p> <aside>⚠️ This will change to use and align APIs with the builtin <!>. API</aside></section> <section><!></section> <section><button class="mb_lg">open a dialog</button> <button class="mb_lg">open a dialog that overflows vertically</button> <button class="mb_lg">open a dialog with <code>layout="page"</code> instead of the default <code>layout='centered'</code></button> <button class="mb_lg">open a dialog containing another dialog</button> <button class="mb_lg">open many dialogs</button></section>`,1),_t=m('<div class="pane p_xl box"><h1>attention</h1> <p>this is a dialog</p> <button>ok</button></div>'),ct=m("<p>this is a dialog that overflows vertically</p>"),dt=m('<div class="pane p_xl"><h1>attention</h1> <!> <button>close</button></div>'),vt=m("<option> </option>"),ut=m(`<p>This is a <code>Dialog</code> with <code>layout="<select></select>"</code>.</p> <p>Instead of being centered by default, the dialog's contents are aligned to the top of
						the page and grow downward. It's useful when the dialog's contents change in height.</p>`,1),pt=m("<option> </option>"),gt=m(`<p>This is a <code>Dialog</code> with <code>layout="<select></select>"</code>, the default value.</p> <p>It's often the best choice, but it can be undesirable in some situations, like when the
						height of the content changes as the user does things, leading to a janky experience.</p>`,1),ft=(a,t)=>t(),mt=(a,t)=>t(),ht=(a,t,r)=>t(f(r)),bt=m("gracefully",1),kt=m("ungracefully",1),xt=m("<p><button>✕</button> new stuff appears <!></p>"),wt=m('<div class="pane p_xl width_md"><!> <p><button>add item</button> <button>remove all</button></p> <!> <button type="button">close</button></div>'),yt=(a,t)=>s(t,!0),Dt=m('<div class="pane p_xl"><h1>dialog 1</h1> <p>dialogs can open more dialogs</p> <button>open another dialog</button></div>'),Tt=(a,t)=>s(t,!0),At=m('<div class="pane p_xl"><h1>dialog 2</h1> <p>this dialog can open more dialogs</p> <p>this is the second dialog</p> <button>open another dialog</button></div>'),$t=(a,t)=>s(t,!1),It=(a,t,r,v)=>{s(t,Z(s(r,Z(s(v,!1)))))},Mt=m('<div class="pane p_xl"><h1>3 dialogs!</h1> <button>close dialog</button></div> <div class="pane p_xl"><h1>and another <code>.pane</code></h1> <button>close all dialogs</button></div>',1),Pt=m('<div class="pane"><!></div>'),Lt=m("<!> <!> <!> <!> <!> <!> <!> <!>",1);function ea(a,t){Ie(t,!0);const r={};Le(r);const v=()=>Ee(z,"$dialogs",r),y=Je("Dialog");let E=j(!1),D=j(!1),G=j(!1),F=j(!1),J=j(!1),U=j(!1),T=j("page"),N=j(Z([]));const oe=c=>{s(N,Z(d(N).filter(n=>n!==c)))},le=()=>{s(N,Z(d(N).concat({})))},K=()=>{s(N,Z([]))},z=Fe([]),Q=c=>{const n=l=>"!".repeat(c*3-l*3);ye(z,Array.from({length:c},(l,h)=>tt(at,{text:n(h),size:"var(--size_xl4)",padding:"var(--space_sm) var(--space_lg)"})))};var re=Lt(),ue=_(re);Ge(ue,{tome:y,children:(c,n)=>{var l=lt(),h=_(l),x=i(h),u=e(i(x));Ke(u,{name:"Teleport"});var p=e(e(x,!0)),w=e(i(p));Qe(w,{href:"Web/HTML/Element/dialog"});var b=e(e(h,!0)),A=i(b);Ue(A,{content:`<button onclick={() => (opened = true)}>
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
{/if}`});var O=e(e(b,!0)),Y=i(O);Y.__click=[ot,E];var ee=e(e(Y,!0));ee.__click=[rt,D];var $=e(e(ee,!0));$.__click=[nt,G];var P=e(e($,!0));P.__click=[it,F];var V=e(e(P,!0));V.__click=[st,Q],o(c,l)}});var pe=e(e(ue,!0));L(pe,()=>d(E),c=>{var n=k(),l=_(n);W(l,{onclose:()=>s(E,!1),children:(x,u=ie)=>{var p=_t(),w=i(p),b=e(e(w,!0)),A=e(e(b,!0));A.__click=u(),o(x,p)}}),o(c,n)});var ge=e(e(pe,!0));L(ge,()=>d(D),c=>{var n=k(),l=_(n);W(l,{onclose:()=>s(D,!1),children:(x,u=ie)=>{var p=dt(),w=i(p),b=e(e(w,!0));te(b,65,()=>({length:120}),_e,(O,Y,ee)=>{var $=ct();o(O,$)});var A=e(e(b,!0));A.__click=u(),o(x,p)}}),o(c,n)});var fe=e(e(ge,!0));L(fe,()=>d(G),c=>{var n=k(),l=_(n);W(l,{onclose:()=>(s(G,!1),K()),get layout(){return d(T)},children:(x,u=ie)=>{var p=wt(),w=i(p);L(w,()=>d(T)==="page",$=>{var P=ut(),V=_(P),q=e(i(V)),C=e(e(q,!0)),S=e(i(C));we(S),te(S,73,()=>Te,_e,(I,M,B)=>{var R=vt(),H,ke=i(R);X(()=>{H!==(H=f(M))&&(R.value=(R.__value=f(M))==null?"":f(M)),se(ke,f(M))}),o(I,R)}),De(S,()=>d(T),I=>s(T,I)),o($,P)},$=>{var P=k(),V=_(P);L(V,()=>d(T)==="centered",q=>{var C=gt(),S=_(C),I=e(i(S)),M=e(e(I,!0)),B=e(i(M));we(B),te(B,73,()=>Te,_e,(R,H,ke)=>{var ne=pt(),xe,Ce=i(ne);X(()=>{xe!==(xe=f(H))&&(ne.value=(ne.__value=f(H))==null?"":f(H)),se(Ce,f(H))}),o(R,ne)}),De(B,()=>d(T),R=>s(T,R)),o(q,C)},q=>{var C=k(),S=_(C);We(S,{status:"error",children:(I,M)=>{var B=Ae(I);X(()=>se(B,`eek a bug! unknown layout "${Be(d(T))}"`)),o(I,B)}}),o(q,C)},!0),o($,P)});var b=e(e(w,!0)),A=i(b);A.__click=[ft,le];var O=e(e(A,!0));O.__click=[mt,K];var Y=e(e(b,!0));te(Y,68,()=>d(N),($,P)=>f($),($,P,V)=>{var q=xt();Ne(3,q,()=>Oe);var C=i(q);C.__click=[ht,oe,P];var S=e(e(C,!0));L(S,()=>d(T)==="page",I=>{var M=bt();o(I,M)},I=>{var M=k(),B=_(M);L(B,()=>d(T)==="centered",R=>{var H=kt();o(R,H)},null,!0),o(I,M)}),o($,q)});var ee=e(e(Y,!0));ee.__click=u(),X(()=>O.disabled=!d(N).length),o(x,p)}}),o(c,n)});var me=e(e(fe,!0));L(me,()=>d(F),c=>{var n=k(),l=_(n);W(l,{onclose:()=>s(F,!1),children:(h,x)=>{var u=Dt(),p=i(u),w=e(e(p,!0)),b=e(e(w,!0));b.__click=[yt,J],o(h,u)}}),o(c,n)});var he=e(e(me,!0));L(he,()=>d(J),c=>{var n=k(),l=_(n);W(l,{onclose:()=>s(J,!1),children:(h,x)=>{var u=At(),p=i(u),w=e(e(p,!0)),b=e(e(w,!0)),A=e(e(b,!0));A.__click=[Tt,U],o(h,u)}}),o(c,n)});var be=e(e(he,!0));L(be,()=>d(U),c=>{var n=k(),l=_(n);W(l,{onclose:()=>s(U,!1),children:(h,x)=>{var u=Mt(),p=_(u);ce(p,"margin-bottom","var(--space_xl3)");var w=i(p),b=e(e(w,!0));b.__click=[$t,U];var A=e(e(p,!0)),O=i(A),Y=e(e(O,!0));Y.__click=[It,F,J,U],o(h,u)}}),o(c,n)});var ze=e(e(be,!0));et(ze,{dialogs:z,onclose:()=>{ye(z,v().slice(0,-1))},children:(n,l=ie)=>{var h=Pt(),x=i(h);Pe(x,()=>l().Component,u=>{u(x,de(()=>l().props))}),o(n,h)}}),o(a,re),Me()}Se(["click"]);export{ea as component};
