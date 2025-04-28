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
