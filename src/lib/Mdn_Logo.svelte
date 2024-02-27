<script lang="ts">
	export let size = 'var(--size, var(--size_md))';
	export let fill = 'var(--color, #000)';
	export let label = 'GitHub icon';
	export let attrs: any = undefined;

	// TODO do something more optimal
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	aria-label={label}
	viewBox="0 0 100 100"
	style:width={size}
	style:height={size}
	fill="none"
	{...attrs}
>
	<path
		d="M42 .2 13.4 92.3H1.7L30.2.2Zm10.4 0v92.1H42V.2Zm40.3 0L64.2 92.3H52.5L81 .2Zm10.4 0v92.1H92.7V.2Z"
		class="logo-m"
		{fill}
	></path>
</svg>
