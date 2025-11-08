import {test, assert, describe} from 'vitest';

import {mdz_parse, type Mdz_Node} from '$lib/mdz.js';

// TODO rework with fixtures

// Helper to extract node types for easier testing
const node_types = (nodes: Array<Mdz_Node>): Array<string> => nodes.map((n) => n.type);

// Helper to extract content from nodes
const text_content = (node: Mdz_Node): string => {
	if (node.type === 'Text') return node.content;
	if (node.type === 'Code') return node.content;
	if ('children' in node) {
		return node.children.map(text_content).join('');
	}
	return '';
};

// === Basic text parsing ===

describe('basic text parsing', () => {
	test('parses plain text', () => {
		const result = mdz_parse('hello world');
		assert.deepEqual(node_types(result), ['Paragraph']);
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.deepEqual(node_types(result[0]!.children), ['Text']);
			assert.strictEqual(text_content(result[0]!.children[0]!), 'hello world');
		}
	});

	test('preserves whitespace in text', () => {
		const result = mdz_parse('hello   world\twith\ttabs');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[0]!.children[0]!), 'hello   world\twith\ttabs');
		}
	});

	test('preserves single newlines', () => {
		const result = mdz_parse('line 1\nline 2');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[0]!.children[0]!), 'line 1\nline 2');
		}
	});
});

// === Code (backticks) ===

describe('code parsing', () => {
	test('parses inline code', () => {
		const result = mdz_parse('hello `code` world');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const children = result[0]!.children;
			assert.deepEqual(node_types(children), ['Text', 'Code', 'Text']);
			assert.strictEqual(text_content(children[0]!), 'hello ');
			if (children[1]!.type === 'Code') {
				assert.strictEqual(children[1]!.content, 'code');
				assert.strictEqual(children[1]!.reference, 'code');
			}
			assert.strictEqual(text_content(children[2]!), ' world');
		}
	});

	test('parses code with identifier-like content', () => {
		const result = mdz_parse('use `Foo_Bar` here');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const code_node = result[0]!.children[1]!;
			if (code_node.type === 'Code') {
				assert.strictEqual(code_node.content, 'Foo_Bar');
				assert.strictEqual(code_node.reference, 'Foo_Bar');
			}
		}
	});

	test('handles unclosed backtick as text', () => {
		const result = mdz_parse('hello `unclosed');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			// Text accumulation combines into one node for performance
			assert.deepEqual(node_types(result[0]!.children), ['Text']);
			const combined = result[0]!.children.map(text_content).join('');
			assert.strictEqual(combined, 'hello `unclosed');
		}
	});
});

// === Bold ===

describe('bold parsing', () => {
	test('parses bold text', () => {
		const result = mdz_parse('hello **bold** world');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const children = result[0]!.children;
			assert.deepEqual(node_types(children), ['Text', 'Bold', 'Text']);
			if (children[1]!.type === 'Bold') {
				assert.deepEqual(node_types(children[1]!.children), ['Text']);
				assert.strictEqual(text_content(children[1]!.children[0]!), 'bold');
			}
		}
	});

	test('handles unclosed bold as text', () => {
		const result = mdz_parse('hello **unclosed');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const combined = result[0]!.children.map(text_content).join('');
			assert.strictEqual(combined, 'hello **unclosed');
		}
	});
});

// === Strikethrough ===

describe('strikethrough parsing', () => {
	test('parses strikethrough with tilde', () => {
		const result = mdz_parse('hello ~strikethrough~ world');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const children = result[0]!.children;
			assert.deepEqual(node_types(children), ['Text', 'Strikethrough', 'Text']);
			if (children[1]!.type === 'Strikethrough') {
				assert.strictEqual(text_content(children[1]!.children[0]!), 'strikethrough');
			}
		}
	});

	test('handles unclosed strikethrough as text', () => {
		const result = mdz_parse('hello ~unclosed');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const combined = result[0]!.children.map(text_content).join('');
			assert.strictEqual(combined, 'hello ~unclosed');
		}
	});

	test('parses strikethrough with nested code', () => {
		const result = mdz_parse('~deleted `code` text~');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const strikethrough_node = result[0]!.children[0]!;
			if (strikethrough_node.type === 'Strikethrough') {
				assert.deepEqual(node_types(strikethrough_node.children), ['Text', 'Code', 'Text']);
			}
		}
	});

	test('parses strikethrough with nested bold', () => {
		const result = mdz_parse('~deleted **bold** text~');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const strikethrough_node = result[0]!.children[0]!;
			if (strikethrough_node.type === 'Strikethrough') {
				assert.deepEqual(node_types(strikethrough_node.children), ['Text', 'Bold', 'Text']);
			}
		}
	});

	test('parses strikethrough with nested italic', () => {
		const result = mdz_parse('~deleted *italic* text~');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const strikethrough_node = result[0]!.children[0]!;
			if (strikethrough_node.type === 'Strikethrough') {
				assert.deepEqual(node_types(strikethrough_node.children), ['Text', 'Italic', 'Text']);
			}
		}
	});
});

