<script>
	import Container from '$lib/Container.svelte';
	import MusicReleases from '$lib/blocks/MusicReleases.svelte';
	import Section from '$lib/Section.svelte';
	import SpotifyEmbed from '$lib/SpotifyEmbed.svelte';
	import WhenTheColorsFade from '$lib/blocks/WhenTheColorsFade.svelte';
</script>

<Section>
	<Container>
		<WhenTheColorsFade />
	</Container>
</Section>

<Section>
	<Container>
		<MusicReleases />
	</Container>
</Section>
