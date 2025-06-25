import{c as oe,a as r,t as u,k as ue}from"../chunks/CiDQTsPF.js";import{p as _e,f as C,a as ve,c as s,r as t,t as H,s as e,V as g,g as V,u as Te}from"../chunks/BwMJFMlG.js";import{s as R}from"../chunks/DcJ6W0Cs.js";import{i as A}from"../chunks/OnAfY6hx.js";import{e as fe}from"../chunks/X5ifSRV2.js";import{C as L}from"../chunks/BEQQKOKv.js";import{g as qe}from"../chunks/DVCD0T87.js";import{T as ze}from"../chunks/B4FUr1Wa.js";import{M as me}from"../chunks/ZIUhunym.js";import{T as Q,a as X}from"../chunks/DHmZm6fS.js";import{a as ie,s as pe}from"../chunks/CXdsb7cp.js";import{p as Ae}from"../chunks/hJeBd68y.js";const ce=c=>{if(c===null)return"null";if(c===void 0)return"undefined";const a=typeof c;return a==="string"?`'${c}'`:a==="number"||a==="boolean"?c+"":Array.isArray(c)?`[${c.map(ce).join(", ")}]`:a==="object"?JSON.stringify(c):c+""},je=Object.freeze(["low","medium","high"]),Ie=Object.freeze({"default-src":null,"script-src":"high","script-src-elem":"high","script-src-attr":null,"style-src":"medium","style-src-elem":"medium","style-src-attr":"medium","img-src":"low","media-src":"low","font-src":"low","manifest-src":null,"child-src":null,"connect-src":"medium","frame-src":"medium","frame-ancestors":"medium","form-action":"medium","worker-src":"medium","object-src":null,"base-uri":null,"upgrade-insecure-requests":null,"report-to":null,"require-trusted-types-for":null,"trusted-types":null,sandbox:null}),he=[{name:"default-src",fallback:null,fallback_of:["script-src","script-src-elem","script-src-attr","style-src","style-src-elem","style-src-attr","img-src","media-src","font-src","manifest-src","child-src","connect-src","worker-src","object-src"]},{name:"script-src",fallback:["default-src"],fallback_of:["script-src-elem","script-src-attr","worker-src"]},{name:"script-src-elem",fallback:["script-src","default-src"],fallback_of:null},{name:"script-src-attr",fallback:["script-src","default-src"],fallback_of:null},{name:"style-src",fallback:["default-src"],fallback_of:["style-src-elem","style-src-attr"]},{name:"style-src-elem",fallback:["style-src","default-src"],fallback_of:null},{name:"style-src-attr",fallback:["style-src","default-src"],fallback_of:null},{name:"img-src",fallback:["default-src"],fallback_of:null},{name:"media-src",fallback:["default-src"],fallback_of:null},{name:"font-src",fallback:["default-src"],fallback_of:null},{name:"manifest-src",fallback:["default-src"],fallback_of:null},{name:"child-src",fallback:["default-src"],fallback_of:["frame-src","worker-src"]},{name:"connect-src",fallback:["default-src"],fallback_of:null},{name:"frame-src",fallback:["child-src"],fallback_of:null},{name:"frame-ancestors",fallback:null,fallback_of:null},{name:"form-action",fallback:null,fallback_of:null},{name:"worker-src",fallback:["child-src","script-src","default-src"],fallback_of:null},{name:"object-src",fallback:["default-src"],fallback_of:null},{name:"base-uri",fallback:null,fallback_of:null},{name:"upgrade-insecure-requests",fallback:null,fallback_of:null},{name:"report-to",fallback:null,fallback_of:null},{name:"require-trusted-types-for",fallback:null,fallback_of:null},{name:"trusted-types",fallback:null,fallback_of:null},{name:"sandbox",fallback:null,fallback_of:null}];new Map(he.map(c=>[c.name,c]));var Fe=u("<code> </code>"),Ee=u("<a><!></a>"),Me=u("<code> </code>");function z(c,a){_e(a,!0);const Z=Ae.get(),J=((p,l)=>{var b,k;if((b=l==null?void 0:l.src_json)!=null&&b.modules)for(const m of Object.keys(l.src_json.modules)){const o=l.src_json.modules[m],i=(k=o==null?void 0:o.declarations)==null?void 0:k.find(n=>n.name===p);if(i)return{src_module:o,declaration:i}}})(a.name,Z);var ee=oe(),$=C(ee);{var B=p=>{var l=Ee();let b;var k=s(l);{var m=i=>{var n=oe(),j=C(n);pe(j,()=>a.children),r(i,n)},o=i=>{var n=Fe();let j;var _=s(n,!0);t(n),H(()=>{j=ie(n,j,{...a.code_attrs}),R(_,a.name)}),r(i,n)};A(k,i=>{a.children?i(m):i(o,!1)})}t(l),H(()=>b=ie(l,b,{...a.attrs,href:`${Z.repo_url??""}/blob/main/src/lib/${J.src_module.path??""}`})),r(p,l)},D=(p,l)=>{{var b=m=>{var o=oe(),i=C(o);pe(i,()=>a.children),r(m,o)},k=m=>{var o=Me();let i;var n=s(o,!0);t(o),H(()=>{i=ie(o,i,{...a.code_attrs}),R(n,a.name)}),r(m,o)};A(p,m=>{a.children?m(b):m(k,!1)},l)}};A($,p=>{J?p(B):p(D,!1)})}r(c,ee),ve()}var Oe=u("<td>No trust - used for directives that don't support sources</td>"),Ne=u("<td>Passive resources only - no script execution, no styling or UI control</td>"),Le=u(`<td>Content that may affect layout, styling, or embed external browsing contexts, but
								cannot directly run code in the page's JS execution environment</td>`),Re=u("<td>Sources that can execute arbitrary code in the page's context</td>"),Be=u("<tr><td><!></td><!><td><code> </code></td></tr>"),De=u(`<!> <p>Fuz provides an optional CSP abstraction with three trust levels (of type <!>) with tiers of escalating risk and implied permission. Sources can opt-in to blanket
			permissions at a specific level:</p> <!> <table><thead><tr><th class="white_space_nowrap">trust level</th><th>what it means</th><th>configured by <!></th></tr></thead><tbody></tbody></table> <p>The trust system introduces opt-in abstraction and indirection, and a downside of the design
			is that it encourages over-permissioning at each individual tier. The maintainers currently
			feel that this granularity with 3 tiers offers an intuitive base that gets most of the
			important questions right most of the time for most users, and additional safeguards are
			available for those that want tighter control or less chance of error.</p>`,1),Ue=u(`<!> <p>The CSP helpers have a convenient, declarative API for defining directives per source. These
			override any defaults, and unlike <code>trust</code>, the <code>directives</code> do not depend
			on an abstraction layer, so WYSIWYG.</p> <!> <p>Explicit directives are additive with the trust system. For example, a source with <code>trust: 'low'</code> would normally not be allowed for <code>connect-src</code>, but you
			can explicitly permit this by including <code>connect-src</code> in the directives array.</p> <!>`,1),We=u("<!> <p>The options <code>value_defaults_base</code> (defaults to <!>) and <code>required_trust_defaults_base</code> (defaults to <!>) afford full control over defaults:</p> <!>",1),Ye=u("<tr><td> </td><td> </td><td> </td></tr>"),He=u(`<!> <p>The exported <!> has JSON data about the <!>.
			Fuz omits deprecated directives.</p> <table><thead><tr><th>directive</th><th>fallback</th><th>fallback of</th></tr></thead><tbody></tbody></table>`,1),Je=u(`<section><p>Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a> for <!> with the <!> helper. Fuz also provides related helpers, types, and
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
		levels. Some details may change and input is welcome.</aside>`,1);function ot(c,a){_e(a,!0);const le=qe("csp");ze(c,{tome:le,children:(J,ee)=>{var $=Je(),B=C($),D=s(B),p=e(s(D),3);me(p,{path:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy",children:(_,G)=>{g();var f=ue("Content Security Policies");r(_,f)},$$slots:{default:!0}});var l=e(p,2);z(l,{name:"create_csp_directives"}),g(),t(D);var b=e(D,6);L(b,{content:`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

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
});`,lang:"ts"});var k=e(b,4),m=e(s(k));z(m,{name:"Csp_Trust_Level"}),g(),t(k),g(2),t(B);var o=e(B,2);Q(o,{children:(_,G)=>{var f=De(),v=C(f);X(v,{text:"Trust"});var d=e(v,2),w=e(s(d));z(w,{name:"Csp_Trust_Level"}),g(),t(d);var I=e(d,2);L(I,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // undefined \`trust\` - same as null
	{source: 'https://b.domain/', trust: null}, // no trust
	{source: 'https://c.domain/', trust: 'low'}, // passive resources only
	{source: 'https://d.domain/', trust: 'medium'}, // no script execution
	{source: 'https://e.domain/', trust: 'high'}, // arbitrary code execution
];`});var P=e(I,2),F=s(P),S=s(F),T=e(s(S),2),q=e(s(T));z(q,{name:"required_trust_defaults_base"}),t(T),t(S),t(F);var E=e(F);fe(E,20,()=>[null].concat(je),U=>U,(U,y)=>{var W=Be(),M=s(W),te=s(M);const x=Te(()=>ce(y));L(te,{get content(){return V(x)}}),t(M);var K=e(M);{var be=h=>{var Y=Oe();r(h,Y)},ye=(h,Y)=>{{var ke=O=>{var se=Ne();r(O,se)},we=(O,se)=>{{var xe=N=>{var re=Le();r(N,re)},Se=(N,re)=>{{var Ce=ae=>{var Pe=Re();r(ae,Pe)};A(N,ae=>{y==="high"&&ae(Ce)},re)}};A(O,N=>{y==="medium"?N(xe):N(Se,!1)},se)}};A(h,O=>{y==="low"?O(ke):O(we,!1)},Y)}};A(K,h=>{y===null?h(be):h(ye,!1)})}var ne=e(K),de=s(ne),ge=s(de,!0);t(de),t(ne),t(W),H(h=>R(ge,h),[()=>Object.entries(Ie).filter(([h,Y])=>Y===y).map(([h])=>ce(h)).join(", ")]),r(U,W)}),t(E),t(P),g(2),r(_,f)},$$slots:{default:!0}});var i=e(o,2);Q(i,{children:(_,G)=>{var f=Ue(),v=C(f);X(v,{text:"Explicit directives"});var d=e(v,4);L(d,{content:`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // No explicit directives, will use trust level if any
	{source: 'https://b.domain/', directives: null}, // Explicitly no directives
	{source: 'https://c.domain/', directives: ['img-src']}, // Only use for images
	{source: 'https://d.domain/', directives: ['connect-src', 'font-src']}, // Allow for connections and fonts
];`,lang:"ts"});var w=e(d,4);L(w,{content:`// Example: explicitly allowing a source for specific directives regardless of trust
export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	// Allow for specific directives (adds to what trust level allows):
	{source: 'https://a.domain/', trust: 'low', directives: ['connect-src']},
	
	// Trust-level provides baseline permissions, explicit directives add specific ones:
	{source: 'https://b.domain/', trust: 'medium', directives: ['script-src-elem']},
	
	// Both mechanisms work together - trust level provides baseline permissions
	// and explicit directives add specific permissions
];`,lang:"ts"}),r(_,f)},$$slots:{default:!0}});var n=e(i,2);Q(n,{children:(_,G)=>{var f=We(),v=C(f);X(v,{text:"Base defaults"});var d=e(v,2),w=e(s(d),3);z(w,{name:"csp_directive_value_defaults"});var I=e(w,4);z(I,{name:"csp_directive_required_trust_defaults"}),g(),t(d);var P=e(d,2);L(P,{content:`// Start with completely empty defaults (fully declarative):
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
});`,lang:"ts"}),r(_,f)},$$slots:{default:!0}});var j=e(n,2);Q(j,{children:(_,G)=>{var f=He(),v=C(f);X(v,{text:"Directive specs"});var d=e(v,2),w=e(s(d));z(w,{name:"csp_directive_specs"});var I=e(w,2);me(I,{path:"Web/HTTP/Reference/Headers/Content-Security-Policy",children:(S,T)=>{g();var q=ue("CSP directives");r(S,q)},$$slots:{default:!0}}),g(),t(d);var P=e(d,2),F=e(s(P));fe(F,21,()=>he,S=>S.name,(S,T)=>{var q=Ye(),E=s(q),U=s(E,!0);t(E);var y=e(E),W=s(y,!0);t(y);var M=e(y),te=s(M,!0);t(M),t(q),H((x,K)=>{R(U,V(T).name),R(W,x),R(te,K)},[()=>{var x;return((x=V(T).fallback)==null?void 0:x.join(", "))||""},()=>{var x;return((x=V(T).fallback_of)==null?void 0:x.join(", "))||""}]),r(S,q)}),t(F),t(P),r(_,f)},$$slots:{default:!0}}),g(2),r(J,$)},$$slots:{default:!0}}),ve()}export{ot as component};
