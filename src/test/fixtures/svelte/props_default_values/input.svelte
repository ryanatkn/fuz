<script lang="ts">
	let {
		color = 'blue',
		size = 100,
	}: {
		/**
		 * The color to use.
		 * @default "blue"
		 */
		color?: string;
		/**
		 * The size of the component.
		 * @default 100
		 */
		size?: number;
	} = $props();
</script>

<div style="color: {color}; width: {size}px">Content</div>
