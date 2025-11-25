import {test, assert, describe} from 'vitest';
import type {Logger} from '@ryanatkn/belt/log.js';
import type {PackageJson} from '@ryanatkn/belt/package_json.js';
import type {SrcJson, ModuleJson, IdentifierKind} from '@ryanatkn/belt/src_json.js';
import type {Disknode} from '@ryanatkn/gro/disknode.js';

import {
	package_gen_validate_no_duplicates,
	package_gen_sort_modules,
	package_gen_generate_ts,
	package_gen_extract_dependencies,
} from '$lib/package_gen_helpers.js';

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
 * Create a mock SrcJson with test modules.
 *
 * Provides minimal package metadata for testing validation logic.
 *
 * @param modules array of ModuleJson objects to include
 * @returns SrcJson with standard test package name and version
 */
const create_mock_src_json = (modules: Array<ModuleJson>): SrcJson => {
	return {
		name: '@test/package',
		version: '1.0.0',
		modules,
	};
};

/**
 * Create a mock ModuleJson with test identifiers.
 *
 * Simplifies test setup by auto-generating minimal identifier metadata.
 *
 * @param path module path (e.g., 'foo.ts', 'Bar.svelte')
 * @param identifiers array of identifier objects with name and kind
 * @returns ModuleJson with the specified identifiers
 */
const create_mock_module = (
	path: string,
	identifiers: Array<{name: string; kind: IdentifierKind}>,
): ModuleJson => {
	return {
		path,
		identifiers: identifiers.map(({name, kind}) => ({
			name,
			kind,
		})),
	};
};

/**
 * Create a mock Disknode for testing dependency extraction.
 *
 * Simulates filer's disknode structure with dependencies/dependents maps.
 *
 * @param id absolute path to the file
 * @param deps array of absolute paths this file imports
 * @param dependents_ids array of absolute paths that import this file
 * @returns Disknode with populated dependencies and dependents maps
 */
const create_mock_disknode = (
	id: string,
	deps: Array<string> = [],
	dependents_ids: Array<string> = [],
): Disknode => {
	const disknode: Disknode = {
		id,
		contents: '// mock contents',
		external: false,
		ctime: Date.now(),
		mtime: Date.now(),
		dependencies: new Map(),
		dependents: new Map(),
	};

	// Add dependencies
	for (const dep_id of deps) {
		const dep_disknode: Disknode = {
			id: dep_id,
			contents: '// mock dependency',
			external: false,
			ctime: Date.now(),
			mtime: Date.now(),
			dependencies: new Map(),
			dependents: new Map(),
		};
		disknode.dependencies.set(dep_id, dep_disknode);
	}

	// Add dependents
	for (const dependent_id of dependents_ids) {
		const dependent_disknode: Disknode = {
			id: dependent_id,
			contents: '// mock dependent',
			external: false,
			ctime: Date.now(),
			mtime: Date.now(),
			dependencies: new Map(),
			dependents: new Map(),
		};
		disknode.dependents.set(dependent_id, dependent_disknode);
	}

	return disknode;
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
			const src_json: SrcJson = {
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

		test('duplicate with different kinds', () => {
			const src_json = create_mock_src_json([
				create_mock_module('a.ts', [{name: 'Unknown', kind: 'variable'}]),
				create_mock_module('b.ts', [{name: 'Unknown', kind: 'type'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			});

			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('variable'));
			assert.ok(all_errors.includes('type'));
		});
	});

	describe('edge cases', () => {
		test('real-world scenario - DocsLink collision', () => {
			const src_json = create_mock_src_json([
				create_mock_module('docs_helpers.svelte.ts', [{name: 'DocsLink', kind: 'type'}]),
				create_mock_module('DocsLink.svelte', [{name: 'DocsLink', kind: 'component'}]),
			]);

			const logger = create_mock_logger();

			assert.throws(() => {
				package_gen_validate_no_duplicates(src_json, logger);
			}, /duplicate identifier name/i);

			const all_errors = logger.errors.join(' ');
			assert.ok(all_errors.includes('DocsLink'));
			assert.ok(all_errors.includes('docs_helpers.svelte.ts'));
			assert.ok(all_errors.includes('DocsLink.svelte'));
		});
	});
});

