import {defineConfig, type PluginOption} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {remove_prism_css} from '@ryanatkn/fuz_code/remove_prism_css_vite_plugin.js';
import {transform} from 'lightningcss';
import {readFileSync} from 'fs';

/**
 * Ignores the default prismjs theme.
 */
// export const optimize_moss_css = (matcher = /.+\.css$/): PluginOption => ({
// 	name: 'optimize_moss_css',
// 	enforce: 'pre',
// 	load: (id: string) => {
// 		if (matcher.test(id)) {
const id = process.cwd();
console.log(`id`, id);
const transformed = transform({
	code: Buffer.from(readFileSync(id)),
	filename: id,
	visitor: {
		Declaration(property) {
			console.log(`property`, property);
		},
	},
});
// 		}
// 	},
// });

export default defineConfig({
	plugins: [sveltekit(), remove_prism_css() /*, optimize_moss_css()*/],
});
