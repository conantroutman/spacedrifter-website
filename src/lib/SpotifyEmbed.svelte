<script lang="ts">
	export let compact: boolean = true;

	const height = compact ? 152 : 380;
</script>

<iframe
	title="Spotify"
	src="https://open.spotify.com/embed/artist/4otyLOpxTJ6VdY0EEfjIcS?utm_source=generator&amp;theme=0"
	width="100%"
	{height}
	frameborder="0"
	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
	loading="lazy"
	style="border-radius: 12px;"
	on:load={() => console.log('iframe loaded')}
></iframe>

<style>
	iframe {
		background-color: rgb(40, 40, 40);
		border-radius: 12px;
	}
</style>
