/**
 * @vitest-environment jsdom
 */
import {create_shared_rendering_tests} from '$test/contextmenu_test_rendering.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

create_shared_rendering_tests(Contextmenu_Root, 'Contextmenu_Root');
