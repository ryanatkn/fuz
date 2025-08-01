<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {resolve} from '$app/paths';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	interface Props {
		selected_path: string;
	}

	const {selected_path}: Props = $props();
</script>

<Code
	content={`<Breadcrumb
	path="/a/b/c/d"
	selected_path="${selected_path}"
	base_path={resolve('/docs/breadcrumb')}
>
	<span class="font_size_xl">🔡</span>
	{#snippet separator()}.{/snippet}
</Breadcrumb>`}
/>
<Breadcrumb path="/a/b/c/d" {selected_path} base_path={resolve('/docs/breadcrumb')}>
	<span class="font_size_xl">🔡</span>
</Breadcrumb>
