/**
 * @vitest-environment jsdom
 */
import {create_shared_positioning_tests} from '$test/contextmenu_test_positioning.js';
import Contextmenu_Root_For_Safari_Compatibility from '$lib/Contextmenu_Root_For_Safari_Compatibility.svelte';

create_shared_positioning_tests(
	Contextmenu_Root_For_Safari_Compatibility,
	'Contextmenu_Root_For_Safari_Compatibility',
	{requires_longpress: true},
);
