/**
 * Top-level source metadata.
 *
 * @see https://github.com/ryanatkn/gro/blob/main/src/docs/gro_plugin_sveltekit_app.md#well-known-src
 */
export interface Src_Json {
	name: string;
	version: string;
	modules?: Array<Module_Json>;
}

/**
 * Module information with metadata.
 */
export interface Module_Json {
	/** Module path relative to `src/lib`. */
	path: string;
	identifiers?: Array<Identifier_Json>;
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
 * Identifier metadata with rich TypeScript/JSDoc information.
 */
export interface Identifier_Json {
	/** Identifier name. */
	name: string;
	/** Identifier kind. */
	kind: Identifier_Kind | null;

	doc_comment?: string;
	type_signature?: string;
	/** TypeScript modifiers like `readonly`, `private`, or `static`. */
	modifiers?: Array<string>;
	source_line?: number;
	parameters?: Array<Parameter_Info>;
	return_type?: string;
	/** Function return value description from `@returns` or `@return` tag. */
	return_description?: string;
	generic_params?: Array<Generic_Param_Info>;
	/** Code examples from `@example` tags. */
	examples?: Array<string>;
	/** Deprecation warning from `@deprecated` tag. */
	deprecated_message?: string;
	/** Related items from `@see` tags. */
	see_also?: Array<string>;
	/** Exceptions/errors thrown from `@throws` tags. */
	throws?: Array<{type?: string; description: string}>;
	/** Version information from `@since` tag. */
	since?: string;
	extends?: Array<string>;
	implements?: Array<string>;
	members?: Array<Identifier_Json>;
	properties?: Array<Identifier_Json>;
	props?: Array<Component_Prop_Info>;
}

/**
 * Generic type parameter information.
 */
export interface Generic_Param_Info {
	/** Parameter name like `T`. */
	name: string;
	/** Constraint like `string` from `T extends string`. */
	constraint?: string;
	/** Default type like `unknown` from `T = unknown`. */
	default_type?: string;
}

/**
 * Parameter information for functions and methods.
 *
 * Kept distinct from Component_Prop_Info despite structural similarity.
 * Function parameters form a tuple with positional semantics:
 * calling order matters (`fn(a, b)` vs `fn(b, a)`),
 * may include rest parameters and destructuring patterns.
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
 * Kept distinct from Parameter_Info despite structural similarity.
 * Component props are named attributes with different semantics:
 * no positional order when passing (`<Foo {a} {b} />` = `<Foo {b} {a} />`),
 * support two-way binding via `$bindable` rune.
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
 * Gets an identifier's display name with generic parameters.
 */
export const get_identifier_display_name = (identifier: Identifier_Json): string => {
	if (identifier.generic_params?.length) {
		const params_str = identifier.generic_params
			.map((p) => {
				let result = p.name;
				if (p.constraint) result += ` extends ${p.constraint}`;
				if (p.default_type) result += ` = ${p.default_type}`;
				return result;
			})
			.join(', ');
		return `${identifier.name}<${params_str}>`;
	}
	return identifier.name;
};

/**
 * Generates an import statement for an identifier.
 */
export const generate_import_statement = (
	identifier: Identifier_Json,
	module_path: string,
	pkg_name: string,
): string => {
	const specifier = module_path.replace('./', `${pkg_name}/`);

	if (identifier.name === 'default') {
		const module_name = module_path.replace('./', '').replace(/\.(js|ts|svelte)$/, '');
		const pascal_case = module_name
			.split(/[-_]/)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');
		return `import ${pascal_case} from '${specifier}';`;
	}

	const prefix = identifier.kind === 'type' ? 'import type ' : 'import ';
	return `${prefix}{${identifier.name}} from '${specifier}';`;
};
