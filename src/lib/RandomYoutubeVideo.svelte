<script lang="ts">
	import { YouTube } from 'sveltekit-embed';
	import { youtubeVideos } from './data/youtubeVideos';

	const randomVideo = youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)];
	const youTubeId = new URL(randomVideo).searchParams.get('v');
</script>

{#if youTubeId}
	<YouTube {youTubeId} />
{/if}
