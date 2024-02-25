<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';

	const LIBRARY_ITEM_NAME = 'buttons';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	let selected_button = 1;
	let selected_deselectable_button = true;

	// TODO probably want to put the buttons in a more consistent format so we can include `disabled` versions of each in a condensed format

	const color_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
</script>

<Tome_Detail {tome}>
	<Code content={`<button>`} />
	<button>button</button>
	<button disabled>disabled button</button>
	<button class="selected">button.selected</button>
	<button class="selected" disabled>disabled button.selected</button>
	<button class="selected deselectable">button.selected.deselectable</button>
	<button class="selected deselectable" disabled>disabled button.selected.deselectable</button>
	<br />

	<section class="prose">
		<h3>colorful buttons</h3>
	</section>
	<br />
	<div class="spaced">
		{#each color_names as c}
			{@const color_name = `color_${c}`}
			<Code content={`<button class="${color_name}">`} />
			<button class={color_name}>.{color_name}</button>
			<button class={color_name} disabled>disabled .{color_name}</button>
			<button class="{color_name} selected">.{color_name}.selected</button>
			<button class="{color_name} selected" disabled>disabled .{color_name}.selected</button>
			<button class="{color_name} selected deselectable">.{color_name}.selected.deselectable</button
			>
			<button class="{color_name} selected deselectable" disabled
				>disabled .{color_name}.selected.deselectable</button
			>
			<br />
		{/each}
	</div>

	<div class="box width_full spaced">
		<Color_Scheme_Input />
	</div>

	<hr />

	<div class="prose">
		<h3>disabled button</h3>
		<section>
			<Code content={`<button disabled>\n\t:|\n</button>`} />
			<button disabled>:|</button>
		</section>
		<section>
			<Code content={`<button disabled>\n\ta bigger disabled button\n</button>`} />
			<button disabled>a bigger disabled button</button>
		</section>
	</div>

	<hr />

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

	<hr />

	<section class="prose">
		<h3><code>.plain</code> and <code>.icon_button</code></h3>
	</section>
	<br />
	<section>
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
		<div class="prose">
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
		<div class="prose">
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
		<div class="prose">
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
</Tome_Detail>
