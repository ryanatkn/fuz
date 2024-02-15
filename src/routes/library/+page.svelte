<script lang="ts">
	import Library from '$lib/Library.svelte';
	import {get_tomes} from '$lib/tome.js';

	const tomes_by_name = get_tomes();

	const tomes = Array.from(tomes_by_name.values());
</script>

<Library {tomes} />
