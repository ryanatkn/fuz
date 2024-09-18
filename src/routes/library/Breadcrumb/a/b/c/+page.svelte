<script lang="ts">
	import Breadcrumb_Example from '$routes/library/Breadcrumb/Breadcrumb_Example.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
</script>

<Tome_Section_Header text="Custom paths" slug="custom-paths" />
<Breadcrumb_Example selected_path="/a/b/c" />
