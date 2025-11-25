import {test, assert, describe} from 'vitest';

import {
	create_csp_directives,
	is_csp_trusted,
	parse_csp_trust_level,
	csp_trust_levels,
	csp_trust_level_value,
	type CreateCspDirectivesOptions,
} from '$lib/csp.js';
import {
	create_test_source,
	TEST_SOURCES,
	assert_source_in_directive,
	assert_source_not_in_directive,
} from './csp_test_helpers.js';

const {TRUSTED, TRUSTED_2} = TEST_SOURCES;

describe('is_csp_trusted tests', () => {
	test('is_csp_trusted: high trust satisfies all requirements', () => {
		assert.strictEqual(
			is_csp_trusted('high', 'high'),
			true,
			'high trust should satisfy high requirement',
		);
		assert.strictEqual(
			is_csp_trusted('medium', 'high'),
			true,
			'high trust should satisfy medium requirement',
		);
		assert.strictEqual(
			is_csp_trusted('low', 'high'),
			true,
			'high trust should satisfy low requirement',
		);
	});

	test('is_csp_trusted: medium trust satisfies medium and low requirements', () => {
		assert.strictEqual(
			is_csp_trusted('medium', 'medium'),
			true,
			'medium trust should satisfy medium requirement',
		);
		assert.strictEqual(
			is_csp_trusted('low', 'medium'),
			true,
			'medium trust should satisfy low requirement',
		);
	});

	test('is_csp_trusted: low trust only satisfies low requirement', () => {
		assert.strictEqual(
			is_csp_trusted('low', 'low'),
			true,
			'low trust should satisfy low requirement',
		);
	});

	test('is_csp_trusted: insufficient trust returns false', () => {
		assert.strictEqual(
			is_csp_trusted('high', 'medium'),
			false,
			'medium trust should not satisfy high requirement',
		);
		assert.strictEqual(
			is_csp_trusted('high', 'low'),
			false,
			'low trust should not satisfy high requirement',
		);
		assert.strictEqual(
			is_csp_trusted('medium', 'low'),
			false,
			'low trust should not satisfy medium requirement',
		);
	});

	test('is_csp_trusted: null required_trust returns false', () => {
		assert.strictEqual(
			is_csp_trusted(null, 'high'),
			false,
			'null required_trust should return false',
		);
		assert.strictEqual(is_csp_trusted(null, 'medium'), false);
		assert.strictEqual(is_csp_trusted(null, 'low'), false);
	});

	test('is_csp_trusted: null granted_trust returns false', () => {
		assert.strictEqual(
			is_csp_trusted('high', null),
			false,
			'null granted_trust should return false',
		);
		assert.strictEqual(is_csp_trusted('medium', null), false);
		assert.strictEqual(is_csp_trusted('low', null), false);
	});

	test('is_csp_trusted: undefined required_trust returns false', () => {
		assert.strictEqual(
			is_csp_trusted(undefined, 'high'),
			false,
			'undefined required_trust should return false',
		);
		assert.strictEqual(is_csp_trusted(undefined, 'medium'), false);
		assert.strictEqual(is_csp_trusted(undefined, 'low'), false);
	});

	test('is_csp_trusted: undefined granted_trust returns false', () => {
		assert.strictEqual(
			is_csp_trusted('high', undefined),
			false,
			'undefined granted_trust should return false',
		);
		assert.strictEqual(is_csp_trusted('medium', undefined), false);
		assert.strictEqual(is_csp_trusted('low', undefined), false);
	});

	test('is_csp_trusted: both null returns false', () => {
		assert.strictEqual(is_csp_trusted(null, null), false);
	});

	test('is_csp_trusted: both undefined returns false', () => {
		assert.strictEqual(is_csp_trusted(undefined, undefined), false);
	});
});

describe('parse_csp_trust_level tests', () => {
	test('parse_csp_trust_level: validates correct trust levels', () => {
		assert.strictEqual(parse_csp_trust_level('high'), 'high');
		assert.strictEqual(parse_csp_trust_level('medium'), 'medium');
		assert.strictEqual(parse_csp_trust_level('low'), 'low');
	});

	test('parse_csp_trust_level: returns null for invalid values', () => {
		assert.strictEqual(parse_csp_trust_level('invalid'), null);
		assert.strictEqual(parse_csp_trust_level('HIGH'), null); // Case sensitive
		assert.strictEqual(parse_csp_trust_level(''), null);
		assert.strictEqual(parse_csp_trust_level('none'), null);
	});

	test('parse_csp_trust_level: returns null for non-string types', () => {
		assert.strictEqual(parse_csp_trust_level(undefined), null);
		assert.strictEqual(parse_csp_trust_level(null), null);
		assert.strictEqual(parse_csp_trust_level(123), null);
		assert.strictEqual(parse_csp_trust_level({}), null);
		assert.strictEqual(parse_csp_trust_level([]), null);
		assert.strictEqual(parse_csp_trust_level(true), null);
	});
});

