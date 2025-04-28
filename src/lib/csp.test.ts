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
		csp_medium['script-src-elem']!.includes(TRUSTED),
		'medium trust source should not be in script-src-elem',
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

test('directive transformer returning null return removes directive', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			'script-src': () => null, // Return null to remove the directive
		},
	});

	// The directive should be removed from the output
	assert.is(csp['script-src'], undefined, 'script-src should be undefined/removed');
	assert.is('script-src' in csp, false, 'script-src should not be in the object');

	// Other directives should still exist
	assert.ok('connect-src' in csp, 'connect-src should still exist');
});

test('directive transformer returning undefined return removes directive', () => {
	const csp = create_csp_directives({
		trusted_sources: [create_test_source(TRUSTED, 'high')],
		directives: {
			// This is not explicitly supported API, but we do this for safety
			// @ts-expect-error
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
