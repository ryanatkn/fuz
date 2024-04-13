<script lang="ts">
	// TODO delete?

	interface Props {
		text: string;
		tag?: string;
		size?: string | undefined;
		padding?: string | undefined;
	}

	const {text, tag = 'span', size, padding}: Props = $props();
</script>

<svelte:element this={tag} style:font-size={size} style:padding>{text}</svelte:element>
