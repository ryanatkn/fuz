<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import {render_theme_style} from '@ryanatkn/moss/theme.js';
	import {BROWSER} from 'esm-env';

	import {
		get_theme_state,
		set_theme_state,
		Theme_State,
		create_theme_style_html,
	} from '$lib/theme.svelte.js';

	interface Props {
		/**
		 * A reactive class containing the selected theme and color scheme.
		 * Defaults to the first default theme.
		 * The class reference is not reactive
		 * because it's set in context without a wrapper, use `{#key theme}` if it changes.
		 * @nonreactive
		 */
		selected_theme_state?: Theme_State;
		tagName?: string;
		children: Snippet<
			[
				id: string,
				style: string | null,
				theme_style_html: string | null,
				selected_theme_state: Theme_State,
			]
		>;
	}

	const {
		selected_theme_state = new Theme_State(get_theme_state().theme, get_theme_state().color_scheme),
		tagName = 'div',
		children,
	}: Props = $props();

	const id = 'themed_' + _id++;

	/**
	 * `Themed_Scope` is a variant of `Themed` that scopes its theme to one branch of the DOM.
	 *
	 * To sync the theme globally and persist to local storage, use `Themed`.
	 * There is some copied code between the two,
	 * but combining them was too complicated both internally and externally.
	 *
	 * This is implemented as a component instead of an action so it can write to the `<head>`.
	 * The main downside of the current implementation when scoped
	 * is it adds an extra element to the tree,
	 * though a more complicated API could be devised to accept an `Element` as a prop.
	 */

	set_theme_state(selected_theme_state);

	const style = $derived(
		render_theme_style(selected_theme_state.theme, {id, empty_default_theme: false}),
	);
	const theme_style_html = $derived(style ? create_theme_style_html(style) : null);

	const final_color__scheme = $derived(
		selected_theme_state.color_scheme === 'dark' || selected_theme_state.color_scheme === 'light'
			? selected_theme_state.color_scheme
			: BROWSER && matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light',
	); // fallback to best guess
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	{#if theme_style_html}{@html theme_style_html}{/if}
</svelte:head>

<svelte:element this={tagName} {id} class="themed" class:dark={final_color__scheme === 'dark'}
	>{@render children(id, style, theme_style_html, selected_theme_state)}</svelte:element
>
