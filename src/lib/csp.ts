import type {KitConfig} from '@sveltejs/kit';
import type {Defined} from '@ryanatkn/belt/types.js';

export type Csp = Defined<KitConfig['csp']>;
export type Csp_Directives = Defined<Csp['directives']>;
export type Csp_Directive = keyof Csp_Directives;

export type Csp_Directive_Value<T extends Csp_Directive> = Defined<Csp_Directives[T]>;

export type Csp_Directive_Config<
	T extends Csp_Directive,
	D extends Partial<Csp_Directives> = Csp_Directives,
> =
	| Csp_Directive_Value<T>
	| undefined
	| ((
			defaults: T extends keyof D ? Defined<D[T]> : undefined,
	  ) => Csp_Directive_Value<T> | undefined);

export type Csp_Config<D extends Partial<Csp_Directives> = Csp_Directives> = {
	[K in Csp_Directive]?: Csp_Directive_Config<K, D>;
};

export interface Csp_Options<
	D extends Partial<Csp_Directives> = typeof CSP_DIRECTIVES_STRICT_DEFAULTS,
> {
	/**
	 * Custom CSP directive configuration that can override defaults with values or functions.
	 */
	config?: Csp_Config<D>;

	/**
	 * Base CSP directives. Defaults to `CSP_DIRECTIVES_STRICT_DEFAULTS`.
	 */
	defaults?: D;

	/**
	 * Sources to trust across all CSP directives listed in `trusted_directives`.
	 * Can include domains, hashes, or nonces.
	 */
	trusted_sources?: string | Array<string>;

	/**
	 * Customize which directives should have `trusted_sources` added.
	 * Must use keys from `TRUSTED_CSP_DIRECTIVES`.
	 * Defaults to all values in `TRUSTED_CSP_DIRECTIVES`.
	 */
	trusted_directives?: ReadonlyArray<Trusted_Csp_Directive>;
}

/**
 * Creates directives for SvelteKit's Content Security Policy config at `config.kit.csp.directives`,
 * combining strict defaults with custom settings.
 */
export const create_csp_directives = <
	D extends Partial<Csp_Directives> = typeof CSP_DIRECTIVES_STRICT_DEFAULTS,
>(
	options?: Csp_Options<D>,
): Csp_Directives => {
	const config = options?.config ?? {};
	const defaults = options?.defaults ?? (CSP_DIRECTIVES_STRICT_DEFAULTS as unknown as D);
	const trusted_sources = options?.trusted_sources
		? typeof options.trusted_sources === 'string'
			? [options.trusted_sources]
			: options.trusted_sources
		: null;
	const trusted_directives = options?.trusted_directives ?? TRUSTED_CSP_DIRECTIVES;

	// Clone the defaults to avoid mutation
	const result: Csp_Directives = structuredClone(defaults);

	// Process trusted sources if any are provided
	if (trusted_sources && trusted_sources.length > 0) {
		for (const key of trusted_directives) {
			// Ensure the key is actually in `TRUSTED_CSP_DIRECTIVES`
			if (!TRUSTED_CSP_DIRECTIVES.includes(key)) {
				throw new Error(
					`Invalid CSP trusted directive key: '${key}'. Must be one of: ${TRUSTED_CSP_DIRECTIVES.join(', ')}`,
				);
			}

			if (key in result) {
				const value = result[key];
				if (!Array.isArray(value)) continue;
				// Only add trusted sources if the directive isn't being completely overridden in config
				if (!(key in config) || typeof config[key] === 'function') {
					// TODO BLOCK what if the default is `['none']`?
					(result as any)[key] = [...value, ...trusted_sources];
				}
			}
		}
	}

	// Process config values or functions, if any
	for (const key in config) {
		const k = key as keyof typeof result;
		const value_or_fn = (config as any)[key];
		const default_value = defaults[k];

		// If explicitly undefined in config, remove from result
		if (value_or_fn === undefined) {
			delete result[k]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
			continue;
		}

		if (typeof value_or_fn === 'function') {
			// For functions, pass the current value of result[k] which may already include trusted sources
			const current_value = result[k] !== undefined ? result[k] : default_value;
			const computed_value = value_or_fn(current_value);

			if (computed_value !== undefined) {
				// No need to clone primitives, only clone arrays
				result[k] = Array.isArray(computed_value) ? computed_value.slice() : computed_value;
			} else {
				// If function returns undefined, remove from result
				delete result[k]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
			}
		} else {
			// Direct value assignment (overrides trusted sources)
			result[k] = Array.isArray(value_or_fn) ? value_or_fn.slice() : value_or_fn;
		}
	}

	// Freeze any remaining arrays that came from defaults
	freeze_directives(result);

	return result;
};

/**
 * Directives where trusted sources are added by default.
 * Can be customized in `create_csp_directives` with `options.trusted_directives`.
 */
export const TRUSTED_CSP_DIRECTIVES = Object.freeze([
	'base-uri',
	'script-src',
	'script-src-elem',
	'style-src',
	'style-src-elem',
	'img-src',
	'font-src',
	'media-src',
	'manifest-src',
	'child-src',
	'connect-src',
	'frame-src',
	'frame-ancestors',
	'form-action',
	'worker-src',
] as const satisfies Array<Csp_Directive>);

/**
 * Type inferred from `TRUSTED_CSP_DIRECTIVES` array.
 */
export type Trusted_Csp_Directive = (typeof TRUSTED_CSP_DIRECTIVES)[number];

/**
 * Default strict CSP directives used as base configuration.
 * Can be customized in `create_csp_directives` with `options.defaults`.
 */
export const CSP_DIRECTIVES_STRICT_DEFAULTS = {
	// Core defaults
	'default-src': ['none'], // Block everything by default
	'base-uri': ['self'], // Prevent base tag hijacking
	// Script controls
	'script-src': ['self'], // Main script directive
	'script-src-elem': ['self'], // Script elements (standalone scripts)
	'script-src-attr': ['none'], // Block scripts in HTML attributes
	// Content and resources
	'style-src': ['self', 'unsafe-inline'], // Main style directive (uses unsafe-inline but network connections are disallowed by other directives)
	'style-src-elem': ['self', 'unsafe-inline'], // Style elements (standalone stylesheets)
	'style-src-attr': ['unsafe-inline'], // Style attributes
	'img-src': ['self', 'data:'], // Images (including data: URIs)
	'font-src': ['self'], // Fonts
	'media-src': ['self'], // Audio/video
	'manifest-src': ['self'], // Web app manifests
	// Network and embedding
	'child-src': ['self'], // Fallback for frame-src and worker-src
	'connect-src': ['self'], // XHR, fetch, WebSockets
	'frame-src': ['self'], // Frames/iframes
	'frame-ancestors': ['self'], // Control what can embed this page
	'form-action': ['self'], // Form submission targets
	'worker-src': ['self'], // Web workers
	// Extra security controls
	'object-src': ['none'], // Block plugins (Flash, Java, etc.)
	'upgrade-insecure-requests': true, // Upgrade HTTP to HTTPS
	// 'report-to': [], // Report violations (e.g. `'/csp-violation-report'`)
} as const satisfies Csp_Directives;

const freeze_directives = (directives: Partial<Csp_Directives>): void => {
	for (const key in directives) {
		const value = (directives as any)[key];
		if (Array.isArray(value) && !Object.isFrozen(value)) {
			Object.freeze(value);
		}
	}
	Object.freeze(directives);
};
