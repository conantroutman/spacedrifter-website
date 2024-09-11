<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import Section from '$lib/Section.svelte';
	import { gigs } from './data';
	import Gig from './Gig.svelte';
	import GigList from './GigList.svelte';

	const currentDate = new Date();

	const pastGigs = gigs.filter((gig) => gig.date < currentDate);
	const futureGigs = gigs.filter((gig) => gig.date >= currentDate);
</script>

<GigList data={futureGigs} heading="Future Gigs" bullshitText="Look towards the future!" />
<GigList data={pastGigs} heading="Past Gigs" bullshitText="You can't change the past man..." />
