<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import {get_tome} from '$lib/tome.js';
	import Package_Detail from '$lib/Package_Detail.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {package_json, src_json} from '$routes/package.js';

	const LIBRARY_ITEM_NAME = 'Package_Detail';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<Tome_Detail {tome}>
	<section>
		<Code content={`import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';`} lang="ts" />
		<Code content={`<Package_Detail {pkg} />`} />
	</section>
	<section>
		<Package_Detail {pkg} />
	</section>
</Tome_Detail>
