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

	const {pending, onclick, running, title, disabled, attrs, children}: Props = $props();

	let el: HTMLButtonElement | undefined = $state();

	export const focus = (options?: FocusOptions): void => el?.focus(options);

	// TODO maybe this shouldn't disable? just visually look disabled, maybe with `.disabled`?
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
