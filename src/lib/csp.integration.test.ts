import {test, assert} from 'vitest';

import {create_csp_directives, COLOR_SCHEME_SCRIPT_HASH} from '$lib/csp.js';
import {
	create_test_source,
	create_test_source_with_directives,
	create_test_source_with_both,
	TEST_SOURCES,
	assert_source_in_directive,
	assert_source_not_in_directive,
} from '$lib/csp_test_helpers.js';

const {
	TRUSTED,
	TRUSTED_2,
	DEFAULT_OVERRIDE,
	FUNCTION_ADDED,
	STATIC_OVERRIDE,
	GOOGLE_FONTS,
	GOOGLE_FONTS_STATIC,
	CLOUDFLARE_CDN,
	ANALYTICS,
	STRIPE,
} = TEST_SOURCES;

// ============================================================================
// Complex combinations of multiple options
// ============================================================================

test('integration: all options combined', () => {
	const csp = create_csp_directives({
		value_defaults_base: {
			'script-src': ['self'],
			'img-src': ['self'],
		},
		value_defaults: {
			'script-src': ['self', DEFAULT_OVERRIDE as any], // Override base
			'connect-src': ['self'], // Add new directive
		},
		required_trust_defaults_base: {
			'script-src': 'high',
			'img-src': 'low',
		},
		required_trust_defaults: {
			'connect-src': 'medium', // Add trust requirement
		},
		trusted_sources: [
			create_test_source(TRUSTED, 'high'),
			create_test_source(TRUSTED_2, 'medium'),
		],
		directives: {
			'script-src': (value) => [...value, FUNCTION_ADDED as any],
			'img-src': ['self', STATIC_OVERRIDE as any], // Complete override
		},
	});

	// script-src: defaults + trusted high + function added
	assert_source_in_directive(csp, 'script-src', 'self');
	assert_source_in_directive(csp, 'script-src', DEFAULT_OVERRIDE);
	assert_source_in_directive(csp, 'script-src', TRUSTED);
	assert_source_in_directive(csp, 'script-src', FUNCTION_ADDED);
	assert_source_not_in_directive(csp, 'script-src', TRUSTED_2); // medium not high enough

	// img-src: completely replaced by static directive
	assert.deepEqual(csp['img-src'], ['self', STATIC_OVERRIDE]);

	// connect-src: defaults + high and medium trusted sources (requirement is medium)
	assert_source_in_directive(csp, 'connect-src', 'self');
	assert_source_in_directive(csp, 'connect-src', TRUSTED);
	assert_source_in_directive(csp, 'connect-src', TRUSTED_2);
});

test('integration: mixed directives + trusted_sources + trust overrides', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			create_test_source(TRUSTED, 'medium'),
			create_test_source(TRUSTED_2, 'low'),
		],
		directives: {
			'style-src': (value) => [...value, FUNCTION_ADDED as any],
			'img-src': ['self', STATIC_OVERRIDE as any],
		},
		required_trust_defaults: {
			'connect-src': 'low', // Lower from high to low
		},
	});

	// Check trust override worked
	assert_source_in_directive(
		csp,
		'connect-src',
		TRUSTED,
		'medium trust source should be in connect-src with lowered requirement',
	);
	assert_source_in_directive(
		csp,
		'connect-src',
		TRUSTED_2,
		'low trust source should be in connect-src with lowered requirement',
	);

	// Check style-src transform worked with trusted sources
	assert_source_in_directive(csp, 'style-src', TRUSTED, 'medium trust source should be in style-src');
	assert_source_not_in_directive(
		csp,
		'style-src',
		TRUSTED_2,
		'low trust source should not be in style-src',
	);
	assert_source_in_directive(
		csp,
		'style-src',
		FUNCTION_ADDED,
		'function added source should be in style-src',
	);

	// Check img-src static override completely replaced trusted sources
	assert.deepEqual(
		csp['img-src'],
		['self', STATIC_OVERRIDE],
		'img-src should be completely replaced',
	);
	assert_source_not_in_directive(csp, 'img-src', TRUSTED, 'trusted sources should not be in static override');
});

// ============================================================================
// Real-world SvelteKit scenarios
// ============================================================================

test('real-world: SvelteKit app with Google Fonts and Analytics', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			// Google Fonts
			create_test_source_with_directives(GOOGLE_FONTS, ['style-src', 'font-src']),
			create_test_source_with_directives(GOOGLE_FONTS_STATIC, ['style-src', 'font-src']),
			// Analytics
			create_test_source_with_both(ANALYTICS, 'high', ['script-src', 'connect-src']),
		],
	});

	// Google Fonts should be in style-src and font-src
	assert_source_in_directive(csp, 'style-src', GOOGLE_FONTS);
	assert_source_in_directive(csp, 'style-src', GOOGLE_FONTS_STATIC);
	assert_source_in_directive(csp, 'font-src', GOOGLE_FONTS);
	assert_source_in_directive(csp, 'font-src', GOOGLE_FONTS_STATIC);

	// Analytics should be in script-src and connect-src
	assert_source_in_directive(csp, 'script-src', ANALYTICS);
	assert_source_in_directive(csp, 'connect-src', ANALYTICS);

	// Google Fonts should not be in script-src
	assert_source_not_in_directive(csp, 'script-src', GOOGLE_FONTS);
});

