<script lang="ts">
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

	type Translations = {
		heading: string;
		bio: {
			heading: string;
			text: string;
			members: string;
			instruments: {
				drums: string;
				bass: string;
				guitar: string;
				vocals: string;
			};
		};
		photos: {
			heading: string;
			download: string;
		};
		logo: {
			heading: string;
			download: string;
		};
		videos: {
			heading: string;
		};
		contact: {
			heading: string;
		};
		links: {
			heading: string;
		};
	};

	export let translations: Translations;
</script>

<SEO title="Spacedrifter - EPK" metadescription="Spacedrifter EPK." slug="/epk" noindex />

<Container>
	<div class="heading">
		<Heading>{translations.heading}</Heading>
	</div>
</Container>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>{translations.bio.heading}</Heading>
		</div>
		<article>
			{@html translations.bio.text}
			<h3>{translations.bio.members}</h3>
			<ul>
				<li>
					Adam Hante - {translations.bio.instruments.guitar}, {translations.bio.instruments.vocals}
				</li>
				<li>Isac Löfgren - {translations.bio.instruments.drums}</li>
				<li>John Söderberg - {translations.bio.instruments.guitar}</li>
				<li>
					Olle Söderberg - {translations.bio.instruments.bass}, {translations.bio.instruments
						.vocals}
				</li>
			</ul>
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>{translations.photos.heading}</Heading>
		</div>
		<article>
			<Photos downloadButtonLabel={translations.photos.download} />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>{translations.logo.heading}</Heading>
		</div>
		<article>
			<Logos downloadButtonLabel={translations.logo.download} />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>{translations.videos.heading}</Heading>
		</div>
		<article>
			<Videos />
		</article>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>{translations.contact.heading}</Heading>
		</div>
		<div class="email">
			<a href="mailto:contact@spacedrifter.band"><MailIcon /> contact@spacedirfter.band</a>
		</div>
	</Container>
</Section>

<Section compact>
	<Container>
		<div class="section-heading">
			<Heading level={2}>{translations.links.heading}</Heading>
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
	.heading {
		margin-top: var(--spacing-lg);
	}

	.section-heading {
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		margin-bottom: var(--spacing-lg);
		padding-bottom: var(--spacing-sm);
	}

	:global(article p:first-of-type) {
		font-weight: 600;
	}

	:global(article p) {
		margin-bottom: var(--spacing-md);
		max-width: 85ch;
	}

	article ul {
		list-style: none;
		padding: 0;
	}

	.email a {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}
</style>
