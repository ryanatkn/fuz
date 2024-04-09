<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Breadcrumb_Example from '$routes/library/Breadcrumb/Breadcrumb_Example.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'Breadcrumb';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';`} lang="ts" />
		<Code content={`<Breadcrumb />`} />
		<Breadcrumb />
	</section>
	<section>
		<Tome_Subheading text="With custom icon" slug="custom-icon" />
		<Code content={`<Breadcrumb>🏠</Breadcrumb>`} />
		<Breadcrumb>🏠</Breadcrumb>
	</section>
	<section>
		<Tome_Subheading text="With custom separator" slug="custom-separator" />
		<Code
			content={`<Breadcrumb>
	{#snippet separator()}.{/snippet}
</Breadcrumb>`}
		/>
		<Breadcrumb>{#snippet separator()}.{/snippet}</Breadcrumb>
	</section>
	<section>
		<Tome_Subheading text="With custom paths" slug="custom-paths" />
		<Breadcrumb_Example selected_path="/a/b" />
	</section>
</Tome_Detail>