test('real-world: CDN for scripts and styles', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			create_test_source_with_both(CLOUDFLARE_CDN, 'high', ['script-src', 'style-src']),
		],
	});

	// CDN should be in script-src and style-src (explicit + high trust)
	assert_source_in_directive(csp, 'script-src', CLOUDFLARE_CDN);
	assert_source_in_directive(csp, 'style-src', CLOUDFLARE_CDN);

	// Also in other high-trust and medium-trust directives due to trust level
	assert_source_in_directive(csp, 'connect-src', CLOUDFLARE_CDN);
	assert_source_in_directive(csp, 'img-src', CLOUDFLARE_CDN);
});

test('real-world: Payment integration (Stripe)', () => {
	const csp = create_csp_directives({
		trusted_sources: [
			// Stripe needs script-src, connect-src, and frame-src
			create_test_source_with_directives(STRIPE, ['script-src', 'connect-src', 'frame-src']),
		],
	});

	assert_source_in_directive(csp, 'script-src', STRIPE);
	assert_source_in_directive(csp, 'connect-src', STRIPE);
	assert_source_in_directive(csp, 'frame-src', STRIPE);

	// Should not be in other directives
	assert_source_not_in_directive(csp, 'img-src', STRIPE);
	assert_source_not_in_directive(csp, 'style-src', STRIPE);
});

test('real-world: nonce-based script execution', () => {
	const nonce = 'nonce-abc123';

	const csp = create_csp_directives({
		directives: {
			'script-src': (value) => [...value, nonce as any],
		},
	});

	// Nonce should be added to script-src
	assert_source_in_directive(csp, 'script-src', nonce);

	// Default values should still be present
	assert_source_in_directive(csp, 'script-src', 'self');
	assert_source_in_directive(csp, 'script-src', COLOR_SCHEME_SCRIPT_HASH);
});

test('real-world: hash-based inline scripts', () => {
	const custom_hash = 'sha256-customhashvalue123';

	const csp = create_csp_directives({
		directives: {
			'script-src': (value) => [...value, custom_hash as any],
		},
	});

	// Custom hash should be added
	assert_source_in_directive(csp, 'script-src', custom_hash);

	// Default hash should still be present
	assert_source_in_directive(csp, 'script-src', COLOR_SCHEME_SCRIPT_HASH);
});

// ============================================================================
// Progressive enhancement patterns
// ============================================================================

test('progressive: start strict, add sources progressively', () => {
	// Start with strict CSP
	const base_csp = create_csp_directives({
		value_defaults: {
			'script-src': ['self'],
			'style-src': ['self'],
			'img-src': ['self'],
		},
	});

	// Verify strict
	assert.deepEqual(base_csp['script-src'], ['self']);

	// Add trusted sources
	const with_sources = create_csp_directives({
		value_defaults: {
			'script-src': ['self'],
			'style-src': ['self'],
			'img-src': ['self'],
		},
		trusted_sources: [create_test_source(ANALYTICS, 'high')],
	});

	// Now has analytics
	assert_source_in_directive(with_sources, 'script-src', ANALYTICS);
});

// ============================================================================
// Multi-environment configurations
// ============================================================================

test('multi-env: development vs production', () => {
	const is_dev = false; // Would come from environment

	const csp = create_csp_directives({
		directives: {
			'script-src': (value) =>
				is_dev
					? [...value, 'unsafe-eval' as any] // Allow eval in dev
					: value, // Strict in production
		},
	});

	// In production, should not have unsafe-eval
	assert_source_not_in_directive(csp, 'script-src', 'unsafe-eval' as any);

	// Switch to dev
	const dev_csp = create_csp_directives({
		directives: {
			'script-src': (value) => [...value, 'unsafe-eval' as any],
		},
	});

	// In dev, should have unsafe-eval
	assert_source_in_directive(dev_csp, 'script-src', 'unsafe-eval' as any);
});

// ============================================================================
// Migration scenarios
// ============================================================================

test('migration: from loose to strict CSP', () => {
	// Old loose config
	const loose_csp = create_csp_directives({
		directives: {
			'script-src': ['self', 'unsafe-inline' as any, 'unsafe-eval' as any],
		},
	});

	assert_source_in_directive(loose_csp, 'script-src', 'unsafe-inline' as any);
	assert_source_in_directive(loose_csp, 'script-src', 'unsafe-eval' as any);

	// New strict config with nonces instead
	const strict_csp = create_csp_directives({
		directives: {
			'script-src': (value) => [...value, 'nonce-abc123' as any],
		},
	});

	assert_source_not_in_directive(strict_csp, 'script-src', 'unsafe-inline' as any);
	assert_source_not_in_directive(strict_csp, 'script-src', 'unsafe-eval' as any);
	assert_source_in_directive(strict_csp, 'script-src', 'nonce-abc123' as any);
});

