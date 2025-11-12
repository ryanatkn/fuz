import {readdir, readFile} from 'node:fs/promises';
import {join} from 'node:path';

import type {Identifier_Json} from '$lib/src_json.js';

export interface Svelte_Fixture {
	name: string;
	input: string;
	expected: Identifier_Json;
}

/**
 * Convert a fixture name to a component name.
 * Transforms snake_case to Upper_Snake_Case (e.g., "basic_props" -> "Basic_Props").
 *
 * @param name - The fixture name in snake_case
 * @returns The component name in Upper_Snake_Case
 */
export const fixture_name_to_component_name = (name: string): string => {
	return name
		.split('_')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('_');
};

/**
 * Load all fixtures from the svelte fixtures directory.
 */
export const load_fixtures = async (): Promise<Array<Svelte_Fixture>> => {
	const fixtures_dir = join(import.meta.dirname);
	const entries = await readdir(fixtures_dir, {withFileTypes: true});
	const fixture_names = entries
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.sort();

	return await Promise.all(
		fixture_names.map(async (name) => {
			const fixture_dir = join(fixtures_dir, name);
			const input = await readFile(join(fixture_dir, 'input.svelte'), 'utf-8');
			const expected_text = await readFile(join(fixture_dir, 'expected.json'), 'utf-8');
			const expected: Identifier_Json = JSON.parse(expected_text);

			return {name, input, expected};
		}),
	);
};

/**
 * Validate that a parsed Svelte component has the expected structure.
 */
export const validate_component_structure = (component: Identifier_Json): void => {
	if (!component) {
		throw new Error('Expected component to be defined');
	}

	// Must be a component kind
	if (component.kind !== 'component') {
		throw new Error(`Expected component.kind to be 'component', got '${component.kind}'`);
	}

	// Must have a name
	if (typeof component.name !== 'string') {
		throw new Error('Expected component.name to be a string');
	}

	// Validate props if present
	if (component.props !== undefined) {
		if (!Array.isArray(component.props)) {
			throw new Error('Expected component.props to be an array');
		}
		for (const prop of component.props) {
			if (typeof prop.name !== 'string') {
				throw new Error('Expected prop.name to be a string');
			}
			if (typeof prop.type !== 'string') {
				throw new Error('Expected prop.type to be a string');
			}
			if (typeof prop.optional !== 'boolean') {
				throw new Error('Expected prop.optional to be a boolean');
			}
			// Optional fields
			if (prop.description !== undefined && typeof prop.description !== 'string') {
				throw new Error('Expected prop.description to be a string');
			}
			if (prop.default_value !== undefined && typeof prop.default_value !== 'string') {
				throw new Error('Expected prop.default_value to be a string');
			}
			if (prop.bindable !== undefined && typeof prop.bindable !== 'boolean') {
				throw new Error('Expected prop.bindable to be a boolean');
			}
		}
	}

	// Validate doc_comment if present
	if (component.doc_comment !== undefined && typeof component.doc_comment !== 'string') {
		throw new Error('Expected component.doc_comment to be a string');
	}

	// Validate source_line if present
	if (component.source_line !== undefined && typeof component.source_line !== 'number') {
		throw new Error('Expected component.source_line to be a number');
	}
};
