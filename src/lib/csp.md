Critique the CSP API I have here with `create_csp_directives`.

The primary goals are to make it explicit when defined so users can easily audit them.
This means both readability and WYSIWYG/transparency are important.
Behaviors that are hidden, ambiguous, or confusing must be called out and improved.

Focus too on correctness. Don't consider style at all in your analysis, focus on the API.

Analyze and make recommendations.

```ts
// src/lib/csp.ts

import type {Array_Element, Defined} from '@ryanatkn/belt/types.js';

import {csp_directive_spec_by_name, csp_directive_specs} from '$lib/csp_directive_specs.js';
import {deep_freeze} from '$lib/helpers.js';

// TODO schemas, but I may be moving to ArkType from Zod if precompilation looks good

export interface Create_Csp_Directives_Options {
	/**
	 * Override or transform specific directives.
	 * Returning `null` or `undefined` from a transform function will remove the directive.
	 */
	directives?: {
		[K in Csp_Directive]?:
			| Csp_Directive_Value<K> // Static value replacement
			| null // Removes the directive
			| undefined // Removes the directive
			// Transform function returning one of the previous types
			| ((value: Csp_Directive_Value<K>) => Csp_Directive_Value<K> | null | undefined);
	};

	/**
	 * Sources to include based on their trust levels.
	 */
	trusted_sources?: Array<Csp_Source_Spec>;

	/**
	 * Override default values for specific directives,
	 * falling back to `csp_directive_value_defaults`.
	 */
	value_defaults?: Partial<typeof csp_directive_value_defaults>;

	/**
	 * Override trust requirements for specific directives,
	 * falling back to `csp_directive_required_trust_defaults`.
	 */
	required_trust_defaults?: Partial<typeof csp_directive_required_trust_defaults>;
}

/**
 * This is designed for compatibility with SvelteKit
 * and maps to the `KitConfig` `directives` option.
 * The goal is to provide an ergonomic, modern, and safe API
 * for Content Security Policy (CSP) creation
 * that's simple to write and audit, and isn't error-prone.
 *
 * Things like validation and rendering to a string
 * are out of scope and left to SvelteKit.
 */
export function create_csp_directives(options: Create_Csp_Directives_Options = {}): Csp_Directives {
	const directives: Csp_Directives = {};

	// Shallowly merge any provided defaults with the base defaults
	const value_defaults = {...csp_directive_value_defaults, ...options.value_defaults};

	// Apply defaults from directive specs
	for (const spec of csp_directive_specs) {
		const default_value = value_defaults[spec.name];
		if (default_value == null) continue; // omit null and undefined
		directives[spec.name] = Array.isArray(default_value)
			? [...default_value]
			: (default_value as Csp_Directive_Value<any>);
	}

	// Get trust requirements (with overrides applied)
	const trust_requirements: Map<Csp_Directive, Csp_Trust_Level | null> = new Map();
	for (const spec of csp_directive_specs) {
		// Start with spec's required trust
		let required_trust = csp_directive_required_trust_defaults[spec.name];

		// Apply override if present
		const required_trust_override = options.required_trust_defaults?.[spec.name];
		if (required_trust_override !== undefined) {
			required_trust = required_trust_override;
		}

		trust_requirements.set(spec.name, required_trust);
	}

	// Apply trusted sources to directives
	if (options.trusted_sources?.length) {
		for (const [key, value] of Object.entries(directives)) {
			const directive = parse_csp_directive(key);
			if (directive === null) {
				throw new Error(`Invalid directive in options.directives: ${key}`);
			}

			// Skip if directive is ['none'] or not an array
			if (is_none_directive(value) || !Array.isArray(value)) {
				continue;
			}

			// Get required trust for this directive
			const required_trust = trust_requirements.get(directive);
			if (required_trust == null) continue;

			// Add matching sources - separate the filtering into trust-based and directive-based inclusion
			const sources_to_add = options.trusted_sources
				.filter((spec) => {
					// Check for explicit inclusion in directives list
					const explicitly_included = spec.directives?.includes(directive) ?? false;

					// Check for trust level based inclusion
					const has_trust_level = spec.trust !== undefined;
					const include_by_trust = has_trust_level && is_csp_trusted(required_trust, spec.trust);

					// Include the source if either condition is met
					return explicitly_included || include_by_trust;
				})
				.map((spec) => spec.source);

			if (sources_to_add.length > 0) {
				directives[directive] = [...value, ...sources_to_add] as Csp_Directive_Value<any>;
			}
		}
	}

	// Apply directive overrides/transformations
	if (options.directives) {
		for (const [key, value_or_fn] of Object.entries(options.directives)) {
			const directive = parse_csp_directive(key);
			if (directive === null) {
				throw new Error(`Invalid directive in options.directives: ${key}`);
			}

			const current = directives[directive] as Csp_Directive_Value<any>;

			const result = typeof value_or_fn === 'function' ? value_or_fn(current) : value_or_fn;

			if (result == null) {
				delete directives[directive]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
			} else {
				directives[directive] = structuredClone(result) as Csp_Directive_Value<any>;
			}
		}
	}

	// Return immutable result
	return deep_freeze(directives);
}

export type Csp_Directive = keyof Csp_Directives;

export const parse_csp_directive = (directive: unknown): Csp_Directive | null =>
	typeof directive === 'string' && csp_directive_spec_by_name.has(directive as Csp_Directive)
		? (directive as Csp_Directive)
		: null;

export type Csp_Directive_Value<T extends Csp_Directive> = Defined<Csp_Directives[T]>;

export const csp_trust_levels = Object.freeze(['low', 'medium', 'high'] as const);

/**
 * Numeric values for CSP trust levels, `csp_trust_levels`.
 * Lower is less trusted.
 * Includes `undefined` in the type for safety.
 */
export const csp_trust_level_value: Record<Csp_Trust_Level, number | undefined> = {
	low: 0,
	medium: 1,
	high: 2,
};

/**
 * Trust levels for CSP sources.
 *
 * With the base defaults, trust levels roughly correspond to:
 *
 * - `low` – Passive resources only (no script execution, no styling or UI control).
 * 		Examples: `img-src`, `font-src`.
 * - `medium` – Content that may affect layout, styling, or embed external browsing contexts,
 *    but cannot directly run code in the page's JS execution environment or
 * 		perform other high-risk actions. Examples: `style-src`, `frame-src`, `frame-ancestors`.
 * - `high` – Sources that can execute code in the page's context or open powerful network
 *    channels. Examples: `script-src`, `connect-src`, `child-src`.
 * - `null` – No trust. This is used for directives that don't support sources.
 *
 */
export type Csp_Trust_Level = Array_Element<typeof csp_trust_levels>;

/**
 * Validates and extracts a CSP trust level from an unknown value.
 */
export const parse_csp_trust_level = (trust: unknown): Csp_Trust_Level | null =>
	csp_trust_levels.includes(trust as any) ? (trust as Csp_Trust_Level) : null;

export interface Csp_Source_Spec {
	source: Csp_Source;
	trust?: Csp_Trust_Level;
	directives?: Array<Csp_Directive>;
}

export interface Csp_Directive_Spec {
	name: Csp_Directive;
	fallback: Array<Csp_Directive> | null;
	fallback_of: Array<Csp_Directive> | null;
}

/**
 * Determines if a granted trust level is sufficient to satisfy a required trust level.
 *
 * Trust levels have the following hierarchy:
 * - 'high' sources can be used in high, medium, and low trust directives (highest privilege)
 * - 'medium' sources can be used in medium and low trust directives
 * - 'low' sources can only be used in low trust directives (lowest privilege)
 */
export const is_csp_trusted = (
	required_trust: Csp_Trust_Level | null | undefined,
	granted_trust: Csp_Trust_Level | null | undefined,
): boolean => {
	const required_value = required_trust && csp_trust_level_value[required_trust];
	const granted_value = granted_trust && csp_trust_level_value[granted_trust];

	if (required_value == null || granted_value == null) {
		return false;
	}

	// A source with higher trust privilege (higher value)
	// can be used in a directive with less privilege (lower value).
	return granted_value >= required_value;
};

/**
 * Helper to check if a directive value is `['none']`,
 * or more precisely for robustness with malformed values, checks for an array with `'none'`.
 */
const is_none_directive = (value: unknown): boolean =>
	Array.isArray(value) && value.includes('none');

/**
 * The base CSP directive defaults.
 * Prioritizes safety but loosens around media and styles, relying on defense-in-depth.
 * Customizable via `Create_Csp_Directives_Options.defaults`.
 */
export const csp_directive_value_defaults: Record<
	Csp_Directive,
	Csp_Directive_Value<Csp_Directive> | null
> = {
	'default-src': ['none'],
	'script-src': ['self'], // Locked down, eval is opt-in
	'script-src-elem': ['self'], // Script elements (standalone scripts)
	'script-src-attr': ['none'], // Block scripts in HTML attributes
	'style-src': ['self', 'unsafe-inline'], // Main style directive (uses unsafe-inline but network connections are disallowed by other directives)
	'style-src-elem': ['self', 'unsafe-inline'], // Style elements (standalone stylesheets)
	'style-src-attr': ['unsafe-inline'], // Style attributes
	'img-src': ['self', 'data:', 'blob:', 'filesystem:'], // Images
	'media-src': ['self', 'blob:', 'mediastream:', 'filesystem:'], // Audio/video
	'font-src': ['self', 'data:'], // Fonts
	'manifest-src': ['self'], // Web app manifests
	'child-src': ['none'], // Not trusted, extends default-src so worker-src and frame-src are additionally blocked
	'connect-src': ['self'], // Fetch, WebSockets
	'frame-src': ['self'], // Frames/iframes
	'frame-ancestors': ['self'], // Control what can embed this page
	'form-action': ['self'], // Form submission targets
	'worker-src': ['self', 'blob:'], // Web workers
	'object-src': ['none'], // Block plugins (Flash, Java, etc.)
	'base-uri': ['none'], // Prevent base tag hijacking
	'upgrade-insecure-requests': true, // Upgrade http to https
	'report-to': null, // Report violations (e.g. `'/csp-violation-report'`)
	'require-trusted-types-for': null,
	'trusted-types': null,
	sandbox: null,
};

/**
 * Sources that meet this trust requirement are included for it by default.
 * If null, no sources are added to the directive by default.
 * Directives that don't support sources are null.
 *
 * Feedback is welcome, please see the issues - https://github.com/ryanatkn/fuz/issues
 */
export const csp_directive_required_trust_defaults: Record<Csp_Directive, Csp_Trust_Level | null> =
	{
		'default-src': 'high',
		'script-src': 'high',
		'script-src-elem': 'high',
		'script-src-attr': 'high',
		'style-src': 'medium',
		'style-src-elem': 'medium',
		'style-src-attr': 'medium',
		'img-src': 'low',
		'media-src': 'low',
		'font-src': 'low',
		'manifest-src': null,
		'child-src': 'high',
		'connect-src': 'high',
		'frame-src': 'medium',
		'frame-ancestors': 'medium',
		'form-action': 'high',
		'worker-src': 'high',
		'object-src': null,
		'base-uri': null,
		'upgrade-insecure-requests': null,
		'report-to': null,
		'require-trusted-types-for': null,
		'trusted-types': null,
		sandbox: null,
	};

// CSP types from SvelteKit, adapted with changes from @sveltejs/kit/src/types/private.d.ts
//
// Based on https://github.com/sveltejs/kit/blob/main/packages/kit/src/types/private.d.ts
//
// Based on https://github.com/josh-hemphill/csp-typed-directives/blob/latest/src/csp.types.ts
//
// MIT License
//
// Copyright (c) 2021-present, Joshua Hemphill
// Copyright (c) 2021, Tecnico Corporation
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
export type Csp_Action_Source = 'strict-dynamic' | 'report-sample';
export type Csp_Base_Source =
	| 'self'
	| 'unsafe-eval'
	| 'unsafe-hashes'
	| 'unsafe-inline'
	| 'wasm-unsafe-eval'
	| 'none';
export type Csp_Crypto_Source = `${'nonce' | 'sha256' | 'sha384' | 'sha512'}-${string}`;
export type Csp_Frame_Source = Csp_Host_Source | Csp_Scheme_Source | 'self' | 'none';
export type Csp_Host_Name_Scheme = `${string}.${string}` | 'localhost';
export type Csp_Host_Source =
	`${Csp_Host_Protocol_Schemes}${Csp_Host_Name_Scheme}${Csp_Port_Scheme}`;
export type Csp_Host_Protocol_Schemes = `${string}://` | '';
export type Csp_Port_Scheme = `:${number}` | '' | ':*';
export type Csp_Scheme_Source =
	| 'http:'
	| 'https:'
	| 'data:'
	| 'mediastream:'
	| 'blob:'
	| 'filesystem:';
