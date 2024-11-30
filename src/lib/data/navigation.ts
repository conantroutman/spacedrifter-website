import { base } from '$app/paths';

interface NavigationLink {
	href: string;
	isExternal?: true;
	hasSubpages?: true;
	label: string;
}

export const links: NavigationLink[] = [
	{
		href: `${base}/`,
		label: 'Home'
	},
	{
		href: `${base}/music`,
		label: 'Music',
		hasSubpages: true
	},
	{
		href: `${base}/live`,
		label: 'Live'
	},
	{
		href: `${base}/contact`,
		label: 'Contact'
	},
	{
		href: 'https://spacedrifterband.bandcamp.com/merch',
		isExternal: true,
		label: 'Merch'
	}
];
