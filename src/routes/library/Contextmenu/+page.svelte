<script lang="ts">
	import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {create_contextmenu, set_contextmenu, to_contextmenu_params} from '$lib/contextmenu.js';
	import Cat_Contextmenu from '$routes/library/Contextmenu/Cat_Contextmenu.svelte';
	import App_Contextmenu from '$routes/library/Contextmenu/App_Contextmenu.svelte';
	import Home_Contextmenu from '$routes/library/Contextmenu/Home_Contextmenu.svelte';
	import Adventure_Contextmenu from '$routes/library/Contextmenu/Adventure_Contextmenu.svelte';
	import Cat_View from '$routes/library/Contextmenu/Cat_View.svelte';
	import type {Cat, Cat_Position, History_Item} from '$routes/library/Contextmenu/helpers.js';

	const LIBRARY_ITEM_NAME = 'Contextmenu';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO should we make this optional, created by `Contextmenu`?
	// TODO demonstrate custom layout
	const contextmenu = create_contextmenu();
	set_contextmenu(contextmenu);

	// TODO maybe this again
	// const contextmenuError = contextmenu.error;
	// $: if ($contextmenuError) {
	// 	act({type: 'speak', content: '❌ error detected: ' + $contextmenuError});

	const alyssa = 'Alyssa';
	const ben = 'Ben';

	const INITIAL_POSITION: Cat_Position = 'home';
	let alyssa_position: Cat_Position = INITIAL_POSITION;
	let ben_position: Cat_Position = INITIAL_POSITION;

	$: alyssa_icon = alyssa_position === ben_position ? '😺' : '😾';
	$: ben_icon = alyssa_position === ben_position ? '😸' : '😿';

	let alyssa_cat: Cat;
	let ben_cat: Cat;
	$: alyssa_cat = {name: alyssa, icon: alyssa_icon, position: alyssa_position};
	$: ben_cat = {name: ben, icon: ben_icon, position: ben_position};

	let swapped = false;

	// TODO this is weird but `animate:` needs an `each`?
	$: ({home_cats, adventure_cats} = locate_cats([alyssa_cat, ben_cat], swapped));
	const locate_cats = (
		cats: Cat[],
		swapped: boolean,
	): {home_cats: Cat[]; adventure_cats: Cat[]} => {
		const home_cats: Cat[] = [];
		const adventure_cats: Cat[] = [];
		for (const cat of cats) {
			const list = cat.position === 'home' ? home_cats : adventure_cats;
			if (swapped) {
				list.unshift(cat);
			} else {
				list.push(cat);
			}
		}
		return {home_cats, adventure_cats};
	};

	// const cats = [alyssa, ben];
	// TODO use these
	// const catMoods = ['😼', '😾', '😺', '😸', '😻'];

	$: can_reset = alyssa_position !== INITIAL_POSITION || ben_position !== INITIAL_POSITION;

	// reset the tome's state
	const reset = () => {
		alyssa_position = INITIAL_POSITION;
		ben_position = INITIAL_POSITION;
	};

	let show_about_dialog = false;
	const toggle_about_dialog = () => {
		show_about_dialog = !show_about_dialog;
	};

	const act = (item: History_Item): void => {
		switch (item.type) {
			case 'call_cats_adventure': {
				alyssa_position = 'adventure';
				ben_position = 'adventure';
				break;
			}
			case 'call_cats_home': {
				alyssa_position = 'home';
				ben_position = 'home';
				break;
			}
			case 'cat_go_adventure': {
				if (item.name === alyssa) {
					alyssa_position = 'adventure';
				} else if (item.name === ben) {
					ben_position = 'adventure';
				}
				break;
			}
			case 'cat_go_home': {
				if (item.name === alyssa) {
					alyssa_position = 'home';
				} else if (item.name === ben) {
					ben_position = 'home';
				}
				break;
			}
			case 'cat_be_or_do': {
				swapped = !swapped;
				break;
			}
		}
	};

	const [send, receive] = crossfade({
		fallback: (node, _params) => {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 1500,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			};
		},
	});
</script>

<!-- TODO demonstrate usage of a custom `link_component` and `linkProps`  -->
<Contextmenu {contextmenu} />

