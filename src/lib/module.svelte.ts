import type {ModuleJson} from '@ryanatkn/belt/src_json.js';

import {Identifier} from './identifier.svelte.js';
import type {Pkg} from './pkg.svelte.js';
import {url_github_file, url_api_module} from './package_helpers.js';

/**
 * Rich runtime representation of ModuleJson with computed properties.
 *
 * Combines:
 *
 * - minimal ModuleJson data
 * - full Pkg reference (for generating URLs, import statements, etc.)
 * - lazy-computed Identifier instances
 * - query methods for ergonomic usage
 */
export class Module {
	readonly pkg: Pkg = $state.raw()!;
	readonly module_json: ModuleJson = $state.raw()!;

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

	has_identifiers: boolean = $derived(
		!!(this.module_json.identifiers && this.module_json.identifiers.length > 0),
	);

	has_module_comment: boolean = $derived(!!this.module_json.module_comment);

	/**
	 * Module paths (relative to src/lib) that this module imports.
	 *
	 * @nonempty
	 */
	dependencies = $derived(this.module_json.dependencies);

	/**
	 * Module paths (relative to src/lib) that import this module.
	 *
	 * @nonempty
	 */
	dependents = $derived(this.module_json.dependents);

	constructor(pkg: Pkg, module_json: ModuleJson) {
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
