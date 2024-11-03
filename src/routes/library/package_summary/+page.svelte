<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import {pkg_context} from '$routes/pkg.js';

	const LIBRARY_ITEM_NAME = 'Package_Summary';
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
		<Code
			content={`import Package_Summary from '@ryanatkn/fuz/Package_Summary.svelte';`}
			lang="ts"
		/>
		<Code content={`<Package_Summary {pkg} />`} />
	</section>
	<section>
		<Package_Summary {pkg} />
	</section>
</Tome_Content>
