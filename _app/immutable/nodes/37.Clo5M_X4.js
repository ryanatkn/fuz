import{b as _,a as t,t as m,f as o,c as r,s as e}from"../chunks/disclose-version.COjBdUkA.js";import{v as E,p as J,a as R,g as l,d as B,$ as y}from"../chunks/runtime.BITJpo-a.js";import{e as D}from"../chunks/each.Bo18fhyf.js";import{i as P}from"../chunks/lifecycle.DMmtugz9.js";import{C as z}from"../chunks/Code.CAGfF-1b.js";import{T as F}from"../chunks/Tome_Detail.zlUFvyFI.js";import{T as N}from"../chunks/Tome_Link.CVYH66-f.js";import{M as W}from"../chunks/Mdn_Link.Cfq4d4cm.js";import{g as X}from"../chunks/tome.DbsBumql.js";import{d as Y}from"../chunks/variables.DJ8QgL9I.js";import{T as q}from"../chunks/Tome_Subheading.xp9gRhUw.js";import{S as H}from"../chunks/Style_Variable_Button.a3Lps30D.js";var U=m("CSS custom properties",1),j=m("theme",1),G=m(`<section><p>Variables are <!> that can be grouped into a <!>. Each variable can have
			values for light and/or dark color schemes.</p> <p>The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			both developers and end-users. Variables can be composed in multiple ways:</p> <ul><li>by CSS classes, both utility and semantic</li> <li>by other variables, both in calculations and to add useful semantics (e.g. <code>button_bg_hover</code> defaults to <code>fg_2</code> but can be themed independently)</li> <li>in JS like in Svelte components</li></ul> <p>Variables also provide an interface that user-generated content can safely use in most cases.
			The result is a non-dogmatic system that aligns with modern CSS to deliver high-capability UX
			and DX with minimal overhead.</p> <aside><p>These are named "variables" or "style variables" instead of the common name "design tokens"
				because Fuz is made by a programmer designing more for devs and end-users than designers.
				Their functionality is like JS variables but for CSS, and they're implemented with CSS
				custom properties, which are commonly called CSS variables. I'm familiar with tokens as
				secrets for authentication, and I don't like overloading the term - especially for sensitive
				secrets! Wikipedia has several programming usages for tokens but no page about design
				tokens. Maybe I'll change my mind?</p></aside> <aside><p>Variables are <code>snake_case</code> so that they're also valid JS identifiers, not for
				stylistic or contrarian reasons. This choice leaks to the CSS class naming conventions, so
				that variable-derived utility classes match their corresponding variable names. This fits
				nicely with <a href="https://svelte.dev/docs/element-directives#class-name">Svelte's class shorthand syntax</a>.</p> <p>The naming convention also supports my goal of thinking about Fuz and your app as having a
				single unified flat namespace, where every identifier regardless of module is unique and
				part of a larger whole - the system's vocabulary, referenceable in every appropriate context
				- JS, HTML, and CSS, on the client and server, and in tests and dev tools. This makes each
				identifier a globally meaningful term. Maybe this needs a blog post.</p></aside></section> <section><!></section> <section><!> <aside class="mb_lg">⚠️ some of these will change</aside> <div class="variables svelte-tubmna"></div></section>`,1);function me(S,T){R(T,!1);const k=X("variables"),d=E(Y.slice().sort((n,h)=>n.name.localeCompare(h.name)));P();var c=_(),C=o(c);F(C,{tome:k,children:(n,h)=>{var p=G(),v=o(p),$=r(v),g=e(r($));W(g,{href:"Web/CSS/--*",children:(a,s)=>{var i=U();t(a,i)}});var w=e(e(g,!0));N(w,{name:"themes",children:(a,s)=>{var i=j();t(a,i)}});var u=e(e(v,!0)),M=r(u);z(M,{lang:"ts",content:`export interface Theme {
	name: string;
	variables: Style_Variable[];
}

export interface Style_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`});var x=e(e(u,!0)),f=r(x),I=B(()=>`All ${l(d).length} style variables`);q(f,{get text(){return l(I)},slug:"all-style-variables"});var L=e(e(f,!0)),V=e(e(L,!0));D(V,13,()=>l(d),(a,s)=>y(a).name,(a,s,i)=>{var b=_(),A=o(b);H(A,{get name(){return y(s).name},classes:"menu_item"}),t(a,b)}),t(n,p)}}),t(S,c),J()}export{me as component};
