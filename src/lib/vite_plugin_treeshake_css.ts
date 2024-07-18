import type {PluginOption} from 'vite';
import {transform} from 'lightningcss';
import {readFileSync} from 'fs';
import {EMPTY_ARRAY} from '@ryanatkn/belt/array.js';
import {cyan, green, magenta} from '@ryanatkn/belt/styletext.js';

// TODO BLOCK delete unoptimized.css and this module

// TODO BLOCK decide if this should be in fuz, moss, or a new repo

export interface Treeshake_Css_Options {
	matcher?: RegExp;
}

// TODO BLOCK expect:
/*

.panel preserved via `Alert.svelte`

.mb_xl4 preserved via `Code.svelte` (added directly in a hack)
.inline preserved via `Code.svelte` (a false-positive but ok, delete the above once we see it)

*/

// TODO BLOCK remove
const skipped = (id: string) => {
	return (
		((id.includes('/node_modules/') && !id.includes('/node_modules/@ryanatkn/')) ||
			id.includes('/.svelte-kit/') ||
			id.includes('vite/') ||
			id.includes('virtual:')) &&
		!id.includes('.css')
	);
};

/**
 * Ignores the default prismjs theme.
 */
export const treeshake_css = ({matcher = /.+\.css$/}: Treeshake_Css_Options = {}): PluginOption => {
	const collected_classes: Set<string> = new Set();
	return [
		{
			name: 'optimize_moss_css_TEST1',
			enforce: 'pre',
			load: (id: string) => {
				if (skipped(id)) return;
				console.log(green(`pre id`), id);
				// if (matcher.test(id))
			},
		},
		{
			name: 'optimize_moss_css_TEST2',
			load: (id: string) => {
				if (skipped(id)) return;
				console.log(magenta(`mid id`), id);
				// if (matcher.test(id))
			},
		},
		{
			name: 'optimize_moss_css_TEST3',
			enforce: 'post',
			load: (id: string) => {
				if (skipped(id)) return;
				console.log(cyan(`post id`), id);
				// if (matcher.test(id))
			},
		},
		// {
		// 	name: 'optimize_moss_css',
		// 	enforce: 'pre',
		// 	load: (id: string) => {
		// 		if (matcher.test(id)) {
		// 			console.log(`id`, id);
		// 			const transformed = transform({
		// 				code: Buffer.from(readFileSync(id)),
		// 				filename: id, // TODO BLOCK maybe don't do this?
		// 				visitor: {
		// 					// Declaration(property) {
		// 					// 	console.log(`property`, property);
		// 					// },
		// 					Rule(rule) {
		// 						// console.log(`rule`, rule);
		// 						if (rule.type === 'style') {
		// 							// TODO BlOCK this naively just removes single-class rules
		// 							// console.log(`rule.value.selectors`, rule.value.selectors);
		// 							// console.log(`rule.value.declarations`, rule.value.declarations);
		// 							const selector_list = rule.value.selectors;
		// 							// console.log(`selector_list`, selector_list);
		// 							if (selector_list.length === 1) {
		// 								const selector = selector_list[0];
		// 								if (selector.length === 1) {
		// 									const selector_component = selector[0];
		// 									// console.log(`selector_component`, selector_component);
		// 									if (selector_component.type === 'class') {
		// 										// console.log(`selector_component.name`, selector_component.name);
		// 										if (selector_component.name === 'b') {
		// 											return EMPTY_ARRAY; // TODO better way to do this? `null` and `undefined` and `{}` don't work
		// 										}
		// 									}
		// 								}
		// 							}
		// 						}
		// 						return undefined;
		// 					},
		// 				},
		// 			});
		// 			console.log(`transformed.code.toString()`, transformed.code.toString());
		// 			// return transformed.code.toString();
		// 		}
		// 	},
		// },
	];
};
