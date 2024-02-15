<script lang="ts">
	import Alert from '$lib/Alert.svelte';
</script>

<div class="width_md">
	<Alert status="help">todo</Alert>
	<div>
		<a href="https://github.com/fuz-dev/fuz/issues">github.com/fuz-dev/fuz/issues</a>
	</div>
</div>

<style>
	.width_md {
		margin: auto;
	}
	div {
		padding: var(--spacing_1) 0;
		text-align: center;
	}
</style>
