<script lang="ts">
	import BandcampIcon from './icons/BandcampIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';

	import InstagramIcon from './icons/InstagramIcon.svelte';
	import SpotifyIcon from './icons/SpotifyIcon.svelte';

	export let large: boolean = false;
</script>

<nav>
	<a href="https://instagram.com/spacedrifterband" target="_blank" title="Instagram" class:large>
		<InstagramIcon />
	</a>
	<a href="https://www.facebook.com/spacedrifterband" target="_blank" title="Facebook" class:large>
		<FacebookIcon />
	</a>
	<a href="https://spacedrifterband.bandcamp.com" target="_blank" title="Bandcamp" class:large>
		<BandcampIcon />
	</a>
	<a
		href="https://open.spotify.com/artist/4otyLOpxTJ6VdY0EEfjIcS?si=9JJXwJB1TIq0nZ3a3ey9Qg"
		target="_blank"
		title="Spotify"
		class:large
	>
		<SpotifyIcon />
	</a>
</nav>

<style>
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

	a.large {
		width: 2rem;
	}
</style>
