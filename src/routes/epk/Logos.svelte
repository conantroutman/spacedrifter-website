<script>
	import Button from '$lib/Button.svelte';
	import DownloadIcon from '$lib/icons/DownloadIcon.svelte';
</script>

<div class="logo">
	<img src="/Logo.png" alt="Spacedrifter logo" />
</div>
<Button href="/epk/logos.zip" target="_self" download="Spacedrifter Logos.zip"
	><DownloadIcon /> Download Logo</Button
>

<style>
	.logo {
		padding: var(--spacing-xl);
		background-color: #131313;
		margin-bottom: var(--spacing-sm);
		border-radius: 0.25rem;
	}
</style>
