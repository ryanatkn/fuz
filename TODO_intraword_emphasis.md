# TODO: Fix Intraword Emphasis Behavior in mdz

## Problem Summary

mdz currently has inconsistent and incorrect behavior for formatting delimiters in the middle of words (intraword emphasis). This is particularly problematic for programming identifiers like `snake_case_names` and `CONSTANT_CASE_NAMES`.

## Current (Wrong) Behavior - Test Results

Created 18 test fixtures in `src/test/fixtures/mdz/intraword_*`:

### Basic Intraword Cases

| Fixture | Input | Current Behavior | Expected |
|---------|-------|------------------|----------|
| `intraword_underscore_single` | `foo_bar` | ✓ Literal text | ✓ Literal text |
| `intraword_underscore_multiple` | `foo_bar_baz` | ❌ "foo" + _bar_ + "baz" | ✓ Literal text |
| `intraword_underscore_snake_case` | `snake_case_identifier` | ❌ Has italic | ✓ Literal text |
| `intraword_underscore_constant_case` | `CONSTANT_CASE_NAME` | ❌ Has italic | ✓ Literal text |
| `intraword_underscore_function_name` | `function_name_with_underscores` | ❌ Has italic | ✓ Literal text |
| `intraword_underscore_mixed` | `word _emphasis_ and snake_case_name` | ❌ Both emphasized | ✓ Only "emphasis" |
| `intraword_asterisk_bold` | `foo**bar**baz` | ❌ Has bold | ✓ Literal (per policy) |
| `intraword_tilde_strikethrough` | `foo~bar~baz` | ❌ Has strike | ✓ Literal (per policy) |
| `intraword_backtick_code` | `foo\`bar\`baz` | ✓ Has code | ✓ Allow (per policy) |

### Edge Cases: Leading/Trailing Delimiters

| Fixture | Input | Current Behavior | Expected |
|---------|-------|------------------|----------|
| `intraword_underscore_leading` | `_foo_bar` | ❌ _foo_ + "bar" | ✓ Literal text |
| `intraword_underscore_trailing` | `foo_bar_` | ❌ "foo" + _bar_ | ✓ Literal text |
| `intraword_underscore_both_ends` | `_foo_bar_` | ❌ _foo_ + "bar_" | ✓ Literal text |
| `intraword_bold_leading` | `**foo**bar` | ❌ **foo** + "bar" | ✓ Literal text |
| `intraword_bold_trailing` | `foo**bar**` | ❌ "foo" + **bar** | ✓ Literal text |
| `intraword_bold_both_ends` | `**foo**bar**` | ❌ **foo** + "bar**" | ✓ Literal text |
| `intraword_tilde_leading` | `~foo~bar` | ❌ ~foo~ + "bar" | ✓ Literal text |
| `intraword_tilde_trailing` | `foo~bar~` | ❌ "foo" + ~bar~ | ✓ Literal text |
| `intraword_underscore_adjacent_valid` | `_valid_ snake_case_name _another_` | ❌ All parts emphasized | ✓ Only _valid_ and _another_ |

**Key observation**: The edge cases reveal that delimiters immediately adjacent to alphanumeric characters (without whitespace) are still being treated as formatting, when they should be literal text.

## Pattern Analysis

### Issue Pattern
- **1 underscore**: Works correctly (literal text)
- **2+ underscores**: Fails - middle sections become italic
- **All other delimiters**: Also create intraword formatting

### Root Cause
The parser (`src/lib/mdz.ts`) doesn't check for word boundaries:
- `#parse_italic()` (line 428): Simply matches `_` to `_`
- `#parse_bold()` (line 385): Simply matches `**` to `**`
- `#parse_strikethrough()` (line 457): Simply matches `~` to `~`
- `#parse_code()` (line 325): Simply matches backtick to backtick

## GFM Specification Rules

Based on GFM (GitHub Flavored Markdown):

### Underscores (`_`)
- **CANNOT** create emphasis in the middle of words
- Requires word boundaries (whitespace or punctuation)
- This is INTENTIONAL to support `snake_case` identifiers
- Example: `foo_bar_baz` → literal text (no emphasis)
- Example: `word _emphasis_ word` → word <em>emphasis</em> word

### Asterisks (`*`)
- **CAN** create emphasis in the middle of words (intraword emphasis allowed)
- Example: `foo*bar*baz` → foo<em>bar</em>baz (if using single `*` for emphasis)
- mdz uses `**` for bold (not `*` for italic), so different consideration needed

