<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section>
	<Container>
		<Heading centered>Contact</Heading>
		<article>
			<div class="section">
				<p>For booking, questions, fan mail, spam, threats, etc., you can contact us at:</p>
				<a href="mailto:contact@spacedrifter.band">contact@spacedrifter.band</a>
			</div>
			<div class="section">
				<p>You can also shoot us a DM over on Instagram:</p>
				<a href="https://instagram.com/spacedrifterband">@spacedrifterband</a>
			</div>
			<div class="section"><p>Okay?</p></div>
		</article>
	</Container>
</Section>

<style>
	article {
		margin-top: 2rem;
	}

	.section {
		margin-bottom: 1.5rem;
		text-align: center;
	}
</style>
