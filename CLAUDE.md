# Fuz - Svelte UI library

> friendly user zystem 🧶

Fuz is a Svelte UI library built on the Moss CSS framework.
It provides Svelte components and TypeScript helpers
for building user-friendly and resource-efficient websites.

## Key dependencies

- **Svelte 5** - component framework
- **SvelteKit** - application framework
- **Moss** (@ryanatkn/moss) - CSS framework foundation
- **Belt** (@ryanatkn/belt) - utility library
- **Gro** (@ryanatkn/gro) - build system and CLI

## Architecture

### Directory structure

```
src/
├── lib/              # exportable library code
│   ├── *.svelte      # UI components
│   ├── *.ts          # TypeScript utilities
│   └── *.svelte.ts   # Svelte 5 runes and reactive utilities
└── routes/
    └── docs/         # documentation pages
        ├── tomes.ts  # central documentation registry
        └── */        # individual doc pages
```

### Core concepts

**Tome** - documentation units that define the library's structure.
Each tome represents a component or helper with:

- `name` - identifier
- `category` - "guide", "helpers", or "components"
- `component` - the doc page component
- `related` - links to related tomes

Central registry: `src/routes/docs/tomes.ts`

### Identifier namespacing

Fuz uses prefix-based namespacing with functions group by domain/object rather than file location:

```typescript
// domain-first, action-last (reads like method calls)
github_file_url()      // github_file.url()
repo_url_parse()       // repo_url.parse()
package_is_published() // package.is_published()
```

**Why:** JS's dynamic nature and flat module structure benefit from explicit prefixes. This pattern:
- groups related functions in autocomplete (`github_*`, `repo_*`, `package_*`)
- prevents name collisions without import aliasing
- works across modules without hierarchical nesting
- maps naturally to `/docs/api` namespace for documentation

**Common patterns:**
- `domain_action` - object-first, action-last (primary pattern)
- `domain_is_adjective` - boolean checks (`package_is_published`)
- Action verbs: `parse`, `url`, `create`, `get`, `to`

This naming is consistent across Belt, Moss, and Gro for a unified developer experience.

## Navigation

### Documentation categories

#### Guides
- **introduction** - overview and getting started
- **theming** - theme and color scheme system
- **api** - API documentation structure

#### Helpers
- **csp** - Content Security Policy utilities (`src/lib/csp.ts`)
- **logos** - logo and branding helpers (`src/lib/logos.ts`)

#### Components

layout and structure:

- **Card** - card container component (`src/lib/Card.svelte`)
- **Details** - collapsible details element (`src/lib/Details.svelte`)
- **Breadcrumb** - navigation breadcrumbs (`src/lib/Breadcrumb.svelte`)

feedback and alerts:

- **Alert** - alert/notification component (`src/lib/Alert.svelte`)
- **Pending_Animation** - loading animations (`src/lib/Pending_Animation.svelte`)
- **Pending_Button** - buttons with pending states (`src/lib/Pending_Button.svelte`)

overlays and dialogs:

- **Dialog** - modal dialog component (`src/lib/Dialog.svelte`)
- **Teleport** - portal/teleport component (`src/lib/Teleport.svelte`)
- **Contextmenu** - context menu system (`src/lib/Contextmenu*.svelte`)

forms and inputs:

- **Hue_Input** - hue color picker (`src/lib/Hue_Input.svelte`)

documentation:

- **Docs** - documentation layout system (`src/lib/Docs*.svelte`)
- **Package_Detail** - package information display (`src/lib/Package_Detail.svelte`)
- **Package_Summary** - package summary card (`src/lib/Package_Summary.svelte`)

utilities:

- **Svg** - SVG component wrapper (`src/lib/Svg.svelte`)
- **Themed** - theme provider component (`src/lib/Themed.svelte`)
- **Redirect** - client-side redirects (`src/lib/Redirect.svelte`)

### Key library files

core systems:

- `tome.ts` - documentation system types and utilities
- `docs_helpers.svelte.ts` - docs navigation and linking
- `themer.svelte.ts` - theme and color scheme management
- `context_helpers.ts` - Svelte context utilities

component helpers:

- `contextmenu_state.svelte.ts` - context menu state management
- `contextmenu_helpers.ts` - context menu utilities
- `dialog.ts` - dialog utilities
- `alert.ts` - alert utilities

package and API:

- `package.ts` - generated package metadata
- `package.gen.ts` - package metadata generator
- `api_data.ts` - API documentation data
- `src_json.ts` - source JSON utilities
- `identifier.svelte.ts` - code identifier utilities
- `module.svelte.ts` - module utilities

TypeScript and Svelte:

- `ts_helpers.ts` - TypeScript utilities
- `svelte_helpers.ts` - Svelte-specific utilities
- `tsdoc_helpers.ts` - TSDoc parsing utilities
- `module_helpers.ts` - module loading utilities

browser and DOM:

- `storage.ts` - localStorage utilities
- `intersect.ts` - Intersection Observer utilities
- `dimensions.svelte.ts` - dimension tracking
- `rune_helpers.svelte.ts` - Svelte 5 rune utilities

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
```

**IMPORTANT for AI agents:**
Do NOT run `npm run dev` or `gro dev` - the developer will manage the dev server.
Only run `gro check`, `gro test`, `gro gen`, etc. for validation and code generation.

### Project standards

- **TypeScript** - strict typing throughout
- **Svelte 5** - uses new runes API
- **CSS** - plain CSS with Moss framework
- **formatting** - Prettier with tabs, 100 char width
- **Node** - requires >=22.15

### Code style

Fuz uses distinctive naming conventions compared to typical TypeScript/Svelte projects:

- **snake_case** for most identifiers (files, variables, functions, types) instead of camelCase
- **Upper_Snake_Case** for types, class names, and Svelte components instead of PascalCase
- explicit file extensions in all imports
- tab indentation, 100 character line width
- tends toward flat file structure with co-located related code
- **JSDoc comments** (`/** ... */`) use proper sentence structure with periods;
    inline comments (`//`) can be sentence fragments and should not start with capital letters

## Key patterns

### Context system

Uses a standardized context pattern via `context_helpers.ts`:
- `themer_context` - theme state
- `tomes_context` - available documentation
- `tome_context` - current documentation page
- `docs_links_context` - documentation navigation links

### Theming

Built on Moss CSS custom properties:
- `Themer` class manages theme state
- `Themed` component provides theme context
- `Color_Scheme_Input` for user theme selection
- syncs with localStorage and system preferences

### Documentation

Tome system, alternative to "stories":

- each doc is a `+page.svelte` wrapping content in `Tome_Content`
- central registry in `tomes.ts` defines all available docs as data
- `Docs_Links` class manages in-page navigation
- related links connect documentation

## Notes

- early alpha - API will change
- designed for author's projects, gradually expanding
- copy/paste friendly for customization
- some components require SvelteKit (needs review)
- not enterprise-ready, growing as needed
