<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';
	import {lookup_identifier_by_name} from '$lib/api_data.js';

	const {type}: {type: string} = $props();

	// TODO maybe better name?
</script>

{#if lookup_identifier_by_name(type)}
	<code><Identifier_Link name={type} /></code>
{:else}
	<Code content={type} lang="ts" />
{/if}
