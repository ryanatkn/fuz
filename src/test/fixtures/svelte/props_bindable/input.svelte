<script lang="ts">
	/**
	 * Component with bindable props.
	 */

	interface Props {
		/** Regular prop */
		name: string;
		/** Bindable value prop */
		value: string;
		/** Bindable checked prop */
		checked: boolean;
	}

	let {name, value = $bindable(), checked = $bindable()}: Props = $props();
</script>

<label>
	{name}:
	<input type="text" bind:value />
	<input type="checkbox" bind:checked />
</label>
