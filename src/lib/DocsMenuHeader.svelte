<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	const {
		class: class_prop,
		children,
		...rest
	}: SvelteHTMLElements['h4'] & {
		// TODO maybe add an optional `selected` status? if any children are selected
		children: Snippet;
	} = $props();
</script>

<h4 {...rest} class="mb_sm {class_prop}">{@render children()}</h4>
