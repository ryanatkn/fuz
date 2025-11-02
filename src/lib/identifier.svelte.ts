/**
 * Rich runtime Identifier class following the "minimal + rich" pattern.
 *
 * Represents an exported identifier from a module (function, type, class, component, etc.)
 * Wraps minimal serializable declaration data with computed properties and query methods.
 * Pattern inspired by Pkg class in pkg.ts.
 *
 * @see src_json.ts for minimal serializable types
 * @see module.svelte.ts for parent Module class
 */

import type {Module} from '$lib/module.svelte.js';
import type {Src_Module_Declaration} from '$lib/src_json.js';
import {
	generate_import_statement,
	get_declaration_display_name,
	get_type_summary,
} from '$lib/src_json.js';

/**
 * Rich runtime representation of an exported identifier with computed properties.
 *
 * Combines:
 * - Minimal Src_Module_Declaration data (serializable)
 * - Parent Module reference (provides Pkg context)
 * - Lazy-computed URLs, import statements, etc.
 * - Query methods for ergonomic usage
 */
export class Identifier {
	readonly module: Module; // Parent reference
	readonly decl: Src_Module_Declaration = $state.raw()!; // Shallow reactivity - data is immutable

	constructor(module: Module, decl: Src_Module_Declaration) {
		this.module = module;
		this.decl = decl;
	}

	// ============================================================================
	// Convenience accessors
	// ============================================================================

	/**
	 * Get parent Pkg for accessing package metadata
	 */
	get pkg() {
		return this.module.pkg;
	}

	/**
	 * Module path where this identifier is defined (e.g., "./Alert.ts")
	 */
	get module_path(): string {
		return this.module.path;
	}

	/**
	 * Identifier name (export name)
	 */
	get name(): string {
		return this.decl.name;
	}

	/**
	 * Declaration kind (type, function, class, etc.)
	 */
	get kind() {
		return this.decl.kind;
	}

	// ============================================================================
	// Lazy-computed properties (cached automatically by Svelte)
	// ============================================================================

	/**
	 * GitHub source URL with line number
	 * Example: "https://github.com/ryanatkn/fuz/blob/main/src/lib/Alert.ts#L42"
	 */
	source_url = $derived.by(() => {
		if (!this.pkg.repo_url || !this.decl.source_line) return undefined;
		const clean_path = this.module_path.replace(/^\.\//, '');
		return `${this.pkg.repo_url}/blob/main/src/lib/${clean_path}#L${this.decl.source_line}`;
	});

	/**
	 * API documentation URL (hash-based navigation)
	 * Example: "/docs/api#Alert"
	 */
	api_url = $derived.by(() => {
		return `/docs/api#${encodeURIComponent(this.name)}`;
	});

	/**
	 * Generated TypeScript import statement
	 * Example: "import {Alert} from '@ryanatkn/fuz/Alert.js';"
	 */
	import_statement = $derived.by(() => {
		return generate_import_statement(this.decl, this.module_path, this.pkg.package_json.name);
	});

	/**
	 * Public documentation link (if homepage_url is available)
	 * Example: "https://fuz.ryanatkn.com/docs/api#Alert"
	 */
	docs_link = $derived.by(() => {
		if (!this.pkg.homepage_url) return undefined;
		return `${this.pkg.homepage_url}/docs/api#${encodeURIComponent(this.name)}`;
	});

	/**
	 * Display name with generic parameters
	 * Example: "Map<K extends string, V = unknown>"
	 */
	display_name = $derived.by(() => {
		return get_declaration_display_name(this.decl);
	});

	/**
	 * Truncated type signature for tooltips
	 * Example: "type Alert = { status: 'info' | 'success'..."
	 */
	type_summary = $derived.by(() => {
		return get_type_summary(this.decl);
	});

	// ============================================================================
	// Query methods
	// ============================================================================

	/**
	 * Check if identifier has code examples
	 */
	has_examples(): boolean {
		return !!(this.decl.examples && this.decl.examples.length > 0);
	}

	/**
	 * Check if identifier is deprecated
	 */
	is_deprecated(): boolean {
		return !!this.decl.deprecated_message;
	}

	/**
	 * Check if identifier has documentation (doc comment or summary)
	 */
	has_documentation(): boolean {
		return !!(this.decl.doc_comment || this.decl.summary);
	}

	/**
	 * Check if identifier is a function
	 */
	is_function(): boolean {
		return this.decl.kind === 'function';
	}

	/**
	 * Check if identifier is a type
	 */
	is_type(): boolean {
		return this.decl.kind === 'type';
	}

	/**
	 * Check if identifier is a Svelte component
	 */
	is_component(): boolean {
		return this.decl.kind === 'component';
	}

	/**
	 * Check if identifier is a class
	 */
	is_class(): boolean {
		return this.decl.kind === 'class';
	}

	/**
	 * Check if function/method has parameters
	 */
	has_parameters(): boolean {
		return !!(this.decl.parameters && this.decl.parameters.length > 0);
	}

	/**
	 * Check if component has props
	 */
	has_props(): boolean {
		return !!(this.decl.props && this.decl.props.length > 0);
	}

	/**
	 * Check if component has any bindable props (Svelte 5 $bindable rune)
	 */
	has_bindable_props(): boolean {
		return !!(this.decl.props && this.decl.props.some((prop) => prop.bindable));
	}

	/**
	 * Check if function has a return type
	 */
	has_return_type(): boolean {
		return !!this.decl.return_type;
	}

	/**
	 * Check if type/function has generic parameters
	 */
	has_generics(): boolean {
		return !!(this.decl.generic_params && this.decl.generic_params.length > 0);
	}
}
