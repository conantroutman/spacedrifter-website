<script>
	import BandMembers from '$lib/BandMembers.svelte';
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import Section from '$lib/Section.svelte';
	import NoIndex from '$lib/SEO/NoIndex.svelte';
	import SpotifyEmbed from '$lib/SpotifyEmbed.svelte';
	import Links from './Links.svelte';
	import Logos from './Logos.svelte';
	import Photos from './Photos.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
</script>

<NoIndex />
<PageTitle title="Spacedrifter - EPK" />

<Container>
	<div class="heading">
		<Heading>Spacedrifter Electronic Press Kit</Heading>
	</div>
</Container>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>Bio</Heading>
		</div>
		<article>
			<p>
				Spacedrifter is an alternative rock band from Mariestad, Sweden, formed in 2019. Their sound
				fuses grunge with the raw energy of garage rock, the heavy riffs of stoner rock and the
				trippy vibes of psychedelic rock, featuring rich vocal harmonies and fuzzy guitars.
			</p>
			<p>
				In 2024, Spacedrifter released their first full length album, <strong
					>“When the Colors Fade”</strong
				>, which the band recorded and produced entirely by themselves in their own studio. The
				recording process was a long and arduous journey but the album was finally released in April
				2024.
			</p>
			<p>
				A second full length album is currently in the making and recording started in August 2024,
				this time in the Welfare Sounds studio in Gothenburg. The album is set to be released in
				2025.
			</p>
			<BandMembers />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>Spotify</Heading>
		</div>
		<article>
			<SpotifyEmbed compact={false} />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>Photos</Heading>
		</div>
		<article>
			<Photos />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>Logo</Heading>
		</div>
		<article>
			<Logos />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>Links</Heading>
		</div>
		<Links />
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>Contact</Heading>
		</div>
		<div class="email">
			<a href="mailto:contact@spacedrifter.band"><MailIcon /> contact@spacedirfter.band</a>
		</div>
	</Container>
</Section>

<style>
	article {
	}

	p:first-of-type {
		font-weight: 600;
	}

	p {
		margin-bottom: var(--spacing-md);
		max-width: 85ch;
	}

	.heading {
		margin-top: var(--spacing-lg);
	}

	.section-heading {
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		margin-bottom: var(--spacing-lg);
		padding-bottom: var(--spacing-sm);
	}

	.email a {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}
</style>
