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
		el?: HTMLButtonElement | undefined;
		children: Snippet;
	}

	let {
		pending, // eslint-disable-line prefer-const
		onclick, // eslint-disable-line prefer-const
		running, // eslint-disable-line prefer-const
		title, // eslint-disable-line prefer-const
		disabled, // eslint-disable-line prefer-const
		attrs, // eslint-disable-line prefer-const
		el = $bindable(),
		children, // eslint-disable-line prefer-const
	}: Props = $props();

	el; // TODO @see https://github.com/sveltejs/language-tools/issues/2268

	// TODO maybe this shouldn't disable? just visually look disabled, maybe with `.disabled`?
	// TODO cancelable?
</script>

<button
	bind:this={el}
	type="button"
	{...attrs}
	disabled={disabled ?? pending}
	{title}
	class:pending
	{onclick}
>
	<span class="content">
		{@render children()}
	</span>
	{#if pending}
		<span class="animation">
			<Pending_Animation {running} />
		</span>
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