export type Csp_Source = Csp_Host_Source | Csp_Scheme_Source | Csp_Crypto_Source | Csp_Base_Source;
export type Csp_Sources = Array<Csp_Source>;

export interface Csp_Directives {
	'default-src'?: Array<Csp_Source | Csp_Action_Source>;
	'script-src'?: Array<Csp_Source | Csp_Action_Source>;
	'script-src-elem'?: Csp_Sources;
	'script-src-attr'?: Csp_Sources;
	'style-src'?: Array<Csp_Source | Csp_Action_Source>;
	'style-src-elem'?: Csp_Sources;
	'style-src-attr'?: Csp_Sources;
	'img-src'?: Csp_Sources;
	'media-src'?: Csp_Sources;
	'font-src'?: Csp_Sources;
	'manifest-src'?: Csp_Sources;
	'child-src'?: Csp_Sources;
	'connect-src'?: Csp_Sources;
	'frame-src'?: Csp_Sources;
	'frame-ancestors'?: Array<Csp_Host_Source | Csp_Scheme_Source | Csp_Frame_Source>;
	'form-action'?: Array<Csp_Source | Csp_Action_Source>;
	'worker-src'?: Csp_Sources;
	'object-src'?: Csp_Sources;
	'base-uri'?: Array<Csp_Source | Csp_Action_Source>;
	'upgrade-insecure-requests'?: boolean;
	'report-to'?: Array<string>;
	'require-trusted-types-for'?: Array<'script'>;
	'trusted-types'?: Array<'none' | 'allow-duplicates' | '*' | string>; // eslint-disable-line @typescript-eslint/no-redundant-type-constituents
	sandbox?: Array<
		| 'allow-downloads-without-user-activation'
		| 'allow-forms'
		| 'allow-modals'
		| 'allow-orientation-lock'
		| 'allow-pointer-lock'
		| 'allow-popups'
		| 'allow-popups-to-escape-sandbox'
		| 'allow-presentation'
		| 'allow-same-origin'
		| 'allow-scripts'
		| 'allow-storage-access-by-user-activation'
		| 'allow-top-navigation'
		| 'allow-top-navigation-by-user-activation'
	>;
}
```

```ts
// src/lib/csp_directive_specs.ts

