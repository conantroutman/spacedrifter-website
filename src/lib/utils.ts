import type { MusicRelease } from './data/music';

export function getReleaseTypeName(type: MusicRelease['type']) {
	switch (type) {
		case 'album':
			return 'Album';

		case 'ep':
			return 'EP';

		case 'single':
			return 'Single';

		default:
			return undefined;
	}
}
