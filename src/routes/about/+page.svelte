<script lang="ts">
	import {get_pkg} from '$routes/pkg.js';
	import Community_Links_Panel from '$lib/Community_Links_Panel.svelte';
	import Package_Detail from '$lib/Package_Detail.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';

	const pkg = get_pkg();

	// TODO standardize
</script>

<main class="width_md">
	<section>
		<header class="box">
			<h1 class="mt_xl4">{pkg.repo_name}</h1>
		</header>
		<Breadcrumb><Fuz_Logo size="32px" /></Breadcrumb>
	</section>
	<Community_Links_Panel />
	<section class="box w_100 mb_lg">
		<div class="panel p_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box mb_xl7">
		<Library_Footer {pkg}>
			<div class="mb_xl5">
				<Breadcrumb><Fuz_Logo size="32px" /></Breadcrumb>
			</div>
		</Library_Footer>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
</style>
