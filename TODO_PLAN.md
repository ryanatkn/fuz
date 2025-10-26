# API Documentation Refactoring TODO

## High Priority

### 1. Re-implement `pkg` from belt
**Why**: Current `Pkg` type from `@ryanatkn/belt/pkg.js` uses belt's `Src_Json` type, but we now have our own extended `Src_Json` with additional fields (props, doc_comment, etc.)

**Files to change:**
- `src/lib/pkg.ts` - Delete import, define our own `Pkg` interface
- Create new helper: `parse_pkg(package_json, src_json)` similar to belt's but typed for our Src_Json

**Current issue:**
```typescript
// src/routes/docs/api/+page.svelte:13
src_json: pkg.src_json as Src_Json,  // Needs cast because Pkg.src_json is belt's type
```

**After fix:**
```typescript
// No cast needed - types align
src_json: pkg.src_json,
```

**Implementation:**
1. Copy belt's `Pkg` interface to `src/lib/pkg.ts`
2. Change `src_json: Src_Json` to use our type from `$lib/src_json.js`
3. Remove the belt import
4. Remove the cast in +page.svelte

---

## Medium Priority

### 2. Remove unnecessary type assertions (`as any`)
**Issue**: Multiple files have `as any` casts for `resolve()` calls

**Affected files:**
- `src/lib/Api_Page.svelte:37` - `resolve(source_url as any)`
- `src/lib/Declaration_Link.svelte:68` - `resolve(api_url as any)`
- `src/lib/declaration_contextmenu.ts:18` - `resolve(...as any)`
- `src/lib/Tome_Content.svelte:27` - Has TODO about typecast
- `src/lib/Tome_Link.svelte:34` - `resolve(...as any)`
- `src/lib/docs_helpers.svelte.ts:25` - Has TODO about typecast
- `src/lib/tome.ts:19` - Has TODO about typecast

**Solution**: Investigate `resolve()` type signature and fix upstream or create typed wrapper

---

### 3. Remove `[key: string]: unknown` index signatures
**Files:**
- `src/lib/src_json.ts:91` - `Src_Module_Declaration`
- `src/lib/src_json.ts:110` - `Src_Module`

**Why remove:**
- Allows any property to be added, defeats type safety
- Causes type inference issues (like with `deprecated_message` lint warnings)
- We control these types now, can add fields explicitly

**Note**: Only remove if not actually needed for flexibility. Check if anything relies on this.

---

## Low Priority / Future Enhancements

### 4. Add linkified types in API documentation
**Enhancement**: Make type references clickable in tables

**Current**:
```svelte
<td><code class="type">{param.type}</code></td>
```

**Proposed**:
```svelte
<td><Type_Reference type={param.type} /></td>
```

**Implementation:**
- Create `Type_Reference.svelte` component
- Parse type string for known identifiers (using `is_known_identifier()`)
- Render plain text for builtins, `Identifier_Link` for documented types
- Handle complex types: `Array<Foo>`, `Foo | Bar`, etc.

**Benefits:**
- Click on `Alert_Status` in props table → jumps to type definition
- Fully interconnected documentation
- Matches existing hover tooltip behavior

---

### 5. Simplify API page component hierarchy
**Current**: `+page.svelte` (196 lines) + `Api_Page.svelte` (389 lines)

**Possible simplification:**
- Extract table components: `Parameters_Table.svelte`, `Props_Table.svelte`
- Reduce Api_Page.svelte size, improve reusability
- Share table rendering logic between params and props

---

### 6. Consider removing minimal_src_json fallback
**File**: `src/routes/package.gen.ts:240-260`

**Current**: If TS program creation fails, return minimal src.json with just name/version

**Question**: Is this fallback ever needed? Could we just throw an error instead?
- Clearer error messages
- Simpler code path
- TS analysis failure should probably fail loudly

---

### 7. Cleanup pre-existing TODOs
**Not our code, but adjacent:**
- `src/routes/+layout.svelte:29` - "TODO BLOCK type" (causes lint warning)
- `src/lib/Tome_Content.svelte:27` - "check sometime if typecast is still needed"
- `src/lib/docs_helpers.svelte.ts:25` - "check sometime if typecast is still needed"
- `src/lib/tome.ts:19` - "check sometime if typecast is still needed"

---

## Summary of Completed Work

✅ Svelte component analysis with svelte2tsx (79 files)
✅ Hash-based single-page navigation (`/docs/api#Alert`)
✅ Inlined types from belt (no external dependencies)
✅ Context pattern following `pkg_context` / `Pkg`
✅ Removed all "Enhanced" terminology
✅ Simplified API data helpers
✅ All tests passing, types passing

**Next**: Complete items 1-3 above for production readiness
