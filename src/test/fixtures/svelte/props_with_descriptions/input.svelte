<script lang="ts">
	let {
		name,
		age,
		active = true,
	}: {
		/**
		 * The user's full name.
		 * Should be formatted as "First Last".
		 */
		name: string;
		/**
		 * The user's age in years.
		 * Must be a positive integer.
		 */
		age: number;
		/**
		 * Whether the user is active.
		 * Defaults to true if not specified.
		 */
		active?: boolean;
	} = $props();
</script>

<div>
	{name} ({age}) - {active ? 'Active' : 'Inactive'}
</div>
