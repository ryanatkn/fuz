<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '$lib/utility_classes.css';
	import '$lib/variable_classes.css';
	import '$lib/semantic_classes.css';
	import '$lib/animations.css';
	import '@ryanatkn/fuz_code/prism.css';

	import Themed from '$lib/Themed.svelte';
</script>

<Themed>
	<slot />
</Themed>
