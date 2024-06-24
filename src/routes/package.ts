// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz',
	version: '0.104.1',
	description: 'Svelte UI library',
	motto: 'friendly user zystem',
	icon: '🧶',
	public: true,
	license: 'MIT',
	homepage: 'https://www.fuz.dev/',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	repository: {type: 'git', url: 'git+https://github.com/ryanatkn/fuz.git'},
	bugs: 'https://github.com/ryanatkn/fuz/issues',
	funding: 'https://www.ryanatkn.com/funding',
	type: 'module',
	engines: {node: '>=22.3'},
	scripts: {
		dev: 'gro dev',
		build: 'gro build',
		deploy: 'gro deploy',
		start: 'gro start',
		test: 'gro test',
	},
	files: ['dist', 'CHANGELOG.md'],
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/moss': '*',
		'@sveltejs/kit': '^2',
		svelte: '^5.0.0-next.0',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.21.0',
		'@ryanatkn/eslint-config': '^0.1.3',
		'@ryanatkn/fuz_code': '^0.14.1',
		'@ryanatkn/gro': '^0.121.1',
		'@ryanatkn/moss': '^0.5.0',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.17',
		'@sveltejs/package': '^2.3.2',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'@types/node': '^20.14.8',
		'@types/prismjs': '^1.26.4',
		'@typescript-eslint/eslint-plugin': '^7.13.1',
		'@typescript-eslint/parser': '^7.13.1',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.41.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.165',
		'svelte-check': '^3.8.2',
		tslib: '^2.6.3',
		typescript: '^5.5.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn', rules: {'no-console': 1}},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./package.json': './package.json',
		'./Alert.svelte': {
			svelte: './dist/Alert.svelte',
			default: './dist/Alert.svelte',
			types: './dist/Alert.svelte.d.ts',
		},
		'./alert.js': {default: './dist/alert.js', types: './dist/alert.d.ts'},
		'./Breadcrumb.svelte': {
			svelte: './dist/Breadcrumb.svelte',
			default: './dist/Breadcrumb.svelte',
			types: './dist/Breadcrumb.svelte.d.ts',
		},
		'./Card.svelte': {
			svelte: './dist/Card.svelte',
			default: './dist/Card.svelte',
			types: './dist/Card.svelte.d.ts',
		},
		'./Color_Scheme_Input.svelte': {
			svelte: './dist/Color_Scheme_Input.svelte',
			default: './dist/Color_Scheme_Input.svelte',
			types: './dist/Color_Scheme_Input.svelte.d.ts',
		},
		'./config.js': {default: './dist/config.js', types: './dist/config.d.ts'},
		'./Contextmenu_Entry.svelte': {
			svelte: './dist/Contextmenu_Entry.svelte',
			default: './dist/Contextmenu_Entry.svelte',
			types: './dist/Contextmenu_Entry.svelte.d.ts',
		},
		'./contextmenu_helpers.svelte.js': {
			default: './dist/contextmenu_helpers.svelte.js',
			types: './dist/contextmenu_helpers.svelte.d.ts',
		},
		'./Contextmenu_Link_Entry.svelte': {
			svelte: './dist/Contextmenu_Link_Entry.svelte',
			default: './dist/Contextmenu_Link_Entry.svelte',
			types: './dist/Contextmenu_Link_Entry.svelte.d.ts',
		},
		'./Contextmenu_Root.svelte': {
			svelte: './dist/Contextmenu_Root.svelte',
			default: './dist/Contextmenu_Root.svelte',
			types: './dist/Contextmenu_Root.svelte.d.ts',
		},
		'./Contextmenu_Submenu.svelte': {
			svelte: './dist/Contextmenu_Submenu.svelte',
			default: './dist/Contextmenu_Submenu.svelte',
			types: './dist/Contextmenu_Submenu.svelte.d.ts',
		},
		'./Contextmenu_Text_Entry.svelte': {
			svelte: './dist/Contextmenu_Text_Entry.svelte',
			default: './dist/Contextmenu_Text_Entry.svelte',
			types: './dist/Contextmenu_Text_Entry.svelte.d.ts',
		},
		'./Contextmenu.svelte': {
			svelte: './dist/Contextmenu.svelte',
			default: './dist/Contextmenu.svelte',
			types: './dist/Contextmenu.svelte.d.ts',
		},
		'./Copy_To_Clipboard.svelte': {
			svelte: './dist/Copy_To_Clipboard.svelte',
			default: './dist/Copy_To_Clipboard.svelte',
			types: './dist/Copy_To_Clipboard.svelte.d.ts',
		},
		'./Details.svelte': {
			svelte: './dist/Details.svelte',
			default: './dist/Details.svelte',
			types: './dist/Details.svelte.d.ts',
		},
		'./Dialog.svelte': {
			svelte: './dist/Dialog.svelte',
			default: './dist/Dialog.svelte',
			types: './dist/Dialog.svelte.d.ts',
		},
		'./dialog.js': {default: './dist/dialog.js', types: './dist/dialog.d.ts'},
		'./Dialogs.svelte': {
			svelte: './dist/Dialogs.svelte',
			default: './dist/Dialogs.svelte',
			types: './dist/Dialogs.svelte.d.ts',
		},
		'./dimensions.svelte.js': {
			default: './dist/dimensions.svelte.js',
			types: './dist/dimensions.svelte.d.ts',
		},
		'./Fuz_Logo.svelte': {
			svelte: './dist/Fuz_Logo.svelte',
			default: './dist/Fuz_Logo.svelte',
			types: './dist/Fuz_Logo.svelte.d.ts',
		},
		'./Fuz_Template_Logo.svelte': {
			svelte: './dist/Fuz_Template_Logo.svelte',
			default: './dist/Fuz_Template_Logo.svelte',
			types: './dist/Fuz_Template_Logo.svelte.d.ts',
		},
		'./Github_Logo.svelte': {
			svelte: './dist/Github_Logo.svelte',
			default: './dist/Github_Logo.svelte',
			types: './dist/Github_Logo.svelte.d.ts',
		},
		'./Hashlink.svelte': {
			svelte: './dist/Hashlink.svelte',
			default: './dist/Hashlink.svelte',
			types: './dist/Hashlink.svelte.d.ts',
		},
		'./Hue_Input.svelte': {
			svelte: './dist/Hue_Input.svelte',
			default: './dist/Hue_Input.svelte',
			types: './dist/Hue_Input.svelte.d.ts',
		},
		'./Library_Content.svelte': {
			svelte: './dist/Library_Content.svelte',
			default: './dist/Library_Content.svelte',
			types: './dist/Library_Content.svelte.d.ts',
		},
		'./Library_Footer.svelte': {
			svelte: './dist/Library_Footer.svelte',
			default: './dist/Library_Footer.svelte',
			types: './dist/Library_Footer.svelte.d.ts',
		},
		'./library_helpers.svelte.js': {
			default: './dist/library_helpers.svelte.js',
			types: './dist/library_helpers.svelte.d.ts',
		},
		'./Library_Menu.svelte': {
			svelte: './dist/Library_Menu.svelte',
			default: './dist/Library_Menu.svelte',
			types: './dist/Library_Menu.svelte.d.ts',
		},
		'./Library_Page_Links.svelte': {
			svelte: './dist/Library_Page_Links.svelte',
			default: './dist/Library_Page_Links.svelte',
			types: './dist/Library_Page_Links.svelte.d.ts',
		},
		'./Library_Primary_Nav.svelte': {
			svelte: './dist/Library_Primary_Nav.svelte',
			default: './dist/Library_Primary_Nav.svelte',
			types: './dist/Library_Primary_Nav.svelte.d.ts',
		},
		'./Library_Secondary_Nav.svelte': {
			svelte: './dist/Library_Secondary_Nav.svelte',
			default: './dist/Library_Secondary_Nav.svelte',
			types: './dist/Library_Secondary_Nav.svelte.d.ts',
		},
		'./Library_Tertiary_Nav.svelte': {
			svelte: './dist/Library_Tertiary_Nav.svelte',
			default: './dist/Library_Tertiary_Nav.svelte',
			types: './dist/Library_Tertiary_Nav.svelte.d.ts',
		},
		'./Library.svelte': {
			svelte: './dist/Library.svelte',
			default: './dist/Library.svelte',
			types: './dist/Library.svelte.d.ts',
		},
		'./Mdn_Link.svelte': {
			svelte: './dist/Mdn_Link.svelte',
			default: './dist/Mdn_Link.svelte',
			types: './dist/Mdn_Link.svelte.d.ts',
		},
		'./Mdn_Logo.svelte': {
			svelte: './dist/Mdn_Logo.svelte',
			default: './dist/Mdn_Logo.svelte',
			types: './dist/Mdn_Logo.svelte.d.ts',
		},
		'./Moss_Logo.svelte': {
			svelte: './dist/Moss_Logo.svelte',
			default: './dist/Moss_Logo.svelte',
			types: './dist/Moss_Logo.svelte.d.ts',
		},
		'./Package_Detail.svelte': {
			svelte: './dist/Package_Detail.svelte',
			default: './dist/Package_Detail.svelte',
			types: './dist/Package_Detail.svelte.d.ts',
		},
		'./Package_Summary.svelte': {
			svelte: './dist/Package_Summary.svelte',
			default: './dist/Package_Summary.svelte',
			types: './dist/Package_Summary.svelte.d.ts',
		},
		'./Pending_Animation.svelte': {
			svelte: './dist/Pending_Animation.svelte',
			default: './dist/Pending_Animation.svelte',
			types: './dist/Pending_Animation.svelte.d.ts',
		},
		'./Pending_Button.svelte': {
			svelte: './dist/Pending_Button.svelte',
			default: './dist/Pending_Button.svelte',
			types: './dist/Pending_Button.svelte.d.ts',
		},
		'./Redirect.svelte': {
			svelte: './dist/Redirect.svelte',
			default: './dist/Redirect.svelte',
			types: './dist/Redirect.svelte.d.ts',
		},
		'./Spider.svelte': {
			svelte: './dist/Spider.svelte',
			default: './dist/Spider.svelte',
			types: './dist/Spider.svelte.d.ts',
		},
		'./Spiders.svelte': {
			svelte: './dist/Spiders.svelte',
			default: './dist/Spiders.svelte',
			types: './dist/Spiders.svelte.d.ts',
		},
		'./Spiderspace_Logo.svelte': {
			svelte: './dist/Spiderspace_Logo.svelte',
			default: './dist/Spiderspace_Logo.svelte',
			types: './dist/Spiderspace_Logo.svelte.d.ts',
		},
		'./Teleport.svelte': {
			svelte: './dist/Teleport.svelte',
			default: './dist/Teleport.svelte',
			types: './dist/Teleport.svelte.d.ts',
		},
		'./Theme_Input.svelte': {
			svelte: './dist/Theme_Input.svelte',
			default: './dist/Theme_Input.svelte',
			types: './dist/Theme_Input.svelte.d.ts',
		},
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
		'./Tome_Detail.svelte': {
			svelte: './dist/Tome_Detail.svelte',
			default: './dist/Tome_Detail.svelte',
			types: './dist/Tome_Detail.svelte.d.ts',
		},
		'./Tome_Link.svelte': {
			svelte: './dist/Tome_Link.svelte',
			default: './dist/Tome_Link.svelte',
			types: './dist/Tome_Link.svelte.d.ts',
		},
		'./Tome_Subheading.svelte': {
			svelte: './dist/Tome_Subheading.svelte',
			default: './dist/Tome_Subheading.svelte',
			types: './dist/Tome_Subheading.svelte.d.ts',
		},
		'./Tome_Title.svelte': {
			svelte: './dist/Tome_Title.svelte',
			default: './dist/Tome_Title.svelte',
			types: './dist/Tome_Title.svelte.d.ts',
		},
		'./tome.js': {default: './dist/tome.js', types: './dist/tome.d.ts'},
		'./Zzz_Logo.svelte': {
			svelte: './dist/Zzz_Logo.svelte',
			default: './dist/Zzz_Logo.svelte',
			types: './dist/Zzz_Logo.svelte.d.ts',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz',
	version: '0.104.1',
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
		'./config.js': {
			path: 'config.ts',
			declarations: [
				{name: 'Fuz_Config', kind: 'variable'},
				{name: 'load_fuz_config', kind: 'function'},
			],
		},
		'./Contextmenu_Entry.svelte': {path: 'Contextmenu_Entry.svelte', declarations: []},
		'./contextmenu_helpers.svelte.js': {
			path: 'contextmenu_helpers.svelte.ts',
			declarations: [
				{name: 'Contextmenu_Params', kind: 'type'},
				{name: 'Item_State', kind: 'type'},
				{name: 'Entry_State', kind: 'class'},
				{name: 'Submenu_State', kind: 'class'},
				{name: 'Root_Menu_State', kind: 'class'},
				{name: 'Contextmenu_Run', kind: 'type'},
				{name: 'Contextmenu_Store_Options', kind: 'type'},
				{name: 'Contextmenu_Store', kind: 'class'},
				{name: 'contextmenu_action', kind: 'function'},
				{name: 'open_contextmenu', kind: 'function'},
				{name: 'set_contextmenu', kind: 'function'},
				{name: 'get_contextmenu', kind: 'function'},
				{name: 'set_contextmenu_submenu', kind: 'function'},
				{name: 'get_contextmenu_submenu', kind: 'function'},
				{name: 'set_contextmenu_dimensions', kind: 'function'},
				{name: 'get_contextmenu_dimensions', kind: 'function'},
			],
		},
		'./Contextmenu_Link_Entry.svelte': {path: 'Contextmenu_Link_Entry.svelte', declarations: []},
		'./Contextmenu_Root.svelte': {path: 'Contextmenu_Root.svelte', declarations: []},
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
		'./Fuz_Logo.svelte': {path: 'Fuz_Logo.svelte', declarations: []},
		'./Fuz_Template_Logo.svelte': {path: 'Fuz_Template_Logo.svelte', declarations: []},
		'./Github_Logo.svelte': {path: 'Github_Logo.svelte', declarations: []},
		'./Hashlink.svelte': {path: 'Hashlink.svelte', declarations: []},
		'./Hue_Input.svelte': {path: 'Hue_Input.svelte', declarations: []},
		'./Library_Content.svelte': {path: 'Library_Content.svelte', declarations: []},
		'./Library_Footer.svelte': {path: 'Library_Footer.svelte', declarations: []},
		'./library_helpers.svelte.js': {
			path: 'library_helpers.svelte.ts',
			declarations: [
				{name: 'DEFAULT_LIBRARY_PATH', kind: 'variable'},
				{name: 'to_library_path_info', kind: 'function'},
				{name: 'set_library_links', kind: 'function'},
				{name: 'get_library_links', kind: 'function'},
				{name: 'Library_Link_Tag', kind: 'type'},
				{name: 'Library_Link_Data', kind: 'type'},
				{name: 'Library_Links', kind: 'class'},
			],
		},
		'./Library_Menu.svelte': {path: 'Library_Menu.svelte', declarations: []},
		'./Library_Page_Links.svelte': {path: 'Library_Page_Links.svelte', declarations: []},
		'./Library_Primary_Nav.svelte': {path: 'Library_Primary_Nav.svelte', declarations: []},
		'./Library_Secondary_Nav.svelte': {path: 'Library_Secondary_Nav.svelte', declarations: []},
		'./Library_Tertiary_Nav.svelte': {path: 'Library_Tertiary_Nav.svelte', declarations: []},
		'./Library.svelte': {path: 'Library.svelte', declarations: []},
		'./Mdn_Link.svelte': {path: 'Mdn_Link.svelte', declarations: []},
		'./Mdn_Logo.svelte': {path: 'Mdn_Logo.svelte', declarations: []},
		'./Moss_Logo.svelte': {path: 'Moss_Logo.svelte', declarations: []},
		'./Package_Detail.svelte': {path: 'Package_Detail.svelte', declarations: []},
		'./Package_Summary.svelte': {path: 'Package_Summary.svelte', declarations: []},
		'./Pending_Animation.svelte': {path: 'Pending_Animation.svelte', declarations: []},
		'./Pending_Button.svelte': {path: 'Pending_Button.svelte', declarations: []},
		'./Redirect.svelte': {path: 'Redirect.svelte', declarations: []},
		'./Spider.svelte': {path: 'Spider.svelte', declarations: []},
		'./Spiders.svelte': {path: 'Spiders.svelte', declarations: []},
		'./Spiderspace_Logo.svelte': {path: 'Spiderspace_Logo.svelte', declarations: []},
		'./Teleport.svelte': {path: 'Teleport.svelte', declarations: []},
		'./Theme_Input.svelte': {path: 'Theme_Input.svelte', declarations: []},
		'./theme.js': {
			path: 'theme.ts',
			declarations: [
				{name: 'sync_color_scheme', kind: 'function'},
				{name: 'COLOR_SCHEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_color_scheme', kind: 'function'},
				{name: 'load_color_scheme', kind: 'function'},
				{name: 'THEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_theme', kind: 'function'},
				{name: 'load_theme', kind: 'function'},
				{name: 'create_theme_setup_script', kind: 'function'},
			],
		},
		'./Themed_Scope.svelte': {path: 'Themed_Scope.svelte', declarations: []},
		'./Themed.svelte': {path: 'Themed.svelte', declarations: []},
		'./Tome_Detail.svelte': {path: 'Tome_Detail.svelte', declarations: []},
		'./Tome_Link.svelte': {path: 'Tome_Link.svelte', declarations: []},
		'./Tome_Subheading.svelte': {path: 'Tome_Subheading.svelte', declarations: []},
		'./Tome_Title.svelte': {path: 'Tome_Title.svelte', declarations: []},
		'./tome.js': {
			path: 'tome.ts',
			declarations: [
				{name: 'Tome', kind: 'variable'},
				{name: 'init_tome', kind: 'function'},
				{name: 'get_tomes', kind: 'function'},
				{name: 'set_tomes', kind: 'function'},
				{name: 'get_tome', kind: 'function'},
			],
		},
		'./Zzz_Logo.svelte': {path: 'Zzz_Logo.svelte', declarations: []},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
