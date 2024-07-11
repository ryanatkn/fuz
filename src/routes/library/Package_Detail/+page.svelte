<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Package_Detail from '$lib/Package_Detail.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_pkg} from '$routes/pkg.js';

	const LIBRARY_ITEM_NAME = 'Package_Detail';
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
		<Code content={`import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';`} lang="ts" />
		<Code content={`<Package_Detail {pkg} />`} />
	</section>
	<section>
		<Package_Detail {pkg} />
	</section>
</Tome_Detail>