<Tome_Detail {tome}>
	<div slot="header"><h2>{tome.name}</h2></div>
	<div
		use:contextmenu.action={[
			// params type of the action is `Contextmenu_Action_Params`
			can_reset ? {run: reset, content: 'Reset', icon: '↻'} : null,
			// you can pass multiple items in an array or a single object:
			// simple text action with with a `run` callback and `icon`:
			to_contextmenu_params(App_Contextmenu, {toggle_about_dialog}),
			// you can pass `null` or `undefined` for convenience:
			null,
			undefined,
		]}
	>
		<section>
			<div class="spaced">
				<Code lang="ts" content={`const contextmenu = create_contextmenu();`} />
			</div>
			<Code content={`<Contextmenu {contextmenu} />`} />
		</section>
		<section>
			<div
				class="position home"
				use:contextmenu.action={to_contextmenu_params(Home_Contextmenu, {
					act,
					home_cats,
					adventure_cats,
				})}
			>
				<div class="icon">🏠</div>
				<div class="cats">
					{#each home_cats as { name, icon, position } (name)}
						<div
							class="cat_wrapper"
							in:receive={{key: name}}
							out:send={{key: name}}
							animate:flip
							use:contextmenu.action={to_contextmenu_params(Cat_Contextmenu, {
								act,
								name,
								icon,
								position,
							})}
						>
							<Cat_View {name} {icon} />
						</div>
					{/each}
				</div>
			</div>
			<div
				class="position adventure"
				use:contextmenu.action={to_contextmenu_params(Adventure_Contextmenu, {
					act,
					home_cats,
					adventure_cats,
				})}
			>
				<div class="icon">🌄</div>
				<div class="cats">
					{#each adventure_cats as { name, icon, position } (name)}
						<div
							class="cat_wrapper"
							in:receive={{key: name}}
							out:send={{key: name}}
							animate:flip
							use:contextmenu.action={to_contextmenu_params(Cat_Contextmenu, {
								act,
								name,
								icon,
								position,
							})}
						>
							<Cat_View {name} {icon} />
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>
	<div class="width_md padded_md">
		<div class="prose padded_md panel">
			<h3>Expected behaviors</h3>
			<p>
				The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities
				specific to your app.
				<a href="https://www.felt.dev/docs/guide/user/known-issues">These docs</a> explain why Fuz breaks
				web platform expectations.
			</p>
			<p>
				On touch devices, we detect tap-and-hold (aka longpress) instead of simply overriding the
				web's
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event"
					><code>'contextmenu'</code> event</a
				>
				because iOS does not support this web standard as of July 2023 as described in
				<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">this WebKit bug report</a>. The Fuz
				implementation therefore has hacks that may cause corner case bugs on various devices and
				browsers - for more see
				<a href="https://github.com/ryanatkn/fuz/pull/319">this PR</a>.
			</p>
			<p>
				When you rightclick or longpress, we search for behaviors defined with <code
					>use:contextmenu.action</code
				> starting from the target element up to the root of the DOM tree. If any behaviors are found,
				the Fuz contextmenu opens, with the caveats below. The contextmenu displays the available behaviors
				which you can then activate. If no behaviors are found, the system contextmenu opens.
			</p>
			<h4>Devices with a mouse</h4>
			<ul>
				<li>rightclick opens the Fuz contextmenu and not the system contextmenu</li>
				<li>rightclick on the Fuz contextmenu opens the system contextmenu</li>
				<li>rightclick while holding Shift opens the system contextmenu</li>
				<li>
					keyboard navigation and activation should work similarly to the W3C <a
						href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/">APG menubar pattern</a
					>
				</li>
			</ul>
			<h4>Touch devices</h4>
			<ul>
				<li>longpress opens the Fuz contextmenu and not the system contextmenu</li>
				<li>longpress on the Fuz contextmenu (two longpresses) opens the system contextmenu</li>
				<li>
					double-tap-and-hold (aka tap-then-longpress) opens the system contextmenu or performs
					other default behavior like selecting text - does not work for cases where the first tap
					performs some action on an element, like links - use two longpresses for those cases (this
					may need more design work, possibly adding a different gesture or a contextmenu entry for
					touch devices that triggers the system conextmenu on the next longpress)
				</li>
				<li>a longpress is canceled if you move the touch past a threshold before it triggers</li>
				<li>
					the contextmenu closes if you move past a threshold without lifting the longpress touch
					that opened it
				</li>
				<li>
					gives haptic feedback on open with <a
						href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate"
						><code>navigator.vibrate</code></a
					>
					(may remain broken due to the iOS longpress workaround, see
					<a href="https://github.com/ryanatkn/fuz/pull/319">this PR</a>)
				</li>
			</ul>
		</div>
	</div>
</Tome_Detail>

{#if show_about_dialog}
	<Dialog on:close={() => (show_about_dialog = false)}>
		<div class="pane prose padded_1 box text_align_center">
			<h1>About</h1>
			<blockquote>
				free and open source at<br /><a href="https://github.com/ryanatkn/fuz"
					>github.com/ryanatkn/fuz</a
				>
			</blockquote>
			<code class="padded_md spaced"
				>npm i -D <a href="https://www.npmjs.com/package/@fuz.dev/fuz_contextmenu"
					>@fuz.dev/fuz_contextmenu</a
				></code
			>
			<div class="prose padded_1 box">
				<h2>Color Scheme</h2>
				<Color_Scheme_Input />
				<h2>Theme</h2>
				<Theme_Input />
			</div>
		</div>
	</Dialog>
{/if}

<style>
	section {
		margin-bottom: var(--space_4);
	}
	.position {
		border-radius: var(--border_radius);
		background-color: var(--bg);
		display: flex;
	}
	.position .icon {
		font-size: var(--icon_size_1);
	}
	.cats {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cat_wrapper {
		display: flex;
		flex-direction: column;
		width: 120px;
	}
</style>
