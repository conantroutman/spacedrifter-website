<script lang="ts">
	import type { MusicRelease } from '$lib/data/music';
	import SpotifyLink from '$lib/SpotifyLink.svelte';

	export let data: MusicRelease['links'];
</script>

<ul>
	{#if data.apple}
		<!-- content here -->
	{/if}

	{#if data.bandcamp}
		<!-- content here -->
	{/if}

	{#if data.spotify}
		<SpotifyLink spotifyId={data.spotify}>Spotify</SpotifyLink>
	{/if}

	{#if data.youtube}
		<!-- content here -->
	{/if}
</ul>
