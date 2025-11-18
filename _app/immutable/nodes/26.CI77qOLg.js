import"../chunks/DsnmJJEf.js";import{p as te,c as ne,f as _,s as e,a as p,d as b,t as oe,b as m,r as x,n as g,az as ae}from"../chunks/CCvlg-B_.js";import{s as se}from"../chunks/B-Y-4wD6.js";import{b as re}from"../chunks/Cwi3i6rU.js";import{C as r}from"../chunks/CrxF6GP3.js";import{r as ie}from"../chunks/C20X4bNf.js";import{g as le}from"../chunks/BM1lFVNV.js";import{T as de}from"../chunks/CHq7LPwo.js";import{T as u,a as v}from"../chunks/frVgudFr.js";import{m as ce,a as pe,M as c}from"../chunks/C1q-dtfS.js";import{I as J}from"../chunks/DZ54a8Oo.js";import{A as me}from"../chunks/u9ze5pMj.js";var _e=_("<!> <p>Supports <strong>bold</strong>, <em>italic</em>, and strikethrough:</p> <!> <!>",1),ue=_(`<!> <p>mdz preserves and renders all whitespace exactly as written, minimizing surprise for
			nontechnical users:</p> <!> <div class="mb_lg"><!></div> <button type="button">click to inspect whitespace</button>`,1),ve=_("<!> <p>Single newlines create line breaks:</p> <!> <!> <p>Double newlines create paragraph breaks:</p> <!> <!> <p>Triple newlines create paragraphs with a blank line between:</p> <!> <!>",1),he=_(`<!> <p>Use exactly three hyphens (<code>---</code>) at the start of a line to create a horizontal
			rule. Must be separated from other content by blank lines (paragraph breaks), except at
			document start/end:</p> <!> <!>`,1),ge=_("<!> <p>Backtick code automatically links to identifiers and modules:</p> <!> <!> <p>Non-identifiers become plain code elements:</p> <!> <!>",1),fe=_(`<!> <p>mdz supports three kinds of links:</p> <ul><li>standard markdown link syntax</li> <li>external URLs starting with <code>https://</code> or <code>http://</code></li> <li>internal paths starting with <code>/</code></li></ul> <!> <!> <p><strong>Note:</strong> Relative paths (<code>./</code>, <code>../</code>) are not supported.
			mdz content doesn't have a stable location concept -- TSDoc comments render at different URLs
			than their source files. Root-relative paths (<code>/docs/...</code>) are more portable and
			work consistently regardless of where the content is rendered. This could change, I'm open to
			discussion.</p>`,1),be=_("<!> <p>mdz supports an opt-in set of HTML elements for semantic markup and styling.</p> <!> <!> <!> <!> <p>Elements must be registered:</p> <!> <p>Unregistered elements render as <!> placeholders for security.</p>",1),xe=_(`<!> <p>mdz supports Svelte components to a minimal (and possibly expanding) degree. Components are
			distinguished from HTML elements by their uppercase first letter:</p> <!> <!> <p>Components must be registered:</p> <!> <p>Unregistered components render as <!> placeholders.</p> <aside>tip: You can put a <code>SvelteMap</code> in the component and element registries.</aside>`,1),we=_("<!> <p>For more control, use <!> directly with <!>:</p> <!> <!> <p>For example you may want <code>white_space_pre</code> to avoid wrapping in some circumstances.</p>",1),ze=_(`<!> <p>mdz supports fewer syntax variants than CommonMark/GFM:</p> <ul><li>bold: <code>**text**</code> only</li> <li>italic: <code>_text_</code> only</li></ul> <p>In CommonMark, <code>*text*</code> is italic. In mdz, single <code>*</code> has no special meaning
			and renders as literal text. This choice creates a clear visual distinction between bold and italics.</p> <p>In general, mdz wants to minimize surprise to nontechnical users, so it's strict in what it
			accepts and prefers false negatives over false positives. For example, it requires a
			separating blank line and <code>\`\`\`</code> with no preceding spaces or characters to start a code
			block.</p>`,1),$e=_(`<section><p>mdz is a small markdown dialect that supports Svelte components, auto-detected URLs and paths,
			and standard markdown link syntax. The goal is to be friendly to nontechnical users and
			integrate with other Fuz systems.</p> <aside>⚠️ This is an early proof of concept with missing features. Lists and blockquotes are next.</aside> <aside><p>Possible changes?</p> <ul><li>end lines with <code class="white_space_pre">\\</code> to opt out of rendering the line break?</li> <li>loosen/tighten some restrictions like requiring blank newline separators?</li></ul></aside></section> <section><!></section> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <p>See also the mdz <a>fixtures debug page</a>.</p>`,1);function Ue(K,O){te(O,!0);const Q=le("mdz");ce.set(new Map([["Alert",me]])),pe.set(new Map([["code",!0],["aside",!0],["marquee",!0]]));const $="**Bold** and _italic_ and ~strikethrough~ text.",k=` see 
  how       
   whitespace    
is preserved `,y="To parse markdown directly, use `mdz_parse` from module `mdz.ts`.",M="This `identifier` does not exist.",T="[Fuz API docs](https://fuz.dev/docs/api) and https://fuz.dev/docs/api and /docs/api",A=`First line.
Second line.
Third line.`,S=`First paragraph.

Second paragraph.`,P=`First paragraph.


Second paragraph separated by an extra newline.`,I=`Section one.

---

Section two.`,L="<aside>This is _italicized <code>code</code>_ inside an `aside`.</aside>",R="<marquee>use it or lose it</marquee>",C="<Alert>This is an `Alert` with _italicized <code>code</code>_ inside.</Alert>";let w;de(K,{get tome(){return Q},children:(W,ye)=>{var N=$e(),z=e(p(N),2),X=b(z);r(X,{content:"import Mdz from '@ryanatkn/fuz/Mdz.svelte';",lang:"ts"}),x(z);var F=e(z,2);u(F,{children:(s,h)=>{var t=_e(),n=p(t);v(n,{text:"Basic formatting"});var o=e(n,4);r(o,{content:`<Mdz content="${$}" />`,class:"mb_lg"});var a=e(o,2);c(a,{content:$,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var q=e(F,2);u(q,{children:(s,h)=>{var t=ue(),n=p(t);v(n,{text:"Preserves whitespace"});var o=e(n,4);r(o,{content:`<Mdz content="${k}" />`,class:"mb_lg"});var a=e(o,2),i=b(a);c(i,{content:k,class:"mb_xl5"}),x(a),re(a,d=>w=d,()=>w);var l=e(a,2);l.__click=()=>{const d=window.getSelection(),f=document.createRange();f.selectNodeContents(w),d?.removeAllRanges(),d?.addRange(f)},m(s,t)},$$slots:{default:!0}});var U=e(q,2);u(U,{children:(s,h)=>{var t=ve(),n=p(t);v(n,{text:"Line breaks and paragraphs"});var o=e(n,4);r(o,{content:A,class:"mb_lg"});var a=e(o,2);c(a,{content:A,class:"mb_xl5"});var i=e(a,4);r(i,{content:S,class:"mb_lg"});var l=e(i,2);c(l,{content:S,class:"mb_xl5"});var d=e(l,4);r(d,{content:P,class:"mb_lg"});var f=e(d,2);c(f,{content:P,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var B=e(U,2);u(B,{children:(s,h)=>{var t=he(),n=p(t);v(n,{text:"Horizontal rules"});var o=e(n,4);r(o,{content:I,class:"mb_lg"});var a=e(o,2);c(a,{content:I,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var E=e(B,2);u(E,{children:(s,h)=>{var t=ge(),n=p(t);v(n,{text:"Inline code auto-linking"});var o=e(n,4);r(o,{content:y,class:"mb_lg"});var a=e(o,2);c(a,{content:y,class:"mb_xl5"});var i=e(a,4);r(i,{content:M,class:"mb_lg"});var l=e(i,2);c(l,{content:M,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var H=e(E,2);u(H,{children:(s,h)=>{var t=fe(),n=p(t);v(n,{text:"Links"});var o=e(n,6);r(o,{content:T,class:"mb_lg"});var a=e(o,2);c(a,{content:T,class:"mb_xl5"}),g(2),m(s,t)},$$slots:{default:!0}});var V=e(H,2);u(V,{children:(s,h)=>{var t=be(),n=p(t);v(n,{text:"HTML elements"});var o=e(n,4);r(o,{content:L,class:"mb_lg"});var a=e(o,2);c(a,{content:L,class:"mb_xl5"});var i=e(a,2);r(i,{content:R,class:"mb_lg"});var l=e(i,2);c(l,{content:R,class:"mb_xl5"});var d=e(l,4);r(d,{content:`import {mdz_elements_context} from '@ryanatkn/fuz/mdz_components.js';

mdz_elements_context.set(new Map([
	['code', true],
	['aside', true],
	['marquee', true],
]));`,lang:"ts",class:"mb_lg"});var f=e(d,2),ee=e(b(f));c(ee,{content:"<tag-name />",inline:!0}),g(),x(f),m(s,t)},$$slots:{default:!0}});var j=e(V,2);u(j,{children:(s,h)=>{var t=xe(),n=p(t);v(n,{text:"Svelte components"});var o=e(n,4);r(o,{content:C,class:"mb_lg"});var a=e(o,2);c(a,{content:C,class:"mb_xl5"});var i=e(a,4);r(i,{content:`import {mdz_components_context} from '@ryanatkn/fuz/mdz_components.js';
import Alert from '@ryanatkn/fuz/Alert.svelte';

mdz_components_context.set(new Map([
	['Alert', Alert],
]));`,lang:"ts",class:"mb_lg"});var l=e(i,2),d=e(b(l));c(d,{content:"<ComponentName />",inline:!0}),g(),x(l),g(2),m(s,t)},$$slots:{default:!0}});var Y=e(j,2);u(Y,{children:(s,h)=>{var t=we(),n=p(t);v(n,{text:"Advanced usage"});var o=e(n,2),a=e(b(o));J(a,{name:"mdz_parse"});var i=e(a,2);J(i,{name:"Mdz_Node_View"}),g(),x(o);var l=e(o,2);r(l,{content:`import {mdz_parse} from '@ryanatkn/fuz/mdz.js';
import Mdz_Node_View from '@ryanatkn/fuz/Mdz_Node_View.svelte';

const nodes = mdz_parse(content);`,lang:"ts",class:"mb_lg"});var d=e(l,2);r(d,{content:`<div class="custom white_space_pre_wrap">
	{#each nodes as node}
		<Mdz_Node_View {node} />
	{/each}
</div>`,class:"mb_lg"}),g(2),m(s,t)},$$slots:{default:!0}});var D=e(Y,2);u(D,{children:(s,h)=>{var t=ze(),n=p(t);v(n,{text:"Compatibility with other markdowns"}),g(8),m(s,t)},$$slots:{default:!0}});var G=e(D,2),Z=e(b(G));g(),x(G),oe(s=>se(Z,"href",s),[()=>ie("/debug/mdz")]),m(W,N)},$$slots:{default:!0}}),ne()}ae(["click"]);export{Ue as component};
