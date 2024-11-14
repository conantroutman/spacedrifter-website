<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	$: path = $page.url.pathname;

	interface NavigationLink {
		href: string;
		isExternal?: true;
		hasSubpages?: true;
		label: string;
	}

	const links: NavigationLink[] = [
		{
			href: `${base}/`,
			label: 'Home'
		},
		{
			href: `${base}/music`,
			label: 'Music',
			hasSubpages: true
		},
		{
			href: `${base}/live`,
			label: 'Live'
		},
		{
			href: 'https://spacedrifterband.bandcamp.com/merch',
			isExternal: true,
			label: 'Merch'
		}
	];
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
