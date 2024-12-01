<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import HamburgerButton from './HamburgerButton.svelte';
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';

	let scrollY: number;
	let lastScrollTop = 0;
	let isScrollingDown = false;

	onMount(() => {
		lastScrollTop = document?.documentElement.scrollTop;
	});

	const handleScroll = () => {
		const scrollTopPosition = document.documentElement.scrollTop;

		if (scrollTopPosition > lastScrollTop && !isScrollingDown) {
			isScrollingDown = true;
		} else if (scrollTopPosition < lastScrollTop && isScrollingDown) {
			isScrollingDown = false;
		}

		lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
	};
</script>

<svelte:window bind:scrollY on:scroll={handleScroll} />

<header class:hidden={scrollY > 72 && isScrollingDown}>
	<a href={`${base}/`} class="logo" aria-label="Logo"><Logo /></a>
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
			height: 72px;
			transition: top 200ms ease-in-out;
		}

		header.hidden {
			top: -72px;
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
