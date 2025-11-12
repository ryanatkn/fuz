/**
 * mdz - minimal Markdown+TSDoc parser for Fuz API documentation.
 *
 * Parses a specialized markdown dialect with:
 * - inline formatting: `code`, **bold**, _italic_, ~strikethrough~
 * - TSDoc tags: `{@link}`, `{@see}`
 * - auto-linking via backticks to identifiers/modules
 * - paragraph breaks (double newline)
 * - block elements: headings, horizontal rules, code blocks
 *
 * Key constraint: preserves ALL whitespace exactly as authored,
 * and is rendered with white-space pre or pre-wrap.
 *
 * Design philosophy:
 *
 * - **False negatives over false positives**: Strict syntax prevents accidentally
 *   interpreting plain text as formatting. When in doubt, treat as plain text.
 * - **One way to do things**: Single unambiguous syntax per feature. No alternatives.
 * - **Explicit over implicit**: Clear delimiters and column-0 requirements avoid ambiguity.
 * - **Simple over complete**: Prefer simple parsing rules over complex edge case handling.
 */

// TODO this is an early proof of concept, is missing many features and edge cases

// TODO design incremental parsing or some system that preserves Svelte components across re-renders when possible

/**
 * Parses text to an array of `Mdz_Node`.
 */
export const mdz_parse = (text: string): Array<Mdz_Node> => new Mdz_Parser(text).parse();

export type Mdz_Node =
	| Mdz_Text_Node
	| Mdz_Code_Node
	| Mdz_Codeblock_Node
	| Mdz_Bold_Node
	| Mdz_Italic_Node
	| Mdz_Strikethrough_Node
	| Mdz_Link_Node
	| Mdz_Paragraph_Node
	| Mdz_Hr_Node
	| Mdz_Heading_Node
	| Mdz_Component_Node;

export interface Mdz_Base_Node {
	type: string;
	start: number;
	end: number;
}

export interface Mdz_Text_Node extends Mdz_Base_Node {
	type: 'Text';
	content: string;
}

export interface Mdz_Code_Node extends Mdz_Base_Node {
	type: 'Code';
	content: string; // The code content (identifier/module name)
}

export interface Mdz_Codeblock_Node extends Mdz_Base_Node {
	type: 'Codeblock';
	lang: string | null; // language hint, if provided
	content: string; // raw code content
}

export interface Mdz_Bold_Node extends Mdz_Base_Node {
	type: 'Bold';
	children: Array<Mdz_Node>;
}

export interface Mdz_Italic_Node extends Mdz_Base_Node {
	type: 'Italic';
	children: Array<Mdz_Node>;
}

export interface Mdz_Strikethrough_Node extends Mdz_Base_Node {
	type: 'Strikethrough';
	children: Array<Mdz_Node>;
}

export interface Mdz_Link_Node extends Mdz_Base_Node {
	type: 'Link';
	reference: string; // URL or identifier/module name
	display_text: string | null; // Display text from {@link URL|text}, null if not provided
	link_type: 'identifier' | 'url'; // Determined by parser
}

export interface Mdz_Paragraph_Node extends Mdz_Base_Node {
	type: 'Paragraph';
	children: Array<Mdz_Node>;
}

export interface Mdz_Hr_Node extends Mdz_Base_Node {
	type: 'Hr';
}

export interface Mdz_Heading_Node extends Mdz_Base_Node {
	type: 'Heading';
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: Array<Mdz_Node>; // inline formatting allowed
}

export interface Mdz_Component_Node extends Mdz_Base_Node {
	type: 'Component';
	name: string; // Component name (e.g., 'Alert', 'Card')
	children: Array<Mdz_Node>;
}

// Character codes for performance
const BACKTICK = 96; // `
const ASTERISK = 42; // *
const UNDERSCORE = 95; // _
const TILDE = 126; // ~
const LEFT_BRACE = 123; // {
const NEWLINE = 10; // \n
const AT_SIGN = 64; // @
const L_LOWER = 108; // l
const S_LOWER = 115; // s
const HYPHEN = 45; // -
const HASH = 35; // #
const SPACE = 32; // (space)
const TAB = 9; // \t

