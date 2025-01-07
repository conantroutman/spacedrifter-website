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
	import SEO from '$lib/SEO.svelte';

	export let data: PageData;
</script>

<SEO
	title={`Spacedrifter - ${data.name}`}
	metadescription={data.description}
	slug={`/music/${$page.params.album}`}
	albumMetadata={{
		releaseDate: data.releaseDate,
		audio: `https://open.spotify.com/${data.links.spotify}`
	}}
/>

<Container>
	<Breadcrumbs />
	<div class="container">
		<AlbumCover id={$page.params.album} />

		<div class="details">
			<Heading>{data.name}</Heading>
			<div class="release-info">
				<div class="type">{getReleaseTypeName(data.type)}</div>
				<div class="date">
					Release Date: {data.releaseDate.toLocaleDateString(undefined, {
						day: '2-digit',
						month: 'long',
						year: 'numeric'
					})}
				</div>
			</div>
			<TrackList data={data.trackList} />
			<div class="listen">
				<Heading level={2}>Listen</Heading>
				<LinkList data={data.links} />
			</div>
		</div>
	</div>
	<Spotify spotifyLink={data.links.spotify} width="100%" />
</Container>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-lg);
	}

	.type {
		font-weight: 600;
		font-size: 1.2rem;
	}

	.release-info {
		margin-top: var(--spacing-xs);
	}

	.listen {
		margin-top: var(--spacing-lg);
	}

	:global(.listen > h2) {
		margin-bottom: var(--spacing-base);
	}

	@media screen and (max-width: 640px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