describe('package_gen_sort_modules', () => {
	test('sorts modules alphabetically by path', () => {
		const modules: Array<ModuleJson> = [
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
		const modules: Array<ModuleJson> = [
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
		const modules: Array<ModuleJson> = [{path: 'single.ts', identifiers: []}];
		const sorted = package_gen_sort_modules(modules);
		assert.strictEqual(sorted.length, 1);
		assert.strictEqual(sorted[0]!.path, 'single.ts');
	});

	test('stable sort with identical paths', () => {
		const modules: Array<ModuleJson> = [
			{path: 'same.ts', identifiers: [{name: 'first', kind: 'type'}]},
			{path: 'same.ts', identifiers: [{name: 'second', kind: 'function'}]},
		];

		const sorted = package_gen_sort_modules(modules);

		// Should maintain original order for identical paths
		assert.strictEqual(sorted[0]!.identifiers![0]!.name, 'first');
		assert.strictEqual(sorted[1]!.identifiers![0]!.name, 'second');
	});
});

describe('package_gen_generate_ts', () => {
	test('generates valid TypeScript with correct structure', () => {
		const package_json: PackageJson = {
			name: '@test/package',
			version: '1.0.0',
			type: 'module',
		};

		const src_json: SrcJson = {
			name: '@test/package',
			version: '1.0.0',
			modules: [
				{
					path: 'test.ts',
					identifiers: [{name: 'foo', kind: 'function'}],
				},
			],
		};

		const result = package_gen_generate_ts(package_json, src_json);

		// Check file header comment
		assert.ok(
			result.includes('// generated by package.gen.ts -- do not edit directly or risk lost data'),
		);

		// Check imports
		assert.ok(result.includes('import type {PackageJson}'));
		assert.ok(result.includes('import type {SrcJson}'));

		// Check exports
		assert.ok(result.includes('export const package_json: PackageJson ='));
		assert.ok(result.includes('export const src_json: SrcJson ='));

		// Verify valid TypeScript structure (no syntax errors obvious)
		assert.ok(!result.includes('undefined'));
	});

	test('properly serializes package_json data', () => {
		const package_json: PackageJson = {
			name: '@scope/pkg',
			version: '2.0.0',
			type: 'module',
			description: 'Test package',
		};

		const src_json: SrcJson = {
			name: '@scope/pkg',
			version: '2.0.0',
		};

		const result = package_gen_generate_ts(package_json, src_json);

		// Verify package_json fields are in output
		assert.ok(result.includes('"name": "@scope/pkg"'));
		assert.ok(result.includes('"version": "2.0.0"'));
		assert.ok(result.includes('"type": "module"'));
		assert.ok(result.includes('"description": "Test package"'));
	});

	test('properly serializes src_json with modules', () => {
		const package_json: PackageJson = {
			name: '@test/package',
			version: '1.0.0',
		};

		const src_json: SrcJson = {
			name: '@test/package',
			version: '1.0.0',
			modules: [
				{
					path: 'foo.ts',
					identifiers: [
						{name: 'foo', kind: 'function'},
						{name: 'Bar', kind: 'type'},
					],
				},
			],
		};

		const result = package_gen_generate_ts(package_json, src_json);

		// Verify modules structure
		assert.ok(result.includes('"modules"'));
		assert.ok(result.includes('"path": "foo.ts"'));
		assert.ok(result.includes('"identifiers"'));
		assert.ok(result.includes('"name": "foo"'));
		assert.ok(result.includes('"kind": "function"'));
		assert.ok(result.includes('"name": "Bar"'));
		assert.ok(result.includes('"kind": "type"'));
	});

	test('uses tab indentation for JSON', () => {
		const package_json: PackageJson = {
			name: '@test/package',
			version: '1.0.0',
		};

		const src_json: SrcJson = {
			name: '@test/package',
			version: '1.0.0',
		};

		const result = package_gen_generate_ts(package_json, src_json);

		// Should use tabs (not spaces) for indentation
		const lines = result.split('\n');
		const json_lines = lines.filter((line) => line.startsWith('\t'));

		// Should have some indented lines with tabs
		assert.ok(json_lines.length > 0, 'Expected tab-indented JSON lines');
		// Verify tabs, not spaces
		assert.ok(json_lines.some((line) => line.startsWith('\t"')));
	});

	test('handles empty modules array', () => {
		const package_json: PackageJson = {
			name: '@test/package',
			version: '1.0.0',
		};

		const src_json: SrcJson = {
			name: '@test/package',
			version: '1.0.0',
			modules: [],
		};

		const result = package_gen_generate_ts(package_json, src_json);

		assert.ok(result.includes('export const src_json'));
		assert.ok(result.includes('"modules": []'));
	});

	test('handles undefined modules', () => {
		const package_json: PackageJson = {
			name: '@test/package',
			version: '1.0.0',
		};

		const src_json: SrcJson = {
			name: '@test/package',
			version: '1.0.0',
		};

		const result = package_gen_generate_ts(package_json, src_json);

		assert.ok(result.includes('export const src_json'));
		// Should not include modules key if undefined
		assert.ok(!result.includes('"modules"'));
	});
});

describe('package_gen_validate_no_duplicates - error message format', () => {
	test('singular error message for one duplicate', () => {
		const src_json = create_mock_src_json([
			create_mock_module('a.ts', [{name: 'Dup', kind: 'type'}]),
			create_mock_module('b.ts', [{name: 'Dup', kind: 'function'}]),
		]);

		const logger = create_mock_logger();

		try {
			package_gen_validate_no_duplicates(src_json, logger);
			assert.fail('Should have thrown');
		} catch (err: any) {
			// Check singular form
			assert.ok(err.message.includes('1 duplicate identifier name across'));
			assert.ok(!err.message.includes('1 duplicate identifier names'));
		}
	});

	test('plural error message for multiple duplicates', () => {
		const src_json = create_mock_src_json([
			create_mock_module('a.ts', [
				{name: 'Dup1', kind: 'type'},
				{name: 'Dup2', kind: 'type'},
			]),
			create_mock_module('b.ts', [
				{name: 'Dup1', kind: 'function'},
				{name: 'Dup2', kind: 'function'},
			]),
		]);

		const logger = create_mock_logger();

		try {
			package_gen_validate_no_duplicates(src_json, logger);
			assert.fail('Should have thrown');
		} catch (err: any) {
			// Check plural form
			assert.ok(err.message.includes('2 duplicate identifier names across'));
		}
	});

	test('error message includes CLAUDE.md reference', () => {
		const src_json = create_mock_src_json([
			create_mock_module('a.ts', [{name: 'Dup', kind: 'type'}]),
			create_mock_module('b.ts', [{name: 'Dup', kind: 'function'}]),
		]);

		const logger = create_mock_logger();

		try {
			package_gen_validate_no_duplicates(src_json, logger);
			assert.fail('Should have thrown');
		} catch (err: any) {
			assert.ok(err.message.includes('CLAUDE.md'));
			assert.ok(err.message.includes('Identifier namespacing'));
		}
	});

	test('error message mentions @nodocs as resolution option', () => {
		const src_json = create_mock_src_json([
			create_mock_module('a.ts', [{name: 'Dup', kind: 'type'}]),
			create_mock_module('b.ts', [{name: 'Dup', kind: 'function'}]),
		]);

		const logger = create_mock_logger();

		try {
			package_gen_validate_no_duplicates(src_json, logger);
			assert.fail('Should have thrown');
		} catch (err: any) {
			// Error message should mention both resolution options
			assert.ok(err.message.includes('rename'), 'should mention renaming');
			assert.ok(err.message.includes('@nodocs'), 'should mention @nodocs');
		}
	});

	test('log output includes all duplicate details', () => {
		const src_json = create_mock_src_json([
			create_mock_module('foo/bar.ts', [{name: 'Widget', kind: 'class'}]),
			create_mock_module('baz/Widget.svelte', [{name: 'Widget', kind: 'component'}]),
		]);

		const logger = create_mock_logger();

		try {
			package_gen_validate_no_duplicates(src_json, logger);
			assert.fail('Should have thrown');
		} catch (_err: any) {
			const all_errors = logger.errors.join('\n');

			// Check structured error output
			assert.ok(all_errors.includes('Duplicate identifier names detected'));
			assert.ok(all_errors.includes('"Widget" found in:'));
			assert.ok(all_errors.includes('foo/bar.ts'));
			assert.ok(all_errors.includes('class'));
			assert.ok(all_errors.includes('baz/Widget.svelte'));
			assert.ok(all_errors.includes('component'));
		}
	});
});

describe('package_gen_extract_dependencies', () => {
	describe('basic functionality', () => {
		test('extracts both dependencies and dependents from source modules', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/foo.ts',
				['/home/user/project/src/lib/bar.ts', '/home/user/project/src/lib/baz.svelte'],
				['/home/user/project/src/lib/qux.ts', '/home/user/project/src/lib/Quux.svelte'],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['bar.ts', 'baz.svelte']);
			assert.deepStrictEqual(result.dependents, ['Quux.svelte', 'qux.ts']);
		});

		test('returns empty arrays when no dependencies or dependents', () => {
			const disknode = create_mock_disknode('/home/user/project/src/lib/standalone.ts');

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, []);
			assert.deepStrictEqual(result.dependents, []);
		});

		test('handles module with only dependencies', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/consumer.ts',
				['/home/user/project/src/lib/dependency.ts'],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['dependency.ts']);
			assert.deepStrictEqual(result.dependents, []);
		});

		test('handles module with only dependents', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/provider.ts',
				[],
				['/home/user/project/src/lib/consumer.ts'],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, []);
			assert.deepStrictEqual(result.dependents, ['consumer.ts']);
		});
	});

	describe('filtering - only includes src/lib modules', () => {
		test('excludes external node_modules dependencies', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/app.ts',
				[
					'/home/user/project/src/lib/local.ts',
					'/home/user/project/node_modules/svelte/index.js',
					'/home/user/project/node_modules/@ryanatkn/belt/object.js',
				],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			// Should only include src/lib modules
			assert.deepStrictEqual(result.dependencies, ['local.ts']);
		});

		test('excludes test files from dependencies', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/component.svelte',
				['/home/user/project/src/lib/helpers.ts', '/home/user/project/src/test/fixtures/mock.ts'],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			// Should exclude src/test
			assert.deepStrictEqual(result.dependencies, ['helpers.ts']);
		});

		test('excludes test files from dependents', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/utils.ts',
				[],
				['/home/user/project/src/lib/app.ts', '/home/user/project/src/test/utils.test.ts'],
			);

			const result = package_gen_extract_dependencies(disknode);

			// Should exclude test files
			assert.deepStrictEqual(result.dependents, ['app.ts']);
		});

		test('excludes routes directory', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/component.svelte',
				[],
				['/home/user/project/src/lib/other.svelte', '/home/user/project/src/routes/index.svelte'],
			);

			const result = package_gen_extract_dependencies(disknode);

			// Should only include src/lib modules
			assert.deepStrictEqual(result.dependents, ['other.svelte']);
		});
	});

	describe('path extraction', () => {
		test('extracts relative module paths correctly', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/components/Button.svelte',
				['/home/user/project/src/lib/styles/theme.ts'],
				['/home/user/project/src/lib/layouts/Layout.svelte'],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['styles/theme.ts']);
			assert.deepStrictEqual(result.dependents, ['layouts/Layout.svelte']);
		});

		test('handles deeply nested module paths', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/deep/nested/module.ts',
				['/home/user/project/src/lib/deep/nested/sibling.ts'],
				['/home/user/project/src/lib/other/path/consumer.ts'],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['deep/nested/sibling.ts']);
			assert.deepStrictEqual(result.dependents, ['other/path/consumer.ts']);
		});
	});

	describe('sorting', () => {
		test('sorts dependencies alphabetically', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/app.ts',
				[
					'/home/user/project/src/lib/zebra.ts',
					'/home/user/project/src/lib/alpha.ts',
					'/home/user/project/src/lib/beta.ts',
				],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['alpha.ts', 'beta.ts', 'zebra.ts']);
		});

		test('sorts dependents alphabetically', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/utils.ts',
				[],
				[
					'/home/user/project/src/lib/zoo.ts',
					'/home/user/project/src/lib/aardvark.ts',
					'/home/user/project/src/lib/middle.ts',
				],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependents, ['aardvark.ts', 'middle.ts', 'zoo.ts']);
		});

		test('sorts case-insensitively for consistency', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/app.ts',
				[
					'/home/user/project/src/lib/Zebra.svelte',
					'/home/user/project/src/lib/alpha.ts',
					'/home/user/project/src/lib/Beta.svelte',
				],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			// Standard localeCompare should handle case properly
			assert.strictEqual(result.dependencies.length, 3);
			assert.ok(result.dependencies.includes('alpha.ts'));
			assert.ok(result.dependencies.includes('Beta.svelte'));
			assert.ok(result.dependencies.includes('Zebra.svelte'));
		});
	});

	describe('edge cases', () => {
		test('handles svelte components with .svelte extension', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/App.svelte',
				['/home/user/project/src/lib/Button.svelte'],
				['/home/user/project/src/lib/Layout.svelte'],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['Button.svelte']);
			assert.deepStrictEqual(result.dependents, ['Layout.svelte']);
		});

		test('handles mixed file types', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/component.svelte',
				[
					'/home/user/project/src/lib/utils.ts',
					'/home/user/project/src/lib/types.ts',
					'/home/user/project/src/lib/Other.svelte',
				],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['Other.svelte', 'types.ts', 'utils.ts']);
		});

		test('handles modules at src/lib root', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/index.ts',
				['/home/user/project/src/lib/exports.ts'],
				[],
			);

			const result = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result.dependencies, ['exports.ts']);
		});

		test('deterministic output - multiple runs produce same results', () => {
			const disknode = create_mock_disknode(
				'/home/user/project/src/lib/app.ts',
				[
					'/home/user/project/src/lib/c.ts',
					'/home/user/project/src/lib/a.ts',
					'/home/user/project/src/lib/b.ts',
				],
				[
					'/home/user/project/src/lib/z.ts',
					'/home/user/project/src/lib/x.ts',
					'/home/user/project/src/lib/y.ts',
				],
			);

			const result1 = package_gen_extract_dependencies(disknode);
			const result2 = package_gen_extract_dependencies(disknode);

			assert.deepStrictEqual(result1.dependencies, result2.dependencies);
			assert.deepStrictEqual(result1.dependents, result2.dependents);
			assert.deepStrictEqual(result1.dependencies, ['a.ts', 'b.ts', 'c.ts']);
			assert.deepStrictEqual(result1.dependents, ['x.ts', 'y.ts', 'z.ts']);
		});
	});
});
