/**
 * Source code metadata types
 *
 * Originally inlined from @ryanatkn/belt, extended with rich documentation features:
 * - Function parameter descriptions and default values
 * - Return value documentation
 * - JSDoc tag extraction (@ example, @ deprecated, @ see, @ since)
 * - Component prop metadata for Svelte
 * - Source location tracking
 * - Generic type parameters
 *
 * @see tsdoc_helpers.ts for JSDoc/TSDoc parsing
 * @see ts_helpers.ts for TypeScript AST extraction
 * @see svelte_helpers.ts for Svelte component analysis
 */

export type Src_Module_Declaration_Kind =
	| 'type'
	| 'function'
	| 'variable'
	| 'class'
	| 'component'
	| 'json'
	| 'css';

/**
 * Parameter information for functions and methods
 *
 * Note: Kept distinct from Component_Prop_Info despite structural similarity.
 * Function parameters form a tuple - the collection has positional semantics:
 * - Calling order matters: `fn(a, b)` vs `fn(b, a)`
 * - May include rest parameters, destructuring patterns
 * - Individual parameters are named, but position-dependent
 */
export interface Parameter_Info {
	name: string;
	type: string;
	optional: boolean;
	description?: string;
	default_value?: string;
}

/**
 * Component prop information for Svelte components
 *
 * Note: Kept distinct from Parameter_Info despite structural similarity.
 * Component props are passed as named attributes with different semantics:
 * - No positional order when passing: `<Foo {a} {b} />` = `<Foo {b} {a} />`
 * - Support two-way binding via $bindable rune
 * - Different runtime behavior and constraints
 */
export interface Component_Prop_Info {
	name: string;
	type: string;
	optional: boolean;
	description?: string;
	default_value?: string;
}

/**
 * Source location information within a file
 */
export interface Source_Location {
	line: number;
	column: number;
	end_line?: number;
	end_column?: number;
}

/**
 * Declaration metadata with rich TypeScript/JSDoc information
 */
export interface Src_Module_Declaration {
	/** Export identifier */
	name: string;
	/** Declaration kind */
	kind: Src_Module_Declaration_Kind | null;

	// Documentation fields
	/** Full JSDoc/TSDoc comment text */
	doc_comment?: string;
	/** Concise summary (first paragraph) */
	summary?: string;
	/** Full TypeScript type signature */
	type_signature?: string;
	/** Source location within the file */
	source_location?: Source_Location;
	/** Function/method parameters */
	parameters?: Array<Parameter_Info>;
	/** Function return type */
	return_type?: string;
	/** Function return value description from @returns/@return */
	return_description?: string;
	/** Generic type parameters */
	generic_params?: Array<string>;
	/** Code examples from @ example tags */
	examples?: Array<string>;
	/** Deprecation warning from @ deprecated tag */
	deprecated_message?: string;
	/** Related items from @ see tags */
	see_also?: Array<string>;
	/** Exceptions/errors thrown from @ throws tags */
	throws?: Array<{type?: string; description: string}>;
	/** Version information from @ since tag */
	since?: string;
	/** Whether this is exported */
	exported?: boolean;
	/** For types/interfaces: extends clause */
	extends?: Array<string>;
	/** For classes: implements clause */
	implements?: Array<string>;
	/** Class members */
	members?: Array<Src_Module_Declaration>;
	/** Interface/type properties */
	properties?: Array<Src_Module_Declaration>;
	/** Component props (for Svelte components) */
	props?: Array<Component_Prop_Info>;
}

/**
 * Module information with metadata
 */
export interface Src_Module {
	/** Module path relative to src/lib */
	path: string;
	/** Exported declarations */
	declarations?: Array<Src_Module_Declaration>;
	/** Module-level JSDoc comment */
	module_comment?: string;
	/** Direct imports from other modules */
	imports?: Array<string>;
	/** Modules that import this module */
	imported_by?: Array<string>;
}

/**
 * Collection of modules indexed by path
 */
export type Src_Modules = Record<string, Src_Module>;

/**
 * Top-level source metadata
 * @see https://github.com/ryanatkn/gro/blob/main/src/docs/gro_plugin_sveltekit_app.md#well-known-src
 */
export interface Src_Json {
	/** Package name (same as package.json) */
	name: string;
	/** Package version (same as package.json) */
	version: string;
	/** Source modules */
	modules?: Src_Modules;
}

/**
 * Helper to get a declaration's display name
 */
export const get_declaration_display_name = (decl: Src_Module_Declaration): string => {
	if (decl.generic_params?.length) {
		return `${decl.name}<${decl.generic_params.join(', ')}>`;
	}
	return decl.name;
};

/**
 * Helper to get a short type summary for tooltips
 */
export const get_type_summary = (decl: Src_Module_Declaration): string | undefined => {
	if (decl.type_signature) {
		const max_length = 100;
		if (decl.type_signature.length > max_length) {
			return decl.type_signature.slice(0, max_length) + '...';
		}
		return decl.type_signature;
	}
	return undefined;
};

/**
 * Generate import statement for a declaration
 */
export const generate_import_statement = (
	decl: Src_Module_Declaration,
	module_path: string,
	pkg_name: string,
): string => {
	const specifier = module_path.replace('./', `${pkg_name}/`);

	if (decl.name === 'default') {
		const module_name = module_path.replace('./', '').replace(/\.(js|ts|svelte)$/, '');
		const pascal_case = module_name
			.split(/[-_]/)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');
		return `import ${pascal_case} from '${specifier}';`;
	}

	const is_type = decl.kind === 'type';
	const prefix = is_type ? 'import type ' : 'import ';
	return `${prefix}{${decl.name}} from '${specifier}';`;
};
