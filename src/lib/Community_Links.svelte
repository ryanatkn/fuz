<script lang="ts">
	interface Props {
		selected?: 'spiderspace.org' | 'webdevladder.net' | 'ryanatkn.com';
	}

	const {selected}: Props = $props();
</script>

<ul>
	<li>
		join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community
	</li>
	<li>
		<a
			rel="me"
			href="https://www.webdevladder.net/"
			class:selected={selected === 'webdevladder.net'}>webdevladder.net</a
		>
		- realworld webdev with TypeScript and Svelte, YouTube channels
		<a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a>
		and
		<a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a
		>{#if selected === 'webdevladder.net'}, you are here{/if}
	</li>
	<li>
		<a rel="me" href="https://www.spiderspace.org/" class:selected={selected === 'spiderspace.org'}
			>spiderspace.org</a
		>
		- nontechnical design videos where we'll make a social website together with
		<a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel
		<a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a
		>{#if selected === 'spiderspace.org'}, you are here{/if}
	</li>
	<li>
		<a rel="me" href="https://www.ryanatkn.com/" class:selected={selected === 'ryanatkn.com'}
			>ryanatkn.com</a
		>
		- my homepage{#if selected === 'ryanatkn.com'}, you are here{/if}
	</li>
	<li>
		GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and
		<a rel="me" href="https://github.com/spiderspace">@spiderspace</a>
	</li>
	<li>
		Mastodon as
		<a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a>
		and
		<a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>
	</li>
	<li>
		@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>,
		<a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and
		<a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a>
	</li>
	<li>
		support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a>
	</li>
</ul>
