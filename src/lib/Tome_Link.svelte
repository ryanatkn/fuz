<script lang="ts">
	import {base} from '$app/paths';
	import type {Snippet} from 'svelte';
	import type {HTMLAnchorAttributes} from 'svelte/elements';

	interface Props {
		name: string; // TODO type, generate from `tomes`?
		chip?: boolean;
		attrs?: HTMLAnchorAttributes;
		children?: Snippet;
	}

	const {name, chip = true, attrs, children}: Props = $props();

	// TODO add contextmenu behavior
</script>

<a {...attrs} class:chip href="{base}/library/{name}"
	>{#if children}{@render children()}{:else}{name}{/if}</a
>

<style>
	a {
		font-family: var(--font_family_mono);
	}
</style>
