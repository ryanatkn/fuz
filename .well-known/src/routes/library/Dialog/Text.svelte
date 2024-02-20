<script lang="ts">
	// TODO delete?

	export let text: string;
	export let tag = 'span';
	export let font_size: string | undefined = undefined;
	export let padding: string | undefined = undefined;
</script>

<svelte:element this={tag} style:font-size={font_size} style:padding>{text}</svelte:element>
