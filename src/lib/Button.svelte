<script lang="ts">
	export let href: string;
	export let fullWidth: boolean = false;
	export let width: number | undefined = undefined;
</script>

<a
	{href}
	class:full-width={fullWidth}
	style={width ? `width: ${width}px` : undefined}
	target="_blank"><slot /></a
>

<style>
	:root {
		--border-width: 1px;
	}

	a {
		font-family: 'Righteous', sans-serif;
		display: block;
		color: white;
		padding: 1rem 2rem;
		text-align: center;
		width: fit-content;
		text-decoration: none;
		box-sizing: border-box;
		outline: var(--border-width) solid #fff;
		outline-offset: calc(-1 * var(--border-width));
	}

	a:hover {
		outline: none;
		background: var(--wtcf-gradient);
		color: #000;
	}

	.full-width {
		width: 100%;
	}
</style>
