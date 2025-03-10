<script>
	import Footer from '$lib/Footer.svelte';
	import MobileNavigation from '$lib/MobileNavigation.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import '../main.css';
</script>

<div class="container">
	<PageHeader />

	<main>
		<slot />
	</main>

	<Footer />

	<MobileNavigation />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		position: relative;
	}

	.container:before {
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

	main {
		box-sizing: border-box;
		flex: 1;
	}
</style>
