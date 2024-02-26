import type {Style_Variable} from '$lib/theme.js';

/*

TODO lots of things here to address:

- lots of inconsistencies, like the relationship between base and modified values
	- in some cases the base value is just a value, in other cases it's the "current" value
- going from `_lg` to `_1` is awkward - maybe replace all xs/sm/md/lg with 1/2/3/4
	- issues with this:
		- less semantically meaningful, harder to read/write so you'll have to learn the system
			- 3 won't always be "medium" for each usage because of the lower end values
		- changing the bottom end of the range will cause bad churn (can't just add a new `_xs4`)
		- numbers will get into the double digits

/*

/**
 * These are implicitly the variables for the `base` theme.
 * See also the empty `variables` array of the `base` theme above.
 */
export const default_variables: Style_Variable[] = [
	/*
		colors - eyeballed and intepolated with a spreadsheet,
		a professional designer will have opinions
	*/
	{name: 'hue_a', light: '210', summary: 'blue'},
	{name: 'hue_b', light: '120', summary: 'green'},
	{name: 'hue_c', light: '0', summary: 'red'},
	{name: 'hue_d', light: '260', summary: 'purple'},
	{name: 'hue_e', light: '50', summary: 'yellow'},
	{name: 'hue_f', light: '27', summary: 'brown'},
	{name: 'hue_g', light: '335', summary: 'pink'},
	{name: 'color_a_1', light: 'hsl(var(--hue_a), 65%, 91%)'},
	{name: 'color_a_2', light: 'hsl(var(--hue_a), 62%, 84%)', dark: 'hsl(var(--hue_a), 62%, 87%)'},
	{name: 'color_a_3', light: 'hsl(var(--hue_a), 60%, 73%)', dark: 'hsl(var(--hue_a), 60%, 82%)'},
	{name: 'color_a_4', light: 'hsl(var(--hue_a), 60%, 62%)', dark: 'hsl(var(--hue_a), 60%, 76%)'},
	{name: 'color_a_5', light: 'hsl(var(--hue_a), 55%, 50%)', dark: 'hsl(var(--hue_a), 55%, 70%)'},
	{name: 'color_a_6', light: 'hsl(var(--hue_a), 55%, 40%)', dark: 'hsl(var(--hue_a), 55%, 55%)'},
	{name: 'color_a_7', light: 'hsl(var(--hue_a), 55%, 30%)', dark: 'hsl(var(--hue_a), 55%, 40%)'},
	{name: 'color_a_8', light: 'hsl(var(--hue_a), 55%, 20%)', dark: 'hsl(var(--hue_a), 55%, 25%)'},
	{name: 'color_a_9', light: 'hsl(var(--hue_a), 55%, 10%)'},
	{name: 'color_b_1', light: 'hsl(var(--hue_b), 55%, 90%)'},
	{name: 'color_b_2', light: 'hsl(var(--hue_b), 50%, 77%)', dark: 'hsl(var(--hue_b), 50%, 82%)'},
	{name: 'color_b_3', light: 'hsl(var(--hue_b), 50%, 63%)', dark: 'hsl(var(--hue_b), 50%, 74%)'},
	{name: 'color_b_4', light: 'hsl(var(--hue_b), 50%, 49%)', dark: 'hsl(var(--hue_b), 50%, 66%)'},
	{name: 'color_b_5', light: 'hsl(var(--hue_b), 55%, 36%)', dark: 'hsl(var(--hue_b), 43%, 58%)'},
	{name: 'color_b_6', light: 'hsl(var(--hue_b), 60%, 25%)', dark: 'hsl(var(--hue_b), 51%, 45%)'},
	{name: 'color_b_7', light: 'hsl(var(--hue_b), 65%, 18%)', dark: 'hsl(var(--hue_b), 59%, 33%)'},
	{name: 'color_b_8', light: 'hsl(var(--hue_b), 70%, 12%)', dark: 'hsl(var(--hue_b), 67%, 20%)'},
	{name: 'color_b_9', light: 'hsl(var(--hue_b), 75%, 7%)'},
	{name: 'color_c_1', light: 'hsl(var(--hue_c), 85%, 92%)'},
	{name: 'color_c_2', light: 'hsl(var(--hue_c), 80%, 83%)', dark: 'hsl(var(--hue_c), 81%, 83%)'},
	{name: 'color_c_3', light: 'hsl(var(--hue_c), 75%, 73%)', dark: 'hsl(var(--hue_c), 78%, 74%)'},
	{name: 'color_c_4', light: 'hsl(var(--hue_c), 70%, 63%)', dark: 'hsl(var(--hue_c), 74%, 65%)'},
	{name: 'color_c_5', light: 'hsl(var(--hue_c), 65%, 50%)', dark: 'hsl(var(--hue_c), 70%, 56%)'},
	{name: 'color_c_6', light: 'hsl(var(--hue_c), 65%, 40%)', dark: 'hsl(var(--hue_c), 65%, 45%)'},
	{name: 'color_c_7', light: 'hsl(var(--hue_c), 65%, 30%)', dark: 'hsl(var(--hue_c), 65%, 33%)'},
	{name: 'color_c_8', light: 'hsl(var(--hue_c), 65%, 20%)', dark: 'hsl(var(--hue_c), 65%, 22%)'},
	{name: 'color_c_9', light: 'hsl(var(--hue_c), 65%, 10%)'},
	{name: 'color_d_1', light: 'hsl(var(--hue_d), 50%, 91%)'},
	{name: 'color_d_2', light: 'hsl(var(--hue_d), 50%, 82%)', dark: 'hsl(var(--hue_d), 50%, 86%)'},
	{name: 'color_d_3', light: 'hsl(var(--hue_d), 50%, 72%)', dark: 'hsl(var(--hue_d), 50%, 81%)'},
	{name: 'color_d_4', light: 'hsl(var(--hue_d), 50%, 62%)', dark: 'hsl(var(--hue_d), 50%, 76%)'},
	{name: 'color_d_5', light: 'hsl(var(--hue_d), 50%, 50%)', dark: 'hsl(var(--hue_d), 50%, 70%)'},
	{name: 'color_d_6', light: 'hsl(var(--hue_d), 50%, 40%)', dark: 'hsl(var(--hue_d), 50%, 55%)'},
	{name: 'color_d_7', light: 'hsl(var(--hue_d), 50%, 30%)', dark: 'hsl(var(--hue_d), 50%, 40%)'},
	{name: 'color_d_8', light: 'hsl(var(--hue_d), 50%, 20%)', dark: 'hsl(var(--hue_d), 50%, 25%)'},
	{name: 'color_d_9', light: 'hsl(var(--hue_d), 50%, 10%)'},
	{name: 'color_e_1', light: 'hsl(var(--hue_e), 85%, 91%)'},
	{name: 'color_e_2', light: 'hsl(var(--hue_e), 80%, 79%)', dark: 'hsl(var(--hue_e), 80%, 83%)'},
	{name: 'color_e_3', light: 'hsl(var(--hue_e), 75%, 68%)', dark: 'hsl(var(--hue_e), 75%, 76%)'},
	{name: 'color_e_4', light: 'hsl(var(--hue_e), 70%, 56%)', dark: 'hsl(var(--hue_e), 70%, 69%)'},
	{name: 'color_e_5', light: 'hsl(var(--hue_e), 65%, 42%)', dark: 'hsl(var(--hue_e), 70%, 62%)'},
	{name: 'color_e_6', light: 'hsl(var(--hue_e), 70%, 34%)', dark: 'hsl(var(--hue_e), 70%, 49%)'},
	{name: 'color_e_7', light: 'hsl(var(--hue_e), 75%, 26%)', dark: 'hsl(var(--hue_e), 75%, 36%)'},
	{name: 'color_e_8', light: 'hsl(var(--hue_e), 80%, 18%)', dark: 'hsl(var(--hue_e), 80%, 23%)'},
	{name: 'color_e_9', light: 'hsl(var(--hue_e), 85%, 10%)'},
	{name: 'color_f_1', light: 'hsl(var(--hue_f), 32%, 87%)'},
	{name: 'color_f_2', light: 'hsl(var(--hue_f), 32%, 72%)', dark: 'hsl(var(--hue_f), 32%, 79%)'},
	{name: 'color_f_3', light: 'hsl(var(--hue_f), 32%, 57%)', dark: 'hsl(var(--hue_f), 32%, 72%)'},
	{name: 'color_f_4', light: 'hsl(var(--hue_f), 42%, 41%)', dark: 'hsl(var(--hue_f), 32%, 64%)'},
	{name: 'color_f_5', light: 'hsl(var(--hue_f), 60%, 26%)', dark: 'hsl(var(--hue_f), 30%, 56%)'},
	{name: 'color_f_6', light: 'hsl(var(--hue_f), 65%, 18%)', dark: 'hsl(var(--hue_f), 40%, 44%)'},
	{name: 'color_f_7', light: 'hsl(var(--hue_f), 70%, 14%)', dark: 'hsl(var(--hue_f), 50%, 31%)'},
	{name: 'color_f_8', light: 'hsl(var(--hue_f), 75%, 10%)', dark: 'hsl(var(--hue_f), 70%, 19%)'},
	{name: 'color_f_9', light: 'hsl(var(--hue_f), 80%, 6%)'},
	{name: 'color_g_1', light: 'hsl(var(--hue_g), 72%, 91%)'},
	{name: 'color_g_2', light: 'hsl(var(--hue_g), 72%, 83%)', dark: 'hsl(var(--hue_g), 72%, 86%)'},
	{name: 'color_g_3', light: 'hsl(var(--hue_g), 72%, 74%)', dark: 'hsl(var(--hue_g), 72%, 81%)'},
	{name: 'color_g_4', light: 'hsl(var(--hue_g), 72%, 65%)', dark: 'hsl(var(--hue_g), 72%, 76%)'},
	{name: 'color_g_5', light: 'hsl(var(--hue_g), 72%, 56%)', dark: 'hsl(var(--hue_g), 72%, 70%)'},
	{name: 'color_g_6', light: 'hsl(var(--hue_g), 72%, 44%)', dark: 'hsl(var(--hue_g), 72%, 55%)'},
	{name: 'color_g_7', light: 'hsl(var(--hue_g), 72%, 32%)', dark: 'hsl(var(--hue_g), 72%, 40%)'},
	{name: 'color_g_8', light: 'hsl(var(--hue_g), 72%, 20%)', dark: 'hsl(var(--hue_g), 72%, 25%)'},
	{name: 'color_g_9', light: 'hsl(var(--hue_g), 72%, 10%)'},

	/*
		color variants - using these usually means handling both light and dark mode separately -
		the semantic variants	that handle `color-schema` automatically include `--bg_1` and `--bg_2`
	*/
	{name: 'darken_1', light: '#0000000f', summary: '6%'},
	{name: 'darken_2', light: '#0000001f', summary: '12%'},
	{name: 'darken_3', light: '#00000036', summary: '21%'},
	{name: 'darken_4', light: '#00000052', summary: '32%'},
	{name: 'darken_5', light: '#00000073', summary: '45%'},
	{name: 'darken_6', light: '#000000a6', summary: '65%'},
	{name: 'darken_7', light: '#000000cc', summary: '80%'},
	{name: 'darken_8', light: '#000000e3', summary: '89%'},
	{name: 'darken_9', light: '#000000f5', summary: '96%'},
	{name: 'lighten_1', light: '#ffffff0f', summary: '6%'},
	{name: 'lighten_2', light: '#ffffff1f', summary: '12%'},
	{name: 'lighten_3', light: '#ffffff36', summary: '21%'},
	{name: 'lighten_4', light: '#ffffff52', summary: '32%'},
	{name: 'lighten_5', light: '#ffffff73', summary: '45%'},
	{name: 'lighten_6', light: '#ffffffa6', summary: '65%'},
	{name: 'lighten_7', light: '#ffffffcc', summary: '80%'},
	{name: 'lighten_8', light: '#ffffffe3', summary: '89%'},
	{name: 'lighten_9', light: '#fffffff5', summary: '96%'},

	/* tint colors */
	{name: 'tint_hue', light: 'var(--hue_e)'},
	{name: 'tint_saturation', light: '11%'},

	/* bg colors */
	{
		name: 'bg',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 96%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 6%)',
	},
	{
		name: 'fg',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 6%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 96%)',
	},
	/* these are light or dark with a low alpha, so they nest/stack arbitrarily */
	// TODO these inconsistently don't use tint, unlike bg/fg
	{name: 'bg_1', light: 'var(--lighten_1)', dark: 'var(--darken_1)'},
	{name: 'bg_2', light: 'var(--lighten_2)', dark: 'var(--darken_2)'},
	{name: 'bg_3', light: 'var(--lighten_3)', dark: 'var(--darken_3)'},
	{name: 'bg_4', light: 'var(--lighten_4)', dark: 'var(--darken_4)'},
	{name: 'bg_5', light: 'var(--lighten_5)', dark: 'var(--darken_5)'},
	{name: 'bg_6', light: 'var(--lighten_6)', dark: 'var(--darken_6)'},
	{name: 'bg_7', light: 'var(--lighten_7)', dark: 'var(--darken_7)'},
	{name: 'bg_8', light: 'var(--lighten_8)', dark: 'var(--darken_8)'},
	{name: 'bg_9', light: 'var(--lighten_9)', dark: 'var(--darken_9)'},
	{name: 'bg_10', light: '#fff', dark: '#000'},
	{name: 'fg_1', light: 'var(--darken_1)', dark: 'var(--lighten_1)'},
	{name: 'fg_2', light: 'var(--darken_2)', dark: 'var(--lighten_2)'},
	{name: 'fg_3', light: 'var(--darken_3)', dark: 'var(--lighten_3)'},
	{name: 'fg_4', light: 'var(--darken_4)', dark: 'var(--lighten_4)'},
	{name: 'fg_5', light: 'var(--darken_5)', dark: 'var(--lighten_5)'},
	{name: 'fg_6', light: 'var(--darken_6)', dark: 'var(--lighten_6)'},
	{name: 'fg_7', light: 'var(--darken_7)', dark: 'var(--lighten_7)'},
	{name: 'fg_8', light: 'var(--darken_8)', dark: 'var(--lighten_8)'},
	{name: 'fg_9', light: 'var(--darken_9)', dark: 'var(--lighten_9)'},
	{name: 'fg_10', light: '#000', dark: '#fff'},
	// TODO probably need more variants, 5 total?
	/* text colors don't use alpha because it affects performance too much */
	{name: 'text_color', light: 'var(--text_1)'},
	{
		name: 'text_1',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 16%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 80%)',
	},
	{
		name: 'text_2',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 32%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 65%)',
	},
	{
		name: 'text_3',
		light: 'hsl(var(--tint_hue), var(--tint_saturation), 48%)',
		dark: 'hsl(var(--tint_hue), var(--tint_saturation), 50%)',
	},
	{name: 'text_disabled', light: 'var(--text_3)'},
	{
		name: 'text_active',
		light: 'hsl(var(--hue_a), 55%, 40%);',
		dark: 'hsl(var(--hue_a), 65%, 65%);',
	},

	/* fonts */
	{name: 'line_height', light: 'var(--line_height_5)'},
	{name: 'line_height_1', light: '1'},
	{name: 'line_height_2', light: '1.1'},
	{name: 'line_height_3', light: '1.2'},
	{name: 'line_height_4', light: '1.35'}, // TODO BLOCK xs/sm/md/lg?
	{name: 'line_height_5', light: '1.5'},
	{name: 'line_height_6', light: '1.75'},
	{name: 'line_height_7', light: '2'},
	{
		name: 'font_family',
		light:
			"system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		summary:
			'@source https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/',
	},
	{name: 'font_family_mono', light: "ui-monospace, 'Fira Mono', monospace"},

	/* sizes like font-size */
	{name: 'size_xs', light: '1rem'},
	{name: 'size_sm', light: '1.3rem'},
	{name: 'size_md', light: '1.6rem'},
	{name: 'size_lg', light: '2.04rem'},
	{name: 'size_xl', light: '2.59rem'},
	{name: 'size_2xl', light: '3.29rem'},
	{name: 'size_3xl', light: '4.19rem'},
	{name: 'size_4xl', light: '5.33rem'},
	{name: 'size_5xl', light: '6.78rem'},
	{name: 'size_6xl', light: '8.62rem'},
	{name: 'size_7xl', light: '10.97rem'},
	{name: 'size_8xl', light: '13.95rem'},
	{name: 'size_9xl', light: '17.74rem'},

	/* links */
	{
		name: 'link_color',
		light: 'hsl(var(--hue_a), 61%, 35%)',
		dark: 'hsl(var(--hue_a), 61%, 58%)',
	},
	{name: 'text_decoration', light: 'none'},
	{name: 'text_decoration_hover', light: 'underline'},
	{name: 'text_decoration_selected', light: 'underline'},
	{name: 'link_active', light: 'var(--text_color)'},

	/* spacings, rounded to pixels for the default 16px case */
	{name: 'space_5xs', light: '0.1rem'},
	{name: 'space_4xs', light: '0.2rem'},
	{name: 'space_3xs', light: '0.3rem'},
	{name: 'space_2xs', light: '0.4rem'},
	{name: 'space_xs', light: '0.6rem'},
	{name: 'space_sm', light: '0.8rem'},
	{name: 'space_md', light: '1rem'},
	{name: 'space_lg', light: '1.3rem'},
	{name: 'space_xl', light: '1.6rem'},
	{name: 'space_2xl', light: '2.1rem'},
	{name: 'space_3xl', light: '2.6rem'},
	{name: 'space_4xl', light: '3.3rem'},
	{name: 'space_5xl', light: '4.2rem'},
	{name: 'space_6xl', light: '5.4rem'},
	{name: 'space_7xl', light: '6.9rem'},
	{name: 'space_8xl', light: '8.7rem'},
	{name: 'space_9xl', light: '11.1rem'},
	{name: 'width_md', light: '800px'},
	{name: 'width_sm', light: '320px'},

	/* borders and outlines */
	{name: 'border_color', light: 'var(--border_3)'},
	{
		name: 'border_1',
		light: 'hsl(var(--tint_hue), 60%, 20%, 15%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 85%)',
	},
	{
		name: 'border_2',
		light: 'hsl(var(--tint_hue), 60%, 20%, 25%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 70%)',
	},
	{
		name: 'border_3',
		light: 'hsl(var(--tint_hue), 60%, 20%, 35%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 50%)',
	},
	{
		name: 'border_4',
		light: 'hsl(var(--tint_hue), 60%, 20%, 45%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 40%)',
	},
	{
		name: 'border_5',
		light: 'hsl(var(--tint_hue), 60%, 20%, 60%)',
		dark: 'hsl(var(--tint_hue), 60%, 80%, 30%)',
	},
	{name: 'border_disabled', light: 'var(--border_3)'},
	{name: 'border_width', light: 'var(--border_width_1)'},
	{name: 'border_width_1', light: '1px'},
	{name: 'border_width_2', light: '2px'},
	{name: 'border_width_3', light: '3px'},
	{name: 'border_width_4', light: '4px'},
	{name: 'border_width_5', light: '6px'},
	{name: 'border_width_6', light: '8px'},
	{name: 'border_style', light: 'solid'},
	{name: 'outline_width', light: 'var(--outline_width_1)'},
	{name: 'outline_width_1', light: '0'},
	{name: 'outline_width_2', light: 'var(--border_width_2)'},
	{name: 'outline_width_3', light: 'var(--border_width_1)'},
	{name: 'outline_style', light: 'solid'},
	{name: 'outline_color', light: 'var(--color_a_5)'},

	/* button colors */
	{name: 'button_bg', light: 'var(--fg_1)'},
	{name: 'button_bg_hover', light: 'var(--fg_2)'}, // TODO BLOCK keep these? what about `::before` and `::after` visuals with gradients/animations?
	{name: 'button_bg_active', light: 'var(--bg_3)'},
	{name: 'button_bg_disabled', light: 'transparent'},

	/* inputs */
	{name: 'input_bg', light: 'var(--bg_5)'},
	{name: 'input_padding_y', light: '0'},
	{name: 'input_padding_x', light: 'var(--space_lg)'},
	{name: 'input_width_min', light: '100px'},
	{name: 'input_height', light: 'var(--space_5xl)'},
	{name: 'input_height_sm', light: 'var(--space_4xl)'},
	{
		name: 'input_height_inner',
		light: 'calc(var(--input_height) - 2 * var(--border_width) - 2 * var(--input_padding_y))',
	},

	/* shadows */
	// TODO these shouldn't use tint, use lighten/darken instead,
	// but ideally we'd have a blend mode make the colors right,
	// which would require a pseduo-element,
	// but that's heavier and requires the element to be positioned (I think?)
	{
		name: 'shadow',
		light:
			'2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 6%, 0.28), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 6%, 0.28)',
		dark: '2px 4px 9px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--fade_5)), 2px 14px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--fade_5))',
	},
	{
		name: 'shadow_lg',
		light:
			'2px 6px 14px hsla(var(--tint_hue), var(--tint_saturation), 6%, 0.8), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 6%, 0.8)',
		dark: '2px 6px 18px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--fade_5)), 2px 6px 48px hsla(var(--tint_hue), var(--tint_saturation), 82%, var(--fade_5))',
	},
	{
		name: 'shadow_inset',
		light:
			'2px 2px 4px inset var(--lighten_2), -2px -2px 4px inset var(--darken_2), 4px 4px 6px inset var(--lighten_1), -4px -4px 6px inset var(--darken_1)',
	},
	{
		name: 'shadow_inset_active', // TODO better name? this is the "pressed" version for buttons
		light:
			'2px 2px 4px inset var(--darken_2), -2px -2px 4px inset var(--lighten_2), 4px 4px 6px inset var(--darken_1), -4px -4px 6px inset var(--lighten_1)',
	},

	/* icons */
	/* these decrease by the golden ratio, rounded to the nearest pixel,
	and they're insensitive to font size (`px` not `rem`) */
	{name: 'icon_size', light: 'var(--icon_size_md)'},
	{name: 'icon_size_xs', light: '18px'},
	{name: 'icon_size_sm', light: '32px'},
	{name: 'icon_size_md', light: '48px'},
	{name: 'icon_size_lg', light: '80px'},
	{name: 'icon_size_xl', light: '128px'},
	{name: 'icon_size_2xlxl', light: '196px'},
	{name: 'icon_size_3xlxl', light: '316px'},
	{name: 'icon_size_4xlxl', light: '512px'},

	/* durations */
	{name: 'duration_1', light: '0.08s'},
	{name: 'duration_2', light: '0.2s'},
	{name: 'duration_3', light: '0.5s'},
	{name: 'duration_4', light: '1s'},
	{name: 'duration_5', light: '1.5s'},
	{name: 'duration_6', light: '3s'},

	/* transparencies */
	/* TODO maybe delete these? they do help with standardizing/consistency */
	{name: 'fade_1', light: '86%'},
	{name: 'fade_2', light: '62%'},
	{name: 'fade_3', light: '38%'},
	{name: 'fade_4', light: '24%'},
	{name: 'fade_5', light: '15%'},
	{name: 'fade_6', light: '9%'},
	{name: 'disabled_opacity', light: 'var(--fade_2)'},

	/* border radii */
	// TODO BLOCK hardcoded values
	{name: 'border_radius', light: 'var(--radius_md)'},
	{name: 'radius_md', light: 'calc(var(--input_height) / 2)'},
	{name: 'radius_sm', light: 'calc(var(--radius_md) / 1.618)'},
	{name: 'radius_xs', light: 'calc(var(--radius_sm) / 1.618)'},
	{name: 'radius_2xs', light: 'calc(var(--radius_xs) / 1.618)'},
];
