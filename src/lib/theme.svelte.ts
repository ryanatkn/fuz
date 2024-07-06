import {color_schemes, type Color_Scheme, type Theme} from '@ryanatkn/moss/theme.js';
import {default_themes} from '@ryanatkn/moss/themes.js';
import {BROWSER} from 'esm-env';
import {getContext, setContext} from 'svelte';

// TODO Can we solve the problem of theme flashing? serialize the whole `Themer`?
// I think so but we'd need Moss' `render_theme_style` to be available in the head somehow.
// The current problem is that `render_theme_style` depends on all of the variables for the base theme,
// but I think that can be fixed.
// These get added to `create_theme_setup_script`:
// render_theme_style_fn: string,
// const render_theme_style = ${render_theme_style_fn};

export class Themer {
	theme: Theme = $state()!; // TODO better initialization?
	color_scheme: Color_Scheme = $state()!; // TODO better initialization?

	constructor(theme: Theme = default_themes[0], color_scheme: Color_Scheme = 'auto') {
		if (!color_schemes.includes(color_scheme)) {
			throw Error('unknown color scheme: ' + color_scheme);
		}
		this.theme = theme;
		this.color_scheme = color_scheme;
	}

	toJSON(): Themer_Json {
		return {
			theme: this.theme,
			color_scheme: this.color_scheme,
		};
	}
}

export interface Themer_Json {
	theme: Theme;
	color_scheme: Color_Scheme;
}

const THEME_STATE_KEY = Symbol('themer');
export const get_themer = (): Themer => getContext(THEME_STATE_KEY);
export const set_themer = (themer: Themer): Themer => setContext(THEME_STATE_KEY, themer);

export const sync_color_scheme = (color_scheme: Color_Scheme | null): void => {
	if (!BROWSER) return;
	if (
		color_scheme === 'dark' ||
		(color_scheme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};

export const COLOR_SCHEME_STORAGE_KEY = 'color-scheme';

// TODO @multiple refactor with a util
export const save_color_scheme = (
	color_scheme: Color_Scheme | null,
	key = COLOR_SCHEME_STORAGE_KEY,
): void => {
	if (!BROWSER) return;
	try {
		if (color_scheme === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, color_scheme);
		}
	} catch (_) {}
};

// TODO @multiple refactor with a util
export const load_color_scheme = (
	fallback: Color_Scheme = 'auto',
	key = COLOR_SCHEME_STORAGE_KEY,
): Color_Scheme => {
	if (!BROWSER) return fallback;
	let loaded: any;
	try {
		loaded = localStorage.getItem(key);
	} catch (_) {
		return fallback;
	}
	if (color_schemes.includes(loaded)) {
		return loaded; // TODO should parse, and also delete the stored key on failures
	}
	return fallback;
};

// TODO @multiple refactor with a util
export const THEME_STORAGE_KEY = 'theme';

export const save_theme = (theme: Theme | null, key = THEME_STORAGE_KEY): void => {
	if (!BROWSER) return;
	try {
		if (theme === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(theme));
		}
	} catch (_) {}
};

// TODO @multiple refactor with a util
export const load_theme = (fallback: Theme = default_themes[0], key = THEME_STORAGE_KEY): Theme => {
	if (!BROWSER) return fallback;
	try {
		const v = localStorage.getItem(key);
		const loaded = v === null ? v : JSON.parse(v);
		if (loaded) {
			return loaded;
		}
	} catch (_) {}
	return fallback;
};

// TODO BLOCK the `meta` may not be doing what we want here, do we instead need CSS that overrides the Moss value? or delete it?
/**
 * Creates an HTML script string to be inserted into the `head`
 * that initializes the dark/light color scheme.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 * Prefers a value in `localStorage` if available, and if not detects using `matchMedia`.
 * On unexpected errors, like if `localStorage` is disabled, the `fallback` value is used.
 * @param fallback
 * @param key
 * @returns HTML string with the color scheme setup script and a `color-schema` meta tag
 */
export const create_theme_setup_script = (
	fallback: Color_Scheme = 'light',
	key = COLOR_SCHEME_STORAGE_KEY,
): string => `
	<meta name="color-scheme" content="${fallback === 'dark' ? 'dark light' : 'light dark'}" />
	<script nonce="%sveltekit.nonce%">
		try {
			let c = localStorage.getItem('${key}');
			if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
				c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			}
			if (c === 'dark') document.documentElement.classList.add('dark');
		} catch (_) {${fallback === 'dark' ? " document.documentElement.classList.add('dark'); " : ''}}
	</script>
`;

// TODO does the `nonce` here and above behave as desired?

/**
 * Creates an HTML style string to be inserted into the `head`
 * that overrides the theme for a part of the page.
 * @param style same as the result of a call to `render_theme_style`
 * @returns HTML string with the style tag and its contents
 */
export const create_theme_style_html = (style: string): string => `<style nonce="%sveltekit.nonce%">
	${style}
</style>`;
