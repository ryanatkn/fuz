# Interactive API Documentation Implementation

> Transform identifier display into rich, interactive documentation with tooltips, contextmenus, and dedicated API pages

## Overview

Make every identifier in the package detail view interactive:

- **Plain links**: Each identifier is an `<a>` tag
- **Sticky tooltips**: Hover shows type info, doc summary (can move mouse into tooltip)
- **Contextmenu**: Right-click for actions (navigate, copy import, view source)
- **Single-page documentation**: Click navigates to `/docs/api#identifier` with hash-based anchors

## Current Progress ✅

### Phase 1: Data Generation & Type System (COMPLETED)

**Files Created:**

- `src/lib/src_json.ts` - Type definitions (inlined from belt with extensions)
- `src/lib/api.ts` - Context for API data (follows pkg_context pattern)
- `src/lib/api_data.ts` - Helper functions for declaration lookup
- `src/lib/ts_helpers.ts` - TypeScript Compiler API utilities
- `src/lib/svelte_helpers.ts` - Svelte component analysis using svelte2tsx
- `src/routes/package.gen.ts` - Custom package generator

**What It Does:**

- Scans all 79 source files in `src/lib/` (24 TypeScript + 55 Svelte)
- Extracts metadata using TypeScript Compiler API and svelte2tsx:
  - JSDoc/TSDoc comments
  - Full type signatures
  - Source locations (line/column)
  - Parameter information
  - Component props (for Svelte components)
  - Generic type parameters
  - `@example`, `@deprecated`, `@see` tags
  - Import/export relationships

**Output:**

- `src/routes/package.ts` with `Src_Json` containing all declarations
- Each declaration includes: `doc_comment`, `summary`, `type_signature`, `source_location`, `parameters`, `return_type`, `props`, `examples`, etc.

## Completed Implementation Phases

### Phase 2: UI Components (COMPLETED)

#### 2.1 Tooltip System

**Files to Create:**

- `src/lib/Tooltip.svelte` - Tooltip display component
- `src/lib/tooltip_state.svelte.ts` - Global tooltip state

**Key Features:**

```svelte
<Tooltip {x} {y} {content}>
	{@render content()}
</Tooltip>
```

- Sticky (can move mouse into it)
- Smart positioning (flip if near edge)
- Single global instance
- Fade in/out transitions

**State Management:**

```ts
class Tooltip_State {
	opened: boolean = $state(false);
	x: number = $state(0);
	y: number = $state(0);
	content: Snippet = $state();

	show(x, y, content) {
		/* ... */
	}
	hide() {
		/* ... */
	}
}
```

#### 2.2 Declaration Link Component

**File:** `src/lib/Declaration_Link.svelte`

**Usage:**

```svelte
<Declaration_Link {decl} {module_path} {pkg_name}>
	{decl.name}
</Declaration_Link>
```

**Features:**

- Renders `<a href="/docs/api/{module}/{identifier}">`
- `mouseenter` → show tooltip with type preview
- `mouseleave` (debounced) → hide tooltip
- Integrates with contextmenu action
- Styled by declaration kind (color-coded)

**Tooltip Content:**

```svelte
{#snippet tooltip_content()}
	<div class="declaration_tooltip">
		<div class="kind_badge">{decl.kind}</div>
		<code class="type_signature">{decl.type_signature}</code>
		{#if decl.summary}
			<p class="summary">{decl.summary}</p>
		{/if}
		<span class="hint">Click for full docs</span>
	</div>
{/snippet}
```

#### 2.3 API Page Component

**File:** `src/lib/Api_Page.svelte`

**Displays:**

```
┌─────────────────────────────────────┐
│ Header                               │
│ ├─ Name + Kind Badge                │
│ ├─ Source Link (GitHub)             │
│ └─ Deprecated Warning (if any)      │
├─────────────────────────────────────┤
│ Type Signature (syntax highlighted) │
├─────────────────────────────────────┤
│ Documentation                        │
│ └─ Full JSDoc comment               │
├─────────────────────────────────────┤
│ Parameters (if function)             │
│ └─ Table: name, type, description   │
├─────────────────────────────────────┤
│ Return Type (if function)            │
├─────────────────────────────────────┤
│ Examples (expandable Details)        │
│ └─ Code blocks from @example tags   │
├─────────────────────────────────────┤
│ Dependencies                         │
│ ├─ Imports (modules this uses)      │
│ └─ Imported By (modules using this) │
├─────────────────────────────────────┤
│ Related Identifiers                  │
│ └─ From @see tags + same module     │
└─────────────────────────────────────┘
```

