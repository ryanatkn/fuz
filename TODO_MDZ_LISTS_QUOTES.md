# MDZ Lists and Blockquotes: Complex Newline Semantics

This document covers the more complex mdz features: lists and blockquotes. These
features require careful handling of newlines, continuation, nesting, and
interaction with paragraph breaks.

**Status:** Design document - semantics under discussion

## Why These Are Complex

Unlike Phase 1 features (headings, code blocks, horizontal rules), lists and
blockquotes have intricate newline handling:

- **Multi-line content**: Items/quotes can span multiple lines
- **Continuation semantics**: When does a new line continue vs. start something
  new?
- **Nesting**: Items within items, quotes within quotes
- **Blank line behavior**: Does it end the structure or stay within it?
- **Formatter integration**: Parser accepts various inputs, formatter normalizes

## Lists

### Core Design: One Marker, Flexible Continuation

**Marker:** `-` only (not `*` or `+`)

**Philosophy:** The `-` at column 0 signals "list item starts here". Everything
else is about how content continues and nests.

### Basic Syntax

```
- Item one
- Item two
- Item three
```

Renders as:

```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>
```

### List Start: No Blank Line Required

Lists can start immediately after text:

```
The parameters are:
- name: string
- age: number
```

No blank line needed between "are:" and the first `-`.

**Rationale:**

- Natural documentation pattern
- Column-0 requirement already prevents false positives
- More ergonomic for TSDoc comments (cramped space)

**Trade-off accepted:**

```
Some paragraph
- starts with hyphen at column 0
```

This WILL become a list. If you don't want that, add leading space or use a
different character.

### Multi-line Items: Continuation Semantics

**Rule:** Any non-marker line continues the current item.

```
- Item one starts here
continues on this line
and this line too
- Item two starts
```

Item one's content is three lines. Item two starts when we see the next `-`.

**No indentation required for continuation:**

```
- First item
content continues (no indent)
more content
- Second item
```

All valid. The formatter can add indentation for readability without changing
semantics.

**Why this design?**

- **Flexible input**: Accept various indentation styles
- **Formatter-friendly**: Formatter can normalize to preferred style
- **Clear rules**: Presence/absence of `-` determines structure
- **Whitespace preserved**: Indentation becomes part of content (rendered with
  `pre-wrap`)

### Indentation in Continuation Lines

Because mdz preserves whitespace, indentation in continuation lines is
meaningful:

```
- Item one
  indented continuation (2 spaces)
    more indentation (4 spaces)
- Item two
```

When rendered with `white-space: pre-wrap`, those indents are visible. This is
INTENTIONAL - users control their own whitespace.

The formatter can standardize this:

**Input (various styles):**

```
- Item
continuation no indent
- Item
  continuation with indent
```

**Formatter output (normalized):**

```
- Item
	continuation no indent
- Item
	continuation with indent
```

Formatter adds consistent indentation (e.g., one tab), but parser accepts both.

### List Ending: Blank Line (Paragraph Break)

**Rule:** A blank line (paragraph break `\n\n`) ends the list.

```
- Item one
- Item two

New paragraph here
```

The `\n\n` between "two" and "New" ends the list.

**Why paragraph break?**

- Consistent with mdz's universal "paragraph break ends blocks" pattern
- Clear, unambiguous signal
- Backwards compatible with existing paragraph handling

**Single newline does NOT end list:**

```
- Item one
- Item two
- Item three
```

These are all one list, even though each item is on its own line. The newlines
are just line breaks within the list structure, not paragraph breaks.

### Nesting: Context-Aware Indentation

**Rule:** A `-` marker that's indented relative to its parent creates a nested
item.

```
- Parent item
	- Child item (indented)
		- Grandchild item (more indented)
```

The parser detects nesting by **relative indentation depth**.

**Indentation amount not prescribed:**

```
- Parent
  - Child (2 spaces)
- Parent
	- Child (1 tab)
- Parent
    - Child (4 spaces)
```

All valid. Parser compares indentation depth, not specific amounts.

**Formatter normalizes:**

The formatter can standardize to a preferred indentation (e.g., one tab or 2
spaces):

```
- Parent
	- Child
		- Grandchild
```

### Distinguishing Continuation from Nesting

How do we know if an indented line is:

- Continuation of current item?
- Nested child item?

**Answer:** Presence of `-` marker.

**With marker = nested item:**

```
- Parent item
	- Child item (has -, so it's nested)
```

**Without marker = continuation:**

```
- Parent item
	continuation of parent (no -, so it's content)
```

**Mixed example:**

```
- Parent item text
continues here
	- Child item
	child continues
		- Grandchild
- Back to top level
```

Parse structure:

