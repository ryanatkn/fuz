<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import PackageSummary from '$lib/PackageSummary.svelte';
	import TomeContent from '$lib/TomeContent.svelte';
	import {pkg_context} from '$lib/pkg.svelte.js';

	const LIBRARY_ITEM_NAME = 'PackageSummary';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const pkg = pkg_context.get();
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<TomeContent {tome}>
	<section>
		<p>
			This is a component related to <a
				href="https://github.com/ryanatkn/gro/blob/main/src/docs/package_json.md#public-packages"
				>Gro's public packages</a
			> features.
		</p>
		<Code
			content={`import PackageSummary from '@ryanatkn/fuz/PackageSummary.svelte';`}
			lang="ts"
		/>
		<Code content={`<PackageSummary {pkg} />`} />
	</section>
	<section>
		<PackageSummary {pkg} />
	</section>
</TomeContent>
