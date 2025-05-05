import type {Package_Meta} from '$lib/package_meta.js';
import {create_context} from '$lib/context_helpers.js';

// TODO either upstream this to Gro or more likely, extract its stuff elsewhere, here or Belt?
export const pkg_context = create_context<Package_Meta>();
