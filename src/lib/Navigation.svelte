<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<nav>
	<a href="/" class:active={path === '/'}>Home</a>
	<a href="/music" class:active={path.includes('/music')}>Music</a>
	<a href="/live" class:active={path === '/live'}>Live</a>
	<a href="https://spacedrifterband.bandcamp.com/merch" target="_blank">Merch</a>
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
		text-decoration: underline;
		background: var(--wtcf-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
