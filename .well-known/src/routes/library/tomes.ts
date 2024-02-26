import {init_tome, type Tome} from '$lib/tome.js';
import colors from '$routes/library/colors/+page.svelte';
import buttons from '$routes/library/buttons/+page.svelte';
import forms from '$routes/library/forms/+page.svelte';
import elements from '$routes/library/elements/+page.svelte';
import typography from '$routes/library/typography/+page.svelte';
import themes from '$routes/library/themes/+page.svelte';
import variables from '$routes/library/variables/+page.svelte';
import prose from '$routes/library/prose/+page.svelte';
import Pending_Animation from '$routes/library/Pending_Animation/+page.svelte';
import Pending_Button from '$routes/library/Pending_Button/+page.svelte';
import Package_Summary from '$routes/library/Package_Summary/+page.svelte';
import Package_Detail from '$routes/library/Package_Detail/+page.svelte';
import Dialog from '$routes/library/Dialog/+page.svelte';
import Teleport from '$routes/library/Teleport/+page.svelte';
import Alert from '$routes/library/Alert/+page.svelte';
// import Library from '$routes/library/Library/+page.svelte';
// import menu_item from '$routes/library/menu_item/+page.svelte';
import Contextmenu from '$routes/library/Contextmenu/+page.svelte';
import Redirect from '$routes/library/Redirect/+page.svelte';
import Hue_Input from '$routes/library/Hue_Input/+page.svelte';
import Breadcrumb from '$routes/library/Breadcrumb/+page.svelte';
import Card from '$routes/library/Card/+page.svelte';

export const tomes: Tome[] = [
	{
		name: 'themes',
		slug: 'themes',
		pathname: '',
		category: 'styles',
		component: themes,
		related: ['variables', 'colors', 'typography'],
	},
	{
		name: 'variables',
		slug: 'variables',
		pathname: '',
		category: 'styles',
		component: variables,
		related: ['themes', 'colors', 'typography'],
	},
	{
		name: 'colors',
		slug: 'colors',
		pathname: '',
		category: 'styles',
		component: colors,
		related: ['themes', 'variables', 'buttons'],
	},
	{
		name: 'buttons',
		slug: 'buttons',
		pathname: '',
		category: 'styles',
		component: buttons,
		related: ['colors', 'elements', 'forms', 'prose'],
	},
	{
		name: 'forms',
		slug: 'forms',
		pathname: '',
		category: 'styles',
		component: forms,
		related: ['buttons', 'elements', 'prose', 'Hue_Input'],
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
		related: ['themes', 'variables', 'prose'],
	},
	// TODO maybe? or do styles like this belong elsewhere? classes? problem is we'll have a classes page for the variables
	// {
	// 	name: 'menu item',
	// 	slug: 'menu_item',
	// 	pathname: '',
	// 	category: 'styles',
	// 	component: menu_item,
	// 	related: [],
	// },
	{
		name: 'Alert',
		slug: 'Alert',
		pathname: '',
		category: 'components',
		component: Alert,
		related: ['Card'],
	},
	{
		name: 'Breadcrumb',
		slug: 'Breadcrumb',
		pathname: '',
		category: 'components',
		component: Breadcrumb,
		related: ['Redirect'],
	},
	{
		name: 'Card',
		slug: 'Card',
		pathname: '',
		category: 'components',
		component: Card,
		related: ['Alert'],
	},
	{
		name: 'Contextmenu',
		slug: 'Contextmenu',
		pathname: '',
		category: 'components',
		component: Contextmenu,
		related: [],
	},
	{
		name: 'Dialog',
		slug: 'Dialog',
		pathname: '',
		category: 'components',
		component: Dialog,
		related: ['Teleport'],
	},
	{
		name: 'Hue_Input',
		slug: 'Hue_Input',
		pathname: '',
		category: 'components',
		component: Hue_Input,
		related: ['forms'], // TODO externals?
	},
	// TODO implement
	// {
	// 	name: 'Library',
	// 	slug: 'Library',
	// 	pathname: '',
	// 	category: 'components',
	// 	component: Library,
	// 	related: [],
	// },
	{
		name: 'Package_Detail',
		slug: 'Package_Detail',
		pathname: '',
		category: 'components',
		component: Package_Detail,
		related: ['Package_Summary'],
	},
	{
		name: 'Package_Summary',
		slug: 'Package_Summary',
		pathname: '',
		category: 'components',
		component: Package_Summary,
		related: ['Package_Detail'],
	},
	{
		name: 'Pending_Animation',
		slug: 'Pending_Animation',
		pathname: '',
		category: 'components',
		component: Pending_Animation,
		related: ['Pending_Button'],
	},
	{
		name: 'Pending_Button',
		slug: 'Pending_Button',
		pathname: '',
		category: 'components',
		component: Pending_Button,
		related: ['Pending_Animation'],
	},
	{
		name: 'Redirect',
		slug: 'Redirect',
		pathname: '',
		category: 'components',
		component: Redirect,
		related: ['Breadcrumb'],
	},
	{
		name: 'Teleport',
		slug: 'Teleport',
		pathname: '',
		category: 'components',
		component: Teleport,
		related: ['Dialog'],
	},
];

for (const t of tomes) init_tome(t);
