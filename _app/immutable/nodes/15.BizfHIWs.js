import"../chunks/DsnmJJEf.js";import{p as pe,e as A,a as m,b as r,c as _e,f as n,d as s,r as t,g as de,t as Z,aq as ue,s as e,ar as b,h as Q,u as Ae}from"../chunks/hvi78P_d.js";import{s as R}from"../chunks/DcnXoHJa.js";import{i as z}from"../chunks/b9UmUbIo.js";import{e as fe}from"../chunks/gGLiu_OD.js";import{C as L}from"../chunks/BK81am7X.js";import{g as ze}from"../chunks/CG7LzC5d.js";import{T as je}from"../chunks/BkUpF8Wi.js";import{M as me}from"../chunks/BPa6Dq2O.js";import{T as V,a as X}from"../chunks/uw0V68Cz.js";import{a as oe}from"../chunks/baBGA4xI.js";import{p as Ie}from"../chunks/Bsg9tvOT.js";const Fe=["low","medium","high"],Ee={"default-src":null,"script-src":"high","script-src-elem":"high","script-src-attr":null,"style-src":"medium","style-src-elem":"medium","style-src-attr":"medium","img-src":"low","media-src":"low","font-src":"low","manifest-src":null,"child-src":null,"connect-src":"medium","frame-src":"medium","frame-ancestors":"medium","form-action":"medium","worker-src":"medium","object-src":null,"base-uri":null,"upgrade-insecure-requests":null,"report-to":null,"require-trusted-types-for":null,"trusted-types":null,sandbox:null},ve=[{name:"default-src",fallback:null,fallback_of:["script-src","script-src-elem","script-src-attr","style-src","style-src-elem","style-src-attr","img-src","media-src","font-src","manifest-src","child-src","connect-src","worker-src","object-src"]},{name:"script-src",fallback:["default-src"],fallback_of:["script-src-elem","script-src-attr","worker-src"]},{name:"script-src-elem",fallback:["script-src","default-src"],fallback_of:null},{name:"script-src-attr",fallback:["script-src","default-src"],fallback_of:null},{name:"style-src",fallback:["default-src"],fallback_of:["style-src-elem","style-src-attr"]},{name:"style-src-elem",fallback:["style-src","default-src"],fallback_of:null},{name:"style-src-attr",fallback:["style-src","default-src"],fallback_of:null},{name:"img-src",fallback:["default-src"],fallback_of:null},{name:"media-src",fallback:["default-src"],fallback_of:null},{name:"font-src",fallback:["default-src"],fallback_of:null},{name:"manifest-src",fallback:["default-src"],fallback_of:null},{name:"child-src",fallback:["default-src"],fallback_of:["frame-src","worker-src"]},{name:"connect-src",fallback:["default-src"],fallback_of:null},{name:"frame-src",fallback:["child-src"],fallback_of:null},{name:"frame-ancestors",fallback:null,fallback_of:null},{name:"form-action",fallback:null,fallback_of:null},{name:"worker-src",fallback:["child-src","script-src","default-src"],fallback_of:null},{name:"object-src",fallback:["default-src"],fallback_of:null},{name:"base-uri",fallback:null,fallback_of:null},{name:"upgrade-insecure-requests",fallback:null,fallback_of:null},{name:"report-to",fallback:null,fallback_of:null},{name:"require-trusted-types-for",fallback:null,fallback_of:null},{name:"trusted-types",fallback:null,fallback_of:null},{name:"sandbox",fallback:null,fallback_of:null}];new Map(ve.map(c=>[c.name,c]));const ie=c=>{if(c===null)return"null";if(c===void 0)return"undefined";const a=typeof c;return a==="string"?`'${c}'`:a==="number"||a==="boolean"?c+"":Array.isArray(c)?`[${c.map(ie).join(", ")}]`:a==="object"?JSON.stringify(c):c+""};var Me=n("<code> </code>"),Ne=n("<a><!></a>"),Oe=n("<code> </code>");function q(c,a){pe(a,!0);const ee=Ie.get(),Y=((p,d)=>{if(d?.src_json?.modules)for(const w of Object.keys(d.src_json.modules)){const y=d.src_json.modules[w],x=y?.declarations?.find(o=>o.name===p);if(x)return{src_module:y,declaration:x}}})(a.name,ee);var te=A(),$=m(te);{var B=p=>{var d=Ne();oe(d,()=>({...a.attrs,href:`${ee.repo_url??""}/blob/main/src/lib/${Y.src_module.path??""}`}));var w=s(d);{var y=o=>{var i=A(),v=m(i);de(v,()=>a.children),r(o,i)},x=o=>{var i=Me();oe(i,()=>({...a.code_attrs}));var v=s(i,!0);t(i),Z(()=>R(v,a.name)),r(o,i)};z(w,o=>{a.children?o(y):o(x,!1)})}t(d),r(p,d)},D=p=>{var d=A(),w=m(d);{var y=o=>{var i=A(),v=m(i);de(v,()=>a.children),r(o,i)},x=o=>{var i=Oe();oe(i,()=>({...a.code_attrs}));var v=s(i,!0);t(i),Z(()=>R(v,a.name)),r(o,i)};z(w,o=>{a.children?o(y):o(x,!1)},!0)}r(p,d)};z($,p=>{Y?p(B):p(D,!1)})}r(c,te),_e()}var Le=n("<td>No trust - used for directives that don't support sources</td>"),Re=n("<td>Passive resources only - no script execution, no styling or UI control</td>"),Be=n(`<td>Content that may affect layout, styling, or embed external browsing contexts, but
								cannot directly run code in the page's JS execution environment</td>`),De=n("<td>Sources that can execute arbitrary code in the page's context</td>"),Ue=n("<tr><td><!></td><!><td><code> </code></td></tr>"),We=n(`<!> <p>Fuz provides an optional CSP abstraction with three trust levels (of type <!>) with tiers of escalating risk and implied permission. Sources can opt-in to blanket
			permissions at a specific level:</p> <!> <table><thead><tr><th class="white_space_nowrap">trust level</th><th>what it means</th><th>configured by <!></th></tr></thead><tbody></tbody></table> <p>The trust system introduces opt-in abstraction and indirection, and a downside of the design
			is that it encourages over-permissioning at each individual tier. The maintainers currently
			feel that this granularity with 3 tiers offers an intuitive base that gets most of the
			important questions right most of the time for most users, and additional safeguards are
			available for those that want tighter control or less chance of error.</p>`,1),Ye=n(`<!> <p>The CSP helpers have a convenient, declarative API for defining directives per source. These
			override any defaults, and unlike <code>trust</code>, the <code>directives</code> do not depend
			on an abstraction layer, so WYSIWYG.</p> <!> <p>Explicit directives are additive with the trust system. For example, a source with <code>trust: 'low'</code> would normally not be allowed for <code>connect-src</code>, but you
			can explicitly permit this by including <code>connect-src</code> in the directives array.</p> <!>`,1),$e=n("<!> <p>The options <code>value_defaults_base</code> (defaults to <!>) and <code>required_trust_defaults_base</code> (defaults to <!>) afford full control over defaults:</p> <!>",1),He=n("<tr><td> </td><td> </td><td> </td></tr>"),Je=n(`<!> <p>The exported <!> has JSON data about the <!>.
			Fuz omits deprecated directives.</p> <table><thead><tr><th>directive</th><th>fallback</th><th>fallback of</th></tr></thead><tbody></tbody></table>`,1),Ge=n(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <!> helper. Fuz also provides related helpers, types, and
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
		levels. Some details may change and input is welcome.</aside>`,1);function ct(c,a){pe(a,!0);const ce=ze("csp");je(c,{get tome(){return ce},children:(Y,te)=>{var $=Ge(),B=m($),D=s(B),p=e(s(D),3);me(p,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(g,H)=>{b();var u=ue("Content Security Policies");r(g,u)},$$slots:{default:!0}});var d=e(p,2);q(d,{name:"create_csp_directives"}),b(),t(D);var w=e(D,6);L(w,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

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
});`,lang:"ts"});var y=e(w,4),x=e(s(y));q(x,{name:"Csp_Trust_Level"}),b(),t(y),b(2),t(B);var o=e(B,2);V(o,{children:(g,H)=>{var u=We(),_=m(u);X(_,{text:"Trust"});var l=e(_,2),k=e(s(l));q(k,{name:"Csp_Trust_Level"}),b(),t(l);var j=e(l,2);L(j,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // undefined \`trust\` - same as null
	{source: 'https://b.domain/', trust: null}, // no trust
	{source: 'https://c.domain/', trust: 'low'}, // passive resources only
	{source: 'https://d.domain/', trust: 'medium'}, // no script execution
	{source: 'https://e.domain/', trust: 'high'}, // arbitrary code execution
];`});var C=e(j,2),I=s(C),S=s(I),P=e(s(S),2),T=e(s(P));q(T,{name:"required_trust_defaults_base"}),t(P),t(S),t(I);var F=e(I);fe(F,20,()=>[null].concat(Fe),U=>U,(U,h)=>{var W=Ue(),E=s(W),re=s(E);{let f=Ae(()=>ie(h));L(re,{get content(){return Q(f)}})}t(E);var J=e(E);{var se=f=>{var M=Le();r(f,M)},be=f=>{var M=A(),ge=m(M);{var ke=N=>{var G=Re();r(N,G)},we=N=>{var G=A(),xe=m(G);{var Se=O=>{var K=Be();r(O,K)},Ce=O=>{var K=A(),Pe=m(K);{var Te=ae=>{var qe=De();r(ae,qe)};z(Pe,ae=>{h==="high"&&ae(Te)},!0)}r(O,K)};z(xe,O=>{h==="medium"?O(Se):O(Ce,!1)},!0)}r(N,G)};z(ge,N=>{h==="low"?N(ke):N(we,!1)},!0)}r(f,M)};z(J,f=>{h===null?f(se):f(be,!1)})}var le=e(J),ne=s(le),ye=s(ne,!0);t(ne),t(le),t(W),Z(f=>R(ye,f),[()=>Object.entries(Ee).filter(([f,M])=>M===h).map(([f])=>ie(f)).join(", ")]),r(U,W)}),t(F),t(C),b(2),r(g,u)},$$slots:{default:!0}});var i=e(o,2);V(i,{children:(g,H)=>{var u=Ye(),_=m(u);X(_,{text:"Explicit directives"});var l=e(_,4);L(l,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // No explicit directives, will use trust level if any
	{source: 'https://b.domain/', directives: null}, // Explicitly no directives
	{source: 'https://c.domain/', directives: ['img-src']}, // Only use for images
	{source: 'https://d.domain/', directives: ['connect-src', 'font-src']}, // Allow for connections and fonts
];`,lang:"ts"});var k=e(l,4);L(k,{content:`// Example: explicitly allowing a source for specific directives regardless of trust
export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	// Allow for specific directives (adds to what trust level allows):
	{source: 'https://a.domain/', trust: 'low', directives: ['connect-src']},
	
	// Trust-level provides baseline permissions, explicit directives add specific ones:
	{source: 'https://b.domain/', trust: 'medium', directives: ['script-src-elem']},
	
	// Both mechanisms work together - trust level provides baseline permissions
	// and explicit directives add specific permissions
];`,lang:"ts"}),r(g,u)},$$slots:{default:!0}});var v=e(i,2);V(v,{children:(g,H)=>{var u=$e(),_=m(u);X(_,{text:"Base defaults"});var l=e(_,2),k=e(s(l),3);q(k,{name:"csp_directive_value_defaults"});var j=e(k,4);q(j,{name:"csp_directive_required_trust_defaults"}),b(),t(l);var C=e(l,2);L(C,{content:`// Start with completely empty defaults (fully declarative):
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
});`,lang:"ts"}),r(g,u)},$$slots:{default:!0}});var he=e(v,2);V(he,{children:(g,H)=>{var u=Je(),_=m(u);X(_,{text:"Directive specs"});var l=e(_,2),k=e(s(l));q(k,{name:"csp_directive_specs"});var j=e(k,2);me(j,{path:"Web/HTTP/Reference/Headers/Content-Security-Policy",children:(S,P)=>{b();var T=ue("CSP directives");r(S,T)},$$slots:{default:!0}}),b(),t(l);var C=e(l,2),I=e(s(C));fe(I,21,()=>ve,S=>S.name,(S,P)=>{var T=He(),F=s(T),U=s(F,!0);t(F);var h=e(F),W=s(h,!0);t(h);var E=e(h),re=s(E,!0);t(E),t(T),Z((J,se)=>{R(U,Q(P).name),R(W,J),R(re,se)},[()=>Q(P).fallback?.join(", ")||"",()=>Q(P).fallback_of?.join(", ")||""]),r(S,T)}),t(I),t(C),r(g,u)},$$slots:{default:!0}}),b(2),r(Y,$)},$$slots:{default:!0}}),_e()}export{ct as component};