import type {Csp_Directive, Csp_Directive_Spec} from '$lib/csp.js';

/**
 * Static data descriptors for the CSP directives.
 * Fuz excludes deprecated directives, so those are intentionally omitted,
 * but any newer missing directives are bugs.
 *
 * Could be moved to `csp.ts` but is currently here to keep that module smaller.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
 */
export const csp_directive_specs: Array<Csp_Directive_Spec> = [
	{
		name: 'default-src',
		fallback: null,
		fallback_of: [
			'script-src',
			'script-src-elem',
			'script-src-attr',
			'style-src',
			'style-src-elem',
			'style-src-attr',
			'img-src',
			'media-src',
			'font-src',
			'manifest-src',
			'child-src',
			'connect-src',
			'worker-src',
			'object-src',
		],
	},
	{
		name: 'script-src',
		fallback: ['default-src'],
		fallback_of: ['script-src-elem', 'script-src-attr', 'worker-src'],
	},
	{
		name: 'script-src-elem',
		fallback: ['script-src', 'default-src'],
		fallback_of: null,
	},
	{
		name: 'script-src-attr',
		fallback: ['script-src', 'default-src'],
		fallback_of: null,
	},
	{
		name: 'style-src',
		fallback: ['default-src'],
		fallback_of: ['style-src-elem', 'style-src-attr'],
	},
	{
		name: 'style-src-elem',
		fallback: ['style-src', 'default-src'],
		fallback_of: null,
	},
	{
		name: 'style-src-attr',
		fallback: ['style-src', 'default-src'],
		fallback_of: null,
	},
	{
		name: 'img-src',
		fallback: ['default-src'],
		fallback_of: null,
	},
	{
		name: 'media-src',
		fallback: ['default-src'],
		fallback_of: null,
	},
	{
		name: 'font-src',
		fallback: ['default-src'],
		fallback_of: null,
	},
	{
		name: 'manifest-src',
		fallback: ['default-src'],
		fallback_of: null,
	},
	{
		name: 'child-src',
		fallback: ['default-src'],
		fallback_of: ['frame-src', 'worker-src'],
	},
	{
		name: 'connect-src',
		fallback: ['default-src'],
		fallback_of: null,
	},
	{
		name: 'frame-src',
		fallback: ['child-src'],
		fallback_of: null,
	},
	{
		name: 'frame-ancestors',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'form-action',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'worker-src',
		fallback: ['child-src', 'script-src', 'default-src'],
		fallback_of: null,
	},
	{
		name: 'object-src',
		fallback: ['default-src'],
		fallback_of: null,
	},
	{
		name: 'base-uri',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'upgrade-insecure-requests',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'report-to',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'require-trusted-types-for',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'trusted-types',
		fallback: null,
		fallback_of: null,
	},
	{
		name: 'sandbox',
		fallback: null,
		fallback_of: null,
	},
];

