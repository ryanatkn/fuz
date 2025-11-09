<script lang="ts">
	import Alert from '$lib/Alert.svelte';
	import Github_Link from '$lib/Github_Link.svelte';
</script>

<div class="width_upto_md m_auto">
	<Alert status="help">todo</Alert>
	<div>
		<Github_Link path="ryanatkn/fuz/issues" />
	</div>
</div>

<style>
	div {
		padding: var(--space_xl) 0;
		text-align: center;
	}
</style>
