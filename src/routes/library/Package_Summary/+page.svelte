<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {parse_package_meta} from '$lib/package_meta.js';
	import {package_json, src_json} from '$routes/package.js';

	const LIBRARY_ITEM_NAME = 'Package_Summary';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<Code
				content={`import Package_Summary from\n\t'@ryanatkn/fuz/Package_Summary.svelte';`}
				lang="ts"
			/>
			<Code content={`<Package_Summary {pkg} />`} />
		</section>
	</div>
	<section>
		<Package_Summary {pkg} />
	</section>
</Tome_Detail>
