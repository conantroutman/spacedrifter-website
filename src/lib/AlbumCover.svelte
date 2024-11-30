<script lang="ts">
	import { music } from '$lib/data/music';

	const coverImages = import.meta.glob('./assets/covers/*.jpg', {
		eager: true,
		query: { enhanced: true }
	});

	export let id: keyof typeof music;

	const coverImage = Object.entries(coverImages).find(([path]) => {
		const idFromPath = path.split('/').at(-1)?.replace('.jpg', '');
		return idFromPath === id;
	})?.[1] as any;
</script>

{#if coverImage}
	<div class="imageWrapper">
		<enhanced:img class="cover" src={coverImage.default} alt={music[id].name} loading="lazy" />
	</div>
{/if}

<style>
	.imageWrapper {
		aspect-ratio: 1/1;
		width: 100%;
	}

	:global(.imageWrapper > picture) {
		width: 100%;
		height: 100%;
	}

	.cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
