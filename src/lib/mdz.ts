/**
 * mdz - Minimal TSDoc Markdown parser for Fuz API documentation.
 *
 * Parses a specialized markdown dialect with:
 * - Inline formatting: `code`, **bold**, *italic*, _italic_
 * - TSDoc tags: {@link}, {@see}
 * - Auto-linking via backticks to identifiers/modules
 * - Paragraph breaks (double newline)
 *
 * Key constraint: Preserves ALL whitespace exactly as authored.
 */

// TODO design incremental parsing or some system that preserves Svelte components across re-renders when possible

/**
 * Parses text to an array of `Mdz_Node`.
 */
export const mdz_parse = (text: string): Array<Mdz_Node> => new Mdz_Parser(text).parse();

export type Mdz_Node =
	| Mdz_Text_Node
	| Mdz_Code_Node
	| Mdz_Bold_Node
	| Mdz_Italic_Node
	| Mdz_Link_Node
	| Mdz_Paragraph_Node
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
	reference: string; // Same as content, used for lookup
}

export interface Mdz_Bold_Node extends Mdz_Base_Node {
	type: 'Bold';
	children: Array<Mdz_Node>;
}

export interface Mdz_Italic_Node extends Mdz_Base_Node {
	type: 'Italic';
	children: Array<Mdz_Node>;
}

export interface Mdz_Link_Node extends Mdz_Base_Node {
	type: 'Link';
	reference: string; // URL or identifier/module name
	display_text?: string; // Optional display text from {@link URL|text}
	link_type: 'identifier' | 'url'; // Determined by parser
}

export interface Mdz_Paragraph_Node extends Mdz_Base_Node {
	type: 'Paragraph';
	children: Array<Mdz_Node>;
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
const LEFT_BRACE = 123; // {
const NEWLINE = 10; // \n
const AT_SIGN = 64; // @
const L_LOWER = 108; // l
const S_LOWER = 115; // s

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

		while (this.#index < this.#template.length) {
			// Check for paragraph break (double newline) - inlined for performance
			if (
				this.#template.charCodeAt(this.#index) === NEWLINE &&
				this.#template.charCodeAt(this.#index + 1) === NEWLINE
			) {
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
				// Add the paragraph break as text to preserve formatting
				const start = this.#index;
				this.#eat('\n\n');
				root_nodes.push({
					type: 'Text',
					content: '\n\n',
					start,
					end: this.#index,
				});
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

	/**
	 * Flush accumulated text as a single Text node.
	 */
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
		const char_code = this.#template.charCodeAt(this.#index);

		// Use character codes for performance in hot path
		switch (char_code) {
			case BACKTICK:
				return this.#parse_code();
			case ASTERISK:
				return this.#parse_bold_or_italic();
			case UNDERSCORE:
				return this.#parse_italic();
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
	 * Falls back to text if unclosed.
	 */
	#parse_code(): Mdz_Code_Node | Mdz_Text_Node {
		const start = this.#index;
		this.#eat('`');
		const content_start = this.#index;
		const content_end = this.#template.indexOf('`', this.#index);

		if (content_end === -1) {
			// Unclosed backtick, treat as text
			this.#index = this.#template.length;
			return {
				type: 'Text',
				content: this.#template.slice(start),
				start,
				end: this.#index,
			};
		}

		const content = this.#template.slice(content_start, content_end);
		this.#index = content_end + 1;

		return {
			type: 'Code',
			content,
			reference: content,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse bold or italic starting with asterisk.
	 *
	 * - **bold** = Bold node
	 * - *italic* = Italic node
	 *
	 * Falls back to text if unclosed.
	 */
	#parse_bold_or_italic(): Mdz_Bold_Node | Mdz_Italic_Node | Mdz_Text_Node {
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

		// Check for * (italic)
		if (this.#match('*')) {
			this.#eat('*');
			const children = this.#parse_nodes_until('*');
			if (this.#match('*')) {
				this.#eat('*');
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
					content: '*',
					start,
					end: this.#index,
				};
			}
		}

		// Shouldn't reach here, but fallback
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
			display_text,
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
			const char_code = this.#template.charCodeAt(this.#index);

			// Stop at special characters (but preserve single newlines)
			if (
				char_code === BACKTICK ||
				char_code === ASTERISK ||
				char_code === UNDERSCORE ||
				char_code === LEFT_BRACE
			) {
				break;
			}

			// Check for paragraph break (double newline) - inlined for performance
			if (char_code === NEWLINE && this.#template.charCodeAt(this.#index + 1) === NEWLINE) {
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
	 */
	#parse_nodes_until(delimiter: string): Array<Mdz_Node> {
		const nodes: Array<Mdz_Node> = [];

		while (this.#index < this.#template.length) {
			if (this.#match(delimiter)) {
				break;
			}

			const node = this.#parse_node();
			nodes.push(node);
		}

		return nodes;
	}

	/**
	 * Check if template matches string at current index.
	 */
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
}
