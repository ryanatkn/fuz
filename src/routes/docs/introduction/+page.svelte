<script lang="ts">
	import Github_Link from '$lib/Github_Link.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import {get_tome_by_name} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'introduction';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		<p>
			Fuz is a Svelte UI library that builds on my CSS framework <a
				href="https://moss.ryanatkn.com/">Moss</a
			>. It's in early alpha and there will be many breaking changes. I'm making it to support
			<a href="https://www.zzz.software/">Zzz</a>
			and
			<a href="https://www.ryanatkn.com/">my other projects</a> that focus on end-users, so it'll continue
			to grow slowly as I find the time and usecases.
		</p>
		<p>
			The goal is to make a fully-featured Svelte UI library, but it'll take extra time to get
			there. That lets us prioritize patterns like APIs above features, making it an interesting
			project for learning and experimentation. If you're interested in using Fuz, helping out, or
			just following along, see <Github_Link path="ryanatkn/fuz/blob/main/contributing.md" />.
		</p>
		<p>
			These docs are a work in progress - for an overview see the
			<Github_Link path="ryanatkn/fuz#readme">readme</Github_Link>.
		</p>
	</section>
</Tome_Content>
