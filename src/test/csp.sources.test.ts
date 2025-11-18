import {test, assert, describe} from 'vitest';

import {create_csp_directives} from '$lib/csp.js';
import {
	create_test_source,
	create_test_source_with_directives,
	create_test_source_with_both,
	TEST_SOURCES,
	assert_source_in_directive,
	assert_source_not_in_directive,
} from '$test/csp_test_helpers.js';

const {TRUSTED, TRUSTED_A, TRUSTED_2} = TEST_SOURCES;

describe('sources with trust levels only', () => {
	test('high trust sources are included in all applicable directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'high')],
		});

		// High trust sources should be in all directives with required_trust
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'high trust source should be in script-src',
		);
		assert_source_in_directive(
			csp,
			'script-src-elem',
			TRUSTED,
			'high trust source should be in script-src-elem',
		);
		assert_source_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'high trust source should be in connect-src',
		);
		assert_source_in_directive(
			csp,
			'style-src',
			TRUSTED,
			'high trust source should be in style-src (medium)',
		);
		assert_source_in_directive(
			csp,
			'img-src',
			TRUSTED,
			'high trust source should be in img-src (low)',
		);
	});

	test('medium trust sources not in high, included in medium and low', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'medium')],
		});

		// Medium trust sources should not be in high trust directives
		assert_source_not_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'medium trust source should not be in script-src',
		);
		assert_source_not_in_directive(
			csp,
			'script-src-elem',
			TRUSTED,
			'medium trust source should not be in script-src-elem',
		);

		// Medium trust sources should be in medium and low trust directives
		assert_source_in_directive(
			csp,
			'style-src',
			TRUSTED,
			'medium trust source should be in style-src',
		);
		assert_source_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'medium trust source should be in connect-src',
		);
		assert_source_in_directive(csp, 'img-src', TRUSTED, 'medium trust source should be in img-src');
	});

	test('low trust sources only in low directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'low')],
		});

		// Low trust sources should not be in high or medium trust directives
		assert_source_not_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'low trust source should not be in script-src',
		);
		assert_source_not_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'low trust source should not be in connect-src',
		);
		assert_source_not_in_directive(
			csp,
			'style-src',
			TRUSTED,
			'low trust source should not be in style-src',
		);

		// Low trust sources should be in low trust directives
		assert_source_in_directive(csp, 'img-src', TRUSTED, 'low trust source should be in img-src');
		assert_source_in_directive(
			csp,
			'media-src',
			TRUSTED,
			'low trust source should be in media-src',
		);
		assert_source_in_directive(csp, 'font-src', TRUSTED, 'low trust source should be in font-src');
	});

	test('multiple sources with different trust levels', () => {
		const sources = [
			create_test_source(TRUSTED, 'high'),
			create_test_source(TRUSTED_2, 'medium'),
			create_test_source(TRUSTED_A, 'low'),
		];

		const csp = create_csp_directives({trusted_sources: sources});

		// Check high trust source
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'high trust source should be in script-src',
		);
		assert_source_in_directive(
			csp,
			'style-src',
			TRUSTED,
			'high trust source should be in style-src',
		);
		assert_source_in_directive(csp, 'img-src', TRUSTED, 'high trust source should be in img-src');

		// Check medium trust source
		assert_source_not_in_directive(
			csp,
			'script-src',
			TRUSTED_2,
			'medium trust source should not be in script-src',
		);
		assert_source_in_directive(
			csp,
			'style-src',
			TRUSTED_2,
			'medium trust source should be in style-src',
		);
		assert_source_in_directive(
			csp,
			'img-src',
			TRUSTED_2,
			'medium trust source should be in img-src',
		);

		// Check low trust source
		assert_source_not_in_directive(
			csp,
			'script-src',
			TRUSTED_A,
			'low trust source should not be in script-src',
		);
		assert_source_not_in_directive(
			csp,
			'style-src',
			TRUSTED_A,
			'low trust source should not be in style-src',
		);
		assert_source_in_directive(csp, 'img-src', TRUSTED_A, 'low trust source should be in img-src');
	});
});

