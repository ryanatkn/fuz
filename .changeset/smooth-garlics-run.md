---
'@ryanatkn/fuz': minor
---

- use `:where` in the reset stylesheet to lower specificity of most selectors
- rename `link_color_selected` from `link_active`
- remove generic variables to support generic fallbacks:
  - `var(--size)` becomes `var(--size, var(--size_md))`
  - `var(--icon_size)` becomes `var(--icon_size, var(--icon_size_md))`
