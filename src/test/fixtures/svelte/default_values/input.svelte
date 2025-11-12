<script lang="ts">
	interface Props {
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
	}

	let {color = 'blue', size = 100}: Props = $props();
</script>

<div style="color: {color}; width: {size}px">Content</div>
