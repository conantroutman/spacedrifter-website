<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Section from '$lib/Section.svelte';
	import { gigs } from './data';
	import GigList from './GigList.svelte';
	import SEO from '$lib/SEO.svelte';

	const currentDate = new Date();

	const pastGigs = gigs.filter((gig) => gig.date < currentDate);
	const futureGigs = gigs.filter((gig) => gig.date >= currentDate);
</script>

<SEO title="Spacedrifter - Live" metadescription="Spacedrifter live shows." slug="/live" />

<Section>
	<Container>
		<p class="booking">
			Booking: <a href="mailto:contact@spacedrifter.band">contact@spacedrifter.band</a>
		</p>
	</Container>
</Section>

<GigList data={futureGigs} heading="Future Gigs" bullshitText="Look towards the future!" />
<GigList data={pastGigs} heading="Past Gigs" bullshitText="Blast from the past!" />

<style>
	.booking {
		text-align: center;
	}
</style>
