import {test, assert, describe} from 'vitest';
import type {Logger} from '@ryanatkn/belt/log.js';

import {
	package_gen_validate_no_duplicates,
	package_gen_sort_modules,
} from '$lib/package_gen_helpers.js';
import type {Src_Json, Module_Json, Identifier_Kind} from '$lib/src_json.js';

/**
 * Create a mock logger that captures log calls for testing validation output.
 *
 * Returns a logger with arrays to inspect logged messages:
 * - `errors` - array of error messages
 * - `warnings` - array of warning messages
 * - `infos` - array of info messages
 */
const create_mock_logger = (): Logger & {
	errors: Array<string>;
	warnings: Array<string>;
	infos: Array<string>;
} => {
	const errors: Array<string> = [];
	const warnings: Array<string> = [];
	const infos: Array<string> = [];

	return {
		errors,
		warnings,
		infos,
		error: (...args: Array<any>) => {
			errors.push(args.join(' '));
		},
		warn: (...args: Array<any>) => {
			warnings.push(args.join(' '));
		},
		info: (...args: Array<any>) => {
			infos.push(args.join(' '));
		},
	} as any;
};

/**
 * Create a mock Src_Json with test modules.
 *
 * Provides minimal package metadata for testing validation logic.
 *
 * @param modules - array of Module_Json objects to include
 * @returns Src_Json with standard test package name and version
 */
const create_mock_src_json = (modules: Array<Module_Json>): Src_Json => {
	return {
		name: '@test/package',
		version: '1.0.0',
		modules,
	};
};

/**
 * Create a mock Module_Json with test identifiers.
 *
 * Simplifies test setup by auto-generating minimal identifier metadata.
 *
 * @param path - module path (e.g., 'foo.ts', 'Bar.svelte')
 * @param identifiers - array of identifier objects with name and kind
 * @returns Module_Json with the specified identifiers
 */
const create_mock_module = (
	path: string,
	identifiers: Array<{name: string; kind: Identifier_Kind | null}>,
): Module_Json => {
	return {
		path,
		identifiers: identifiers.map(({name, kind}) => ({
			name,
			kind,
		})),
	};
};

