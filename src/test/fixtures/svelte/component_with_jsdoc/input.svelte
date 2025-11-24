<!--
	@component
	A well-documented component with JSDoc.

	This component demonstrates comprehensive documentation.

	@example
	```svelte
	<Component_Jsdoc title="Hello" />
	```
-->

<script lang="ts">
	let {
		title,
	}: {
		title: string;
	} = $props();
</script>

<h1>{title}</h1>
