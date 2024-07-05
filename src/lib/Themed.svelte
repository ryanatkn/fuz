<script lang="ts" context="module">
	let mounted = false;
</script>

<script lang="ts">
	import {onDestroy, onMount, type Snippet} from 'svelte';
	import {render_theme_style, type Color_Scheme} from '@ryanatkn/moss/theme.js';
	import {DEFAULT_THEME} from '@ryanatkn/moss/themes.js';
	import {BROWSER, DEV} from 'esm-env';

	import {
		create_theme_setup_script,
		load_color_scheme as default_load_color_scheme,
		save_color_scheme as default_save_color_scheme,
		sync_color_scheme as default_sync_color_scheme,
		save_theme as default_save_theme,
		load_theme as default_load_theme,
		set_theme_state,
		create_theme_style_html,
		Theme_State,
	} from '$lib/theme.svelte.js';
	import {effect_skip} from '$lib/rune_helpers.svelte.js';

	interface Props {
		sync_color_scheme?: typeof default_sync_color_scheme;
		load_color_scheme?: typeof default_load_color_scheme;
		save_color_scheme?: typeof default_save_color_scheme;
		load_theme?: typeof default_load_theme;
		save_theme?: typeof default_save_theme;
		/**
		 * A reactive class containing the selected theme and color scheme.
		 * Defaults to the first default theme.
		 * The class reference is not reactive
		 * because it's set in context without a wrapper, use `{#key theme}` if it changes.
		 * @nonreactive
		 */
		selected_theme_state?: Theme_State;
		color_scheme_fallback?: Color_Scheme | undefined;
		color_scheme_css?: string | undefined;
		children: Snippet<
			[
				style: string | null,
				theme_style_html: string | null,
				theme_setup_script: string,
				selected_theme_state: Theme_State,
			]
		>;
	}

	const {
		sync_color_scheme = default_sync_color_scheme,
		load_color_scheme = default_load_color_scheme,
		save_color_scheme = default_save_color_scheme,
		load_theme = default_load_theme,
		save_theme = default_save_theme,
		selected_theme_state = new Theme_State(load_theme(), load_color_scheme()),
		color_scheme_fallback,
		color_scheme_css,
		children,
	}: Props = $props();

	// TODO improve this so it works without `unsafe-inline` in the CSP - hash/nonce?

	// In dev mode only, warn about misuse of the singleton `Themed`.
	// Use `Themed_Scope` for non-global themes and color schemes.
	if (DEV) {
		onMount(() => {
			if (mounted) {
				console.warn('more than one Themed was mounted, use Themed_Scope if this was intended'); // eslint-disable-line no-console
			}
			mounted = true;
		});
		onDestroy(() => {
			mounted = false;
		});
	}

	/**
	 * `Themed` adds global color scheme and theme support to the page.
	 * It also sets writable stores containing the theme and color scheme in the Svelte context.
	 *
	 * To scope the theme to only a part of the page, use `Themed_Scope`.
	 * There is some copied code between the two,
	 * but combining them was too complicated both internally and externally.
	 */

	set_theme_state(selected_theme_state);

	const selected_theme_name = $derived(selected_theme_state.theme.name);
	const style = $derived(
		selected_theme_name === DEFAULT_THEME.name // TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check
			? null
			: render_theme_style(selected_theme_state.theme),
	);
	const theme_style_html = $derived(style ? create_theme_style_html(style) : null);
	const theme_setup_script = $derived(create_theme_setup_script(color_scheme_fallback));

	effect_skip((skip) => {
		const v = selected_theme_state.color_scheme;
		if (skip) return;
		sync_color_scheme(v);
	});
	effect_skip((skip) => {
		const v = selected_theme_state.color_scheme;
		if (skip) return;
		save_color_scheme(v); // helper may change, so is separate from `sync_color_scheme`
	});
	effect_skip((skip) => {
		const v = selected_theme_state.theme;
		if (skip) return;
		save_theme(v);
	});

	// TODO BLOCK this is messy and probably wrong -- do we want both values?
	// or only one if there's a defined fallback? how to sync with the setup script?
	// maybe add the meta tag in the theme setup script, or change its content?
	const final_color_scheme_css = $derived(
		color_scheme_css ??
			(color_scheme_fallback === 'dark' || color_scheme_fallback === 'light'
				? color_scheme_fallback
				: BROWSER && matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark light'
					: 'light dark'),
	);
	console.log(`theme_style_html`, theme_style_html);
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	{#if theme_style_html}{@html theme_style_html}{/if}
	{#if theme_setup_script}
		<meta name="color-scheme" content={final_color_scheme_css} />
		{@html theme_setup_script}
	{/if}
</svelte:head>

{@render children(style, theme_style_html, theme_setup_script, selected_theme_state)}
