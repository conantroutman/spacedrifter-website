<script>
	import Container from '$lib/Container.svelte';
	import MusicReleases from '$lib/blocks/MusicReleases.svelte';
	import Section from '$lib/Section.svelte';
	import WhenTheColorsFade from '$lib/blocks/WhenTheColorsFade.svelte';
</script>

<Section swirlBackground backgroundColor="#201a26">
	<Container>
		<WhenTheColorsFade />
	</Container>
</Section>

<Section>
	<Container>
		<MusicReleases />
	</Container>
</Section>
