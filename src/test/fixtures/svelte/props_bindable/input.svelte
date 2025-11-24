<script lang="ts">
	/**
	 * Component with bindable props.
	 */

	let {
		name,
		value = $bindable(),
		checked = $bindable(),
	}: {
		/** Regular prop */
		name: string;
		/** Bindable value prop */
		value: string;
		/** Bindable checked prop */
		checked: boolean;
	} = $props();
</script>

<label>
	{name}:
	<input type="text" bind:value />
	<input type="checkbox" bind:checked />
</label>
