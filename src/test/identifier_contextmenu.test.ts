import {describe, test, assert} from 'vitest';

import {create_identifier_contextmenu} from '$lib/identifier_contextmenu.js';
import type {Identifier_Json, Module_Json, Src_Json} from '$lib/src_json.js';
import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import {Pkg} from '$lib/pkg.svelte.js';
import {Module} from '$lib/module.svelte.js';
import {Identifier} from '$lib/identifier.svelte.js';

// Helper to create a mock Pkg for testing
const create_mock_pkg = (options?: {
	pkg_name?: string;
	repo_url?: string;
	homepage_url?: string;
}): Pkg => {
	const pkg_name = options?.pkg_name ?? '@pkg/name';
	const repo_url = options?.repo_url ?? 'https://github.com/test/repo';
	const homepage_url = options?.homepage_url ?? null;

	const package_json: Package_Json = {
		name: pkg_name,
		version: '1.0.0',
		repository: {type: 'git', url: repo_url},
		homepage: homepage_url ?? undefined,
	} as Package_Json;

	const src_json: Src_Json = {
		name: pkg_name,
		version: '1.0.0',
		modules: [],
	};

	return new Pkg(package_json, src_json);
};

// Helper to create an Identifier for testing
const create_test_identifier = (
	decl: Identifier_Json,
	module_path: string,
	pkg_options?: Parameters<typeof create_mock_pkg>[0],
): Identifier => {
	const pkg = create_mock_pkg(pkg_options);
	const src_module: Module_Json = {
		path: module_path,
		identifiers: [decl],
	};
	const module = new Module(pkg, src_module);
	return new Identifier(module, decl);
};

