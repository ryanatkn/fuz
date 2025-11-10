/**
 * Function that mutates its argument.
 *
 * @param obj - object to modify
 * @mutates obj - adds processed field
 */
export function process_object(obj: any) {
	obj.processed = true;
	return obj;
}
