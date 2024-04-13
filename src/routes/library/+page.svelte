<script lang="ts">
	import Library_Content from '$lib/Library_Content.svelte';
	import {get_tomes} from '$lib/tome.js';
	import {get_pkg} from '$routes/pkg.js';

	const tomes_by_name = get_tomes();

	const tomes = Array.from(tomes_by_name.values());

	const pkg = get_pkg();
</script>

<Library_Content {tomes} {pkg} />
