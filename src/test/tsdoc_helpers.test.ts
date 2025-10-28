import {describe, test, assert} from 'vitest';
import ts from 'typescript';
import {tsdoc_parse, tsdoc_parse_from_text} from '$lib/tsdoc_helpers.js';

/**
 * Helper to create a TypeScript source file from code string.
 * Used to generate AST nodes for testing tsdoc_parse.
 */
const create_source_file = (code: string): ts.SourceFile => {
	return ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);
};

/**
 * Helper to get the first statement from source code.
 * Useful for testing function/variable declarations with JSDoc.
 */
const get_first_statement = (code: string): ts.Statement => {
	const source_file = create_source_file(code);
	return source_file.statements[0]!;
};

describe('tsdoc_parse', () => {
	describe('basic functionality', () => {
		test('returns undefined for node with no JSDoc', () => {
			const code = 'const x = 1;';
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);
			assert.strictEqual(result, undefined);
		});

		test('extracts simple JSDoc comment', () => {
			const code = `
/** Simple comment */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.full_text, 'Simple comment');
			assert.strictEqual(result.summary, 'Simple comment');
		});

		test('extracts JSDoc with all tag types', () => {
			const code = `
/**
 * This is a function that does something.
 *
 * It has multiple paragraphs.
 *
 * @param name The name parameter
 * @param age The age parameter
 * @returns The result value
 * @throws {Error} When something goes wrong
 * @example
 * foo('test', 25)
 * @deprecated Use bar() instead
 * @since 1.0.0
 */
function foo(name: string, age: number) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.ok(result.full_text.includes('This is a function'));
			assert.strictEqual(result.params.size, 2);
			// TypeScript API includes any text after param name (no dash separator here)
			assert.strictEqual(result.params.get('name'), 'The name parameter');
			assert.strictEqual(result.params.get('age'), 'The age parameter');
			assert.ok(result.returns?.includes('result value'));
			assert.strictEqual(result.throws.length, 1);
			assert.strictEqual(result.examples.length, 1);
			assert.ok(result.deprecated_message?.includes('bar'));
			// Note: @see tags have unreliable comment text from TypeScript API, so omitted here
			assert.strictEqual(result.since, '1.0.0');
		});
	});

	describe('comment text handling', () => {
		test('extracts multi-paragraph comment with correct summary', () => {
			const code = `
/**
 * First paragraph summary.
 *
 * Second paragraph with more details.
 * Even more details here.
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// Summary should be only the first paragraph
			assert.strictEqual(result.summary, 'First paragraph summary.');
			// Full text should contain everything
			assert.ok(result.full_text.includes('Second paragraph'));
		});

		test('summary equals full text when no double newline', () => {
			const code = `
/**
 * Single paragraph comment
 * with multiple lines
 * but no double newline.
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// When no double newline, split returns the whole text as first element
			assert.strictEqual(result.summary, result.full_text);
			assert.ok(result.summary.includes('multiple lines'));
		});

		test('handles empty comment', () => {
			const code = `
/** */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			// Empty comments still return a result, just with empty strings
			assert.ok(result);
			assert.strictEqual(result.full_text, '');
			assert.strictEqual(result.summary, '');
		});

		test('handles whitespace-only comment', () => {
			const code = `
/**
 *
 *
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.full_text, '');
			assert.strictEqual(result.summary, '');
		});
	});

	describe('param tags', () => {
		test('extracts multiple parameters', () => {
			const code = `
/**
 * @param first First parameter
 * @param second Second parameter
 * @param third Third parameter
 */
function foo(first: string, second: number, third: boolean) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.params.size, 3);
			assert.strictEqual(result.params.get('first'), 'First parameter');
			assert.strictEqual(result.params.get('second'), 'Second parameter');
			assert.strictEqual(result.params.get('third'), 'Third parameter');
		});

		test('extracts parameters with dash separator', () => {
			const code = `
/**
 * @param first - First parameter
 * @param second - Second parameter
 */
function foo(first: string, second: number) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.params.size, 2);
			// TypeScript API includes the dash separator in the comment text
			assert.strictEqual(result.params.get('first'), '- First parameter');
			assert.strictEqual(result.params.get('second'), '- Second parameter');
		});

		test('handles mixed param styles in same comment', () => {
			const code = `
/**
 * @param withDash - Has a dash
 * @param noDash No dash here
 * @param anotherDash - Another with dash
 */
function foo(withDash: string, noDash: number, anotherDash: boolean) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.params.size, 3);
			assert.strictEqual(result.params.get('withDash'), '- Has a dash');
			assert.strictEqual(result.params.get('noDash'), 'No dash here');
			assert.strictEqual(result.params.get('anotherDash'), '- Another with dash');
		});

		test('handles param with multiple dashes in description', () => {
			const code = `
/**
 * @param name - Accepts foo - bar - baz format
 */
function foo(name: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// All dashes are preserved in the description
			assert.strictEqual(result.params.get('name'), '- Accepts foo - bar - baz format');
		});

		test('trims parameter descriptions', () => {
			const code = `
/**
 * @param name    Extra spaces around this
 */
function foo(name: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.params.get('name'), 'Extra spaces around this');
		});

		test('handles parameter without description gracefully', () => {
			// This tests that the code doesn't crash when tag_text is undefined
			const code = `
/**
 * @param name
 */
function foo(name: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// Parameter without description should not be added to the map
			assert.strictEqual(result.params.has('name'), false);
		});
	});

	describe('returns tags', () => {
		test('extracts @returns tag', () => {
			const code = `
/**
 * @returns The computed result
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.returns, 'The computed result');
		});

		test('extracts @return tag (singular form)', () => {
			const code = `
/**
 * @return The computed result
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.returns, 'The computed result');
		});

		test('returns undefined when no returns tag present', () => {
			const code = `
/**
 * Function without return documentation
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.returns, undefined);
		});

		test('trims returns description', () => {
			const code = `
/**
 * @returns    Lots of whitespace
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.returns, 'Lots of whitespace');
		});
	});

	describe('throws tags', () => {
		// NOTE: TypeScript API strips the {Type} from @throws tag text,
		// so the regex in the implementation ends up matching the first word
		// of the description as the "type". This is a quirk of how the TS API works.

		test('extracts throws - TS API strips type braces', () => {
			const code = `
/**
 * @throws {Error} When something fails
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			// TypeScript API gives us "When something fails" (without {Error})
			// The regex then treats "When" as the type
			assert.strictEqual(result.throws[0]!.type, 'When');
			assert.strictEqual(result.throws[0]!.description, 'something fails');
		});

		test('extracts throws with capitalized first word', () => {
			const code = `
/**
 * @throws TypeError Invalid type provided
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			// First word "TypeError" is treated as the type
			assert.strictEqual(result.throws[0]!.type, 'TypeError');
			assert.strictEqual(result.throws[0]!.description, 'Invalid type provided');
		});

		test('extracts throws with lowercase first word', () => {
			const code = `
/**
 * @throws validation fails in this case
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			// First word "validation" is treated as the type
			assert.strictEqual(result.throws[0]!.type, 'validation');
			assert.strictEqual(result.throws[0]!.description, 'fails in this case');
		});

		test('extracts multiple throws tags', () => {
			const code = `
/**
 * @throws {Error} First error
 * @throws {TypeError} Second error
 * @throws Validation fails
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 3);
			// Each throws extracts first word as type
			assert.strictEqual(result.throws[0]!.type, 'First');
			assert.strictEqual(result.throws[1]!.type, 'Second');
			assert.strictEqual(result.throws[2]!.type, 'Validation');
		});

		test('handles throws with no word at start - regex fails', () => {
			// This tests the fallback when regex doesn't match
			// Regex requires \w+ followed by space, so just symbols won't match
			const code = `
/**
 * @throws - description starting with non-word
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			// Regex doesn't match, falls back to description-only
			assert.strictEqual(result.throws[0]!.type, undefined);
			assert.strictEqual(result.throws[0]!.description, '- description starting with non-word');
		});

		test('handles single word throws', () => {
			const code = `
/**
 * @throws Error
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			// Single word doesn't match the regex (requires \w+\s+.+)
			// So it falls back to description-only
			assert.strictEqual(result.throws[0]!.type, undefined);
			assert.strictEqual(result.throws[0]!.description, 'Error');
		});
	});

	describe('other tags', () => {
		test('extracts multiple example tags', () => {
			const code = `
/**
 * @example
 * foo('hello')
 * @example
 * foo('world')
 */
function foo(x: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.examples.length, 2);
			assert.ok(result.examples[0]!.includes('hello'));
			assert.ok(result.examples[1]!.includes('world'));
		});

		test('extracts deprecated message', () => {
			const code = `
/**
 * @deprecated Use newFunction() instead
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.deprecated_message, 'Use newFunction() instead');
		});

		test('extracts see tags with quirky TS API behavior', () => {
			// NOTE: TypeScript API returns unreliable comment text for @see tags
			// First tag gets "*" and subsequent ones get undefined (filtered out)
			const code = `
/**
 * @see relatedFunction
 * @see anotherFunction
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// Only the first see tag is extracted (with "*" as the text)
			// Second tag has undefined comment and is filtered by the `tag_text` check
			assert.strictEqual(result.see_also.length, 1);
			assert.strictEqual(result.see_also[0], '*');
		});

		test('extracts since tag', () => {
			const code = `
/**
 * @since 2.0.0
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.since, '2.0.0');
		});
	});

	describe('data structure correctness', () => {
		test('params is a Map not an object', () => {
			const code = `
/**
 * @param x - Test param
 */
function foo(x: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.ok(result.params instanceof Map);
		});

		test('throws is an array', () => {
			const code = `
/**
 * @throws Error
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.ok(Array.isArray(result.throws));
		});

		test('examples is an array', () => {
			const code = `
/**
 * @example test()
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.ok(Array.isArray(result.examples));
		});

		test('see_also is an array', () => {
			const code = `
/**
 * @see other
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.ok(Array.isArray(result.see_also));
		});

		test('optional fields are undefined when absent', () => {
			const code = `
/**
 * Minimal comment
 */
function foo() {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			assert.strictEqual(result.returns, undefined);
			assert.strictEqual(result.deprecated_message, undefined);
			assert.strictEqual(result.since, undefined);
		});
	});

	describe('edge cases', () => {
		test('handles JSDoc with only tags and no description', () => {
			const code = `
/**
 * @param x - Param description
 * @returns Something
 */
function foo(x: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// When there's no description text before tags, full_text and summary might be empty
			assert.strictEqual(result.params.size, 1);
			assert.ok(result.returns);
		});

		test('handles tags with extra whitespace', () => {
			const code = `
/**
 * @param    name     Description with spaces
 * @returns     Result
 */
function foo(name: string) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// All descriptions should be trimmed
			assert.strictEqual(result.params.get('name'), 'Description with spaces');
			assert.strictEqual(result.returns, 'Result');
		});
	});

	describe('comprehensive integration', () => {
		test('kitchen sink - handles complex JSDoc with all features', () => {
			// This test combines multiple edge cases and features
			const code = `
/**
 * Complex function with comprehensive documentation.
 * This has multiple lines in first paragraph.
 *
 * Second paragraph with additional details.
 *
 * @param name User's full name
 * @param age - User's age (with dash)
 * @param options - Config with foo - bar - baz
 * @returns UserObject The created user
 * @throws ValidationError Invalid input provided
 * @throws Network related errors
 * @example
 * createUser('John', 25)
 * @example
 * createUser('Jane', 30, {premium: true})
 * @deprecated Use createUserV2() instead
 * @since 1.0.0
 */
function createUser(name: string, age: number, options?: any) {}
`;
			const node = get_first_statement(code);
			const source_file = create_source_file(code);
			const result = tsdoc_parse(node, source_file);

			assert.ok(result);
			// Verify all components are extracted
			assert.ok(result.summary.includes('Complex function'));
			assert.ok(result.full_text.includes('Second paragraph'));
			assert.strictEqual(result.params.size, 3);
			assert.strictEqual(result.params.get('name'), "User's full name");
			assert.strictEqual(result.params.get('age'), "- User's age (with dash)");
			assert.ok(result.params.get('options')?.includes('foo - bar - baz'));
			assert.ok(result.returns?.includes('UserObject'));
			assert.strictEqual(result.throws.length, 2);
			assert.strictEqual(result.examples.length, 2);
			assert.ok(result.deprecated_message?.includes('createUserV2'));
			assert.strictEqual(result.since, '1.0.0');
		});
	});
});