// ============================================================================
// Common pitfalls and gotchas
// ============================================================================

test("gotcha: ['none'] directive blocks trusted sources", () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['none'], // Override to none
		},
	});

	// Even with high trust, ['none'] blocks everything
	assert.deepEqual(csp['script-src'], ['none']);
	assert_source_not_in_directive(csp, 'script-src', TRUSTED);
});

test('gotcha: static override removes default COLOR_SCHEME_SCRIPT_HASH', () => {
	const csp = create_csp_directives({
		directives: {
			'script-src': ['self'], // Forget to include COLOR_SCHEME_SCRIPT_HASH
		},
	});

	// COLOR_SCHEME_SCRIPT_HASH is removed
	assert_source_not_in_directive(csp, 'script-src', COLOR_SCHEME_SCRIPT_HASH);

	// To preserve it, use transform function
	const correct_csp = create_csp_directives({
		directives: {
			'script-src': (value) => value, // Keeps defaults
		},
	});

	assert_source_in_directive(correct_csp, 'script-src', COLOR_SCHEME_SCRIPT_HASH);
});

test('gotcha: transform receives trusted sources', () => {
	let transform_called = false;
	let received_sources: any[] = [];

	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': (value) => {
				transform_called = true;
				received_sources = [...value];
				return value;
			},
		},
	});

	// Transform should have been called
	assert.ok(transform_called, 'transform function should be called');

	// And should have received trusted sources
	assert.ok(received_sources.includes(TRUSTED), 'transform should receive trusted sources');
	assert.ok(received_sources.includes('self'), 'transform should receive defaults');
});

// ============================================================================
// Maximum complexity scenario
// ============================================================================

test('maximum complexity: everything at once', () => {
	const nonce = 'nonce-runtime123';
	const custom_hash = 'sha256-customscript';

	const csp = create_csp_directives({
		// Custom base
		value_defaults_base: {
			'default-src': ['none'],
			'script-src': ['self'],
		},
		// Override some defaults
		value_defaults: {
			'script-src': ['self', COLOR_SCHEME_SCRIPT_HASH as any],
			'img-src': ['self', 'data:' as any],
			'style-src': ['self', 'unsafe-inline' as any], // Add so transform has something to work with
		},
		// Custom trust base
		required_trust_defaults_base: {
			'script-src': 'high',
			'connect-src': 'high',
		},
		// Override some trust requirements
		required_trust_defaults: {
			'img-src': 'medium', // Raise from low
			'style-src': 'low', // Lower from medium
		},
		// Multiple trusted sources with different configs
		trusted_sources: [
			create_test_source(ANALYTICS, 'high'), // Trust level only
			create_test_source_with_directives(GOOGLE_FONTS, ['style-src', 'font-src']), // Directives only
			create_test_source_with_both(CLOUDFLARE_CDN, 'medium', ['script-src']), // Both
		],
		// Transform and static directives
		directives: {
			'script-src': (value) => [...value, nonce as any, custom_hash as any],
			'connect-src': ['self', ANALYTICS as any], // Static override
		},
	});

	// Verify script-src: defaults + high trusted + CDN (explicit) + nonce + hash
	assert_source_in_directive(csp, 'script-src', 'self');
	assert_source_in_directive(csp, 'script-src', COLOR_SCHEME_SCRIPT_HASH);
	assert_source_in_directive(csp, 'script-src', ANALYTICS);
	assert_source_in_directive(csp, 'script-src', CLOUDFLARE_CDN);
	assert_source_in_directive(csp, 'script-src', nonce);
	assert_source_in_directive(csp, 'script-src', custom_hash);

	// Verify connect-src: static override
	assert.deepEqual(csp['connect-src'], ['self', ANALYTICS]);

	// Verify style-src: defaults + medium/high trusted + Google Fonts (explicit) + unsafe-inline
	assert_source_in_directive(csp, 'style-src', GOOGLE_FONTS);
	assert_source_in_directive(csp, 'style-src', CLOUDFLARE_CDN); // medium trust
	assert_source_in_directive(csp, 'style-src', ANALYTICS); // high trust
	assert_source_in_directive(csp, 'style-src', 'unsafe-inline' as any);

	// Verify img-src: defaults + medium/high trusted (raised requirement)
	assert_source_in_directive(csp, 'img-src', 'self');
	assert_source_in_directive(csp, 'img-src', 'data:' as any);
	assert_source_in_directive(csp, 'img-src', ANALYTICS); // high trust
	assert_source_in_directive(csp, 'img-src', CLOUDFLARE_CDN); // medium trust
	assert_source_not_in_directive(csp, 'img-src', GOOGLE_FONTS); // Not in directives, no trust level

	// Verify default-src
	assert.deepEqual(csp['default-src'], ['none']);
});
