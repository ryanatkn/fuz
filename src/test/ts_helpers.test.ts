import {test, assert, describe, beforeAll} from 'vitest';
import ts from 'typescript';

import type {Identifier_Json} from '$lib/src_json.js';
import {ts_analyze_module_exports} from '$lib/ts_helpers.js';
import {
	load_fixtures,
	validate_identifier_structure,
	create_test_program,
	extract_identifier_from_source,
	type Ts_Fixture,
} from './fixtures/ts/ts_test_helpers.js';
import {normalize_json} from './test_helpers.js';

let fixtures: Array<Ts_Fixture> = [];

beforeAll(async () => {
	fixtures = await load_fixtures();
});

describe('TypeScript helpers (fixture-based)', () => {
	test('all fixtures extract correctly', () => {
		for (const fixture of fixtures) {
			// Create a source file
			const source_file = ts.createSourceFile(
				`${fixture.name}.ts`,
				fixture.input,
				ts.ScriptTarget.Latest,
				true,
				ts.ScriptKind.TS,
			);

			// Create a program with this source file for type checking
			const {checker} = create_test_program(source_file, `${fixture.name}.ts`);

			// Extract the identifier from the source file
			const result = extract_identifier_from_source(source_file, checker, fixture.category);

			// Compare with expected (normalize to match JSON serialization)
			assert.deepEqual(
				normalize_json(result),
				normalize_json(fixture.expected),
				`Fixture "${fixture.category}/${fixture.name}" failed`,
			);
		}
	});

	test('all fixtures have valid structure', () => {
		for (const fixture of fixtures) {
			// Skip module_comment category (returns string, not Identifier_Json)
			if (fixture.category === 'module_comment') continue;

			// Validate identifier structure
			validate_identifier_structure(fixture.expected as Identifier_Json);
		}
	});

	test('class fixtures correctly exclude private fields', () => {
		const private_fields_fixture = fixtures.find(
			(f) => f.category === 'class' && f.name === 'fields_private',
		);

		if (!private_fields_fixture) {
			throw new Error('fields_private fixture not found');
		}

		const result = private_fields_fixture.expected as Identifier_Json;

		// Verify that #count, #max, and #reset are NOT in the members
		if (result.members) {
			const member_names = result.members.map((m) => m.name);
			assert.notInclude(member_names, '#count', 'Private field #count should be excluded');
			assert.notInclude(member_names, '#max', 'Private field #max should be excluded');
			assert.notInclude(member_names, '#reset', 'Private method #reset should be excluded');

			// Verify that public members ARE included
			assert.include(member_names, 'name', 'Public field name should be included');
			assert.include(member_names, 'get_count', 'Public method get_count should be included');
			assert.include(member_names, 'increment', 'Public method increment should be included');
		} else {
			throw new Error('Expected members to be defined for Counter class');
		}
	});
});

describe('ts_analyze_module_exports', () => {
	test('extracts module comment and all exported identifiers', () => {
		const source_code = `
/**
 * Test module with exports.
 */

export const foo = 42;
export function bar(): string { return 'bar'; }
export type Baz = { value: number };
`;

		const source_file = ts.createSourceFile('test.ts', source_code, ts.ScriptTarget.Latest, true);
		const {checker} = create_test_program(source_file, 'test.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		// Should have module comment
		assert.strictEqual(result.module_comment, 'Test module with exports.');

		// Should have 3 identifiers
		assert.strictEqual(result.identifiers.length, 3);

		const names = result.identifiers.map((i) => i.name);
		assert.include(names, 'foo');
		assert.include(names, 'bar');
		assert.include(names, 'Baz');
	});

	test('handles module with no exports', () => {
		const source_code = `
/**
 * Module with no exports.
 */

const internal = 'not exported';
`;

		const source_file = ts.createSourceFile('empty.ts', source_code, ts.ScriptTarget.Latest, true);
		const {checker} = create_test_program(source_file, 'empty.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		assert.strictEqual(result.module_comment, 'Module with no exports.');
		assert.strictEqual(result.identifiers.length, 0);
	});

	test('handles module with no comment', () => {
		const source_code = `
export const foo = 'no comment';
export const bar = 123;
`;

		const source_file = ts.createSourceFile(
			'no_comment.ts',
			source_code,
			ts.ScriptTarget.Latest,
			true,
		);
		const {checker} = create_test_program(source_file, 'no_comment.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		assert.isUndefined(result.module_comment);
		assert.strictEqual(result.identifiers.length, 2);
	});

	test('extracts full identifier metadata', () => {
		const source_code = `
/**
 * Adds two numbers.
 * @param a First number
 * @param b Second number
 * @returns The sum
 */
export function add(a: number, b: number): number {
	return a + b;
}
`;

		const source_file = ts.createSourceFile('math.ts', source_code, ts.ScriptTarget.Latest, true);
		const {checker} = create_test_program(source_file, 'math.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		assert.strictEqual(result.identifiers.length, 1);

		const add_fn = result.identifiers[0]!;
		assert.strictEqual(add_fn.name, 'add');
		assert.strictEqual(add_fn.kind, 'function');
		assert.strictEqual(add_fn.doc_comment, 'Adds two numbers.');
		assert.strictEqual(add_fn.return_type, 'number');
		assert.strictEqual(add_fn.return_description, 'The sum');
		assert.ok(add_fn.parameters);
		assert.strictEqual(add_fn.parameters.length, 2);
		const first_param = add_fn.parameters[0];
		assert.ok(first_param);
		assert.strictEqual(first_param.name, 'a');
		assert.strictEqual(first_param.description, 'First number');
	});

	test('handles class exports with members', () => {
		const source_code = `
export class Counter {
	value: number = 0;

	increment(): void {
		this.value++;
	}
}
`;

		const source_file = ts.createSourceFile(
			'counter.ts',
			source_code,
			ts.ScriptTarget.Latest,
			true,
		);
		const {checker} = create_test_program(source_file, 'counter.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		assert.strictEqual(result.identifiers.length, 1);

		const counter = result.identifiers[0]!;
		assert.strictEqual(counter.name, 'Counter');
		assert.strictEqual(counter.kind, 'class');
		assert.ok(counter.members);
		assert.isTrue(counter.members.length >= 2);

		const member_names = counter.members.map((m) => m.name);
		assert.include(member_names, 'value');
		assert.include(member_names, 'increment');
	});

	test('handles type exports with properties', () => {
		const source_code = `
export interface Config {
	/** The name of the configuration. */
	name: string;
	/** Whether the config is enabled. */
	enabled: boolean;
}
`;

		const source_file = ts.createSourceFile('config.ts', source_code, ts.ScriptTarget.Latest, true);
		const {checker} = create_test_program(source_file, 'config.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		assert.strictEqual(result.identifiers.length, 1);

		const config = result.identifiers[0]!;
		assert.strictEqual(config.name, 'Config');
		assert.strictEqual(config.kind, 'type');
		assert.ok(config.properties);
		assert.strictEqual(config.properties.length, 2);
	});

	test('handles re-exports', () => {
		const source_code = `
const internal_value = 42;
export { internal_value as exported_value };
`;

		const source_file = ts.createSourceFile(
			'reexport.ts',
			source_code,
			ts.ScriptTarget.Latest,
			true,
		);
		const {checker} = create_test_program(source_file, 'reexport.ts');

		const result = ts_analyze_module_exports(source_file, checker);

		// Should have the re-exported value
		assert.strictEqual(result.identifiers.length, 1);
		assert.strictEqual(result.identifiers[0]!.name, 'exported_value');
	});
});
