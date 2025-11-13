<script lang="ts">
	/**
	 * A component with basic typed props.
	 */

	interface Props {
		/** The title to display */
		title: string;
		/** The count value */
		count: number;
	}

	let {title, count}: Props = $props();
</script>

<div>
	<h1>{title}</h1>
	<p>Count: {count}</p>
</div>
