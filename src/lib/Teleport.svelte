<script lang="ts">
	import {onDestroy, createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher<{move: {el: HTMLElement; to: HTMLElement}}>();

	// Defaults to `undefined` to lessen friction with SSR.
	// We may want to change this to optionally accept a string selector,
	// but that didn't seem to be the best API for the `Dialog`.
	export let to: HTMLElement | undefined | null;

	let el: HTMLElement | undefined | null;

	$: el && to && move(el, to);

	let moved = false;

	const move = (el: HTMLElement, to: HTMLElement): void => {
		moved = true;
		to.appendChild(el);
		dispatch('move', {el, to});
	};

	onDestroy(() => {
		el?.parentNode?.removeChild(el);
	});
</script>

<div class="teleport" bind:this={el} hidden={!moved}>
	<slot />
</div>

<style>
	.teleport {
		display: contents;
	}
</style>
