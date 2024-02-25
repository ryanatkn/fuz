# `@ryanatkn/fuz`

> friendly user zystem 🧶 [fuz.dev](https://www.fuz.dev/)

Fuz is a [Svelte](https://svelte.dev/) UI library and CSS design system.
It's in early alpha and there will be many breaking changes.

Fuz is being made to support [my other projects](https://www.ryanatkn.com/table)
that focus on end-users.
Fuz emphasizes capability and efficiency and tries to be simple for those goals.
Compared to most UI libraries, Fuz has fewer features and more opinions,
and it has some unusual features like
[the contextmenu](https://www.fuz.dev/library/Contextmenu).

To learn more see [the docs](https://www.fuz.dev/library).
Feel free to take the ideas and code for your own purposes.

The CSS design system:

- plain CSS
- designed around style variables,
  a specialization of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
  - includes optional utility and semantic classes that use the variables
- the only required parts of the library are `@ryanatkn/fuz/style.css` and either
  `@ryanatkn/fuz/theme.css` or your own theme file, everything else can be used a la carte
- supports [`color-scheme` and custom themes](https://www.fuz.dev/library/theme)
  (including dark mode)
- zero dependencies except for Svelte
- styles HTML tags directly, so you don't need to add `.btn` to buttonss
  - encourages plain HTML elements like `button` and `a` over Svelte components
    unless the gains are substantial
  - includes `.prose` to apply document-like presentation compared to the base app-like presentation
- has a small set of utility and semantic classes with plans for more
  - prefers Svelte's `<style>` for nontrivial cases,
    so it won't be nearly as featureful as Tailwind
  - currently includes a single global importable `style.css`,
    seems likely I'll extract optional CSS files instead of going hard on build tooling,
    though eventually it probably makes sense to have a Vite plugin to remove unused styles

The Svelte components and helpers:

- pending migration to Svelte 5
- builds on the CSS design system
- plain CSS and minimal abstraction
- near-zero dependencies except for Svelte, SvelteKit, and my utility library
  [`@ryanatkn/belt`](https://github.com/ryanatkn/belt)
  (not all components require SvelteKit but some do import its modules, which could be polyfilled)
- not a fully-featured enterprise-ready set of components,
  it's being developed for the needs of specific projects, though eventually it will fill out
- should be easy to copy/paste into your projects when you need full control like
  [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte),
  I'll look into smoothing this pattern out in the future

## usage

```bash
npm i -D @ryanatkn/fuz
```

Import modules at their full paths:

```ts
// plain CSS stylesheets:
import '@ryanatkn/fuz/style.css';
import '@ryanatkn/fuz/theme.css'; // or bring your own
// Svelte components:
import Themed from '@ryanatkn/fuz/Themed.svelte';
// TypeScript modules:
import {type Theme, get_theme} from '@ryanatkn/fuz/theme.js';
```

See [the library](https://www.fuz.dev/library) for more.

## develop

```bash
npm i # node >=20.10

# development
npm run dev

# production
npm run build
npm start
```

## license 🐦

[MIT](LICENSE)
