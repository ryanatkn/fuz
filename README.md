[<img src="/static/favicon.png" align="right" width="192" height="192">](https://www.fuz.dev/)

# `@ryanatkn/fuz`

> friendly user zystem 🧶 [fuz.dev](https://www.fuz.dev/)

Fuz is a [Svelte](https://svelte.dev/) UI library
with components and helpers for making friendly and helpful websites.
It's in early alpha and it will go through many breaking changes.

Fuz is being made to support [Zzz](https://zzz.ryanatkn.com/)
and [my other projects](https://www.ryanatkn.com/)
that focus on end-users.
Fuz emphasizes capability and efficiency and tries to be simple for those goals.
Compared to most UI libraries, Fuz has fewer features and more opinions.

To learn more see [the docs](https://www.fuz.dev/library) and [contributing.md](contributing.md).
Feel free to take the ideas and code for your own purposes.

The Svelte components and helpers:

- builds on my CSS framework [Moss](https://github.com/ryanatkn/moss)
- plain CSS and minimal abstraction
- near-zero dependencies except for Svelte, SvelteKit, Moss,
  and my utility library [`@ryanatkn/belt`](https://github.com/ryanatkn/belt)
  (not all components require SvelteKit but some do import its modules, needs more consideration)
- not a fully-featured enterprise-ready set of components,
  it's being developed for the needs of specific projects, though eventually it will fill out
- should be easy to copy/paste into your projects when you need full control like
  [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte),
  I'll look into smoothing this pattern out in the future

## Usage

> ⚠️ Expect a lot of breaking changes. If you want to help stabilize the API,
> please join [the Discord](https://discord.gg/YU5tyeK72X)
> and see [contributing.md](contributing.md), your input is appreciated.
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

Fuz uses my style framework [Moss](https://github.com/ryanatkn/moss).
Import modules at their full paths:

```ts
// Moss has one main plain CSS stylesheet:
import '@ryanatkn/moss/style.css';
// or import individual parts of `@ryanatkn/moss/style.css`:
import '@ryanatkn/moss/style_reset.css'; // required
import '@ryanatkn/moss/style_utilities.css'; // optional
import '@ryanatkn/moss/style_components.css'; // optional
import '@ryanatkn/moss/style_animations.css'; // optional
// and import a Moss theme:
import '@ryanatkn/moss/theme.css'; // or bring your own
// then import Fuz Svelte components:
import Themed from '@ryanatkn/fuz/Themed.svelte';
// and Fuz TypeScript modules:
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
