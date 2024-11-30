<script lang="ts">
	import { links } from '$lib/data/navigation';
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<nav>
	{#each links as { href, isExternal, label, hasSubpages }}
		<a
			{href}
			target={isExternal ? '_blank' : undefined}
			class:active={hasSubpages ? path.includes(href) : path === href}>{label}</a
		>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		font-size: 1.5rem;
		font-family: 'Righteous', sans-serif;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a:hover {
		background: var(--wtcf-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.active {
		background: var(--wtcf-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		position: relative;
	}

	.active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2px;
		height: 2px;
		background: var(--wtcf-gradient);
	}
</style>
