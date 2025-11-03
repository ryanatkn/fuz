/**
 * Rich runtime Module class following the "minimal + rich" pattern.
 *
 * Wraps minimal serializable Src_Module data with computed properties and query methods.
 * Part of the API documentation hierarchy: Pkg -> Module -> Identifier
 *
 * @see pkg.svelte.ts for parent Pkg class
 * @see identifier.svelte.ts for child Identifier class
 * @see src_json.ts for minimal serializable types
 */

import {Identifier} from '$lib/identifier.svelte.js';
import type {Pkg} from '$lib/pkg.svelte.js';
import type {Src_Module} from '$lib/src_json.js';
import {url_github_file} from '$lib/package_helpers.js';

/**
 * Rich runtime representation of a source module with computed properties.
 *
 * Combines:
 * - Minimal Src_Module data (serializable)
 * - Full Pkg reference (for generating URLs, import statements, etc.)
 * - Lazy-computed Identifier instances
 * - Query methods for ergonomic usage
 */
export class Module {
	readonly pkg: Pkg = $state.raw()!;
	readonly src_module: Src_Module = $state.raw()!;

	/**
	 * Module path relative to src/lib (e.g., "./Alert.ts").
	 */
	path = $derived(this.src_module.path);

	/**
	 * Module-level JSDoc comment.
	 */
	module_comment = $derived(this.src_module.module_comment);

	/**
	 * Lazy-computed array of Identifier instances.
	 * Filters out default exports and creates rich Identifier objects.
	 */
	identifiers = $derived(
		this.src_module.declarations
			? this.src_module.declarations
					.filter((decl) => decl.name !== 'default') // skip default exports
					.map((decl) => new Identifier(this, decl))
			: [],
	);

	/**
	 * GitHub source URL for the module file.
	 */
	module_url = $derived(
		this.pkg.repo_url ? url_github_file(this.pkg.repo_url, `src/lib/${this.path}`) : undefined,
	);

	constructor(pkg: Pkg, src_module: Src_Module) {
		this.pkg = pkg;
		this.src_module = src_module;
	}

	/**
	 * Check if module has any declarations.
	 */
	has_declarations(): boolean {
		return !!(this.src_module.declarations && this.src_module.declarations.length > 0);
	}

	/**
	 * Check if module has a module-level comment.
	 */
	has_module_comment(): boolean {
		return !!this.src_module.module_comment;
	}

	/**
	 * Look up an identifier by name within this module.
	 */
	get_identifier_by_name(name: string): Identifier | undefined {
		return this.identifiers.find((id) => id.name === name);
	}
}
