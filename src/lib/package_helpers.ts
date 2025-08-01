import {z} from 'zod';
import type {Flavored} from '@ryanatkn/belt/types.js';
import {count_graphemes, ensure_end, strip_end, strip_start} from '@ryanatkn/belt/string.js';

import {create_context} from '$lib/context_helpers.js';

export const pkg_context = create_context<Package_Meta>(); // TODO BLOCK name conflict

// TODO @many belongs elsewhere
export const Url = z.string();
export type Url = Flavored<z.infer<typeof Url>, 'Url'>;

// TODO @many belongs elsewhere
export const Email = z.string();
export type Email = Flavored<z.infer<typeof Email>, 'Email'>;

// TODO move this where?
export const transform_empty_object_to_undefined = <T>(val: T): T | undefined => {
	if (val && Object.keys(val).length === 0) {
		return;
	}
	return val;
};

export const Package_Json_Repository = z.union([
	z.string(),
	z
		.object({
			type: z.string(),
			url: Url,
			directory: z.string().optional(),
		})
		.passthrough(),
]);
export type Package_Json_Repository = z.infer<typeof Package_Json_Repository>;

export const Package_Json_Author = z.union([
	z.string(),
	z
		.object({
			name: z.string(),
			email: Email.optional(),
			url: Url.optional(),
		})
		.passthrough(),
]);
export type Package_Json_Author = z.infer<typeof Package_Json_Author>;

export const Package_Json_Funding = z.union([
	z.string(),
	z
		.object({
			type: z.string(),
			url: Url,
		})
		.passthrough(),
]);
export type Package_Json_Funding = z.infer<typeof Package_Json_Funding>;

// Helper to create a recursive type that represents export conditions and values
const create_export_value_schema = (): z.ZodType => {
	return z.lazy(() => z.union([z.string(), z.null(), z.record(z.lazy(() => export_value_schema))]));
};

// The base export value schema that can be a string, null, or nested conditions
const export_value_schema = create_export_value_schema();
export const Export_Value = export_value_schema;
export type Export_Value = z.infer<typeof Export_Value>;

// Package exports can be:
// 1. A string (shorthand for main export)
// 2. null (to block exports)
// 3. A record of export conditions/paths
export const Package_Json_Exports = z.union([z.string(), z.null(), z.record(export_value_schema)]);
export type Package_Json_Exports = z.infer<typeof Package_Json_Exports>;

/**
 * @see https://docs.npmjs.com/cli/v10/configuring-npm/package-json
 */
export const Package_Json = z
	.object({
		// according to the npm docs, `name` and `version` are the only required properties
		name: z.string(),
		version: z.string(),
		private: z.boolean({description: 'disallow publishing to the configured registry'}).optional(),
		public: z
			.boolean({
				description:
					'a Gro extension that enables publishing `.well-known/package.json` and `.well-known/src`',
			})
			.optional(),
		description: z.string().optional(),
		motto: z
			.string({description: "a Gro extension that's a short phrase that represents this project"})
			.optional(),
		glyph: z
			.string({
				description:
					"a Gro extension that's a single unicode character that represents this project",
			})
			.refine((v) => count_graphemes(v) === 1, 'must be a single unicode character')
			.optional(),
		logo: z
			.string({
				description:
					"a Gro extension that's a link relative to the `homepage` to an image that represents this project",
			})
			.optional(),
		logo_alt: z
			.string({description: "a Gro extension that's the alt text for the `logo`"})
			.optional(),
		license: z.string().optional(),
		scripts: z.record(z.string()).optional(),
		homepage: Url.optional(),
		author: z.union([z.string(), Package_Json_Author.optional()]),
		repository: z.union([z.string(), Url, Package_Json_Repository]).optional(),
		contributors: z.array(z.union([z.string(), Package_Json_Author])).optional(),
		bugs: z
			.union([z.string(), z.object({url: Url.optional(), email: Email.optional()}).passthrough()])
			.optional(),
		funding: z
			.union([Url, Package_Json_Funding, z.array(z.union([Url, Package_Json_Funding]))])
			.optional(),
		keywords: z.array(z.string()).optional(),

		type: z.string().optional(),
		engines: z.record(z.string()).optional(),
		os: z.array(z.string()).optional(),
		cpu: z.array(z.string()).optional(),

		dependencies: z.record(z.string()).optional(),
		devDependencies: z.record(z.string()).optional(),
		peerDependencies: z.record(z.string()).optional(),
		peerDependenciesMeta: z.record(z.object({optional: z.boolean()})).optional(),
		optionalDependencies: z.record(z.string()).optional(),

		bin: z.record(z.string()).optional(),
		sideEffects: z.array(z.string()).optional(),
		files: z.array(z.string()).optional(),
		main: z.string().optional(),
		exports: Package_Json_Exports.transform(transform_empty_object_to_undefined).optional(),
	})
	.passthrough();
