<script lang="ts">
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import BreadcrumbExample from '$routes/library/Breadcrumb/BreadcrumbExample.svelte';

	const LIBRARY_ITEM_NAME = 'Breadcrumb';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose box">
		<section>
			<!-- TODO make this a generic data-driven helper -->
			<Code
				content={`import Breadcrumb from\n\t'@fuz.dev/fuz_library/Breadcrumb.svelte';`}
				lang="ts"
			/>
			<Code content={`<Breadcrumb />`} />
			<Breadcrumb />
		</section>
		<section>
			<Code content={`<Breadcrumb>🏠</Breadcrumb>`} />
			<Breadcrumb>🏠</Breadcrumb>
		</section>
		<section>
			<Code
				content={`<Breadcrumb\n\tpath="/a/b/c"\n\tselected_path="/a/b"\n\tbase_path="/library/Breadcrumb"\n>\n\t🔡\n\t<div slot="separator">.</div>\n</Breadcrumb>`}
			/>
			<BreadcrumbExample selected_path="/a/b" />
		</section>
	</div>
</Tome_Detail>

<style>
	section {
		/* TODO not sure about this -- maybe make it a util class? or a component? */
		padding: var(--spacing_2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
