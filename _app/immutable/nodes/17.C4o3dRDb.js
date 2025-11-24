import"../chunks/DsnmJJEf.js";import{p as Pe,c as Te,f as u,a as _,a8 as j,b as r,s as e,d as s,n,r as t,i as M,u as qe,t as ie,e as L,g as Y}from"../chunks/DFPGRpXC.js";import{e as ce}from"../chunks/BcAAJJP1.js";import{i as N}from"../chunks/B9dAxPDU.js";import{C as q}from"../chunks/DXFXhwc6.js";import{G as le}from"../chunks/d_ZV0u_C.js";import{g as Ae}from"../chunks/BusfL10R.js";import{T as ze}from"../chunks/rdoMrH9z.js";import{M as ne}from"../chunks/yz1BYdv7.js";import{T as O,a as R}from"../chunks/D1namrKV.js";import{I as y}from"../chunks/D6nxgtSf.js";const Ie=["low","medium","high"],Ee={"default-src":null,"script-src":"high","script-src-elem":"high","script-src-attr":null,"style-src":"medium","style-src-elem":"medium","style-src-attr":"medium","img-src":"low","media-src":"low","font-src":"low","manifest-src":null,"child-src":null,"connect-src":"medium","frame-src":"medium","frame-ancestors":"medium","form-action":"medium","worker-src":"medium","object-src":null,"base-uri":null,"upgrade-insecure-requests":null,"report-to":null,"require-trusted-types-for":null,"trusted-types":null,sandbox:null},de=[{name:"default-src",fallback:null,fallback_of:["script-src","script-src-elem","script-src-attr","style-src","style-src-elem","style-src-attr","img-src","media-src","font-src","manifest-src","child-src","connect-src","worker-src","object-src"]},{name:"script-src",fallback:["default-src"],fallback_of:["script-src-elem","script-src-attr","worker-src"]},{name:"script-src-elem",fallback:["script-src","default-src"],fallback_of:null},{name:"script-src-attr",fallback:["script-src","default-src"],fallback_of:null},{name:"style-src",fallback:["default-src"],fallback_of:["style-src-elem","style-src-attr"]},{name:"style-src-elem",fallback:["style-src","default-src"],fallback_of:null},{name:"style-src-attr",fallback:["style-src","default-src"],fallback_of:null},{name:"img-src",fallback:["default-src"],fallback_of:null},{name:"media-src",fallback:["default-src"],fallback_of:null},{name:"font-src",fallback:["default-src"],fallback_of:null},{name:"manifest-src",fallback:["default-src"],fallback_of:null},{name:"child-src",fallback:["default-src"],fallback_of:["frame-src","worker-src"]},{name:"connect-src",fallback:["default-src"],fallback_of:null},{name:"frame-src",fallback:["child-src"],fallback_of:null},{name:"frame-ancestors",fallback:null,fallback_of:null},{name:"form-action",fallback:null,fallback_of:null},{name:"worker-src",fallback:["child-src","script-src","default-src"],fallback_of:null},{name:"object-src",fallback:["default-src"],fallback_of:null},{name:"base-uri",fallback:null,fallback_of:null},{name:"upgrade-insecure-requests",fallback:null,fallback_of:null},{name:"report-to",fallback:null,fallback_of:null},{name:"require-trusted-types-for",fallback:null,fallback_of:null},{name:"trusted-types",fallback:null,fallback_of:null},{name:"sandbox",fallback:null,fallback_of:null}];new Map(de.map(o=>[o.name,o]));const H=o=>{if(o===null)return"null";if(o===void 0)return"undefined";const g=typeof o;return g==="string"?`'${o}'`:g==="number"||g==="boolean"?o+"":Array.isArray(o)?`[${o.map(H).join(", ")}]`:g==="object"?JSON.stringify(o):o+""};var Fe=u("<td>No trust - used for directives that don't support sources</td>"),je=u("<td>Passive resources only - no script execution, no styling or UI control</td>"),Me=u(`<td>Content that may affect layout, styling, or embed external browsing contexts, but
								cannot directly run code in the page's JS execution environment</td>`),Le=u("<td>Sources that can execute arbitrary code in the page's context</td>"),Ne=u("<tr><td><!></td><!><td><code> </code></td></tr>"),Oe=u(`<!> <p>Fuz provides an optional CSP abstraction with three trust levels (of type <!>) with tiers of escalating risk and implied permission. Sources can opt-in to blanket
			permissions at a specific level:</p> <!> <table><thead><tr><th class="white_space_nowrap">trust level</th><th>what it means</th><th>configured by <!></th></tr></thead><tbody></tbody></table> <p>The trust system introduces opt-in abstraction and indirection, and a downside of the design
			is that it encourages over-permissioning at each individual tier. The maintainers currently
			feel that this granularity with 3 tiers offers an intuitive base that gets most of the
			important questions right most of the time for most users, and additional safeguards are
			available for those that want tighter control or less chance of error.</p>`,1),Re=u(`<!> <p>The CSP helpers have a convenient, declarative API for defining directives per source. These
			override any defaults, and unlike <code>trust</code>, the <code>directives</code> do not depend
			on an abstraction layer, so WYSIWYG.</p> <!> <p>Explicit directives are additive with the trust system. For example, a source with <code>trust: 'low'</code> would normally not be allowed for <code>connect-src</code>, but you
			can explicitly permit this by including <code>connect-src</code> in the directives array.</p> <!>`,1),Be=u("<!> <p>The options <code>value_defaults_base</code> (defaults to <!>) and <code>required_trust_defaults_base</code> (defaults to <!>) afford full control over defaults:</p> <!>",1),De=u("<tr><td> </td><td> </td><td> </td></tr>"),Ge=u(`<!> <p>The exported <!> has JSON data about the <!>.
			Fuz omits deprecated directives.</p> <table><thead><tr><th>directive</th><th>fallback</th><th>fallback of</th></tr></thead><tbody></tbody></table>`,1),Ue=u(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <!> helper. Fuz also provides related helpers, types,
			and CSP data.</p> <p>The goal is to provide a simple trust modeling system that balances safety+security+privacy
			with ergonomics, helping users maintain secure policies without unhelpful burden or
			restriction. It's restrictive by default and easy to set granular overrides, and there's
			tiered grants for convenience.</p> <p>Example usage:</p> <!> <p>Auditability and transparency are key concerns for the API, but some features are designed to
			help you to trade away some directness for ergonomics, with the idea that we make it easy for
			nonexpert users to safely configure basic scenarios, and advanced users can opt into using the
			API with full declarative transparency (and more verbosity and information load).</p> <p>Fuz defines an optional system with three levels of trust/risk/sensitivity (low/medium/high, <!>) that can be configured for each trusted source to give blanket permissions at a specified
			tier. Granular overrides are straightforward and declarative.</p> <p>I'm trying to design for full customizability with clear, intuitive boundaries with escalating
			security and privacy implications. Fuz includes a debatable set of defaults, and input is
			appreciated to help tune the tradeoffs.</p></section> <!> <!> <!> <!> <aside>For more, see the <!> and <!>. The API
		feels near-complete, and includes full customization of the default directive values and trust
		levels. Some details may change and input is welcome.</aside>`,1);function at(o,g){Pe(g,!0);const ue=Ae("csp");ze(o,{get tome(){return ue},children:(fe,Ye)=>{var J=Ue(),B=_(J),D=s(B),K=e(s(D),3);ne(K,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(c,k)=>{n();var a=j("Content Security Policies");r(c,a)},$$slots:{default:!0}});var pe=e(K,2);y(pe,{name:"create_csp_directives"}),n(),t(D);var Q=e(D,6);q(Q,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

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
// assert.deepEqual(precise_csp, {
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
});`,lang:"ts"});var V=e(Q,4),me=e(s(V));y(me,{name:"Csp_Trust_Level"}),n(),t(V),n(2),t(B);var X=e(B,2);O(X,{children:(c,k)=>{var a=Oe(),d=_(a);R(d,{text:"Trust"});var i=e(d,2),p=e(s(i));y(p,{name:"Csp_Trust_Level"}),n(),t(i);var w=e(i,2);q(w,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // undefined \`trust\` - same as null
	{source: 'https://b.domain/', trust: null}, // no trust
	{source: 'https://c.domain/', trust: 'low'}, // passive resources only
	{source: 'https://d.domain/', trust: 'medium'}, // no script execution
	{source: 'https://e.domain/', trust: 'high'}, // arbitrary code execution
];`});var v=e(w,2),x=s(v),m=s(x),h=e(s(m),2),b=e(s(h));y(b,{name:"required_trust_defaults_base"}),t(h),t(m),t(x);var S=e(x);ce(S,20,()=>[null].concat(Ie),A=>A,(A,f)=>{var z=Ne(),$=s(z),G=s($);{let l=qe(()=>H(f));q(G,{get content(){return M(l)}})}t($);var I=e($);{var U=l=>{var C=Fe();r(l,C)},ve=l=>{var C=Y(),be=_(C);{var ye=P=>{var E=je();r(P,E)},ge=P=>{var E=Y(),ke=_(E);{var we=T=>{var F=Me();r(T,F)},xe=T=>{var F=Y(),Se=_(F);{var $e=W=>{var Ce=Le();r(W,Ce)};N(Se,W=>{f==="high"&&W($e)},!0)}r(T,F)};N(ke,T=>{f==="medium"?T(we):T(xe,!1)},!0)}r(P,E)};N(be,P=>{f==="low"?P(ye):P(ge,!1)},!0)}r(l,C)};N(I,l=>{f===null?l(U):l(ve,!1)})}var ae=e(I),oe=s(ae),he=s(oe,!0);t(oe),t(ae),t(z),ie(l=>L(he,l),[()=>Object.entries(Ee).filter(([l,C])=>C===f).map(([l])=>H(l)).join(", ")]),r(A,z)}),t(S),t(v),n(2),r(c,a)},$$slots:{default:!0}});var Z=e(X,2);O(Z,{children:(c,k)=>{var a=Re(),d=_(a);R(d,{text:"Explicit directives"});var i=e(d,4);q(i,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // No explicit directives, will use trust level if any
	{source: 'https://b.domain/', directives: null}, // Explicitly no directives
	{source: 'https://c.domain/', directives: ['img-src']}, // Only use for images
	{source: 'https://d.domain/', directives: ['connect-src', 'font-src']}, // Allow for connections and fonts
];`,lang:"ts"});var p=e(i,4);q(p,{content:`// Example: explicitly allowing a source for specific directives regardless of trust
export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	// Allow for specific directives (adds to what trust level allows):
	{source: 'https://a.domain/', trust: 'low', directives: ['connect-src']},
	
	// Trust-level provides baseline permissions, explicit directives add specific ones:
	{source: 'https://b.domain/', trust: 'medium', directives: ['script-src-elem']},
	
	// Both mechanisms work together - trust level provides baseline permissions
	// and explicit directives add specific permissions
];`,lang:"ts"}),r(c,a)},$$slots:{default:!0}});var ee=e(Z,2);O(ee,{children:(c,k)=>{var a=Be(),d=_(a);R(d,{text:"Base defaults"});var i=e(d,2),p=e(s(i),3);y(p,{name:"csp_directive_value_defaults"});var w=e(p,4);y(w,{name:"csp_directive_required_trust_defaults"}),n(),t(i);var v=e(i,2);q(v,{content:`// Start with completely empty defaults (fully declarative):
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
assert.deepEqual(minimal_csp, {
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
});`,lang:"ts"}),r(c,a)},$$slots:{default:!0}});var te=e(ee,2);O(te,{children:(c,k)=>{var a=Ge(),d=_(a);R(d,{text:"Directive specs"});var i=e(d,2),p=e(s(i));y(p,{name:"csp_directive_specs"});var w=e(p,2);ne(w,{path:"Web/HTTP/Reference/Headers/Content-Security-Policy",children:(m,h)=>{n();var b=j("CSP directives");r(m,b)},$$slots:{default:!0}}),n(),t(i);var v=e(i,2),x=e(s(v));ce(x,21,()=>de,m=>m.name,(m,h)=>{var b=De(),S=s(b),A=s(S,!0);t(S);var f=e(S),z=s(f,!0);t(f);var $=e(f),G=s($,!0);t($),t(b),ie((I,U)=>{L(A,M(h).name),L(z,I),L(G,U)},[()=>M(h).fallback?.join(", ")||"",()=>M(h).fallback_of?.join(", ")||""]),r(m,b)}),t(x),t(v),r(c,a)},$$slots:{default:!0}});var se=e(te,2),re=e(s(se));le(re,{path:"ryanatkn/fuz/blob/main/src/lib/csp.ts",children:(c,k)=>{n();var a=j("source code");r(c,a)},$$slots:{default:!0}});var _e=e(re,2);le(_e,{path:"ryanatkn/fuz/blob/main/src/lib/csp.test.ts",children:(c,k)=>{n();var a=j("tests");r(c,a)},$$slots:{default:!0}}),n(),t(se),r(fe,J)},$$slots:{default:!0}}),Te()}export{at as component};
