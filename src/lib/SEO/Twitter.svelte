<script lang="ts">
	export let title: string;
	export let metadescription: string;
	export let url: string;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metadescription} />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:domain" content="spacedrifter.band" />
</svelte:head>
