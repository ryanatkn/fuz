/**
 * @vitest-environment jsdom
 */
import {create_shared_nested_tests} from '$test/contextmenu_test_nested.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_nested_tests(Contextmenu_Root, 'Contextmenu_Root');
