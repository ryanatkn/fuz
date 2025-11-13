import {test, assert, describe, beforeAll} from 'vitest';
import ts from 'typescript';
import {svelte2tsx} from 'svelte2tsx';

import {svelte_analyze_component} from '$lib/svelte_helpers.js';
import {ts_create_program} from '$lib/ts_helpers.js';
import {
	load_fixtures,
	validate_component_structure,
	fixture_name_to_component_name,
	type Svelte_Fixture,
} from './fixtures/svelte/svelte_test_helpers.js';
import {normalize_json} from './test_helpers.js';

let fixtures: Array<Svelte_Fixture> = [];
let checker: ts.TypeChecker;

beforeAll(async () => {
	fixtures = await load_fixtures();

	// Create TypeScript program for type checking
	const program = ts_create_program({warn: () => undefined});
	if (!program) {
		throw new Error('Failed to create TypeScript program');
	}
	checker = program.getTypeChecker();
});

describe('svelte component analyzer (fixture-based)', () => {
	test('all fixtures analyze correctly', () => {
		for (const fixture of fixtures) {
			// Check if component uses TypeScript
			const is_ts_file = fixture.input.includes('lang="ts"');

			// Transform Svelte to TS
			const ts_result = svelte2tsx(fixture.input, {
				filename: `${fixture.name}.svelte`,
				isTsFile: is_ts_file,
				emitOnTemplateError: true,
			});

			// Create source file from original Svelte for JSDoc extraction
			const temp_source = ts.createSourceFile(
				`${fixture.name}.svelte`,
				fixture.input,
				ts.ScriptTarget.Latest,
				true,
			);

			// Extract component name from fixture name
			const component_name = fixture_name_to_component_name(fixture.name);

			// Analyze the component
			const result = svelte_analyze_component(ts_result.code, temp_source, checker, component_name);

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
			validate_component_structure(fixture.expected);
		}
	});
});
