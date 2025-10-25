/**
 * @vitest-environment jsdom
 */
import {create_shared_core_tests} from '$test/contextmenu_test_core.js';
import Contextmenu_Root_For_Safari_Compatibility from '$lib/Contextmenu_Root_For_Safari_Compatibility.svelte';

create_shared_core_tests(
	Contextmenu_Root_For_Safari_Compatibility,
	'Contextmenu_Root_For_Safari_Compatibility',
	{requires_longpress: true},
);
