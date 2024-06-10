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

	/**
	 * This API pattern is an experiment in contrast to exposing `el` through a bindable prop.
	 * The prop exposes more API surface area than is usually necessary,
	 * and although I'm inclined to give consumers more control,
	 * this also avoids some grossness with the ESLint `prefer-const` rule.
	 * (that's a poor reason to shape the API though, hence why I'm calling it an experiment)
	 */
	let el: HTMLButtonElement | undefined;

	export const focus = (): void => el?.focus();

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
