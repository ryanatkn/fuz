import {readdir, readFile} from 'node:fs/promises';
import {join} from 'node:path';

import type {Tsdoc_Parsed_Comment} from '$lib/tsdoc_helpers.js';

export interface Tsdoc_Fixture {
	name: string;
	input: string;
	expected: Tsdoc_Parsed_Comment | null;
}

/**
 * Load all fixtures from the tsdoc fixtures directory.
 */
export const load_fixtures = async (): Promise<Array<Tsdoc_Fixture>> => {
	const fixtures_dir = join(import.meta.dirname);
	const entries = await readdir(fixtures_dir, {withFileTypes: true});
	const fixture_names = entries
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.sort();

	return await Promise.all(
		fixture_names.map(async (name) => {
			const fixture_dir = join(fixtures_dir, name);
			const input = await readFile(join(fixture_dir, 'input.ts'), 'utf-8');
			const expected_text = await readFile(join(fixture_dir, 'expected.json'), 'utf-8');
			const expected_json = JSON.parse(expected_text);

			// Convert params object back to Map
			const expected: Tsdoc_Parsed_Comment | null = expected_json
				? {
						...expected_json,
						params: new Map(Object.entries(expected_json.params || {})),
					}
				: null;

			return {name, input, expected};
		}),
	);
};

/**
 * Validate that a parsed TSDoc comment has the expected structure.
 */
export const validate_tsdoc_structure = (tsdoc: Tsdoc_Parsed_Comment | undefined): void => {
	if (!tsdoc) {
		throw new Error('Expected tsdoc to be defined');
	}

	// Basic structure validation
	if (typeof tsdoc.text !== 'string') {
		throw new Error('Expected tsdoc.text to be a string');
	}

	if (!(tsdoc.params instanceof Map)) {
		throw new Error('Expected tsdoc.params to be a Map');
	}

	// Validate optional fields
	if (tsdoc.returns !== undefined && typeof tsdoc.returns !== 'string') {
		throw new Error('Expected tsdoc.returns to be a string');
	}

	if (tsdoc.throws !== undefined) {
		if (!Array.isArray(tsdoc.throws)) {
			throw new Error('Expected tsdoc.throws to be an array');
		}
		for (const t of tsdoc.throws) {
			if (typeof t.description !== 'string') {
				throw new Error('Expected throw description to be a string');
			}
			if (t.type !== undefined && typeof t.type !== 'string') {
				throw new Error('Expected throw type to be a string');
			}
		}
	}

	if (tsdoc.examples !== undefined) {
		if (!Array.isArray(tsdoc.examples)) {
			throw new Error('Expected tsdoc.examples to be an array');
		}
		for (const example of tsdoc.examples) {
			if (typeof example !== 'string') {
				throw new Error('Expected example to be a string');
			}
		}
	}

	if (tsdoc.deprecated_message !== undefined && typeof tsdoc.deprecated_message !== 'string') {
		throw new Error('Expected tsdoc.deprecated_message to be a string');
	}

	if (tsdoc.see_also !== undefined) {
		if (!Array.isArray(tsdoc.see_also)) {
			throw new Error('Expected tsdoc.see_also to be an array');
		}
		for (const see of tsdoc.see_also) {
			if (typeof see !== 'string') {
				throw new Error('Expected see reference to be a string');
			}
		}
	}

	if (tsdoc.since !== undefined && typeof tsdoc.since !== 'string') {
		throw new Error('Expected tsdoc.since to be a string');
	}
};
