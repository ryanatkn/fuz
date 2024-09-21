---
'@ryanatkn/fuz': minor
---

improve library styles

- rename `Tome_Header` from `Tome_Title`
- rename `Tome_Section_Header` from `Tome_Subheading`
- rename `Library_Link` from `Library_Link_Data`
- rename `get_tome_by_name` from `get_tome`
- use belt's `slugify`, which lowercases, and remove `tome.slug` and `tome.pathname`
