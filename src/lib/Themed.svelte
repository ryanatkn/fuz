<script lang="ts" module>
	let mounted = false;
</script>

<script lang="ts">
	import {onMount, type Snippet} from 'svelte';
	import {render_theme_style, type Color_Scheme, type Theme} from '@ryanatkn/moss/theme.js';
	import {DEFAULT_THEME} from '@ryanatkn/moss/themes.js';
	import {DEV} from 'esm-env';

	import {
		create_theme_setup_script,
		load_color_scheme as default_load_color_scheme,
		save_color_scheme as default_save_color_scheme,
		sync_color_scheme as default_sync_color_scheme,
		save_theme as default_save_theme,
		load_theme as default_load_theme,
		themer_context,
		create_theme_style_html,
		Themer,
	} from '$lib/theme.svelte.js';
	import {effect_skip} from '$lib/rune_helpers.svelte.js';

	interface Props {
		sync_color_scheme?: typeof default_sync_color_scheme;
		load_color_scheme?: typeof default_load_color_scheme;
		save_color_scheme?: typeof default_save_color_scheme;
		load_theme?: typeof default_load_theme;
		save_theme?: typeof default_save_theme;
		theme_fallback?: Theme | undefined;
		color_scheme_fallback?: Color_Scheme | undefined;
		/**
		 * A reactive class containing the selected theme and color scheme.
		 * Defaults to the first default theme.
		 * The class reference is not reactive
		 * because it's set in context without a wrapper, use `{#key theme}` if it changes.
		 * @nonreactive
		 */
		themer?: Themer;
		children: Snippet<
			[
				themer: Themer,
				style: string | null,
				theme_style_html: string | null,
				theme_setup_script: string,
			]
		>;
	}

	const {
		sync_color_scheme = default_sync_color_scheme,
		load_color_scheme = default_load_color_scheme,
		save_color_scheme = default_save_color_scheme,
		load_theme = default_load_theme,
		save_theme = default_save_theme,
		theme_fallback,
		color_scheme_fallback,
		themer = new Themer(load_theme(theme_fallback), load_color_scheme(color_scheme_fallback)),
		children,
	}: Props = $props();

	// TODO improve this so it works without `unsafe-inline` in the CSP - hash/nonce?

	// In dev mode only, warn about misuse of the singleton `Themed`.
	if (DEV) {
		onMount(() => {
			if (mounted) {
				console.warn('more than one Themed was mounted'); // eslint-disable-line no-console
				// console.warn('more than one Themed was mounted, use Themed_Scope if this was intended'); // TODO @many revisit Themed_Scope
			}
			mounted = true;
			return () => {
				mounted = false;
			};
		});
	}

	/**
	 * `Themed` adds global color scheme and theme support to the page.
	 * It also sets in the Svelte context a reactive `themer` containing the theme and color scheme.
	 */

	//  TODO @many revisit Themed_Scope
	//  * To scope the theme to only a part of the page, use `Themed_Scope`.
	//  * There is some duplicated code between the two,
	//  * but combining them was too complicated both internally and externally.

	themer_context.set(themer);

	const selected_theme_name = $derived(themer.theme.name);
	const style = $derived(
		selected_theme_name === DEFAULT_THEME.name // TODO @many proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check
			? null
			: render_theme_style(themer.theme),
	);
	const theme_style_html = $derived(style ? create_theme_style_html(style) : null);
	const theme_setup_script = $derived(create_theme_setup_script(color_scheme_fallback));

	effect_skip((skip) => {
		const v = themer.color_scheme;
		if (skip) return;
		sync_color_scheme(v);
	});
	effect_skip((skip) => {
		const v = themer.color_scheme;
		if (skip) return;
		save_color_scheme(v); // helper may change, so is separate from `sync_color_scheme`
	});
	effect_skip((skip) => {
		const v = themer.theme;
		if (skip) return;
		save_theme(v);
	});
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	{#if theme_style_html}{@html theme_style_html}{/if}
	{#if theme_setup_script}{@html theme_setup_script}{/if}
</svelte:head>

{@render children(themer, style, theme_style_html, theme_setup_script)}
