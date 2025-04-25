import type {KitConfig} from '@sveltejs/kit';
import type {Defined} from '@ryanatkn/belt/types.js';

export type Csp = Defined<KitConfig['csp']>;
export type Csp_Directives = Defined<Csp['directives']>;

// Define a type helper to determine the value type for each directive
export type Csp_Directive_Value<T extends keyof Csp_Directives> = Defined<Csp_Directives[T]>;

// Define the config type that handles both static values and functions that may return undefined
export type Csp_Directive_Config<
	T extends keyof Csp_Directives,
	D extends Partial<Csp_Directives> = Csp_Directives,
> =
	| Csp_Directive_Value<T>
	| undefined
	| ((
			defaults: T extends keyof D ? Defined<D[T]> : undefined,
	  ) => Csp_Directive_Value<T> | undefined);

export type Csp_Config<D extends Partial<Csp_Directives> = Csp_Directives> = {
	[K in keyof Csp_Directives]?: Csp_Directive_Config<K, D>;
};

// TODO BLOCK add `trusted` domains via an option for simple usage
// TODO BLOCK ensure it allows iframing on trusted domains

/**
 * Generates a Content Security Policy configuration by combining defaults with custom settings.
 *
 * @param config - Custom CSP configuration that can override defaults with values or functions
 * @param defaults - Base CSP directives to use as defaults (uses strict CSP by default)
 * @returns Final CSP directives after applying all configuration
 */
export const generate_csp = <
	D extends Partial<Csp_Directives> = typeof csp_defaults_strict,
	T extends Csp_Config<D> = Csp_Config<D>,
>(
	config?: T,
	defaults: D = csp_defaults_strict as unknown as D,
): Csp_Directives => {
	// Clone the defaults to avoid mutation
	const result = structuredClone(defaults) as Csp_Directives;

	// If no config is provided, return the cloned defaults
	if (!config) {
		// Freeze arrays in result to prevent mutation
		freeze_csp_directives(result);
		return result;
	}

	// Process config values or functions
	for (const key in config) {
		const k = key as keyof typeof result;
		const value_or_fn = config[key];
		const default_value = defaults[k];

		// If explicitly undefined in config, remove from result
		if (value_or_fn === undefined) {
			delete result[k]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
			continue;
		}

		if (typeof value_or_fn === 'function') {
			const computed_value = value_or_fn(default_value);
			if (computed_value !== undefined) {
				// No need to clone primitives, only clone arrays
				result[k] = Array.isArray(computed_value)
					? Object.freeze(computed_value.slice())
					: computed_value;
			} else {
				// If function returns undefined, remove from result
				delete result[k]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
			}
		} else {
			// No need to clone primitives, only clone arrays
			result[k] = Array.isArray(value_or_fn)
				? Object.freeze(value_or_fn.slice())
				: (value_or_fn as any);
		}
	}

	// Freeze any remaining arrays that came from defaults
	freeze_csp_directives(result);

	return result;
};

/**
 * Default strict CSP directives used as a base configuration.
 */
export const csp_defaults_strict = {
	// Core defaults
	'default-src': ['none'], // Block everything by default
	'base-uri': ['self'], // Prevent base tag hijacking
	// Script controls
	'script-src': ['self'], // Main script directive
	'script-src-elem': ['self'], // Script elements (standalone scripts)
	'script-src-attr': ['none'], // Block scripts in HTML attributes
	// Content and resources
	'style-src': ['self', 'unsafe-inline'], // CSS styles (including unsafe-inline but network connections are disallowed by other directives)
	'img-src': ['self', 'data:'], // Images (including data: URIs)
	'font-src': ['self'], // Fonts
	'media-src': ['self'], // Audio/video
	'manifest-src': ['self'], // Web app manifests
	// Network and embedding
	'connect-src': ['self'], // XHR, fetch, WebSockets
	'frame-src': ['self'], // Frames/iframes
	'frame-ancestors': ['none'], // Prevent clickjacking
	'form-action': ['self'], // Form submission targets
	'worker-src': ['self'], // Web workers
	// Extra security controls
	'object-src': ['none'], // Block plugins (Flash, Java, etc.)
	'upgrade-insecure-requests': true, // Upgrade HTTP to HTTPS
	// 'report-uri': [], // Report violations (e.g. `'/csp-violation-report'`)
} as const satisfies Csp_Directives;

