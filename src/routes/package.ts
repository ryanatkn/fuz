// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz',
	version: '0.96.6',
	description: 'Svelte UI library and CSS design system',
	icon: '🧶',
	public: true,
	license: 'MIT',
	homepage: 'https://www.fuz.dev/',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	repository: {type: 'git', url: 'git+https://github.com/ryanatkn/fuz.git'},
	bugs: 'https://github.com/ryanatkn/fuz/issues',
	funding: 'https://www.ryanatkn.com/funding',
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		dev: 'gro dev',
		build: 'gro build',
		deploy: 'gro deploy',
		start: 'gro start',
		test: 'gro test',
	},
	files: ['dist', 'CHANGELOG.md'],
	peerDependencies: {'@ryanatkn/belt': '*', '@sveltejs/kit': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.20.10',
		'@ryanatkn/eslint-config': '^0.1.2',
		'@ryanatkn/fuz_code': '^0.11.0',
		'@ryanatkn/gro': '^0.115.0',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.5',
		'@sveltejs/package': '^2.3.1',
		'@sveltejs/vite-plugin-svelte': '^3.1.0',
		'@types/node': '^20.12.7',
		'@types/prismjs': '^1.26.3',
		'@typescript-eslint/eslint-plugin': '^7.6.0',
		'@typescript-eslint/parser': '^7.6.0',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.36.0-next.13',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.102',
		'svelte-check': '^3.6.9',
		tslib: '^2.6.2',
		typescript: '^5.4.5',
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
		'./contextmenu.svelte.js': {
			default: './dist/contextmenu.svelte.js',
			types: './dist/contextmenu.svelte.d.ts',
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
		'./library.svelte.js': {
			default: './dist/library.svelte.js',
			types: './dist/library.svelte.d.ts',
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
		'./style_animations.css': {default: './dist/style_animations.css'},
		'./style_components.css': {default: './dist/style_components.css'},
		'./style_reset.css': {default: './dist/style_reset.css'},
		'./style_utilities.css': {default: './dist/style_utilities.css'},
		'./style.css': {default: './dist/style.css'},
		'./style.gen.css.js': {default: './dist/style.gen.css.js', types: './dist/style.gen.css.d.ts'},
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
		'./variable_data.js': {default: './dist/variable_data.js', types: './dist/variable_data.d.ts'},
		'./variables.js': {default: './dist/variables.js', types: './dist/variables.d.ts'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz',
	version: '0.96.6',
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
		'./Contextmenu_Link_Entry.svelte': {path: 'Contextmenu_Link_Entry.svelte', declarations: []},
		'./Contextmenu_Root.svelte': {path: 'Contextmenu_Root.svelte', declarations: []},
		'./Contextmenu_Submenu.svelte': {path: 'Contextmenu_Submenu.svelte', declarations: []},
		'./Contextmenu_Text_Entry.svelte': {path: 'Contextmenu_Text_Entry.svelte', declarations: []},
		'./Contextmenu.svelte': {path: 'Contextmenu.svelte', declarations: []},
		'./contextmenu.svelte.js': {
			path: 'contextmenu.svelte.ts',
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
		'./Library_Menu.svelte': {path: 'Library_Menu.svelte', declarations: []},
		'./Library_Page_Links.svelte': {path: 'Library_Page_Links.svelte', declarations: []},
		'./Library_Primary_Nav.svelte': {path: 'Library_Primary_Nav.svelte', declarations: []},
		'./Library_Secondary_Nav.svelte': {path: 'Library_Secondary_Nav.svelte', declarations: []},
		'./Library_Tertiary_Nav.svelte': {path: 'Library_Tertiary_Nav.svelte', declarations: []},
		'./Library.svelte': {path: 'Library.svelte', declarations: []},
		'./library.svelte.js': {
			path: 'library.svelte.ts',
			declarations: [
				{name: 'DEFAULT_LIBRARY_PATH', kind: 'variable'},
				{name: 'to_library_path_info', kind: 'function'},
				{name: 'set_library_links', kind: 'function'},
				{name: 'get_library_links', kind: 'function'},
				{name: 'Library_Link_Data', kind: 'type'},
				{name: 'Library_Links', kind: 'class'},
			],
		},
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
		'./style_animations.css': {path: 'style_animations.css', declarations: []},
		'./style_components.css': {path: 'style_components.css', declarations: []},
		'./style_reset.css': {path: 'style_reset.css', declarations: []},
		'./style_utilities.css': {path: 'style_utilities.css', declarations: []},
		'./style.css': {path: 'style.css', declarations: []},
		'./style.gen.css.js': {
			path: 'style.gen.css.ts',
			declarations: [{name: 'gen', kind: 'variable'}],
		},
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
				{name: 'Style_Variable', kind: 'type'},
				{name: 'Render_Theme_Style_Options', kind: 'type'},
				{name: 'render_theme_style', kind: 'function'},
				{name: 'render_theme_variable', kind: 'function'},
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
		'./variable_data.js': {
			path: 'variable_data.ts',
			declarations: [
				{name: 'size_variants', kind: 'variable'},
				{name: 'size_names', kind: 'variable'},
				{name: 'space_variants', kind: 'variable'},
				{name: 'radius_variants', kind: 'variable'},
				{name: 'line_height_variants', kind: 'variable'},
				{name: 'line_height_names', kind: 'variable'},
			],
		},
		'./variables.js': {
			path: 'variables.ts',
			declarations: [
				{name: 'hue_a', kind: 'variable'},
				{name: 'hue_b', kind: 'variable'},
				{name: 'hue_c', kind: 'variable'},
				{name: 'hue_d', kind: 'variable'},
				{name: 'hue_e', kind: 'variable'},
				{name: 'hue_f', kind: 'variable'},
				{name: 'hue_g', kind: 'variable'},
				{name: 'color_a_1', kind: 'variable'},
				{name: 'color_a_2', kind: 'variable'},
				{name: 'color_a_3', kind: 'variable'},
				{name: 'color_a_4', kind: 'variable'},
				{name: 'color_a_5', kind: 'variable'},
				{name: 'color_a_6', kind: 'variable'},
				{name: 'color_a_7', kind: 'variable'},
				{name: 'color_a_8', kind: 'variable'},
				{name: 'color_a_9', kind: 'variable'},
				{name: 'color_b_1', kind: 'variable'},
				{name: 'color_b_2', kind: 'variable'},
				{name: 'color_b_3', kind: 'variable'},
				{name: 'color_b_4', kind: 'variable'},
				{name: 'color_b_5', kind: 'variable'},
				{name: 'color_b_6', kind: 'variable'},
				{name: 'color_b_7', kind: 'variable'},
				{name: 'color_b_8', kind: 'variable'},
				{name: 'color_b_9', kind: 'variable'},
				{name: 'color_c_1', kind: 'variable'},
				{name: 'color_c_2', kind: 'variable'},
				{name: 'color_c_3', kind: 'variable'},
				{name: 'color_c_4', kind: 'variable'},
				{name: 'color_c_5', kind: 'variable'},
				{name: 'color_c_6', kind: 'variable'},
				{name: 'color_c_7', kind: 'variable'},
				{name: 'color_c_8', kind: 'variable'},
				{name: 'color_c_9', kind: 'variable'},
				{name: 'color_d_1', kind: 'variable'},
				{name: 'color_d_2', kind: 'variable'},
				{name: 'color_d_3', kind: 'variable'},
				{name: 'color_d_4', kind: 'variable'},
				{name: 'color_d_5', kind: 'variable'},
				{name: 'color_d_6', kind: 'variable'},
				{name: 'color_d_7', kind: 'variable'},
				{name: 'color_d_8', kind: 'variable'},
				{name: 'color_d_9', kind: 'variable'},
				{name: 'color_e_1', kind: 'variable'},
				{name: 'color_e_2', kind: 'variable'},
				{name: 'color_e_3', kind: 'variable'},
				{name: 'color_e_4', kind: 'variable'},
				{name: 'color_e_5', kind: 'variable'},
				{name: 'color_e_6', kind: 'variable'},
				{name: 'color_e_7', kind: 'variable'},
				{name: 'color_e_8', kind: 'variable'},
				{name: 'color_e_9', kind: 'variable'},
				{name: 'color_f_1', kind: 'variable'},
				{name: 'color_f_2', kind: 'variable'},
				{name: 'color_f_3', kind: 'variable'},
				{name: 'color_f_4', kind: 'variable'},
				{name: 'color_f_5', kind: 'variable'},
				{name: 'color_f_6', kind: 'variable'},
				{name: 'color_f_7', kind: 'variable'},
				{name: 'color_f_8', kind: 'variable'},
				{name: 'color_f_9', kind: 'variable'},
				{name: 'color_g_1', kind: 'variable'},
				{name: 'color_g_2', kind: 'variable'},
				{name: 'color_g_3', kind: 'variable'},
				{name: 'color_g_4', kind: 'variable'},
				{name: 'color_g_5', kind: 'variable'},
				{name: 'color_g_6', kind: 'variable'},
				{name: 'color_g_7', kind: 'variable'},
				{name: 'color_g_8', kind: 'variable'},
				{name: 'color_g_9', kind: 'variable'},
				{name: 'darken_1', kind: 'variable'},
				{name: 'darken_2', kind: 'variable'},
				{name: 'darken_3', kind: 'variable'},
				{name: 'darken_4', kind: 'variable'},
				{name: 'darken_5', kind: 'variable'},
				{name: 'darken_6', kind: 'variable'},
				{name: 'darken_7', kind: 'variable'},
				{name: 'darken_8', kind: 'variable'},
				{name: 'darken_9', kind: 'variable'},
				{name: 'lighten_1', kind: 'variable'},
				{name: 'lighten_2', kind: 'variable'},
				{name: 'lighten_3', kind: 'variable'},
				{name: 'lighten_4', kind: 'variable'},
				{name: 'lighten_5', kind: 'variable'},
				{name: 'lighten_6', kind: 'variable'},
				{name: 'lighten_7', kind: 'variable'},
				{name: 'lighten_8', kind: 'variable'},
				{name: 'lighten_9', kind: 'variable'},
				{name: 'tint_hue', kind: 'variable'},
				{name: 'tint_saturation', kind: 'variable'},
				{name: 'bg', kind: 'variable'},
				{name: 'fg', kind: 'variable'},
				{name: 'bg_1', kind: 'variable'},
				{name: 'bg_2', kind: 'variable'},
				{name: 'bg_3', kind: 'variable'},
				{name: 'bg_4', kind: 'variable'},
				{name: 'bg_5', kind: 'variable'},
				{name: 'bg_6', kind: 'variable'},
				{name: 'bg_7', kind: 'variable'},
				{name: 'bg_8', kind: 'variable'},
				{name: 'bg_9', kind: 'variable'},
				{name: 'bg_10', kind: 'variable'},
				{name: 'fg_1', kind: 'variable'},
				{name: 'fg_2', kind: 'variable'},
				{name: 'fg_3', kind: 'variable'},
				{name: 'fg_4', kind: 'variable'},
				{name: 'fg_5', kind: 'variable'},
				{name: 'fg_6', kind: 'variable'},
				{name: 'fg_7', kind: 'variable'},
				{name: 'fg_8', kind: 'variable'},
				{name: 'fg_9', kind: 'variable'},
				{name: 'fg_10', kind: 'variable'},
				{name: 'text_color', kind: 'variable'},
				{name: 'text_1', kind: 'variable'},
				{name: 'text_2', kind: 'variable'},
				{name: 'text_3', kind: 'variable'},
				{name: 'text_disabled', kind: 'variable'},
				{name: 'text_active', kind: 'variable'},
				{name: 'line_height_xs', kind: 'variable'},
				{name: 'line_height_sm', kind: 'variable'},
				{name: 'line_height_md', kind: 'variable'},
				{name: 'line_height_lg', kind: 'variable'},
				{name: 'line_height_xl', kind: 'variable'},
				{name: 'font_sans', kind: 'variable'},
				{name: 'font_mono', kind: 'variable'},
				{name: 'size_xs', kind: 'variable'},
				{name: 'size_sm', kind: 'variable'},
				{name: 'size_md', kind: 'variable'},
				{name: 'size_lg', kind: 'variable'},
				{name: 'size_xl', kind: 'variable'},
				{name: 'size_xl2', kind: 'variable'},
				{name: 'size_xl3', kind: 'variable'},
				{name: 'size_xl4', kind: 'variable'},
				{name: 'size_xl5', kind: 'variable'},
				{name: 'size_xl6', kind: 'variable'},
				{name: 'size_xl7', kind: 'variable'},
				{name: 'size_xl8', kind: 'variable'},
				{name: 'size_xl9', kind: 'variable'},
				{name: 'link_color', kind: 'variable'},
				{name: 'text_decoration', kind: 'variable'},
				{name: 'text_decoration_hover', kind: 'variable'},
				{name: 'text_decoration_selected', kind: 'variable'},
				{name: 'link_color_selected', kind: 'variable'},
				{name: 'space_xs5', kind: 'variable'},
				{name: 'space_xs4', kind: 'variable'},
				{name: 'space_xs3', kind: 'variable'},
				{name: 'space_xs2', kind: 'variable'},
				{name: 'space_xs', kind: 'variable'},
				{name: 'space_sm', kind: 'variable'},
				{name: 'space_md', kind: 'variable'},
				{name: 'space_lg', kind: 'variable'},
				{name: 'space_xl', kind: 'variable'},
				{name: 'space_xl2', kind: 'variable'},
				{name: 'space_xl3', kind: 'variable'},
				{name: 'space_xl4', kind: 'variable'},
				{name: 'space_xl5', kind: 'variable'},
				{name: 'space_xl6', kind: 'variable'},
				{name: 'space_xl7', kind: 'variable'},
				{name: 'space_xl8', kind: 'variable'},
				{name: 'space_xl9', kind: 'variable'},
				{name: 'space_xl10', kind: 'variable'},
				{name: 'space_xl11', kind: 'variable'},
				{name: 'space_xl12', kind: 'variable'},
				{name: 'space_xl13', kind: 'variable'},
				{name: 'space_xl14', kind: 'variable'},
				{name: 'space_xl15', kind: 'variable'},
				{name: 'width_md', kind: 'variable'},
				{name: 'width_sm', kind: 'variable'},
				{name: 'width_xs', kind: 'variable'},
				{name: 'border_color', kind: 'variable'},
				{name: 'border_style', kind: 'variable'},
				{name: 'border_color_1', kind: 'variable'},
				{name: 'border_color_2', kind: 'variable'},
				{name: 'border_color_3', kind: 'variable'},
				{name: 'border_color_4', kind: 'variable'},
				{name: 'border_color_5', kind: 'variable'},
				{name: 'border_disabled', kind: 'variable'},
				{name: 'border_width', kind: 'variable'},
				{name: 'border_width_1', kind: 'variable'},
				{name: 'border_width_2', kind: 'variable'},
				{name: 'border_width_3', kind: 'variable'},
				{name: 'border_width_4', kind: 'variable'},
				{name: 'border_width_5', kind: 'variable'},
				{name: 'border_width_6', kind: 'variable'},
				{name: 'outline_width', kind: 'variable'},
				{name: 'outline_width_1', kind: 'variable'},
				{name: 'outline_width_2', kind: 'variable'},
				{name: 'outline_width_3', kind: 'variable'},
				{name: 'outline_style', kind: 'variable'},
				{name: 'outline_color', kind: 'variable'},
				{name: 'radius_xl', kind: 'variable'},
				{name: 'radius_lg', kind: 'variable'},
				{name: 'radius_md', kind: 'variable'},
				{name: 'radius_sm', kind: 'variable'},
				{name: 'radius_xs', kind: 'variable'},
				{name: 'radius_xs2', kind: 'variable'},
				{name: 'radius_xs3', kind: 'variable'},
				{name: 'button_bg', kind: 'variable'},
				{name: 'button_bg_hover', kind: 'variable'},
				{name: 'button_bg_active', kind: 'variable'},
				{name: 'button_bg_disabled', kind: 'variable'},
				{name: 'input_bg', kind: 'variable'},
				{name: 'input_padding_y', kind: 'variable'},
				{name: 'input_padding_x', kind: 'variable'},
				{name: 'input_width_min', kind: 'variable'},
				{name: 'input_height', kind: 'variable'},
				{name: 'input_height_sm', kind: 'variable'},
				{name: 'input_height_inner', kind: 'variable'},
				{name: 'shadow_md', kind: 'variable'},
				{name: 'shadow_lg', kind: 'variable'},
				{name: 'shadow_inset_md', kind: 'variable'},
				{name: 'shadow_inset_inverse_md', kind: 'variable'},
				{name: 'icon_size_xs', kind: 'variable'},
				{name: 'icon_size_sm', kind: 'variable'},
				{name: 'icon_size_md', kind: 'variable'},
				{name: 'icon_size_lg', kind: 'variable'},
				{name: 'icon_size_xl', kind: 'variable'},
				{name: 'icon_size_xl2', kind: 'variable'},
				{name: 'icon_size_xl3', kind: 'variable'},
				{name: 'duration_1', kind: 'variable'},
				{name: 'duration_2', kind: 'variable'},
				{name: 'duration_3', kind: 'variable'},
				{name: 'duration_4', kind: 'variable'},
				{name: 'duration_5', kind: 'variable'},
				{name: 'duration_6', kind: 'variable'},
				{name: 'fade_1', kind: 'variable'},
				{name: 'fade_2', kind: 'variable'},
				{name: 'fade_3', kind: 'variable'},
				{name: 'fade_4', kind: 'variable'},
				{name: 'fade_5', kind: 'variable'},
				{name: 'fade_6', kind: 'variable'},
				{name: 'disabled_opacity', kind: 'variable'},
				{name: 'default_variables', kind: 'variable'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
