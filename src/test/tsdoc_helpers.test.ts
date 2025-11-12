import {test, assert, describe, beforeAll} from 'vitest';
import ts from 'typescript';

import {tsdoc_parse} from '$lib/tsdoc_helpers.js';
import {
	load_fixtures,
	validate_tsdoc_structure,
	type Tsdoc_Fixture,
} from './fixtures/tsdoc/tsdoc_test_helpers.js';
import {normalize_json} from './test_helpers.js';

let fixtures: Array<Tsdoc_Fixture> = [];

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

			// Find the exported declaration
			let result = null;
			for (const statement of source_file.statements) {
				if (ts.isExportAssignment(statement)) {
					result = tsdoc_parse(statement.expression, source_file);
					break;
				} else if (
					ts.isFunctionDeclaration(statement) ||
					ts.isVariableStatement(statement) ||
					ts.isTypeAliasDeclaration(statement) ||
					ts.isInterfaceDeclaration(statement) ||
					ts.isClassDeclaration(statement)
				) {
					const modifiers = ts.getModifiers(statement);
					const is_exported = modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword);

					if (is_exported) {
						result = tsdoc_parse(statement, source_file);
						break;
					}
				}
			}

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
