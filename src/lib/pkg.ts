import type {Pkg} from '@ryanatkn/belt/pkg.js';

import {create_context} from '$lib/context_helpers.js';

export const pkg_context = create_context<Pkg>(); // TODO BLOCK name conflict