export type Package_Json = z.infer<typeof Package_Json>;

export const Src_Module_Declaration_Kind = z.enum([
	'type',
	'function',
	'variable',
	'class',
	'component',
	'json',
	'css',
]);
export type Src_Module_Declaration_Kind = z.infer<typeof Src_Module_Declaration_Kind>;

// TODO @many rename to prefix with `Src_Json_`?
export const Src_Module_Declaration = z
	.object({
		name: z.string(), // the export identifier
		// TODO these are poorly named, and they're somewhat redundant with `kind`,
		// they were added to distinguish `VariableDeclaration` functions and non-functions
		kind: Src_Module_Declaration_Kind.nullable(),
		// code: z.string(), // TODO experiment with `getType().getText()`, some of them return the same as `name`
	})
	.passthrough();
export type Src_Module_Declaration = z.infer<typeof Src_Module_Declaration>;

// TODO @many rename to prefix with `Src_Json_`?
export const Src_Module = z
	.object({
		path: z.string(),
		declarations: z.array(Src_Module_Declaration).optional(),
	})
	.passthrough();
export type Src_Module = z.infer<typeof Src_Module>;

// TODO @many rename to prefix with `Src_Json_`?
export const Src_Modules = z.record(Src_Module);
export type Src_Modules = z.infer<typeof Src_Modules>;

/**
 * @see https://github.com/ryanatkn/gro/blob/main/src/docs/gro_plugin_sveltekit_app.md#well-known-src
 */
export const Src_Json = z
	.object({
		name: z.string(), // same as Package_Json
		version: z.string(), // same as Package_Json
		modules: Src_Modules.transform(transform_empty_object_to_undefined).optional(),
	})
	.passthrough();
export type Src_Json = z.infer<typeof Src_Json>;

// TODO needs refactoring, more clarity
export interface Package_Meta {
	repo_url: Url; // 'https://github.com/ryanatkn/fuz'
	package_json: Package_Json;
	src_json: Src_Json;
	name: string; // '@ryanatkn/fuz_library'
	repo_name: string; // fuz_library
	/**
	 * The github user/org.
	 */
	owner_name: string | null; // 'fuz-dev'
	homepage_url: Url | null; // 'https://www.fuz.dev/'
	logo_url: Url | null; // 'https://www.fuz.dev/logo.svg' falling back to 'https://www.fuz.dev/favicon.png'
	logo_alt: string; // 'icon for gro'
	npm_url: Url | null; // 'https://npmjs.com/package/@ryanatkn/fuz_library'
	changelog_url: Url | null;
	published: boolean;
}

export const parse_package_meta = (
	package_json: Package_Json,
	src_json: Src_Json,
): Package_Meta => {
	const {name} = package_json;

	// TODO hacky
	const parse_repo = (r: string | null | undefined) => {
		if (!r) return null;
		return strip_end(strip_start(strip_end(r, '.git'), 'git+'), '/');
	};

	const repo_url = parse_repo(
		package_json.repository
			? typeof package_json.repository === 'string'
				? package_json.repository
				: package_json.repository.url
			: null,
	);
	if (!repo_url) {
		throw Error('failed to parse package_meta - `repo_url` is required in package_json');
	}

	const homepage_url = package_json.homepage ?? null;

	const published =
		!package_json.private && !!package_json.exports && package_json.version !== '0.0.1';

	// TODO generic registries
	const npm_url = published ? 'https://www.npmjs.com/package/' + package_json.name : null;

	const changelog_url = published && repo_url ? repo_url + '/blob/main/CHANGELOG.md' : null;

	const repo_name = parse_repo_name(name);

	const owner_name = repo_url ? strip_start(repo_url, 'https://github.com/').split('/')[0] : null;

	const logo_url = homepage_url
		? ensure_end(homepage_url, '/') +
			(package_json.logo ? strip_start(package_json.logo, '/') : 'favicon.png')
		: null;

	const logo_alt = package_json.logo_alt ?? `logo for ${repo_name}`;

	return {
		package_json,
		src_json,
		name,
		repo_name,
		repo_url,
		owner_name,
		homepage_url,
		logo_url,
		logo_alt,
		npm_url,
		changelog_url,
		published,
	};
};

// TODO proper parsing
export const parse_repo_name = (name: string): string =>
	name[0] === '@' ? name.split('/')[1] : name;

export const parse_org_url = (pkg: Package_Meta): string | null => {
	const {repo_name, repo_url} = pkg;
	if (!repo_url) return null;
	const suffix = '/' + repo_name;
	if (repo_url.endsWith(suffix)) {
		return strip_end(repo_url, suffix);
	}
	return null;
};
