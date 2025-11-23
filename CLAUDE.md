# Fuz - Svelte UI library

> friendly user zystem 🧶

Fuz is a Svelte UI library built on the Moss CSS framework. It provides Svelte
components and TypeScript helpers for building user-friendly and
resource-efficient websites.

## Key dependencies

- Svelte 5 - component framework
- SvelteKit - application framework
- Moss (@ryanatkn/moss) - CSS framework foundation
- Belt (@ryanatkn/belt) - utility library
- Gro (@ryanatkn/gro) - build system and CLI

## Architecture

### Directory structure

```
src/
├── lib/              # exportable library code
│   ├── *.svelte      # UI components
│   ├── *.ts          # TypeScript utilities
│   ├── *.svelte.ts   # Svelte 5 runes and reactive utilities
│   └── *.gen.ts      # generated files (by Gro tasks)
├── test/             # test files (not co-located)
└── routes/           # SvelteKit routes
    ├── docs/         # documentation pages
    │   ├── tomes.ts  # central documentation registry
    │   ├── api/      # auto-generated API docs
    │   └── */        # individual doc pages
    └── *.svelte      # app layout and pages
```

### Core concepts

Tome - documentation units that define the library's structure. Each tome
represents a component or helper with:

- `name` - identifier
- `category` - "guide", "helpers", or "components"
- `component` - the doc page component
- `related` - links to related tomes

Central registry: `src/routes/docs/tomes.ts`

### Identifier namespacing

Fuz uses prefix-based namespacing with functions grouped by domain/object rather
than file location:

```ts
// domain-first, action-last (reads like method calls)
url_github_file(); // url.github_file()
repo_url_parse(); // repo_url.parse()
package_is_published(); // package.is_published()
```

Why: JS's dynamic nature and flat module structure benefit from explicit
prefixes. This pattern:

- groups related functions in autocomplete (`url_*`, `repo_*`, `package_*`)
- prevents name collisions without import aliasing
- works across modules without hierarchical nesting
- maps naturally to `/docs/api` namespace for documentation

Common patterns:

- `domain_action` - object-first, action-last (primary pattern)
- `domain_is_adjective` - boolean checks (`package_is_published`)
- action verbs: `parse`, `create`, `get`, `to`, `analyze`, `extract`
- action prefixes: `url_*` for URL builders

Helper file prefixes (by domain):

- `ts_*` - TypeScript compiler API helpers
- `tsdoc_*` - TSDoc/JSDoc parsing helpers
- `svelte_*` - Svelte component analysis helpers
- `module_*` - module path and detection helpers
- `package_gen_*` - Gro-specific package generation helpers

This naming is consistent across Belt, Moss, and Gro for a unified developer
experience.

Duplicate identifier names across modules fail fast during `gro gen` with clear
error messages. Resolve by renaming one identifier following the `domain_action`
pattern, or add `/** @nodocs */` to exclude from documentation and namespace
validation.

### API documentation system

Fuz includes a comprehensive system for generating and displaying API
documentation:

Code generation flow:

1. `package.gen.ts` (Gro task) - analyzes TypeScript/Svelte source with full
   TSDoc support
2. generates `package.ts` - serialized package metadata (`package_json` +
   `src_json`)
3. runtime classes wrap the data with Svelte 5 reactivity:
   - `Pkg` - package-level API with module/identifier lookups
   - `Module` - represents a source file with its exports
   - `Identifier` - represents an exported identifier (function, type, class,
     component)
4. SvelteKit routes at `/docs/api` render searchable documentation

Two-phase architecture (TSDoc → mdz):

**Build phase** (TSDoc extraction):

- uses `tsdoc_helpers.ts` with TypeScript Compiler API
- extracts JSDoc/TSDoc from source files
- produces structured data (doc_comment, params, returns, throws, examples,
  see_also, mutates)
- runs during `gro gen` only (build-time only)

**Runtime phase** (mdz rendering):

- uses `mdz.ts` to parse and render documentation strings
- mdz is an enhanced markdown dialect
- supports auto-detected URLs (`https://`), internal paths (`/path`), and
  standard markdown links (`[text](url)`)
- TSDoc `@see` tags are converted to mdz format during build phase
- runs in the browser when viewing docs
- mdz is the OUTPUT format - documentation extracted at build time is stored as
  mdz-formatted strings

