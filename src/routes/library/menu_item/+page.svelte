<script lang="ts">
	import {swallow} from '@ryanatkn/belt/dom.js';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'menu item';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO this is currently not being displayed

	// TODO `role="menuitem"` ?

	let clicked = 'c';

	const handled = (e: any): boolean => {
		if (e.key === 'Enter' || e.key === ' ') {
			swallow(e);
			return true;
		}
		return false;
	};
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<h3>
			<code>.menu_item</code> CSS class
		</h3>
		<blockquote>This is experimental and may change or be removed.</blockquote>
	</section>
	<section>
		<ul>
			<li role="none">
				<div class="menu_item">
					<div class="content">
						<div class="icon">1</div>
						<div class="title">
							<span class="text"><Code content={`<div class="menu_item">`} /></span>
						</div>
					</div>
				</div>
			</li>
			<li role="none">
				<div class="menu_item">
					<div class="content">
						<div class="icon">2</div>
						<div class="title">
							<span class="text"><Code content={`<div class="menu_item">`} /></span>
						</div>
					</div>
				</div>
			</li>
			<li role="none">
				<div class="menu_item selected">
					<div class="content">
						<div class="icon">3</div>
						<div class="title">
							<span class="text"><Code content={`<div class="menu_item selected">`} /></span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</section>
	<section>
		<ul>
			<li role="none">
				<div
					class="menu_item selectable"
					class:selected={clicked === 'a'}
					tabindex="0"
					role="menuitem"
					on:click={() => (clicked = 'a')}
					on:keypress={(e) => handled(e) && (clicked = 'a')}
				>
					<div class="content">
						<div class="icon">a</div>
						<div class="title">
							<span class="text"
								><Code
									content={`<div class="menu_item selectable${
										clicked === 'a' ? ' selected' : ''
									}">`}
								/></span
							>
						</div>
					</div>
				</div>
			</li>
			<li role="none">
				<div
					class="menu_item selectable"
					class:selected={clicked === 'b'}
					tabindex="0"
					role="menuitem"
					on:click={() => (clicked = 'b')}
					on:keypress={(e) => handled(e) && (clicked = 'b')}
				>
					<div class="content">
						<div class="icon">b</div>
						<div class="title">
							<span class="text"
								><Code
									content={`<div class="menu_item selectable${
										clicked === 'b' ? ' selected' : ''
									}">`}
								/></span
							>
						</div>
					</div>
				</div>
			</li>
			<li role="none">
				<div
					class="menu_item selectable"
					class:selected={clicked === 'c'}
					tabindex="0"
					role="menuitem"
					on:click={() => (clicked = 'c')}
					on:keypress={(e) => handled(e) && (clicked = 'c')}
				>
					<div class="content">
						<div class="icon">c</div>
						<div class="title">
							<span class="text"
								><Code
									content={`<div class="menu_item selectable${
										clicked === 'c' ? ' selected' : ''
									}">`}
								/></span
							>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</section>
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_xl5);
	}
</style>
