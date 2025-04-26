import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {
	create_csp_directives,
	type Csp_Directives,
	type Csp_Config,
	type Trusted_Csp_Directive,
} from '$lib/csp.js';

test('generate_csp with empty config returns defaults', () => {
	const csp = create_csp_directives();

	// Check a sample of default values
	assert.equal(csp['default-src'], ['none']);
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['connect-src'], ['self']);
});

test('generate_csp with config object', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', 'trusted.domain'],
			'connect-src': ['self', 'a.trusted.domain'],
		},
	});

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with boolean directive values', () => {
	const csp = create_csp_directives({
		config: {
			'upgrade-insecure-requests': false,
		},
	});

	assert.is(csp['upgrade-insecure-requests'], false);

	// Test the inverse as well
	const csp2 = create_csp_directives({
		config: {
			'upgrade-insecure-requests': true,
		},
	});

	assert.is(csp2['upgrade-insecure-requests'], true);
});

test('generate_csp with function values', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': (defaults) => [...defaults, 'trusted.domain'],
			'connect-src': () => ['a.trusted.domain'],
		},
	});

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['a.trusted.domain']);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with explicit undefined values', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', 'trusted.domain'],
			'connect-src': undefined,
			'img-src': undefined,
		},
	});

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.is(
		'connect-src' in csp,
		false,
		'Key should not exist in final CSP when explicitly set to undefined',
	);
	assert.is(
		'img-src' in csp,
		false,
		'Key should not exist in final CSP when explicitly set to undefined',
	);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with function that returns undefined', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': (defaults) => [...defaults, 'trusted.domain'],
			'connect-src': () => undefined,
			'img-src': () => undefined,
		},
	});

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.is(
		'connect-src' in csp,
		false,
		'Key should not exist in final CSP when function returns undefined',
	);
	assert.is(
		'img-src' in csp,
		false,
		'Key should not exist in final CSP when function returns undefined',
	);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with mixed static and function values', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', 'trusted.domain'],
			'connect-src': (defaults) => [...defaults, 'a.trusted.domain'],
			'img-src': (defaults) => [...defaults, 'b.trusted.domain'],
		},
	});

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['img-src'], ['self', 'data:', 'b.trusted.domain']);
});

test('generate_csp with custom defaults', () => {
	const custom_defaults: Csp_Directives = {
		'default-src': ['self'],
		'script-src': ['self', 'trusted2.domain'],
		'connect-src': ['self', 'a.trusted2.domain'],
		'upgrade-insecure-requests': false,
	};

	const csp = create_csp_directives({
		defaults: custom_defaults,
		config: {
			'script-src': ['self', 'trusted.domain'],
		},
	});

	assert.equal(csp['default-src'], ['self']);
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted2.domain']);
	assert.is(
		csp['upgrade-insecure-requests'],
		false,
		'Boolean values from defaults should be preserved if not overridden',
	);
});

test('generate_csp with undefined defaults for function callbacks', () => {
	// Define a partial defaults object that's missing some values
	const custom_defaults = {
		'default-src': ['self'],
		// Intentionally omitting connect-src to test undefined defaults
	} satisfies Csp_Directives;

	const csp = create_csp_directives({
		defaults: custom_defaults,
		config: {
			'default-src': (defaults) => [...defaults, 'trusted.domain'],
			'connect-src': (defaults) => {
				// Assert that defaults is undefined when key doesn't exist in custom_defaults
				assert.is(defaults, undefined, 'Defaults should be undefined when not in custom defaults');
				return ['a.trusted.domain'];
			},
		},
	});

	assert.equal(csp['default-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['a.trusted.domain']);
});

test('generate_csp with report-uri passing undefined as default', () => {
	const csp = create_csp_directives({
		config: {
			'report-uri': (defaults) => {
				assert.is(defaults, undefined, 'report-uri should be undefined in default strict CSP');
				return ['/csp-violations'];
			},
		},
	});

	assert.equal(csp['report-uri'], ['/csp-violations']);
});

test('generate_csp should not allow array values to be mutated externally', () => {
	const array: Csp_Config['script-src'] = ['self', 'trusted.domain'];

	const csp = create_csp_directives({
		config: {
			'script-src': array,
		},
	});

	// Attempt to modify the original array
	array.push('evil.domain');

	// CSP should have a clone and remain unchanged
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.not.equal(csp['script-src'], array);
});

test('generate_csp should freeze arrays to prevent mutation', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', 'trusted.domain'],
		},
	});

	// Attempt to modify the array in the result
	const script_src = csp['script-src'];
	assert.throws(
		() => script_src!.push('evil.domain'),
		/Cannot add property/,
		'Arrays in the result should be frozen and not allow mutation',
	);

	// Verify the array was not changed
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);

	// Also verify that inherited default arrays are frozen
	const connect_src = csp['connect-src']; // This comes from defaults
	assert.throws(
		() => connect_src!.push('evil.domain'),
		/Cannot add property/,
		'Arrays inherited from defaults should also be frozen',
	);

	// Verify the default array was not changed
	assert.equal(csp['connect-src'], ['self']);
});

