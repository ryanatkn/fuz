/**
 * TSDoc/JSDoc parsing helpers using the TypeScript Compiler API.
 *
 * Provides `tsdoc_parse()` for extracting JSDoc/TSDoc from TypeScript nodes.
 *
 * ## How it works
 *
 * Uses TypeScript's built-in `ts.getJSDocCommentsAndTags()` API to extract
 * structured documentation from AST nodes.
 *
 * ## Behavioral notes (due to TS Compiler API)
 *
 * - Preserves dash separator in @param descriptions: `@param x - desc` → `"- desc"`
 * - @throws tags have {Type} stripped by TS API; fallback regex extracts first word as error type
 * - @see tags strip URL protocols from comment text; we use `getText()` to get the full source
 *
 * ## Usage
 *
 * Works on all TypeScript nodes, including:
 * - Regular TypeScript files (.ts, .tsx)
 * - Transformed output from svelte2tsx
 * - Any node with JSDoc comments in the AST
 *
 * All functions are prefixed with `tsdoc_` for clarity.
 */

import ts from 'typescript';

/**
 * Parsed JSDoc/TSDoc comment with structured metadata.
 */
export interface Tsdoc_Parsed_Comment {
	/** Comment text (excluding comment markers) */
	text: string;
	/** Parameter descriptions mapped by parameter name */
	params: Map<string, string>;
	/** Return value description from @ returns or @ return */
	returns?: string;
	/** Thrown errors from @ throws */
	throws?: Array<{type?: string; description: string}>;
	/** Code examples from @ example */
	examples?: Array<string>;
	/** Deprecation message from @ deprecated */
	deprecated_message?: string;
	/** Related references from @ see */
	see_also?: Array<string>;
	/** Version information from @ since */
	since?: string;
}

/**
 * Parse JSDoc comment from a TypeScript node.
 *
 * Extracts and parses all JSDoc tags including:
 *
 * - @ param - parameter descriptions
 * - @ returns/@ return - return value description
 * - @ throws - error documentation
 * - @ example - code examples
 * - @ deprecated - deprecation warnings
 * - @ see - related references
 * - @ since - version information
 *
 * @param node - The TypeScript node to extract JSDoc from
 * @param source_file - Source file (used for extracting full @see tag text)
 */
export const tsdoc_parse = (
	node: ts.Node,
	source_file: ts.SourceFile,
): Tsdoc_Parsed_Comment | undefined => {
	const tsdoc_comments = ts.getJSDocCommentsAndTags(node);
	if (tsdoc_comments.length === 0) return undefined;

	let full_text = '';
	const params: Map<string, string> = new Map();
	let returns: string | undefined;
	const throws: Array<{type?: string; description: string}> = [];
	const examples: Array<string> = [];
	let deprecated_message: string | undefined;
	const see_also: Array<string> = [];
	let since: string | undefined;

	// Extract main comment text
	for (const comment of tsdoc_comments) {
		if (ts.isJSDoc(comment) && comment.comment) {
			const text =
				typeof comment.comment === 'string'
					? comment.comment
					: comment.comment.map((c) => c.text).join('');
			full_text += text + '\n';
		}
	}

	// Extract tags
	const tags = ts.getJSDocTags(node);
	for (const tag of tags) {
		const tag_text =
			typeof tag.comment === 'string' ? tag.comment : tag.comment?.map((c) => c.text).join('');
		const tag_name = tag.tagName.text;

		if (tag_name === 'param' && ts.isJSDocParameterTag(tag)) {
			// Extract parameter name and description
			const param_name = ts.isIdentifier(tag.name) ? tag.name.text : tag.name.getText();
			if (param_name && tag_text) {
				params.set(param_name, tag_text.trim());
			}
		} else if ((tag_name === 'returns' || tag_name === 'return') && tag_text) {
			returns = tag_text.trim();
		} else if (tag_name === 'throws' && tag_text) {
			// Try to extract error type and description
			const match = /^\{?(\w+)\}?\s+(.+)/.exec(tag_text);
			if (match) {
				throws.push({type: match[1], description: match[2]!.trim()});
			} else {
				throws.push({description: tag_text.trim()});
			}
		} else if (tag_name === 'example' && tag_text) {
			examples.push(tag_text.trim());
		} else if (tag_name === 'deprecated' && tag_text) {
			deprecated_message = tag_text.trim();
		} else if (tag_name === 'see') {
			// The TS API strips 'https' from URLs in @see tags, so get full text from source
			const full_tag_text = tag.getText(source_file);
			// Extract content after @see, handling JSDoc formatting artifacts
			let see_content = full_tag_text
				.replace(/^@see\s+/, '') // remove @see prefix
				.replace(/\n\s*\*\s*/g, ' ') // remove JSDoc line continuations
				.trim();

			// Parse {@link} syntax to extract clean URL/reference
			// {@link URL} → URL
			// {@link URL|Display Text} → URL
			const link_match = /^\{@link\s+([^}|]+?)(?:\|([^}]+))?\s*\}$/.exec(see_content);
			if (link_match) {
				// Extract the URL/reference (ignore display text for data purity)
				see_content = link_match[1]!.trim();
			}

			if (see_content) {
				see_also.push(see_content);
			}
		} else if (tag_name === 'since' && tag_text) {
			since = tag_text.trim();
		}
	}

	full_text = full_text.trim();

	return {
		text: full_text,
		params,
		returns,
		...(throws.length && {throws}),
		...(examples.length && {examples}),
		deprecated_message,
		...(see_also.length && {see_also}),
		since,
	};
};

/**
 * Apply parsed TSDoc metadata to an identifier.
 *
 * Consolidates the common pattern of assigning TSDoc fields to identifiers,
 * with conditional assignment for array fields (only if non-empty).
 *
 * @param identifier - The identifier to update
 * @param tsdoc - The parsed TSDoc comment (if available)
 */
export const tsdoc_apply_to_declaration = (
	identifier: any, // Using any to avoid circular import with src_json.ts
	tsdoc: Tsdoc_Parsed_Comment | undefined,
): void => {
	if (!tsdoc) return;

	identifier.doc_comment = tsdoc.text;
	identifier.deprecated_message = tsdoc.deprecated_message;

	// Only assign arrays if they have content
	if (tsdoc.examples?.length) {
		identifier.examples = tsdoc.examples;
	}
	if (tsdoc.see_also?.length) {
		identifier.see_also = tsdoc.see_also;
	}
	if (tsdoc.throws?.length) {
		identifier.throws = tsdoc.throws;
	}
	if (tsdoc.since) {
		identifier.since = tsdoc.since;
	}
};
