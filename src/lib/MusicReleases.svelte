<script>
	import { Spotify } from 'sveltekit-embed';
	import { music } from './data/music';
	import { getReleaseTypeName } from './utils';
	import Container from './Container.svelte';

	const musicIds = Object.keys(music);

	const spotifyLinks = [
		'album/1KlxdWlt5UHHKhsLbnYeT5?si=uNk4GlaQRTCkb-KJE1wgQA',
		'album/2Jjmg5YDVd9B49E7Wc7OdT?si=U_plCM6vRSiWaLLV09MtwQ',
		'album/5KAWeDP3sSPt7C1nn3UDEM?si=qEV9zuHDRISwuehVA7sJyg'
	];
</script>

<h2>Music</h2>

<div class="grid">
	{#each musicIds as id}
		<div class="release-container">
			<a href={`/music/${id}`}
				><img class="cover" src={`/music/covers/${id}.jpg`} alt={music[id].name} /></a
			>
			<div class="description">
				{music[id].releaseDate.toLocaleDateString(undefined, { year: 'numeric' })}
				{getReleaseTypeName(music[id].type)}
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

	.cover {
		width: 100%;
		object-fit: cover;
	}

	h2 {
		text-align: center;
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
</style>