describe('package_gen_validate_no_duplicates', () => {
	describe('happy path - validation passes', () => {
		test('no duplicates - validation passes', () => {
			const src_json = create_mock_src_json([
				create_mock_module('foo.ts', [
					{name: 'foo', kind: 'function'},
					{name: 'bar', kind: 'type'},
				]),
				create_mock_module('baz.ts', [
					{name: 'baz', kind: 'class'},
					{name: 'qux', kind: 'variable'},
				]),
			]);

			const logger = create_mock_logger();

			// Should not throw
			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			assert.strictEqual(logger.errors.length, 0);
		});

		test('empty modules array', () => {
			const src_json = create_mock_src_json([]);
			const logger = create_mock_logger();

			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			assert.strictEqual(logger.errors.length, 0);
		});

		test('modules with no identifiers', () => {
			const src_json = create_mock_src_json([
				{path: 'empty.ts', identifiers: []},
				{path: 'also_empty.ts', identifiers: []},
			]);

			const logger = create_mock_logger();

			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			assert.strictEqual(logger.errors.length, 0);
		});

		test('undefined modules array', () => {
			const src_json: Src_Json = {
				name: '@test/package',
				version: '1.0.0',
			};

			const logger = create_mock_logger();

			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			assert.strictEqual(logger.errors.length, 0);
		});

		test('single module with multiple unique identifiers', () => {
			const src_json = create_mock_src_json([
				create_mock_module('helpers.ts', [
					{name: 'foo', kind: 'function'},
					{name: 'bar', kind: 'function'},
					{name: 'Baz', kind: 'type'},
					{name: 'Qux', kind: 'class'},
				]),
			]);

			const logger = create_mock_logger();

			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			assert.strictEqual(logger.errors.length, 0);
		});
	});

	describe('error cases - validation fails', () => {
		test('single duplicate across two modules', () => {
			const src_json = create_mock_src_json([
				create_mock_module('foo.ts', [{name: 'Duplicate', kind: 'type'}]),
				create_mock_module('bar.ts', [{name: 'Duplicate', kind: 'component'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(
				() => {
					package_gen_validate_no_duplicates(src_json, logger);
				},
				/Found 1 duplicate identifier name across modules/,
				'should throw error for single duplicate',
			);

			// Check error logging
			assert.ok(logger.errors.length > 0);
			assert.ok(logger.errors.some((e) => e.includes('Duplicate')));
			assert.ok(logger.errors.some((e) => e.includes('foo.ts')));
			assert.ok(logger.errors.some((e) => e.includes('bar.ts')));
		});

		test('multiple duplicates', () => {
			const src_json = create_mock_src_json([
				create_mock_module('a.ts', [
					{name: 'Dup1', kind: 'type'},
					{name: 'Dup2', kind: 'function'},
				]),
				create_mock_module('b.ts', [
					{name: 'Dup1', kind: 'class'},
					{name: 'Dup2', kind: 'variable'},
				]),
			]);

			const logger = create_mock_logger();

			assert.throws(
				() => {
					package_gen_validate_no_duplicates(src_json, logger);
				},
				/Found 2 duplicate identifier names across modules/,
				'should throw error for multiple duplicates',
			);

			// Check error logging mentions both duplicates
			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('Dup1'));
			assert.ok(all_errors.includes('Dup2'));
		});

		test('same name in 3+ modules', () => {
			const src_json = create_mock_src_json([
				create_mock_module('a.ts', [{name: 'Common', kind: 'type'}]),
				create_mock_module('b.ts', [{name: 'Common', kind: 'function'}]),
				create_mock_module('c.ts', [{name: 'Common', kind: 'class'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			}, /Found 1 duplicate identifier name across modules/);

			// Check all three modules are mentioned
			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('a.ts'));
			assert.ok(all_errors.includes('b.ts'));
			assert.ok(all_errors.includes('c.ts'));
		});

		test('duplicate with different kinds shows both kinds', () => {
			const src_json = create_mock_src_json([
				create_mock_module('helpers.ts', [{name: 'Foo', kind: 'function'}]),
				create_mock_module('Foo.svelte', [{name: 'Foo', kind: 'component'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('function'));
			assert.ok(all_errors.includes('component'));
		});

		test('duplicate with null kind', () => {
			const src_json = create_mock_src_json([
				create_mock_module('a.ts', [{name: 'Unknown', kind: null}]),
				create_mock_module('b.ts', [{name: 'Unknown', kind: 'type'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('unknown')); // null kind shows as "unknown"
			assert.ok(all_errors.includes('type'));
		});
	});

	describe('edge cases', () => {
		test('identifiers with undefined kind', () => {
			const src_json = create_mock_src_json([
				{
					path: 'test.ts',
					identifiers: [
						{name: 'foo', kind: 'function'},
						// @ts-expect-error - testing undefined kind
						{name: 'bar', kind: undefined},
					],
				},
			]);

			const logger = create_mock_logger();

			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});
		});

		test('real-world scenario - Docs_Link collision', () => {
			const src_json = create_mock_src_json([
				create_mock_module('docs_helpers.svelte.ts', [{name: 'Docs_Link', kind: 'type'}]),
				create_mock_module('Docs_Link.svelte', [{name: 'Docs_Link', kind: 'component'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			}, /duplicate identifier name/i);

			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('Docs_Link'));
			assert.ok(all_errors.includes('docs_helpers.svelte.ts'));
			assert.ok(all_errors.includes('Docs_Link.svelte'));
		});

		test('large number of unique identifiers - performance', () => {
			const identifiers = Array.from({length: 1000}, (_, i) => ({
				name: `identifier_${i}`,
				kind: 'function' as const,
			}));

			const src_json = create_mock_src_json([create_mock_module('large.ts', identifiers)]);

			const logger = create_mock_logger();

			const start = performance.now();
			assert.doesNotThrow(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});
			const duration = performance.now() - start;

			// Should complete quickly (under 100ms for 1000 identifiers)
			assert.ok(duration < 100, `validation took ${duration}ms, expected < 100ms`);
		});
	});
});

describe('package_gen_sort_modules', () => {
	test('sorts modules alphabetically by path', () => {
		const modules: Array<Module_Json> = [
			{path: 'zebra.ts', identifiers: []},
			{path: 'alpha.ts', identifiers: []},
			{path: 'beta.ts', identifiers: []},
		];

		const sorted = package_gen_sort_modules(modules);

		assert.strictEqual(sorted[0]!.path, 'alpha.ts');
		assert.strictEqual(sorted[1]!.path, 'beta.ts');
		assert.strictEqual(sorted[2]!.path, 'zebra.ts');
	});

	test('does not mutate original array', () => {
		const modules: Array<Module_Json> = [
			{path: 'c.ts', identifiers: []},
			{path: 'a.ts', identifiers: []},
			{path: 'b.ts', identifiers: []},
		];

		const sorted = package_gen_sort_modules(modules);

		// Original array should not be mutated
		assert.strictEqual(modules[0]!.path, 'c.ts');
		assert.strictEqual(modules[1]!.path, 'a.ts');
		assert.strictEqual(modules[2]!.path, 'b.ts');

		// Sorted array should be sorted
		assert.strictEqual(sorted[0]!.path, 'a.ts');
		assert.strictEqual(sorted[1]!.path, 'b.ts');
		assert.strictEqual(sorted[2]!.path, 'c.ts');
	});

	test('handles empty array', () => {
		const sorted = package_gen_sort_modules([]);
		assert.strictEqual(sorted.length, 0);
	});

	test('handles single module', () => {
		const modules: Array<Module_Json> = [{path: 'single.ts', identifiers: []}];
		const sorted = package_gen_sort_modules(modules);
		assert.strictEqual(sorted.length, 1);
		assert.strictEqual(sorted[0]!.path, 'single.ts');
	});

	test('stable sort with identical paths', () => {
		const modules: Array<Module_Json> = [
			{path: 'same.ts', identifiers: [{name: 'first', kind: 'type'}]},
			{path: 'same.ts', identifiers: [{name: 'second', kind: 'function'}]},
		];

		const sorted = package_gen_sort_modules(modules);

		// Should maintain original order for identical paths
		assert.strictEqual(sorted[0]!.identifiers![0]!.name, 'first');
		assert.strictEqual(sorted[1]!.identifiers![0]!.name, 'second');
	});
});
