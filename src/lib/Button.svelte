<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export let href: string;
	export let fullWidth: boolean = false;
	export let width: number | undefined = undefined;
	export let target: HTMLAnchorAttributes['target'] = '_blank';
	export let color: string | undefined = undefined;
	export let download: string | boolean = false;
</script>

<a
	{href}
	class:full-width={fullWidth}
	style:width={width ? `${width}px` : undefined}
	style:--hover-background={color ?? 'var(--wtcf-gradient)'}
	{target}
	{download}><span class="content"><slot /></span></a
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
		position: relative;
		backdrop-filter: blur(5px);
	}

	a:hover,
	a:active {
		outline: none;
		background: var(--hover-background);
		color: #000;
	}

	a:before {
		content: '';
		background-color: transparent;
		/* background-image: url('$lib/assets/noise.svg'); */
		background-repeat: repeat;
		background-size: 182px;
		opacity: 0.12;
		position: absolute;
		inset: 0;
		z-index: -10;
	}

	.full-width {
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
		margin: auto;
		width: fit-content;
	}
</style>
