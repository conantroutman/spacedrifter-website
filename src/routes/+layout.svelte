<script>
	import Footer from '$lib/Footer.svelte';
	import Logo from '$lib/Logo.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import '../main.css';
</script>

<svelte:head>
	<title>Spacedrifter</title>
</svelte:head>

<div class="container">
	<PageHeader />

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

	main {
		box-sizing: border-box;
		flex: 1;
	}
</style>
