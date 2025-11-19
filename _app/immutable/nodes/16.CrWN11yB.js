import"../chunks/DsnmJJEf.js";import{p as bt,g as rt,a as I,b as n,c as yt,h as wt,ai as Nt,f as g,aB as Tt,aC as Vt,s as o,az as ue,i as t,aA as Z,bk as Yt,ap as h,d as c,r as i,u as M,t as dt,n as y,a5 as N,e as $t,o as Ne,bo as Re}from"../chunks/B5wh5ago.js";import{T as Fe}from"../chunks/CmKpj1PQ.js";import{g as De}from"../chunks/ChslUf82.js";import{c as Ft}from"../chunks/4vgEIe9F.js";import{C as Rt}from"../chunks/BdTuNzDs.js";import{M as Xt}from"../chunks/CZ8NcSMw.js";import{T as At,a as Ot}from"../chunks/7YRW4gJm.js";import{e as Le}from"../chunks/XQ_-jPuI.js";import{i as ie,d as $e,e as Gt,j as le,r as Ht,h as ft,s as we,S as Me}from"../chunks/CTos7DtZ.js";import{p as it,s as de,r as He}from"../chunks/BFcTPQPt.js";import{c as Ue,C as Jt,a as Ce,b as ce,d as ve}from"../chunks/DesRVhhg.js";import{a as qe,b as Be,c as We,d as je,e as Xe,f as Ge,g as Ve,h as ke,i as Te,j as Qt,k as Ye,l as me,m as Kt,n as Ke,o as Ze,C as pe,p as st}from"../chunks/C9Ci4Udo.js";import{D as Se,b as he}from"../chunks/Drte1j7D.js";import{a as fe,b as xe,c as se}from"../chunks/C9aJpMv1.js";import{c as Je,r as Qe}from"../chunks/Bym9TEh-.js";import{i as tt}from"../chunks/ZkT_IncS.js";import{b as te}from"../chunks/DIiD8fNr.js";import{s as St}from"../chunks/V2q5a4YM.js";import{t as jt,c as tn,a as ge,s as en}from"../chunks/DnDffVbp.js";import{G as nn}from"../chunks/ilbAYIGo.js";import{S as on,g as an}from"../chunks/DVR8YwLE.js";import{C as rn,T as sn}from"../chunks/0cqdoXWg.js";import{D as ln}from"../chunks/CngdMpje.js";function Ct(m,e){bt(e,!0);const r=it(e,"tag",3,"span");var $=rt(),w=I($);Le(w,r,!1,(l,s)=>{ie(l,()=>Ue(e.entries)),$e(l,()=>({class:"display_contents",...e.attrs}));var a=rt(),u=I(a);wt(u,()=>e.children),n(s,a)}),n(m,$),yt()}const cn=(m,e=Nt)=>{ke(m,de(e))},un=(m,e=Nt)=>{Te(m,de(e))},dn=(m,e=Nt)=>{Qt(m,de(e))};var _n=g('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),vn=g('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),mn=g('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),pn=g("<!> <!> <!>",1);function hn(m,e){bt(e,!0);const r=it(e,"contextmenu",19,()=>new Jt),$=it(e,"longpress_move_tolerance",3,qe),w=it(e,"longpress_duration",3,Be),l=it(e,"bypass_with_tap_then_longpress",3,!0),s=it(e,"bypass_window",3,We),a=it(e,"bypass_move_tolerance",3,je),u=it(e,"open_offset_x",3,Xe),x=it(e,"open_offset_y",3,Ge),D=it(e,"scoped",3,!1),T=it(e,"link_entry",3,cn),_=it(e,"text_entry",3,un),v=it(e,"separator_entry",3,dn);Ce.set(r());let p=Z(void 0);const S=M(()=>r().layout),b=ce.set(),d=M(()=>Ke(r().x,b.width,t(S).width)),C=M(()=>Ze(r().y,b.height,t(S).height));let R=Z(void 0),j=Z(void 0),X=Z(void 0),F=Z(void 0),E=Z(void 0),A=Z(void 0),k=Z(void 0),L=Z(!1);const H=()=>{document.body.classList.add("contextmenu_pending")},B=()=>{document.body.classList.remove("contextmenu_pending")},O=()=>{h(E,!1),t(F)!=null&&(clearTimeout(t(F)),h(F,null)),B()},U=()=>{h(X,null),h(R,null),h(j,null),h(A,!1),t(k)!=null&&(clearTimeout(t(k)),h(k,null))},W=()=>{O(),U()},q=f=>{if(t(A)){U();return}const{target:z}=f;if(t(E)){if(t(p)?.contains(z))return;W(),St(f);return}me(z,f.shiftKey)&&(t(p)?.contains(z)||ve(z,f.clientX+u(),f.clientY+x(),r(),{link_enabled:T()!==null,text_enabled:_()!==null,separator_enabled:v()!==null})&&(St(f),W()))},P=f=>{h(E,!1),h(L,!1);const{touches:z,target:G}=f;if(r().opened||z.length!==1||!me(G,f.shiftKey)){W();return}const{clientX:J,clientY:K}=z[0];if(l()){if(t(X)!=null&&performance.now()-t(X)<s()&&Math.hypot(J-t(R),K-t(j))<a()){h(A,!0),h(X,null),h(R,null),h(j,null),t(k)!=null&&(clearTimeout(t(k)),h(k,null));return}h(X,performance.now(),!0),t(k)!=null&&clearTimeout(t(k)),h(k,setTimeout(()=>{U()},s()),!0)}h(R,J,!0),h(j,K,!0),H(),t(F)!=null&&O(),h(F,setTimeout(()=>{h(E,!0),B(),ve(G,t(R)+u(),t(j)+x(),r(),{link_enabled:T()!==null,text_enabled:_()!==null,separator_enabled:v()!==null})},w()),!0)},et=f=>{if(t(F)==null||r().opened)return;const{touches:z}=f;if(z.length!==1)return;const{clientX:G,clientY:J}=z[0];if(Math.hypot(G-t(R),J-t(j))>$()){O();return}f.preventDefault()},lt=f=>{t(F)!=null&&(t(E)&&(St(f),h(L,!0)),O()),t(A)&&U()},nt=()=>{W()},ct=f=>{t(p)&&!t(p).contains(f.target)&&r().close()},_t=Ve(r()),xt=Ye(_t),vt=f=>{const z={passive:!0,capture:!0},G={passive:!1,capture:!0},J=Yt(f,"touchstart",P,z),K=Yt(f,"touchmove",et,G),ht=Yt(f,"touchend",lt,G),ot=Yt(f,"touchcancel",nt,z);return()=>{J(),K(),ht(),ot()}};var mt=pn();Tt("contextmenu",Vt,function(...f){(D()?void 0:q)?.apply(this,f)}),Tt("mousedown",Vt,function(...f){(r().opened?ct:void 0)?.apply(this,f)}),Tt("keydown",Vt,function(...f){(r().opened?xt:void 0)?.apply(this,f)}),ie(Vt,()=>D()?void 0:vt);var Q=I(mt);{var V=f=>{var z=_n();z.__contextmenu=q;var G=c(z);wt(G,()=>e.children),i(z),ie(z,()=>vt),n(f,z)},Y=f=>{var z=rt(),G=I(z);wt(G,()=>e.children),n(f,z)};tt(Q,f=>{D()?f(V):f(Y,!1)})}var pt=o(Q,2);{var ut=f=>{var z=vn();Kt(z,"clientWidth",G=>t(S).width=G),Kt(z,"clientHeight",G=>t(S).height=G),n(f,z)};tt(pt,f=>{r().has_custom_layout||f(ut)})}var Dt=o(pt,2);{var kt=f=>{var z=mn();let G;Gt(z,20,()=>r().params,J=>J,(J,K)=>{var ht=rt(),ot=I(ht);{var Pt=at=>{var It=rt(),Ut=I(It);wt(Ut,()=>K),n(at,It)},gt=at=>{var It=rt(),Ut=I(It);{var Et=Lt=>{var qt=rt(),oe=I(qt);wt(oe,()=>T()??Nt,()=>K.props),n(Lt,qt)},ne=Lt=>{var qt=rt(),oe=I(qt);{var Ee=Mt=>{var Bt=rt(),ae=I(Bt);wt(ae,()=>_()??Nt,()=>K.props),n(Mt,Bt)},Ae=Mt=>{var Bt=rt(),ae=I(Bt);{var Oe=re=>{var _e=rt(),ze=I(_e);wt(ze,()=>v()??Nt,()=>K.props),n(re,_e)};tt(ae,re=>{K.snippet==="separator"&&re(Oe)},!0)}n(Mt,Bt)};tt(oe,Mt=>{K.snippet==="text"?Mt(Ee):Mt(Ae,!1)},!0)}n(Lt,qt)};tt(Ut,Lt=>{K.snippet==="link"?Lt(Et):Lt(ne,!1)},!0)}n(at,It)};tt(ot,at=>{typeof K=="function"?at(Pt):at(gt,!1)})}n(J,ht)}),i(z),te(z,J=>h(p,J),()=>t(p)),dt(J=>G=le(z,"",G,J),[()=>({transform:`translate3d(${t(d)??""}px, ${t(C)??""}px, 0)`})]),Tt("click",z,function(...J){(t(L)?K=>{h(L,!1),St(K)}:void 0)?.apply(this,J)},!0),Kt(z,"offsetWidth",J=>b.width=J),Kt(z,"offsetHeight",J=>b.height=J),n(f,z)};tt(Dt,f=>{r().opened&&f(kt)})}n(m,mt),yt()}ue(["contextmenu"]);class fn{#t=Z();get variant(){return t(this.#t)}set variant(e){h(this.#t,e,!0)}#e=M(()=>this.variant==="standard"?pe:hn);get component(){return t(this.#e)}set component(e){h(this.#e,e)}#n=M(()=>this.component===pe?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return t(this.#n)}set name(e){h(this.#n,e)}constructor(e="standard"){this.variant=e}}const zt=Je(()=>new fn("standard"));var xn=g('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Pe(m,e){bt(e,!0);const r=[],$=zt.get();var w=xn(),l=o(c(w),2),s=c(l);Ht(s),s.value=s.__value="standard",y(2),i(l);var a=o(l,2),u=c(a);Ht(u),u.value=u.__value="compat",y(2),i(a),i(w),fe(r,[],s,()=>$.variant,x=>$.variant=x),fe(r,[],u,()=>$.variant,x=>$.variant=x),n(m,w),yt()}var gn=g('<p class="panel p_md">alert B -- also inherits A</p>'),bn=g('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),yn=g("<code>navigator.vibrate</code>"),$n=g(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
		capabilities to users. Popular websites with similar features include Google Docs and Discord.
		Below are caveats about this breaking some user expectations, and a workaround for iOS Safari
		support. See also the <!> docs and <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p> <p>When you rightclick inside a <code>Contextmenu_Root</code>, or longpress on touch devices, it
		searches the DOM tree for behaviors defined with <code>Contextmenu</code> starting from the target
		element up to the root. If any behaviors are found, the Fuz contextmenu opens, showing all contextually
		available actions. If no behaviors are found, the default system contextmenu opens.</p> <p>Here's a <code> </code> with a <code>Contextmenu</code> inside another <code>Contextmenu</code>:</p> <!> <!> <p>This simple hierarchical pattern gives users the full contextual actions by default -- not just
		the actions for the target being clicked, but all ancestor actions too. This means users don't
		need to hunt for specific parent elements to find the desired action, unlike many systems --
		instead, all actions in the tree are available, improving UX convenience and predictability at
		the cost of more noisy menus. Developers can opt out of this inheritance behavior by simply not
		nesting <code>Contextmenu</code> declarations, and submenus are useful for managing complexity.</p> <h4>Mouse and keyboard:</h4> <ul><li>rightclick opens the Fuz contextmenu and not the system contextmenu (minus current exceptions
			for input/textarea/contenteditable)</li> <li>holding Shift opens the system contextmenu, bypassing the Fuz contextmenu</li> <li>keyboard navigation and activation should work similarly to the W3C <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/">APG menubar pattern</a></li></ul> <h4>Touch devices:</h4> <ul><li>longpress opens the Fuz contextmenu and not the system contextmenu (minus current exceptions
			for input/textarea/contenteditable)</li> <li>tap-then-longpress opens the system contextmenu or performs other default behavior like
			selecting text, bypassing the Fuz contextmenu</li> <li>tap-then-longpress can't work for clickable elements like links; longpress on the first
			contextmenu entry for those cases (double-longpress)</li></ul> <h4>All devices:</h4> <ul><li>opening the contextmenu on the contextmenu itself shows the system contextmenu, bypassing the
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function wn(m,e){bt(e,!0);const r=zt.get(),$=M(()=>r.component),w=M(()=>r.name);At(m,{children:(l,s)=>{var a=$n(),u=I(a);Ot(u,{text:"Introduction"});var x=o(u,2),D=o(c(x));Xt(D,{path:"Web/API/Element/contextmenu_event"}),y(3),i(x);var T=o(x,4),_=o(c(T)),v=c(_,!0);i(_),y(5),i(T);var p=o(T,2);Ft(p,()=>t($),(j,X)=>{X(j,{scoped:!0,children:(F,E)=>{Ct(F,{entries:k=>{st(k,{run:()=>alert("alert A"),children:(L,H)=>{y();var B=N("alert A");n(L,B)},$$slots:{default:!0}})},children:(k,L)=>{var H=bn(),B=o(c(H),2);Ct(B,{entries:U=>{st(U,{run:()=>alert("alert B"),children:(W,q)=>{y();var P=N("alert B");n(W,P)},$$slots:{default:!0}})},children:(U,W)=>{var q=gn();n(U,q)},$$slots:{entries:!0,default:!0}}),i(H),n(k,H)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var S=o(p,2);Se(S,{summary:X=>{y();var F=N("view code");n(X,F)},children:(X,F)=>{{let E=M(()=>`<${t(w)}>
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => alert('alert A')}>
				alert A
			</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md mb_lg">
			<p>alert A -- rightclick or longpress here to open the contextmenu</p>
			<Contextmenu>
				{#snippet entries()}
					<Contextmenu_Entry run={() => alert('alert B')}>
						alert B
					</Contextmenu_Entry>
				{/snippet}
				<p class="panel p_md">
					alert B -- also inherits A
				</p>
			</Contextmenu>
		</div>
	</Contextmenu>
</${t(w)}>`);Rt(X,{get content(){return t(E)}})}},$$slots:{summary:!0,default:!0}});var b=o(S,14),d=o(c(b),2),C=o(c(d));Xt(C,{path:"Web/API/Navigator/vibrate",children:(j,X)=>{var F=yn();n(j,F)},$$slots:{default:!0}}),i(d),i(b);var R=o(b,2);Pe(R,{}),dt(()=>$t(v,t(w))),n(l,a)},$$slots:{default:!0}}),yt()}var Cn=g('<span class="font_family_mono">contextmenu</span> event',1),kn=g(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <p>Use <code>Contextmenu_Root</code> by default for better performance and haptic feedback. Use <code>Contextmenu_Root_For_Safari_Compatibility</code> only if you need iOS Safari support.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, better performance with fewer and less intrusive event handlers, fewer edge
			cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),Tn=g(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless disabled. Other
			interactive elements may have default behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use tap-then-longpress instead of longpress.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),Sn=g("<!> <!>",1);function Pn(m){var e=Sn(),r=I(e);At(r,{children:(w,l)=>{var s=kn(),a=I(s);Ot(a,{text:"iOS compatibility"});var u=o(a,8),x=o(c(u),2),D=o(c(x));Xt(D,{path:"Web/API/Element/contextmenu_event",children:(_,v)=>{var p=Cn();y(),n(_,p)},$$slots:{default:!0}}),i(x),y(4),i(u);var T=o(u,6);Pe(T,{}),n(w,s)},$$slots:{default:!0}});var $=o(r,2);At($,{children:(w,l)=>{var s=Tn(),a=I(s);Ot(a,{text:"Caveats"});var u=o(a,8),x=o(c(u));Xt(x,{path:"Web/API/Element/contextmenu_event"}),y(3),i(u),n(w,s)},$$slots:{default:!0}}),n(m,e)}function In(m){const e=m-1;return e*e*e+1}function En(m){return--m*m*m*m*m+1}function be(m,{from:e,to:r},$={}){var{delay:w=0,duration:l=F=>Math.sqrt(F)*120,easing:s=In}=$,a=getComputedStyle(m),u=a.transform==="none"?"":a.transform,[x,D]=a.transformOrigin.split(" ").map(parseFloat);x/=m.clientWidth,D/=m.clientHeight;var T=An(m),_=m.clientWidth/r.width/T,v=m.clientHeight/r.height/T,p=e.left+e.width*x,S=e.top+e.height*D,b=r.left+r.width*x,d=r.top+r.height*D,C=(p-b)*_,R=(S-d)*v,j=e.width/r.width,X=e.height/r.height;return{delay:w,duration:typeof l=="function"?l(Math.sqrt(C*C+R*R)):l,easing:s,css:(F,E)=>{var A=E*C,k=E*R,L=F+E*j,H=F+E*X;return`transform: ${u} translate(${A}px, ${k}px) scale(${L}, ${H});`}}}function An(m){if("currentCSSZoom"in m)return m.currentCSSZoom;for(var e=m,r=1;e!==null;)r*=+getComputedStyle(e).zoom,e=e.parentElement;return r}var On=g('<menu class="pane unstyled svelte-4htxep"><!></menu>'),zn=g('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function ee(m,e){bt(e,!0);const r=Ce.get(),$=r.add_submenu(),{layout:w}=r,l=M(()=>$.selected);let s=Z(void 0);const a=ce.get(),u=ce.set();let x=Z(0),D=Z(0);Ne(()=>{t(s)&&T(t(s),w,a)});const T=(E,A,k)=>{const{x:L,y:H,width:B,height:O}=E.getBoundingClientRect();u.width=B,u.height=O;const U=L-t(x),W=H-t(D),q=U+B+k.width-A.width;if(q<=0)h(x,k.width,!0);else{const P=B-U;P<=0?h(x,-B):P>q?h(x,k.width-q):h(x,P-B)}h(D,Math.min(0,A.height-(W+O)),!0)};var _=zn();let v;var p=c(_);let S;var b=c(p),d=c(b),C=c(d);wt(C,()=>e.icon??Nt),i(d);var R=o(d,2),j=c(R);wt(j,()=>e.children),i(R),i(b),y(2),i(p);var X=o(p,2);{var F=E=>{var A=On();let k;var L=c(A);wt(L,()=>e.menu),i(A),te(A,H=>h(s,H),()=>t(s)),dt(H=>k=le(A,"",k,H),[()=>({transform:`translate3d(${t(x)??""}px, ${t(D)??""}px, 0)`,"max-height":`${w.height??""}px`})]),n(E,A)};tt(X,E=>{t(l)&&E(F)})}i(_),dt((E,A)=>{v=le(_,"",v,E),S=ft(p,1,"menu_item plain selectable svelte-4htxep",null,S,A),we(p,"aria-expanded",t(l))},[()=>({"--contextmenu_depth":$.depth}),()=>({selected:t(l)})]),Tt("mouseenter",p,E=>{St(E),setTimeout(()=>r.select($))}),n(m,_),yt()}var Nn=g("<!> <!>",1);function Zt(m,e){bt(e,!0);const r=it(e,"name",3,"Cat"),$=it(e,"icon",3,"😺");ee(m,{icon:s=>{y();var a=N();dt(()=>$t(a,$())),n(s,a)},menu:s=>{var a=Nn(),u=I(a);st(u,{run:()=>e.act({type:e.position==="adventure"?"cat_go_home":"cat_go_adventure",name:r()}),icon:T=>{var _=rt(),v=I(_);{var p=b=>{var d=N("🏠");n(b,d)},S=b=>{var d=N("🌄");n(b,d)};tt(v,b=>{e.position==="adventure"?b(p):b(S,!1)})}n(T,_)},children:(T,_)=>{var v=rt(),p=I(v);{var S=d=>{var C=N("go home");n(d,C)},b=d=>{var C=N("go adventure");n(d,C)};tt(p,d=>{e.position==="adventure"?d(S):d(b,!1)})}n(T,v)},$$slots:{icon:!0,default:!0}});var x=o(u,2);st(x,{run:()=>e.act({type:"cat_be_or_do",name:r(),position:e.position}),icon:T=>{var _=rt(),v=I(_);{var p=b=>{var d=N("🌄");n(b,d)},S=b=>{var d=N("🏠");n(b,d)};tt(v,b=>{e.position==="adventure"?b(p):b(S,!1)})}n(T,_)},children:(T,_)=>{var v=rt(),p=I(v);{var S=d=>{var C=N("do adventure");n(d,C)},b=d=>{var C=N("be home");n(d,C)};tt(p,d=>{e.position==="adventure"?d(S):d(b,!1)})}n(T,v)},$$slots:{icon:!0,default:!0}}),n(s,a)},children:(s,a)=>{y();var u=N();dt(()=>$t(u,r())),n(s,u)},$$slots:{icon:!0,menu:!0,default:!0}}),yt()}var Rn=g("<!> <!> <!>",1);function Fn(m,e){var r=Rn(),$=I(r);ke($,{href:"https://github.com/ryanatkn/fuz",icon:a=>{on(a,{get data(){return an},size:"var(--icon_size_xs)"})},children:(a,u)=>{y();var x=N("Source code");n(a,x)},$$slots:{icon:!0,default:!0}});var w=o($,2);Qt(w,{});var l=o(w,2);st(l,{get run(){return e.toggle_about_dialog},icon:a=>{y();var u=N("?");n(a,u)},children:(a,u)=>{y();var x=N("About");n(a,x)},$$slots:{icon:!0,default:!0}}),n(m,r)}const Ie=m=>{const e=m.length;if(e===2)return"cats";if(e===0)return null;const r=m[0];return r.icon+r.name};var Dn=g("<!> <!>",1),Ln=g("<!> <!>",1),Mn=g("<!> <!> <!>",1);function Hn(m,e){bt(e,!0);const r=M(()=>Ie(e.adventure_cats));ee(m,{icon:l=>{y();var s=N("🏠");n(l,s)},menu:l=>{var s=Mn(),a=I(s);{var u=_=>{var v=Dn(),p=I(v);st(p,{run:()=>e.act({type:"call_cats_home"}),icon:d=>{y();var C=N("🐈‍⬛");n(d,C)},children:(d,C)=>{y();var R=N("call");n(d,R)},$$slots:{icon:!0,default:!0}});var S=o(p,2);Qt(S,{}),n(_,v)};tt(a,_=>{t(r)&&_(u)})}var x=o(a,2);Gt(x,17,()=>e.home_cats,_=>_.name,(_,v)=>{Zt(_,{get name(){return t(v).name},get icon(){return t(v).icon},get position(){return t(v).position},get act(){return e.act}})});var D=o(x,2);{var T=_=>{var v=Ln(),p=I(v);st(p,{run:()=>e.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{y();var C=N("🏠");n(d,C)},children:(d,C)=>{y();var R=N("be");n(d,R)},$$slots:{icon:!0,default:!0}});var S=o(p,2);st(S,{run:()=>e.act({type:"call_cats_adventure"}),icon:d=>{y();var C=N("🦋");n(d,C)},children:(d,C)=>{y();var R=N("leave");n(d,R)},$$slots:{icon:!0,default:!0}}),n(_,v)};tt(D,_=>{t(r)||_(T)})}n(l,s)},children:(l,s)=>{y();var a=N("home");n(l,a)},$$slots:{icon:!0,menu:!0,default:!0}}),yt()}var Un=g("<!> <!>",1),qn=g("<!> <!>",1),Bn=g("<!> <!> <!>",1);function Wn(m,e){bt(e,!0);const r=M(()=>Ie(e.home_cats));ee(m,{icon:l=>{y();var s=N("🌄");n(l,s)},menu:l=>{var s=Bn(),a=I(s);{var u=_=>{var v=Un(),p=I(v);st(p,{run:()=>e.act({type:"call_cats_adventure"}),icon:d=>{y();var C=N("🦋");n(d,C)},children:(d,C)=>{y();var R=N("call");n(d,R)},$$slots:{icon:!0,default:!0}});var S=o(p,2);Qt(S,{}),n(_,v)};tt(a,_=>{t(r)&&_(u)})}var x=o(a,2);Gt(x,17,()=>e.adventure_cats,_=>_.name,(_,v)=>{Zt(_,{get name(){return t(v).name},get icon(){return t(v).icon},get position(){return t(v).position},get act(){return e.act}})});var D=o(x,2);{var T=_=>{var v=qn(),p=I(v);st(p,{run:()=>e.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{y();var C=N("🌄");n(d,C)},children:(d,C)=>{y();var R=N("do");n(d,R)},$$slots:{icon:!0,default:!0}});var S=o(p,2);st(S,{run:()=>e.act({type:"call_cats_home"}),icon:d=>{y();var C=N("🐈‍⬛");n(d,C)},children:(d,C)=>{y();var R=N("leave");n(d,R)},$$slots:{icon:!0,default:!0}}),n(_,v)};tt(D,_=>{t(r)||_(T)})}n(l,s)},children:(l,s)=>{y();var a=N("adventure");n(l,a)},$$slots:{icon:!0,menu:!0,default:!0}}),yt()}var jn=g('<span class="icon svelte-y90lnf"> </span>'),Xn=g('<span class="name svelte-y90lnf"><!> </span>'),Gn=g("<span><!><!></span>");function ye(m,e){const r=it(e,"name",3,"Cat"),$=it(e,"icon",3,"😺"),w=it(e,"show_name",3,!0),l=it(e,"show_icon",3,!0);var s=Gn();let a;var u=c(s);{var x=_=>{var v=jn(),p=c(v,!0);i(v),dt(()=>$t(p,$())),n(_,v)};tt(u,_=>{l()&&_(x)})}var D=o(u);{var T=_=>{var v=Xn(),p=c(v);wt(p,()=>e.children??Nt);var S=o(p,1,!0);i(v),dt(()=>$t(S,r())),n(_,v)};tt(D,_=>{w()&&_(T)})}i(s),dt(_=>a=ft(s,1,"cat svelte-y90lnf",null,a,_),[()=>({"has-icon":l()})]),n(m,s)}const Vn=`<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu from '$lib/Contextmenu.svelte';
	import Details from '$lib/Details.svelte';
	import Github_Link from '$lib/Github_Link.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import Cat_Contextmenu from '$routes/docs/contextmenu/Cat_Contextmenu.svelte';
	import App_Contextmenu from '$routes/docs/contextmenu/App_Contextmenu.svelte';
	import Home_Contextmenu from '$routes/docs/contextmenu/Home_Contextmenu.svelte';
	import Adventure_Contextmenu from '$routes/docs/contextmenu/Adventure_Contextmenu.svelte';
	import Cat_View from '$routes/docs/contextmenu/Cat_View.svelte';
	import type {Cat, Cat_Position, History_Item} from '$routes/docs/contextmenu/helpers.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import file_contents from '$routes/docs/contextmenu/Example_Full.svelte?raw';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	const selected = selected_contextmenu_root_component_context.get();
	const Contextmenu_Root_Component = $derived(selected.component);

	const alyssa = 'Alyssa';
	const ben = 'Ben';

	const INITIAL_POSITION: Cat_Position = 'home';
	let alyssa_position: Cat_Position = $state(INITIAL_POSITION);
	let ben_position: Cat_Position = $state(INITIAL_POSITION);

	const alyssa_icon = $derived(alyssa_position === ben_position ? '😺' : '😾');
	const ben_icon = $derived(alyssa_position === ben_position ? '😸' : '😿');

	const alyssa_cat = $derived({name: alyssa, icon: alyssa_icon, position: alyssa_position});
	const ben_cat = $derived({name: ben, icon: ben_icon, position: ben_position});

	let swapped = $state(false);

	// TODO this is weird but \`animate:\` needs an \`each\`?
	const locate_cats = (
		cats: Array<Cat>,
		swapped: boolean,
	): {home_cats: Array<Cat>; adventure_cats: Array<Cat>} => {
		const home_cats: Array<Cat> = [];
		const adventure_cats: Array<Cat> = [];
		for (const cat of cats) {
			const list = cat.position === 'home' ? home_cats : adventure_cats;
			if (swapped) {
				list.unshift(cat);
			} else {
				list.push(cat);
			}
		}
		return {home_cats, adventure_cats};
	};

	const {home_cats, adventure_cats} = $derived(locate_cats([alyssa_cat, ben_cat], swapped));

	// const cats = [alyssa, ben];
	// TODO use these
	// const catMoods = ['😼', '😾', '😺', '😸', '😻'];

	const can_reset = $derived(
		alyssa_position !== INITIAL_POSITION || ben_position !== INITIAL_POSITION,
	);

	// reset the tome's state
	const reset = () => {
		alyssa_position = INITIAL_POSITION;
		ben_position = INITIAL_POSITION;
	};

	let show_about_dialog = $state(false);
	const toggle_about_dialog = () => {
		show_about_dialog = !show_about_dialog;
	};

	const act = (item: History_Item): void => {
		switch (item.type) {
			case 'call_cats_adventure': {
				alyssa_position = 'adventure';
				ben_position = 'adventure';
				break;
			}
			case 'call_cats_home': {
				alyssa_position = 'home';
				ben_position = 'home';
				break;
			}
			case 'cat_go_adventure': {
				if (item.name === alyssa) {
					alyssa_position = 'adventure';
				} else if (item.name === ben) {
					ben_position = 'adventure';
				}
				break;
			}
			case 'cat_go_home': {
				if (item.name === alyssa) {
					alyssa_position = 'home';
				} else if (item.name === ben) {
					ben_position = 'home';
				}
				break;
			}
			case 'cat_be_or_do': {
				swapped = !swapped;
				break;
			}
		}
	};

	const [send, receive] = crossfade({
		fallback: (node, _params) => {
			const style = window.getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 1500,
				easing: quintOut,
				css: (t) => \`
					transform: \${transform} scale(\${t});
					opacity: \${t}
				\`,
			};
		},
	});
<\/script>

<Contextmenu_Root_Component scoped>
	<Tome_Section>
		<Tome_Section_Header text="Full example" />
		<Contextmenu>
			{#snippet entries()}
				{#if can_reset}
					<Contextmenu_Text_Entry run={reset} content="Reset" icon="↻" />
				{/if}
				<App_Contextmenu {toggle_about_dialog} />
			{/snippet}
			<section class="display_flex">
				<div>
					<Contextmenu>
						{#snippet entries()}
							<Home_Contextmenu {act} {home_cats} {adventure_cats} />
						{/snippet}
						<div class="position home">
							<div class="icon">🏠</div>
							<div class="cats">
								{#each home_cats as { name, icon, position } (name)}
									<div
										class="cat_wrapper"
										in:receive={{key: name}}
										out:send={{key: name}}
										animate:flip
									>
										<Contextmenu>
											{#snippet entries()}
												<Cat_Contextmenu {act} {name} {icon} {position} />
											{/snippet}
											<Cat_View {name} {icon} />
										</Contextmenu>
									</div>
								{/each}
							</div>
						</div>
					</Contextmenu>
					<Contextmenu>
						{#snippet entries()}
							<Adventure_Contextmenu {act} {home_cats} {adventure_cats} />
						{/snippet}
						<div class="position adventure">
							<div class="icon">🌄</div>
							<div class="cats">
								{#each adventure_cats as { name, icon, position } (name)}
									<div
										class="cat_wrapper"
										in:receive={{key: name}}
										out:send={{key: name}}
										animate:flip
									>
										<Contextmenu>
											{#snippet entries()}
												<Cat_Contextmenu {act} {name} {icon} {position} />
											{/snippet}
											<Cat_View {name} {icon} />
										</Contextmenu>
									</div>
								{/each}
							</div>
						</div>
					</Contextmenu>
				</div>
			</section>
			<section>
				<Details>
					{#snippet summary()}View example source{/snippet}
					<Code content={file_contents} />
				</Details>
			</section>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root_Component>

{#if show_about_dialog}
	<Dialog onclose={() => (show_about_dialog = false)}>
		<div class="mx_auto box">
			<div class="pane p_xl text_align_center">
				<h1>About Fuz</h1>
				<blockquote>Svelte UI library</blockquote>
				<blockquote>
					free and open source at<br /><Github_Link path="ryanatkn/fuz" />
				</blockquote>
				<code class="display_block p_md mb_lg"
					>npm i -D <a href="https://www.npmjs.com/package/@ryanatkn/fuz">@ryanatkn/fuz</a></code
				>
				<div class="p_xl box">
					<h2>Color scheme</h2>
					<Color_Scheme_Input />
					<h2>Theme</h2>
					<Theme_Input />
				</div>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.position {
		border-radius: var(--border_radius_md);
		background-color: var(--fg_1);
		display: flex;
		border: transparent var(--border_width_4) double;
	}
	.position:hover {
		border-color: var(--border_color_1);
	}
	.position .icon {
		font-size: var(--icon_size_xl);
	}
	.cats {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cat_wrapper {
		display: flex;
		flex-direction: column;
		width: 130px;
	}
</style>
`;var Yn=g("<!> <!>",1),Kn=g('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Zn=g('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Jn=g('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Qn=g('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),to=g('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),eo=g("<!> <!>",1),no=g('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><!></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@ryanatkn/fuz">@ryanatkn/fuz</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),oo=g("<!> <!>",1);function ao(m,e){bt(e,!0);const r=zt.get(),$=M(()=>r.component),w="Alyssa",l="Ben",s="home";let a=Z(s),u=Z(s);const x=M(()=>t(a)===t(u)?"😺":"😾"),D=M(()=>t(a)===t(u)?"😸":"😿"),T=M(()=>({name:w,icon:t(x),position:t(a)})),_=M(()=>({name:l,icon:t(D),position:t(u)}));let v=Z(!1);const p=(O,U)=>{const W=[],q=[];for(const P of O){const et=P.position==="home"?W:q;U?et.unshift(P):et.push(P)}return{home_cats:W,adventure_cats:q}},S=M(()=>p([t(T),t(_)],t(v))),b=M(()=>t(S).home_cats),d=M(()=>t(S).adventure_cats),C=M(()=>t(a)!==s||t(u)!==s),R=()=>{h(a,s),h(u,s)};let j=Z(!1);const X=()=>{h(j,!t(j))},F=O=>{switch(O.type){case"call_cats_adventure":{h(a,"adventure"),h(u,"adventure");break}case"call_cats_home":{h(a,"home"),h(u,"home");break}case"cat_go_adventure":{O.name===w?h(a,"adventure"):O.name===l&&h(u,"adventure");break}case"cat_go_home":{O.name===w?h(a,"home"):O.name===l&&h(u,"home");break}case"cat_be_or_do":{h(v,!t(v));break}}},[E,A]=tn({fallback:(O,U)=>{const W=window.getComputedStyle(O),q=W.transform==="none"?"":W.transform;return{duration:1500,easing:En,css:P=>`
					transform: ${q} scale(${P});
					opacity: ${P}
				`}}});var k=oo(),L=I(k);Ft(L,()=>t($),(O,U)=>{U(O,{scoped:!0,children:(W,q)=>{At(W,{children:(P,et)=>{var lt=eo(),nt=I(lt);Ot(nt,{text:"Full example"});var ct=o(nt,2);Ct(ct,{entries:xt=>{var vt=Yn(),mt=I(vt);{var Q=Y=>{Te(Y,{run:R,content:"Reset",icon:"↻"})};tt(mt,Y=>{t(C)&&Y(Q)})}var V=o(mt,2);Fn(V,{toggle_about_dialog:X}),n(xt,vt)},children:(xt,vt)=>{var mt=to(),Q=I(mt),V=c(Q),Y=c(V);Ct(Y,{entries:f=>{Hn(f,{act:F,get home_cats(){return t(b)},get adventure_cats(){return t(d)}})},children:(f,z)=>{var G=Zn(),J=o(c(G),2);Gt(J,29,()=>t(b),({name:K,icon:ht,position:ot})=>K,(K,ht)=>{let ot=()=>t(ht).name,Pt=()=>t(ht).icon,gt=()=>t(ht).position;var at=Kn(),It=c(at);Ct(It,{entries:Et=>{Zt(Et,{act:F,get name(){return ot()},get icon(){return Pt()},get position(){return gt()}})},children:(Et,ne)=>{ye(Et,{get name(){return ot()},get icon(){return Pt()}})},$$slots:{entries:!0,default:!0}}),i(at),jt(1,at,()=>A,()=>({key:ot()})),jt(2,at,()=>E,()=>({key:ot()})),ge(at,()=>be,null),n(K,at)}),i(J),i(G),n(f,G)},$$slots:{entries:!0,default:!0}});var pt=o(Y,2);Ct(pt,{entries:f=>{Wn(f,{act:F,get home_cats(){return t(b)},get adventure_cats(){return t(d)}})},children:(f,z)=>{var G=Qn(),J=o(c(G),2);Gt(J,29,()=>t(d),({name:K,icon:ht,position:ot})=>K,(K,ht)=>{let ot=()=>t(ht).name,Pt=()=>t(ht).icon,gt=()=>t(ht).position;var at=Jn(),It=c(at);Ct(It,{entries:Et=>{Zt(Et,{act:F,get name(){return ot()},get icon(){return Pt()},get position(){return gt()}})},children:(Et,ne)=>{ye(Et,{get name(){return ot()},get icon(){return Pt()}})},$$slots:{entries:!0,default:!0}}),i(at),jt(1,at,()=>A,()=>({key:ot()})),jt(2,at,()=>E,()=>({key:ot()})),ge(at,()=>be,null),n(K,at)}),i(J),i(G),n(f,G)},$$slots:{entries:!0,default:!0}}),i(V),i(Q);var ut=o(Q,2),Dt=c(ut);Se(Dt,{summary:f=>{y();var z=N("View example source");n(f,z)},children:(f,z)=>{Rt(f,{get content(){return Vn}})},$$slots:{summary:!0,default:!0}}),i(ut),n(xt,mt)},$$slots:{entries:!0,default:!0}}),n(P,lt)},$$slots:{default:!0}})},$$slots:{default:!0}})});var H=o(L,2);{var B=O=>{ln(O,{onclose:()=>h(j,!1),children:(U,W)=>{var q=no(),P=c(q),et=o(c(P),4),lt=o(c(et),2);nn(lt,{path:"ryanatkn/fuz"}),i(et);var nt=o(et,4),ct=o(c(nt),2);rn(ct,{});var _t=o(ct,4);sn(_t,{}),i(nt),i(P),i(q),n(U,q)},$$slots:{default:!0}})};tt(H,O=>{t(j)&&O(B)})}n(m,k),yt()}var ro=g("<!> <!> <!>",1),so=g(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),io=g("<!> <!>",1);function lo(m,e){bt(e,!0);const r=zt.get(),$=M(()=>r.component),w=M(()=>r.name);let l=Z(!1),s=Z(!1),a=Z(!1);var u=rt(),x=I(u);Ft(x,()=>t($),(D,T)=>{T(D,{scoped:!0,children:(_,v)=>{At(_,{children:(p,S)=>{var b=io(),d=I(b);Ot(d,{text:"Basic usage"});var C=o(d,2);Ct(C,{entries:j=>{var X=ro(),F=I(X);st(F,{run:()=>void h(l,!t(l)),children:(k,L)=>{y();var H=N("Hello world");n(k,H)},$$slots:{default:!0}});var E=o(F,2);st(E,{run:()=>void h(s,!t(s)),icon:L=>{y();var H=N("🌞");n(L,H)},children:(L,H)=>{y();var B=N("Hello with an optional icon snippet");n(L,B)},$$slots:{icon:!0,default:!0}});var A=o(E,2);st(A,{run:()=>void h(a,!t(a)),icon:"🌚",children:(k,L)=>{y();var H=N("Hello with an optional icon string");n(k,H)},$$slots:{default:!0}}),n(j,X)},children:(j,X)=>{var F=so(),E=o(c(F),2);{let nt=M(()=>`<${t(w)} scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}>
        Hello world <!-- ${t(l)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}>
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet <!-- ${t(s)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚">
        Hello with an optional icon string <!-- ${t(a)} -->
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</${t(w)}>
...markup without contextmenu behavior...`);Rt(E,{get content(){return t(nt)}})}var A=o(E,2),k=c(A);let L;var H=c(k);i(k),i(A);var B=o(A,2),O=c(B);let U;var W=c(O);i(O),i(B);var q=o(B,2),P=c(q);let et;var lt=c(P);i(P),i(q),y(2),i(F),dt((nt,ct,_t)=>{L=ft(k,1,"",null,L,nt),$t(H,`greeted = ${t(l)??""}`),U=ft(O,1,"",null,U,ct),$t(W,`greeted_icon_snippet = ${t(s)??""}`),et=ft(P,1,"",null,et,_t),$t(lt,`greeted_icon_string = ${t(a)??""}`)},[()=>({color_g_5:t(l)}),()=>({color_e_5:t(s)}),()=>({color_d_5:t(a)})]),n(j,F)},$$slots:{entries:!0,default:!0}}),n(p,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,u),yt()}var co=g("<span> </span>");function Wt(m,e){const r=He(e,["$$slots","$$events","$$legacy","glyph","size","class"]),$="var(--font_size, 1em)",w="var(--font_size, inherit)",l=M(()=>e.size??$);var s=co();$e(s,u=>({...r,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${e.class??""}`,[Me]:u}),[()=>({width:t(l),height:t(l),"min-width":t(l),"min-height":t(l),"font-size":e.size??w})]);var a=c(s,!0);i(s),dt(()=>$t(a,e.glyph)),n(m,s)}var uo=g('<span class="color_f_5">option f</span>'),_o=g('<span class="color_g_5">option g</span>'),vo=g('<span class="color_j_5">option j</span>'),mo=g("<!> <!> <!> <!>",1),po=g('<li class="color_error">Error: <code> </code></li>'),ho=g('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),fo=g(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries -- just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),xo=g("<!> <!>",1);function go(m,e){bt(e,!0);const r=zt.get(),$=M(()=>r.component),w=M(()=>r.name),l=new Jt;let s=Z(void 0);const a=M(()=>t(s)?`color_${t(s)}_5`:void 0),u=M(()=>t(s)?`color_${t(s)}`:void 0);var x=rt(),D=I(x);Ft(D,()=>t($),(T,_)=>{_(T,{get contextmenu(){return l},scoped:!0,children:(v,p)=>{At(v,{children:(S,b)=>{var d=xo(),C=I(d);Ot(C,{text:"Custom instance"});var R=o(C,2);Ct(R,{entries:X=>{ee(X,{icon:A=>{y();var k=N("🎨");n(A,k)},menu:A=>{var k=mo(),L=I(k);st(L,{run:()=>(h(s,"f"),{ok:!0,close:!1}),children:(U,W)=>{var q=uo();n(U,q)},$$slots:{default:!0}});var H=o(L,2);st(H,{run:()=>(h(s,"g"),{ok:!0,close:!1}),children:(U,W)=>{var q=_o();n(U,q)},$$slots:{default:!0}});var B=o(H,2);st(B,{run:()=>(h(s,"j"),{ok:!0,close:!1}),children:(U,W)=>{var q=vo();n(U,q)},$$slots:{default:!0}});var O=o(B,2);st(O,{run:()=>(l.close(),{ok:!0}),children:(U,W)=>{y();var q=N("close contextmenu");n(U,q)},$$slots:{default:!0}}),n(A,k)},children:(A,k)=>{y();var L=N("select color");n(A,L)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(X,F)=>{var E=fo(),A=c(E),k=o(c(A)),L=c(k,!0);i(k),y(5),i(A);var H=o(A,2);Rt(H,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var B=o(H,2);{let V=M(()=>`<${t(w)} {contextmenu} scoped>...</${t(w)}>`);Rt(B,{get content(){return t(V)}})}var O=o(B,2),U=o(c(O));U.textContent="{ok: true, close: false}",y(),i(O);var W=o(O,2),q=o(c(W),2),P=c(q),et=o(c(P),2),lt=c(et,!0);i(et),i(P);var nt=o(P,2),ct=o(c(nt),2),_t=c(ct);i(ct),i(nt);var xt=o(nt,2);{var vt=V=>{var Y=po(),pt=o(c(Y)),ut=c(pt,!0);i(pt),i(Y),dt(()=>$t(ut,l.error)),n(V,Y)};tt(xt,V=>{l.error&&V(vt)})}i(q),i(W);var mt=o(W,2);{var Q=V=>{var Y=ho(),pt=c(Y),ut=c(pt),Dt=c(ut);Wt(Dt,{glyph:"↑"}),i(ut);var kt=o(ut,2),f=c(kt),z=c(f);Wt(z,{glyph:"←"}),i(f);var G=o(f,2),J=c(G);Wt(J,{glyph:"↵"}),i(G);var K=o(G,2),ht=c(K);Wt(ht,{glyph:"→"}),i(K),i(kt);var ot=o(kt,2),Pt=c(ot);Wt(Pt,{glyph:"↓"}),i(ot),i(pt),i(Y),dt(()=>{ft(ut,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${t(u)??""}`),ut.disabled=!l.can_select_previous,ft(f,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${t(u)??""}`),f.disabled=!l.can_collapse,ft(G,1,`border_radius_0 ${t(u)??""}`),G.disabled=!l.can_activate,ft(K,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${t(u)??""}`),K.disabled=!l.can_expand,ft(ot,1,`border_top_left_radius_0 border_top_right_radius_0 ${t(u)??""}`),ot.disabled=!l.can_select_next}),Tt("mousedown",ut,gt=>{St(gt),l.select_previous()},!0),Tt("mousedown",f,gt=>{St(gt),l.collapse_selected()},!0),Tt("mousedown",G,async gt=>{St(gt),await l.activate_selected()},!0),Tt("mousedown",K,gt=>{St(gt),l.expand_selected()},!0),Tt("mousedown",ot,gt=>{St(gt),l.select_next()},!0),jt(3,Y,()=>en),n(V,Y)};tt(mt,V=>{l.opened&&V(Q)})}i(E),dt(()=>{$t(L,t(w)),ft(W,1,`mb_md ${t(a)??""}`),$t(lt,l.opened),$t(_t,`${l.x??""} && contextmenu.y === ${l.y??""}`)}),n(X,E)},$$slots:{entries:!0,default:!0}}),n(S,d)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,x),yt()}const bo=(m,e)=>{const r=window.getSelection();if(!r||!t(e))return;const $=document.createRange();$.selectNodeContents(t(e)),r.removeAllRanges(),r.addRange($)};var yo=g(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the default behaviors.</aside></div>`),$o=g("<div><!></div> <!>",1);function wo(m,e){bt(e,!0);const r=zt.get(),$=M(()=>r.component),w=new Jt;let l=Z(!1),s=Z(void 0),a=Z("");const u="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",x=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,D=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,T=M(()=>t(a)===u||t(a)===x||t(a)===D);var _=rt(),v=I(_);Ft(v,()=>t($),(p,S)=>{S(p,{get contextmenu(){return w},scoped:!0,children:(b,d)=>{At(b,{children:(C,R)=>{var j=$o(),X=I(j);let F;var E=c(X);Ot(E,{text:"Select text"}),i(X);var A=o(X,2);Ct(A,{entries:L=>{st(L,{run:()=>void h(l,!t(l)),children:(H,B)=>{y();var O=N("Toggle something");n(H,O)},$$slots:{default:!0}})},children:(L,H)=>{var B=yo();let O;var U=c(B),W=o(c(U),2),q=o(c(W));q.__click=[bo,s];let P;y(),i(W),i(U),te(U,Y=>h(s,Y),()=>t(s));var et=o(U,2),lt=c(et);Ht(lt),i(et);var nt=o(et,2);let ct;var _t=o(nt,2),xt=c(_t);Re(xt),i(_t);var vt=o(_t,2),mt=c(vt);Xt(mt,{path:"Web/HTML/Global_attributes/contenteditable"}),y(),i(vt);var Q=o(vt,4),V=o(Q,4);y(2),i(B),dt((Y,pt,ut)=>{O=ft(B,1,"panel p_md",null,O,Y),P=ft(q,1,"",null,P,pt),ct=ft(nt,1,"",null,ct,ut)},[()=>({color_g_5:t(T)}),()=>({color_a:t(l)}),()=>({color_g_5:t(T)})]),xe(lt,()=>t(a),Y=>h(a,Y)),xe(xt,()=>t(a),Y=>h(a,Y)),he("innerText",Q,()=>t(a),Y=>h(a,Y)),he("innerText",V,()=>t(a),Y=>h(a,Y)),n(L,B)},$$slots:{entries:!0,default:!0}}),dt(k=>F=ft(X,1,"",null,F,k),[()=>({color_d_5:t(T)})]),n(C,j)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,_),yt()}ue(["click"]);const Co=(m,e)=>{const r=window.getSelection();if(!r||!t(e))return;const $=document.createRange();$.selectNodeContents(t(e)),r.removeAllRanges(),r.addRange($)};var ko=g('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),To=g('<li>custom "some custom entry" entry</li>'),So=g('<li>"copy text" entry when text is selected</li>'),Po=g("<li>link entry when clicking on a link</li>"),Io=g("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),Eo=g(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),Ao=g('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function Oo(m,e){bt(e,!0);const r=_=>{var v=ko(),p=c(v),S=o(c(p));S.__click=[Co,T];let b;y(),i(p),te(p,R=>h(T,R),()=>t(T));var d=o(p,2),C=o(c(d));y(),i(d),i(v),dt((R,j)=>{b=ft(S,1,"",null,b,R),we(C,"href",j)},[()=>({color_h:t(D)}),()=>Qe("/")]),n(_,v)},$=zt.get(),w=M(()=>$.component),l=M(()=>$.name),s=new Jt;let a=Z(!1),u=Z(!1),x=Z(!0),D=Z(!1),T=Z(void 0);At(m,{children:(_,v)=>{var p=Ao(),S=I(p);Ot(S,{text:"Disable default behaviors"});var b=o(S,4);{let P=M(()=>`<${t(l)}${t(a)?" link_entry={null}":""}${t(u)?" text_entry={null}":""}>`);Rt(b,{get content(){return t(P)}})}var d=o(b,2),C=c(d),R=c(C);Ht(R);var j=o(R,2),X=o(c(j));X.textContent="link_entry={null}",i(j),i(C);var F=o(C,2),E=c(F);Ht(E);var A=o(E,2),k=o(c(A));k.textContent="text_entry={null}",i(A),i(F),i(d);var L=o(d,2);{let P=M(()=>t(a)?null:void 0),et=M(()=>t(u)?null:void 0);Ft(L,()=>t(w),(lt,nt)=>{nt(lt,{get contextmenu(){return s},scoped:!0,get link_entry(){return t(P)},get text_entry(){return t(et)},children:(ct,_t)=>{var xt=rt(),vt=I(xt);{var mt=V=>{Ct(V,{entries:pt=>{st(pt,{icon:">",run:()=>void h(D,!t(D)),children:(ut,Dt)=>{y();var kt=N("some custom entry");n(ut,kt)},$$slots:{default:!0}})},children:(pt,ut)=>{r(pt)},$$slots:{entries:!0,default:!0}})},Q=V=>{r(V)};tt(vt,V=>{t(x)?V(mt):V(Q,!1)})}n(ct,xt)},$$slots:{default:!0}})})}var H=o(L,4),B=c(H),O=c(B);Ht(O),y(),i(B),i(H);var U=o(H,2);{var W=P=>{var et=Io(),lt=o(I(et),2),nt=c(lt);{var ct=Q=>{var V=To();n(Q,V)};tt(nt,Q=>{t(x)&&Q(ct)})}var _t=o(nt,2);{var xt=Q=>{var V=So();n(Q,V)};tt(_t,Q=>{t(u)||Q(xt)})}var vt=o(_t,2);{var mt=Q=>{var V=Po();n(Q,V)};tt(vt,Q=>{t(a)||Q(mt)})}i(lt),n(P,et)},q=P=>{var et=Eo();n(P,et)};tt(U,P=>{t(x)||!t(a)||!t(u)?P(W):P(q,!1)})}se(R,()=>t(a),P=>h(a,P)),se(E,()=>t(u),P=>h(u,P)),se(O,()=>t(x),P=>h(x,P)),n(_,p)},$$slots:{default:!0}}),yt()}ue(["click"]);var zo=g(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function No(m,e){bt(e,!0);const r=zt.get(),$=M(()=>r.component),w=M(()=>r.name);var l=rt(),s=I(l);Ft(s,()=>t($),(a,u)=>{u(a,{scoped:!0,children:(x,D)=>{At(x,{children:(T,_)=>{var v=zo(),p=I(v);Ot(p,{text:"Default behaviors"});var S=o(p,2),b=c(S);{let d=M(()=>`<${t(w)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${t(w)}>`);Rt(b,{get content(){return t(d)}})}y(6),i(S),n(T,v)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,l),yt()}var Ro=g("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function sa(m,e){bt(e,!0);const $=De("Contextmenu");zt.set(),Fe(m,{get tome(){return $},children:(w,l)=>{var s=Ro(),a=I(s);wn(a,{});var u=o(a,2);lo(u,{});var x=o(u,2);No(x,{});var D=o(x,2);wo(D,{});var T=o(D,2);Oo(T,{});var _=o(T,2);go(_,{});var v=o(_,2);ao(v,{});var p=o(v,2);Pn(p),y(2),n(w,s)},$$slots:{default:!0}}),yt()}export{sa as component};
