<script lang="ts">
	import Tome_Title from '$lib/Tome_Title.svelte';
	import Library_Panel from '$lib/Library_Panel.svelte';
	import type {Tome} from '$lib/tome.js';

	interface Props {
		tome: Tome;
	}

	const {tome} = $props<Props>();

	// TODO component name?
</script>

<Library_Panel>
	<header>
		<slot name="header">
			<Tome_Title {tome} />
		</slot>
	</header>
	<slot />
</Library_Panel>

<style>
	header {
		margin-bottom: var(--space_xl3);
	}
</style>