### Phase 3: Routing & Pages (COMPLETED)

#### 3.1 Single-Page API Documentation

**File:** `src/routes/docs/api/+page.svelte`

**Architecture:** Hash-based navigation on a single page - all declarations rendered with anchor IDs

Features:

- All declarations rendered on one page (grouped by kind)
- Hash-based navigation: `/docs/api#Alert`, `/docs/api#Button`, etc.
- Search/filter input (fuzzy search)
- Group by kind (components, functions, types, etc.)
- Each declaration has an anchor ID matching its name
- Instant navigation without page reloads

Implementation:

```svelte
{#each [...grouped_by_kind.entries()] as [kind, items]}
  <section class="kind_section">
    <h2>{kind}s</h2>
    {#each items as { decl, module_path }}
      <article id={decl.name} class="declaration_detail">
        <Api_Page {decl} {module_path} repo_url={pkg.repo_url} />
      </article>
    {/each}
  </section>
{/each}
```

**Benefits:**
- Simpler architecture (one route instead of nested)
- Faster navigation (no page loads, just scrolling)
- All content indexed at once (better for search/SEO)
- Easier to implement "see also" links

#### 3.2 Data Helpers

**File:** `src/lib/api_data.ts`

Utilities using context pattern:

```ts
// Look up declaration by name across all modules
const lookup_declaration_by_name = (name: string): {
  decl: Src_Module_Declaration;
  module_path: string;
} | undefined

// Check if identifier is documented
const is_known_identifier = (name: string): boolean

// Search declarations by query
const search_declarations = (query: string): Array<{
  decl: Src_Module_Declaration;
  module_path: string;
}>
```

**Context API:**

```ts
// src/lib/api.ts
export interface Api {
  pkg: Pkg;
  src_json: Src_Json;
}
export const api_context = create_context<Api>();
```

### Phase 4: Integration

#### 4.1 Update Package_Detail.svelte

Replace line 203-206:

```svelte
<!-- OLD -->
<li class="declaration chip {kind}_declaration">
	{name}
</li>

<!-- NEW -->
<Declaration_Link {decl} {module_path} {pkg_name}>
	{decl.name}
</Declaration_Link>
```

#### 4.2 Contextmenu Actions

**File:** `src/lib/declaration_contextmenu.ts`

Generate contextmenu entries:

```ts
export const create_declaration_contextmenu = (
	decl: Src_Module_Declaration,
	module_path: string,
	pkg_name: string,
	repo_url?: string,
	homepage_url?: string,
): Array<Contextmenu_Params> => [
	// Navigate to API docs (hash-based)
	{
		snippet: 'link',
		props: {
			href: resolve(`/docs/api#${encodeURIComponent(decl.name)}`),
			icon: '📖',
		},
	},
	// Copy identifier name
	{
		snippet: 'text',
		props: {
			content: 'Copy name',
			icon: '📋',
			run: () => navigator.clipboard.writeText(decl.name),
		},
	},
	// Copy import statement
	{
		snippet: 'text',
		props: {
			content: 'Copy import',
			icon: '📥',
			run: () => {
				const stmt = generate_import_statement(decl, module_path, pkg_name);
				navigator.clipboard.writeText(stmt);
			},
		},
	},
	// View source on GitHub (if available)
	...(repo_url && decl.source_location ? [{
		snippet: 'link',
		props: {
			href: `${repo_url}/blob/main/src/lib/${module_path}#L${decl.source_location.line}`,
			icon: '🔗',
		},
	}] : []),
	// Copy link to docs (if homepage available)
	...(homepage_url ? [{
		snippet: 'text',
		props: {
			content: 'Copy docs link',
			icon: '🔗',
			run: () => {
				const url = `${homepage_url}/docs/api#${encodeURIComponent(decl.name)}`;
				navigator.clipboard.writeText(url);
			},
		},
	}] : []),
];
```

#### 4.3 Search Functionality

**File:** `src/lib/api_search.svelte.ts`

Fuzzy search over identifiers:

```ts
class Api_Search {
	query: string = $state('');
	results: Array<Search_Result> = $derived(this.search());

