import { gigs, type Gig } from '$lib/data/gigs';
import type { IconType } from '$lib/icons/types';

type LinkItem = {
	label: string;
	url: string;
	icon?: IconType;
};

export async function load(): Promise<{ links: LinkItem[] }> {
	const gigLinks: LinkItem[] = [];

	const futureGigs = gigs.filter((gig) => gig.link !== undefined && gig.date > new Date());

	for (const gig of futureGigs) {
		const url = gig.link!.href;

		gigLinks.push({
			label: formatGigLabel(gig),
			url
		});
	}

	return {
		links: [
			...gigLinks,
			{
				label: 'Spotify',
				url: 'https://open.spotify.com/artist/4otyLOpxTJ6VdY0EEfjIcS?si=te8TmH6aQbyH-2qIB7gvSA',
				icon: 'spotify'
			},
			{
				label: 'Bandcamp',
				url: 'https://spacedrifterband.bandcamp.com/',
				icon: 'bandcamp'
			},
			{
				label: 'Merch',
				url: 'https://spacedrifterband.bandcamp.com/merch',
				icon: 'merch'
			},
			{
				label: 'Instagram',
				url: 'https://www.instagram.com/spacedrifterband/',
				icon: 'instagram'
			},
			{
				label: 'Facebook',
				url: 'https://www.facebook.com/spacedrifterband',
				icon: 'facebook'
			}
		]
	};
}

function formatGigLabel(gig: Gig) {
	const date = gig.date.toLocaleDateString('sv-SE', { day: 'numeric', month: 'numeric' });
	const label = `${date} (${gig.location}) ${gig.name}`;

	if (gig.link?.type === 'tickets') {
		return `Tickets: ${label}`;
	}

	return label;
}
