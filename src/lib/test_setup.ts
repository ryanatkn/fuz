/**
 * Global test setup for vitest.
 * Polyfills APIs not available in jsdom.
 */

import {vi} from 'vitest';

// Mock ResizeObserver which is not available in jsdom
class ResizeObserverMock {
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