// === Italic ===

describe('italic parsing', () => {
	test('parses italic with asterisk', () => {
		const result = mdz_parse('hello *italic* world');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const children = result[0]!.children;
			assert.deepEqual(node_types(children), ['Text', 'Italic', 'Text']);
			if (children[1]!.type === 'Italic') {
				assert.strictEqual(text_content(children[1]!.children[0]!), 'italic');
			}
		}
	});

	test('parses italic with underscore', () => {
		const result = mdz_parse('hello _italic_ world');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const children = result[0]!.children;
			assert.deepEqual(node_types(children), ['Text', 'Italic', 'Text']);
			if (children[1]!.type === 'Italic') {
				assert.strictEqual(text_content(children[1]!.children[0]!), 'italic');
			}
		}
	});

	test('handles unclosed italic as text', () => {
		const result = mdz_parse('hello *unclosed');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const combined = result[0]!.children.map(text_content).join('');
			assert.strictEqual(combined, 'hello *unclosed');
		}
	});
});

// === Links (TSDoc tags) ===

describe('link parsing', () => {
	test('parses @link identifier', () => {
		const result = mdz_parse('see {@link Foo} for details');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const children = result[0]!.children;
			assert.deepEqual(node_types(children), ['Text', 'Link', 'Text']);
			if (children[1]!.type === 'Link') {
				assert.strictEqual(children[1]!.reference, 'Foo');
				assert.strictEqual(children[1]!.link_type, 'identifier');
				assert.strictEqual(children[1]!.display_text, undefined);
			}
		}
	});

	test('parses @link URL', () => {
		const result = mdz_parse('see {@link https://example.com} here');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const link_node = result[0]!.children[1]!;
			if (link_node.type === 'Link') {
				assert.strictEqual(link_node.reference, 'https://example.com');
				assert.strictEqual(link_node.link_type, 'url');
			}
		}
	});

	test('parses @link URL with display text', () => {
		const result = mdz_parse('see {@link https://example.com|Example} here');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const link_node = result[0]!.children[1]!;
			if (link_node.type === 'Link') {
				assert.strictEqual(link_node.reference, 'https://example.com');
				assert.strictEqual(link_node.display_text, 'Example');
				assert.strictEqual(link_node.link_type, 'url');
			}
		}
	});

	test('parses @see as synonym for @link', () => {
		const result = mdz_parse('refer to {@see Bar}');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const link_node = result[0]!.children[1]!;
			if (link_node.type === 'Link') {
				assert.strictEqual(link_node.reference, 'Bar');
				assert.strictEqual(link_node.link_type, 'identifier');
			}
		}
	});

	test('handles unclosed @link as text', () => {
		const result = mdz_parse('see {@link unclosed');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const combined = result[0]!.children.map(text_content).join('');
			assert.ok(combined.includes('{@link unclosed'));
		}
	});
});

// === Paragraphs ===

describe('paragraph handling', () => {
	test('creates paragraph for single content block', () => {
		const result = mdz_parse('single paragraph');
		assert.deepEqual(node_types(result), ['Paragraph']);
	});

	test('splits paragraphs on double newline', () => {
		const result = mdz_parse('paragraph 1\n\nparagraph 2');
		assert.deepEqual(node_types(result), ['Paragraph', 'Paragraph']);
		if (result[0]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[0]!.children[0]!), 'paragraph 1');
		}
		if (result[1]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[1]!.children[0]!), 'paragraph 2');
		}
	});

	test('handles multiple paragraph breaks', () => {
		const result = mdz_parse('p1\n\np2\n\np3');
		const types = node_types(result);
		// Should be: Paragraph, Paragraph, Paragraph
		assert.strictEqual(types.length, 3);
		assert.strictEqual(types[0], 'Paragraph');
		assert.strictEqual(types[1], 'Paragraph');
		assert.strictEqual(types[2], 'Paragraph');
	});
});

// === Nested formatting ===

