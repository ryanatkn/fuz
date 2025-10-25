/**
 * @vitest-environment jsdom
 */
import {create_shared_positioning_tests} from '$test/contextmenu_test_positioning.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_positioning_tests(Contextmenu_Root, 'Contextmenu_Root');
