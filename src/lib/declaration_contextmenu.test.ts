import {describe, test, assert} from 'vitest';
import {create_declaration_contextmenu} from './declaration_contextmenu.js';
import type {Enhanced_Declaration} from './enhanced_declarations.js';

describe('create_declaration_contextmenu', () => {
	const base_decl: Enhanced_Declaration = {
		name: 'MyType',
		kind: 'type',
		source_location: {line: 10, column: 0},
	};

	test('returns array of contextmenu entries', () => {
		const entries = create_declaration_contextmenu(
			base_decl,
			'./types.ts',
			'@pkg/name',
			'https://github.com/user/repo',
			'https://example.com',
		);

		assert.ok(Array.isArray(entries));
		assert.ok(entries.length > 0);
	});

	test('includes navigate to API docs entry', () => {
		const entries = create_declaration_contextmenu(base_decl, './types.ts', '@pkg/name');

		const nav_entry = entries.find((e) => typeof e === 'object' && e.snippet === 'link');
		assert.ok(nav_entry, 'should have link entry');
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (typeof nav_entry === 'object' && nav_entry.snippet === 'link') {
			assert.ok(nav_entry.props.href.includes('/docs/api/'));
			assert.ok(nav_entry.props.href.includes('MyType'));
		} else {
			assert.fail('nav_entry should be object with snippet link');
		}
	});

	test('includes copy name entry', () => {
		const entries = create_declaration_contextmenu(base_decl, './types.ts', '@pkg/name');

		const copy_entries = entries.filter(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content.includes('Copy name'),
		);
		assert.strictEqual(copy_entries.length, 1, 'should have exactly one copy name entry');
	});

	test('includes copy import entry', () => {
		const entries = create_declaration_contextmenu(base_decl, './types.ts', '@pkg/name');

		const import_entry = entries.find(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content === 'Copy import',
		);
		assert.ok(import_entry, 'should have copy import entry');
	});

	test('includes view source entry when repo_url and source_location provided', () => {
		const entries = create_declaration_contextmenu(
			base_decl,
			'./types.ts',
			'@pkg/name',
			'https://github.com/user/repo',
		);

		const source_entries = entries.filter((e) => typeof e === 'object' && e.snippet === 'link');
		// Should have both navigate to docs and view source
		assert.ok(source_entries.length >= 2, 'should have source link when repo_url provided');
	});

	test('excludes view source entry when no repo_url', () => {
		const entries = create_declaration_contextmenu(base_decl, './types.ts', '@pkg/name');

		const link_entries = entries.filter((e) => typeof e === 'object' && e.snippet === 'link');
		// Should only have navigate to docs, not view source
		assert.strictEqual(link_entries.length, 1, 'should only have docs link when no repo_url');
	});

	test('excludes view source entry when no source_location', () => {
		const decl_no_location: Enhanced_Declaration = {
			name: 'MyType',
			kind: 'type',
		};
		const entries = create_declaration_contextmenu(
			decl_no_location,
			'./types.ts',
			'@pkg/name',
			'https://github.com/user/repo',
		);

		const link_entries = entries.filter((e) => typeof e === 'object' && e.snippet === 'link');
		// Should only have navigate to docs, not view source
		assert.strictEqual(
			link_entries.length,
			1,
			'should only have docs link when no source_location',
		);
	});

	test('includes copy docs link entry when homepage_url provided', () => {
		const entries = create_declaration_contextmenu(
			base_decl,
			'./types.ts',
			'@pkg/name',
			undefined,
			'https://example.com',
		);

		const copy_link_entry = entries.find(
			(e) => typeof e === 'object' && e.snippet === 'text' && e.props.content === 'Copy docs link',
		);
		assert.ok(copy_link_entry, 'should have copy docs link when homepage_url provided');
	});

	test('excludes copy docs link entry when no homepage_url', () => {
		const entries = create_declaration_contextmenu(base_decl, './types.ts', '@pkg/name');

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
		const entries = create_declaration_contextmenu(base_decl, './foo/bar.ts', '@pkg/name');

		const nav_entry = entries.find((e) => typeof e === 'object' && e.snippet === 'link');
		assert.ok(nav_entry);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (typeof nav_entry === 'object' && nav_entry.snippet === 'link') {
			// Should strip ./ prefix and .ts extension
			// The path might be URL encoded if it contains slashes
			const href = nav_entry.props.href;
			assert.ok(!href.includes('./'), 'should not contain ./ prefix');
			// Extension should be stripped (whether encoded or not)
			assert.ok(!href.includes('.ts') && !href.includes('%2Ets'));
		} else {
			assert.fail('nav_entry should be object with snippet link');
		}
	});

	test('URL encodes module and identifier names', () => {
		const special_decl: Enhanced_Declaration = {
			name: 'My Type',
			kind: 'type',
		};
		const entries = create_declaration_contextmenu(special_decl, './my module.ts', '@pkg/name');

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
		const entries = create_declaration_contextmenu(
			base_decl,
			'./types.ts',
			'@pkg/name',
			'https://github.com/user/repo',
		);

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
		const entries = create_declaration_contextmenu(
			base_decl,
			'./types.ts',
			'@pkg/name',
			'https://github.com/user/repo',
			'https://example.com',
		);

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
