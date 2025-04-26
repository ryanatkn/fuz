---
'@ryanatkn/fuz': minor
---

fix inline theme script with CSP

- remove `create_theme_style_html`
- change `COLOR_SCHEME_STORAGE_KEY` value to have a prefix, `'fuz:color-scheme'`
- rename `themer.svelte.ts` from `theme.svelte.ts`
- add `storage.ts` localStorage helpers
