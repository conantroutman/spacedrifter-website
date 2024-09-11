<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import Section from '$lib/Section.svelte';
	import type { Gig as GigData } from './data';
	import Gig from './Gig.svelte';

	export let data: GigData[];
	export let heading: string;
	export let bullshitText: string;
</script>

{#if data.length}
	<Section>
		<Container>
			<div class="heading">
				<Heading level={2}>{heading}</Heading>
				<p>{bullshitText}</p>
			</div>

			<ul class="gig-list">
				{#each data as gig}
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

	.heading p {
		margin-top: 0.5rem;
	}

	.gig-list {
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		text-transform: uppercase;
	}
</style>
