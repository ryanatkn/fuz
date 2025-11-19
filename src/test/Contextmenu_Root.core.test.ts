/**
 * @vitest-environment jsdom
 */
import {vi} from 'vitest';

import {create_shared_core_tests} from './contextmenu_test_core.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

// ResizeObserver is not currently available in jsdom
class ResizeObserverMock {
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
}
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

create_shared_core_tests(Contextmenu_Root, 'Contextmenu_Root');