Supporting helpers (three-layer architecture):

**Low-level** (TypeScript/TSDoc API wrappers):

- `ts_helpers.ts` - TypeScript compiler API utilities
  - `ts_analyze_identifier` - analyze a symbol with full metadata (reusable)
  - `ts_analyze_module_exports` - analyze all exports from a source file (reusable)
  - `ts_extract_*` - lower-level extraction functions for specific constructs
- `tsdoc_helpers.ts` - JSDoc/TSDoc parsing (supports standard tags: `@param`,
  `@returns`, `@throws`, `@example`, `@deprecated`, `@see`, `@since`, `@nodocs`,
  plus non-standard `@mutates` for documenting side effects; `@nodocs` excludes
  identifiers from documentation and flat namespace validation)
  - `tsdoc_parse` - extract structured TSDoc from a node
  - `tsdoc_apply_to_declaration` - apply parsed TSDoc to an identifier

**Mid-level** (domain utilities):

- `svelte_helpers.ts` - Svelte component analysis (via svelte2tsx)
  - `svelte_analyze_file` - analyze a .svelte file from disk (reusable)
  - `svelte_analyze_component` - analyze from svelte2tsx output
- `module_helpers.ts` - module path utilities and source detection
  - `module_matches_source` - configurable source detection predicate
  - `module_is_typescript`, `module_is_svelte` - simple extension predicates
  - `module_extract_path`, `module_get_component_name` - path utilities
  - `Module_Source_Options`, `MODULE_SOURCE_DEFAULTS` - configuration
- `src_json.ts` - type definitions for the metadata format
- `package_helpers.ts` - URL builders (`url_github_file`, `url_api_identifier`,
  `url_api_module`, etc.)

**High-level** (Gro-specific orchestration):

- `package_gen_helpers.ts` - build-time generation helpers
  - `package_gen_collect_source_files` - collect files from Gro's filer
  - `package_gen_extract_dependencies` - extract dependency graph from disknode
  - `package_gen_validate_no_duplicates` - flat namespace validation
  - `package_gen_analyze_*` - thin wrappers adding Gro-specific concerns
- `package.gen.ts` - the Gro task that orchestrates generation

The reusable functions (`ts_analyze_*`, `svelte_analyze_file`) can be used
outside of package generation for IDE integrations, linters, or custom tools.

Documentation components:

- `Identifier_Detail.svelte` - renders full identifier documentation
- `Type_Link.svelte`, `Module_Link.svelte`, `Identifier_Link.svelte` -
  cross-reference links
- `Docs*.svelte` - documentation layout system

## Navigation

### Documentation categories

#### Guides

- introduction - overview and getting started
- theming - theme and color scheme system
- api - API documentation structure

#### Helpers

- csp - Content Security Policy utilities (`csp.ts`)
- logos - logo and branding helpers (`logos.ts`)
- mdz - minimal markdown dialect for documentation (`mdz.ts`)

#### Components

layout and structure:

- `Card` - card container component
- `Details` - collapsible details element
- `Breadcrumb` - navigation breadcrumbs

feedback and alerts:

- `Alert` - alert/notification component
- `Pending_Animation` - loading animations
- `Pending_Button` - buttons with pending states

overlays and dialogs:

- `Dialog` - modal dialog component
- `Dialogs` - multi-dialog queue manager (experimental)
- `Teleport` - portal/teleport component
- `Contextmenu` - context menu system (`Contextmenu_Root`, `Contextmenu_Entry`,
  `Contextmenu_Link_Entry`, `Contextmenu_Submenu`, etc.)

forms and inputs:

- `Hue_Input` - hue color picker
- `Color_Scheme_Input` - color scheme selector
- `Theme_Input` - theme selector

icons and media:

- `Svg` - SVG component wrapper
- `Glyph` - emoji/icon display
- `Img_Or_Svg` - image/SVG wrapper

clipboard:

- `Copy_To_Clipboard` - clipboard copy button
- `Paste_From_Clipboard` - clipboard paste functionality

navigation links:

- `Hashlink` - hash anchor links
- `Tome_Link`, `Identifier_Link`, `Module_Link` - docs navigation
- `Github_Link`, `Mdn_Link` - external reference links

documentation:

