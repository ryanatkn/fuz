import {assert} from 'vitest';
import type {Csp_Trust_Level, Csp_Source_Spec, Csp_Directives, Csp_Directive} from '$lib/csp.js';

// Test domain constants
export const TEST_SOURCES = {
	TRUSTED: 'trusted.domain',
	TRUSTED_A: 'a.trusted.domain',
	TRUSTED_2: 'trusted2.domain',
	STATIC_OVERRIDE: 'static-override.domain',
	FUNCTION_ADDED: 'function-added.domain',
	COMPLETE_OVERRIDE: 'complete-override.domain',
	DEFAULT_OVERRIDE: 'default-override.domain',
	SECONDARY_DEFAULT: 'secondary-default.domain',
	// Real-world sources
	GOOGLE_FONTS: 'fonts.googleapis.com',
	GOOGLE_FONTS_STATIC: 'fonts.gstatic.com',
	CLOUDFLARE_CDN: 'cdnjs.cloudflare.com',
	ANALYTICS: 'analytics.example.com',
	STRIPE: 'js.stripe.com',
} as const;

/**
 * Creates a test source spec with a trust level.
 */
export const create_test_source = (source: string, trust: Csp_Trust_Level): Csp_Source_Spec => ({
	source: source as any,
	trust,
});

/**
 * Creates a test source spec with explicit directives.
 */
export const create_test_source_with_directives = (
	source: string,
	directives: Array<Csp_Directive>,
): Csp_Source_Spec => ({
	source: source as any,
	directives,
});

/**
 * Creates a test source spec with both trust and directives.
 */
export const create_test_source_with_both = (
	source: string,
	trust: Csp_Trust_Level,
	directives: Array<Csp_Directive>,
): Csp_Source_Spec => ({
	source: source as any,
	trust,
	directives,
});

/**
 * Asserts that a source is included in a directive.
 */
export const assert_source_in_directive = (
	csp: Csp_Directives,
	directive: Csp_Directive,
	source: string,
	message?: string,
): void => {
	const directive_value = csp[directive];
	assert.ok(
		Array.isArray(directive_value) && (directive_value as Array<any>).includes(source),
		message || `${source} should be in ${directive}`,
	);
};

/**
 * Asserts that a source is not included in a directive.
 */
export const assert_source_not_in_directive = (
	csp: Csp_Directives,
	directive: Csp_Directive,
	source: string,
	message?: string,
): void => {
	const directive_value = csp[directive];
	assert.ok(
		!Array.isArray(directive_value) || !(directive_value as Array<any>).includes(source),
		message || `${source} should not be in ${directive}`,
	);
};

/**
 * Asserts that a directive exists in the CSP.
 */
export const assert_directive_exists = (
	csp: Csp_Directives,
	directive: Csp_Directive,
	message?: string,
): void => {
	assert.ok(directive in csp, message || `${directive} should exist in CSP`);
};

/**
 * Asserts that a directive does not exist in the CSP.
 */
export const assert_directive_not_exists = (
	csp: Csp_Directives,
	directive: Csp_Directive,
	message?: string,
): void => {
	assert.ok(!(directive in csp), message || `${directive} should not exist in CSP`);
};

/**
 * Asserts that a directive has a specific value.
 */
export const assert_directive_equals = (
	csp: Csp_Directives,
	directive: Csp_Directive,
	expected: any,
	message?: string,
): void => {
	assert.deepEqual(csp[directive], expected, message || `${directive} should equal expected value`);
};
