/**
 * TSDoc/JSDoc parsing helpers
 *
 * Pure JSDoc/TSDoc parsing utilities with no TypeScript Compiler API dependencies.
 * All functions are prefixed with `tsdoc_` for clarity.
 */

import ts from 'typescript';

/**
 * Parsed JSDoc/TSDoc comment with structured metadata
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
 * Parse JSDoc comment from a TypeScript node
 *
 * Extracts and parses all JSDoc tags including:
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
	const jsdoc_comments = ts.getJSDocCommentsAndTags(node);
	if (jsdoc_comments.length === 0) return undefined;

	let full_text = '';
	const params: Map<string, string> = new Map();
	let returns: string | undefined;
	const throws: Array<{type?: string; description: string}> = [];
	const examples: Array<string> = [];
	let deprecated_message: string | undefined;
	const see_also: Array<string> = [];
	let since: string | undefined;

	// Extract main comment text
	for (const comment of jsdoc_comments) {
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
 * Parse JSDoc comment from raw comment text (for Svelte files)
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
	const param_regex = /@param\s+(?:\{[^}]+\}\s+)?(\w+)\s+(?:-\s+)?(.+?)(?=\n@|\n\n|$)/gs;
	let match;
	while ((match = param_regex.exec(cleaned))) {
		const param_name = match[1];
		const param_desc = match[2]!.trim();
		if (param_name && param_desc) {
			params.set(param_name, param_desc);
		}
	}

	// Extract @returns or @return
	const returns_match = /@returns?\s+(?:\{[^}]+\}\s+)?(.+?)(?=\n@|\n\n|$)/s.exec(cleaned);
	if (returns_match) {
		returns = returns_match[1]!.trim();
	}

	// Extract @throws
	const throws_regex = /@throws\s+(?:\{(\w+)\}\s+)?(.+?)(?=\n@|\n\n|$)/gs;
	while ((match = throws_regex.exec(cleaned))) {
		const type = match[1];
		const description = match[2]!.trim();
		throws.push(type ? {type, description} : {description});
	}

	// Extract @example tags
	const example_regex = /@example\s+([\s\S]+?)(?=\n@|\n\n|$)/g;
	while ((match = example_regex.exec(cleaned))) {
		examples.push(match[1]!.trim());
	}

	// Extract @deprecated
	const deprecated_match = /@deprecated\s+(.+?)(?=\n@|\n\n|$)/s.exec(cleaned);
	if (deprecated_match) {
		deprecated_message = deprecated_match[1]!.trim();
	}

	// Extract @see tags
	const see_regex = /@see\s+(.+?)(?=\n@|$)/g;
	while ((match = see_regex.exec(cleaned))) {
		see_also.push(match[1]!.trim());
	}

	// Extract @since
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