- `Docs` - documentation layout system (`Docs*.svelte`)
- `Tome_Content`, `Tome_Header`, `Tome_Section` - tome layout components
- `Package_Detail` - package information display
- `Package_Summary` - package summary card
- `Mdz` - renders mdz (minimal markdown dialect) content with custom components

utilities:

- `Themed` - theme provider component
- `Redirect` - client-side redirects

### Key library files

core systems:

- `tome.ts` - documentation system types and utilities
- `docs_helpers.svelte.ts` - docs navigation and linking
- `themer.svelte.ts` - theme and color scheme management
- `context_helpers.ts` - Svelte context utilities
- `mdz.ts` - minimal markdown dialect for rendering documentation

component helpers:

- `contextmenu_state.svelte.ts` - context menu state management
- `contextmenu_helpers.ts` - context menu utilities
- `identifier_contextmenu.ts` - contextmenu for code identifiers
- `dialog.ts` - dialog utilities
- `alert.ts` - alert utilities

package and API:

- `package.ts` - generated package metadata (from `package.gen.ts`)
- `package.gen.ts` - package metadata generator (Gro task)
- `src_json.ts` - type definitions for metadata format
- `pkg.svelte.ts` - `Pkg` class wrapping package data
- `identifier.svelte.ts` - `Identifier` class for code identifiers
- `module.svelte.ts` - `Module` class for source files
- `package_helpers.ts` - package URL and parsing utilities

TypeScript and Svelte analysis:

- `ts_helpers.ts` - TypeScript compiler API utilities
  - high-level: `ts_analyze_identifier`, `ts_analyze_module_exports`
  - low-level: `ts_extract_function_info`, `ts_extract_class_info`, etc.
- `svelte_helpers.ts` - Svelte component analysis
  - high-level: `svelte_analyze_file`
  - low-level: `svelte_analyze_component`, `svelte_extract_props`
- `tsdoc_helpers.ts` - TSDoc/JSDoc parsing
  - `tsdoc_parse`, `tsdoc_apply_to_declaration`
- `module_helpers.ts` - module path utilities
  - predicates: `module_matches_source`, `module_is_typescript`, `module_is_svelte`
  - utilities: `module_extract_path`, `module_get_component_name`
  - configuration: `Module_Source_Options`, `MODULE_SOURCE_DEFAULTS`
- `package_gen_helpers.ts` - Gro-specific build-time helpers

browser and DOM:

- `storage.ts` - localStorage utilities
- `intersect.svelte.ts` - Svelte 5 attachment for IntersectionObserver
- `dimensions.svelte.ts` - dimension tracking
- `rune_helpers.svelte.ts` - Svelte 5 rune utilities
- `helpers.ts` - general utilities (`render_value_to_string`)

## Development

### Commands

```bash
npm run dev      # start development server
npm run build    # build library
npm run check    # type check
npm run test     # run tests
```

Or with Gro:

```bash
gro dev          # development
gro build        # build
gro check        # check types
gro test         # test
gro gen          # run code generators
```

IMPORTANT for AI agents: Do NOT run `npm run dev` or `gro dev` - the developer
will manage the dev server. Only run `gro check`, `gro test`, `gro gen`, etc.
for validation and code generation.

### Project standards

- TypeScript - strict typing throughout
- Svelte 5 - uses new runes API
- CSS - plain CSS with Moss framework
- formatting - Prettier with tabs, 100 char width
- Node - requires >=22.15
- tests - located in `src/test/` (not co-located with source)
  - fixture-based tests in `src/test/fixtures/` (mdz, tsdoc, ts, svelte)
  - each fixture: directory with input file and `expected.json`
  - regenerate with `gro src/test/fixtures/update` (updates all fixture types)
  - IMPORTANT: NEVER manually create or edit `expected.json` files - only create
    input files and run the update task to generate the JSON

### Code style

Fuz uses distinctive naming conventions compared to typical TypeScript/Svelte
projects:

- `snake_case` for most identifiers (files, variables, functions, types) instead
  of camelCase
- `Upper_Snake_Case` for types, class names, and Svelte components instead of
  PascalCase
- explicit file extensions in all imports
- tab indentation, 100 character line width
- tends toward flat file structure with co-located related code
- JSDoc comments (`/** ... */`) use proper sentence structure with periods;
  inline comments (`//`) can be sentence fragments and should not start with
  capital letters

