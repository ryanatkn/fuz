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
- action verbs: `parse`, `create`, `get`, `to`
- action prefixes: `url_*` for URL builders

This naming is consistent across Belt, Moss, and Gro for a unified developer
experience.

Duplicate identifier names across modules fail fast during `gro gen` with clear
error messages. Resolve by renaming one identifier following the `domain_action`
pattern.

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

Supporting helpers:

- `src_json.ts` - type definitions for the metadata format
- `package_gen_helpers.ts` - build-time generation helpers (validation, sorting,
  analysis)
- `ts_helpers.ts` - TypeScript compiler API utilities
- `tsdoc_helpers.ts` - JSDoc/TSDoc parsing
- `svelte_helpers.ts` - Svelte component analysis (via svelte2tsx)
- `module_helpers.ts` - module path utilities
- `package_helpers.ts` - URL builders (`url_github_file`, `url_api_identifier`,
  `url_api_module`, etc.)

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

- csp - Content Security Policy utilities (`src/lib/csp.ts`)
- logos - logo and branding helpers (`src/lib/logos.ts`)
- mdz - minimal Markdown+TSDoc parser for API documentation (`src/lib/mdz.ts`)

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
- `Mdz` - renders mdz (minimal Markdown+TSDoc) content with custom components

utilities:

- `Themed` - theme provider component
- `Redirect` - client-side redirects

### Key library files

core systems:

- `tome.ts` - documentation system types and utilities
- `docs_helpers.svelte.ts` - docs navigation and linking
- `themer.svelte.ts` - theme and color scheme management
- `context_helpers.ts` - Svelte context utilities
- `mdz.ts` - minimal Markdown+TSDoc parser for API docs

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
- `svelte_helpers.ts` - Svelte component analysis
- `tsdoc_helpers.ts` - TSDoc/JSDoc parsing
- `module_helpers.ts` - module path utilities

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

### Documentation

Tome system, alternative to "stories":

- each doc is a `+page.svelte` wrapping content in `Tome_Content`
- central registry in `tomes.ts` defines all available docs as data
- `Docs_Links` class manages in-page navigation
- related links connect documentation

### API documentation

Auto-generated documentation from TypeScript/Svelte source:

- run `gro gen` to analyze source and generate `package.ts`
- `pkg_context` provides access to the `Pkg` instance in SvelteKit routes
- `/docs/api` route renders searchable identifier list
- `/docs/api/[module_path]` routes render per-module documentation
- full TSDoc support including `@param`, `@returns`, `@example`, etc.

## Notes

- early alpha - API will change
- designed for author's projects, gradually expanding
- copy/paste friendly for customization
- some components require SvelteKit (needs review)
- not enterprise-ready, growing as needed
