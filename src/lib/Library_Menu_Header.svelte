<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		// TODO maybe add an optional `selected` status? if any children are selected
		attrs?: SvelteHTMLElements['h4'];
		children: Snippet;
	}

	const {attrs, children}: Props = $props();
</script>

<h4 {...attrs} class="mb_sm {attrs?.class}">{@render children()}</h4>