describe('create_identifier_contextmenu', () => {
	const base_decl: Identifier_Json = {
		name: 'MyType',
		kind: 'type',
		source_line: 10,
	};

	test('returns array of contextmenu entries', () => {
		const identifier = create_test_identifier(base_decl, './types.ts', {
			repo_url: 'https://github.com/user/repo',
			homepage_url: 'https://example.com',
		});
		const entries = create_identifier_contextmenu(identifier);

		assert.ok(Array.isArray(entries));
		assert.ok(entries.length > 0);
	});

	test('includes navigate to API docs entry', () => {
		const identifier = create_test_identifier(base_decl, './types.ts');
		const entries = create_identifier_contextmenu(identifier);

		const nav_entry = entries.find((e) => typeof e === 'object' && e.snippet === 'link');
		assert.ok(nav_entry, 'should have link entry');
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (typeof nav_entry === 'object' && nav_entry.snippet === 'link') {
			assert.ok(nav_entry.props.href.includes('/docs/api#'));
			assert.ok(nav_entry.props.href.includes('MyType'));
		} else {
			assert.fail('nav_entry should be object with snippet link');
		}
	});

	test('includes copy name entry', () => {
		const identifier = create_test_identifier(base_decl, './types.ts');
		const entries = create_identifier_contextmenu(identifier);

		const copy_entries = entries.filter(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content.includes('Copy name'),
		);
		assert.strictEqual(copy_entries.length, 1, 'should have exactly one copy name entry');
	});

	test('includes copy import entry', () => {
		const identifier = create_test_identifier(base_decl, './types.ts');
		const entries = create_identifier_contextmenu(identifier);

		const import_entry = entries.find(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content === 'Copy import',
		);
		assert.ok(import_entry, 'should have copy import entry');
	});

	test('includes view source entry when repo_url and source_location provided', () => {
		const identifier = create_test_identifier(base_decl, './types.ts', {
			repo_url: 'https://github.com/user/repo',
		});
		const entries = create_identifier_contextmenu(identifier);

		const source_entries = entries.filter((e) => typeof e === 'object' && e.snippet === 'link');
		// Should have both navigate to docs and view source
		assert.ok(source_entries.length >= 2, 'should have source link when repo_url provided');
	});

	test('includes view source entry with default repo_url', () => {
		// repo_url is required in Pkg interface, so it always has a value (uses default in test helper)
		const identifier = create_test_identifier(base_decl, './types.ts');
		const entries = create_identifier_contextmenu(identifier);

		const link_entries = entries.filter((e) => typeof e === 'object' && e.snippet === 'link');
		// Should have both navigate to docs and view source (since base_decl has source_line)
		assert.strictEqual(link_entries.length, 2, 'should have both docs and source links');
	});

	test('excludes view source entry when no source_location', () => {
		const decl_no_location: Identifier_Json = {
			name: 'MyType',
			kind: 'type',
		};
		const identifier = create_test_identifier(decl_no_location, './types.ts', {
			repo_url: 'https://github.com/user/repo',
		});
		const entries = create_identifier_contextmenu(identifier);

		const link_entries = entries.filter((e) => typeof e === 'object' && e.snippet === 'link');
		// Should only have navigate to docs, not view source
		assert.strictEqual(
			link_entries.length,
			1,
			'should only have docs link when no source_location',
		);
	});

	test('includes copy docs link entry when homepage_url provided', () => {
		const identifier = create_test_identifier(base_decl, './types.ts', {
			homepage_url: 'https://example.com',
		});
		const entries = create_identifier_contextmenu(identifier);

		const copy_link_entry = entries.find(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content === 'Copy docs link',
		);
		assert.ok(copy_link_entry, 'should have copy docs link when homepage_url provided');
	});

	test('excludes copy docs link entry when no homepage_url', () => {
		const identifier = create_test_identifier(base_decl, './types.ts');
		const entries = create_identifier_contextmenu(identifier);

		const copy_link_entry = entries.find(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content === 'Copy docs link',
		);
		assert.strictEqual(
			copy_link_entry,
			undefined,
			'should not have copy docs link when no homepage_url',
		);
	});

	test('handles module path with ./ prefix', () => {
		const identifier = create_test_identifier(base_decl, './foo/bar.ts');
		const entries = create_identifier_contextmenu(identifier);

		const nav_entry = entries.find((e) => typeof e === 'object' && e.snippet === 'link');
		assert.ok(nav_entry);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (typeof nav_entry === 'object' && nav_entry.snippet === 'link') {
			// Hash-based URLs only include identifier name, not module path
			const href = nav_entry.props.href;
			assert.ok(href.includes('/docs/api#'), 'should use hash-based routing');
			assert.ok(href.includes('MyType'), 'should include identifier name');
		} else {
			assert.fail('nav_entry should be object with snippet link');
		}
	});

	test('URL encodes module and identifier names', () => {
		const special_decl: Identifier_Json = {
			name: 'My Type',
			kind: 'type',
		};
		const identifier = create_test_identifier(special_decl, './my module.ts');
		const entries = create_identifier_contextmenu(identifier);

		const nav_entry = entries.find((e) => typeof e === 'object' && e.snippet === 'link');
		assert.ok(nav_entry);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (typeof nav_entry === 'object' && nav_entry.snippet === 'link') {
			// Spaces should be encoded
			assert.ok(nav_entry.props.href.includes('My%20Type'));
		} else {
			assert.fail('nav_entry should be object with snippet link');
		}
	});

	test('source URL includes line number', () => {
		const identifier = create_test_identifier(base_decl, './types.ts', {
			repo_url: 'https://github.com/user/repo',
		});
		const entries = create_identifier_contextmenu(identifier);

		const source_entry = entries.find(
			(e) =>
				typeof e === 'object' &&
				e.snippet === 'link' &&
				e.props.href.includes('github') &&
				e.props.href.includes('#L'),
		);
		assert.ok(source_entry, 'should have source link');
		if (typeof source_entry === 'object' && source_entry.snippet === 'link') {
			assert.ok(source_entry.props.href.includes('#L10'), 'should include line number');
		} else {
			assert.fail('source_entry should be object with snippet link');
		}
	});

	test('all entries have required structure', () => {
		const identifier = create_test_identifier(base_decl, './types.ts', {
			repo_url: 'https://github.com/user/repo',
			homepage_url: 'https://example.com',
		});
		const entries = create_identifier_contextmenu(identifier);

		for (const entry of entries) {
			assert.ok(typeof entry === 'object', 'entry should be an object');
			if (typeof entry === 'object') {
				assert.ok('snippet' in entry, 'entry should have snippet property');
				assert.ok('props' in entry, 'entry should have props property');

				if (entry.snippet === 'link') {
					assert.ok('href' in entry.props, 'link entry should have href');
				} else if (entry.snippet === 'text') {
					assert.ok('content' in entry.props, 'text entry should have content');
					assert.ok('icon' in entry.props, 'text entry should have icon');
					assert.ok('run' in entry.props, 'text entry should have run function');
					assert.strictEqual(typeof entry.props.run, 'function');
				} else {
					assert.fail(`unexpected entry snippet type: ${(entry as any).snippet}`);
				}
			} else {
				assert.fail('entry should be object');
			}
		}
	});
});
