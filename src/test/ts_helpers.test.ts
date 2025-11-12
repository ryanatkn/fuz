import {test, assert, describe, beforeAll} from 'vitest';
import ts from 'typescript';

import type {Identifier_Json} from '$lib/src_json.js';
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
			(f) => f.category === 'class' && f.name === 'private_fields',
		);

		if (!private_fields_fixture) {
			throw new Error('private_fields fixture not found');
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
