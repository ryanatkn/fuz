<script lang="ts">
	import Tome_Title from '$lib/Tome_Title.svelte';
	import Library_Panel from '$lib/Library_Panel.svelte';
	import type {Tome} from '$lib/tome.js';

	// TODO component name?

	export let tome: Tome;
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
		margin-bottom: var(--space_3);
	}
</style>
