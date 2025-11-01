/**
 * @vitest-environment jsdom
 */
import {vi} from 'vitest';

import {create_shared_positioning_tests} from '$test/contextmenu_test_positioning.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

// ResizeObserver is not currently available in jsdom
class ResizeObserverMock {
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
}
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

create_shared_positioning_tests(Contextmenu_Root, 'Contextmenu_Root');
