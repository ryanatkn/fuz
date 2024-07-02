<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'introduction';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Fuz is a Svelte UI library that builds on my CSS framework <a
				href="https://moss.ryanatkn.com/">Moss</a
			>. It's in early alpha and there will be many breaking changes. I'm making it to support
			<a href="https://zzz.ryanatkn.com/">Zzz</a>
			and
			<a href="https://www.ryanatkn.com/">my other projects</a> that focus on end-users, so it'll continue
			to grow slowly as I find the time and usecases.
		</p>
		<p>
			These docs are a work in progress - for an overview see
			<a href="https://github.com/ryanatkn/fuz#readme">the readme</a>.
		</p>
		<p>
			The goal is to make a fully-featured Svelte UI library, but it'll take extra time to get
			there. That lets us prioritize patterns like APIs above features in the meantime, making it an
			interesting project for learning and experimentation. Feel free to take the code and ideas for
			your own purposes. If you're interested in using it or helping out, see <a
				href="https://github.com/ryanatkn/fuz/blob/main/contributing.md">contributing.md</a
			>
			and visit
			<a href="https://discord.gg/YU5tyeK72X">the Discord</a>.
		</p>
	</section>
</Tome_Detail>
