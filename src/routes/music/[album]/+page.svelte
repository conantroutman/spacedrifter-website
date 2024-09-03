<script lang="ts">
	import { Spotify } from 'sveltekit-embed';
	import type { PageData } from './$types';
	import Breadcrumbs from './Breadcrumbs.svelte';
	import Container from '$lib/Container.svelte';
	import { getReleaseTypeName } from '$lib/utils';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<Breadcrumbs />

<Container>
	<div class="container">
		<Spotify spotifyLink={data.links.spotify} width="100%" />

		<div class="details">
			<div class="cover">
				<img src={``} alt="" />
			</div>
			<h1>{data.name}</h1>
			<div>{getReleaseTypeName(data.type)}</div>
			<div>
				Release Date: {data.releaseDate.toLocaleDateString(undefined, {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				})}
			</div>
			<div></div>
		</div>
	</div>
</Container>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
</style>
