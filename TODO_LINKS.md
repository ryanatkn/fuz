# mdz Link Syntax Redesign

Comprehensive redesign to remove TSDoc remnants from mdz and establish it as a
pure markdown dialect with auto-detection conventions.

## Current State

mdz currently supports two TSDoc-style link syntaxes:

- `{@link reference}` - inline link syntax
- `{@see reference}` - functionally identical to `{@link}`

These are the ONLY `@` syntaxes in mdz. No other TSDoc tags (`@param`,
`@returns`, etc.) are handled by mdz - those are build-time only via
`tsdoc_helpers.ts`.

**Supported formats:**

```
{@link identifier}                    // local identifier/module reference
{@link https://fuz.dev}           // external URL
{@link https://fuz.dev|Text}      // URL with custom display text
{@see identifier}                     // same as {@link identifier}
{@see https://fuz.dev}            // same as {@link https://...}
```

**Current behavior:**

- Links without `http://` or `https://` → treated as identifier references
- Display text uses pipe separator: `reference|text`
- Unclosed tags → fallback to plain text
- Backticks already auto-link to identifiers/modules: `` `identifier` `` and
  `` `module.ts` ``

## Goals

1. **Remove ALL TSDoc remnants** - Complete separation from TSDoc
2. **Pure markdown + conventions** - Standard markdown syntax with
   auto-detection
3. **Content-friendly** - Simple, intuitive syntax for both docs and general
   content
4. **"One way to do things"** - Each link type has a single canonical syntax

## What We're Removing

### Parser Syntax

Remove both `{@link}` and `{@see}` syntax completely:

```diff
- {@link https://fuz.dev}
- {@link https://fuz.dev|Custom Text}
- {@link identifier}
- {@see https://fuz.dev}
- {@see identifier}
```

All handling of `@` character in `{@...}` patterns will be removed from the mdz
parser.

### Fixture Directories (12 total)

Remove all existing link-related test fixtures:

1. `link_consecutive` - multiple `{@link}` in sequence
2. `link_empty_display_text` - `{@link url|}` with empty text after pipe
3. `link_empty_reference` - `{@link }` with empty reference
4. `link_identifier` - `{@link Foo}` for local references
5. `link_malformed_pipes` - `{@link url|text|more}` with multiple pipes
6. `link_see_identifier` - `{@see Foo}` variant
7. `link_see_url` - `{@see https://...}` variant
8. `link_url` - `{@link https://fuz.dev}` basic URL
9. `link_url_with_text` - `{@link https://fuz.dev|Text}` with display text
10. `link_with_fragment` - `{@link https://fuz.dev#section}` with URL
    fragment
11. `link_with_query` - `{@link https://fuz.dev?q=test}` with query string
12. `link_without_protocol` - `{@link fuz.dev}` without `http://`

## Terminology

Link types in mdz (after backtick identifiers are handled separately as Code nodes):

- **external** - URLs to resources outside the app (`https://` or `http://`)
  - Used directly as href
  - Example: `https://developer.mozilla.org/...`
- **internal** - Paths within the app (starts with `/`)
  - Requires SvelteKit's `resolve()` applied
  - Example: `/docs/api`

These map to `link_type: 'external' | 'internal'` in `Mdz_Link_Node`.

## What We're Adding

### Auto-Detection Features

**1. Bare URL auto-linking (external):**

```
Visit https://fuz.dev for details.
See http://fuz.dev for more info.
See (https://en.wikipedia.org/wiki/Foo_(bar)) for context.
```

