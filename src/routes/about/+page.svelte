<script lang="ts">
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import Package_Detail from '$lib/Package_Detail.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	// TODO standardize
</script>

<main class="width_md">
	<section>
		<header class="box">
			<h1 class="mt_xl4">{pkg.repo_name}</h1>
		</header>
		<Breadcrumb>🧶</Breadcrumb>
	</section>
	<section class="box w_100 mb_lg">
		<div class="panel p_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box">
		<Library_Footer {pkg} />
		<Breadcrumb>🧶</Breadcrumb>
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
