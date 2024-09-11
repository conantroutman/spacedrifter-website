<script lang="ts">
	import { Spotify } from 'sveltekit-embed';
	import type { PageData } from './$types';
	import Breadcrumbs from './Breadcrumbs.svelte';
	import Container from '$lib/Container.svelte';
	import { getReleaseTypeName } from '$lib/utils';
	import TrackList from './TrackList.svelte';
	import { page } from '$app/stores';
	import AlbumCover from '$lib/AlbumCover.svelte';
	import LinkList from './LinkList.svelte';
	import Heading from '$lib/Heading.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.name} | Spacedrifter</title>
</svelte:head>

<Container>
	<Breadcrumbs />
	<div class="container">
		<AlbumCover id={$page.params.album} />

		<div class="details">
			<Heading>{data.name}</Heading>
			<div class="type">{getReleaseTypeName(data.type)}</div>
			<div class="date">
				Release Date: {data.releaseDate.toLocaleDateString(undefined, {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				})}
			</div>
			<TrackList data={data.trackList} />
			<LinkList data={data.links} />
		</div>
	</div>
	<Spotify spotifyLink={data.links.spotify} width="100%" />
</Container>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.type {
		font-weight: 600;
		font-size: 1.2rem;
	}
</style>
