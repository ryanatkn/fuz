import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {generate_csp, type Csp_Directives, type Csp_Config} from '$lib/csp.js';

test('generate_csp with empty config returns defaults', () => {
	const csp = generate_csp();

	// Check a sample of default values
	assert.equal(csp['default-src'], ['none']);
	assert.equal(csp['script-src'], ['self']);
	assert.equal(csp['connect-src'], ['self']);
});

test('generate_csp with static values', () => {
	const config: Csp_Config = {
		'script-src': ['self', 'trusted.domain'],
		'connect-src': ['self', 'a.trusted.domain'],
	};

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with function values', () => {
	const config: Csp_Config = {
		'script-src': (defaults) => [...defaults, 'trusted.domain'],
		'connect-src': () => ['a.trusted.domain'],
	};

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['a.trusted.domain']);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
});

test('generate_csp with mixed static and function values', () => {
	const config: Csp_Config = {
		'script-src': ['self', 'trusted.domain'],
		'connect-src': (defaults) => [...defaults, 'a.trusted.domain'],
		'img-src': (defaults) => [...defaults, 'b.trusted.domain'],
	};

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['img-src'], ['self', 'data:', 'b.trusted.domain']);
});

test('generate_csp handles boolean directive values', () => {
	const config: Csp_Config = {
		'upgrade-insecure-requests': false,
	};

	const csp = generate_csp(config);

	assert.equal(csp['upgrade-insecure-requests'], false);

	// Test the inverse as well
	const config2: Csp_Config = {
		'upgrade-insecure-requests': true,
	};

	const csp2 = generate_csp(config2);

	assert.equal(csp2['upgrade-insecure-requests'], true);
});

test('generate_csp with custom defaults', () => {
	const custom_defaults: Csp_Directives = {
		'default-src': ['self'],
		'script-src': ['self', 'trusted2.domain'],
		'connect-src': ['self', 'a.trusted2.domain'],
		'upgrade-insecure-requests': false,
	};

	const config: Csp_Config = {
		'script-src': ['self', 'trusted.domain'],
	};

	const csp = generate_csp(config, custom_defaults);

	assert.equal(csp['default-src'], ['self']);
	assert.equal(csp['script-src'], ['self', 'trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted2.domain']);
	assert.equal(
		csp['upgrade-insecure-requests'],
		false,
		'Boolean values from defaults should be preserved if not overridden',
	);
});

test('generate_csp comprehensive example', () => {
	const config: Csp_Config = {
		'script-src': (defaults) => [...defaults, 'c.trusted.domain'],
		'connect-src': (defaults) => [...defaults, 'a.trusted.domain'],
		'img-src': ['self', 'data:', 'b.trusted.domain'],
		'upgrade-insecure-requests': false,
	};

	const csp = generate_csp(config);

	assert.equal(csp['script-src'], ['self', 'c.trusted.domain']);
	assert.equal(csp['connect-src'], ['self', 'a.trusted.domain']);
	assert.equal(csp['img-src'], ['self', 'data:', 'b.trusted.domain']);
	assert.equal(csp['upgrade-insecure-requests'], false);
	assert.equal(csp['default-src'], ['none'], 'Unspecified values should remain at defaults');
	assert.equal(csp['frame-ancestors'], ['none'], 'Security-critical defaults should be preserved');
});

test.run();
