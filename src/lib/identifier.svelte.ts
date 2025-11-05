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
 *
 * - minimal Identifier_Json data
 * - parent Module reference (provides Pkg context)
 * - lazy-computed URLs, import statements, etc.
 * - query methods for ergonomic usage
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

	// Direct accessors for identifier_json properties
	// These provide convenient access without repeatedly typing `.identifier_json`

	/**
	 * TypeScript type signature.
	 */
	type_signature = $derived(this.identifier_json.type_signature);

	/**
	 * Main documentation comment.
	 */
	doc_comment = $derived(this.identifier_json.doc_comment);

	/**
	 * Deprecation message if identifier is deprecated.
	 */
	deprecated_message = $derived(this.identifier_json.deprecated_message);

	/**
	 * Function/method parameters.
	 */
	parameters = $derived(this.identifier_json.parameters);

	/**
	 * Svelte component props.
	 */
	props = $derived(this.identifier_json.props);

	/**
	 * Return type for functions/methods.
	 */
	return_type = $derived(this.identifier_json.return_type);

	/**
	 * Return type description from JSDoc @returns.
	 */
	return_description = $derived(this.identifier_json.return_description);

	/**
	 * Generic type parameters.
	 */
	generic_params = $derived(this.identifier_json.generic_params);

	/**
	 * Base classes/types this extends.
	 */
	extends = $derived(this.identifier_json.extends);

	/**
	 * Interfaces this implements.
	 */
	implements = $derived(this.identifier_json.implements);

	/**
	 * Exception types this may throw.
	 */
	throws = $derived(this.identifier_json.throws);

	/**
	 * Version when this was introduced (from @since).
	 */
	since = $derived(this.identifier_json.since);

	/**
	 * Code examples from JSDoc @example.
	 */
	examples = $derived(this.identifier_json.examples);

	/**
	 * See-also references from JSDoc @see.
	 */
	see_also = $derived(this.identifier_json.see_also);

	/**
	 * Class members (for classes).
	 */
	members = $derived(this.identifier_json.members);

	/**
	 * Type/interface properties.
	 */
	properties = $derived(this.identifier_json.properties);

	/**
	 * Check if identifier has code examples.
	 */
	has_examples = $derived(!!(this.examples && this.examples.length > 0));

	/**
	 * Check if identifier is deprecated.
	 */
	is_deprecated = $derived(!!this.deprecated_message);

	/**
	 * Check if identifier has documentation.
	 */
	has_documentation = $derived(!!this.doc_comment);

	/**
	 * Check if function/method has parameters.
	 */
	has_parameters = $derived(!!(this.parameters && this.parameters.length > 0));

	/**
	 * Check if component has props.
	 */
	has_props = $derived(!!(this.props && this.props.length > 0));

	/**
	 * Check if type/function has generic parameters.
	 */
	has_generics = $derived(!!(this.generic_params && this.generic_params.length > 0));

	constructor(module: Module, identifier_json: Identifier_Json) {
		this.module = module;
		this.identifier_json = identifier_json;
	}
}
