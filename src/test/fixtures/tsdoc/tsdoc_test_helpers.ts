import ts from 'typescript';

import type {Tsdoc_Parsed_Comment} from '$lib/tsdoc_helpers.js';
import {tsdoc_parse} from '$lib/tsdoc_helpers.js';
import {load_fixtures_generic} from '../../test_helpers.js';

export interface Tsdoc_Fixture {
	name: string;
	input: string;
	expected: Tsdoc_Parsed_Comment | null;
}

/**
 * Load all fixtures from the tsdoc fixtures directory.
 */
export const load_fixtures = async (): Promise<Array<Tsdoc_Fixture>> =>
	load_fixtures_generic<Tsdoc_Parsed_Comment | null>({
		fixtures_dir: import.meta.dirname,
		input_extension: '.ts',
		transform_expected: (json) =>
			json ? {...json, params: new Map(Object.entries(json.params || {}))} : null,
	});

/**
 * Find and parse TSDoc from the first exported declaration in a source file.
 * Used by both tests and update tasks to ensure consistent behavior.
 *
 * @param source_file - The TypeScript source file to search
 * @returns The parsed TSDoc comment, or null if not found
 */
export const find_and_parse_tsdoc = (source_file: ts.SourceFile): Tsdoc_Parsed_Comment | null => {
	for (const statement of source_file.statements) {
		// Check for export assignments
		if (ts.isExportAssignment(statement)) {
			return tsdoc_parse(statement.expression, source_file) ?? null;
		}

		// Check for exported declarations
		if (
			ts.isFunctionDeclaration(statement) ||
			ts.isVariableStatement(statement) ||
			ts.isTypeAliasDeclaration(statement) ||
			ts.isInterfaceDeclaration(statement) ||
			ts.isClassDeclaration(statement)
		) {
			const modifiers = ts.getModifiers(statement);
			const is_exported = modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword);

			if (is_exported) {
				return tsdoc_parse(statement, source_file) ?? null;
			}
		}
	}

	return null;
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

	if (tsdoc.mutates !== undefined) {
		if (!Array.isArray(tsdoc.mutates)) {
			throw new Error('Expected tsdoc.mutates to be an array');
		}
		for (const m of tsdoc.mutates) {
			if (typeof m !== 'string') {
				throw new Error('Expected mutates entry to be a string');
			}
		}
	}

	if (tsdoc.nodocs !== undefined && typeof tsdoc.nodocs !== 'boolean') {
		throw new Error('Expected tsdoc.nodocs to be a boolean');
	}
};