test('generate_csp should freeze arrays when no config is passed', () => {
	const csp = create_csp_directives();

	// Attempt to modify arrays in the default configuration
	const script_src = csp['script-src'];
	const img_src = csp['img-src'];

	assert.throws(
		() => script_src!.push('evil.domain'),
		/Cannot add property/,
		'Default script-src array should be frozen',
	);

	assert.throws(
		() => img_src!.push('evil.domain'),
		/Cannot add property/,
		'Default img-src array should be frozen',
	);

	// Verify values remain unchanged
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['img-src'], ['self', 'data:']);
});

test('generate_csp with trusted_sources adds sources to relevant directives', () => {
	const csp = create_csp_directives({
		trusted_sources: 'trusted.domain',
	});

	// Check that trusted source is added to directives in TRUSTED_CSP_DIRECTIVE_KEYS
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'trusted.domain']);
	assert.equal(csp['img-src'], ['self', 'data:', 'trusted.domain']);
	assert.equal(csp['style-src'], ['self', 'unsafe-inline', 'trusted.domain']);
	assert.equal(csp['frame-ancestors'], ['self', 'trusted.domain']);

	// Shouldn't be added to directives that have ['none']
	assert.equal(csp['default-src'], ['none']);
});

test('generate_csp with multiple trusted_sources', () => {
	const csp = create_csp_directives({
		trusted_sources: ['trusted1.domain', 'trusted2.domain'],
	});

	// Check that all trusted sources are added
	assert.equal(csp['script-src'], ['self', 'trusted1.domain', 'trusted2.domain']);
	assert.equal(csp['connect-src'], ['self', 'trusted1.domain', 'trusted2.domain']);
	assert.equal(csp['frame-ancestors'], ['self', 'trusted1.domain', 'trusted2.domain']);
});

test('generate_csp with invalid sources still works at runtime', () => {
	// Strings should always work at runtime
	const invalid_source = 'not-a-valid-domain';
	const csp = create_csp_directives({
		trusted_sources: invalid_source,
	});

	// Runtime behavior should work with any string
	assert.equal(csp['script-src'], ['self', invalid_source]);
});

test('generate_csp with nonce and hash trusted_sources', () => {
	const csp = create_csp_directives({
		trusted_sources: ['sha256-abc123', 'nonce-xyz789'],
	});

	// Should add cryptographic sources to appropriate directives
	assert.equal(csp['script-src'], ['self', 'sha256-abc123', 'nonce-xyz789']);
	assert.equal(csp['frame-ancestors'], ['self', 'sha256-abc123', 'nonce-xyz789']);
});

test('generate_csp trusted_sources with custom directive keys', () => {
	const csp = create_csp_directives({
		trusted_sources: 'trusted.domain',
		trusted_directive_keys: ['script-src', 'connect-src'],
	});

	// Should be added to the specified directives
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'trusted.domain']);

	// Should not be added to other directives with 'self'
	assert.equal(csp['img-src'], ['self', 'data:']);
	assert.equal(csp['style-src'], ['self', 'unsafe-inline']);
	assert.equal(csp['frame-ancestors'], ['self']);
});

test('generate_csp ignores non-trusted directives in trusted_directive_keys', () => {
	assert.throws(
		() =>
			create_csp_directives({
				trusted_sources: 'trusted.domain',
				// @ts-expect-error - Invalid directive key
				trusted_directive_keys: ['script-src', 'default-src'],
			}),
		/Invalid CSP trusted directive key: 'default-src'/,
		'Should throw when non-trusted directive keys are provided',
	);
});

test('generate_csp throws on invalid trusted_directive_keys', () => {
	assert.throws(
		() =>
			create_csp_directives({
				trusted_sources: 'trusted.domain',
				// @ts-expect-error - Invalid directive key
				trusted_directive_keys: ['not-a-directive'],
			}),
		/Invalid CSP trusted directive key: 'not-a-directive'/,
		'Should throw on invalid directive keys',
	);
});

