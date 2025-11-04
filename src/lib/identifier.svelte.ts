/**
 * Rich runtime Identifier class following the "minimal + rich" pattern.
 *
 * Represents an exported identifier from a module (function, type, class, component, etc.)
 * Wraps minimal serializable identifier data with computed properties and query methods.
 * Part of the API documentation hierarchy: Pkg -> Module -> Identifier
 *
 * @see module.svelte.ts for parent Module class
 * @see pkg.svelte.ts for root Pkg class
 * @see src_json.ts for minimal serializable types
 */

import type {Module} from '$lib/module.svelte.js';
import {
	type Identifier_Json,
	generate_import_statement,
	get_identifier_display_name,
} from '$lib/src_json.js';
import {api_doc_url, api_doc_url_full, github_file_url} from '$lib/package_helpers.js';

/**
 * Rich runtime representation of an exported identifier with computed properties.
 *
 * Combines:
 * - Minimal Identifier_Json data (serializable)
 * - Parent Module reference (provides Pkg context)
 * - Lazy-computed URLs, import statements, etc.
 * - Query methods for ergonomic usage
 */
export class Identifier {
	readonly module: Module = $state.raw()!;
	readonly identifier_json: Identifier_Json = $state.raw()!;

	/**
	 * Get parent Pkg for accessing package metadata.
	 */
	pkg = $derived(this.module.pkg);

	/**
	 * Module path where this identifier is defined (e.g., "Alert.ts").
	 */
	module_path = $derived(this.module.path);

	/**
	 * Identifier name (export name).
	 */
	name = $derived(this.identifier_json.name);

	/**
	 * Declaration kind (type, function, class, etc.).
	 */
	kind = $derived(this.identifier_json.kind);

	/**
	 * GitHub source URL with line number.
	 * Example: "https://github.com/ryanatkn/fuz/blob/main/src/lib/Alert.ts#L42"
	 */
	source_url = $derived(
		this.pkg.repo_url && this.identifier_json.source_line
			? github_file_url(
					this.pkg.repo_url,
					`src/lib/${this.module_path}`,
					this.identifier_json.source_line,
				)
			: undefined,
	);

	/**
	 * API documentation URL (hash-based navigation).
	 * Example: "/docs/api#Alert"
	 */
	api_url = $derived(api_doc_url(this.name));

	/**
	 * Generated TypeScript import statement.
	 * Example: "import {Alert} from '@ryanatkn/fuz/Alert.js';"
	 */
	import_statement = $derived(
		generate_import_statement(this.identifier_json, this.module_path, this.pkg.package_json.name),
	);

	/**
	 * Public documentation link (if homepage_url is available).
	 * Example: "https://fuz.ryanatkn.com/docs/api#Alert"
	 */
	docs_link = $derived(
		this.pkg.homepage_url ? api_doc_url_full(this.pkg.homepage_url, this.name) : undefined,
	);

	/**
	 * Display name with generic parameters.
	 * Example: "Map<K extends string, V = unknown>"
	 */
	display_name = $derived(get_identifier_display_name(this.identifier_json));

	constructor(module: Module, identifier_json: Identifier_Json) {
		this.module = module;
		this.identifier_json = identifier_json;
	}

	// TODO BLOCK maybe refactor these to $derived?

	/**
	 * Check if identifier has code examples.
	 */
	has_examples(): boolean {
		return !!(this.identifier_json.examples && this.identifier_json.examples.length > 0);
	}

	/**
	 * Check if identifier is deprecated.
	 */
	is_deprecated(): boolean {
		return !!this.identifier_json.deprecated_message;
	}

	/**
	 * Check if identifier has documentation.
	 */
	has_documentation(): boolean {
		return !!this.identifier_json.doc_comment;
	}

	/**
	 * Check if identifier is a function.
	 */
	is_function(): boolean {
		return this.identifier_json.kind === 'function';
	}

	/**
	 * Check if identifier is a type.
	 */
	is_type(): boolean {
		return this.identifier_json.kind === 'type';
	}

	/**
	 * Check if identifier is a Svelte component.
	 */
	is_component(): boolean {
		return this.identifier_json.kind === 'component';
	}

	/**
	 * Check if identifier is a class.
	 */
	is_class(): boolean {
		return this.identifier_json.kind === 'class';
	}

	/**
	 * Check if function/method has parameters.
	 */
	has_parameters(): boolean {
		return !!(this.identifier_json.parameters && this.identifier_json.parameters.length > 0);
	}

	/**
	 * Check if component has props.
	 */
	has_props(): boolean {
		return !!(this.identifier_json.props && this.identifier_json.props.length > 0);
	}

	/**
	 * Check if function has a return type.
	 */
	has_return_type(): boolean {
		return !!this.identifier_json.return_type;
	}

	/**
	 * Check if type/function has generic parameters.
	 */
	has_generics(): boolean {
		return !!(
			this.identifier_json.generic_params && this.identifier_json.generic_params.length > 0
		);
	}
}
