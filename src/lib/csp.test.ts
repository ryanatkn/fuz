import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {create_csp_directives, type Csp_Directives, type Csp_Config} from '$lib/csp.js';

const TRUSTED = 'trusted.domain';
const TRUSTED_A = 'a.trusted.domain';
const TRUSTED_B = 'b.trusted.domain';

test('create_csp_directives with empty config returns defaults', () => {
	const csp = create_csp_directives();

	// Check a sample of default values
	assert.equal(csp['default-src'], ['none']);
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['connect-src'], ['self']);
});

test('create_csp_directives with config object', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', TRUSTED],
			'connect-src': ['self', TRUSTED_A],
		},
	});

	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], ['self', TRUSTED_A]);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('create_csp_directives with boolean directive values', () => {
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

test('create_csp_directives with function values', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': (defaults) => [...defaults, TRUSTED],
			'connect-src': () => [TRUSTED_A],
		},
	});

	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], [TRUSTED_A]);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('create_csp_directives with explicit undefined values', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', TRUSTED],
			'connect-src': undefined,
			'img-src': undefined,
		},
	});

	assert.equal(csp['script-src'], ['self', TRUSTED]);
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

test('create_csp_directives with function that returns undefined', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': (defaults) => [...defaults, TRUSTED],
			'connect-src': () => undefined,
			'img-src': () => undefined,
		},
	});

	assert.equal(csp['script-src'], ['self', TRUSTED]);
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

test('create_csp_directives with mixed static and function values', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', TRUSTED],
			'connect-src': (defaults) => [...defaults, TRUSTED_A],
			'img-src': (defaults) => [...defaults, TRUSTED_B],
		},
	});

	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], ['self', TRUSTED_A]);
	assert.equal(csp['img-src'], ['self', 'data:', TRUSTED_B]);
});

test('create_csp_directives with custom defaults', () => {
	const custom_defaults: Csp_Directives = {
		'default-src': ['self'],
		'script-src': ['self', 'trusted2.domain'],
		'connect-src': ['self', 'a.trusted2.domain'],
		'upgrade-insecure-requests': false,
	};

	const csp = create_csp_directives({
		defaults: custom_defaults,
		config: {
			'script-src': ['self', TRUSTED],
		},
	});

	assert.equal(csp['default-src'], ['self']);
	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], ['self', 'a.trusted2.domain']);
	assert.is(
		csp['upgrade-insecure-requests'],
		false,
		'Boolean values from defaults should be preserved if not overridden',
	);
});

test('create_csp_directives with undefined defaults for function callbacks', () => {
	// Define a partial defaults object that's missing some values
	const custom_defaults = {
		'default-src': ['self'],
		// Intentionally omitting connect-src to test undefined defaults
	} satisfies Csp_Directives;

	const csp = create_csp_directives({
		defaults: custom_defaults,
		config: {
			'default-src': (defaults) => [...defaults, TRUSTED],
			'connect-src': (defaults) => {
				// Assert that defaults is undefined when key doesn't exist in custom_defaults
				assert.is(defaults, undefined, 'Defaults should be undefined when not in custom defaults');
				return [TRUSTED_A];
			},
		},
	});

	assert.equal(csp['default-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], [TRUSTED_A]);
});

test('create_csp_directives with report-uri passing undefined as default', () => {
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

test('create_csp_directives should not allow array values to be mutated externally', () => {
	const array: Csp_Config['script-src'] = ['self', TRUSTED];

	const csp = create_csp_directives({
		config: {
			'script-src': array,
		},
	});

	// Attempt to modify the original array
	array.push('evil.domain');

	// CSP should have a clone and remain unchanged
	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.not.equal(csp['script-src'], array);
});

test('create_csp_directives should freeze arrays to prevent mutation', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', TRUSTED],
		},
	});

	// Attempt to modify the array in the result
	const script_src = csp['script-src'];
	assert.throws(
		() => script_src!.push('evil.domain'),
		TypeError,
		'Arrays in the result should be frozen and not allow mutation',
	);

	// Verify the array was not changed
	assert.equal(csp['script-src'], ['self', TRUSTED]);

	// Also verify that inherited default arrays are frozen
	const connect_src = csp['connect-src']; // This comes from defaults
	assert.throws(
		() => connect_src!.push('evil.domain'),
		TypeError,
		'Arrays inherited from defaults should also be frozen',
	);

	// Verify the default array was not changed
	assert.equal(csp['connect-src'], ['self']);
});

test('create_csp_directives should freeze arrays when no config is passed', () => {
	const csp = create_csp_directives();

	// Attempt to modify arrays in the default configuration
	const script_src = csp['script-src'];
	const img_src = csp['img-src'];

	assert.throws(
		() => script_src!.push('evil.domain'),
		TypeError,
		'Default script-src array should be frozen',
	);

	assert.throws(
		() => img_src!.push('evil.domain'),
		TypeError,
		'Default img-src array should be frozen',
	);

	// Verify values remain unchanged
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['img-src'], ['self', 'data:']);
});