export const csp_directive_spec_by_name: Map<Csp_Directive, Csp_Directive_Spec> = new Map(
	csp_directive_specs.map((s) => [s.name, s]),
);
```

````ts
// src/lib/csp_of_ryanatkn.ts

import type {Csp_Source_Spec} from '$lib/csp.js';

// TODO BLOCK make a library entry for this

/**
 * List of trusted sources owned by ryanatkn (me, ryanatkn.com).
 *
 * These are domains with a `low` trust level, meaning they will only be included in
 * low-risk CSP directives like img-src, but not in script-src or style-src.
 *
 * Usage example:
 *
 * ```ts
 * import {create_csp_directives} from '@ryanatkn/fuz/csp.js';
 * import {csp_trusted_sources_of_ryanatkn} from '@ryanatkn/fuz/csp_of_ryanatkn.js';
 *
 * // Create CSP directives with these trusted sources
 * const csp = create_csp_directives({
 *   trusted_sources: csp_trusted_sources_of_ryanatkn,
 * });
 *
 * // You can also override or transform directives:
 * const custom_csp = create_csp_directives({
 *   trusted_sources: csp_trusted_sources_of_ryanatkn,
 *   directives: {
 *     // Add additional domains to existing values:
 *     'img-src': (v) => [...v, 'trusted.domain'], // extend trusted sources
 *
 *      // Or completely replace values:
 *     'connect-src': ['self', 'trusted.domain'], // no base trusted sources!
 *     'connect-src': () => ['self', 'trusted.domain'], // equivalent
 *
 *     // Example opt-in to eval:
 *     'script-src-elem': (v) => [...v, 'unsafe-eval', 'wasm-unsafe-eval'], // alert alert
 *   },
 * });
 * ```
 */
export const csp_trusted_sources_of_ryanatkn: Array<Csp_Source_Spec> = [
	{source: 'https://*.ryanatkn.com/', trust: 'low'},
	{source: 'https://*.spiderspace.org/', trust: 'low'},
	{source: 'https://*.webdevladder.net/', trust: 'low'},
	{source: 'https://*.dealt.dev/', trust: 'low'},
	{source: 'https://*.fuz.dev/', trust: 'low'},
	{source: 'https://*.ztack.net/', trust: 'low'},
	{source: 'https://*.grogarden.org/', trust: 'low'},
	{source: 'https://*.zzz.software/', trust: 'low'},
	{source: 'https://*.zzzbot.dev/', trust: 'low'},
	{source: 'https://*.cosmicplayground.org/', trust: 'low'},
	{source: 'https://ryanatkn.github.io/', trust: 'low'},
];
````

```ts
// src/lib/csp.test.ts

import {test} from 'uvu';
import * as assert from 'uvu/assert';
import type {KitConfig} from '@sveltejs/kit';
import type {Defined} from '@ryanatkn/belt/types.js';

import {
	create_csp_directives,
	is_csp_trusted,
	parse_csp_trust_level,
	type Csp_Trust_Level,
	type Csp_Source_Spec,
	type Csp_Directives,
	csp_directive_value_defaults,
} from '$lib/csp.js';
import {csp_directive_specs} from '$lib/csp_directive_specs.js';

// Type tests, this errors if Csp_Directives is not assignable to SvelteKit's directives type. (which isn't exported directly)
type Kit_Csp_Directives = Defined<KitConfig['csp']>['directives'];
const assert_csp_directives: Kit_Csp_Directives = {} as Csp_Directives;
assert_csp_directives;

// Test constants
const TRUSTED = 'trusted.domain';
const TRUSTED_A = 'a.trusted.domain';
const TRUSTED_2 = 'trusted2.domain';
const STATIC_OVERRIDE = 'static-override.domain';
const FUNCTION_ADDED = 'function-added.domain';
const COMPLETE_OVERRIDE = 'complete-override.domain';
const EVIL_DOMAIN = 'evil.domain';
const DEFAULT_OVERRIDE = 'default-override.domain';
const SECONDARY_DEFAULT = 'secondary-default.domain';

// Helper functions for tests
const create_test_source = (source: string, trust: Csp_Trust_Level): Csp_Source_Spec => ({
	source: source as any,
	trust,
});

test('create_csp_directives produces defaults with no options', () => {
	const csp = create_csp_directives();

	// Check a few directives match their specs
	for (const spec of csp_directive_specs) {
		const default_value = csp_directive_value_defaults[spec.name];
		if (default_value !== null) {
			assert.equal(
				csp[spec.name],
				default_value,
				`${spec.name} should match its spec default value`,
			);
		}
	}

	// Check specific examples
	assert.equal(csp['default-src'], ['none']);
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['img-src'], ['self', 'data:', 'blob:', 'filesystem:']);
	assert.is(csp['upgrade-insecure-requests'], true);
});

