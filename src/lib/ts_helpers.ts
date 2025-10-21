/**
 * TypeScript Compiler API helpers for extracting metadata from source code
 */

import ts from 'typescript';
import type {Enhanced_Declaration} from './enhanced_declarations.js';

/**
 * Infer declaration kind from symbol and node
 */
export const infer_declaration_kind = (
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
 * Extract JSDoc comment from node
 */
export const extract_jsdoc = (
	node: ts.Node,
	source_file: ts.SourceFile,
): {
	full_text: string;
	summary: string;
	examples: string[];
	deprecated?: string;
	see_also: string[];
} | undefined => {
	const jsdoc_comments = ts.getJSDocCommentsAndTags(node);
	if (jsdoc_comments.length === 0) return undefined;

	let full_text = '';
	const examples: string[] = [];
	let deprecated: string | undefined;
	const see_also: string[] = [];

	for (const comment of jsdoc_comments) {
		if (ts.isJSDoc(comment) && comment.comment) {
			const text =
				typeof comment.comment === 'string'
					? comment.comment
					: comment.comment.map((c) => c.text).join('');
			full_text += text + '\n';
		}
	}

	const tags = ts.getJSDocTags(node);
	for (const tag of tags) {
		const tag_text =
			typeof tag.comment === 'string' ? tag.comment : tag.comment?.map((c) => c.text).join('');

		if (tag.tagName.text === 'example' && tag_text) {
			examples.push(tag_text.trim());
		} else if (tag.tagName.text === 'deprecated' && tag_text) {
			deprecated = tag_text;
		} else if (tag.tagName.text === 'see' && tag_text) {
			see_also.push(tag_text.trim());
		}
	}

	full_text = full_text.trim();
	const summary = full_text.split('\n\n')[0].trim();

	return {full_text, summary, examples, deprecated, see_also};
};

/**
 * Extract function/method information
 */
export const extract_function_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	enhanced: Enhanced_Declaration,
	jsdoc: ReturnType<typeof extract_jsdoc>,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		const signatures = type.getCallSignatures();

		if (signatures.length > 0) {
			const sig = signatures[0];
			enhanced.type_signature = checker.signatureToString(sig);

			const return_type = checker.getReturnTypeOfSignature(sig);
			enhanced.return_type = checker.typeToString(return_type);

			enhanced.parameters = sig.parameters.map((param) => {
				const param_decl = param.valueDeclaration;
				const param_type = checker.getTypeOfSymbolAtLocation(param, param_decl!);

				return {
					name: param.name,
					type: checker.typeToString(param_type),
					optional: !!(param_decl && ts.isParameter(param_decl) && param_decl.questionToken),
				};
			});
		}
	} catch (err) {
		// Ignore type errors
	}

	// Extract generic type parameters
	if (
		ts.isFunctionDeclaration(node) ||
		ts.isArrowFunction(node) ||
		ts.isFunctionExpression(node)
	) {
		if (node.typeParameters?.length) {
			enhanced.generic_params = node.typeParameters.map((tp) => tp.getText());
		}
	}
};

/**
 * Extract type/interface information
 */
export const extract_type_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	enhanced: Enhanced_Declaration,
): void => {
	try {
		const type = checker.getTypeAtLocation(node);
		enhanced.type_signature = checker.typeToString(type);
	} catch (err) {
		// Ignore
	}

	if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
		if (node.typeParameters?.length) {
			enhanced.generic_params = node.typeParameters.map((tp) => tp.getText());
		}
	}

	if (ts.isInterfaceDeclaration(node) && node.heritageClauses) {
		enhanced.extends = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));
	}
};

/**
 * Extract class information
 */
export const extract_class_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	enhanced: Enhanced_Declaration,
): void => {
	if (!ts.isClassDeclaration(node)) return;

	if (node.heritageClauses) {
		enhanced.extends = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ExtendsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));

		enhanced.implements = node.heritageClauses
			.filter((hc) => hc.token === ts.SyntaxKind.ImplementsKeyword)
			.flatMap((hc) => hc.types.map((t) => t.getText()));
	}

	if (node.typeParameters?.length) {
		enhanced.generic_params = node.typeParameters.map((tp) => tp.getText());
	}

	// Extract member names
	enhanced.members = [];
	for (const member of node.members) {
		if (ts.isPropertyDeclaration(member) || ts.isMethodDeclaration(member)) {
			const member_name = (member.name as ts.Identifier)?.text;
			if (member_name) {
				enhanced.members.push({
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
export const extract_variable_info = (
	node: ts.Node,
	symbol: ts.Symbol,
	checker: ts.TypeChecker,
	enhanced: Enhanced_Declaration,
): void => {
	try {
		const type = checker.getTypeOfSymbolAtLocation(symbol, node);
		enhanced.type_signature = checker.typeToString(type);
	} catch (err) {
		// Ignore
	}
};

/**
 * Check if node is exported
 */
export const is_exported = (node: ts.Node): boolean => {
	return (
		(ts.canHaveModifiers(node) &&
			ts.getModifiers(node)?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) ||
		false
	);
};

/**
 * Extract module-level comment
 */
export const extract_module_comment = (source_file: ts.SourceFile): string | undefined => {
	const full_text = source_file.getFullText();
	const leading_comments = ts.getLeadingCommentRanges(full_text, 0);
	if (!leading_comments?.length) return undefined;

	const first_comment = leading_comments[0];
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
export const extract_imports = (source_file: ts.SourceFile): string[] => {
	const imports: string[] = [];

	ts.forEachChild(source_file, (node) => {
		if (
			ts.isImportDeclaration(node) &&
			node.moduleSpecifier &&
			ts.isStringLiteral(node.moduleSpecifier)
		) {
			imports.push(node.moduleSpecifier.text);
		}
	});

	return imports;
};

/**
 * Create TypeScript program for analysis
 */
export const create_ts_program = (log: any): ts.Program | null => {
	const config_path = ts.findConfigFile('./', ts.sys.fileExists, 'tsconfig.json');
	if (!config_path) {
		log.warn('No tsconfig.json found');
		return null;
	}

	const config_file = ts.readConfigFile(config_path, ts.sys.readFile);
	const parsed_config = ts.parseJsonConfigFileContent(config_file.config, ts.sys, './');

	return ts.createProgram(parsed_config.fileNames, parsed_config.options);
};