/**
 * Parser for mdz format.
 * Single-pass lexer/parser with text accumulation for efficiency.
 * Used by `mdz_parse`, which should be preferred for simple usage.
 */
export class Mdz_Parser {
	#index: number = 0;
	#template: string;
	#accumulated_text: string = '';
	#accumulated_start: number = 0;
	#nodes: Array<Mdz_Node> = [];

	constructor(template: string) {
		this.#template = template;
	}

	/**
	 * Main parse method. Returns flat array of nodes,
	 * with paragraph nodes wrapping content between double newlines.
	 */
	parse(): Array<Mdz_Node> {
		this.#nodes.length = 0;
		const root_nodes: Array<Mdz_Node> = [];
		const paragraph_children: Array<Mdz_Node> = [];

		// Check for heading at document start
		if (this.#match_heading()) {
			const heading = this.#parse_heading();
			root_nodes.push(heading);
		}
		// Check for hr at document start
		else if (this.#match_hr()) {
			const hr = this.#parse_hr();
			root_nodes.push(hr);
		}
		// Check for code block at document start
		else if (this.#match_code_block()) {
			const code_block = this.#parse_code_block();
			root_nodes.push(code_block);
		}

		while (this.#index < this.#template.length) {
			// Check for paragraph break (double newline)
			if (this.#is_at_paragraph_break()) {
				this.#flush_text();
				// Move flushed nodes to paragraph_children
				if (this.#nodes.length > 0) {
					paragraph_children.push(...this.#nodes);
					this.#nodes.length = 0;
				}
				// Wrap accumulated nodes in paragraph
				if (paragraph_children.length > 0) {
					root_nodes.push({
						type: 'Paragraph',
						children: paragraph_children.slice(),
						start: paragraph_children[0]!.start,
						end: paragraph_children[paragraph_children.length - 1]!.end,
					});
					paragraph_children.length = 0;
				}
				// Consume the paragraph break
				this.#eat('\n\n');

				// Check for heading after paragraph break
				if (this.#match_heading()) {
					const heading = this.#parse_heading();
					root_nodes.push(heading);
				}
				// Check for hr after paragraph break
				else if (this.#match_hr()) {
					const hr = this.#parse_hr();
					root_nodes.push(hr);
				}
				// Check for code block after paragraph break
				else if (this.#match_code_block()) {
					const code_block = this.#parse_code_block();
					root_nodes.push(code_block);
				}
			} else {
				const node = this.#parse_node();
				if (node.type === 'Text') {
					this.#accumulate_text(node.content, node.start);
				} else {
					this.#flush_text();
					this.#nodes.push(node);
				}
				if (this.#nodes.length > 0) {
					paragraph_children.push(...this.#nodes);
					this.#nodes.length = 0;
				}
			}
		}

		this.#flush_text();
		if (this.#nodes.length > 0) {
			paragraph_children.push(...this.#nodes);
		}

		// Wrap remaining nodes in final paragraph if any
		if (paragraph_children.length > 0) {
			root_nodes.push({
				type: 'Paragraph',
				children: paragraph_children,
				start: paragraph_children[0]!.start,
				end: paragraph_children[paragraph_children.length - 1]!.end,
			});
		}

		return root_nodes;
	}

	/**
	 * Accumulate text for later flushing (performance optimization).
	 */
	#accumulate_text(text: string, start: number): void {
		if (this.#accumulated_text === '') {
			this.#accumulated_start = start;
		}
		this.#accumulated_text += text;
	}

	#flush_text(): void {
		if (this.#accumulated_text !== '') {
			this.#nodes.push({
				type: 'Text',
				content: this.#accumulated_text,
				start: this.#accumulated_start,
				end: this.#accumulated_start + this.#accumulated_text.length,
			});
			this.#accumulated_text = '';
		}
	}

	/**
	 * Parse next node based on current character.
	 * Uses switch for performance (avoids regex in hot loop).
	 */
	#parse_node(): Mdz_Node {
		const char_code = this.#current_char();

		// Use character codes for performance in hot path
		switch (char_code) {
			case BACKTICK:
				return this.#parse_code();
			case ASTERISK:
				return this.#parse_bold();
			case UNDERSCORE:
				return this.#parse_italic();
			case TILDE:
				return this.#parse_strikethrough();
			case LEFT_BRACE:
				// Fast path: check {@link or {@see with character codes
				if (
					this.#index + 6 <= this.#template.length &&
					this.#template.charCodeAt(this.#index + 1) === AT_SIGN
				) {
					const third = this.#template.charCodeAt(this.#index + 2);
					if (third === L_LOWER || third === S_LOWER) {
						// Validate full tag for safety
						if (this.#match('{@link') || this.#match('{@see')) {
							return this.#parse_link();
						}
					}
				}
				return this.#parse_text();
			default:
				return this.#parse_text();
		}
	}

	/**
	 * Parse backtick code: `code`
	 * Auto-links to identifiers/modules if match found.
	 * Falls back to text if unclosed, empty, or if newline encountered before closing backtick.
	 */
	#parse_code(): Mdz_Code_Node | Mdz_Text_Node {
		const start = this.#index;
		this.#eat('`');
		const content_start = this.#index;

		// Find closing backtick, but stop at newline
		let content_end = -1;
		for (let i = this.#index; i < this.#template.length; i++) {
			const char_code = this.#template.charCodeAt(i);
			if (char_code === BACKTICK) {
				content_end = i;
				break;
			}
			if (char_code === NEWLINE) {
				// Newline before closing backtick - treat as unclosed
				break;
			}
		}

		if (content_end === -1) {
			// Unclosed backtick or newline encountered, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '`',
				start,
				end: this.#index,
			};
		}

		const content = this.#template.slice(content_start, content_end);

		// Empty inline code has no semantic meaning, treat as literal text
		if (content.length === 0) {
			this.#index = start + 2; // consume both backticks
			return {
				type: 'Text',
				content: '``',
				start,
				end: this.#index,
			};
		}

		this.#index = content_end + 1;

		return {
			type: 'Code',
			content,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse bold starting with double asterisk.
	 *
	 * - **bold** = Bold node
	 *
	 * Falls back to text if unclosed or single asterisk.
	 */
	#parse_bold(): Mdz_Bold_Node | Mdz_Text_Node {
		const start = this.#index;

		// Check for ** (bold)
		if (this.#match('**')) {
			this.#eat('**');
			const children = this.#parse_nodes_until('**');
			if (this.#match('**')) {
				this.#eat('**');
				return {
					type: 'Bold',
					children,
					start,
					end: this.#index,
				};
			} else {
				// Unclosed, treat as text
				this.#index = start + 2;
				return {
					type: 'Text',
					content: '**',
					start,
					end: this.#index,
				};
			}
		}

		// Single asterisk - treat as text
		const content = this.#template[this.#index]!;
		this.#index++;
		return {
			type: 'Text',
			content,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse italic starting with underscore.
	 * _italic_ = Italic node
	 * Falls back to text if unclosed.
	 */
	#parse_italic(): Mdz_Italic_Node | Mdz_Text_Node {
		const start = this.#index;
		this.#eat('_');
		const children = this.#parse_nodes_until('_');
		if (this.#match('_')) {
			this.#eat('_');
			return {
				type: 'Italic',
				children,
				start,
				end: this.#index,
			};
		} else {
			// Unclosed, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '_',
				start,
				end: this.#index,
			};
		}
	}

	/**
	 * Parse strikethrough starting with tilde.
	 * ~strikethrough~ = Strikethrough node
	 * Falls back to text if unclosed.
	 */
	#parse_strikethrough(): Mdz_Strikethrough_Node | Mdz_Text_Node {
		const start = this.#index;
		this.#eat('~');
		const children = this.#parse_nodes_until('~');
		if (this.#match('~')) {
			this.#eat('~');
			return {
				type: 'Strikethrough',
				children,
				start,
				end: this.#index,
			};
		} else {
			// Unclosed, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '~',
				start,
				end: this.#index,
			};
		}
	}

	/**
	 * Parse TSDoc inline tag: `{@link ...}` or `{@see ...`.
	 * Formats:
	 *
	 * - {@link identifier} - local ref
	 * - {@link https://url} - external URL
	 * - {@link https://url|Display Text} - URL with custom text
	 *
	 * Falls back to text if malformed.
	 */
	#parse_link(): Mdz_Link_Node | Mdz_Text_Node {
		const start = this.#index;

		if (this.#match('{@link')) {
			this.#eat('{@link');
		} else if (this.#match('{@see')) {
			this.#eat('{@see');
		} else {
			// Shouldn't reach here
			const content = this.#template[this.#index]!;
			this.#index++;
			return {
				type: 'Text',
				content,
				start,
				end: this.#index,
			};
		}

		// Skip whitespace after tag
		while (this.#index < this.#template.length && this.#template[this.#index] === ' ') {
			this.#index++;
		}

		// Find closing }
		const close_index = this.#template.indexOf('}', this.#index);
		if (close_index === -1) {
			// Unclosed tag, treat as text
			this.#index = this.#template.length;
			return {
				type: 'Text',
				content: this.#template.slice(start),
				start,
				end: this.#index,
			};
		}

		// Extract content between tag and }
		const content = this.#template.slice(this.#index, close_index).trim();
		this.#index = close_index + 1;

		// Check for display text separator |
		const pipe_index = content.indexOf('|');
		let reference: string;
		let display_text: string | undefined;

		if (pipe_index !== -1) {
			reference = content.slice(0, pipe_index).trim();
			display_text = content.slice(pipe_index + 1).trim();
		} else {
			reference = content;
		}

		// Determine link type (url vs identifier)
		const link_type =
			reference.startsWith('http://') || reference.startsWith('https://') ? 'url' : 'identifier';

		return {
			type: 'Link',
			reference,
			display_text: display_text ?? null,
			link_type,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse plain text until special character encountered.
	 * Preserves all whitespace (except paragraph breaks handled separately).
	 */
	#parse_text(): Mdz_Text_Node {
		const start = this.#index;

		while (this.#index < this.#template.length) {
			const char_code = this.#current_char();

			// Stop at special characters (but preserve single newlines)
			if (
				char_code === BACKTICK ||
				char_code === ASTERISK ||
				char_code === UNDERSCORE ||
				char_code === TILDE ||
				char_code === LEFT_BRACE
			) {
				break;
			}

			// Check for paragraph break (double newline)
			if (this.#is_at_paragraph_break()) {
				break;
			}

			this.#index++;
		}

		// Ensure we always consume at least one character to prevent infinite loops
		if (this.#index === start && this.#index < this.#template.length) {
			this.#index++;
		}

		// Use slice instead of concatenation for performance
		const content = this.#template.slice(start, this.#index);

		return {
			type: 'Text',
			content,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse nodes until delimiter string is found.
	 * Used for bold/italic content parsing.
	 * Stops at paragraph breaks (double newline) to allow block elements to interrupt inline formatting.
	 */
	#parse_nodes_until(delimiter: string): Array<Mdz_Node> {
		const nodes: Array<Mdz_Node> = [];

		while (this.#index < this.#template.length) {
			if (this.#match(delimiter)) {
				break;
			}

			// Check for paragraph break (block element interruption)
			if (this.#is_at_paragraph_break()) {
				// Paragraph break interrupts inline formatting
				break;
			}

			const node = this.#parse_node();
			nodes.push(node);
		}

		return nodes;
	}

	/**
	 * Get character code at current index, or -1 if at EOF.
	 */
	#current_char(): number {
		return this.#index < this.#template.length ? this.#template.charCodeAt(this.#index) : -1;
	}

	/**
	 * Check if current position is at a paragraph break (double newline).
	 */
	#is_at_paragraph_break(): boolean {
		return (
			this.#current_char() === NEWLINE &&
			this.#index + 1 < this.#template.length &&
			this.#template.charCodeAt(this.#index + 1) === NEWLINE
		);
	}

	#match(str: string): boolean {
		return this.#template.startsWith(str, this.#index);
	}

	/**
	 * Consume string at current index, or throw error.
	 */
	#eat(str: string): void {
		if (this.#match(str)) {
			this.#index += str.length;
		} else {
			throw Error(`Expected "${str}" at index ${this.#index}`);
		}
	}

	/**
	 * Check if current position matches a horizontal rule.
	 * HR must be exactly `---` at column 0, followed by blank line or EOF.
	 */
	#match_hr(): boolean {
		let i = this.#index;

		// Must start at column 0 (no leading whitespace)
		if (i < this.#template.length && this.#template.charCodeAt(i) === SPACE) {
			return false;
		}

		// Must have exactly three hyphens
		if (
			i + 3 > this.#template.length ||
			this.#template.charCodeAt(i) !== HYPHEN ||
			this.#template.charCodeAt(i + 1) !== HYPHEN ||
			this.#template.charCodeAt(i + 2) !== HYPHEN
		) {
			return false;
		}
		i += 3;

		// After the three hyphens, only whitespace and newline (or EOF) allowed
		while (i < this.#template.length) {
			const char_code = this.#template.charCodeAt(i);
			if (char_code === NEWLINE) {
				// Found newline - check if followed by another newline (blank line) or EOF
				const next_i = i + 1;
				if (next_i >= this.#template.length) {
					return true; // hr followed by newline + EOF
				}
				if (this.#template.charCodeAt(next_i) === NEWLINE) {
					return true; // hr followed by blank line
				}
				return false; // hr followed by single newline + content
			}
			if (char_code !== SPACE) {
				return false; // Non-whitespace after ---, not an hr
			}
			i++;
		}

		// Reached EOF after ---, valid hr
		return true;
	}

	/**
	 * Parse horizontal rule: `---`
	 * Assumes #match_hr() already verified this is an hr.
	 */
	#parse_hr(): Mdz_Hr_Node {
		const start = this.#index;

		// Consume the three hyphens (no leading whitespace - already verified)
		this.#index += 3;

		// Skip trailing whitespace
		while (
			this.#index < this.#template.length &&
			this.#template.charCodeAt(this.#index) === SPACE
		) {
			this.#index++;
		}

		// Don't consume the newline - let the main parse loop handle it

		return {
			type: 'Hr',
			start,
			end: this.#index,
		};
	}

	/**
	 * Check if current position matches a heading.
	 * Heading must be 1-6 hashes at column 0, followed by space and content,
	 * followed by blank line or EOF.
	 */
	#match_heading(): boolean {
		let i = this.#index;

		// Must start at column 0 (no leading whitespace)
		if (i < this.#template.length && this.#template.charCodeAt(i) === SPACE) {
			return false;
		}

		// Count hashes (must be 1-6)
		let hash_count = 0;
		while (i < this.#template.length && this.#template.charCodeAt(i) === HASH && hash_count < 7) {
			hash_count++;
			i++;
		}

		if (hash_count === 0 || hash_count > 6) {
			return false;
		}

		// Must have space after hashes
		if (i >= this.#template.length || this.#template.charCodeAt(i) !== SPACE) {
			return false;
		}
		i++; // consume the space

		// Must have non-whitespace content after the space (not just whitespace until newline)
		let has_content = false;
		while (i < this.#template.length && this.#template.charCodeAt(i) !== NEWLINE) {
			const char_code = this.#template.charCodeAt(i);
			if (char_code !== SPACE && char_code !== TAB) {
				has_content = true;
			}
			i++;
		}

		if (!has_content) {
			return false; // heading with only whitespace, treat as plain text
		}

		// At this point we're at newline or EOF
		// Check for blank line after (newline + newline) or EOF
		if (i >= this.#template.length) {
			return true; // heading at EOF
		}

		// Must have newline
		if (this.#template.charCodeAt(i) !== NEWLINE) {
			return false;
		}

		const next_i = i + 1;
		if (next_i >= this.#template.length) {
			return true; // heading followed by newline + EOF
		}

		if (this.#template.charCodeAt(next_i) === NEWLINE) {
			return true; // heading followed by blank line
		}

		return false; // heading followed by single newline + content
	}

	/**
	 * Parse heading: `# Heading text`
	 * Assumes #match_heading() already verified this is a heading.
	 */
	#parse_heading(): Mdz_Heading_Node {
		const start = this.#index;

		// Count and consume hashes
		let level = 0;
		while (this.#index < this.#template.length && this.#template.charCodeAt(this.#index) === HASH) {
			level++;
			this.#index++;
		}

		// Consume the space after hashes (already verified to exist)
		this.#index++;

		// Parse inline content until newline
		const content_nodes: Array<Mdz_Node> = [];

		while (this.#index < this.#template.length) {
			const char_code = this.#template.charCodeAt(this.#index);

			if (char_code === NEWLINE) {
				break;
			}

			const node = this.#parse_node();
			if (node.type === 'Text') {
				// Check if text node includes a newline (since #parse_text doesn't stop at single newlines)
				// If so, trim it and move index back
				const newline_index = node.content.indexOf('\n');
				if (newline_index !== -1) {
					const trimmed_content = node.content.slice(0, newline_index);
					if (trimmed_content) {
						this.#accumulate_text(trimmed_content, node.start);
					}
					this.#index = node.start + newline_index;
					break;
				} else {
					this.#accumulate_text(node.content, node.start);
				}
			} else {
				this.#flush_text();
				content_nodes.push(...this.#nodes);
				this.#nodes.length = 0;
				content_nodes.push(node);
			}
		}

		this.#flush_text();
		content_nodes.push(...this.#nodes);
		this.#nodes.length = 0;

		// Don't consume the newline - let the main parse loop handle it

		return {
			type: 'Heading',
			level: level as 1 | 2 | 3 | 4 | 5 | 6,
			children: content_nodes,
			start,
			end: this.#index,
		};
	}

	/**
	 * Check if current position matches a code block.
	 * Code block must be 3+ backticks at column 0, followed by blank line or EOF.
	 * Empty code blocks (no content) are treated as invalid.
	 */
	#match_code_block(): boolean {
		let i = this.#index;

		// Must start at column 0 (no leading whitespace)
		if (i < this.#template.length && this.#template.charCodeAt(i) === SPACE) {
			return false;
		}

		// Must have at least three backticks
		let backtick_count = 0;
		while (i < this.#template.length && this.#template.charCodeAt(i) === BACKTICK) {
			backtick_count++;
			i++;
		}

		if (backtick_count < 3) {
			return false;
		}

		// Skip optional language hint (consume until space or newline)
		while (i < this.#template.length) {
			const char_code = this.#template.charCodeAt(i);
			if (char_code === SPACE || char_code === NEWLINE) {
				break;
			}
			i++;
		}

		// Skip any trailing spaces on opening fence line
		while (i < this.#template.length && this.#template.charCodeAt(i) === SPACE) {
			i++;
		}

		// Must have newline after opening fence (or be at EOF)
		if (i >= this.#template.length) {
			return false; // No newline, can't be a valid code block
		}

		if (this.#template.charCodeAt(i) !== NEWLINE) {
			return false;
		}
		i++; // consume the newline

		// Mark content start position (after opening fence newline)
		const content_start = i;

		// Now search for closing fence
		const closing_fence = '`'.repeat(backtick_count);
		while (i < this.#template.length) {
			// Check if we're at a potential closing fence (must be at start of line)
			if (this.#template.startsWith(closing_fence, i)) {
				// Verify it's at column 0 by checking previous character
				const prev_char = i > 0 ? this.#template.charCodeAt(i - 1) : NEWLINE;
				if (prev_char === NEWLINE || i === 0) {
					// Found closing fence - check for empty content first
					const content = this.#template.slice(content_start, i);
					const final_content = content.endsWith('\n') ? content.slice(0, -1) : content;
					if (final_content.length === 0) {
						return false; // Empty code block has no semantic meaning
					}

					// Now verify what comes after closing fence
					let j = i + backtick_count;

					// Skip trailing whitespace on closing fence line
					while (j < this.#template.length && this.#template.charCodeAt(j) === SPACE) {
						j++;
					}

					// Must have newline after closing fence (or be at EOF)
					if (j >= this.#template.length) {
						return true;
					}

					if (this.#template.charCodeAt(j) !== NEWLINE) {
						// closing fence has non-whitespace after it on same line - not a code block
						return false;
					}

					// Check if followed by blank line or EOF
					const next_j = j + 1;
					if (next_j >= this.#template.length) {
						return true; // code block followed by newline + EOF
					}
					if (this.#template.charCodeAt(next_j) === NEWLINE) {
						return true; // code block followed by blank line
					}
					return false; // code block followed by single newline + content
				}
			}
			i++;
		}

		// No closing fence found - not a valid code block
		return false;
	}

	/**
	 * Parse code block: ```lang\ncode\n```
	 * Assumes #match_code_block() already verified this is a code block.
	 */
	#parse_code_block(): Mdz_Codeblock_Node {
		const start = this.#index;

		// Count and consume opening backticks
		let backtick_count = 0;
		while (
			this.#index < this.#template.length &&
			this.#template.charCodeAt(this.#index) === BACKTICK
		) {
			backtick_count++;
			this.#index++;
		}

		// Parse optional language hint (consume until space or newline)
		let lang: string | null = null;
		const lang_start = this.#index;
		while (this.#index < this.#template.length) {
			const char_code = this.#template.charCodeAt(this.#index);
			if (char_code === SPACE || char_code === NEWLINE) {
				break;
			}
			this.#index++;
		}
		if (this.#index > lang_start) {
			lang = this.#template.slice(lang_start, this.#index);
		}

		// Skip any trailing spaces on opening fence line
		while (
			this.#index < this.#template.length &&
			this.#template.charCodeAt(this.#index) === SPACE
		) {
			this.#index++;
		}

		// Consume the newline after opening fence (first newline is consumed per spec)
		if (this.#index < this.#template.length && this.#template.charCodeAt(this.#index) === NEWLINE) {
			this.#index++;
		}

		// Collect content until closing fence
		const content_start = this.#index;
		const closing_fence = '`'.repeat(backtick_count);

		while (this.#index < this.#template.length) {
			// Check if we're at the closing fence (must be at start of line)
			if (this.#template.startsWith(closing_fence, this.#index)) {
				// Verify it's at column 0 by checking previous character
				const prev_char = this.#index > 0 ? this.#template.charCodeAt(this.#index - 1) : NEWLINE;
				if (prev_char === NEWLINE || this.#index === 0) {
					// Check if it's exactly the right number of backticks at line start
					let j = this.#index + backtick_count;
					// After closing fence, only whitespace and newline allowed
					while (j < this.#template.length && this.#template.charCodeAt(j) === SPACE) {
						j++;
					}
					if (j >= this.#template.length || this.#template.charCodeAt(j) === NEWLINE) {
						// Valid closing fence
						const content = this.#template.slice(content_start, this.#index);
						// Remove trailing newline if present (closing fence comes after a newline)
						const final_content = content.endsWith('\n') ? content.slice(0, -1) : content;

						// Consume closing fence
						this.#index += backtick_count;

						// Skip trailing whitespace on closing fence line
						while (
							this.#index < this.#template.length &&
							this.#template.charCodeAt(this.#index) === SPACE
						) {
							this.#index++;
						}

						// Don't consume the newline - let the main parse loop handle it

						return {
							type: 'Codeblock',
							lang,
							content: final_content,
							start,
							end: this.#index,
						};
					}
				}
			}
			this.#index++;
		}

		// Should not reach here if #match_code_block() validated correctly
		throw Error('Code block not properly closed');
	}
}
