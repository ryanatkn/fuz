/**
 * API documentation context
 * Provides source metadata and package info for API docs
 */

import type {Pkg} from '@ryanatkn/belt/pkg.js';
import type {Src_Json} from '$lib/src_json.js';
import {create_context} from '$lib/context_helpers.js';

/**
 * API documentation data
 * Wraps Pkg with properly typed src_json
 */
export interface Api {
	pkg: Pkg;
	src_json: Src_Json;
}

export const api_context = create_context<Api>();
