<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Breadcrumb_Example from '$routes/library/Breadcrumb/Breadcrumb_Example.svelte';

	const LIBRARY_ITEM_NAME = 'Breadcrumb';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<!-- TODO make this a generic data-driven helper -->
			<Code content={`import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';`} lang="ts" />
			<Code content={`<Breadcrumb />`} />
			<Breadcrumb />
		</section>
		<section>
			<Code content={`<Breadcrumb>🏠</Breadcrumb>`} />
			<Breadcrumb>🏠</Breadcrumb>
		</section>
		<section>
			<Code
				content={`<Breadcrumb\n\tpath="/a/b/c"\n\tselected_path="/a/b"\n\tbase_path="/library/Breadcrumb"\n>\n\t<span class="size_xl">🔡</span>\n\t<div slot="separator">.</div>\n</Breadcrumb>`}
			/>
			<Breadcrumb_Example selected_path="/a/b" />
		</section>
	</div>
</Tome_Detail>
