<script lang="ts">
	import BandcampLink from '$lib/BandcampLink.svelte';
	import type { MusicRelease } from '$lib/data/music';
	import SpotifyLink from '$lib/SpotifyLink.svelte';

	export let data: MusicRelease['links'];
</script>

<ul>
	{#if data.apple}
		<!-- content here -->
	{/if}

	{#if data.bandcamp}
		<BandcampLink href={data.bandcamp} fullWidth />
	{/if}

	{#if data.spotify}
		<SpotifyLink spotifyId={data.spotify} fullWidth />
	{/if}

	{#if data.youtube}
		<!-- content here -->
	{/if}
</ul>

<style>
	ul {
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
	}
</style>
