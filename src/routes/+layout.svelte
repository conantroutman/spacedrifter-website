<script>
	import Footer from '$lib/Footer.svelte';
	import Logo from '$lib/Logo.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import '../main.css';
</script>

<svelte:head>
	<title>Spacedrifter</title>
</svelte:head>

<div class="container">
	<header>
		<a href="/" class="logo"><Logo /></a>
		<Navigation />
	</header>

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

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
		background-color: white;
	}

	main {
		box-sizing: border-box;
		flex: 1;
	}

	.logo {
		fill: black;
		width: 400px;
	}
</style>
