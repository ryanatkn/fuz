// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz',
	version: '0.84.0',
	description: 'Svelte UI library and CSS design system',
	icon: '🧶',
	public: true,
	license: 'MIT',
	homepage: 'https://www.fuz.dev/',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	repository: {type: 'git', url: 'git+https://github.com/ryanatkn/fuz.git'},
	bugs: {url: 'https://github.com/ryanatkn/fuz/issues', email: 'mail@ryanatkn.com'},
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
	peerDependencies: {'@sveltejs/kit': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.20.3',
		'@ryanatkn/eslint-config': '^0.1.0',
		'@ryanatkn/fuz_code': '^0.7.0',
		'@ryanatkn/gro': '^0.112.2',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.0',
		'@sveltejs/package': '^2.2.6',
		'@sveltejs/vite-plugin-svelte': '^3.0.2',
		'@types/node': '^20.11.19',
		'@types/prismjs': '^1.26.3',
		'@typescript-eslint/eslint-plugin': '^7.0.1',
		'@typescript-eslint/parser': '^7.0.1',
		eslint: '^8.56.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.1',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.11',
		'svelte-check': '^3.6.4',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
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
		'./Contextmenu_Link_Entry.svelte': {
			svelte: './dist/Contextmenu_Link_Entry.svelte',
			default: './dist/Contextmenu_Link_Entry.svelte',
			types: './dist/Contextmenu_Link_Entry.svelte.d.ts',
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
		'./contextmenu.js': {default: './dist/contextmenu.js', types: './dist/contextmenu.d.ts'},
		'./Copy_To_Clipboard.svelte': {
			svelte: './dist/Copy_To_Clipboard.svelte',
			default: './dist/Copy_To_Clipboard.svelte',
			types: './dist/Copy_To_Clipboard.svelte.d.ts',
		},
		'./Devmode_Controls.svelte': {
			svelte: './dist/Devmode_Controls.svelte',
			default: './dist/Devmode_Controls.svelte',
			types: './dist/Devmode_Controls.svelte.d.ts',
		},
		'./devmode.js': {default: './dist/devmode.js', types: './dist/devmode.d.ts'},
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
		'./Github_Logo.svelte': {
			svelte: './dist/Github_Logo.svelte',
			default: './dist/Github_Logo.svelte',
			types: './dist/Github_Logo.svelte.d.ts',
		},
		'./helpers.js': {default: './dist/helpers.js', types: './dist/helpers.d.ts'},
		'./Hue_Input.svelte': {
			svelte: './dist/Hue_Input.svelte',
			default: './dist/Hue_Input.svelte',
			types: './dist/Hue_Input.svelte.d.ts',
		},
		'./Library_Footer.svelte': {
			svelte: './dist/Library_Footer.svelte',
			default: './dist/Library_Footer.svelte',
			types: './dist/Library_Footer.svelte.d.ts',
		},
		'./Library_Header.svelte': {
			svelte: './dist/Library_Header.svelte',
			default: './dist/Library_Header.svelte',
			types: './dist/Library_Header.svelte.d.ts',
		},
		'./Library_Menu.svelte': {
			svelte: './dist/Library_Menu.svelte',
			default: './dist/Library_Menu.svelte',
			types: './dist/Library_Menu.svelte.d.ts',
		},
		'./Library_Nav.svelte': {
			svelte: './dist/Library_Nav.svelte',
			default: './dist/Library_Nav.svelte',
			types: './dist/Library_Nav.svelte.d.ts',
		},
		'./Library_Panel.svelte': {
			svelte: './dist/Library_Panel.svelte',
			default: './dist/Library_Panel.svelte',
			types: './dist/Library_Panel.svelte.d.ts',
		},
		'./Library_Vocab.svelte': {
			svelte: './dist/Library_Vocab.svelte',
			default: './dist/Library_Vocab.svelte',
			types: './dist/Library_Vocab.svelte.d.ts',
		},
		'./Library.svelte': {
			svelte: './dist/Library.svelte',
			default: './dist/Library.svelte',
			types: './dist/Library.svelte.d.ts',
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
		'./Page_Footer.svelte': {
			svelte: './dist/Page_Footer.svelte',
			default: './dist/Page_Footer.svelte',
			types: './dist/Page_Footer.svelte.d.ts',
		},
		'./Page_Header.svelte': {
			svelte: './dist/Page_Header.svelte',
			default: './dist/Page_Header.svelte',
			types: './dist/Page_Header.svelte.d.ts',
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
		'./style.css': {default: './dist/style.css'},
		'./swallow.js': {default: './dist/swallow.js', types: './dist/swallow.d.ts'},
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
		'./Tome_Detail.svelte': {
			svelte: './dist/Tome_Detail.svelte',
			default: './dist/Tome_Detail.svelte',
			types: './dist/Tome_Detail.svelte.d.ts',
		},
		'./Tome_Title.svelte': {
			svelte: './dist/Tome_Title.svelte',
			default: './dist/Tome_Title.svelte',
			types: './dist/Tome_Title.svelte.d.ts',
		},
		'./tome.js': {default: './dist/tome.js', types: './dist/tome.d.ts'},
		'./variables.js': {default: './dist/variables.js', types: './dist/variables.d.ts'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz',
	version: '0.84.0',
	modules: {
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
		'./Contextmenu_Link_Entry.svelte': {path: 'Contextmenu_Link_Entry.svelte', declarations: []},
		'./Contextmenu_Submenu.svelte': {path: 'Contextmenu_Submenu.svelte', declarations: []},
		'./Contextmenu_Text_Entry.svelte': {path: 'Contextmenu_Text_Entry.svelte', declarations: []},
		'./Contextmenu.svelte': {path: 'Contextmenu.svelte', declarations: []},
		'./contextmenu.js': {
			path: 'contextmenu.ts',
			declarations: [
				{name: 'Contextmenu_Params', kind: 'type'},
				{name: 'Contextmenu_Action_Params', kind: 'type'},
				{name: 'to_contextmenu_params', kind: 'function'},
				{name: 'Item_State', kind: 'type'},
				{name: 'Entry_State', kind: 'type'},
				{name: 'Submenu_State', kind: 'type'},
				{name: 'Root_Menu_State', kind: 'type'},
				{name: 'Contextmenu_Run', kind: 'type'},
				{name: 'Contextmenu', kind: 'type'},
				{name: 'Contextmenu_Store', kind: 'type'},
				{name: 'Contextmenu_Store_Options', kind: 'type'},
				{name: 'create_contextmenu', kind: 'function'},
				{name: 'open_contextmenu', kind: 'function'},
				{name: 'set_contextmenu', kind: 'function'},
				{name: 'get_contextmenu', kind: 'function'},
				{name: 'set_contextmenu_submenu', kind: 'function'},
				{name: 'get_contextmenu_submenu', kind: 'function'},
				{name: 'set_contextmenu_dimensions', kind: 'function'},
				{name: 'get_contextmenu_dimensions', kind: 'function'},
			],
		},
		'./Copy_To_Clipboard.svelte': {path: 'Copy_To_Clipboard.svelte', declarations: []},
		'./Devmode_Controls.svelte': {path: 'Devmode_Controls.svelte', declarations: []},
		'./devmode.js': {
			path: 'devmode.ts',
			declarations: [
				{name: 'get_devmode', kind: 'function'},
				{name: 'set_devmode', kind: 'function'},
			],
		},
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
		'./Github_Logo.svelte': {path: 'Github_Logo.svelte', declarations: []},
		'./helpers.js': {
			path: 'helpers.ts',
			declarations: [
				{name: 'LIBRARY_PATH', kind: 'variable'},
				{name: 'to_library_path_info', kind: 'function'},
			],
		},
		'./Hue_Input.svelte': {path: 'Hue_Input.svelte', declarations: []},
		'./Library_Footer.svelte': {path: 'Library_Footer.svelte', declarations: []},
		'./Library_Header.svelte': {path: 'Library_Header.svelte', declarations: []},
		'./Library_Menu.svelte': {path: 'Library_Menu.svelte', declarations: []},
		'./Library_Nav.svelte': {path: 'Library_Nav.svelte', declarations: []},
		'./Library_Panel.svelte': {path: 'Library_Panel.svelte', declarations: []},
		'./Library_Vocab.svelte': {path: 'Library_Vocab.svelte', declarations: []},
		'./Library.svelte': {path: 'Library.svelte', declarations: []},
		'./Package_Detail.svelte': {path: 'Package_Detail.svelte', declarations: []},
		'./Package_Summary.svelte': {path: 'Package_Summary.svelte', declarations: []},
		'./Page_Footer.svelte': {path: 'Page_Footer.svelte', declarations: []},
		'./Page_Header.svelte': {path: 'Page_Header.svelte', declarations: []},
		'./Pending_Animation.svelte': {path: 'Pending_Animation.svelte', declarations: []},
		'./Pending_Button.svelte': {path: 'Pending_Button.svelte', declarations: []},
		'./Redirect.svelte': {path: 'Redirect.svelte', declarations: []},
		'./style.css': {path: 'style.css', declarations: []},
		'./swallow.js': {path: 'swallow.ts', declarations: [{name: 'swallow', kind: 'function'}]},
		'./Teleport.svelte': {path: 'Teleport.svelte', declarations: []},
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
		'./Tome_Detail.svelte': {path: 'Tome_Detail.svelte', declarations: []},
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
		'./variables.js': {
			path: 'variables.ts',
			declarations: [{name: 'default_variables', kind: 'variable'}],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
