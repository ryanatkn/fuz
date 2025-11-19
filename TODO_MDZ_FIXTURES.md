# TODO: MDZ Fixtures

Potential fixtures to add based on recent changes (link children + greedy delimiter matching).

## High Priority - Link Children Feature

These validate the core `display_text → children` change for links.

### 1. `link_markdown_with_deeply_nested_formatting`
**Input:** `[**bold _italic ~strike `code`~_**](url)`
**Tests:** 3+ level nesting works correctly with link children
**Why:** Validates that deeply nested formatting parses correctly inside link display text

### 2. `link_markdown_with_unclosed_bold_inside`
**Input:** `[**bold text](url)`
**Tests:** Unclosed bold stops at `]` boundary
**Why:** Ensures greedy matching respects link's closing bracket - bold can't escape the link

### 3. `link_markdown_with_code_inside`
**Input:** `[text `code` inside](url)`
**Tests:** Inline code parses correctly as child node inside link
**Why:** Validates code nodes work in link children (not just text/bold/italic)

### 4. `link_markdown_ending_with_delimiters`
**Input:** `[text **](url)`
**Tests:** Link text ending with delimiter characters
**Why:** Ensures `]` parser doesn't get confused by `**` immediately before it

## High Priority - Auto-Link Nesting

These test auto-detected links inside formatting (not currently covered).

### 5. `auto_link_nested_in_bold`
**Input:** `**see https://example.com here**`
**Tests:** Auto-detected external URL inside bold formatting
**Why:** Validates auto-link detection works within formatted context

### 6. `auto_link_nested_in_italic`
**Input:** `_see /docs/guide here_`
**Tests:** Auto-detected internal path inside italic
**Why:** Validates internal path auto-detection within formatted context

## Medium Priority - Greedy Matching Validation

### 7. `link_with_balanced_parens_in_url`
**Input:** `[text](https://en.wikipedia.org/wiki/Lisp_(programming))`
**Tests:** Balanced parentheses in URLs
**Why:** Validates existing balanced paren logic still works with greedy matching

### 8. Verify `formatting_adjacent` - `**bold**_italic_`
**Action:** Review existing fixture
**Tests:** Adjacent different delimiters don't interfere
**Why:** Should already test this, verify behavior is correct

## Lower Priority - Edge Cases

### Link + Formatter Boundary Interactions

#### `bold_with_unclosed_link_inside`
**Input:** `**text [link](url)`
**Tests:** Link extending past bold's boundary (bold unclosed)
**Expected:** Link succeeds, bold fails

#### `link_markdown_with_unclosed_italic_inside`
**Input:** `[_italic text](url)`
**Tests:** Unclosed italic in link text
**Expected:** Link with literal `_italic text_` (no closing `_`)

#### `link_markdown_with_unclosed_code_inside`
**Input:** `[`code text](url)`
**Tests:** Unclosed backtick in link text
**Expected:** Link with literal backtick content

### Greedy + Word Boundaries

#### `bold_greedy_with_boundary_char_before_close`
**Input:** `**bold1 bold2**word`
**Tests:** Greedy finds first `**`, then validates word boundary
**Why:** Combines greedy search with boundary validation

#### `bold_intraword_with_link_nearby`
**Input:** `foo**[text](url)**bar`
**Tests:** Intraword position blocks bold even with link inside
**Why:** Word boundary check happens before greedy search

#### `deeply_unclosed_with_boundary_violation`
**Input:** `foo**bold_italic~strike`
**Tests:** All unclosed AND opening `**` is intraword
**Expected:** Everything renders as literal text

### Complex Nesting Patterns

#### `link_markdown_with_only_formatting_markers`
**Input:** `[**](url)` or `[_](url)`
**Tests:** Link text is only delimiters with no actual content
**Expected:** Link with empty bold/italic (or literal markers)

#### `deeply_unclosed_reverse_close_order`
**Input:** `**bold _italic ~strike~ _**`
**Tests:** Closes in wrong order (strike, then outer, then italic)
**Expected:** Only strike succeeds, rest is literal

#### `deeply_unclosed_partial_match`
**Input:** `**_~text~**_`
**Tests:** Mis-matched pairs (bold/italic don't match, only strike)
**Expected:** Only strike succeeds

### Component Interactions

#### `bold_crossing_component_boundary`
**Input:** `**text <Alert>alert</Alert>** more text`
**Tests:** Does component boundary interrupt inline formatting?
**Note:** May already work like paragraph breaks do

#### `link_inside_component_children`
**Input:** `<Alert>[link text](url)</Alert>`
**Tests:** Links work inside component children
**Expected:** Should work normally

#### `formatter_starting_inside_component`
**Input:** `<Alert>**bold text</Alert>**`
**Tests:** Bold starts inside component, continues outside
**Expected:** Component boundary likely breaks the bold

### Whitespace Handling

#### `link_markdown_whitespace_in_brackets`
**Input:** `[ text ](url)`
**Tests:** Spaces inside `[]` are preserved
**Expected:** Link children include " text " with spaces

#### `link_markdown_with_multiline_children`
**Input:** `[line1\nline2](url)`
**Tests:** Link text spans newline
**Expected:** Link children include both lines (unlike inline code which breaks on newline)

### Auto-Detection Edge Cases

#### `code_with_link_in_url`
**Input:** `` `https://example.com` ``
**Tests:** Code vs auto-link precedence
**Expected:** Code wins (backtick parsed first)

## Implementation Notes

**Naming conventions:**
- `{feature}_{variant}` for valid cases
- `{feature}_invalid_{reason}` for invalid syntax
- `{outer}_with_unclosed_{inner}` for nesting with unclosed inner
- `{outer}_unclosed_with_{inner}` for nesting with unclosed outer

**Process:**
1. Create fixture directory in `src/test/fixtures/mdz/{name}/`
2. Write `input.mdz` file
3. Run `gro src/test/fixtures/update` to generate `expected.json`
4. **Never manually edit `expected.json`** - always regenerate
5. Run `gro test` to verify

**Current status:** 215 mdz fixtures
- Recent additions: 7 greedy matching fixtures
- Recent renames: `formatting_unmatched_cross_type` → `bold_with_unclosed_italic`

## Questions to Resolve

1. **Component boundaries:** Do components interrupt inline formatting like paragraph breaks do?
2. **Link multiline:** Should links support newlines in display text? (Probably yes, unlike code)
3. **Balanced parens:** Does current implementation handle Wikipedia-style URLs correctly?
4. **Priority:** Which fixtures provide the most value for test coverage vs maintenance cost?
