<script lang="ts">
	import Breadcrumb_Example from '$routes/library/Breadcrumb/Breadcrumb_Example.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';
</script>

<Tome_Subheading text="Custom paths" slug="custom-paths" />
<Breadcrumb_Example selected_path="/a/b/c" />
