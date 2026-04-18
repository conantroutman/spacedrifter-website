<script lang="ts">
	import { onMount } from 'svelte';
	import type { IconType } from './types';

	export let type: IconType;

	let lazyIcon: any;

	onMount(() => {
		switch (type) {
			case 'bandcamp':
				lazyIcon = import('./BandcampIcon.svelte');
				break;
			case 'close':
				lazyIcon = import('./CloseIcon.svelte');
				break;
			case 'download':
				lazyIcon = import('./DownloadIcon.svelte');
				break;
			case 'facebook':
				lazyIcon = import('./FacebookIcon.svelte');
				break;
			case 'hamburger':
				lazyIcon = import('./HamburgerIcon.svelte');
				break;
			case 'instagram':
				lazyIcon = import('./InstagramIcon.svelte');
				break;
			case 'mail':
				lazyIcon = import('./MailIcon.svelte');
				break;
			case 'spotify':
				lazyIcon = import('./SpotifyIcon.svelte');
				break;
			case 'merch':
				lazyIcon = import('./MerchIcon.svelte');
				break;

			default:
				break;
		}
	});
</script>

{#if lazyIcon}
	{#await lazyIcon then { default: LazyIcon }}
		<LazyIcon />
	{/await}
{/if}
