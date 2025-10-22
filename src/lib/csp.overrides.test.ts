import {test, assert} from 'vitest';

import {create_csp_directives, COLOR_SCHEME_SCRIPT_HASH} from '$lib/csp.js';
import {
	create_test_source,
	TEST_SOURCES,
	assert_source_in_directive,
	assert_source_not_in_directive,
	assert_directive_not_exists,
} from '$lib/csp_test_helpers.js';

const {TRUSTED, STATIC_OVERRIDE, FUNCTION_ADDED, COMPLETE_OVERRIDE, DEFAULT_OVERRIDE} = TEST_SOURCES;

// ============================================================================
// Static directive replacement
// ============================================================================

test('static directive replacement overrides defaults and trusted sources', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE as any],
		},
	});

	// The static replacement should override defaults and trusted sources
	assert.deepEqual(csp['script-src'], ['self', STATIC_OVERRIDE]);

	// Other directives should still have trusted sources
	assert_source_in_directive(
		csp,
		'connect-src',
		TRUSTED,
		'connect-src should still include trusted source',
	);
});

test('static replacement on multiple directives', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE as any],
			'connect-src': ['self', STATIC_OVERRIDE as any],
		},
	});

	// Both static replacements should override
	assert.deepEqual(csp['script-src'], ['self', STATIC_OVERRIDE]);
	assert.deepEqual(csp['connect-src'], ['self', STATIC_OVERRIDE]);

	// Values should not contain trusted sources
	assert_source_not_in_directive(
		csp,
		'script-src',
		TRUSTED,
		'static directive should remove trusted sources',
	);
	assert_source_not_in_directive(
		csp,
		'connect-src',
		TRUSTED,
		'static directive should remove trusted sources',
	);
});

// ============================================================================
// Transform functions - append pattern
// ============================================================================

test('transform function can append to existing values', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': (value) => [...value, FUNCTION_ADDED as any],
		},
	});

	// The transform should add to the existing values, including trusted sources
	assert_source_in_directive(csp, 'script-src', 'self', 'script-src should keep default values');
	assert_source_in_directive(csp, 'script-src', TRUSTED, 'script-src should keep trusted source');
	assert_source_in_directive(
		csp,
		'script-src',
		FUNCTION_ADDED,
		'script-src should add function source',
	);

	// Other directives should be unaffected
	assert_source_not_in_directive(
		csp,
		'connect-src',
		FUNCTION_ADDED,
		'connect-src should not have function source',
	);
});

test('transform receives values after trusted sources are added', () => {
	let received_value: any = null;

	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': (value) => {
				received_value = value;
				return [COMPLETE_OVERRIDE as any];
			},
		},
	});

	// Verify that trusted sources were added before transform was called
	assert.ok(received_value.includes(TRUSTED), 'Trusted sources should be added before transform');
	assert.deepEqual(csp['connect-src'], [COMPLETE_OVERRIDE]);
});

// ============================================================================
// Transform functions - replace pattern
// ============================================================================

test('transform function with complete replacement', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': () => [COMPLETE_OVERRIDE as any],
		},
	});

	// The transform should completely replace the values
	assert.deepEqual(csp['connect-src'], [COMPLETE_OVERRIDE]);

	// Other directives should still have trusted sources
	assert_source_in_directive(csp, 'script-src', TRUSTED, 'script-src should keep trusted source');
});

test('append vs replace transform patterns', () => {
	// Append transform pattern keeps existing values
	const append_csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': (value) => [...value, FUNCTION_ADDED as any],
		},
	});

	// Transform should preserve defaults and trusted sources and append the new value
	assert_source_in_directive(
		append_csp,
		'connect-src',
		'self',
		'transform should keep default values',
	);
	assert_source_in_directive(
		append_csp,
		'connect-src',
		TRUSTED,
		'transform should keep trusted sources',
	);
	assert_source_in_directive(
		append_csp,
		'connect-src',
		FUNCTION_ADDED,
		'transform should add new values',
	);

	// Replace transform pattern completely replaces all values
	const replace_csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'connect-src': () => [FUNCTION_ADDED as any],
		},
	});

	// Transform with complete replacement should use only provided values
	assert.deepEqual(
		replace_csp['connect-src'],
		[FUNCTION_ADDED],
		'transform with replacement should use only provided values',
	);
	assert_source_not_in_directive(
		replace_csp,
		'connect-src',
		'self',
		'transform with replacement should not keep default values',
	);
	assert_source_not_in_directive(
		replace_csp,
		'connect-src',
		TRUSTED,
		'transform with replacement should not keep trusted sources',
	);
});

