import{t as v,j as _,a as r}from"../chunks/CV4FwyaA.js";import{p as g,a as y,f as b,s as i,Z as a,a3 as t,_ as c}from"../chunks/D0mNtKt1.js";import{C as w}from"../chunks/B5JwzsMJ.js";import{g as x}from"../chunks/CJ_0K_ee.js";import{T as A}from"../chunks/CADY2tVd.js";import{M as C}from"../chunks/BpaxWoAN.js";var S=v(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <code>create_csp_directives</code> helper. Fuz also provides related helpers, types, and CSP data.</p> <p>The goal is to provide a simple trust modeling system that balances safety+security+privacy
			with ergonomics in the hopes of finding a better global maximum, helping users maintain secure
			policies without unhelpful burden or restriction.</p> <p>Auditability and transparency are key concerns for the API, but we trade away some of this for
			ergonomics, with the idea that we make it easy for users to safely configure basic scenarios,
			and advanced users can opt into using the API with full declarative transparency (and more
			verbosity and information load).</p> <p>Fuz defines three levels of trust/risk/sensitivity (low/medium/high, <code>Csp_Trust_Level</code>) that can be configured for each trusted source to give blanket permissions at a specified
			tier, and then granular overrides are straightforward and declarative.</p> <p>I'm trying to design for clear, intuitive boundaries with escalating security and privacy
			implications. Fuz includes a debatable set of defaults, and input is appreciated to help tune
			the tradeoffs.</p> <!></section> <section><h3>Trust</h3> <p>Fuz's CSP abstraction provides three trust levels (<code>Csp_Trust_Level</code>) with
			escalating risk.</p> <ul><li><code>null</code> - No trust. This is used for directives that don't support sources.</li> <li><code>'low'</code> - Passive resources only - no script execution, no styling or UI control</li> <li><code>'medium'</code> - Content that may affect layout, styling, or embed external browsing contexts,
				but cannot directly run code in the page's JS execution environment or perform other high-risk
				actions</li> <li><code>'high'</code> - Sources that can execute code in the page's context</li></ul> <aside>⚠️ Apologies, these docs are a work in progress, see the <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.ts">source code</a> for now. The API feels near-complete, and includes full customization of the default directive
			values and trust levels.</aside></section>`,1);function L(n,d){g(d,!0);const l=x("csp");A(n,{tome:l,children:(u,z)=>{var s=S(),o=b(s),e=a(o),p=i(a(e),3);C(p,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(h,P)=>{t();var f=_("Content Security Policies");r(h,f)},$$slots:{default:!0}}),t(3),c(e);var m=i(e,10);w(m,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

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
});`,lang:"ts"}),c(o),t(2),r(u,s)},$$slots:{default:!0}}),y()}export{L as component};