test('generate_csp with directive override', () => {
	const csp = create_csp_directives({
		trusted_sources: 'trusted.domain',
		config: {
			'script-src': ['other.domain'],
		},
	});

	// The directive should be explicitly set by config, not affected by trusted_sources
	assert.equal(csp['script-src'], ['other.domain']);

	// Other directives still get trusted sources
	assert.equal(csp['connect-src'], ['self', 'trusted.domain']);
});

test('generate_csp directive with function override', () => {
	const csp = create_csp_directives({
		trusted_sources: 'trusted.domain',
		config: {
			'script-src': (defaults) => {
				// Defaults should include trusted sources
				assert.equal(defaults, ['self', 'trusted.domain']);
				return ['specific.domain', 'another-site.com'];
			},
		},
	});

	// Function should override the directive
	assert.equal(csp['script-src'], ['specific.domain', 'another-site.com']);
});

test('generate_csp trusted_sources with config static overrides', () => {
	const csp = create_csp_directives({
		trusted_sources: 'trusted.domain',
		config: {
			// Static array should completely override, even with trusted sources
			'script-src': ['self', 'static-override.com'],
		},
	});

	// Static override should take precedence (trusted sources not added)
	assert.equal(csp['script-src'], ['self', 'static-override.com']);

	// Other directives still get trusted sources
	assert.equal(csp['connect-src'], ['self', 'trusted.domain']);
	assert.equal(csp['frame-ancestors'], ['self', 'trusted.domain']);
});

test('generate_csp trusted_sources with function overrides', () => {
	const csp = create_csp_directives({
		trusted_sources: 'trusted.domain',
		config: {
			// Function receives value with trusted sources already included
			'script-src': (defaults) => [...defaults, 'function-added.com'],
			// Function completely overrides
			'connect-src': () => ['complete-override.com'],
		},
	});

	// Function with defaults should see trusted sources
	assert.equal(csp['script-src'], ['self', 'trusted.domain', 'function-added.com']);

	// Function without defaults completely overrides
	assert.equal(csp['connect-src'], ['complete-override.com']);
});

test('generate_csp comprehensive example', () => {
	// A complex example that tests all features together
	const csp = create_csp_directives({
		trusted_sources: ['trusted1.domain', 'trusted2.domain'],
		trusted_directive_keys: ['script-src', 'connect-src', 'img-src'],
		config: {
			'script-src': (defaults) => [...defaults, 'config-added.com'],
			'connect-src': ['self', 'static-override.com'],
			'frame-ancestors': ['allowed-parent.com'], // Explicit override
			'default-src': ['self'], // Override default-src from 'none' to 'self'
			'upgrade-insecure-requests': false,
		},
	});

	// Check all values are as expected
	assert.equal(csp['script-src'], [
		'self',
		'trusted1.domain',
		'trusted2.domain',
		'config-added.com',
	]);
	assert.equal(csp['connect-src'], ['self', 'static-override.com']); // Static overrides trusted sources
	assert.equal(csp['frame-ancestors'], ['allowed-parent.com']); // Explicit config override
	assert.equal(csp['img-src'], ['self', 'data:', 'trusted1.domain', 'trusted2.domain']);
	assert.equal(csp['default-src'], ['self']); // Overridden from 'none'
	assert.is(csp['upgrade-insecure-requests'], false);

	// Check directives not in trusted_directive_keys
	assert.equal(csp['style-src'], ['self', 'unsafe-inline']); // Not modified by trusted sources
});

test('generate_csp freezes the result object itself to prevent mutation', () => {
	const csp = create_csp_directives();

	// Verify that the result object is frozen
	assert.is(Object.isFrozen(csp), true, 'The CSP object itself should be frozen');

	// Attempt to add new property to CSP object
	assert.throws(
		() => {
			// @ts-expect-error - Intentionally trying to modify frozen object
			csp['new-directive'] = ['evil.domain'];
		},
		/Cannot add property/,
		'Should not allow adding new properties to frozen CSP object',
	);

	// Attempt to modify existing property on CSP object
	assert.throws(
		() => {
			csp['script-src'] = ['evil.domain'];
		},
		/Cannot assign to read only property/,
		'Should not allow modifying properties on frozen CSP object',
	);
});

test('generate_csp with config should also freeze the result object', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', 'trusted.domain'],
			'connect-src': ['self', 'a.trusted.domain'],
		},
	});

	// Verify that the configured object is frozen
	assert.is(Object.isFrozen(csp), true, 'The CSP object should be frozen even with custom config');

	// Attempt to add a new directive
	assert.throws(
		() => {
			// @ts-expect-error - Intentionally trying to modify frozen object
			csp['new-directive'] = ['evil.domain'];
		},
		/Cannot add property/,
		'Should not allow adding new properties to frozen CSP object with custom config',
	);
});

test.run();
