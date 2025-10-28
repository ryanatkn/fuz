/**
 * TSDoc/JSDoc parsing helpers.
 *
 * This module provides TWO complementary parsing functions for different use cases:
 *
 * ## 1. `tsdoc_parse()` - TypeScript Compiler API-based parsing
 *
 * **Use for**: Regular TypeScript files, TSX output from svelte2tsx transformations
 *
 * **How it works**: Uses TypeScript's built-in `ts.getJSDocCommentsAndTags()` API
 *
 * **Behavioral quirks** (due to TS Compiler API limitations):
 * - Preserves dash separator in @param descriptions: `@param x - desc` → `"- desc"`
 * - @throws tags have {Type} stripped by TS API, regex then extracts first word as type
 * - @see tags return unreliable values ("*" or undefined) from TS API
 *
 * ## 2. `tsdoc_parse_from_text()` - Regex-based parsing from raw text
 *
 * **Use for**: Raw Svelte component JSDoc (appears before `<script>` tag in .svelte files)
 *
 * **How it works**: Uses regex patterns to extract tags from raw comment text
 *
 * **Why needed**: svelte2tsx transforms Svelte → TSX, but component-level JSDoc comments
 * (appearing before `<script>`) don't survive the transformation in a way that's easily
 * parseable by the TypeScript Compiler API. We parse these from the original Svelte source.
 *
 * **Behavioral differences from tsdoc_parse()**:
 * - Strips dash separator from @param: `@param x - desc` → `"desc"`
 * - Correctly extracts @throws {Type} from raw text
 * - Handles @see tags reliably
 *
 * **Used by**: `svelte_extract_component_tsdoc()` in svelte_helpers.ts
 *
 * ## Summary: Why Both Functions?
 *
 * They parse different sources for different contexts:
 * - `tsdoc_parse()` → TypeScript nodes (props, functions in .ts/.tsx files)
 * - `tsdoc_parse_from_text()` → Raw Svelte source (component-level docs in .svelte files)
 *
 * The dual approach is intentional and necessary for comprehensive Svelte+TS documentation.
 *
 * All functions are prefixed with `tsdoc_` for clarity.
 */

import ts from 'typescript';

/**
 * Parsed JSDoc/TSDoc comment with structured metadata.
 */
export interface Tsdoc_Parsed_Comment {
	/** Full comment text (excluding comment markers) */
	full_text: string;
	/** First paragraph summary */
	summary: string;
	/** Parameter descriptions mapped by parameter name */
	params: Map<string, string>;
	/** Return value description from @ returns or @ return */
	returns?: string;
	/** Thrown errors from @ throws */
	throws: Array<{type?: string; description: string}>;
	/** Code examples from @ example */
	examples: Array<string>;
	/** Deprecation message from @ deprecated */
	deprecated_message?: string;
	/** Related references from @ see */
	see_also: Array<string>;
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
 */
export const tsdoc_parse = (
	node: ts.Node,
	_source_file: ts.SourceFile,
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
		} else if (tag_name === 'see' && tag_text) {
			see_also.push(tag_text.trim());
		} else if (tag_name === 'since' && tag_text) {
			since = tag_text.trim();
		}
	}

	full_text = full_text.trim();
	const summary = full_text.split('\n\n')[0]!.trim();

	return {
		full_text,
		summary,
		params,
		returns,
		throws,
		examples,
		deprecated_message,
		see_also,
		since,
	};
};

/**
 * Parse JSDoc comment from raw comment text (for Svelte files).
 *
 * Parses JSDoc tags from plain text without TypeScript Compiler API.
 * Useful for extracting documentation from Svelte component comments.
 */
