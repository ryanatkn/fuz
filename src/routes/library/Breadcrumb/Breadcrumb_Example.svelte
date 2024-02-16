<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';

	export let selected_path: string;
</script>

<Breadcrumb path="/a/b/c" {selected_path} base_path="/library/Breadcrumb">
	🔡
	<div slot="separator">.</div>
</Breadcrumb>
