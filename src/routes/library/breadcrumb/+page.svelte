<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Breadcrumb_Example from '$routes/library/breadcrumb/Breadcrumb_Example.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const LIBRARY_ITEM_NAME = 'Breadcrumb';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';`} lang="ts" />
		<Code content={`<Breadcrumb />`} />
		<Breadcrumb />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With custom icon" />
		<Code content={`<Breadcrumb>🏠</Breadcrumb>`} />
		<Breadcrumb>🏠</Breadcrumb>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With custom separator" />
		<Code
			content={`<Breadcrumb>
	{#snippet separator()}.{/snippet}
</Breadcrumb>`}
		/>
		<Breadcrumb>{#snippet separator()}.{/snippet}</Breadcrumb>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With custom paths" />
		<Breadcrumb_Example selected_path="/a/b" />
	</Tome_Section>
</Tome_Content>
