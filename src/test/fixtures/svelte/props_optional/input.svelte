<script lang="ts">
	interface Props {
		/** Required prop */
		id: string;
		/** Optional prop */
		label?: string;
		/** Optional with default value */
		enabled?: boolean;
	}

	let {id, label, enabled = true}: Props = $props();
</script>

<div data-id={id}>
	{#if label}{label}{/if}
	{enabled ? 'Enabled' : 'Disabled'}
</div>
