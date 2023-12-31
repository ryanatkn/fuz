// generated by src/routes/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

export const package_json = {
	name: '@fuz.dev/fuz',
	version: '0.81.0',
	description: 'design system for CSS, Svelte, and SvelteKit',
	icon: '🧶',
	public: true,
	license: 'MIT',
	homepage: 'https://www.fuz.dev/',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	repository: {type: 'git', url: 'git+https://github.com/fuz-dev/fuz.git'},
	bugs: {url: 'https://github.com/fuz-dev/fuz/issues', email: 'mail@ryanatkn.com'},
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		dev: 'gro dev',
		build: 'gro build',
		deploy: 'gro deploy',
		start: 'gro start',
		test: 'gro test',
	},
	files: ['dist'],
	peerDependencies: {svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz_code': '^0.5.0',
		'@fuz.dev/fuz_dialog': '^0.6.0',
		'@fuz.dev/fuz_library': '^0.23.0',
		'@grogarden/gro': '^0.108.0',
		'@ryanatkn/orc': '^0.17.0',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.0.6',
		'@sveltejs/package': '^2.2.5',
		'@sveltejs/vite-plugin-svelte': '^3.0.1',
		'@types/prismjs': '^1.26.3',
		'@typescript-eslint/eslint-plugin': '^6.16.0',
		'@typescript-eslint/parser': '^6.16.0',
		eslint: '^8.56.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.1.1',
		'prettier-plugin-svelte': '^3.1.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.8',
		'svelte-check': '^3.6.2',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs', rules: {'no-console': 1}},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Color_Scheme_Input.svelte': {
			svelte: './dist/Color_Scheme_Input.svelte',
			default: './dist/Color_Scheme_Input.svelte',
			types: './dist/Color_Scheme_Input.svelte.d.ts',
		},
		'./deployments.json': {
			default: './dist/deployments.json',
			types: './dist/deployments.json.d.ts',
		},
		'./deployments.task.js': {
			default: './dist/deployments.task.js',
			types: './dist/deployments.task.d.ts',
		},
		'./orc.task.js': {default: './dist/orc.task.js', types: './dist/orc.task.d.ts'},
		'./style.css': {default: './dist/style.css'},
		'./swallow.js': {default: './dist/swallow.js', types: './dist/swallow.d.ts'},
		'./Theme_Input.svelte': {
			svelte: './dist/Theme_Input.svelte',
			default: './dist/Theme_Input.svelte',
			types: './dist/Theme_Input.svelte.d.ts',
		},
		'./theme.css': {default: './dist/theme.css'},
		'./theme.gen.css.js': {default: './dist/theme.gen.css.js', types: './dist/theme.gen.css.d.ts'},
		'./theme.js': {default: './dist/theme.js', types: './dist/theme.d.ts'},
		'./Themed_Scope.svelte': {
			svelte: './dist/Themed_Scope.svelte',
			default: './dist/Themed_Scope.svelte',
			types: './dist/Themed_Scope.svelte.d.ts',
		},
		'./Themed.svelte': {
			svelte: './dist/Themed.svelte',
			default: './dist/Themed.svelte',
			types: './dist/Themed.svelte.d.ts',
		},
		'./themes.js': {default: './dist/themes.js', types: './dist/themes.d.ts'},
		'./variables.js': {default: './dist/variables.js', types: './dist/variables.d.ts'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@fuz.dev/fuz',
	version: '0.81.0',
	modules: {
		'./Color_Scheme_Input.svelte': {path: 'Color_Scheme_Input.svelte', declarations: []},
		'./deployments.json': {path: 'deployments.json', declarations: []},
		'./deployments.task.js': {path: 'deployments.task.ts', declarations: []},
		'./orc.task.js': {path: 'orc.task.ts', declarations: []},
		'./style.css': {path: 'style.css', declarations: []},
		'./swallow.js': {path: 'swallow.ts', declarations: [{name: 'swallow', kind: 'function'}]},
		'./Theme_Input.svelte': {path: 'Theme_Input.svelte', declarations: []},
		'./theme.css': {path: 'theme.css', declarations: []},
		'./theme.gen.css.js': {
			path: 'theme.gen.css.ts',
			declarations: [{name: 'gen', kind: 'variable'}],
		},
		'./theme.js': {
			path: 'theme.ts',
			declarations: [
				{name: 'Color_Scheme', kind: 'type'},
				{name: 'color_schemes', kind: 'variable'},
				{name: 'THEME_COLOR', kind: 'variable'},
				{name: 'sync_color_scheme', kind: 'function'},
				{name: 'COLOR_SCHEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_color_scheme', kind: 'function'},
				{name: 'load_color_scheme', kind: 'function'},
				{name: 'THEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_theme', kind: 'function'},
				{name: 'load_theme', kind: 'function'},
				{name: 'create_theme_setup_script', kind: 'function'},
				{name: 'create_theme_style_html', kind: 'function'},
				{name: 'Theme', kind: 'type'},
				{name: 'Theme_Variable', kind: 'type'},
				{name: 'Render_Theme_Style_Options', kind: 'type'},
				{name: 'render_theme_style', kind: 'function'},
				{name: 'render_theme_variable', kind: 'function'},
				{name: 'get_theme', kind: 'function'},
				{name: 'set_theme', kind: 'function'},
				{name: 'get_color_scheme', kind: 'function'},
				{name: 'set_color_scheme', kind: 'function'},
			],
		},
		'./Themed_Scope.svelte': {path: 'Themed_Scope.svelte', declarations: []},
		'./Themed.svelte': {path: 'Themed.svelte', declarations: []},
		'./themes.js': {
			path: 'themes.ts',
			declarations: [
				{name: 'DEFAULT_THEME', kind: 'variable'},
				{name: 'default_themes', kind: 'variable'},
			],
		},
		'./variables.js': {
			path: 'variables.ts',
			declarations: [{name: 'default_variables', kind: 'variable'}],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
