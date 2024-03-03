<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import utility_classes_text from '$lib/utility_classes.css?raw';
	import variable_classes_text from '$lib/variable_classes.css?raw';
	import semantic_classes_text from '$lib/semantic_classes.css?raw';
	import Details from '$lib/Details.svelte';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const utility_classes = ['utility'];
	const variable_classes = ['variable'];
	const semantic_classes = ['semantic'];
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<h3>Optional CSS classes</h3>
			<p>Fuz has three optional CSS files with different kinds of classes:</p>
			<Code
				content={`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/fuz/style.css'; // required
	import '@ryanatkn/fuz/theme.css'; // or bring your own
	import '@ryanatkn/fuz/utility_classes.css';
	import '@ryanatkn/fuz/variable_classes.css';
	import '@ryanatkn/fuz/semantic_classes.css';
	// ...`}
			/>
			<p>Utility classes use plain CSS for convenient HTML authoring.</p>
			<p>Variable classes are utility classes based on Fuz style <Tome_Link name="variables" />.</p>
			<p>
				Semantic classes are named groupings of styles that are like the CSS equivalent of Svelte
				components.
			</p>
			<aside>
				With more sophisticated build tooling, these classes could be generated on demand instead of
				distributed as static files, or unused classes could be removed with a Vite plugin.
			</aside>
		</section>
		<section>
			<h3>Utility classes</h3>
			<p>
				Fuz provides an arbitrary set of utility classes for CSS, and defers to CSS in <a
					href="https://svelte.dev/docs/svelte-components#style"
					>Svelte's <code>{'<'}style></code></a
				> for complex and uncommon patterns.
			</p>
			<div class="classes">
				{#each utility_classes as c}
					<div>{c}</div>
				{/each}
			</div>
		</section>
		<section>
			<h3>Variable classes</h3>
			<div class="classes">
				{#each variable_classes as c}
					<div>{c}</div>
				{/each}
			</div>
		</section>
		<section>
			<h3>Semantic classes</h3>
			<div class="classes">
				{#each semantic_classes as c}
					<div>{c}</div>
				{/each}
			</div>
		</section>
		<section>
			<h3>Raw CSS</h3>
			<!-- TODO maybe add a github source link? -->
			<Details>
				<summary slot="summary"
					><span class="font_family_mono">@ryanatkn/fuz/utility_classes.css</span></summary
				>
				<p class="mb_lg">
					<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/utility_classes.css">source</a>
				</p>
				<Code content={utility_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary"
					><span class="font_family_mono">@ryanatkn/fuz/variable_classes.css</span></summary
				>
				<p class="mb_lg">
					<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/variable_classes.css">source</a
					>
				</p>
				<Code content={variable_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary"
					><span class="font_family_mono">@ryanatkn/fuz/semantic_classes.css</span></summary
				>
				<p class="mb_lg">
					<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/semantic_classes.css">source</a
					>
				</p>
				<Code content={semantic_classes_text} lang="css" />
			</Details>
		</section>
	</div>
</Tome_Detail>

<style>
	.classes {
	}
</style>
