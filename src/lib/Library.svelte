<script lang="ts">
	import type {Tome} from '$lib/tome.js';

	interface Props {
		tomes: Tome[];
	}

	const {tomes} = $props<Props>();
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
	/* TODO hacky */
	.tomes :global(.tome) {
		margin-bottom: var(--space_xl9) !important;
	}
</style>
