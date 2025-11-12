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
	interface Props {
		title: string;
	}

	let {title}: Props = $props();
</script>

<h1>{title}</h1>
