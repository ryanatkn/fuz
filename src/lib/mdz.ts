/**
 * mdz - minimal markdown dialect for Fuz documentation.
 *
 * Parses an enhanced markdown dialect with:
 * - inline formatting: `code`, **bold**, _italic_, ~strikethrough~
 * - auto-detected links: external URLs (`https://...`) and internal paths (`/path`)
 * - markdown links: `[text](url)` with custom display text
 * - auto-linking via backticks to identifiers/modules
 * - paragraph breaks (double newline)
 * - block elements: headings, horizontal rules, code blocks
 * - HTML elements and Svelte components (opt-in via context)
 *
 * Key constraint: preserves ALL whitespace exactly as authored,
 * and is rendered with white-space pre or pre-wrap.
 *
 * ## Design philosophy
 *
 * - **False negatives over false positives**: Strict syntax prevents accidentally
 *   interpreting plain text as formatting. When in doubt, treat as plain text.
 * - **One way to do things**: Single unambiguous syntax per feature. No alternatives.
 * - **Explicit over implicit**: Clear delimiters and column-0 requirements avoid ambiguity.
 * - **Simple over complete**: Prefer simple parsing rules over complex edge case handling.
 *
 * ## Status
 *
 * This is an early proof of concept with missing features and edge cases.
 */

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
	| Mdz_Element_Node
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
	reference: string; // URL or path
	children: Array<Mdz_Node>; // Display content (can include inline formatting)
	link_type: 'external' | 'internal'; // external: https/http, internal: /path
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

export interface Mdz_Element_Node extends Mdz_Base_Node {
	type: 'Element';
	name: string; // HTML element name (e.g., 'div', 'span', 'code')
	children: Array<Mdz_Node>;
}

export interface Mdz_Component_Node extends Mdz_Base_Node {
	type: 'Component';
	name: string; // Svelte component name (e.g., 'Alert', 'Card')
	children: Array<Mdz_Node>;
}

