<script>
	import BandMembers from '$lib/BandMembers.svelte';
	import Container from '$lib/Container.svelte';
	import Heading from '$lib/Heading.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import Section from '$lib/Section.svelte';
	import SpotifyEmbed from '$lib/SpotifyEmbed.svelte';
	import Links from './Links.svelte';
	import Logos from './Logos.svelte';
	import Photos from './Photos.svelte';
	import SEO from '$lib/SEO.svelte';
	import Videos from './Videos.svelte';
</script>

<SEO title="Spacedrifter - EPK" metadescription="Spacedrifter EPK." slug="/epk" noindex />

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
				Spacedrifter is the band that will hit you with heavy riffs while simultaneously deliver
				smooth vocal harmonies, resulting in a dynamic soundscape reminiscent of the alternative
				rock bands of the 90’s. With an intense energy, and a raw, psychedelic feel, Spacedrifter
				blurs the line between the aggressive and the colorful in rock music.
			</p>
			<p>
				The live shows take the audience on a journey between aggressive ’in your face’, hard rock,
				and soft, retro, psychedelic rock.
			</p>
			<BandMembers />
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
			<Heading level={2}>Videos</Heading>
		</div>
		<article>
			<Videos />
		</article>
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
			<Heading level={2}>Spotify</Heading>
		</div>
		<article>
			<SpotifyEmbed compact={false} />
		</article>
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