describe('nested formatting', () => {
	test('parses bold with code inside', () => {
		const result = mdz_parse('**bold `code` text**');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const bold_node = result[0]!.children[0]!;
			if (bold_node.type === 'Bold') {
				assert.deepEqual(node_types(bold_node.children), ['Text', 'Code', 'Text']);
			}
		}
	});

	test('parses italic with code inside', () => {
		const result = mdz_parse('*italic `code` text*');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const italic_node = result[0]!.children[0]!;
			if (italic_node.type === 'Italic') {
				assert.deepEqual(node_types(italic_node.children), ['Text', 'Code', 'Text']);
			}
		}
	});

	test('parses code inside link text', () => {
		// This would be: text {@link Foo} text, which doesn't support nested content
		// But we can test that links work with code nearby
		const result = mdz_parse('`code` then {@link Foo}');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.deepEqual(node_types(result[0]!.children), ['Code', 'Text', 'Link']);
		}
	});
});

// === Complex real-world examples ===

describe('complex examples', () => {
	test('parses typical JSDoc comment', () => {
		const doc =
			'Creates a new `Foo` instance. See {@link Bar} for details.\n\nReturns **null** if invalid.';
		const result = mdz_parse(doc);

		// Should have: Paragraph, Paragraph
		assert.deepEqual(node_types(result), ['Paragraph', 'Paragraph']);

		// First paragraph
		if (result[0]!.type === 'Paragraph') {
			const types = node_types(result[0]!.children);
			assert.ok(types.includes('Code'));
			assert.ok(types.includes('Link'));
		}

		// Second paragraph
		if (result[1]!.type === 'Paragraph') {
			const types = node_types(result[1]!.children);
			assert.ok(types.includes('Bold'));
		}
	});

	test('handles mixed formatting', () => {
		const text = 'Use **bold** and *italic* with `code` and {@link Foo}.';
		const result = mdz_parse(text);

		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const types = node_types(result[0]!.children);
			assert.ok(types.includes('Bold'));
			assert.ok(types.includes('Italic'));
			assert.ok(types.includes('Code'));
			assert.ok(types.includes('Link'));
		}
	});

	test('handles mixed formatting with strikethrough', () => {
		const text = 'Use **bold** and *italic* and ~strikethrough~ with `code`.';
		const result = mdz_parse(text);

		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const types = node_types(result[0]!.children);
			assert.ok(types.includes('Bold'));
			assert.ok(types.includes('Italic'));
			assert.ok(types.includes('Strikethrough'));
			assert.ok(types.includes('Code'));
		}
	});
});

// === Edge cases ===

describe('edge cases', () => {
	test('handles empty string', () => {
		const result = mdz_parse('');
		assert.strictEqual(result.length, 0);
	});

	test('handles only whitespace', () => {
		const result = mdz_parse('   \n\t  ');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[0]!.children[0]!), '   \n\t  ');
		}
	});

	test('preserves leading whitespace', () => {
		const result = mdz_parse('   leading space');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[0]!.children[0]!), '   leading space');
		}
	});

	test('preserves trailing whitespace', () => {
		const result = mdz_parse('trailing space   ');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.strictEqual(text_content(result[0]!.children[0]!), 'trailing space   ');
		}
	});

	test('handles adjacent formatting', () => {
		const result = mdz_parse('**bold***italic*');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			assert.deepEqual(node_types(result[0]!.children), ['Bold', 'Italic']);
		}
	});

	test('handles special chars in text', () => {
		const result = mdz_parse('chars: @#$%^&()[]{}|\\;:\'",.<>?/');
		assert.strictEqual(result[0]!.type, 'Paragraph');
		if (result[0]!.type === 'Paragraph') {
			const content = text_content(result[0]!.children[0]!);
			assert.ok(content.includes('@#$%^&()[]{}|\\;:\'",.<>?/'));
		}
	});
});

test('no duplicate start positions in children', () => {
	const result = mdz_parse('Some text with `Docs_Link` and more `Docs_Link` references.');
	assert.strictEqual(result.length, 1);
	assert.strictEqual(result[0]!.type, 'Paragraph');
	if (result[0]!.type === 'Paragraph') {
		const children = result[0]!.children;
		const starts = children.map((c) => c.start);
		const unique_starts = new Set(starts);
		assert.strictEqual(
			starts.length,
			unique_starts.size,
			'Should have no duplicate start positions',
		);
	}
});

test('multiple code nodes have unique start positions', () => {
	const text = 'Use `Docs_Link` to link to docs, and `Docs_Link` again.';
	const result = mdz_parse(text);
	assert.strictEqual(result.length, 1);
	if (result[0]!.type === 'Paragraph') {
		const code_nodes = result[0]!.children.filter((c) => c.type === 'Code');
		assert.strictEqual(code_nodes.length, 2);
		assert.notStrictEqual(
			code_nodes[0]!.start,
			code_nodes[1]!.start,
			'Code nodes should have different start positions',
		);
	}
});