test('trusted sources are added to directives based on trust level', () => {
	// Test high trust source
	const csp_high = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
	});

	// High trust sources should be in all directives with required_trust
	assert.ok(csp_high['script-src']!.includes(TRUSTED), 'high trust source should be in script-src');
	assert.ok(
		csp_high['connect-src']!.includes(TRUSTED),
		'high trust source should be in connect-src',
	);
	assert.ok(
		csp_high['style-src']!.includes(TRUSTED),
		'high trust source should be in style-src (medium)',
	);
	assert.ok(csp_high['img-src']!.includes(TRUSTED), 'high trust source should be in img-src (low)');

	// Test medium trust source
	const csp_medium = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'medium')],
	});

	// Medium trust sources should not be in high trust directives
	assert.not.ok(
		csp_medium['script-src']!.includes(TRUSTED),
		'medium trust source should not be in script-src',
	);
	assert.not.ok(
		csp_medium['connect-src']!.includes(TRUSTED),
		'medium trust source should not be in connect-src',
	);

	// Medium trust sources should be in medium and low trust directives
	assert.ok(
		csp_medium['style-src']!.includes(TRUSTED),
		'medium trust source should be in style-src',
	);
	assert.ok(csp_medium['img-src']!.includes(TRUSTED), 'medium trust source should be in img-src');

	// Test low trust source
	const csp_low = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'low')],
	});

	// Low trust sources should not be in high or medium trust directives
	assert.not.ok(
		csp_low['script-src']!.includes(TRUSTED),
		'low trust source should not be in script-src',
	);
	assert.not.ok(
		csp_low['connect-src']!.includes(TRUSTED),
		'low trust source should not be in connect-src',
	);
	assert.not.ok(
		csp_low['style-src']!.includes(TRUSTED),
		'low trust source should not be in style-src',
	);

	// Low trust sources should be in low trust directives
	assert.ok(csp_low['img-src']!.includes(TRUSTED), 'low trust source should be in img-src');
});

test('multiple trusted sources with different trust levels', () => {
	const sources = [
		create_test_source(TRUSTED, 'high'),
		create_test_source(TRUSTED_2, 'medium'),
		create_test_source(TRUSTED_A, 'low'),
	];

	const csp = create_csp_directives({trusted_sources: sources});

	// Check high trust source
	assert.ok(csp['script-src']!.includes(TRUSTED), 'high trust source should be in script-src');
	assert.ok(csp['style-src']!.includes(TRUSTED), 'high trust source should be in style-src');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'high trust source should be in img-src');

	// Check medium trust source
	assert.not.ok(
		csp['script-src']!.includes(TRUSTED_2),
		'medium trust source should not be in script-src',
	);
	assert.ok(csp['style-src']!.includes(TRUSTED_2), 'medium trust source should be in style-src');
	assert.ok(csp['img-src']!.includes(TRUSTED_2), 'medium trust source should be in img-src');

	// Check low trust source
	assert.not.ok(
		csp['script-src']!.includes(TRUSTED_A),
		'low trust source should not be in script-src',
	);
	assert.not.ok(
		csp['style-src']!.includes(TRUSTED_A),
		'low trust source should not be in style-src',
	);
	assert.ok(csp['img-src']!.includes(TRUSTED_A), 'low trust source should be in img-src');
});

test('static directive replacement', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE],
		},
	});

	// The static replacement should override defaults and trusted sources
	assert.equal(csp['script-src'], ['self', STATIC_OVERRIDE]);

	// Other directives should still have trusted sources
	assert.ok(
		csp['connect-src']!.includes(TRUSTED),
		'connect-src should still include trusted source',
	);
});

test('directive transformer function', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': (value) => [...value, FUNCTION_ADDED],
		},
	});

	// The transform should add to the existing values, including trusted sources
	assert.ok(csp['script-src']!.includes('self'), 'script-src should keep default values');
	assert.ok(csp['script-src']!.includes(TRUSTED), 'script-src should keep trusted source');
	assert.ok(csp['script-src']!.includes(FUNCTION_ADDED), 'script-src should add function source');

	// Other directives should be unaffected
	assert.not.ok(
		csp['connect-src']!.includes(FUNCTION_ADDED),
		'connect-src should not have function source',
	);
});

test('directive transformer with complete replacement', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': () => [COMPLETE_OVERRIDE],
		},
	});

	// The transform should completely replace the values, including defaults and trusted sources
	assert.equal(csp['connect-src'], [COMPLETE_OVERRIDE]);

	// Other directives should still have trusted sources
	assert.ok(csp['script-src']!.includes(TRUSTED), 'script-src should keep trusted source');
});

test('transformers receive values after trusted sources are added', () => {
	let received_value: any = null;

	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': (value) => {
				received_value = value;
				return [COMPLETE_OVERRIDE];
			},
		},
	});

	// Verify that trusted sources were added before transform was called
	assert.ok(received_value.includes(TRUSTED), 'Trusted sources should be added before transform');
	assert.equal(csp['connect-src'], [COMPLETE_OVERRIDE]);
});

test('difference between append and replace transform patterns', () => {
	// Append transform pattern keeps existing values
	const append_csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': (value) => [...value, FUNCTION_ADDED],
		},
	});

	// transform should preserve defaults and trusted sources and append the new value
	assert.ok(append_csp['connect-src']!.includes('self'), 'transform should keep default values');
	assert.ok(append_csp['connect-src']!.includes(TRUSTED), 'transform should keep trusted sources');
	assert.ok(append_csp['connect-src']!.includes(FUNCTION_ADDED), 'transform should add new values');

	// Replace transform pattern completely replaces all values
	const replace_csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': () => [FUNCTION_ADDED],
		},
	});

	// transform with complete replacement should completely replace with just the provided values
	assert.equal(
		replace_csp['connect-src'],
		[FUNCTION_ADDED],
		'transform with replacement should use only provided values',
	);
	assert.not.ok(
		replace_csp['connect-src']!.includes('self'),
		'transform with replacement should not keep default values',
	);
	assert.not.ok(
		replace_csp['connect-src']!.includes(TRUSTED),
		'transform with replacement should not keep trusted sources',
	);
});

