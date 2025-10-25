/**
 * @vitest-environment jsdom
 */
import {create_shared_link_entry_tests} from '$test/contextmenu_test_link_entries.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_link_entry_tests(Contextmenu_Root, 'Contextmenu_Root');
