<script lang="ts">
	import { music } from '$lib/data/music';
	export let id: keyof typeof music;
</script>

<img class="cover" src={`/music/covers/${id}.jpg`} alt={music[id].name} loading="lazy" />

<style>
	img {
		width: 100%;
		object-fit: cover;
	}
</style>
