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

## New Fixtures to Add

### High Priority - Parser Robustness

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

### High Priority - Link Edge Cases

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

### High Priority - Empty/Special Characters

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

### High Priority - Real-World Content

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

### Medium Priority - Paragraph Edge Cases

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

### Completed

- ✓ Deleted duplicate fixtures: `code_inline` and `positions_code_unique`
- ✓ Renamed 13 fixtures to follow consistent naming scheme
- ✓ Regenerated all expected.json files with `gro src/test/fixtures/mdz/update`
- ✓ All tests passing

### Pending

- 30 new fixtures documented above, ready to add when needed
- Unicode fixtures will ensure international content works correctly
- Empty formatter cases will test parser robustness against malformed input
- Link edge cases will validate URL parsing behavior