- Parent item: "Parent item text\ncontinues here" + [child item]
  - Child item: "Child item\nchild continues" + [grandchild]
    - Grandchild: "Grandchild"
- Top-level item: "Back to top level"

### Nesting Depth Detection Algorithm

**Approach:** Track indentation level of each item, compare to determine
nesting.

```ts
// Pseudocode
let current_item_indent = 0;
let parent_stack = [];

while (parsing) {
  if (line.startsWith("-")) {
    let indent = count_leading_whitespace(line);

    if (indent > current_item_indent) {
      // Nested item - push current to stack
      parent_stack.push(current_item);
      current_item_indent = indent;
    } else if (indent < current_item_indent) {
      // De-nest - pop from stack
      while (parent_stack.length && parent_stack.top.indent >= indent) {
        parent_stack.pop();
      }
      current_item_indent = indent;
    } else {
      // Same level - sibling item
    }

    create_new_item(indent);
  } else {
    // No marker - continuation of current item
    append_to_current_item(line);
  }
}
```

**Key insight:** We're building a tree based on relative indentation, not
absolute amounts.

### Ordered Lists

Same semantics as unordered, but with numbered markers:

```
1. First item
2. Second item
3. Third item
```

**Marker:** `1.`, `2.`, `3.`, etc.

**Rules:**

- **MUST** be at column 0 (or indented for nesting)
- **MUST** have space after period: `1. Item` not `1.Item`
- **Preserve actual numbers** - don't auto-renumber
- Same continuation/nesting semantics as unordered

**Number preservation:**

```
1. First
5. Fifth (we preserve the 5)
10. Tenth (we preserve the 10)
```

Parser stores actual numbers. CSS can renumber if desired, but we preserve
authorial intent.

**Mixed nesting:**

```
1. Ordered item
	- Unordered nested
		1. Ordered nested again
```

Nested lists can be different types.

### List Node Types

```ts
interface Mdz_List_Node extends Mdz_Base_Node {
  type: "List";
  ordered: boolean;
  start_number?: number; // for ordered lists, number of first item
  children: Array<Mdz_List_Item_Node>;
}

interface Mdz_List_Item_Node extends Mdz_Base_Node {
  type: "ListItem";
  number?: number; // for ordered list items
  children: Array<Mdz_Node>; // inline + block content
}
```

### Edge Cases and Ambiguities

#### Empty List Items

```
-
- Item with content
-
```

Valid. First and third items are empty (just the marker).

#### List Item with Only Whitespace

```
-

- Next item
```

First item contains just whitespace. Preserved as-is.

#### Blank Lines Within Items

**Single blank line:**

```
- Item one

  continues after blank line
- Item two
```

The blank line is part of item one's content (because no paragraph break yet -
need `\n\n`).

Wait, this is ambiguous. Let me think...

If "continues" has `-` marker, it's a new item. If "continues" has no marker,
it's continuation.

But we said blank line (`\n\n`) ends the list. So this would be:

- List with item one
- Paragraph break
- Plain text "continues after blank line"
- New list with item two

**Actually, I think we need to clarify:** Does blank line END the list, or can
blank lines exist WITHIN a list?

**Proposed clarification:**

A blank line WITHIN list content (before seeing another `-`) ends that specific
item and the list. You can't have paragraph breaks within list items in this
design.

