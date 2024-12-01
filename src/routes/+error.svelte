<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import RandomYoutubeVideo from '$lib/RandomYoutubeVideo.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section>
	<Container>
		<Heading>
			{$page.status}
			{$page.error?.message}
		</Heading>

		<div>
			<p>Sorry about that.</p>
			<p>Here's a random Youtube video!</p>
			<RandomYoutubeVideo />
		</div>
	</Container>
</Section>
