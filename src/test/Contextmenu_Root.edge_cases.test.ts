/**
 * @vitest-environment jsdom
 */
import {create_shared_edge_case_tests} from '$test/contextmenu_test_edge_cases.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_edge_case_tests(Contextmenu_Root, 'Contextmenu_Root');
