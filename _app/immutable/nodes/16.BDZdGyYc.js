import{t as y,j as b,a as c}from"../chunks/ZFNbJ4mV.js";import{p as w,a as x,f as A,s as e,Z as r,a3 as n,_ as o}from"../chunks/C1MeiME0.js";import{C as l}from"../chunks/CuRgvGsS.js";import{g as C}from"../chunks/0VawP5Jr.js";import{T as S}from"../chunks/DVV3NFQa.js";import{M as k}from"../chunks/BuL1l6Sf.js";var E=y(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <code>create_csp_directives</code> helper. Fuz also provides related helpers, types, and CSP data.</p> <p>The goal is to provide a simple trust modeling system that balances safety+security+privacy
			with ergonomics, helping users maintain secure policies without unhelpful burden or
			restriction.</p> <p>Auditability and transparency are key concerns for the API, but we trade away some of this for
			ergonomics. Fuz defines three levels of trust/risk/sensitivity (low/medium/high, <code>Csp_Trust_Level</code>) that can be configured for each trusted source to give blanket permissions at a specified
			tier, and then granular overrides are straightforward and declarative.</p> <p>I'm trying to design for clear, intuitive boundaries with escalating security and privacy
			implications. Fuz includes a debatable set of defaults, and input is appreciated to help tune
			the tradeoffs.</p> <!></section> <section><aside>⚠️ Apologies, these docs are a work in progress, see the <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.ts">source code</a> for now. The API feels near-complete, and includes full customization of the default directive
			values and trust levels.</aside> <!></section>`,1);function N(p,u){w(u,!0);const d=C("csp");S(p,{tome:d,children:(m,z)=>{var a=E(),t=A(a),s=r(t),h=e(r(s),3);k(h,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(_,P)=>{n();var g=b("Content Security Policies");c(_,g)},$$slots:{default:!0}}),n(3),o(s);var f=e(s,8);l(f,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://*.me.com/', trust: 'high'},
	{source: 'https://*.my.domain/', trust: 'medium'}, // no scripting allowed
	{source: 'https://me.github.io/', trust: 'low', directives: ['script-src-elem']}, // low but allow script
];

const csp = create_csp_directives({
  trusted_sources: my_csp_trusted_sources,
});

// Or get the default with no trusted sources except 'self':
const csp = create_csp_directives();

// You can also override or transform directives:
const custom_csp = create_csp_directives({
  trusted_sources: my_csp_trusted_sources,
  directives: {
    // Add additional domains to existing values:
    'img-src': (v) => [...v, 'trusted.domain'], // extend trusted sources

     // Or completely replace values:
    'connect-src': ['self', 'trusted.domain'], // no base trusted sources!
    'connect-src': () => ['self', 'trusted.domain'], // equivalent

    // Example opt-in to eval:
    'script-src-elem': (v) => [...v, 'unsafe-eval', 'wasm-unsafe-eval'], // alert alert
  },
});`,lang:"ts"}),o(t);var i=e(t,2),v=e(r(i),2);l(v,{lang:"ts",content:"/**\n * Trust levels for CSP sources.\n *\n * With the base defaults, trust levels roughly correspond to:\n *\n * - `low` – Passive resources only (no script execution, no styling or UI control).\n * 		Examples: `img-src`, `font-src`.\n * - `medium` – Content that may affect layout, styling, or embed external browsing contexts,\n *    but cannot directly run code in the page's JS execution environment or\n * 		perform other high-risk actions. Examples: `style-src`, `frame-src`, `frame-ancestors`.\n * - `high` – Sources that can execute code in the page's context or open powerful network\n *    channels. Examples: `script-src`, `connect-src`, `child-src`.\n * - `null` – No trust. This is used for directives that don't support sources.\n *\n */\nexport type Csp_Trust_Level = Array_Element<typeof csp_trust_levels>;"}),o(i),c(m,a)},$$slots:{default:!0}}),x()}export{N as component};
