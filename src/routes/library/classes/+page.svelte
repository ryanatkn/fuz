<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import Github_Logo from '$lib/Github_Logo.svelte';
	import {get_tome} from '$lib/tome.js';
	import utility_classes_text from '$lib/utility_classes.css?raw';
	import variable_classes_text from '$lib/variable_classes.css?raw';
	import semantic_classes_text from '$lib/semantic_classes.css?raw';
	import Details from '$lib/Details.svelte';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const utility_classes = [
		'relative|absolute|fixed|sticky|static',
		'overflow_auto|hidden|scroll|clip|visible',
		'overflow_x|y_auto|hidden|scroll|clip|visible',
		'inline|inline_block|block|flex|grid',
		'display_none|contents',
		'flex_1',
		'box',
		'row',
		'wrap',
		'nowrap',
		'float_none|left|right|inline_start|inline_end',
		'text_align_center|right|left|justify',
		'font_weight_100-900',
		'ellipsis',
		'pixelated',
		'radius_0|100',
		'p|pt|pr|pb|pl|px|py_0',
		'm|mt|mr|mb|ml|mx|my_0',
		'm|mx|my_auto',
		'w_0|100',
		'h_0|100',
		'fade_0|100',
	];
	const variable_classes = [
		'font_family_sans|mono',
		'line_height',
		'line_height_1-7',
		'size_xs-xl9',
		'icon_size_xs-xl2',
		'text_1-3',
		'darken|lighten_1-9',
		'bg|fg',
		'bg|fg_1-9',
		'color_darken|lighten_1-9',
		'color_bg|fg',
		'color_bg|fg_1-9',
		'hue_a-g',
		'color_a-g_1 -9',
		'bg_a-g_1-9',
		'border_color_1-5',
		'border_width_1-6',
		'outline_width_1-3',
		'radius_xs3-xl',
		'w|h_xs-xl15',
		'p|pt|pr|pb|pl|px|py_xs5-xl15',
		'm|mt|mr|mb|ml|mx|my_xs5-xl15',
		'gap_xs5-xl15',
		'row|column_gap_xs5-xl15',
		'fade_1-6',
		'shadow',
		'shadow_lg|inset|inset_active',
	];
	const semantic_classes = [
		'prose',
		'selectable',
		'pane',
		'panel',
		'icon_button',
		'plain',
		'menu_item',
		'chevron',
		'chip',
		'formatted',
		'width_sm-lg',
	];

	// TODO extract a `Github_Link` like `Mdn_Link`
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<aside>both the docs and implementation of these need more work</aside>
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
					<div>.{c}</div>
				{/each}
			</div>
		</section>
		<section>
			<h3>Variable classes</h3>
			<div class="classes">
				{#each variable_classes as c}
					<div>.{c}</div>
				{/each}
			</div>
		</section>
		<section>
			<h3>Semantic classes</h3>
			<div class="classes">
				{#each semantic_classes as c}
					<div>.{c}</div>
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
				<p class="source_link">
					<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/utility_classes.css"
						><Github_Logo size="var(--icon_size_xs)" /> <span class="ml_xs">source</span></a
					>
				</p>
				<Code content={utility_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary"
					><span class="font_family_mono">@ryanatkn/fuz/variable_classes.css</span></summary
				>
				<p class="source_link">
					<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/variable_classes.css"
						><Github_Logo size="var(--icon_size_xs)" /> <span class="ml_xs">source</span></a
					>
				</p>
				<Code content={variable_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary"
					><span class="font_family_mono">@ryanatkn/fuz/semantic_classes.css</span></summary
				>
				<p class="source_link">
					<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/semantic_classes.css"
						><Github_Logo size="var(--icon_size_xs)" /> <span class="ml_xs">source</span></a
					>
				</p>
				<Code content={semantic_classes_text} lang="css" />
			</Details>
		</section>
	</div>
</Tome_Detail>

<style>
	.classes {
		font-family: var(--font_family_mono);
	}
	.source_link {
		display: flex;
		margin-bottom: var(--space_lg);
	}
	.source_link a {
		display: flex;
		align-items: center;
	}
</style>