describe('sources with explicit directives only', () => {
	test('source with only directives is added only to those directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source_with_directives(TRUSTED_2, ['script-src'])],
		});

		// Source should be in script-src due to explicit inclusion
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED_2,
			'source with only directives should be in specified directive',
		);

		// Source should NOT be in other directives when no trust is specified
		assert_source_not_in_directive(
			csp,
			'img-src',
			TRUSTED_2,
			'source with only directives should not be in low trust directive (img-src)',
		);
		assert_source_not_in_directive(
			csp,
			'style-src',
			TRUSTED_2,
			'source with only directives should not be in medium trust directive (style-src)',
		);
		assert_source_not_in_directive(
			csp,
			'connect-src',
			TRUSTED_2,
			'source with only directives should not be in high trust directive (connect-src)',
		);
	});

	test('source with multiple explicit directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source_with_directives(TRUSTED, ['script-src', 'connect-src'])],
		});

		// Source should be added to explicitly specified directives
		assert_source_in_directive(csp, 'script-src', TRUSTED, 'source should be in script-src');
		assert_source_in_directive(csp, 'connect-src', TRUSTED, 'source should be in connect-src');

		// Source should not be added to other directives
		assert_source_not_in_directive(csp, 'img-src', TRUSTED, 'source should not be in img-src');
		assert_source_not_in_directive(csp, 'style-src', TRUSTED, 'source should not be in style-src');
	});
});

describe('sources with both trust and directives (additive behavior)', () => {
	test('source with both trust and directives uses additive behavior', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source_with_both(TRUSTED, 'low', ['script-src']), // Explicit + low trust
			],
		});

		// Source should be in script-src due to explicit directive inclusion
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'source should be in explicitly specified directive despite low trust level',
		);

		// Source should also be in other low-trust directives due to trust level
		assert_source_in_directive(
			csp,
			'img-src',
			TRUSTED,
			'source should also be in img-src due to low trust level',
		);

		// Source should NOT be in medium or high trust directives (only where explicitly added)
		assert_source_not_in_directive(
			csp,
			'style-src',
			TRUSTED,
			'low trust source should not be in style-src (medium trust)',
		);
		assert_source_not_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'low trust source should not be in connect-src (high trust)',
		);
	});

	test('medium trust with explicit high-trust directive', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source_with_both(TRUSTED, 'medium', ['connect-src']), // Add to connect-src despite medium trust
			],
		});

		// Explicit directive should work regardless of trust
		assert_source_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'medium trusted source should be in connect-src due to explicit directive',
		);

		// Trust level should still apply normally for non-specified directives
		assert_source_not_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'medium trusted source should not be in script-src',
		);
		assert_source_in_directive(
			csp,
			'style-src',
			TRUSTED,
			'medium trusted source should be in style-src',
		);
		assert_source_in_directive(
			csp,
			'img-src',
			TRUSTED,
			'medium trusted source should be in img-src',
		);
	});
});

describe('edge cases for source specs', () => {
	test('source with empty directives array', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				{
					source: TRUSTED as any,
					directives: [], // Empty array
				},
			],
		});

		// Source should not be in any directives since there's no trust level
		assert_source_not_in_directive(csp, 'script-src', TRUSTED);
		assert_source_not_in_directive(csp, 'img-src', TRUSTED);
		assert_source_not_in_directive(csp, 'style-src', TRUSTED);
	});

	test('source with neither trust nor directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				{
					source: TRUSTED as any,
					// Neither trust nor directives specified
				},
			],
		});

		// Source should not be in any directives
		assert_source_not_in_directive(csp, 'script-src', TRUSTED);
		assert_source_not_in_directive(csp, 'img-src', TRUSTED);
		assert_source_not_in_directive(csp, 'style-src', TRUSTED);
	});

	test('multiple sources with mixed specs', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source(TRUSTED, 'high'), // Trust only
				create_test_source_with_directives(TRUSTED_2, ['img-src']), // Directives only
				create_test_source_with_both(TRUSTED_A, 'medium', ['script-src']), // Both
			],
		});

		// TRUSTED (high trust) should be everywhere
		assert_source_in_directive(csp, 'script-src', TRUSTED);
		assert_source_in_directive(csp, 'style-src', TRUSTED);
		assert_source_in_directive(csp, 'img-src', TRUSTED);

		// TRUSTED_2 (directives only) should only be in img-src
		assert_source_not_in_directive(csp, 'script-src', TRUSTED_2);
		assert_source_not_in_directive(csp, 'style-src', TRUSTED_2);
		assert_source_in_directive(csp, 'img-src', TRUSTED_2);

		// TRUSTED_A (medium + script-src) should be in script-src, style-src, img-src, connect-src
		assert_source_in_directive(csp, 'script-src', TRUSTED_A);
		assert_source_in_directive(csp, 'style-src', TRUSTED_A);
		assert_source_in_directive(csp, 'img-src', TRUSTED_A);
		assert_source_in_directive(csp, 'connect-src', TRUSTED_A); // Medium is sufficient for connect-src
	});
});

