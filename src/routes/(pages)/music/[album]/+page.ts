import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { music } from '$lib/data/music';

export const load: PageLoad = ({ params }) => {
	if (!music[params.album]) {
		error(404, 'Not found');
	}

	return music[params.album];
};
