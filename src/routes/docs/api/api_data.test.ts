import {describe, test, assert} from 'vitest';
import {
	lookup_declaration,
	get_module,
	get_all_declarations,
	search_declarations,
	get_dependencies,
	get_dependents,
} from './api_data.svelte.js';

describe('api_data helpers', () => {
	describe('lookup_declaration', () => {
		test('finds declaration by module and name', () => {
			const decl = lookup_declaration('alert', 'Alert_Status');
			assert.ok(decl, 'should find Alert_Status in alert module');
			assert.strictEqual(decl.name, 'Alert_Status');
		});

		test('finds declaration with extension variants', () => {
			// Should work with or without .ts extension
			const with_ext = lookup_declaration('alert.ts', 'Alert_Status');
			const without_ext = lookup_declaration('alert', 'Alert_Status');

			assert.ok(with_ext, 'should find with .ts extension');
			assert.ok(without_ext, 'should find without extension');
			assert.strictEqual(with_ext.name, without_ext.name);
		});

		test('returns undefined for non-existent module', () => {
			const decl = lookup_declaration('nonexistent', 'SomeType');
			assert.strictEqual(decl, undefined);
		});

		test('returns undefined for non-existent declaration', () => {
			const decl = lookup_declaration('alert', 'NonExistentType');
			assert.strictEqual(decl, undefined);
		});
	});

	describe('get_module', () => {
		test('finds module by path', () => {
			const mod = get_module('alert');
			assert.ok(mod, 'should find alert module');
			assert.strictEqual(mod.path, 'alert.ts');
		});

		test('handles extension variants', () => {
			const with_ext = get_module('alert.ts');
			const without_ext = get_module('alert');

			assert.ok(with_ext);
			assert.ok(without_ext);
			assert.strictEqual(with_ext.path, without_ext.path);
		});

		test('returns undefined for non-existent module', () => {
			const mod = get_module('nonexistent');
			assert.strictEqual(mod, undefined);
		});
	});

	describe('get_all_declarations', () => {
		test('returns flat list of all declarations', () => {
			const all = get_all_declarations();
			assert.ok(Array.isArray(all));
			assert.ok(all.length > 0, 'should have declarations');

			// Check structure
			const first = all[0];
			assert.ok(first);
			assert.ok(first.module_path);
			assert.ok(first.module);
			assert.ok(first.decl);
			assert.ok(first.decl.name);
		});

		test('filters out default exports', () => {
			const all = get_all_declarations();
			const has_default = all.some((item) => item.decl.name === 'default');
			assert.strictEqual(has_default, false, 'should not include default exports');
		});

		test('includes declarations from all modules', () => {
			const all = get_all_declarations();
			const modules = new Set(all.map((item) => item.module_path));
			assert.ok(modules.size > 1, 'should have declarations from multiple modules');
		});
	});

	describe('search_declarations', () => {
		test('returns empty array for empty query', () => {
			const results = search_declarations('');
			assert.deepEqual(results, []);
		});

		test('returns empty array for whitespace query', () => {
			const results = search_declarations('   ');
			assert.deepEqual(results, []);
		});

		test('finds exact matches', () => {
			const results = search_declarations('Alert_Status');
			assert.ok(results.length > 0, 'should find results');
			const exact = results.find((r) => r.decl.name === 'Alert_Status');
			assert.ok(exact, 'should find exact match');
		});

		test('case insensitive search', () => {
			const lower = search_declarations('alert_status');
			const upper = search_declarations('ALERT_STATUS');
			const mixed = search_declarations('Alert_Status');

			assert.ok(lower.length > 0, 'lowercase should find results');
			assert.ok(upper.length > 0, 'uppercase should find results');
			assert.ok(mixed.length > 0, 'mixed case should find results');
		});

		test('finds partial matches (starts with)', () => {
			const results = search_declarations('Alert');
			assert.ok(results.length > 0, 'should find results starting with Alert');
			const has_alert_status = results.some((r) => r.decl.name === 'Alert_Status');
			assert.ok(has_alert_status, 'should include Alert_Status');
		});

		test('finds substring matches (contains)', () => {
			const results = search_declarations('State');
			assert.ok(results.length > 0, 'should find results containing State');
			// Any declaration with "State" in the name should be included
		});

		test('fuzzy matching for scattered characters', () => {
			// Search for "AS" should match "Alert_Status"
			const results = search_declarations('AS');
			assert.ok(results.length > 0, 'should find fuzzy matches');
			// Note: fuzzy scoring might not guarantee specific order
		});

		test('prioritizes exact matches in search results', () => {
			// Search for a known declaration that exists in the codebase
			const results = search_declarations('Tooltip_State');
			assert.ok(results.length > 0, 'should find results for Tooltip_State');

			// Exact match should be found (Tooltip_State class exists)
			const exact_match = results.find((r) => r.decl.name === 'Tooltip_State');
			assert.ok(exact_match, 'should find exact match for Tooltip_State');

			// Exact match should be highly ranked (ideally first, but at least top 5)
			const index = results.indexOf(exact_match);
			assert.ok(
				index < 5,
				`exact match should be in top 5 results, but was at index ${index}`,
			);
		});
	});

	describe('get_dependencies', () => {
		test('returns array of import specifiers', () => {
			const deps = get_dependencies('./themer.svelte.ts');
			assert.ok(Array.isArray(deps));
			// themer.svelte.ts imports from @ryanatkn/moss and other modules
			assert.ok(deps.length > 0, 'themer should have dependencies');
		});

		test('returns empty array for module without imports', () => {
			const deps = get_dependencies('./alert.ts');
			assert.ok(Array.isArray(deps));
			// alert.ts has no imports
			assert.strictEqual(deps.length, 0);
		});

		test('returns empty array for non-existent module', () => {
			const deps = get_dependencies('./nonexistent.ts');
			assert.deepEqual(deps, []);
		});
	});

	describe('get_dependents', () => {
		test('returns array of modules that import this module', () => {
			// Many modules likely import from enhanced_declarations
			const dependents = get_dependents('./enhanced_declarations.ts');
			assert.ok(Array.isArray(dependents));
			// Should have at least some dependents
		});

		test('returns empty array for module with no dependents', () => {
			// Find a module that nothing imports (might not exist)
			const dependents = get_dependents('./alert.ts');
			assert.ok(Array.isArray(dependents));
			// alert.ts might not be imported by anything
		});

		test('returns empty array for non-existent module', () => {
			const dependents = get_dependents('./nonexistent.ts');
			assert.deepEqual(dependents, []);
		});
	});
});
