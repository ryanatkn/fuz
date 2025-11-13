<script lang="ts">
	// This is intentionally malformed to test error handling
	// Missing Props interface, unusual structure
	let {broken_prop_with_no_type} = $props();
</script>

<div>{broken_prop_with_no_type}</div>
