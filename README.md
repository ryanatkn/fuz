[<img src="/static/favicon.png" align="right" width="192" height="192">](https://www.fuz.dev/)

# `@ryanatkn/fuz`

> friendly user zystem 🧶 [fuz.dev](https://www.fuz.dev/)

Fuz is a [Svelte](https://svelte.dev/) UI library and CSS design system.
It's in early alpha and there will be many breaking changes.

Fuz is being made to support [my other projects](https://www.ryanatkn.com/table)
that focus on end-users.
Fuz emphasizes capability and efficiency and tries to be simple for those goals.
Compared to most UI libraries, Fuz has fewer features and more opinions.

To learn more see [the docs](https://www.fuz.dev/library).
Feel free to take the ideas and code for your own purposes.

The CSS design system:

- plain CSS
- designed around variables aka style variables aka design tokens,
  a specialization of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
  - variables are a more primitive building block than classes
  - includes optional utility and semantic classes that use the variables
- the only required parts of the library are `@ryanatkn/fuz/style.css` and either
  `@ryanatkn/fuz/theme.css` or your own theme file, everything else can be used a la carte
- supports [`color-scheme` and custom themes](https://www.fuz.dev/library/theme)
  (including dark mode)
- zero dependencies except for Svelte
- styles HTML tags directly, so you don't need to add `.btn` to buttons
  - encourages plain HTML elements like `button` and `a` over Svelte components
    unless the gains are substantial
- stylesheets:
  - [`@ryanatkn/style.css`](/src/lib/style.css), which is composed of:
    - [`@ryanatkn/style_reset.css`](/src/lib/style_reset.css) - required
    - [`@ryanatkn/style_utilities.css`](/src/lib/style_utilities.css) - optional
    - [`@ryanatkn/style_components.css`](/src/lib/style_components.css) - optional
    - [`@ryanatkn/style_animations.css`](/src/lib/style_animations.css) - optional
  - [`theme.css`](/src/lib/theme.css) - or bring your own
  - prefers Svelte's `<style>` for nontrivial cases
    because its utility classes are not nearly as featureful and complete as Tailwind -
    instead of providing a full interface to CSS through classes,
    Fuz provides an arbitrary subset that defers to Svelte CSS for complex and uncommon patterns
    (advanced build tooling like a compiler could change this, but I have no current plans for that)
  - it probably makes sense to include a Vite plugin to remove unused styles,
    but the primary apps I'm building provide these styles to users
    and therefore won't remove unused code, so the feature isn't urgent

The Svelte components and helpers:

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

## Usage

> ⚠️ Expect a lot of breaking changes. If you want to help stabilize the API,
> please join [the Discord](https://discord.gg/YU5tyeK72X), your input is appreciated.
>
> If you feel comfortable looking at the source code,
> Fuz is ready to use in your own projects,
> with the major caveat that there will be a lot of breaking changes ahead.
> The code is significantly incomplete but I think it's stable enough to use
> if you're willing to keep up with the relatively fast-moving changelog.
> For more see the dev channels in [Discord](https://discord.gg/YU5tyeK72X).

```bash
npm i -D @ryanatkn/fuz
```

Import modules at their full paths:

```ts
// plain CSS stylesheets:
import '@ryanatkn/fuz/style.css';
import '@ryanatkn/fuz/theme.css'; // or bring your own
// or import individual parts of `@ryanatkn/fuz/style.css`:
import '@ryanatkn/fuz/style_reset.css'; // required
import '@ryanatkn/fuz/style_utilities.css'; // optional
import '@ryanatkn/fuz/style_components.css'; // optional
import '@ryanatkn/fuz/style_animations.css'; // optional
// Svelte components:
import Themed from '@ryanatkn/fuz/Themed.svelte';
// TypeScript modules:
import {type Theme, get_theme} from '@ryanatkn/fuz/theme.js';
```

See [the library](https://www.fuz.dev/library) for more.

## Contributing

See [contributing.md](contributing.md).

## Develop

```bash
npm i # node >=20.10

# development
npm run dev

# production
npm run build
npm start
```

Fuz uses [Gro](https://github.com/ryanatkn/gro),
my CLI and toolkit that I use to run tasks in all of my projects.
If you're not allergic it's handy to install globally.

## License 🐦

[MIT](LICENSE)
