<script lang="ts">
	import { base } from '$app/paths';
	import HamburgerButton from './HamburgerButton.svelte';
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<header>
	<a href={`${base}/`} class="logo"><Logo /></a>
	<div class="container">
		<div class="mobile">
			<HamburgerButton />
		</div>
		<div class="desktop">
			<Navigation />
		</div>
	</div>
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
		padding: 1rem;
		background: var(--background-color);
		backdrop-filter: blur(0.5);
		border-bottom: rgba(255, 255, 255, 0.65) 2px solid;
	}

	header:before {
		content: '';
		background-color: transparent;
		background-image: url('$lib/assets/noise.svg');
		background-repeat: repeat;
		background-size: 182px;
		opacity: 0.12;
		position: absolute;
		inset: 0;
		z-index: -10;
	}

	.logo {
		fill: #fff;
		width: 100%;
		max-width: 400px;
		transition: 200ms ease-in-out;
	}

	.mobile {
		display: none;
	}

	@media only screen and (max-width: 640px) {
		header {
			flex-direction: row;
			justify-content: space-between;
		}

		.logo {
			width: 200px;
		}

		.container {
			position: relative;
		}

		.mobile {
			display: block;
		}

		.desktop {
			display: none;
		}
	}
</style>
