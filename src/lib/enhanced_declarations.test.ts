import {describe, test, assert} from 'vitest';
import {
	get_declaration_display_name,
	get_type_summary,
	get_doc_summary,
	generate_import_statement,
	type Enhanced_Declaration,
} from './enhanced_declarations.js';

describe('enhanced_declarations helpers', () => {
	describe('get_declaration_display_name', () => {
		test('returns plain name for declaration without generics', () => {
			const decl: Enhanced_Declaration = {name: 'Alert_Status', kind: 'type'};
			assert.strictEqual(get_declaration_display_name(decl), 'Alert_Status');
		});

		test('includes generic parameters', () => {
			const decl: Enhanced_Declaration = {
				name: 'Result',
				kind: 'type',
				generic_params: ['T', 'E'],
			};
			assert.strictEqual(get_declaration_display_name(decl), 'Result<T, E>');
		});

		test('handles complex generic parameters', () => {
			const decl: Enhanced_Declaration = {
				name: 'Map',
				kind: 'type',
				generic_params: ['K extends string', 'V'],
			};
			assert.strictEqual(get_declaration_display_name(decl), 'Map<K extends string, V>');
		});

		test('returns plain name when generic_params is empty array', () => {
			const decl: Enhanced_Declaration = {
				name: 'Simple',
				kind: 'type',
				generic_params: [],
			};
			assert.strictEqual(get_declaration_display_name(decl), 'Simple');
		});
	});

	describe('get_type_summary', () => {
		test('returns undefined for declaration without type signature', () => {
			const decl: Enhanced_Declaration = {name: 'Foo', kind: 'variable'};
			assert.strictEqual(get_type_summary(decl), undefined);
		});

		test('returns type signature when short enough', () => {
			const decl: Enhanced_Declaration = {
				name: 'foo',
				kind: 'variable',
				type_signature: 'string',
			};
			assert.strictEqual(get_type_summary(decl), 'string');
		});

		test('truncates long type signatures', () => {
			const long_type = 'a'.repeat(150);
			const decl: Enhanced_Declaration = {
				name: 'complex',
				kind: 'variable',
				type_signature: long_type,
			};
			const result = get_type_summary(decl);
			assert.ok(result);
			assert.ok(result.length < long_type.length);
			assert.ok(result.endsWith('...'));
			assert.ok(result.length <= 103); // 100 + '...'
		});

		test('does not truncate signatures at exactly max length', () => {
			const type = 'a'.repeat(100);
			const decl: Enhanced_Declaration = {
				name: 'exactly_max',
				kind: 'variable',
				type_signature: type,
			};
			const result = get_type_summary(decl);
			assert.strictEqual(result, type);
			assert.ok(!result?.endsWith('...'));
		});
	});

	describe('get_doc_summary', () => {
		test('returns undefined for undefined input', () => {
			assert.strictEqual(get_doc_summary(undefined), undefined);
		});

		test('returns undefined for empty string', () => {
			assert.strictEqual(get_doc_summary(''), undefined);
		});

		test('extracts first paragraph', () => {
			const doc = 'First paragraph.\n\nSecond paragraph.';
			assert.strictEqual(get_doc_summary(doc), 'First paragraph.');
		});

		test('returns entire comment if single paragraph', () => {
			const doc = 'Single line comment';
			assert.strictEqual(get_doc_summary(doc), 'Single line comment');
		});

		test('trims whitespace', () => {
			const doc = '  First paragraph.  \n\nSecond paragraph.';
			assert.strictEqual(get_doc_summary(doc), 'First paragraph.');
		});

		test('handles multiple line breaks', () => {
			const doc = 'First paragraph.\n\n\n\nSecond paragraph after multiple breaks.';
			assert.strictEqual(get_doc_summary(doc), 'First paragraph.');
		});
	});

	describe('generate_import_statement', () => {
		test('generates named import for regular export', () => {
			const decl: Enhanced_Declaration = {name: 'Alert_Status', kind: 'type'};
			const stmt = generate_import_statement(decl, './alert.ts', '@ryanatkn/fuz');
			assert.strictEqual(stmt, "import type {Alert_Status} from '@ryanatkn/fuz/alert.ts';");
		});

		test('uses "import type" for type declarations', () => {
			const decl: Enhanced_Declaration = {name: 'MyType', kind: 'type'};
			const stmt = generate_import_statement(decl, './types.ts', '@pkg/name');
			assert.ok(stmt.startsWith('import type '));
		});

		test('uses regular import for non-type declarations', () => {
			const decl: Enhanced_Declaration = {name: 'myFunction', kind: 'function'};
			const stmt = generate_import_statement(decl, './utils.ts', '@pkg/name');
			assert.ok(stmt.startsWith('import {'));
			assert.ok(!stmt.startsWith('import type'));
		});

		test('handles default export', () => {
			const decl: Enhanced_Declaration = {name: 'default', kind: 'component'};
			const stmt = generate_import_statement(decl, './Alert.svelte', '@ryanatkn/fuz');
			assert.ok(stmt.startsWith('import Alert '));
			assert.ok(!stmt.includes('{'));
		});

		test('converts PascalCase for default exports', () => {
			const decl: Enhanced_Declaration = {name: 'default', kind: 'component'};
			const stmt = generate_import_statement(decl, './my-component.svelte', '@pkg/name');
			assert.ok(stmt.includes('MyComponent'));
		});

		test('replaces ./ with package name in specifier', () => {
			const decl: Enhanced_Declaration = {name: 'Foo', kind: 'type'};
			const stmt = generate_import_statement(decl, './bar.ts', '@scope/pkg');
			assert.ok(stmt.includes("from '@scope/pkg/bar.ts'"));
			assert.ok(!stmt.includes('./'));
		});

		test('handles class declarations', () => {
			const decl: Enhanced_Declaration = {name: 'MyClass', kind: 'class'};
			const stmt = generate_import_statement(decl, './classes.ts', '@pkg/name');
			assert.strictEqual(stmt, "import {MyClass} from '@pkg/name/classes.ts';");
		});

		test('handles variable declarations', () => {
			const decl: Enhanced_Declaration = {name: 'MY_CONST', kind: 'variable'};
			const stmt = generate_import_statement(decl, './constants.ts', '@pkg/name');
			assert.strictEqual(stmt, "import {MY_CONST} from '@pkg/name/constants.ts';");
		});
	});
});