// ============================================================================
// Mixed static and transform directives
// ============================================================================

test('static and transformer directives work together', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE as any], // Static value
			'img-src': (value) => [...value, FUNCTION_ADDED as any], // Transform function
		},
	});

	// Check static directive worked
	assert.deepEqual(csp['script-src'], ['self', STATIC_OVERRIDE]);
	assert_source_not_in_directive(
		csp,
		'script-src',
		TRUSTED,
		'static directive should remove trusted sources',
	);

	// Check transform function worked
	assert_source_in_directive(csp, 'img-src', 'self', 'img-src should keep default sources');
	assert_source_in_directive(csp, 'img-src', TRUSTED, 'img-src should keep trusted source');
	assert_source_in_directive(csp, 'img-src', FUNCTION_ADDED, 'img-src should add function source');
});

// ============================================================================
// Precedence rules
// ============================================================================

test('directives option takes precedence over trusted sources', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['self', STATIC_OVERRIDE as any],
			'connect-src': ['self', STATIC_OVERRIDE as any],
		},
	});

	// Static directives should override defaults and not include trusted sources
	assert.deepEqual(
		csp['script-src'],
		['self', STATIC_OVERRIDE],
		'static directive should override defaults and trusted sources',
	);
	assert.deepEqual(
		csp['connect-src'],
		['self', STATIC_OVERRIDE],
		'static directive should override defaults and trusted sources',
	);
});

test('directives option works with value_defaults', () => {
	const csp = create_csp_directives({
		value_defaults: {
			'img-src': ['self', DEFAULT_OVERRIDE as any],
			'connect-src': ['self', DEFAULT_OVERRIDE as any],
		},
		directives: {
			'img-src': ['self', STATIC_OVERRIDE as any],
		},
	});

	// The directives option should take precedence over value_defaults
	assert.deepEqual(csp['img-src'], ['self', STATIC_OVERRIDE]);

	// Other value_defaults changes should still apply
	assert.deepEqual(csp['connect-src'], ['self', DEFAULT_OVERRIDE]);
});

// ============================================================================
// Removing directives with null/undefined
// ============================================================================

test('transform returning null removes directive', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': () => null,
		},
	});

	// The directive should be removed from the output
	assert.strictEqual(csp['script-src'], undefined, 'script-src should be undefined/removed');
	assert_directive_not_exists(csp, 'script-src', 'script-src should not be in the object');

	// Other directives should still exist
	assert.ok('connect-src' in csp, 'connect-src should still exist');
});

test('transform returning undefined removes directive', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			// @ts-expect-error - Testing runtime behavior
			'script-src': () => undefined,
		},
	});

	// The directive should be removed from the output
	assert.strictEqual(csp['script-src'], undefined, 'script-src should be undefined/removed');
	assert_directive_not_exists(csp, 'script-src', 'script-src should not be in the object');

	// Other directives should still exist
	assert.ok('connect-src' in csp, 'connect-src should still exist');
});

test('static null value removes directive', () => {
	const csp = create_csp_directives({
		directives: {
			'script-src': null,
		},
	});

	assert_directive_not_exists(csp, 'script-src', 'script-src should not exist');
	assert.ok('connect-src' in csp, 'connect-src should still exist');
});

// ============================================================================
// ['none'] directive behavior
// ============================================================================

test('transform can change ["none"] directives', () => {
	const csp = create_csp_directives({
		directives: {
			'script-src': ['none'], // First set to none
			'default-src': (value) => {
				// default-src is already ['none'] by default
				assert.deepEqual(value, ['none'], "Function should receive the original ['none'] value");
				return ['self', TRUSTED as any];
			},
		},
	});

	// Function should be able to override ['none'] directives
	assert.deepEqual(csp['default-src'], ['self', TRUSTED]);
});

test('static replacement can set directive to ["none"]', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': ['none'],
		},
	});

	// Should be set to ['none'] despite trusted sources
	assert.deepEqual(csp['script-src'], ['none']);

	// Other directives should still get trusted sources
	assert_source_in_directive(csp, 'connect-src', TRUSTED);
});

// ============================================================================
// Multiple transforms don't affect each other
// ============================================================================