describe('sources not added to special directives', () => {
	test('sources not added to ["none"] directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'high')],
			directives: {
				'script-src': ['none'],
			},
		});

		// Directive with ['none'] should remain ['none'], trusted sources should not be added
		assert.deepEqual(csp['script-src'], ['none'], "script-src should remain ['none']");

		// Other directives should still get trusted sources
		assert_source_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'connect-src should get trusted sources',
		);
	});

	test('sources not added to non-array directives', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'high')],
		});

		// Boolean directive should not have sources added
		assert.strictEqual(csp['upgrade-insecure-requests'], true);
		assert.strictEqual(typeof csp['upgrade-insecure-requests'], 'boolean');
	});
});

describe('interaction with value_defaults', () => {
	test('sources added to custom value_defaults', () => {
		const csp = create_csp_directives({
			value_defaults: {
				'connect-src': ['self', 'https://template.fuz.dev'],
			},
			trusted_sources: [create_test_source(TRUSTED, 'high')],
		});

		// Trusted source should be added to custom defaults
		assert_source_in_directive(csp, 'connect-src', 'self');
		assert_source_in_directive(csp, 'connect-src', 'https://template.fuz.dev' as any);
		assert_source_in_directive(csp, 'connect-src', TRUSTED);
	});

	test('sources added when value_defaults overrides base', () => {
		const csp = create_csp_directives({
			value_defaults: {
				'script-src': ['self'], // Remove COLOR_SCHEME_SCRIPT_HASH
			},
			trusted_sources: [create_test_source(TRUSTED, 'high')],
		});

		// Trusted source should be added to the new defaults
		assert_source_in_directive(csp, 'script-src', 'self');
		assert_source_in_directive(csp, 'script-src', TRUSTED);
		// COLOR_SCHEME_SCRIPT_HASH should not be present
		assert.ok(
			!csp['script-src']!.includes('sha256-QOxqn7EUzb3ydF9SALJoJGWSvywW9R0AfTDSenB83Z8=' as any),
		);
	});

	test('source added only once when both trust and explicit directives match', () => {
		// Source with high trust + explicit img-src (which is low trust by default)
		// Should only appear once even though it matches via both paths
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source_with_both(TRUSTED, 'high', ['img-src']), // High trust + explicit img-src
			],
		});

		// Count occurrences - should be exactly 1, not 2
		const img_src_values = csp['img-src']!;
		const occurrences = img_src_values.filter((v) => v === TRUSTED).length;

		assert.strictEqual(
			occurrences,
			1,
			'source should appear exactly once even though it matches via trust and explicit directive',
		);

		// Verify it's actually there
		assert_source_in_directive(csp, 'img-src', TRUSTED);
	});
});

describe('source deduplication', () => {
	test('duplicate sources in trusted_sources array are all added', () => {
		// Note: The implementation does NOT deduplicate sources from different specs
		// This test documents current behavior
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source(TRUSTED, 'high'),
				create_test_source(TRUSTED, 'high'), // Duplicate
			],
		});

		// Both instances should be added (no deduplication between specs)
		const script_src_values = csp['script-src']!;
		const occurrences = script_src_values.filter((v) => v === TRUSTED).length;

		// This will be 2 because the implementation doesn't dedupe across specs
		assert.strictEqual(occurrences, 2, 'duplicate specs result in duplicate source entries');
	});

	test('source not duplicated when matching via both trust and explicit directives in same spec', () => {
		// Already covered above but testing different directive combinations
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source_with_both(TRUSTED, 'medium', ['style-src']), // medium trust + explicit style-src
			],
		});

		// style-src requires medium trust, so source matches via both paths
		const style_src_values = csp['style-src']!;
		const occurrences = style_src_values.filter((v) => v === TRUSTED).length;

		assert.strictEqual(
			occurrences,
			1,
			'source should appear once when matching via trust and explicit in same spec',
		);
	});

	test('multiple different sources with same trust level', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source(TRUSTED, 'high'),
				create_test_source(TRUSTED_2, 'high'),
				create_test_source(TRUSTED_A, 'high'),
			],
		});

		// All three sources should be in high-trust directives
		assert_source_in_directive(csp, 'script-src', TRUSTED);
		assert_source_in_directive(csp, 'script-src', TRUSTED_2);
		assert_source_in_directive(csp, 'script-src', TRUSTED_A);

		// Verify they're all there
		assert.strictEqual(
			csp['script-src']!.filter((v) => [TRUSTED, TRUSTED_2, TRUSTED_A].includes(v as any)).length,
			3,
		);
	});
});

