import {color_schemes, type Color_Scheme, type Theme} from '@ryanatkn/moss/theme.js';
import {default_themes} from '@ryanatkn/moss/themes.js';
import {BROWSER} from 'esm-env';

import {create_context} from '$lib/context_helpers.js';

export class Themer {
	theme: Theme = $state()!;
	color_scheme: Color_Scheme = $state()!;

	constructor(theme: Theme = default_themes[0], color_scheme: Color_Scheme = 'auto') {
		if (!color_schemes.includes(color_scheme)) {
			throw Error('unknown color scheme: ' + color_scheme);
		}
		this.theme = theme;
		this.color_scheme = color_scheme; // TODO `resolved_color_scheme` if auto? users could then do different things based on the final value - would not be added to `Themer_Json`
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

export const themer_context = create_context<Themer>();

export const sync_color_scheme = (color_scheme: Color_Scheme | null): void => {
	if (!BROWSER) return;
	const dark =
		color_scheme === 'dark' ||
		(color_scheme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
	document.documentElement.classList.add(dark ? 'dark' : 'light');
	document.documentElement.classList.remove(dark ? 'light' : 'dark');
};

export const COLOR_SCHEME_STORAGE_KEY = 'fuz:color-scheme';

// TODO @many refactor with a util
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

// TODO @many refactor with a util
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

// TODO @many refactor with a util
export const THEME_STORAGE_KEY = 'fuz:theme';

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

// TODO @many refactor with a util
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
