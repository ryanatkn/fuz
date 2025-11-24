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
import api from '$routes/docs/api/+page.svelte';
import intersect from '$routes/docs/intersect/+page.svelte';
import mdz from '$routes/docs/mdz/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

// TODO consider with auto-discovery and exported metadata per-component

// TODO maybe decouple related links from Tome to get bidirectionality for free

export const tomes: Array<Tome> = [
	{
		name: 'introduction',
		category: 'guide',
		Component: introduction,
		related_tomes: ['api'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'theming',
		category: 'guide',
		Component: theming,
		related_tomes: ['Themed'],
		related_modules: ['themer.svelte.ts'],
		related_identifiers: ['Themed', 'Themer'],
	},
	{
		name: 'api',
		category: 'guide',
		Component: api,
		related_tomes: [],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'csp',
		category: 'helpers',
		Component: csp,
		related_tomes: [],
		related_modules: ['csp.ts'],
		related_identifiers: [],
	},
	{
		name: 'intersect',
		category: 'helpers',
		Component: intersect,
		related_tomes: [],
		related_modules: ['intersect.svelte.ts'],
		related_identifiers: [],
	},
	{
		name: 'logos',
		category: 'helpers',
		Component: logos,
		related_tomes: ['Package_Detail', 'Package_Summary', 'Svg'],
		related_modules: ['logos.ts'],
		related_identifiers: [],
	},
	{
		name: 'mdz',
		category: 'helpers',
		Component: mdz,
		related_tomes: [],
		related_modules: ['mdz.ts'],
		related_identifiers: ['Mdz', 'mdz_parse', 'Mdz_Node_View'],
	},
	{
		name: 'Alert',
		category: 'components',
		Component: Alert,
		related_tomes: ['Card'],
		related_modules: [],
		related_identifiers: ['Alert'],
	},
	{
		name: 'Breadcrumb',
		category: 'components',
		Component: Breadcrumb,
		related_tomes: ['Redirect'],
		related_modules: [],
		related_identifiers: ['Breadcrumb'],
	},
	{
		name: 'Card',
		category: 'components',
		Component: Card,
		related_tomes: ['Alert'],
		related_modules: [],
		related_identifiers: ['Card'],
	},
	{
		name: 'Contextmenu',
		category: 'components',
		Component: Contextmenu,
		related_tomes: [],
		related_modules: ['contextmenu_helpers.ts', 'contextmenu_state.svelte.ts'],
		related_identifiers: ['Contextmenu', 'Contextmenu_Root', 'Contextmenu_Entry'],
	},
	{
		name: 'Details',
		category: 'components',
		Component: Details,
		related_tomes: [],
		related_modules: [],
		related_identifiers: ['Details'],
	},
	{
		name: 'Dialog',
		category: 'components',
		Component: Dialog,
		related_tomes: ['Teleport'],
		related_modules: ['dialog.ts'],
		related_identifiers: ['Dialog', 'Dialogs'],
	},
	{
		name: 'Hue_Input',
		category: 'components',
		Component: Hue_Input,
		related_tomes: [], // TODO externals?
		related_modules: [],
		related_identifiers: ['Hue_Input'],
	},
	{
		name: 'Docs',
		category: 'components',
		Component: Docs,
		related_tomes: [],
		related_modules: [],
		related_identifiers: ['Docs'],
	},
	{
		name: 'Package_Detail',
		category: 'components',
		Component: Package_Detail,
		related_tomes: ['api', 'logos', 'Package_Summary'],
		related_modules: [],
		related_identifiers: ['Package_Detail'],
	},
	{
		name: 'Package_Summary',
		category: 'components',
		Component: Package_Summary,
		related_tomes: ['api', 'logos', 'Package_Detail'],
		related_modules: [],
		related_identifiers: ['Package_Summary'],
	},
	{
		name: 'Pending_Animation',
		category: 'components',
		Component: Pending_Animation,
		related_tomes: ['Pending_Button'],
		related_modules: [],
		related_identifiers: ['Pending_Animation'],
	},
	{
		name: 'Pending_Button',
		category: 'components',
		Component: Pending_Button,
		related_tomes: ['Pending_Animation'],
		related_modules: [],
		related_identifiers: ['Pending_Button'],
	},
	{
		name: 'Redirect',
		category: 'components',
		Component: Redirect,
		related_tomes: ['Breadcrumb'],
		related_modules: [],
		related_identifiers: ['Redirect'],
	},
	{
		name: 'Svg',
		category: 'components',
		Component: Svg,
		related_tomes: ['logos'],
		related_modules: [],
		related_identifiers: ['Svg'],
	},
	{
		name: 'Teleport',
		category: 'components',
		Component: Teleport,
		related_tomes: ['Dialog'],
		related_modules: [],
		related_identifiers: ['Teleport'],
	},
	{
		name: 'Themed',
		category: 'components',
		Component: Themed,
		related_tomes: ['theming'],
		related_modules: [],
		related_identifiers: ['Themed'],
	},
];
