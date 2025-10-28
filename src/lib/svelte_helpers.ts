/**
 * Svelte component analysis helpers.
 *
 * Extracts metadata from Svelte components using svelte2tsx transformations:
 *
 * - Component props with types and JSDoc
 * - Component-level documentation
 * - Type information
 *
 * Uses the TypeScript Compiler API to parse the transformed output from svelte2tsx.
 *
 * All functions are prefixed with `svelte_` for clarity.
 */

import ts from 'typescript';

import type {Src_Module_Declaration, Component_Prop_Info} from './src_json.js';
import {tsdoc_parse} from './tsdoc_helpers.js';

/**
 * Analyze a Svelte component from its svelte2tsx transformation.
 */
export const svelte_analyze_component = (
	ts_code: string,
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
	component_name: string,
): Src_Module_Declaration => {
	const result: Src_Module_Declaration = {
		name: component_name,
		kind: 'component',
	};

	try {
		// Create a virtual source file from the svelte2tsx output
		const virtual_source = ts.createSourceFile(
			source_file.fileName + '.tsx',
			ts_code,
			ts.ScriptTarget.Latest,
			true,
			ts.ScriptKind.TSX,
		);

		// Extract component-level TSDoc from svelte2tsx transformed output
		const component_tsdoc = svelte_extract_component_tsdoc(virtual_source);
		if (component_tsdoc) {
			result.doc_comment = component_tsdoc.full_text;
			result.summary = component_tsdoc.summary;
			result.examples = component_tsdoc.examples;
			result.deprecated_message = component_tsdoc.deprecated_message;
			result.see_also = component_tsdoc.see_also;
		}

		// Extract props from svelte2tsx transformed output
		const props = svelte_extract_props(virtual_source, checker);
		if (props.length > 0) {
			result.props = props;
		}

		// Extract source location from original file
		const start_pos = source_file.getLineAndCharacterOfPosition(0);
		const end_pos = source_file.getLineAndCharacterOfPosition(source_file.end);
		result.source_location = {
			line: start_pos.line + 1,
			column: start_pos.character,
			end_line: end_pos.line + 1,
			end_column: end_pos.character,
		};

		result.exported = true; // Components are always exported
	} catch (err) {
		// If analysis fails, return basic component info
		// eslint-disable-next-line no-console
		console.error(`Error analyzing Svelte component ${component_name}:`, err);
	}

	return result;
};

/**
 * Extract component-level TSDoc comment from svelte2tsx transformed output.
 *
 * svelte2tsx places component-level JSDoc inside the $$render() function,
 * attached to a variable statement (usually before the props destructuring).
 * This function searches the AST recursively to find it.
 */
const svelte_extract_component_tsdoc = (
	source_file: ts.SourceFile,
): ReturnType<typeof tsdoc_parse> => {
	let found_tsdoc: ReturnType<typeof tsdoc_parse> = undefined;

	// Recursively search for component-level JSDoc
	function visit(node: ts.Node) {
		if (found_tsdoc) return; // Already found, stop searching

		// Skip PropertySignature nodes - those are prop-level JSDoc, not component-level
		if (ts.isPropertySignature(node)) {
			return; // Don't recurse into property signatures
		}

		// Check for JSDoc on VariableStatement or VariableDeclaration
		// Component-level JSDoc is attached to these node types
		if (ts.isVariableStatement(node) || ts.isVariableDeclaration(node)) {
			const tsdoc = tsdoc_parse(node, source_file);
			if (tsdoc) {
				found_tsdoc = tsdoc;
				return;
			}
		}

		// Continue searching child nodes
		ts.forEachChild(node, visit);
	}

	visit(source_file);
	return found_tsdoc;
};

/**
 * Helper to extract prop info from a property signature member.
 */
const extract_prop_from_member = (
	member: ts.PropertySignature,
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
): Component_Prop_Info | undefined => {
	if (!ts.isIdentifier(member.name)) return undefined;

	const prop_name = member.name.text;
	const optional = !!member.questionToken;

	// Get type string
	let type_string = 'any';
	if (member.type) {
		type_string = member.type.getText(source_file);
	} else {
		// Try to get type from type checker
		try {
			const prop_type = checker.getTypeAtLocation(member);
			type_string = checker.typeToString(prop_type);
		} catch {
			// Fallback to 'any'
		}
	}

	// Extract TSDoc description
	let description: string | undefined;
	const tsdoc = tsdoc_parse(member, source_file);
	if (tsdoc) {
		description = tsdoc.summary || tsdoc.full_text;
	}

	// Extract default value (if available in TSDoc or initializer)
	let default_value: string | undefined;
	const default_match = description?.match(/@default\s+(.+)/);
	if (default_match) {
		default_value = default_match[1]!.trim();
	}

	return {
		name: prop_name,
		type: type_string,
		optional,
		description,
		default_value,
	};
};

/**
 * Extract props from svelte2tsx transformed output.
 *
 * svelte2tsx generates a `$$ComponentProps` type alias containing the component props.
 * This function extracts prop metadata from that type.
 */
const svelte_extract_props = (
	virtual_source: ts.SourceFile,
	checker: ts.TypeChecker,
): Array<Component_Prop_Info> => {
	const props: Array<Component_Prop_Info> = [];

	// Look for $$ComponentProps type alias or Props interface
	ts.forEachChild(virtual_source, (node) => {
		// Check for type alias ($$ComponentProps)
		if (ts.isTypeAliasDeclaration(node) && node.name.text === '$$ComponentProps') {
			if (ts.isTypeLiteralNode(node.type)) {
				for (const member of node.type.members) {
					if (ts.isPropertySignature(member)) {
						const prop_info = extract_prop_from_member(member, virtual_source, checker);
						if (prop_info) props.push(prop_info);
					}
				}
			}
		}
		// Also check for Props interface (fallback/older format)
		else if (ts.isInterfaceDeclaration(node) && node.name.text === 'Props') {
			for (const member of node.members) {
				if (ts.isPropertySignature(member)) {
					const prop_info = extract_prop_from_member(member, virtual_source, checker);
					if (prop_info) props.push(prop_info);
				}
			}
		}
	});

	return props;
};
