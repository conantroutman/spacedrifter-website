<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export let href: string;
	export let fullWidth: boolean = false;
	export let width: number | undefined = undefined;
	export let target: HTMLAnchorAttributes['target'] = '_blank';
	export let color: string | undefined = undefined;
</script>

<a
	{href}
	class:full-width={fullWidth}
	style:width={width ? `${width}px` : undefined}
	style:--hover-background={color ?? 'var(--wtcf-gradient)'}
	{target}><slot /></a
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
		background-color: rgba(255, 255, 255, 0.05);
	}

	a:hover,
	a:active {
		outline: none;
		background: var(--hover-background);
		color: #000;
	}

	.full-width {
		width: 100%;
	}
</style>