If you want multiple paragraphs in a list item, you'd need to use explicit
markup (or we'd need to reconsider the semantics).

**Simpler rule:** Blank line always ends the list. Period.

```
- Item one

This is a new paragraph (list ended)
```

**This keeps it simple and unambiguous.**

#### Code Blocks in List Items

````
- Item with code example:

```javascript
const x = 1;
````

- Next item

```
The code block's blank lines would end the list by our rule. This is a problem.

**Possible solution:** Code blocks are special - they consume content including
blank lines until closing fence. The list item contains the code block node, and
the list continues after the closing fence.

But the code block starts with a blank line (after "example:"). Does that end the list?

**I think we need:** The blank line before the code fence doesn't end the list
IF it's followed by a fence. The fence signals "special block content coming".

**This adds complexity.** Alternatively: Keep it simple for initial
implementation - no block elements within list items. Only inline formatting.

#### Lists Starting Mid-Paragraph
```

Text here

- List item (column 0)

```
The `-` is at column 0 on a new line. This starts a list.

The text before it is a separate paragraph.

#### Indentation Edge Case
```

- Item one continuation or...
  - is this nested? (has marker)

```
Second line has no marker, so it's continuation.
Third line has marker, so it's nested.

But visually, they have similar indentation. This might be confusing.

**Formatter helps:** Normalize indentation so it's visually clear:
```

- Item one continuation or...
  - is this nested? (has marker)

```
Now it's clearer that both are indented, but one has a marker (nested) and one doesn't (continuation).

### Open Design Questions

1. **Can list items contain paragraph breaks?**
   - **Current proposal:** No - blank line ends the list entirely
   - **Alternative:** Blank line within item creates paragraph break in that item's content
   - **Impact:** Simpler parsing vs. more flexibility

2. **Can list items contain block elements (code blocks, quotes)?**
   - **Current proposal:** Not in initial implementation - only inline formatting
   - **Future:** Could add, but increases complexity
   - **Impact:** Limits richness of list content

3. **Should we enforce consistent nesting indentation?**
   - **Current proposal:** No - accept any depth, formatter normalizes
   - **Alternative:** Require specific amounts (2 or 4 spaces, or 1 tab)
   - **Impact:** Flexibility vs. strictness

4. **How do we handle mixed indentation (tabs + spaces)?**
   - **Current proposal:** Count character positions (tab = 1 char like space)
   - **Alternative:** Expand tabs to spaces (but conflicts with whitespace preservation)
   - **Impact:** Edge case complexity

5. **List start requiring blank line?**
   - **User is reconsidering:** Originally thought yes, now unsure
   - **My recommendation:** No blank line required (more ergonomic, column-0 prevents false positives)
   - **Trade-off:** Accepts `- ` at column 0 after text as list start

## Blockquotes

### Basic Syntax
```

> This is a quoted line This is another quoted line

````
Renders as:
```html
<blockquote>
  <p>This is a quoted line
  This is another quoted line</p>
</blockquote>
````

### Core Rules

- **Marker:** `>` at column 0 (or indented within other blocks)
- **Space after `>` optional but recommended:** `> quote` or `>quote`
- **Every line needs `>` marker** - no lazy continuation
- **Blank line (paragraph break) ends quote**
- Can contain paragraphs (double newline within quote)
- Can contain other blocks (nesting)

### No Lazy Continuation

Unlike typical markdown, mdz requires explicit `>` on every line:

**mdz (explicit):**

```
> Line one
> Line two
> Line three
```

**NOT allowed (lazy continuation):**

```
> Line one
Line two (missing >)
Line three (missing >)
```

In mdz, lines without `>` are NOT part of the quote.

**Why no lazy continuation?**

With whitespace preservation, lazy continuation is ambiguous:

```
> Quote line

New paragraph - is this still quoted?
```

In typical markdown (which normalizes whitespace), the blank line signals end of
quote. But in mdz, what if someone writes:

```
> Quote line one
Some visual spacing
> Quote line two
```

If we allow lazy continuation, "Some visual spacing" might be slurped into the
quote. That's not what the user intended - they put it there for visual effect.

**Requiring explicit `>`** makes intent clear: if a line is quoted, it has `>`.

### Paragraphs Within Quotes

Double newline within quote creates paragraph break:

```
> First paragraph in quote
>
> Second paragraph in quote
```

The `>` on the blank line keeps it within the quote. The blank line creates a
paragraph break within the quote content.

**Without `>` on blank line:**

```
> First paragraph in quote

> Second paragraph in quote
```

This is TWO separate blockquotes (paragraph break ended the first).

### Nesting Blockquotes

```
> Level one quote
>> Level two quote (nested)
>>> Level three quote
```

Each `>` character increases nesting depth.

**Going back up:**

```
>>> Three levels deep
>> Back to two levels
> Back to one level
```

Decreasing `>` count decreases nesting.

**Blank line ends all nesting:**

```
> Level one
>> Level two

New paragraph (all quotes ended)
```

### Blockquotes Containing Other Blocks

**Quotes can contain lists:**

```
> This quote contains a list:
> - Item one
> - Item two
> - Item three
```

Both the `>` AND the `-` are present. The list is inside the quote.

**Quotes can contain code blocks:**

````
> Here's a code example:
> ```javascript
> const x = 1;
> ```
````

The fences are prefixed with `>`.

**Quotes can contain headings:**

```
> # Heading in Quote
> Some content
```

Though this might be semantically weird - headings are usually document-level
structure.

### Blockquote Node Types

```ts
interface Mdz_Blockquote_Node extends Mdz_Base_Node {
  type: "Blockquote";
  children: Array<Mdz_Node>; // can contain paragraphs, lists, code, etc.
}
```

### Edge Cases

#### Empty Blockquote Lines

```
>
> Content
>
```

First and third lines are empty quoted lines (just `>`). Valid.

#### Blockquote with Only Whitespace

```
>
> Content
```

First line is `>` followed by whitespace. Valid - whitespace is preserved.

#### Mixed Indentation in Nested Quotes

```
> Level one
>>Level two (no space after >>)
```

Is the second line a nested quote?

**Rule:** Space after `>` is optional, so `>>Level two` is valid (two-level
quote).

But for readability, recommend `>> Level two` with spaces.

### Open Design Questions

1. **Should we require space after `>`?**
   - **Current proposal:** Optional (accept both `>quote` and `> quote`)
   - **Alternative:** Required (only `> quote` valid)
   - **Impact:** Strictness vs. flexibility

2. **Can blockquotes contain complex blocks (lists with nesting, code blocks)?**
   - **Current proposal:** Yes, recursively parse within quote
   - **Complexity:** Significant - need recursive block parsing
   - **Impact:** Rich content vs. implementation complexity

3. **How do we handle blockquote lines with varying indentation?**
   - **Example:** `>` at column 0, `>` at column 2
   - **Current proposal:** `>` must be at column 0 (at top-level)
   - **Impact:** Simplifies parsing

## Interaction Between Lists and Quotes

### List Inside Blockquote

```
> Quote with list:
> - Item one
> - Item two
```

Both `>` and `-` markers present. Parse as:

1. Blockquote node
2. Inside it, a List node
3. Inside that, ListItem nodes

### Blockquote Inside List

```
- List item with quote:
	> Quoted text
	> More quoted text
```

The `>` is indented to match list item content. Parse as:

1. List node
2. ListItem containing Blockquote node

### Complex Nesting

```
- List item one
	> Quote in list
	> - List in quote in list
	> - Another item
- List item two
```

This creates:

- List
  - Item one
    - Blockquote
      - List
        - Item
        - Item
  - Item two

**Complexity:** Recursive parsing required.

## Formatter Normalization

The parser accepts various styles, the formatter normalizes to preferred style.

### List Formatting

**Input (inconsistent):**

```
- Item one
continuation no indent
  - Nested (2 spaces)
- Item two
    - Nested (4 spaces)
```

**Formatter output (normalized to tabs):**

```
- Item one
	continuation no indent
	- Nested
- Item two
	- Nested
```

### Blockquote Formatting

**Input (inconsistent spacing):**

```
>Quote with no space
> Quote with space
>>Nested no space
>> Nested with space
```

**Formatter output (normalized with spaces):**

```
> Quote with no space
> Quote with space
>> Nested no space
>> Nested with space
```

## Implementation Strategy

### Phase 2A: Lists Only

Start with unordered lists:

1. Implement basic list parsing (flat items, no nesting)
2. Add multi-line continuation
3. Add nesting detection
4. Test extensively
5. Add ordered lists (same logic, different markers)

### Phase 2B: Blockquotes

After lists are stable:

1. Implement basic blockquote parsing
2. Add paragraph support within quotes
3. Add nesting
4. Add block elements within quotes (lists, code, etc.)

### Testing Approach

Fixture-based like current mdz tests:

**Lists:**

- `list_simple` - basic flat list
- `list_multiline_items` - continuation
- `list_nested` - various nesting depths
- `list_mixed_indent` - different indentation styles
- `list_ordered` - numbered lists
- `list_mixed_types` - ordered + unordered nesting
- `list_empty_items` - empty list items
- `list_with_inline` - bold, code, links in items

**Blockquotes:**

- `quote_simple` - basic quote
- `quote_multiline` - multiple quoted lines
- `quote_nested` - nested quotes
- `quote_with_paragraphs` - paragraph breaks within quote
- `quote_with_list` - list inside quote
- `quote_with_code` - code block inside quote

**Interactions:**

- `list_in_quote` - list inside blockquote
- `quote_in_list` - blockquote inside list item
- `complex_nesting` - deep nesting scenarios

## Summary of Key Decisions

### Lists

1. ✅ **No blank line required to start** - can follow text immediately
2. ✅ **Any non-marker line continues item** - formatter adds indentation
3. ✅ **Blank line ends list** - paragraph break is universal terminator
4. ✅ **Context-aware nesting** - detect by relative indentation
5. ✅ **Formatter normalizes indentation** - parser flexible, output consistent
6. ❓ **Block elements in items?** - Initially no, revisit later
7. ❓ **Paragraph breaks in items?** - Initially no, blank line ends list

### Blockquotes

1. ✅ **Every line needs `>`** - no lazy continuation
2. ✅ **Blank line ends quote** - paragraph break is universal terminator
3. ✅ **Can contain paragraphs** - `>` on blank line keeps it in quote
4. ✅ **Nesting via `>>` etc** - count `>` characters for depth
5. ❓ **Space after `>` required?** - Currently optional
6. ❓ **Block elements in quotes?** - Yes, but adds complexity

## Next Steps

1. **Finalize open questions** - get user feedback
2. **Start with lists** - simpler than quotes
3. **Implement incrementally** - flat lists first, then nesting
4. **Test extensively** - fixture-based approach
5. **Add formatter support** - normalize indentation
6. **Document patterns** - guide users on best practices
