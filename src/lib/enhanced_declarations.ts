import type {Src_Module_Declaration} from '@ryanatkn/belt/src_json.js';

/**
 * Enhanced parameter information for functions and methods
 */
export interface Parameter_Info {
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
 * Extended declaration type with rich TypeScript metadata
 *
 * This extends the base `Src_Module_Declaration` with detailed information
 * extracted from TypeScript source code including JSDoc comments,
 * type signatures, and structural information.
 */
export interface Enhanced_Declaration extends Src_Module_Declaration {
	[x: string]: unknown;
	/**
	 * Full JSDoc/TSDoc comment text (cleaned, without comment markers)
	 */
	doc_comment?: string;

	/**
	 * Concise summary (first line/paragraph of doc comment)
	 */
	summary?: string;

	/**
	 * Full TypeScript type signature as a string
	 * e.g. "(x: number, y: string) => boolean"
	 */
	type_signature?: string;

	/**
	 * Source location within the file
	 */
	source_location?: Source_Location;

	/**
	 * Parameter information (for functions/methods)
	 */
	parameters?: Parameter_Info[];

	/**
	 * Return type (for functions/methods)
	 */
	return_type?: string;

	/**
	 * Generic type parameters
	 * e.g. ["T", "K extends keyof T"]
	 */
	generic_params?: string[];

	/**
	 * Code examples from @example tags
	 */
	examples?: string[];

	/**
	 * Deprecation message from @deprecated tag
	 */
	deprecated?: string;

	/**
	 * Related items from @see tags
	 */
	see_also?: string[];

	/**
	 * Whether this is exported
	 */
	exported?: boolean;

	/**
	 * For types: the underlying type definition
	 * For interfaces: extends clause
	 */
	extends?: string[];

	/**
	 * For classes: implements clause
	 */
	implements?: string[];

	/**
	 * Class members (for classes)
	 */
	members?: Enhanced_Declaration[];

	/**
	 * Interface/type properties (for types/interfaces)
	 */
	properties?: Enhanced_Declaration[];
}

/**
 * Enhanced module information with rich metadata
 */
export interface Enhanced_Module {
	[x: string]: unknown;
	path: string;
	declarations?: Enhanced_Declaration[];
	/**
	 * Module-level JSDoc comment
	 */
	module_comment?: string;
	/**
	 * Direct imports from other modules
	 */
	imports?: string[];
	/**
	 * Modules that import this module
	 */
	imported_by?: string[];
}

/**
 * Enhanced src.json structure
 */
export interface Enhanced_Src_Json {
	name: string;
	version: string;
	modules?: Record<string, Enhanced_Module>;
}

/**
 * Helper to check if a declaration is enhanced
 */
export const is_enhanced_declaration = (
	decl: Src_Module_Declaration | Enhanced_Declaration,
): decl is Enhanced_Declaration => {
	return 'doc_comment' in decl || 'type_signature' in decl || 'source_location' in decl;
};

/**
 * Helper to get a declaration's display name
 */
export const get_declaration_display_name = (decl: Enhanced_Declaration): string => {
	if (decl.generic_params?.length) {
		return `${decl.name}<${decl.generic_params.join(', ')}>`;
	}
	return decl.name;
};

/**
 * Helper to get a short type summary for tooltips
 */
export const get_type_summary = (decl: Enhanced_Declaration): string | undefined => {
	if (decl.type_signature) {
		// Truncate long types for tooltips
		const max_length = 100;
		if (decl.type_signature.length > max_length) {
			return decl.type_signature.slice(0, max_length) + '...';
		}
		return decl.type_signature;
	}
	return undefined;
};

/**
 * Helper to extract the first paragraph from doc comment
 */
export const get_doc_summary = (doc_comment: string | undefined): string | undefined => {
	if (!doc_comment) return undefined;
	const first_para = doc_comment.split('\n\n')[0];
	return first_para?.trim();
};

/**
 * Generate import statement for a declaration
 */
export const generate_import_statement = (
	decl: Enhanced_Declaration,
	module_path: string,
	pkg_name: string,
): string => {
	// Convert module path to import specifier
	// e.g., "./alert.js" -> "@ryanatkn/fuz/alert.js"
	const specifier = module_path.replace('./', `${pkg_name}/`);

	// Handle default exports
	if (decl.name === 'default') {
		// Get module name without extension
		const module_name = module_path.replace('./', '').replace(/\.(js|ts|svelte)$/, '');
		const pascal_case = module_name
			.split(/[-_]/)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');
		return `import ${pascal_case} from '${specifier}';`;
	}

	// Handle types vs values
	const is_type = decl.kind === 'type';
	const prefix = is_type ? 'import type ' : 'import ';
	return `${prefix}{${decl.name}} from '${specifier}';`;
};
