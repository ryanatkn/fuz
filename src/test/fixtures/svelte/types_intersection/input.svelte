<script lang="ts">
	import type {HTMLAttributes} from 'svelte/elements';

	let {
		custom,
		data,
		...attrs
	}: {
		/** Custom prop */
		custom: string;
		/** Another custom prop */
		data?: Record<string, unknown>;
	} & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...attrs}>
	{custom}
	{#if data}{JSON.stringify(data)}{/if}
</div>
