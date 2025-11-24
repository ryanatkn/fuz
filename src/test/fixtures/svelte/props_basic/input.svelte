<script lang="ts">
	/**
	 * A component with basic typed props.
	 */

	let {
		title,
		count,
	}: {
		/** The title to display */
		title: string;
		/** The count value */
		count: number;
	} = $props();
</script>

<div>
	<h1>{title}</h1>
	<p>Count: {count}</p>
</div>
