<script lang="ts">
	import {pkg_context} from '$lib/pkg.js';
	import Community_Links_Panel from '$lib/Community_Links_Panel.svelte';
	import Package_Detail from '$lib/Package_Detail.svelte';
	import Docs_Footer from '$lib/Docs_Footer.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Svg from '$lib/Svg.svelte';
	import {fuz_logo} from '$lib/logos.js';
	import {MAIN_HEADER_MARGIN_TOP} from '$lib/constants.js';

	const pkg = pkg_context.get();

	// TODO standardize
</script>

<main class="width_md">
	<section>
		<header class="box">
			<h1 class="mb_xl5" style:margin-top={MAIN_HEADER_MARGIN_TOP}>
				{pkg.repo_name}
			</h1>
		</header>
		<Breadcrumb><Svg data={fuz_logo} size="var(--icon_size_sm)" /></Breadcrumb>
	</section>
	<Community_Links_Panel />
	<section class="box w_100 mb_lg">
		<div class="panel p_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box mb_xl7">
		<Docs_Footer {pkg}>
			<div class="mb_xl5">
				<Breadcrumb><Svg data={fuz_logo} size="var(--icon_size_sm)" /></Breadcrumb>
			</div>
		</Docs_Footer>
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
