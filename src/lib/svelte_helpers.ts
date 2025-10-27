/**
 * Svelte component analysis helpers using svelte2tsx.
 *
 * Provides utilities for extracting metadata from Svelte components:
 *
 * - component props with types and TSDoc
 * - component-level documentation
 * - type information from TypeScript
 *
 * All functions are prefixed with `svelte_` for clarity.
 */

import ts from 'typescript';

import type {Src_Module_Declaration, Component_Prop_Info} from './src_json.js';
import {tsdoc_parse, tsdoc_parse_from_text} from './tsdoc_helpers.js';

/**
 * Analyze a Svelte component from its TSX transformation.
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
		// Create a virtual source file from the TSX code
		const virtual_source = ts.createSourceFile(
			source_file.fileName + '.tsx',
			ts_code,
			ts.ScriptTarget.Latest,
			true,
			ts.ScriptKind.TSX,
		);

		// Extract component-level TSDoc from original source
		const component_tsdoc = svelte_extract_component_tsdoc(source_file);
		if (component_tsdoc) {
			result.doc_comment = component_tsdoc.full_text;
			result.summary = component_tsdoc.summary;
			result.examples = component_tsdoc.examples;
			result.deprecated_message = component_tsdoc.deprecated_message;
			result.see_also = component_tsdoc.see_also;
		}

		// Extract props from Props interface
		const props = svelte_extract_props_from_tsx(virtual_source, checker);
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
 * Extract component-level TSDoc comment from Svelte source.
 */
const svelte_extract_component_tsdoc = (
	source_file: ts.SourceFile,
): ReturnType<typeof tsdoc_parse_from_text> => {
	// Look for TSDoc comments before <script> tag or at the start of the file
	const full_text = source_file.getFullText();
	const leading_comments = ts.getLeadingCommentRanges(full_text, 0);
	if (!leading_comments?.length) return undefined;

	let doc_text = '';

	for (const comment of leading_comments) {
		const text = full_text.substring(comment.pos, comment.end);
		doc_text += text + '\n';
	}

	return tsdoc_parse_from_text(doc_text.trim());
};

/**
 * Extract props from Props interface in TSX.
 */
const svelte_extract_props_from_tsx = (
	virtual_source: ts.SourceFile,
	checker: ts.TypeChecker,
): Array<Component_Prop_Info> => {
	const props: Array<Component_Prop_Info> = [];

	// Find the Props interface
	ts.forEachChild(virtual_source, (node) => {
		if (ts.isInterfaceDeclaration(node) && node.name.text === 'Props') {
			// Iterate through interface members
			for (const member of node.members) {
				if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
					const prop_name = member.name.text;
					const optional = !!member.questionToken;

					// Get type string
					let type_string = 'any';
					if (member.type) {
						type_string = member.type.getText(virtual_source);
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
					const tsdoc = tsdoc_parse(member, virtual_source);
					if (tsdoc) {
						description = tsdoc.summary || tsdoc.full_text;
					}

					// Extract default value (if available in TSDoc or initializer)
					let default_value: string | undefined;
					const default_match = description?.match(/@default\s+(.+)/);
					if (default_match) {
						default_value = default_match[1]!.trim();
					}

					props.push({
						name: prop_name,
						type: type_string,
						optional,
						description,
						default_value,
					});
				}
			}
		}
	});

	return props;
};
