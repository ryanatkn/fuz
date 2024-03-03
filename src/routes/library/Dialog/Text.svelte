<script lang="ts">
	// TODO delete?

	interface Props {
		text: string;
		tag?: string;
		font_size?: string | undefined;
		padding?: string | undefined;
	}

	const {text, tag = 'span', font_size, padding} = $props<Props>();
</script>

<svelte:element this={tag} style:font-size={font_size} style:padding>{text}</svelte:element>
