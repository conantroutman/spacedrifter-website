<script lang="ts">
	import Button from './Button.svelte';
	import SpotifyIcon from './icons/SpotifyIcon.svelte';

	export let spotifyId: string;
	export let fullWidth: boolean = false;
</script>

<Button href={`https://open.spotify.com/${spotifyId}`} target="_blank" {fullWidth} color="#1ed760"
	><span>Spotify <SpotifyIcon /></span></Button
>

<style>
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	:global(span svg) {
		height: 1.5rem;
	}
</style>
