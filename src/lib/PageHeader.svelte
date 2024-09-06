<script lang="ts">
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';

	const SCROLL_THRESHOLD = 10;

	let scrollY: number;

	$: console.log(scrollY);
</script>

<svelte:window bind:scrollY />

<header>
	<a href="/" class="logo" class:scrolled={scrollY > SCROLL_THRESHOLD}><Logo /></a>
	<Navigation />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		padding: 1rem;
		background: #000;
	}

	.logo {
		fill: #fff;
		width: 400px;
		transition: 200ms ease-in-out;
	}

	.scrolled {
		width: 200px;
	}
</style>
