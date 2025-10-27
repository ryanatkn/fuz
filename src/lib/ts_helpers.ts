/**
 * TypeScript Compiler API helpers for extracting metadata from source code
 *
 * All functions are prefixed with `ts_` for clarity.
 */

import ts from 'typescript';
import type {Src_Module_Declaration} from './src_json.js';
import {tsdoc_parse} from './tsdoc_helpers.js';

/**
 * Infer declaration kind from symbol and node
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
 * Extract function/method information including parameters with descriptions and default values
 */
export const ts_extract_function_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	decl: Src_Module_Declaration,
	jsdoc: ReturnType<typeof tsdoc_parse>,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		const signatures = type.getCallSignatures();

		if (signatures.length > 0) {
			const sig = signatures[0]!;
			decl.type_signature = checker.signatureToString(sig);

			const return_type = checker.getReturnTypeOfSignature(sig);
			decl.return_type = checker.typeToString(return_type);

			// Extract return description from JSDoc
			if (jsdoc?.returns) {
				decl.return_description = jsdoc.returns;
			}

			// Extract throws and since from JSDoc
			if (jsdoc?.throws.length) {
				decl.throws = jsdoc.throws;
			}
			if (jsdoc?.since) {
				decl.since = jsdoc.since;
			}

			// Extract parameters with descriptions and default values
			decl.parameters = sig.parameters.map((param) => {
				const param_decl = param.valueDeclaration;
				const param_type = checker.getTypeOfSymbolAtLocation(param, param_decl!);

				// Get JSDoc description for this parameter
				const description = jsdoc?.params.get(param.name);

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
		// Ignore type errors
	}

	// Extract generic type parameters
	if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
		if (node.typeParameters?.length) {
			decl.generic_params = node.typeParameters.map((tp) => tp.getText());
		}
	}
};

/**
 * Extract type/interface information
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
		// Ignore
	}

	if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
		if (node.typeParameters?.length) {
			decl.generic_params = node.typeParameters.map((tp) => tp.getText());
		}
	}

	if (ts.isInterfaceDeclaration(node) && node.heritageClauses) {
		decl.extends = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));
	}
};

/**
 * Extract class information
 */
export const ts_extract_class_info = (
	node: ts.Node,
	_symbol: ts.Symbol,
	_checker: ts.TypeChecker,
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
		decl.generic_params = node.typeParameters.map((tp) => tp.getText());
	}

	// Extract member names
	decl.members = [];
	for (const member of node.members) {
		if (ts.isPropertyDeclaration(member) || ts.isMethodDeclaration(member)) {
			const member_name = (member.name as ts.Identifier).text;
			if (member_name) {
				decl.members.push({
					name: member_name,
					kind: ts.isMethodDeclaration(member) ? 'function' : 'variable',
				});
			}
		}
	}
};

/**
 * Extract variable information
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
		// Ignore
	}
};

/**
 * Check if node is exported
 */
export const ts_is_exported = (node: ts.Node): boolean => {
	return (
		(ts.canHaveModifiers(node) &&
			ts.getModifiers(node)?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) ||
		false
	);
};

/**
 * Extract module-level comment
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
 * Extract import statements
 */
export const ts_extract_imports = (source_file: ts.SourceFile): Array<string> => {
	const imports: Array<string> = [];

	ts.forEachChild(source_file, (node) => {
		if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
			imports.push(node.moduleSpecifier.text);
		}
	});

	return imports;
};

/**
 * Create TypeScript program for analysis
 */
export const ts_create_program = (log: any): ts.Program | null => {
	const config_path = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.json');
	if (!config_path) {
		log.warn('No tsconfig.json found');
		return null;
	}

	const config_file = ts.readConfigFile(config_path, ts.sys.readFile);
	const parsed_config = ts.parseJsonConfigFileContent(config_file.config, ts.sys, './');

	return ts.createProgram(parsed_config.fileNames, parsed_config.options);
};
