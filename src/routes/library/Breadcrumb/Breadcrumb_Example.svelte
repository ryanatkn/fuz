<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	interface Props {
		selected_path: string;
	}

	const {selected_path} = $props<Props>();
</script>

<Code
	content={`<Breadcrumb
	path="/a/b/c/d"
	selected_path="${selected_path}"
	base_path="/library/Breadcrumb"	
>
	<span class="size_xl">🔡</span>
	{#snippet separator()}.{/snippet}
</Breadcrumb>`}
/>
<Breadcrumb path="/a/b/c/d" {selected_path} base_path="/library/Breadcrumb">
	<span class="size_xl">🔡</span>
	{#snippet separator()}.{/snippet}
</Breadcrumb>
