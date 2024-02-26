<script lang="ts">
	import Alert from '$lib/Alert.svelte';
</script>

<div class="width_md">
	<Alert status="help">todo</Alert>
	<div>
		<a href="https://github.com/ryanatkn/fuz/issues">github.com/ryanatkn/fuz/issues</a>
	</div>
</div>

<style>
	.width_md {
		margin: auto;
	}
	div {
		padding: var(--space_xl) 0;
		text-align: center;
	}
</style>
