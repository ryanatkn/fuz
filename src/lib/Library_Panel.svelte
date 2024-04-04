<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();
</script>

<div class="library_panel width_md">
	{@render children()}
</div>

<style>
	.library_panel {
		margin: var(--space_xl4) 0;
	}
</style>
