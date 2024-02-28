export const font_sizes = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'xl2',
	'xl3',
	'xl4',
	'xl5',
	'xl6',
	'xl7',
	'xl8',
	'xl9',
];

// TODO maybe suffix with `_set` and also export the array?
export const font_size_names = font_sizes.map((s) => 'size_' + s);

export const font_size_names_set = new Set(font_size_names);

export const radius_sizes = ['xs3', 'xs2', 'xs', 'sm', 'md', 'lg', 'xl'];
