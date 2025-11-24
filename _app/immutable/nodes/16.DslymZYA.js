import"../chunks/DsnmJJEf.js";import{p as gt,g as st,a as S,b as n,c as bt,h as wt,ak as Rt,f as b,aD as kt,aE as Vt,s as o,aB as ue,i as t,aC as J,bm as Yt,ar as f,d as c,r as i,u as L,t as _t,n as $,a8 as O,e as $t,o as Ne,bq as Re}from"../chunks/DFPGRpXC.js";import{T as Fe}from"../chunks/Dn1l4OAC.js";import{g as De}from"../chunks/VfGl7bOy.js";import{c as Dt}from"../chunks/C8E1Y7qq.js";import{C as Ft}from"../chunks/DXFXhwc6.js";import{M as Xt}from"../chunks/yz1BYdv7.js";import{T as At,a as Ot}from"../chunks/D8D7nPW9.js";import{e as Le}from"../chunks/C6e2exc9.js";import{i as ie,d as $e,e as Gt,j as le,r as Ht,h as ht,s as we,S as Me}from"../chunks/BcAAJJP1.js";import{p as lt,s as de,r as He}from"../chunks/Cn9cylxT.js";import{c as qe,C as Jt,a as Ce,b as ce,d as ve}from"../chunks/DKKj-QkX.js";import{a as Ue,b as Be,c as We,d as je,e as Xe,f as Ge,g as Ve,h as ke,i as Te,j as Qt,k as Ye,l as me,m as Kt,n as Ke,o as Ze,C as pe,p as it}from"../chunks/CXbzMjds.js";import{D as Se,b as he}from"../chunks/DmBksSfM.js";import{a as fe,b as xe,c as se}from"../chunks/DhZNnUg_.js";import{c as Je,r as Qe}from"../chunks/BUuEPMjL.js";import{i as Q}from"../chunks/B9dAxPDU.js";import{b as te}from"../chunks/uyiARXNM.js";import{s as Tt}from"../chunks/V2q5a4YM.js";import{t as jt,a as ge,c as tn,s as en}from"../chunks/jtUK4Dwc.js";import{G as nn}from"../chunks/d_ZV0u_C.js";import{S as on,g as an}from"../chunks/ItVhM4Lx.js";import{C as rn,T as sn}from"../chunks/DEziCFoX.js";import{D as ln}from"../chunks/0qm5bzNZ.js";function Ct(m,e){gt(e,!0);const u=lt(e,"tag",3,"span");var P=st(),w=S(P);Le(w,u,!1,(l,a)=>{ie(l,()=>qe(e.entries)),$e(l,()=>({class:"display_contents",...e.attrs}));var r=st(),s=S(r);wt(s,()=>e.children),n(a,r)}),n(m,P),bt()}const cn=(m,e=Rt)=>{ke(m,de(e))},un=(m,e=Rt)=>{Te(m,de(e))},dn=(m,e=Rt)=>{Qt(m,de(e))};var _n=b('<div class="contextmenu_root svelte-umztbo" role="region"><!></div>'),vn=b('<div class="contextmenu_layout svelte-umztbo" aria-hidden="true"></div>'),mn=b('<ul class="contextmenu unstyled pane svelte-umztbo" role="menu" aria-label="context menu" tabindex="-1"></ul>'),pn=b("<!> <!> <!>",1);function hn(m,e){gt(e,!0);const u=lt(e,"contextmenu",19,()=>new Jt),P=lt(e,"longpress_move_tolerance",3,Ue),w=lt(e,"longpress_duration",3,Be),l=lt(e,"bypass_with_tap_then_longpress",3,!0),a=lt(e,"bypass_window",3,We),r=lt(e,"bypass_move_tolerance",3,je),s=lt(e,"open_offset_x",3,Xe),x=lt(e,"open_offset_y",3,Ge),F=lt(e,"scoped",3,!1),T=lt(e,"link_entry",3,cn),v=lt(e,"text_entry",3,un),_=lt(e,"separator_entry",3,dn);Ce.set(u());let p=J(void 0);const y=L(()=>u().layout),g=ce.set(),d=L(()=>Ke(u().x,g.width,t(y).width)),C=L(()=>Ze(u().y,g.height,t(y).height));let R=J(void 0),W=J(void 0),V=J(void 0),E=J(void 0),z=J(void 0),N=J(void 0),k=J(void 0),U=J(!1);const H=()=>{document.body.classList.add("contextmenu_pending")},j=()=>{document.body.classList.remove("contextmenu_pending")},I=()=>{f(z,!1),t(E)!=null&&(clearTimeout(t(E)),f(E,null)),j()},D=()=>{f(V,null),f(R,null),f(W,null),f(N,!1),t(k)!=null&&(clearTimeout(t(k)),f(k,null))},q=()=>{I(),D()},M=h=>{if(t(N)){D();return}const{target:A}=h;if(t(z)){if(t(p)?.contains(A))return;q(),Tt(h);return}me(A,h.shiftKey)&&(t(p)?.contains(A)||ve(A,h.clientX+s(),h.clientY+x(),u(),{link_enabled:T()!==null,text_enabled:v()!==null,separator_enabled:_()!==null})&&(Tt(h),q()))},Y=h=>{f(z,!1),f(U,!1);const{touches:A,target:G}=h;if(u().opened||A.length!==1||!me(G,h.shiftKey)){q();return}const{clientX:tt,clientY:Z}=A[0];if(l()){if(t(V)!=null&&performance.now()-t(V)<a()&&Math.hypot(tt-t(R),Z-t(W))<r()){f(N,!0),f(V,null),f(R,null),f(W,null),t(k)!=null&&(clearTimeout(t(k)),f(k,null));return}f(V,performance.now(),!0),t(k)!=null&&clearTimeout(t(k)),f(k,setTimeout(()=>{D()},a()),!0)}f(R,tt,!0),f(W,Z,!0),H(),t(E)!=null&&I(),f(E,setTimeout(()=>{f(z,!0),j(),ve(G,t(R)+s(),t(W)+x(),u(),{link_enabled:T()!==null,text_enabled:v()!==null,separator_enabled:_()!==null})},w()),!0)},B=h=>{if(t(E)==null||u().opened)return;const{touches:A}=h;if(A.length!==1)return;const{clientX:G,clientY:tt}=A[0];if(Math.hypot(G-t(R),tt-t(W))>P()){I();return}h.preventDefault()},et=h=>{t(E)!=null&&(t(z)&&(Tt(h),f(U,!0)),I()),t(N)&&D()},nt=()=>{q()},ut=h=>{t(p)&&!t(p).contains(h.target)&&u().close()},yt=Ve(u()),ft=Ye(yt),vt=h=>{const A={passive:!0,capture:!0},G={passive:!1,capture:!0},tt=Yt(h,"touchstart",Y,A),Z=Yt(h,"touchmove",B,G),pt=Yt(h,"touchend",et,G),at=Yt(h,"touchcancel",nt,A);return()=>{tt(),Z(),pt(),at()}};var ct=pn();kt("contextmenu",Vt,function(...h){(F()?void 0:M)?.apply(this,h)}),kt("mousedown",Vt,function(...h){(u().opened?ut:void 0)?.apply(this,h)}),kt("keydown",Vt,function(...h){(u().opened?ft:void 0)?.apply(this,h)}),ie(Vt,()=>F()?void 0:vt);var mt=S(ct);{var X=h=>{var A=_n();A.__contextmenu=M;var G=c(A);wt(G,()=>e.children),i(A),ie(A,()=>vt),n(h,A)},K=h=>{var A=st(),G=S(A);wt(G,()=>e.children),n(h,A)};Q(mt,h=>{F()?h(X):h(K,!1)})}var ot=o(mt,2);{var dt=h=>{var A=vn();Kt(A,"clientWidth",G=>t(y).width=G),Kt(A,"clientHeight",G=>t(y).height=G),n(h,A)};Q(ot,h=>{u().has_custom_layout||h(dt)})}var Nt=o(ot,2);{var St=h=>{var A=mn();let G;Gt(A,20,()=>u().params,tt=>tt,(tt,Z)=>{var pt=st(),at=S(pt);{var Pt=rt=>{var It=st(),qt=S(It);wt(qt,()=>Z),n(rt,It)},xt=rt=>{var It=st(),qt=S(It);{var Et=Lt=>{var Ut=st(),oe=S(Ut);wt(oe,()=>T()??Rt,()=>Z.props),n(Lt,Ut)},ne=Lt=>{var Ut=st(),oe=S(Ut);{var Ee=Mt=>{var Bt=st(),ae=S(Bt);wt(ae,()=>v()??Rt,()=>Z.props),n(Mt,Bt)},Ae=Mt=>{var Bt=st(),ae=S(Bt);{var Oe=re=>{var _e=st(),ze=S(_e);wt(ze,()=>_()??Rt,()=>Z.props),n(re,_e)};Q(ae,re=>{Z.snippet==="separator"&&re(Oe)},!0)}n(Mt,Bt)};Q(oe,Mt=>{Z.snippet==="text"?Mt(Ee):Mt(Ae,!1)},!0)}n(Lt,Ut)};Q(qt,Lt=>{Z.snippet==="link"?Lt(Et):Lt(ne,!1)},!0)}n(rt,It)};Q(at,rt=>{typeof Z=="function"?rt(Pt):rt(xt,!1)})}n(tt,pt)}),i(A),te(A,tt=>f(p,tt),()=>t(p)),_t(()=>G=le(A,"",G,{transform:`translate3d(${t(d)??""}px, ${t(C)??""}px, 0)`})),kt("click",A,function(...tt){(t(U)?Z=>{f(U,!1),Tt(Z)}:void 0)?.apply(this,tt)},!0),Kt(A,"offsetWidth",tt=>g.width=tt),Kt(A,"offsetHeight",tt=>g.height=tt),n(h,A)};Q(Nt,h=>{u().opened&&h(St)})}n(m,ct),bt()}ue(["contextmenu"]);class fn{#t=J();get variant(){return t(this.#t)}set variant(e){f(this.#t,e,!0)}#e=L(()=>this.variant==="standard"?pe:hn);get component(){return t(this.#e)}set component(e){f(this.#e,e)}#n=L(()=>this.component===pe?"Contextmenu_Root":"Contextmenu_Root_For_Safari_Compatibility");get name(){return t(this.#n)}set name(e){f(this.#n,e)}constructor(e="standard"){this.variant=e}}const zt=Je(()=>new fn("standard"));var xn=b('<fieldset><legend><h4>Selected root component:</h4></legend> <label class="row"><input type="radio"/> <div>standard <code>Contextmenu_Root</code></div></label> <label class="row"><input type="radio"/> <div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div></label></fieldset>');function Pe(m,e){gt(e,!0);const u=[],P=zt.get();var w=xn(),l=o(c(w),2),a=c(l);Ht(a),a.value=a.__value="standard",$(2),i(l);var r=o(l,2),s=c(r);Ht(s),s.value=s.__value="compat",$(2),i(r),i(w),fe(u,[],a,()=>P.variant,x=>P.variant=x),fe(u,[],s,()=>P.variant,x=>P.variant=x),n(m,w),bt()}var gn=b('<p class="panel p_md">alert B -- also inherits A</p>'),bn=b('<div class="panel p_md mb_lg"><p>alert A -- rightclick or longpress here to open the contextmenu</p> <!></div>'),yn=b("<code>navigator.vibrate</code>"),$n=b(`<!> <p>Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
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
			Fuz contextmenu</li> <li>opening the contextmenu attempts haptic feedback with <!></li></ul> <!>`,1);function wn(m,e){gt(e,!0);const u=zt.get(),P=L(()=>u.component),w=L(()=>u.name);At(m,{children:(l,a)=>{var r=$n(),s=S(r);Ot(s,{text:"Introduction"});var x=o(s,2),F=o(c(x));Xt(F,{path:"Web/API/Element/contextmenu_event"}),$(3),i(x);var T=o(x,4),v=o(c(T)),_=c(v,!0);i(v),$(5),i(T);var p=o(T,2);Dt(p,()=>t(P),(W,V)=>{V(W,{scoped:!0,children:(E,z)=>{Ct(E,{entries:k=>{it(k,{run:()=>alert("alert A"),children:(U,H)=>{$();var j=O("alert A");n(U,j)},$$slots:{default:!0}})},children:(k,U)=>{var H=bn(),j=o(c(H),2);Ct(j,{entries:D=>{it(D,{run:()=>alert("alert B"),children:(q,M)=>{$();var Y=O("alert B");n(q,Y)},$$slots:{default:!0}})},children:(D,q)=>{var M=gn();n(D,M)},$$slots:{entries:!0,default:!0}}),i(H),n(k,H)},$$slots:{entries:!0,default:!0}})},$$slots:{default:!0}})});var y=o(p,2);Se(y,{summary:V=>{$();var E=O("view code");n(V,E)},children:(V,E)=>{{let z=L(()=>`<${t(w)}>
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
</${t(w)}>`);Ft(V,{get content(){return t(z)}})}},$$slots:{summary:!0,default:!0}});var g=o(y,14),d=o(c(g),2),C=o(c(d));Xt(C,{path:"Web/API/Navigator/vibrate",children:(W,V)=>{var E=yn();n(W,E)},$$slots:{default:!0}}),i(d),i(g);var R=o(g,2);Pe(R,{}),_t(()=>$t(_,t(w))),n(l,r)},$$slots:{default:!0}}),bt()}var Cn=b('<span class="font_family_mono">contextmenu</span> event',1),kn=b(`<!> <p>Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.</p> <p>Use <code>Contextmenu_Root</code> by default for better performance and haptic feedback. Use <code>Contextmenu_Root_For_Safari_Compatibility</code> only if you need iOS Safari support.</p> <h4>Contextmenu_Root</h4> <ul><li>standard, default implementation</li> <li>relies on the browser's <!></li> <li>much simpler, better performance with fewer and less intrusive event handlers, fewer edge
			cases that can go wrong</li> <li>does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed</li></ul> <h4>Contextmenu_Root_For_Safari_Compatibility</h4> <ul><li>opt-in for iOS</li> <li>some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)</li> <li>implements custom longpress detection to work around iOS Safari's lack of <code>contextmenu</code> event support</li> <li>works on all devices including iOS Safari</li> <li>more complex implementation with custom touch event handling and gesture detection</li> <li>a longpress is cancelled if you move the touch past a threshold before it triggers</li> <li>opt into this version only if you need iOS Safari support</li></ul> <!>`,1),Tn=b(`<!> <p>The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.</p> <p>To mitigate the downsides:</p> <ul><li>The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless disabled. Other
			interactive elements may have default behaviors added in the future.</li> <li>The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.</li> <li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li> <li>To bypass on touch devices (e.g. to select text), use tap-then-longpress instead of longpress.</li> <li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li></ul> <p>See also the <!> docs and the <a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.</p>`,1),Sn=b("<!> <!>",1);function Pn(m){var e=Sn(),u=S(e);At(u,{children:(w,l)=>{var a=kn(),r=S(a);Ot(r,{text:"iOS compatibility"});var s=o(r,8),x=o(c(s),2),F=o(c(x));Xt(F,{path:"Web/API/Element/contextmenu_event",children:(v,_)=>{var p=Cn();$(),n(v,p)},$$slots:{default:!0}}),i(x),$(4),i(s);var T=o(s,6);Pe(T,{}),n(w,a)},$$slots:{default:!0}});var P=o(u,2);At(P,{children:(w,l)=>{var a=Tn(),r=S(a);Ot(r,{text:"Caveats"});var s=o(r,8),x=o(c(s));Xt(x,{path:"Web/API/Element/contextmenu_event"}),$(3),i(s),n(w,a)},$$slots:{default:!0}}),n(m,e)}function In(m){const e=m-1;return e*e*e+1}function En(m){return--m*m*m*m*m+1}function be(m,{from:e,to:u},P={}){var{delay:w=0,duration:l=E=>Math.sqrt(E)*120,easing:a=In}=P,r=getComputedStyle(m),s=r.transform==="none"?"":r.transform,[x,F]=r.transformOrigin.split(" ").map(parseFloat);x/=m.clientWidth,F/=m.clientHeight;var T=An(m),v=m.clientWidth/u.width/T,_=m.clientHeight/u.height/T,p=e.left+e.width*x,y=e.top+e.height*F,g=u.left+u.width*x,d=u.top+u.height*F,C=(p-g)*v,R=(y-d)*_,W=e.width/u.width,V=e.height/u.height;return{delay:w,duration:typeof l=="function"?l(Math.sqrt(C*C+R*R)):l,easing:a,css:(E,z)=>{var N=z*C,k=z*R,U=E+z*W,H=E+z*V;return`transform: ${s} translate(${N}px, ${k}px) scale(${U}, ${H});`}}}function An(m){if("currentCSSZoom"in m)return m.currentCSSZoom;for(var e=m,u=1;e!==null;)u*=+getComputedStyle(e).zoom,e=e.parentElement;return u}var On=b('<menu class="pane unstyled svelte-4htxep"><!></menu>'),zn=b('<li role="none" class="svelte-4htxep"><div role="menuitem" aria-label="contextmenu submenmu" aria-haspopup="menu" tabindex="-1"><div class="content"><div class="icon"><!></div> <div class="title"><!></div></div> <div class="chevron svelte-4htxep" aria-hidden="true"></div></div> <!></li>');function ee(m,e){gt(e,!0);const u=Ce.get(),P=u.add_submenu(),{layout:w}=u,l=L(()=>P.selected);let a=J(void 0);const r=ce.get(),s=ce.set();let x=J(0),F=J(0);Ne(()=>{t(a)&&T(t(a),w,r)});const T=(z,N,k)=>{const{x:U,y:H,width:j,height:I}=z.getBoundingClientRect();s.width=j,s.height=I;const D=U-t(x),q=H-t(F),M=D+j+k.width-N.width;if(M<=0)f(x,k.width,!0);else{const Y=j-D;Y<=0?f(x,-j):Y>M?f(x,k.width-M):f(x,Y-j)}f(F,Math.min(0,N.height-(q+I)),!0)};var v=zn();let _;var p=c(v);let y;var g=c(p),d=c(g),C=c(d);wt(C,()=>e.icon??Rt),i(d);var R=o(d,2),W=c(R);wt(W,()=>e.children),i(R),i(g),$(2),i(p);var V=o(p,2);{var E=z=>{var N=On();let k;var U=c(N);wt(U,()=>e.menu),i(N),te(N,H=>f(a,H),()=>t(a)),_t(()=>k=le(N,"",k,{transform:`translate3d(${t(x)??""}px, ${t(F)??""}px, 0)`,"max-height":`${w.height??""}px`})),n(z,N)};Q(V,z=>{t(l)&&z(E)})}i(v),_t(()=>{_=le(v,"",_,{"--contextmenu_depth":P.depth}),y=ht(p,1,"menu_item plain selectable svelte-4htxep",null,y,{selected:t(l)}),we(p,"aria-expanded",t(l))}),kt("mouseenter",p,z=>{Tt(z),setTimeout(()=>u.select(P))}),n(m,v),bt()}var Nn=b("<!> <!>",1);function Zt(m,e){gt(e,!0);const u=lt(e,"name",3,"Cat"),P=lt(e,"icon",3,"😺");ee(m,{icon:a=>{$();var r=O();_t(()=>$t(r,P())),n(a,r)},menu:a=>{var r=Nn(),s=S(r);it(s,{run:()=>e.act({type:e.position==="adventure"?"cat_go_home":"cat_go_adventure",name:u()}),icon:T=>{var v=st(),_=S(v);{var p=g=>{var d=O("🏠");n(g,d)},y=g=>{var d=O("🌄");n(g,d)};Q(_,g=>{e.position==="adventure"?g(p):g(y,!1)})}n(T,v)},children:(T,v)=>{var _=st(),p=S(_);{var y=d=>{var C=O("go home");n(d,C)},g=d=>{var C=O("go adventure");n(d,C)};Q(p,d=>{e.position==="adventure"?d(y):d(g,!1)})}n(T,_)},$$slots:{icon:!0,default:!0}});var x=o(s,2);it(x,{run:()=>e.act({type:"cat_be_or_do",name:u(),position:e.position}),icon:T=>{var v=st(),_=S(v);{var p=g=>{var d=O("🌄");n(g,d)},y=g=>{var d=O("🏠");n(g,d)};Q(_,g=>{e.position==="adventure"?g(p):g(y,!1)})}n(T,v)},children:(T,v)=>{var _=st(),p=S(_);{var y=d=>{var C=O("do adventure");n(d,C)},g=d=>{var C=O("be home");n(d,C)};Q(p,d=>{e.position==="adventure"?d(y):d(g,!1)})}n(T,_)},$$slots:{icon:!0,default:!0}}),n(a,r)},children:(a,r)=>{$();var s=O();_t(()=>$t(s,u())),n(a,s)},$$slots:{icon:!0,menu:!0,default:!0}}),bt()}var Rn=b("<!> <!> <!>",1);function Fn(m,e){var u=Rn(),P=S(u);ke(P,{href:"https://github.com/ryanatkn/fuz",icon:r=>{on(r,{get data(){return an},size:"var(--icon_size_xs)"})},children:(r,s)=>{$();var x=O("Source code");n(r,x)},$$slots:{icon:!0,default:!0}});var w=o(P,2);Qt(w,{});var l=o(w,2);it(l,{get run(){return e.toggle_about_dialog},icon:r=>{$();var s=O("?");n(r,s)},children:(r,s)=>{$();var x=O("About");n(r,x)},$$slots:{icon:!0,default:!0}}),n(m,u)}const Ie=m=>{const e=m.length;if(e===2)return"cats";if(e===0)return null;const u=m[0];return u.icon+u.name};var Dn=b("<!> <!>",1),Ln=b("<!> <!>",1),Mn=b("<!> <!> <!>",1);function Hn(m,e){gt(e,!0);const u=L(()=>Ie(e.adventure_cats));ee(m,{icon:l=>{$();var a=O("🏠");n(l,a)},menu:l=>{var a=Mn(),r=S(a);{var s=v=>{var _=Dn(),p=S(_);it(p,{run:()=>e.act({type:"call_cats_home"}),icon:d=>{$();var C=O("🐈‍⬛");n(d,C)},children:(d,C)=>{$();var R=O("call");n(d,R)},$$slots:{icon:!0,default:!0}});var y=o(p,2);Qt(y,{}),n(v,_)};Q(r,v=>{t(u)&&v(s)})}var x=o(r,2);Gt(x,17,()=>e.home_cats,v=>v.name,(v,_)=>{Zt(v,{get name(){return t(_).name},get icon(){return t(_).icon},get position(){return t(_).position},get act(){return e.act}})});var F=o(x,2);{var T=v=>{var _=Ln(),p=S(_);it(p,{run:()=>e.act({type:"cat_be_or_do",name:null,position:"home"}),icon:d=>{$();var C=O("🏠");n(d,C)},children:(d,C)=>{$();var R=O("be");n(d,R)},$$slots:{icon:!0,default:!0}});var y=o(p,2);it(y,{run:()=>e.act({type:"call_cats_adventure"}),icon:d=>{$();var C=O("🦋");n(d,C)},children:(d,C)=>{$();var R=O("leave");n(d,R)},$$slots:{icon:!0,default:!0}}),n(v,_)};Q(F,v=>{t(u)||v(T)})}n(l,a)},children:(l,a)=>{$();var r=O("home");n(l,r)},$$slots:{icon:!0,menu:!0,default:!0}}),bt()}var qn=b("<!> <!>",1),Un=b("<!> <!>",1),Bn=b("<!> <!> <!>",1);function Wn(m,e){gt(e,!0);const u=L(()=>Ie(e.home_cats));ee(m,{icon:l=>{$();var a=O("🌄");n(l,a)},menu:l=>{var a=Bn(),r=S(a);{var s=v=>{var _=qn(),p=S(_);it(p,{run:()=>e.act({type:"call_cats_adventure"}),icon:d=>{$();var C=O("🦋");n(d,C)},children:(d,C)=>{$();var R=O("call");n(d,R)},$$slots:{icon:!0,default:!0}});var y=o(p,2);Qt(y,{}),n(v,_)};Q(r,v=>{t(u)&&v(s)})}var x=o(r,2);Gt(x,17,()=>e.adventure_cats,v=>v.name,(v,_)=>{Zt(v,{get name(){return t(_).name},get icon(){return t(_).icon},get position(){return t(_).position},get act(){return e.act}})});var F=o(x,2);{var T=v=>{var _=Un(),p=S(_);it(p,{run:()=>e.act({type:"cat_be_or_do",name:null,position:"adventure"}),icon:d=>{$();var C=O("🌄");n(d,C)},children:(d,C)=>{$();var R=O("do");n(d,R)},$$slots:{icon:!0,default:!0}});var y=o(p,2);it(y,{run:()=>e.act({type:"call_cats_home"}),icon:d=>{$();var C=O("🐈‍⬛");n(d,C)},children:(d,C)=>{$();var R=O("leave");n(d,R)},$$slots:{icon:!0,default:!0}}),n(v,_)};Q(F,v=>{t(u)||v(T)})}n(l,a)},children:(l,a)=>{$();var r=O("adventure");n(l,r)},$$slots:{icon:!0,menu:!0,default:!0}}),bt()}var jn=b('<span class="icon svelte-y90lnf"> </span>'),Xn=b('<span class="name svelte-y90lnf"><!> </span>'),Gn=b("<span><!><!></span>");function ye(m,e){const u=lt(e,"name",3,"Cat"),P=lt(e,"icon",3,"😺"),w=lt(e,"show_name",3,!0),l=lt(e,"show_icon",3,!0);var a=Gn();let r;var s=c(a);{var x=v=>{var _=jn(),p=c(_,!0);i(_),_t(()=>$t(p,P())),n(v,_)};Q(s,v=>{l()&&v(x)})}var F=o(s);{var T=v=>{var _=Xn(),p=c(_);wt(p,()=>e.children??Rt);var y=o(p,1,!0);i(_),_t(()=>$t(y,u())),n(v,_)};Q(F,v=>{w()&&v(T)})}i(a),_t(()=>r=ht(a,1,"cat svelte-y90lnf",null,r,{"has-icon":l()})),n(m,a)}const Vn=`<script lang="ts">
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
`;var Yn=b("<!> <!>",1),Kn=b('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Zn=b('<div class="position home svelte-ki3ktl"><div class="icon svelte-ki3ktl">🏠</div> <div class="cats svelte-ki3ktl"></div></div>'),Jn=b('<div class="cat_wrapper svelte-ki3ktl"><!></div>'),Qn=b('<div class="position adventure svelte-ki3ktl"><div class="icon svelte-ki3ktl">🌄</div> <div class="cats svelte-ki3ktl"></div></div>'),to=b('<section class="display_flex"><div><!> <!></div></section> <section><!></section>',1),eo=b("<!> <!>",1),no=b('<div class="mx_auto box"><div class="pane p_xl text_align_center"><h1>About Fuz</h1> <blockquote>Svelte UI library</blockquote> <blockquote>free and open source at<br/><!></blockquote> <code class="display_block p_md mb_lg">npm i -D <a href="https://www.npmjs.com/package/@ryanatkn/fuz">@ryanatkn/fuz</a></code> <div class="p_xl box"><h2>Color scheme</h2> <!> <h2>Theme</h2> <!></div></div></div>'),oo=b("<!> <!>",1);function ao(m,e){gt(e,!0);const u=zt.get(),P=L(()=>u.component),w="Alyssa",l="Ben",a="home";let r=J(a),s=J(a);const x=L(()=>t(r)===t(s)?"😺":"😾"),F=L(()=>t(r)===t(s)?"😸":"😿"),T=L(()=>({name:w,icon:t(x),position:t(r)})),v=L(()=>({name:l,icon:t(F),position:t(s)}));let _=J(!1);const p=(I,D)=>{const q=[],M=[];for(const Y of I){const B=Y.position==="home"?q:M;D?B.unshift(Y):B.push(Y)}return{home_cats:q,adventure_cats:M}},y=L(()=>p([t(T),t(v)],t(_))),g=L(()=>t(y).home_cats),d=L(()=>t(y).adventure_cats),C=L(()=>t(r)!==a||t(s)!==a),R=()=>{f(r,a),f(s,a)};let W=J(!1);const V=()=>{f(W,!t(W))},E=I=>{switch(I.type){case"call_cats_adventure":{f(r,"adventure"),f(s,"adventure");break}case"call_cats_home":{f(r,"home"),f(s,"home");break}case"cat_go_adventure":{I.name===w?f(r,"adventure"):I.name===l&&f(s,"adventure");break}case"cat_go_home":{I.name===w?f(r,"home"):I.name===l&&f(s,"home");break}case"cat_be_or_do":{f(_,!t(_));break}}},[z,N]=tn({fallback:(I,D)=>{const q=window.getComputedStyle(I),M=q.transform==="none"?"":q.transform;return{duration:1500,easing:En,css:Y=>`
					transform: ${M} scale(${Y});
					opacity: ${Y}
				`}}});var k=oo(),U=S(k);Dt(U,()=>t(P),(I,D)=>{D(I,{scoped:!0,children:(q,M)=>{At(q,{children:(Y,B)=>{var et=eo(),nt=S(et);Ot(nt,{text:"Full example"});var ut=o(nt,2);Ct(ut,{entries:ft=>{var vt=Yn(),ct=S(vt);{var mt=K=>{Te(K,{run:R,content:"Reset",icon:"↻"})};Q(ct,K=>{t(C)&&K(mt)})}var X=o(ct,2);Fn(X,{toggle_about_dialog:V}),n(ft,vt)},children:(ft,vt)=>{var ct=to(),mt=S(ct),X=c(mt),K=c(X);Ct(K,{entries:h=>{Hn(h,{act:E,get home_cats(){return t(g)},get adventure_cats(){return t(d)}})},children:(h,A)=>{var G=Zn(),tt=o(c(G),2);Gt(tt,29,()=>t(g),({name:Z,icon:pt,position:at})=>Z,(Z,pt)=>{let at=()=>t(pt).name,Pt=()=>t(pt).icon,xt=()=>t(pt).position;var rt=Kn(),It=c(rt);Ct(It,{entries:Et=>{Zt(Et,{act:E,get name(){return at()},get icon(){return Pt()},get position(){return xt()}})},children:(Et,ne)=>{ye(Et,{get name(){return at()},get icon(){return Pt()}})},$$slots:{entries:!0,default:!0}}),i(rt),jt(1,rt,()=>N,()=>({key:at()})),jt(2,rt,()=>z,()=>({key:at()})),ge(rt,()=>be,null),n(Z,rt)}),i(tt),i(G),n(h,G)},$$slots:{entries:!0,default:!0}});var ot=o(K,2);Ct(ot,{entries:h=>{Wn(h,{act:E,get home_cats(){return t(g)},get adventure_cats(){return t(d)}})},children:(h,A)=>{var G=Qn(),tt=o(c(G),2);Gt(tt,29,()=>t(d),({name:Z,icon:pt,position:at})=>Z,(Z,pt)=>{let at=()=>t(pt).name,Pt=()=>t(pt).icon,xt=()=>t(pt).position;var rt=Jn(),It=c(rt);Ct(It,{entries:Et=>{Zt(Et,{act:E,get name(){return at()},get icon(){return Pt()},get position(){return xt()}})},children:(Et,ne)=>{ye(Et,{get name(){return at()},get icon(){return Pt()}})},$$slots:{entries:!0,default:!0}}),i(rt),jt(1,rt,()=>N,()=>({key:at()})),jt(2,rt,()=>z,()=>({key:at()})),ge(rt,()=>be,null),n(Z,rt)}),i(tt),i(G),n(h,G)},$$slots:{entries:!0,default:!0}}),i(X),i(mt);var dt=o(mt,2),Nt=c(dt);Se(Nt,{summary:h=>{$();var A=O("View example source");n(h,A)},children:(h,A)=>{Ft(h,{get content(){return Vn}})},$$slots:{summary:!0,default:!0}}),i(dt),n(ft,ct)},$$slots:{entries:!0,default:!0}}),n(Y,et)},$$slots:{default:!0}})},$$slots:{default:!0}})});var H=o(U,2);{var j=I=>{ln(I,{onclose:()=>f(W,!1),children:(D,q)=>{var M=no(),Y=c(M),B=o(c(Y),4),et=o(c(B),2);nn(et,{path:"ryanatkn/fuz"}),i(B);var nt=o(B,4),ut=o(c(nt),2);rn(ut,{});var yt=o(ut,4);sn(yt,{}),i(nt),i(Y),i(M),n(D,M)},$$slots:{default:!0}})};Q(H,I=>{t(W)&&I(j)})}n(m,k),bt()}var ro=b("<!> <!> <!>",1),so=b(`<div class="panel p_md"><p>Try opening the contextmenu on this panel with rightclick or tap-and-hold.</p> <!> <div><code> </code></div> <div><code> </code></div> <div><code> </code></div> <aside class="mt_lg">The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.</aside></div>`),io=b("<!> <!>",1);function lo(m,e){gt(e,!0);const u=zt.get(),P=L(()=>u.component),w=L(()=>u.name);let l=J(!1),a=J(!1),r=J(!1);var s=st(),x=S(s);Dt(x,()=>t(P),(F,T)=>{T(F,{scoped:!0,children:(v,_)=>{At(v,{children:(p,y)=>{var g=io(),d=S(g);Ot(d,{text:"Basic usage"});var C=o(d,2);Ct(C,{entries:W=>{var V=ro(),E=S(V);it(E,{run:()=>void f(l,!t(l)),children:(k,U)=>{$();var H=O("Hello world");n(k,H)},$$slots:{default:!0}});var z=o(E,2);it(z,{run:()=>void f(a,!t(a)),icon:U=>{$();var H=O("🌞");n(U,H)},children:(U,H)=>{$();var j=O("Hello with an optional icon snippet");n(U,j)},$$slots:{icon:!0,default:!0}});var N=o(z,2);it(N,{run:()=>void f(r,!t(r)),icon:"🌚",children:(k,U)=>{$();var H=O("Hello with an optional icon string");n(k,H)},$$slots:{default:!0}}),n(W,V)},children:(W,V)=>{var E=so(),z=o(c(E),2);{let nt=L(()=>`<${t(w)} scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}>
        Hello world <!-- ${t(l)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}>
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet <!-- ${t(a)} -->
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚">
        Hello with an optional icon string <!-- ${t(r)} -->
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</${t(w)}>
...markup without contextmenu behavior...`);Ft(z,{get content(){return t(nt)}})}var N=o(z,2),k=c(N);let U;var H=c(k);i(k),i(N);var j=o(N,2),I=c(j);let D;var q=c(I);i(I),i(j);var M=o(j,2),Y=c(M);let B;var et=c(Y);i(Y),i(M),$(2),i(E),_t(()=>{U=ht(k,1,"",null,U,{color_g_5:t(l)}),$t(H,`greeted = ${t(l)??""}`),D=ht(I,1,"",null,D,{color_e_5:t(a)}),$t(q,`greeted_icon_snippet = ${t(a)??""}`),B=ht(Y,1,"",null,B,{color_d_5:t(r)}),$t(et,`greeted_icon_string = ${t(r)??""}`)}),n(W,E)},$$slots:{entries:!0,default:!0}}),n(p,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,s),bt()}var co=b("<span> </span>");function Wt(m,e){const u=He(e,["$$slots","$$events","$$legacy","glyph","size","class"]),P="var(--font_size, 1em)",w="var(--font_size, inherit)",l=L(()=>e.size??P);var a=co();$e(a,()=>({...u,class:`glyph display_inline_block text_align_center line_height_1 white_space_nowrap font_weight_400 ${e.class??""}`,[Me]:{width:t(l),height:t(l),"min-width":t(l),"min-height":t(l),"font-size":e.size??w}}));var r=c(a,!0);i(a),_t(()=>$t(r,e.glyph)),n(m,a)}var uo=b('<span class="color_f_5">option f</span>'),_o=b('<span class="color_g_5">option g</span>'),vo=b('<span class="color_j_5">option j</span>'),mo=b("<!> <!> <!> <!>",1),po=b('<li class="color_error">Error: <code> </code></li>'),ho=b('<div class="display_flex"><div class="box"><button type="button"><!></button> <div class="row"><button type="button"><!></button> <button type="button"><!></button> <button type="button"><!></button></div> <button type="button"><!></button></div></div>'),fo=b(`<div class="panel p_md"><p class="mb_md">The <code> </code> prop <code>contextmenu</code> accepts a custom <code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.</p> <!> <!> <p class="mb_md">Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries -- just like the arrow keys. The color entries return <code></code> to keep the menu open after activation, allowing you to select multiple colors using the
					activate button (↵).</p> <div><p>Reactive state:</p> <ul><li><code>contextmenu.opened</code> === <code> </code></li> <li><code>contextmenu.x</code> === <code> </code></li> <!></ul></div> <!></div>`),xo=b("<!> <!>",1);function go(m,e){gt(e,!0);const u=zt.get(),P=L(()=>u.component),w=L(()=>u.name),l=new Jt;let a=J(void 0);const r=L(()=>t(a)?`color_${t(a)}_5`:void 0),s=L(()=>t(a)?`color_${t(a)}`:void 0);var x=st(),F=S(x);Dt(F,()=>t(P),(T,v)=>{v(T,{get contextmenu(){return l},scoped:!0,children:(_,p)=>{At(_,{children:(y,g)=>{var d=xo(),C=S(d);Ot(C,{text:"Custom instance"});var R=o(C,2);Ct(R,{entries:V=>{ee(V,{icon:N=>{$();var k=O("🎨");n(N,k)},menu:N=>{var k=mo(),U=S(k);it(U,{run:()=>(f(a,"f"),{ok:!0,close:!1}),children:(D,q)=>{var M=uo();n(D,M)},$$slots:{default:!0}});var H=o(U,2);it(H,{run:()=>(f(a,"g"),{ok:!0,close:!1}),children:(D,q)=>{var M=_o();n(D,M)},$$slots:{default:!0}});var j=o(H,2);it(j,{run:()=>(f(a,"j"),{ok:!0,close:!1}),children:(D,q)=>{var M=vo();n(D,M)},$$slots:{default:!0}});var I=o(j,2);it(I,{run:()=>(l.close(),{ok:!0}),children:(D,q)=>{$();var M=O("close contextmenu");n(D,M)},$$slots:{default:!0}}),n(N,k)},children:(N,k)=>{$();var U=O("select color");n(N,U)},$$slots:{icon:!0,menu:!0,default:!0}})},children:(V,E)=>{var z=fo(),N=c(z),k=o(c(N)),U=c(k,!0);i(k),$(5),i(N);var H=o(N,2);Ft(H,{lang:"ts",content:"const contextmenu = new Contextmenu_State();"});var j=o(H,2);{let X=L(()=>`<${t(w)} {contextmenu} scoped>...</${t(w)}>`);Ft(j,{get content(){return t(X)}})}var I=o(j,2),D=o(c(I));D.textContent="{ok: true, close: false}",$(),i(I);var q=o(I,2),M=o(c(q),2),Y=c(M),B=o(c(Y),2),et=c(B,!0);i(B),i(Y);var nt=o(Y,2),ut=o(c(nt),2),yt=c(ut);i(ut),i(nt);var ft=o(nt,2);{var vt=X=>{var K=po(),ot=o(c(K)),dt=c(ot,!0);i(ot),i(K),_t(()=>$t(dt,l.error)),n(X,K)};Q(ft,X=>{l.error&&X(vt)})}i(M),i(q);var ct=o(q,2);{var mt=X=>{var K=ho(),ot=c(K),dt=c(ot),Nt=c(dt);Wt(Nt,{glyph:"↑"}),i(dt);var St=o(dt,2),h=c(St),A=c(h);Wt(A,{glyph:"←"}),i(h);var G=o(h,2),tt=c(G);Wt(tt,{glyph:"↵"}),i(G);var Z=o(G,2),pt=c(Z);Wt(pt,{glyph:"→"}),i(Z),i(St);var at=o(St,2),Pt=c(at);Wt(Pt,{glyph:"↓"}),i(at),i(ot),i(K),_t(()=>{ht(dt,1,`border_bottom_left_radius_0 border_bottom_right_radius_0 ${t(s)??""}`),dt.disabled=!l.can_select_previous,ht(h,1,`border_bottom_right_radius_0 border_top_right_radius_0 ${t(s)??""}`),h.disabled=!l.can_collapse,ht(G,1,`border_radius_0 ${t(s)??""}`),G.disabled=!l.can_activate,ht(Z,1,`border_bottom_left_radius_0 border_top_left_radius_0 ${t(s)??""}`),Z.disabled=!l.can_expand,ht(at,1,`border_top_left_radius_0 border_top_right_radius_0 ${t(s)??""}`),at.disabled=!l.can_select_next}),kt("mousedown",dt,xt=>{Tt(xt),l.select_previous()},!0),kt("mousedown",h,xt=>{Tt(xt),l.collapse_selected()},!0),kt("mousedown",G,async xt=>{Tt(xt),await l.activate_selected()},!0),kt("mousedown",Z,xt=>{Tt(xt),l.expand_selected()},!0),kt("mousedown",at,xt=>{Tt(xt),l.select_next()},!0),jt(3,K,()=>en),n(X,K)};Q(ct,X=>{l.opened&&X(mt)})}i(z),_t(()=>{$t(U,t(w)),ht(q,1,`mb_md ${t(r)??""}`),$t(et,l.opened),$t(yt,`${l.x??""} && contextmenu.y === ${l.y??""}`)}),n(V,z)},$$slots:{entries:!0,default:!0}}),n(y,d)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,x),bt()}var bo=b(`<div><div class="mb_lg"><p>When the Fuz contextmenu opens and the user has selected text, the menu includes a <code>copy text</code> entry.</p> <p>Try <button type="button">selecting text</button> and then opening the contextmenu on it.</p></div> <label class="svelte-1efz8xy"><input type="text" placeholder="paste text here?"/></label> <p>Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.</p> <label class="svelte-1efz8xy"><textarea placeholder="paste text here?"></textarea></label> <p><!> likewise has your browser's
					default contextmenu behavior.</p> <p><code>contenteditable</code></p> <blockquote contenteditable=""></blockquote> <p><code>contenteditable="plaintext-only"</code></p> <blockquote contenteditable="plaintext-only"></blockquote> <aside>Note that if there are no actions found (like the toggle here) the system contextmenu
					opens instead, bypassing the Fuz contextmenu, as demonstrated in the default behaviors.</aside></div>`),yo=b("<div><!></div> <!>",1);function $o(m,e){gt(e,!0);const u=zt.get(),P=L(()=>u.component),w=new Jt;let l=J(!1),a=J(void 0);const r=()=>{const y=window.getSelection();if(!y||!t(a))return;const g=document.createRange();g.selectNodeContents(t(a)),y.removeAllRanges(),y.addRange(g)};let s=J("");const x="If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.",F=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.


Try selecting text and then opening the contextmenu on it.`,T=`If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`,v=L(()=>t(s)===x||t(s)===F||t(s)===T);var _=st(),p=S(_);Dt(p,()=>t(P),(y,g)=>{g(y,{get contextmenu(){return w},scoped:!0,children:(d,C)=>{At(d,{children:(R,W)=>{var V=yo(),E=S(V);let z;var N=c(E);Ot(N,{text:"Select text"}),i(E);var k=o(E,2);Ct(k,{entries:H=>{it(H,{run:()=>void f(l,!t(l)),children:(j,I)=>{$();var D=O("Toggle something");n(j,D)},$$slots:{default:!0}})},children:(H,j)=>{var I=bo();let D;var q=c(I),M=o(c(q),2),Y=o(c(M));Y.__click=r;let B;$(),i(M),i(q),te(q,ot=>f(a,ot),()=>t(a));var et=o(q,2),nt=c(et);Ht(nt),i(et);var ut=o(et,2);let yt;var ft=o(ut,2),vt=c(ft);Re(vt),i(ft);var ct=o(ft,2),mt=c(ct);Xt(mt,{path:"Web/HTML/Global_attributes/contenteditable"}),$(),i(ct);var X=o(ct,4),K=o(X,4);$(2),i(I),_t(()=>{D=ht(I,1,"panel p_md",null,D,{color_g_5:t(v)}),B=ht(Y,1,"",null,B,{color_a:t(l)}),yt=ht(ut,1,"",null,yt,{color_g_5:t(v)})}),xe(nt,()=>t(s),ot=>f(s,ot)),xe(vt,()=>t(s),ot=>f(s,ot)),he("innerText",X,()=>t(s),ot=>f(s,ot)),he("innerText",K,()=>t(s),ot=>f(s,ot)),n(H,I)},$$slots:{entries:!0,default:!0}}),_t(()=>z=ht(E,1,"",null,z,{color_d_5:t(v)})),n(R,V)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,_),bt()}ue(["click"]);var wo=b('<div class="panel p_md mb_lg"><p>Try <button type="button">selecting some text</button> and opening the contextmenu in this panel.</p> <p>Try opening the contextmenu on <a>this link</a>.</p></div>'),Co=b('<li>custom "some custom entry" entry</li>'),ko=b('<li>"copy text" entry when text is selected</li>'),To=b("<li>link entry when clicking on a link</li>"),So=b("<p><strong>Expected:</strong> the Fuz contextmenu will open and show:</p> <ul><!> <!> <!></ul>",1),Po=b(`<p><strong>Expected:</strong> no behaviors defined. The system contextmenu will show, bypassing the
			Fuz contextmenu.</p>`),Io=b('<!> <p>Check the boxes below to disable automatic <code>a</code> link detection and <code>copy text</code> detection, and see how the contextmenu behaves.</p> <!> <fieldset><label class="row"><input type="checkbox"/> <span>disable automatic link entries, <code></code></span></label> <label class="row"><input type="checkbox"/> <span>disable automatic copy text entries, <code></code></span></label></fieldset> <!> <p>When no behaviors are defined, the system contextmenu is shown instead.</p> <div class="mb_md"><label class="row"><input type="checkbox"/> include a custom entry, which ensures the Fuz contextmenu is used</label></div> <!>',1);function Eo(m,e){gt(e,!0);const u=_=>{var p=wo(),y=c(p),g=o(c(y));g.__click=v;let d;$(),i(y),te(y,W=>f(T,W),()=>t(T));var C=o(y,2),R=o(c(C));$(),i(C),i(p),_t(W=>{d=ht(g,1,"",null,d,{color_h:t(F)}),we(R,"href",W)},[()=>Qe("/")]),n(_,p)},P=zt.get(),w=L(()=>P.component),l=L(()=>P.name),a=new Jt;let r=J(!1),s=J(!1),x=J(!0),F=J(!1),T=J(void 0);const v=()=>{const _=window.getSelection();if(!_||!t(T))return;const p=document.createRange();p.selectNodeContents(t(T)),_.removeAllRanges(),_.addRange(p)};At(m,{children:(_,p)=>{var y=Io(),g=S(y);Ot(g,{text:"Disable default behaviors"});var d=o(g,4);{let B=L(()=>`<${t(l)}${t(r)?" link_entry={null}":""}${t(s)?" text_entry={null}":""}>`);Ft(d,{get content(){return t(B)}})}var C=o(d,2),R=c(C),W=c(R);Ht(W);var V=o(W,2),E=o(c(V));E.textContent="link_entry={null}",i(V),i(R);var z=o(R,2),N=c(z);Ht(N);var k=o(N,2),U=o(c(k));U.textContent="text_entry={null}",i(k),i(z),i(C);var H=o(C,2);{let B=L(()=>t(r)?null:void 0),et=L(()=>t(s)?null:void 0);Dt(H,()=>t(w),(nt,ut)=>{ut(nt,{get contextmenu(){return a},scoped:!0,get link_entry(){return t(B)},get text_entry(){return t(et)},children:(yt,ft)=>{var vt=st(),ct=S(vt);{var mt=K=>{Ct(K,{entries:dt=>{it(dt,{icon:">",run:()=>void f(F,!t(F)),children:(Nt,St)=>{$();var h=O("some custom entry");n(Nt,h)},$$slots:{default:!0}})},children:(dt,Nt)=>{u(dt)},$$slots:{entries:!0,default:!0}})},X=K=>{u(K)};Q(ct,K=>{t(x)?K(mt):K(X,!1)})}n(yt,vt)},$$slots:{default:!0}})})}var j=o(H,4),I=c(j),D=c(I);Ht(D),$(),i(I),i(j);var q=o(j,2);{var M=B=>{var et=So(),nt=o(S(et),2),ut=c(nt);{var yt=X=>{var K=Co();n(X,K)};Q(ut,X=>{t(x)&&X(yt)})}var ft=o(ut,2);{var vt=X=>{var K=ko();n(X,K)};Q(ft,X=>{t(s)||X(vt)})}var ct=o(ft,2);{var mt=X=>{var K=To();n(X,K)};Q(ct,X=>{t(r)||X(mt)})}i(nt),n(B,et)},Y=B=>{var et=Po();n(B,et)};Q(q,B=>{t(x)||!t(r)||!t(s)?B(M):B(Y,!1)})}se(W,()=>t(r),B=>f(r,B)),se(N,()=>t(s),B=>f(s,B)),se(D,()=>t(x),B=>f(x,B)),n(_,y)},$$slots:{default:!0}}),bt()}ue(["click"]);var Ao=b(`<!> <div class="panel p_md"><!> <p>Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.</p> <p>Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.</p> <aside>Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.</aside></div>`,1);function Oo(m,e){gt(e,!0);const u=zt.get(),P=L(()=>u.component),w=L(()=>u.name);var l=st(),a=S(l);Dt(a,()=>t(P),(r,s)=>{s(r,{scoped:!0,children:(x,F)=>{At(x,{children:(T,v)=>{var _=Ao(),p=S(_);Ot(p,{text:"Default behaviors"});var y=o(p,2),g=c(y);{let d=L(()=>`<${t(w)} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${t(w)}>`);Ft(g,{get content(){return t(d)}})}$(6),i(y),n(T,_)},$$slots:{default:!0}})},$$slots:{default:!0}})}),n(m,l),bt()}var zo=b("<!> <!> <!> <!> <!> <!> <!> <!> <section><aside><p>todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element</p></aside> <aside><p>todo: for mobile, probably change to a drawer-from-bottom design</p></aside></section>",1);function aa(m,e){gt(e,!0);const P=De("Contextmenu");zt.set(),Fe(m,{get tome(){return P},children:(w,l)=>{var a=zo(),r=S(a);wn(r,{});var s=o(r,2);lo(s,{});var x=o(s,2);Oo(x,{});var F=o(x,2);$o(F,{});var T=o(F,2);Eo(T,{});var v=o(T,2);go(v,{});var _=o(v,2);ao(_,{});var p=o(_,2);Pn(p),$(2),n(w,a)},$$slots:{default:!0}}),bt()}export{aa as component};
