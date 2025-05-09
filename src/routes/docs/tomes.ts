import type {Tome} from '$lib/tome.js';
import introduction from '$routes/docs/introduction/+page.svelte';
import Themed from '$routes/docs/themed/+page.svelte';
import Pending_Animation from '$routes/docs/pending_animation/+page.svelte';
import Pending_Button from '$routes/docs/pending_button/+page.svelte';
import Package_Summary from '$routes/docs/package_summary/+page.svelte';
import Package_Detail from '$routes/docs/package_detail/+page.svelte';
import Details from '$routes/docs/details/+page.svelte';
import Dialog from '$routes/docs/dialog/+page.svelte';
import Teleport from '$routes/docs/teleport/+page.svelte';
import Alert from '$routes/docs/alert/+page.svelte';
import Docs from '$routes/docs/docs/+page.svelte';
import Contextmenu from '$routes/docs/contextmenu/+page.svelte';
import Redirect from '$routes/docs/redirect/+page.svelte';
import Hue_Input from '$routes/docs/hue_input/+page.svelte';
import Breadcrumb from '$routes/docs/breadcrumb/+page.svelte';
import Card from '$routes/docs/card/+page.svelte';
import Svg from '$routes/docs/svg/+page.svelte';
import csp from '$routes/docs/csp/+page.svelte';
import logos from '$routes/docs/logos/+page.svelte';
import theming from '$routes/docs/theming/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

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
		name: 'Docs',
		category: 'components',
		component: Docs,
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
