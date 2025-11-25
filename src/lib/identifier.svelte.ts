import {
	type IdentifierJson,
	identifier_generate_import,
	identifier_get_display_name,
} from '@ryanatkn/belt/src_json.js';

import type {Module} from './module.svelte.js';
import {url_api_identifier, url_api_identifier_full, url_github_file} from './package_helpers.js';

/**
 * Rich runtime representation of an exported identifier with computed properties.
 *
 * Combines:
 *
 * - minimal IdentifierJson data
 * - parent Module reference (provides Pkg context)
 * - lazy-computed URLs, import statements, etc.
 * - query methods for ergonomic usage
 */
export class Identifier {
	readonly module: Module = $state.raw()!;
	readonly identifier_json: IdentifierJson = $state.raw()!;

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
	url_github = $derived(
		this.pkg.repo_url && this.identifier_json.source_line
			? url_github_file(
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
	url_api = $derived(url_api_identifier(this.name));

	/**
	 * Generated TypeScript import statement.
	 * Example: "import {Alert} from '@ryanatkn/fuz/Alert.js';"
	 */
	import_statement = $derived(
		identifier_generate_import(this.identifier_json, this.module_path, this.pkg.package_json.name),
	);

	/**
	 * Public documentation link (if homepage_url is available).
	 * Example: "https://fuz.ryanatkn.com/docs/api#Alert"
	 */
	url_api_full = $derived(
		this.pkg.homepage_url ? url_api_identifier_full(this.pkg.homepage_url, this.name) : undefined,
	);

	/**
	 * Display name with generic parameters.
	 * Example: "Map<K extends string, V = unknown>"
	 */
	display_name = $derived(identifier_get_display_name(this.identifier_json));

	// Direct accessors for identifier_json properties
	// These provide convenient access without repeatedly typing `.identifier_json`

	type_signature = $derived(this.identifier_json.type_signature);
	doc_comment = $derived(this.identifier_json.doc_comment);
	/**
	 * Deprecation message if identifier is deprecated.
	 */
	deprecated_message = $derived(this.identifier_json.deprecated_message);
	parameters = $derived(this.identifier_json.parameters);
	props = $derived(this.identifier_json.props);
	return_type = $derived(this.identifier_json.return_type);
	/**
	 * Return type description from JSDoc @returns.
	 */
	return_description = $derived(this.identifier_json.return_description);
	generic_params = $derived(this.identifier_json.generic_params);
	extends = $derived(this.identifier_json.extends);
	implements = $derived(this.identifier_json.implements);
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
	members: Array<IdentifierJson> | undefined = $derived(
		this.identifier_json.members as Array<IdentifierJson> | undefined,
	);
	properties: Array<IdentifierJson> | undefined = $derived(
		this.identifier_json.properties as Array<IdentifierJson> | undefined,
	);

	has_examples = $derived(!!(this.examples && this.examples.length > 0));
	is_deprecated = $derived(!!this.deprecated_message);
	has_documentation = $derived(!!this.doc_comment);
	has_parameters = $derived(!!(this.parameters && this.parameters.length > 0));
	has_props = $derived(!!(this.props && this.props.length > 0));
	has_generics = $derived(!!(this.generic_params && this.generic_params.length > 0));

	constructor(module: Module, identifier_json: IdentifierJson) {
		this.module = module;
		this.identifier_json = identifier_json;
	}
}
