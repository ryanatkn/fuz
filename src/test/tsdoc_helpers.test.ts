import {test, assert, describe, beforeAll} from 'vitest';
import ts from 'typescript';

import {
	load_fixtures,
	validate_tsdoc_structure,
	find_and_parse_tsdoc,
	type TsdocFixture,
} from './fixtures/tsdoc/tsdoc_test_helpers.js';
import {normalize_json} from './test_helpers.js';

let fixtures: Array<TsdocFixture> = [];

beforeAll(async () => {
	fixtures = await load_fixtures();
});

describe('tsdoc parser (fixture-based)', () => {
	test('all fixtures parse correctly', () => {
		for (const fixture of fixtures) {
			// Create a source file from the input
			const source_file = ts.createSourceFile(
				`${fixture.name}.ts`,
				fixture.input,
				ts.ScriptTarget.Latest,
				true,
				ts.ScriptKind.TS,
			);

			// Find and parse the exported declaration
			const result = find_and_parse_tsdoc(source_file);

			// Compare with expected (normalize to match JSON serialization)
			assert.deepEqual(
				normalize_json(result),
				normalize_json(fixture.expected),
				`Fixture "${fixture.name}" failed`,
			);
		}
	});

	test('all fixtures have valid structure', () => {
		for (const fixture of fixtures) {
			if (fixture.expected !== null) {
				validate_tsdoc_structure(fixture.expected);
			}
		}
	});
});
