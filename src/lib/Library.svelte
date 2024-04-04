<script lang="ts">
	import type {Tome} from '$lib/tome.js';

	interface Props {
		tomes: Tome[];
	}

	const {tomes}: Props = $props();
</script>

<div class="tomes">
	{#each tomes as tome (tome)}
		<svelte:component this={tome.component} />
	{/each}
</div>

<style>
	.tomes {
		width: 100%;
	}
</style>
