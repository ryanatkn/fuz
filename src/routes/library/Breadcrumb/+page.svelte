<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Breadcrumb_Example from '$routes/library/Breadcrumb/Breadcrumb_Example.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';

	const LIBRARY_ITEM_NAME = 'Breadcrumb';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';`} lang="ts" />
		<Code content={`<Breadcrumb />`} />
		<Breadcrumb />
	</section>
	<section>
		<Tome_Section_Header text="With custom icon" slug="custom-icon" />
		<Code content={`<Breadcrumb>🏠</Breadcrumb>`} />
		<Breadcrumb>🏠</Breadcrumb>
	</section>
	<section>
		<Tome_Section_Header text="With custom separator" slug="custom-separator" />
		<Code
			content={`<Breadcrumb>
	{#snippet separator()}.{/snippet}
</Breadcrumb>`}
		/>
		<Breadcrumb>{#snippet separator()}.{/snippet}</Breadcrumb>
	</section>
	<section>
		<Tome_Section_Header text="With custom paths" slug="custom-paths" />
		<Breadcrumb_Example selected_path="/a/b" />
	</section>
</Tome_Content>
