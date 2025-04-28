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