test('create_csp_directives with trusted_sources adds sources to relevant directives', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
	});

	// Check that trusted source is added to directives in TRUSTED_CSP_DIRECTIVE_KEYS
	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], ['self', TRUSTED]);
	assert.equal(csp['img-src'], ['self', 'data:', TRUSTED]);
	assert.equal(csp['style-src'], ['self', 'unsafe-inline', TRUSTED]);
	assert.equal(csp['frame-ancestors'], ['self', TRUSTED]);

	// Untrusted directives don't get trusted sources
	assert.equal(csp['default-src'], ['none']);
	assert.equal(csp['object-src'], ['none']);
});

test('create_csp_directives with multiple trusted_sources', () => {
	const csp = create_csp_directives({
		trusted_sources: ['trusted1.domain', 'trusted2.domain'],
	});

	// Check that all trusted sources are added
	assert.equal(csp['script-src'], ['self', 'trusted1.domain', 'trusted2.domain']);
	assert.equal(csp['connect-src'], ['self', 'trusted1.domain', 'trusted2.domain']);
	assert.equal(csp['frame-ancestors'], ['self', 'trusted1.domain', 'trusted2.domain']);
});

test('create_csp_directives with nonce and hash trusted_sources', () => {
	const csp = create_csp_directives({
		trusted_sources: ['sha256-abc123', 'nonce-xyz789'],
	});

	// Should add cryptographic sources to appropriate directives
	assert.equal(csp['script-src'], ['self', 'sha256-abc123', 'nonce-xyz789']);
	assert.equal(csp['frame-ancestors'], ['self', 'sha256-abc123', 'nonce-xyz789']);
});

test('create_csp_directives trusted_sources with custom directive keys', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
		trusted_directive_keys: ['script-src', 'connect-src'],
	});

	// Should be added to the specified directives
	assert.equal(csp['script-src'], ['self', TRUSTED]);
	assert.equal(csp['connect-src'], ['self', TRUSTED]);

	// Should not be added to other directives with 'self'
	assert.equal(csp['img-src'], ['self', 'data:']);
	assert.equal(csp['style-src'], ['self', 'unsafe-inline']);
	assert.equal(csp['frame-ancestors'], ['self']);
});

test('create_csp_directives throws on non-trusted directives in trusted_directive_keys', () => {
	assert.throws(
		() =>
			create_csp_directives({
				trusted_sources: TRUSTED,
				// @ts-expect-error - Invalid directive key
				trusted_directive_keys: ['script-src', 'default-src'],
			}),
		/Invalid CSP trusted directive key: 'default-src'/,
		'Should throw when non-trusted directive keys are provided',
	);
});

test('create_csp_directives throws on invalid trusted_directive_keys', () => {
	assert.throws(
		() =>
			create_csp_directives({
				trusted_sources: TRUSTED,
				// @ts-expect-error - Invalid directive key
				trusted_directive_keys: ['not-a-directive'],
			}),
		/Invalid CSP trusted directive key: 'not-a-directive'/,
		'Should throw on invalid directive keys',
	);
});

test('create_csp_directives with directive override', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
		config: {
			'script-src': ['other.domain'],
		},
	});

	// The directive should be explicitly set by config, not affected by trusted_sources
	assert.equal(csp['script-src'], ['other.domain']);

	// Other directives still get trusted sources
	assert.equal(csp['connect-src'], ['self', TRUSTED]);
});

test('create_csp_directives directive with function override', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
		config: {
			'script-src': (defaults) => {
				// Defaults should include trusted sources
				assert.equal(defaults, ['self', TRUSTED]);
				return ['specific.domain', 'another-site.com'];
			},
		},
	});

	// Function should override the directive
	assert.equal(csp['script-src'], ['specific.domain', 'another-site.com']);
});

test('create_csp_directives trusted_sources with config static overrides', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
		config: {
			// Static array should completely override, even with trusted sources
			'script-src': ['self', 'static-override.com'],
		},
	});

	// Static override should take precedence (trusted sources not added)
	assert.equal(csp['script-src'], ['self', 'static-override.com']);

	// Other directives still get trusted sources
	assert.equal(csp['connect-src'], ['self', TRUSTED]);
	assert.equal(csp['frame-ancestors'], ['self', TRUSTED]);
});

test('create_csp_directives trusted_sources with function overrides', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
		config: {
			// Function receives value with trusted sources already included
			'script-src': (defaults) => [...defaults, 'function-added.com'],
			// Function completely overrides
			'connect-src': () => ['complete-override.com'],
		},
	});

	// Function with defaults should see trusted sources
	assert.equal(csp['script-src'], ['self', TRUSTED, 'function-added.com']);

	// Function without defaults completely overrides
	assert.equal(csp['connect-src'], ['complete-override.com']);
});

