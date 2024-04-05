<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// TODO BLOCK maybe delete this component
</script>

<div class="library_panel width_md">
	{@render children()}
</div>

<style>
	.library_panel {
		margin-bottom: var(--space_xl9);
	}
</style>
