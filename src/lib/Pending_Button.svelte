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

	let el: HTMLButtonElement | undefined; // intentionally not `$state`, would need to use `untrack` in the helpers below if changed

	/**
	 * This API pattern is an experiment in contrast to exposing `el` through a bindable prop.
	 * This is non-reactive, which I believe is generally what consumers want,
	 * but this forces the issue which may cause issues.
	 *
	 * The initial motivation is to avoid grossness with `prefer-const` and `$props`,
	 * which is admittedly not a good motivation to shape the API.
	 * A better fix would be to have the ESLint plugin disable `prefer-const` for `$props`,
	 * or perhaps that's something for the language tools to handle internally by, for example,
	 * making each `$prop` a separate declaration that defaults to `const` for non-bindables.
	 */
	export const get_el = (): HTMLButtonElement | undefined => el;

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
