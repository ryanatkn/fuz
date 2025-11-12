import {readdir, readFile} from 'node:fs/promises';
import {join} from 'node:path';
import ts from 'typescript';

import type {Identifier_Json} from '$lib/src_json.js';
import {
	ts_infer_declaration_kind,
	ts_extract_function_info,
	ts_extract_type_info,
	ts_extract_class_info,
	ts_extract_variable_info,
	ts_extract_module_comment,
} from '$lib/ts_helpers.js';
import {tsdoc_parse} from '$lib/tsdoc_helpers.js';

export type Ts_Fixture_Category =
	| 'function'
	| 'class'
	| 'type'
	| 'variable'
	| 'module_comment'
	| 'infer_kind';

export interface Ts_Fixture {
	name: string;
	category: Ts_Fixture_Category;
	input: string;
	/** string for module_comment category, null for no_comment case, otherwise Identifier_Json */
	expected: Identifier_Json | string | null;
}

/**
 * Create a TypeScript program and type checker for a given source file.
 * Used by both test files and update tasks to ensure consistent behavior.
 *
 * @param source_file - The TypeScript source file to analyze
 * @param file_path - The path identifier for the file
 * @returns An object with the program and type checker
 */
export const create_test_program = (
	source_file: ts.SourceFile,
	file_path: string,
): {program: ts.Program; checker: ts.TypeChecker} => {
	const program = ts.createProgram(
		[file_path],
		{
			target: ts.ScriptTarget.Latest,
			module: ts.ModuleKind.ESNext,
			noResolve: true,
		},
		{
			getSourceFile: (fileName) => {
				if (fileName === file_path) return source_file;
				return undefined;
			},
			writeFile: () => undefined,
			getCurrentDirectory: () => '',
			getDirectories: () => [],
			fileExists: () => true,
			readFile: () => '',
			getCanonicalFileName: (fileName) => fileName,
			useCaseSensitiveFileNames: () => true,
			getNewLine: () => '\n',
			getDefaultLibFileName: () => 'lib.d.ts',
		},
	);
	const checker = program.getTypeChecker();
	return {program, checker};
};

/**
 * Extract an identifier from a TypeScript source file based on the fixture category.
 * Used by both test files and update tasks to ensure consistent behavior.
 *
 * @param source_file - The TypeScript source file to analyze
 * @param checker - The TypeScript type checker
 * @param category - The fixture category (function, class, type, etc.)
 * @returns The extracted identifier, or null if not found
 */
export const extract_identifier_from_source = (
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
	category: Ts_Fixture_Category,
): Identifier_Json | string | null => {
	// Handle module_comment category differently (returns string, not Identifier_Json)
	if (category === 'module_comment') {
		return ts_extract_module_comment(source_file) ?? null;
	}

	// Find the exported declaration
	for (const statement of source_file.statements) {
		// Check if this statement type can have modifiers
		if (
			!ts.isFunctionDeclaration(statement) &&
			!ts.isClassDeclaration(statement) &&
			!ts.isInterfaceDeclaration(statement) &&
			!ts.isTypeAliasDeclaration(statement) &&
			!ts.isVariableStatement(statement)
		) {
			continue;
		}

		const modifiers = ts.getModifiers(statement);
		const is_exported = modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword);

		if (!is_exported) continue;

		// Get symbol and node
		let symbol: ts.Symbol | undefined;
		let node: ts.Node | undefined;

		if (ts.isFunctionDeclaration(statement) && statement.name) {
			node = statement;
			symbol = checker.getSymbolAtLocation(statement.name);
		} else if (ts.isClassDeclaration(statement) && statement.name) {
			node = statement;
			symbol = checker.getSymbolAtLocation(statement.name);
		} else if (ts.isInterfaceDeclaration(statement)) {
			node = statement;
			symbol = checker.getSymbolAtLocation(statement.name);
		} else if (ts.isTypeAliasDeclaration(statement)) {
			node = statement;
			symbol = checker.getSymbolAtLocation(statement.name);
		} else if (ts.isVariableStatement(statement)) {
			// Get the first declaration
			const decl = statement.declarationList.declarations[0];
			if (decl && ts.isIdentifier(decl.name)) {
				node = decl;
				symbol = checker.getSymbolAtLocation(decl.name);
			}
		}

		if (!symbol || !node) continue;

		const name = symbol.name;

		// For infer_kind category, just test kind inference
		if (category === 'infer_kind') {
			const kind = ts_infer_declaration_kind(symbol, node);
			return {name, kind};
		}

		// Create base identifier
		const identifier: Identifier_Json = {
			name,
			kind: ts_infer_declaration_kind(symbol, node),
		};

		// Extract TSDoc
		const tsdoc = tsdoc_parse(node, source_file);

		// Apply appropriate extraction based on category
		switch (category) {
			case 'function':
				ts_extract_function_info(node, symbol, checker, identifier, tsdoc);
				break;
			case 'class':
				ts_extract_class_info(node, symbol, checker, identifier);
				break;
			case 'type':
				ts_extract_type_info(node, symbol, checker, identifier);
				break;
			case 'variable':
				ts_extract_variable_info(node, symbol, checker, identifier);
				break;
		}

		return identifier;
	}

	return null;
};

