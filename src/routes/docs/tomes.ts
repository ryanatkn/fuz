import type {Tome} from '$lib/tome.js';
import introduction from '$routes/docs/introduction/+page.svelte';
import Themed from '$routes/docs/Themed/+page.svelte';
import PendingAnimation from '$routes/docs/PendingAnimation/+page.svelte';
import PendingButton from '$routes/docs/PendingButton/+page.svelte';
import PackageSummary from '$routes/docs/PackageSummary/+page.svelte';
import PackageDetail from '$routes/docs/PackageDetail/+page.svelte';
import Details from '$routes/docs/Details/+page.svelte';
import Dialog from '$routes/docs/Dialog/+page.svelte';
import Teleport from '$routes/docs/Teleport/+page.svelte';
import Alert from '$routes/docs/Alert/+page.svelte';
import Docs from '$routes/docs/Docs/+page.svelte';
import Contextmenu from '$routes/docs/Contextmenu/+page.svelte';
import Redirect from '$routes/docs/Redirect/+page.svelte';
import HueInput from '$routes/docs/HueInput/+page.svelte';
import Breadcrumb from '$routes/docs/Breadcrumb/+page.svelte';
import Card from '$routes/docs/Card/+page.svelte';
import Svg from '$routes/docs/Svg/+page.svelte';
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
		related_tomes: ['PackageDetail', 'PackageSummary', 'Svg'],
		related_modules: ['logos.ts'],
		related_identifiers: [],
	},
	{
		name: 'mdz',
		category: 'helpers',
		Component: mdz,
		related_tomes: [],
		related_modules: ['mdz.ts'],
		related_identifiers: ['Mdz', 'mdz_parse', 'MdzNodeView'],
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
		related_identifiers: ['Contextmenu', 'ContextmenuRoot', 'ContextmenuEntry'],
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
		name: 'HueInput',
		category: 'components',
		Component: HueInput,
		related_tomes: [], // TODO externals?
		related_modules: [],
		related_identifiers: ['HueInput'],
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
		name: 'PackageDetail',
		category: 'components',
		Component: PackageDetail,
		related_tomes: ['api', 'logos', 'PackageSummary'],
		related_modules: [],
		related_identifiers: ['PackageDetail'],
	},
	{
		name: 'PackageSummary',
		category: 'components',
		Component: PackageSummary,
		related_tomes: ['api', 'logos', 'PackageDetail'],
		related_modules: [],
		related_identifiers: ['PackageSummary'],
	},
	{
		name: 'PendingAnimation',
		category: 'components',
		Component: PendingAnimation,
		related_tomes: ['PendingButton'],
		related_modules: [],
		related_identifiers: ['PendingAnimation'],
	},
	{
		name: 'PendingButton',
		category: 'components',
		Component: PendingButton,
		related_tomes: ['PendingAnimation'],
		related_modules: [],
		related_identifiers: ['PendingButton'],
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
