<script lang="ts">
	import type {Snippet} from 'svelte';

	import Tome_Title from '$lib/Tome_Title.svelte';
	import Library_Panel from '$lib/Library_Panel.svelte';
	import type {Tome} from '$lib/tome.js';

	interface Props {
		tome: Tome;
		header?: Snippet;
		children: Snippet;
	}

	const {tome, header, children}: Props = $props();

	// TODO component name?
</script>

<Library_Panel>
	<header>
		{#if header}
			{@render header()}
		{:else}
			<Tome_Title {tome} />
		{/if}
	</header>
	{@render children()}
</Library_Panel>

<style>
	header {
		margin-bottom: var(--space_xl3);
	}
</style>