test('directives option takes precedence over trusted sources', () => {
	// Using static directives
	const csp1 = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE],
			'connect-src': ['self', STATIC_OVERRIDE],
		},
	});

	// Static directives should override defaults and not include trusted sources
	assert.equal(
		csp1['script-src'],
		['self', STATIC_OVERRIDE],
		'static directive should override defaults and trusted sources',
	);
	assert.equal(
		csp1['connect-src'],
		['self', STATIC_OVERRIDE],
		'static directive should override defaults and trusted sources',
	);

	// Values should not contain trusted sources
	assert.not.ok(
		csp1['script-src']!.includes(TRUSTED),
		'static directive should remove trusted sources',
	);
	assert.not.ok(
		csp1['connect-src']!.includes(TRUSTED),
		'static directive should remove trusted sources',
	);
});

test('both static and transformer directives work together', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE], // Static value
			'img-src': (value) => [...value, FUNCTION_ADDED], // Transform function
		},
	});

	// Check static directive worked
	assert.equal(csp['script-src'], ['self', STATIC_OVERRIDE]);
	assert.not.ok(
		csp['script-src']!.includes(TRUSTED),
		'static directive should remove trusted sources',
	);

	// Check transform function worked
	assert.ok(csp['img-src']!.includes('self'), 'img-src should keep default sources');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'img-src should keep trusted source');
	assert.ok(csp['img-src']!.includes(FUNCTION_ADDED), 'img-src should add function source');
});

test('required_trust_overrides changes which sources are included', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'medium')],
		required_trust_defaults: {
			// Lower trust requirement from high to medium
			'script-src': 'medium',
			// Raise trust requirement from low to high
			'img-src': 'high',
		},
	});

	// Medium trust source should now be included in script-src (default requirement is high)
	assert.ok(
		csp['script-src']!.includes(TRUSTED),
		'medium source should be in script-src after lowering requirement',
	);

	// Medium trust source should no longer be included in img-src (default requirement is low)
	assert.not.ok(
		csp['img-src']!.includes(TRUSTED),
		'medium source should not be in img-src after raising requirement',
	);
});

test('required_trust_overrides of null prevents trusted sources from being added', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		required_trust_defaults: {
			'connect-src': null,
		},
	});

	// No trusted sources should be added to connect-src
	assert.not.ok(
		csp['connect-src']!.includes(TRUSTED),
		'connect-src should not include trusted source when required_trust is null',
	);

	// Other directives should still have trusted sources
	assert.ok(csp['script-src']!.includes(TRUSTED), 'script-src should still include trusted source');
});

test('directive transformer with undefined return removes directive', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': () => undefined, // Return undefined to remove the directive
		},
	});

	// The directive should be removed from the output
	assert.is(csp['script-src'], undefined, 'script-src should be undefined/removed');
	assert.is('script-src' in csp, false, 'script-src should not be in the object');

	// Other directives should still exist
	assert.ok('connect-src' in csp, 'connect-src should still exist');
});

test('trusted sources are not added to directives with value ["none"]', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['none'],
		},
	});

	// Directive with ['none'] should remain ['none'], trusted sources should not be added
	assert.equal(csp['script-src'], ['none'], "script-src should remain ['none']");

	// Other directives should still get trusted sources
	assert.ok(csp['connect-src']!.includes(TRUSTED), 'connect-src should get trusted sources');
});

test('transformer can change directives with ["none"]', () => {
	const csp = create_csp_directives({
		directives: {
			'script-src': ['none'], // First set to none
			'default-src': (value) => {
				// default-src is already ['none'] by default
				assert.equal(value, ['none'], "Function should receive the original ['none'] value");
				return ['self', TRUSTED];
			},
		},
	});

	// Function should be able to override ['none'] directives
	assert.equal(csp['default-src'], ['self', TRUSTED]);
});

test('source with both trust level and specific directives uses both behaviors additively', () => {
	const csp_combined = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED,
				trust: 'low',
				directives: ['script-src'], // Explicitly add to script-src even with low trust
			},
		],
	});

	// Source should be in script-src due to explicit directive inclusion
	assert.ok(
		csp_combined['script-src']!.includes(TRUSTED),
		'source should be in explicitly specified directive despite low trust level',
	);

	// Source should also be in other low-trust directives due to trust level
	assert.ok(
		csp_combined['img-src']!.includes(TRUSTED),
		'source should also be in img-src due to low trust level',
	);

	// Source should NOT be in medium or high trust directives (only where explicitly added)
	assert.not.ok(
		csp_combined['style-src']!.includes(TRUSTED),
		'low trust source should not be in style-src (medium trust)',
	);
	assert.not.ok(
		csp_combined['connect-src']!.includes(TRUSTED),
		'low trust source should not be in connect-src (high trust)',
	);
});

test('source with only specific directives is added only to those directives', () => {
	const csp_directives_only = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED_2,
				directives: ['script-src'], // Only specify directives, no trust level
			},
		],
	});

	// Source should be in script-src due to explicit inclusion
	assert.ok(
		csp_directives_only['script-src']!.includes(TRUSTED_2),
		'source with only directives should be in specified directive',
	);

	// Source should NOT be in other directives when no trust is specified
	assert.not.ok(
		csp_directives_only['img-src']!.includes(TRUSTED_2),
		'source with only directives should not be in low trust directive (img-src)',
	);
	assert.not.ok(
		csp_directives_only['style-src']!.includes(TRUSTED_2),
		'source with only directives should not be in medium trust directive (style-src)',
	);
	assert.not.ok(
		csp_directives_only['connect-src']!.includes(TRUSTED_2),
		'source with only directives should not be in high trust directive (connect-src)',
	);
});

