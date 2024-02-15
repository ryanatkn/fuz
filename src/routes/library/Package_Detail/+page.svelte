<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Package_Detail from '$lib/Package_Detail.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {parse_package_meta} from '$lib/package_meta.js';
	import {package_json, src_json} from '$routes/package.js';

	const LIBRARY_ITEM_NAME = 'Package_Detail';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<Code
				content={`import Package_Detail from\n\t'@fuz.dev/fuz_library/Package_Detail.svelte';`}
				lang="ts"
			/>
			<Code content={`<Package_Detail {pkg} />`} />
		</section>
	</div>
	<section class="width_full">
		<div class="box panel padded_md">
			<Package_Detail {pkg} />
		</div>
	</section>
</Tome_Detail>
