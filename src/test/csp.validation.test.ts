import {test, assert, describe} from 'vitest';

import {
	create_csp_directives,
	parse_csp_directive,
	csp_directive_specs,
	csp_directive_spec_by_name,
} from '$lib/csp.js';
import {TEST_SOURCES} from '$test/csp_test_helpers.js';

const {TRUSTED} = TEST_SOURCES;

describe('parse_csp_directive tests', () => {
	test('parse_csp_directive: accepts valid directive names', () => {
		assert.strictEqual(parse_csp_directive('default-src'), 'default-src');
		assert.strictEqual(parse_csp_directive('script-src'), 'script-src');
		assert.strictEqual(parse_csp_directive('img-src'), 'img-src');
		assert.strictEqual(parse_csp_directive('style-src'), 'style-src');
		assert.strictEqual(parse_csp_directive('connect-src'), 'connect-src');
		assert.strictEqual(
			parse_csp_directive('upgrade-insecure-requests'),
			'upgrade-insecure-requests',
		);
	});

	test('parse_csp_directive: returns null for invalid directive names', () => {
		assert.strictEqual(parse_csp_directive('invalid-src'), null);
		assert.strictEqual(parse_csp_directive('script'), null);
		assert.strictEqual(parse_csp_directive('SCRIPT-SRC'), null); // Case sensitive
		assert.strictEqual(parse_csp_directive('script_src'), null); // Wrong delimiter
		assert.strictEqual(parse_csp_directive(''), null); // Empty string
	});

	test('parse_csp_directive: returns null for non-string types', () => {
		assert.strictEqual(parse_csp_directive(undefined), null);
		assert.strictEqual(parse_csp_directive(null), null);
		assert.strictEqual(parse_csp_directive(123), null);
		assert.strictEqual(parse_csp_directive({}), null);
		assert.strictEqual(parse_csp_directive([]), null);
		assert.strictEqual(parse_csp_directive(true), null);
	});

	test('parse_csp_directive: validates all known directives', () => {
		// All directives in csp_directive_specs should be parseable
		for (const spec of csp_directive_specs) {
			assert.strictEqual(
				parse_csp_directive(spec.name),
				spec.name,
				`${spec.name} should be a valid directive`,
			);
		}
	});
});

describe('error handling tests', () => {
	test('error: invalid directive in trusted_sources', () => {
		assert.throws(
			() => {
				create_csp_directives({
					trusted_sources: [
						{
							source: TRUSTED as any,
							directives: ['invalid-directive' as any],
						},
					],
				});
			},
			/Invalid directive in trusted_sources/,
			'should throw error for invalid directive in trusted_sources',
		);
	});

	test('error: invalid directive in directives option', () => {
		assert.throws(
			() => {
				create_csp_directives({
					directives: {
						// @ts-expect-error - Testing runtime error
						'invalid-directive': ['self'],
					},
				});
			},
			/Invalid directive/,
			'should throw error for invalid directive in directives option',
		);
	});

	test('error message includes the invalid directive name from directives option', () => {
		try {
			create_csp_directives({
				directives: {
					// @ts-expect-error - Testing runtime error
					'my-bad-directive': ['self'],
				},
			});
			assert.fail('should have thrown an error');
		} catch (error: any) {
			assert.ok(
				error.message.includes('my-bad-directive'),
				'error message should include the invalid directive name',
			);
			assert.ok(
				error.message.includes('options.directives'),
				'error message should indicate it came from options.directives',
			);
		}
	});

	test('error message includes the invalid directive name from trusted_sources', () => {
		try {
			create_csp_directives({
				trusted_sources: [
					{
						source: TRUSTED as any,
						directives: ['my-invalid-directive' as any],
					},
				],
			});
			assert.fail('should have thrown an error');
		} catch (error: any) {
			assert.ok(
				error.message.includes('my-invalid-directive'),
				'error message should include the invalid directive name',
			);
			assert.ok(
				error.message.includes('trusted_sources'),
				'error message should indicate it came from trusted_sources',
			);
		}
	});
});

