import {init_tome, type Tome} from '@fuz.dev/fuz_library/tome.js';

import buttons from '$routes/library/buttons/+page.svelte';
import forms from '$routes/library/forms/+page.svelte';
import elements from '$routes/library/elements/+page.svelte';
import typography from '$routes/library/typography/+page.svelte';
import theme from '$routes/library/theme/+page.svelte';
import variables from '$routes/library/variables/+page.svelte';
import prose from '$routes/library/prose/+page.svelte';
import icon_sizes from '$routes/library/icon_sizes/+page.svelte';

export const tomes: Tome[] = [
	{
		name: 'theme',
		slug: 'theme',
		pathname: '',
		category: 'styles',
		component: theme,
		related: ['icon sizes', 'typography', 'variables'],
	},
	{
		name: 'buttons',
		slug: 'buttons',
		pathname: '',
		category: 'styles',
		component: buttons,
		related: ['forms', 'elements', 'prose'],
	},
	{
		name: 'forms',
		slug: 'forms',
		pathname: '',
		category: 'styles',
		component: forms,
		related: ['buttons', 'elements', 'prose'],
	},
	{
		name: 'elements',
		slug: 'elements',
		pathname: '',
		category: 'styles',
		component: elements,
		related: ['buttons', 'forms', 'prose'],
	},
	{
		name: 'icon sizes',
		slug: 'icon_sizes',
		pathname: '',
		category: 'styles',
		component: icon_sizes,
		related: ['theme', 'typography', 'variables'],
	},
	{
		name: 'prose',
		slug: 'prose',
		pathname: '',
		category: 'styles',
		component: prose,
		related: ['elements', 'forms', 'typography'],
	},
	{
		name: 'typography',
		slug: 'typography',
		pathname: '',
		category: 'styles',
		component: typography,
		related: ['theme', 'icon sizes', 'prose', 'variables'],
	},
	{
		name: 'variables',
		slug: 'variables',
		pathname: '',
		category: 'styles',
		component: variables,
		related: ['theme', 'icon sizes', 'typography'],
	},
];

for (const t of tomes) init_tome(t);
