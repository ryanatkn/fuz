import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {generate_csp, type Csp_Directives, type Csp_Config, csp_defaults_strict} from '$lib/csp.js';

test('generate_csp with empty config returns defaults', () => {
	const csp = generate_csp();

	// Check a sample of default values
	assert.equal(csp['default-src'], ['none']);
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['connect-src'], ['self']);
});

test('generate_csp with static values', () => {
	const config = {
		'script-src': ['self', 'trusted.domain'],
		'connect-src': ['self', 'a.trusted.domain'],
	} satisfies Csp_Config;

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with boolean directive values', () => {
	const config = {
		'upgrade-insecure-requests': false,
	} satisfies Csp_Config;

	const csp = generate_csp(config);
	assert.is(csp['upgrade-insecure-requests'], false);

	// Test the inverse as well
	const config2 = {
		'upgrade-insecure-requests': true,
	} satisfies Csp_Config;

	const csp2 = generate_csp(config2);
	assert.is(csp2['upgrade-insecure-requests'], true);
});

test('generate_csp with function values', () => {
	const config = {
		'script-src': (defaults) => [...defaults, 'trusted.domain'],
		'connect-src': () => ['a.trusted.domain'],
	} satisfies Csp_Config;

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['a.trusted.domain']);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with explicit undefined values', () => {
	const config = {
		'script-src': ['self', 'trusted.domain'],
		'connect-src': undefined,
		'img-src': undefined,
	} satisfies Csp_Config;

	const csp = generate_csp(config);

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
	const config = {
		'script-src': (defaults) => [...defaults, 'trusted.domain'],
		'connect-src': () => undefined,
		'img-src': () => undefined,
	} satisfies Csp_Config;

	const csp = generate_csp(config);

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
	const config = {
		'script-src': ['self', 'trusted.domain'],
		'connect-src': (defaults) => [...defaults, 'a.trusted.domain'],
		'img-src': (defaults) => [...defaults, 'b.trusted.domain'],
	} satisfies Csp_Config;

	const csp = generate_csp(config);

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

	const config = {
		'script-src': ['self', 'trusted.domain'],
	} satisfies Csp_Config;

	const csp = generate_csp(config, custom_defaults);

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

	const config = {
		'default-src': (defaults) => [...defaults, 'trusted.domain'],
		'connect-src': (defaults) => {
			// Assert that defaults is undefined when key doesn't exist in custom_defaults
			assert.is(defaults, undefined, 'Defaults should be undefined when not in custom defaults');
			return ['a.trusted.domain'];
		},
	} satisfies Csp_Config<typeof custom_defaults>;

	const csp = generate_csp(config, custom_defaults);

	assert.equal(csp['default-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['a.trusted.domain']);
});

test('generate_csp with report-uri passing undefined as default', () => {
	const config = {
		'report-uri': (defaults) => {
			assert.is(defaults, undefined, 'report-uri should be undefined in default strict CSP');
			return ['/csp-violations'];
		},
	} satisfies Csp_Config<typeof csp_defaults_strict>;

	const csp = generate_csp(config);

	assert.equal(csp['report-uri'], ['/csp-violations']);
});

test('generate_csp comprehensive example', () => {
	const config = {
		'script-src': (defaults) => [...defaults, 'c.trusted.domain'],
		'connect-src': (defaults) => [...defaults, 'a.trusted.domain'],
		'img-src': ['self', 'data:', 'b.trusted.domain'],
		'upgrade-insecure-requests': false,
	} satisfies Csp_Config;

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'c.trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['img-src'], ['self', 'data:', 'b.trusted.domain']);
	assert.is(csp['upgrade-insecure-requests'], false);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
	assert.equal(csp['frame-ancestors'], ['none'], 'Security-critical defaults should be preserved');
});

test('generate_csp should not allow array values to be mutated externally', () => {
	const array: Csp_Config['script-src'] = ['self', 'trusted.domain'];

	const config = {
		'script-src': array,
	} satisfies Csp_Config;

	const csp = generate_csp(config);

	// Modify the original array
	array.push('evil.domain');

	// CSP should have a clone and remain unchanged
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.not.equal(csp['script-src'], array);
});

test('generate_csp should freeze arrays to prevent mutation', () => {
	const config = {
		'script-src': ['self', 'trusted.domain'],
	} satisfies Csp_Config;

	const csp = generate_csp(config);

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
	const csp = generate_csp();

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

test.run();
