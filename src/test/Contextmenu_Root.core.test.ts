/**
 * @vitest-environment jsdom
 */
import {create_shared_core_tests} from '$test/contextmenu_test_core.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_core_tests(Contextmenu_Root, 'Contextmenu_Root');