## Key patterns

### Context system

Uses a standardized context pattern via `context_helpers.ts`:

Core:

- `themer_context` - theme state
- `pkg_context` - package API metadata

Documentation:

- `tomes_context` - available documentation
- `tome_context` - current documentation page
- `docs_links_context` - documentation navigation links
- `mdz_components_context` - custom mdz components

Contextmenu:

- `contextmenu_context`, `contextmenu_submenu_context`,
  `contextmenu_dimensions_context`

### Theming

Built on Moss CSS custom properties:

- `Themer` class manages theme state
- `Themed` component provides theme context
- `Color_Scheme_Input` and `Theme_Input` for user theme selection
- syncs with localStorage and system preferences

### Documentation system

Fuz provides a comprehensive documentation system for library projects,
combining manual documentation (tomes) with auto-generated API docs.

#### Docs layout and navigation

The `<Docs>` component provides the full documentation layout:

- three-column layout: primary nav (header), secondary nav (sidebar), tertiary
  nav (on-page links)
- responsive: sidebars collapse on mobile
- managed contexts: `tomes_context`, `docs_links_context`

Usage in Fuz:

```svelte
<!-- src/routes/docs/+layout.svelte -->
<script>
  import {Docs} from '@ryanatkn/fuz/Docs.svelte';
  import {tomes} from './tomes.js';
  import {pkg} from './pkg.js';
</script>

<Docs {tomes} {pkg}>
  {@render children()}
</Docs>
```

For consumer projects (like Moss):

- same setup, just import your local tomes and pkg
- optional `breadcrumb_children` snippet for branding

#### Tomes (manual documentation)

Tome system, alternative to "stories" for component docs:

- each doc is a `+page.svelte` wrapping content in `<Tome_Content>`
- central registry in `tomes.ts` defines all available docs as data
- each tome has: `name`, `category`, `component`, `related`
- categories: "guide", "helpers", "components"
- `Docs_Links` class manages in-page navigation (tertiary nav)
- related links connect documentation

Creating a tome:

1. **Define in registry**:
   ```typescript
   // src/routes/docs/tomes.ts
   export const tomes: Tome[] = [
     {
       name: "my_component",
       category: "components",
       component: lazy(() => import("./my_component/+page.svelte")),
       related: ["other_component", "guide"],
     },
   ];
   ```

2. **Create page**:
   ```svelte
   <!-- src/routes/docs/my_component/+page.svelte -->
   <script>
     import {Tome_Content} from '@ryanatkn/fuz/Tome_Content.svelte';
     import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
     const tome = get_tome_by_name('my_component');
   </script>

   <Tome_Content {tome}>
     <section>
       <p>Documentation content...</p>
     </section>
   </Tome_Content>
   ```

#### API documentation (auto-generated)

Auto-generated documentation from TypeScript/Svelte source with full TSDoc
support.

Setup for consumer projects (opt-in):

1. **Setup generation**:
   ```typescript
   // src/routes/package.gen.ts
   export * from "@ryanatkn/fuz/package.gen.js";
   ```

2. **Create API index route**:
   ```svelte
   <!-- src/routes/docs/api/+page.svelte -->
   <script>
     import {Api_Index} from '@ryanatkn/fuz/Api_Index.svelte';
   </script>
   <Api_Index />
   ```

3. **Create module detail route**:
   ```svelte
   <!-- src/routes/docs/api/[...module_path]/+page.svelte -->
   <script>
     import {Api_Module} from '@ryanatkn/fuz/Api_Module.svelte';
     const {params} = $props();
   </script>
   <Api_Module module_path={params.module_path} />
   ```

4. **Run generator**: `gro gen` to create `package.ts`

Composable building blocks (for custom layouts):

- `api_search.svelte.ts` - search/filter state management
  - `create_identifier_search(pkg)` - for API index
  - `create_module_identifier_search(identifiers)` - for module pages
- `Api_Identifier_List.svelte` - renders filtered identifier list
- `Docs_Search.svelte` - search input UI
- use with `Tome_Content`, `Tome_Section`, etc. for custom composition

## Notes

- early alpha - API will change
- designed for author's projects, gradually expanding
- copy/paste friendly for customization
- some components require SvelteKit (needs review)
- not enterprise-ready, growing as needed
