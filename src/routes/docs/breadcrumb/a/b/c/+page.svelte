<script lang="ts">
	import Breadcrumb_Example from '$routes/docs/breadcrumb/Breadcrumb_Example.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
</script>

<Tome_Section>
	<Tome_Section_Header text="Custom paths" />
	<Breadcrumb_Example selected_path="/a/b/c" />
</Tome_Section>
