<script lang="ts">
	import type {Snippet} from 'svelte';

	import Pending_Animation from '$lib/Pending_Animation.svelte';

	interface Props {
		pending: boolean;
		onclick: () => void;
		running?: boolean;
		title?: string;
		disabled?: boolean;
		attrs?: any;
		children: Snippet;
	}

	// TODO maybe this shouldn't disable? cancelable?

	// TODO BLOCK @multiple just disable this eslint rule when we use bindings? would prefer not to disable for all Svelte so let continues to signal reassigment
	let {pending, onclick, running, title, disabled, attrs, children}: Props = $props(); // eslint-disable-line prefer-const
</script>

<button
	type="button"
	{...attrs}
	disabled={disabled ?? pending}
	{title}
	class:pending
	on:click={onclick}
>
	<div class="content">
		{@render children()}
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
		visibility: hidden; /* preserve the size */
	}
	.animation {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
