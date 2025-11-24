<script lang="ts">
	let {
		id,
		label,
		enabled = true,
	}: {
		/** Required prop */
		id: string;
		/** Optional prop */
		label?: string;
		/** Optional with default value */
		enabled?: boolean;
	} = $props();
</script>

<div data-id={id}>
	{#if label}{label}{/if}
	{enabled ? 'Enabled' : 'Disabled'}
</div>
