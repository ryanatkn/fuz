import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
import {create_context} from '$lib/context_helpers.js';

export const pkg_context = create_context<Package_Meta>();
