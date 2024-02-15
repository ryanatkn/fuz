<script lang="ts">
	// TODO BLOCK delete?

	export let text: string;
	export let tag = 'span';
	export let fontSize: string | undefined = undefined;
	export let padding: string | undefined = undefined;
</script>

<svelte:element this={tag} style:font-size={fontSize} style:padding>{text}</svelte:element>
