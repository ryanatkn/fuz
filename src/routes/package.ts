// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz',
	version: '0.129.5',
	description: 'Svelte UI library',
	motto: 'friendly user zystem',
	glyph: '🧶',
	logo: 'logo.svg',
	logo_alt: 'a friendly brown spider facing you',
	public: true,
	license: 'MIT',
	homepage: 'https://www.fuz.dev/',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	repository: {type: 'git', url: 'git+https://github.com/ryanatkn/fuz.git'},
	bugs: 'https://github.com/ryanatkn/fuz/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/gro': '*',
		'@ryanatkn/moss': '*',
		'@sveltejs/kit': '^2',
		svelte: '^5.0.0-next.0',
	},
	peerDependenciesMeta: {'@ryanatkn/gro': {optional: true}},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz_code': '^0.19.0',
		'@ryanatkn/gro': '^0.143.0',
		'@ryanatkn/moss': '^0.18.2',
		'@sveltejs/adapter-static': '^3.0.6',
		'@sveltejs/kit': '^2.7.3',
		'@sveltejs/package': '^2.3.7',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		'@types/node': '^22.8.1',
		'@types/prismjs': '^1.26.5',
		eslint: '^9.13.0',
		'eslint-plugin-svelte': '^2.46.0',
		'esm-env': '^1.0.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.1.3',
		'svelte-check': '^4.0.5',
		tslib: '^2.8.0',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.11.0',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist', 'src/lib/**/*.ts', '!src/lib/**/*.test.*', '!dist/**/*.test.*'],
	exports: {
		'./package.json': './package.json',
		'./Alert.svelte': {
			types: './dist/Alert.svelte.d.ts',
			svelte: './dist/Alert.svelte',
			default: './dist/Alert.svelte',
		},
		'./alert.js': {types: './dist/alert.d.ts', default: './dist/alert.js'},
		'./Breadcrumb.svelte': {
			types: './dist/Breadcrumb.svelte.d.ts',
			svelte: './dist/Breadcrumb.svelte',
			default: './dist/Breadcrumb.svelte',
		},
		'./Card.svelte': {
			types: './dist/Card.svelte.d.ts',
			svelte: './dist/Card.svelte',
			default: './dist/Card.svelte',
		},
		'./Color_Scheme_Input.svelte': {
			types: './dist/Color_Scheme_Input.svelte.d.ts',
			svelte: './dist/Color_Scheme_Input.svelte',
			default: './dist/Color_Scheme_Input.svelte',
		},
		'./Community_Links_Panel.svelte': {
			types: './dist/Community_Links_Panel.svelte.d.ts',
			svelte: './dist/Community_Links_Panel.svelte',
			default: './dist/Community_Links_Panel.svelte',
		},
		'./Community_Links.svelte': {
			types: './dist/Community_Links.svelte.d.ts',
			svelte: './dist/Community_Links.svelte',
			default: './dist/Community_Links.svelte',
		},
		'./context_helpers.js': {
			types: './dist/context_helpers.d.ts',
			default: './dist/context_helpers.js',
		},
		'./Contextmenu_Entry.svelte': {
			types: './dist/Contextmenu_Entry.svelte.d.ts',
			svelte: './dist/Contextmenu_Entry.svelte',
			default: './dist/Contextmenu_Entry.svelte',
		},
		'./Contextmenu_Link_Entry.svelte': {
			types: './dist/Contextmenu_Link_Entry.svelte.d.ts',
			svelte: './dist/Contextmenu_Link_Entry.svelte',
			default: './dist/Contextmenu_Link_Entry.svelte',
		},
		'./Contextmenu_Root.svelte': {
			types: './dist/Contextmenu_Root.svelte.d.ts',
			svelte: './dist/Contextmenu_Root.svelte',
			default: './dist/Contextmenu_Root.svelte',
		},
		'./contextmenu_state.svelte.js': {
			types: './dist/contextmenu_state.svelte.d.ts',
			default: './dist/contextmenu_state.svelte.js',
		},
		'./Contextmenu_Submenu.svelte': {
			types: './dist/Contextmenu_Submenu.svelte.d.ts',
			svelte: './dist/Contextmenu_Submenu.svelte',
			default: './dist/Contextmenu_Submenu.svelte',
		},
		'./Contextmenu_Text_Entry.svelte': {
			types: './dist/Contextmenu_Text_Entry.svelte.d.ts',
			svelte: './dist/Contextmenu_Text_Entry.svelte',
			default: './dist/Contextmenu_Text_Entry.svelte',
		},
		'./Contextmenu.svelte': {
			types: './dist/Contextmenu.svelte.d.ts',
			svelte: './dist/Contextmenu.svelte',
			default: './dist/Contextmenu.svelte',
		},
		'./Copy_To_Clipboard.svelte': {
			types: './dist/Copy_To_Clipboard.svelte.d.ts',
			svelte: './dist/Copy_To_Clipboard.svelte',
			default: './dist/Copy_To_Clipboard.svelte',
		},
		'./Details.svelte': {
			types: './dist/Details.svelte.d.ts',
			svelte: './dist/Details.svelte',
			default: './dist/Details.svelte',
		},
		'./Dialog.svelte': {
			types: './dist/Dialog.svelte.d.ts',
			svelte: './dist/Dialog.svelte',
			default: './dist/Dialog.svelte',
		},
		'./dialog.js': {types: './dist/dialog.d.ts', default: './dist/dialog.js'},
		'./Dialogs.svelte': {
			types: './dist/Dialogs.svelte.d.ts',
			svelte: './dist/Dialogs.svelte',
			default: './dist/Dialogs.svelte',
		},
		'./dimensions.svelte.js': {
			types: './dist/dimensions.svelte.d.ts',
			default: './dist/dimensions.svelte.js',
		},
		'./Hashlink.svelte': {
			types: './dist/Hashlink.svelte.d.ts',
			svelte: './dist/Hashlink.svelte',
			default: './dist/Hashlink.svelte',
		},
		'./Hidden_Personal_Links.svelte': {
			types: './dist/Hidden_Personal_Links.svelte.d.ts',
			svelte: './dist/Hidden_Personal_Links.svelte',
			default: './dist/Hidden_Personal_Links.svelte',
		},
		'./Hue_Input.svelte': {
			types: './dist/Hue_Input.svelte.d.ts',
			svelte: './dist/Hue_Input.svelte',
			default: './dist/Hue_Input.svelte',
		},
		'./intersect.js': {types: './dist/intersect.d.ts', default: './dist/intersect.js'},
		'./Library_Content.svelte': {
			types: './dist/Library_Content.svelte.d.ts',
			svelte: './dist/Library_Content.svelte',
			default: './dist/Library_Content.svelte',
		},
		'./Library_Footer.svelte': {
			types: './dist/Library_Footer.svelte.d.ts',
			svelte: './dist/Library_Footer.svelte',
			default: './dist/Library_Footer.svelte',
		},
		'./library_helpers.svelte.js': {
			types: './dist/library_helpers.svelte.d.ts',
			default: './dist/library_helpers.svelte.js',
		},
		'./Library_Menu.svelte': {
			types: './dist/Library_Menu.svelte.d.ts',
			svelte: './dist/Library_Menu.svelte',
			default: './dist/Library_Menu.svelte',
		},
		'./Library_Page_Links.svelte': {
			types: './dist/Library_Page_Links.svelte.d.ts',
			svelte: './dist/Library_Page_Links.svelte',
			default: './dist/Library_Page_Links.svelte',
		},
		'./Library_Primary_Nav.svelte': {
			types: './dist/Library_Primary_Nav.svelte.d.ts',
			svelte: './dist/Library_Primary_Nav.svelte',
			default: './dist/Library_Primary_Nav.svelte',
		},
		'./Library_Secondary_Nav.svelte': {
			types: './dist/Library_Secondary_Nav.svelte.d.ts',
			svelte: './dist/Library_Secondary_Nav.svelte',
			default: './dist/Library_Secondary_Nav.svelte',
		},
		'./Library_Tertiary_Nav.svelte': {
			types: './dist/Library_Tertiary_Nav.svelte.d.ts',
			svelte: './dist/Library_Tertiary_Nav.svelte',
			default: './dist/Library_Tertiary_Nav.svelte',
		},
		'./Library.svelte': {
			types: './dist/Library.svelte.d.ts',
			svelte: './dist/Library.svelte',
			default: './dist/Library.svelte',
		},
		'./logos.js': {types: './dist/logos.d.ts', default: './dist/logos.js'},
		'./Mdn_Link.svelte': {
			types: './dist/Mdn_Link.svelte.d.ts',
			svelte: './dist/Mdn_Link.svelte',
			default: './dist/Mdn_Link.svelte',
		},
		'./Package_Detail.svelte': {
			types: './dist/Package_Detail.svelte.d.ts',
			svelte: './dist/Package_Detail.svelte',
			default: './dist/Package_Detail.svelte',
		},
		'./Package_Summary.svelte': {
			types: './dist/Package_Summary.svelte.d.ts',
			svelte: './dist/Package_Summary.svelte',
			default: './dist/Package_Summary.svelte',
		},
		'./Pending_Animation.svelte': {
			types: './dist/Pending_Animation.svelte.d.ts',
			svelte: './dist/Pending_Animation.svelte',
			default: './dist/Pending_Animation.svelte',
		},
		'./Pending_Button.svelte': {
			types: './dist/Pending_Button.svelte.d.ts',
			svelte: './dist/Pending_Button.svelte',
			default: './dist/Pending_Button.svelte',
		},
		'./Project_Links.svelte': {
			types: './dist/Project_Links.svelte.d.ts',
			svelte: './dist/Project_Links.svelte',
			default: './dist/Project_Links.svelte',
		},
		'./Redirect.svelte': {
			types: './dist/Redirect.svelte.d.ts',
			svelte: './dist/Redirect.svelte',
			default: './dist/Redirect.svelte',
		},
		'./rune_helpers.svelte.js': {
			types: './dist/rune_helpers.svelte.d.ts',
			default: './dist/rune_helpers.svelte.js',
		},
		'./Spiders.svelte': {
			types: './dist/Spiders.svelte.d.ts',
			svelte: './dist/Spiders.svelte',
			default: './dist/Spiders.svelte',
		},
		'./Svg.svelte': {
			types: './dist/Svg.svelte.d.ts',
			svelte: './dist/Svg.svelte',
			default: './dist/Svg.svelte',
		},
		'./Teleport.svelte': {
			types: './dist/Teleport.svelte.d.ts',
			svelte: './dist/Teleport.svelte',
			default: './dist/Teleport.svelte',
		},
		'./Theme_Input.svelte': {
			types: './dist/Theme_Input.svelte.d.ts',
			svelte: './dist/Theme_Input.svelte',
			default: './dist/Theme_Input.svelte',
		},
		'./theme.svelte.js': {types: './dist/theme.svelte.d.ts', default: './dist/theme.svelte.js'},
		'./Themed.svelte': {
			types: './dist/Themed.svelte.d.ts',
			svelte: './dist/Themed.svelte',
			default: './dist/Themed.svelte',
		},
		'./Tome_Content.svelte': {
			types: './dist/Tome_Content.svelte.d.ts',
			svelte: './dist/Tome_Content.svelte',
			default: './dist/Tome_Content.svelte',
		},
		'./Tome_Header.svelte': {
			types: './dist/Tome_Header.svelte.d.ts',
			svelte: './dist/Tome_Header.svelte',
			default: './dist/Tome_Header.svelte',
		},
		'./Tome_Link.svelte': {
			types: './dist/Tome_Link.svelte.d.ts',
			svelte: './dist/Tome_Link.svelte',
			default: './dist/Tome_Link.svelte',
		},
		'./Tome_Section_Header.svelte': {
			types: './dist/Tome_Section_Header.svelte.d.ts',
			svelte: './dist/Tome_Section_Header.svelte',
			default: './dist/Tome_Section_Header.svelte',
		},
		'./Tome_Section.svelte': {
			types: './dist/Tome_Section.svelte.d.ts',
			svelte: './dist/Tome_Section.svelte',
			default: './dist/Tome_Section.svelte',
		},
		'./tome.js': {types: './dist/tome.d.ts', default: './dist/tome.js'},
	},
	dependencies: {'@ryanatkn/fuz': '^0.129.5'},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz',
	version: '0.129.5',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./Alert.svelte': {path: 'Alert.svelte', declarations: []},
		'./alert.js': {
			path: 'alert.ts',
			declarations: [
				{name: 'Alert_Status', kind: 'type'},
				{name: 'Alert_Status_Options', kind: 'type'},
				{name: 'alert_status_options', kind: 'variable'},
			],
		},
		'./Breadcrumb.svelte': {path: 'Breadcrumb.svelte', declarations: []},
		'./Card.svelte': {path: 'Card.svelte', declarations: []},
		'./Color_Scheme_Input.svelte': {path: 'Color_Scheme_Input.svelte', declarations: []},
		'./Community_Links_Panel.svelte': {path: 'Community_Links_Panel.svelte', declarations: []},
		'./Community_Links.svelte': {path: 'Community_Links.svelte', declarations: []},
		'./context_helpers.js': {
			path: 'context_helpers.ts',
			declarations: [{name: 'create_context', kind: null}],
		},
		'./Contextmenu_Entry.svelte': {path: 'Contextmenu_Entry.svelte', declarations: []},
		'./Contextmenu_Link_Entry.svelte': {path: 'Contextmenu_Link_Entry.svelte', declarations: []},
		'./Contextmenu_Root.svelte': {path: 'Contextmenu_Root.svelte', declarations: []},
		'./contextmenu_state.svelte.js': {
			path: 'contextmenu_state.svelte.ts',
			declarations: [
				{name: 'Contextmenu_Params', kind: 'type'},
				{name: 'Item_State', kind: 'type'},
				{name: 'Entry_State', kind: 'class'},
				{name: 'Submenu_State', kind: 'class'},
				{name: 'Root_Menu_State', kind: 'class'},
				{name: 'Contextmenu_Run', kind: 'type'},
				{name: 'Contextmenu_State_Options', kind: 'type'},
				{name: 'Contextmenu_State', kind: 'class'},
				{name: 'contextmenu_action', kind: 'function'},
				{name: 'open_contextmenu', kind: 'function'},
				{name: 'contextmenu_context', kind: 'variable'},
				{name: 'contextmenu_submenu_context', kind: 'variable'},
				{name: 'contextmenu_dimensions_context', kind: 'variable'},
			],
		},
		'./Contextmenu_Submenu.svelte': {path: 'Contextmenu_Submenu.svelte', declarations: []},
		'./Contextmenu_Text_Entry.svelte': {path: 'Contextmenu_Text_Entry.svelte', declarations: []},
		'./Contextmenu.svelte': {path: 'Contextmenu.svelte', declarations: []},
		'./Copy_To_Clipboard.svelte': {path: 'Copy_To_Clipboard.svelte', declarations: []},
		'./Details.svelte': {path: 'Details.svelte', declarations: []},
		'./Dialog.svelte': {path: 'Dialog.svelte', declarations: []},
		'./dialog.js': {
			path: 'dialog.ts',
			declarations: [
				{name: 'to_dialog_params', kind: 'function'},
				{name: 'Dialog_Params', kind: 'type'},
				{name: 'Dialog_Layout', kind: 'type'},
				{name: 'dialog_layouts', kind: 'variable'},
			],
		},
		'./Dialogs.svelte': {path: 'Dialogs.svelte', declarations: []},
		'./dimensions.svelte.js': {
			path: 'dimensions.svelte.ts',
			declarations: [{name: 'Dimensions', kind: 'class'}],
		},
		'./Hashlink.svelte': {path: 'Hashlink.svelte', declarations: []},
		'./Hidden_Personal_Links.svelte': {path: 'Hidden_Personal_Links.svelte', declarations: []},
		'./Hue_Input.svelte': {path: 'Hue_Input.svelte', declarations: []},
		'./intersect.js': {
			path: 'intersect.ts',
			declarations: [
				{name: 'Intersect_Params', kind: 'type'},
				{name: 'Intersect_Params_Or_Callback', kind: 'type'},
				{name: 'intersect', kind: 'function'},
				{name: 'On_Intersect', kind: 'type'},
				{name: 'Intersect_State', kind: 'type'},
				{name: 'On_Disconnect', kind: 'type'},
				{name: 'Disconnect_State', kind: 'type'},
			],
		},
		'./Library_Content.svelte': {path: 'Library_Content.svelte', declarations: []},
		'./Library_Footer.svelte': {path: 'Library_Footer.svelte', declarations: []},
		'./library_helpers.svelte.js': {
			path: 'library_helpers.svelte.ts',
			declarations: [
				{name: 'DEFAULT_LIBRARY_PATH', kind: 'variable'},
				{name: 'to_library_path_info', kind: 'function'},
				{name: 'library_links_context', kind: 'variable'},
				{name: 'Library_Link_Tag', kind: 'type'},
				{name: 'Library_Link', kind: 'type'},
				{name: 'Library_Links', kind: 'class'},
			],
		},
		'./Library_Menu.svelte': {path: 'Library_Menu.svelte', declarations: []},
		'./Library_Page_Links.svelte': {path: 'Library_Page_Links.svelte', declarations: []},
		'./Library_Primary_Nav.svelte': {path: 'Library_Primary_Nav.svelte', declarations: []},
		'./Library_Secondary_Nav.svelte': {path: 'Library_Secondary_Nav.svelte', declarations: []},
		'./Library_Tertiary_Nav.svelte': {path: 'Library_Tertiary_Nav.svelte', declarations: []},
		'./Library.svelte': {path: 'Library.svelte', declarations: []},
		'./logos.js': {
			path: 'logos.ts',
			declarations: [
				{name: 'zzz_logo', kind: 'variable'},
				{name: 'gro_logo', kind: 'variable'},
				{name: 'fuz_logo', kind: 'variable'},
				{name: 'moss_logo', kind: 'variable'},
				{name: 'belt_logo', kind: 'variable'},
				{name: 'fuz_code_logo', kind: 'variable'},
				{name: 'fuz_blog_logo', kind: 'variable'},
				{name: 'fuz_mastodon_logo', kind: 'variable'},
				{name: 'fuz_gitops_logo', kind: 'variable'},
				{name: 'fuz_template_logo', kind: 'variable'},
				{name: 'webdevladder_logo', kind: 'variable'},
				{name: 'earbetter_logo', kind: 'variable'},
				{name: 'spiderspace_logo', kind: 'variable'},
				{name: 'github_logo', kind: 'variable'},
				{name: 'mdn_logo', kind: 'variable'},
			],
		},
		'./Mdn_Link.svelte': {path: 'Mdn_Link.svelte', declarations: []},
		'./Package_Detail.svelte': {path: 'Package_Detail.svelte', declarations: []},
		'./Package_Summary.svelte': {path: 'Package_Summary.svelte', declarations: []},
		'./Pending_Animation.svelte': {path: 'Pending_Animation.svelte', declarations: []},
		'./Pending_Button.svelte': {path: 'Pending_Button.svelte', declarations: []},
		'./Project_Links.svelte': {path: 'Project_Links.svelte', declarations: []},
		'./Redirect.svelte': {path: 'Redirect.svelte', declarations: []},
		'./rune_helpers.svelte.js': {
			path: 'rune_helpers.svelte.ts',
			declarations: [{name: 'effect_skip', kind: 'function'}],
		},
		'./Spiders.svelte': {path: 'Spiders.svelte', declarations: []},
		'./Svg.svelte': {path: 'Svg.svelte', declarations: []},
		'./Teleport.svelte': {path: 'Teleport.svelte', declarations: []},
		'./Theme_Input.svelte': {path: 'Theme_Input.svelte', declarations: []},
		'./theme.svelte.js': {
			path: 'theme.svelte.ts',
			declarations: [
				{name: 'Themer', kind: 'class'},
				{name: 'Themer_Json', kind: 'type'},
				{name: 'themer_context', kind: 'variable'},
				{name: 'sync_color_scheme', kind: 'function'},
				{name: 'COLOR_SCHEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_color_scheme', kind: 'function'},
				{name: 'load_color_scheme', kind: 'function'},
				{name: 'THEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_theme', kind: 'function'},
				{name: 'load_theme', kind: 'function'},
				{name: 'create_theme_setup_script', kind: 'function'},
				{name: 'create_theme_style_html', kind: 'function'},
			],
		},
		'./Themed.svelte': {path: 'Themed.svelte', declarations: []},
		'./Tome_Content.svelte': {path: 'Tome_Content.svelte', declarations: []},
		'./Tome_Header.svelte': {path: 'Tome_Header.svelte', declarations: []},
		'./Tome_Link.svelte': {path: 'Tome_Link.svelte', declarations: []},
		'./Tome_Section_Header.svelte': {path: 'Tome_Section_Header.svelte', declarations: []},
		'./Tome_Section.svelte': {path: 'Tome_Section.svelte', declarations: []},
		'./tome.js': {
			path: 'tome.ts',
			declarations: [
				{name: 'Tome', kind: 'variable'},
				{name: 'to_tome_pathname', kind: 'function'},
				{name: 'tomes_context', kind: 'variable'},
				{name: 'get_tome_by_name', kind: 'function'},
				{name: 'tome_context', kind: 'variable'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
