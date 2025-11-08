# MDZ Phase 1: Simple Block Elements

This document outlines the first phase of block-level markdown features for mdz.
These features are intentionally simple and unintrusive - they have clear,
unambiguous syntax and don't require complex newline handling.

## Design Principles

1. **One way to do things**: Single syntax for each feature type
2. **Whitespace preservation**: All whitespace rendered with
   `white-space: pre-wrap`
3. **Column-0 requirement**: Block elements must start at column 0
4. **Explicit delimiters**: Clear start/end markers, no ambiguous inference
5. **Graceful degradation**: Invalid syntax falls back to plain text
6. **Backwards compatible**: Strict rules prevent false positives on existing
   docs

## Phase 1 Features

### 1. ATX Headings ✅ IMPLEMENTED

Semantic document structure using hash markers (`#` through `######`). Must
start at column 0, have space after hashes, require blank line after (or be at
EOF), and require blank line before (or be at document start). Can contain
inline formatting. Trailing hashes treated as literal content. Block elements
interrupt inline formatting context. Node: `Mdz_Heading_Node`. Renders: `<h1>`
through `<h6>`.

---

### 2. Fenced Code Blocks

Multi-line code with optional language hints using backtick fences (`` ``` `` or
more). Must start at column 0, require blank lines before/after (or document
boundaries). Closing fence must match opening backtick count. First newline
after opening consumed. Higher fence counts can wrap lower (4 wraps 3, etc.).
Code blocks cannot be nested (but can contain backticks via fence wrapping).
Node: `Mdz_Code_Block_Node`. Renders: `<Code>` component from
`@ryanatkn/fuz_code`.

**Not to be confused with inline code:** Single backticks `` `code` `` create
inline code with identifier linking, while triple+ backticks create multi-line
code blocks without linking.

#### Syntax

````
```
code here
```
````

With language hint:

````
```ts
const x: number = 42;
```
````

#### Rules

- Opening fence: three or more backticks `` ``` `` (or more: ``, etc.)
- **MUST** start at column 0 (at document top-level)
- **MUST** have blank line before (or be at document start)
- **MUST** have blank line after (or be at document end)
- **MUST** have closing fence with matching backtick count (or treated as plain
  text)
- Optional language hint directly after opening fence: `` ```lang ``
- Language hint consumed until space or newline, case preserved
- All whitespace between fences preserved exactly
- First newline after opening fence is consumed (not part of content)
- Higher fence count can wrap lower count content (4 backticks can contain 3)

#### Examples

**Basic code block:**

````
```
function hello() {
  console.log("world");
}
```
````

**With language hint:**

````
```js
const x = 1;
```
````

**Preserves all internal whitespace:**

````
```
	tabs	and    spaces
  indentation
    preserved
```
````

#### Edge Cases

**Unclosed fence (treated as plain text):**

````
```ts
function foo() {
// Missing closing fence - entire thing is plain text with literal backticks
````

**Why require closing fence?** If we auto-close at EOF, this would break:

````
Use ``` to create code blocks
````

Without requiring closing, the rest of the document becomes a code block!

**Language hint with spaces:**

````
``` javascript with spaces
code
```
````

Language is `"javascript"`, rest after space ignored (consumed until newline).

**Language hint with special characters:**

````
```c++
code
```
````

Language hint can contain special chars like `c++`, `C#`, `node.js` - consumed
until space or newline.

**Fence not at column 0 (plain text):**

````
```
not a code block (indented)
```
````

At top-level, fences must start at column 0. (Within lists/quotes, they can be
indented to match that context - see Phase 2.)

**Mismatched fence length:**

````
```
code
````

```
3 opening backticks, 4 closing backticks - treated as plain text (unclosed
fence).

**Block elements break inline:**
```

**Bold starts

```
code
```

Bold ends**

```
Code block interrupts bold formatting. Parses as three separate elements.

**Empty code block:**
```

```
```

```
Valid - renders with empty content string `""`.

**Nested backticks (using higher fence count):**
```

````
Use ``` to create code blocks
````

`````
4-backtick fence allows 3-backtick content. 5-backtick fence allows 4-backtick
content, etc.

**Content examples:**

- `` ```\ncode\n``` `` → content: `"code"` (first newline consumed)
- `` ```\n\n``` `` → content: `""` (empty, first newline consumed)
- `` ```\nline1\nline2\n``` `` → content: `"line1\nline2"` (internal newlines
  preserved)

#### Integration with fuz_code

Code blocks should use the `Code` component from
`@ryanatkn/fuz_code/Code.svelte`:

```svelte
<Code lang={lang ?? undefined}>
	{content}
</Code>
```

Where:

- `lang` is the language hint (or `null` if not provided)
- `content` is the raw code string

#### Node Type

```ts
interface Mdz_Code_Block_Node extends Mdz_Base_Node {
  type: "Code_Block";
  lang: string | null; // language hint, if provided
  content: string; // raw code content
}
```

#### Rendering

Use `Code` component from `@ryanatkn/fuz_code/Code.svelte` with `lang` prop.

---

### 3. Horizontal Rules ✅ IMPLEMENTED

Visual separators. Syntax: `---` (exactly 3 hyphens at column 0, blank lines
around it except at doc boundaries). Node: `Mdz_Hr_Node`. Renders: `<hr>`.

---

## Why These Features in Phase 1?

### Headings

- **Simple**: Single-line, clear delimiters
- **Unambiguous**: Column-0 + space-after-hash prevents false positives
- **Essential**: Critical for document structure in API docs
- **No complex newline handling**: Just consume until `\n`

### Code Blocks

- **Essential**: Multi-line code examples are core to API documentation
- **Clear delimiters**: Opening and closing fences are explicit
- **Self-contained**: Content between fences doesn't interact with other
  features
- **Graceful degradation**: Unclosed fences fall back to plain text safely

### Horizontal Rules

Simple visual separators with unambiguous syntax.

## What Phase 1 Does NOT Include

### Lists

Too complex for Phase 1:

- Multi-line item continuation semantics
- Nesting detection
- Blank line handling
- Interaction with paragraph breaks

**→ Deferred to separate document (TODO_MDZ_LISTS_QUOTES.md)**

### Blockquotes

Complex newline handling:

- Line-by-line marker requirements
- Lazy continuation decisions
- Nesting semantics
- Can contain other blocks

**→ Deferred to separate document (TODO_MDZ_LISTS_QUOTES.md)**

### Tables

Very complex to parse and render:

- Column alignment
- Cell content parsing
- Escaping pipe characters
- Edge case handling

**→ Future consideration, not in initial scope**

## Explicitly NOT Implementing

### Setext Headings (Underlines)

```
Heading
=======
```

**Why not:** Too ambiguous with preserved whitespace. Could be a heading, or
just text with a visual separator below it. ATX headings (`#`) are unambiguous.

### Indented Code Blocks (4-space rule)

```
code here (indented 4 spaces)
```

**Why not:** Conflicts with mdz's whitespace preservation philosophy. Users
indent text for visual formatting, not to signal code blocks. Using indentation
for structure would create false positives.

### Alternative HR Syntax (`***`, `___`)

**Why not:** One way to do things. `---` is sufficient.

### Lazy Continuation

**Why not:** Conflicts with explicit whitespace preservation. Deferred to
lists/quotes discussion.

## Compatibility with Other Markdowns

mdz uses simplified, unambiguous syntax that differs from CommonMark/GFM in key
ways:

### Inline Formatting

| Style  | mdz          | CommonMark/GFM           |
| ------ | ------------ | ------------------------ |
| Bold   | `**text**`   | `**text**` or `__text__` |
| Italic | `_text_`     | `*text*` or `_text_`     |
| Code   | `` `text` `` | `` `text` ``             |

**Key difference:** In mdz, `*` is reserved for bold (with `**`) and single `*`
has no special meaning. This differs from CommonMark where `*text*` creates
italic.

**Why this design?**

- Visually distinct: `_` for italic, `**` for bold — no ambiguity
- One syntax per style: reduces confusion and parser complexity
- List-friendly: single `-` for lists (future), `*` for bold only
- LLM-friendly: while most LLMs expect `*` for italic, using only `_` for italic
  and `**` for bold is close enough to CommonMark that conversion is
  straightforward

**Migration from CommonMark:**

- `*italic*` → `_italic_` (replace single asterisks with underscores)
- `**bold**` → no change
- `__italic__` → `_italic_` (replace double underscores with single)

## Backwards Compatibility

These features are designed to NOT break existing mdz documents:

### Headings

```
Someone's text:
  # TODO: fix this

#hashtag for social media
```

Neither becomes a heading:

- First has leading space (not column 0)
- Second has no space after `#`

### Code Blocks

````
Use ``` for code blocks

Some text continues here
````

The unclosed ``` doesn't consume the document - it's treated as plain text with
literal backticks.

### Horizontal Rules

```
Price range: $10 - $20 or $30 - $40
```

The hyphens are NOT horizontal rules:

- Not alone on line
- Not at column 0

## Parsing Strategy

### At Each Newline

When the parser encounters `\n`, peek at the next character(s) to determine if a
block element is starting:

````ts
// After consuming \n, check what's next
const next_char = this.#template.charCodeAt(this.#index);

switch (next_char) {
  case HASH: // #
    if (this.#match_heading()) {
      return this.#parse_heading();
    }
    break;

  case BACKTICK: // `
    if (this.#match("```")) {
      return this.#parse_code_block();
    }
    break;

  case HYPHEN: // -
    if (this.#match_hr()) {
      return this.#parse_hr();
    }
    break;
}

// Otherwise, continue with paragraph/inline parsing
return this.#parse_node();
````

### Block Element Priority

When multiple interpretations are possible, priority order:

1. Code block (consumes everything until closing fence)
2. Heading (single line)
3. Horizontal rule (single line)
4. Continue paragraph

### Performance

These features add minimal overhead:

- Fast character-code checks at newlines
- No complex lookahead or backtracking
- Each block type has clear start/end conditions

## Testing Strategy

### Fixture Coverage

Create fixtures for:

**Headings:** ✅

- `heading_h1` through `heading_h6` - all levels
- `heading_with_inline` - bold, italic, code within headings
- `heading_trailing_hashes` - trailing `#` treated as content
- `heading_multiline` - heading followed by paragraph
- `heading_multiple` - various levels in sequence
- `heading_at_start` / `heading_at_end` - boundary positions
- `heading_breaks_inline` - heading interrupting bold formatting
- `heading_invalid_no_space` - `#NoSpace` (plain text)
- `heading_invalid_indented` - `# Leading` (plain text)
- `heading_invalid_seven_hashes` - `#######` (plain text)
- `heading_invalid_no_content` - `#` (whitespace only, plain text)
- `heading_invalid_single_newline_before` / `_after` - wrong newline placement

**Code Blocks:**

- `code_block_simple` - basic without language hint
- `code_block_with_lang` - with `typescript`, `javascript`, etc.
- `code_block_lang_special_chars` - `c++`, `C#`, `node.js`
- `code_block_empty` - empty content `""`
- `code_block_whitespace` - tabs, spaces, newlines preserved
- `code_block_at_start` / `_at_end` - boundary positions
- `code_block_between_paragraphs` - separating content
- `code_block_multiple` - several blocks
- `code_block_breaks_inline` - interrupting bold/italic
- `code_block_four_backticks` - using 4 backticks
- `code_block_five_backticks` - using 5 backticks
- `code_block_nested_three_in_four` - 4-fence wrapping 3-backtick content
- `code_block_nested_four_in_five` - 5-fence wrapping 4-backtick content
- `code_block_only_newlines` - just blank lines as content
- `code_block_invalid_unclosed` - missing closing fence (plain text)
- `code_block_invalid_indented` - not at column 0 (plain text)
- `code_block_invalid_single_newline_before` - no blank before
- `code_block_invalid_single_newline_after` - no blank after
- `code_block_invalid_mismatched_fence` - 3 opening, 4 closing (plain text)

**Horizontal Rules:** ✅

- `hr_simple` - basic `---`
- `hr_with_trailing_whitespace` - `---` (trailing spaces OK)
- `hr_at_start` - hr at document start
- `hr_at_end` - hr at document end
- `hr_between_paragraphs` - hr separating paragraphs
- `hr_multiple` - multiple hrs in sequence
- `hr_after_paragraph_break` - hr after paragraph break
- `hr_invalid_two_hyphens` - `--` (should be plain text)
- `hr_invalid_four_hyphens` - `----` (should be plain text)
- `hr_invalid_not_alone` - `text---text` (should be plain text)
- `hr_invalid_with_spaces` - `- - -` (should be plain text, not HR)
- `hr_invalid_with_leading_whitespace` - `---` (not at column 0)
- `hr_invalid_single_newline_before` - `text\n---` (should be plain text)
- `hr_invalid_single_newline_after` - `---\ntext` (should be plain text)

**Interactions:**

- `heading_breaks_inline` - heading interrupts bold
- `hr_breaks_inline` - HR interrupts bold
- `bold_multiline` / `italic_multiline` / `strikethrough_multiline` - formatting
  continues across single newlines
- `bold_invalid_across_paragraph_break` (and italic/strikethrough) - paragraph
  breaks interrupt inline formatting

### Edge Case Tests

- Empty input
- Only whitespace
- Block elements at start of document
- Block elements at end of document
- Block elements with only whitespace between them
- Unicode in headings and code blocks
- Very long heading text
- Very long code blocks

## Implementation Status

1. ✅ **Horizontal Rules** - DONE
2. ✅ **Headings** - DONE
3. **Code Blocks** - TODO

## Open Questions

1. **Code block language hints**: Should we validate against known languages, or
   accept any text?
   - **Recommendation**: Accept any text. Some hints might be custom.

## Next Steps

After completing Code Blocks:

1. **Final Phase 1 review** - test all three block elements together
2. **Performance profiling** - ensure no regression
3. **Documentation** - update main docs with examples
4. **Consider Phase 2** - lists and blockquotes (see `TODO_MDZ_LISTS_QUOTES.md`)
`````
