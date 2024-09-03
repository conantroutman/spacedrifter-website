<script lang="ts">
	import BandcampIcon from './icons/BandcampIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import SpotifyIcon from './icons/SpotifyIcon.svelte';
</script>

<footer>
	<nav>
		<a href="https://instagram.com/spacedrifterband" target="_blank">
			<InstagramIcon />
		</a>
		<a href="https://instagram.com/spacedrifterband" target="_blank">
			<FacebookIcon />
		</a>
		<a href="https://spacedrifterband.bandcamp.com" target="_blank">
			<BandcampIcon />
		</a>
		<a
			href="https://open.spotify.com/artist/4otyLOpxTJ6VdY0EEfjIcS?si=9JJXwJB1TIq0nZ3a3ey9Qg"
			target="_blank"
		>
			<SpotifyIcon />
		</a>
	</nav>
</footer>

<style>
	:root {
		--fade-height: 100px;
	}

	footer {
		/* position: fixed; */
		/* z-index: 10; */
		/* bottom: 0; */
		/* left: 0; */
		/* right: 0; */
		padding: 1rem;
		background-color: white;
	}

	footer::before {
		content: '';
		position: absolute;
		width: 100%;
		height: var(--fade-height);
		background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		left: 0;
		right: 0;
		top: -100px;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
	}

	a {
		width: 1.75rem;
		display: block;
		transition: transform 200ms;
	}

	a:hover {
		transform: scale(1.1);
	}
</style>
