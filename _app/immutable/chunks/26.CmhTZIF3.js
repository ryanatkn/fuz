import{b as B,a as n,c as fe,t as h}from"./disclose-version.DcVMHsl4.js";import{p as ie,c as s,f as H,g as a,s as e,r as t,t as ee,a as le,a5 as G,F as z,n as S,d as A,an as ke}from"./runtime.DbtEYBdD.js";import{i as M,p as $}from"./if.CjTBE8-9.js";import{C as k}from"./Code.BKk6RzAF.js";import{r as xe,g as Ce,d as Ie}from"./theme.svelte.DcVQ4Ty-.js";import{T as ze}from"./Tome_Detail.BzZiyWnL.js";import{D as ve}from"./Details.Dqz8ymwp.js";import{D as be,s as ge}from"./Dialog.sEH6VEiT.js";import{g as Me}from"./tome.DTaX32zK.js";import{C as Pe,T as We}from"./Theme_Input.DByXmwQh.js";import{T as re}from"./Tome_Subheading.COH5dvT_.js";import{s as ce}from"./render.BYxdHAaC.js";import{e as De}from"./each.C8-jnsCm.js";import{s as Ae,a as Be,r as ue,f as _e}from"./attributes.mFyRggzr.js";import{e as Ee}from"./utils.C7dA-JMV.js";import{b as Fe}from"./input.DS6ftY69.js";import{p as qe}from"./props.DeWI4C6L.js";import{M as ne}from"./Mdn_Link.nqWMrUci.js";var Ne=h('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),Oe=h('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),Re=h("<button><!><!><!></button>");function Je(y,o){ie(o,!0);let i=G(!1),v=G(!1);const m=async d=>{var l,f;z(i,!1),z(v,!1);try{await navigator.clipboard.writeText(o.text)}catch{z(v,!0),(l=o.onclick)==null||l.call(o,null,d);return}z(i,!0),(f=o.onclick)==null||f.call(o,o.text,d)};var u=Re();let p;var x=s(u);M(x,()=>o.children,d=>{var l=fe(),f=H(l);Ae(f,()=>o.children,()=>a(i),()=>a(v)),n(d,l)},d=>{var l=B("📋");n(d,l)});var P=e(x);M(P,()=>a(i),d=>{var l=Ne();n(d,l)});var T=e(P);M(T,()=>a(v),d=>{var l=Oe();n(d,l)}),t(u),ee(()=>p=Be(u,p,{...o.attrs,type:"button",class:o.classes??(o.children?void 0:"icon_button size_lg"),onclick:m},"svelte-rumh1g")),n(y,u),le()}var Le=h("<blockquote> </blockquote>"),je=h('<div class="variable svelte-11ggo28"><div class="name svelte-11ggo28"><code> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function Ve(y,o){ie(o,!0);var i=fe(),v=H(i);M(v,()=>o.variable,m=>{var u=je(),p=s(u),x=s(p),P=s(x);t(x),t(p);var T=e(p,2);M(T,()=>o.variable.summary,b=>{var _=Le(),W=s(_);t(_),ee(()=>ce(W,o.variable.summary)),n(b,_)});var d=e(T,2),l=e(s(d),2);ue(l),t(d);var f=e(d,2),C=e(s(f),2);ue(C),t(f),t(u),ee(()=>{ce(P,`--${o.variable.name??""}`),_e(l,o.variable.light??""),_e(C,o.variable.dark??"")}),n(m,u)}),n(y,i),le()}const Ye=(y,o,i,v)=>{var m;a(o)&&((m=i.onsave)==null||m.call(i,a(v)))},Ue=y=>{ge(y),alert("TODO")};var Ge=(y,o,i)=>o(y,a(i)),He=h('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),Ke=h('<div class="copy svelte-cno0i6"><!></div> <!>',1),Qe=h('<div class="pane"><div class="panel p_lg box"><!> <aside>⚠️ This is unfinished and will change.</aside> <button type="button">ok</button></div></div>'),Xe=h('<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>⚠️ Creating and editing themes at runtime is a work in progress i.e. totally unfinished.</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>',1);function Ze(y,o){ie(o,!0);const i=qe(o,"theme",3,null);let v=G($(i()?i().name:"new theme")),m=G($(i()?i().variables:[]));const u=A(()=>({name:a(v),variables:a(m)})),p=A(()=>xe(a(u),{empty_default_theme:!1,specificity:1})),x=A(()=>a(m).reduce((r,c)=>c.light?r+1:r,0)),P=A(()=>a(m).reduce((r,c)=>c.dark?r+1:r,0));let T=G(null);const d=(r,c)=>{ge(r),z(T,$(c)),z(m,$(a(m).slice()))},l=A(()=>!!i()),f=A(()=>i()?a(v)!==i().name||a(m)!==i().variables:!0);var C=Xe(),b=H(C),_=s(b),W=s(_);M(W,()=>a(l),r=>{var c=B("edit");n(r,c)},r=>{var c=B("create");n(r,c)}),S(),t(_);var E=e(_,4),O=s(E),R=s(O),te=s(R);t(R);var de=e(R,2);de.__click=[Ue],t(O);var J=e(O,2),L=s(J),j=e(s(L),2);ue(j),t(L);var F=e(L,2);F.__click=[Ye,f,o,u];var me=s(F);M(me,()=>a(l),r=>{var c=B("save changes");n(r,c)},r=>{var c=B("create theme");n(r,c)}),t(F),t(J),t(E);var K=e(E,2),V=s(K);De(V,21,()=>a(m),r=>r.name,(r,c)=>{var g=He();g.__click=[Ge,d,c];var D=s(g);t(g),ee(()=>ce(D,`--${a(c).name??""}`)),n(r,g)}),t(V);var Q=e(V,2),oe=s(Q);M(oe,()=>a(p),r=>{var c=Ke(),g=H(c),D=s(g);Je(D,{get text(){return a(p)}}),t(g);var q=e(g,2);k(q,{get content(){return a(p)},lang:"css"}),n(r,c)}),t(Q),t(K),t(b);var he=e(b,2);M(he,()=>a(T),r=>{be(r,{onclose:()=>z(T,null),children:(g,D=ke)=>{var q=Qe(),Y=s(q),X=s(Y);Ve(X,{get variable(){return a(T)}});var ae=e(X,4);ae.__click=function(...se){var Z;(Z=D())==null||Z.apply(this,se)},t(Y),t(q),n(g,q)}})}),ee(()=>{ce(te,`variables: ${a(x)??""} light, ${a(P)??""} dark`),F.disabled=!a(f)}),Fe(j,()=>a(v),r=>z(v,r)),n(y,C),le()}Ee(["click"]);var $e=h(`<aside><p>Most theme usage affects the whole page, so Fuz makes that easy.</p> <p>By default <code>Themed</code> syncs its settings to the global <code>:root</code> tag and
					persists to <code>localStorage</code>.</p> <p>These behaviors can be customized with its props:</p> <ul><li><code>sync_color_scheme</code></li> <li><code>load_color_scheme</code></li> <li><code>save_color_scheme</code></li> <li><code>load_theme</code></li> <li><code>save_theme</code></li></ul> <p>A feature to support partial page theming is planned with <code>Themed_Scope</code>.</p></aside>`),et=h(`<aside><p><code>Themed</code> is designed to wrap every page at the top level so it can provide the
					selected theme and color scheme in the Svelte context via a <code>themer</code> instance.
					It works without children, but <code>get_themer</code> will fail unless you call <code>set_themer</code> yourself.</p> <p>This lets you call <code>get_themer</code> to access the reactive <code>Themer</code> class instance anywhere in your code. The helper components on this page like <code>Color_Scheme_Input</code> and <code>Theme_Input</code> use it so they don't require
					a <code>themer</code> prop.</p> <p>If you don't don't want to wrap everything in <code>Themed</code> for some reason, you can
					set a <code>Themer</code> in context manually. It must be the same reference as the <code>Themed</code> prop:</p> <!></aside>`),tt=h("More about <code>Color_Scheme_Input</code>",1),ot=h(`<aside><p><code>Color_Scheme_Input</code> enables users to choose and persist the color scheme without
					boilerplate.</p> <p>By default, <code>Color_Scheme_Input</code> works with <code>Themed</code>'s <code>themer</code> in context to save the user's preference to <code>localStorage</code>.
					To customize this behavior, pass your own <code>value</code> or <code>onchange</code> props. The <code>value</code> defaults to <code>get_themer()</code> so technically you
					could call <code>set_themer</code>, but it's unlikely you want to override it in context.</p></aside>`),at=h(`<section class="theme"><p>Fuz provides UI components that use <a href="https://moss.ryanatkn.com/library/themes">Moss' theming system</a> for dark mode and custom themes.</p> <p><code>Themed</code> adds global support for both the browser's <!> and custom themes based on <a href="https://moss.ryanatkn.com/library/variables">Moss style variables</a>, which use <!>. <code>Themed</code> is a singleton component that's mounted at the top-level of the page:</p> <!> <!> <!> <!></section> <section class="theme"><!> <p><code>Themed</code> defaults to automatic <!> detection with <!>, and users can also set it directly:</p> <!> <!> <!> <p>Pass props to override the default:</p> <!> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p> <!></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <a href="https://moss.ryanatkn.com/library/variables">Moss style variables</a> that can be transformed into CSS that set custom properties. Each variable can have values for
			light and/or dark color schemes. In other words, "dark" isn't a theme, it's a mode that any theme
			can implement.</p> <div class="width_sm mb_lg"><!></div> <aside>⚠️ The builtin themes need a lot more work, but the proof of concept seems to work.</aside> <aside>⚠️ Custom themes currently pop in on page load. To see this, change from the base theme and
			refresh the page. This can be fixed using a similar strategy that we use to avoid pop-in of
			user-defined color schemes, but it's more involved.</aside></section> <section class="theme"><!> <p>Themes are plain CSS that can be sourced in a variety of ways.</p> <p>To use Fuz's base theme:</p> <!> <p><code>Themed</code> can be customized with the the nonreactive prop <code>themer</code>:</p> <!> <!> <aside>The <code>themer</code> prop is not reactive because it's put in Svelte context without a wrapper.
			This could be fixed, let me know if you have a usecase.</aside> <p><code>Themed</code> sets the <code>themer</code> in the Svelte context:</p> <!> <p>For a more complete example, see <a href="https://github.com/ryanatkn/fuz_template">fuz_template</a>.</p></section> <section><!> <p><code>Themed</code> initializes the system's theme support. Without it, the page will not
			reflect the user's system <code>color-scheme</code>. By default, <code>Themed</code> applies the base theme to the root
			of the page via <code>create_theme_setup_script</code>. It uses JS to add the <code>.dark</code> CSS class to the <code>:root</code> element.</p> <p>This strategy enables color scheme and theme support with minimal CSS and optimal performance
			for most use cases. The system supports plain CSS usage that can be static or dynamic, or
			imported at buildtime or runtime. It also allows runtime access to the underlying data like
			the <a href="https://moss.ryanatkn.com/library/variables">style variables</a> if you want to pay
			the performance costs. Scoped theming to one part of the page is planned.</p> <p>The theme setup script interacts with <code>sync_color_scheme</code> to save the user's
			preference to <code>localStorage</code>. See also <code>Color_Scheme_Input</code>.</p> <p>The setup script avoids flash-on-load due to color scheme, but currently themes flash in after
			loading. We'll try to fix this when the system stabilizes.</p></section>`,1),st=h('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),rt=h("<!> <!>",1);function kt(y,o){ie(o,!0);const v=Me("Themed"),m=Ie.slice(),u=Ce();let p=G(null);var x=rt(),P=H(x);ze(P,{tome:v,children:(l,f)=>{var C=at(),b=H(C),_=e(s(b),2),W=e(s(_),2);ne(W,{path:"Web/CSS/color-scheme"});var E=e(W,4);ne(E,{path:"Web/CSS/--*",children:(U,w)=>{S();var I=B("CSS custom properties");n(U,I)},$$slots:{default:!0}}),S(3),t(_);var O=e(_,2);k(O,{content:"import Themed from '@ryanatkn/fuz/Themed.svelte';",lang:"ts"});var R=e(O,2);k(R,{content:`<!-- +layout.svelte -->
<Themed>
	{@render children()}
</Themed>`});var te=e(R,2);ve(te,{summary:w=>{S();var I=B("Why the singleton?");n(w,I)},children:(w,I)=>{var N=$e();n(w,N)},$$slots:{default:!0}});var de=e(te,2);ve(de,{summary:w=>{S();var I=B("Why nested children?");n(w,I)},children:(w,I)=>{var N=et(),Se=e(s(N),6);k(Se,{content:`<script>
	const themer = new Themer(...);
	set_themer(themer);
<\/script>
<Themed {themer} />
<!--
	sibling components not nested in \`Themed\`
	can now call \`get_themer\`
-->`}),t(N),n(w,N)},$$slots:{default:!0}}),t(b);var J=e(b,2),L=s(J);re(L,{text:"Color scheme",slug:"color-scheme"});var j=e(L,2),F=e(s(j),2);ne(F,{path:"Web/CSS/color-scheme"});var me=e(F,2);ne(me,{path:"Web/CSS/@media/prefers-color-scheme"}),S(),t(j);var K=e(j,2);Pe(K,{});var V=e(K,2);k(V,{content:"import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';",lang:"ts"});var Q=e(V,2);k(Q,{content:"<Color_Scheme_Input />"});var oe=e(Q,4),he=A(()=>`<Color_Scheme_Input
	value={{color_scheme: ${"'"+JSON.stringify(u.color_scheme).replace(/"/g,"")+"'"}}}
	onchange={...}
/>`);k(oe,{get content(){return a(he)}});var r=e(oe,4);ve(r,{summary:w=>{S();var I=tt();S(),n(w,I)},children:(w,I)=>{var N=ot();n(w,N)},$$slots:{default:!0}}),t(J);var c=e(J,2),g=s(c);re(g,{text:"Builtin themes",slug:"builtin-themes"});var D=e(g,4),q=s(D);We(q,{themes:m,enable_editing:!0,onedit:U=>z(p,$(U))}),t(D),S(4),t(c);var Y=e(c,2),X=s(Y);re(X,{text:"Example usage",slug:"example-usage"});var ae=e(X,6);k(ae,{content:`<!-- +layout.svelte -->
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
</Themed>`});var se=e(ae,4);k(se,{content:`import {Themer} from '@ryanatkn/fuz/theme.svelte.js';
const themer = new Themer(...);`,lang:"ts"});var Z=e(se,2);k(Z,{content:`<Themed {themer}>
	{@render children()}
</Themed>`});var ye=e(Z,6),Te=A(()=>`// get values from the Svelte context provided by
// the nearest \`Themed\` ancestor:
import {get_themer} from '@ryanatkn/fuz/theme.js';
const themer = get_themer();
themer.theme.name; // '${u.theme.name}'
themer.color_scheme; // '${u.color_scheme}'`);k(ye,{get content(){return a(Te)},lang:"ts"}),S(2),t(Y);var pe=e(Y,2),we=s(pe);re(we,{text:"More details",slug:"more-details"}),S(8),t(pe),n(l,C)},$$slots:{default:!0}});var T=e(P);T.nodeValue="  ";var d=e(T);M(d,()=>a(p),l=>{be(l,{onclose:()=>z(p,null),children:(f,C)=>{var b=st(),_=s(b),W=s(_);Ze(W,{get theme(){return a(p)},onsave:E=>{console.log("update theme",E),alert("todo")}}),t(_),t(b),n(f,b)},$$slots:{default:!0}})}),n(y,x),le()}export{Ve as S,kt as _};
