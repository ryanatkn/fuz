import {Identifier} from '$lib/identifier.svelte.js';
import type {Pkg} from '$lib/pkg.svelte.js';
import type {Module_Json} from '$lib/src_json.js';
import {url_github_file, url_api_module} from '$lib/package_helpers.js';

/**
 * Rich runtime representation of Module_Json with computed properties.
 *
 * Combines:
 *
 * - minimal Module_Json data
 * - full Pkg reference (for generating URLs, import statements, etc.)
 * - lazy-computed Identifier instances
 * - query methods for ergonomic usage
 */
export class Module {
	readonly pkg: Pkg = $state.raw()!;
	readonly module_json: Module_Json = $state.raw()!;

	/**
	 * Canonical module path (no prefix) - matches storage, URLs, display.
	 * Examples: 'Alert.ts', 'helpers/foo.ts'
	 */
	path = $derived(this.module_json.path);

	/**
	 * Import-style path with ./ prefix for import statements.
	 * Examples: './Alert.ts', './helpers/foo.ts'
	 */
	path_import = $derived('./' + this.path);

	/**
	 * Module-level JSDoc comment.
	 */
	module_comment = $derived(this.module_json.module_comment);

	/**
	 * Lazy-computed array of Identifier instances.
	 * Filters out default exports and creates rich Identifier objects.
	 */
	identifiers = $derived(
		this.module_json.identifiers
			? this.module_json.identifiers
					.filter((identifier_json) => identifier_json.name !== 'default') // skip default exports
					.map((identifier_json) => new Identifier(this, identifier_json))
			: [],
	);

	/**
	 * API documentation URL for this module page.
	 * Example: "/docs/api/Alert.ts"
	 */
	url_api = $derived(url_api_module(this.path));

	/**
	 * GitHub source URL for the module file.
	 * Example: "https://github.com/ryanatkn/fuz/blob/main/src/lib/Alert.ts"
	 */
	url_github = $derived(
		this.pkg.repo_url ? url_github_file(this.pkg.repo_url, `src/lib/${this.path}`) : undefined,
	);

	/**
	 * Check if module has any identifiers.
	 */
	has_identifiers: boolean = $derived(
		!!(this.module_json.identifiers && this.module_json.identifiers.length > 0),
	);

	/**
	 * Check if module has a module-level comment.
	 */
	has_module_comment: boolean = $derived(!!this.module_json.module_comment);

	constructor(pkg: Pkg, module_json: Module_Json) {
		this.pkg = pkg;
		this.module_json = module_json;
	}

	/**
	 * Look up an identifier by name within this module.
	 */
	get_identifier_by_name(name: string): Identifier | undefined {
		return this.identifiers.find((id) => id.name === name);
	}
}
