<script lang="ts">
	export let lazy = true;
	export let ontoggle:
		| ((e: Event & {currentTarget: EventTarget & HTMLDetailsElement}) => void)
		| undefined = undefined;
	export let open: boolean | null | undefined = undefined;
</script>

<details
	bind:open
	on:toggle={(e) => {
		console.log(`e`, e);
		ontoggle?.(e);
	}}
>
	{#if lazy}
		<slot />
	{:else}
		<slot />
	{/if}
</details>
