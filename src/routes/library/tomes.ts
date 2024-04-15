import {init_tome, type Tome} from '$lib/tome.js';
import introduction from '$routes/library/introduction/+page.svelte';
import Themed from '$routes/library/Themed/+page.svelte';
import Pending_Animation from '$routes/library/Pending_Animation/+page.svelte';
import Pending_Button from '$routes/library/Pending_Button/+page.svelte';
import Package_Summary from '$routes/library/Package_Summary/+page.svelte';
import Package_Detail from '$routes/library/Package_Detail/+page.svelte';
import Details from '$routes/library/Details/+page.svelte';
import Dialog from '$routes/library/Dialog/+page.svelte';
import Teleport from '$routes/library/Teleport/+page.svelte';
import Alert from '$routes/library/Alert/+page.svelte';
// import Library from '$routes/library/Library/+page.svelte';
import Contextmenu from '$routes/library/Contextmenu/+page.svelte';
import Redirect from '$routes/library/Redirect/+page.svelte';
import Hue_Input from '$routes/library/Hue_Input/+page.svelte';
import Breadcrumb from '$routes/library/Breadcrumb/+page.svelte';
import Card from '$routes/library/Card/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

export const tomes: Tome[] = [
	{
		name: 'introduction',
		slug: 'introduction',
		pathname: '',
		category: 'guide',
		component: introduction,
		related: [],
	},
	{
		name: 'Themed',
		slug: 'Themed',
		pathname: '',
		category: 'components',
		component: Themed,
		related: [],
	},
	{
		name: 'Teleport',
		slug: 'Teleport',
		pathname: '',
		category: 'components',
		component: Teleport,
		related: ['Dialog'],
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
		name: 'Pending_Button',
		slug: 'Pending_Button',
		pathname: '',
		category: 'components',
		component: Pending_Button,
		related: ['Pending_Animation'],
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
		name: 'Package_Summary',
		slug: 'Package_Summary',
		pathname: '',
		category: 'components',
		component: Package_Summary,
		related: ['Package_Detail'],
	},
	{
		name: 'Package_Detail',
		slug: 'Package_Detail',
		pathname: '',
		category: 'components',
		component: Package_Detail,
		related: ['Package_Summary'],
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
		name: 'Hue_Input',
		slug: 'Hue_Input',
		pathname: '',
		category: 'components',
		component: Hue_Input,
		related: [], // TODO externals?
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
		name: 'Details',
		slug: 'Details',
		pathname: '',
		category: 'components',
		component: Details,
		related: [],
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
		name: 'Card',
		slug: 'Card',
		pathname: '',
		category: 'components',
		component: Card,
		related: ['Alert'],
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
		name: 'Alert',
		slug: 'Alert',
		pathname: '',
		category: 'components',
		component: Alert,
		related: ['Card'],
	},
];

for (const t of tomes) init_tome(t);