test('multiple transform functions are independent', () => {
	const csp = create_csp_directives({
		directives: {
			'script-src': (value) => [...value, 'https://script.com' as any],
			'img-src': (value) => [...value, 'https://images.com' as any],
			'style-src': (value) => [...value, 'https://styles.com' as any],
		},
	});

	// Each directive should only have its own added source
	assert_source_in_directive(csp, 'script-src', 'https://script.com' as any);
	assert_source_not_in_directive(csp, 'script-src', 'https://images.com' as any);
	assert_source_not_in_directive(csp, 'script-src', 'https://styles.com' as any);

	assert_source_in_directive(csp, 'img-src', 'https://images.com' as any);
	assert_source_not_in_directive(csp, 'img-src', 'https://script.com' as any);
	assert_source_not_in_directive(csp, 'img-src', 'https://styles.com' as any);

	assert_source_in_directive(csp, 'style-src', 'https://styles.com' as any);
	assert_source_not_in_directive(csp, 'style-src', 'https://script.com' as any);
	assert_source_not_in_directive(csp, 'style-src', 'https://images.com' as any);
});

// ============================================================================
// structuredClone verification
// ============================================================================

test('transform output is cloned (modifying returned value does not affect subsequent calls)', () => {
	const shared_array = ['self', 'https://example.com' as any];

	const csp1 = create_csp_directives({
		directives: {
			'script-src': () => shared_array,
		},
	});

	// Modify the shared array
	shared_array.push('https://modified.com' as any);

	const csp2 = create_csp_directives({
		directives: {
			'script-src': () => shared_array,
		},
	});

	// csp1 should not have the modified value
	assert_source_not_in_directive(
		csp1,
		'script-src',
		'https://modified.com' as any,
		'csp1 should not be affected by later modifications to shared array',
	);

	// csp2 should have the modified value
	assert_source_in_directive(
		csp2,
		'script-src',
		'https://modified.com' as any,
		'csp2 should include the modified value',
	);
});

// ============================================================================
// Precedence order verification
// ============================================================================

test('precedence order: value_defaults_base < value_defaults < trusted_sources < directives', () => {
	const csp = create_csp_directives({
		value_defaults_base: {
			'script-src': ['https://base.com' as any],
		},
		value_defaults: {
			'script-src': ['https://defaults.com' as any], // Overrides base
		},
		trusted_sources: [create_test_source(TRUSTED, 'high')], // Added to defaults
		directives: {
			'script-src': ['https://final.com' as any], // Complete override
		},
	});

	// Only the directives value should be present (highest precedence)
	assert.deepEqual(csp['script-src'], ['https://final.com']);
	assert_source_not_in_directive(csp, 'script-src', 'https://base.com' as any);
	assert_source_not_in_directive(csp, 'script-src', 'https://defaults.com' as any);
	assert_source_not_in_directive(csp, 'script-src', TRUSTED);
});

test('precedence: transform function receives all accumulated values', () => {
	let received: any = null;

	const csp = create_csp_directives({
		value_defaults_base: {
			'script-src': ['https://base.com' as any],
		},
		value_defaults: {
			'script-src': ['https://defaults.com' as any],
		},
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': (value) => {
				received = [...value];
				return value;
			},
		},
	});

	// Transform should receive defaults + trusted sources (not base, since value_defaults overrode it)
	assert.deepEqual(received, ['https://defaults.com', TRUSTED]);
});

// ============================================================================
// Transform function error handling
// ============================================================================

test('transform function that throws an error propagates the error', () => {
	assert.throws(
		() => {
			create_csp_directives({
				directives: {
					'script-src': () => {
						throw new Error('Transform failed');
					},
				},
			});
		},
		/Transform failed/,
		'error from transform function should propagate',
	);
});

test('transform on directive that does not exist in defaults receives undefined', () => {
	let received: any = 'not-called';

	const csp = create_csp_directives({
		value_defaults_base: null, // Start with no defaults
		value_defaults: {
			'script-src': ['self'],
		},
		directives: {
			'img-src': (value) => {
				received = value;
				return ['self', 'data:' as any];
			},
		},
	});

	// Transform should have received undefined since img-src doesn't exist in defaults
	assert.strictEqual(received, undefined, 'transform should receive undefined for non-existent directive');

	// But the directive should still be set to the returned value
	assert.deepEqual(csp['img-src'], ['self', 'data:']);
});
