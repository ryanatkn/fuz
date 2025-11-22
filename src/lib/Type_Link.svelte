<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Identifier_Link from './Identifier_Link.svelte';
	import {pkg_context} from './pkg.svelte.js';

	const {type}: {type: string} = $props();

	const pkg = pkg_context.get();

	// TODO is not extensible
	// TODO maybe better name?
</script>

{#if pkg.lookup_identifier(type)}
	<Identifier_Link name={type} />
{:else}
	<Code inline content={type} lang="ts" />
{/if}
