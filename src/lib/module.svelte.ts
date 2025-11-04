/**
 * Rich runtime Module class following the "minimal + rich" pattern.
 *
 * Wraps minimal serializable Module_Json data with computed properties and query methods.
 * Part of the API documentation hierarchy: Pkg -> Module -> Identifier
 *
 * @see pkg.svelte.ts for parent Pkg class
 * @see identifier.svelte.ts for child Identifier class
 * @see src_json.ts for minimal serializable types
 */

import {Identifier} from '$lib/identifier.svelte.js';
import type {Pkg} from '$lib/pkg.svelte.js';
import type {Module_Json} from '$lib/src_json.js';
import {github_file_url} from '$lib/package_helpers.js';
import {DOCS_API_PATH} from '$lib/docs_helpers.svelte.js';

/**
 * Rich runtime representation of a source module with computed properties.
 *
 * Combines:
 * - Minimal Module_Json data (serializable)
 * - Full Pkg reference (for generating URLs, import statements, etc.)
 * - Lazy-computed Identifier instances
 * - Query methods for ergonomic usage
 */
export class Module {
	readonly pkg: Pkg = $state.raw()!;
	readonly src_module: Module_Json = $state.raw()!;

	/**
	 * Canonical module path (no prefix) - matches storage, URLs, display.
	 * Examples: 'Alert.ts', 'helpers/foo.ts'
	 */
	path = $derived(this.src_module.path);

	/**
	 * Full docs URL pathname for this module page.
	 * Examples: '/docs/api/Alert.ts', '/docs/api/helpers/foo.ts'
	 */
	path_docs = $derived(`${DOCS_API_PATH}/${this.path}`);

	/**
	 * Import-style path with ./ prefix for import statements.
	 * Examples: './Alert.ts', './helpers/foo.ts'
	 */
	path_import = $derived('./' + this.path);

	/**
	 * Module-level JSDoc comment.
	 */
	module_comment = $derived(this.src_module.module_comment);

	/**
	 * Lazy-computed array of Identifier instances.
	 * Filters out default exports and creates rich Identifier objects.
	 */
	identifiers = $derived(
		this.src_module.identifiers
			? this.src_module.identifiers
					.filter((identifier_json) => identifier_json.name !== 'default') // skip default exports
					.map((identifier_json) => new Identifier(this, identifier_json))
			: [],
	);

	/**
	 * GitHub source URL for the module file.
	 */
	module_url = $derived(
		this.pkg.repo_url ? github_file_url(this.pkg.repo_url, `src/lib/${this.path}`) : undefined,
	);

	/**
	 * Check if module has any identifiers.
	 */
	has_identifiers: boolean = $derived(
		!!(this.src_module.identifiers && this.src_module.identifiers.length > 0),
	);

	/**
	 * Check if module has a module-level comment.
	 */
	has_module_comment: boolean = $derived(!!this.src_module.module_comment);

	constructor(pkg: Pkg, src_module: Module_Json) {
		this.pkg = pkg;
		this.src_module = src_module;
	}

	/**
	 * Look up an identifier by name within this module.
	 */
	get_identifier_by_name(name: string): Identifier | undefined {
		return this.identifiers.find((id) => id.name === name);
	}
}
