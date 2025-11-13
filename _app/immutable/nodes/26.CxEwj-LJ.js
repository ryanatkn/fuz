import"../chunks/DsnmJJEf.js";import{p as te,c as ne,f as _,s as e,a as p,d as b,t as ae,b as m,r as x,n as h,az as oe}from"../chunks/CCvlg-B_.js";import{s as se}from"../chunks/B-Y-4wD6.js";import{b as re}from"../chunks/Cwi3i6rU.js";import{C as i}from"../chunks/CrxF6GP3.js";import{r as le}from"../chunks/BcSql5RE.js";import{g as ie}from"../chunks/BNQpsniC.js";import{T as de}from"../chunks/B1J25CnJ.js";import{T as v,a as u}from"../chunks/Csnu0kS9.js";import{m as ce,a as pe,M as c}from"../chunks/F6HdYfkX.js";import{I as J}from"../chunks/CMPpK9nI.js";import{A as me}from"../chunks/u9ze5pMj.js";var _e=_("<!> <p>Supports <strong>bold</strong>, <em>italic</em>, and strikethrough:</p> <!> <!>",1),ve=_(`<!> <p>mdz preserves and renders all whitespace exactly as written, minimizing surprise for
			nontechnical users:</p> <!> <div class="mb_lg"><!></div> <button type="button">click to inspect whitespace</button>`,1),ue=_("<!> <p>Single newlines create line breaks:</p> <!> <!> <p>Double newlines create paragraph breaks:</p> <!> <!> <p>Triple newlines create paragraphs with a blank line between:</p> <!> <!>",1),ge=_(`<!> <p>Use exactly three hyphens (<code>---</code>) at the start of a line to create a horizontal
			rule. Must be separated from other content by blank lines (paragraph breaks), except at
			document start/end:</p> <!> <!>`,1),he=_("<!> <p>Backtick code automatically links to identifiers and modules:</p> <!> <!> <p>Non-identifiers become plain code elements:</p> <!> <!>",1),fe=_("<!> <p>Use <code></code> and <code></code> tags:</p> <!> <!>",1),be=_("<!> <p>mdz supports an opt-in set of HTML elements for semantic markup and styling.</p> <!> <!> <!> <!> <p>Elements must be registered:</p> <!> <p>Unregistered elements render as <!> placeholders for security.</p>",1),xe=_(`<!> <p>mdz supports Svelte components to a minimal (and possibly expanding) degree. Components are
			distinguished from HTML elements by their uppercase first letter:</p> <!> <!> <p>Components must be registered:</p> <!> <p>Unregistered components render as <!> placeholders.</p> <aside>tip: You can put a <code>SvelteMap</code> in the component and element registries.</aside>`,1),ze=_("<!> <p>For more control, use <!> directly with <!>:</p> <!> <!> <p>For example you may want <code>white_space_pre</code> to avoid wrapping in some circumstances.</p>",1),$e=_(`<!> <p>mdz supports fewer syntax variants than CommonMark/GFM:</p> <ul><li>bold: <code>**text**</code> only</li> <li>italic: <code>_text_</code> only</li></ul> <p>In CommonMark, <code>*text*</code> is italic. In mdz, single <code>*</code> has no special meaning
			and renders as literal text. This choice creates a clear visual distinction between bold and italics.</p> <p>In general, mdz wants to minimize surprise to nontechnical users, so it's strict in what it
			accepts and prefers false negatives over false positives. For example, it requires a
			separating blank line and <code>\`\`\`</code> with no preceding spaces or characters to start a code
			block.</p>`,1),we=_(`<section><p>mdz is a small markdown dialect that supports Svelte components and a subset of TSDoc. The
			goal is to be friendly to nontechnical users and integrate with other Fuz systems.</p> <aside>⚠️ This is an early proof of concept with missing features. Lists and blockquotes are next.</aside> <aside><p>Possible changes?</p> <ul><li>end lines with <code class="white_space_pre">\\</code> to opt out of rendering the line break?</li> <li>loosen/tighten some restrictions?</li></ul></aside></section> <section><!></section> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <p>See also the mdz <a>fixtures debug page</a>.</p>`,1);function Be(K,O){te(O,!0);const Q=ie("mdz");ce.set(new Map([["Alert",me]])),pe.set(new Map([["code",!0],["aside",!0],["marquee",!0]]));const w="**Bold** and _italic_ and ~strikethrough~ text.",k=` see 
  how       
   whitespace    
is preserved `,y="To parse markdown directly, use `mdz_parse` from module `mdz.ts`.",M="This `identifier` does not exist.",T="See the {@link Alert} component.",S=`First line.
Second line.
Third line.`,A=`First paragraph.

Second paragraph.`,P=`First paragraph.


Second paragraph separated by an extra newline.`,C=`Section one.

---

Section two.`,I="<aside>This is _italicized <code>code</code>_ inside an `aside`.</aside>",N="<marquee>use it or lose it</marquee>",F="<Alert>This is an `Alert` with _italicized <code>code</code>_ inside.</Alert>";let z;de(K,{get tome(){return Q},children:(W,ye)=>{var L=we(),$=e(p(L),2),X=b($);i(X,{content:"import Mdz from '@ryanatkn/fuz/Mdz.svelte';",lang:"ts"}),x($);var q=e($,2);v(q,{children:(s,g)=>{var t=_e(),n=p(t);u(n,{text:"Basic formatting"});var a=e(n,4);i(a,{content:`<Mdz content="${w}" />`,class:"mb_lg"});var o=e(a,2);c(o,{content:w,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var R=e(q,2);v(R,{children:(s,g)=>{var t=ve(),n=p(t);u(n,{text:"Preserves whitespace"});var a=e(n,4);i(a,{content:`<Mdz content="${k}" />`,class:"mb_lg"});var o=e(a,2),l=b(o);c(l,{content:k,class:"mb_xl5"}),x(o),re(o,d=>z=d,()=>z);var r=e(o,2);r.__click=()=>{const d=window.getSelection(),f=document.createRange();f.selectNodeContents(z),d?.removeAllRanges(),d?.addRange(f)},m(s,t)},$$slots:{default:!0}});var B=e(R,2);v(B,{children:(s,g)=>{var t=ue(),n=p(t);u(n,{text:"Line breaks and paragraphs"});var a=e(n,4);i(a,{content:S,class:"mb_lg"});var o=e(a,2);c(o,{content:S,class:"mb_xl5"});var l=e(o,4);i(l,{content:A,class:"mb_lg"});var r=e(l,2);c(r,{content:A,class:"mb_xl5"});var d=e(r,4);i(d,{content:P,class:"mb_lg"});var f=e(d,2);c(f,{content:P,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var E=e(B,2);v(E,{children:(s,g)=>{var t=ge(),n=p(t);u(n,{text:"Horizontal rules"});var a=e(n,4);i(a,{content:C,class:"mb_lg"});var o=e(a,2);c(o,{content:C,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var H=e(E,2);v(H,{children:(s,g)=>{var t=he(),n=p(t);u(n,{text:"Inline code auto-linking"});var a=e(n,4);i(a,{content:y,class:"mb_lg"});var o=e(a,2);c(o,{content:y,class:"mb_xl5"});var l=e(o,4);i(l,{content:M,class:"mb_lg"});var r=e(l,2);c(r,{content:M,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var U=e(H,2);v(U,{children:(s,g)=>{var t=fe(),n=p(t);u(n,{text:"TSDoc links"});var a=e(n,2),o=e(b(a));o.textContent="{@link}";var l=e(o,2);l.textContent="{@see}",h(),x(a);var r=e(a,2);i(r,{content:T,class:"mb_lg"});var d=e(r,2);c(d,{content:T,class:"mb_xl5"}),m(s,t)},$$slots:{default:!0}});var V=e(U,2);v(V,{children:(s,g)=>{var t=be(),n=p(t);u(n,{text:"HTML elements"});var a=e(n,4);i(a,{content:I,class:"mb_lg"});var o=e(a,2);c(o,{content:I,class:"mb_xl5"});var l=e(o,2);i(l,{content:N,class:"mb_lg"});var r=e(l,2);c(r,{content:N,class:"mb_xl5"});var d=e(r,4);i(d,{content:`import {mdz_elements_context} from '@ryanatkn/fuz/mdz_components.js';

mdz_elements_context.set(new Map([
	['code', true],
	['aside', true],
	['marquee', true],
]));`,lang:"ts",class:"mb_lg"});var f=e(d,2),ee=e(b(f));c(ee,{content:"<tag-name />",inline:!0}),h(),x(f),m(s,t)},$$slots:{default:!0}});var j=e(V,2);v(j,{children:(s,g)=>{var t=xe(),n=p(t);u(n,{text:"Svelte components"});var a=e(n,4);i(a,{content:F,class:"mb_lg"});var o=e(a,2);c(o,{content:F,class:"mb_xl5"});var l=e(o,4);i(l,{content:`import {mdz_components_context} from '@ryanatkn/fuz/mdz_components.js';
import Alert from '@ryanatkn/fuz/Alert.svelte';

mdz_components_context.set(new Map([
	['Alert', Alert],
]));`,lang:"ts",class:"mb_lg"});var r=e(l,2),d=e(b(r));c(d,{content:"<ComponentName />",inline:!0}),h(),x(r),h(2),m(s,t)},$$slots:{default:!0}});var D=e(j,2);v(D,{children:(s,g)=>{var t=ze(),n=p(t);u(n,{text:"Advanced usage"});var a=e(n,2),o=e(b(a));J(o,{name:"mdz_parse"});var l=e(o,2);J(l,{name:"Mdz_Node_View"}),h(),x(a);var r=e(a,2);i(r,{content:`import {mdz_parse} from '@ryanatkn/fuz/mdz.js';
import Mdz_Node_View from '@ryanatkn/fuz/Mdz_Node_View.svelte';

const nodes = mdz_parse(content);`,lang:"ts",class:"mb_lg"});var d=e(r,2);i(d,{content:`<div class="custom white_space_pre_wrap">
	{#each nodes as node}
		<Mdz_Node_View {node} />
	{/each}
</div>`,class:"mb_lg"}),h(2),m(s,t)},$$slots:{default:!0}});var Y=e(D,2);v(Y,{children:(s,g)=>{var t=$e(),n=p(t);u(n,{text:"Compatibility with other markdowns"}),h(8),m(s,t)},$$slots:{default:!0}});var G=e(Y,2),Z=e(b(G));h(),x(G),ae(s=>se(Z,"href",s),[()=>le("/debug/mdz")]),m(W,L)},$$slots:{default:!0}}),ne()}oe(["click"]);export{Be as component};
