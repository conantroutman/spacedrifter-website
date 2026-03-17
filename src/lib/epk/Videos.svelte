<script lang="ts">
	import { YouTube } from 'sveltekit-embed';

	const videos = [
		'https://www.youtube.com/watch?v=692ifyWyDoc',
		'https://www.youtube.com/watch?v=CPCWTLtywtY'
	];
	const videoIds = videos
		.map((video) => new URL(video).searchParams.get('v'))
		.filter((id) => id !== null);
</script>

<div class="videos">
	{#each videoIds as id}
		<YouTube youTubeId={id} />
	{/each}
</div>

<style>
	.videos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