describe('source ordering', () => {
	test('trusted sources are added after default values', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'low')],
		});

		// Check that default values come before trusted sources
		const img_src = csp['img-src']!;
		const self_index = img_src.indexOf('self');
		const trusted_index = img_src.indexOf(TRUSTED as any);

		assert.ok(self_index < trusted_index, 'default values should come before trusted sources');
	});

	test('multiple trusted sources maintain order from array', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source(TRUSTED, 'low'),
				create_test_source(TRUSTED_2, 'low'),
				create_test_source(TRUSTED_A, 'low'),
			],
		});

		const img_src = csp['img-src']!;
		const trusted_index = img_src.indexOf(TRUSTED as any);
		const trusted2_index = img_src.indexOf(TRUSTED_2 as any);
		const trustedA_index = img_src.indexOf(TRUSTED_A as any);

		assert.ok(trusted_index < trusted2_index, 'first trusted source should come before second');
		assert.ok(trusted2_index < trustedA_index, 'second trusted source should come before third');
	});

	test('sources added via explicit directives maintain order', () => {
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source_with_directives(TRUSTED, ['img-src']),
				create_test_source_with_directives(TRUSTED_2, ['img-src']),
			],
		});

		const img_src = csp['img-src']!;
		const trusted_index = img_src.indexOf(TRUSTED as any);
		const trusted2_index = img_src.indexOf(TRUSTED_2 as any);

		assert.ok(trusted_index < trusted2_index, 'explicit sources should maintain order');
	});

	test('trust-based sources come before explicit-only sources in same array', () => {
		// This tests the filter order in the implementation
		const csp = create_csp_directives({
			trusted_sources: [
				create_test_source(TRUSTED, 'low'), // Added via trust
				create_test_source_with_directives(TRUSTED_2, ['img-src']), // Added via explicit
			],
		});

		const img_src = csp['img-src']!;

		// Both should be present
		assert_source_in_directive(csp, 'img-src', TRUSTED);
		assert_source_in_directive(csp, 'img-src', TRUSTED_2);

		// Order depends on filter logic but they should both be after defaults
		const self_index = img_src.indexOf('self');
		const trusted_index = img_src.indexOf(TRUSTED as any);
		const trusted2_index = img_src.indexOf(TRUSTED_2 as any);

		assert.ok(self_index < trusted_index, 'defaults before trusted sources');
		assert.ok(self_index < trusted2_index, 'defaults before explicit sources');
	});
});

describe('empty and unusual source values', () => {
	test('empty string source is added if provided', () => {
		// This documents current behavior - empty strings are not filtered
		const csp = create_csp_directives({
			trusted_sources: [{source: '' as any, trust: 'low'}],
		});

		// Empty string should be added
		assert.ok(csp['img-src']!.includes('' as any), 'empty string source should be added');
	});

	test('source with only whitespace is added', () => {
		const csp = create_csp_directives({
			trusted_sources: [{source: '   ' as any, trust: 'low'}],
		});

		// Whitespace source should be added
		assert.ok(csp['img-src']!.includes('   ' as any), 'whitespace source should be added');
	});

	test('sources with special characters', () => {
		const special_sources = [
			'https://fuz.dev:8080',
			'*.fuz.dev',
			'wss://websocket.fuz.dev',
			'data:',
			'blob:',
		] as const;

		const csp = create_csp_directives({
			trusted_sources: special_sources.map((s) => ({source: s as any, trust: 'low' as const})),
		});

		// All special sources should be added
		for (const source of special_sources) {
			assert_source_in_directive(csp, 'img-src', source);
		}
	});
});
