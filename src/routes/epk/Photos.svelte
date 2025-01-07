<script lang="ts">
	import ImageWithDownload from '$lib/ImageWithDownload.svelte';
	import ImageWrapper from '$lib/SEO/ImageWrapper.svelte';

	import PhotoEnhanced from '$lib/assets/epk/photo1.jpg?enhanced';
	import CoverEnhanced from '$lib/assets/epk/cover.png?enhanced';
	import Button from '$lib/Button.svelte';
	import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
</script>

<div class="list">
	<div class="item">
		<ImageWrapper>
			<enhanced:img src={PhotoEnhanced} alt="Press photo" />
		</ImageWrapper>
		<div class="download">
			<Button href="/epk/photo1.jpg" target="_self" download="Spacedrifter Press Photo.jpg"
				><DownloadIcon /> Download High Res</Button
			>
		</div>
	</div>

	<div class="item">
		<ImageWrapper>
			<enhanced:img src={CoverEnhanced} alt="When the Colors Fade" />
		</ImageWrapper>
		<div class="download">
			<Button href="/epk/cover.png" target="_self" download="When the Colors Fade Cover.png"
				><DownloadIcon /> Download High Res</Button
			>
		</div>
	</div>
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.item .download {
		display: block;
		margin-top: var(--spacing-sm);
	}
</style>