test('create_csp_directives comprehensive example', () => {
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

test('create_csp_directives freezes the result object itself to prevent mutation', () => {
	const csp = create_csp_directives();

	// Verify that the result object is frozen
	assert.is(Object.isFrozen(csp), true, 'The CSP object itself should be frozen');

	// Attempt to add new property to CSP object
	assert.throws(
		() => {
			// @ts-expect-error - Intentionally trying to modify frozen object
			csp['new-directive'] = ['evil.domain'];
		},
		TypeError,
		'Should not allow adding new properties to frozen CSP object',
	);

	// Attempt to modify existing property on CSP object
	assert.throws(
		() => {
			csp['script-src'] = ['evil.domain'];
		},
		TypeError,
		'Should not allow modifying properties on frozen CSP object',
	);
});

test('create_csp_directives with config should also freeze the result object', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': ['self', TRUSTED],
			'connect-src': ['self', TRUSTED_A],
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
		TypeError,
		'Should not allow adding new properties to frozen CSP object with custom config',
	);
});

test('create_csp_directives with function returning empty array', () => {
	const csp = create_csp_directives({
		config: {
			'script-src': () => [],
			'connect-src': () => [], // Empty but not undefined
		},
	});

	// Keys should exist with empty arrays, not be removed
	assert.equal(csp['script-src'], [], 'Empty arrays should be preserved');
	assert.equal(csp['connect-src'], [], 'Empty arrays should be preserved');
});

test('create_csp_directives with partial defaults and trusted_sources', () => {
	// Define a partial defaults object that's missing some values
	const custom_defaults = {
		'default-src': ['self'],
		'script-src': ['self'],
		// Intentionally omitting connect-src and img-src
	} satisfies Csp_Directives;

	const csp = create_csp_directives({
		defaults: custom_defaults,
		trusted_sources: TRUSTED,
		config: {
			'connect-src': (defaults) => {
				// Assert that defaults is undefined when key doesn't exist in custom_defaults
				assert.is(defaults, undefined, 'Defaults should be undefined for missing directive');
				return [TRUSTED_A];
			},
			'img-src': (defaults) => {
				// Missing directive shouldn't have trusted sources
				assert.is(defaults, undefined, 'Defaults should be undefined for missing directive');
				return ['img.domain'];
			},
		},
	});

	// Trusted sources should be added to directives that exist in defaults
	assert.equal(
		csp['script-src'],
		['self', TRUSTED],
		'Trusted sources should be added to existing directives',
	);

	// But not to directives that don't exist in defaults but are added via config
	assert.equal(
		csp['connect-src'],
		[TRUSTED_A],
		'Custom config directive should not get trusted sources',
	);
	assert.equal(
		csp['img-src'],
		['img.domain'],
		'Custom config directive should not get trusted sources',
	);
});

test('create_csp_directives should not mutate original defaults object', () => {
	// Create a mutable defaults object
	const custom_defaults: Csp_Directives = {
		'default-src': ['self'],
		'script-src': ['script.domain'],
		'connect-src': ['connect.domain'],
		'upgrade-insecure-requests': false,
	};

	// Keep a reference to original arrays
	const original_script_src = custom_defaults['script-src'];
	const original_connect_src = custom_defaults['connect-src'];

	// Create CSP with these defaults
	const csp = create_csp_directives({
		defaults: custom_defaults,
		trusted_sources: TRUSTED,
		config: {
			'script-src': (defaults) => [...defaults, 'added.domain'],
		},
	});

	// Verify that result has expected values
	assert.equal(csp['script-src'], ['script.domain', TRUSTED, 'added.domain']);
	assert.equal(csp['connect-src'], ['connect.domain', TRUSTED]);

	// Verify original defaults are unchanged
	assert.equal(custom_defaults['script-src'], ['script.domain']);
	assert.equal(custom_defaults['connect-src'], ['connect.domain']);

	// Verify original arrays are unchanged and still the same reference
	assert.is(custom_defaults['script-src'], original_script_src);
	assert.is(custom_defaults['connect-src'], original_connect_src);
});

test('create_csp_directives with empty trusted_sources array', () => {
	const csp = create_csp_directives({
		trusted_sources: [], // Empty array
		config: {
			'script-src': (defaults) => [...defaults, 'added.domain'],
		},
	});

	// No trusted sources should be added
	assert.equal(csp['script-src'], ['self', 'added.domain']);
	assert.equal(csp['connect-src'], ['self']);
});

test('create_csp_directives with empty trusted_sources string', () => {
	const csp = create_csp_directives({
		trusted_sources: '', // Empty string
		config: {
			'script-src': (defaults) => [...defaults, 'added.domain'],
		},
	});

	// No trusted sources should be added
	assert.equal(csp['script-src'], ['self', 'added.domain']);
	assert.equal(csp['connect-src'], ['self']);
});

test('create_csp_directives with empty trusted_directive_keys array', () => {
	const csp = create_csp_directives({
		trusted_sources: TRUSTED,
		trusted_directive_keys: [], // Empty array, so no directives should get trusted sources
	});

	// No directive should get the trusted source
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['connect-src'], ['self']);
	assert.equal(csp['img-src'], ['self', 'data:']);
});

test.run();
