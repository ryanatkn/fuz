<script lang="ts">
	interface Props {
		lazy?: boolean;
		open?: boolean | null | undefined;
	}

	// TODO BLOCK @multiple just disable this eslint rule when we use bindings? would prefer not to disable for all Svelte so let continues to signal reassigment
	let {lazy = true, open} = $props<Props>(); // eslint-disable-line prefer-const
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
