<script lang="ts">
	import type { AlbumMetadata } from './types';

	export let title: string;
	export let metadescription: string;
	export let url: string;
	export let lang: string;
	export let albumMetadata: AlbumMetadata | undefined = undefined;
</script>

<svelte:head>
	{#if !!albumMetadata}
		<meta name="og:type" content="music.album" />
		<meta name="music.album.release_date" content={albumMetadata.releaseDate.toISOString()} />
		<meta name="og:audio" content={albumMetadata.audio} />
	{:else}
		<meta name="og:type" content="website" />
	{/if}
	<meta name="og:title" content={title} />
	<meta name="og:description" content={metadescription} />
	<meta name="og:url" content={url} />
	<meta name="og:locale" content={lang} />
</svelte:head>
