<script>
	import { BANDCAMP_URL, FACEBOOK_URL, INSTAGRAM_URL, SPOTIFY_URL } from '$lib/constants';
	import BandcampIcon from '$lib/icons/BandcampIcon.svelte';
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import SpotifyIcon from '$lib/icons/SpotifyIcon.svelte';
</script>

<div class="socials">
	<ul>
		<li>
			<a href={INSTAGRAM_URL} target="_blank"><span><InstagramIcon /> @spacedrifterband</span></a>
		</li>
		<li>
			<a href={FACEBOOK_URL} target="_blank"><span><FacebookIcon /> Spacedrifter</span></a>
		</li>
		<li>
			<a href={BANDCAMP_URL} target="_blank"><span><BandcampIcon /> Spacedrifter</span></a>
		</li>
		<li>
			<a href={SPOTIFY_URL} target="_blank"><span><SpotifyIcon /> Spacedrifter</span></a>
		</li>
	</ul>
</div>

<style>
	.socials {
		font-size: 1.2rem;
	}

	.socials ul {
		list-style: none;
		padding: 0;
	}

	.socials li {
		margin-bottom: 0.125rem;
	}

	.socials a span {
		display: flex;
		flex-direction: row;
	}

	:global(.socials svg) {
		width: 1em;
		margin-right: 0.25em;
	}
</style>