describe('immutability tests', () => {
	test('immutability: modifying returned directives does not affect subsequent calls', () => {
		const options = {
			value_defaults: {
				'script-src': ['self', 'https://example.com' as any],
			},
		};

		const csp1 = create_csp_directives(options);
		const csp2 = create_csp_directives(options);

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

	test('immutability: modifying input options does not affect output', () => {
		const input_array = ['self', 'https://example.com' as any];
		const options = {
			value_defaults: {
				'script-src': input_array,
			},
		};

		const csp = create_csp_directives(options);

		// Modify the input array
		input_array.push('https://modified.com' as any);

		// csp should not be affected
		assert.ok(
			!csp['script-src']!.includes('https://modified.com' as any),
			'modifying input array should not affect csp',
		);
	});

	test('immutability: modifying result arrays does not affect subsequent calls', () => {
		const csp1 = create_csp_directives({
			value_defaults: {
				'script-src': ['self', 'https://example.com' as any],
			},
		});

		// Modify csp1's script-src
		csp1['script-src']!.push('https://modified.com' as any);

		const csp2 = create_csp_directives({
			value_defaults: {
				'script-src': ['self', 'https://example.com' as any],
			},
		});

		// csp2 should not be affected
		assert.ok(
			!csp2['script-src']!.includes('https://modified.com' as any),
			'modifying csp1 should not affect csp2',
		);
	});

	test('immutability: trusted_sources input modification does not affect output', () => {
		const trusted_sources = [
			{
				source: TRUSTED as any,
				trust: 'high' as const,
			},
		];

		const csp1 = create_csp_directives({trusted_sources});

		// Modify the input array
		trusted_sources.push({
			source: 'new-source.com' as any,
			trust: 'high',
		});

		const csp2 = create_csp_directives({trusted_sources});

		// csp1 should not have the new source
		assert.ok(
			!csp1['script-src']!.includes('new-source.com' as any),
			'modifying trusted_sources after csp1 creation should not affect csp1',
		);

		// csp2 should have the new source
		assert.ok(
			csp2['script-src']!.includes('new-source.com' as any),
			'csp2 should include the new source',
		);
	});

	test('immutability: array spreading creates proper copies', () => {
		const csp1 = create_csp_directives();
		const csp2 = create_csp_directives();

		// Modify csp1's script-src
		csp1['script-src']!.push('https://modified.com' as any);

		// csp2 should not be affected
		assert.ok(
			!csp2['script-src']!.includes('https://modified.com' as any),
			'arrays should be independent between calls',
		);
	});

	test('immutability: structuredClone works for complex directives', () => {
		const complex_value = [
			'self',
			'https://example.com' as any,
			{nested: 'object'} as any, // Though not typical for CSP, test that cloning works
		];

		const csp1 = create_csp_directives({
			directives: {
				'script-src': () => complex_value,
			},
		});

		// Modify the complex value
		complex_value.push('https://modified.com' as any);
		(complex_value[2] as {nested: string}).nested = 'modified';

		const csp2 = create_csp_directives({
			directives: {
				'script-src': () => complex_value,
			},
		});

		// csp1 should not have the modifications
		assert.strictEqual(csp1['script-src']!.length, 3, 'csp1 should have original length');
		assert.ok(
			!csp1['script-src']!.includes('https://modified.com' as any),
			'csp1 should not have new element',
		);

		// csp2 should have the modifications
		assert.strictEqual(csp2['script-src']!.length, 4, 'csp2 should have new length');
		assert.ok(
			csp2['script-src']!.includes('https://modified.com' as any),
			'csp2 should have new element',
		);
	});

	test('immutability: boolean directives are not affected', () => {
		const csp1 = create_csp_directives({
			value_defaults: {
				'upgrade-insecure-requests': true,
			},
		});

		// Boolean values are immutable by nature, but verify the behavior
		const csp2 = create_csp_directives({
			value_defaults: {
				'upgrade-insecure-requests': true,
			},
		});

		assert.strictEqual(csp1['upgrade-insecure-requests'], true);
		assert.strictEqual(csp2['upgrade-insecure-requests'], true);
	});
});

describe('directive specs validation', () => {
	test('directive specs: all specs have valid structure', () => {
		for (const spec of csp_directive_specs) {
			// Every spec should have a name
			assert.ok(spec.name, `spec should have a name`);
			assert.strictEqual(typeof spec.name, 'string', `spec name should be a string`);

			// fallback should be array or null
			assert.ok(
				Array.isArray(spec.fallback) || spec.fallback === null, // eslint-disable-line @typescript-eslint/no-unnecessary-condition
				`${spec.name} fallback should be array or null`,
			);

			// fallback_of should be array or null
			assert.ok(
				spec.fallback_of === null || Array.isArray(spec.fallback_of),
				`${spec.name} fallback_of should be array or null`,
			);
		}
	});

	test('directive specs: fallback references are valid', () => {
		for (const spec of csp_directive_specs) {
			if (spec.fallback) {
				for (const fallback_name of spec.fallback) {
					assert.ok(
						csp_directive_spec_by_name.has(fallback_name),
						`${spec.name} references valid fallback ${fallback_name}`,
					);
				}
			}
		}
	});

	test('directive specs: fallback_of references are valid', () => {
		for (const spec of csp_directive_specs) {
			if (spec.fallback_of) {
				for (const fallback_of_name of spec.fallback_of) {
					assert.ok(
						csp_directive_spec_by_name.has(fallback_of_name),
						`${spec.name} references valid fallback_of ${fallback_of_name}`,
					);
				}
			}
		}
	});

	test('directive specs: csp_directive_spec_by_name Map is correctly populated', () => {
		// Map should have same number of entries as the array
		assert.strictEqual(
			csp_directive_spec_by_name.size,
			csp_directive_specs.length,
			'Map should have same size as array',
		);

		// Every spec should be in the map with correct key
		for (const spec of csp_directive_specs) {
			assert.ok(csp_directive_spec_by_name.has(spec.name), `Map should contain ${spec.name}`);
			assert.strictEqual(
				csp_directive_spec_by_name.get(spec.name),
				spec,
				`Map should have correct spec for ${spec.name}`,
			);
		}
	});

	test('directive specs: fallback chains are consistent', () => {
		// If A falls back to B, then B should list A in fallback_of
		for (const spec of csp_directive_specs) {
			if (spec.fallback) {
				for (const fallback_name of spec.fallback) {
					const fallback_spec = csp_directive_spec_by_name.get(fallback_name);
					if (fallback_spec?.fallback_of) {
						assert.ok(
							fallback_spec.fallback_of.includes(spec.name),
							`${fallback_name} should list ${spec.name} in fallback_of`,
						);
					}
				}
			}
		}
	});

	test('directive specs: all known directives are present', () => {
		// Verify a comprehensive list of expected directives
		const expected_directives = [
			'default-src',
			'script-src',
			'script-src-elem',
			'script-src-attr',
			'style-src',
			'style-src-elem',
			'style-src-attr',
			'img-src',
			'media-src',
			'font-src',
			'manifest-src',
			'child-src',
			'connect-src',
			'frame-src',
			'frame-ancestors',
			'form-action',
			'worker-src',
			'object-src',
			'base-uri',
			'upgrade-insecure-requests',
			'report-to',
			'require-trusted-types-for',
			'trusted-types',
			'sandbox',
		];

		for (const directive of expected_directives) {
			assert.ok(
				csp_directive_spec_by_name.has(directive as any),
				`${directive} should be in specs`,
			);
		}
	});
});
