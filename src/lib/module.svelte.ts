/**
 * Rich runtime Module class following the "minimal + rich" pattern.
 *
 * Wraps minimal serializable Src_Module data with computed properties and query methods.
 * Pattern inspired by Pkg class in pkg.ts.
 *
 * @see src_json.ts for minimal serializable types
 * @see identifier.svelte.ts for child Identifier class
 */

import {Identifier} from '$lib/identifier.svelte.js';
import type {Pkg} from '$lib/pkg.js';
import type {Src_Module} from '$lib/src_json.js';

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
	readonly pkg: Pkg;
	readonly src_module: Src_Module = $state.raw()!; // Shallow reactivity - data is immutable

	constructor(pkg: Pkg, src_module: Src_Module) {
		this.pkg = pkg;
		this.src_module = src_module;
	}

	/**
	 * Module path relative to src/lib (e.g., "./Alert.ts")
	 */
	get path(): string {
		return this.src_module.path;
	}

	/**
	 * Module-level JSDoc comment
	 */
	get module_comment(): string | undefined {
		return this.src_module.module_comment;
	}

	/**
	 * Lazy-computed array of Identifier instances
	 * Filters out default exports and creates rich Identifier objects
	 */
	identifiers = $derived.by(() => {
		if (!this.src_module.declarations) return [];
		return this.src_module.declarations
			.filter((decl) => decl.name !== 'default') // Skip default exports
			.map((decl) => new Identifier(this, decl));
	});

	/**
	 * GitHub source URL for the module file
	 */
	module_url = $derived.by(() => {
		if (!this.pkg.repo_url) return undefined;
		const clean_path = this.path.replace(/^\.\//, '');
		return `${this.pkg.repo_url}/blob/main/src/lib/${clean_path}`;
	});

	/**
	 * Check if module has any declarations
	 */
	has_declarations(): boolean {
		return !!(this.src_module.declarations && this.src_module.declarations.length > 0);
	}

	/**
	 * Check if module has a module-level comment
	 */
	has_module_comment(): boolean {
		return !!this.src_module.module_comment;
	}

	/**
	 * Look up an identifier by name within this module
	 */
	get_identifier_by_name(name: string): Identifier | undefined {
		return this.identifiers.find((id) => id.name === name);
	}
}
