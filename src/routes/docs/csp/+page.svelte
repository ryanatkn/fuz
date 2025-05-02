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
			Auditability and transparency are key concerns for the API, but we trade away some of this for
			ergonomics, with the idea that we make it easy for users to safely configure basic scenarios,
			and advanced users can opt into using the API with full declarative transparency (and more
			verbosity and information load).
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
});`}
			lang="ts"
		/>
	</section>
	<section>
		<!-- TODO make this a header if it stabilizes -->
		<h3>Trust</h3>
		<p>
			Fuz's CSP abstraction provides three trust levels (<code>Csp_Trust_Level</code>) with
			escalating risk. Each directive has a default value that can be customized:
		</p>
		<ul>
			<li>
				<code>null</code> - No trust. This is used for directives that don't support sources.
			</li>
			<li>
				<code>'low'</code> - Passive resources only - no script execution, no styling or UI control
			</li>
			<li>
				<code>'medium'</code> - Content that may affect layout, styling, or embed external browsing contexts,
				but cannot directly run code in the page's JS execution environment or perform other high-risk
				actions
			</li>
			<li>
				<code>'high'</code> - Sources that can execute code in the page's context
			</li>
		</ul>
	</section>
	<section>
		<h3>Default directive trust levels</h3>
		<p>The defaults of option <code>required_trust_defaults</code>:</p>
		<table>
			<thead>
				<tr>
					<th class="white_space_nowrap">trust level</th>
					<th>directives</th>
				</tr>
			</thead>
			<tbody>
				{#each ([null] as Array<string | null>).concat(csp_trust_levels) as trust_level (trust_level)}
					<tr>
						<td>{trust_level === null ? 'null' : trust_level}</td>
						<td>
							{Object.entries(csp_directive_required_trust_defaults)
								.filter(([_, value]) => value === trust_level)
								.map(([key]) => key)
								.join(', ')}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
	<section>
		<h3>Directive specs</h3>
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
	</section>
	<aside>
		⚠️ Apologies, these docs are a work in progress, see the <a
			href="https://github.com/ryanatkn/fuz/blob/main/src/lib/csp.ts">source code</a
		> for now. The API feels near-complete, and includes full customization of the default directive
		values and trust levels. Some details may change and input is welcome.
	</aside>
</Tome_Content>
