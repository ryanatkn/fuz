# Fuz - Svelte UI library

> friendly user zystem 🧶

Fuz is a Svelte UI library built on the Moss CSS framework. It provides components and helpers for building modern websites with Svelte 5.

## Project overview

- **package:** `@ryanatkn/fuz`
- **version:** 0.147.0
- **status:** early alpha (expect breaking changes)
- **homepage:** https://www.fuz.dev/
- **repository:** https://github.com/ryanatkn/fuz

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

**Tome** - documentation units that define the library's structure. Each tome represents a component or helper with:
- `name` - identifier
- `category` - "guide", "helpers", or "components"
- `component` - the doc page component
- `related` - links to related tomes

Central registry: `src/routes/docs/tomes.ts`

## Code style

Fuz uses distinctive naming conventions compared to typical TypeScript/Svelte projects:

- **snake_case** for most identifiers (files, variables, functions, types) instead of camelCase
- **PascalCase** only for class names and Svelte components
- Classes use Svelte 5 runes (`$state`, `$derived`) and public fields instead of private fields with getters
- Explicit file extensions (`.js`) in all imports, even for `.ts` files
- Tab indentation, 100 character line width
- Tends toward flat file structure with co-located related code
- Heavy use of Svelte 5's new `*.svelte.ts` pattern for reactive state management

This style is consistent across the author's projects (Moss, Belt, Gro) and emphasizes readability and simplicity over conventional JavaScript/TypeScript patterns.

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

**layout & structure**
- **Card** - card container component (`src/lib/Card.svelte`)
- **Details** - collapsible details element (`src/lib/Details.svelte`)
- **Breadcrumb** - navigation breadcrumbs (`src/lib/Breadcrumb.svelte`)

**feedback & alerts**
- **Alert** - alert/notification component (`src/lib/Alert.svelte`)
- **Pending_Animation** - loading animations (`src/lib/Pending_Animation.svelte`)
- **Pending_Button** - buttons with pending states (`src/lib/Pending_Button.svelte`)

**overlays & dialogs**
- **Dialog** - modal dialog component (`src/lib/Dialog.svelte`)
- **Teleport** - portal/teleport component (`src/lib/Teleport.svelte`)
- **Contextmenu** - context menu system (`src/lib/Contextmenu*.svelte`)

**forms & inputs**
- **Hue_Input** - hue color picker (`src/lib/Hue_Input.svelte`)

**documentation**
- **Docs** - documentation layout system (`src/lib/Docs*.svelte`)
- **Package_Detail** - package information display (`src/lib/Package_Detail.svelte`)
- **Package_Summary** - package summary card (`src/lib/Package_Summary.svelte`)

**utilities**
- **Svg** - SVG component wrapper (`src/lib/Svg.svelte`)
- **Themed** - theme provider component (`src/lib/Themed.svelte`)
- **Redirect** - client-side redirects (`src/lib/Redirect.svelte`)

### Key library files

**core systems**
- `tome.ts` - documentation system types and utilities
- `docs_helpers.svelte.ts` - docs navigation and linking
- `themer.svelte.ts` - theme and color scheme management
- `context_helpers.ts` - Svelte context utilities

**component helpers**
- `contextmenu_state.svelte.ts` - context menu state management
- `contextmenu_helpers.ts` - context menu utilities
- `dialog.ts` - dialog utilities
- `alert.ts` - alert utilities

**package & API**
- `package.ts` - generated package metadata
- `package.gen.ts` - package metadata generator
- `api_data.ts` - API documentation data
- `src_json.ts` - source JSON utilities
- `identifier.svelte.ts` - code identifier utilities
- `module.svelte.ts` - module utilities

**TypeScript & Svelte**
- `ts_helpers.ts` - TypeScript utilities
- `svelte_helpers.ts` - Svelte-specific utilities
- `tsdoc_helpers.ts` - TSDoc parsing utilities
- `module_helpers.ts` - module loading utilities

**browser & DOM**
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

### Project standards

- **TypeScript** - strict typing throughout
- **Svelte 5** - uses new runes API
- **CSS** - plain CSS with Moss framework
- **formatting** - Prettier with tabs, 100 char width
- **Node** - requires >=22.15

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

Tome-based system:
- each doc is a `+page.svelte` wrapping content in `Tome_Content`
- central registry in `tomes.ts` defines all available docs
- `Docs_Links` class manages in-page navigation
- related links connect documentation

## Notes

- early alpha - API will change
- designed for author's projects, gradually expanding
- copy/paste friendly for customization
- some components require SvelteKit (needs review)
- not enterprise-ready, growing as needed
