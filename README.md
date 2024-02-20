# `@ryanatkn/fuz`

> friendly user zystem 🧶 [fuz.dev](https://www.fuz.dev/)

Fuz is a <a href="https://svelte.dev/">Svelte</a> UI library and CSS design system.
It's in early alpha and there will be many breaking changes.

Fuz is being made to support my [other projects](https://www.ryanatkn.com/table)
that focus on end-users.
Fuz emphasizes capability and efficiency and tries to be simple for those goals.
It's not trying to be as generalized or fully-featured as most UI libraries.
Feel free to take the ideas and code for your own purposes.

The CSS design system:

- plain CSS
- designed around CSS variables (includes optional utility and semantic classes,
  but the base abstraction is implemented with
  [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) not classes)
- the only required parts of the library are `@ryanatkn/fuz/style.css` and either
  `@ryanatkn/fuz/theme.css` or your own theme file, everything else can be used a la carte
- supports [`color-scheme` and custom themes](https://www.fuz.dev/library/theme)
  (including dark mode)
- zero dependencies except for Svelte
- encourages plain HTML elements like `button` and `a` over Svelte components
  unless the gains are substantial
- has a small set of utility classes with plans for a lot more -
  currently includes a single global importable `style.css`,
  see [this issue about optimization](https://github.com/ryanatkn/fuz/issues/277)

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