	search() {
		// Fuzzy match against all declaration names
		// Score by: exact match > starts with > contains > fuzzy
		// Filter by selected kinds (type, function, etc.)
	}
}
```

## Technical Decisions

### Routing Structure

**Choice:** `/docs/api#identifier` (hash-based single-page)

**Rationale:**

- Simpler architecture (one route vs. nested routes)
- Instant navigation (scrolling, no page loads)
- All declarations indexed on one page (better SEO)
- Flat namespace (no module nesting needed)
- Easy to implement cross-references with hash links

**Alternatives Considered:**

- `/docs/api/[module]/[identifier]` - More complex, slower navigation
- `/docs/api/[identifier]` - Would need separate pages, slower loads
- Modal overlays - Worse for sharing/bookmarking

### Data Enhancement Approach

**Choice:** Full custom generation in `package.gen.ts` with TypeScript Compiler API + svelte2tsx

**Rationale:**

- Maximum control over metadata extraction
- Leverages `filer` for efficient file scanning
- Single source of truth for package data
- Supports both TypeScript and Svelte components

**Implementation:**

- Uses TypeScript Compiler API for `.ts` files
- Uses svelte2tsx to transform Svelte components to analyzable TSX
- Extracts from AST nodes and type checker
- 79 files analyzed (24 TypeScript + 55 Svelte)
- Inlined type definitions from belt (no external dependencies on belt's Src_Json)

### Tooltip Pattern

**Choice:** Global singleton tooltip with Svelte context

**Rationale:**

- Only one tooltip on screen at a time
- Shared positioning logic
- Consistent styling
- Lower memory footprint

**API:**

```ts
// In Declaration_Link.svelte
const tooltip = tooltip_context.get();

function handleMouseEnter(e: MouseEvent) {
	tooltip.show(e.clientX, e.clientY, tooltip_content);
}
```

### Contextmenu Integration

**Choice:** Reuse existing `Contextmenu` component

**Rationale:**

- Already has gesture support (long-press, right-click)
- Keyboard navigation built-in
- Tree menu structure supports nested actions
- Consistent UX with rest of app

## File Structure

```
src/
├── lib/
│   ├── src_json.ts                       ✅ DONE (inlined from belt)
│   ├── api.ts                            ✅ DONE (context)
│   ├── api_data.ts                       ✅ DONE (helpers)
│   ├── ts_helpers.ts                     ✅ DONE
│   ├── svelte_helpers.ts                 ✅ DONE (component analysis)
│   ├── Tooltip.svelte                    ✅ DONE
│   ├── tooltip_state.svelte.ts           ✅ DONE
│   ├── Declaration_Link.svelte           ✅ DONE (hash-based links)
│   ├── Identifier_Link.svelte            ✅ DONE (uses context)
│   ├── Api_Page.svelte                   ✅ DONE
│   └── declaration_contextmenu.ts        ✅ DONE
├── routes/
│   ├── package.gen.ts                    ✅ DONE (TS + Svelte analysis)
│   ├── package.ts                        ✅ DONE (generated output)
│   └── docs/
│       └── api/
│           └── +page.svelte              ✅ DONE (single-page, hash nav)

Deleted files (architectural simplification):
  ❌ src/lib/enhanced_declarations.ts      (replaced by src_json.ts)
  ❌ src/lib/api_docs_context.ts           (replaced by api.ts)
  ❌ src/routes/docs/api/[module]/         (removed nested routing)
  ❌ src/routes/docs/api/[module]/[identifier]/ (removed nested routing)
```

## Implementation Order

1. ✅ **Type system** (`src_json.ts` inlined from belt)
2. ✅ **Context system** (`api.ts` following pkg_context pattern)
3. ✅ **TS helpers** (`ts_helpers.ts`)
4. ✅ **Svelte helpers** (`svelte_helpers.ts` using svelte2tsx)
5. ✅ **Package generator** (`package.gen.ts` - 79 files analyzed)
6. ✅ **Tooltip system** (global state + component)
7. ✅ **Declaration link** (with tooltip integration)
8. ✅ **Identifier link** (using context for ergonomics)
9. ✅ **API data helpers** (lookup functions)
10. ✅ **API single page** (hash-based navigation)
11. ✅ **Update Package_Detail** (use Declaration_Link)
12. ✅ **Contextmenu integration** (hash-based URLs)
13. ✅ **Search** (fuzzy finder)
14. ✅ **Polish & test** (COMPLETED)

## Success Criteria

- [x] Every identifier in Package_Detail is clickable
- [x] Hover shows tooltip with type + doc preview
- [x] Tooltip is sticky (can move mouse into it)
- [x] Right-click opens contextmenu with actions
- [x] Click navigates to `/docs/api#identifier` (hash-based)
- [x] Single-page API docs with all declarations rendered
- [x] Type signatures are displayed
- [x] Parameters table for functions
- [x] Component props table for Svelte components
- [x] Examples are shown
- [x] Dependencies/dependents listed (via see_also)
- [x] Search works across all identifiers
- [x] All existing functionality preserved
- [x] Added "api" tome to docs navigation (category: guide)
- [x] All ESLint warnings resolved
- [x] CSS naming follows snake_case convention
- [x] All tests passing
- [x] Svelte component analysis complete (79 files total)

## Final Status

**✅ IMPLEMENTATION COMPLETE**

All phases have been successfully implemented and integrated. The interactive API documentation system is now fully functional with a simplified, hash-based single-page architecture.

### What Was Built

1. **Complete metadata extraction** using TypeScript Compiler API + svelte2tsx
   - Extracts JSDoc comments, type signatures, parameters, examples, etc.
   - Processes **79 source files** from `src/lib/` (24 TypeScript + 55 Svelte)
   - Svelte component props analyzed via svelte2tsx transformation
   - Integrated into `package.gen.ts` generation pipeline
   - Inlined type definitions from belt (no external type dependencies)

2. **Interactive UI components**
   - `Tooltip.svelte` - Global sticky tooltip with smart positioning
   - `Declaration_Link.svelte` - Clickable identifiers with hover tooltips (hash-based URLs)
   - `Identifier_Link.svelte` - Ergonomic wrapper using context API
   - `Api_Page.svelte` - Full documentation display for each identifier
   - Contextmenu integration with copy/navigate actions

3. **Routing & navigation** (simplified architecture)
   - `/docs/api` - Single-page with all declarations rendered
   - Hash-based navigation: `/docs/api#Alert`, `/docs/api#Button`, etc.
   - Instant scrolling navigation (no page loads)
   - All content indexed on one page (better SEO)
   - Uses `Tome_Content`, `Tome_Section`, and `Tome_Section_Header` components
   - Automatic hashlinks for kind sections (components, functions, types, etc.)
   - Added to docs navigation as "api" tome in guide category

4. **Type system & architecture**
   - Created `src/lib/src_json.ts` - Inlined from belt with component extensions
   - Created `src/lib/api.ts` - Context following pkg_context pattern
   - Created `src/lib/api_data.ts` - Helper functions using context
   - Created `src/lib/svelte_helpers.ts` - Component analysis utilities
   - Removed "Enhanced" terminology throughout codebase
   - Simple, data-driven design

5. **Code quality**
   - All TypeScript checks passing
   - All tests passing
   - ESLint warnings resolved (added `resolve()` for SvelteKit paths)
   - Consistent snake_case CSS naming convention
   - Proper integration with existing codebase patterns

### Usage

- Navigate to any package in Package_Detail view
- Hover over identifiers to see type preview tooltip
- Click identifiers to view full API documentation (hash navigation)
- Right-click for contextmenu actions (copy import, view source, etc.)
- Use `/docs/api` to browse/search across all declarations
- All declarations visible on single page with instant navigation

### Technical Notes

- Svelte components analyzed via svelte2tsx transformation to TSX
- Component props extracted from `Props` interface in script block
- Hash-based routing avoids nested route complexity
- Flat namespace (no module-based routing needed)
- Dependency tracking implemented via `see_also` JSDoc tags
- External GitHub links use repo_url from package metadata
- Generation is deterministic (stable alphabetical module ordering)
- Context API prevents prop drilling (follows pkg_context pattern)

## Next Steps

See **TODO_PLAN.md** for upcoming improvements:

1. **High Priority**: Re-implement `pkg` from belt (type mismatch with new Src_Json)
2. **Medium Priority**: Remove unnecessary type assertions (`as any`)
3. **Medium Priority**: Remove index signatures `[key: string]: unknown`
4. **Low Priority**: Add linkified types in tables (make type references clickable)
5. **Low Priority**: Extract table components for better reusability
6. **Low Priority**: Cleanup pre-existing TODOs

All core functionality is complete and production-ready. Future work focuses on polish and type safety improvements.
