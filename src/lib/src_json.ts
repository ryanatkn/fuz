/**
 * Top-level source metadata.
 * @see https://github.com/ryanatkn/gro/blob/main/src/docs/gro_plugin_sveltekit_app.md#well-known-src
 */
export interface Src_Json {
	/** Package name (same as package.json) */
	name: string;
	/** Package version (same as package.json) */
	version: string;
	/** Source modules (changed from Record to Array to eliminate path duplication) */
	modules?: Array<Module_Json>;
}

/**
 * Module information with metadata.
 */
export interface Module_Json {
	/** Module path relative to src/lib */
	path: string;
	/** Exported declarations */
	declarations?: Array<Identifier_Json>;
	/** Module-level JSDoc comment */
	module_comment?: string;
}

export type Identifier_Kind =
	| 'type'
	| 'function'
	| 'variable'
	| 'class'
	| 'component'
	| 'json'
	| 'css';

/**
 * Declaration metadata with rich TypeScript/JSDoc information.
 */
export interface Identifier_Json {
	/** Export identifier */
	name: string;
	/** Declaration kind */
	kind: Identifier_Kind | null;

	// Documentation fields
	/** Full JSDoc/TSDoc comment text */
	doc_comment?: string;
	/** Full TypeScript type signature */
	type_signature?: string;
	/** TypeScript modifiers (e.g., readonly, private, static) */
	modifiers?: Array<string>;
	/** Source line number within the file */
	source_line?: number;
	/** Function/method parameters */
	parameters?: Array<Parameter_Info>;
	/** Function return type */
	return_type?: string;
	/** Function return value description from @returns/@return */
	return_description?: string;
	/** Generic type parameters with constraints */
	generic_params?: Array<Generic_Param_Info>;
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
	/** For types/interfaces: extends clause */
	extends?: Array<string>;
	/** For classes: implements clause */
	implements?: Array<string>;
	/** Class members */
	members?: Array<Identifier_Json>;
	/** Interface/type properties */
	properties?: Array<Identifier_Json>;
	/** Component props (for Svelte components) */
	props?: Array<Component_Prop_Info>;
}

/**
 * Parameter information for functions and methods.
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
 * Component prop information for Svelte components.
 *
 * Note: Kept distinct from Parameter_Info despite structural similarity.
 * Component props are passed as named attributes with different semantics:
 *
 * - no positional order when passing: `<Foo {a} {b} />` = `<Foo {b} {a} />`
 * - support two-way binding via $bindable rune
 * - different runtime behavior and constraints
 */
export interface Component_Prop_Info {
	name: string;
	type: string;
	optional: boolean;
	description?: string;
	default_value?: string;
	bindable?: boolean;
}

/**
 * Generic type parameter information.
 */
export interface Generic_Param_Info {
	/** Parameter name (e.g., "T") */
	name: string;
	/** Constraint if any (e.g., "string" from "T extends string") */
	constraint?: string;
	/** Default type if any (e.g., "unknown" from "T = unknown") */
	default_type?: string;
}
/**
 * Helper to get a declaration's display name.
 */
export const get_declaration_display_name = (decl: Identifier_Json): string => {
	if (decl.generic_params?.length) {
		const params_str = decl.generic_params
			.map((p) => {
				let result = p.name;
				if (p.constraint) result += ` extends ${p.constraint}`;
				if (p.default_type) result += ` = ${p.default_type}`;
				return result;
			})
			.join(', ');
		return `${decl.name}<${params_str}>`;
	}
	return decl.name;
};

/**
 * Generate import statement for a declaration.
 */
export const generate_import_statement = (
	decl: Identifier_Json,
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
