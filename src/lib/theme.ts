import {color_schemes, type Color_Scheme, type Theme} from '@ryanatkn/moss/theme.js';
import {default_themes} from '@ryanatkn/moss/themes.js';

export const sync_color_scheme = (color_scheme: Color_Scheme | null): void => {
	if (import.meta.env.SSR) return;
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

// TODO @multiple refactor, probably with a storage util
export const save_color_scheme = (
	color_scheme: Color_Scheme | null,
	key = COLOR_SCHEME_STORAGE_KEY,
): void => {
	if (import.meta.env.SSR) return;
	try {
		if (color_scheme === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, color_scheme);
		}
	} catch (_) {}
};

export const load_color_scheme = (
	fallback: Color_Scheme | null = 'auto',
	key = COLOR_SCHEME_STORAGE_KEY,
): Color_Scheme | null => {
	if (import.meta.env.SSR) return null;
	let stored: any;
	try {
		stored = localStorage.getItem(key);
	} catch (_) {
		return fallback;
	}
	if (color_schemes.includes(stored)) {
		return stored; // TODO should parse, and also delete the stored key on failures
	}
	return fallback;
};

// TODO @multiple refactor, probably with a storage util
export const THEME_STORAGE_KEY = 'theme';

export const save_theme = (theme: Theme | null, key = THEME_STORAGE_KEY): void => {
	if (import.meta.env.SSR) return;
	try {
		if (theme === null) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(theme));
		}
	} catch (_) {}
};

export const load_theme = (fallback: Theme = default_themes[0], key = THEME_STORAGE_KEY): Theme => {
	if (import.meta.env.SSR) return fallback;
	try {
		const v = localStorage.getItem(key);
		const stored = v === null ? v : JSON.parse(v);
		if (stored) {
			return stored;
		}
	} catch (_) {}
	return fallback;
};

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
	try {
		let c = localStorage.getItem('${key}');
		if (c === 'auto' || (c !== 'dark' && c !== 'light')) {
			c = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		if (c === 'dark') document.documentElement.classList.add('dark');
	} catch (_) { ${fallback === 'dark' ? "document.documentElement.classList.add('dark');" : ''} }
`;
