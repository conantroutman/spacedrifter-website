<script lang="ts">
	import { BANDCAMP_URL, FACEBOOK_URL, INSTAGRAM_URL, SPOTIFY_URL } from './constants';
	import BandcampIcon from './icons/BandcampIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';

	import InstagramIcon from './icons/InstagramIcon.svelte';
	import SpotifyIcon from './icons/SpotifyIcon.svelte';

	export let large: boolean = false;
</script>

<nav>
	<a href={INSTAGRAM_URL} target="_blank" title="Instagram" class:large>
		<InstagramIcon />
	</a>
	<a href={FACEBOOK_URL} target="_blank" title="Facebook" class:large>
		<FacebookIcon />
	</a>
	<a href={BANDCAMP_URL} target="_blank" title="Bandcamp" class:large>
		<BandcampIcon />
	</a>
	<a href={SPOTIFY_URL} target="_blank" title="Spotify" class:large>
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
