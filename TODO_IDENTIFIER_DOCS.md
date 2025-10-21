# Interactive API Documentation Implementation

> Transform identifier display into rich, interactive documentation with tooltips, contextmenus, and dedicated API pages

## Overview

Make every identifier in the package detail view interactive:
- **Plain links**: Each identifier is an `<a>` tag
- **Sticky tooltips**: Hover shows type info, doc summary (can move mouse into tooltip)
- **Contextmenu**: Right-click for actions (navigate, copy import, view source)
- **Dedicated pages**: Click navigates to `/docs/api/{module}/{identifier}` with full docs

## Current Progress ✅

### Phase 1: Enhanced Data Generation (COMPLETED)

**Files Created:**
- `src/lib/enhanced_declarations.ts` - Rich type definitions
- `src/lib/ts_helpers.ts` - TypeScript Compiler API utilities
- `src/routes/package.gen.ts` - Custom package generator

**What It Does:**
- Scans all 69 source files in `src/lib/`
- Extracts metadata using TypeScript Compiler API:
  - JSDoc/TSDoc comments
  - Full type signatures
  - Source locations (line/column)
  - Parameter information
  - Generic type parameters
  - `@example`, `@deprecated`, `@see` tags
  - Import/export relationships

**Output:**
- Enhanced `src/routes/package.ts` with `Enhanced_Src_Json`
- Each declaration includes: `doc_comment`, `summary`, `type_signature`, `source_location`, `parameters`, `return_type`, `examples`, etc.

## Remaining Phases

### Phase 2: UI Components

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

  show(x, y, content) { /* ... */ }
  hide() { /* ... */ }
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

### Phase 3: Routing & Pages

#### 3.1 API Index Page
**File:** `src/routes/docs/api/+page.svelte`

Features:
- List all modules with their declarations
- Search/filter input (fuzzy search)
- Group by module (collapsible)
- Filter by kind (show only types, functions, etc.)

#### 3.2 API Module Layout
**File:** `src/routes/docs/api/[module]/+layout.svelte`

Features:
- Breadcrumb: `docs > api > {module}`
- Module overview (from module-level JSDoc)
- Sidebar with identifier list

#### 3.3 API Identifier Page
**File:** `src/routes/docs/api/[module]/[identifier]/+page.svelte`

Route params:
- `params.module` - e.g., "alert.ts" → "./alert.ts"
- `params.identifier` - e.g., "Alert_Status"

Implementation:
```svelte
<script>
  const {module, identifier} = $derived($page.params);
  const decl = $derived(lookup_declaration(module, identifier));
</script>

{#if decl}
  <Api_Page {decl} {module} />
{:else}
  <p>Declaration not found</p>
{/if}
```

#### 3.4 Data Helpers
**File:** `src/routes/docs/api/api_data.svelte.ts`

Utilities:
```ts
// Look up declaration by module + name
const lookup_declaration = (
  module: string,
  name: string
): Enhanced_Declaration | undefined

// Get all declarations (flat list)
const get_all_declarations = (): Array<{
  module: string;
  decl: Enhanced_Declaration;
}>

// Build dependency graph
const get_dependencies = (module: string): string[]
const get_dependents = (module: string): string[]
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
  decl: Enhanced_Declaration,
  module: string,
  pkg: Pkg,
): Array<Contextmenu_Params> => [
  // Navigate to API docs
  {
    snippet: 'link',
    props: {
      href: `/docs/api/${module}/${decl.name}`,
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
        const stmt = generate_import_statement(decl, module, pkg.package_json.name);
        navigator.clipboard.writeText(stmt);
      },
    },
  },
  // View source on GitHub
  {
    snippet: 'link',
    props: {
      href: `${pkg.repo_url}/blob/main/src/lib/${module}#L${decl.source_location?.line}`,
      icon: '🔗',
    },
  },
  // Copy link to docs
  {
    snippet: 'text',
    props: {
      content: 'Copy docs link',
      icon: '🔗',
      run: () => {
        const url = `${pkg.homepage_url}/docs/api/${module}/${decl.name}`;
        navigator.clipboard.writeText(url);
      },
    },
  },
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
**Choice:** `/docs/api/{module}/{identifier}` (nested by module)

**Rationale:**
- Groups related identifiers
- Clear hierarchy (docs > api > module > identifier)
- URL structure mirrors code structure

**Alternatives Considered:**
- `/docs/api/{identifier}` - Too flat, name collisions
- Modal overlays - Worse for sharing/bookmarking

### Data Enhancement Approach
**Choice:** Full custom generation in `package.gen.ts`

**Rationale:**
- Maximum control over metadata extraction
- Leverages `filer` for efficient file scanning
- Single source of truth for package data

**Implementation:**
- Uses TypeScript Compiler API directly
- Extracts from AST nodes and type checker
- 69 files analyzed in ~2 seconds

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
│   ├── enhanced_declarations.ts          ✅ DONE
│   ├── ts_helpers.ts                     ✅ DONE
│   ├── Tooltip.svelte                    📝 TODO
│   ├── tooltip_state.svelte.ts           📝 TODO
│   ├── Declaration_Link.svelte           📝 TODO
│   ├── Api_Page.svelte                   📝 TODO
│   ├── declaration_contextmenu.ts        📝 TODO
│   └── api_search.svelte.ts              📝 TODO
├── routes/
│   ├── package.gen.ts                    ✅ DONE (custom generator)
│   ├── package.ts                        ✅ DONE (generated output)
│   └── docs/
│       └── api/
│           ├── +page.svelte              📝 TODO (index)
│           ├── api_data.svelte.ts        📝 TODO (helpers)
│           └── [module]/
│               ├── +layout.svelte        📝 TODO
│               └── [identifier]/
│                   └── +page.svelte      📝 TODO
```

## Implementation Order

1. ✅ **Enhanced type system** (`enhanced_declarations.ts`)
2. ✅ **TS helpers** (`ts_helpers.ts`)
3. ✅ **Package generator** (`package.gen.ts`)
4. 📝 **Tooltip system** (global state + component)
5. 📝 **Declaration link** (with tooltip integration)
6. 📝 **API identifier page** (test with one identifier)
7. 📝 **API data helpers** (lookup functions)
8. 📝 **API index page** (all identifiers)
9. 📝 **API module layout** (module overview)
10. 📝 **Update Package_Detail** (use Declaration_Link)
11. 📝 **Contextmenu integration** (actions)
12. 📝 **Search** (fuzzy finder)
13. 📝 **Polish & test**

## Success Criteria

- [ ] Every identifier in Package_Detail is clickable
- [ ] Hover shows tooltip with type + doc preview
- [ ] Tooltip is sticky (can move mouse into it)
- [ ] Right-click opens contextmenu with actions
- [ ] Click navigates to `/docs/api/{module}/{identifier}`
- [ ] API pages show full documentation
- [ ] Type signatures are displayed
- [ ] Parameters table for functions
- [ ] Examples are shown
- [ ] Dependencies/dependents listed
- [ ] Search works across all identifiers
- [ ] All existing functionality preserved

## Next Steps

**Immediate:**
1. Build tooltip system (reusable component)
2. Create Declaration_Link with tooltip integration
3. Implement first API page to test data flow

**Then:**
4. Add routing and navigation
5. Build index and search
6. Integrate with Package_Detail
7. Add contextmenu actions
8. Polish UX and styling

**Finally:**
9. Update CLAUDE.md with architecture overview
10. Test all features end-to-end
11. Document usage for contributors
