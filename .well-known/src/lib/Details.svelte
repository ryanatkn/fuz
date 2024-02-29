<script lang="ts">
	export let lazy = true;
	export let open: boolean | null | undefined = undefined;
</script>

<!-- TODO svelte5 splat attrs -->
<details bind:open>
	{#if lazy}
		<slot name="summary" />
		{#if open}
			<slot />
		{/if}
	{:else}
		<slot name="summary" />
		<slot />
	{/if}
</details>
