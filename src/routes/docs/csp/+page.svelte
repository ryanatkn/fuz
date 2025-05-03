<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import {
		csp_directive_required_trust_defaults,
		csp_directive_specs,
		csp_trust_levels,
	} from '$lib/csp.js';
	import {render_value_to_string} from '$lib/helpers.js';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const LIBRARY_ITEM_NAME = 'csp';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO maybe subheadings, needs polish/reworking tho

	// TODO add a Svelte logo svg and make the below a special component that Mdn_Link also extends (Mdn_Link only exists because it has special inference logic for its href)
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<p>
			Fuz supports <a href="https://svelte.dev/docs/kit/configuration#csp">SvelteKit's config</a>
			for <Mdn_Link
				path="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy"
				>Content Security Policies</Mdn_Link
			> with the
			<code>create_csp_directives</code> helper. Fuz also provides related helpers, types, and CSP data.
		</p>
		<p>
			The goal is to provide a simple trust modeling system that balances safety+security+privacy
			with ergonomics in the hopes of finding a better global maximum, helping users maintain secure
			policies without unhelpful burden or restriction.
		</p>
		<p>
			Auditability and transparency are key concerns for the API, but some features are designed to
			help you to trade away some directness for ergonomics, with the idea that we make it easy for
			nonexpert users to safely configure basic scenarios, and advanced users can opt into using the
			API with full declarative transparency (and more verbosity and information load).
		</p>
		<p>
			Fuz defines three levels of trust/risk/sensitivity (low/medium/high, <code
				>Csp_Trust_Level</code
			>) that can be configured for each trusted source to give blanket permissions at a specified
			tier, and then granular overrides are straightforward and declarative.
		</p>
		<p>
			I'm trying to design for clear, intuitive boundaries with escalating security and privacy
			implications. Fuz includes a debatable set of defaults, and input is appreciated to help tune
			the tradeoffs.
		</p>
		<!-- TODO make this a generic data-driven helper -->
		<Code
			content={`import {create_csp_directives, type Csp_Source_Spec} from '@ryanatkn/fuz/csp.js';

// Create the default CSP with no trusted sources except 'self'.
// This tries to balance security and privacy with usability,
// helping nonexperts write secure policies while still supporting advanced users.
// More later on the details of the defaults.
const csp = create_csp_directives();

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
const csp = create_csp_directives({
	directives: {
		'img-src': ['self', 'https://*.my.domain/'],
		// [your explicit directives]
	},
	// Simply omit \`trusted_sources\`,
	// but note the above directives extend the base defaults.
});

// Create a CSP with no hidden defaults, fully declarative,
// like not using Fuz's CSP abstraction at all:
const csp = create_csp_directives({
	value_defaults_base: null,
	required_trust_defaults_base: null,
	value_defaults: {
		'img-src': ['self', 'https://my.domain/'],
		'connect-src': ['self', 'https://my.domain/'],
	},
});

// You can also transform directives by passing a function:
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
		// all other values are passed through to SvelteKit
  },
});`}
			lang="ts"
		/>
	</section>

	<Tome_Section>
		<Tome_Section_Header text="Trust" />
		<!-- TODO make this a header if it stabilizes -->
		<p>
			Fuz's CSP abstraction provides three trust levels (of type <code>Csp_Trust_Level</code>) with
			escalating risk. Each directive has a default value that can be customized.
		</p>
		<Code
			content={`export const my_csp_trusted_sources: Array<Csp_Source_Spec> = [
	{source: 'https://a.domain/'}, // undefined \`trust\` - same as null
	{source: 'https://b.domain/', trust: null}, // no trust
	{source: 'https://c.domain/', trust: 'low'}, // passive resources only
	{source: 'https://d.domain/', trust: 'medium'}, // no script execution
	{source: 'https://e.domain/', trust: 'high'}, // arbitrary code execution
];`}
		/>
		<table>
			<thead>
				<tr>
					<th class="white_space_nowrap">trust level</th>
					<th>what it means</th>
					<th>configured by <code>required_trust_defaults_base</code></th>
				</tr>
			</thead>
			<tbody>
				{#each ([null] as Array<string | null>).concat(csp_trust_levels) as trust_level (trust_level)}
					<tr>
						<td><Code content={render_value_to_string(trust_level)} /></td>
						{#if trust_level === null}
							<td>No trust - used for directives that don't support sources</td>
						{:else if trust_level === 'low'}
							<td>Passive resources only - no script execution, no styling or UI control</td>
						{:else if trust_level === 'medium'}
							<td
								>Content that may affect layout, styling, or embed external browsing contexts, but
								cannot directly run code in the page's JS execution environment</td
							>
						{:else if trust_level === 'high'}
							<td>Sources that can execute arbitrary code in the page's context</td>
						{/if}
						<td>
							<!-- TODO convert to `Code`, needs a layout fix after Moss upgrade -->
							<code
								>{Object.entries(csp_directive_required_trust_defaults)
									.filter(([_, value]) => value === trust_level)
									.map(([key]) => render_value_to_string(key))
									.join(', ')}</code
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Base defaults" />
		<p>
			The options <code>value_defaults_base</code> and <code>required_trust_defaults_base</code> afford
			full control over defaults:
		</p>

		<Code
			content={`// Start with completely empty defaults (fully declarative):
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
});`}
			lang="ts"
		/>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Directive specs" />
		<p>
			The exported <code>csp_directive_specs</code> has JSON data about the CSP directives. Fuz omits
			deprecated directives.
		</p>
		<table>
			<thead>
				<tr>
					<th>directive</th>
					<th>fallback</th>
					<th>fallback of</th>
				</tr>
			</thead>
			<tbody>
				{#each csp_directive_specs as spec (spec.name)}
					<tr>
						<td>{spec.name}</td>
						<td>{spec.fallback?.join(', ') || ''}</td>
						<td>{spec.fallback_of?.join(', ') || ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</Tome_Section>
	<aside>
		For more, see the <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.ts"
			>source code</a
		>. The API feels near-complete, and includes full customization of the default directive values
		and trust levels. Some details may change and input is welcome.
	</aside>
</Tome_Content>
