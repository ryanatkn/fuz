# `@ryanatkn/fuz`

[<img src="static/logo.svg" alt="a friendly brown spider facing you" align="right" width="192" height="192">](https://www.fuz.dev/)

> friendly user zystem 🧶 [fuz.dev](https://www.fuz.dev/)

Fuz is a [Svelte](https://svelte.dev/) UI library
with components and helpers for making modern websites.
It's in early alpha and it will go through many breaking changes.

Fuz is being made to support
[my other projects](https://www.ryanatkn.com/)
that focus on end-users.
Fuz emphasizes capability and efficiency and tries to be simple for those goals.
Compared to most UI libraries, Fuz has fewer conventional features and more opinions.

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
> thank you see [contributing.md](contributing.md), your input is appreciated.
>
> If you feel comfortable looking at the source code,
> Fuz is ready to use in your own projects,
> with the major caveat that there will be a lot of breaking changes ahead.
> The code is significantly incomplete but I think it's stable enough to use
> if you're willing to keep up with the relatively fast-moving changelog.

```bash
npm i -D @ryanatkn/fuz
```

Fuz uses my style framework [Moss](https://github.com/ryanatkn/moss).
Import modules at their full paths:

```ts
// Moss has one main plain CSS stylesheet:
import '@ryanatkn/moss/style.css';

// and import a Moss theme:
import '@ryanatkn/moss/theme.css'; // or bring your own

// using Gro generates Moss' utility classes stylesheet by default:
import '$routes/moss.css';

// then import Fuz Svelte components:
import Themed from '@ryanatkn/fuz/Themed.svelte';

// and Fuz TypeScript modules:
import {type Theme, themer_context} from '@ryanatkn/fuz/theme.svelte.js';
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