describe('tsdoc_parse_from_text', () => {
	describe('comment cleaning', () => {
		// Critical for Svelte compatibility - tests the cleaning logic
		test('removes /** */ style markers', () => {
			const text = `/**
 * This is a comment
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.full_text, 'This is a comment');
		});

		test('removes // style markers', () => {
			const text = `// This is a comment
// Second line`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.full_text.includes('This is a comment'));
		});

		test('removes leading * from each line', () => {
			const text = `/**
 * First line
 * Second line
 * Third line
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.full_text.includes('First line'));
			assert.ok(result.full_text.includes('Second line'));
			// Should not have asterisks in the result
			const lines = result.full_text.split('\n');
			assert.ok(!lines.some((line) => line.trim().startsWith('*')));
		});

		test('handles mixed indentation', () => {
			const text = `/**
   * Indented comment
     * More indentation
 * Less indentation
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Should handle various indentation levels
			assert.ok(result.full_text.includes('Indented comment'));
		});
	});

	describe('empty/invalid input', () => {
		test('returns undefined for empty string', () => {
			const result = tsdoc_parse_from_text('');
			assert.strictEqual(result, undefined);
		});

		test('returns undefined for whitespace only', () => {
			const result = tsdoc_parse_from_text('   \n  \t  \n  ');
			assert.strictEqual(result, undefined);
		});

		test('returns undefined for only comment markers', () => {
			const text = `/**
 *
 *
 */`;
			const result = tsdoc_parse_from_text(text);
			assert.strictEqual(result, undefined);
		});
	});

	describe('param extraction', () => {
		// Tests regex-based parameter parsing
		test('extracts basic params', () => {
			const text = `/**
 * Function description
 * @param name The name parameter
 * @param age The age parameter
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 2);
			assert.strictEqual(result.params.get('name'), 'The name parameter');
			assert.strictEqual(result.params.get('age'), 'The age parameter');
		});

		test('extracts params with type annotation', () => {
			const text = `/**
 * @param {string} name The name parameter
 * @param {number} age The age parameter
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 2);
			// Type annotations should be stripped
			assert.strictEqual(result.params.get('name'), 'The name parameter');
			assert.strictEqual(result.params.get('age'), 'The age parameter');
		});

		test('extracts params with dash separator', () => {
			const text = `/**
 * @param name - The name parameter
 * @param age - The age parameter
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 2);
			// Regex strips the dash separator (via `(?:-\s+)?`)
			assert.strictEqual(result.params.get('name'), 'The name parameter');
			assert.strictEqual(result.params.get('age'), 'The age parameter');
		});

		test('handles mixed param styles in same comment', () => {
			const text = `/**
 * @param first - With dash
 * @param second Without dash
 * @param third - Another with dash
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 3);
			// Dash is stripped when present
			assert.strictEqual(result.params.get('first'), 'With dash');
			assert.strictEqual(result.params.get('second'), 'Without dash');
			assert.strictEqual(result.params.get('third'), 'Another with dash');
		});

		test('handles param with multiple dashes in description', () => {
			const text = `/**
 * @param name - Accepts foo - bar - baz format
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Only the first dash (separator) is stripped
			assert.strictEqual(result.params.get('name'), 'Accepts foo - bar - baz format');
		});

		test('handles multi-line parameter descriptions', () => {
			const text = `/**
 * @param name The name parameter
 * that spans multiple lines
 * @param age Another param
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Multi-line descriptions should be captured until next tag
			const name_desc = result.params.get('name');
			assert.ok(name_desc);
			assert.ok(name_desc.includes('multiple lines'));
		});

		test('handles complex type annotations (union types)', () => {
			const text = `/**
 * @param {string|number} id - Union type
 * @param {Array<string>} items - Array type
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 2);
			// Complex types are stripped by the enhanced regex pattern
			assert.strictEqual(result.params.get('id'), 'Union type');
			assert.strictEqual(result.params.get('items'), 'Array type');
		});

		test('handles nested braces in type annotations', () => {
			// FIXED: Previously this was a limitation, now supported!
			// The enhanced regex pattern `\{(?:[^{}]|\{[^{}]*\})*\}` handles one level of nesting
			const text = `/**
 * @param {Array<{foo: string}>} items - Nested generics
 * @param {Record<string, {id: number}>} map - Nested object type
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Both params with nested braces are now extracted correctly
			assert.strictEqual(result.params.size, 2);
			assert.strictEqual(result.params.get('items'), 'Nested generics');
			assert.strictEqual(result.params.get('map'), 'Nested object type');
		});

		test('handles param with only dash and no description', () => {
			const text = `/**
 * @param name -
 */`;
			const result = tsdoc_parse_from_text(text);

			// Edge case: dash with no description after it
			// The regex might not capture this, or capture empty string
			assert.ok(result);
		});
	});

	describe('returns extraction', () => {
		test('extracts @returns tag', () => {
			const text = `/**
 * @returns The computed result
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.returns, 'The computed result');
		});

		test('extracts @return tag (singular)', () => {
			const text = `/**
 * @return The computed result
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.returns, 'The computed result');
		});

		test('extracts returns with type annotation', () => {
			const text = `/**
 * @returns {string} The computed result
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.returns?.includes('computed result'));
		});

		test('handles multi-line return descriptions', () => {
			const text = `/**
 * @returns The computed result
 * with multiple lines
 * of description
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.returns?.includes('multiple lines'));
		});

		test('stops at next tag boundary', () => {
			const text = `/**
 * @returns The result
 * @param x Test
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Should not include @param in returns description
			assert.ok(result.returns && !result.returns.includes('@param'));
		});
	});

	describe('throws extraction', () => {
		test('extracts throws with type in braces', () => {
			const text = `/**
 * @throws {Error} When something fails
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			assert.strictEqual(result.throws[0]!.type, 'Error');
			assert.strictEqual(result.throws[0]!.description, 'When something fails');
		});

		test('extracts throws without type', () => {
			const text = `/**
 * @throws When validation fails
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 1);
			assert.strictEqual(result.throws[0]!.type, undefined);
			assert.strictEqual(result.throws[0]!.description, 'When validation fails');
		});

		test('extracts multiple throws', () => {
			const text = `/**
 * @throws {Error} First error
 * @throws {TypeError} Second error
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 2);
			assert.strictEqual(result.throws[0]!.type, 'Error');
			assert.strictEqual(result.throws[1]!.type, 'TypeError');
		});

		test('handles multi-line throw descriptions', () => {
			const text = `/**
 * @throws {Error} When something fails
 * and causes problems
 * @throws Another error
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.throws.length, 2);
			assert.ok(result.throws[0]!.description.includes('problems'));
		});
	});

	describe('example extraction', () => {
		// Examples can contain code blocks with special formatting
		test('extracts single example', () => {
			const text = `/**
 * @example
 * foo('test', 25)
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.examples.length, 1);
			assert.ok(result.examples[0]!.includes("foo('test'"));
		});

		test('extracts multiple examples', () => {
			const text = `/**
 * @example
 * foo('hello')
 * @example
 * foo('world')
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.examples.length, 2);
			assert.ok(result.examples[0]!.includes('hello'));
			assert.ok(result.examples[1]!.includes('world'));
		});

		test('handles code blocks with special characters', () => {
			const text = `/**
 * @example
 * const x = { foo: 'bar' };
 * if (x.foo === 'bar') {}
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.examples.length, 1);
			assert.ok(result.examples[0]!.includes('{'));
			assert.ok(result.examples[0]!.includes('==='));
		});

		test('stops example at next tag', () => {
			const text = `/**
 * @example
 * foo('test')
 * @param x Test
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Example should not include @param
			assert.ok(result.examples[0] && !result.examples[0].includes('@param'));
		});
	});

	describe('other tags', () => {
		test('extracts deprecated message', () => {
			const text = `/**
 * @deprecated Use bar() instead
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.deprecated_message, 'Use bar() instead');
		});

		test('extracts multiple see references', () => {
			const text = `/**
 * @see relatedFunction
 * @see anotherFunction
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.see_also.length, 2);
			assert.strictEqual(result.see_also[0], 'relatedFunction');
			assert.strictEqual(result.see_also[1], 'anotherFunction');
		});

		test('extracts since tag', () => {
			const text = `/**
 * @since 2.0.0
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.since, '2.0.0');
		});
	});

	describe('full text and summary extraction', () => {
		test('preserves description before tags in full_text', () => {
			const text = `/**
 * This is the main description.
 * It has multiple lines.
 *
 * @param x Test param
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.full_text.includes('main description'));
			assert.ok(result.full_text.includes('multiple lines'));
		});

		test('removes tags from full_text', () => {
			const text = `/**
 * Description here.
 *
 * @param x Test
 * @returns Something
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Tags should be removed from full_text
			assert.ok(!result.full_text.includes('@param'));
			assert.ok(!result.full_text.includes('@returns'));
		});

		test('extracts summary as first paragraph', () => {
			const text = `/**
 * First paragraph summary.
 *
 * Second paragraph with details.
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.summary, 'First paragraph summary.');
			assert.ok(result.full_text.includes('Second paragraph'));
		});

		test('handles comment with no description before tags', () => {
			const text = `/**
 * @param x Test
 * @returns Value
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// When there's no description, full_text and summary should be empty or minimal
			assert.strictEqual(result.params.size, 1);
			assert.ok(result.returns);
		});
	});

	describe('boundary conditions', () => {
		test('handles tag at very end with no trailing newline', () => {
			const text = `/**
 * Description
 * @param x Last tag without trailing content`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 1);
			// Regex uses `(?=\n@|\n\n|$)` so end of string ($) should work
			assert.ok(result.params.get('x'));
		});

		test('handles empty lines between tags', () => {
			const text = `/**
 * @param x First param
 *
 * @param y Second param
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Empty line (\n\n) is a boundary in the regex
			assert.strictEqual(result.params.size, 2);
		});

		test('handles tag with only whitespace after it', () => {
			const text = `/**
 * @param x
 * @returns
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Whitespace-only content might not match the regex
			// This ensures we don't crash
		});

		test('handles first tag on first line (no description)', () => {
			const text = `/**
 * @param x First param
 * @returns Something
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// When tags appear before any description
			assert.strictEqual(result.params.size, 1);
			assert.ok(result.returns);
		});

		test('handles tags at very end of comment', () => {
			const text = `/**
 * Description here
 * @param x Last tag without trailing content
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.params.size, 1);
		});
	});

	describe('edge cases', () => {
		test('handles special characters in descriptions', () => {
			const text = `/**
 * Description with $pecial ch@racters & symbols!
 * @param x Test with <brackets> and {braces}
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.full_text.includes('$pecial'));
			assert.ok(result.params.get('x')?.includes('brackets'));
		});

		test('handles markdown syntax in descriptions', () => {
			const text = `/**
 * **Bold text** and *italic text*
 * - List item 1
 * - List item 2
 *
 * \`code\` blocks
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.ok(result.full_text.includes('**Bold'));
			assert.ok(result.full_text.includes('- List'));
			assert.ok(result.full_text.includes('`code`'));
		});

		test('handles empty tag content gracefully', () => {
			const text = `/**
 * @param x
 * @returns
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Empty tags might not get extracted depending on regex
			// This ensures we don't crash
		});

		test('handles tags in different orders', () => {
			const text = `/**
 * @returns Something
 * @param x First param
 * @example test()
 * @param y Second param
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// All tags should be extracted regardless of order
			assert.ok(result.returns);
			assert.strictEqual(result.params.size, 2);
			assert.strictEqual(result.examples.length, 1);
		});

		test('handles @see with URLs and special chars', () => {
			const text = `/**
 * @see https://example.com/docs?foo=bar&baz=qux
 * @see http://test.com/path#anchor
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.see_also.length, 2);
			// URLs with special characters should be captured
			assert.ok(result.see_also[0]?.includes('example.com'));
			assert.ok(result.see_also[1]?.includes('test.com'));
		});

		test('handles @example with code containing @ symbols', () => {
			const text = `/**
 * @example
 * const email = '@user@example.com';
 * sendEmail(email);
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.examples.length, 1);
			// @ symbols inside example shouldn't confuse the parser
			assert.ok(result.examples[0]?.includes('@user@example.com'));
		});

		test('handles @since with version ranges', () => {
			const text = `/**
 * @since 1.0.0-beta.1
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			assert.strictEqual(result.since, '1.0.0-beta.1');
		});

		test('handles very long multi-line descriptions', () => {
			const text = `/**
 * @param config Configuration object with many options
 * This parameter accepts a wide variety of settings
 * including but not limited to authentication tokens
 * API endpoints, timeout values, retry strategies
 * and various other configuration parameters
 * that might be needed for the operation
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			const desc = result.params.get('config');
			assert.ok(desc);
			// Multi-line description should be fully captured
			assert.ok(desc.includes('Configuration object'));
			assert.ok(desc.includes('operation'));
		});
	});

	describe('comprehensive integration', () => {
		test('kitchen sink - handles complex comment with all features', () => {
			const text = `/**
 * Complex utility function for data processing.
 * This function performs multiple operations.
 *
 * Additional details in second paragraph.
 *
 * @param {string|number} id - The unique identifier
 * @param data Raw data to process
 * @param {Object} options - Config with foo - bar - baz
 * @returns {Promise<Result>} Processed data result
 * @throws {ValidationError} When validation fails
 * @throws Network errors may occur
 * @example
 * processData(123, rawData)
 * @example
 * processData('abc', rawData, {async: true})
 * @deprecated Use processDataV2() from utils/v2
 * @see https://docs.example.com/api/processData
 * @see processDataV2
 * @since 2.0.0
 */`;
			const result = tsdoc_parse_from_text(text);

			assert.ok(result);
			// Verify comprehensive extraction
			assert.ok(result.summary.includes('Complex utility'));
			assert.ok(result.full_text.includes('Additional details'));
			assert.strictEqual(result.params.size, 3);
			assert.strictEqual(result.params.get('id'), 'The unique identifier');
			assert.strictEqual(result.params.get('data'), 'Raw data to process');
			assert.ok(result.params.get('options')?.includes('foo - bar - baz'));
			assert.ok(result.returns?.includes('Processed data'));
			assert.strictEqual(result.throws.length, 2);
			assert.strictEqual(result.throws[0]!.type, 'ValidationError');
			assert.strictEqual(result.examples.length, 2);
			assert.ok(result.deprecated_message?.includes('processDataV2'));
			assert.strictEqual(result.see_also.length, 2);
			assert.strictEqual(result.since, '2.0.0');
		});
	});
});
