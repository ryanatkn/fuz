/**
 * TypeScript compiler API helpers for extracting metadata from source code.
 *
 * All functions are prefixed with `ts_` for clarity.
 */

import ts from 'typescript';

import type {Identifier_Json, Generic_Param_Info, Identifier_Kind} from '$lib/src_json.js';
import {tsdoc_parse} from '$lib/tsdoc_helpers.js';

const ts_parse_generic_param = (param: ts.TypeParameterDeclaration): Generic_Param_Info => {
	const result: Generic_Param_Info = {
		name: param.name.text,
	};

	if (param.constraint) {
		result.constraint = param.constraint.getText();
	}

	if (param.default) {
		result.default_type = param.default.getText();
	}

	return result;
};

/**
 * Extract modifier keywords from a node's modifiers.
 *
 * Returns an array of modifier strings like ['public', 'readonly', 'static']
 */
const ts_extract_modifiers = (
	modifiers: ReadonlyArray<ts.ModifierLike> | undefined,
): Array<string> => {
	const modifier_flags: Array<string> = [];
	if (!modifiers) return modifier_flags;

	for (const mod of modifiers) {
		if (mod.kind === ts.SyntaxKind.PublicKeyword) modifier_flags.push('public');
		else if (mod.kind === ts.SyntaxKind.PrivateKeyword) modifier_flags.push('private');
		else if (mod.kind === ts.SyntaxKind.ProtectedKeyword) modifier_flags.push('protected');
		else if (mod.kind === ts.SyntaxKind.ReadonlyKeyword) modifier_flags.push('readonly');
		else if (mod.kind === ts.SyntaxKind.StaticKeyword) modifier_flags.push('static');
		else if (mod.kind === ts.SyntaxKind.AbstractKeyword) modifier_flags.push('abstract');
	}

	return modifier_flags;
};

/**
 * Infer declaration kind from symbol and node.
 */
export const ts_infer_declaration_kind = (symbol: ts.Symbol, node: ts.Node): Identifier_Kind => {
	// Check symbol flags
	if (symbol.flags & ts.SymbolFlags.Class) return 'class';
	if (symbol.flags & ts.SymbolFlags.Function) return 'function';
	if (symbol.flags & ts.SymbolFlags.Interface) return 'type';
	if (symbol.flags & ts.SymbolFlags.TypeAlias) return 'type';

	// Check node kind
	if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node))
		return 'function';
	if (ts.isClassDeclaration(node)) return 'class';
	if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) return 'type';
	if (ts.isVariableDeclaration(node)) {
		// Check if it's a function-valued variable
		const init = node.initializer;
		if (init && (ts.isArrowFunction(init) || ts.isFunctionExpression(init))) {
			return 'function';
		}
		return 'variable';
	}

	return 'variable';
};

/**
 * Extract function/method information including parameters
 * with descriptions and default values.
 *
 * @mutates identifier - adds type_signature, return_type, return_description, throws, since, parameters, generic_params
 */
export const ts_extract_function_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	identifier: Identifier_Json,
	tsdoc: ReturnType<typeof tsdoc_parse>,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		const signatures = type.getCallSignatures();

		if (signatures.length > 0) {
			const sig = signatures[0]!;
			identifier.type_signature = checker.signatureToString(sig);

			const return_type = checker.getReturnTypeOfSignature(sig);
			identifier.return_type = checker.typeToString(return_type);

			// Extract return description from TSDoc
			if (tsdoc?.returns) {
				identifier.return_description = tsdoc.returns;
			}

			// Extract throws and since from TSDoc
			if (tsdoc?.throws?.length) {
				identifier.throws = tsdoc.throws;
			}
			if (tsdoc?.since) {
				identifier.since = tsdoc.since;
			}

			// Extract parameters with descriptions and default values
			identifier.parameters = sig.parameters.map((param) => {
				const param_decl = param.valueDeclaration;
				const param_type = checker.getTypeOfSymbolAtLocation(param, param_decl!);

				// Get TSDoc description for this parameter
				const description = tsdoc?.params.get(param.name);

				// Extract default value from AST
				let default_value: string | undefined;
				if (param_decl && ts.isParameter(param_decl) && param_decl.initializer) {
					default_value = param_decl.initializer.getText();
				}

				return {
					name: param.name,
					type: checker.typeToString(param_type),
					optional: !!(param_decl && ts.isParameter(param_decl) && param_decl.questionToken),
					description,
					default_value,
				};
			});
		}
	} catch (_err) {
		// Ignore: Type checker errors are expected when analyzing incomplete or complex signatures
	}

	// Extract generic type parameters
	if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
		if (node.typeParameters?.length) {
			identifier.generic_params = node.typeParameters.map(ts_parse_generic_param);
		}
	}
};

