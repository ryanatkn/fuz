import {Url} from '@ryanatkn/gro/package_json.js';
import type {Logger} from '@ryanatkn/belt/log.js';
import {join} from 'node:path';
import {existsSync} from 'node:fs';

export interface Fuz_Config {
	repos: Fuz_Repo[];
}

export interface Raw_Fuz_Config {
	repos?: Array<Url | Fuz_Repo>;
}

export interface Fuz_Repo {
	url: Url;
}

export type Create_Fuz_Config = (
	base_config: Fuz_Config,
) => Raw_Fuz_Config | Promise<Raw_Fuz_Config>;

export const create_empty_fuz_config = (): Fuz_Config => ({
	repos: [],
});

export const load_fuz_config = async (): Promise<Fuz_Config> => {
	const config = (await import(join(dir, path))).default; // TODO error handling
	try {
		return Fuz_Config.parse(config);
	} catch (err) {
		try {
			log?.error(`invalid ${path}: ${JSON.parse(err.message)[0].message}`);
		} catch (_err) {}
		throw err;
	}
};

/**
 * Transforms a `Raw_Fuz_Config` to the more strict `Fuz_Config`.
 * This allows users to provide a more relaxed config.
 */
export const normalize_fuz_config = (raw_config: Raw_Fuz_Config): Fuz_Config => {
	const empty_config = create_empty_fuz_config();
	// All of the raw config properties are optional,
	// so fall back to the empty values when `undefined`.
	const {repos} = raw_config;
	return {
		repos: repos ? repos.map((r) => (typeof r === 'string' ? {url: r} : r)) : empty_config.repos,
	};
};

export interface Fuz_Config_Module {
	readonly default: Raw_Fuz_Config | Create_Fuz_Config;
}

export const load_fuz_config = async (
	path: string,
	dir: string,
	log?: Logger,
): Promise<Fuz_Config> => {
	const default_config = normalize_fuz_config(
		await create_default_config(create_empty_fuz_config()),
	);
	const config_path = join(dir, GRO_CONFIG_PATH);
	if (!existsSync(config_path)) {
		// No user config file found, so return the default.
		return default_config;
	}
	// Import the user's `gro.config.ts`.
	const config_module = await import(config_path);
	validate_fuz_config_module(config_module, config_path);
	return normalize_fuz_config(
		typeof config_module.default === 'function'
			? await config_module.default(default_config)
			: config_module.default,
	);
};

export const validate_fuz_config_module: (
	config_module: any,
	config_path: string,
) => asserts config_module is Fuz_Config_Module = (config_module, config_path) => {
	const config = config_module.default;
	if (!config) {
		throw Error(`Invalid Fuz config module at ${config_path}: expected a default export`);
	} else if (!(typeof config === 'function' || typeof config === 'object')) {
		throw Error(
			`Invalid Fuz config module at ${config_path}: the default export must be a function or object`,
		);
	}
};
