<script lang="ts">
	import Tome_Detail from '@fuz.dev/fuz_library/Tome_Detail.svelte';
	import {get_tome} from '@fuz.dev/fuz_library/tome.js';
	import 'prismjs'; // TODO why are these needed? `Code` imports these already - vite config?
	import 'prism-svelte';
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	const LIBRARY_ITEM_NAME = 'buttons';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	let selected_button = 1;
	let selected_deselectable_button = true;
</script>

<Tome_Detail {tome}>
	<section class="prose box">
		<h3>colorful buttons</h3>
	</section>
	<br />
	{#each {length: 7} as _, i}
		<Code content={`<button class="color_${i + 1}">`} />
		<button class="color_{i + 1}">.color_{i + 1}</button>
		<br />
	{/each}

	<hr />

	<div class="box prose">
		<h3>disabled button</h3>
		<Code content={`<button disabled>\n\t:|\n</button>`} />
		<button disabled>:|</button>
		<Code content={`<button disabled>\n\ta bigger disabled button\n</button>`} />
		<button disabled>a bigger disabled button</button>
	</div>

	<hr />

	<div class="box">
		<div class="prose">
			<h3>
				<code>button</code> with CSS class <code>.selected</code>
			</h3>
		</div>
		<section style:margin-bottom="var(--spacing_4)">
			<nav>
				<button class:selected={selected_button === 0} on:click={() => (selected_button = 0)}>
					button 0
				</button>
				<button class:selected={selected_button === 1} on:click={() => (selected_button = 1)}>
					button 1
				</button>
				<button class:selected={selected_button === 2} on:click={() => (selected_button = 2)}>
					button 2
				</button>
			</nav>
		</section>
		<div class="prose">
			<section>
				<Code content={`<button class="selected">...</button>`} />
				<button class="width_full selected">a button with the <code>.selected</code> class</button>
			</section>
			<section>
				<p class="width_sm">
					<code>.selected</code> buttons with the <code>.deselectable</code> class continue to be clickable
					when selected:
				</p>
				<Code content={`<button class="selected deselectable">\n\t...\n</button>`} />
			</section>
			<section>
				<button
					class="width_full deselectable"
					class:selected={selected_deselectable_button}
					on:click={() => (selected_deselectable_button = !selected_deselectable_button)}
					>a <code>.deselectable</code>
					{#if selected_deselectable_button}<code>.selected</code>{:else}unselected{/if} button</button
				>
				<button class="width_full selected deselectable" disabled={true}
					>disabled <code>.deselectable</code> <code>.selected</code></button
				>
			</section>
		</div>
	</div>

	<hr />

	<section class="prose box">
		<h3><code>.plain</code> and <code>.icon_button</code></h3>
	</section>
	<br />
	<section class="box">
		<Code
			content={`<button class="plain">
	+
</button>`}
		/>
		<button class="plain">+</button>
		<br />
		<Code
			content={`<button class="icon_button">
	+
</button>`}
		/>
		<button class="icon_button">+</button>
		<br />
		<Code
			content={`<button class="plain icon_button">
	+
</button>`}
		/>
		<button class="plain icon_button">+</button>
		<br />
		<div class="prose box">
			<h4><code>disabled</code> variants</h4>
		</div>
		<br />
		<Code
			content={`<button class="plain" disabled>
	+
</button>`}
		/>
		<button class="plain" disabled>+</button>
		<br />
		<Code
			content={`<button class="icon_button" disabled>
	+
</button>`}
		/>
		<button class="icon_button" disabled>+</button>
		<br />
		<Code
			content={`<button class="plain icon_button" disabled>
	+
</button>`}
		/>
		<button class="plain icon_button" disabled>+</button>
		<br />
		<div class="prose box">
			<h4><code>.selected</code> variants</h4>
		</div>
		<br />
		<Code
			content={`<button class="plain selected">
	+
</button>`}
		/>
		<button class="plain selected">+</button>
		<br />
		<Code
			content={`<button class="icon_button selected">
	+
</button>`}
		/>
		<button class="icon_button selected">+</button>
		<br />
		<Code
			content={`<button class="plain icon_button selected">
	+
</button>`}
		/>
		<button class="plain icon_button selected">+</button>
		<br />
		<div class="prose box">
			<h4><code>.selected</code> and <code>.deselectable</code> variants</h4>
		</div>
		<br />
		<Code
			content={`<button class="plain selected deselectable">
	+
</button>`}
		/>
		<button class="plain selected deselectable">+</button>
		<br />
		<Code
			content={`<button class="icon_button selected deselectable">
	+
</button>`}
		/>
		<button class="icon_button selected deselectable">+</button>
		<br />
		<Code
			content={`<button class="plain icon_button selected deselectable">
	+
</button>`}
		/>
		<button class="plain icon_button selected deselectable">+</button>
		<br />
	</section>

	<hr />

	<div class="box prose">
		<section>
			<h3>
				<code>.buttonlike</code> CSS class
			</h3>
			<p class="width_sm">
				the <code>.buttonlike</code> class is useful when you want interactive builtin elements to be
				wrapped in a larger clickable area:
			</p>
		</section>
		<section class="padded_md panel">
			<Code content={`<label class="buttonlike">\n\t<input type="checkbox" />...\n</label>`} />
			<label class="buttonlike padded_md row box">
				<input type="checkbox" />
				<div class="padded_sm">this entire thing is buttonlike, not just the checkbox</div>
			</label>
		</section>
		<section class="padded_md panel">
			<Code content={`<label class="buttonlike disabled">...</label>`} />
			<label class="buttonlike padded_md row box disabled">
				<input type="checkbox" disabled />
				<div class="padded_sm">this is a <code>.disabled</code> buttonlike</div>
			</label>
		</section>
		<section class="padded_md panel">
			<Code content={`<div class="buttonlike selected padded_md">...</div>`} />
			<div class="buttonlike selected padded_md">
				<code>.buttonlike</code> with <code>.selected</code>
			</div>
		</section>
		<section class="padded_md panel">
			<Code content={`<div class="buttonlike deselectable selected padded_md">...</div>`} />
			<div class="buttonlike deselectable selected padded_md">
				<code>.buttonlike</code> with <code>.selected</code> and <code>.deselectable</code>
			</div>
		</section>
		<blockquote>TODO: add more <code>deselectable</code> signifiers?</blockquote>
	</div>
</Tome_Detail>