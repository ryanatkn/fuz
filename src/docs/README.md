# Fuz Documentation Sources

This directory contains documentation written in formats that are themselves being documented or tested.

## Files

- **mdz.mdz** - High-level introduction and index for mdz (minimal markdown dialect)
- **mdz_spec.mdz** - Detailed specification with syntax examples and usage patterns
- **mdz_grammar.mdz** - Formal grammar specification with Rust-style notation

## Rendered Documentation

These source files are rendered at:

- `/docs/mdz` - Index and high-level introduction (renders mdz.mdz)
- `/docs/mdz/spec` - Detailed specification with examples (renders mdz_spec.mdz)
- `/docs/mdz/grammar` - Formal grammar reference (renders mdz_grammar.mdz)

## Purpose

Writing documentation in mdz serves multiple purposes:

1. **Dogfooding** - proves mdz is capable of documenting itself
2. **Living documentation** - the parser must successfully handle these files
3. **Reference implementation** - demonstrates real-world mdz usage
4. **Testing** - provides additional validation beyond unit tests
