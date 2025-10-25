/**
 * @vitest-environment jsdom
 */
import {create_shared_keyboard_tests} from '$test/contextmenu_test_keyboard.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_keyboard_tests(Contextmenu_Root, 'Contextmenu_Root');