test('trust is optional when directives are specified', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED,
				// No trust specified, only explicit directives
				directives: ['script-src', 'connect-src'],
			},
		],
	});

	// Source should be added to explicitly specified directives
	assert.ok(csp['script-src']!.includes(TRUSTED), 'source should be in script-src');
	assert.ok(csp['connect-src']!.includes(TRUSTED), 'source should be in connect-src');

	// Source should not be added to other directives
	assert.not.ok(csp['img-src']!.includes(TRUSTED), 'source should not be in img-src');
	assert.not.ok(csp['style-src']!.includes(TRUSTED), 'source should not be in style-src');
});

test('directives is optional when trust is specified', () => {
	// Just specifying trust level is the original behavior
	const csp = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED,
				trust: 'medium',
				// No directives specified
			},
		],
	});

	// Should follow trust level rules
	assert.not.ok(
		csp['script-src']!.includes(TRUSTED),
		'medium trusted source should not be in script-src',
	);
	assert.ok(csp['style-src']!.includes(TRUSTED), 'medium trusted source should be in style-src');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'medium trusted source should be in img-src');
});

test('both trust and directives can be specified for additive behavior', () => {
	// Using both trust level and specific directives
	const csp = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED,
				trust: 'medium',
				// Add to connect-src despite medium trust not normally being sufficient
				directives: ['connect-src'],
			},
		],
	});

	// Explicit directive should work regardless of trust
	assert.ok(
		csp['connect-src']!.includes(TRUSTED),
		'medium trusted source should be in connect-src due to explicit directive',
	);

	// Trust level should still apply normally for non-specified directives
	assert.not.ok(
		csp['script-src']!.includes(TRUSTED),
		'medium trusted source should not be in script-src',
	);
	assert.ok(csp['style-src']!.includes(TRUSTED), 'medium trusted source should be in style-src');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'medium trusted source should be in img-src');
});

// Fix for the failing test
test('directive with specific sources for specific directives', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED,
				trust: 'medium',
				directives: ['connect-src'], // Explicitly allow in connect-src (normally high trust)
			},
		],
	});

	// Source should be in connect-src due to explicit directive
	assert.ok(
		csp['connect-src']!.includes(TRUSTED),
		'source should be in explicitly specified directive',
	);

	// Source should also be in medium and low trust directives due to trust level
	assert.ok(csp['style-src']!.includes(TRUSTED), 'source should be in medium trust directives');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'source should be in low trust directives');
});

test('result is deeply frozen', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
	});

	// Check that the result object is frozen
	assert.is(Object.isFrozen(csp), true, 'CSP object should be frozen');

	// Check that arrays are frozen
	assert.is(Object.isFrozen(csp['script-src']), true, 'Arrays should be frozen');

	// Attempt to modify properties
	assert.throws(
		() => {
			// @ts-ignore - We're testing runtime behavior
			csp['script-src'] = [EVIL_DOMAIN];
		},
		TypeError,
		'Should not allow modifying properties on frozen CSP object',
	);

	// Attempt to modify arrays
	const script_src = csp['script-src']!;
	assert.throws(
		() => {
			// @ts-ignore - We're testing runtime behavior
			script_src.push(EVIL_DOMAIN);
		},
		TypeError,
		'Arrays in the result should be frozen',
	);
});

test('is_csp_trusted correctly compares trust levels', () => {
	// Higher or equal trust is allowed
	assert.is(is_csp_trusted('high', 'high'), true, 'high trust should satisfy high requirement');
	assert.is(is_csp_trusted('medium', 'high'), true, 'high trust should satisfy medium requirement');
	assert.is(is_csp_trusted('low', 'high'), true, 'high trust should satisfy low requirement');

	assert.is(
		is_csp_trusted('medium', 'medium'),
		true,
		'medium trust should satisfy medium requirement',
	);
	assert.is(is_csp_trusted('low', 'medium'), true, 'medium trust should satisfy low requirement');

	assert.is(is_csp_trusted('low', 'low'), true, 'low trust should satisfy low requirement');

	// Lower trust is not allowed
	assert.is(
		is_csp_trusted('high', 'medium'),
		false,
		'medium trust should not satisfy high requirement',
	);
	assert.is(is_csp_trusted('high', 'low'), false, 'low trust should not satisfy high requirement');
	assert.is(
		is_csp_trusted('medium', 'low'),
		false,
		'low trust should not satisfy medium requirement',
	);

	// Null or undefined values
	assert.is(is_csp_trusted(null, 'high'), false, 'null required_trust should return false');
	assert.is(is_csp_trusted('high', null), false, 'null granted_trust should return false');
	assert.is(
		is_csp_trusted(undefined, 'high'),
		false,
		'undefined required_trust should return false',
	);
	assert.is(
		is_csp_trusted('high', undefined),
		false,
		'undefined granted_trust should return false',
	);
});

test('parse_csp_trust_level validates trust levels', () => {
	assert.is(parse_csp_trust_level('high'), 'high');
	assert.is(parse_csp_trust_level('medium'), 'medium');
	assert.is(parse_csp_trust_level('low'), 'low');

	assert.is(parse_csp_trust_level('invalid'), null);
	assert.is(parse_csp_trust_level(undefined), null);
	assert.is(parse_csp_trust_level(null), null);
	assert.is(parse_csp_trust_level(123), null);
});

test('non-array directives are handled correctly', () => {
	const csp = create_csp_directives({
		directives: {
			// upgrade-insecure-requests is true by default
			'upgrade-insecure-requests': false,
		},
	});

	assert.is(csp['upgrade-insecure-requests'], false, 'boolean directive should be set correctly');
});