// Character codes for performance
const BACKTICK = 96; // `
const ASTERISK = 42; // *
const UNDERSCORE = 95; // _
const TILDE = 126; // ~
const NEWLINE = 10; // \n
const HYPHEN = 45; // -
const HASH = 35; // #
const SPACE = 32; // (space)
const TAB = 9; // \t
const LEFT_ANGLE = 60; // <
const RIGHT_ANGLE = 62; // >
const SLASH = 47; // /
const LEFT_BRACKET = 91; // [
const RIGHT_BRACKET = 93; // ]
const LEFT_PAREN = 40; // (
const RIGHT_PAREN = 41; // )
const COLON = 58; // :
const PERIOD = 46; // .
const COMMA = 44; // ,
const SEMICOLON = 59; // ;
const EXCLAMATION = 33; // !
const QUESTION = 63; // ?

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
	#max_search_index: number = Number.MAX_SAFE_INTEGER; // Boundary for delimiter searches

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
				// Wrap accumulated nodes in paragraph (or add single tag directly)
				if (paragraph_children.length > 0) {
					if (this.#is_single_tag(paragraph_children)) {
						// Single tag (component/element) - add directly without paragraph wrapper (MDX convention)
						const tag = paragraph_children.find(
							(n) => n.type === 'Component' || n.type === 'Element',
						)!;
						root_nodes.push(tag);
					} else {
						// Regular paragraph
						root_nodes.push({
							type: 'Paragraph',
							children: paragraph_children.slice(),
							start: paragraph_children[0]!.start,
							end: paragraph_children[paragraph_children.length - 1]!.end,
						});
					}
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

		// Wrap remaining nodes in final paragraph if any (or add single tag directly)
		if (paragraph_children.length > 0) {
			if (this.#is_single_tag(paragraph_children)) {
				// Single tag (component/element) - add directly without paragraph wrapper (MDX convention)
				const tag = paragraph_children.find((n) => n.type === 'Component' || n.type === 'Element')!;
				root_nodes.push(tag);
			} else {
				// Regular paragraph
				root_nodes.push({
					type: 'Paragraph',
					children: paragraph_children,
					start: paragraph_children[0]!.start,
					end: paragraph_children[paragraph_children.length - 1]!.end,
				});
			}
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
			case LEFT_BRACKET:
				return this.#parse_markdown_link();
			case LEFT_ANGLE:
				return this.#parse_tag();
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

		// Find closing backtick, but stop at newline (respect boundary for greedy matching)
		let content_end = -1;
		const search_limit = Math.min(this.#max_search_index, this.#template.length);
		for (let i = this.#index; i < search_limit; i++) {
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
	 * Falls back to text if unclosed, single asterisk, or not at word boundary.
	 *
	 * Following mdz philosophy (false negatives over false positives):
	 * Bold requires word boundaries to prevent intraword formatting.
	 * Examples:
	 * - `foo**bar**baz` → literal text (intraword)
	 * - `word **bold** word` → bold (at word boundaries)
	 */
	#parse_bold(): Mdz_Bold_Node | Mdz_Text_Node {
		const start = this.#index;

		// Check for ** (bold)
		if (this.#match('**')) {
			// Check if opening ** is at word boundary
			// Must not be preceded by word char (intraword position)
			if (!this.#is_at_word_boundary(this.#index, true, false)) {
				// Intraword ** - treat as literal text
				const content = this.#template[this.#index]!;
				this.#index++;
				return {
					type: 'Text',
					content,
					start,
					end: this.#index,
				};
			}

			this.#eat('**');

			// Find closing ** (greedy matching - first occurrence within boundary)
			const search_end = Math.min(this.#max_search_index, this.#template.length);
			const substring = this.#template.substring(this.#index, search_end);
			const relative_close = substring.indexOf('**');
			const close_index = relative_close === -1 ? -1 : this.#index + relative_close;
			if (close_index === -1) {
				// Unclosed, treat as text
				this.#index = start + 2;
				return {
					type: 'Text',
					content: '**',
					start,
					end: this.#index,
				};
			}

			// Check if closing ** is at word boundary
			if (!this.#is_at_word_boundary(close_index + 2, false, true)) {
				// Closing ** not at boundary - treat whole thing as text
				this.#index = start + 1;
				return {
					type: 'Text',
					content: '*',
					start,
					end: this.#index,
				};
			}

			// Parse children up to closing delimiter (bounded parsing)
			const children = this.#parse_nodes_until('**', close_index);

			// Verify we're at the closing delimiter (could have stopped early due to paragraph break)
			if (!this.#match('**')) {
				// Interrupted before closing - treat as unclosed
				this.#index = start + 2;
				return {
					type: 'Text',
					content: '**',
					start,
					end: this.#index,
				};
			}

			// Consume closing **
			this.#eat('**');
			return {
				type: 'Bold',
				children,
				start,
				end: this.#index,
			};
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
	 * Falls back to text if unclosed or not at word boundary.
	 *
	 * Following GFM spec: underscores cannot create emphasis in middle of words.
	 * Examples:
	 * - `foo_bar_baz` → literal text (intraword)
	 * - `word _emphasis_ word` → emphasis (at word boundaries)
	 */
	#parse_italic(): Mdz_Italic_Node | Mdz_Text_Node {
		const start = this.#index;

		// Check if opening underscore is at word boundary
		// Must not be preceded by word char (intraword position)
		if (!this.#is_at_word_boundary(this.#index, true, false)) {
			// Intraword underscore - treat as literal text
			const content = this.#template[this.#index]!;
			this.#index++;
			return {
				type: 'Text',
				content,
				start,
				end: this.#index,
			};
		}

		this.#eat('_');

		// Find closing _ (greedy matching - first occurrence within boundary)
		const search_end = Math.min(this.#max_search_index, this.#template.length);
		const substring = this.#template.substring(this.#index, search_end);
		const relative_close = substring.indexOf('_');
		const close_index = relative_close === -1 ? -1 : this.#index + relative_close;
		if (close_index === -1) {
			// Unclosed, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '_',
				start,
				end: this.#index,
			};
		}

		// Check if closing underscore is at word boundary
		if (!this.#is_at_word_boundary(close_index + 1, false, true)) {
			// Closing underscore not at boundary - treat whole thing as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '_',
				start,
				end: this.#index,
			};
		}

		// Parse children up to closing delimiter (bounded parsing)
		const children = this.#parse_nodes_until('_', close_index);

		// Verify we're at the closing delimiter (could have stopped early due to paragraph break)
		if (!this.#match('_')) {
			// Interrupted before closing - treat as unclosed
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '_',
				start,
				end: this.#index,
			};
		}

		// Consume closing _
		this.#eat('_');
		return {
			type: 'Italic',
			children,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse strikethrough starting with tilde.
	 * ~strikethrough~ = Strikethrough node
	 * Falls back to text if unclosed or not at word boundary.
	 *
	 * Following mdz philosophy (false negatives over false positives):
	 * Strikethrough requires word boundaries to prevent intraword formatting.
	 * Examples:
	 * - `foo~bar~baz` → literal text (intraword)
	 * - `word ~strike~ word` → strikethrough (at word boundaries)
	 */
	#parse_strikethrough(): Mdz_Strikethrough_Node | Mdz_Text_Node {
		const start = this.#index;

		// Check if opening tilde is at word boundary
		// Must not be preceded by word char (intraword position)
		if (!this.#is_at_word_boundary(this.#index, true, false)) {
			// Intraword tilde - treat as literal text
			const content = this.#template[this.#index]!;
			this.#index++;
			return {
				type: 'Text',
				content,
				start,
				end: this.#index,
			};
		}

		this.#eat('~');

		// Find closing ~ (greedy matching - first occurrence within boundary)
		const search_end = Math.min(this.#max_search_index, this.#template.length);
		const substring = this.#template.substring(this.#index, search_end);
		const relative_close = substring.indexOf('~');
		const close_index = relative_close === -1 ? -1 : this.#index + relative_close;
		if (close_index === -1) {
			// Unclosed, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '~',
				start,
				end: this.#index,
			};
		}

		// Check if closing tilde is at word boundary
		if (!this.#is_at_word_boundary(close_index + 1, false, true)) {
			// Closing tilde not at boundary - treat whole thing as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '~',
				start,
				end: this.#index,
			};
		}

		// Parse children up to closing delimiter (bounded parsing)
		const children = this.#parse_nodes_until('~', close_index);

		// Verify we're at the closing delimiter (could have stopped early due to paragraph break)
		if (!this.#match('~')) {
			// Interrupted before closing - treat as unclosed
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '~',
				start,
				end: this.#index,
			};
		}

		// Consume closing ~
		this.#eat('~');
		return {
			type: 'Strikethrough',
			children,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse markdown link: `[text](url)`.
	 * Falls back to text if malformed.
	 */
	#parse_markdown_link(): Mdz_Link_Node | Mdz_Text_Node {
		const start = this.#index;

		// Consume opening [
		if (!this.#match('[')) {
			const content = this.#template[this.#index]!;
			this.#index++;
			return {
				type: 'Text',
				content,
				start,
				end: this.#index,
			};
		}
		this.#index++;

		// Parse children nodes until closing ]
		const children = this.#parse_nodes_until(']');

		// Check if we found the closing ]
		if (!this.#match(']')) {
			// No closing ], treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '[',
				start,
				end: this.#index,
			};
		}
		this.#index++; // consume ]

		// Check for opening (
		if (
			this.#index >= this.#template.length ||
			this.#template.charCodeAt(this.#index) !== LEFT_PAREN
		) {
			// No opening (, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '[',
				start,
				end: this.#index,
			};
		}
		this.#index++;

		// Find closing )
		const close_paren = this.#template.indexOf(')', this.#index);
		if (close_paren === -1) {
			// No closing ), treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '[',
				start,
				end: this.#index,
			};
		}

		// Extract URL/path
		const reference = this.#template.slice(this.#index, close_paren);

		// Validate reference is not empty or whitespace-only
		if (!reference.trim()) {
			// Empty reference, treat as text
			this.#index = start + 1;
			return {
				type: 'Text',
				content: '[',
				start,
				end: this.#index,
			};
		}

		// Validate all characters in reference are valid URI characters per RFC 3986
		// This prevents spaces and other invalid characters from being in markdown link URLs
		// Follows GFM behavior: invalid chars cause fallback to text, then auto-detection
		for (let i = 0; i < reference.length; i++) {
			const char_code = reference.charCodeAt(i);
			if (!this.#is_valid_path_char(char_code)) {
				// Invalid character in URL, treat as text and let auto-detection handle it
				this.#index = start + 1;
				return {
					type: 'Text',
					content: '[',
					start,
					end: this.#index,
				};
			}
		}

		this.#index = close_paren + 1;

		// Determine link type (external vs internal)
		const link_type =
			reference.startsWith('https://') || reference.startsWith('http://') ? 'external' : 'internal';

		return {
			type: 'Link',
			reference,
			children,
			link_type,
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse component/element tag: `<TagName>content</TagName>` or `<TagName />`
	 *
	 * Formats:
	 * - `<Alert>content</Alert>` - Svelte component with children (uppercase first letter)
	 * - `<div>content</div>` - HTML element with children (lowercase first letter)
	 * - `<Alert />` - self-closing component/element
	 *
	 * Tag names must start with a letter and can contain letters, numbers, hyphens, underscores.
	 *
	 * Falls back to text if malformed or unclosed.
	 *
	 * TODO: Add attribute support like `<Alert status="error">` or `<div class="container">`
	 */
	#parse_tag(): Mdz_Element_Node | Mdz_Component_Node | Mdz_Text_Node {
		const start = this.#index;

		// Save parent accumulation state to avoid polluting component children with parent's accumulated text
		const saved_accumulated_text = this.#accumulated_text;
		const saved_accumulated_start = this.#accumulated_start;
		const saved_nodes = this.#nodes.slice();

		// Clear accumulation state for parsing component children
		this.#accumulated_text = '';
		this.#nodes.length = 0;

		// Consume <
		if (!this.#match('<')) {
			// Restore parent state before returning
			this.#accumulated_text = saved_accumulated_text;
			this.#accumulated_start = saved_accumulated_start;
			this.#nodes.length = 0;
			this.#nodes.push(...saved_nodes);

			const content = this.#template[this.#index]!;
			this.#index++;
			return {
				type: 'Text',
				content,
				start,
				end: this.#index,
			};
		}
		this.#index++;

		// Parse tag name
		const tag_name_start = this.#index;
		let tag_name_end = this.#index;

		// Tag name must start with a letter
		if (this.#index >= this.#template.length) {
			// Just a `<` at EOF - restore parent state
			this.#accumulated_text = saved_accumulated_text;
			this.#accumulated_start = saved_accumulated_start;
			this.#nodes.length = 0;
			this.#nodes.push(...saved_nodes);
			return {
				type: 'Text',
				content: '<',
				start,
				end: this.#index,
			};
		}

		const first_char = this.#template.charCodeAt(this.#index);
		if (!this.#is_letter(first_char)) {
			// Not a valid tag, treat as text - restore parent state
			this.#accumulated_text = saved_accumulated_text;
			this.#accumulated_start = saved_accumulated_start;
			this.#nodes.length = 0;
			this.#nodes.push(...saved_nodes);
			return {
				type: 'Text',
				content: '<',
				start,
				end: start + 1,
			};
		}

		// Collect tag name (letters, numbers, hyphens, underscores)
		while (this.#index < this.#template.length) {
			const char_code = this.#template.charCodeAt(this.#index);
			if (this.#is_tag_name_char(char_code)) {
				this.#index++;
			} else {
				break;
			}
		}

		tag_name_end = this.#index;
		const tag_name = this.#template.slice(tag_name_start, tag_name_end);

		if (tag_name.length === 0) {
			// Empty tag name - restore parent state
			this.#accumulated_text = saved_accumulated_text;
			this.#accumulated_start = saved_accumulated_start;
			this.#nodes.length = 0;
			this.#nodes.push(...saved_nodes);
			return {
				type: 'Text',
				content: '<',
				start,
				end: start + 1,
			};
		}

		// Determine if this is a Component (uppercase) or Element (lowercase)
		const first_char_code = tag_name.charCodeAt(0);
		const is_component = first_char_code >= 65 && first_char_code <= 90; // A-Z
		const node_type: 'Component' | 'Element' = is_component ? 'Component' : 'Element';

		// Skip whitespace after tag name (for future attribute support)
		while (
			this.#index < this.#template.length &&
			this.#template.charCodeAt(this.#index) === SPACE
		) {
			this.#index++;
		}

		// TODO: Parse attributes here

		// Check for self-closing />
		if (
			this.#index + 1 < this.#template.length &&
			this.#template.charCodeAt(this.#index) === SLASH &&
			this.#template.charCodeAt(this.#index + 1) === RIGHT_ANGLE
		) {
			this.#index += 2;

			// Restore parent state before returning
			this.#accumulated_text = saved_accumulated_text;
			this.#accumulated_start = saved_accumulated_start;
			this.#nodes.length = 0;
			this.#nodes.push(...saved_nodes);

			return {
				type: node_type,
				name: tag_name,
				children: [],
				start,
				end: this.#index,
			};
		}

		// Check for closing >
		if (
			this.#index >= this.#template.length ||
			this.#template.charCodeAt(this.#index) !== RIGHT_ANGLE
		) {
			// Unclosed opening tag, treat as text - restore parent state
			this.#accumulated_text = saved_accumulated_text;
			this.#accumulated_start = saved_accumulated_start;
			this.#nodes.length = 0;
			this.#nodes.push(...saved_nodes);

			this.#index = start + 1;
			return {
				type: 'Text',
				content: '<',
				start,
				end: this.#index,
			};
		}

		// Consume >
		this.#index++;

		// Parse children until closing tag
		const closing_tag = `</${tag_name}>`;
		const children: Array<Mdz_Node> = [];

		while (this.#index < this.#template.length) {
			// Check for closing tag
			if (this.#match(closing_tag)) {
				// Flush any accumulated text from children
				this.#flush_text();
				children.push(...this.#nodes);
				this.#nodes.length = 0;

				this.#index += closing_tag.length;

				// Restore parent state before returning
				this.#accumulated_text = saved_accumulated_text;
				this.#accumulated_start = saved_accumulated_start;
				this.#nodes.length = 0;
				this.#nodes.push(...saved_nodes);

				return {
					type: node_type,
					name: tag_name,
					children,
					start,
					end: this.#index,
				};
			}

			const node = this.#parse_node();
			if (node.type === 'Text') {
				this.#accumulate_text(node.content, node.start);
			} else {
				this.#flush_text();
				children.push(...this.#nodes);
				this.#nodes.length = 0;
				children.push(node);
			}
		}

		// Unclosed tag - reached EOF without finding closing tag
		// Treat the opening tag as text - restore parent state
		this.#accumulated_text = saved_accumulated_text;
		this.#accumulated_start = saved_accumulated_start;
		this.#nodes.length = 0;
		this.#nodes.push(...saved_nodes);

		this.#index = start + 1;
		return {
			type: 'Text',
			content: '<',
			start,
			end: this.#index,
		};
	}

	/**
	 * Check if nodes represent a single tag (component or element) with only whitespace text nodes.
	 * Used to determine if paragraph wrapping should be skipped (MDX convention).
	 * Returns true if there's exactly one Component/Element node and all other nodes are whitespace-only Text nodes.
	 */
	#is_single_tag(nodes: Array<Mdz_Node>): boolean {
		let found_tag = false;

		for (const node of nodes) {
			if (node.type === 'Component' || node.type === 'Element') {
				if (found_tag) return false; // Multiple tags
				found_tag = true;
			} else if (node.type === 'Text') {
				// Allow only whitespace-only text nodes
				if (node.content.trim() !== '') return false;
			} else {
				// Any other node type means not a single tag
				return false;
			}
		}

		return found_tag;
	}

	/**
	 * Check if character code is a letter (A-Z, a-z).
	 */
	#is_letter(char_code: number): boolean {
		return (char_code >= 65 && char_code <= 90) || (char_code >= 97 && char_code <= 122);
	}

	/**
	 * Check if character code is valid for tag name (letter, number, hyphen, underscore).
	 */
	#is_tag_name_char(char_code: number): boolean {
		return (
			this.#is_letter(char_code) ||
			(char_code >= 48 && char_code <= 57) || // 0-9
			char_code === HYPHEN || // -
			char_code === UNDERSCORE // _
		);
	}

	/**
	 * Check if character is part of a word (alphanumeric or underscore).
	 * Used for word boundary detection to prevent intraword emphasis.
	 */
	#is_word_char(char_code: number): boolean {
		return (
			// A-Z
			(char_code >= 65 && char_code <= 90) ||
			// a-z
			(char_code >= 97 && char_code <= 122) ||
			// 0-9
			(char_code >= 48 && char_code <= 57) ||
			// _
			char_code === UNDERSCORE
		);
	}

	/**
	 * Check if position is at a word boundary.
	 * Word boundary = not surrounded by alphanumeric/underscore characters.
	 * Used to prevent intraword emphasis for underscores, asterisks, tildes.
	 *
	 * Following GFM spec: underscores should not create emphasis in middle of words
	 * (e.g., snake_case_identifier should remain literal).
	 *
	 * @param index - Position to check
	 * @param check_before - Whether to check the character before this position
	 * @param check_after - Whether to check the character after this position
	 */
	#is_at_word_boundary(index: number, check_before: boolean, check_after: boolean): boolean {
		if (check_before && index > 0) {
			const prev = this.#template.charCodeAt(index - 1);
			// If preceded by word char, not at boundary
			if (this.#is_word_char(prev)) {
				return false;
			}
		}

		if (check_after && index < this.#template.length) {
			const next = this.#template.charCodeAt(index);
			// If followed by word char, not at boundary
			if (this.#is_word_char(next)) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Check if character code is valid in URI path per RFC 3986.
	 * Validates against the `pchar` production plus path/query/fragment separators.
	 *
	 * Valid characters:
	 * - unreserved: A-Z a-z 0-9 - . _ ~
	 * - sub-delims: ! $ & ' ( ) * + , ; =
	 * - path allowed: : @
	 * - separators: / ? #
	 * - percent-encoding: %
	 */
	#is_valid_path_char(char_code: number): boolean {
		return (
			// A-Z
			(char_code >= 65 && char_code <= 90) ||
			// a-z
			(char_code >= 97 && char_code <= 122) ||
			// 0-9
			(char_code >= 48 && char_code <= 57) ||
			// unreserved: - . _ ~
			char_code === 45 || // -
			char_code === 46 || // .
			char_code === 95 || // _
			char_code === 126 || // ~
			// sub-delims: ! $ & ' ( ) * + , ; =
			char_code === 33 || // !
			char_code === 36 || // $
			char_code === 38 || // &
			char_code === 39 || // '
			char_code === 40 || // (
			char_code === 41 || // )
			char_code === 42 || // *
			char_code === 43 || // +
			char_code === 44 || // ,
			char_code === 59 || // ;
			char_code === 61 || // =
			// path allowed: : @
			char_code === 58 || // :
			char_code === 64 || // @
			// separators: / ? #
			char_code === 47 || // /
			char_code === 63 || // ?
			char_code === 35 || // #
			// percent-encoding: %
			char_code === 37 // %
		);
	}

	/**
	 * Check if current position is the start of an external URL (https:// or http://).
	 */
	#is_at_url(): boolean {
		if (this.#match('https://')) {
			// Check for protocol-only (e.g., just "https://")
			// Must have at least one non-whitespace character after protocol
			if (this.#index + 8 >= this.#template.length) {
				return false;
			}
			const next_char = this.#template.charCodeAt(this.#index + 8);
			return next_char !== SPACE && next_char !== NEWLINE;
		}
		if (this.#match('http://')) {
			// Check for protocol-only (e.g., just "http://")
			// Must have at least one non-whitespace character after protocol
			if (this.#index + 7 >= this.#template.length) {
				return false;
			}
			const next_char = this.#template.charCodeAt(this.#index + 7);
			return next_char !== SPACE && next_char !== NEWLINE;
		}
		return false;
	}

	/**
	 * Check if current position is the start of an internal path (starts with /).
	 */
	#is_at_internal_path(): boolean {
		if (this.#template.charCodeAt(this.#index) !== SLASH) {
			return false;
		}
		// Check previous character - must be whitespace or start of string
		// (to avoid matching / within relative paths like ./a/b or ../a/b)
		if (this.#index > 0) {
			const prev_char = this.#template.charCodeAt(this.#index - 1);
			if (prev_char !== SPACE && prev_char !== NEWLINE && prev_char !== TAB) {
				return false;
			}
		}
		// Must have at least one more character after /, and it must NOT be:
		// - another / (to avoid matching // which is used for comments or protocol-relative URLs)
		// - whitespace (a bare / followed by space is not a useful link)
		if (this.#index + 1 >= this.#template.length) {
			return false;
		}
		const next_char = this.#template.charCodeAt(this.#index + 1);
		return next_char !== SLASH && next_char !== SPACE && next_char !== NEWLINE;
	}

	/**
	 * Parse auto-detected external URL (https:// or http://).
	 * Uses RFC 3986 whitelist validation for valid URI characters.
	 */
	#parse_auto_link_url(): Mdz_Link_Node {
		const start = this.#index;

		// Consume protocol
		if (this.#match('https://')) {
			this.#index += 8;
		} else if (this.#match('http://')) {
			this.#index += 7;
		}

		// Collect URL characters using RFC 3986 whitelist
		// Stop at whitespace or any character invalid in URIs
		while (this.#index < this.#template.length) {
			const char_code = this.#current_char();
			if (char_code === SPACE || char_code === NEWLINE || !this.#is_valid_path_char(char_code)) {
				break;
			}
			this.#index++;
		}

		let reference = this.#template.slice(start, this.#index);

		// Apply GFM trailing punctuation trimming with balanced parentheses
		reference = this.#trim_trailing_punctuation(reference);

		// Update index after trimming
		this.#index = start + reference.length;

		return {
			type: 'Link',
			reference,
			children: [{type: 'Text', content: reference, start, end: this.#index}],
			link_type: 'external',
			start,
			end: this.#index,
		};
	}

	/**
	 * Parse auto-detected internal path (starts with /).
	 * Uses RFC 3986 whitelist validation for valid URI characters.
	 */
	#parse_auto_link_internal(): Mdz_Link_Node {
		const start = this.#index;

		// Collect path characters using RFC 3986 whitelist
		// Stop at whitespace or any character invalid in URIs
		while (this.#index < this.#template.length) {
			const char_code = this.#current_char();
			if (char_code === SPACE || char_code === NEWLINE || !this.#is_valid_path_char(char_code)) {
				break;
			}
			this.#index++;
		}

		let reference = this.#template.slice(start, this.#index);

		// Apply GFM trailing punctuation trimming
		reference = this.#trim_trailing_punctuation(reference);

		// Update index after trimming
		this.#index = start + reference.length;

		return {
			type: 'Link',
			reference,
			children: [{type: 'Text', content: reference, start, end: this.#index}],
			link_type: 'internal',
			start,
			end: this.#index,
		};
	}

	/**
	 * Trim trailing punctuation from URL/path per RFC 3986 and GFM rules.
	 * - Trims simple trailing: .,;:!?]
	 * - Balanced logic for () only (valid in path components)
	 * - Invalid chars like [] {} are already stopped by whitelist, but ] trimmed as fallback
	 */
	#trim_trailing_punctuation(url: string): string {
		let trimmed = url;

		// Trim simple trailing punctuation (] as fallback - whitelist should prevent it)
		while (trimmed.length > 0) {
			const last_char = trimmed.charCodeAt(trimmed.length - 1);
			if (
				last_char === PERIOD ||
				last_char === COMMA ||
				last_char === SEMICOLON ||
				last_char === COLON ||
				last_char === EXCLAMATION ||
				last_char === QUESTION ||
				last_char === RIGHT_BRACKET
			) {
				trimmed = trimmed.slice(0, -1);
			} else {
				break;
			}
		}

		// Handle balanced parentheses ONLY (parens are valid in URI path components)
		while (trimmed.length > 0) {
			const last_char = trimmed.charCodeAt(trimmed.length - 1);
			if (last_char === RIGHT_PAREN) {
				// Count opening and closing parens
				let open_count = 0;
				let close_count = 0;

				for (let i = 0; i < trimmed.length; i++) {
					const char = trimmed.charCodeAt(i);
					if (char === LEFT_PAREN) open_count++;
					if (char === RIGHT_PAREN) close_count++;
				}

				// If more closing than opening, this trailing one is unmatched - trim it
				if (close_count > open_count) {
					trimmed = trimmed.slice(0, -1);
				} else {
					break;
				}
			} else {
				break;
			}
		}

		return trimmed;
	}

	/**
	 * Parse plain text until special character encountered.
	 * Preserves all whitespace (except paragraph breaks handled separately).
	 * Detects and delegates to URL/path parsing when encountered.
	 */
	#parse_text(): Mdz_Text_Node | Mdz_Link_Node {
		const start = this.#index;

		// Check for URL or internal path at current position
		if (this.#is_at_url()) {
			return this.#parse_auto_link_url();
		}
		if (this.#is_at_internal_path()) {
			return this.#parse_auto_link_internal();
		}

		while (this.#index < this.#template.length) {
			const char_code = this.#current_char();

			// Stop at special characters (but preserve single newlines)
			if (
				char_code === BACKTICK ||
				char_code === ASTERISK ||
				char_code === UNDERSCORE ||
				char_code === TILDE ||
				char_code === LEFT_BRACKET ||
				char_code === RIGHT_BRACKET ||
				char_code === RIGHT_PAREN ||
				char_code === LEFT_ANGLE
			) {
				break;
			}

			// Check for paragraph break (double newline)
			if (this.#is_at_paragraph_break()) {
				break;
			}

			// Check for URL or internal path mid-text
			if (this.#is_at_url() || this.#is_at_internal_path()) {
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
	 *
	 * @param delimiter - The delimiter string to stop at
	 * @param end_index - Optional maximum index to parse up to (for greedy/bounded parsing)
	 */
	#parse_nodes_until(delimiter: string, end_index?: number): Array<Mdz_Node> {
		const nodes: Array<Mdz_Node> = [];
		const max_index = end_index ?? this.#template.length;

		// Save and set max search boundary for nested parsers
		const saved_max_search_index = this.#max_search_index;
		this.#max_search_index = max_index;

		while (this.#index < max_index) {
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

		// Restore previous boundary
		this.#max_search_index = saved_max_search_index;

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
