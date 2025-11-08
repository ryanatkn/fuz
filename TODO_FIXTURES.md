# MDZ Fixture TODOs

This document tracks pending renames and new fixtures for the mdz parser test
suite.

## Fixture Renames - ✓ COMPLETED

Naming scheme applied:

- `{type}_simple` - basic cases
- `{outer}_nested_{inner}` - nesting (outer first)
- `{type}_consecutive` - adjacent same types
- `unclosed_{type}`, `empty_{type}`, `malformed_{type}` - error cases
- `mixed_{context}` - multiple types combined

### Completed Renames (13 fixtures)

```
Old Name                         → New Name
-----------------------------------------------------------------
bold_text                        → bold_simple                            ✓
italic_asterisk                  → italic_simple_asterisk                 ✓
italic_underscore                → italic_simple_underscore               ✓
strikethrough_tilde              → strikethrough_simple                   ✓
code_identifier                  → code_simple                            ✓
link_see_tag                     → link_see_identifier                    ✓
formatting_mixed                 → mixed_formatting_basic                 ✓
formatting_mixed_strikethrough   → mixed_formatting_with_strikethrough   ✓
newlines_1                       → single_newline                         ✓
newlines_2                       → paragraph_break                        ✓
newlines_3                       → paragraph_break_triple_newline         ✓
newlines_4                       → paragraph_break_quad_newline           ✓
positions_no_duplicates          → code_duplicate_identifier_positions    ✓
```

### Duplicates Removed (2 fixtures)

- `code_inline` - deleted (duplicate of code_simple) ✓
- `positions_code_unique` - deleted (duplicate of
  code_duplicate_identifier_positions) ✓

## New Fixtures - ✓ COMPLETED

All 32 new fixtures have been added, tested, and verified!

### High Priority - Parser Robustness (12 fixtures) ✓

**`bold_nested_italic`** - Bold containing italic:

```
**bold with *italic* inside**
```

**`italic_nested_bold`** - Italic containing bold:

```
*italic with **bold** inside*
```

**`italic_nested_bold_underscore`** - Underscore italic with bold:

```
_italic with **bold** inside_
```

**`italic_nested_code_underscore`** - Underscore italic with code:

```
_italic `code` text_
```

**`bold_nested_link`** - Link nested in bold:

```
**see {@link Foo} here**
```

**`italic_nested_link`** - Link nested in italic:

```
*see {@link Foo} here*
```

**`strikethrough_nested_link`** - Strikethrough containing link:

```
~deleted {@link Foo} reference~
```

**`bold_nested_strikethrough_nested_code`** - Triple nesting:

```
**bold ~strikethrough `code`~ text**
```

**`all_formatters_combined`** - All formatters at once:

```
**~*`text`*~**
```

**`unclosed_nested_in_closed`** - Unclosed formatting inside closed:

```
**bold with *unclosed italic**
```

**`formatting_across_paragraph_break`** - Formatting spanning paragraphs:

```
**bold text

continues here**
```

**`same_type_nested`** - Same formatter nested (edge case):

```
**bold **again** text**
```

### High Priority - Link Edge Cases (8 fixtures) ✓

**`link_see_url`** - {@see} tag with URL:

```
see {@see https://example.com} for more
```

**`link_without_protocol`** - URL without http/https:

```
{@link example.com} and {@link www.example.com}
```

**`link_empty_reference`** - Link with empty/whitespace reference:

```
{@link   }
```

**`link_empty_display_text`** - Link with empty display after pipe:

```
{@link https://example.com|}
```

**`link_malformed_pipes`** - Link with spaces around pipe:

```
{@link https://example.com | Display Text}
```

**`link_with_fragment`** - URL with hash fragment:

```
{@link https://example.com#section}
```

**`link_with_query`** - URL with query parameters:

```
{@link https://example.com?foo=bar&baz=qux}
```

**`link_consecutive`** - Adjacent links:

```
{@link Foo}{@link Bar}
```

### High Priority - Empty/Special Characters (5 fixtures) ✓

**`empty_code`** - Empty backticks:

```
text `` more text
```

**`empty_bold`** - Empty bold markers:

```
text **** more text
```

**`code_special_chars`** - Code containing formatting characters:

```
use `**bold**` syntax or `~tilde~` for strikethrough
```

**`code_consecutive`** - Adjacent code blocks:

```
`foo``bar`
```

**`single_char_formatting`** - Single character in each format:

```
`a` *b* **c** ~d~
```

### High Priority - Real-World Content (3 fixtures) ✓

**`unicode_content`** - Unicode/emoji in text:

```
This 🎉 has emoji and 中文 characters
```

**`unicode_in_code`** - Unicode in code blocks:

```
use `🎉` emoji or `中文` characters
```

**`multiple_whitespace_types`** - Tabs and spaces:

```
text	with	tabs	and spaces
```

### Medium Priority - Paragraph Edge Cases (4 fixtures) ✓

**`paragraph_only_formatting`** - Paragraph with only formatted content:

```
`code` **bold** *italic*

next paragraph
```

**`formatting_at_paragraph_start`** - Formatting immediately after break:

```
paragraph 1

**bold starts paragraph 2**
```

**`formatting_at_paragraph_end`** - Formatting at end before break:

```
paragraph ending with **bold**

paragraph 2
```

**`paragraph_empty_between`** - Multiple consecutive paragraph breaks:

```
para 1



para 2
```

## Implementation Notes

### Phase 1: Cleanup - ✓ COMPLETED

- ✓ Investigated and identified 2 duplicate fixture pairs
- ✓ Deleted duplicate fixtures: `code_inline` and `positions_code_unique`
- ✓ Renamed 13 fixtures to follow consistent naming scheme
- ✓ All tests passing (38 fixtures after cleanup)

### Phase 2: New Fixtures - ✓ COMPLETED

- ✓ Created 32 new fixtures across 5 categories
- ✓ Generated all expected.json files with `gro src/test/fixtures/mdz/update`
- ✓ All tests passing (70 total fixtures)

### Summary

**Total fixtures:** 70 (from 40 original)

- 38 existing fixtures (after removing 2 duplicates)
- 32 new fixtures added

**Coverage improvements:**

- Unicode and emoji content support verified
- Empty formatter edge cases covered
- Link parsing edge cases (URLs with fragments, query params, malformed pipes)
- Complex nesting scenarios (triple nesting, reverse nesting)
- Paragraph boundary behaviors
- Special characters inside formatters
