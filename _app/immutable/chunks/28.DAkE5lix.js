import{g as O,a as r,c as ve,t as v,l as _e}from"./disclose-version.C-Ww6_-A.js";import{p as ne,c as n,f as W,g as o,s as e,r as s,t as Q,a as le,ai as K,K as A,ah as z,d as N,ag as fe}from"./runtime.bViC5kxD.js";import{i as B,p as G}from"./if.xjYjBMBU.js";import{C as P}from"./Code.CVPzi4QU.js";import{r as be,g as ge,d as ye}from"./theme.svelte.6QjHAVEp.js";import{T as Te}from"./Tome_Content.TLTK8WGI.js";import{D as de}from"./Details.aFaZAjzl.js";import{D as ue,s as pe}from"./Dialog.B4c2cUbg.js";import{g as we}from"./tome.BNJ_Ln0v.js";import{C as Se,T as ke}from"./Theme_Input.BwwqjAyg.js";import{T as oe,a as ae}from"./Tome_Section_Header.OkKmkifX.js";import{s as se}from"./render.HNLfjup5.js";import{e as xe}from"./each.B_jZhebh.js";import{s as Ce,a as Ie,r as me,f as he}from"./attributes.CEZtrAcH.js";import{b as ze}from"./input.BGGD6a6C.js";import{p as Pe}from"./props.Cg0EPFFi.js";import{M as re}from"./Mdn_Link.BdaIQ9jN.js";var Me=v('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),We=v('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),Ae=v("<button><!><!><!></button>");function Be(k,t){ne(t,!0);let c=K(!1),_=K(!1);const u=async d=>{var m,g;A(c,!1),A(_,!1);try{await navigator.clipboard.writeText(t.text)}catch{A(_,!0),(m=t.onclick)==null||m.call(t,null,d);return}A(c,!0),(g=t.onclick)==null||g.call(t,t.text,d)};var f=Ae();let b;var M=n(f);B(M,()=>t.children,d=>{var m=ve(),g=W(m);Ce(g,()=>t.children,()=>o(c),()=>o(_)),r(d,m)},d=>{var m=O("📋");r(d,m)});var D=e(M);B(D,()=>o(c),d=>{var m=Me();r(d,m)});var I=e(D);B(I,()=>o(_),d=>{var m=We();r(d,m)}),s(f),Q(()=>b=Ie(f,b,{...t.attrs,type:"button",class:t.classes??(t.children?void 0:"icon_button size_lg"),onclick:u},"svelte-rumh1g")),r(k,f),le()}var De=v("<blockquote> </blockquote>"),Ee=v('<div class="variable svelte-11ggo28"><div class="name svelte-11ggo28"><code> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function Fe(k,t){ne(t,!0);var c=ve(),_=W(c);B(_,()=>t.variable,u=>{var f=Ee(),b=n(f),M=n(b),D=n(M);s(M),s(b);var I=e(b,2);B(I,()=>t.variable.summary,x=>{var C=De(),R=n(C);s(C),Q(()=>se(R,t.variable.summary)),r(x,C)});var d=e(I,2),m=e(n(d),2);me(m),s(d);var g=e(d,2),y=e(n(g),2);me(y),s(g),s(f),Q(()=>{se(D,`--${t.variable.name??""}`),he(m,t.variable.light??""),he(y,t.variable.dark??"")}),r(u,f)}),r(k,c),le()}const qe=(k,t,c,_)=>{var u;o(t)&&((u=c.onsave)==null||u.call(c,o(_)))},Ne=k=>{pe(k),alert("TODO")};var Oe=(k,t,c)=>t(k,o(c)),Re=v('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),Je=v('<div class="copy svelte-cno0i6"><!></div> <!>',1),Le=v('<div class="pane"><div class="panel p_lg box"><!> <aside>⚠️ This is unfinished and will change.</aside> <button type="button">ok</button></div></div>'),je=v('<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>⚠️ Creating and editing themes at runtime is a work in progress i.e. totally unfinished.</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>',1);function Ye(k,t){ne(t,!0);const c=Pe(t,"theme",3,null);let _=K(G(c()?c().name:"new theme")),u=K(G(c()?c().variables:[]));const f=N(()=>({name:o(_),variables:o(u)})),b=N(()=>be(o(f),{empty_default_theme:!1,specificity:1})),M=N(()=>o(u).reduce((a,l)=>l.light?a+1:a,0)),D=N(()=>o(u).reduce((a,l)=>l.dark?a+1:a,0));let I=K(null);const d=(a,l)=>{pe(a),A(I,G(l)),A(u,G(o(u).slice()))},m=N(()=>!!c()),g=N(()=>c()?o(_)!==c().name||o(u)!==c().variables:!0);var y=je(),x=W(y),C=n(x),R=n(C);B(R,()=>o(m),a=>{var l=O("edit");r(a,l)},a=>{var l=O("create");r(a,l)}),z(),s(C);var L=e(C,4),j=n(L),Y=n(j),ce=n(Y);s(Y);var X=e(Y,2);X.__click=[Ne],s(j);var U=e(j,2),H=n(U),Z=e(n(H),2);me(Z),s(H);var p=e(H,2);p.__click=[qe,g,t,f];var T=n(p);B(T,()=>o(m),a=>{var l=O("save changes");r(a,l)},a=>{var l=O("create theme");r(a,l)}),s(p),s(U),s(L);var i=e(L,2),h=n(i);xe(h,21,()=>o(u),a=>a.name,(a,l)=>{var S=Re();S.__click=[Oe,d,l];var q=n(S);s(S),Q(()=>se(q,`--${o(l).name??""}`)),r(a,S)}),s(h);var w=e(h,2),E=n(w);B(E,()=>o(b),a=>{var l=Je(),S=W(l),q=n(S);Be(q,{get text(){return o(b)}}),s(S);var J=e(S,2);P(J,{get content(){return o(b)},lang:"css"}),r(a,l)}),s(w),s(i),s(x);var F=e(x,2);B(F,()=>o(I),a=>{ue(a,{onclose:()=>A(I,null),children:(S,q=fe)=>{var J=Le(),$=n(J),ie=n($);Fe(ie,{get variable(){return o(I)}});var V=e(ie,4);V.__click=function(...ee){var te;(te=q())==null||te.apply(this,ee)},s($),s(J),r(S,J)}})}),Q(()=>{se(ce,`variables: ${o(M)??""} light, ${o(D)??""} dark`),p.disabled=!o(g)}),ze(Z,()=>o(_),a=>A(_,a)),r(k,y),le()}_e(["click"]);var He=v(`<aside><p>Most theme usage affects the whole page, so Fuz makes that easy.</p> <p>By default <code>Themed</code> syncs its settings to the global <code>:root</code> tag and
					persists to <code>localStorage</code>.</p> <p>These behaviors can be customized with its props:</p> <ul><li><code>sync_color_scheme</code></li> <li><code>load_color_scheme</code></li> <li><code>save_color_scheme</code></li> <li><code>load_theme</code></li> <li><code>save_theme</code></li></ul> <p>A feature to support partial page theming is planned with <code>Themed_Scope</code>.</p></aside>`),Ke=v(`<aside><p><code>Themed</code> is designed to wrap every page at the top level so it can provide the
					selected theme and color scheme in the Svelte context via a <code>themer</code> instance.
					It works without children, but <code>get_themer</code> will fail unless you call <code>set_themer</code> yourself.</p> <p>This lets you call <code>get_themer</code> to access the reactive <code>Themer</code> class instance anywhere in your code. The helper components on this page like <code>Color_Scheme_Input</code> and <code>Theme_Input</code> use it so they don't require
					a <code>themer</code> prop.</p> <p>If you don't don't want to wrap everything in <code>Themed</code> for some reason, you can
					set a <code>Themer</code> in context manually. It must be the same reference as the <code>Themed</code> prop:</p> <!></aside>`),Ue=v("More about <code>Color_Scheme_Input</code>",1),Ve=v(`<aside><p><code>Color_Scheme_Input</code> enables users to choose and persist the color scheme without
					boilerplate.</p> <p>By default, <code>Color_Scheme_Input</code> works with <code>Themed</code>'s <code>themer</code> in context to save the user's preference to <code>localStorage</code>.
					To customize this behavior, pass your own <code>value</code> or <code>onchange</code> props. The <code>value</code> defaults to <code>get_themer()</code> so technically you
					could call <code>set_themer</code>, but it's unlikely you want to override it in context.</p></aside>`),Ge=v(`<!> <p><code>Themed</code> defaults to automatic <!> detection with <!>, and users can also set it directly:</p> <!> <!> <!> <p>Pass props to override the default:</p> <!> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p> <!>`,1),Qe=v(`<!> <p>A theme is a simple JSON collection of <a href="https://moss.ryanatkn.com/library/variables">Moss style variables</a> that can be transformed into CSS that set custom properties. Each variable can have values for
			light and/or dark color schemes. In other words, "dark" isn't a theme, it's a mode that any theme
			can implement.</p> <div class="width_sm mb_lg"><!></div> <aside>⚠️ The builtin themes need a lot more work, but the proof of concept seems to work.</aside> <aside>⚠️ Custom themes currently pop in on page load. To see this, change from the base theme and
			refresh the page. This can be fixed using a similar strategy that we use to avoid pop-in of
			user-defined color schemes, but it's more involved.</aside>`,1),Xe=v(`<!> <p>Themes are plain CSS that can be sourced in a variety of ways.</p> <p>To use Fuz's base theme:</p> <!> <p><code>Themed</code> can be customized with the the nonreactive prop <code>themer</code>:</p> <!> <!> <aside>The <code>themer</code> prop is not reactive because it's put in Svelte context without a wrapper.
			This could be fixed, let me know if you have a usecase.</aside> <p><code>Themed</code> sets the <code>themer</code> in the Svelte context:</p> <!> <p>For a more complete example, see <a href="https://github.com/ryanatkn/fuz_template">fuz_template</a>.</p>`,1),Ze=v(`<!> <p><code>Themed</code> initializes the system's theme support. Without it, the page will not
			reflect the user's system <code>color-scheme</code>. By default, <code>Themed</code> applies the base theme to the root
			of the page via <code>create_theme_setup_script</code>. It uses JS to add the <code>.dark</code> CSS class to the <code>:root</code> element.</p> <p>This strategy enables color scheme and theme support with minimal CSS and optimal performance
			for most use cases. The system supports plain CSS usage that can be static or dynamic, or
			imported at buildtime or runtime. It also allows runtime access to the underlying data like
			the <a href="https://moss.ryanatkn.com/library/variables">style variables</a> if you want to pay
			the performance costs. Scoped theming to one part of the page is planned.</p> <p>The theme setup script interacts with <code>sync_color_scheme</code> to save the user's
			preference to <code>localStorage</code>. See also <code>Color_Scheme_Input</code>.</p> <p>The setup script avoids flash-on-load due to color scheme, but currently themes flash in after
			loading. We'll try to fix this when the system stabilizes.</p>`,1),$e=v(`<section class="theme"><p>Fuz provides UI components that use <a href="https://moss.ryanatkn.com/library/themes">Moss' theming system</a> for dark mode and custom themes.</p> <p><code>Themed</code> adds global support for both the browser's <!> and custom themes based on <a href="https://moss.ryanatkn.com/library/variables">Moss style variables</a>, which use <!>. <code>Themed</code> is a singleton component that's mounted at the top-level of the page:</p> <!> <!> <!> <!></section> <!> <!> <!> <!>`,1),et=v('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),tt=v("<!>  <!>",1);function gt(k,t){ne(t,!0);const _=we("Themed"),u=ye.slice(),f=ge();let b=K(null);var M=tt(),D=W(M);Te(D,{tome:_,children:(d,m)=>{var g=$e(),y=W(g),x=e(n(y),2),C=e(n(x),2);re(C,{path:"Web/CSS/color-scheme"});var R=e(C,4);re(R,{path:"Web/CSS/--*",children:(p,T)=>{z();var i=O("CSS custom properties");r(p,i)},$$slots:{default:!0}}),z(3),s(x);var L=e(x,2);P(L,{content:"import Themed from '@ryanatkn/fuz/Themed.svelte';",lang:"ts"});var j=e(L,2);P(j,{content:`<!-- +layout.svelte -->
<Themed>
	{@render children()}
</Themed>`});var Y=e(j,2);de(Y,{summary:T=>{z();var i=O("Why the singleton?");r(T,i)},children:(T,i)=>{var h=He();r(T,h)},$$slots:{default:!0}});var ce=e(Y,2);de(ce,{summary:T=>{z();var i=O("Why nested children?");r(T,i)},children:(T,i)=>{var h=Ke(),w=e(n(h),6);P(w,{content:`<script>
	const themer = new Themer(...);
	set_themer(themer);
<\/script>
<Themed {themer} />
<!--
	sibling components not nested in \`Themed\`
	can now call \`get_themer\`
-->`}),s(h),r(T,h)},$$slots:{default:!0}}),s(y);var X=e(y,2);oe(X,{children:(p,T)=>{var i=Ge(),h=W(i);ae(h,{text:"Color scheme"});var w=e(h,2),E=e(n(w),2);re(E,{path:"Web/CSS/color-scheme"});var F=e(E,2);re(F,{path:"Web/CSS/@media/prefers-color-scheme"}),z(),s(w);var a=e(w,2);Se(a,{});var l=e(a,2);P(l,{content:"import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';",lang:"ts"});var S=e(l,2);P(S,{content:"<Color_Scheme_Input />"});var q=e(S,4),J=N(()=>`<Color_Scheme_Input
	value={{color_scheme: ${"'"+JSON.stringify(f.color_scheme).replace(/"/g,"")+"'"}}}
	onchange={...}
/>`);P(q,{get content(){return o(J)}});var $=e(q,4);de($,{summary:V=>{z();var ee=Ue();z(),r(V,ee)},children:(V,ee)=>{var te=Ve();r(V,te)},$$slots:{default:!0}}),r(p,i)},$$slots:{default:!0}});var U=e(X,2);oe(U,{children:(p,T)=>{var i=Qe(),h=W(i);ae(h,{text:"Builtin themes"});var w=e(h,4),E=n(w);ke(E,{themes:u,enable_editing:!0,onedit:F=>A(b,G(F))}),s(w),z(4),r(p,i)},$$slots:{default:!0}});var H=e(U,2);oe(H,{children:(p,T)=>{var i=Xe(),h=W(i);ae(h,{text:"Example usage"});var w=e(h,6);P(w,{content:`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}
	
	const {children}: Props = $props();
<script>

<!-- enable theme and color-scheme support -->
<Themed>
	{@render children()}
</Themed>`});var E=e(w,4);P(E,{content:`import {Themer} from '@ryanatkn/fuz/theme.svelte.js';
const themer = new Themer(...);`,lang:"ts"});var F=e(E,2);P(F,{content:`<Themed {themer}>
	{@render children()}
</Themed>`});var a=e(F,6),l=N(()=>`// get values from the Svelte context provided by
// the nearest \`Themed\` ancestor:
import {get_themer} from '@ryanatkn/fuz/theme.js';
const themer = get_themer();
themer.theme.name; // '${f.theme.name}'
themer.color_scheme; // '${f.color_scheme}'`);P(a,{get content(){return o(l)},lang:"ts"}),z(2),r(p,i)},$$slots:{default:!0}});var Z=e(H,2);oe(Z,{children:(p,T)=>{var i=Ze(),h=W(i);ae(h,{text:"More details"}),z(8),r(p,i)},$$slots:{default:!0}}),r(d,g)},$$slots:{default:!0}});var I=e(D,2);B(I,()=>o(b),d=>{ue(d,{onclose:()=>A(b,null),children:(m,g)=>{var y=et(),x=n(y),C=n(x);Ye(C,{get theme(){return o(b)},onsave:R=>{console.log("update theme",R),alert("todo")}}),s(x),s(y),r(m,y)},$$slots:{default:!0}})}),r(k,M),le()}export{Fe as S,gt as _};