/**
 * Infer the fixture category from its name based on naming conventions.
 */
export const infer_category_from_name = (name: string): Ts_Fixture_Category => {
	if (name.startsWith('class_') || name === 'fields_private' || name === 'members_public') {
		return 'class';
	}
	if (name.startsWith('function_') || name.startsWith('params_')) {
		return 'function';
	}
	if (name.startsWith('interface_') || name.startsWith('type_')) {
		return 'type';
	}
	if (name.startsWith('variable_')) {
		return 'variable';
	}
	if (name.startsWith('infer_kind_') || name.endsWith('_declaration')) {
		return 'infer_kind';
	}
	if (name === 'multi_line' || name === 'no_comment') {
		return 'module_comment';
	}
	throw new Error(`Cannot infer category from fixture name: ${name}`);
};

/**
 * Load all fixtures from the ts fixtures directory (flat structure).
 */
export const load_fixtures = async (): Promise<Array<Ts_Fixture>> => {
	const fixtures_dir = join(import.meta.dirname);
	const entries = await readdir(fixtures_dir, {withFileTypes: true});
	const fixture_names = entries
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.sort();

	const all_fixtures: Array<Ts_Fixture> = [];

	for (const name of fixture_names) {
		const fixture_dir = join(fixtures_dir, name);
		const input = await readFile(join(fixture_dir, 'input.ts'), 'utf-8');
		const expected_text = await readFile(join(fixture_dir, 'expected.json'), 'utf-8');
		const expected = JSON.parse(expected_text);
		const category = infer_category_from_name(name);

		all_fixtures.push({name, category, input, expected});
	}

	return all_fixtures;
};

/**
 * Validate that an Identifier_Json has the expected structure.
 */
export const validate_identifier_structure = (identifier: Identifier_Json): void => {
	if (!identifier) {
		throw new Error('Expected identifier to be defined');
	}

	// Must have name and kind
	if (typeof identifier.name !== 'string') {
		throw new Error('Expected identifier.name to be a string');
	}

	if (typeof identifier.kind !== 'string') {
		throw new Error('Expected identifier.kind to be a string');
	}

	// Validate kind is one of the allowed values
	const valid_kinds = ['function', 'class', 'type', 'variable', 'component'];
	if (!valid_kinds.includes(identifier.kind)) {
		throw new Error(`Expected identifier.kind to be one of ${valid_kinds.join(', ')}`);
	}

	// Validate optional fields based on kind
	if (identifier.kind === 'function') {
		if (identifier.parameters !== undefined && !Array.isArray(identifier.parameters)) {
			throw new Error('Expected parameters to be an array');
		}
		if (identifier.return_type !== undefined && typeof identifier.return_type !== 'string') {
			throw new Error('Expected return_type to be a string');
		}
	}

	if (identifier.kind === 'class') {
		if (identifier.members !== undefined && !Array.isArray(identifier.members)) {
			throw new Error('Expected members to be an array');
		}
	}

	if (identifier.kind === 'type') {
		if (identifier.properties !== undefined && !Array.isArray(identifier.properties)) {
			throw new Error('Expected properties to be an array');
		}
	}

	// Validate generic_params if present
	if (identifier.generic_params !== undefined) {
		if (!Array.isArray(identifier.generic_params)) {
			throw new Error('Expected generic_params to be an array');
		}
		for (const param of identifier.generic_params) {
			if (typeof param.name !== 'string') {
				throw new Error('Expected generic param name to be a string');
			}
		}
	}
};
