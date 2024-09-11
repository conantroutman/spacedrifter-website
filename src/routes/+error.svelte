<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import RandomYoutubeVideo from '$lib/RandomYoutubeVideo.svelte';
</script>

<Container>
	<Heading>
		{$page.status}
		{$page.error?.message}
	</Heading>

	<p>Sorry about that.</p>
	<p>Here's a random Youtube video!</p>
	<RandomYoutubeVideo />
</Container>
