<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. I there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal` with `@ryanatkn/fuz_code` and `prismjs`.
	import Prism from 'prismjs';
	Prism;
	import Code from '@ryanatkn/fuz_code/Code.svelte';

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
