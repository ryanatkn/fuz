/**
 * TypeScript compiler API helpers for extracting metadata from source code.
 *
 * All functions are prefixed with `ts_` for clarity.
 */

import ts from 'typescript';

import type {Src_Module_Declaration, Generic_Param_Info} from '$lib/src_json.js';
import {tsdoc_parse} from '$lib/tsdoc_helpers.js';

/**
 * Parse a generic type parameter into structured information.
 */
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
export const ts_infer_declaration_kind = (
	symbol: ts.Symbol,
	node: ts.Node,
): 'function' | 'type' | 'variable' | 'class' | null => {
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
 */
export const ts_extract_function_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	decl: Src_Module_Declaration,
	tsdoc: ReturnType<typeof tsdoc_parse>,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		const signatures = type.getCallSignatures();

		if (signatures.length > 0) {
			const sig = signatures[0]!;
			decl.type_signature = checker.signatureToString(sig);

			const return_type = checker.getReturnTypeOfSignature(sig);
			decl.return_type = checker.typeToString(return_type);

			// Extract return description from TSDoc
			if (tsdoc?.returns) {
				decl.return_description = tsdoc.returns;
			}

			// Extract throws and since from TSDoc
			if (tsdoc?.throws?.length) {
				decl.throws = tsdoc.throws;
			}
			if (tsdoc?.since) {
				decl.since = tsdoc.since;
			}

			// Extract parameters with descriptions and default values
			decl.parameters = sig.parameters.map((param) => {
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
			decl.generic_params = node.typeParameters.map(ts_parse_generic_param);
		}
	}
};

/**
 * Extract type/interface information with rich property metadata.
 */
export const ts_extract_type_info = (
	node: ts.Node,
	_symbol: ts.Symbol,
	checker: ts.TypeChecker,
	decl: Src_Module_Declaration,
): void => {
	try {
		const type = checker.getTypeAtLocation(node);
		decl.type_signature = checker.typeToString(type);
	} catch (_err) {
		// Ignore: Type checker may fail on complex or recursive types
	}

	if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
		if (node.typeParameters?.length) {
			decl.generic_params = node.typeParameters.map(ts_parse_generic_param);
		}
	}

	if (ts.isInterfaceDeclaration(node)) {
		if (node.heritageClauses) {
			decl.extends = node.heritageClauses
				.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
				.flatMap((hc) => hc.types.map((t) => t.getText()));
		}

		// Extract properties with full metadata
		decl.properties = [];
		for (const member of node.members) {
			if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
				const prop_name = member.name.text;
				const prop_decl: Src_Module_Declaration = {
					name: prop_name,
					kind: 'variable',
				};

				// Extract modifiers
				const modifier_flags = ts_extract_modifiers(ts.getModifiers(member));
				if (modifier_flags.length > 0) {
					prop_decl.modifiers = modifier_flags;
				}

				// Extract type
				if (member.type) {
					prop_decl.type_signature = member.type.getText();
				}

				// Extract TSDoc
				const prop_tsdoc = tsdoc_parse(member, node.getSourceFile());
				if (prop_tsdoc) {
					prop_decl.doc_comment = prop_tsdoc.text;
				}

				decl.properties.push(prop_decl);
			}
		}
	}
};

/**
 * Extract class information with rich member metadata.
 */
export const ts_extract_class_info = (
	node: ts.Node,
	_symbol: ts.Symbol,
	checker: ts.TypeChecker,
	decl: Src_Module_Declaration,
): void => {
	if (!ts.isClassDeclaration(node)) return;

	if (node.heritageClauses) {
		decl.extends = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));

		decl.implements = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ImplementsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));
	}

	if (node.typeParameters?.length) {
		decl.generic_params = node.typeParameters.map(ts_parse_generic_param);
	}

	// Extract members with full metadata
	decl.members = [];
	for (const member of node.members) {
		if (ts.isPropertyDeclaration(member) || ts.isMethodDeclaration(member)) {
			const member_name = ts.isIdentifier(member.name) ? member.name.text : member.name.getText();
			if (!member_name) continue;

			const member_decl: Src_Module_Declaration = {
				name: member_name,
				kind: ts.isMethodDeclaration(member) ? 'function' : 'variable',
			};

			// Extract visibility and modifiers
			const modifier_flags = ts_extract_modifiers(ts.getModifiers(member));
			if (modifier_flags.length > 0) {
				member_decl.modifiers = modifier_flags;
			}

			// Extract type information
			try {
				if (ts.isPropertyDeclaration(member) && member.type) {
					member_decl.type_signature = member.type.getText();
				} else if (ts.isMethodDeclaration(member)) {
					// For methods, get full signature
					const member_symbol = checker.getSymbolAtLocation(member.name);
					if (member_symbol) {
						const member_type = checker.getTypeOfSymbolAtLocation(member_symbol, member);
						member_decl.type_signature = checker.typeToString(member_type);
					}
				}
			} catch (_err) {
				// Ignore: Type checker may fail on complex member signatures
			}

			// Extract TSDoc
			const member_tsdoc = tsdoc_parse(member, node.getSourceFile());
			if (member_tsdoc) {
				member_decl.doc_comment = member_tsdoc.text;
			}

			decl.members.push(member_decl);
		}
	}
};

/**
 * Extract variable information.
 */
export const ts_extract_variable_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	decl: Src_Module_Declaration,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		decl.type_signature = checker.typeToString(type);
	} catch (_err) {
		// Ignore: Type checker may fail on complex variable types
	}
};

/**
 * Extract module-level comment.
 */
export const ts_extract_module_comment = (source_file: ts.SourceFile): string | undefined => {
	const full_text = source_file.getFullText();
	const leading_comments = ts.getLeadingCommentRanges(full_text, 0);
	if (!leading_comments?.length) return undefined;

	const first_comment = leading_comments[0]!;
	let text = full_text.substring(first_comment.pos, first_comment.end);

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