- Automatically detected and linkified
- No markup required
- Preserves URL as display text
- **RFC 3986 whitelist validation** - uses spec-compliant character validation:
  - **Valid characters** (whitelisted):
    - unreserved: `A-Z a-z 0-9 - . _ ~`
    - sub-delims: `! $ & ' ( ) * + , ; =`
    - path allowed: `: @`
    - separators: `/ ? #`
    - percent-encoding: `%`
  - **Invalid characters** automatically detected and stop URL parsing:
    - All characters not in whitelist above
    - Examples: `` ` `` `|` `^` `\` `"` `<>` `[]` `{}`
  - **Benefits of whitelist approach:**
    - Guaranteed RFC 3986 compliance
    - Catches ALL invalid characters (not just special-cased ones)
    - More maintainable than blacklist
    - Future-proof for edge cases
  - Trims trailing punctuation: `.,;:!?]}`
  - Balanced parentheses: `()` are valid sub-delims, so matching logic applies
  - Example: `(https://fuz.dev)` → links to `https://fuz.dev`
  - Example: `https://en.wikipedia.org/wiki/Foo_(bar)` → links to full URL (balanced parens)
  - Example: `https://fuz.dev/path[foo]` → links to `https://fuz.dev/path` (stops at `[`)
  - Example: `https://fuz.dev/path\|foo` → links to `https://fuz.dev/path` (stops at `\`)

**2. Internal path auto-linking:**

```
See /docs/api for the API documentation.
Check /about for information.
```

- Paths starting with `/` are auto-detected
- Automatically wrapped with SvelteKit's `resolve()` helper
- Useful for internal navigation

**3. Markdown link syntax:**

```
[Custom Text](https://fuz.dev)
[API Documentation](/docs/api)
[MDN Reference](https://developer.mozilla.org/...)
```

- Standard markdown syntax
- Works with both external URLs and internal paths
- Internal paths get `resolve()` applied

### Behaviors That Stay

**Backtick auto-linking** (unchanged):

```
See `identifier_name` for details.
Import from `module.ts` for the implementation.
```

- Backticks create Code nodes that auto-link to identifiers/modules
- Display text is the identifier/module name
- Resolution happens at render time via `Docs_Link` component

## TSDoc Extraction Changes

Build-time TSDoc extraction (`tsdoc_helpers.ts`) will convert TSDoc syntax to
mdz-compatible format:

### URL References

**From JSDoc/TSDoc:**

```typescript
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element
 */
```

**To mdz (in generated package.ts):**

```
https://developer.mozilla.org/en-US/docs/Web/API/Element
```

**Rendering:** Auto-detected as external link.

### URL References with Custom Text

**From JSDoc/TSDoc:**

```typescript
/**
 * @see {@link https://fuz.dev|Example Site}
 */
```

**To mdz (in generated package.ts):**

```
[Example Site](https://fuz.dev)
```

**Rendering:** Markdown link with custom display text.

### Identifier References

**From JSDoc/TSDoc:**

```typescript
/**
 * @see mdz_parse for the parser
 * @link Mdz component for rendering
 */
```

**To mdz (in generated package.ts):**

```
`mdz_parse` for the parser
`Mdz` component for rendering
```

**Rendering:** Backticked code that auto-links to identifier.

### Module References

**From JSDoc/TSDoc:**

```typescript
/**
 * @see mdz.ts for implementation
 */
```

**To mdz (in generated package.ts):**

```
`mdz.ts` for implementation
```

**Rendering:** Backticked code that auto-links to module.

### Common Patterns

| TSDoc Source               | mdz Output            | Type              |
| -------------------------- | --------------------- | ----------------- |
| `@see https://fuz.dev` | `https://fuz.dev` | Auto-detected URL |
| `{@link https://x.com}`    | `https://x.com`       | Auto-detected URL |
| `{@link url\|text}`        | `[text](url)`         | Markdown link     |
| `@link identifier`         | `` `identifier` ``    | Backtick code     |
| `@see module.ts`           | `` `module.ts` ``     | Backtick code     |

## New Test Fixtures

Add comprehensive test coverage following existing naming conventions
(`link_feature_variant` pattern with `link_` prefix):

### External URL Auto-Detection

1. **`link_external_https`** - `https://fuz.dev` auto-detection
2. **`link_external_http`** - `http://fuz.dev` auto-detection
3. **`link_external_consecutive`** - Multiple URLs in sequence
4. **`link_external_with_fragment`** - `https://fuz.dev#section`
5. **`link_external_with_query`** - `https://fuz.dev?q=test`
6. **`link_external_in_sentence`** - URL surrounded by text
7. **`link_external_multiple_in_paragraph`** - Several URLs in same paragraph
8. **`link_external_trailing_punctuation`** - `https://fuz.dev.` with trailing period
9. **`link_external_parens_balanced`** - `https://fuz.dev/wiki/Foo_(bar)` with balanced parens
10. **`link_external_parens_unmatched`** - `https://fuz.dev/path)` trailing paren trimmed
11. **`link_external_in_parens`** - `(https://fuz.dev)` URL wrapped in parens
12. **`link_external_stops_at_bracket`** - `https://fuz.dev/path[foo]` stops at `[` (RFC 3986)
13. **`link_external_stops_at_brace`** - `https://fuz.dev/path{foo}` stops at `{` (RFC 3986)
14. **`link_external_stops_at_backtick`** - `https://fuz.dev/path\`foo` stops at `` ` `` (RFC 3986)
15. **`link_external_stops_at_pipe`** - `https://fuz.dev/path|foo` stops at `|` (RFC 3986)
16. **`link_external_stops_at_caret`** - `https://fuz.dev/path^foo` stops at `^` (RFC 3986)
17. **`link_external_stops_at_backslash`** - `https://fuz.dev/path\foo` stops at `\` (RFC 3986)

### Internal Path Auto-Detection

18. **`link_internal_simple`** - `/docs/api` basic path
19. **`link_internal_nested`** - `/docs/guides/introduction` deep path
20. **`link_internal_with_fragment`** - `/docs/api#identifier`
21. **`link_internal_with_query`** - `/search?q=test`
22. **`link_internal_consecutive`** - Multiple paths in sequence

### Markdown Link Syntax

23. **`link_markdown_external`** - `[text](https://fuz.dev)`
24. **`link_markdown_internal`** - `[text](/docs/api)`
25. **`link_markdown_with_fragment`** - `[text](https://fuz.dev#section)`
26. **`link_markdown_with_query`** - `[text](https://fuz.dev?q=test)`
27. **`link_markdown_empty_text`** - `[](https://fuz.dev)` edge case
28. **`link_markdown_empty_url`** - `[text]()` edge case
29. **`link_markdown_unclosed`** - `[text](url` malformed
30. **`link_markdown_consecutive`** - Multiple markdown links in sequence
31. **`link_markdown_nested_in_bold`** - `**[text](url)**` combination
32. **`link_markdown_invalid_whitespace_in_syntax`** - `[ text ]( url )` invalid
33. **`link_markdown_invalid_whitespace_in_url`** - `[text](https://fuz.dev /path)` invalid

### Edge Cases

34. **`link_invalid_url_protocol_only`** - `https://` alone (should not link)
35. **`link_url_no_protocol`** - `fuz.dev` without protocol (should NOT auto-link)
36. **`link_path_invalid_relative`** - `./a/b` and `../a/b` (should NOT auto-link)
37. **`link_markdown_with_pipe`** - `[text|more](url)` pipe in display text
38. **`link_mixed_types`** - Combination of different link types
39. **`link_invalid_path_slash_only`** - Just `/` alone (should not link)
40. **`link_invalid_double_slash`** - `//` in text (should not link)

### Integration with Existing Features

41. **`bold_nested_link`** - Updated to use markdown link syntax
42. **`italic_nested_link`** - Updated to use markdown link syntax
43. **`strikethrough_nested_link`** - Updated to use markdown link syntax
44. **`code_with_link_nearby`** - Updated to use bare URL

**Naming convention benefits:**

- **Consistent `link_` prefix** - Groups all link tests together alphabetically
- **Feature-first organization** - `external`, `internal`, `markdown` categorize by link
  type
- **Descriptive qualifiers** - clarify behavior and link type
- **Follows existing patterns** - Matches `code_`, `bold_`, `heading_*` fixtures

## Migration Path

### Phase 1: Build-Time Conversion

Update `tsdoc_helpers.ts` to convert TSDoc link syntax during package
generation:

- `@see https://...` → `https://...` (bare URL)
- `{@link https://...}` → `https://...` (bare URL)
- `{@link url|text}` → `[text](url)` (markdown link)
- `@link identifier` → `` `identifier` `` (backticks)
- `@see module.ts` → `` `module.ts` `` (backticks)

### Phase 2: Parser Implementation

Update `mdz.ts`:

- Remove `{@link}` and `{@see}` parsing (currently lines 487-562)
- Add auto-detection for `https://` and `http://` in text nodes (external links)
- Add auto-detection for `/` prefix in text nodes (internal paths)
- Add markdown link syntax `[text](url)` parsing
- Update `Mdz_Link_Node.link_type` to use `'external' | 'internal'`
- Remove `@` character special handling in `{@` context

### Phase 3: Renderer Updates

Update `Mdz_Node_View.svelte`:

- Import `resolve` from `$app/paths`
- For `link_type === 'internal'`: use `resolve(reference)`
- For `link_type === 'external'`: use reference as-is
- Handle markdown link nodes with both display text and URL

### Phase 4: Test Fixtures

- Remove all 12 existing old-style `link_*` fixtures (using `{@link}` syntax)
- Add 37 new `link_*` fixtures with new naming convention:
  - 17 `link_external_*` fixtures (including 6 RFC 3986 stop-at fixtures)
  - 5 `link_internal_*` fixtures
  - 11 `link_markdown_*` fixtures
  - 7 `link_invalid_*` edge case fixtures
  - 4 updated integration fixtures
- Run fixture update task: `gro src/test/fixtures/update`

### Phase 5: Documentation Updates

- Update `src/routes/docs/mdz/+page.svelte` examples
- Update CLAUDE.md references to link syntax
- Regenerate `src/lib/package.ts` with new conversion

### Phase 6: Validation

- Run full test suite
- Run type checking
- Run linting
- Verify generated docs display correctly

## Benefits

1. **Zero TSDoc remnants** - mdz is fully independent from TSDoc
2. **Standard markdown** - Familiar syntax for all users
3. **Intuitive auto-detection** - URLs and paths "just work"
4. **Simpler parser** - Less special-case handling
5. **Content-friendly** - Easy to use for blog posts, docs, any markdown content
6. **Follows mdz philosophy** - "One way to do things" for each link type

## Breaking Changes

**Who is affected:**

- Anyone using `{@link}` or `{@see}` in hand-written mdz content
- Test fixtures using old syntax

**Who is NOT affected:**

- JSDoc/TSDoc comments in source code (build-time conversion handles it)
- Generated `package.ts` (automatically regenerated with new syntax)
- Backtick identifier/module linking (unchanged)

**Migration effort:** Low

- Small surface area (mostly test fixtures)
- Build-time conversion handles most cases automatically
- Clear 1:1 mappings for manual updates

## Open Questions

1. Should protocol-less URLs like `fuz.dev` auto-link?
   - **Decision:** NO - too prone to false positives
   - Requires explicit `https://` or markdown link syntax

2. Should we support relative paths like `../sibling` or `./child`?
   - **Decision:** NO initially - only internal `/paths` starting with `/`
   - Can be added later if needed

3. Should markdown links support title attribute `[text](url "title")`?
   - **Decision:** NO initially - YAGNI
   - Can be added if use case emerges

4. How to handle `[text](/path#fragment)` with internal path + fragment?
   - **Decision:** `resolve('/path#fragment')` preserves fragment
   - Test to confirm SvelteKit behavior

## Implementation Complete ✓

All phases completed successfully:

### Phase 1: Build-time Conversion ✓
- Added `tsdoc_convert_link_to_mdz()` in `tsdoc_helpers.ts`
- Converts `{@link url}` → bare URL, `{@link url|text}` → `[text](url)`, `{@link identifier}` → `` `identifier` ``
- Updated 4 TSDoc test fixtures

### Phase 2: Parser Implementation ✓
- Removed all `{@link}` and `{@see}` parsing from `mdz.ts`
- Added external URL auto-detection (`https://`, `http://`) with GFM rules
- Added internal path auto-detection (`/path`) with whitespace boundaries
- Added markdown link syntax `[text](url)` with validation
- Updated `Mdz_Link_Node.link_type` to `'external' | 'internal'`
- Fixed bugs: empty URLs, protocol-only URLs, relative path detection

### Phase 3: Renderer Updates ✓
- Imported `resolve` from `$app/paths` in `Mdz_Node_View.svelte`
- Internal links use `resolve(reference)` for SvelteKit routing
- External links use direct href with `target="_blank"`

### Phase 4: Test Fixtures ✓
- Removed 12 old `{@link}` syntax fixtures
- Removed 4 incorrect bracket/brace fixtures (wrong RFC assumption)
- Added 44 comprehensive link fixtures
- Added 6 RFC 3986-compliant stop-at fixtures (bracket, brace, backtick, pipe, caret, backslash)
- Renamed fixtures with `_invalid` infix for consistency
- Total: 44 link-related fixtures

### Phase 5: Documentation Updates ✓
- Updated `/docs/mdz` with new link syntax examples
- Added note explaining relative paths not supported (portability, location concept)
- Updated CLAUDE.md to reflect new system
- Regenerated `package.ts` with conversions

### Bug Fixes ✓
- Empty markdown URL `[text]()` now renders as text
- Protocol-only `https://` now renders as text
- Relative paths `./a/b` and `../a/b` now render as text
- **RFC 3986 whitelist validation**: Implemented spec-compliant character validation
  - Whitelists valid URI characters per RFC 3986 `pchar` production
  - Automatically stops at ALL invalid characters (not just special-cased ones)
  - More robust and maintainable than previous blacklist approach
- Balanced logic only for `()` (valid sub-delims), not `[]` or `{}`

### Edge Cases Added ✓
- Whitespace in markdown syntax
- Single `/` alone
- Whitespace in URLs
- Balanced/unmatched parentheses (RFC 3986 sub-delims)
- Stop at invalid URI characters per RFC 3986 whitelist:
  - Brackets `[]` (gen-delims, only valid for IPv6 in authority)
  - Braces `{}` (completely invalid in URIs)
  - Backtick `` ` `` (invalid, markdown code delimiter)
  - Pipe `|` (invalid in URIs)
  - Caret `^` (invalid in URIs)
  - Backslash `\` (invalid, markdown escape character)

### Final Status ✓
- All 738 tests passing
- Type checking: passed
- Linting: passed
- Formatting: passed

## References

- Current mdz implementation: `src/lib/mdz.ts`
- Current TSDoc extraction: `src/lib/tsdoc_helpers.ts`
- Current renderer: `src/lib/Mdz_Node_View.svelte`
- Test fixtures: `src/test/fixtures/mdz/`
- mdz documentation: `src/routes/docs/mdz/+page.svelte`
- [RFC 3986 - Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
- [GFM Autolinks Extension](https://github.github.com/gfm/#autolinks-extension-)