### Other Delimiters
- GFM uses `~~` (double tilde) for strikethrough
- mdz uses `~` (single tilde) - needs policy decision
- Backticks for code typically allowed anywhere

## Design Decisions Needed

### Decision 1: Underscore Handling ✅ CLEAR
**Recommendation**: Follow GFM - underscores should NOT work intraword
- **Why**: Support for snake_case identifiers is essential for code documentation
- **Impact**: Breaking change for any content relying on current behavior
- **Implementation**: Add word boundary checks to `#parse_italic()`

### Decision 2: Asterisk (Bold) Handling ⚠️ NEEDS DECISION
**Options**:
1. **Allow intraword bold** (follow GFM behavior for asterisks)
   - Pro: Consistent with GFM asterisk rules
   - Con: May cause issues with patterns like `foo**bar**baz` in code
2. **Disallow intraword bold** (be more strict than GFM)
   - Pro: More predictable, "false negatives over false positives"
   - Pro: Consistent with underscore policy
   - Con: Diverges from GFM

**Recommendation**: Disallow intraword bold (Option 2)
- Aligns with mdz philosophy: "false negatives over false positives"
- More predictable for nontechnical users
- Code documentation rarely needs bold in middle of identifiers

### Decision 3: Tilde (Strikethrough) Handling ⚠️ NEEDS DECISION
**Options**:
1. **Allow intraword strikethrough**
2. **Disallow intraword strikethrough**

**Recommendation**: Disallow intraword strikethrough
- Same reasoning as bold
- Consistency across all formatting delimiters (except backticks)

### Decision 4: Backtick (Code) Handling ⚠️ NEEDS DECISION
**Options**:
1. **Allow intraword code** (current behavior)
   - Pro: Useful for fragments like "the\`foo\`method"
   - Pro: Common pattern in documentation
2. **Disallow intraword code**
   - Pro: Consistency with other delimiters

**Recommendation**: Allow intraword code (Option 1)
- Code fragments often need to be highlighted mid-word
- Example: "use the \`get_\`prefix" or "the \`-v\`flag"
- Different semantic purpose than emphasis/bold/strikethrough

## Implementation Plan

### Phase 1: Add Word Boundary Detection Helper ✅
**File**: `src/lib/mdz.ts`

Add helper method to check if index is at a word boundary:

```typescript
/**
 * Check if position is at a word boundary.
 * Word boundary = not surrounded by alphanumeric/underscore characters.
 * Used to prevent intraword emphasis for underscores, asterisks, tildes.
 */
#is_at_word_boundary(index: number, check_before: boolean, check_after: boolean): boolean {
  if (check_before && index > 0) {
    const prev = this.#template.charCodeAt(index - 1);
    // If preceded by alphanumeric or underscore, not at boundary
    if (this.#is_word_char(prev)) {
      return false;
    }
  }

  if (check_after && index < this.#template.length) {
    const next = this.#template.charCodeAt(index);
    // If followed by alphanumeric or underscore, not at boundary
    if (this.#is_word_char(next)) {
      return false;
    }
  }

  return true;
}

/**
 * Check if character is part of a word (alphanumeric or underscore).
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
```

### Phase 2: Update `#parse_italic()` ✅
**File**: `src/lib/mdz.ts` (line 428-450)

Modify to check word boundaries:

```typescript
#parse_italic(): Mdz_Italic_Node | Mdz_Text_Node {
  const start = this.#index;

  // Check if opening underscore is at word boundary
  // Must not be preceded by word char, or must be followed by word char
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
  const children = this.#parse_nodes_until('_');

  if (this.#match('_')) {
    // Check if closing underscore is at word boundary
    // Must not be followed by word char
    if (!this.#is_at_word_boundary(this.#index, false, true)) {
      // Closing underscore not at boundary - treat whole thing as text
      this.#index = start + 1;
      return {
        type: 'Text',
        content: '_',
        start,
        end: this.#index,
      };
    }

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
```

### Phase 3: Update `#parse_bold()` ✅
**File**: `src/lib/mdz.ts` (line 385-421)

Similar modification to check word boundaries.

### Phase 4: Update `#parse_strikethrough()` ✅
**File**: `src/lib/mdz.ts` (line 457-479)

Similar modification to check word boundaries.

### Phase 5: Update Expected Fixture Outputs ✅

After implementing changes, run:
```bash
gro src/test/fixtures/update mdz
```

