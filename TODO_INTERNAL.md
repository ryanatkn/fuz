# TODO: @internal TSDoc Tag Support

> Track work for supporting `@internal` to exclude identifiers from flat namespace validation.

## Goal

Allow users to mark exported identifiers with `@internal` TSDoc tag to:
1. Exclude them from the flat namespace uniqueness check
2. Exclude them from generated API documentation
3. Signal that these exports are not part of the public API

## Use Case

Gro has many `.task.ts` files that all export `Args` and `task` by convention. These are internal tooling exports, not public API:

```ts
// build.task.ts
/** @internal */
export interface Args {
  // ...
}

/** @internal */
export const task: Task<Args> = {
  // ...
};
```

## Implementation Plan

### Phase 1: TSDoc Extraction

- [ ] Update `tsdoc_helpers.ts` to detect `@internal` tag
- [ ] Add `internal?: boolean` field to `Identifier_Json` in belt's `src_json.ts`
- [ ] Populate `internal` field during module analysis in `package.gen.ts`

### Phase 2: Flat Namespace Validation

- [ ] Update `package_gen_validate_no_duplicates` in `package_gen_helpers.ts`
- [ ] Skip identifiers with `internal: true` from duplicate detection
- [ ] Update error message to guide users toward `@internal` solution:

```
Duplicate identifier names detected in flat namespace:
  "Args" found in:
    - args.ts (type)
    - build.task.ts (type)
    - changeset.task.ts (type)
    ...

To resolve:
  1. Rename one of the conflicting identifiers, OR
  2. Add /** @internal */ to exclude from public API

See CLAUDE.md "Identifier namespacing" for details.
```

### Phase 3: API Documentation

- [ ] Filter out `internal: true` identifiers from API index
- [ ] Optionally show internal identifiers with a toggle/filter
- [ ] Update `Pkg` class methods to optionally include/exclude internal

### Phase 4: Documentation

- [ ] Update fuz CLAUDE.md with `@internal` usage
- [ ] Add example to API documentation guide

## Files to Modify

### Belt
- `src/lib/src_json.ts` - Add `internal?: boolean` to `Identifier_Json`

### Fuz
- `src/lib/tsdoc_helpers.ts` - Detect `@internal` tag
- `src/lib/package_gen_helpers.ts` - Update validation logic and error message
- `src/lib/package.gen.ts` - Populate `internal` field
- `src/lib/pkg.svelte.ts` - Filter methods for internal identifiers
- `CLAUDE.md` - Document the feature

## Testing

- [ ] Add fixture for `@internal` tagged exports
- [ ] Verify duplicate detection skips internal identifiers
- [ ] Verify API docs exclude internal identifiers

## Related

- Blocking: src_json refactoring (this TODO depends on the new `Identifier_Json` structure)
- See: `fuz_gitops/TODO_src_json_refactor.md`
