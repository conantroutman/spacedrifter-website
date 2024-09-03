export interface MusicRelease {
	name: string;
	releaseDate: Date;
	type: 'album' | 'ep' | 'single';
	links: {
		spotify?: string;
		youtube?: string;
		apple?: string;
		bandcamp?: string;
	};
}

export const music: { [id: string]: MusicRelease } = {
	'when-the-colors-fade': {
		name: 'When the Colors Fade',
		releaseDate: new Date('2024-04-05'),
		type: 'album',
		links: {
			spotify: 'album/1KlxdWlt5UHHKhsLbnYeT5?si=uNk4GlaQRTCkb-KJE1wgQA'
		}
	},
	spacedrifter: {
		name: 'Spacedrifter',
		releaseDate: new Date('2021-01-01'),
		type: 'ep',
		links: {
			spotify: 'album/2Jjmg5YDVd9B49E7Wc7OdT?si=uMqD4b9TRHSkscfEY5Y6lA'
		}
	},
	'cabin-fever': {
		name: 'Cabin Fever',
		releaseDate: new Date('2020-06-12'),
		type: 'single',
		links: {
			spotify: 'album/5KAWeDP3sSPt7C1nn3UDEM?si=48jD0Gu8S_u-b34p6V9urg'
		}
	}
};