<script lang="ts">
	export let color_name: string;
</script>

<ul>
	{#each {length: 9} as _, i}
		{@const num = i + 1}
		<li style:--bg_color="var(--color_{color_name}_{num})">
			<div class="color"></div>
			<code>color_{color_name}_{num}</code>
		</li>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
	}
	li {
		display: flex;
		align-items: center;
	}
	.color {
		height: 32px;
		width: 100px;
		background-color: var(--bg_color);
	}
</style>
