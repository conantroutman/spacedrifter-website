<script>
	import { base } from '$app/paths';
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section>
	<Container>
		<Heading>Nope</Heading>
		<p>We have no idea what you're looking for, but it ain't here.</p>

		<a href={`${base}/music`}>Go back to Music</a>
	</Container>
</Section>
