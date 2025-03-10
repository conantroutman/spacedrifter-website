<script lang="ts">
	import OpenGraph from './SEO/OpenGraph.svelte';
	import Twitter from './SEO/Twitter.svelte';
	import type { AlbumMetadata } from './SEO/types';

	export let title: string;
	export let metadescription: string;
	export let slug: string;
	export let albumMetadata: AlbumMetadata | undefined = undefined;
	export let noindex: boolean = false;

	const url = `https://spacedrifter.band${slug}`;
	const lang = 'en-US';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content={noindex
			? 'noindex, nofollow'
			: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'}
	/>
	<meta name="url" content={url} />
	<link rel="canonical" href={url} />
</svelte:head>
<OpenGraph {lang} {title} {metadescription} {url} {albumMetadata} />
<Twitter {title} {metadescription} {url} />
