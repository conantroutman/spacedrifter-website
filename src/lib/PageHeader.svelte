<script lang="ts">
	import { base } from '$app/paths';
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<header>
	<a href={base} class="logo"><Logo /></a>
	<Navigation />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: sticky;
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		padding: 1rem;
		background: rgba(0, 0, 0, 0.85);
		backdrop-filter: blur(0.5);
	}

	.logo {
		fill: #fff;
		width: 100%;
		max-width: 400px;
		transition: 200ms ease-in-out;
	}
</style>
