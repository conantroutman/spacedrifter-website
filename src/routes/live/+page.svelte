<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import Section from '$lib/Section.svelte';
	import { gigs } from './data';
	import Gig from './Gig.svelte';

	const currentDate = new Date();

	const pastGigs = gigs.filter((gig) => gig.date < currentDate);
	const futureGigs = gigs.filter((gig) => gig.date >= currentDate);
</script>

{#if futureGigs.length}
	<Section>
		<Container>
			<div class="heading">
				<Heading level={2}>Future Gigs</Heading>
				<p>Look towards the future!</p>
			</div>

			<ul class="gig-list">
				{#each futureGigs as gig}
					<Gig {gig} />
				{/each}
			</ul>
		</Container>
	</Section>
{/if}

{#if pastGigs.length}
	<Section>
		<Container>
			<div class="heading">
				<Heading level={2}>Past Gigs</Heading>
				<p>You can't change the past man...</p>
			</div>

			<ul class="gig-list">
				{#each pastGigs as gig}
					<Gig {gig} />
				{/each}
			</ul>
		</Container>
	</Section>
{/if}

<style>
	.heading {
		text-align: center;
		margin-bottom: 4rem;
	}

	.gig-list {
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		text-transform: uppercase;
	}
</style>
