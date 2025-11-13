/**
 * Function with multiple mutation points.
 *
 * @param config configuration object
 * @param state state object
 * @mutates config - adds defaults for missing fields
 * @mutates state - updates status and timestamp fields
 */
export function initialize(config: any, state: any) {
	config.ready = true;
	state.initialized = Date.now();
}