/**
 * Extract type/interface information with rich property metadata.
 *
 * @mutates identifier - adds type_signature, generic_params, extends, properties
 */
export const ts_extract_type_info = (
	node: ts.Node,
	_symbol: ts.Symbol,
	checker: ts.TypeChecker,
	identifier: Identifier_Json,
): void => {
	try {
		const type = checker.getTypeAtLocation(node);
		identifier.type_signature = checker.typeToString(type);
	} catch (_err) {
		// Ignore: Type checker may fail on complex or recursive types
	}

	if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
		if (node.typeParameters?.length) {
			identifier.generic_params = node.typeParameters.map(ts_parse_generic_param);
		}
	}

	if (ts.isInterfaceDeclaration(node)) {
		if (node.heritageClauses) {
			identifier.extends = node.heritageClauses
				.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
				.flatMap((hc) => hc.types.map((t) => t.getText()));
		}

		// Extract properties with full metadata
		identifier.properties = [];
		for (const member of node.members) {
			if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
				const prop_name = member.name.text;
				const prop_identifier: Identifier_Json = {
					name: prop_name,
					kind: 'variable',
				};

				// Extract modifiers
				const modifier_flags = ts_extract_modifiers(ts.getModifiers(member));
				if (modifier_flags.length > 0) {
					prop_identifier.modifiers = modifier_flags;
				}

				// Extract type
				if (member.type) {
					prop_identifier.type_signature = member.type.getText();
				}

				// Extract TSDoc
				const prop_tsdoc = tsdoc_parse(member, node.getSourceFile());
				if (prop_tsdoc) {
					prop_identifier.doc_comment = prop_tsdoc.text;
				}

				identifier.properties.push(prop_identifier);
			}
		}
	}
};

/**
 * Extract class information with rich member metadata.
 *
 * @mutates identifier - adds extends, implements, generic_params, members
 */
export const ts_extract_class_info = (
	node: ts.Node,
	_symbol: ts.Symbol,
	checker: ts.TypeChecker,
	identifier: Identifier_Json,
): void => {
	if (!ts.isClassDeclaration(node)) return;

	if (node.heritageClauses) {
		identifier.extends = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));

		identifier.implements = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ImplementsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));
	}

	if (node.typeParameters?.length) {
		identifier.generic_params = node.typeParameters.map(ts_parse_generic_param);
	}

	// Extract members with full metadata
	identifier.members = [];
	for (const member of node.members) {
		if (
			ts.isPropertyDeclaration(member) ||
			ts.isMethodDeclaration(member) ||
			ts.isConstructorDeclaration(member)
		) {
			const is_constructor = ts.isConstructorDeclaration(member);
			const member_name = is_constructor
				? 'constructor'
				: ts.isIdentifier(member.name)
					? member.name.text
					: member.name.getText();
			if (!member_name) continue;

			// Skip private fields (those starting with #)
			if (member_name.startsWith('#')) continue;

			const member_identifier: Identifier_Json = {
				name: member_name,
				kind: is_constructor
					? 'constructor'
					: ts.isMethodDeclaration(member)
						? 'function'
						: 'variable',
			};

			// Extract visibility and modifiers
			const modifier_flags = ts_extract_modifiers(ts.getModifiers(member));
			if (modifier_flags.length > 0) {
				member_identifier.modifiers = modifier_flags;
			}

			// Extract TSDoc
			const member_tsdoc = tsdoc_parse(member, node.getSourceFile());
			if (member_tsdoc) {
				member_identifier.doc_comment = member_tsdoc.text;
			}

			// Extract type information and parameters for methods and constructors
			try {
				if (ts.isPropertyDeclaration(member) && member.type) {
					member_identifier.type_signature = member.type.getText();
				} else if (ts.isMethodDeclaration(member) || ts.isConstructorDeclaration(member)) {
					let signatures: ReadonlyArray<ts.Signature> = [];

					if (is_constructor) {
						// For constructors, get construct signatures from the class symbol
						const class_symbol = checker.getSymbolAtLocation(node.name!);
						if (class_symbol) {
							const class_type = checker.getTypeOfSymbolAtLocation(class_symbol, node);
							signatures = class_type.getConstructSignatures();
						}
					} else {
						// For methods, get call signatures from the method symbol
						const member_symbol = checker.getSymbolAtLocation(member.name);
						if (member_symbol) {
							const member_type = checker.getTypeOfSymbolAtLocation(member_symbol, member);
							signatures = member_type.getCallSignatures();
						}
					}

					if (signatures.length > 0) {
						const sig = signatures[0]!;

						// Extract type signature for both constructors and methods
						member_identifier.type_signature = checker.signatureToString(sig);

						// For methods (but not constructors), also extract return info separately
						if (!is_constructor) {
							// Extract return type for methods
							const return_type = checker.getReturnTypeOfSignature(sig);
							member_identifier.return_type = checker.typeToString(return_type);

							// Extract return description from TSDoc
							if (member_tsdoc?.returns) {
								member_identifier.return_description = member_tsdoc.returns;
							}
						}

						// Extract parameters with descriptions and default values
						member_identifier.parameters = sig.parameters.map((param) => {
							const param_decl = param.valueDeclaration;
							const param_type = checker.getTypeOfSymbolAtLocation(param, param_decl!);

							// Get TSDoc description for this parameter
							const description = member_tsdoc?.params.get(param.name);

							// Extract default value from AST
							let default_value: string | undefined;
							if (param_decl && ts.isParameter(param_decl) && param_decl.initializer) {
								default_value = param_decl.initializer.getText();
							}

							return {
								name: param.name,
								type: checker.typeToString(param_type),
								optional: !!(param_decl && ts.isParameter(param_decl) && param_decl.questionToken),
								description,
								default_value,
							};
						});

						// Extract throws and since from TSDoc (for both methods and constructors)
						if (member_tsdoc?.throws?.length) {
							member_identifier.throws = member_tsdoc.throws;
						}
						if (member_tsdoc?.since) {
							member_identifier.since = member_tsdoc.since;
						}
					}
				}
			} catch (_err) {
				// Ignore: Type checker may fail on complex member signatures
			}

			identifier.members.push(member_identifier);
		}
	}
};

