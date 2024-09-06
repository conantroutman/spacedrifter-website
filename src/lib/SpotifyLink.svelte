<script lang="ts">
	export let spotifyId: string;
</script>

<a href={`https://open.spotify.com/${spotifyId}`} target="_blank"><slot /></a>
