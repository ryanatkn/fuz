/**
 * Runs `fn` in an `$effect`, passing `true` as the `skip` argument for the first `count` runs.
 * It calls `fn` even when skipping so callers can read any dependent signals.
 */
export const effect_skip = (fn: (skip: boolean) => void, count = 1): void => {
	let skip = true;
	let n = 0;
	$effect(() => {
		fn(skip);
		if (skip && ++n >= count) skip = false;
	});
};
