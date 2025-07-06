import"../chunks/CWj6FrbW.js";import{p as pe,e as ae,a as C,b as a,c as _e,f as d,d as r,r as t,g as de,t as V,am as ue,s as e,an as h,h as G,u as Te}from"../chunks/DpDn43ma.js";import{s as L}from"../chunks/B7YlL7pk.js";import{i as A}from"../chunks/B7cJd8Gg.js";import{e as fe}from"../chunks/Doywmu7X.js";import{C as N}from"../chunks/CGW2Az-c.js";import{g as qe}from"../chunks/C6n9e1bT.js";import{T as ze}from"../chunks/C9vis3bL.js";import{M as me}from"../chunks/X1vxdkak.js";import{T as K,a as Q}from"../chunks/DmfBOdKA.js";import{a as oe}from"../chunks/DuG0mCj_.js";import{p as Ae}from"../chunks/CIv4KKLE.js";const ie=c=>{if(c===null)return"null";if(c===void 0)return"undefined";const o=typeof c;return o==="string"?`'${c}'`:o==="number"||o==="boolean"?c+"":Array.isArray(c)?`[${c.map(ie).join(", ")}]`:o==="object"?JSON.stringify(c):c+""},je=Object.freeze(["low","medium","high"]),Ie=Object.freeze({"default-src":null,"script-src":"high","script-src-elem":"high","script-src-attr":null,"style-src":"medium","style-src-elem":"medium","style-src-attr":"medium","img-src":"low","media-src":"low","font-src":"low","manifest-src":null,"child-src":null,"connect-src":"medium","frame-src":"medium","frame-ancestors":"medium","form-action":"medium","worker-src":"medium","object-src":null,"base-uri":null,"upgrade-insecure-requests":null,"report-to":null,"require-trusted-types-for":null,"trusted-types":null,sandbox:null}),ve=[{name:"default-src",fallback:null,fallback_of:["script-src","script-src-elem","script-src-attr","style-src","style-src-elem","style-src-attr","img-src","media-src","font-src","manifest-src","child-src","connect-src","worker-src","object-src"]},{name:"script-src",fallback:["default-src"],fallback_of:["script-src-elem","script-src-attr","worker-src"]},{name:"script-src-elem",fallback:["script-src","default-src"],fallback_of:null},{name:"script-src-attr",fallback:["script-src","default-src"],fallback_of:null},{name:"style-src",fallback:["default-src"],fallback_of:["style-src-elem","style-src-attr"]},{name:"style-src-elem",fallback:["style-src","default-src"],fallback_of:null},{name:"style-src-attr",fallback:["style-src","default-src"],fallback_of:null},{name:"img-src",fallback:["default-src"],fallback_of:null},{name:"media-src",fallback:["default-src"],fallback_of:null},{name:"font-src",fallback:["default-src"],fallback_of:null},{name:"manifest-src",fallback:["default-src"],fallback_of:null},{name:"child-src",fallback:["default-src"],fallback_of:["frame-src","worker-src"]},{name:"connect-src",fallback:["default-src"],fallback_of:null},{name:"frame-src",fallback:["child-src"],fallback_of:null},{name:"frame-ancestors",fallback:null,fallback_of:null},{name:"form-action",fallback:null,fallback_of:null},{name:"worker-src",fallback:["child-src","script-src","default-src"],fallback_of:null},{name:"object-src",fallback:["default-src"],fallback_of:null},{name:"base-uri",fallback:null,fallback_of:null},{name:"upgrade-insecure-requests",fallback:null,fallback_of:null},{name:"report-to",fallback:null,fallback_of:null},{name:"require-trusted-types-for",fallback:null,fallback_of:null},{name:"trusted-types",fallback:null,fallback_of:null},{name:"sandbox",fallback:null,fallback_of:null}];new Map(ve.map(c=>[c.name,c]));var Fe=d("<code> </code>"),Ee=d("<a><!></a>"),Me=d("<code> </code>");function z(c,o){pe(o,!0);const X=Ae.get(),Y=((m,l)=>{var b,y;if((b=l==null?void 0:l.src_json)!=null&&b.modules)for(const f of Object.keys(l.src_json.modules)){const s=l.src_json.modules[f],i=(y=s==null?void 0:s.declarations)==null?void 0:y.find(x=>x.name===m);if(i)return{src_module:s,declaration:i}}})(o.name,X);var Z=ae(),H=C(Z);{var R=m=>{var l=Ee();oe(l,()=>({...o.attrs,href:`${X.repo_url??""}/blob/main/src/lib/${Y.src_module.path??""}`}));var b=r(l);{var y=s=>{var i=ae(),x=C(i);de(x,()=>o.children),a(s,i)},f=s=>{var i=Fe();oe(i,()=>({...o.code_attrs}));var x=r(i,!0);t(i),V(()=>L(x,o.name)),a(s,i)};A(b,s=>{o.children?s(y):s(f,!1)})}t(l),a(m,l)},B=(m,l)=>{{var b=f=>{var s=ae(),i=C(s);de(i,()=>o.children),a(f,s)},y=f=>{var s=Me();oe(s,()=>({...o.code_attrs}));var i=r(s,!0);t(s),V(()=>L(i,o.name)),a(f,s)};A(m,f=>{o.children?f(b):f(y,!1)},l)}};A(H,m=>{Y?m(R):m(B,!1)})}a(c,Z),_e()}var Oe=d("<td>No trust - used for directives that don't support sources</td>"),Ne=d("<td>Passive resources only - no script execution, no styling or UI control</td>"),Le=d(`<td>Content that may affect layout, styling, or embed external browsing contexts, but
								cannot directly run code in the page's JS execution environment</td>`),Re=d("<td>Sources that can execute arbitrary code in the page's context</td>"),Be=d("<tr><td><!></td><!><td><code> </code></td></tr>"),De=d(`<!> <p>Fuz provides an optional CSP abstraction with three trust levels (of type <!>) with tiers of escalating risk and implied permission. Sources can opt-in to blanket
			permissions at a specific level:</p> <!> <table><thead><tr><th class="white_space_nowrap">trust level</th><th>what it means</th><th>configured by <!></th></tr></thead><tbody></tbody></table> <p>The trust system introduces opt-in abstraction and indirection, and a downside of the design
			is that it encourages over-permissioning at each individual tier. The maintainers currently
			feel that this granularity with 3 tiers offers an intuitive base that gets most of the
			important questions right most of the time for most users, and additional safeguards are
			available for those that want tighter control or less chance of error.</p>`,1),Ue=d(`<!> <p>The CSP helpers have a convenient, declarative API for defining directives per source. These
			override any defaults, and unlike <code>trust</code>, the <code>directives</code> do not depend
			on an abstraction layer, so WYSIWYG.</p> <!> <p>Explicit directives are additive with the trust system. For example, a source with <code>trust: 'low'</code> would normally not be allowed for <code>connect-src</code>, but you
			can explicitly permit this by including <code>connect-src</code> in the directives array.</p> <!>`,1),We=d("<!> <p>The options <code>value_defaults_base</code> (defaults to <!>) and <code>required_trust_defaults_base</code> (defaults to <!>) afford full control over defaults:</p> <!>",1),Ye=d("<tr><td> </td><td> </td><td> </td></tr>"),He=d(`<!> <p>The exported <!> has JSON data about the <!>.
			Fuz omits deprecated directives.</p> <table><thead><tr><th>directive</th><th>fallback</th><th>fallback of</th></tr></thead><tbody></tbody></table>`,1),Je=d(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <!> helper. Fuz also provides related helpers, types, and
			CSP data.</p> <p>The goal is to provide a simple trust modeling system that balances safety+security+privacy
			with ergonomics, helping users maintain secure policies without unhelpful burden or
			restriction. It's restrictive by default and easy to set granular overrides, and there's
			tiered grants for convenience.</p> <p>Example usage:</p> <!> <p>Auditability and transparency are key concerns for the API, but some features are designed to
			help you to trade away some directness for ergonomics, with the idea that we make it easy for
			nonexpert users to safely configure basic scenarios, and advanced users can opt into using the
			API with full declarative transparency (and more verbosity and information load).</p> <p>Fuz defines an optional system with three levels of trust/risk/sensitivity (low/medium/high, <!>) that can be configured for each trusted source to give blanket permissions at a specified
			tier. Granular overrides are straightforward and declarative.</p> <p>I'm trying to design for full customizability with clear, intuitive boundaries with escalating
			security and privacy implications. Fuz includes a debatable set of defaults, and input is
			appreciated to help tune the tradeoffs.</p></section> <!> <!> <!> <!> <aside>For more, see the <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.ts">source code</a> and <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.test.ts">tests</a>. The API
		feels near-complete, and includes full customization of the default directive values and trust
		levels. Some details may change and input is welcome.</aside>`,1);function ot(c,o){pe(o,!0);const ce=qe("csp");ze(c,{get tome(){return ce},children:(Y,Z)=>{var H=Je(),R=C(H),B=r(R),m=e(r(B),3);me(m,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(g,J)=>{h();var u=ue("Content Security Policies");a(g,u)},$$slots:{default:!0}});var l=e(m,2);z(l,{name:"create_csp_directives"}),h(),t(B);var b=e(B,6);N(b,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

// Create the default CSP with no trusted sources except 'self' and some sensible fallbacks.
// This tries to balance security and privacy with usability,
// helping nonexperts write secure policies while still supporting advanced users.
// More later on the details of the defaults.
const csp = create_csp_directives();
// Use in svelte.config.js:
// export default {kit: {csp}}

// Create a CSP with some trusted sources, using Fuz's CSP default trust levels:
export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	// Trust in yourself:
	{source: 'https://my.domain/', trust: 'high'},
	// No scripting allowed on these subdomains:
	{source: 'https://*.my.domain/', trust: 'medium'}, 
	// Low but allow scripting:
	{source: 'https://me.github.io/', trust: 'low', directives: ['script-src-elem']},
];
const csp = create_csp_directives({
  trusted_sources: my_csp_trusted_sources,
});

// Create a CSP that opts out of using Fuz's trust abstraction:
create_csp_directives({
	directives: {
		'img-src': ['self', 'https://*.my.domain/'],
		// ...your explicit directives
	},
	// Simply omit \`trusted_sources\`,
	// but note the above directives extend the base defaults.
});

// Create a CSP with no hidden base defaults,
// so it's fully declarative and explicit,
// like not using Fuz's CSP helpers at all:
const precise_csp = create_csp_directives({
	value_defaults_base: null,
	required_trust_defaults_base: null,
	value_defaults: {
		'img-src': ['self', 'https://my.domain/'],
		'connect-src': ['self', 'https://my.domain/'],
	},
});
// assert.equal(precise_csp, {
// 	'img-src': ['self', 'https://my.domain/'],
// 	'connect-src': ['self', 'https://my.domain/'],
// });

// Transform/extend directives by passing a function:
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

		// Returning \`undefined\` or \`null\` removes the directive,
		// all other values are passed through to SvelteKit.
  },
});`,lang:"ts"});var y=e(b,4),f=e(r(y));z(f,{name:"Csp_Trust_Level"}),h(),t(y),h(2),t(R);var s=e(R,2);K(s,{children:(g,J)=>{var u=De(),p=C(u);Q(p,{text:"Trust"});var n=e(p,2),k=e(r(n));z(k,{name:"Csp_Trust_Level"}),h(),t(n);var j=e(n,2);N(j,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // undefined \`trust\` - same as null
	{source: 'https://b.domain/', trust: null}, // no trust
	{source: 'https://c.domain/', trust: 'low'}, // passive resources only
	{source: 'https://d.domain/', trust: 'medium'}, // no script execution
	{source: 'https://e.domain/', trust: 'high'}, // arbitrary code execution
];`});var P=e(j,2),I=r(P),S=r(I),T=e(r(S),2),q=e(r(T));z(q,{name:"required_trust_defaults_base"}),t(T),t(S),t(I);var F=e(I);fe(F,20,()=>[null].concat(je),D=>D,(D,v)=>{var U=Be(),E=r(U),ee=r(E);const w=Te(()=>ie(v));N(ee,{get content(){return G(w)}}),t(E);var $=e(E);{var be=_=>{var W=Oe();a(_,W)},ye=(_,W)=>{{var ke=M=>{var te=Ne();a(M,te)},we=(M,te)=>{{var xe=O=>{var se=Le();a(O,se)},Se=(O,se)=>{{var Ce=re=>{var Pe=Re();a(re,Pe)};A(O,re=>{v==="high"&&re(Ce)},se)}};A(M,O=>{v==="medium"?O(xe):O(Se,!1)},te)}};A(_,M=>{v==="low"?M(ke):M(we,!1)},W)}};A($,_=>{v===null?_(be):_(ye,!1)})}var le=e($),ne=r(le),ge=r(ne,!0);t(ne),t(le),t(U),V(_=>L(ge,_),[()=>Object.entries(Ie).filter(([_,W])=>W===v).map(([_])=>ie(_)).join(", ")]),a(D,U)}),t(F),t(P),h(2),a(g,u)},$$slots:{default:!0}});var i=e(s,2);K(i,{children:(g,J)=>{var u=Ue(),p=C(u);Q(p,{text:"Explicit directives"});var n=e(p,4);N(n,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // No explicit directives, will use trust level if any
	{source: 'https://b.domain/', directives: null}, // Explicitly no directives
	{source: 'https://c.domain/', directives: ['img-src']}, // Only use for images
	{source: 'https://d.domain/', directives: ['connect-src', 'font-src']}, // Allow for connections and fonts
];`,lang:"ts"});var k=e(n,4);N(k,{content:`// Example: explicitly allowing a source for specific directives regardless of trust
export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	// Allow for specific directives (adds to what trust level allows):
	{source: 'https://a.domain/', trust: 'low', directives: ['connect-src']},
	
	// Trust-level provides baseline permissions, explicit directives add specific ones:
	{source: 'https://b.domain/', trust: 'medium', directives: ['script-src-elem']},
	
	// Both mechanisms work together - trust level provides baseline permissions
	// and explicit directives add specific permissions
];`,lang:"ts"}),a(g,u)},$$slots:{default:!0}});var x=e(i,2);K(x,{children:(g,J)=>{var u=We(),p=C(u);Q(p,{text:"Base defaults"});var n=e(p,2),k=e(r(n),3);z(k,{name:"csp_directive_value_defaults"});var j=e(k,4);z(j,{name:"csp_directive_required_trust_defaults"}),h(),t(n);var P=e(n,2);N(P,{content:`// Start with completely empty defaults (fully declarative):
const minimal_csp = create_csp_directives({
	// Set both base values to null or {} to reset defaults
	value_defaults_base: null, // or {} for same effect
	required_trust_defaults_base: null, // or {} for same effect
	
	// Define only what you need
	value_defaults: {
		'script-src': ['self'],
		'img-src': ['self', 'data:'],
	},
});
// The above is equivalent to not using Fuz's CSP abstraction at all:
assert.equal(minimal_csp, {
	'script-src': ['self'],
	'img-src': ['self', 'data:'],
});

// Use your own custom base value defaults:
create_csp_directives({
	// Define your own value defaults base
	value_defaults_base: {
		'default-src': ['none'],
		'script-src': ['self'],
		'img-src': ['self', 'data:'],
	},
	
	// Override specific directives in the base
	value_defaults: {
		'script-src': ['self', 'https://trusted.domain/'],
	}
});

// Set custom trust requirements for directives:
create_csp_directives({
	// Define your own trust requirements base
	required_trust_defaults_base: {
		'script-src': 'high',
		'connect-src': 'medium',
		'img-src': 'low',
	},
	
	// Source will be added based on your custom trust requirements
	trusted_sources: [
		// This source gets trusted for script-src and connect-src and no other directives.
		// If the \`required_trust_defaults_base\` were omitted, it would have the normal defaults.
		{source: 'https://somewhat.trusted.domain/', trust: 'medium'},
	]
});`,lang:"ts"}),a(g,u)},$$slots:{default:!0}});var he=e(x,2);K(he,{children:(g,J)=>{var u=He(),p=C(u);Q(p,{text:"Directive specs"});var n=e(p,2),k=e(r(n));z(k,{name:"csp_directive_specs"});var j=e(k,2);me(j,{path:"Web/HTTP/Reference/Headers/Content-Security-Policy",children:(S,T)=>{h();var q=ue("CSP directives");a(S,q)},$$slots:{default:!0}}),h(),t(n);var P=e(n,2),I=e(r(P));fe(I,21,()=>ve,S=>S.name,(S,T)=>{var q=Ye(),F=r(q),D=r(F,!0);t(F);var v=e(F),U=r(v,!0);t(v);var E=e(v),ee=r(E,!0);t(E),t(q),V((w,$)=>{L(D,G(T).name),L(U,w),L(ee,$)},[()=>{var w;return((w=G(T).fallback)==null?void 0:w.join(", "))||""},()=>{var w;return((w=G(T).fallback_of)==null?void 0:w.join(", "))||""}]),a(S,q)}),t(I),t(P),a(g,u)},$$slots:{default:!0}}),h(2),a(Y,H)},$$slots:{default:!0}}),_e()}export{ot as component};