const freeze_csp_directives = (directives: Partial<Csp_Directives>): void => {
	for (const key in directives) {
		if (Array.isArray((directives as any)[key]) && !Object.isFrozen((directives as any)[key])) {
			Object.freeze((directives as any)[key]);
		}
	}
};

// Here are the Svelte types for reference (they're not exported, instead we pull them off the KitConfig above):
// export namespace Csp {
// 	type ActionSource = 'strict-dynamic' | 'report-sample';
// 	type BaseSource =
// 		| 'self'
// 		| 'unsafe-eval'
// 		| 'unsafe-hashes'
// 		| 'unsafe-inline'
// 		| 'wasm-unsafe-eval'
// 		| 'none';
// 	type CryptoSource = `${'nonce' | 'sha256' | 'sha384' | 'sha512'}-${string}`;
// 	type FrameSource = HostSource | SchemeSource | 'self' | 'none';
// 	type HostNameScheme = `${string}.${string}` | 'localhost';
// 	type HostSource = `${HostProtocolSchemes}${HostNameScheme}${PortScheme}`;
// 	type HostProtocolSchemes = `${string}://` | '';
// 	type HttpDelineator = '/' | '?' | '#' | '\\';
// 	type PortScheme = `:${number}` | '' | ':*`;
// 	type SchemeSource = 'http:' | 'https:' | 'data:' | 'mediastream:' | 'blob:' | 'filesystem:';
// 	type Source = HostSource | SchemeSource | CryptoSource | BaseSource;
// 	type Sources = Source[];
// }
// export interface CspDirectives {
// 	'child-src'?: Csp.Sources;
// 	'default-src'?: Array<Csp.Source | Csp.ActionSource>;
// 	'frame-src'?: Csp.Sources;
// 	'worker-src'?: Csp.Sources;
// 	'connect-src'?: Csp.Sources;
// 	'font-src'?: Csp.Sources;
// 	'img-src'?: Csp.Sources;
// 	'manifest-src'?: Csp.Sources;
// 	'media-src'?: Csp.Sources;
// 	'object-src'?: Csp.Sources;
// 	'prefetch-src'?: Csp.Sources;
// 	'script-src'?: Array<Csp.Source | Csp.ActionSource>;
// 	'script-src-elem'?: Csp.Sources;
// 	'script-src-attr'?: Csp.Sources;
// 	'style-src'?: Array<Csp.Source | Csp.ActionSource>;
// 	'style-src-elem'?: Csp.Sources;
// 	'style-src-attr'?: Csp.Sources;
// 	'base-uri'?: Array<Csp.Source | Csp.ActionSource>;
// 	sandbox?: Array<
// 		| 'allow-downloads-without-user-activation'
// 		| 'allow-forms'
// 		| 'allow-modals'
// 		| 'allow-orientation-lock'
// 		| 'allow-pointer-lock'
// 		| 'allow-popups'
// 		| 'allow-popups-to-escape-sandbox'
// 		| 'allow-presentation'
// 		| 'allow-same-origin'
// 		| 'allow-scripts'
// 		| 'allow-storage-access-by-user-activation'
// 		| 'allow-top-navigation'
// 		| 'allow-top-navigation-by-user-activation'
// 	>;
// 	'form-action'?: Array<Csp.Source | Csp.ActionSource>;
// 	'frame-ancestors'?: Array<Csp.HostSource | Csp.SchemeSource | Csp.FrameSource>;
// 	'navigate-to'?: Array<Csp.Source | Csp.ActionSource>;
// 	'report-uri'?: string[];
// 	'report-to'?: string[];

// 	'require-trusted-types-for'?: Array<'script'>;
// 	'trusted-types'?: Array<'none' | 'allow-duplicates' | '*' | string>;
// 	'upgrade-insecure-requests'?: boolean;

// 	/** @deprecated */
// 	'require-sri-for'?: Array<'script' | 'style' | 'script style'>;

// 	/** @deprecated */
// 	'block-all-mixed-content'?: boolean;

// 	/** @deprecated */
// 	'plugin-types'?: Array<`${string}/${string}` | 'none'>;

// 	/** @deprecated */
// 	referrer?: Array<
// 		| 'no-referrer'
// 		| 'no-referrer-when-downgrade'
// 		| 'origin'
// 		| 'origin-when-cross-origin'
// 		| 'same-origin'
// 		| 'strict-origin'
// 		| 'strict-origin-when-cross-origin'
// 		| 'unsafe-url'
// 		| 'none'
// 	>;
// }
