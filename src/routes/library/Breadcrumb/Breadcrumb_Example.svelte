<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';

	interface Props {
		selected_path: string;
	}

	const {selected_path} = $props<Props>();
</script>

<Breadcrumb path="/a/b/c" {selected_path} base_path="/library/Breadcrumb">
	🔡
	<div slot="separator">.</div>
</Breadcrumb>
