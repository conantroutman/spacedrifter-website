<script lang="ts">
	import Container from '$lib/Container.svelte';
	import MusicReleases from '$lib/blocks/MusicReleases.svelte';
	import Section from '$lib/Section.svelte';
	import WhenTheColorsFade from '$lib/blocks/WhenTheColorsFade.svelte';
	import SEO from '$lib/SEO.svelte';
	import PhotoCredit from '$lib/PhotoCredit.svelte';
	import BandPhoto from '../lib/assets/photos/_DSC2591.jpg?enhanced';
	import ImageWrapper from '$lib/SEO/ImageWrapper.svelte';
</script>

<SEO
	title="Spacedrifter"
	metadescription="Official website for the Swedish rock and/or roll band Spacedrifter."
	slug="/"
/>

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

<Section noPadding>
	<PhotoCredit credit="Marcus Karppinen">
		<ImageWrapper>
			<enhanced:img src={BandPhoto} alt="Spacedrifter in action" />
		</ImageWrapper>
	</PhotoCredit>
</Section>
