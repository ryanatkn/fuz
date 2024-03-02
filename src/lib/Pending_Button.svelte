<script lang="ts">
	import Pending_Animation from '$lib/Pending_Animation.svelte';

	interface Props {
		pending: boolean;
		running?: boolean;
		el?: HTMLButtonElement;
		title?: string;
		disabled?: boolean;
		attrs?: any;
	}

	// TODO BLOCK @multiple just disable this eslint rule when we use bindings? would prefer not to disable for all Svelte so let continues to signal reassigment
	let {pending, running, el, title, disabled, attrs} = $props<Props>(); // eslint-disable-line prefer-const
</script>

<button
	type="button"
	{...attrs}
	disabled={disabled ?? pending}
	{title}
	class:pending
	bind:this={el}
	on:click
>
	<div class="content">
		<slot />
	</div>
	{#if pending}
		<div class="animation">
			<Pending_Animation {running} />
		</div>
	{/if}
</button>

<style>
	button {
		position: relative;
	}
	.content {
		display: contents;
	}
	.pending .content {
		visibility: hidden;
	}
	.animation {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
