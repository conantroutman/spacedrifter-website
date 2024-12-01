<script lang="ts">
	import Container from '$lib/Container.svelte';
	import MusicReleases from '$lib/blocks/MusicReleases.svelte';
	import Section from '$lib/Section.svelte';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO title="Spacedrifter - Music" metadescription="Spacedrifter released music." slug="/music" />

<Section>
	<Container>
		<MusicReleases />
	</Container>
</Section>
