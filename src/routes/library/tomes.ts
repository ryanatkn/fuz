import type {Tome} from '$lib/tome.js';
import introduction from '$routes/library/introduction/+page.svelte';
import Themed from '$routes/library/themed/+page.svelte';
import Pending_Animation from '$routes/library/pending_animation/+page.svelte';
import Pending_Button from '$routes/library/pending_button/+page.svelte';
import Package_Summary from '$routes/library/package_summary/+page.svelte';
import Package_Detail from '$routes/library/package_detail/+page.svelte';
import Details from '$routes/library/details/+page.svelte';
import Dialog from '$routes/library/dialog/+page.svelte';
import Teleport from '$routes/library/teleport/+page.svelte';
import Alert from '$routes/library/alert/+page.svelte';
import Library from '$routes/library/library/+page.svelte';
import Contextmenu from '$routes/library/contextmenu/+page.svelte';
import Redirect from '$routes/library/redirect/+page.svelte';
import Hue_Input from '$routes/library/hue_input/+page.svelte';
import Breadcrumb from '$routes/library/breadcrumb/+page.svelte';
import Card from '$routes/library/card/+page.svelte';
import Svg from '$routes/library/svg/+page.svelte';
import csp from '$routes/library/csp/+page.svelte';
import logos from '$routes/library/logos/+page.svelte';
import theming from '$routes/library/theming/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

// TODO @many add `Svg` library entry

export const tomes: Array<Tome> = [
	{
		name: 'introduction',
		category: 'guide',
		component: introduction,
		related: [],
	},
	{
		name: 'theming',
		category: 'guide',
		component: theming,
		related: [],
	},
	{
		name: 'csp',
		category: 'helpers',
		component: csp,
		related: [],
	},
	{
		name: 'logos',
		category: 'helpers',
		component: logos,
		related: ['Package_Detail', 'Package_Summary', 'Svg'],
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
		name: 'Svg',
		category: 'components',
		component: Svg,
		related: ['logos'],
	},
	{
		name: 'Teleport',
		category: 'components',
		component: Teleport,
		related: ['Dialog'],
	},
	{
		name: 'Themed',
		category: 'components',
		component: Themed,
		related: ['theming'],
	},
];
