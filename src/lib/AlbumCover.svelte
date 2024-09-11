<script lang="ts">
	import { base } from '$app/paths';
	import { music } from '$lib/data/music';
	export let id: keyof typeof music;
</script>

<img class="cover" src={`${base}/music/covers/${id}.jpg`} alt={music[id].name} loading="lazy" />

<style>
	.cover {
		width: 100%;
		object-fit: cover;
	}
</style>
