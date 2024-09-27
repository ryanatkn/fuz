<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Package_Detail from '$lib/Package_Detail.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import {pkg_context} from '$routes/pkg.js';

	const LIBRARY_ITEM_NAME = 'Package_Detail';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const pkg = pkg_context.get();
</script>

<Tome_Content {tome}>
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
</Tome_Content>
