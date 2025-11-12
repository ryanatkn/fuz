<script lang="ts">
	import type {HTMLAttributes} from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		/** Custom prop */
		custom: string;
		/** Another custom prop */
		data?: Record<string, unknown>;
	}

	let {custom, data, ...attrs}: Props = $props();
</script>

<div {...attrs}>
	{custom}
	{#if data}{JSON.stringify(data)}{/if}
</div>
