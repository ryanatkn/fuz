import{t as g,k as L,a as f}from"../chunks/BVHb_Il8.js";import{p as O,a as R,f as N,s as a,c as t,V as k,r as e,t as T,g as y}from"../chunks/KxkgHfFn.js";import{s as u}from"../chunks/BS3qJFfO.js";import{e as j}from"../chunks/CGz3JggW.js";import{C as Y}from"../chunks/kRT7KGBF.js";import{g as B}from"../chunks/Cpqoz9Hm.js";import{T as D}from"../chunks/SjRHyOSW.js";import{M as U}from"../chunks/DXOs1df3.js";const J=Object.freeze(["low","medium","high"]),K=Object.freeze({"default-src":null,"script-src":"high","script-src-elem":"high","script-src-attr":null,"style-src":"medium","style-src-elem":"medium","style-src-attr":"medium","img-src":"low","media-src":"low","font-src":"low","manifest-src":null,"child-src":null,"connect-src":"medium","frame-src":"medium","frame-ancestors":"medium","form-action":"medium","worker-src":"medium","object-src":null,"base-uri":null,"upgrade-insecure-requests":null,"report-to":null,"require-trusted-types-for":null,"trusted-types":null,sandbox:null}),P=[{name:"default-src",fallback:null,fallback_of:["script-src","script-src-elem","script-src-attr","style-src","style-src-elem","style-src-attr","img-src","media-src","font-src","manifest-src","child-src","connect-src","worker-src","object-src"]},{name:"script-src",fallback:["default-src"],fallback_of:["script-src-elem","script-src-attr","worker-src"]},{name:"script-src-elem",fallback:["script-src","default-src"],fallback_of:null},{name:"script-src-attr",fallback:["script-src","default-src"],fallback_of:null},{name:"style-src",fallback:["default-src"],fallback_of:["style-src-elem","style-src-attr"]},{name:"style-src-elem",fallback:["style-src","default-src"],fallback_of:null},{name:"style-src-attr",fallback:["style-src","default-src"],fallback_of:null},{name:"img-src",fallback:["default-src"],fallback_of:null},{name:"media-src",fallback:["default-src"],fallback_of:null},{name:"font-src",fallback:["default-src"],fallback_of:null},{name:"manifest-src",fallback:["default-src"],fallback_of:null},{name:"child-src",fallback:["default-src"],fallback_of:["frame-src","worker-src"]},{name:"connect-src",fallback:["default-src"],fallback_of:null},{name:"frame-src",fallback:["child-src"],fallback_of:null},{name:"frame-ancestors",fallback:null,fallback_of:null},{name:"form-action",fallback:null,fallback_of:null},{name:"worker-src",fallback:["child-src","script-src","default-src"],fallback_of:null},{name:"object-src",fallback:["default-src"],fallback_of:null},{name:"base-uri",fallback:null,fallback_of:null},{name:"upgrade-insecure-requests",fallback:null,fallback_of:null},{name:"report-to",fallback:null,fallback_of:null},{name:"require-trusted-types-for",fallback:null,fallback_of:null},{name:"trusted-types",fallback:null,fallback_of:null},{name:"sandbox",fallback:null,fallback_of:null}];new Map(P.map(d=>[d.name,d]));var V=g("<tr><td> </td><td> </td></tr>"),W=g("<tr><td> </td><td> </td><td> </td></tr>"),G=g(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <code>create_csp_directives</code> helper. Fuz also provides related helpers, types, and CSP data.</p> <p>The goal is to provide a simple trust modeling system that balances safety+security+privacy
			with ergonomics in the hopes of finding a better global maximum, helping users maintain secure
			policies without unhelpful burden or restriction.</p> <p>Auditability and transparency are key concerns for the API, but we trade away some of this for
			ergonomics, with the idea that we make it easy for users to safely configure basic scenarios,
			and advanced users can opt into using the API with full declarative transparency (and more
			verbosity and information load).</p> <p>Fuz defines three levels of trust/risk/sensitivity (low/medium/high, <code>Csp_Trust_Level</code>) that can be configured for each trusted source to give blanket permissions at a specified
			tier, and then granular overrides are straightforward and declarative.</p> <p>I'm trying to design for clear, intuitive boundaries with escalating security and privacy
			implications. Fuz includes a debatable set of defaults, and input is appreciated to help tune
			the tradeoffs.</p> <!></section> <section><h3>Trust</h3> <p>Fuz's CSP abstraction provides three trust levels (<code>Csp_Trust_Level</code>) with
			escalating risk. Each directive has a default value that can be customized:</p> <ul><li><code>null</code> - No trust. This is used for directives that don't support sources.</li> <li><code>'low'</code> - Passive resources only - no script execution, no styling or UI control</li> <li><code>'medium'</code> - Content that may affect layout, styling, or embed external browsing contexts,
				but cannot directly run code in the page's JS execution environment or perform other high-risk
				actions</li> <li><code>'high'</code> - Sources that can execute code in the page's context</li></ul></section> <section><h3>Default directive trust levels</h3> <p>The defaults of option <code>required_trust_defaults</code>:</p> <table><thead><tr><th class="white_space_nowrap">trust level</th><th>directives</th></tr></thead><tbody></tbody></table></section> <section><h3>Directive specs</h3> <table><thead><tr><th>directive</th><th>fallback</th><th>fallback of</th></tr></thead><tbody></tbody></table></section> <aside>⚠️ Apologies, these docs are a work in progress, see the <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.ts">source code</a> for now. The API feels near-complete, and includes full customization of the default directive
		values and trust levels. Some details may change and input is welcome.</aside>`,1);function ce(d,I){O(I,!0);const $=B("csp");D(d,{tome:$,children:(M,Q)=>{var w=G(),m=N(w),p=t(m),q=a(t(p),3);U(q,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(s,l)=>{k();var r=L("Content Security Policies");f(s,r)},$$slots:{default:!0}}),k(3),e(p);var E=a(p,10);Y(E,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

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
});`,lang:"ts"}),e(m);var h=a(m,4),x=a(t(h),4),z=a(t(x));j(z,20,()=>[null].concat(J),s=>s,(s,l)=>{var r=V(),c=t(r),b=t(c,!0);e(c);var n=a(c),_=t(n,!0);e(n),e(r),T(o=>{u(b,l===null?"null":l),u(_,o)},[()=>Object.entries(K).filter(([o,v])=>v===l).map(([o])=>o).join(", ")]),f(s,r)}),e(z),e(x),e(h);var S=a(h,2),A=a(t(S),2),C=a(t(A));j(C,21,()=>P,s=>s.name,(s,l)=>{var r=W(),c=t(r),b=t(c,!0);e(c);var n=a(c),_=t(n,!0);e(n);var o=a(n),v=t(o,!0);e(o),e(r),T((i,F)=>{u(b,y(l).name),u(_,i),u(v,F)},[()=>{var i;return((i=y(l).fallback)==null?void 0:i.join(", "))||""},()=>{var i;return((i=y(l).fallback_of)==null?void 0:i.join(", "))||""}]),f(s,r)}),e(C),e(A),e(S),k(2),f(M,w)},$$slots:{default:!0}}),R()}export{ce as component};