/**
 * Extract variable information.
 *
 * @mutates identifier - adds type_signature
 */
export const ts_extract_variable_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	identifier: Identifier_Json,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		identifier.type_signature = checker.typeToString(type);
	} catch (_err) {
		// Ignore: Type checker may fail on complex variable types
	}
};

/**
 * Extract module-level comment.
 * Only accepts JSDoc/TSDoc comments (`/** ... *\/`) that have a blank line separating them
 * from the following statement. Module comments can appear after imports.
 */
export const ts_extract_module_comment = (source_file: ts.SourceFile): string | undefined => {
	const full_text = source_file.getFullText();

	// Check for comments at the start of the file (before any statements)
	const leading_comments = ts.getLeadingCommentRanges(full_text, 0);
	if (leading_comments?.length) {
		for (const comment of leading_comments) {
			const comment_text = full_text.substring(comment.pos, comment.end);
			if (!comment_text.trimStart().startsWith('/**')) continue;

			// Check if there's a blank line after this comment
			const first_statement = source_file.statements[0];
			if (first_statement) {
				const between = full_text.substring(comment.end, first_statement.getStart());
				if (between.includes('\n\n')) {
					return extract_and_clean_jsdoc(full_text, comment);
				}
			} else {
				// No statements, just return the comment
				return extract_and_clean_jsdoc(full_text, comment);
			}
		}
	}

	// Check for comments before each statement (e.g., after imports)
	for (const statement of source_file.statements) {
		const statement_start = statement.getFullStart();
		const statement_pos = statement.getStart();

		// Get comments in the trivia before this statement
		const comments = ts.getLeadingCommentRanges(full_text, statement_start);
		if (!comments?.length) continue;

		for (const comment of comments) {
			const comment_text = full_text.substring(comment.pos, comment.end);
			if (!comment_text.trimStart().startsWith('/**')) continue;

			// Check if there's a blank line between comment and statement
			const between = full_text.substring(comment.end, statement_pos);
			if (between.includes('\n\n')) {
				return extract_and_clean_jsdoc(full_text, comment);
			}
		}
	}

	return undefined;
};

/**
 * Extract and clean JSDoc comment text.
 */
const extract_and_clean_jsdoc = (
	full_text: string,
	comment: {pos: number; end: number},
): string | undefined => {
	let text = full_text.substring(comment.pos, comment.end);

	// Clean comment markers
	text = text
		.replace(/^\/\*\*/, '')
		.replace(/\*\/$/, '')
		.split('\n')
		.map((line) => line.replace(/^\s*\*\s?/, ''))
		.join('\n')
		.trim();

	return text || undefined;
};

/**
 * Create TypeScript program for analysis.
 */
export const ts_create_program = (log: {warn: (message: string) => void}): ts.Program | null => {
	const config_path = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.json');
	if (!config_path) {
		log.warn('No tsconfig.json found');
		return null;
	}

	const config_file = ts.readConfigFile(config_path, ts.sys.readFile);
	const parsed_config = ts.parseJsonConfigFileContent(config_file.config, ts.sys, './');

	return ts.createProgram(parsed_config.fileNames, parsed_config.options);
};
