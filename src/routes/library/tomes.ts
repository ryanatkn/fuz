import type {Tome} from '$lib/tome.js';
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
import Library from '$routes/library/Library/+page.svelte';
import Contextmenu from '$routes/library/Contextmenu/+page.svelte';
import Redirect from '$routes/library/Redirect/+page.svelte';
import Hue_Input from '$routes/library/Hue_Input/+page.svelte';
import Breadcrumb from '$routes/library/Breadcrumb/+page.svelte';
import Card from '$routes/library/Card/+page.svelte';
import logos from '$routes/library/logos/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

export const tomes: Tome[] = [
	{
		name: 'introduction',
		category: 'guide',
		component: introduction,
		related: [],
	},
	{
		name: 'Themed',
		category: 'theming',
		component: Themed,
		related: [],
	},
	{
		name: 'Alert',
		category: 'components',
		component: Alert,
		related: ['Card'],
	},
	{
		name: 'Breadcrumb',
		category: 'components',
		component: Breadcrumb,
		related: ['Redirect'],
	},
	{
		name: 'Card',
		category: 'components',
		component: Card,
		related: ['Alert'],
	},
	{
		name: 'Contextmenu',
		category: 'components',
		component: Contextmenu,
		related: [],
	},
	{
		name: 'Details',
		category: 'components',
		component: Details,
		related: [],
	},
	{
		name: 'Dialog',
		category: 'components',
		component: Dialog,
		related: ['Teleport'],
	},
	{
		name: 'Hue_Input',
		category: 'components',
		component: Hue_Input,
		related: [], // TODO externals?
	},
	{
		name: 'Library',
		category: 'components',
		component: Library,
		related: [],
	},
	{
		name: 'logos',
		category: 'components',
		component: logos,
		related: ['Package_Detail', 'Package_Summary'],
	},
	{
		name: 'Package_Detail',
		category: 'components',
		component: Package_Detail,
		related: ['logos', 'Package_Summary'],
	},
	{
		name: 'Package_Summary',
		category: 'components',
		component: Package_Summary,
		related: ['logos', 'Package_Detail'],
	},
	{
		name: 'Pending_Animation',
		category: 'components',
		component: Pending_Animation,
		related: ['Pending_Button'],
	},
	{
		name: 'Pending_Button',
		category: 'components',
		component: Pending_Button,
		related: ['Pending_Animation'],
	},
	{
		name: 'Redirect',
		category: 'components',
		component: Redirect,
		related: ['Breadcrumb'],
	},
	{
		name: 'Teleport',
		category: 'components',
		component: Teleport,
		related: ['Dialog'],
	},
];
