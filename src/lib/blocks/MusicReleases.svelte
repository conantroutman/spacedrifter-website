<script>
	import { music } from '../data/music';
	import { getReleaseTypeName } from '../utils';
	import Heading from '../Heading.svelte';
	import AlbumCover from '../AlbumCover.svelte';
	import { base } from '$app/paths';

	const musicIds = Object.keys(music);

	const spotifyLinks = [
		'album/1KlxdWlt5UHHKhsLbnYeT5?si=uNk4GlaQRTCkb-KJE1wgQA',
		'album/2Jjmg5YDVd9B49E7Wc7OdT?si=U_plCM6vRSiWaLLV09MtwQ',
		'album/5KAWeDP3sSPt7C1nn3UDEM?si=qEV9zuHDRISwuehVA7sJyg'
	];
</script>

<div class="heading">
	<Heading level={2} centered>Releases</Heading>
</div>

<div class="grid">
	{#each musicIds as id}
		<div class="release-container">
			<a href={`${base}/music/${id}`}><AlbumCover {id} /></a>
			<div>{music[id].name}</div>
			<div class="description">
				<span class="year"
					>{music[id].releaseDate.toLocaleDateString(undefined, { year: 'numeric' })}</span
				>
				<span>{getReleaseTypeName(music[id].type)}</span>
			</div>
		</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2rem;
	}

	@media (width < 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.heading {
		margin-bottom: 2rem;
	}

	.release-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.description {
		text-align: center;
	}

	.year {
		font-weight: 600;
	}

	a {
		transition: 100ms ease-in-out;
	}

	a:hover {
		filter: brightness(1.1);
	}
</style>