test('directive with specific sources for specific directives', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			{
				source: TRUSTED,
				trust: 'medium',
				directives: ['connect-src'], // Explicitly allow in connect-src (normally high trust)
			},
		],
	});

	// Source should be in connect-src despite medium trust level
	assert.ok(
		csp['connect-src']!.includes(TRUSTED),
		'source should be in explicitly specified directive',
	);

	// Source should also be in medium and low trust directives
	assert.ok(csp['style-src']!.includes(TRUSTED), 'source should be in medium trust directives');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'source should be in low trust directives');
});

test('mixed directives and trusted_sources with trust overrides', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'medium'), create_test_source(TRUSTED_2, 'low')],
		directives: {
			'style-src': (value) => [...value, FUNCTION_ADDED],
			'img-src': ['self', STATIC_OVERRIDE],
		},
		required_trust_defaults: {
			'connect-src': 'low', // Lower from high to low
		},
	});

	// Check trust override worked
	assert.ok(
		csp['connect-src']!.includes(TRUSTED),
		'medium trust source should be in connect-src with lowered requirement',
	);
	assert.ok(
		csp['connect-src']!.includes(TRUSTED_2),
		'low trust source should be in connect-src with lowered requirement',
	);

	// Check style-src transform worked with trusted sources
	assert.ok(csp['style-src']!.includes(TRUSTED), 'medium trust source should be in style-src');
	assert.not.ok(
		csp['style-src']!.includes(TRUSTED_2),
		'low trust source should not be in style-src',
	);
	assert.ok(
		csp['style-src']!.includes(FUNCTION_ADDED),
		'function added source should be in style-src',
	);

	// Check img-src static override completely replaced trusted sources
	assert.equal(csp['img-src'], ['self', STATIC_OVERRIDE], 'img-src should be completely replaced');
	assert.not.ok(
		csp['img-src']!.includes(TRUSTED),
		'trusted sources should not be in static override',
	);
});

test('defaults option overrides base defaults', () => {
	const csp = create_csp_directives({
		value_defaults: {
			'img-src': ['self', DEFAULT_OVERRIDE],
			'connect-src': ['self', DEFAULT_OVERRIDE],
		},
	});

	// Check that defaults are applied
	assert.equal(csp['img-src'], ['self', DEFAULT_OVERRIDE]);
	assert.equal(csp['connect-src'], ['self', DEFAULT_OVERRIDE]);

	// Other directives should use original defaults
	assert.equal(csp['script-src'], ['self']);
});

test('defaults are overridden by directives option', () => {
	const csp = create_csp_directives({
		value_defaults: {
			'img-src': ['self', DEFAULT_OVERRIDE],
			'connect-src': ['self', DEFAULT_OVERRIDE],
		},
		directives: {
			'img-src': ['self', STATIC_OVERRIDE],
		},
	});

	// The directives option should take precedence over defaults
	assert.equal(csp['img-src'], ['self', STATIC_OVERRIDE]);

	// Other default changes should still apply
	assert.equal(csp['connect-src'], ['self', DEFAULT_OVERRIDE]);
});

test('defaults option with trusted sources', () => {
	const csp = create_csp_directives({
		value_defaults: {
			'img-src': ['self', DEFAULT_OVERRIDE],
			'connect-src': ['self', DEFAULT_OVERRIDE],
		},
		trusted_sources: [create_test_source(TRUSTED, 'high')],
	});

	// Trusted sources should be added to the defaults
	assert.ok(csp['img-src']!.includes(DEFAULT_OVERRIDE), 'default value should be present');
	assert.ok(csp['img-src']!.includes(TRUSTED), 'trusted source should be added to default');
	assert.ok(csp['connect-src']!.includes(DEFAULT_OVERRIDE), 'default value should be present');
	assert.ok(csp['connect-src']!.includes(TRUSTED), 'trusted source should be added to default');
});

test('boolean directive in defaults', () => {
	const csp_with_boolean = create_csp_directives({
		value_defaults: {
			'upgrade-insecure-requests': false,
		},
	});

	assert.is(csp_with_boolean['upgrade-insecure-requests'], false);
});

test('multiple defaults combined with other options', () => {
	const csp = create_csp_directives({
		value_defaults: {
			'img-src': ['self', DEFAULT_OVERRIDE, SECONDARY_DEFAULT],
			'script-src': ['self', DEFAULT_OVERRIDE],
		},
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': (value) => [...value, FUNCTION_ADDED],
		},
	});

	// Check img-src has defaults and trusted sources
	assert.ok(csp['img-src']!.includes(DEFAULT_OVERRIDE), 'img-src should have first default value');
	assert.ok(
		csp['img-src']!.includes(SECONDARY_DEFAULT),
		'img-src should have second default value',
	);
	assert.ok(csp['img-src']!.includes(TRUSTED), 'img-src should have trusted source');

	// Check script-src has defaults, trusted sources, and function added value
	assert.ok(csp['script-src']!.includes(DEFAULT_OVERRIDE), 'script-src should have default value');
	assert.ok(csp['script-src']!.includes(TRUSTED), 'script-src should have trusted source');
	assert.ok(
		csp['script-src']!.includes(FUNCTION_ADDED),
		'script-src should have function added value',
	);
});

test('defaults option with null values', () => {
	const csp = create_csp_directives({
		value_defaults: {
			// Remove an existing directive
			'img-src': null,
		},
	});

	// The directive should be removed
	assert.is(csp['img-src'], undefined, 'img-src should be undefined/removed');
	assert.is('img-src' in csp, false, 'img-src should not be in the object');

	// Other directives should still exist
	assert.ok('script-src' in csp, 'script-src should still exist');
});

test.run();
```
