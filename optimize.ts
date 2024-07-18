import {transform} from 'lightningcss';
import {readFileSync} from 'fs';
import {EMPTY_ARRAY} from '@ryanatkn/belt/array.js';

// TODO BLOCK delete unoptimized.css and this module

// TODO BLOCK decide if this should be in moss not fuz

/**
 * Ignores the default prismjs theme.
 */
// export const optimize_moss_css = (matcher = /.+\.css$/): PluginOption => ({
// 	name: 'optimize_moss_css',
// 	enforce: 'pre',
// 	load: (id: string) => {
// 		if (matcher.test(id)) {
const id = process.cwd() + '/unoptimized.css';
console.log(`id`, id);
const transformed = transform({
	code: Buffer.from(readFileSync(id)),
	filename: id,
	visitor: {
		// Declaration(property) {
		// 	console.log(`property`, property);
		// },
		Rule(rule) {
			console.log(`rule`, rule);
			if (rule.type === 'style') {
				// TODO BlOCK this naively just removes single-class rules
				// console.log(`rule.value.selectors`, rule.value.selectors);
				// console.log(`rule.value.declarations`, rule.value.declarations);
				const selector_list = rule.value.selectors;
				console.log(`selector_list`, selector_list);
				if (selector_list.length === 1) {
					const selector = selector_list[0];
					if (selector.length === 1) {
						const selector_component = selector[0];
						console.log(`selector_component`, selector_component);
						if (selector_component.type === 'class') {
							console.log(`selector_component.name`, selector_component.name);
							if (selector_component.name === 'b') {
								return EMPTY_ARRAY;
							}
						}
					}
				}
			}
		},
	},
});
console.log(`transformed`, transformed.code.toString());
