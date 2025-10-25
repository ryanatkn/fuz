/**
 * @vitest-environment jsdom
 */
import {create_shared_scoped_tests} from '$test/contextmenu_test_scoped.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_scoped_tests(Contextmenu_Root, 'Contextmenu_Root');
