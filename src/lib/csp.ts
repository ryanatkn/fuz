import type {KitConfig} from '@sveltejs/kit';

export type Csp = Exclude<KitConfig['csp'], undefined>;
export type Csp_Directives = Exclude<Csp['directives'], undefined>;

export type Csp_Directive_Value<T extends keyof Csp_Directives> =
	T extends 'upgrade-insecure-requests' ? boolean : Array<string>;

// TODO probably delete Csp_Directive_Value<T> and use:
// export type Csp_Directive_Config<T extends keyof Csp_Directives> =
// | Csp_Directives[T]
// | ((defaults: Csp_Directives[T]) => Csp_Directives[T]);
export type Csp_Directive_Config<T extends keyof Csp_Directives> =
	| Csp_Directive_Value<T>
	| ((defaults: Csp_Directive_Value<T>) => Csp_Directive_Value<T>);

export type Csp_Config = {
	[K in keyof Csp_Directives]?: Csp_Directive_Config<K>;
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
export const generate_csp = (
	config?: Csp_Config,
	defaults: Csp_Directives = csp_defaults_strict,
): Csp_Directives => {
	const result = {...defaults};

	for (const key in config) {
		const value_or_fn = (config as any)[key];
		const default_value = (defaults as any)[key];

		if (typeof value_or_fn === 'function') {
			(result as any)[key] = value_or_fn(default_value);
		} else {
			(result as any)[key] = value_or_fn;
		}
	}

	return result;
};

/**
 * Default strict CSP directives used as a base configuration.
 */
export const csp_defaults_strict: Csp_Directives = {
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
	'report-uri': [], // Report violations (e.g. `'/csp-violation-report'`)
};