export const tsdoc_parse_from_text = (text: string): Tsdoc_Parsed_Comment | undefined => {
	if (!text.trim()) return undefined;

	// Clean comment markers
	const cleaned = text
		.replace(/^\/\*\*/, '')
		.replace(/\*\/$/, '')
		.replace(/^\/\//, '')
		.split('\n')
		.map((line) => line.replace(/^\s*\*\s?/, '').trimEnd())
		.join('\n')
		.trim();

	if (!cleaned) return undefined;

	const params: Map<string, string> = new Map();
	let returns: string | undefined;
	const throws: Array<{type?: string; description: string}> = [];
	const examples: Array<string> = [];
	let deprecated_message: string | undefined;
	const see_also: Array<string> = [];
	let since: string | undefined;

	// Extract @param tags
	// Regex explanation:
	// - `@param\s+` - Match "@param" followed by whitespace
	// - `(?:\{(?:[^{}]|\{[^{}]*\})*\}\s+)?` - Optional type annotation with nested braces support
	//   - Matches {Type}, {Type|Other}, {Array<{key: Type}>}, etc.
	//   - Uses pattern: { + (non-braces OR nested-{...}) + }
	// - `(\w+)` - Capture parameter name
	// - `\s+(?:-\s+)?` - Whitespace, optional dash separator (stripped)
	// - `(.+?)` - Capture description (non-greedy)
	// - `(?=\n@|\n\n|$)` - Stop at: next tag, double newline, or end of string
	const param_regex = /@param\s+(?:\{(?:[^{}]|\{[^{}]*\})*\}\s+)?(\w+)\s+(?:-\s+)?(.+?)(?=\n@|\n\n|$)/gs;
	let match;
	while ((match = param_regex.exec(cleaned))) {
		const param_name = match[1];
		const param_desc = match[2]!.trim();
		if (param_name && param_desc) {
			params.set(param_name, param_desc);
		}
	}

	// Extract @returns or @return
	// Matches: @returns {Type} description OR @return description
	// Note: Type annotation uses simpler pattern since @returns typically has flat types
	const returns_match = /@returns?\s+(?:\{[^}]+\}\s+)?(.+?)(?=\n@|\n\n|$)/s.exec(cleaned);
	if (returns_match) {
		returns = returns_match[1]!.trim();
	}

	// Extract @throws
	// Matches: @throws {ErrorType} description OR @throws description
	// Captures error type separately if provided in braces
	const throws_regex = /@throws\s+(?:\{(\w+)\}\s+)?(.+?)(?=\n@|\n\n|$)/gs;
	while ((match = throws_regex.exec(cleaned))) {
		const type = match[1];
		const description = match[2]!.trim();
		throws.push(type ? {type, description} : {description});
	}

	// Extract @example tags
	// Uses [\s\S] to match across multiple lines (including newlines)
	const example_regex = /@example\s+([\s\S]+?)(?=\n@|\n\n|$)/g;
	while ((match = example_regex.exec(cleaned))) {
		examples.push(match[1]!.trim());
	}

	// Extract @deprecated
	// Captures deprecation message which may span multiple lines
	const deprecated_match = /@deprecated\s+(.+?)(?=\n@|\n\n|$)/s.exec(cleaned);
	if (deprecated_match) {
		deprecated_message = deprecated_match[1]!.trim();
	}

	// Extract @see tags
	// Simpler boundary: stops at next tag or end of line (not double newline)
	const see_regex = /@see\s+(.+?)(?=\n@|$)/g;
	while ((match = see_regex.exec(cleaned))) {
		see_also.push(match[1]!.trim());
	}

	// Extract @since
	// Captures version information (may include dates or ranges)
	const since_match = /@since\s+(.+?)(?=\n@|$)/s.exec(cleaned);
	if (since_match) {
		since = since_match[1]!.trim();
	}

	// Remove all @tags to get the main description
	const full_text = cleaned.replace(/@\w+\s+[\s\S]*$/m, '').trim();
	const summary = full_text.split('\n\n')[0]!.trim();

	return {
		full_text,
		summary,
		params,
		returns,
		throws,
		examples,
		deprecated_message,
		see_also,
		since,
	};
};
