<script lang="ts">
	import { gigs } from './data';
	import GigList from './GigList.svelte';

	const currentDate = new Date();

	const pastGigs = gigs.filter((gig) => gig.date < currentDate);
	const futureGigs = gigs.filter((gig) => gig.date >= currentDate);
</script>

<GigList data={futureGigs} heading="Future Gigs" bullshitText="Look towards the future!" />
<GigList data={pastGigs} heading="Past Gigs" bullshitText="Blast from the past!" />