describe('trust level constants validation', () => {
	test('csp_trust_levels array is correct', () => {
		assert.deepEqual(csp_trust_levels, ['low', 'medium', 'high']);
	});

	test('csp_trust_level_value has correct numeric values', () => {
		assert.strictEqual(csp_trust_level_value.low, 0);
		assert.strictEqual(csp_trust_level_value.medium, 1);
		assert.strictEqual(csp_trust_level_value.high, 2);
	});
});

describe('required_trust_defaults option tests', () => {
	test('required_trust_defaults: lowering requirement allows more sources', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'medium')],
			required_trust_defaults: {
				'script-src': 'medium', // Lower from high to medium
			},
		});

		// Medium trust source should now be included in script-src
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'medium source should be in script-src after lowering requirement',
		);
	});

	test('required_trust_defaults: raising requirement excludes sources', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'medium')],
			required_trust_defaults: {
				'img-src': 'high', // Raise from low to high
			},
		});

		// Medium trust source should not be included in img-src
		assert_source_not_in_directive(
			csp,
			'img-src',
			TRUSTED,
			'medium source should not be in img-src after raising requirement',
		);
	});

	test('required_trust_defaults: null prevents trusted sources from being added', () => {
		const csp = create_csp_directives({
			trusted_sources: [create_test_source(TRUSTED, 'high')],
			required_trust_defaults: {
				'connect-src': null,
			},
		});

		// No trusted sources should be added to connect-src
		assert_source_not_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'connect-src should not include trusted source when required_trust is null',
		);

		// Other directives should still have trusted sources
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'script-src should still include trusted source',
		);
	});
});

describe('required_trust_defaults_base option tests', () => {
	test('required_trust_defaults_base: reset to null removes all trust requirements', () => {
		const csp = create_csp_directives({
			required_trust_defaults_base: null,
			required_trust_defaults: {
				'script-src': 'low', // Only script-src has a trust requirement
			},
			trusted_sources: [create_test_source(TRUSTED, 'low'), create_test_source(TRUSTED_2, 'low')],
			value_defaults: {
				'script-src': ['self'],
				'img-src': ['self'],
				'connect-src': ['self'],
			},
		});

		// Only script-src should include trusted sources
		assert_source_in_directive(csp, 'script-src', TRUSTED);
		assert_source_in_directive(csp, 'script-src', TRUSTED_2);

		// Other directives should not include trusted sources
		assert_source_not_in_directive(
			csp,
			'img-src',
			TRUSTED,
			'img-src should not include trusted source when trust requirements are reset',
		);
		assert_source_not_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'connect-src should not include trusted source when trust requirements are reset',
		);
	});

	test('required_trust_defaults_base: reset to empty object works like null', () => {
		const csp = create_csp_directives({
			required_trust_defaults_base: {},
			required_trust_defaults: {
				'script-src': 'low',
				'img-src': 'low',
			},
			trusted_sources: [create_test_source(TRUSTED, 'low')],
			value_defaults: {
				'script-src': ['self'],
				'img-src': ['self'],
				'connect-src': ['self'],
			},
		});

		// Only explicitly trusted directives should include trusted sources
		assert_source_in_directive(csp, 'script-src', TRUSTED);
		assert_source_in_directive(csp, 'img-src', TRUSTED);

		// Directive without explicit trust requirement should not include trusted sources
		assert_source_not_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'connect-src should not include trusted source without explicit trust',
		);
	});

	test('required_trust_defaults_base: can provide custom trust requirements', () => {
		const custom_trust_base: CreateCspDirectivesOptions['required_trust_defaults_base'] = {
			'script-src': 'low',
			'connect-src': 'low',
		};

		const csp = create_csp_directives({
			required_trust_defaults_base: custom_trust_base,
			required_trust_defaults: {
				'script-src': 'medium', // Raise requirement
			},
			trusted_sources: [
				create_test_source(TRUSTED, 'low'),
				create_test_source(TRUSTED_2, 'medium'),
			],
			value_defaults: {
				'script-src': ['self'],
				'connect-src': ['self'],
				'img-src': ['self'],
			},
		});

		// Low trust source should not be in script-src due to raised requirement
		assert_source_not_in_directive(
			csp,
			'script-src',
			TRUSTED,
			'script-src should not include low trust source when requirement is medium',
		);

		// Medium trust source should be in script-src
		assert_source_in_directive(
			csp,
			'script-src',
			TRUSTED_2,
			'script-src should include medium trust source',
		);

		// Both sources should be in connect-src since requirement is low
		assert_source_in_directive(
			csp,
			'connect-src',
			TRUSTED,
			'connect-src should include low trust source',
		);
		assert_source_in_directive(
			csp,
			'connect-src',
			TRUSTED_2,
			'connect-src should include medium trust source',
		);

		// No sources should be in img-src since it has no trust requirement
		assert_source_not_in_directive(
			csp,
			'img-src',
			TRUSTED,
			'img-src should not include trusted sources without a trust requirement',
		);
		assert_source_not_in_directive(
			csp,
			'img-src',
			TRUSTED_2,
			'img-src should not include trusted sources without a trust requirement',
		);
	});
});
