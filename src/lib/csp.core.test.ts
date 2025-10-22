import {test, assert} from 'vitest';
import type {KitConfig} from '@sveltejs/kit';
import type {Defined} from '@ryanatkn/belt/types.js';

import {
	create_csp_directives,
	csp_directive_value_defaults,
	csp_directive_specs,
	COLOR_SCHEME_SCRIPT_HASH,
	type Csp_Directives,
} from '$lib/csp.js';

// Type compatibility test - this errors if Csp_Directives is not assignable to SvelteKit's directives type
type Kit_Csp_Directives = Defined<KitConfig['csp']>['directives'];
const assert_csp_directives: Kit_Csp_Directives = {} as Csp_Directives;
assert_csp_directives;

test('create_csp_directives produces defaults with no options', () => {
	const csp = create_csp_directives();

	// Check that some directives exist
	assert.ok('default-src' in csp, 'default-src should exist');
	assert.ok('script-src' in csp, 'script-src should exist');
	assert.ok('img-src' in csp, 'img-src should exist');
	assert.ok('upgrade-insecure-requests' in csp, 'upgrade-insecure-requests should exist');

	// Verify defaults match specs
	for (const spec of csp_directive_specs) {
		const default_value = csp_directive_value_defaults[spec.name];
		if (default_value !== null) {
			assert.deepEqual(
				csp[spec.name],
				default_value,
				`${spec.name} should match its spec default value`,
			);
		}
	}
});

test('specific default directives have expected values', () => {
	const csp = create_csp_directives();

	// Check specific critical defaults
	assert.deepEqual(csp['default-src'], ['none']);
	assert.deepEqual(csp['script-src'], ['self', COLOR_SCHEME_SCRIPT_HASH]);
	assert.deepEqual(csp['script-src-elem'], ['self', COLOR_SCHEME_SCRIPT_HASH]);
	assert.deepEqual(csp['script-src-attr'], ['none']);
	assert.deepEqual(csp['style-src'], ['self', 'unsafe-inline']);
	assert.deepEqual(csp['img-src'], ['self', 'data:', 'blob:', 'filesystem:']);
	assert.deepEqual(csp['connect-src'], ['self']);
	assert.deepEqual(csp['object-src'], ['none']);
	assert.deepEqual(csp['base-uri'], ['none']);
	assert.strictEqual(csp['upgrade-insecure-requests'], true);
});

test('COLOR_SCHEME_SCRIPT_HASH appears in script directives', () => {
	const csp = create_csp_directives();

	// The color scheme script hash should be in script-src and script-src-elem by default
	assert.ok(
		csp['script-src']!.includes(COLOR_SCHEME_SCRIPT_HASH),
		'script-src should include COLOR_SCHEME_SCRIPT_HASH',
	);
	assert.ok(
		csp['script-src-elem']!.includes(COLOR_SCHEME_SCRIPT_HASH),
		'script-src-elem should include COLOR_SCHEME_SCRIPT_HASH',
	);

	// Should not be in other directives
	assert.ok(
		!csp['script-src-attr']!.includes(COLOR_SCHEME_SCRIPT_HASH),
		'script-src-attr should not include COLOR_SCHEME_SCRIPT_HASH',
	);
});

test('null default values are omitted from output', () => {
	const csp = create_csp_directives();

	// Directives with null defaults should not appear in the output
	assert.strictEqual('report-to' in csp, false, 'report-to should not be in output');
	assert.strictEqual(
		'require-trusted-types-for' in csp,
		false,
		'require-trusted-types-for should not be in output',
	);
	assert.strictEqual('trusted-types' in csp, false, 'trusted-types should not be in output');
	assert.strictEqual('sandbox' in csp, false, 'sandbox should not be in output');
});

test('array directives are properly initialized', () => {
	const csp = create_csp_directives();

	// Array directives should be arrays
	assert.ok(Array.isArray(csp['script-src']), 'script-src should be an array');
	assert.ok(Array.isArray(csp['img-src']), 'img-src should be an array');
	assert.ok(Array.isArray(csp['style-src']), 'style-src should be an array');
});

test('boolean directives are properly initialized', () => {
	const csp = create_csp_directives();

	// Boolean directives should be booleans
	assert.strictEqual(
		typeof csp['upgrade-insecure-requests'],
		'boolean',
		'upgrade-insecure-requests should be a boolean',
	);
	assert.strictEqual(csp['upgrade-insecure-requests'], true);
});

test('empty options object produces same result as no options', () => {
	const csp1 = create_csp_directives();
	const csp2 = create_csp_directives({});

	assert.deepEqual(csp1, csp2, 'empty options should produce same result as no options');
});

test('directives are independent between calls', () => {
	const csp1 = create_csp_directives();
	const csp2 = create_csp_directives();

	// Modify csp1
	if (Array.isArray(csp1['script-src'])) {
		csp1['script-src'].push('https://modified.com' as any);
	}

	// csp2 should not be affected
	assert.ok(
		!csp2['script-src']!.includes('https://modified.com' as any),
		'modifying csp1 should not affect csp2',
	);
});