Then verify all `intraword_*` fixtures have correct expected behavior:
- `intraword_underscore_*`: Should all be literal text (no italic)
- `intraword_asterisk_bold`: Should be literal text (no bold) - if policy is to disallow
- `intraword_tilde_strikethrough`: Should be literal text (no strike) - if policy is to disallow
- `intraword_backtick_code`: Should have code formatting (current behavior OK)

### Phase 6: Update Documentation ✅

**File**: `src/docs/mdz_spec.mdz`

Add section under "Inline Formatting":

```markdown
### Intraword Emphasis

mdz follows GitHub Flavored Markdown rules for word boundaries:

**Underscores** cannot create emphasis in the middle of words:

\`\`\`
foo_bar_baz → literal text (no emphasis)
snake_case_identifier → literal text (no emphasis)
word _emphasis_ word → word <em>emphasis</em> word
\`\`\`

This is intentional to support programming identifiers like \`snake_case\` and \`CONSTANT_CASE\`.

**Bold and strikethrough** also require word boundaries:

\`\`\`
foo**bar**baz → literal text (no bold)
foo~bar~baz → literal text (no strikethrough)
\`\`\`

**Inline code** is allowed anywhere:

\`\`\`
foo\`bar\`baz → foo<code>bar</code>baz
\`\`\`

**Word boundary definition**: A delimiter is at a word boundary if not surrounded by alphanumeric characters or underscores.
```

**File**: `src/docs/mdz_grammar.mdz`

Update grammar rules to document word boundary constraints.

### Phase 7: Update Changelog ✅

**File**: `src/docs/mdz_spec.mdz` (Changelog section)

Add entry:
```markdown
**v0.151.0** (or next version)

Breaking change: Fixed intraword emphasis behavior to follow GFM spec.
- Underscores (\`_\`) no longer create emphasis in middle of words (e.g., \`snake_case_name\`)
- Bold (\`**\`) no longer works in middle of words
- Strikethrough (\`~\`) no longer works in middle of words
- Inline code (\`\`\`) still works anywhere
- This change supports programming identifiers and aligns with GitHub Flavored Markdown

Migration: If you have content relying on intraword emphasis, add spaces around the delimiters.
```

## Testing Checklist

After implementation:

- [ ] All 9 `intraword_*` fixtures pass with expected behavior
- [ ] Existing underscore fixtures still pass:
  - [ ] `italic_simple_underscore`
  - [ ] `italic_nested_bold_underscore`
  - [ ] `italic_nested_code_underscore`
- [ ] No regressions in other formatting tests
- [ ] Manual testing with:
  - [ ] `snake_case_identifiers`
  - [ ] `CONSTANT_CASE_NAMES`
  - [ ] `function_name_here`
  - [ ] Mixed: `word _emphasis_ and snake_case`
  - [ ] Code examples with underscores in backticks
- [ ] Run full test suite: `gro test`

## Migration Guide for Users

If users have content like:
```
some_text_with_emphasis
```

That was accidentally creating emphasis, they should either:
1. **Keep as literal** (recommended): Leave as-is, will now render correctly
2. **Actually want emphasis**: Add spaces: `some _text_ with emphasis`

## Questions for Review

Before implementing, please confirm:

1. ✅ **Word boundary definition**: Should we use `\w` (alphanumeric + underscore) as the word character class?
2. ⚠️ **Bold intraword**: Allow or disallow `foo**bar**baz` creating bold?
   - Recommendation: Disallow
3. ⚠️ **Strikethrough intraword**: Allow or disallow `foo~bar~baz` creating strikethrough?
   - Recommendation: Disallow
4. ✅ **Code intraword**: Keep current behavior allowing `foo\`bar\`baz`?
   - Recommendation: Allow
5. ⚠️ **Breaking change**: This will break any content relying on the current behavior. Document in migration guide?
   - Recommendation: Yes, with clear changelog entry

## Files to Modify

1. `src/lib/mdz.ts` - Parser implementation
2. `src/test/fixtures/mdz/intraword_*/expected.json` - Update expected outputs (auto-generated)
3. `src/docs/mdz_spec.mdz` - Documentation
4. `src/docs/mdz_grammar.mdz` - Grammar specification
5. `src/routes/docs/mdz/+page.svelte` - Main mdz doc page (if examples need updating)

## Estimated Effort

- Implementation: 2-3 hours
- Testing: 1-2 hours
- Documentation: 1 hour
- Total: 4-6 hours

## Related Issues

- GFM spec for emphasis: https://github.github.com/gfm/#emphasis-and-strong-emphasis
- CommonMark intraword emphasis discussion
- mdz design philosophy: "false negatives over false positives"
