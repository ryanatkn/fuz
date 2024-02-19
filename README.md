# `@ryanatkn/fuz`

> friendly user zystem 🧶 [fuz.dev](https://www.fuz.dev/)

Fuz is a <a href="https://svelte.dev/">Svelte</a> UI library and CSS design system.

The CSS design system:

- plain CSS
- designed around CSS variables (includes optional utility and semantic classes,
  but the base abstraction is implemented with
  [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) not classes)
- is the only required part of the library, everything else can be used a la carte
- supports [`color-scheme` and custom themes](https://www.fuz.dev/library/theme)
  (including dark mode)
- no dependencies except for `svelte`
- encourages plain HTML elements like `button` and `a` over Svelte components
  unless the gains are substantial
- has a small set of utility classes with plans for a lot more -
  currently includes a single global importable `style.css`,
  see [this issue about optimization](https://github.com/ryanatkn/fuz/issues/277)

The Svelte components and helpers:

- pending migration to Svelte 5
- builds on the CSS design system
- plain CSS
- not a fully-featured
- minimal abstraction
- should be easy to copy/paste into your projects when you need full control like
  [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte)

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

See [the library](https://www.fuz.dev/library) and
[modules docs](https://www.fuz.dev/modules) for more.

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
