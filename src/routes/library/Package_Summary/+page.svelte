<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. I there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal` with `@ryanatkn/fuz_code` and `prismjs`.
	import Prism from 'prismjs';
	Prism;
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_pkg} from '$routes/pkg.js';

	const LIBRARY_ITEM_NAME = 'Package_Summary';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const pkg = get_pkg();
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			This is a component related to <a
				href="https://github.com/ryanatkn/gro/blob/main/src/lib/docs/package_json.md#public-packages"
				>Gro's public packages</a
			> features.
		</p>
		<Code
			content={`import Package_Summary from '@ryanatkn/fuz/Package_Summary.svelte';`}
			lang="ts"
		/>
		<Code content={`<Package_Summary {pkg} />`} />
	</section>
	<section>
		<Package_Summary {pkg} />
	</section>
</Tome_Detail>
